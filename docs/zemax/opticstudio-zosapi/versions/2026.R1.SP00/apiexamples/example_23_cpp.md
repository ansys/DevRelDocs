# Example 23 - C++

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
#include <iomanip>
#include <vector>
#include <cstdlib>

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


	// Add your custom code here...

	// creates a new API directory
	CreateDirectory(_bstr_t(TheApplication->SamplesDir + "\\API"), NULL);
	CreateDirectory(_bstr_t(TheApplication->SamplesDir + "\\API\\CPP"), NULL);

	// Set up primary optical system
	IOpticalSystemPtr TheSystem = TheApplication->CreateNewSystem(SystemType_Sequential);
	_bstr_t sampleDir = TheApplication->SamplesDir;
	_bstr_t testFile = sampleDir + "\\Sequential\\Objectives\\Double Gauss 28 degree field.zos";
	TheSystem->LoadFile(testFile, false);

	fstream textfile;
	string filepath = sampleDir + "\\API\\CPP\\e23_ray_fan_native_manual_comparison.txt";
	textfile.open(filepath, fstream::trunc | ios::out);

	int max_rays = 150;
	//! [e23s01_cp]
	int max_num_field = TheSystem->SystemData->Fields->NumberOfFields;
	int max_wave = TheSystem->SystemData->Wavelengths->NumberOfWavelengths;
	int max_field = 0;
	for (int i = 1; i < max_num_field; i++)
		if (TheSystem->SystemData->Fields->GetField(i)->Y > max_field)
			max_field = (int)TheSystem->SystemData->Fields->GetField(i)->Y;
	//! [e23s01_cp]

	// Set up timer.
	double duration1, duration2;
	std::clock_t start;
	start = std::clock();

	cout << "Section 1: Batch Ray trace\n\n";
	textfile << "Section 1: Batch Ray trace\n\n";

	//! [e23s02_cp]
	// Set up Batch Ray Trace
	IBatchRayTracePtr raytrace = TheSystem->Tools->OpenBatchRayTrace();
	int nsur = TheSystem->LDE->NumberOfSurfaces;
	IRayTraceNormUnpolDataPtr normUnPolData = raytrace->CreateNormUnpol(max_rays + 1, RaysType_Real, nsur);
	//! [e23s02_cp]

	//! [e23s03_cp]
	// define batch ray trace constants (hx, hy, px, py)
	double hx = 0, px = 0;
	std::vector<double> py_ary(max_rays + 1);
	for (int i = 0; i < max_rays + 1; i++) {
		py_ary[i] = (double)i / max_rays * 2 - 1;
	}
	//! [e23s03_cp]

	//! [e23s04_cp]
	// image surface number and primary wavelength
	//
	int pwav = 0;
	for (int a = 1; a <= TheSystem->SystemData->Wavelengths->NumberOfWavelengths; a++) {
		if (TheSystem->SystemData->Wavelengths->GetWavelength(a)->IsPrimary)
			pwav = a;
	}

	// creates array of Y coordinate chief ray values
	double *chief_ary = new double[max_num_field];
	for (int field = 1; field <= max_num_field; field++) {
		double hy = TheSystem->SystemData->Fields->GetField(field)->Y / max_field;
		// gets single value without using MFE(see ZPL OPEV)
		chief_ary[field - 1] = TheSystem->MFE->GetOperandValue(MeritOperandType_REAY, nsur, pwav, 0, hy, 0, 0, 0, 0);
	}
	//! [e23s04_cp]

	// initialize x / y image plane arrays
	std::vector<vector<vector<double>>> y_ary(max_num_field, vector<vector<double>>(max_wave, std::vector<double>((max_rays + 1) * (max_rays + 1), 0)));

	// setup plot
	for (int field = 1; field < max_num_field + 1; field++) {
		double hy = TheSystem->SystemData->Fields->GetField(field)->Y / max_field;
		for (int wave = 1; wave < max_wave + 1; wave++) {
			//! [e23s05_cp]
			// Adding Rays to Batch, varying normalised object height hy
			normUnPolData->ClearData();
			for (int i = 0; i < max_rays + 1; i++) {
				double py = py_ary[i];
				normUnPolData->AddRay(wave, hx, hy, px, py, OPDMode_None);
			}
			//! [e23s05_cp]

			//! [e23s06_cp]
			// Run Batch Ray Trace
			ISystemToolPtr baseTool = raytrace;
			baseTool->RunAndWaitForCompletion();
			//! [e23s06_cp]

			//! [e23s07_cp]
			// Read and display results
			normUnPolData->StartReadingResults();
			long rayNumber, errCode, vigCode;
			double rayX, rayY, rayZ, rayL, rayM, rayN, rayl2, raym2, rayn2, rayopd, rayintensiry;
			textfile << "Field [" << field << "] and Wave# [" << wave << "]\n";
			textfile << "Ray#   Py             REAY\n";
			VARIANT_BOOL success = normUnPolData->ReadNextResult(&rayNumber, &errCode, &vigCode, &rayX, &rayY, &rayZ, &rayL, &rayM, &rayN, &rayl2, &raym2, &rayn2, &rayopd, &rayintensiry);
			while (success) {
				if ((errCode == 0) && (vigCode == 0)) {
					textfile << setw(7) << rayNumber << setw(15) << left << py_ary[rayNumber - 1] << setw(15) << left << ((rayY - chief_ary[field - 1]) * 1000) << "\n";
					y_ary[field - 1][wave - 1][rayNumber - 1] = rayY;
				}
				success = normUnPolData->ReadNextResult(&rayNumber, &errCode, &vigCode, &rayX, &rayY, &rayZ, &rayL, &rayM, &rayN, &rayl2, &raym2, &rayn2, &rayopd, &rayintensiry);
			}
			textfile << endl;
			//! [e23s07_cp]
		}
	}

	duration1 = (std::clock() - start) / (double)CLOCKS_PER_SEC;
	cout << "Elapsed Time(Batch): " << duration1 << "\n\n";
	textfile << "Elapsed Time(Batch): " << duration1 << "\n\n";

	cout << "Section 2: Ray Fan data" << endl;
	textfile << "Section 2: Ray Fan data" << endl;

	//! [e23s08_cp]
	// Set up Ray Fan analysis
	IA_Ptr ray = TheSystem->Analyses->New_Analysis(AnalysisIDM_RayFan);
	IAS_Ptr ray_set = ray->GetSettings();
	IAS_FanPtr ray_fanset = ray_set;
	ray_fanset->NumberOfRays = max_rays / 2;
	ray_fanset->Field->UseAllFields();
	ray_fanset->Wavelength->UseAllWavelengths();
	ray->ApplyAndWaitForCompletion();
	IAR_Ptr ray_results = ray->GetResults();
	//! [e23s08_cp]


	cout << "Number Of Series: [" << ray_results->NumberOfDataSeries << "]\n" << endl;
	textfile << "Number Of Series: [" << ray_results->NumberOfDataSeries << "]\n" << endl;

	for (int field = 1; field < max_num_field + 1; field++) {

		//! [e23s09_cp]
		// COM will return a SAFEARRAY, use SafeArrayAccessData() to retrieve data
		double *xdata, *ydata;
		SAFEARRAY *xData = ray_results->GetDataSeries(field * 2 - 1)->XData->Data;
		SAFEARRAY *yData = ray_results->GetDataSeries(field * 2 - 1)->YData->Data;
		HRESULT hrx = SafeArrayAccessData(xData, (void**)&xdata);
		HRESULT hry = SafeArrayAccessData(yData, (void**)&ydata);

		int XData_Length = ray_results->GetDataSeries(field * 2 - 1)->XData->Length;
		int YData_Rows = ray_results->GetDataSeries(field * 2 - 1)->YData->Rows;
		int YData_Cols = ray_results->GetDataSeries(field * 2 - 1)->YData->Cols;
		int YData_TolLen = ray_results->GetDataSeries(field * 2 - 1)->YData->TotalLength;

		if (SUCCEEDED(hrx && hry)) {
			textfile << "Series [" << (field * 2 - 1) << "]: Tangential Ray Fan of Field# [" << field << "]\n";
			textfile << "Each series has properties XData and YData.\n";
			textfile << "XData :1D vector, the length is [" << XData_Length << "]\n";
			textfile << "YData :2D matrix with [" << YData_Rows << "] rows, [" << YData_Cols << "] columns and total Length of [" << YData_TolLen << "]\n" << endl;
			for (int i = 0; i < YData_Cols; i++) {
				textfile << "\nData for Field [" << field << "] and Wave# [" << i + 1 << "]\n";
				textfile << "Ray#   Px             Ey\n";
				for (int j = 0; j < XData_Length; j++) {
					textfile << setw(7) << i * XData_Length + j << setw(15) << left << xdata[j] << setw(15) << left << ydata[i * XData_Length + j] << "\n";
				}
			}
			textfile << endl;
			// Cleanup safearray when finished
			SafeArrayUnaccessData(xData);
		}
		//! [e23s09_cp]
	}
	duration2 = (std::clock() - start) / (double)CLOCKS_PER_SEC - duration1;
	cout << "Elapsed Time(RayFan): " << duration2 << "\n\n\n\n";
	textfile << "Elapsed Time(RayFan): " << duration2 << "\n\n\n\n";

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
