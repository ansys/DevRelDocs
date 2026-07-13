# Example 22 - C++

```cpp
// CppStandaloneApplication.cpp : Defines the entry point for the console application.

#include "stdafx.h"
#include <stdlib.h>
#include <stdio.h>
#include <iostream>
#include <fstream>
#include <string>
#include <ctime>
#include <functional>
#include <assert.h>
#include <sstream>
#include <iomanip>
#include <vector>

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

	// Set up primary optical system
	_bstr_t sampleDir = TheApplication->SamplesDir;
	_bstr_t testFile = sampleDir + "\\Sequential\\Objectives\\Double Gauss 28 degree field.zos";
	TheSystem->LoadFile(testFile, false);

	//! [e22s01_cp]
	// Set up Batch Ray Trace
	IBatchRayTracePtr raytrace = TheSystem->Tools->OpenBatchRayTrace();
	int nsur = TheSystem->LDE->NumberOfSurfaces;
	int max_rays = 30;
	IRayTraceNormUnpolDataPtr normUnPolData = raytrace->CreateNormUnpol((max_rays + 1) * (max_rays + 1), RaysType::RaysType_Real, nsur);
	//! [e22s01_cp]

	//! [e22s02_cp]
	// Define batch ray trace constants
	double hx = 0.0;
	int max_wave = TheSystem->SystemData->Wavelengths->NumberOfWavelengths;
	int num_fields = TheSystem->SystemData->Fields->NumberOfFields;
	double hy_ary[] = { 0, 0.707, 1 };
	//! [e22s02_cp]

	// Initialize x/y image plane arrays
	std::vector<vector<vector<double>>> x_ary;
	std::vector<vector<vector<double>>> y_ary;
	x_ary.resize(num_fields, vector<vector<double> >(max_wave, vector<double>((max_rays + 1) * (max_rays + 1))));
	y_ary.resize(num_fields, vector<vector<double> >(max_wave, vector<double>((max_rays + 1) * (max_rays + 1))));

	//! [e22s03_cp]
	// Determine maximum field in Y only
	double max_field = 0.0;
	for (int i = 1; i <= num_fields; i++) {
		if (TheSystem->SystemData->Fields->GetField(i)->Y > max_field) {
			max_field = TheSystem->SystemData->Fields->GetField(i)->Y;
		}
	}
	//! [e22s03_cp]

	fstream textfile;
	string filepath = sampleDir + "\\API\\CPP\\e22_seq_spot_diagram.txt";
	textfile.open(filepath, fstream::trunc | ios::out);
	textfile << "Field \t Wave \t X \t Y" << endl;

	for (int field = 1; field <= num_fields; field++) {
		for (int wave = 1; wave <= max_wave; wave++) {
			//! [e22s04_cp]
			// Adding Rays to Batch, varying normalised object height hy
			normUnPolData->ClearData();
			int waveNumber = wave;
			for (int i = 1; i <= ((max_rays + 1) * (max_rays + 1)); i++) {
				double px, py;

				px = (double)rand() / (double)RAND_MAX * 2 - 1;
				py = (double)rand() / (double)RAND_MAX * 2 - 1;
				while (px*px + py*py > 1) {
					py = (double)rand() / (double)RAND_MAX * 2 - 1;
				}
				normUnPolData->AddRay(waveNumber, hx, hy_ary[field - 1], px, py, OPDMode::OPDMode_None);
			}
			//! [e22s04_cp]

			// Run Batch Ray Trace
			ISystemToolPtr baseTool = raytrace;
			baseTool->RunAndWaitForCompletion();

			//! [e22s05_cp]
			// Read batch raytrace and save results
			normUnPolData->StartReadingResults();
			long rayNumber, ErrorCode, vignetteCode;
			double dbl_X, dbl_Y, dbl_Z, dbl_L, dbl_M, dbl_N, dbl_L2, dbl_M2, dbl_N2, OPD, Intensity;
			bool success;

			success = normUnPolData->ReadNextResult(&rayNumber, &ErrorCode, &vignetteCode, &dbl_X, &dbl_Y, &dbl_Z, &dbl_L, &dbl_M, &dbl_N, &dbl_L2, &dbl_M2, &dbl_N2, &OPD, &Intensity);
			while (success) {
				if ((ErrorCode == 0) && (vignetteCode == 0)) {
					x_ary[field - 1][wave - 1][rayNumber - 1] = dbl_X;
					y_ary[field - 1][wave - 1][rayNumber - 1] = dbl_Y;
					textfile << _bstr_t(field) + "\t" + _bstr_t(wave) + "\t" + _bstr_t(dbl_X) + "\t" + _bstr_t(dbl_Y) << endl;
				}
				success = normUnPolData->ReadNextResult(&rayNumber, &ErrorCode, &vignetteCode, &dbl_X, &dbl_Y, &dbl_Z, &dbl_L, &dbl_M, &dbl_N, &dbl_L2, &dbl_M2, &dbl_N2, &OPD, &Intensity);
			}
			textfile << "" << endl;
			//! [e22s05_cp]
		}
	}

	//! [e22s06_cp]
	// Spot Diagram Analysis Results
	IA_Ptr spot = TheSystem->Analyses->New_Analysis(AnalysisIDM::AnalysisIDM_StandardSpot);
	IAS_SpotPtr spot_setting = spot->GetSettings();
	spot_setting->Field->SetFieldNumber(0);
	spot_setting->Wavelength->SetWavelengthNumber(0);
	spot_setting->ReferTo = Reference::Reference_Centroid;
	//! [e22s06_cp]

	//! [e22s07_cp]
	// Extract RMS & Geo spot size for field points
	spot->ApplyAndWaitForCompletion();
	IAR_Ptr spot_results = spot->GetResults();
	cout.precision(3);
	cout << fixed << "RMS radius: \t" << spot_results->SpotData->GetRMSSpotSizeFor(1, 1) << "\t" << spot_results->SpotData->GetRMSSpotSizeFor(2, 1) << "\t" << spot_results->SpotData->GetRMSSpotSizeFor(3, 1) << endl;
	cout << fixed << "GEO radius: \t" << spot_results->SpotData->GetGeoSpotSizeFor(1, 1) << "\t" << spot_results->SpotData->GetGeoSpotSizeFor(2, 1) << "\t" << spot_results->SpotData->GetGeoSpotSizeFor(3, 1) << endl;
	//! [e22s07_cp]

	textfile.close();
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
