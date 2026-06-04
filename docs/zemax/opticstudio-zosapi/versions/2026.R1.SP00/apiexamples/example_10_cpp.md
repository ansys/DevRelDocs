# Example 10 - C++

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

	//! [e10s01_cp]
	// Open File, Save to New Name
	_bstr_t file = "\\Non-Sequential\\Ray Splitting\\Beam splitter.zos";
	TheSystem->LoadFile(TheApplication->SamplesDir + file, false);
	TheSystem->SaveAs(TheApplication->SamplesDir + "\\API\\CPP\\e10_NSC_ray_trace.zos");
	//! [e10s01_cp]

	//! [e10s02_cp]
	// Run an NSC Ray Trace, Save .zrd file
	INSCRayTracePtr NSCRayTrace = TheSystem->Tools->OpenNSCRayTrace();  // Open NSC RayTrace tool
	// Clear all detectors
    NSCRayTrace->ClearDetectors(0);  
    // Set up RayTrace tool
	NSCRayTrace->IgnoreErrors = true;
	NSCRayTrace->SaveRays = true;
	NSCRayTrace->SaveRaysFile = "e10_API_RayTrace.ZRD";  // Saves to same directory as lens file
	ISystemToolPtr baseTool = NSCRayTrace;
	baseTool->RunAndWaitForCompletion();
	baseTool->Close();
	//! [e10s02_cp]

	//! [e10s03_cp]
	// Open Detector Viewer, view previously saved .zrd file
	IA_Ptr DetectorView = TheSystem->Analyses->New_DetectorViewer();
	IAS_DetectorViewerPtr DetectorView_Settings = DetectorView->GetSettings();
	DetectorView_Settings->RayDatabaseFilename = "e10_API_Raytrace.ZRD";
	DetectorView_Settings->ShowAs = DetectorViewerShowAsTypes_FalseColor;
	// Detector will only display rays which hit object 2 exactly 4 times
	DetectorView_Settings->Filter = "X_HIT(2, 4)";
	// Apply Settings to Detector Viewer
	DetectorView->ApplyAndWaitForCompletion();  
	//! [e10s03_cp]

	//! [e10s04_cp]
	// Retrieve detector data and detector information
	INonSeqEditorPtr TheNCE = TheSystem->NCE;
	double total_hits, total_flux;
	bool hits_bool_return, flux_bool_return, dims_bool_return;
	unsigned long X_detectorDims, Y_detectorDims;
	hits_bool_return = TheNCE->GetDetectorData(4, -3, 0, &total_hits);  // Object Number=4, Pix -3 & Data=0 (total hits)
	flux_bool_return = TheNCE->GetDetectorData(4, 0, 0, &total_flux);  // Object Number=4, Pix=0 & Data=0 (total flux)
	dims_bool_return = TheNCE->GetDetectorDimensions(4, &X_detectorDims, &Y_detectorDims);  // get number of pixels in X, Y
	cout << "total hits  = " << total_hits << "\n" << "total flux =  " << total_flux << endl;

	int length = X_detectorDims * Y_detectorDims;
	double *pix = new double[length];  // Create array to store flux data for each pixel
	bool pix_bool;
	for (int i = 0; i < length; i++) // loop through pixels, store value in pix
	{
		pix_bool = TheNCE->GetDetectorData(4, i, 0, &pix[i]);
	}
	//! [e10s04_cp]

	//! [e10s05_cp]
	// Save Ray Path Analysis to Text File
	if (TheApplication->LicenseStatus == ZOSAPI_Interfaces::LicenseStatusType::LicenseStatusType_PremiumEdition) {
		IA_Ptr RayPath = TheSystem->Analyses->New_Analysis(AnalysisIDM_PathAnalysis);
		ZOSAPI_Interfaces::IAS_PathAnalysisPtr RayPath_settings = RayPath->GetSettings();
		RayPath_settings->RayDatabaseFile = "e10_API_RayTrace.ZRD";
		RayPath->ApplyAndWaitForCompletion();

		IAR_Ptr Rays = RayPath->GetResults();
		Rays->GetTextFile(TheApplication->SamplesDir + "\\API\\CPP\\e10_RayPathAnalysis.txt");
	}
	//! [e10s05_cp]

	// Save!
	TheSystem->Save();
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
