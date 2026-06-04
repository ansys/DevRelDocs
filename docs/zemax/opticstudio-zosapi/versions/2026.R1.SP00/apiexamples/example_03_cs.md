# Example 03 - C#

```csharp
using System;
using ZOSAPI;
using ZOSAPI.Editors.LDE;
using ZOSAPI.Editors.MFE;
using ZOSAPI.Tools.Optimization;

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

            // creates a new API directory
            string strPath = System.IO.Path.Combine(TheApplication.SamplesDir, @"API\CS");
            System.IO.Directory.CreateDirectory(strPath);

            // Set up primary optical system
            TheSystem = TheApplication.PrimarySystem;
            string sampleDir = TheApplication.SamplesDir;

            //! [e03s01_cs]
            // Open file & save a copy
            string testFile = sampleDir + "\\API\\CS\\e01_new_file_and_quickfocus.zos";
            if (!System.IO.File.Exists(testFile))
            {
                Console.WriteLine("You need to run Example 01 before running this example");
                Console.ReadKey();
                return;
            }
            TheSystem.LoadFile(testFile, false);
            string testFile2 = sampleDir + "\\API\\CS\\e03_open_file_and_optimise.zos";
            TheSystem.SaveAs(testFile2);
            //! [e03s01_cs]

            //! [e03s02_cs]
            // Get Surfaces
            ILensDataEditor TheLDE = TheSystem.LDE;
            ILDERow Surface_1 = TheLDE.GetSurfaceAt(1);
            ILDERow Surface_2 = TheLDE.GetSurfaceAt(2);
            ILDERow Surface_3 = TheLDE.GetSurfaceAt(3);
            //! [e03s02_cs]

            //! [e03s03_cs]
            // Make thicknesses and radii variable
            Surface_1.ThicknessCell.MakeSolveVariable();
            Surface_2.ThicknessCell.MakeSolveVariable();
            Surface_2.RadiusCell.MakeSolveVariable();
            Surface_3.ThicknessCell.MakeSolveVariable();
            //! [e03s03_cs]

            //! [e03s04_cs]
            // Merit functions
            IMeritFunctionEditor TheMFE = TheSystem.MFE;
            IMFERow Operand_1 = TheMFE.GetOperandAt(1);
            Operand_1.ChangeType(MeritOperandType.ASTI);
            Operand_1.Target = 0.0;
            Operand_1.Weight = 10.0;
            //! [e03s04_cs]

            IMFERow Operand_2 = TheMFE.InsertNewOperandAt(2);
            Operand_2.ChangeType(MeritOperandType.COMA);
            Operand_2.Target = 0.0;
            Operand_2.Weight = 1.0;
            // Air min/max
            IMFERow Operand_3 = TheMFE.AddOperand();
            Operand_3.ChangeType(MeritOperandType.MNCA);
            Operand_3.Target = 0.5;
            Operand_3.Weight = 1.0;
            Operand_3.GetCellAt(2).IntegerValue = 1;
            Operand_3.GetCellAt(3).IntegerValue = 3;
            IMFERow Operand_4 = TheMFE.AddOperand();
            Operand_4.ChangeType(MeritOperandType.MXCA);
            Operand_4.Target = 1000;
            Operand_4.Weight = 1.0;
            Operand_4.GetCellAt(2).IntegerValue = 1;
            Operand_4.GetCellAt(3).IntegerValue = 3;
            IMFERow Operand_5 = TheMFE.AddOperand();
            Operand_5.ChangeType(MeritOperandType.MNEA);
            Operand_5.Target = 0.5;
            Operand_5.Weight = 1.0;
            Operand_5.GetCellAt(2).IntegerValue = 1;
            Operand_5.GetCellAt(3).IntegerValue = 3;
            // Material min/max
            IMFERow Operand_6 = TheMFE.AddOperand();
            Operand_6.ChangeType(MeritOperandType.MNCG);
            Operand_6.Target = 3.0;
            Operand_6.Weight = 1.0;
            Operand_6.GetCellAt(2).IntegerValue = 1;
            Operand_6.GetCellAt(3).IntegerValue = 3;
            IMFERow Operand_7 = TheMFE.AddOperand();
            Operand_7.ChangeType(MeritOperandType.MXCG);
            Operand_7.Target = 15.0;
            Operand_7.Weight = 1.0;
            Operand_7.GetCellAt(2).IntegerValue = 1;
            Operand_7.GetCellAt(3).IntegerValue = 3;
            IMFERow Operand_8 = TheMFE.AddOperand();
            Operand_8.ChangeType(MeritOperandType.MNEG);
            Operand_8.Target = 3.0;
            Operand_8.Weight = 1.0;
            Operand_8.GetCellAt(2).IntegerValue = 1;
            Operand_8.GetCellAt(3).IntegerValue = 3;

            //! [e03s05_cs]
            // Local optimisation till completion
            ILocalOptimization LocalOpt = TheSystem.Tools.OpenLocalOptimization();
            LocalOpt.Algorithm = OptimizationAlgorithm.DampedLeastSquares;
            LocalOpt.Cycles = OptimizationCycles.Automatic;
            LocalOpt.NumberOfCores = 8;
            LocalOpt.RunAndWaitForCompletion();
            LocalOpt.Close();
            //! [e03s05_cs]

            //! [e03s06_cs]
            // Hammer for 10 seconds
            Console.WriteLine("Running Hammer for 10 seconds");
            IHammerOptimization HammerOpt = TheSystem.Tools.OpenHammerOptimization();
            HammerOpt.RunAndWaitWithTimeout(10); // 10s of Hammer
            HammerOpt.Cancel();
            HammerOpt.WaitForCompletion();
            HammerOpt.Close();
            //! [e03s06_cs]

            // Save and close
            TheSystem.Save();

            Console.WriteLine("Press ENTER to continue");
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
