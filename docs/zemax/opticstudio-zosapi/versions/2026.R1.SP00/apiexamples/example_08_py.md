# Example 08 - Python

```py
import clr, os, winreg
from itertools import islice

import math

class PythonStandaloneApplication(object):
    class LicenseException(Exception):
        pass
    class ConnectionException(Exception):
        pass
    class InitializationException(Exception):
        pass
    class SystemNotPresentException(Exception):
        pass

    def __init__(self, path=None):
        # determine location of ZOSAPI_NetHelper.dll & add as reference
        aKey = winreg.OpenKey(winreg.ConnectRegistry(None, winreg.HKEY_CURRENT_USER), r"Software\Zemax", 0, winreg.KEY_READ)
        zemaxData = winreg.QueryValueEx(aKey, 'ZemaxRoot')
        NetHelper = os.path.join(os.sep, zemaxData[0], r'ZOS-API\Libraries\ZOSAPI_NetHelper.dll')
        winreg.CloseKey(aKey)
        clr.AddReference(NetHelper)
        import ZOSAPI_NetHelper
        
        # Find the installed version of OpticStudio
        if path is None:
            isInitialized = ZOSAPI_NetHelper.ZOSAPI_Initializer.Initialize()
        else:
            # Note -- uncomment the following line to use a custom initialization path
            isInitialized = ZOSAPI_NetHelper.ZOSAPI_Initializer.Initialize(path)
        
        # determine the ZOS root directory
        if isInitialized:
            dir = ZOSAPI_NetHelper.ZOSAPI_Initializer.GetZemaxDirectory()
        else:
            raise PythonStandaloneApplication.InitializationException("Unable to locate Zemax OpticStudio.  Try using a hard-coded path.")

        # add ZOS-API referencecs
        clr.AddReference(os.path.join(os.sep, dir, "ZOSAPI.dll"))
        clr.AddReference(os.path.join(os.sep, dir, "ZOSAPI_Interfaces.dll"))
        import ZOSAPI

        # create a reference to the API namespace
        self.ZOSAPI = ZOSAPI

        # create a reference to the API namespace
        self.ZOSAPI = ZOSAPI

        # Create the initial connection class
        self.TheConnection = ZOSAPI.ZOSAPI_Connection()

        if self.TheConnection is None:
            raise PythonStandaloneApplication.ConnectionException("Unable to initialize .NET connection to ZOSAPI")

        self.TheApplication = self.TheConnection.CreateNewApplication()
        if self.TheApplication is None:
            raise PythonStandaloneApplication.InitializationException("Unable to acquire ZOSAPI application")

        if self.TheApplication.IsValidLicenseForAPI == False:
            raise PythonStandaloneApplication.LicenseException("License is not valid for ZOSAPI use")

        self.TheSystem = self.TheApplication.PrimarySystem
        if self.TheSystem is None:
            raise PythonStandaloneApplication.SystemNotPresentException("Unable to acquire Primary system")

    def __del__(self):
        if self.TheApplication is not None:
            self.TheApplication.CloseApplication()
            self.TheApplication = None
        
        self.TheConnection = None
    
    def OpenFile(self, filepath, saveIfNeeded):
        if self.TheSystem is None:
            raise PythonStandaloneApplication.SystemNotPresentException("Unable to acquire Primary system")
        self.TheSystem.LoadFile(filepath, saveIfNeeded)

    def CloseFile(self, save):
        if self.TheSystem is None:
            raise PythonStandaloneApplication.SystemNotPresentException("Unable to acquire Primary system")
        self.TheSystem.Close(save)

    def SamplesDir(self):
        if self.TheApplication is None:
            raise PythonStandaloneApplication.InitializationException("Unable to acquire ZOSAPI application")

        return self.TheApplication.SamplesDir

    def ExampleConstants(self):
        if self.TheApplication.LicenseStatus == self.ZOSAPI.LicenseStatusType.PremiumEdition:
            return "Premium"
        elif self.TheApplication.LicenseStatus == self.ZOSAPI.LicenseStatusTypeProfessionalEdition:
            return "Professional"
        elif self.TheApplication.LicenseStatus == self.ZOSAPI.LicenseStatusTypeStandardEdition:
            return "Standard"
        else:
            return "Invalid"
            
    def reshape(self, data, x, y, transpose = False):
        """Converts a System.Double[,] to a 2D list for plotting or post processing
        
        Parameters
        ----------
        data      : System.Double[,] data directly from ZOS-API 
        x         : x width of new 2D list [use var.GetLength(0) for dimension]
        y         : y width of new 2D list [use var.GetLength(1) for dimension]
        transpose : transposes data; needed for some multi-dimensional line series data
        
        Returns
        -------
        res       : 2D list; can be directly used with Matplotlib or converted to
                    a numpy array using numpy.asarray(res)
        """
        if type(data) is not list:
            data = list(data)
        var_lst = [y] * x;
        it = iter(data)
        res = [list(islice(it, i)) for i in var_lst]
        if transpose:
            return self.transpose(res);
        return res
    
    def transpose(self, data):
        """Transposes a 2D list (Python3.x or greater).  
        
        Useful for converting mutli-dimensional line series (i.e. FFT PSF)
        
        Parameters
        ----------
        data      : Python native list (if using System.Data[,] object reshape first)    
        
        Returns
        -------
        res       : transposed 2D list
        """
        if type(data) is not list:
            data = list(data)
        return list(map(list, zip(*data)))


if __name__ == '__main__':
    zos = PythonStandaloneApplication()
    
    # - load \Samples\Non-Sequential\Scattering\Abg scattering surface.zos
    # 1. delete object 3 (specular ray blocking)
    # 2. insert detector polar position at same pos as object 2
    #   - retrieve object 2 rotation matrix, match orientation
    #   - size = 20
    #   remove absorb material from obj 4
    # -. run ray trace
    # 3/4. Save/Load detector data
    # 5/6. get detector data for detector polar
    #   - retrieve single-value data with GetDetectorPolarData()
    #   - retrieve data grid (all pixels) with GetAllDetectorPolarDataSafe()
    # 7/8. get detector rectangle data
    #   - retrieve single-value data with GetDetectorData()
    #   - retrieve data grid (all pixels) with GetAllDetectorDataSafe()
    # 9/10. get coherent detector rectangle data
    #   - retrieve single-value data with GetCoherentData()
    #   - retrieve data grid (all pixels) with GetAllCoherentDataSafe()
    
    # load local variables
    ZOSAPI = zos.ZOSAPI
    TheApplication = zos.TheApplication
    TheSystem = zos.TheSystem
    
    file = "\\Samples\\Non-sequential\\Scattering\\ABg scattering surface.zos"
    DataDir = TheApplication.ZemaxDataDir
    filepath = DataDir + file
    TheSystem.LoadFile(filepath, False)

    # ! [e08s01_py]
    # Delete unnecessary object from NSCE
    TheSystem.NCE.RemoveObjectAt(3)
    # Add detector co-located with another general object
    obj3 = TheSystem.NCE.InsertNewObjectAt(3)
    DetectorPolar = obj3.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.DetectorPolar)
    obj3.ChangeType(DetectorPolar)
    # Set the detector polar radial size to 20
    obj3.GetCellAt(12).DoubleValue = 20  # cell 12 corresponds to par 2 in NCE
    # ! [e08s01_py]
    
    # ! [e08s02_py]
    # Co-locate object 3 with object 2 (here, could alternatively use Ref Object flag)
    # need to use placeholders for out parameters
    success, R11, R12, R13, R21, R22, R23, R31, R32, R33, Xo, Yo, Zo = TheSystem.NCE.GetMatrix(2, 11, 12, 13, 21, 22, 23, 31, 32, 33, 1, 2, 3)
    obj3.XPosition = Xo
    obj3.YPosition = Yo
    obj3.ZPosition = Zo
    # Conversion from rotation matrix to tilts described in KBA "Rotation Matrix and Tilt About X/Y/Z in OpticStudio"
    obj3.TiltAboutX = math.degrees(math.atan2(-1 * R23, R33))
    obj3.TiltAboutY = math.degrees(math.asin(R13))
    obj3.TiltAboutZ = math.degrees(math.atan2(-1 * R12, R11))
    # ! [e08s02_py]
    
    # Remove ABSORB material from object 4
    TheSystem.NCE.GetObjectAt(4).Material = ''
    # Run the ray trace
    RayTrace = TheSystem.Tools.OpenNSCRayTrace()
    RayTrace.ClearDetectors(0)  # clear the old detector data!
    RayTrace.ScatterNSCRays = True
    RayTrace.UsePolarization = False
    RayTrace.SplitNSCRays = False
    RayTrace.IgnoreErrors = True
    RayTrace.RunAndWaitForCompletion()
    RayTrace.Close()
    
    # The next two steps are technically unnecessary in this case; since we just ran the
    # ray trace, the results are already there. But, we demonstrate usage here anyways
    # ! [e08s03_py]
    # Save detector data -- allows ray trace results to be loaded later
    # For detector polar, the file type is .DDP; for detector rectangle, it's .DDR
    DetectorPolarFile = TheApplication.ZemaxDataDir + "\\Samples\\API\\Python\\detector3polar.DDP"
    DetectorRectFile = TheApplication.ZemaxDataDir + "\\Samples\\API\\Python\\detector4rect.DDR"
    TheSystem.NCE.SaveDetector(3, DetectorPolarFile)
    TheSystem.NCE.SaveDetector(4, DetectorRectFile)
    # ! [e08s03_py]
    
    # ! [e08s04_py]
    # Load detector data -- for analyzing previous ray trace results
    # For detector polar, the file type is .DDP; for detector rectangle, it's .DDR
    DetectorPolarFile = TheApplication.ZemaxDataDir + "\\Samples\\API\\Python\\detector3polar.DDP"
    DetectorRectFile = TheApplication.ZemaxDataDir + "\\Samples\\API\\Python\\detector4rect.DDR"
    TheSystem.NCE.LoadDetector(3, DetectorPolarFile, False)
    TheSystem.NCE.LoadDetector(4, DetectorRectFile, False)
    # ! [e08s04_py]
    
    # ! [e08s05_py]
    # Here we read in the detector polar data from ZOS
    # GetPolarDetectorData() is very similar to the MF operand NSDP;
    # can retrieve RMS (degrees), total power, chromaticity, etc. (see NSDP in OpticStudio Help)
    # Note: GetPolarDetectorData() uses an enumeration for data type, shown here
    DataFlag_Power = ZOSAPI.Editors.NCE.PolarDetectorDataType.Power
    DataFlag_ChromX = ZOSAPI.Editors.NCE.PolarDetectorDataType.Cx
    DataFlag_ChromY = ZOSAPI.Editors.NCE.PolarDetectorDataType.Cy
    # need to use placeholders for out parameters
    success, DetPolarData_RadialRMS = TheSystem.NCE.GetPolarDetectorData(3, -4, DataFlag_Power, 0)  # obj=3, pix=-4, data=power enum
    success, DetPolarData_ChromX = TheSystem.NCE.GetPolarDetectorData(3, 0, DataFlag_ChromX, 0)  # obj=3, pix=0, data=chromaticityX enum
    success, DetPolarData_ChromY = TheSystem.NCE.GetPolarDetectorData(3, 0, DataFlag_ChromY, 0)  # obj=3, pix=0, data=chromaticityY enum
    # ! [e08s05_py]
    
    # ! [e08s06_py]
    # To retrieve the entire data array (power, tristim. X/Y/Z, etc. for each pixel)
    # can use GetAllPolarDetectorDataSafe(), or GetAllPolarDetectorData()
    # Note: GetPolarDetectorData uses an enumeration for data type, shown here
    DataFlag_TriX = ZOSAPI.Editors.NCE.PolarDetectorDataType.TriX
    DataFlag_TriY = ZOSAPI.Editors.NCE.PolarDetectorDataType.TriY
    DataFlag_TriZ = ZOSAPI.Editors.NCE.PolarDetectorDataType.TriZ
    DetPolarData_TriX = TheSystem.NCE.GetAllPolarDetectorDataSafe(3, DataFlag_TriX)  # Tristimulus X value polar pixel
    DetPolarData_TriY = TheSystem.NCE.GetAllPolarDetectorDataSafe(3, DataFlag_TriY)  # Tristimulus Y value on each pixel
    DetPolarData_TriZ = TheSystem.NCE.GetAllPolarDetectorDataSafe(3, DataFlag_TriZ)  # Tristimulus Z value on each pixel
    # ! [e08s06_py]
    
    # ! [e08s07_py]
    # Here we read in the detector rectangle data
    # GetDetectorData() is very similar to the Merit Function operand NSDD
    # can retrieve Std Deviation, # of rays, total power, etc.; data calculated over whole detector or individual pixel
    # need to use placeholders for out parameters
    success, DetRectangleData_StdDev = TheSystem.NCE.GetDetectorData(4, -4, 0, 0)  # obj=4, pix=-4, data=0
    # ! [e08s07_py]
    
    # ! [e08s08_py]
    # To retrieve the entire data array (flux, flux/area, etc.) for all pixel data,
    # can use GetAllDetectorDataSafe(), or GetAllDetectorData().
    # The 'Data' inputs for these functions (parameter 2) can be found in the API syntax help,
    # under the listing for GetDetectorData().
    DetRectangleData_Flux = TheSystem.NCE.GetAllDetectorDataSafe(4, 0)  # total flux on each pixel
    DetRectangleData_FluxArea = TheSystem.NCE.GetAllDetectorDataSafe(4, 1)  # flux/area on each pixel
    DetRectangleData_FluxSAP = TheSystem.NCE.GetAllDetectorDataSafe(4, 2)  # flux/solid angle pixel on each pixel
    # ! [e08s08_py]
    
    # Finally, let's read coherent data
    # The coherent data isn't very meaningful in this example, but it serves to demonstrate API usage and functionality
    # ! [e08s09_py]
    # Read in the detector rectangle coherent data
    # GetCoherentData() is very similar to the operand NSDC
    # can retrieve real, imaginary, amplitude, power with 'data' input
    # for pix=0, get sum on detector; pix>0 gives single pixel data
    success, DetRectangle_CoherentAmp = TheSystem.NCE.GetCoherentData(4, 0, ZOSAPI.Editors.NCE.DetectorDataType.Amplitude, 0) # obj=4, pix=0, data=2
    success, DetRectangle_CoherentPower = TheSystem.NCE.GetCoherentData(4, 0, ZOSAPI.Editors.NCE.DetectorDataType.Power, 0) # obj=4, pix=0, data=3
    # ! [e08s09_py]
    
    fileName = DataDir + r"\Samples\API\Python\Python8_NSCEDetectorData.zos"
    TheSystem.SaveAs(fileName)
    print('Saved file: %s' % fileName)
    # from here, we can plot or analyze any detector we want!
    
    # This will clean up the connection to OpticStudio.
    # Note that it closes down the server instance of OpticStudio, so you for maximum performance do not do
    # this until you need to.
    del zos
    zos = None
```
