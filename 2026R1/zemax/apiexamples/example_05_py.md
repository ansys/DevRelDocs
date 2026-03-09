# Example 05 - Python

```py
import clr, os, winreg
from itertools import islice

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
    
    # load local variables
    ZOSAPI = zos.ZOSAPI
    TheApplication = zos.TheApplication
    TheSystem = zos.TheSystem
    Logic = ['False', 'True']
    
    # Open file and set Analysis Ryas to only 10
    testFile = TheApplication.SamplesDir + r'\Non-sequential\Miscellaneous\Digital_projector_flys_eye_homogenizer.zos'
    TheSystem.LoadFile(testFile, False)
    print(TheSystem.SystemFile)
    TheSystem.NCE.GetObjectAt(1).GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par2).IntegerValue = 1

    #! [e27s01_py]
    # Trace and save a ZRD file for test later
    NSCRayTrace = TheSystem.Tools.OpenNSCRayTrace()
    NSCRayTrace.SplitNSCRays = True
    NSCRayTrace.ScatterNSCRays = False
    NSCRayTrace.UsePolarization = True
    NSCRayTrace.IgnoreErrors = True
    NSCRayTrace.SaveRays = True
    NSCRayTrace.SaveRaysFile = 'Digital_projector_flys_eye_homogenizer.ZRD'
    NSCRayTrace.ClearDetectors(0)
    NSCRayTrace.RunAndWaitForCompletion()
    NSCRayTrace.Close()
    #! [e27s01_py]
    
    #! [e27s02_py]
    ZRDReader = TheSystem.Tools.OpenRayDatabaseReader()
    ZRDReader.ZRDFile = TheApplication.SamplesDir + r'\Non-sequential\Miscellaneous\Digital_projector_flys_eye_homogenizer.ZRD'
    print(TheApplication.SamplesDir + r'\Non-sequential\Miscellaneous\Digital_projector_flys_eye_homogenizer.ZRD')

    
    ZRDReader.RunAndWaitForCompletion()
    if ZRDReader.Succeeded == 0:
        print('Raytracing failed!\n')
        print(ZRDReader.ErrorMessage)
    else:
        print('Raytracing completed!\n')
    #! [e27s02_py]
    
    #! [e27s03_py]
    ZRDResult = ZRDReader.GetResults()
    # ReadNExtResult() returns data ray by ray
    success_NextResult, rayNumber, waveIndex, wlUM, numSegments = ZRDResult.ReadNextResult(0, 0, 0, 0)
    while success_NextResult == True:
        print('\n\n\nsuccess_NextResult: %s, rayNumber: %d, waveIndex: %d, wlUM: %f, numSegments: %d\n\n' %
              (Logic[success_NextResult], rayNumber, waveIndex, wlUM, numSegments))
        segdata = ZRDResult.ReadNextSegmentFull(1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25, 26, 27, 28, 29)
        while segdata[0] == True:
            print('''success_NextSegmentFull: %s, segmentLevel: %d, segmentParent: %d,
hitObj: %d, hitFace: %d, insideOf: %d, status: %s,
x: %f, y: %f, z: %f,l: %f, m: %f, n: %f,
exr: %f, exi: %f, eyr: %f, eyi: %f, ezr: %f, ezi: %f,
intensity: %f, pathLength: %f, xybin: %d, lmbin: %d,
xNorm: %f, yNorm: %f, zNorm: %f,
index: %f, startingPhase: %f, phaseOf: %f, phaseAt: %f\n''' %
                  (Logic[segdata[0]], segdata[1], segdata[2], segdata[3], segdata[4], segdata[5], segdata[6],
                   segdata[7], segdata[8], segdata[9], segdata[10], segdata[11], segdata[12], segdata[13],
                   segdata[14], segdata[15], segdata[16], segdata[17], segdata[18], segdata[19], segdata[20],
                   segdata[21], segdata[22], segdata[23], segdata[24], segdata[25], segdata[26], segdata[27],
                   segdata[28], segdata[29]))
            segdata = ZRDResult.ReadNextSegmentFull(1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25, 26, 27, 28, 29)
        success_NextResult, rayNumber, waveIndex, wlUM, numSegments = ZRDResult.ReadNextResult(0, 0, 0, 0)
        
    ZRDReader.Close()
    #! [e27s03_py]
    
    
    # This will clean up the connection to OpticStudio.
    # Note that it closes down the server instance of OpticStudio, so you for maximum performance do not do
    # this until you need to.
    del zos
    zos = None
```
