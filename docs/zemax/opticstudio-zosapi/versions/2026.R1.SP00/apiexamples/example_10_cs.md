# Example 10 - C#

```csharp
using System;
using ZOSAPI;
using ZOSAPI.Analysis;
using ZOSAPI.Analysis.Settings.RayTracing;
using ZOSAPI.Analysis.Data;
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

            // creates new directory
            string strPath = System.IO.Path.Combine(TheApplication.SamplesDir, @"API\CS");
            System.IO.Directory.CreateDirectory(strPath);

            //! [e10s01_cs]
            // Open File, Save to New Name
            string file = "\\Non-Sequential\\Ray Splitting\\Beam splitter.zos";
            TheSystem.LoadFile(TheApplication.SamplesDir + file, false);
            TheSystem.SaveAs(TheApplication.SamplesDir + "\\API\\CS\\e10_NSC_ray_trace.zos");
            //! [e10s01_cs]

            //! [e10s02_cs]
            // Run an NSC Ray Trace, Save .zrd file
            INSCRayTrace NSCRayTrace = TheSystem.Tools.OpenNSCRayTrace();  // Open NSC RayTrace tool
            NSCRayTrace.ClearDetectors(0);  // Clear all detectors
            // Set up RayTrace tool
            NSCRayTrace.IgnoreErrors = true;
            NSCRayTrace.SaveRays = true;
            NSCRayTrace.SaveRaysFile = "e10_API_RayTrace.ZRD";  // Saves to same directory as lens file
            NSCRayTrace.RunAndWaitForCompletion();
            NSCRayTrace.Close();
            //! [e10s02_cs]

            //! [e10s03_cs]
            // Open Detector Viewer, view previously saved .zrd file
            IA_ DetectorView = TheSystem.Analyses.New_DetectorViewer();
            IAS_DetectorViewer DetectorView_Settings = DetectorView.GetSettings() as IAS_DetectorViewer;
            DetectorView_Settings.RayDatabaseFilename = "e10_API_RayTrace.ZRD";
            DetectorView_Settings.ShowAs = DetectorViewerShowAsTypes.FalseColor;
            DetectorView_Settings.Filter = "X_HIT(2, 4)";  // Detector will only display rays which hit object 2 exactly 4 times

            DetectorView.ApplyAndWaitForCompletion();  // Apply Settings to Detector Viewer
            //! [e10s03_cs]

            //! [e10s04_cs]
            // Retrieve detector data and detector information
            INonSeqEditor TheNCE = TheSystem.NCE;

            Double total_hits, total_flux;
            Boolean hits_bool_return, flux_bool_return, dims_bool_return;
            UInt32 X_detectorDims, Y_detectorDims;
            hits_bool_return = TheNCE.GetDetectorData(4, -3, 0, out total_hits);  // Object Number=4, Pix -3 & Data=0 (total hits)
            flux_bool_return = TheNCE.GetDetectorData(4, 0, 0, out total_flux);  // Object Number=4, Pix=0 & Data=0 (total flux)
            dims_bool_return = TheNCE.GetDetectorDimensions(4, out X_detectorDims, out Y_detectorDims);  // get number of pixels in X, Y
            Console.WriteLine("total hits  = " + total_hits + "\n" + "total flux =  " + total_flux);

            UInt32 length = X_detectorDims * Y_detectorDims;
            Double[] pix = new Double[length];  // Create array to store flux data for each pixel
            Boolean pix_bool;
            // mrh: should this be 0 or 1 index, the first Pix# is 1
            for (int i = 0; i < length; i++) // loop through pixels, store value in pix
            {
                pix_bool = TheNCE.GetDetectorData(4, i, 0, out pix[i]);
            }
            //! [e10s04_cs]

            //! [e10s05_cs]
            // Save Ray Path Analysis to Text File
            if (TheApplication.LicenseStatus == ZOSAPI.LicenseStatusType.PremiumEdition)
            {
                IA_ RayPath = TheSystem.Analyses.New_Analysis(AnalysisIDM.PathAnalysis);
                ZOSAPI.Analysis.RayTracing.IAS_PathAnalysis RayPath_settings = RayPath.GetSettings() as ZOSAPI.Analysis.RayTracing.IAS_PathAnalysis;
                RayPath_settings.RayDatabaseFile = "e10_API_RayTrace.ZRD";
                RayPath.ApplyAndWaitForCompletion();
                IAR_ Rays = RayPath.GetResults();
                Rays.GetTextFile(TheApplication.SamplesDir + "\\API\\CS\\e10_RayPathAnalysis.txt");
            }
            else
            {
                Console.Write("\nThe RayPathAnalysis is a premium feature only\n\nPress any key to continue\n");
                Console.ReadKey();
            }
            //! [e10s05_cs]

            // Save!
            TheSystem.Save();

            Console.WriteLine("Finished! Press any key to leave...");
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
