# Example 02 - C#

```csharp
using System;
using ZOSAPI;
using ZOSAPI.Editors.NCE;
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

            // creates a new API directory
            string strPath = System.IO.Path.Combine(TheApplication.SamplesDir, @"API\CS");
            System.IO.Directory.CreateDirectory(strPath);

            // Set up primary optical system
            TheSystem = TheApplication.PrimarySystem;
            string sampleDir = TheApplication.SamplesDir;

            //! [e02s01_cs]
            // Open file
            string testFile = sampleDir + "\\Non-sequential\\Miscellaneous\\Digital_projector_flys_eye_homogenizer.zos";
            TheSystem.LoadFile(testFile, false);
            //! [e02s01_cs]

            //! [e02s02_cs]
            // Create ray trace
            INSCRayTrace NSCRayTrace = TheSystem.Tools.OpenNSCRayTrace();
            NSCRayTrace.SplitNSCRays = true;
            NSCRayTrace.ScatterNSCRays = false;
            NSCRayTrace.UsePolarization = true;
            NSCRayTrace.IgnoreErrors = true;
            NSCRayTrace.SaveRays = false;

            // Run ray trace
            NSCRayTrace.RunAndWaitForCompletion();
            NSCRayTrace.Close();
            //! [e02s02_cs]

            // Non-sequential component editor
            INonSeqEditor TheNCE = TheSystem.NCE;

            //! [e02s03_cs]
            // Get detector data
            System.Text.StringBuilder sbReport = new System.Text.StringBuilder();
            double[,] detectorData = new double[100, 100];
            for (int i = 0; i < 99; i++)
            {
                for (int j = 0; j < 99; j++)
                {
                    TheNCE.GetDetectorData(4, j + i * 100, 1, out detectorData[i, j]);
                    sbReport.Append(detectorData[i, j].ToString() + "\t");
                }
                sbReport.AppendLine("");
            }
            string resFile = TheApplication.SamplesDir + "\\API\\CS\\e02_NSC_ray_trace.txt";
            System.IO.File.WriteAllText(resFile, sbReport.ToString());
            //! [e02s03_cs]

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
