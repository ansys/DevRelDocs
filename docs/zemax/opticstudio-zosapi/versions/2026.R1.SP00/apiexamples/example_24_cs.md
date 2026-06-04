# Example 24 - C#

```csharp
using System;
using ZOSAPI;
using ZOSAPI.Editors.NCE;

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
            TheSystem = TheApplication.CreateNewSystem(ZOSAPI.SystemType.NonSequential);
            TheSystem.SystemData.MaterialCatalogs.AddCatalog("Schott");
            string sampleDir = TheApplication.SamplesDir;

            //! [e24s01_cs]
            // Initializes NCE and loads surfaces
            // Inserts objects
            ZOSAPI.Editors.NCE.INonSeqEditor TheNCE = TheSystem.NCE;
            for (int a = 1; a <= 4; a++) TheNCE.InsertNewObjectAt(a);
            //! [e24s01_cs]

            //! [e24s02_cs]
            // Gets reference to specific object
            ZOSAPI.Editors.NCE.INCERow o1 = TheNCE.GetObjectAt(1);
            INCERow o2 = TheNCE.GetObjectAt(2);
            INCERow o3 = TheNCE.GetObjectAt(3);
            INCERow o4 = TheNCE.GetObjectAt(4);
            INCERow o5 = TheNCE.GetObjectAt(5);
            //! [e24s02_cs]

            //! [e24s03_cs]
            // Changes Object Type
            TheNCE.GetObjectAt(1).ChangeType(o1.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.SourceEllipse));
            o2.ChangeType(o2.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.AsphericSurface2));
            o3.ChangeType(o3.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.StandardLens));
            o4.ChangeType(o4.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.DetectorColor));
            o5.ChangeType(o5.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.DetectorRectangle));
            //! [e24s03_cs]

            //! [e24s04_cs]
            // Sets positions & materials
            TheNCE.GetObjectAt(2).XPosition = 1.5;
            TheNCE.GetObjectAt(2).ZPosition = 9.99;
            TheNCE.GetObjectAt(2).Material = "ABSORB";
            //! [e24s04_cs]
            o3.YPosition = 1.5;
            o3.ZPosition = 8.99;
            o3.Material = "N-BK7";
            o4.ZPosition = 10;
            o5.RefObject = 4;
            o5.ZPosition = 1e-3;

            //! [e24s05_cs]
            // Sets layout rays based on parameter number
            TheNCE.GetObjectAt(1).GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par1).IntegerValue = 100;
            // Sets analysis rays based on object data column
            ZOSAPI.Editors.NCE.IObjectSourceEllipse sourcedata = o1.ObjectData as ZOSAPI.Editors.NCE.IObjectSourceEllipse;
            sourcedata.NumberOfAnalysisRays = (int)1E6;
            //! [e24s05_cs]
            o1.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par10).DoubleValue = 50;
            o1.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par11).DoubleValue = 50;

            o2.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par3).DoubleValue = 0.5;
            o2.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par4).DoubleValue = 1;
            o2.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par9).IntegerValue = 1;

            o4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par1).DoubleValue = 8.223;
            o4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par2).DoubleValue = 2.565;
            o4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par3).IntegerValue = 200;
            o4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par4).IntegerValue = 150;

            double o5_x = 10.0;
            double o5_y = 12.23;
            o5.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par1).DoubleValue = o5_x;
            o5.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par2).DoubleValue = o5_y;
            o5.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par3).IntegerValue = 100;
            o5.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par4).IntegerValue = 100;

            //! [e24s06_cs]
            // Changes face type and coating properties
            TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(0).FaceIs = ZOSAPI.Editors.NCE.FaceIsType.Absorbing;
            TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(1).FaceIs = ZOSAPI.Editors.NCE.FaceIsType.ObjectDefault;
            TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(1).Coating = "I.50";
            //! [e24s06_cs]

            //! [e24s07_cs]
            // changes scatter profile on face
            ZOSAPI.Editors.NCE.IObjectScatteringSettings o3_Scatter = TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(2).CreateScatterModelSettings(ZOSAPI.Editors.NCE.ObjectScatteringTypes.Lambertian);
            o3_Scatter._S_Lambertian.ScatterFraction = 0.5;
            TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(2).ChangeScatterModelSettings(o3_Scatter);
            TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(2).NumberOfRays = 2;
            //! [e24s07_cs]

            //! [e24s08_cs]
            // Removes pixel interpolation for the detector
            o4.TypeData.UsePixelInterpolation = false;
            //! [e24s08_cs]

            //! [e24s09_cs]
            // Setup and run the ray trace
            ZOSAPI.Tools.RayTrace.INSCRayTrace NSCRayTrace = TheSystem.Tools.OpenNSCRayTrace();
            NSCRayTrace.SplitNSCRays = false;
            NSCRayTrace.ScatterNSCRays = true;
            NSCRayTrace.UsePolarization = false;
            NSCRayTrace.IgnoreErrors = true;
            NSCRayTrace.SaveRays = false;
            NSCRayTrace.ClearDetectors(0);

            NSCRayTrace.RunAndWaitForCompletion();
            NSCRayTrace.Close();
            //! [e24s09_cs]



            // Reads in values from NCE for detector settings
            int obj = 4;
            double x_half = TheSystem.NCE.GetObjectAt(obj).GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par1).DoubleValue;
            double y_half = TheSystem.NCE.GetObjectAt(obj).GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par2).DoubleValue;
            double x_pixels = (double)TheSystem.NCE.GetObjectAt(obj).GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par3).IntegerValue;
            double y_pixels = (double)TheSystem.NCE.GetObjectAt(obj).GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par4).IntegerValue;

            //! [e24s10_cs]
            // Creates a new detector viewer analysis reference
            ZOSAPI.Analysis.IA_ d4 = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.DetectorViewer);

            ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer d4_settings = d4.GetSettings() as ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer;
            d4_settings.Detector.SetDetectorNumber(4);
            d4_settings.ShowAs = ZOSAPI.Analysis.DetectorViewerShowAsTypes.TrueColor;
            d4.ApplyAndWaitForCompletion();

            ZOSAPI.Analysis.Data.IAR_ d4_Results = d4.GetResults();
            ZOSAPI.Analysis.Data.IAR_DataGridRgb d4_raw = d4_Results.GetDataGridRgb(0) as ZOSAPI.Analysis.Data.IAR_DataGridRgb;
            //! [e24s10_cs]

            //! [e24s11_cs]
            // Creates System.Single[] buffers to store pixel data
            // Required any time Interface Documentation shows a Single[] or Double[] output
            Single[] rData = new Single[(int)(x_pixels * y_pixels)];
            Single[] gData = new Single[(int)(x_pixels * y_pixels)];
            Single[] bData = new Single[(int)(x_pixels * y_pixels)];
            //! [e24s11_cs]

            //! [e24s12_cs]
            // Reads values from detector color raw data
            // Prints RGB data into single file
            d4_raw.FillValues((uint)(x_pixels * y_pixels), rData, gData, bData);
            //! [e24s12_cs]
            System.Text.StringBuilder sbReport = new System.Text.StringBuilder();
            sbReport.Append(string.Concat("Red:   ", string.Join(", ", rData), "\nGreen: ", string.Join(", ", gData), "\nBlue:  ", string.Join(", ", bData)));
            string resFile = TheApplication.SamplesDir + "\\API\\CS\\e24_nsc_detector_rgb.txt";
            System.IO.File.WriteAllText(resFile, sbReport.ToString());


            //! [e24s13_cs]
            // Changes default values for Detector Viewer
            // Plots the Incoherent Irradiance in False Color
            ZOSAPI.Analysis.IA_ d5 = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.DetectorViewer);
            ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer d5_set = d5.GetSettings() as ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer;
            d5_set.Detector.SetDetectorNumber(5);
            d5_set.ShowAs = ZOSAPI.Analysis.DetectorViewerShowAsTypes.FalseColor;
            d5.ApplyAndWaitForCompletion();
            ZOSAPI.Analysis.Data.IAR_ d5_results = d5.GetResults();
            double[,] d5_values = d5_results.GetDataGrid(0).Values;
            //! [e24s13_cs]

            sbReport.Clear();
            double max_value = 0.0;
            for (int i = 0; i < d5_values.GetLength(0); i++)
            {
                for (int j = 0; j < d5_values.GetLength(1); j++)
                {
                    if (d5_values[i, j] > max_value) max_value = d5_values[i, j];
                    sbReport.Append(d5_values[i, j] + "\t");
                }
                sbReport.AppendLine("");
            }
            resFile = TheApplication.SamplesDir + "\\API\\CS\\e24_nsc_detector_falsecolor.txt";
            System.IO.File.WriteAllText(resFile, sbReport.ToString());
            Console.WriteLine("The max value is {0:F2}", max_value);

            //! [e24s14_cs]
            // Saves current system in memory
            TheSystem.SaveAs(TheApplication.SamplesDir + "\\API\\CS\\e24_nsc_detectors.zos");
            //! [e24s14_cs]

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
