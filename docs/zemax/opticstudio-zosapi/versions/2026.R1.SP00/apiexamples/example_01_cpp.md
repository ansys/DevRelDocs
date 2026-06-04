# Example 01 - C++

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

	// Set up primary optical system
	_bstr_t sampleDir = TheApplication->SamplesDir;
	_bstr_t testFile = sampleDir + (_bstr_t)"\\API\\CPP\\e01_new_file_and_quickfocus.zos";

	//! [e01s01_cp]
	// Make new file
	TheSystem->New(false);
	TheSystem->SaveAs(testFile);
	//! [e01s01_cp]

	ISDMaterialCatalogDataPtr(TheSystem->SystemData->MaterialCatalogs)->AddCatalog("SCHOTT");

	//! [e01s02_cp]
	// Aperture
	ISystemDataPtr TheSystemData = TheSystem->SystemData;
	TheSystemData->Aperture->ApertureValue = 40;
	//! [e01s02_cp]

	//! [e01s03_cp]
	// Fields
	IFieldPtr Field_1 = TheSystemData->Fields->GetField(1);
	IFieldPtr NewField_2 = TheSystemData->Fields->AddField(0, 5.0, 1.0);
	//! [e01s03_cp]

	//! [e01s04_cp]
	// Wavelength preset
	bool slPreset = TheSystemData->Wavelengths->SelectWavelengthPreset(WavelengthPreset_d_0p587);
	//! [e01s04_cp]

	//! [e01s05_cp]
	// Lens data 
	ILensDataEditorPtr TheLDE = TheSystem->LDE;
	TheLDE->InsertNewSurfaceAt(2);
	TheLDE->InsertNewSurfaceAt(2);
	ILDERowPtr Surface_1 = TheLDE->GetSurfaceAt(1);
	ILDERowPtr Surface_2 = TheLDE->GetSurfaceAt(2);
	ILDERowPtr Surface_3 = TheLDE->GetSurfaceAt(3);
	//! [e01s05_cp]

	//! [e01s06_cp]
	// Changes surface cells in LDE
	Surface_1->Thickness = 50.0;
	Surface_1->Comment = "Stop is free to move";
	Surface_2->Radius = 100.0;
	Surface_2->Thickness = 10.0;
	Surface_2->Comment = "front of lens";
	Surface_2->Material = "N-BK7";
	Surface_3->Comment = "rear of lens";
	//! [e01s06_cp]

	//! [e01s07_cp]
	// Solver
	ISolveDataPtr Solver = Surface_3->RadiusCell->CreateSolveType(SolveType_FNumber);
	Solver->_S_FNumber->FNumber = 10;
	Surface_3->RadiusCell->SetSolveData(Solver);
	//! [e01s07_cp]

	//! [e01s08_cp]
	// QuickFocus
	IQuickFocusPtr quickFocus = TheSystem->Tools->OpenQuickFocus();
	quickFocus->Criterion = QuickFocusCriterion_SpotSizeRadial;
	quickFocus->UseCentroid = true;
	ISystemToolPtr baseTool = quickFocus;
	baseTool->RunAndWaitForCompletion();
	baseTool->Close();
	//! [e01s08_cp]

	//! [e01s09_cp]
	// Save and close
	TheSystem->Save();
	//! [e01s09_cp]

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
