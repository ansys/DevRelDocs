# Example 25 - C++

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
#include <iomanip>
#include <vector>
#include <cstdlib>

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


	// Add your custom code here...

	// creates a new API directory
	CreateDirectory(_bstr_t(TheApplication->SamplesDir + "\\API"), NULL);
	CreateDirectory(_bstr_t(TheApplication->SamplesDir + "\\API\\CPP"), NULL);

	// Set up primary optical system
	IOpticalSystemPtr TheSystem = TheApplication->CreateNewSystem(SystemType_NonSequential);

	//! [e25s01_cp]
	// Initializes NCE and loads surfaces
	// Inserts objects
	INonSeqEditorPtr TheNCE = TheSystem->NCE;
	TheNCE->InsertNewObjectAt(1);
	//! [e25s01_cp]
	TheNCE->InsertNewObjectAt(1);
	TheNCE->InsertNewObjectAt(1);
	TheNCE->InsertNewObjectAt(1);

	INCERowPtr o1 = TheNCE->GetObjectAt(1);
	INCERowPtr o2 = TheNCE->GetObjectAt(2);
	INCERowPtr o3 = TheNCE->GetObjectAt(3);
	INCERowPtr o4 = TheNCE->GetObjectAt(4);
	INCERowPtr o5 = TheNCE->GetObjectAt(5);

	//! [e25s02_cp]
	// Changes Object Type
	o1->ChangeType(o1->GetObjectTypeSettings(ObjectType_SourceDiode));
	o2->ChangeType(o2->GetObjectTypeSettings(ObjectType_SourceDiode));
	o3->ChangeType(o3->GetObjectTypeSettings(ObjectType_NullObject));
	o4->ChangeType(o4->GetObjectTypeSettings(ObjectType_DiffractionGrating));
	o5->ChangeType(o5->GetObjectTypeSettings(ObjectType_DetectorColor));
	//! [e25s02_cp]

	// Sets positions & materials
	o3->ZPosition = 10;
	o3->TiltAboutX = 10;
	o4->RefObject = 3;
	o4->Material = "MIRROR";
	o5->YPosition = 8.45;
	o5->TiltAboutX = 40;

	// Sets parameters
	o1->GetObjectCell(ObjectColumn_Par7)->DoubleValue = 5;
	o2->GetObjectCell(ObjectColumn_Par7)->DoubleValue = 5;
	o4->GetObjectCell(ObjectColumn_Par10)->DoubleValue = 0.6;
	o4->GetObjectCell(ObjectColumn_Par11)->DoubleValue = 1;

	//! [e25s03_cp]
	// Changes sourcecolor to Blackbody, sets temperature, min / max wavelength
	o1->SourcesData->SourceColor = SourceColorMode_BlackBodySpectrum;
	o1->SourcesData->SourceColorSettings->_S_BlackBodySpectrum->TemperatureK = 6000;
	o1->SourcesData->SourceColorSettings->_S_BlackBodySpectrum->WavelengthFrom = 0.45;
	o1->SourcesData->SourceColorSettings->_S_BlackBodySpectrum->WavelengthTo = 0.65;
	//! [e25s03_cp]

	o2->SourcesData->SourceColor = SourceColorMode_BlackBodySpectrum;
	o2->SourcesData->SourceColorSettings->_S_BlackBodySpectrum->TemperatureK = 6000;
	o2->SourcesData->SourceColorSettings->_S_BlackBodySpectrum->SpectrumCount = 100;
	o2->SourcesData->SourceColorSettings->_S_BlackBodySpectrum->WavelengthFrom = 0.4;
	o2->SourcesData->SourceColorSettings->_S_BlackBodySpectrum->WavelengthTo = 0.7;

	//! [e25s04_cp]
	// Sets up the MCE, adds configuration & operands
	IMultiConfigEditorPtr TheMCE = TheSystem->MCE;
	TheMCE->AddConfiguration(false);
	TheMCE->AddOperand();
	//! [e25s04_cp]
	TheMCE->AddOperand();
	TheMCE->AddOperand();

	//! [e25s05_cp]
	// change MCE to NPAR, modifies the number of Layout Rays for a Source
	for (int a = 1; a < 5; a++)
		TheMCE->GetOperandAt(a)->ChangeType(MultiConfigOperandType_NPAR);

	TheMCE->GetOperandAt(1)->Param2 = 1;
	TheMCE->GetOperandAt(1)->Param3 = 1;
	TheMCE->GetOperandAt(1)->GetOperandCell(1)->DoubleValue = 200;
	TheMCE->GetOperandAt(1)->GetOperandCell(2)->DoubleValue = 0;
	//! [e25s05_cp]


	TheMCE->GetOperandAt(2)->Param2 = 1;
	TheMCE->GetOperandAt(2)->Param3 = 2;
	TheMCE->GetOperandAt(2)->GetOperandCell(1)->DoubleValue = 1000000;
	TheMCE->GetOperandAt(2)->GetOperandCell(2)->DoubleValue = 0;

	TheMCE->GetOperandAt(3)->Param2 = 2;
	TheMCE->GetOperandAt(3)->Param3 = 1;
	TheMCE->GetOperandAt(3)->GetOperandCell(1)->DoubleValue = 0;
	TheMCE->GetOperandAt(3)->GetOperandCell(2)->DoubleValue = 200;

	TheMCE->GetOperandAt(4)->Param2 = 2;
	TheMCE->GetOperandAt(4)->Param3 = 2;
	TheMCE->GetOperandAt(4)->GetOperandCell(1)->DoubleValue = 0;
	TheMCE->GetOperandAt(4)->GetOperandCell(2)->DoubleValue = 1000000;


	// Setup detector color
	double x_width = 1.5;
	double y_width = 1.5;
	int x_pixel = 500;
	int y_pixel = 500;


	o5->GetObjectCell(ObjectColumn_Par1)->DoubleValue = x_width;
	o5->GetObjectCell(ObjectColumn_Par2)->DoubleValue = y_width;
	o5->GetObjectCell(ObjectColumn_Par3)->IntegerValue = x_pixel;
	o5->GetObjectCell(ObjectColumn_Par4)->IntegerValue = y_pixel;

	for (int a = 1; a < TheMCE->NumberOfConfigurations + 1; a++)
		TheMCE->SetCurrentConfiguration(a);

	// Setup and run the ray trace
	INSCRayTracePtr NSCRayTrace = TheSystem->Tools->OpenNSCRayTrace();
	NSCRayTrace->ClearDetectors(0);
	NSCRayTrace->SplitNSCRays = false;
	NSCRayTrace->ScatterNSCRays = false;
	NSCRayTrace->UsePolarization = false;
	NSCRayTrace->IgnoreErrors = true;
	NSCRayTrace->SaveRays = false;
	ISystemToolPtr baseTool = NSCRayTrace;
	baseTool->RunAndWaitForCompletion();
	baseTool->Close();
	cout << "Finished ray trace\n";

	//! [e25s06_cp]
	// Creates a new detector viewer window, changes to true color
	IA_Ptr det = TheSystem->Analyses->New_Analysis(AnalysisIDM_DetectorViewer);
	IAS_DetectorViewerPtr det_settings = det->GetSettings();
	det_settings->ShowAs = DetectorViewerShowAsTypes_TrueColor;
	det->ApplyAndWaitForCompletion();

	// Pre-create the array to retrieve RGB pixels data
	float *rData = new float[(x_pixel * y_pixel)];
	float *gData = new float[(x_pixel * y_pixel)];
	float *bData = new float[(x_pixel * y_pixel)];
	//! [e25s06_cp]


	//! [e25s07_cp]
	// Loads RGB data into arrays
	det->GetResults()->GetDataGridRgb(0)->FillValues((x_pixel * y_pixel), rData, gData, bData);
	//! [e25s07_cp]


	// expoerts RGB array to text file.
	int Nx = det->GetResults()->GetDataGridRgb(0)->Nx;
	int Ny = det->GetResults()->GetDataGridRgb(0)->Ny;

	fstream textfile;
	string filepath = TheApplication->SamplesDir + "\\API\\CPP\\e25_source_spectrum_diffraction_grating.txt";
	textfile.open(filepath, fstream::trunc | ios::out);

	textfile << "First column = smallest y coordinate.\n";
	textfile << "First row = smallest x coordinate.\n\n";

	textfile << "R Channel Data:\n";
	for (int i = 0; i < Ny; i++)
	{
		for (int j = 0; j < Nx; j++)
		{
			textfile << setw(8) << left << rData[j + Nx*i] << "\t";
		}
		textfile << endl;
	}
	textfile << "\nG Channel Data:\n";
	for (int i = 0; i < Ny; i++)
	{
		for (int j = 0; j < Nx; j++)
		{
			textfile << setw(8) << left << gData[j + Nx*i] << "\t";
		}
		textfile << endl;
	}
	textfile << "\nB Channel Data:\n";
	for (int i = 0; i < Ny; i++)
	{
		for (int j = 0; j < Nx; j++)
		{
			textfile << setw(8) << left << bData[j + Nx*i] << "\t";
		}
		textfile << endl;
	}

#if defined(_DEBUG)
	// keeps console open when in debug mode
	system("pause");
#endif

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
