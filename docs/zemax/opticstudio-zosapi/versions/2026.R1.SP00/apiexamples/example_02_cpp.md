# Example 02 - C++

```cpp
// CppStandaloneApplication.cpp : Defines the entry point for the console application.

#include "stdafx.h"
#include <stdlib.h>
#include <stdio.h>
#include <iostream>
#include<fstream>
#include <string>
#include <ctime>
#include <functional>
#include <assert.h>
#include <windows.h>

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
	TheSystem = TheApplication->PrimarySystem;
	_bstr_t sampleDir = TheApplication->SamplesDir;

	//! [e02s01_cp]
	// Open file
	_bstr_t testFile = sampleDir + "\\Non-sequential\\Miscellaneous\\Digital_projector_flys_eye_homogenizer.zos";
	TheSystem->LoadFile(testFile, false);
	//! [e02s01_cp]

	//! [e02s02_cp]
	// Creat ray trace
	INSCRayTracePtr NSCRayTrace = TheSystem->Tools->OpenNSCRayTrace();
	NSCRayTrace->SplitNSCRays = true;
	NSCRayTrace->ScatterNSCRays = false;
	NSCRayTrace->UsePolarization = true;
	NSCRayTrace->IgnoreErrors = true;
	NSCRayTrace->SaveRays = false;
	NSCRayTrace->ClearDetectors(0);

	// Run ray trace
	// Methods RunAndWaitForCompletion() and Close is in base interface ISystemTool.
	// To use these two methods, cast to ISystemTool first.
	ISystemToolPtr baseTool = NSCRayTrace;
	baseTool->RunAndWaitForCompletion();
	baseTool->Close();
	//! [e02s02_cp]

	// Non-sequential component editor
	INonSeqEditorPtr TheNCE = TheSystem->NCE;

	//! [e02s03_cp]
	// Get detector data
	double detectorData[100][100];

	for (int i = 0; i < 99; i++)
		for (int j = 0; j < 99; j++)
			TheNCE->GetDetectorData(4, j + i * 100, 1, &detectorData[i][j]);
	//! [e02s03_cp]

	// Export to text file
	fstream textfile;
	string filepath = sampleDir + "\\API\\CPP\\e02_NSC_ray_trace.txt";
	textfile.open(filepath, fstream::trunc | ios::out);
	if (!textfile)
	{
		cerr << "Can't open file!\n";
	}
	else
	{
		for (int i = 0; i < 99; i++)
		{
			for (int j = 0; j < 99; j++)
			{
				textfile << detectorData[i][j] << "\t";
			}
			textfile << endl;
		}

	}
	
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
