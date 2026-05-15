# Example 10 - Python

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

    # ! [e10s01_py]
    # Open File, Save to New Name
    file = "\\Non-Sequential\\Ray Splitting\\Beam splitter.zos"
    TheSystem.LoadFile(TheApplication.SamplesDir + file, False)
    TheSystem.SaveAs(TheApplication.SamplesDir + "\\API\\Python\\e10_NSC_ray_trace.zos")
    #! [e10s01_py]

    #! [e10s02_py]
    # Run an NSC Ray Trace, Save .zrd file
    NSCRayTrace = TheSystem.Tools.OpenNSCRayTrace()  # Open NSC RayTrace tool
    NSCRayTrace.ClearDetectors(0)  # Clear all detectors
    # Set up RayTrace tool
    NSCRayTrace.IgnoreErrors = True
    NSCRayTrace.SaveRays = True
    NSCRayTrace.SaveRaysFile = "e10_API_RayTrace.ZRD"  # Saves to same directory as lens file
    NSCRayTrace.RunAndWaitForCompletion()
    NSCRayTrace.Close()
    #! [e10s02_py]
    
    #! [e10s03_py]
    # Open Detector Viewer, view previously saved .zrd file
    DetectorView = TheSystem.Analyses.New_DetectorViewer()
    DetectorView_Settings = DetectorView.GetSettings()
    DetectorView_Settings.RayDatabaseFilename = "e10_API_Raytrace.ZRD"
    DetectorView_Settings.ShowAs = ZOSAPI.Analysis.DetectorViewerShowAsTypes.FalseColor
    DetectorView_Settings.Filter = "X_HIT(2, 4)"  # Detector will only display rays which hit object 2 exactly 4 times
    DetectorView.ApplyAndWaitForCompletion()  # Apply Settings to Detector Viewer
    #! [e10s03_py]
    
    #! [e10s04_py]
    # Retrieve detector data and detector information
    TheNCE = TheSystem.NCE
    hits_bool_return, total_hits = TheNCE.GetDetectorData(4, -3, 0, 0)  # Object Number=4, Pix -3 & Data=0 (total hits)
    flux_bool_return, total_flux = TheNCE.GetDetectorData(4, 0, 0, 0)  # Object Number=4, Pix=0 & Data=0 (total flux)
    print(" total hits  = ",total_hits, "\n", "total flux =  ",total_flux)

    dims_bool_return, X_detectorDims, Y_detectorDims = TheNCE.GetDetectorDimensions(4, 0, 0)  # get number of pixels in X, Y

    pix = []  # Create array to store flux data for each pixel
    length = pix.__len__()
    while pix.__len__() < X_detectorDims*Y_detectorDims:  # loop through pixels, store value in pix
        length += 1
        pix_bool, value = TheNCE.GetDetectorData(4, length, 0, 0)
        pix.append(value)
    #! [e10s04_py]
    
    #! [e10s05_py]
    # Save Ray Path Analysis to Text File
    if (TheApplication.LicenseStatus == ZOSAPI.LicenseStatusType.PremiumEdition):
        # there is a bug in ZOS16.5 SP4 with COM; need to use ZOS16.5 SP5 or higher to run this code successfully
        RayPath = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.PathAnalysis)
        RayPath_settings = RayPath.GetSettings()
        zrd = "e10_API_RayTrace.ZRD"
        RayPath_settings.RayDatabaseFile = zrd
        RayPath.ApplyAndWaitForCompletion()

        Rays = RayPath.GetResults()
        Rays.GetTextFile(TheApplication.SamplesDir + "\\API\\Python\\e10_RayPathAnalysis.txt")
    #! [e10s05_py]

    # Save!
    TheSystem.Save()
    
    # This will clean up the connection to OpticStudio.
    # Note that it closes down the server instance of OpticStudio, so you for maximum performance do not do
    # this until you need to.
    del zos
    zos = None
```
