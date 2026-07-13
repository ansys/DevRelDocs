# Example 14 - C++

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
#if !_WIN64
	int msgboxID = MessageBox(
		NULL,
		(LPCWSTR)L"This example needs to be run as a x64 configuration.  Wizards are not supported via COM in 32-bit mode.",
		(LPCWSTR)L"ZOS-API Error",
		MB_ICONERROR | MB_OK
	);
	return 0;
#endif
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

	// creates a new API directory
	CreateDirectory(_bstr_t(TheApplication->SamplesDir + "\\API"), NULL);
	CreateDirectory(_bstr_t(TheApplication->SamplesDir + "\\API\\CPP"), NULL);

	//! [e14s01_cp]
	// Open Double Gauss sample file
	_bstr_t samplesFolder = TheApplication->SamplesDir;
	_bstr_t DGfile = samplesFolder + (_bstr_t)"\\Sequential\\Objectives\\Double Gauss 28 degree field.zos";
	TheSystem->LoadFile(DGfile, false);
	//! [e14s01_cp]

	//! [e14s02_cp]
	// Set up the Tolerance Wizard and run it
	// Need to make sure you have x64 set to the platform, otherwise COM will throw an error
	ZOSAPI_Interfaces::ISEQToleranceWizardPtr tWiz = TheSystem->TDE->SEQToleranceWizard;
	// Specify surface tolerances
	tWiz->ToleranceSettings->SurfaceRadius = 0.1;
	tWiz->ToleranceSettings->SurfaceThickness = 0.1;
	tWiz->ToleranceSettings->SurfaceDecenterX = 0.1;
	tWiz->ToleranceSettings->SurfaceDecenterY = 0.1;
	tWiz->ToleranceSettings->SurfaceTiltX = 0.2;
	tWiz->ToleranceSettings->SurfaceTiltY = 0.2;
	// Specify element tolerances
	tWiz->ToleranceSettings->ElementDecenterX = 0.1;
	tWiz->ToleranceSettings->ElementDecenterY = 0.1;
	tWiz->ToleranceSettings->ElementTiltXDegrees = 0.2;
	tWiz->ToleranceSettings->ElementTiltYDegrees = 0.2;
	// Specify tolerances not to be used
	tWiz->ToleranceSettings->IsSurfaceSandAIrregularityUsed = false;
	tWiz->ToleranceSettings->IsIndexUsed = false;
	tWiz->ToleranceSettings->IsIndexAbbePercentageUsed = false;
	// Select OK
	tWiz->ToleranceSettings->CommonSettings->OK();
	//! [e14s02_cp]

	//! [e14s03_cp]
	// Create a "Double Gauss" folder in the Samples folder
	_bstr_t dirLoc = samplesFolder + (_bstr_t)"\\API\\CPP\\e14_seq_tolerance";
	CreateDirectory(dirLoc, NULL);
	// Save a copy of the file in the Double Gauss folder
	_bstr_t fileNameSeq = dirLoc + (_bstr_t)"\\Double_Gauss_(seq).zos";
	TheSystem->SaveAs(fileNameSeq);
	//! [e14s03_cp]

	//! [e14s04_cp]
	// Set up the Tolerancing analysis and run it
	ZOSAPI_Interfaces::ITolerancingPtr tol = TheSystem->Tools->OpenTolerancing();
	// Select Sensitivity mode
	tol->SetupMode = ZOSAPI_Interfaces::SetupModes_Sensitivity;
	// Select Criterion and related settings 
	tol->Criterion = ZOSAPI_Interfaces::Criterions_RMSSpotRadius;
	tol->CriterionSampling = 3;
	tol->CriterionComp = ZOSAPI_Interfaces::CriterionComps_OptimizeAll_DLS;
	tol->CriterionCycle = 2;
	tol->CriterionField = ZOSAPI_Interfaces::CriterionFields_UserDefined;
	// Select the number or MC runs and files to save
	tol->NumberOfRuns = 20;
	tol->NumberToSave = 20;
	// Run the Tolerancing analysis
	ZOSAPI_Interfaces::ISystemToolPtr baseTool = tol;
	baseTool->RunAndWaitForCompletion();
	baseTool->Close();
	//! [e14s04_cp]

	//! [e14s05_cp]
	// Convert file to Non-sequential mode
	ZOSAPI_Interfaces::IConvertToNSCGroupPtr convertNSmode = TheSystem->Tools->OpenConvertToNSCGroup();
	convertNSmode->ConvertFileToNSC = true;
	ZOSAPI_Interfaces::ISystemToolPtr baseTool2 = convertNSmode;
	baseTool2->RunAndWaitForCompletion();
	baseTool2->Close();
	// Save the Non-sequential file to the Double Gauss folder
	_bstr_t fileNameNS = dirLoc + (_bstr_t)"\\Double_Gauss_(NS).zos";
	TheSystem->SaveAs(fileNameNS);
	//! [e14s05_cp]    

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
