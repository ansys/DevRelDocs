# Example 18 - C#

```csharp
using System;
using ZOSAPI;
using ZOSAPI.Editors;
using ZOSAPI.Editors.MCE;
using ZOSAPI.Tools.General;
using ZOSAPI.SystemData;

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
            TheSystem.LoadFile(TheApplication.SamplesDir + "\\Sequential\\Objectives\\Double Gauss 28 degree field.zos", false);

            // Get interface of the Multi-Configuration Editor
            IMultiConfigEditor TheMCE = TheSystem.MCE;
            //! [e18s01_cs]
            // Add two configurations (totally 3)
            TheMCE.AddConfiguration(false);
            TheMCE.AddConfiguration(false);
            //! [e18s01_cs]
            
            //! [e18s02_cs]
            // Add one operand (totally 2)
            TheMCE.AddOperand();
            //! [e18s02_cs]

            //! [e18s03_cs]
            // Get interface of each operand
            IMCERow MCOperand1 = TheMCE.GetOperandAt(1);
            IMCERow MCOperand2 = TheMCE.GetOperandAt(2);
            // Change both operands' type to THIC
            MCOperand1.ChangeType(MultiConfigOperandType.THIC);
            MCOperand2.ChangeType(MultiConfigOperandType.THIC);
            //! [e18s03_cs]

            //! [e18s04_cs]
            // Set parameters of operands
            // If the type of operand is THIC, the first parameter here means surface number
            MCOperand1.Param1 = 0;
            MCOperand2.Param1 = 11;
            //! [e18s04_cs]

            //! [e18s05_cs]
            // Set values of opeand for each configurations
            MCOperand1.GetOperandCell(1).DoubleValue = 10000.0;
            MCOperand1.GetOperandCell(2).DoubleValue = 5000.0;
            MCOperand1.GetOperandCell(3).DoubleValue = 1000.0;
            //! [e18s05_cs]

            //! [e18s06_cs]
            // Refocus for each configuration
            IQuickFocus quickfocus = TheSystem.Tools.OpenQuickFocus();
            TheMCE.SetCurrentConfiguration(1);
            quickfocus.RunAndWaitForCompletion();
            TheMCE.SetCurrentConfiguration(2);
            quickfocus.RunAndWaitForCompletion();
            TheMCE.SetCurrentConfiguration(3);
            quickfocus.RunAndWaitForCompletion();
            //! [e18s06_cs]

            TheSystem.SaveAs(TheApplication.SamplesDir + "\\API\\CS\\e18_Double_Gauss_28_degree_field_MultiConfig.zos");

            //! [e18s07_cs]
            // An exmple of manually "Make Thermal"
            TheSystem.LoadFile(TheApplication.SamplesDir + "\\Sequential\\Objectives\\Doublet.zos", false);
            // Add 1 configuration (totally 2)
            TheMCE.AddConfiguration(false);
            // Add 12 operand (totally 13)
            for (int i = 0; i < 12; i++)
                TheMCE.AddOperand();

            // Create an operand type array and later we will input the array into MCE by a for loop
            MultiConfigOperandType[] operandtype = new MultiConfigOperandType[13]{
            MultiConfigOperandType.TEMP,
            MultiConfigOperandType.PRES,
            MultiConfigOperandType.CRVT,
            MultiConfigOperandType.THIC,
            MultiConfigOperandType.GLSS,
            MultiConfigOperandType.SDIA,
            MultiConfigOperandType.CRVT,
            MultiConfigOperandType.THIC,
            MultiConfigOperandType.GLSS,
            MultiConfigOperandType.SDIA,
            MultiConfigOperandType.CRVT,
            MultiConfigOperandType.THIC,
            MultiConfigOperandType.SDIA};

            // Set parameter 1 for each config operand
            int[] param1value = new int[11] { 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3 };
            for (int i = 0; i < 11; i++)
                TheMCE.GetOperandAt(i + 3).Param1 = param1value[i];

            // Set type for each config operand
            for (int i = 0; i < 13; i++)
                TheMCE.GetOperandAt(i + 1).ChangeType(operandtype[i]);

            // Set Thermal Pickup solves
            ISolveData thermalpickupsolve = TheMCE.GetOperandAt(1).GetOperandCell(1).CreateSolveType(ZOSAPI.Editors.SolveType.ThermalPickup);
            thermalpickupsolve._S_ThermalPickup.Configuration = 1;
            int[] thermalpickup_num = new int[9] { 3, 4, 6, 7, 8, 10, 11, 12, 13 };
            foreach (int i in thermalpickup_num)
                TheMCE.GetOperandAt(i).GetOperandCell(2).SetSolveData(thermalpickupsolve);

            // Set Pickup solve
            ISolveData configpickupsolve = TheMCE.GetOperandAt(1).GetOperandCell(1).CreateSolveType(ZOSAPI.Editors.SolveType.ConfigPickup);
            configpickupsolve._S_ConfigPickup.Configuration = 1;
            TheMCE.GetOperandAt(5).GetOperandCell(2).SetSolveData(configpickupsolve);
            TheMCE.GetOperandAt(9).GetOperandCell(2).SetSolveData(configpickupsolve);

            // Set temperature of configuration 2 to 100 degrees
            TheMCE.GetOperandAt(1).GetOperandCell(2).DoubleValue = 100;
            ISystemData TheSystemData = TheSystem.SystemData;
            TheSystemData.Environment.AdjustIndexToEnvironment = true;

            // Save the system
            TheSystem.SaveAs(TheApplication.SamplesDir + "\\API\\CS\\e18_Doublet_MakeTermal.zos");
            //! [e18s07_cs]


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
