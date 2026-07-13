# Example 09 - C++

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

	//! [e09s01_cp]
	//  Open new Non-Sequential system and save
	TheSystem = TheApplication->CreateNewSystem(SystemType_NonSequential);
	//  Define file path and name
	_bstr_t filename = TheApplication->SamplesDir + "\\API\\CPP\\e09_NSC_CAD.zos";
	//  Save New NSC File
	TheSystem->SaveAs(filename);
	//! [e09s01_cp]

	//! [e09s02_cp]
	//  Insert CAD object
	INonSeqEditorPtr NSCE = TheSystem->NCE;
	INCERowPtr Obj1 = NSCE->GetObjectAt(1);
	Obj1->ZPosition = -5;
	// Define the STP file to search for.
	std::ifstream ifile((string)TheApplication->ObjectsDir + "\\CAD Files\\ExtPoly.stp");
	if (ifile)  //  Check if the CAD part exists in correct directory. Directory is defined under OpticStudio Preferences...Folders...Objects.
	{
		IObjectTypeSettingsPtr Obj1_Type = Obj1->GetObjectTypeSettings(ObjectType_CADPartSTEPIGESSAT);  //  create CAD object type
		Obj1_Type->FileName1 = "ExtPoly.stp";  //  set CAD file to be used (file must be in valid directory)
		Obj1->ChangeType(Obj1_Type);  //  Set Object 1 as the previously specified CAD file
	}
	else
		cout << "CAD file not found" << endl;
	//! [e09s02_cp]

	TheSystem->Save();

	//! [e09s03_cp]
	//  Access the CAD settings for object 1
	INCECADDataPtr Obj1_CAD = Obj1->CADData;  //  Retrieve CAD data

	// Determine if surface-to-face mapping is available for this object. If yes, update the mapping.
	if (Obj1_CAD->HasFaceData)
	{
		if (Obj1_CAD->NumberOfSurfaces > 1) 
		{
			// Assign last face to surface 0. Now, the first and last surfaces will be defined with the same scatter and coating properties
			Obj1_CAD->SetSurfaceFace(0, Obj1_CAD->NumberOfSurfaces - 1);
		}
	}
	//! [e09s03_cp]

	//! [e09s04_cp]
	fstream POBfile;
	string filepath = TheApplication->ObjectsDir + "\\Polygon Objects\\API_cube_demo.POB";
	POBfile.open(filepath, fstream::trunc | ios::out);

	POBfile << "! A cube" << "\n";
	POBfile << "! front face vertices" << "\n" << "V 1 -1 -1 0" << "\n" << "V 2 1 -1 0" << "\n" << "V 3 1 1 0" << "\n" << "V 4 -1 1 0" << "\n";
	POBfile << "! back face vertices" << "\n" << "V 5 -1 -1 2" << "\n" << "V 6 1 -1 2" << "\n" << "V 7 1 1 2" << "\n" << "V 8 -1 1 2" << "\n";
	POBfile << "! Front" << "\n" << "R 1 2 3 4 0 0" << "\n" << "! Back" << "\n" << "R 5 6 7 8 0 0" << "\n";
	POBfile << "! Top" << "\n" << "R 4 3 7 8 0 0" << "\n" << "! Bottom" << "\n" << "R 1 2 6 5 0 0" << "\n";
	POBfile << "! Left Side" << "\n" << "R 1 4 8 5 0 0" << "\n" << "! Right Side" << "\n" << "R 2 3 7 6 0 0";
	INCERowPtr Obj2 = NSCE->InsertNewObjectAt(2);  //  Add new line to NSCE
	IObjectTypeSettingsPtr Obj2_Type = Obj2->GetObjectTypeSettings(ObjectType_PolygonObject);
	Obj2_Type->FileName1 = "API_cube_demo.POB";
	Obj2->ChangeType(Obj2_Type);
	//! [e09s04_cp]

	// opens 3d layout
	TheSystem->Analyses->New_Analysis(AnalysisIDM_NSC3DLayout);
	TheSystem->Save();  //  Save the File

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
