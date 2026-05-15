# Example 04 - C#

```csharp
using System;
using ZOSAPI;
using ZOSAPI.Analysis;
using ZOSAPI.Analysis.Data;
using ZOSAPI.Analysis.Settings.Mtf;

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

            // Set up primary optical system
            string sampleDir = TheApplication.SamplesDir;

            //! [e04s01_cs]
            // Open file
            string testFile = sampleDir + "\\Sequential\\Objectives\\Cooke 40 degree field.zos";
            TheSystem.LoadFile(testFile, false);
            //! [e04s01_cs]

            //! [e04s02_cs]
            // Create analysis
            IA_ newWin = TheSystem.Analyses.New_FftMtf();
            //! [e04s02_cs]

            //! [e04s03_cs]
            // Settings
            IAS_FftMtf newWin_Settings = newWin.GetSettings() as IAS_FftMtf;
            newWin_Settings.MaximumFrequency = 50;
            newWin_Settings.SampleSize = SampleSizes.S_256x256;
            //! [e04s03_cs]

            //! [e04s04_cs]
            // Run Analysis
            newWin.ApplyAndWaitForCompletion();
            IAR_ newWin_Results = newWin.GetResults();
            //! [e04s04_cs]

            //! [e04s05_cs]
            // Read data series
            System.Text.StringBuilder sbReport = new System.Text.StringBuilder();
            sbReport.Append("X Data\t");
            for (int i = 0; i < newWin_Results.NumberOfDataSeries; i++)
            {
                sbReport.Append("Series " + i + "\t\t");
            }
            sbReport.AppendLine("");

            for (int k = 0; k < newWin_Results.GetDataSeries(0).XData.Length; k++)
            {
                sbReport.Append(newWin_Results.GetDataSeries(0).XData.GetValueAt(k) + "\t");
                for (int i = 0; i < newWin_Results.NumberOfDataSeries; i++)
                {
                    for (int j = 0; j < newWin_Results.GetDataSeries(i).NumSeries; j++)
                    {
                        sbReport.Append(newWin_Results.GetDataSeries(i).YData.GetValueAt(k, j) + "\t");
                    }
                }
                sbReport.AppendLine("");
            }

            string resFile = TheApplication.SamplesDir + "\\API\\CS\\e04_pull_data_from_FFTMT.txt";
            System.IO.File.WriteAllText(resFile, sbReport.ToString());

            //! [e04s05_cs]
            Console.WriteLine("Press any key to continue...");
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
