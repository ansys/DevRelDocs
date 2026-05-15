# Example 22 - C#

```csharp
using System;
using ZOSAPI;

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

            // creates new directory
            string strPath = System.IO.Path.Combine(TheApplication.SamplesDir, @"API\CS");
            System.IO.Directory.CreateDirectory(strPath);

            // Set up primary optical system
            string sampleDir = TheApplication.SamplesDir;
            string testFile = System.IO.Path.Combine(sampleDir, "Sequential\\Objectives\\Double Gauss 28 degree field.zos");
            TheSystem.LoadFile(testFile, false);

            //! [e22s01_cs]
            // Set up Batch Ray Trace
            ZOSAPI.Tools.RayTrace.IBatchRayTrace raytrace = TheSystem.Tools.OpenBatchRayTrace();
            int nsur = TheSystem.LDE.NumberOfSurfaces;
            int max_rays = 30;
            ZOSAPI.Tools.RayTrace.IRayTraceNormUnpolData normUnPolData = raytrace.CreateNormUnpol((max_rays + 1) * (max_rays + 1), ZOSAPI.Tools.RayTrace.RaysType.Real, nsur);
            //! [e22s01_cs]

            //! [e22s02_cs]
            // Define batch ray trace constants
            double hx = 0.0;
            int max_wave = TheSystem.SystemData.Wavelengths.NumberOfWavelengths;
            int num_fields = TheSystem.SystemData.Fields.NumberOfFields;
            double[] hy_ary = new double[] { 0, 0.707, 1 };
            //! [e22s02_cs]

            // Initialize x/y image plane arrays
            double[,,] x_ary = new double[num_fields, max_wave, (max_rays + 1) * (max_rays + 1)];
            double[,,] y_ary = new double[num_fields, max_wave, (max_rays + 1) * (max_rays + 1)];

            //! [e22s03_cs]
            // Determine maximum field in Y only
            double max_field = 0.0;
            for (int i = 1; i <= num_fields; i++)
            {
                if (TheSystem.SystemData.Fields.GetField(i).Y > max_field)
                {
                    max_field = TheSystem.SystemData.Fields.GetField(i).Y;
                }
            }
            //! [e22s03_cs]

            Random rand = new Random();

            System.Text.StringBuilder sbReport = new System.Text.StringBuilder();
            sbReport.AppendLine("Field \t Wave \t x \t y");

            for (int field = 1; field <= num_fields; field++)
            {
                for (int wave = 1; wave <= max_wave; wave++)
                {
                    //! [e22s04_cs]
                    // Adding Rays to Batch, varying normalised object height hy
                    normUnPolData.ClearData();
                    int waveNumber = wave;
                    for (int i = 1; i <= ((max_rays + 1) * (max_rays + 1)); i++)
                    {
                        double px, py;
                        px = rand.NextDouble() * 2 - 1;
                        py = rand.NextDouble() * 2 - 1;
                        while ((Math.Pow(px, 2) + Math.Pow(py, 2)) > 1)
                        {
                            py = rand.NextDouble() * 2 - 1;
                        }
                        normUnPolData.AddRay(waveNumber, hx, hy_ary[field - 1], px, py, ZOSAPI.Tools.RayTrace.OPDMode.None);
                    }
                    //! [e22s04_cs]

                    // Run Batch Ray Trace
                    raytrace.RunAndWaitForCompletion();

                    //! [e22s05_cs]
                    // Read batch raytrace and save results
                    normUnPolData.StartReadingResults();
                    int rayNumber, ErrorCode, vignetteCode;
                    double double_X, double_Y, double_Z, double_L, double_M, double_N, double_L2, double_M2, double_N2, OPD, Intensity;
                    bool success;

                    success = normUnPolData.ReadNextResult(out rayNumber, out ErrorCode, out vignetteCode, out double_X, out double_Y, out double_Z, out double_L, out double_M, out double_N, out double_L2, out double_M2, out double_N2, out OPD, out Intensity);
                    while (success)
                    {
                        if ((ErrorCode == 0) && (vignetteCode == 0))
                        {
                            x_ary[field - 1, wave - 1, rayNumber - 1] = double_X;
                            y_ary[field - 1, wave - 1, rayNumber - 1] = double_Y;
                            sbReport.AppendLine((field).ToString() + "\t" + (wave).ToString() + "\t" + double_X.ToString() + "\t" + double_Y.ToString());
                        }
                        success = normUnPolData.ReadNextResult(out rayNumber, out ErrorCode, out vignetteCode, out double_X, out double_Y, out double_Z, out double_L, out double_M, out double_N, out double_L2, out double_M2, out double_N2, out OPD, out Intensity);
                    }
                    sbReport.AppendLine("");
                    //! [e22s05_cs]
                }
            }

            string resFile = System.IO.Path.Combine(sampleDir, "API\\CS\\e22_seq_spot_diagram.txt");
            System.IO.File.WriteAllText(resFile, sbReport.ToString());

            //! [e22s06_cs]
            // Spot Diagram Analysis Results
            ZOSAPI.Analysis.IA_ spot = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.StandardSpot);
            ZOSAPI.Analysis.Settings.Spot.IAS_Spot spot_setting = (ZOSAPI.Analysis.Settings.Spot.IAS_Spot)spot.GetSettings();
            spot_setting.Field.SetFieldNumber(0);
            spot_setting.Wavelength.SetWavelengthNumber(0);
            spot_setting.ReferTo = ZOSAPI.Analysis.Settings.Spot.Reference.Centroid;
            //! [e22s06_cs]

            //! [e22s07_cs]
            // Extract RMS & Geo spot size for field points
            spot.ApplyAndWaitForCompletion();
            ZOSAPI.Analysis.Data.IAR_ spot_results = spot.GetResults();
            Console.WriteLine("RMS radius: {0:F3}  {1:F3}  {2:F3}", spot_results.SpotData.GetRMSSpotSizeFor(1, 1), spot_results.SpotData.GetRMSSpotSizeFor(2, 1), spot_results.SpotData.GetRMSSpotSizeFor(3, 1));
            Console.WriteLine("GEO radius: {0:F3}  {1:F3}  {2:F3}", spot_results.SpotData.GetGeoSpotSizeFor(1, 1), spot_results.SpotData.GetGeoSpotSizeFor(2, 1), spot_results.SpotData.GetGeoSpotSizeFor(3, 1));
            //! [e22s07_cs]
            Console.WriteLine("Press any key to continue...");
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
