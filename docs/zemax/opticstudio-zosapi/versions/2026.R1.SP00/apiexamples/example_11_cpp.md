# Example 11 - C++

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

	//! [e11s01_cp]
	// Create New Sequential File
	TheSystem->New(false);
	// Name File
	_bstr_t fileName = TheApplication->SamplesDir + "\\API\\CPP\\e11_basic_seq.zos";
	TheSystem->SaveAs(fileName);
	//! [e11s01_cp]

	//! [e11s02_cp]
	// Changing System Explorer Settings
	// Set Aperture
	ISystemDataPtr TheSystemData = TheSystem->SystemData;
	TheSystemData->Aperture->ApertureValue = 20;
	ISDMaterialCatalogDataPtr(TheSystem->SystemData->MaterialCatalogs)->AddCatalog("SCHOTT");


	// Set Apodization Type to Gaussian, and set apodization factor to 1
	TheSystemData->Aperture->ApodizationType = ZemaxApodizationType_Gaussian;
	TheSystemData->Aperture->ApodizationFactor = 1;
	// Set Wavelength
	TheSystemData->Wavelengths->SelectWavelengthPreset(WavelengthPreset_FdC_Visible);
	//! [e11s02_cp]


	//! [e11s03_cp]
	// Insert and Track New Surfaces, set STOP to surface 1
	ILensDataEditorPtr TheLDE = TheSystem->LDE;
	TheLDE->InsertNewSurfaceAt(1);
	TheLDE->InsertNewSurfaceAt(1);
	TheLDE->InsertNewSurfaceAt(1);
	ILDERowPtr Surf_1 = TheLDE->GetSurfaceAt(1);
	ILDERowPtr Surf_2 = TheLDE->GetSurfaceAt(2);
	ILDERowPtr Surf_3 = TheLDE->GetSurfaceAt(3);
	ILDERowPtr Surf_4 = TheLDE->GetSurfaceAt(4);
	Surf_1->IsStop = true;
	// Set some baseline parameters
	Surf_1->Thickness = 5;
	Surf_2->Thickness = 5;
	Surf_2->Radius = 100;
	Surf_2->Material = "N-BK7";
	Surf_3->Thickness = 3;
	Surf_3->Radius = -30;
	Surf_3->Material = "F2";
	Surf_4->Radius = -80;
	//! [e11s03_cp]

	//! [e11s04_cp]
	// Set system lens units to inches, scale all values with Scale Lens tool
	// For demonstration only. This file is new, so it has default units mm.
	ZemaxSystemUnits unit = TheSystemData->Units->LensUnits;
	// Open Scale Lens tool
	IScalePtr ScaleLens = TheSystem->Tools->OpenScale();
	// Apply Tool Settings
	ScaleLens->ScaleByUnits = true;
	ScaleLens->ScaleToUnit = ScaleToUnits_Inches;
	ISystemToolPtr baseTool = ScaleLens;
	baseTool->RunAndWaitForCompletion();
	baseTool->Close();
	//! [e11s04_cp]

	//! [e11s05_cp]
	// Add Rectangular Aperture to Surface 1
	// Get surface 1, create aperture settings
	Surf_1 = TheSystem->LDE->GetSurfaceAt(1);
	ISurfaceApertureTypePtr rAperture = Surf_1->ApertureData->CreateApertureTypeSettings(SurfaceApertureTypes_RectangularAperture);
	// Set aperture size
	rAperture->_S_RectangularAperture->XHalfWidth = 0.1;
	rAperture->_S_RectangularAperture->YHalfWidth = 0.1;
	// Apply aperture settings to surface 1
	Surf_1->ApertureData->ChangeApertureTypeSettings(rAperture);
	//! [e11s05_cp]

	//! [e11s06_cp]
	// Run Quick Focus
	IQuickFocusPtr QuickFocus = TheSystem->Tools->OpenQuickFocus();
	baseTool = QuickFocus;
	baseTool->RunAndWaitForCompletion();
	baseTool->Close();
	//! [e11s06_cp]

	//! [e11s07_cp]
	// Open Universal Plot of RMS Spot Size vs Surface3 Thickness
	IA_Ptr UnivPlot = TheSystem->Analyses->New_Analysis(AnalysisIDM_UniversalPlot1D);
	IAS_Ptr UnivPlot_Settings = UnivPlot->GetSettings();
	cout << "Universal Plot has analysis specific settings? " << UnivPlot->HasAnalysisSpecificSettings << endl;
	// Above is False; Universal Plot Settings must be changed via ModifySettings (changing a config (.cfg) file)
	_bstr_t cfg = TheApplication->ZemaxDataDir + "\\Configs\\UNI.CFG";
	UnivPlot_Settings->Save(); // Create new .cfg file, named "UNI.CFG" in \Configs\ folder
	UnivPlot_Settings->ModifySettings(cfg, "UN1_SURFACE", _bstr_t(TheSystem->LDE->NumberOfSurfaces - 2));
	UnivPlot_Settings->ModifySettings(cfg, "UN1_STARTVAL", _bstr_t(Surf_4->Thickness - 0.4 / 25.4));  // Change universal plot settings
	UnivPlot_Settings->ModifySettings(cfg, "UN1_STOPVAL", _bstr_t(Surf_4->Thickness + 0.1 / 25.4));
	UnivPlot_Settings->ModifySettings(cfg, "UN1_STEPS", _bstr_t(20));
	UnivPlot_Settings->ModifySettings(cfg, "UN1_PAR1", _bstr_t(10));
	UnivPlot_Settings->ModifySettings(cfg, "UN1_OPERAND", "RSRE");
	// For ModifySettings keycodes (UN1_STARTVAL, UN1_STEPS, etc.), see MODIFYSETTINGS page in ZPL>keywords help files
	// LoadFrom allows you to load any CFG file, not just default; not available via GUI
	UnivPlot_Settings->LoadFrom(cfg);
	//! [e11s07_cp]

	//! [e11s08_cp]
	// Open Spot Diagram to See Result!
	IA_Ptr newSpot = TheSystem->Analyses->New_StandardSpot();
	cout << "Spot has analysis specific settings? " << newSpot->HasAnalysisSpecificSettings << endl;  // True; no ModifySettings
	IAS_SpotPtr spotSet = newSpot->GetSettings();
	spotSet->RayDensity = 15;
	newSpot->ApplyAndWaitForCompletion();
	//! [e11s08_cp]

	// save!
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
