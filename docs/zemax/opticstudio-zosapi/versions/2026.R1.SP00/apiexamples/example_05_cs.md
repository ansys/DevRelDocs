# Example 05 - C#

```csharp
using System;
using ZOSAPI;
using ZOSAPI.Tools.RayTrace;

namespace CSharpStandaloneApplication
{
    class Program
    {
        static void Main(string[] args)
        {
            // Find the installed version of OpticStudio
            bool isInitialized = ZOSAPI_NetHelper.ZOSAPI_Initializer.Initialize();
            // Note -- uncomment the following line to use a custom initialization path
            //bool isInitialized = ZOSAPI_NetHelper.ZOSAPI_Initializer.Initialize(@"C:\Program Files\OpticStudio\");
            if (isInitialized)
            {
                LogInfo("Found OpticStudio at: " + ZOSAPI_NetHelper.ZOSAPI_Initializer.GetZemaxDirectory());
            }
            else
            {
                HandleError("Failed to locate OpticStudio!");
                return;
            }
            
            BeginStandaloneApplication();
        }

        static void BeginStandaloneApplication()
        {
            // Create the initial connection class
            ZOSAPI_Connection TheConnection = new ZOSAPI_Connection();

            // Attempt to create a Standalone connection
            IZOSAPI_Application TheApplication = TheConnection.CreateNewApplication();
            if (TheApplication == null)
			{
                HandleError("An unknown connection error occurred!");
				return;
			}

            // Check the connection status
            if (!TheApplication.IsValidLicenseForAPI)
            {
                HandleError("Failed to connect to OpticStudio: " + TheApplication.LicenseStatus);
                return;
            }
            if (TheApplication.Mode != ZOSAPI_Mode.Server)
            {
                HandleError("User plugin was started in the wrong mode: expected Server, found " + TheApplication.Mode.ToString());
                return;
            }

            IOpticalSystem TheSystem = TheApplication.PrimarySystem;

            // Add your custom code here...

            // Open file and set Analysis Ryas to only 10
            string testFile = TheApplication.SamplesDir + "\\Non-sequential\\Miscellaneous\\Digital_projector_flys_eye_homogenizer.zos";
            TheSystem.LoadFile(testFile, false);
            TheSystem.NCE.GetObjectAt(1).GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par2).IntegerValue = 10;

            //! [e27s01_cs]
            // Trace and save a ZRD file for test later
            INSCRayTrace NSCRayTrace = TheSystem.Tools.OpenNSCRayTrace();
            NSCRayTrace.SplitNSCRays = true;
            NSCRayTrace.ScatterNSCRays = false;
            NSCRayTrace.UsePolarization = true;
            NSCRayTrace.IgnoreErrors = true;
            NSCRayTrace.SaveRays = true;
            NSCRayTrace.SaveRaysFile = "Digital_projector_flys_eye_homogenizer.ZRD";
            NSCRayTrace.ClearDetectors(0);
            NSCRayTrace.RunAndWaitForCompletion();
            NSCRayTrace.Close();
            //! [e27s01_cs]



            //! [e27s02_cs]
            // Open ZRD Reader and read data
            IZRDReader ZRDReader = TheSystem.Tools.OpenRayDatabaseReader();
            ZRDReader.ZRDFile = System.String.Concat(TheApplication.SamplesDir, @"\Non-sequential\Miscellaneous\Digital_projector_flys_eye_homogenizer.ZRD");
            ZRDReader.RunAndWaitForCompletion();
            if (ZRDReader.Succeeded == false)
            {
                Console.WriteLine("Raytracing failed!\n\n");
                Console.WriteLine(ZRDReader.ErrorMessage);
            }
            else
            {
                Console.WriteLine("Raytracing completed!\n\n");
            }
            //! [e27s02_cs]

            //! [e27s03_cs]
            IZRDReaderResults ZRDResult = ZRDReader.GetResults();

            Boolean success_NextResult, success_NextSegmentFull;
            Int32 rayNumber, waveIndex, numSegments;
            Double wlUM;

            Int32 segmentLevel, segmentParent, hitObj, hitFace, insideOf, xybin, lmbin;
            Double x, y, z, l, m, n, exr, exi, eyr, eyi, ezr, ezi, intensity, pathLength, xNorm, yNorm, zNorm, index, startingPhase, phaseOf, phaseAt;
            RayStatus status;

            // ReadNExtResult() returns data ray by ray
            success_NextResult = ZRDResult.ReadNextResult(out rayNumber, out waveIndex, out wlUM, out numSegments);
            while (success_NextResult)
            {
                Console.WriteLine("\n\nsuccess_NextResult: {0}, rayNumber: {1}, waveIndex: {2}, wlUM: {3}, numSegments: {4}\n\n",
                                  success_NextResult, rayNumber, waveIndex, wlUM, numSegments);
                // ReadNextSegmentFull() returns data segment by segment
                success_NextSegmentFull = ZRDResult.ReadNextSegmentFull(out segmentLevel, out segmentParent, out hitObj, out hitFace, out insideOf,
                    out status, out x, out y, out z, out l, out m, out n, out exr, out exi, out eyr, out eyi, out ezr, out ezi,
                    out intensity, out pathLength, out xybin, out lmbin, out xNorm, out yNorm, out zNorm, out index, out startingPhase, out phaseOf,
                    out phaseAt);
                while (success_NextSegmentFull)
                {
                    Console.WriteLine(@"success_NextSegmentFull: {0}, segmentLevel: {1}, segmentParent: {2},
hitObj: {3}, hitFace: {4}, insideOf: {5}, status: {6},
x: {7}, y: {8}, z: {9},
l: {10}, m: {11}, n: {12},
exr: {13}, exi: {14}, 
eyr: {15}, eyi: {16}, 
ezr: {17}, ezi: {18},
intensity: {19}, pathLength: {20}, 
xybin: {21}, lmbin: {22},
xNorm: {23}, yNorm: {24}, zNorm: {25},
index: {26}, startingPhase: {27}, 
phaseOf: {28}, phaseAt: {29}
",
                                      success_NextSegmentFull, segmentLevel, segmentParent, hitObj, hitFace, insideOf, status,
                                      x, y, z, l, m, n, exr, exi, eyr, eyi, ezr, ezi, intensity, pathLength,
                                      xybin, lmbin, xNorm, yNorm, zNorm, index, startingPhase, phaseOf, phaseAt);
                    success_NextSegmentFull = ZRDResult.ReadNextSegmentFull(out segmentLevel, out segmentParent, out hitObj, out hitFace, out insideOf,
                        out status, out x, out y, out z, out l, out m, out n, out exr, out exi, out eyr, out eyi, out ezr, out ezi,
                        out intensity, out pathLength, out xybin, out lmbin, out xNorm, out yNorm, out zNorm, out index, out startingPhase, out phaseOf,
                        out phaseAt);
                }
                success_NextResult = ZRDResult.ReadNextResult(out rayNumber, out waveIndex, out wlUM, out numSegments);
            }
            ZRDReader.Close();
            //! [e27s03_cs]

            Console.ReadKey();



            // Clean up
            FinishStandaloneApplication(TheApplication);
        }
		
		static void FinishStandaloneApplication(IZOSAPI_Application TheApplication)
		{
            // Note - TheApplication will close automatically when this application exits, so this isn't strictly necessary in most cases
			if (TheApplication != null)
			{
				TheApplication.CloseApplication();
			}
		}

        static void LogInfo(string message)
        {
            // TODO - add custom logging
            Console.WriteLine(message);
        }

        static void HandleError(string errorMessage)
        {
            // TODO - add custom error handling
            throw new Exception(errorMessage);
        }

    }
}

```
