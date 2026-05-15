# Example 12 - C#

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

            //! [e12s01_cs]
            // Select 6 wavelengths using a Gaussian Quadrature algorithm
            ZOSAPI.SystemData.IWavelengths sysWave = TheSystem.SystemData.Wavelengths;
            sysWave.GaussianQuadrature(0.45, 0.65, ZOSAPI.SystemData.QuadratureSteps.S6);
            //! [e12s01_cs]

            //! [e12s02_cs]
            // Define fields using Paraxial Image Height
            ZOSAPI.SystemData.IFields sysField = TheSystem.SystemData.Fields;
            sysField.SetFieldType(ZOSAPI.SystemData.FieldType.ParaxialImageHeight);
            //! [e12s02_cs]

            //! [e12s03_cs]
            // Change field 1 to be X=1.0 and Y=2.0
            ZOSAPI.SystemData.IField field1 = sysField.GetField(1);
            field1.X = 1.0;
            field1.Y = 2.0;
            //! [e12s03_cs]

            // Inserts paraxial lens so there will not be an error when using ParaxialImageHeight
            TheSystem.SystemData.Aperture.ApertureValue = 10;
            ZOSAPI.Editors.LDE.ILDERow s1 = TheSystem.LDE.GetSurfaceAt(1) as ZOSAPI.Editors.LDE.ILDERow;
            ZOSAPI.Editors.LDE.ISurfaceTypeSettings s1_type = s1.GetSurfaceTypeSettings(ZOSAPI.Editors.LDE.SurfaceType.Paraxial) as ZOSAPI.Editors.LDE.ISurfaceTypeSettings;
            s1.ChangeType(s1_type);
            s1.Thickness = 100;

            //! [e12s04_cs]
            // Change polarization axis reference to be Y
            ZOSAPI.SystemData.ISDPolarizationData sysPol = TheSystem.SystemData.Polarization;
            sysPol.Method = ZOSAPI.SystemData.PolarizationMethod.YAxisMethod;
            //! [e12s04_cs]

            //! [e12s05_cs]
            // Add Corning catalog and remove Schott catalog
            ZOSAPI.SystemData.ISDMaterialCatalogData sysCat = TheSystem.SystemData.MaterialCatalogs;
            sysCat.AddCatalog("Corning");
            sysCat.RemoveCatalog("Schott");
            //! [e12s05_cs]

            //! [e12s06_cs]
            // Add Title and Notes
            ZOSAPI.SystemData.ISDTitleNotes sysTitleNotes = TheSystem.SystemData.TitleNotes;
            sysTitleNotes.Title = "Add here the title";
            sysTitleNotes.Notes = "Add here the notes";
            //! [e12s06_cs]

            //! [e12s07_cs]
            // As default Files choose: COATING.DAT, SCATTER_PROFILE.DAT, ABG_DATA.DAT 
            ZOSAPI.SystemData.ISDFiles sysFiles = TheSystem.SystemData.Files;
            sysFiles.CoatingFile = "COATING.DAT";
            sysFiles.ScatterProfile = "SCATTER_PROFILE.DAT";
            sysFiles.ABgDataFile = "ABG_DATA.DAT";
            TheSystem.SystemData.Files.ReloadFiles();
            //! [e12s07_cs]

            //! [e12s08_cs]
            // Change Lens Units to Inches
            ZOSAPI.SystemData.ISDUnitsData sysUnits = TheSystem.SystemData.Units;
            sysUnits.LensUnits = ZOSAPI.SystemData.ZemaxSystemUnits.Inches;
            //! [e12s08_cs]

            String file = "\\API\\CS\\e12_seq_system_explorer.zos";
            TheSystem.SaveAs(TheApplication.SamplesDir + file);

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
