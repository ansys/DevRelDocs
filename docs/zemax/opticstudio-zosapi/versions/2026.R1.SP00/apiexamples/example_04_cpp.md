# Example 04 - C++

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

	// Set up primary optical system
	TheSystem = TheApplication->PrimarySystem;
	_bstr_t sampleDir = TheApplication->SamplesDir;
	
    //! [e04s01_cp]
    // Open file
	_bstr_t testFile = sampleDir + "\\Sequential\\Objectives\\Cooke 40 degree field.zos";
	TheSystem->LoadFile(testFile, false);
    //! [e04s01_cp]
    
    //! [e04s02_cp]
	// Create analysis
	I_AnalysesPtr TheAnalyses = TheSystem->Analyses;
	IA_Ptr newWin = TheAnalyses->New_FftMtf();
    //! [e04s02_cp]
    
    //! [e04s03_cp]
	// Settings
	IAS_FftMtfPtr newWin_Settings = newWin->GetSettings();
	newWin_Settings->MaximumFrequency = 50;
	newWin_Settings->SampleSize = SampleSizes_S_256x256;
	//! [e04s03_cp]
    
    //! [e04s04_cp]
    // Run Analysis
	newWin->ApplyAndWaitForCompletion();
	IAR_Ptr newWin_Results = newWin->GetResults();
    //! [e04s04_cp]
    
    //! [e04s05_cp]
	// Export the data series to a text file
	fstream textfile;
	string filepath = sampleDir + "\\API\\CPP\\e04_pull_data_from_FFTMTF.txt";
	textfile.open(filepath, fstream::trunc | ios::out);
	for (int i = 0; i < newWin_Results->NumberOfDataSeries; i++) {
		IAR_DataSeriesPtr dataseries = newWin_Results->GetDataSeries(i);
		for (int j = 0; j < dataseries->NumSeries; j++) {
			textfile << "\nSeries " << i << " - " << j << " : (X, Y)" << endl;
			for (int k = 0; k < dataseries->GetXData()->Length; k++) {
				textfile << dataseries->GetXData()->GetValueAt(k) << "\t";
				textfile << dataseries->GetYData()->GetValueAt(k, j) << endl;
			}
		}
	}
    //! [e04s05_cp]

	cout << "Result exported to:\n   " << filepath << endl;
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
