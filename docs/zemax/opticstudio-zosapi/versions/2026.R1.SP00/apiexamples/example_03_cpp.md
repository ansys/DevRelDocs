# Example 03 - C++

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

bool fileExists(const wchar_t* name) {
	FILE *file;
	errno_t err = _wfopen_s(&file, name, L"r");
	if (err == 0) {
		fclose(file);
		return true;
	} else {
		return false;
	}
}

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
	TheSystem = TheApplication->PrimarySystem;
	_bstr_t sampleDir = TheApplication->SamplesDir;

	//! [e03s01_cp]
	// Open file
	_bstr_t testFile = sampleDir + (_bstr_t)"\\API\\CPP\\e01_new_file_and_quickfocus.zos";
	if (!fileExists(testFile)) {
		cout << "You need to run Example 01 before running this example" << endl;
#if defined(_DEBUG)
	// keeps console open when in debug mode
	system("pause");
#endif
		return false;
	}
	TheSystem->LoadFile(testFile, false);
	_bstr_t testFile2 = sampleDir + (_bstr_t)"\\API\\CPP\\e03_open_file_and_optimise.zos";
	TheSystem->SaveAs(testFile2);
	//! [e03s01_cp]

	//! [e03s02_cp]
	// Get Surfaces
	ILensDataEditorPtr TheLDE = TheSystem->LDE;
	ILDERowPtr Surface_1 = TheLDE->GetSurfaceAt(1);
	ILDERowPtr Surface_2 = TheLDE->GetSurfaceAt(2);
	ILDERowPtr Surface_3 = TheLDE->GetSurfaceAt(3);
	//! [e03s02_cp]

	//! [e03s03_cp]
	// Make thicknesses and radii variable
	Surface_1->ThicknessCell->MakeSolveVariable();
	Surface_2->ThicknessCell->MakeSolveVariable();
	Surface_2->RadiusCell->MakeSolveVariable();
	Surface_3->ThicknessCell->MakeSolveVariable();
	//! [e03s03_cp]

	//! [e03s04_cp]
	// Merit functions
	IMeritFunctionEditorPtr TheMFE = TheSystem->MFE;
	IMFERowPtr Operand_1 = TheMFE->GetOperandAt(1);
	Operand_1->ChangeType(MeritOperandType_ASTI);
	Operand_1->Target = 0.0;
	Operand_1->Weight = 10.0;
	//! [e03s04_cp]

	IMFERowPtr Operand_2 = TheMFE->InsertNewOperandAt(2);
	Operand_2->ChangeType(MeritOperandType_COMA);
	Operand_2->Target = 0.0;
	Operand_2->Weight = 1.0;
	// Air min/max
	IMFERowPtr Operand_3 = TheMFE->AddOperand();
	Operand_3->ChangeType(MeritOperandType_MNCA);
	Operand_3->Target = 0.5;
	Operand_3->Weight = 1.0;
	IEditorRowPtr castRow = Operand_3;
	castRow->GetCellAt(2)->IntegerValue = 1;
	castRow->GetCellAt(3)->IntegerValue = 3;
	IMFERowPtr Operand_4 = TheMFE->AddOperand();
	Operand_4->ChangeType(MeritOperandType_MXCA);
	Operand_4->Target = 1000;
	Operand_4->Weight = 1.0;
	castRow = Operand_4;
	castRow->GetCellAt(2)->IntegerValue = 1;
	castRow->GetCellAt(3)->IntegerValue = 3;
	IMFERowPtr Operand_5 = TheMFE->AddOperand();
	Operand_5->ChangeType(MeritOperandType_MNEA);
	Operand_5->Target = 0.5;
	Operand_5->Weight = 1.0;
	castRow = Operand_5;
	castRow->GetCellAt(2)->IntegerValue = 1;
	castRow->GetCellAt(3)->IntegerValue = 3;
	// Material min/max
	IMFERowPtr Operand_6 = TheMFE->AddOperand();
	Operand_6->ChangeType(MeritOperandType_MNCG);
	Operand_6->Target = 3.0;
	Operand_6->Weight = 1.0;
	castRow = Operand_6;
	castRow->GetCellAt(2)->IntegerValue = 1;
	castRow->GetCellAt(3)->IntegerValue = 3;
	IMFERowPtr Operand_7 = TheMFE->AddOperand();
	Operand_7->ChangeType(MeritOperandType_MXCG);
	Operand_7->Target = 15.0;
	Operand_7->Weight = 1.0;
	castRow = Operand_7;
	castRow->GetCellAt(2)->IntegerValue = 1;
	castRow->GetCellAt(3)->IntegerValue = 3;
	IMFERowPtr Operand_8 = TheMFE->AddOperand();
	Operand_8->ChangeType(MeritOperandType_MNEG);
	Operand_8->Target = 3.0;
	Operand_8->Weight = 1.0;
	castRow = Operand_8;
	castRow->GetCellAt(2)->IntegerValue = 1;
	castRow->GetCellAt(3)->IntegerValue = 3;

	//! [e03s05_cp]
	// Local optimisation till completion
	ILocalOptimizationPtr LocalOpt = TheSystem->Tools->OpenLocalOptimization();
	LocalOpt->Algorithm = OptimizationAlgorithm_DampedLeastSquares;
	LocalOpt->Cycles = OptimizationCycles_Automatic;
	LocalOpt->NumberOfCores = 8;
	ISystemToolPtr baseTool = LocalOpt;
	baseTool->RunAndWaitForCompletion();
	baseTool->Close();
	//! [e03s05_cp]

	//! [e03s06_cp]
	// Hammer for 10 seconds
	IHammerOptimizationPtr HammerOpt = TheSystem->Tools->OpenHammerOptimization();
	baseTool = HammerOpt;
	baseTool->RunAndWaitWithTimeout(10);	
	baseTool->Cancel();
	baseTool->WaitForCompletion();
	baseTool->Close();
	//! [e03s06_cp]

	// Save and close
	TheSystem->Save();
	
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
