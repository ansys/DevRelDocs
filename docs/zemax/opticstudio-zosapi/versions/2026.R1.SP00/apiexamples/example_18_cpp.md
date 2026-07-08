# Example 18 - C++

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

	// creates new directory
	CreateDirectory(TheApplication->SamplesDir + "\\API", NULL);
	CreateDirectory(TheApplication->SamplesDir + "\\API\\CPP", NULL);

	TheSystem->LoadFile(TheApplication->SamplesDir + "\\Sequential\\Objectives\\Double Gauss 28 degree field.zos", false);

	// Get interface of the Multi-Configuration Editor
	IMultiConfigEditorPtr TheMCE = TheSystem->MCE;
	//! [e18s01_cp]
	// Add two configurations (totally 3)
	TheMCE->AddConfiguration(false);
	TheMCE->AddConfiguration(false);
	//! [e18s01_cp]
    
	//! [e18s02_cp]
	// Add one operand (totally 2)
	TheMCE->AddOperand();
	//! [e18s02_cp]

	//! [e18s03_cp]
	// Get interface of each operand
	IMCERowPtr MCOperand1 = TheMCE->GetOperandAt(1);
	IMCERowPtr MCOperand2 = TheMCE->GetOperandAt(2);
	// Change both operands' type to THIC
	MCOperand1->ChangeType(MultiConfigOperandType_THIC);
	MCOperand2->ChangeType(MultiConfigOperandType_THIC);
	//! [e18s03_cp]

	//! [e18s04_cp]
	// Set parameters of operands
	// If the type of operand is THIC, the first parameter here means surface number
	MCOperand1->Param1 = 0;
	MCOperand2->Param1 = 11;
	//! [e18s04_cp]

	//! [e18s05_cp]
	// Set values of opeand for each configurations
	MCOperand1->GetOperandCell(1)->DoubleValue = 10000.0;
	MCOperand1->GetOperandCell(2)->DoubleValue = 5000.0;
	MCOperand1->GetOperandCell(3)->DoubleValue = 1000.0;
	//! [e18s05_cp]
    
    //! [e18s06_cp]
	// Refocus for each configuration
	IQuickFocusPtr quickfocus = TheSystem->Tools->OpenQuickFocus();
	ISystemToolPtr baseTool = quickfocus;
	TheMCE->SetCurrentConfiguration(1);
	baseTool->RunAndWaitForCompletion();
	TheMCE->SetCurrentConfiguration(2);
	baseTool->RunAndWaitForCompletion();
	TheMCE->SetCurrentConfiguration(3);
	baseTool->RunAndWaitForCompletion();
    //! [e18s06_cp]
    
	TheSystem->SaveAs(TheApplication->SamplesDir + "\\API\\CPP\\e18_Double_Gauss_28_degree_field_MultiConfig.zos");

	//! [e18s07_cp]
	// An exmple of manually "Make Thermal"
	TheSystem->LoadFile(TheApplication->SamplesDir + "\\Sequential\\Objectives\\Doublet.zos", false);
	// Add 1 configuration (totally 2)
	TheMCE->AddConfiguration(false);
	// Add 12 operand (totally 13)
	for (int i = 0; i < 12; i++)
		TheMCE->AddOperand();

	// Create an operand type array and later we will input the array into MCE by a for loop
	MultiConfigOperandType *operandtype = new MultiConfigOperandType[13]{
		MultiConfigOperandType_TEMP,
		MultiConfigOperandType_PRES,
		MultiConfigOperandType_CRVT,
		MultiConfigOperandType_THIC,
		MultiConfigOperandType_GLSS,
		MultiConfigOperandType_SDIA,
		MultiConfigOperandType_CRVT,
		MultiConfigOperandType_THIC,
		MultiConfigOperandType_GLSS,
		MultiConfigOperandType_SDIA,
		MultiConfigOperandType_CRVT,
		MultiConfigOperandType_THIC,
		MultiConfigOperandType_SDIA };

	// Set parameter 1 for each config operand
	int *param1value = new int[11]{ 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3 };
	for (int i = 0; i < 11; i++)
		TheMCE->GetOperandAt(i + 3)->Param1 = param1value[i];

	// Set type for each config operand
	for (int i = 0; i < 13; i++)
		TheMCE->GetOperandAt(i + 1)->ChangeType(operandtype[i]);

	// Set Thermal Pickup solves
	ISolveDataPtr thermalpickupsolve = TheMCE->GetOperandAt(1)->GetOperandCell(1)->CreateSolveType(SolveType_ThermalPickup);
	thermalpickupsolve->_S_ThermalPickup->Configuration = 1;
	int *thermalpickup_num = new int[9]{ 3, 4, 6, 7, 8, 10, 11, 12, 13 };
	for (int i = 0; i < 9; i++)
		TheMCE->GetOperandAt(thermalpickup_num[i])->GetOperandCell(2)->SetSolveData(thermalpickupsolve);

	// Set Pickup solve
	ISolveDataPtr configpickupsolve = TheMCE->GetOperandAt(1)->GetOperandCell(1)->CreateSolveType(SolveType_ConfigPickup);
	configpickupsolve->_S_ConfigPickup->Configuration = 1;
	TheMCE->GetOperandAt(5)->GetOperandCell(2)->SetSolveData(configpickupsolve);
	TheMCE->GetOperandAt(9)->GetOperandCell(2)->SetSolveData(configpickupsolve);

	// Set temperature of configuration 2 to 100 degrees
	TheMCE->GetOperandAt(1)->GetOperandCell(2)->DoubleValue = 100;
	ISystemDataPtr TheSystemData = TheSystem->SystemData;
	TheSystemData->Environment->AdjustIndexToEnvironment = true;

	// Save the system
	TheSystem->SaveAs(TheApplication->SamplesDir + "\\API\\CPP\\e18_Doublet_MakeTermal.zos");
#if defined(_DEBUG)
	// keeps console open when in debug mode
	system("pause");
#endif
	//! [e18s07_cp]

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
