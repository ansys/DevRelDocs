# Example 06 - C++

```cpp
// CppStandaloneApplication.cpp : Defines the entry point for the console application.

#include "stdafx.h"
#include <stdlib.h>
#include <stdio.h>
#include <iostream>
#include <string>
#include <ctime>
#include <functional>
#include <assert.h>
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
	CoInitialize(NULL);

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

	// creates a new API directory
	CreateDirectory(_bstr_t(TheApplication->SamplesDir + "\\API"), NULL);
	CreateDirectory(_bstr_t(TheApplication->SamplesDir + "\\API\\CPP"), NULL);

	//! [e06s01_cp]
	// Create new non- sequential file
	// Set up primary optical system
	TheSystem = TheApplication->CreateNewSystem(SystemType_NonSequential);
	INonSeqEditorPtr TheNCE = TheSystem->NCE;
	//! [e06s01_cp]

	//! [e06s02_cp]
	// inserts objects and changes type
	INCERowPtr o1 = TheNCE->GetObjectAt(1);
	INCERowPtr o2 = TheNCE->InsertNewObjectAt(2);
	o1->ChangeType(o1->GetObjectTypeSettings(ObjectType_SourcePoint));
	o2->ChangeType(o2->GetObjectTypeSettings(ObjectType_DetectorRectangle));
	//! [e06s02_cp]

	//! [e06s03_cp]
	// modify object's cell values in the NCE
	((IObjectSourcesPtr)o1->ObjectData)->NumberOfAnalysisRays = (int)1e6;
	((IObjectSourcesPtr)o1->ObjectData)->NumberOfLayoutRays = 10;
	((IObjectSourcePointPtr)o1->ObjectData)->ConeAngle = 2.5;

	o2->ZPosition = 1;
	((IObjectDetectorRectanglePtr)o2->ObjectData)->XHalfWidth = 0.1;
	((IObjectDetectorRectanglePtr)o2->ObjectData)->YHalfWidth = 0.1;
	((IObjectDetectorRectanglePtr)o2->ObjectData)->NumberXPixels = 100;
	((IObjectDetectorRectanglePtr)o2->ObjectData)->NumberYPixels = 100;
	//! [e06s03_cp]

	//! [e06s04_cp]
	// Setup and run the ray trace
	INSCRayTracePtr NSCRayTrace = TheSystem->Tools->OpenNSCRayTrace();
	NSCRayTrace->SplitNSCRays = false;
	NSCRayTrace->ScatterNSCRays = true;
	NSCRayTrace->UsePolarization = false;
	NSCRayTrace->IgnoreErrors = true;
	NSCRayTrace->SaveRays = false;
	NSCRayTrace->ClearDetectors(0);

	((ISystemToolPtr)NSCRayTrace)->RunAndWaitForCompletion();
	((ISystemToolPtr)NSCRayTrace)->Close();
	//! [e06s04_cp]

	int det = 2;
	// Export the data series to a text file
	fstream textfile;
	string filepath = TheApplication->SamplesDir + "\\API\\CPP\\e06_nsc_phase.txt";
	textfile.open(filepath, fstream::trunc | ios::out);

	// constants for extracting data from detector methods
	double pi = 3.1415926535897932;
	int index;
	int xpix = ((IObjectDetectorRectanglePtr)o2->ObjectData)->NumberXPixels;
	int ypix = ((IObjectDetectorRectanglePtr)o2->ObjectData)->NumberYPixels;

	//! [e06s05_cp]
	// extracts the irradiance data from detector
	double *irradiance = new double[xpix * ypix];
	TheNCE->GetAllDetectorData(det, 1, TheNCE->GetDetectorSize(det), irradiance);

	for (int i = 0; i < xpix; i++) {
		for (int j = 0; j < ypix; j++) {
			index = ((ypix - (i + 1)) * xpix + (j + 1));
			textfile << irradiance[index] << "\t";
		}
		textfile << "\n";
	}
	//! [e06s05_cp]

	textfile << "\n";

	//! [e06s06_cp]
	// Calculates phase data from Er & Ei
	// Create the array.  Note that if the array is too small, the application will crash when ReadData is called
	double *real = new double[xpix * ypix];
	double *imag = new double[xpix * ypix];
	double *phase = new double[xpix, ypix];

	TheNCE->GetAllCoherentData(det, DetectorDataType_Real, xpix * ypix, real);
	TheNCE->GetAllCoherentData(det, DetectorDataType_Imaginary, xpix * ypix, imag);

	for (int i = 0; i < xpix; i++) {
		for (int j = 0; j < ypix; j++) {
			index = ((ypix - (i + 1)) * xpix + (j + 1));
			phase[i, j] = atan2(imag[index], real[index]) * 180 / pi;
			textfile << phase[i, j] << "\t";
		}
		textfile << "\n";
	}
	//! [e06s06_cp]
	delete[] real;
	delete[] imag;

#if defined(_DEBUG)
	// keeps console open when in debug mode
	system("pause");
#endif

	textfile.close();

	TheSystem->SaveAs(TheApplication->SamplesDir + "\\API\\CPP\\e06_nsc_phase.zos");

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
