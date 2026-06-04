# Example 17 - C#

```csharp
using System;
using ZOSAPI;
using ZOSAPI.Analysis;
using ZOSAPI.Analysis.Settings;
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
            // NSC (bulk_volume)
            // This example recreates Non-sequential\Scattering\Bulk Scatter.zos

            // creates new directory
            string strPath = System.IO.Path.Combine(TheApplication.SamplesDir, @"API\CS");
            System.IO.Directory.CreateDirectory(strPath);

            //! [e17s01_cs]
            //Create a New File
            TheSystem.New(false);
            TheSystem.MakeNonSequential();
            //! [e17s01_cs]

            TheSystem.SystemData.MaterialCatalogs.AddCatalog("SCHOTT");

            //! [e17s02_cs]
            //Define path locations
            string SamplesFolder = TheApplication.SamplesDir;
            string SampleFile = System.IO.Path.Combine(TheApplication.SamplesDir, "API\\CS\\e17_NSC_BulkdScatter.zos");
            TheSystem.SaveAs(SampleFile);
            //! [e17s02_cs]

            //! [e17s03_cs]
            //Non-sequential component editor
            INonSeqEditor TheNCE = TheSystem.NCE;
            TheNCE = TheSystem.NCE;
            INCERow Object_1 = TheNCE.InsertNewObjectAt(1);
            INCERow Object_2 = TheNCE.InsertNewObjectAt(2);
            INCERow Object_3 = TheNCE.GetObjectAt(3);
            //! [e17s03_cs]

            //! [e17s04_cs]
            //Source point
            IObjectTypeSettings oType_1 = Object_1.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.SourcePoint);
            Object_1.ChangeType(oType_1);
            IObjectSourcePoint Source1_data = Object_1.ObjectData as IObjectSourcePoint;
            Source1_data.NumberOfLayoutRays = 3;
            Source1_data.NumberOfAnalysisRays = 1000000;
            //! [e17s04_cs]

            //! [e17s05_cs]
            //Rectangular Volume
            //Scattering properties
            //Draw:opacity set to 50%
            IObjectTypeSettings oType_2 = Object_2.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.RectangularVolume);
            Object_2.ChangeType(oType_2);
            Object_2.ZPosition = 2;
            Object_2.Material = "N-BK7";
            IObjectRectangularVolume RectVolume2_data = Object_2.ObjectData as IObjectRectangularVolume;
            RectVolume2_data.X1HalfWidth = 12;
            RectVolume2_data.Y1HalfWidth = 12;
            RectVolume2_data.ZLength = 40;
            RectVolume2_data.X2HalfWidth = 12;
            RectVolume2_data.Y2HalfWidth = 12;
            INCEVolumePhysicsData RectVolume2_volphysdata = Object_2.VolumePhysicsData;
            RectVolume2_volphysdata.Model = VolumePhysicsModelType.AngleScattering;
            RectVolume2_volphysdata.ModelSettings._S_AngleScattering.MeanPath = 5;
            RectVolume2_volphysdata.ModelSettings._S_AngleScattering.Angle = 30;
            INCEDrawData RectVolume2_Drawdata = Object_2.DrawData;
            RectVolume2_Drawdata.Opacity = ZOSAPI.Common.ZemaxOpacity.P50;
            //! [e17s05_cs]

            //! [e17s06_cs]
            //Detector Rectangle
            IObjectTypeSettings oType_3 = Object_3.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.DetectorRectangle);
            Object_3.RefObject = 2;
            Object_3.ZPosition = 42;
            Object_3.Material = "ABSORB";
            Object_3.ChangeType(oType_3);
            IObjectDetectorRectangle DetRect3_data = Object_3.ObjectData as IObjectDetectorRectangle;
            DetRect3_data.XHalfWidth = 15;
            DetRect3_data.YHalfWidth = 15;
            DetRect3_data.NumberXPixels = 25;
            DetRect3_data.NumberYPixels = 25;
            DetRect3_data.DataType = 0;
            DetRect3_data.Color = 2;
            DetRect3_data.Smoothing = 1;
            //! [e17s06_cs]

            TheSystem.SaveAs(SampleFile);

            //! [e17s07_cs]
            //Open a shaded model
            IA_ analysis = TheSystem.Analyses.New_Analysis(AnalysisIDM.NSCShadedModel);
            analysis.Terminate();
            analysis.WaitForCompletion();
            IAS_ analysisSettings = analysis.GetSettings();
            string cfgFile = System.IO.Path.GetTempFileName();
            // Save the current settings to the temp file
            analysisSettings.SaveTo(cfgFile);
            // make your modifications to it
            //MODIFYSETTINGS are defined in the ZPL help files: The Programming Tab > About the ZPL > Keywords
            analysisSettings.ModifySettings(cfgFile, "SHA_ROTX", "20");
            analysisSettings.ModifySettings(cfgFile, "SHA_ROTY", "-20");
            analysisSettings.ModifySettings(cfgFile, "SHA_ROTZ", "30");
            // now load in the modified settings
            analysisSettings.LoadFrom(cfgFile);
            // If you want to overwrite your default CFG, copy it after you are done modifying the settings:
            //string CFG_fullname = "\\zmedc02\\users\\sandrine.auriol\\Documents\\Zemax\\Configs\\POP.CFG";
            //System.IO.File.Copy(cfgFile, CFG_fullname, true);
            // We don't need the temp file any more, so delete it
            System.IO.File.Delete(cfgFile);
            // Run the analysis with the new settings
            analysis.ApplyAndWaitForCompletion();
            //! [e17s07_cs]

            //! [e17s08_cs]
            //Open a detector viewer
            analysis = TheSystem.Analyses.New_Analysis(AnalysisIDM.DetectorViewer);
            analysisSettings = analysis.GetSettings();
            cfgFile = System.IO.Path.GetTempFileName();
            analysisSettings.SaveTo(cfgFile);
            analysisSettings.ModifySettings(cfgFile, "DVW_SHOW", "2");
            analysisSettings.ModifySettings(cfgFile, "DVW_SMOOTHING", "1");
            analysisSettings.LoadFrom(cfgFile);
            System.IO.File.Delete(cfgFile);
            analysis.ApplyAndWaitForCompletion();
            //! [e17s08_cs]

            //! [e17s09_cs]
            //Run a ray trace
            INSCRayTrace NSCRayTrace = TheSystem.Tools.OpenNSCRayTrace();
            NSCRayTrace.SplitNSCRays = false;
            NSCRayTrace.ScatterNSCRays = true;
            NSCRayTrace.UsePolarization = false;
            NSCRayTrace.IgnoreErrors = true;
            NSCRayTrace.SaveRays = false;

            NSCRayTrace.ClearDetectors(0);
            NSCRayTrace.RunAndWaitForCompletion();
            NSCRayTrace.Close();
            //! [e17s09_cs]


            TheSystem.SaveAs(SampleFile);

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
