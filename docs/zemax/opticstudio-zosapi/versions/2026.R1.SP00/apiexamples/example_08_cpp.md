# Example 08 - C++

```cpp
// CppStandaloneApplication.cpp : Defines the entry point for the console application.
//

#include "stdafx.h"
#include <stdlib.h>
#include <stdio.h>
#include <iostream>
#include <string>
#include <ctime>
#include <functional>
#include <assert.h>
#include <math.h>
#include <fstream>



// Note - .tlh files will be generated from the .tlb files (above) once the project is compiled.
// Visual Studio will incorrectly continue to report IntelliSense error messages however until it is restarted.
#include "zosapi.h"

using namespace std;
using namespace ZOSAPI;
using namespace ZOSAPI_Interfaces;

void handleError(std::string msg);
void logInfo(std::string msg);
void finishStandaloneApplication(IZOSAPI_ApplicationPtr TheApplication);

int RunApplication()
{
	CoInitialize(nullptr);

	// Create the initial connection class
	IZOSAPI_ConnectionPtr TheConnection(__uuidof(ZOSAPI_Connection));


	// Attempt to create a Standalone connection
	IZOSAPI_ApplicationPtr TheApplication = TheConnection->CreateNewApplication();
	if (TheApplication == nullptr)
	{
		handleError("An unknown error occurred!");
		return -1;
	}

	// Check the connection status
	if (!TheApplication->IsValidLicenseForAPI)
	{
		handleError("License check failed!");
		return -1;
	}
	if (TheApplication->Mode != ZOSAPI_Mode::ZOSAPI_Mode_Server)
	{
		handleError("Standlone application was started in the incorrect mode!");
		return -1;
	}

	IOpticalSystemPtr TheSystem = TheApplication->PrimarySystem;

	// Add your custom code here...

	/*
	-. load \Samples\NS\Scattering\ABg scattering surface.zos
	1. delete object 3(specular ray blocking)
	2. insert detector polar positioned at same pos as object 2
		- retrieve obj 2 rotation matrix, match orientation
		- size = 20
		- remove material from obj 4
	-. run ray trace
	3/4. Save/Load Detector Data
	5/6. get detector data for detector polar
		- retrieve single value data with GetDetectorPolarData()
		- retrieve data grid (all pixels) with GetAllDetectorPolarData()
	7/8. get detector rectangle data
		- retrieve single value data with GetDetectorData()
		- retrieve data grid (all pixels) with GetAllDetectorData()
	9/10. get coherent detector data
		- retrieve single value data with GetCoherentData()
		- retrieve data grid (all pixels) with GetAllCoherentData()
	*/

	_bstr_t file = "\\Samples\\Non-Sequential\\Scattering\\Abg scattering surface.zos";
	_bstr_t DataDir = TheApplication->ZemaxDataDir;
	_bstr_t filepath = DataDir + file;
	TheSystem->LoadFile(filepath, false);
	CreateDirectory(_bstr_t(TheApplication->SamplesDir + "\\API"), NULL);
	CreateDirectory(_bstr_t(TheApplication->SamplesDir + "\\API\\CPP"), NULL);

	//! [e08s01_cp]
	// Delete unnecessary object from NSCE
	bool success = TheSystem->NCE->RemoveObjectAt(3);
	// Add detector polar, change radial size to 20mm
	INCERowPtr obj3 = TheSystem->NCE->InsertNewObjectAt(3);
	IObjectTypeSettingsPtr DetectorPolar = obj3->GetObjectTypeSettings(ObjectType::ObjectType_DetectorPolar);
	obj3->ChangeType(DetectorPolar);
	// Set the detector polar radial size to 20
	((IEditorRowPtr)obj3)->GetCellAt(12)->DoubleValue = 20; // cell 12 always corresponds to 'Par2' in the NSCE
	//! [e08s01_cp]

	//! [e08s02_cp]
	// Co-locate object 3 with object 2 (here, could alternatively use the 'Ref Object' flag)
	double R11, R12, R13, R21, R22, R23, R31, R32, R33, Xo, Yo, Zo;
	bool MatrixSuccess = TheSystem->NCE->GetMatrix(2, &R11, &R12, &R13, &R21, &R22, &R23, &R31, &R32, &R33, &Xo, &Yo, &Zo);
	obj3->XPosition = Xo;
	obj3->YPosition = Yo;
	obj3->ZPosition = Zo;
	// Conversion from rotation matrix to tilts described in KBA "Rotation matrix and Tilt About X/Y/Z in OpticStudio"
	obj3->TiltAboutX = atan2(-1 * R23, R33);
	obj3->TiltAboutY = asin(R13);
	obj3->TiltAboutZ = atan2(-1 * R12, R11);
	//! [e08s02_cp]

	// Remove the ABSORB material from object 4
	TheSystem->NCE->GetObjectAt(4)->Material = "";
	// Run ray trace
	INSCRayTracePtr RayTrace = TheSystem->Tools->OpenNSCRayTrace();
	RayTrace->ClearDetectors(0); // clear the old detector data!
	RayTrace->ScatterNSCRays = true;
	RayTrace->UsePolarization = false;
	RayTrace->SplitNSCRays = false;
	RayTrace->IgnoreErrors = true;
	((ISystemToolPtr)RayTrace)->RunAndWaitForCompletion();
	((ISystemToolPtr)RayTrace)->Close();


	// The next two steps are technically unnecessary in this case; since we just ran the ray trace,
	// the results are already there. But we demonstrate usage here anyways
	//! [e08s03_cp]
	// Save detector data -- allows ray trace results to be loaded later
	// For detector polar, the file type is .DDP; for detector rectangle, it is .DDR
	_bstr_t DetectorPolarFile = TheApplication->ZemaxDataDir + "\\Samples\\API\\CPP\\detector3polar.DDP";
	_bstr_t DetectorRectFile = TheApplication->ZemaxDataDir + "\\Samples\\API\\CPP\\detector4rect.DDR";
	TheSystem->NCE->SaveDetector(3, DetectorPolarFile);
	TheSystem->NCE->SaveDetector(4, DetectorRectFile);
	//! [e08s03_cp]

	//! [e08s04_cp]
	// Load detector data -- for analyzing previous ray trace results
	// For detector polar, the file type is .DDP; for detector rectangle, it's .DDR
	TheSystem->NCE->LoadDetector(3, TheApplication->ZemaxDataDir + "\\Samples\\API\\CPP\\detector3polar.DDP", false);
	TheSystem->NCE->LoadDetector(4, TheApplication->ZemaxDataDir + "\\Samples\\API\\CPP\\detector4rect.DDR", false);
	//! [e08s04_cp]


	//! [e08s05_cp]
	// Here we read in the detector polar data from ZOS
	// GetPolarDetectorData() is very similar to the MF operand NSDP;
	// can retrieve RMS (degrees), total power, chromatricity, etc. (see NSDP in OpticStudio help)
	// Note: GetPolarDetectorData() uses an enumeration for data type, shown here
	double DetPolarData_RadialRMS, DetPolarData_ChromX, DetPolarData_ChromY;
	PolarDetectorDataType DataFlag_Power = PolarDetectorDataType::PolarDetectorDataType_Power;
	PolarDetectorDataType DataFlag_ChromX = PolarDetectorDataType::PolarDetectorDataType_Cx;
	PolarDetectorDataType DataFlag_ChromY = PolarDetectorDataType::PolarDetectorDataType_Cy;
	bool successRadialRMS = TheSystem->NCE->GetPolarDetectorData(3, -4, DataFlag_Power, &DetPolarData_RadialRMS);
	bool successChromX = TheSystem->NCE->GetPolarDetectorData(3, 0, DataFlag_ChromX, &DetPolarData_ChromX);
	bool successChromY = TheSystem->NCE->GetPolarDetectorData(3, 0, DataFlag_ChromY, &DetPolarData_ChromY);
	//! [e08s05_cp]

	//! [e08s06_cp]
	// to retrieve the entire data array (power, tristim. X/Y/Z, etc. for each pixel)
	// can use GetAllPolarDetectorDataSafe(), or GetAllPolarDetectorData(). 
	// Safe arrays are cumbersome in C++, so use GetAllPolarDetectorData() here.
	// initialize output arrays
	// detector polar is known to have 181x180 pixels (the defaults); 181*180=32580
	double* DetPolarData_TriX = new double[32580];
	double* DetPolarData_TriY = new double[32580];
	double* DetPolarData_TriZ = new double[32580];
	// Note: GetAllPolarDetectorData() uses an enumeration for data type, shown here
	PolarDetectorDataType DataFlag_TriX = PolarDetectorDataType::PolarDetectorDataType_TriX;
	PolarDetectorDataType DataFlag_TriY = PolarDetectorDataType::PolarDetectorDataType_TriY;
	PolarDetectorDataType DataFlag_TriZ = PolarDetectorDataType::PolarDetectorDataType_TriZ;
	// now, retrieve the pixel data array
	bool SuccessTriX = TheSystem->NCE->GetAllPolarDetectorData(3, DataFlag_TriX, 32580, DetPolarData_TriX);
	bool SuccessTriY = TheSystem->NCE->GetAllPolarDetectorData(3, DataFlag_TriY, 32580, DetPolarData_TriY);
	bool SuccessTriZ = TheSystem->NCE->GetAllPolarDetectorData(3, DataFlag_TriZ, 32580, DetPolarData_TriZ);
	//! [e08s06_cp]

	//! [e08s07_cp]
	// Here we read in the detector rectangle data
	// GetDetectorData() is very similar to the operand NSDD
	// can retrieve RMS, # of rays, total power, etc.; data calculated over whole detector or individual pixel
	double StdDev;
	bool DetRectReturn = TheSystem->NCE->GetDetectorData(4, -4, 0, &StdDev); // obj=4, pix=-4, data=0
	//! [e08s07_cp]

	//! [e08s08_cp]
	// To retrieve the entire data array (flux, flux/area, etc.) for all pixel data,
	// can use GetAllDetectorDataSafe() or GetAllDetectorData(). Allows external pixel data analysis.
	// Safe arrays are cumbersome in C++, so use GetAllDetectorData() here.
	// The 'Data' inputs for these functions(parameter 2) can be found in
	// the API syntax help, under the listing for GetAllDetectorData().
	// Detector dimensions known to be 120x120 pixels
	double* DetRectangleData_Flux = new double[14400]; // total flux on each pixel
	double* DetRectangleData_FluxArea = new double[14400]; // flux/area on each pixel
	double* DetRectangleData_FluxSAP = new double[14400]; // flux/solid angle*area for each pixel
	// now, retrieve the pixel data array
	bool SuccessFlux = TheSystem->NCE->GetAllDetectorData(4, 0, 14400, DetRectangleData_Flux);
	bool SuccessFluxArea = TheSystem->NCE->GetAllDetectorData(4, 1, 14400, DetRectangleData_FluxArea);
	bool SuccessFluxSAP = TheSystem->NCE->GetAllDetectorData(4, 2, 14400, DetRectangleData_FluxSAP);
	//! [e08s08_cp]

	// Finally, let's read coherent data.
	// The coherent data is meaningless in this example, but it serves to demonstrate API usage and functionality
	// ![e08s09_cp]
	// Read in the detector rectangle coherent data
	// GetCoherentData() is very similar to the operand NSDC
	// Can retrieve real, imaginary, amplitude, power, with 'data' input
	// for pix = 0, get sum on detector; pix > 0 gives single pixel data
	double TotalAmp, TotalPower;
	bool SuccessAmp = TheSystem->NCE->GetCoherentData(4, 0, DetectorDataType::DetectorDataType_Amplitude, &TotalAmp); // obj=4, pix=0, data=2
	bool SuccessPower = TheSystem->NCE->GetCoherentData(4, 0, DetectorDataType::DetectorDataType_Power, &TotalPower); // obj=4, pix=0, data=3
	//! [e08s09_cp]

	// ![e08s10_cp]
	// Retrieve whole data array with GetAllCoherentDataSafe(), or GetAllCoherentData().
	// Safe arrays are cumbersome in C++, so use GetAllCoherentData() here.
	// The 'Data' input functions similarly to NSDC(real, imaginary, amplitude, power)
	// Note: divide coherent power by pixel area to get coherent irradiance.
	double* DetRectangleData_CoherentPower = new double[14400]; // coherent power on each pixel
	bool SuccessCoherentPow = TheSystem->NCE->GetAllCoherentData(4, DetectorDataType::DetectorDataType_Power, 14400, DetRectangleData_CoherentPower);
	// ![e08s10_cp]

	_bstr_t OutFile = "\\Samples\\API\\CPP\\CPP_08_NSCEDetectorData.zos";
	_bstr_t OutFilePath = DataDir + OutFile;
	TheSystem->SaveAs(OutFilePath);

	// from here, we can plot or analyze any detector data we want!

	// Clean up
	finishStandaloneApplication(TheApplication);


	return 0;
}

void handleError(std::string msg)
{
	throw new exception(msg.c_str());
}

void logInfo(std::string msg)
{
	printf("%s", msg.c_str());
}

void finishStandaloneApplication(IZOSAPI_ApplicationPtr TheApplication)
{
	// Note - TheApplication will close automatically when this application exits, so this isn't strictly necessary in most cases
	if (TheApplication != nullptr)
	{
		TheApplication->CloseApplication();
	}
}

int APIENTRY _tWinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPTSTR lpCmdLine, int nCmdShow)
{
	return RunApplication();
}

int _tmain(int argc, _TCHAR* argv[])
{
	return RunApplication();
}

```
