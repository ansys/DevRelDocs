# Example 17 - C++

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

	// NSC (bulk_volume)
	// This example recreates Non-sequential\Scattering\Bulk Scatter.zos

	//! [e17s01_cp]
	//Create a New File
	TheSystem->New(false);
	TheSystem->MakeNonSequential();
	//! [e17s01_cp]

	ISDMaterialCatalogDataPtr(TheSystem->SystemData->MaterialCatalogs)->AddCatalog("SCHOTT");

	//! [e17s02_cp]
	//Define path locations
	_bstr_t SamplesFolder = TheApplication->SamplesDir;
	_bstr_t SampleFile = TheApplication->SamplesDir + "\\API\\CPP\\e17_BulkScatter.zos";
	//TheSystem.LoadFile(SampleFile, false);
	TheSystem->SaveAs(SampleFile);
	//! [e17s02_cp]

	//! [e17s03_cp]
	//Non-sequential component editor
	INonSeqEditorPtr TheNCE = TheSystem->NCE;
	TheNCE = TheSystem->NCE;
	INCERowPtr Object_1 = TheNCE->InsertNewObjectAt(1);
	INCERowPtr Object_2 = TheNCE->InsertNewObjectAt(2);
	INCERowPtr Object_3 = TheNCE->GetObjectAt(3);
	//! [e17s03_cp]

	//! [e17s04_cp]
	//Source point
	IObjectTypeSettingsPtr oType_1 = Object_1->GetObjectTypeSettings(ObjectType_SourcePoint);
	Object_1->ChangeType(oType_1);
	IObjectSourcePointPtr Source1_data = Object_1->ObjectData;
	// Proterties NumberOfLayoutRays and NumberOfAnalysisRays belong to base interface IObjectSources. To use these properties, cast to IObjectSources first.
	IObjectSourcesPtr caseIObjSources = Source1_data;
	caseIObjSources->NumberOfLayoutRays = 3;
	caseIObjSources->NumberOfAnalysisRays = 1000000;
	//! [e17s04_cp]

	//! [e17s05_cp]
	//Rectangular Volume
	//Scattering properties
	//Draw:opacity set to 50%
	IObjectTypeSettingsPtr oType_2 = Object_2->GetObjectTypeSettings(ObjectType_RectangularVolume);
	Object_2->ChangeType(oType_2);
	Object_2->ZPosition = 2;
	Object_2->Material = "N-BK7";
	IObjectRectangularVolumePtr RectVolume2_data = Object_2->ObjectData;
	RectVolume2_data->X1HalfWidth = 12;
	RectVolume2_data->Y1HalfWidth = 12;
	RectVolume2_data->ZLength = 40;
	RectVolume2_data->X2HalfWidth = 12;
	RectVolume2_data->Y2HalfWidth = 12;
	INCEVolumePhysicsDataPtr RectVolume2_volphysdata = Object_2->VolumePhysicsData;
	RectVolume2_volphysdata->Model = VolumePhysicsModelType_AngleScattering;
	RectVolume2_volphysdata->ModelSettings->_S_AngleScattering->MeanPath = 5;
	RectVolume2_volphysdata->ModelSettings->_S_AngleScattering->Angle = 30;
	INCEDrawDataPtr RectVolume2_Drawdata = Object_2->DrawData;
	RectVolume2_Drawdata->Opacity = ZemaxOpacity_P50;
	//! [e17s05_cp]

	//! [e17s06_cp]
	//Detector Rectangle
	IObjectTypeSettingsPtr oType_3 = Object_3->GetObjectTypeSettings(ObjectType_DetectorRectangle);
	Object_3->RefObject = 2;
	Object_3->ZPosition = 42;
	Object_3->Material = "ABSORB";
	Object_3->ChangeType(oType_3);
	IObjectDetectorRectanglePtr DetRect3_data = Object_3->ObjectData;
	DetRect3_data->XHalfWidth = 15;
	DetRect3_data->YHalfWidth = 15;
	DetRect3_data->NumberXPixels = 25;
	DetRect3_data->NumberYPixels = 25;
	DetRect3_data->DataType = 0;
	DetRect3_data->Color = 2;
	DetRect3_data->Smoothing = 1;
	//! [e17s06_cp]

	TheSystem->SaveAs(SampleFile);

	//! [e17s07_cp]
	//Open a shaded model
	IA_Ptr analysis = TheSystem->Analyses->New_Analysis(AnalysisIDM_NSCShadedModel);
	analysis->Terminate();
	analysis->WaitForCompletion();
	IAS_Ptr analysisSettings = analysis->GetSettings();
	char cfgFile[L_tmpnam_s];
	tmpnam_s(cfgFile, L_tmpnam_s);
	// Save the current settings to the temp file
	analysisSettings->SaveTo(cfgFile);
	// make your modifications to it
	// MODIFYSETTINGS are defined in the ZPL help files: The Programming Tab > About the ZPL > Keywords
	analysisSettings->ModifySettings(cfgFile, "SHA_ROTX", "20");
	analysisSettings->ModifySettings(cfgFile, "SHA_ROTY", "-20");
	analysisSettings->ModifySettings(cfgFile, "SHA_ROTZ", "30");
	// now load in the modified settings
	analysisSettings->LoadFrom(cfgFile);
	// We don't need the temp file any more, so delete it
	remove(cfgFile);
	// Run the analysis with the new settings
	analysis->ApplyAndWaitForCompletion();
	//! [e17s07_cp]

	//! [e17s08_cp]
	//Open a detector viewer
	analysis = TheSystem->Analyses->New_Analysis(AnalysisIDM_DetectorViewer);
	analysisSettings = analysis->GetSettings();
	tmpnam_s(cfgFile, L_tmpnam_s);
	analysisSettings->SaveTo(cfgFile);
	analysisSettings->ModifySettings(cfgFile, "DVW_SHOW", "2");
	analysisSettings->ModifySettings(cfgFile, "DVW_SMOOTHING", "1");
	analysisSettings->LoadFrom(cfgFile);
	remove(cfgFile);
	analysis->ApplyAndWaitForCompletion();
	//! [e17s08_cp]

	//! [e17s09_cp]
	//Run a ray trace
	INSCRayTracePtr  NSCRayTrace = TheSystem->Tools->OpenNSCRayTrace();
	NSCRayTrace->SplitNSCRays = false;
	NSCRayTrace->ScatterNSCRays = true;
	NSCRayTrace->UsePolarization = false;
	NSCRayTrace->IgnoreErrors = true;
	NSCRayTrace->SaveRays = false;

	NSCRayTrace->ClearDetectors(0);
	// The method RunAndWaitForCompletion() and Close() are inehrited from base interface ISystemToolPtr. To use these methods, first cast to ISystemTool.
	ISystemToolPtr baseTool = NSCRayTrace;
	baseTool->RunAndWaitForCompletion();
	baseTool->Close();
	//! [e17s09_cp]


	TheSystem->SaveAs(SampleFile);
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
