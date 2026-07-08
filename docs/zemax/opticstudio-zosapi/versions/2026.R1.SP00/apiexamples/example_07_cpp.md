# Example 07 - C++

```cpp
// CppStandaloneApplication.cpp : Defines the entry point for the console application.
//

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
	CoInitialize(nullptr);

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
	_bstr_t FilePath = TheApplication->ZemaxDataDir + (_bstr_t)"\\Samples\\Sequential\\Objectives\\Cooke 40 degree field.zos";
	TheSystem->LoadFile(FilePath, false);

	//! [e07s01_cp]
	// run the design lockdown tool to fix diameters, remove solves
	IDesignLockdownPtr LockdownTool = TheSystem->Tools->OpenDesignLockdown();
	LockdownTool->UsePrecisionRounding = 1;
	LockdownTool->DecimalPrecision = 2;
	((ISystemToolPtr)LockdownTool)->RunAndWaitForCompletion(); // access the inherited functions from ISystemTool
	((ISystemToolPtr)LockdownTool)->Close(); // access the inherited functions from ISystemTool
	//! [e07s01_cp]

	// recreate the functionality of the tilt/decenter elements tool
	// apply Coordinate Breaks around the 2nd lens element (surf 3/4)
	ILDERowPtr surf3 = TheSystem->LDE->InsertNewSurfaceAt(3);
	ILDERowPtr surf6 = TheSystem->LDE->InsertNewSurfaceAt(6);
	ISurfaceTypeSettingsPtr CB = surf3->GetSurfaceTypeSettings(SurfaceType_CoordinateBreak);
	surf3->ChangeType(CB);
	surf6->ChangeType(CB);
	// insert a dummy surface after 2nd CB
	ILDERowPtr surf7 = TheSystem->LDE->InsertNewSurfaceAt(7);
	surf7->Thickness = TheSystem->LDE->GetSurfaceAt(5)->Thickness; // the dummy carries original thickness

	//! [e07s02_cp]
	// we're going to play with the STOP surface position, so let's put STOP on surf 1
	TheSystem->LDE->GetSurfaceAt(1)->IsStop = true;
	//! [e07s02_cp]
			
	//! [e07s03_cp]
	// create position solve
	ISolveDataPtr PositionSolve = TheSystem->LDE->GetSurfaceAt(5)->ThicknessCell->CreateSolveType(SolveType_Position);
	// set the properties for the position solve
	// solve-specific properties are in ISolvePosition interface, accessed via _S_Position
	PositionSolve->_S_Position->FromSurface = 3;
	PositionSolve->_S_Position->Length = 0;
	// apply position solve
	TheSystem->LDE->GetSurfaceAt(5)->ThicknessCell->SetSolveData(PositionSolve);
	//! [e07s03_cp]

	//! [e07s04_cp]
	// create pickup solve
	ISolveDataPtr PickupSolve = TheSystem->LDE->GetSurfaceAt(6)->ThicknessCell->CreateSolveType(SolveType_SurfacePickup);
	// solve-specific properties are in ISolvePosition interface, accessed via _S_Position
	PickupSolve->_S_SurfacePickup->Surface = 5;
	PickupSolve->_S_SurfacePickup->ScaleFactor = -1;
	PickupSolve->_S_SurfacePickup->offset = 0;
	PickupSolve->_S_SurfacePickup->Column = SurfaceColumn_Thickness;
	// apply the pickup solve
	TheSystem->LDE->GetSurfaceAt(6)->ThicknessCell->SetSolveData(PickupSolve);
	//! [e07s04_cp]

	//! [e07s05_cp]
	// set pickup sovles for coordinate break tilt/decenter parameter cells
	// these are columns 12-16 in the Lens Data Editor (parameters 1-5)
	IEditorRowPtr surf3_EditorRow = TheSystem->LDE->GetSurfaceAt(3);  // instantiate as IEditorRow to use inherited GetCellAt() function
	IEditorRowPtr surf6_EditorRow = TheSystem->LDE->GetSurfaceAt(6);  // instantiate as IEditorRow to use inherited GetCellAt() function
	ISolveDataPtr ParameterPickup = surf6_EditorRow->GetCellAt(12)->CreateSolveType(SolveType_SurfacePickup);
	ParameterPickup->_S_SurfacePickup->Surface = 3;
	ParameterPickup->_S_SurfacePickup->ScaleFactor = -1;
	ParameterPickup->_S_SurfacePickup->MakePickupFromCurrentColumn();
	srand(time(NULL));
	for (int i = 12; i <= 16; i++)
	{
		surf6_EditorRow->GetCellAt(i)->SetSolveData(ParameterPickup);
		surf3_EditorRow->GetCellAt(i)->DoubleValue = -0.1 + 0.2 * ((double)rand() / (double)RAND_MAX); // random value between +/-0.1
	}
	// also, set the 'order' flag for CB#2
	surf6_EditorRow->GetCellAt(17)->IntegerValue = 1;
	//! [e07s05_cp]

	//! [e07s06_cp]
	// check the global rotation matrix of surface 5 (rear of the tilted/decentered lens)
	MeritOperandType GLCR = MeritOperandType_GLCR;
	// GLCR operand only uses two input parameters: the surface number and rotation matrix entry number.
	// But, GetOperandValue() expects the operand type, plus 8 more inputs because some
	// operands use all 8. We have to put 0's for the additional unused inputs
	double RotationMatrix[3][3] = {0};
	int iterate = 1;
	for (int row = 0; row < 3; row++)
	{
		for (int col = 0; col < 3; col++)
		{
			RotationMatrix[row][col] = TheSystem->MFE->GetOperandValue(GLCR, 5, iterate, 0, 0, 0, 0, 0, 0);
			iterate += 1;
		}
	}
	//! [e07s06_cp]

	// save the file
	_bstr_t OutFilePath = TheApplication->ZemaxDataDir + (_bstr_t)"\\Samples\\API\\CPP\\CPP_07_TiltDecenterAndMFOperand.zos";
	TheSystem->SaveAs(OutFilePath);

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
