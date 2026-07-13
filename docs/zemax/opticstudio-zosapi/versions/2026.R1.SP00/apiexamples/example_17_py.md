# Example 17 - Python

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
    
    #! [e17s01_py]
    # Create New File
    TheSystem.New(False)
    TheSystem.MakeNonSequential()
    #! [e17s01_py]

    TheSystem.SystemData.MaterialCatalogs.AddCatalog('SCHOTT')

    #! [e17s02_py]
    # Define Path Locations
    SamplesFolder = TheApplication.SamplesDir
    SampleFile = SamplesFolder + "\\API\\Python\\e17_NSC_BulkScatter.zos"
    TheSystem.SaveAs(SampleFile)
    #! [e17s02_py]

    #! [e17s03_py]
    # Non-sequential component editor
    TheNCE = TheSystem.NCE
    Object_1 = TheNCE.InsertNewObjectAt(1)
    Object_2 = TheNCE.InsertNewObjectAt(2)
    Object_3 = TheNCE.GetObjectAt(3)
    #! [e17s03_py]

    #! [e17s04_py]
    # Source point
    oType_1 = Object_1.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.SourcePoint)
    Object_1.ChangeType(oType_1)
    Source1_data = Object_1.ObjectData
    Source1_data.NumberOfLayoutRays = 3
    Source1_data.NumberOfAnalysisRays = 1000000
    #! [e17s04_py]
    
    #! [e17s05_py]
    # Rectangular Volume
    # Scattering Properties
    # Draw:opacity set to 50%
    oType_2 = Object_2.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.RectangularVolume)
    Object_2.ChangeType(oType_2)
    Object_2.ZPosition = 2
    Object_2.Material = "N-BK7"
    RectVolume2_data = Object_2.ObjectData
    RectVolume2_data.X1HalfWidth = 12
    RectVolume2_data.Y1HalfWidth = 12
    RectVolume2_data.ZLength = 40
    RectVolume2_data.X2HalfWidth = 12
    RectVolume2_data.Y2HalfWidth = 12
    RectVolume2_volphysdata = Object_2.VolumePhysicsData
    RectVolume2_volphysdata.Model = ZOSAPI.Editors.NCE.VolumePhysicsModelType.AngleScattering
    RectVolume2_volphysdata.ModelSettings._S_AngleScattering.MeanPath = 5
    RectVolume2_volphysdata.ModelSettings._S_AngleScattering.Angle = 30
    RectVolume2_DrawData = Object_2.DrawData
    RectVolume2_DrawData.Opacity = ZOSAPI.Common.ZemaxOpacity.P50
    #! [e17s05_py]
    
    #! [e17s06_py]
    # Detector Rectangle
    oType_3 = Object_3.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.DetectorRectangle)
    Object_3.RefObject = 2
    Object_3.ZPosition = 42
    Object_3.Material = "ABSORB"
    Object_3.ChangeType(oType_3)
    DetRect3_data = Object_3.ObjectData
    DetRect3_data.XHalfWidth = 15
    DetRect3_data.YHalfWidth = 15
    DetRect3_data.NumberXPixels = 25
    DetRect3_data.NumberYPixels = 25
    DetRect3_data.DataType = 0
    DetRect3_data.Color = 2
    DetRect3_data.Smoothing = 1
    #! [e17s06_py]
    
    #! [e17s07_py]
    # Open a shaded model
    analysis = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.NSCShadedModel)
    analysis.WaitForCompletion()
    analysisSettings = analysis.GetSettings()
    cfgFile = SamplesFolder + "\\API\\Python\\e17_NSC_BulkScatter.cfg"
    analysisSettings.SaveTo(cfgFile)  # Save current settings to a cfg file
    # MODIFYSETTINGS are defined in ZPL help files: The Programming Tab > About the ZPL > Keywords
    analysisSettings.ModifySettings(cfgFile, "SHA_ROTX", "20")
    analysisSettings.ModifySettings(cfgFile, "SHA_ROTY", "-20")
    analysisSettings.ModifySettings(cfgFile, "SHA_ROTZ", "30")
    analysisSettings.LoadFrom(cfgFile)  # Load in the newly modified settings
    # If you want to overwrite your default CFG, save over it with newly modified CFG file:
    #  CFG_fullname = "C:\\Users\\zachary.Derocher\\Documents\\Zemax\\Configs\\POP.CFG"
    #  import shutil
    #  shutil.copy(cfgFile, CFG_fullname)
    analysis.ApplyAndWaitForCompletion()  # Run analysis
    #! [e17s07_py]

    #! [e17s08_py]
    # Open a detector viewer
    det_analysis = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.DetectorViewer)
    det_analysisSettings = det_analysis.GetSettings()
    det_cfgFile = SamplesFolder + "\\API\\Python\\e17_DetectorViewer.cfg"
    det_analysisSettings.SaveTo(det_cfgFile)
    det_analysisSettings.ModifySettings(det_cfgFile, "DVW_SHOW", "2")
    det_analysisSettings.ModifySettings(det_cfgFile, "DVW_SMOOTHING", "1")
    det_analysisSettings.LoadFrom(det_cfgFile)
    det_analysis.ApplyAndWaitForCompletion()
    #! [e17s08_py]
    
    #! [e17s09_py]
    # Run a ray trace
    NSCRayTrace = TheSystem.Tools.OpenNSCRayTrace()
    NSCRayTrace.SplitNSCRays = False
    NSCRayTrace.ScatterNSCRays = True
    NSCRayTrace.UsePolarization = False
    NSCRayTrace.IgnoreErrors = True
    NSCRayTrace.SaveRays = False
    NSCRayTrace.ClearDetectors(0)
    NSCRayTrace.RunAndWaitForCompletion()
    NSCRayTrace.Close()
    #! [e17s09_py]

    TheSystem.SaveAs(SampleFile)
    print("Saved 'NSC_BulkScatter.zos' file")
    
    # This will clean up the connection to OpticStudio.
    # Note that it closes down the server instance of OpticStudio, so you for maximum performance do not do
    # this until you need to.
    del zos
    zos = None
```
