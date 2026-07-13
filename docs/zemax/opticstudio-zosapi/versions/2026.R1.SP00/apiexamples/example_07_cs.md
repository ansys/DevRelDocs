# Example 07 - C#

```csharp
using System;
using ZOSAPI;

namespace CSharpStandaloneApplication1
{
    class CSharpStandalone_07_TiltDecenterAndMFOperand
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
            string FilePath = TheApplication.ZemaxDataDir + "\\Samples\\Sequential\\Objectives\\Cooke 40 degree field.zos";
            TheSystem.LoadFile(FilePath, false);

            //! [e07s01_cs]
            // run the design lockdown tool to fix diameters, remove solves
            ZOSAPI.Tools.IDesignLockdown LockdownTool = TheSystem.Tools.OpenDesignLockdown();
            LockdownTool.UsePrecisionRounding = true;
            LockdownTool.DecimalPrecision = 2;
            LockdownTool.RunAndWaitForCompletion();
            LockdownTool.Close();
            //! [e07s01_cs]

            // recreate the functionality of the tilt/decenter elements tool
            // apply Coordinate Breaks around the 2nd lens element (surf 3/4)
            ZOSAPI.Editors.LDE.ILDERow surf3 = TheSystem.LDE.InsertNewSurfaceAt(3);
            ZOSAPI.Editors.LDE.ILDERow surf6 = TheSystem.LDE.InsertNewSurfaceAt(6);
            ZOSAPI.Editors.LDE.ISurfaceTypeSettings CB = surf3.GetSurfaceTypeSettings(ZOSAPI.Editors.LDE.SurfaceType.CoordinateBreak);
            surf3.ChangeType(CB);
            surf6.ChangeType(CB);
            // insert a dummy surface after 2nd CB
            ZOSAPI.Editors.LDE.ILDERow surf7 = TheSystem.LDE.InsertNewSurfaceAt(7);
            surf7.Thickness = TheSystem.LDE.GetSurfaceAt(5).Thickness; // the dummy carries original thickness

            //! [e07s02_cs]
            // we're going to play with the STOP surface position, so let's put STOP on surf 1
            TheSystem.LDE.GetSurfaceAt(1).IsStop = true;
            //! [e07s02_cs]

            //! [e07s03_cs]
            // create position solve
            ZOSAPI.Editors.ISolveData PositionSolve = TheSystem.LDE.GetSurfaceAt(5).ThicknessCell.CreateSolveType(ZOSAPI.Editors.SolveType.Position);
            // set the properties for the position solve
            // solve-specific properties are in ISolvePosition interface, accessed via _S_Position
            PositionSolve._S_Position.FromSurface = 3;
            PositionSolve._S_Position.Length = 0;
            // apply position solve
            TheSystem.LDE.GetSurfaceAt(5).ThicknessCell.SetSolveData(PositionSolve);
            //! [e07s03_cs]

            //! [e07s04_cs]
            // create pickup solve
            ZOSAPI.Editors.ISolveData PickupSolve = TheSystem.LDE.GetSurfaceAt(6).ThicknessCell.CreateSolveType(ZOSAPI.Editors.SolveType.SurfacePickup);
            // solve-specific properties are in ISolvePosition interface, accessed via _S_Position
            PickupSolve._S_SurfacePickup.Surface = 5;
            PickupSolve._S_SurfacePickup.ScaleFactor = -1;
            PickupSolve._S_SurfacePickup.Offset = 0;
            PickupSolve._S_SurfacePickup.Column = ZOSAPI.Editors.LDE.SurfaceColumn.Thickness;
            // apply the pickup solve
            TheSystem.LDE.GetSurfaceAt(6).ThicknessCell.SetSolveData(PickupSolve);
            //! [e07s04_cs]

            //! [e07s05_cs]
            // set pickup sovles for coordinate break tilt/decenter parameter cells
            // these are columns 12-16 in the Lens Data Editor (parameters 1-5)
            ZOSAPI.Editors.ISolveData ParameterPickup = TheSystem.LDE.GetSurfaceAt(6).GetCellAt(12).CreateSolveType(ZOSAPI.Editors.SolveType.SurfacePickup);
            ParameterPickup._S_SurfacePickup.Surface = 3;
            ParameterPickup._S_SurfacePickup.ScaleFactor = -1;
            ParameterPickup._S_SurfacePickup.MakePickupFromCurrentColumn();
            Random rnd = new Random();
            for (int i=12; i<=16; i++)
            {
                var randomDouble = rnd.NextDouble();
                TheSystem.LDE.GetSurfaceAt(6).GetCellAt(i).SetSolveData(ParameterPickup);
                TheSystem.LDE.GetSurfaceAt(3).GetCellAt(i).DoubleValue = -0.1 + 0.2*randomDouble; // random value between +/-0.1
            }
            // also, set the 'order' flag for CB#2
            TheSystem.LDE.GetSurfaceAt(6).GetCellAt(17).IntegerValue = 1;
            //! [e07s05_cs]

            //! [e07s06_cs]
            // check the global rotation matrix of surface 5 (rear of the tilted/decentered lens)
            ZOSAPI.Editors.MFE.MeritOperandType GLCR = ZOSAPI.Editors.MFE.MeritOperandType.GLCR;
            // GLCR operand only uses two input parameters: the surface number and rotation matrix entry number.
            // But, GetOperandValue() expects the operand type, plus 8 more inputs because some
            // operands use all 8. We have to put 0's for the additional unused inputs
            double[,] RotationMatrix = new double[3,3];
            int iterate = 1;
            for (int row = 0; row < 3; row++)
            {
                for (int col = 0; col < 3; col++)
                {
                    RotationMatrix[row, col] = TheSystem.MFE.GetOperandValue(GLCR, 5, iterate, 0, 0, 0, 0, 0, 0);
                    iterate += 1;
                }
            }
            //! [e07s06_cs]

            // save the file
            string OutFilePath = TheApplication.ZemaxDataDir + "\\Samples\\API\\CS\\CS_07_TiltDecenterAndMFOperand.zos";
            TheSystem.SaveAs(OutFilePath);

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
