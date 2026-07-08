# Example 23 - C#

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

            int max_rays = 150;
            //! [e23s01_cs]
            // determines the max field number and max field value
            double max_field = 0;
            for (int i = 1; i <= TheSystem.SystemData.Fields.NumberOfFields; i++)
            {
                if (TheSystem.SystemData.Fields.GetField(i).Y > max_field) max_field = TheSystem.SystemData.Fields.GetField(i).Y;
            }
            int max_num_field = TheSystem.SystemData.Fields.NumberOfFields;
            //! [e23s01_cs]

            System.Diagnostics.Stopwatch stopWatch = new System.Diagnostics.Stopwatch();
            stopWatch.Start();

            //! [e23s02_cs]
            // Set up Batch Ray Trace
            ZOSAPI.Tools.RayTrace.IBatchRayTrace raytrace = TheSystem.Tools.OpenBatchRayTrace();
            int nsur = TheSystem.LDE.NumberOfSurfaces;
            ZOSAPI.Tools.RayTrace.IRayTraceNormUnpolData normUnPolData = raytrace.CreateNormUnpol(max_rays + 1, ZOSAPI.Tools.RayTrace.RaysType.Real, nsur);
            //! [e23s02_cs]

            //! [e23s03_cs]
            // define batch ray trace constants
            double hx = 0, px = 0;
            double[] py_ary = new double[max_rays + 1];
            for (int i = 0; i <= max_rays; i++)
            {
                py_ary[i] = i / (double)max_rays * 2 - 1;
            }
            int max_wave = TheSystem.SystemData.Wavelengths.NumberOfWavelengths;
            //! [e23s03_cs]

            //! [e23s04_cs]
            // image surface number and primary wavelength
            int pwav = 0;
            for (int a = 1; a <= TheSystem.SystemData.Wavelengths.NumberOfWavelengths; a++)
            {
                if (TheSystem.SystemData.Wavelengths.GetWavelength(a).IsPrimary)
                    pwav = a;
            }

            // creates array of Y coordinate chief ray values
            double[] chief_ary = new double[max_num_field];
            for (int field = 1; field <= max_num_field; field++)
            {
                double hy = TheSystem.SystemData.Fields.GetField(field).Y / max_field;
                // gets single value without using MFE(see ZPL OPEV)
                chief_ary[field - 1] = TheSystem.MFE.GetOperandValue(ZOSAPI.Editors.MFE.MeritOperandType.REAY, nsur, pwav, 0, hy, 0, 0, 0, 0);
            }
            //! [e23s04_cs]

            // initialize x / y image plane arrays
            double[,,] y_ary = new double[max_num_field, max_wave, max_rays + 1];

            System.Text.StringBuilder sbReport = new System.Text.StringBuilder();
            sbReport.AppendLine("Manual Code");
            sbReport.AppendLine("Field \t Wave \t x \t y");

            for (int field = 1; field <= max_num_field; field++)
            {
                double hy = TheSystem.SystemData.Fields.GetField(field).Y / max_field;
                for (int wave = 1; wave <= max_wave; wave++)
                {
                    //! [e23s05_cs]
                    // Adding Rays to Batch, varying normalised object height hy
                    normUnPolData.ClearData();
                    for (int i = 0; i <= max_rays; i++)
                    {
                        double py = py_ary[i];
                        normUnPolData.AddRay(wave, hx, hy, px, py, ZOSAPI.Tools.RayTrace.OPDMode.None);
                    }
                    //! [e23s05_cs]

                    //! [e23s06_cs]
                    // Run Batch Ray Trace
                    raytrace.RunAndWaitForCompletion();
                    //! [e23s06_cs]

                    //! [e23s07_cs]
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
                            y_ary[field - 1, wave - 1, rayNumber - 1] = double_Y;
                            sbReport.AppendLine((field).ToString() + "\t" + (wave).ToString() + "\t" + py_ary[rayNumber - 1].ToString() + "\t" + ((double_Y - chief_ary[field - 1]) * 1000).ToString());
                        }
                        success = normUnPolData.ReadNextResult(out rayNumber, out ErrorCode, out vignetteCode, out double_X, out double_Y, out double_Z, out double_L, out double_M, out double_N, out double_L2, out double_M2, out double_N2, out OPD, out Intensity);
                    }
                    sbReport.AppendLine("");
                    //! [e23s07_cs]
                }
            }

            double manual = (double)stopWatch.ElapsedMilliseconds / 1000;
            stopWatch.Reset();
            stopWatch.Start();

            //! [e23s08_cs]
            // runs a ray fan analysis and extracts 
            ZOSAPI.Analysis.IA_ ray = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.RayFan);
            ZOSAPI.Analysis.Settings.Fans.IAS_Fan ray_settings = (ZOSAPI.Analysis.Settings.Fans.IAS_Fan)ray.GetSettings();
            ray_settings.NumberOfRays = max_rays / 2;
            ray_settings.Field.UseAllFields();
            ray_settings.Wavelength.UseAllWavelengths();

            ray.ApplyAndWaitForCompletion();
            ZOSAPI.Analysis.Data.IAR_ ray_results = ray.GetResults();
            //! [e23s08_cs]

            double native = (double)stopWatch.ElapsedMilliseconds / 1000;

            sbReport.AppendLine("Native Code");
            for (int field = 1; field <= max_num_field; field++)
            {
                //! [e23s09_cs]
                // Read the results
                double[] x = new double[ray_results.DataSeries[field * 2 - 2].XData.Length];
                double[,] y = new double[ray_results.DataSeries[field * 2 - 2].YData.Rows, ray_results.DataSeries[field * 2 - 2].YData.Cols];

                x = ray_results.DataSeries[field * 2 - 2].XData.Data;
                y = ray_results.DataSeries[field * 2 - 2].YData.Data;
                for (int row = 0; row < x.Length; row++)
                {
                    sbReport.Append(x[row].ToString() + '\t');
                    for (int col = 0; col < ray_results.DataSeries[field * 2 - 2].YData.Cols; col++)
                    {
                        sbReport.Append(y[row, col].ToString() + '\t');
                    }
                    sbReport.Append('\n');
                }
                sbReport.AppendLine("");
                //! [e23s09_cs]
            }

            // outputs execution time
            Console.WriteLine("Elapsed time is {0:F4} seconds with native code", native);
            Console.WriteLine("Elapsed time is {0:F4} seconds with manual code", manual);

            // writes data to file
            string resFile = System.IO.Path.Combine(sampleDir, "API\\CS\\e23_ray_fan_native_manual_comparison.txt");
            System.IO.File.WriteAllText(resFile, sbReport.ToString());

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
