# Example 05 - C++

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

	// Open file and set Analysis Ryas to only 10
	_bstr_t sampleDir = TheApplication->SamplesDir;
	_bstr_t testFile = sampleDir + "\\Non-sequential\\Miscellaneous\\Digital_projector_flys_eye_homogenizer.zos";
	TheSystem->LoadFile(testFile, false);
	TheSystem->NCE->GetObjectAt(1)->GetObjectCell(ObjectColumn_Par2)->IntegerValue = 10;

	//! [e27s01_cp]
	// Trace and save a ZRD file for test later
	INSCRayTracePtr NSCRayTrace = TheSystem->Tools->OpenNSCRayTrace();
	NSCRayTrace->SplitNSCRays = true;
	NSCRayTrace->ScatterNSCRays = false;
	NSCRayTrace->UsePolarization = true;
	NSCRayTrace->IgnoreErrors = true;
	NSCRayTrace->SaveRays = true;
	NSCRayTrace->SaveRaysFile = "Digital_projector_flys_eye_homogenizer.ZRD";
	NSCRayTrace->ClearDetectors(0);
	ISystemToolPtr NSCRayTrace_base = NSCRayTrace;
	NSCRayTrace_base->RunAndWaitForCompletion();
	NSCRayTrace_base->Close();
	//! [e27s01_cp]

	//! [e27s02_cp]
	// Open ZRD Reader and read data
	IZRDReaderPtr ZRDReader = TheSystem->Tools->OpenRayDatabaseReader();
	ZRDReader->ZRDFile = TheApplication->SamplesDir +
		"\\Non-sequential\\Miscellaneous\\Digital_projector_flys_eye_homogenizer.ZRD";
	ISystemToolPtr ZRDReader_base = ZRDReader;
	ZRDReader_base->RunAndWaitForCompletion();
	if (ZRDReader_base->Succeeded == false)
	{
		cout << "Raytracingfailed!\n" << endl;
		cout << ZRDReader_base->ErrorMessage << endl;
	}
	else
	{
		cout << "Raytracing completed!\n" << endl;
	}
	//! [e27s02_cp]

	//! [e27s03_cp]
	IZRDReaderResultsPtr ZRDResult = ZRDReader->GetResults();

	VARIANT_BOOL success_NextSegmentFull, nsuccess_NextResult;
	long rayNumber, waveIndex, numSegments;
	double wlUM;

	long segmentLevel, segmentParent, hitObj, hitFace, insideOf, xybin, lmbin;
	double x, y, z, l, m, n, exr, exi, eyr, eyi, ezr, ezi, intensity, pathLength, xNorm, yNorm, zNorm, index, startingPhase, phaseOf, phaseAt;
	RayStatus status;

	//ReadNExtResult() returns data ray by ray
	nsuccess_NextResult = ZRDResult->ReadNextResult(&rayNumber, &waveIndex, &wlUM, &numSegments);
	while (nsuccess_NextResult)
	{
		cout << "\nsuccess_NextResult: " << (nsuccess_NextResult ? "True" : "False") <<
			", rayNumber: " << rayNumber <<
			", waveIndex: " << waveIndex <<
			", wlUM: " << wlUM <<
			", numSegments: " << numSegments << endl << endl << endl;
		success_NextSegmentFull = ZRDResult->ReadNextSegmentFull(&segmentLevel, &segmentParent, &hitObj, &hitFace, &insideOf,
			&status, &x, &y, &z, &l, &m, &n, &exr, &exi, &eyr, &eyi, &ezr, &ezi,
			&intensity, &pathLength, &xybin, &lmbin, &xNorm, &yNorm, &zNorm, &index, &startingPhase, &phaseOf,
			&phaseAt);
		while (success_NextSegmentFull)
		{
			cout << "success_NextSegmentFull:" << (success_NextSegmentFull ? "True" : "False") <<
				", segmentLevel:" << segmentLevel <<
				", segmentParent:" << segmentParent <<
				", \nhitObj:" << hitObj << ", hitFace:" << hitFace << ", insideOf:" << insideOf << ", status:" << status <<
				", \nx:" << x << ", y:" << y << ", z:" << z << 
                ", l:" << l << ", m:" << m << ", n:" << n <<
				", \nexr:" << exr << ", exi:" << exi <<
				", eyr:" << eyr << ", eyi:" << eyi <<
				", ezr:" << ezr << ", ezi:" << ezi <<
				", \nintensity:" << intensity << ", pathLength:" << pathLength <<
				", xybin:" << xybin << ", lmbin:" << lmbin <<
				", \nxNorm:" << xNorm << ", yNorm:" << yNorm << ", zNorm:" << zNorm <<
				", \nindex:" << index << ", startingPhase:" << startingPhase <<
				", phaseOf:" << phaseOf << ", phaseAt:" << phaseAt << endl << endl;
			success_NextSegmentFull = ZRDResult->ReadNextSegmentFull(&segmentLevel, &segmentParent, &hitObj, &hitFace, &insideOf,
				&status, &x, &y, &z, &l, &m, &n, &exr, &exi, &eyr, &eyi, &ezr, &ezi,
				&intensity, &pathLength, &xybin, &lmbin, &xNorm, &yNorm, &zNorm, &index, &startingPhase, &phaseOf,
				&phaseAt);
		}
		nsuccess_NextResult = ZRDResult->ReadNextResult(&rayNumber, &waveIndex, &wlUM, &numSegments);
	}
	ZRDReader_base->Close();
	//! [e27s03_cp]

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
