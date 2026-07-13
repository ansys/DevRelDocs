# Example 11 - C#

```csharp
using System;
using ZOSAPI;
using ZOSAPI.SystemData;
using ZOSAPI.Analysis;
using ZOSAPI.Analysis.Settings;
using ZOSAPI.Analysis.Settings.Spot;
using ZOSAPI.Editors.LDE;
using ZOSAPI.Tools.General;

namespace CSharpStandaloneApplication
{
    class Program
    {
        public static IScale ScaleLens { get; private set; }

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

            // Add your custom code here...
            //! [e11s01_cs]
            // Create New Sequential File
            TheSystem.New(false);
            // Name File
            String fileName = TheApplication.SamplesDir + "\\API\\CS\\e11_basic_seq.zos";
            TheSystem.SaveAs(fileName);
            //! [e11s01_cs]

            //! [e11s02_cs]
            // Changing System Explorer Settings
            // Set Aperture
            ISystemData TheSystemData = TheSystem.SystemData;
            TheSystemData.Aperture.ApertureValue = 20;
            TheSystem.SystemData.MaterialCatalogs.AddCatalog("SCHOTT");

            // Set Apodization Type to Gaussian, and set apodization factor to 1
            TheSystemData.Aperture.ApodizationType = ZemaxApodizationType.Gaussian;
            TheSystemData.Aperture.ApodizationFactor = 1;
            // Set Wavelength
            TheSystemData.Wavelengths.SelectWavelengthPreset(WavelengthPreset.FdC_Visible);
            //! [e11s02_cs]

            //! [e11s03_cs]
            // Insert and Track New Surfaces, set STOP to surface 1
            ILensDataEditor TheLDE = TheSystem.LDE;
            TheLDE.InsertNewSurfaceAt(1);
            TheLDE.InsertNewSurfaceAt(1);
            TheLDE.InsertNewSurfaceAt(1);
            ILDERow Surf_1 = TheLDE.GetSurfaceAt(1);
            ILDERow Surf_2 = TheLDE.GetSurfaceAt(2);
            ILDERow Surf_3 = TheLDE.GetSurfaceAt(3);
            ILDERow Surf_4 = TheLDE.GetSurfaceAt(4);
            Surf_1.IsStop = true;
            // Set some baseline parameters
            Surf_1.Thickness = 5;
            Surf_2.Thickness = 5;
            Surf_2.Radius = 100;
            Surf_2.Material = "N-BK7";
            Surf_3.Thickness = 3;
            Surf_3.Radius = -30;
            Surf_3.Material = "F2";
            Surf_4.Radius = -80;
            //! [e11s03_cs]

            //! [e11s04_cs]
            // Set system lens units to inches, scale all values with Scale Lens tool
            // For demonstration only. This file is new, so it has default units mm.
            ZemaxSystemUnits unit = TheSystemData.Units.LensUnits;
            // Open Scale Lens tool
            ScaleLens = TheSystem.Tools.OpenScale();
            // Apply Tool Settings
            ScaleLens.ScaleByUnits = true;
            ScaleLens.ScaleToUnit = ScaleToUnits.Inches;
            ScaleLens.RunAndWaitForCompletion();
            ScaleLens.Close();
            //! [e11s04_cs]

            //! [e11s05_cs]
            // Add Rectangular Aperture to Surface 1
            // Get surface 1, create aperture settings
            Surf_1 = TheSystem.LDE.GetSurfaceAt(1);
            ISurfaceApertureType rAperture = Surf_1.ApertureData.CreateApertureTypeSettings(SurfaceApertureTypes.RectangularAperture);
            // Set aperture size
            rAperture._S_RectangularAperture.XHalfWidth = 0.1;
            rAperture._S_RectangularAperture.YHalfWidth = 0.1;
            // Apply aperture settings to surface 1
            Surf_1.ApertureData.ChangeApertureTypeSettings(rAperture);
            //! [e11s05_cs]

            //! [e11s06_cs]
            // Run Quick Focus
            IQuickFocus QuickFocus = TheSystem.Tools.OpenQuickFocus();
            QuickFocus.RunAndWaitForCompletion();
            QuickFocus.Close();
            //! [e11s06_cs]

            //! [e11s07_cs]
            // Open Universal Plot of RMS Spot Size vs Surface3 Thickness
            IA_ UnivPlot = TheSystem.Analyses.New_Analysis(AnalysisIDM.UniversalPlot1D);
            IAS_ UnivPlot_Settings = UnivPlot.GetSettings();
            Console.WriteLine("Universal Plot has analysis specific settings? " + UnivPlot.HasAnalysisSpecificSettings.ToString());
            // Above is False; Universal Plot Settings must be changed via ModifySettings (changing a config (.cfg) file)
            String cfg = TheApplication.ZemaxDataDir + "\\Configs\\UNI.CFG";
            UnivPlot_Settings.Save(); // Create new .cfg file, named "UNI.CFG" in \Configs\ folder
            UnivPlot_Settings.ModifySettings(cfg, "UN1_SURFACE", (TheSystem.LDE.NumberOfSurfaces - 2).ToString());
            UnivPlot_Settings.ModifySettings(cfg, "UN1_STARTVAL", (Surf_4.Thickness - 0.4 / 25.4).ToString());  // Change universal plot settings
            UnivPlot_Settings.ModifySettings(cfg, "UN1_STOPVAL", (Surf_4.Thickness + 0.1 / 25.4).ToString());
            UnivPlot_Settings.ModifySettings(cfg, "UN1_STEPS", 20.ToString());
            UnivPlot_Settings.ModifySettings(cfg, "UN1_PAR1", 10.ToString());
            UnivPlot_Settings.ModifySettings(cfg, "UN1_OPERAND", "RSRE");
            // For ModifySettings keycodes (UN1_STARTVAL, UN1_STEPS, etc.), see MODIFYSETTINGS page in ZPL>keywords help files
            // LoadFrom allows you to load any CFG file, not just default; not available via GUI
            UnivPlot_Settings.LoadFrom(cfg);
            //! [e11s07_cs]

            //! [e11s08_cs]
            // Open Spot Diagram to See Result!
            IA_ newSpot = TheSystem.Analyses.New_StandardSpot();
            Console.WriteLine("Spot has analysis specific settings? " + newSpot.HasAnalysisSpecificSettings.ToString());  // True; no ModifySettings
            IAS_Spot spotSet = newSpot.GetSettings() as IAS_Spot;
            spotSet.RayDensity = 15;
            newSpot.ApplyAndWaitForCompletion();
            //! [e11s08_cs]

            // save!
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
