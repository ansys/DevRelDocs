# Example 15 - C#

```csharp
using System;
using System.Diagnostics;
using System.Threading;
using ZOSAPI;
using ZOSAPI.Analysis;
using ZOSAPI.Analysis.Settings;
using ZOSAPI.Editors;
using ZOSAPI.Editors.LDE;
using ZOSAPI.Editors.MFE;
using ZOSAPI.SystemData;
using ZOSAPI.Tools;
using ZOSAPI.Tools.General;
using ZOSAPI.Tools.Optimization;
using ZOSAPI.Wizards;

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

            bool b_load;

            // creates new directory
            string strPath = System.IO.Path.Combine(TheApplication.SamplesDir, @"API\CS\e15_Seq_Optimization");
            System.IO.Directory.CreateDirectory(strPath);

            //! [e15s01_cs]
            // Load a double gauss design sample file
            b_load = TheSystem.LoadFile(System.IO.Path.Combine(TheApplication.SamplesDir, @"Short course\Optical System Design Using OpticStudio\sc_dbga1.zos"), false);
            Console.WriteLine("\n" + "Double Gauss Design:\n");
            //! [e15s01_cs]

            //! [e15s02_cs]
            //Define path locations
            string SamplesFolder = TheApplication.SamplesDir;
            string SampleFile = System.IO.Path.Combine(TheApplication.SamplesDir, @"API\CS\e15_Seq_Optimization\OptimizedFile.zos");
            TheSystem.SaveAs(SampleFile);
            //! [e15s02_cs]

            //! [e15s03_cs]
            //Define System Explorer
            //Define Aperture
            ISystemData SystExplorer = TheSystem.SystemData;
            SystExplorer.Aperture.ApertureType = ZOSAPI.SystemData.ZemaxApertureType.EntrancePupilDiameter;
            SystExplorer.Aperture.ApertureValue = 20;
            //! [e15s03_cs]

            //! [e15s04_cs]
            //Add 3 fields 
            IField Field_1 = SystExplorer.Fields.GetField(1);
            IField NewField_2 = SystExplorer.Fields.AddField(0, 5.0, 1.0);
            SystExplorer.Fields.SetFieldType(ZOSAPI.SystemData.FieldType.ParaxialImageHeight);
            SystExplorer.Fields.MakeEqualAreaFields(3, 21.6);
            //! [e15s04_cs]

            //! [e15s05_cs]
            //Add 3 wavelengths: F,d,C
            bool slPreset = SystExplorer.Wavelengths.SelectWavelengthPreset(ZOSAPI.SystemData.WavelengthPreset.FdC_Visible);
            //! [e15s05_cs]

            //! [e15s06_cs]
            //Open a shaded model
            IA_ analysis = TheSystem.Analyses.New_Analysis(AnalysisIDM.ShadedModel);
            analysis.Terminate();
            analysis.WaitForCompletion();
            IAS_ analysisSettings = analysis.GetSettings();
            string cfgFile = System.IO.Path.GetTempFileName();
            // Save the current settings to the temp file
            analysisSettings.SaveTo(cfgFile);
            // make your modifications to it
            //MODIFYSETTINGS are defined in the ZPL help files: The Programming Tab > About the ZPL > Keywords
            analysisSettings.ModifySettings(cfgFile, "SHA_ROTX", "90");
            analysisSettings.ModifySettings(cfgFile, "SHA_ROTY", "0");
            analysisSettings.ModifySettings(cfgFile, "SHA_ROTZ", "0");
            // now load in the modified settings
            analysisSettings.LoadFrom(cfgFile);
            // If you want to overwrite your default CFG, copy it after you are done modifying the settings:
            //string CFG_fullname = System.Environment.GetEnvironmentVariable("USERPROFILE") + "\\Documents\\Zemax\\Configs\\Configs\\POP.CFG";
            //System.IO.File.Copy(cfgFile, CFG_fullname, true);
            // We don't need the temp file any more, so delete it
            System.IO.File.Delete(cfgFile);
            // Run the analysis with the new settings
            analysis.ApplyAndWaitForCompletion();
            //! [e15s06_cs]

            //! [e15s07_cs]
            // remove all variables and add a F# solve on last surface radius
            ILensDataEditor TheLDE = TheSystem.LDE;
            IOpticalSystemTools tools = TheSystem.Tools;
            tools.RemoveAllVariables();
            ILDERow Surface_Last = TheLDE.GetSurfaceAt(TheLDE.NumberOfSurfaces - 2);
            ISolveData Solver = Surface_Last.RadiusCell.CreateSolveType(ZOSAPI.Editors.SolveType.FNumber);
            Solver._S_FNumber.FNumber = 3.1415;
            Surface_Last.RadiusCell.SetSolveData(Solver);
            SampleFile = System.IO.Path.Combine(TheApplication.SamplesDir, @"API\CS\e15_Seq_Optimization\OptimizedFile1.zos");
            TheSystem.SaveAs(SampleFile);
            //! [e15s07_cs]

            //! [e15s08_cs]
            //change BFL & run quick focus                         
            Surface_Last.Thickness = 40.0;
            IQuickFocus QFocus = tools.OpenQuickFocus();
            QFocus.Criterion = QuickFocusCriterion.SpotSizeRadial;
            QFocus.UseCentroid = true;
            QFocus.RunAndWaitForCompletion();
            QFocus.Close();
            SampleFile = System.IO.Path.Combine(TheApplication.SamplesDir, @"API\CS\e15_Seq_Optimization\OptimizedFile2.zos");
            TheSystem.SaveAs(SampleFile);
            //! [e15s08_cs]

            //! [e15s09_cs]
            //setup a few variables
            tools.SetAllRadiiVariable();
            ILDERow Surface1 = TheLDE.GetSurfaceAt(1);
            ILDERow Surface2 = TheLDE.GetSurfaceAt(2);
            ILDERow Surface5 = TheLDE.GetSurfaceAt(5);
            ILDERow Surface6 = TheLDE.GetSurfaceAt(6);
            ILDERow Surface9 = TheLDE.GetSurfaceAt(9);
            ILDERow Surface10 = TheLDE.GetSurfaceAt(10);
            ILDERow Surface11 = TheLDE.GetSurfaceAt(11);
            //! [e15s09_cs]

            //! [e15s10_cs]
            //Thickness 2, 5, 6, 9, and 11 variable
            Surface2.ThicknessCell.MakeSolveVariable();
            Surface5.ThicknessCell.MakeSolveVariable();
            Surface6.ThicknessCell.MakeSolveVariable();
            Surface9.ThicknessCell.MakeSolveVariable();
            Surface11.ThicknessCell.MakeSolveVariable();
            //! [e15s10_cs]

            //! [e15s11_cs]
            //Thickness 10 pick up from 1
            Solver = Surface10.ThicknessCell.CreateSolveType(ZOSAPI.Editors.SolveType.SurfacePickup);
            ISolveSurfacePickup SolverPickup = Solver._S_SurfacePickup;
            SolverPickup.Surface = 1;
            SolverPickup.ScaleFactor = 1;
            SolverPickup.Column = ZOSAPI.Editors.LDE.SurfaceColumn.Thickness;
            Surface10.ThicknessCell.SetSolveData(Solver);
            SampleFile = System.IO.Path.Combine(TheApplication.SamplesDir, @"API\CS\e15_Seq_Optimization\OptimizedFile3.zos");
            TheSystem.SaveAs(SampleFile);
            //! [e15s11_cs]

            //! [e15s12_cs]
            //define merit function
            //load merit function
            IMeritFunctionEditor TheMFE = TheSystem.MFE;
            ISEQOptimizationWizard OptWizard = TheMFE.SEQOptimizationWizard;

            //Optimize for smallest RMS Spot, which is "Data" = 1
            OptWizard.Data = 1;
            OptWizard.OverallWeight = 1;
            //Gaussian Quadrature with 3 rings (refers to index number = 2)
            OptWizard.Ring = 2;
            //Set air & glass boundaries
            OptWizard.IsGlassUsed = true;
            OptWizard.GlassMin = 3.0;
            OptWizard.GlassMax = 15.0;
            OptWizard.GlassEdge = 3.0;
            OptWizard.IsAirUsed = true;
            OptWizard.AirMin = 0.5;
            OptWizard.AirMax = 1000.0;
            OptWizard.AirEdge = 0.5;
            //And click OK!
            OptWizard.Apply();
            string mf_filename = System.IO.Path.Combine(TheApplication.SamplesDir, @"API\CS\e15_Seq_Optimization\RMS_Spot_Radius.mf");
            TheMFE.SaveMeritFunction(mf_filename);
            TheMFE.LoadMeritFunction(mf_filename);
            SampleFile = System.IO.Path.Combine(TheApplication.SamplesDir, @"API\CS\e15_Seq_Optimization\OptimizedFile4.zos");
            //! [e15s12_cs]

            //! [e15s13_cs]
            // Run local optimization and measure time
            // Local optimization until completion
            Stopwatch stopWatch = new Stopwatch();
            stopWatch.Start();

            ILocalOptimization LocalOpt = TheSystem.Tools.OpenLocalOptimization();
            if (LocalOpt != null)
            {
                LocalOpt.Algorithm = ZOSAPI.Tools.Optimization.OptimizationAlgorithm.DampedLeastSquares;
                LocalOpt.Cycles = ZOSAPI.Tools.Optimization.OptimizationCycles.Automatic;
                LocalOpt.NumberOfCores = 8;
                Console.WriteLine("Local Optimization...");
                Console.WriteLine(String.Format("Initial Merit Function {0}", LocalOpt.InitialMeritFunction));
                LocalOpt.RunAndWaitForCompletion();
                Console.WriteLine(String.Format("Final Merit Function {0}", LocalOpt.CurrentMeritFunction));
                LocalOpt.Close();
            }
            stopWatch.Stop();
            // Get the elapsed time as a TimeSpan value.
            TimeSpan ts = stopWatch.Elapsed;

            // Format and display the TimeSpan value.
            string elapsedTime = String.Format("{0:00}:{1:00}:{2:00}.{3:00}",
            ts.Hours, ts.Minutes, ts.Seconds,
            ts.Milliseconds / 10);
            Console.WriteLine("Time elapsed : " + elapsedTime + "\n");
            //Console.ReadKey(true);
            //! [e15s13_cs]

            //! [e15s14_cs]
            // run global search
            double GlobalOptimTimeInSeconds = 15;
            IGlobalOptimization GlobalOpt = TheSystem.Tools.OpenGlobalOptimization();
            if (GlobalOpt != null)
            {
                GlobalOpt.Algorithm = ZOSAPI.Tools.Optimization.OptimizationAlgorithm.DampedLeastSquares;
                GlobalOpt.NumberOfCores = 8;
                Console.WriteLine("Global Optimization for " + GlobalOptimTimeInSeconds.ToString() + " seconds...");
                Console.WriteLine(String.Format("Initial Merit Function {0}", GlobalOpt.InitialMeritFunction));
                GlobalOpt.NumberToSave = ZOSAPI.Tools.Optimization.OptimizationSaveCount.Save_10;
                GlobalOpt.RunAndWaitWithTimeout(GlobalOptimTimeInSeconds);
                for (int j = 1; j <= 10; j++)
                {
                    Console.Write(String.Format("{0}: {1}\n", j, GlobalOpt.CurrentMeritFunction(j)));
                }
                GlobalOpt.Cancel();
				GlobalOpt.WaitForCompletion();                
                GlobalOpt.Close();
            }
            //! [e15s14_cs]

            //! [e15s15_cs]
            //run hammer optimization
            double HammerOptimTimeInSeconds = 15;
            IHammerOptimization HammerOpt = TheSystem.Tools.OpenHammerOptimization();
            if (HammerOpt != null)
            {
                HammerOpt.Algorithm = ZOSAPI.Tools.Optimization.OptimizationAlgorithm.DampedLeastSquares;
                HammerOpt.NumberOfCores = 8;
                Console.WriteLine("Hammer Optimization for " + HammerOptimTimeInSeconds.ToString() + " seconds...");
                Console.WriteLine(String.Format("Initial Merit Function {0}", HammerOpt.InitialMeritFunction));
                HammerOpt.RunAndWaitWithTimeout(HammerOptimTimeInSeconds);
                Console.WriteLine(String.Format("Final Merit Function {0}", HammerOpt.CurrentMeritFunction));

                HammerOpt.Cancel();
				HammerOpt.WaitForCompletion();
                HammerOpt.Close();
            }
            //! [e15s15_cs]

            TheSystem.SaveAs(SampleFile);
            Console.WriteLine("Press key to continue\n");
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
