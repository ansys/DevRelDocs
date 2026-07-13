# Example 16 - C#

```csharp
using System;
using ZOSAPI;

namespace CSharpUserOperandApplication
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

            BeginUserOperand();
        }

        static void BeginUserOperand()
        {
            // Create the initial connection class
            ZOSAPI_Connection TheConnection = new ZOSAPI_Connection();

            // Attempt to connect to the existing OpticStudio instance
            IZOSAPI_Application TheApplication = null;
            try
            {
                TheApplication = TheConnection.ConnectToApplication(); // this will throw an exception if not launched from OpticStudio
            }
            catch (Exception ex)
            {
                HandleError(ex.Message);
                return;
            }
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
            if (TheApplication.Mode != ZOSAPI_Mode.Operand)
            {
                HandleError("User plugin was started in the wrong mode: expected Operand, found " + TheApplication.Mode.ToString());
                return;
            }

            // Read the operand arguments
            double Hx = TheApplication.OperandArgument1;
            double Hy = TheApplication.OperandArgument2;
            double Px = TheApplication.OperandArgument3;
            double Py = TheApplication.OperandArgument4;

            // Initialize the output array
            int maxResultLength = TheApplication.OperandResults.Length;
            double[] operandResults = new double[maxResultLength];

            IOpticalSystem TheSystem = TheApplication.PrimarySystem;
            // Add your custom code here...

            // This is an example that calculates the sum of absolute distance between surfaces. 
            // Hx -> Surf1
            // Hy -> Surf2

            //! [e16s01_cs]
	        // Read the operand arguments (Note that we aren't using operand 3 and 4)
	        int surf1 = (int)TheApplication.OperandArgument1;
            int surf2 = (int)TheApplication.OperandArgument2;
	        //double x = TheApplication.OperandArgument3;
	        //double y = TheApplication.OperandArgument4;    
            //! [e16s01_cs]

            //! [e16s02_cs]
            //Make the sum of the absolute value of each surface thickness
            ZOSAPI.Editors.LDE.ILDERow surf;
            double thic = 0;

            if (surf1 <= surf2)
            {
                for (int i = surf1; i <= surf2; i++)
                {
                    surf = TheSystem.LDE.GetSurfaceAt(i);
                    thic = thic + Math.Abs(surf.Thickness);                    
                }
                operandResults[0] = thic;
            }
	        else
	        {
		        operandResults[0] = 1e9;    // invalid input
            }
            //! [e16s02_cs]     

            // Clean up
            FinishUserOperand(TheApplication, operandResults);
        }

        static void FinishUserOperand(IZOSAPI_Application TheApplication, double[] resultData)
        {
            // Note - OpticStudio will wait for the operand to complete until this application exits 
            if (TheApplication != null)
            {
                TheApplication.OperandResults.WriteData(resultData.Length, resultData);
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
