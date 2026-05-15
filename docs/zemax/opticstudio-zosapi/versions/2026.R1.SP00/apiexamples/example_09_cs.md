# Example 09 - C#

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

            // creates new directory
            string strPath = System.IO.Path.Combine(TheApplication.SamplesDir, @"API\CS");
            System.IO.Directory.CreateDirectory(strPath);

            // Add your custom code here...

            //! [e09s01_cs]
            //  Open new NS system and save
            TheSystem = TheApplication.CreateNewSystem(SystemType.NonSequential);    //  Create New NSC File
            String filename = TheApplication.SamplesDir + "\\API\\CS\\e09_NSC_CAD.zos";  //  Define file path and name
            //  Save New NSC File
            TheSystem.SaveAs(filename);
            //! [e09s01_cs]

            //! [e09s02_cs]
            //  Insert CAD object
            INonSeqEditor NSCE = TheSystem.NCE;
            INCERow Obj1 = NSCE.GetObjectAt(1);
            Obj1.ZPosition = -5;
            //  Set object 1 as CAD object if CAD file exists in proper directory
            if (System.IO.File.Exists(TheApplication.ObjectsDir + "\\CAD Files\\ExtPoly.stp"))  //  Check if the CAD part exists in correct directory
            {
                IObjectTypeSettings Obj1_Type = Obj1.GetObjectTypeSettings(ObjectType.CADPartSTEPIGESSAT); //  create CAD object type
                Obj1_Type.FileName1 = "ExtPoly.stp";  //  set CAD file to be used (file must be in directory specified under OpticStudio Preferences...Folders...Objects)
                Obj1.ChangeType(Obj1_Type);  //  Set Object 1 as the previously specified CAD file
            }
            else
                Console.WriteLine("CAD file not found");
            //! [e09s02_cs]

            TheSystem.Save();

            //! [e09s03_cs]
            //  Access the CAD settings for object 1
            INCECADData Obj1_CAD = Obj1.CADData;  //  Retrieve CAD data

            // Determine if the surface-to-face mappint is available for this object. 
            // If available, update the mapping based on the total number of surfaces in the system
            if (Obj1_CAD.HasFaceData)
            {
                if (Obj1_CAD.NumberOfSurfaces > 1)
                {
                    // Assign the last face to surface 0. Now, the first and last surfaces will be defined with the same scatter and coating properties
                    Obj1_CAD.SetSurfaceFace(0, Obj1_CAD.NumberOfSurfaces - 1);
                }
            }
            //! [e09s03_cs]

            //! [e09s04_cs]
            using (System.IO.StreamWriter POBfile = new System.IO.StreamWriter(TheApplication.ObjectsDir + "\\Polygon Objects\\API_cube_demo.POB", false)) //  Open new POB file
            {
                //  Append new POB file with polygon definitions (see help files for syntax information)
                POBfile.WriteLine("! A cube" + "\n");
                POBfile.WriteLine("! front face vertices" + "\n" + "V 1 -1 -1 0" + "\n" + "V 2 1 -1 0" + "\n" + "V 3 1 1 0" + "\n" + "V 4 -1 1 0" + "\n");
                POBfile.WriteLine("! back face vertices" + "\n" + "V 5 -1 -1 2" + "\n" + "V 6 1 -1 2" + "\n" + "V 7 1 1 2" + "\n" + "V 8 -1 1 2" + "\n");
                POBfile.WriteLine("! Front" + "\n" + "R 1 2 3 4 0 0" + "\n" + "! Back" + "\n" + "R 5 6 7 8 0 0" + "\n");
                POBfile.WriteLine("! Top" + "\n" + "R 4 3 7 8 0 0" + "\n" + "! Bottom" + "\n" + "R 1 2 6 5 0 0" + "\n");
                POBfile.WriteLine("! Left Side" + "\n" + "R 1 4 8 5 0 0" + "\n" + "! Right Side" + "\n" + "R 2 3 7 6 0 0");
                INCERow Obj2 = NSCE.InsertNewObjectAt(2);  //  Add new line to NSCE
                IObjectTypeSettings Obj2_Type = Obj2.GetObjectTypeSettings(ObjectType.PolygonObject);
                Obj2_Type.FileName1 = "API_cube_demo.POB";
                Obj2.ChangeType(Obj2_Type);
            }
            //! [e09s04_cs]

            // opens 3d layout
            TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.NSC3DLayout);
            TheSystem.Save();  //  Save the file

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
