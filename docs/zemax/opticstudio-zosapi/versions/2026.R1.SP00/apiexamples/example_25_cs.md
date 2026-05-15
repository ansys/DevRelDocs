# Example 25 - C#

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

            //! [e25s01_cs]
            // Initializes NCE and loads surfaces
            // Inserts objects
            INonSeqEditor TheNCE = TheSystem.NCE;
            TheNCE.InsertNewObjectAt(1);
            TheNCE.InsertNewObjectAt(1);
            TheNCE.InsertNewObjectAt(1);
            TheNCE.InsertNewObjectAt(1);
            //! [e25s01_cs]

            INCERow o1 = TheNCE.GetObjectAt(1);
            INCERow o2 = TheNCE.GetObjectAt(2);
            INCERow o3 = TheNCE.GetObjectAt(3);
            INCERow o4 = TheNCE.GetObjectAt(4);
            INCERow o5 = TheNCE.GetObjectAt(5);

            //! [e25s02_cs]
            // Changes Object Type
            o1.ChangeType(o1.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.SourceDiode));
            o2.ChangeType(o2.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.SourceDiode));
            o3.ChangeType(o3.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.NullObject));
            o4.ChangeType(o4.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.DiffractionGrating));
            o5.ChangeType(o5.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.DetectorColor));
            //! [e25s02_cs]

            // Sets positions & materials
            o3.ZPosition = 10;
            o3.TiltAboutX = 10;
            o4.RefObject = 3;
            o4.Material = "MIRROR";
            o5.YPosition = 8.45;
            o5.TiltAboutX = 40;

            // Sets parameters
            o1.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par7).DoubleValue = 5;
            o2.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par7).DoubleValue = 5;
            o4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par10).DoubleValue = 0.6;
            o4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par11).DoubleValue = 1;

            //! [e25s03_cs]
            // Changes sourcecolor to Blackbody, sets temperature, min/ max wavelength
            o1.SourcesData.SourceColor = ZOSAPI.Editors.NCE.SourceColorMode.BlackBodySpectrum;
            o1.SourcesData.SourceColorSettings._S_BlackBodySpectrum.TemperatureK = 6000;
            o1.SourcesData.SourceColorSettings._S_BlackBodySpectrum.WavelengthFrom = 0.45;
            o1.SourcesData.SourceColorSettings._S_BlackBodySpectrum.WavelengthTo = 0.65;
            //! [e25s03_cs]

            o2.SourcesData.SourceColor = ZOSAPI.Editors.NCE.SourceColorMode.BlackBodySpectrum;
            o2.SourcesData.SourceColorSettings._S_BlackBodySpectrum.TemperatureK = 6000;
            o2.SourcesData.SourceColorSettings._S_BlackBodySpectrum.SpectrumCount = 100;
            o2.SourcesData.SourceColorSettings._S_BlackBodySpectrum.WavelengthFrom = 0.4;
            o2.SourcesData.SourceColorSettings._S_BlackBodySpectrum.WavelengthTo = 0.7;

            //! [e25s04_cs]
            // Sets up the MCE, adds configuration &operands
            ZOSAPI.Editors.MCE.IMultiConfigEditor TheMCE = TheSystem.MCE;
            TheMCE.AddConfiguration(false);
            TheMCE.AddOperand();
            TheMCE.AddOperand();
            TheMCE.AddOperand();
            //! [e25s04_cs]

            //! [e25s05_cs]
            // change MCE to NPAR, modifies the number of Layout Rays for a Source
            for (int a = 1; a <= 4; a++)
            {
                TheMCE.GetOperandAt(a).ChangeType(ZOSAPI.Editors.MCE.MultiConfigOperandType.NPAR);
            }
            TheMCE.GetOperandAt(1).Param2 = 1;
            TheMCE.GetOperandAt(1).Param3 = 1;
            TheMCE.GetOperandAt(1).GetOperandCell(1).DoubleValue = 200;
            TheMCE.GetOperandAt(1).GetOperandCell(2).DoubleValue = 0;
            //! [e25s05_cs]

            TheMCE.GetOperandAt(2).Param2 = 1;
            TheMCE.GetOperandAt(2).Param3 = 2;
            TheMCE.GetOperandAt(2).GetOperandCell(1).DoubleValue = 1000000;
            TheMCE.GetOperandAt(2).GetOperandCell(2).DoubleValue = 0;

            TheMCE.GetOperandAt(3).Param2 = 2;
            TheMCE.GetOperandAt(3).Param3 = 1;
            TheMCE.GetOperandAt(3).GetOperandCell(1).DoubleValue = 0;
            TheMCE.GetOperandAt(3).GetOperandCell(2).DoubleValue = 200;

            TheMCE.GetOperandAt(4).Param2 = 2;
            TheMCE.GetOperandAt(4).Param3 = 2;
            TheMCE.GetOperandAt(4).GetOperandCell(1).DoubleValue = 0;
            TheMCE.GetOperandAt(4).GetOperandCell(2).DoubleValue = 1000000;

            // Setup detector color
            double x_width = 1.5, y_width = 1.5;
            int x_pixel = 500, y_pixel = 500;
            (o5.ObjectData as IObjectDetectorColor).XHalfWidth = x_width;
            (o5.ObjectData as IObjectDetectorColor).YHalfWidth = y_width;
            (o5.ObjectData as IObjectDetectorColor).NumberXPixels = x_pixel;
            (o5.ObjectData as IObjectDetectorColor).NumberYPixels = y_pixel;



            // initializes StringBuilder
            System.Text.StringBuilder sbReport = new System.Text.StringBuilder();
            string resFile;
            for (var a = 1; a <= TheMCE.NumberOfConfigurations; a++)
            {
                TheMCE.SetCurrentConfiguration(a);

                // Setup and run the ray trace
                ZOSAPI.Tools.RayTrace.INSCRayTrace NSCRayTrace = TheSystem.Tools.OpenNSCRayTrace();
                NSCRayTrace.ClearDetectors(0);
                NSCRayTrace.SplitNSCRays = false;
                NSCRayTrace.ScatterNSCRays = false;
                NSCRayTrace.UsePolarization = false;
                NSCRayTrace.IgnoreErrors = true;
                NSCRayTrace.SaveRays = false;
                NSCRayTrace.RunAndWaitForCompletion();
                NSCRayTrace.Close();

                Console.WriteLine("Finished ray trace");

                //! [e25s06_cs]
                // Creates a new detector viewer window, changes to true color
                ZOSAPI.Analysis.IA_ det = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.DetectorViewer);
                ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer det_settings = det.GetSettings() as ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer;
                det_settings.ShowAs = ZOSAPI.Analysis.DetectorViewerShowAsTypes.TrueColor;
                det.ApplyAndWaitForCompletion();

                // Creates System.Single[] buffers to store pixel data
                Single[] rData = new float[(int)(x_pixel * y_pixel)];
                Single[] gData = new float[(int)(x_pixel * y_pixel)];
                Single[] bData = new float[(int)(x_pixel * y_pixel)];
                //! [e25s06_cs]

                //! [e25s07_cs]
                // Loads RGB data into System.Single buffer
                ZOSAPI.Analysis.Data.IAR_ det_results = det.GetResults();
                ZOSAPI.Analysis.Data.IAR_DataGridRgb det_raw = det_results.GetDataGridRgb(0) as ZOSAPI.Analysis.Data.IAR_DataGridRgb;
                det_raw.FillValues((uint)(x_pixel * y_pixel), rData, gData, bData);
                //! [e25s07_cs]

                sbReport.Append(string.Concat("Red:   ", string.Join(", ", rData), "\nGreen: ", string.Join(", ", gData), "\nBlue:  ", string.Join(", ", bData)));

                resFile = TheApplication.SamplesDir + "\\API\\CS\\e25_source_spectrum_diffraction_grating_" + a + ".txt";
                System.IO.File.WriteAllText(resFile, sbReport.ToString());
                sbReport.Clear();
            }

            TheSystem.SaveAs(TheApplication.SamplesDir + "\\API\\CS\\e25_source_spectrum_diffraction_grating.zos");

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
