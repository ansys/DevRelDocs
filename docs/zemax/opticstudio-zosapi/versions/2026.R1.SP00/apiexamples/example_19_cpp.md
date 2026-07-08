# Example 19 - C++

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

	// This code build a chain of prisms based on the KB article:
	// http://zemax.com/os/resources/learn/knowledgebase/how-to-work-in-global-coordinates-in-a-sequential
	TheSystem->New(false);

	//! [e19s01_cp]
	// ISystemData represents the System Explorer in GUI.
	// We access options in System Explorer through ISystemData in ZOS-API
	ISystemDataPtr TheSystemData = TheSystem->SystemData;
	TheSystemData->Aperture->ApertureValue = 10;
	TheSystemData->Aperture->AFocalImageSpace = true;
	TheSystemData->Wavelengths->GetWavelength(1)->Wavelength = 0.55;
	//! [e19s01_cp]

	ISDMaterialCatalogDataPtr(TheSystem->SystemData->MaterialCatalogs)->AddCatalog("SCHOTT");

	//! [e19s02_cp]
	// Get interface of Lens Data Editor and add 3 surfaces.
	ILensDataEditorPtr TheLDE = TheSystem->LDE;
	TheLDE->InsertNewSurfaceAt(2);
	TheLDE->InsertNewSurfaceAt(2);
	TheLDE->InsertNewSurfaceAt(2);

	// Set thickness and material for each surface.
	TheLDE->GetSurfaceAt(1)->Thickness = 30;
	TheLDE->GetSurfaceAt(2)->Thickness = 20;
	TheLDE->GetSurfaceAt(4)->Thickness = 30;
	TheLDE->GetSurfaceAt(2)->Material = "N-BK7";
	//! [e19s02_cp]

	//! [e19s03_cp]
	// GetSurfaceAt(surface number shown in LDE) will return an interface ILDERow
	// Through property TiltDecenterData of each interface ILDERow, we can modify data in Surface Properties > Tilt/Decenter section
	TheLDE->GetSurfaceAt(2)->TiltDecenterData->BeforeSurfaceOrder = TiltDecenterOrderType_Decenter_Tilt;
	TheLDE->GetSurfaceAt(2)->TiltDecenterData->BeforeSurfaceTiltX = 15;
	TheLDE->GetSurfaceAt(2)->TiltDecenterData->AfterSurfaceTiltX = -15;
	TheLDE->GetSurfaceAt(3)->TiltDecenterData->BeforeSurfaceTiltX = -15;
	TheLDE->GetSurfaceAt(3)->TiltDecenterData->AfterSurfaceTiltX = 15;
	//! [e19s03_cp]

	//! [e19s04_cp]
	// To specify an aperture to a surface, we need to first create an ISurfaceApertureType and then assign it.
	ISurfaceApertureTypePtr Rect_Aper = TheLDE->GetSurfaceAt(2)->ApertureData->CreateApertureTypeSettings(SurfaceApertureTypes_RectangularAperture);
	Rect_Aper->_S_RectangularAperture->XHalfWidth = 10;
	Rect_Aper->_S_RectangularAperture->YHalfWidth = 10;
	TheLDE->GetSurfaceAt(2)->ApertureData->ChangeApertureTypeSettings(Rect_Aper);
	TheLDE->GetSurfaceAt(3)->ApertureData->PickupFrom = 2;
	//! [e19s04_cp]

	//! [e19s05_cp]
	// To change surface type, we need to first get an ISurfaceTypesettings and then assign it.
	ISurfaceTypeSettingsPtr SurfaceType_CB = TheLDE->GetSurfaceAt(4)->GetSurfaceTypeSettings(SurfaceType_CoordinateBreak);
	TheLDE->GetSurfaceAt(4)->ChangeType(SurfaceType_CB);
	//! [e19s05_cp]

	//! [e19s06_cp]
	// Set Chief Ray solves to surface 4, which is Coordinate Break
	// To set a solve to a cell in editor, we need to first create a ISolveData and then assign it.
	ISolveDataPtr Solve_ChiefNormal = TheLDE->GetSurfaceAt(4)->GetSurfaceCell(SurfaceColumn_Par1)->CreateSolveType(SolveType_PickupChiefRay);
	TheLDE->GetSurfaceAt(4)->GetSurfaceCell(SurfaceColumn_Par1)->SetSolveData(Solve_ChiefNormal);
	TheLDE->GetSurfaceAt(4)->GetSurfaceCell(SurfaceColumn_Par2)->SetSolveData(Solve_ChiefNormal);
	TheLDE->GetSurfaceAt(4)->GetSurfaceCell(SurfaceColumn_Par3)->SetSolveData(Solve_ChiefNormal);
	TheLDE->GetSurfaceAt(4)->GetSurfaceCell(SurfaceColumn_Par4)->SetSolveData(Solve_ChiefNormal);
	TheLDE->GetSurfaceAt(4)->GetSurfaceCell(SurfaceColumn_Par5)->SetSolveData(Solve_ChiefNormal);
	//! [e19s06_cp]

	//! [e19s07_cp]
	// Copy 3 surfaces starting from surface number 2 in LDE and paste to surface number 5, 
	// which will become surface number 8 after pasting.
	for (int i = 0; i < 10; i++) {
		TheLDE->CopySurfaces(2, 3, 5);
	}
	// Save file
	TheSystem->SaveAs(TheApplication->SamplesDir + "\\API\\CPP\\e19_Sample_Prism_Chain.zos");
	//! [e19s07_cp]

	//! [e19s08_cp]
	// Run tool Convert Local To Global Coordinates to convert surface #2 to surface #35 to be globally referenced to surface #1
	TheLDE->RunTool_ConvertLocalToGlobalCoordinates(2, 35, 1);
	TheSystem->SaveAs(TheApplication->SamplesDir + "\\API\\CPP\\e19_Sample_Prism_Chain_GlobalCoordinate.zos");
	//! [e19s08_cp]

	//! [e19s09_cp]
	// Run tool Conver Global To Local Coordinates to convert surface #1 to surface #57 back to local coordinate.
	TheLDE->RunTool_ConvertGlobalToLocalCoordinates(1, 57, ConversionOrder_Forward);
	TheSystem->SaveAs(TheApplication->SamplesDir + "\\API\\CPP\\e19_Sample_Prism_Chain_BackTo_LocalCoordinate.zos");
#if defined(_DEBUG)
	// keeps console open when in debug mode
	system("pause");
#endif
	//! [e19s09_cp]


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
