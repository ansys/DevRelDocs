# Example 24 - C++

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
	ISDMaterialCatalogDataPtr catalog = TheSystem->SystemData->MaterialCatalogs;
	catalog->AddCatalog("Schott");
	_bstr_t sampleDir = TheApplication->SamplesDir;

	//! [e24s01_cp]
	// Initializes NCE and loads surfaces
	// Inserts objects
	INonSeqEditorPtr TheNCE = TheSystem->NCE;
	for (int a = 1; a <= 4; a++) TheNCE->InsertNewObjectAt(a);
	//! [e24s01_cp]
    
    ISDMaterialCatalogDataPtr(TheSystem->SystemData->MaterialCatalogs)->AddCatalog("SCHOTT");

	//! [e24s02_cp]
	// Gets reference to specific object
	ZOSAPI_Interfaces::INCERowPtr o1 = TheNCE->GetObjectAt(1);
	INCERowPtr o2 = TheNCE->GetObjectAt(2);
	INCERowPtr o3 = TheNCE->GetObjectAt(3);
	INCERowPtr o4 = TheNCE->GetObjectAt(4);
	INCERowPtr o5 = TheNCE->GetObjectAt(5);
	//! [e24s02_cp]

	//! [e24s03_cp]
	// Changes Object Type
	IObjectTypeSettingsPtr oType_1 = o1->GetObjectTypeSettings(ObjectType_SourceEllipse);
	o1->ChangeType(oType_1);
	o2->ChangeType((IObjectTypeSettingsPtr)o2->GetObjectTypeSettings(ObjectType_AsphericSurface2));
	o3->ChangeType((IObjectTypeSettingsPtr)o3->GetObjectTypeSettings(ObjectType_StandardLens));
	o4->ChangeType((IObjectTypeSettingsPtr)o4->GetObjectTypeSettings(ObjectType_DetectorColor));
	o5->ChangeType((IObjectTypeSettingsPtr)o5->GetObjectTypeSettings(ObjectType_DetectorRectangle));
	//! [e24s03_cp]

	//! [e24s04_cp]
	// Sets positions & materials
	TheNCE->GetObjectAt(2)->XPosition = 1.5;
	TheNCE->GetObjectAt(2)->ZPosition = 9.99;
	TheNCE->GetObjectAt(2)->Material = "ABSORB";
	//! [e24s04_cp]
	o3->YPosition = 1.5;
	o3->ZPosition = 8.99;
	o3->Material = "N-BK7";
	o4->ZPosition = 10;
	o5->RefObject = 4;
	o5->ZPosition = 1e-3;

	//! [e24s05_cp]
	// Sets layout rays based on parameter number
	TheNCE->GetObjectAt(1)->GetObjectCell(ObjectColumn_Par1)->IntegerValue = 100;
	// Sets analysis rays based on object data column
	IObjectSourcesPtr sourcedata = o1->ObjectData;
	sourcedata->NumberOfAnalysisRays = (int)1E6;
	//! [e24s05_cp]
	o1->GetObjectCell(ObjectColumn_Par10)->DoubleValue = 50;
	((IObjectSourceEllipsePtr)o1->ObjectData)->GaussGY = 50;
	((IObjectAsphericSurface2Ptr)o2->ObjectData)->MaxX = 0.5;
	((IObjectAsphericSurface2Ptr)o2->ObjectData)->MaxY = 1;
	((IObjectAsphericSurface2Ptr)o2->ObjectData)->IsRectangle = 1;
	((IObjectDetectorColorPtr)o4->ObjectData)->XHalfWidth = 8.223;
	((IObjectDetectorColorPtr)o4->ObjectData)->YHalfWidth = 2.565;
	((IObjectDetectorColorPtr)o4->ObjectData)->NumberXPixels = 200;
	((IObjectDetectorColorPtr)o4->ObjectData)->NumberYPixels = 150;

	double o5_x = 10.0;
	double o5_y = 12.23;
	((IObjectDetectorRectanglePtr)o5->ObjectData)->XHalfWidth = o5_x;
	((IObjectDetectorRectanglePtr)o5->ObjectData)->YHalfWidth = o5_y;
	((IObjectDetectorRectanglePtr)o5->ObjectData)->NumberXPixels = 99;
	((IObjectDetectorRectanglePtr)o5->ObjectData)->NumberYPixels = 100;

	//! [e24s06_cp]
	// Changes face type and coating properties
	TheNCE->GetObjectAt(3)->CoatScatterData->GetFaceData(0)->FaceIs = FaceIsType_Absorbing;
	TheNCE->GetObjectAt(3)->CoatScatterData->GetFaceData(1)->FaceIs = FaceIsType_ObjectDefault;
	TheNCE->GetObjectAt(3)->CoatScatterData->GetFaceData(1)->Coating = "I.50";
	//! [e24s06_cp]

	//! [e24s07_cp]
	// changes scatter profile on face
	IObjectScatteringSettingsPtr o3_scatter = TheNCE->GetObjectAt(3)->CoatScatterData->GetFaceData(2)->CreateScatterModelSettings(ObjectScatteringTypes::ObjectScatteringTypes_Lambertian);
	o3_scatter->_S_Lambertian->ScatterFraction = 0.5;
	TheNCE->GetObjectAt(3)->CoatScatterData->GetFaceData(2)->ChangeScatterModelSettings(o3_scatter);
	TheNCE->GetObjectAt(3)->CoatScatterData->GetFaceData(2)->NumberOfRays = 2;
	//! [e24s07_cp]

	//! [e24s08_cp]
	// Removes pixel interpolation for the detector
	o4->TypeData->UsePixelInterpolation = false;
	//! [e24s08_cp]

	//! [e24s09_cp]
	// Setup and run the ray trace
	INSCRayTracePtr NSCRayTrace = TheSystem->Tools->OpenNSCRayTrace();
	NSCRayTrace->SplitNSCRays = false;
	NSCRayTrace->ScatterNSCRays = true;
	NSCRayTrace->UsePolarization = false;
	NSCRayTrace->IgnoreErrors = true;
	NSCRayTrace->SaveRays = false;
	NSCRayTrace->ClearDetectors(0);

	ISystemToolPtr baseTool = NSCRayTrace;
	baseTool->RunAndWaitForCompletion();
	//! [e24s09_cp]

	// Reads in values from NCE for detector settings
	int obj = 4;
	double x_half = TheSystem->NCE->GetObjectAt(obj)->GetObjectCell(ObjectColumn_Par1)->DoubleValue;
	double y_half = TheSystem->NCE->GetObjectAt(obj)->GetObjectCell(ObjectColumn_Par2)->DoubleValue;
	double x_pixels = (double)TheSystem->NCE->GetObjectAt(obj)->GetObjectCell(ObjectColumn_Par3)->IntegerValue;
	double y_pixels = (double)TheSystem->NCE->GetObjectAt(obj)->GetObjectCell(ObjectColumn_Par4)->IntegerValue;

	//! [e24s10_cp]
	// Creates a new detector viewer analysis reference
	IA_Ptr d4 = TheSystem->Analyses->New_Analysis(AnalysisIDM::AnalysisIDM_DetectorViewer);

	IAS_DetectorViewerPtr d4_settings = d4->GetSettings();
	d4_settings->Detector->SetDetectorNumber(4);
	d4_settings->ShowAs = DetectorViewerShowAsTypes_TrueColor;
	d4->ApplyAndWaitForCompletion();

	IAR_Ptr d4_results = d4->GetResults();
	IAR_DataGridRgbPtr d4_raw = d4_results->GetDataGridRgb(0);
	//! [e24s10_cp]

	//! [e24s11_cp]
	// Creates pointer arrays for RGB data channels
	float *rData = new float[(x_pixels * y_pixels)];
	float *gData = new float[(x_pixels * y_pixels)];
	float *bData = new float[(x_pixels * y_pixels)];
	//! [e24s11_cp]

	//! [e24s12_cp]
	// Reads values from detector color raw data
	// Prints RGB data into single file
	d4_raw->FillValues((x_pixels * y_pixels), rData, gData, bData);
	//! [e24s12_cp]

	int Nx = d4_raw->Nx;
	int Ny = d4_raw->Ny;

	fstream textfile;
	string filepath = TheApplication->SamplesDir + "\\API\\CPP\\e24_nsc_detectors_rgb.txt";
	textfile.open(filepath, fstream::trunc | ios::out);

	textfile << "First column = smallest y coordinate.\n";
	textfile << "First row = smallest x coordinate.\n\n";

	textfile << "R Channel Data:\n";
	for (int i = 0; i < Ny; i++) {
		for (int j = 0; j < Nx; j++) {
			textfile << setw(8) << left << rData[j + Nx*i] << "\t";
		}
		textfile << endl;
	}
	textfile << "\nG Channel Data:\n";
	for (int i = 0; i < Ny; i++) {
		for (int j = 0; j < Nx; j++) {
			textfile << setw(8) << left << gData[j + Nx*i] << "\t";
		}
		textfile << endl;
	}
	textfile << "\nB Channel Data:\n";
	for (int i = 0; i < Ny; i++) {
		for (int j = 0; j < Nx; j++) {
			textfile << setw(8) << left << bData[j + Nx*i] << "\t";
		}
		textfile << endl;
	}

	textfile.close();

	//! [e24s13_cp]
	// Changes default values for Detector Viewer
	// Plots the Incoherent Irradiance in False Color
	IA_Ptr d5 = TheSystem->Analyses->New_Analysis(AnalysisIDM_DetectorViewer);
	IAS_DetectorViewerPtr d5_set = d5->GetSettings();
	d5_set->Detector->SetDetectorNumber(5);
	d5_set->ShowAs = DetectorViewerShowAsTypes_FalseColor;
	d5->ApplyAndWaitForCompletion();
	IAR_Ptr d5_results = d5->GetResults();

	// This is the easiest way to retrieve the data via COM.
	// Create the array locally and pass it to the API to fill.
	IAR_DataGridPtr gi = d5_results->GetDataGrid(0);
	auto gid = gi->ValueData;
	long cols = gid->Cols, rows = gid->Rows;

	// Create the array.  Note that if the array is too small, the application will crash when ReadData is called
	double *valuesAF = new double[cols * rows];

	gid->ReadData(cols * rows, valuesAF);
	long loop_ctr = 0;

	filepath = TheApplication->SamplesDir + "\\API\\CPP\\e24_nsc_detectors_falsecolor.txt";
	textfile.open(filepath, fstream::trunc | ios::out);
	for (long j = 0; j < rows; ++j) {
		for (long k = 0; k < cols; ++k) {
			textfile << valuesAF[loop_ctr++] << '\t';
		}
		textfile << endl;
	}
	textfile.close();
	delete[] valuesAF;
	//! [e24s13_cp]

	//! [e24s14_cp]
	// saves current system in memory
	TheSystem->SaveAs((_bstr_t)TheApplication->SamplesDir + "\\API\\CPP\\e24_nsc_detectors.zos");
	//! [e24s14_cp]

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
