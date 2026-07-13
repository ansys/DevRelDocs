# Example 12 - C++

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

	//! [e12s01_cp]
	ZOSAPI_Interfaces::IWavelengthsPtr sysWave = TheSystem->SystemData->Wavelengths;
	sysWave->GaussianQuadrature(0.45, 0.65, ZOSAPI_Interfaces::QuadratureSteps_S6);
	//! [e12s01_cp]

	//! [e12s02_cp]
	// Define fields using Paraxial Image Height
	ZOSAPI_Interfaces::IFieldsPtr sysField = TheSystem->SystemData->Fields;
	sysField->SetFieldType(ZOSAPI_Interfaces::FieldType_ParaxialImageHeight);
	//! [e12s02_cp]

	//! [e12s03_cp]
	// Change field 1 to be X=1.0 and Y=2.0
	ZOSAPI_Interfaces::IFieldPtr field1 = sysField->GetField(1);
	field1->X = 1.0;
	field1->Y = 2.0;
	//! [e12s03_cp]

	// Inserts paraxial lens so there will not be an error when using ParaxialImageHeight
	TheSystem->SystemData->Aperture->ApertureValue = 10;
	auto s1 = TheSystem->LDE->GetSurfaceAt(1);
	ISurfaceTypeSettingsPtr SurfaceType = s1->GetSurfaceTypeSettings(SurfaceType_Paraxial);
	s1->ChangeType(SurfaceType);
	s1->Thickness = 100;

	//! [e12s04_cp]
	// Change polarization axis reference to be Y
	ZOSAPI_Interfaces::ISDPolarizationDataPtr sysPol = TheSystem->SystemData->Polarization;
	sysPol->Method = ZOSAPI_Interfaces::PolarizationMethod_YAxisMethod;
	//! [e12s04_cp]

	//! [e12s05_cp]
	// Add Corning catalog and remove Schott catalog
	ZOSAPI_Interfaces::ISDMaterialCatalogDataPtr sysCat = TheSystem->SystemData->MaterialCatalogs;
	sysCat->AddCatalog("Corning");
	sysCat->RemoveCatalog("Schott");
	//! [e12s05_cp]

	//! [e12s06_cp]
	// Add Title and Notes
	ZOSAPI_Interfaces::ISDTitleNotesPtr sysTitleNotes = TheSystem->SystemData->TitleNotes;
	sysTitleNotes->Title = "Add here the title";
	sysTitleNotes->Notes = "Add here the notes";
	//! [e12s06_cp]

	//! [e12s07_cp]
	// As default Files choose: COATING.DAT, SCATTER_PROFILE.DAT, ABG_DATA.DAT 
	ZOSAPI_Interfaces::ISDFilesPtr sysFiles = TheSystem->SystemData->Files;
	sysFiles->CoatingFile = "COATING.DAT";
	sysFiles->ScatterProfile = "SCATTER_PROFILE.DAT";
	sysFiles->ABgDataFile = "ABG_DATA.DAT";
	sysFiles->ReloadFiles();
	//! [e12s07_cp]

	//! [e12s08_cp]
	// Change Lens Units to Inches
	ZOSAPI_Interfaces::ISDUnitsDataPtr sysUnits = TheSystem->SystemData->Units;
	sysUnits->LensUnits = ZOSAPI_Interfaces::ZemaxSystemUnits_Inches;
	//! [e12s08_cp]

	TheSystem->SaveAs(_bstr_t(TheApplication->SamplesDir + "\\API\\CPP\\e12_system_explorer.zos"));

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
