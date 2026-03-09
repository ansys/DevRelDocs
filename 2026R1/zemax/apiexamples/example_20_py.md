# Example 20 - Python

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
    if not os.path.exists(TheApplication.SamplesDir + "\\API\\Python"):
        os.makedirs(TheApplication.SamplesDir + "\\API\\Python")
    
    # Load a non-sequential file
    TheSystem.LoadFile(TheApplication.SamplesDir +'\\Non-Sequential\\Miscellaneous\\Digital_projector_flys_eye_homogenizer.zos', False)
    
    #! [e20s01_py]
    # Get interface of IExportCAD
    ToolExportCAD = TheSystem.Tools.OpenExportCAD()
    #! [e20s01_py]

    #! [e20s02_py]
    # default option settings
    ToolExportCAD.FirstObject = 1
    ToolExportCAD.LastObject = 8
    ToolExportCAD.RayLayer = 1
    ToolExportCAD.LensLayer = 0
    ToolExportCAD.DummyThickness = 1
    ToolExportCAD.SplineSegments = ZOSAPI.Tools.General.SplineSegmentsType.N_032
    ToolExportCAD.FileType = ZOSAPI.Tools.General.CADFileType.STEP
    ToolExportCAD.Tolerance = ZOSAPI.Tools.General.CADToleranceType.N_TenEMinus4
    ToolExportCAD.SetCurrentConfiguration()
    # For other configuration choices, use following methods.
    # ToolExportCAD.SetConfigurationAllAtOnce()
    # ToolExportCAD.SetConfigurationAllByFile()
    # ToolExportCAD.SetConfigurationAllByLayer()
    # ToolExportCAD.SetSingleConfiguration(1)
    #! [e20s02_py]
    
    #! [e20s03_py]
    # default check boxes settings
    ToolExportCAD.SurfacesAsSolids = True
    ToolExportCAD.ScatterNSCRays = False
    ToolExportCAD.ExportDummySurfaces = False
    ToolExportCAD.SplitNSCRays = False
    ToolExportCAD.UsePolarization = False
    #! [e20s03_py]

    #! [e20s04_py]
    # set output file name
    ToolExportCAD.OutputFileName = TheApplication.ObjectsDir + '\\CAD Files\\API_CADexport_sample.step'
    #! [e20s04_py]

    #! [e20s05_py]
    # Starting exporting
    # Run with a 3 minites timeout
    print('Starting exporting...')
    
    ToolExportCAD.Run()
    runstatus = ToolExportCAD.WaitWithTimeout(float(3 * 60))

    # Report the status
    if runstatus == ZOSAPI.Tools.RunStatus.Completed:
        print('Completed!')
    elif runstatus == ZOSAPI.Tools.RunStatus.FailedToStart:
        print('Failed To Start!')
    elif runstatus == ZOSAPI.Tools.RunStatus.InvalidTimeout:
        print('Invalid Timeout')
    else:
        print('Timed Out!')

    print('Progress: ', ToolExportCAD.Progress)

    # If the exporting is not completed and can be cancelled, cancel the work
    if (runstatus != ZOSAPI.Tools.RunStatus.Completed and ToolExportCAD.CanCancel):
        ToolExportCAD.Cancel()

    # Close the tool
    ToolExportCAD.Close()
    #! [e20s05_py]
    
    # This will clean up the connection to OpticStudio.
    # Note that it closes down the server instance of OpticStudio, so you for maximum performance do not do
    # this until you need to.
    del zos
    zos = None
```
