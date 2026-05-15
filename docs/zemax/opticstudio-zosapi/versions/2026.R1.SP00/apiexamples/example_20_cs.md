# Example 20 - C#

```csharp
using System;
using ZOSAPI;
using ZOSAPI.Tools;
using ZOSAPI.Tools.General;


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
            // Load a non-sequential file
            TheSystem.LoadFile(TheApplication.SamplesDir + "\\Non-Sequential\\Miscellaneous\\Digital_projector_flys_eye_homogenizer.zos", false);

            //! [e20s01_cs]
            // Get interface of IExportCAD
            IExportCAD ToolExportCAD = TheSystem.Tools.OpenExportCAD();
            //! [e20s01_cs]

            //! [e20s02_cs]
            // default option settings
            ToolExportCAD.FirstObject = 1;
            ToolExportCAD.LastObject = 8;
            ToolExportCAD.RayLayer = 1;
            ToolExportCAD.LensLayer = 0;
            ToolExportCAD.DummyThickness = 1;
            ToolExportCAD.SplineSegments = SplineSegmentsType.N_032;
            ToolExportCAD.FileType = CADFileType.STEP;
            ToolExportCAD.Tolerance = CADToleranceType.N_TenEMinus4;
            ToolExportCAD.SetCurrentConfiguration();
            // For other configuration choices, use following methods.
            //ToolExportCAD.SetConfigurationAllAtOnce();
            //ToolExportCAD.SetConfigurationAllByFile();
            //ToolExportCAD.SetConfigurationAllByLayer();
            //ToolExportCAD.SetSingleConfiguration(1);
            //! [e20s02_cs]

            //! [e20s03_cs]
            // default check boxes settings
            ToolExportCAD.SurfacesAsSolids = true;
            ToolExportCAD.ScatterNSCRays = false;
            ToolExportCAD.ExportDummySurfaces = false;
            ToolExportCAD.SplitNSCRays = false;
            ToolExportCAD.UsePolarization = false;
            //! [e20s03_cs]

            //! [e20s04_cs]
            // set output file name
            ToolExportCAD.OutputFileName = TheApplication.ObjectsDir + "\\CAD Files\\e20_export_CAD_File.step";
            //! [e20s04_cs]

            //! [e20s05_cs]
            // Starting exporting
            // Run with a 3 minites timeout
            Console.Write("Starting exporting...");
            ToolExportCAD.Run();
            RunStatus runstatus = ToolExportCAD.WaitWithTimeout(3 * 60);

            // Report the status
            switch (runstatus)
            {
                case RunStatus.Completed:
                    Console.WriteLine("Completed!");
                    break;
                case RunStatus.FailedToStart:
                    Console.WriteLine("Failed To Start!");
                    break;
                case RunStatus.InvalidTimeout:
                    Console.WriteLine("Invalid Timeout!");
                    break;
                case RunStatus.TimedOut:
                    Console.WriteLine("Timed Out!");
                    break;
            }
            Console.WriteLine("Progress: " + ToolExportCAD.Progress.ToString("000") + "%");

            // If the exporting is not completed and can be cancelled, cancel the work
            if (runstatus != RunStatus.Completed & ToolExportCAD.CanCancel)
            {
                ToolExportCAD.Cancel();
            }

            // Close the tool
            ToolExportCAD.Close();
            //! [e20s05_cs]

            Console.Write("Press any key to continue...");
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
