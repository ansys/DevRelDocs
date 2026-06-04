# Example 15 - C++

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

// removes warning for using getenv function
#pragma warning(disable:4996)

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

	//! [e15s01_cp]
	// Load a double gauss design sample file
	TheSystem->LoadFile(_bstr_t(TheApplication->SamplesDir + "\\Short course\\Optical System Design Using OpticStudio\\sc_dbga1.zos"), false);
	cout << "Double Gauss Design:" << endl;
	//! [e15s01_cp]

	//! [e15s02_cp]
	// Define path locations
	_bstr_t SamplesFolder = TheApplication->SamplesDir;
	_bstr_t SampleFile = TheApplication->SamplesDir + "\\API\\CPP\\e15_Seq_Optimization\\OptimizedFile.zos";
	CreateDirectory(_bstr_t(TheApplication->SamplesDir + "\\API\\CPP\\e15_Seq_Optimization"), NULL);
	TheSystem->SaveAs(SampleFile);
	//! [e15s02_cp]

	//! [e15s03_cp]
	// Define System Explorer
	// Define Aperture
	ISystemDataPtr SystExplorer = TheSystem->SystemData;
	SystExplorer->Aperture->ApertureType = ZemaxApertureType::ZemaxApertureType_EntrancePupilDiameter;
	SystExplorer->Aperture->ApertureValue = 20;
	//! [e15s03_cp]

	//! [e15s04_cp]
	// Add 3 fields
	IFieldPtr Field_1 = SystExplorer->Fields->GetField(1);
	IFieldPtr NewField_2 = SystExplorer->Fields->AddField(0, 5.0, 1.0);
	SystExplorer->Fields->SetFieldType(FieldType::FieldType_ParaxialImageHeight);
	SystExplorer->Fields->MakeEqualAreaFields(3, 21.6);
	//! [e15s04_cp]

	//! [e15s05_cp]
	// Add 3 wavelengths: F, d, C
	bool slPreset = SystExplorer->Wavelengths->SelectWavelengthPreset(WavelengthPreset::WavelengthPreset_FdC_Visible);
	//! [e15s05_cp]

	//! [e15s06_cp]
	// Open a shaded model
	IA_Ptr analysis = TheSystem->Analyses->New_Analysis(AnalysisIDM::AnalysisIDM_ShadedModel);
	analysis->Terminate();
	analysis->WaitForCompletion();
	IAS_Ptr settings = analysis->GetSettings();
	//need to use - #pragma warning(disable:4996)
	char* pUserprofile = getenv("Temp");
	_bstr_t cfgFile = _bstr_t(pUserprofile) + "\\sha.cfg";
	// Save the current settings to the temp file
	settings->SaveTo(cfgFile);
	// make your modifications to it
	// MODIFYSETTINGS are defined in the ZPL help files : The Programming Tab > About the ZPL > Keywords
	settings->ModifySettings(cfgFile, "SHA_ROTX", "90");
	settings->ModifySettings(cfgFile, "SHA_ROTY", "0");
	settings->ModifySettings(cfgFile, "SHA_ROTZ", "0");
	// now load in the modified settings
	settings->LoadFrom(cfgFile);
	// If you want to overwrite your default CFG, copy it after you are done modifying the settings :
	//_bstr_t CFG_fullname = _bstr_t(getenv("USERPROFILE")) + "\\Documents\\Zemax\\Configs\\POP.CFG";
	// copyfile(cfgFile, CFG_fullname) // generic psuedo code
	// We don't need the temp file any more, so delete it
	std::remove(cfgFile);
	// Run the analysis with the new settings
	analysis->ApplyAndWaitForCompletion();
	//! [e15s06_cp]

	//! [e15s07_cp]
	// remove all variables and add a F# solve on last surface radius
	ILensDataEditorPtr TheLDE = TheSystem->LDE;
	//IOpticalSystemTools
	IOpticalSystemToolsPtr tools = TheSystem->Tools;
	tools->RemoveAllVariables();
	ILDERowPtr Surface_Last = TheLDE->GetSurfaceAt(TheLDE->NumberOfSurfaces - 2);
	ISolveDataPtr Solver = Surface_Last->RadiusCell->CreateSolveType(SolveType::SolveType_FNumber);
	Solver->_S_FNumber->FNumber = 3.1415;
	Surface_Last->RadiusCell->SetSolveData(Solver);
	SampleFile = _bstr_t(TheApplication->SamplesDir) + "\\API\\\Seq_Optimization\\\OptimizedFile1.zos";
	TheSystem->SaveAs(SampleFile);
	//! [e15s07_cp]

	//! [e15s08_cp]
	// change BFL & run quick focus
	Surface_Last->Thickness = 40.0;
	IQuickFocusPtr QFocus = tools->OpenQuickFocus();
	QFocus->Criterion = QuickFocusCriterion::QuickFocusCriterion_SpotSizeRadial;
	QFocus->UseCentroid = true;
	ISystemToolPtr baseTool = QFocus;
	baseTool->RunAndWaitForCompletion();
	baseTool->Close();
	SampleFile = _bstr_t(TheApplication->SamplesDir) + "\\API\\CPP\\e15_Seq_Optimization\\OptimizedFile2.zos";
	TheSystem->SaveAs(SampleFile);
	//! [e15s08_cp]

	//! [e15s09_cp]
	// setup a few variables
	tools->SetAllRadiiVariable();
	ILDERowPtr Surface1 = TheLDE->GetSurfaceAt(1);
	ILDERowPtr Surface2 = TheLDE->GetSurfaceAt(2);
	ILDERowPtr Surface5 = TheLDE->GetSurfaceAt(5);
	ILDERowPtr Surface6 = TheLDE->GetSurfaceAt(6);
	ILDERowPtr Surface9 = TheLDE->GetSurfaceAt(9);
	ILDERowPtr Surface10 = TheLDE->GetSurfaceAt(10);
	ILDERowPtr Surface11 = TheLDE->GetSurfaceAt(11);
	//! [e15s09_cp]

	//! [e15s10_cp]
	// Thickness 2, 5, 6, 9, and 11 variable
	Surface2->ThicknessCell->MakeSolveVariable();
	Surface5->ThicknessCell->MakeSolveVariable();
	Surface6->ThicknessCell->MakeSolveVariable();
	Surface9->ThicknessCell->MakeSolveVariable();
	Surface11->ThicknessCell->MakeSolveVariable();
	//! [e15s10_cp]

	//! [e15s11_cp]
	// Thickness 10 pick up from 1
	Solver = Surface10->ThicknessCell->CreateSolveType(SolveType::SolveType_SurfacePickup);
	ISolveSurfacePickupPtr SolverPickup = Solver->_S_SurfacePickup;
	SolverPickup->Surface = 1;
	SolverPickup->ScaleFactor = 1;
	SolverPickup->Column = SurfaceColumn::SurfaceColumn_Thickness;
	Surface10->ThicknessCell->SetSolveData(Solver);
	SampleFile = _bstr_t(TheApplication->SamplesDir + "\\API\\CPP\\e15_Seq_Optimization\\OptimizedFile3.zos");
	TheSystem->SaveAs(SampleFile);
	//! [e15s11_cp]

	//! [e15s12_cp]
	// define merit function
	// load merit function

	IMeritFunctionEditorPtr TheMFE = TheSystem->MFE;
	// need to ensure that you have the Platform set as x64 and not Win32
	ISEQOptimizationWizardPtr OptWizard = TheMFE->SEQOptimizationWizard;
	// Optimize for smallest RMS Spot, which is "Data" = 1
	OptWizard->Data = 1;
	OptWizard->OverallWeight = 1;
	// Gaussian Quadrature with 3 rings(refers to index number = 2)
	OptWizard->Ring = 2;
	// Set air & glass boundaries
	OptWizard->IsGlassUsed = true;
	OptWizard->GlassMin = 3.0;
	OptWizard->GlassMax = 15.0;
	OptWizard->GlassEdge = 3.0;
	OptWizard->IsAirUsed = true;
	OptWizard->AirMin = 0.5;
	OptWizard->AirMax = 1000.0;
	OptWizard->AirEdge = 0.5;
	// And click OK!
	IWizardPtr baseToolWiz = OptWizard;
	baseToolWiz->Apply();
	_bstr_t mf_filename = _bstr_t(TheApplication->SamplesDir + "\\API\\CPP\\e15_Seq_Optimization\\RMS_Spot_Radius.mf");
	TheMFE->SaveMeritFunction(mf_filename);
	TheMFE->LoadMeritFunction(mf_filename);
	SampleFile = _bstr_t(TheApplication->SamplesDir + "\\API\\CPP\\e15_Seq_Optimization\\OptimizedFile4.zos");
	TheSystem->SaveAs(SampleFile);
	//! [e15s12_cp]

	//! [e15s13_cp]
	// Run local optimization and measure time
	// Local optimization until completion
	double clo = clock();
	ILocalOptimizationPtr LocalOpt = TheSystem->Tools->OpenLocalOptimization();
	// need to determine how to check to validity
	if (LocalOpt != nullptr) {
		LocalOpt->Algorithm = OptimizationAlgorithm::OptimizationAlgorithm_DampedLeastSquares;
		LocalOpt->Cycles = OptimizationCycles::OptimizationCycles_Automatic;
		LocalOpt->NumberOfCores = 8;
		cout << "Local Optimization..." << endl;
		cout << "Initial Merit Function  " + _bstr_t(LocalOpt->InitialMeritFunction) << endl;
		ISystemToolPtr baseToolLocal = LocalOpt;
		baseToolLocal->RunAndWaitForCompletion();
		cout << "Final Merit Function    " + _bstr_t(LocalOpt->CurrentMeritFunction) << endl;
		baseToolLocal->Close();
	}
	// Get the elapsed time.
	cout << "Time elapsed            " + _bstr_t((clock() - clo) / 1000) << endl;
	//! [e15s13_cp]


	//! [e15s14_cp]
	// run global search
	int GlobalOptimTimeInSeconds = 15;
	IGlobalOptimizationPtr GlobalOpt = TheSystem->Tools->OpenGlobalOptimization();
	if (GlobalOpt != nullptr) {
		GlobalOpt->Algorithm = OptimizationAlgorithm::OptimizationAlgorithm_DampedLeastSquares;
		GlobalOpt->NumberOfCores = 8;
		cout << "Global Optimization for " << GlobalOptimTimeInSeconds << " seconds..." << endl;
		cout << "Initial Merit Function  " + _bstr_t(GlobalOpt->InitialMeritFunction) << endl;
		GlobalOpt->NumberToSave = OptimizationSaveCount::OptimizationSaveCount_Save_10;
		ISystemToolPtr baseToolGlobal = GlobalOpt;
		baseToolGlobal->RunAndWaitWithTimeout(GlobalOptimTimeInSeconds);
		for (int j = 1; j <= 10; j++) {
			cout << _bstr_t(int(j)) + ": " + _bstr_t(GlobalOpt->CurrentMeritFunction(j)) << endl;
		}
		baseToolGlobal->Cancel();
		// wait for tool to stop running before closing
		//bool stillRunning = baseToolGlobal->IsRunning;
		//while (stillRunning) {
		//	stillRunning = baseToolGlobal->IsRunning;
		//}
		baseToolGlobal->WaitForCompletion();
		baseToolGlobal->Close();
	}
	//! [e15s14_cp]

	//! [e15s15_cp]
	// run hammer optimization
	int HammerOptimTimeInSeconds = 15;
	IHammerOptimizationPtr HammerOpt = TheSystem->Tools->OpenHammerOptimization();
	if (HammerOpt != nullptr) {
		HammerOpt->Algorithm = OptimizationAlgorithm::OptimizationAlgorithm_DampedLeastSquares;
		HammerOpt->NumberOfCores = 8;
		cout << "Hammer Optimization for " + _bstr_t(HammerOptimTimeInSeconds) + " seconds..." << endl;
		cout << "Initial Merit Function  " + _bstr_t(HammerOpt->InitialMeritFunction) << endl;
		ISystemToolPtr baseToolHammer = HammerOpt;
		baseToolHammer->RunAndWaitWithTimeout(HammerOptimTimeInSeconds);
		cout << "Final Merit Function    " + _bstr_t(HammerOpt->CurrentMeritFunction) << endl;
		baseToolHammer->Cancel();
		baseToolHammer->WaitForCompletion();
		baseToolHammer->Close();
	}
	//! [e15s15_cp]

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
