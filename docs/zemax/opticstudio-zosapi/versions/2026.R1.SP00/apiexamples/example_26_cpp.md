# Example 26 - C++

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
#include <map>
#include <io.h> 


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

    // Define a Preferences File.
    // Preferences file is defined on the IZOSAPIConnection interface (prior to connecting to the API)
    // If no PreferencesFile is defined it will use the default OpticStudio.CFG file however changes will not persist between sessions. 
    // If a PreferencesFile is defined, then any changes will save automatically. 
	//! [e26s05_cp]
	cout << "===PreferenceFile===\n";
	_bstr_t cfgFile = R"(C:\Users\Documents\Zemax\Configs\OpticStudio.CFG)";
	std::string strFile = _bstr_t(cfgFile, false);
	if (_access_s(strFile.c_str(), 0) == 0) {
		TheConnection->PreferencesFile = cfgFile;
		cout << "PreferencesFile: " + TheConnection->PreferencesFile + "\n";
	}
	else {
		cout << "Default OpticStudio.CFG preferences used\n";
	}
	//! [e26s05_cp]

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

	//! [e26s01_cp]
	// Define variables for OpticStudio Preferences
	IPreferencesPtr Preference = TheApplication->Preferences;
	IPreferencesGeneralPtr PrefG = Preference->General;

	// Define the enums to a map/dictionary
	std::map<int, const char*> DateTimeFormatLookup;
	DateTimeFormatLookup[DateTimeType::DateTimeType_None] = "None";
	DateTimeFormatLookup[DateTimeType::DateTimeType_Date] = "Date";
	DateTimeFormatLookup[DateTimeType::DateTimeType_DateTime] = "DateTime";

	std::map<int, const char*> languageLookup;
	languageLookup[LanguageType::LanguageType_Chinese] = "Chinese";
	languageLookup[LanguageType::LanguageType_English] = "English";
	languageLookup[LanguageType::LanguageType_Japanese] = "Japanese";

	std::map<int, const char*> EncodingTypeLookup;
	EncodingTypeLookup[EncodingType::EncodingType_ANSI] = "ANSI";
	EncodingTypeLookup[EncodingType::EncodingType_Unicode] = "Unicode";
	//! [e26s01_cp]

	//! [e26s02_cp]
	// Read and print the initial settings	
	cout << "\n===Check Settings===";
	cout << "\nDateTimeFormat: " << DateTimeFormatLookup[PrefG->DateTimeFormat];
	cout << "\nLanguage: " << languageLookup[PrefG->Language];
	cout << "\nZMXFileEncoding: " << EncodingTypeLookup[PrefG->ZMXFileEncoding];
	cout << "\nTXTFileEncoding: " << EncodingTypeLookup[PrefG->TXTFileEncoding];
	cout << "\nUseSessionFiles: " << std::boolalpha << (bool)PrefG->UseSessionFiles;
	cout << "\nIncludeCalculatedDataInsession: " << (bool)PrefG->IncludeCalculatedDataInSession;
	cout << "\nUpdateMostRecentlyUsedList: " << (bool)PrefG->UpdateMostRecentlyUsedList;

	// Check if the user preferences string is empty before printing it out	
	if (PrefG->UserPreferences.length() == 0)
		cout << "\nUserPreferences: [None]";
	else
		cout << "\nUserPreferences: " << PrefG->UserPreferences;
	//! [e26s02_cp]	

	cout << "\n";

	//! [e26s03_cp]
	// Reset the settings to default
	Preference->ResetToDefaults();
	//! [e26s03_cp]

	//! [e26s04_cp]
	// Set the settings 	
	PrefG->DateTimeFormat = DateTimeType_None;
	PrefG->ZMXFileEncoding = EncodingType_ANSI;
	PrefG->TXTFileEncoding = EncodingType_ANSI;
	PrefG->UseSessionFiles = false;
	PrefG->IncludeCalculatedDataInSession = false;
	PrefG->UpdateMostRecentlyUsedList = false;
	PrefG->UserPreferences = "Never gonna give you up, never gonna let you down";
	//! [e26s04_cp]

	cout << "\n===Final Settings===";
	cout << "\nDateTimeFormat: " << DateTimeFormatLookup[PrefG->DateTimeFormat];
	cout << "\nLanguage: " << languageLookup[PrefG->Language];
	cout << "\nZMXFileEncoding: " << EncodingTypeLookup[PrefG->ZMXFileEncoding];
	cout << "\nTXTFileEncoding: " << EncodingTypeLookup[PrefG->TXTFileEncoding];
	cout << "\nUseSessionFiles: " << std::boolalpha << (bool)PrefG->UseSessionFiles;
	cout << "\nIncludeCalculatedDataInsession: " << (bool)PrefG->IncludeCalculatedDataInSession;
	cout << "\nUpdateMostRecentlyUsedList: " << (bool)PrefG->UpdateMostRecentlyUsedList;
	if (PrefG->UserPreferences.length() == 0)
		cout << "\nUserPreferences: [None]";
	else
		cout << "\nUserPreferences: " << PrefG->UserPreferences;


	cout << "\n\n";
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
