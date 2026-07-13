# Example 08 - C#

```csharp
using System;
using ZOSAPI;

namespace CSharpStandaloneApplication1
{
    class CSharpStandalone_08_NSCEDetectorData
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
            /* 
            -. load \Samples\NS\Scattering\ABg scattering surface.zos
            1. delete object 3(specular ray blocking)
            2. insert detector polar positioned at same pos as object 2
                - retrieve obj 2 rotation matrix, match orientation
                - size = 20
                - remove material from obj 4
            -. run ray trace
            3/4. Save/Load Detector Data
            5/6. get detector data for detector polar
                - retrieve single - value data with GetDetectorPolarData()
                - retrieve data grid(all pixels) with GetAllDetectorPolarDataSafe()
            7/8. get detector rectangle data
                - retrieve single - value data with GetDetectorData()
                - retrieve data grid(all pixels) with GetAllDetectorDataSafe()
            9/10. get coherent detector rectangle data
                - retrieve single-value data with GetCoherentData()
                - retrieve data grid (all pixels) with GetAllCoherentDataSafe()
            */

            string file = "\\Samples\\Non-sequential\\Scattering\\ABg scattering surface.zos";
            string DataDir = TheApplication.ZemaxDataDir;
            string filepath = DataDir + file;
            TheSystem.LoadFile(filepath, false);

            // creates new directory
            string strPath = System.IO.Path.Combine(TheApplication.SamplesDir, @"API\CS");
            System.IO.Directory.CreateDirectory(strPath);


            //! [e08s01_cs]
            // delete unnecessary object from NSCE
            TheSystem.NCE.RemoveObjectAt(3);
            // Add detector polar, change radial size to 20mm
            ZOSAPI.Editors.NCE.INCERow obj3 = TheSystem.NCE.InsertNewObjectAt(3);
            ZOSAPI.Editors.NCE.IObjectTypeSettings DetectorPolar = obj3.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.DetectorPolar);
            obj3.ChangeType(DetectorPolar);
            // Set the detector polar radial size to 20
            obj3.GetCellAt(12).DoubleValue = 20; // cell 12 always corresponds to 'Par2' in the NSCE
            //! [e08s01_cs]

            //! [e08s02_cs]
            // Co-locate object 3 with object 2 (here, could alternatively use Ref Object flag)
            bool success = TheSystem.NCE.GetMatrix(2, out double R11, out double R12, out double R13, out double R21,
                out double R22, out double R23, out double R31, out double R32, out double R33, out double Xo,
                out double Yo, out double Zo);
            obj3.XPosition = Xo;
            obj3.YPosition = Yo;
            obj3.ZPosition = Zo;
            // Conversion from rotation matrix to tilts described in KBA "Rotation matrix and Tilt About X/Y/Z in OpticStudio"
            obj3.TiltAboutX = (180 / Math.PI) * Math.Atan2(-1 * R23, R33);
            obj3.TiltAboutY = (180 / Math.PI) * Math.Asin(R13);
            obj3.TiltAboutZ = (180 / Math.PI) * Math.Atan2(-1 * R12, R11);
            //! [e08s02_cs]

            // remove ABSORB material from object 4
            TheSystem.NCE.GetObjectAt(4).Material = "";
            // Run ray trace
            ZOSAPI.Tools.RayTrace.INSCRayTrace RayTrace = TheSystem.Tools.OpenNSCRayTrace();
            RayTrace.ClearDetectors(0); // clear the old detector data!
            RayTrace.ScatterNSCRays = true;
            RayTrace.UsePolarization = false;
            RayTrace.SplitNSCRays = false;
            RayTrace.IgnoreErrors = true;
            RayTrace.RunAndWaitForCompletion();
            RayTrace.Close();

            // The next two steps are technically unnecessary in this case; since we just ran the ray trace,
            // the results are already there. But we demonstrate usage here anyways
            //! [e08s03_cs]
            // Save detector data -- allows ray trace results to be loaded later
            // For detector polar, the file type is .DDP; for detector rectangle, it is .DDR
            string DetectorPolarFile = TheApplication.ZemaxDataDir + "\\Samples\\API\\CS\\detector3polar.DDP";
            string DetectorRectFile = TheApplication.ZemaxDataDir + "\\Samples\\API\\CS\\detector4rect.DDR";
            TheSystem.NCE.SaveDetector(3, DetectorPolarFile);
            TheSystem.NCE.SaveDetector(4, DetectorRectFile);
            //! [e08s03_cs]

            //! [e08s04_cs]
            // Load detector data -- for analyzing previous ray trace results
            // For detector polar, the file type is .DDP; for detector rectangle, it's .DDR
            TheSystem.NCE.LoadDetector(3, TheApplication.ZemaxDataDir + "\\Samples\\API\\CS\\detector3polar.DDP", false);
            TheSystem.NCE.LoadDetector(4, TheApplication.ZemaxDataDir + "\\Samples\\API\\CS\\detector4rect.DDR", false);
            //! [e08s04_cs]

            //! [e08s05_cs]
            // Here we read in the detector polar data from ZOS
            // GetPolarDetectorData() is very similar to the MF operand NSDP;
            // can retrieve RMS (degrees), total power, chromatricity, etc. (see NSDP in OpticStudio help)
            // Note: GetPolarDetectorData() uses an enumeration for data type, shown here
            ZOSAPI.Editors.NCE.PolarDetectorDataType DataFlag_Power = ZOSAPI.Editors.NCE.PolarDetectorDataType.Power;
            ZOSAPI.Editors.NCE.PolarDetectorDataType DataFlag_ChromX = ZOSAPI.Editors.NCE.PolarDetectorDataType.Cx;
            ZOSAPI.Editors.NCE.PolarDetectorDataType DataFlag_ChromY = ZOSAPI.Editors.NCE.PolarDetectorDataType.Cy;
            success = TheSystem.NCE.GetPolarDetectorData(3, -4, DataFlag_Power, out double DetPolarData_RadialRMS); // obj=3, pix=-4, data=power enum
            success = TheSystem.NCE.GetPolarDetectorData(3, 0, DataFlag_ChromX, out double DetPolarData_ChromX); // obj=3, pix=0, data=chromaticityX enum
            success = TheSystem.NCE.GetPolarDetectorData(3, 0, DataFlag_ChromY, out double DetPolarData_ChromY); // obj=3, pix=0, data=chromaticityY enum
            //! [e08s05_cs]

            //! [e08s06_cs]
            // To retrieve the entire data array (power, tristim. X/Y/Z, etc. for each pixel) 
            // can use GetAllPolarDetectorDataSafe(), or GetAllPolarDetectorData().
            // Note: GetPolarDetectorData use an enumeration for data type, shown here
            ZOSAPI.Editors.NCE.PolarDetectorDataType DataFlag_TriX = ZOSAPI.Editors.NCE.PolarDetectorDataType.TriX;
            ZOSAPI.Editors.NCE.PolarDetectorDataType DataFlag_TriY = ZOSAPI.Editors.NCE.PolarDetectorDataType.TriY;
            ZOSAPI.Editors.NCE.PolarDetectorDataType DataFlag_TriZ = ZOSAPI.Editors.NCE.PolarDetectorDataType.TriZ;
            // now, retrieve the pixel data array
            double[,] DetPolarData_TriX = TheSystem.NCE.GetAllPolarDetectorDataSafe(3, DataFlag_TriX);
            double[,] DetPolarData_TriY = TheSystem.NCE.GetAllPolarDetectorDataSafe(3, DataFlag_TriY);
            double[,] DetPolarData_TriZ = TheSystem.NCE.GetAllPolarDetectorDataSafe(3, DataFlag_TriZ);
            //! [e08s06_cs]

            //! [e08s07_cs]
            // Here we read in the detector rectangle data
            // GetDetectorData() is very similar to the Merit Function operand NSDD
            // can retrieve Std Dev, # of rays, total power, etc.; data calculated over whole detector or individual pixel
            TheSystem.NCE.GetDetectorData(4, -4, 0, out double DetRectangleData_StdDev); // obj=4, pix=-4, data=0
            //! [e08s07_cs]

            //! [e08s08_cs]
            // To retrieve the entire data array (flux, flux/area, etc.) for all pixel data,
            // can use GetAllDetectorDataSafe() or GetAllDetectorData().
            // The 'Data' inputs for these functions (parameter 2) can be found in the API syntax help,
            // under the listing for GetDetectorData. 
            double[,] DetRectangleData_Flux = TheSystem.NCE.GetAllDetectorDataSafe(4, 0); // total flux on each pixel
            double[,] DetRectangleData_FluxArea = TheSystem.NCE.GetAllDetectorDataSafe(4, 1); // flux/area on each pixel
            double[,] DetRectangleData_FluxSAP = TheSystem.NCE.GetAllDetectorDataSafe(4, 2); // flux/solid angle on each pixel
            //! [e08s08_cs]

            // Finally, let's read coherent data.
            // The coherent data is meaningless in this example, but it serves to demonstrate API usage and functionality.
            //! [e08s09_cs]
            // Read in the detector rectangle coherent data
            // GetCoherentData() is very similar to the operand NSDC
            // Can retrieve real, imaginary, amplitude, power, with 'data' input
            // for pix = 0, get sum on detector; pix > 0 gives single pixel data
            TheSystem.NCE.GetCoherentData(4, 0, ZOSAPI.Editors.NCE.DetectorDataType.Amplitude, out double DetRectangle_CoherentAmp); // obj=4, pix=0, data=2
            TheSystem.NCE.GetCoherentData(4, 0, ZOSAPI.Editors.NCE.DetectorDataType.Power, out double DetRectangle_CoherentPower); // obj=4, pix=0, data=3
            //! [e08s09_cs]

            //! [e08s10_cs]
            // Retrieve whole data array with GetAllCoherentDataSafe(), or GetAllCoherentData(). 
            // The 'Data' input functions similarly to NSDC(real, imaginary, amplitude, power)
            // Note: divide coherent power by pixel area to get coherent irradiance
            double[,] DetRectangle_CoherentPowerFull = TheSystem.NCE.GetAllCoherentDataSafe(4, ZOSAPI.Editors.NCE.DetectorDataType.Power); // obj=4, data=3
            //! [e08s10_cs]

            string OutFile = DataDir + "\\Samples\\API\\CS\\CS_08_NSCEDetectorData.zos";
            TheSystem.SaveAs(OutFile);

            // from here, we can plot or analyze any detector data we want!

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
