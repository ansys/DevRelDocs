# Example 21 - C#

```csharp
using System;
using ZOSAPI;
using ZOSAPI.Analysis;
using ZOSAPI.Analysis.Settings.RayTracing;
using ZOSAPI.Editors;
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

            // creates new directory
            string strPath = System.IO.Path.Combine(TheApplication.SamplesDir, @"API\CS");
            System.IO.Directory.CreateDirectory(strPath);

            // Add your custom code here...

            //! [e21s01_cs]
            // Create a new non-sequential file
            TheSystem.New(false);
            TheSystem.MakeNonSequential();
            // Add new catalog MISC
            TheSystem.SystemData.MaterialCatalogs.AddCatalog("MISC");
            // Set Wave #1 to 0.47 micron
            TheSystem.SystemData.Wavelengths.GetWavelength(1).Wavelength = 0.47;
            // Use lumens as the source unit
            TheSystem.SystemData.Units.SourceUnits = ZOSAPI.SystemData.ZemaxSourceUnits.Lumens;
            //! [e21s01_cs]

            //! [e21s02_cs]
            // Add 4 more objects
            INonSeqEditor TheNCE = TheSystem.NCE;
            TheNCE.AddObject();
            TheNCE.AddObject();
            TheNCE.AddObject();
            TheNCE.AddObject();
            //! [e21s02_cs]

            //! [e21s03_cs]
            // Set 1st object as a Source File
            INCERow Object_1 = TheNCE.GetObjectAt(1);
            IObjectTypeSettings Typeset_SourceFile = Object_1.GetObjectTypeSettings(ObjectType.SourceFile);
            Typeset_SourceFile.FileName1 = "RAYFILE_LB_T67C_100K_190608_ZEMAX.DAT";
            Object_1.ChangeType(Typeset_SourceFile);
            Object_1.GetObjectCell(ObjectColumn.Par1).IntegerValue = 5;
            Object_1.GetObjectCell(ObjectColumn.Par2).IntegerValue = 1000;
            Object_1.GetObjectCell(ObjectColumn.Par3).DoubleValue = 2.485572;
            Object_1.GetObjectCell(ObjectColumn.Par8).DoubleValue = 0.47;
            Object_1.GetObjectCell(ObjectColumn.Par9).DoubleValue = 0.47;
            //! [e21s03_cs]

            //! [e21s04_cs]
            // Edit source data of object 1
            // SourcesData includes all the settings in Object Properties > Sources
            Object_1.SourcesData.PrePropagation = -0.2;
            Object_1.SourcesData.ArrayType = ArrayMode.Rectangular;
            Object_1.SourcesData.ArrayNumberX = 5;
            Object_1.SourcesData.ArrayNumberY = 5;
            //! [e21s04_cs]

            //! [e21s05_cs]
            // Set 2nd object as CAD Part: STEP/IGES/SAT
            INCERow Object_2 = TheNCE.GetObjectAt(2);
            IObjectTypeSettings Typeset_CADPartSTEPIGESSAT = Object_1.GetObjectTypeSettings(ObjectType.CADPartSTEPIGESSAT);
            Typeset_CADPartSTEPIGESSAT.FileName1 = "LB_T67C_190608_GEOMETRY.STEP";
            Object_2.ChangeType(Typeset_CADPartSTEPIGESSAT);
            //! [e21s05_cs]

            //! [e21s06_cs]
            // Set Rays Ignore Object = Always for object 2
            // TypeData includes all settings in Object Properties > Type
            Object_2.TypeData.RaysIgnoreObject = RaysIgnoreObjectType.Always;
            //! [e21s06_cs]

            //! [e21s07_cs]
            // Set 3rd object as Cylinder Volume
            INCERow Object_3 = TheNCE.GetObjectAt(3);
            IObjectTypeSettings Typeset_CylinderVolume = Object_3.GetObjectTypeSettings(ObjectType.CylinderVolume);
            Object_3.ChangeType(Typeset_CylinderVolume);
            // Set positions, material and parameters
            Object_3.GetObjectCell(ObjectColumn.ZPosition).DoubleValue = 0.8;
            Object_3.GetObjectCell(ObjectColumn.Material).Value = "PMMA";
            Object_3.GetObjectCell(ObjectColumn.Par1).DoubleValue = 1.2;
            Object_3.GetObjectCell(ObjectColumn.Par2).DoubleValue = 0.1;
            Object_3.GetObjectCell(ObjectColumn.Par3).DoubleValue = 1.2;
            //! [e21s07_cs]

            //! [e21s08_cs]
            // Make Face 1 of object 3 has Lambertian scattering properties
            // To set scatter properties, you need to first create "ScatteringSettings" by "CreateScatterModelSettings()" method.
            // And then assign is to object 3 by ChangeScatterModelSettings().
            IObjectScatteringSettings ScatType_Lam = Object_3.CoatScatterData.GetFaceData(1).CreateScatterModelSettings(ObjectScatteringTypes.Lambertian);
            ScatType_Lam._S_Lambertian.ScatterFraction = 1;
            Object_3.CoatScatterData.GetFaceData(1).ChangeScatterModelSettings(ScatType_Lam);
            Object_3.CoatScatterData.GetFaceData(1).NumberOfRays = 1;
            //! [e21s08_cs]

            //! [e21s09_cs]
            // Make object 3 a volume scattering material
            // VolumePhysicsData includes all settings in Object Properties > VolumePhysics.
            // Use Photoluminescence model
            Object_3.VolumePhysicsData.Model = VolumePhysicsModelType.PhotoluminescenceModel;
            IVMPS_PhotoluminscenceModel Photo_setting = Object_3.VolumePhysicsData.ModelSettings._S_PhotoluminescenceModel;
            // Use Standard Model
            Photo_setting.BasicAlgorithm = false;
            // Set absorb, emission and quantum yield spectrum files
            Photo_setting.AbsorptionFile = "_sample_3.ZAS";
            Photo_setting.EmissionFile = "_sample_3.ZES";
            Photo_setting.QuantumYield = "_sample_3.ZQE";
            // Set efficiency spectrum to quantum yield
            Photo_setting.EfficiencySpectrum = EfficiencySpectrumType.QuantumYield;
            // Set photoluminescence parameters
            Photo_setting.ExtinctionCoefficient = 1E+05;
            Photo_setting.ExtinctionWavelength = 0.47;
            Photo_setting.PLDensity = 3.1E+017;
            // Set model to ignore mie scattering
            Photo_setting.ConsiderMieScattering = false;
            //! [e21s09_cs]

            //! [e21s10_cs]
            // Set 4th object as Standard Lens
            INCERow Object_4 = TheNCE.GetObjectAt(4);
            IObjectTypeSettings Typeset_StandardLens = Object_4.GetObjectTypeSettings(ObjectType.StandardLens);
            Object_4.ChangeType(Typeset_StandardLens);
            // Set positions
            Object_4.GetObjectCell(ObjectColumn.ZPosition).DoubleValue = 0.9;
            // To set solve for any cell, you need to first create a "ISolveData" by "CreateSolveType()" method.
            // And then assign it to the cell.
            ISolveData Solve_ObjPick = Object_4.GetObjectCell(ObjectColumn.Material).CreateSolveType(SolveType.ObjectPickup);
            Solve_ObjPick._S_ObjectPickup.Object = 3;
            // Set parameters
            Object_4.GetObjectCell(ObjectColumn.Material).SetSolveData(Solve_ObjPick);
            Object_4.GetObjectCell(ObjectColumn.Par3).DoubleValue = 1.2;
            Object_4.GetObjectCell(ObjectColumn.Par4).DoubleValue = 1.2;
            Object_4.GetObjectCell(ObjectColumn.Par5).DoubleValue = 1.2;
            Object_4.GetObjectCell(ObjectColumn.Par6).DoubleValue = -1.2;
            Object_4.GetObjectCell(ObjectColumn.Par8).DoubleValue = 1.2;
            Object_4.GetObjectCell(ObjectColumn.Par9).DoubleValue = 1.2;
            //! [e21s10_cs]

            //! [e21s11_cs]
            // Set 5th object as Detector Color
            INCERow Object_5 = TheNCE.GetObjectAt(5);
            IObjectTypeSettings Typeset_DetectorColor = Object_5.GetObjectTypeSettings(ObjectType.DetectorColor);
            Object_5.ChangeType(Typeset_DetectorColor);
            // Set positions, material and parameters
            Object_5.GetObjectCell(ObjectColumn.ZPosition).DoubleValue = 7;
            Object_5.GetObjectCell(ObjectColumn.Material).Value = "ABSORB";
            Object_5.GetObjectCell(ObjectColumn.Par1).DoubleValue = 5;
            Object_5.GetObjectCell(ObjectColumn.Par2).DoubleValue = 5;
            Object_5.GetObjectCell(ObjectColumn.Par3).IntegerValue = 150;
            Object_5.GetObjectCell(ObjectColumn.Par4).IntegerValue = 150;
            Object_5.GetObjectCell(ObjectColumn.Par6).IntegerValue = 4;
            Object_5.GetObjectCell(ObjectColumn.Par7).IntegerValue = 3;
            //! [e21s11_cs]

            //! [e21s12_cs]
            // Open NSC Ray Trace tool and turn on Scatter NSC Rays and Ignore Errors
            INSCRayTrace RayTraceControl = TheSystem.Tools.OpenNSCRayTrace();
            RayTraceControl.SplitNSCRays = false;
            RayTraceControl.ScatterNSCRays = true;
            RayTraceControl.UsePolarization = false;
            RayTraceControl.IgnoreErrors = true;
            RayTraceControl.SaveRays = false;

            // Trace rays and report the progress when it's running.
            // Note that, instead an RunAndWaitCompletion(), Run() is used so that
            // the code will just go on without waiting the tracing finishs.
            // We will check the progress of tracing by a while loop.
            // You can check the properties "Progress", which is percentage integer data (1-100)
            Console.Write("Starting Tracing...    ");
            RayTraceControl.ClearDetectors(0);
            RayTraceControl.Run();
            while (RayTraceControl.Progress != 100)
            {
                System.Threading.Thread.Sleep(1000);
                Console.Write("\b\b\b\b" + RayTraceControl.Progress.ToString("000") + "%");
            }
            RayTraceControl.Close();
            Console.WriteLine("\nFinished!");
            //! [e21s12_cs]

            //! [e21s13_cs]
            // Open two detector viewers for showing results in angle space and position space
            // Detector Viewer has its own settings interface: IAS_DetectorViewer.
            // Note that not all analyses have a specific settings interface.
            I_Analyses TheAnalysis = TheSystem.Analyses;
            IA_ Det1 = TheAnalysis.New_DetectorViewer();
            ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer Det_Set1 = Det1.GetSettings() as IAS_DetectorViewer;
            Det_Set1.ShowAs = DetectorViewerShowAsTypes.TrueColor;
            Det_Set1.Smoothing = 3;
            Det1.ApplyAndWaitForCompletion();

            IA_ Det2 = TheAnalysis.New_DetectorViewer();
            ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer Det_Set2 = Det2.GetSettings() as IAS_DetectorViewer;
            Det_Set2.ShowAs = DetectorViewerShowAsTypes.TrueColor;
            Det_Set2.Smoothing = 3;
            Det_Set2.DataType = DetectorViewerShowDataTypes.AngleSpace;
            Det2.ApplyAndWaitForCompletion();
            //! [e21s13_cs]


            TheSystem.SaveAs(TheApplication.SamplesDir + "\\API\\CS\\e21_White_LED_Phosphor.zos");

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
