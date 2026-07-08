# Example 19 - C#

```csharp
using System;
using ZOSAPI;
using ZOSAPI.SystemData;
using ZOSAPI.Editors;
using ZOSAPI.Editors.LDE;


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

            // This code build a chain of prisms based on the KB article:
            // http://zemax.com/os/resources/learn/knowledgebase/how-to-work-in-global-coordinates-in-a-sequential
            TheSystem.New(false);

            //! [e19s01_cs]
            // ISystemData represents the System Explorer in GUI.
            // We access options in System Explorer through ISystemData in ZOS-API
            ISystemData TheSystemData = TheSystem.SystemData;
            TheSystemData.Aperture.ApertureValue = 10;
            TheSystemData.Aperture.AFocalImageSpace = true;
            TheSystemData.Wavelengths.GetWavelength(1).Wavelength = 0.55;
            //! [e19s01_cs]

            //! [e19s02_cs]
            // Get interface of Lens Data Editor and add 3 surfaces.
            ILensDataEditor TheLDE = TheSystem.LDE;
            TheLDE.InsertNewSurfaceAt(2);
            TheLDE.InsertNewSurfaceAt(2);
            TheLDE.InsertNewSurfaceAt(2);

            // Set thickness and material for each surface.
            TheLDE.GetSurfaceAt(1).Thickness = 30;
            TheLDE.GetSurfaceAt(2).Thickness = 20;
            TheLDE.GetSurfaceAt(4).Thickness = 30;
            TheLDE.GetSurfaceAt(2).Material = "N-BK7";
            //! [e19s02_cs]

            //! [e19s03_cs]
            // GetSurfaceAt(surface number shown in LDE) will return an interface ILDERow
            // Through property TiltDecenterData of each interface ILDERow, we can modify data in Surface Properties > Tilt/Decenter section
            TheLDE.GetSurfaceAt(2).TiltDecenterData.BeforeSurfaceOrder = TiltDecenterOrderType.Decenter_Tilt;
            TheLDE.GetSurfaceAt(2).TiltDecenterData.BeforeSurfaceTiltX = 15;
            TheLDE.GetSurfaceAt(2).TiltDecenterData.AfterSurfaceTiltX = -15;
            TheLDE.GetSurfaceAt(3).TiltDecenterData.BeforeSurfaceTiltX = -15;
            TheLDE.GetSurfaceAt(3).TiltDecenterData.AfterSurfaceTiltX = 15;
            //! [e19s03_cs]

            //! [e19s04_cs]
            // To specify an aperture to a surface, we need to first create an ISurfaceApertureType and then assign it.
            ISurfaceApertureType Rect_Aper = TheLDE.GetSurfaceAt(2).ApertureData.CreateApertureTypeSettings(SurfaceApertureTypes.RectangularAperture);
            Rect_Aper._S_RectangularAperture.XHalfWidth = 10;
            Rect_Aper._S_RectangularAperture.YHalfWidth = 10;
            TheLDE.GetSurfaceAt(2).ApertureData.ChangeApertureTypeSettings(Rect_Aper);
            TheLDE.GetSurfaceAt(3).ApertureData.PickupFrom = 2;
            //! [e19s04_cs]

            //! [e19s05_cs]
            // To change surface type, we need to first get an ISurfaceTypesettings and then assign it.
            ISurfaceTypeSettings SurfaceType_CB = TheLDE.GetSurfaceAt(4).GetSurfaceTypeSettings(SurfaceType.CoordinateBreak);
            TheLDE.GetSurfaceAt(4).ChangeType(SurfaceType_CB);
            //! [e19s05_cs]

            //! [e19s06_cs]
            // Set Chief Ray solves to surface 4, which is Coordinate Break
            // To set a solve to a cell in editor, we need to first create a ISolveData and then assign it.
            ISolveData Solve_ChiefNormal = TheLDE.GetSurfaceAt(4).GetSurfaceCell(SurfaceColumn.Par1).CreateSolveType(SolveType.PickupChiefRay);
            TheLDE.GetSurfaceAt(4).GetSurfaceCell(SurfaceColumn.Par1).SetSolveData(Solve_ChiefNormal);
            TheLDE.GetSurfaceAt(4).GetSurfaceCell(SurfaceColumn.Par2).SetSolveData(Solve_ChiefNormal);
            TheLDE.GetSurfaceAt(4).GetSurfaceCell(SurfaceColumn.Par3).SetSolveData(Solve_ChiefNormal);
            TheLDE.GetSurfaceAt(4).GetSurfaceCell(SurfaceColumn.Par4).SetSolveData(Solve_ChiefNormal);
            TheLDE.GetSurfaceAt(4).GetSurfaceCell(SurfaceColumn.Par5).SetSolveData(Solve_ChiefNormal);
            //! [e19s06_cs]

            //! [e19s07_cs]
            // Copy 3 surfaces starting from surface number 2 in LDE and paste to surface number 5, 
            // which will become surface number 8 after pasting.
            for (int i = 0; i < 10; i++)
            {
                TheLDE.CopySurfaces(2, 3, 5);
            }
            // Save file
            TheSystem.SaveAs(TheApplication.SamplesDir + "\\API\\CS\\e19_Sample_Prism_Chain.zos");
            //! [e19s07_cs]



            //! [e19s08_cs]
            // Run tool Convert Local To Global Coordinates to convert surface #2 to surface #35 to be globally referenced to surface #1
            TheLDE.RunTool_ConvertLocalToGlobalCoordinates(2, 35, 1);
            TheSystem.SaveAs(TheApplication.SamplesDir + "\\API\\CS\\e19_Sample_Prism_Chain_GlobalCoordinate.zos");
            //! [e19s08_cs]

            //! [e19s09_cs]
            // Run tool Conver Global To Local Coordinates to convert surface #1 to surface #57 back to local coordinate.
            TheLDE.RunTool_ConvertGlobalToLocalCoordinates(1, 57, 0);
            TheSystem.SaveAs(TheApplication.SamplesDir + "\\API\\CS\\e19_Sample_Prism_Chain_BackTo_LocalCoordinate.zos");
            //! [e19s09_cs]

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
