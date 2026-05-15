# Example 21 - C++

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
#include <sstream>
#include <iomanip>

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

	//! [e21s01_cp]
	// Create a new non-sequential file
	TheSystem->New(false);
	TheSystem->MakeNonSequential();
	// Add new catalog MISC
	TheSystem->SystemData->MaterialCatalogs->AddCatalog("MISC");
	// Set Wave #1 to 0->47 micron
	TheSystem->SystemData->Wavelengths->GetWavelength(1)->Wavelength = 0.47;
	// Use lumens as the source unit
	TheSystem->SystemData->Units->SourceUnits = ZemaxSourceUnits_Lumens;
	//! [e21s01_cp]

	//! [e21s02_cp]
	// Add 4 more objects
	INonSeqEditorPtr TheNCE = TheSystem->NCE;
	TheNCE->AddObject();
	TheNCE->AddObject();
	TheNCE->AddObject();
	TheNCE->AddObject();
	//! [e21s02_cp]

	//! [e21s03_cp]
	// Set 1st object as a Source File
	INCERowPtr Object_1 = TheNCE->GetObjectAt(1);
	IObjectTypeSettingsPtr Typeset_SourceFile = Object_1->GetObjectTypeSettings(ObjectType_SourceFile);
	Typeset_SourceFile->FileName1 = "RAYFILE_LB_T67C_100K_190608_ZEMAX.DAT";
	Object_1->ChangeType(Typeset_SourceFile);
	Object_1->GetObjectCell(ObjectColumn_Par1)->IntegerValue = 5;
	Object_1->GetObjectCell(ObjectColumn_Par2)->IntegerValue = 1000;
	Object_1->GetObjectCell(ObjectColumn_Par3)->DoubleValue = 2.485572;
	Object_1->GetObjectCell(ObjectColumn_Par8)->DoubleValue = 0.47;
	Object_1->GetObjectCell(ObjectColumn_Par9)->DoubleValue = 0.47;
	//! [e21s03_cp]

	//! [e21s04_cp]
	// Edit source data of object 1
	// SourcesData includes all the settings in Object Properties > Sources
	Object_1->SourcesData->PrePropagation = -0.2;
	Object_1->SourcesData->ArrayType = ArrayMode_Rectangular;
	Object_1->SourcesData->ArrayNumberX = 5;
	Object_1->SourcesData->ArrayNumberY = 5;
	//! [e21s04_cp]

	//! [e21s05_cp]
	// Set 2nd object as CAD Part: STEP/IGES/SAT
	INCERowPtr Object_2 = TheNCE->GetObjectAt(2);
	IObjectTypeSettingsPtr Typeset_CADPartSTEPIGESSAT = Object_1->GetObjectTypeSettings(ObjectType_CADPartSTEPIGESSAT);
	Typeset_CADPartSTEPIGESSAT->FileName1 = "LB_T67C_190608_GEOMETRY.STEP";
	Object_2->ChangeType(Typeset_CADPartSTEPIGESSAT);
	//! [e21s05_cp]

	//! [e21s06_cp]
	// Set Rays Ignore Object = Always for object 2
	// TypeData includes all settings in Object Properties > Type
	Object_2->TypeData->RaysIgnoreObject = RaysIgnoreObjectType_Always;
	//! [e21s06_cp]

	//! [e21s07_cp]
	// Set 3rd object as Cylinder Volume
	INCERowPtr Object_3 = TheNCE->GetObjectAt(3);
	IObjectTypeSettingsPtr Typeset_CylinderVolume = Object_3->GetObjectTypeSettings(ObjectType_CylinderVolume);
	Object_3->ChangeType(Typeset_CylinderVolume);
	// Set positions, material and parameters
	Object_3->GetObjectCell(ObjectColumn_ZPosition)->DoubleValue = 0.8;
	Object_3->GetObjectCell(ObjectColumn_Material)->Value = "PMMA";
	Object_3->GetObjectCell(ObjectColumn_Par1)->DoubleValue = 1.2;
	Object_3->GetObjectCell(ObjectColumn_Par2)->DoubleValue = 0.1;
	Object_3->GetObjectCell(ObjectColumn_Par3)->DoubleValue = 1.2;
	//! [e21s07_cp]

	//! [e21s08_cp]
	// Make Face 1 of object 3 has Lambertian scattering properties
	// To set scatter properties, you need to first create "ScatteringSettings" by "CreateScatterModelSettings()" method.
	// And then assign is to object 3 by ChangeScatterModelSettings().
	IObjectScatteringSettingsPtr ScatType_Lam = Object_3->CoatScatterData->GetFaceData(1)->CreateScatterModelSettings(ObjectScatteringTypes_Lambertian);
	ScatType_Lam->_S_Lambertian->ScatterFraction = 1;
	Object_3->CoatScatterData->GetFaceData(1)->ChangeScatterModelSettings(ScatType_Lam);
	Object_3->CoatScatterData->GetFaceData(1)->NumberOfRays = 1;
	//! [e21s08_cp]

	//! [e21s09_cp]
	// Make object 3 a volume scattering material
	// VolumePhysicsData includes all settings in Object Properties > VolumePhysics.
	// Use Photoluminescence model
	Object_3->VolumePhysicsData->Model = VolumePhysicsModelType_PhotoluminescenceModel;
	IVMPS_PhotoluminscenceModelPtr Photo_setting = Object_3->VolumePhysicsData->ModelSettings->_S_PhotoluminescenceModel;
	// Use standard algorithm
	Photo_setting->BasicAlgorithm = false;
	// Set absorb, emission and quantum yield files
	Photo_setting->AbsorptionFile = "_sample_3.ZAS";
	Photo_setting->EmissionFile = "_sample_3.ZES";
	Photo_setting->QuantumYield = "_sample_3.ZQE";
	// Set efficiency spectrum to quantum yield
	Photo_setting->EfficiencySpectrum = EfficiencySpectrumType_QuantumYield;
	// Set photoluminescence parameters
	Photo_setting->ExtinctionCoefficient = 1e+05;
	Photo_setting->ExtinctionWavelength = 0.47;
	Photo_setting->PLDensity = 3.1e+017;
	// Set model to ignore mie scattering
	Photo_setting->ConsiderMieScattering = false;
	//! [e21s09_cp]

	//! [e21s10_cp]
	// Set 4th object as Standard Lens
	INCERowPtr Object_4 = TheNCE->GetObjectAt(4);
	IObjectTypeSettingsPtr Typeset_StandardLens = Object_4->GetObjectTypeSettings(ObjectType_StandardLens);
	Object_4->ChangeType(Typeset_StandardLens);
	// Set positions
	Object_4->GetObjectCell(ObjectColumn_ZPosition)->DoubleValue = 0.9;
	// To set solve for any cell, you need to first create a "ISolveData" by "CreateSolveType()" method.
	// And then assign it to the cell.
	ISolveDataPtr Solve_ObjPick = Object_4->GetObjectCell(ObjectColumn_Material)->CreateSolveType(SolveType_ObjectPickup);
	Solve_ObjPick->_S_ObjectPickup->Object = 3;
	// Set parameters
	Object_4->GetObjectCell(ObjectColumn_Material)->SetSolveData(Solve_ObjPick);
	Object_4->GetObjectCell(ObjectColumn_Par3)->DoubleValue = 1.2;
	Object_4->GetObjectCell(ObjectColumn_Par4)->DoubleValue = 1.2;
	Object_4->GetObjectCell(ObjectColumn_Par5)->DoubleValue = 1.2;
	Object_4->GetObjectCell(ObjectColumn_Par6)->DoubleValue = -1.2;
	Object_4->GetObjectCell(ObjectColumn_Par8)->DoubleValue = 1.2;
	Object_4->GetObjectCell(ObjectColumn_Par9)->DoubleValue = 1.2;
	//! [e21s10_cp]

	//! [e21s11_cp]
	// Set 5th object as Detector Color
	INCERowPtr Object_5 = TheNCE->GetObjectAt(5);
	IObjectTypeSettingsPtr Typeset_DetectorColor = Object_5->GetObjectTypeSettings(ObjectType_DetectorColor);
	Object_5->ChangeType(Typeset_DetectorColor);
	// Set positions, material and parameters
	Object_5->GetObjectCell(ObjectColumn_ZPosition)->DoubleValue = 7;
	Object_5->GetObjectCell(ObjectColumn_Material)->Value = "ABSORB";
	Object_5->GetObjectCell(ObjectColumn_Par1)->DoubleValue = 5;
	Object_5->GetObjectCell(ObjectColumn_Par2)->DoubleValue = 5;
	Object_5->GetObjectCell(ObjectColumn_Par3)->IntegerValue = 150;
	Object_5->GetObjectCell(ObjectColumn_Par4)->IntegerValue = 150;
	Object_5->GetObjectCell(ObjectColumn_Par6)->IntegerValue = 4;
	Object_5->GetObjectCell(ObjectColumn_Par7)->IntegerValue = 3;
	//! [e21s11_cp]

	//! [e21s12_cp]
	// Open NSC Ray Trace tool and turn on Scatter NSC Rays and Ignore Errors
	INSCRayTracePtr RayTraceControl = TheSystem->Tools->OpenNSCRayTrace();
	RayTraceControl->SplitNSCRays = false;
	RayTraceControl->ScatterNSCRays = true;
	RayTraceControl->UsePolarization = false;
	RayTraceControl->IgnoreErrors = true;
	RayTraceControl->SaveRays = false;

	// Trace rays and report the progress when it's running.
	// Note that, instead an RunAndWaitCompletion(), Run() is used so that
	// the code will just go on without waiting the tracing finishs.
	// We will check the progress of tracing by a while loop.
	// You can check the properties "Progress", which is percentage integer data (1-100)
	cout << "Starting Tracing...    ";
	RayTraceControl->ClearDetectors(0);
	// Run() is defined in ISystemTool interface.
	// To use this method, we need to cast to ISystemTool.
	ISystemToolPtr baseTool = RayTraceControl;
	baseTool->Run();
	while (baseTool->Progress != 100)
	{
		Sleep(1000);
		cout << "\b\b\b\b" << std::setfill(' ') << std::setw(3) << baseTool->Progress << "%";
	}
	baseTool->Close();
	cout << "\nFinished!" << endl;
	//! [e21s12_cp]

	//! [e21s13_cp]
	// Open two detector viewers for showing results in angle space and position space
	// Detector Viewer has its own settings interface: IAS_DetectorViewer.
	// Note that not all analyses have a specific settings interface.
	I_AnalysesPtr TheAnalysis = TheSystem->Analyses;
	IA_Ptr Det1 = TheAnalysis->New_DetectorViewer();
	IAS_DetectorViewerPtr Det_Set1 = Det1->GetSettings();
	Det_Set1->ShowAs = DetectorViewerShowAsTypes_TrueColor;
	Det_Set1->Smoothing = 3;
	Det1->ApplyAndWaitForCompletion();

	IA_Ptr Det2 = TheAnalysis->New_DetectorViewer();
	IAS_DetectorViewerPtr Det_Set2 = Det2->GetSettings();
	Det_Set2->ShowAs = DetectorViewerShowAsTypes_TrueColor;
	Det_Set2->Smoothing = 3;
	Det_Set2->DataType = DetectorViewerShowDataTypes_AngleSpace;
	Det2->ApplyAndWaitForCompletion();
	//! [e21s13_cp]


	TheSystem->SaveAs(TheApplication->SamplesDir + "\\API\\CPP\\e21_White_LED_Phosphor.zos");
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
