# Example 06 - C#

```csharp
using System;
using ZOSAPI;
using ZOSAPI.Editors.NCE;

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

            //! [e06s01_cs]
            // Create new non- sequential file
            // Set up primary optical system
            TheSystem = TheApplication.CreateNewSystem(ZOSAPI.SystemType.NonSequential);
            INonSeqEditor TheNCE = TheSystem.NCE as INonSeqEditor;
            //! [e06s01_cs]

            //! [e06s02_cs]
            // inserts objects and changes type
            INCERow o1 = TheNCE.GetObjectAt(1) as INCERow;
            INCERow o2 = TheNCE.InsertNewObjectAt(2) as INCERow;
            o1.ChangeType(o1.GetObjectTypeSettings(ObjectType.SourcePoint));
            o2.ChangeType(o2.GetObjectTypeSettings(ObjectType.DetectorRectangle));
            //! [e06s02_cs]

            //! [e06s03_cs]
            // modify object's cell values in the NCE
            ((IObjectSources)o1.ObjectData).NumberOfAnalysisRays = (int)1e6;
            ((IObjectSources)o1.ObjectData).NumberOfLayoutRays = 10;
            ((IObjectSourcePoint)o1.ObjectData).ConeAngle = 2.5;

            o2.ZPosition = 1;
            ((IObjectDetectorRectangle)o2.ObjectData).XHalfWidth = 0.1;
            ((IObjectDetectorRectangle)o2.ObjectData).YHalfWidth = 0.1;
            ((IObjectDetectorRectangle)o2.ObjectData).NumberXPixels = 100;
            ((IObjectDetectorRectangle)o2.ObjectData).NumberYPixels = 100;
            //! [e06s03_cs]

            //! [e06s04_cs]
            // Setup and run the ray trace
            ZOSAPI.Tools.RayTrace.INSCRayTrace NSCRayTrace = TheSystem.Tools.OpenNSCRayTrace();
            NSCRayTrace.SplitNSCRays = false;
            NSCRayTrace.ScatterNSCRays = true;
            NSCRayTrace.UsePolarization = false;
            NSCRayTrace.IgnoreErrors = true;
            NSCRayTrace.SaveRays = false;
            NSCRayTrace.ClearDetectors(0);

            NSCRayTrace.RunAndWaitForCompletion();
            NSCRayTrace.Close();
            //! [e06s04_cs]

            int det = 2;
            System.Text.StringBuilder sbReport = new System.Text.StringBuilder();

            //! [e06s05_cs]
            // extracts the irradiance data from detector
            double[,] irradiance = TheSystem.NCE.GetAllDetectorDataSafe(det, 1);
            for (int i = irradiance.GetLength(0) - 1; i >= 0; i--)
            {
                for (int j = 0; j < irradiance.GetLength(1); j++)
                {
                    sbReport.Append(irradiance[i, j] + "\t");
                }
                sbReport.AppendLine("");
            }
            //! [e06s05_cs]

            sbReport.Append("\n");

            //! [e06s06_cs]
            // Calculates phase data from Er & Ei
            double[,] real = TheSystem.NCE.GetAllCoherentDataSafe(det, DetectorDataType.Real);
            double[,] imag = TheSystem.NCE.GetAllCoherentDataSafe(det, DetectorDataType.Imaginary);
            double[,] phase = new double[real.GetLength(0), real.GetLength(1)];
            for (int i = real.GetLength(0) - 1; i >= 0; i--)
            {
                for (int j = 0; j < real.GetLength(1); j++)
                {
                    phase[i, j] = Math.Atan2(imag[i, j], real[i, j]) * 180 / Math.PI;
                    sbReport.Append(phase[i, j] + "\t");
                }
                sbReport.AppendLine("");
            }
            string resFile = TheApplication.SamplesDir + "\\API\\CS\\e06_nsc_phase.txt";
            System.IO.File.WriteAllText(resFile, sbReport.ToString());
            //! [e06s06_cs]

            TheSystem.SaveAs(TheApplication.SamplesDir + "\\API\\CS\\e06_nsc_phase.zos");

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
