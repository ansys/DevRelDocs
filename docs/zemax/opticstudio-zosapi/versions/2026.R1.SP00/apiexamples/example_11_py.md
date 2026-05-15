# Example 11 - Python

```py
import clr, os, winreg
from itertools import islice

from shutil import copyfile

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
    
    #! [e11s01_py]
    # Create New Sequential File
    TheSystem.New(False)
    # Name File
    fileName = TheApplication.SamplesDir + "\\API\\Python\\e11_basic_seq.zos"
    TheSystem.SaveAs(fileName)
    #! [e11s01_py]
    
    #! [e11s02_py]
    # Changing System Explorer Settings
    # Set Aperture
    TheSystemData = TheSystem.SystemData
    TheSystemData.Aperture.ApertureValue = 20
    TheSystem.SystemData.MaterialCatalogs.AddCatalog('SCHOTT')

    # Set Apodization Type to Gaussian, and set apodization factor to 1
    TheSystemData.Aperture.ApodizationType = 1  # ApodizationType 0 = uniform; 1 = gaussian; 2 = Cosine Cubed
    TheSystemData.Aperture.ApodizationFactor = 1
    # Set Wavelength
    TheSystemData.Wavelengths.SelectWavelengthPreset(ZOSAPI.SystemData.WavelengthPreset.FdC_Visible)
    #! [e11s02_py]
    
    #! [e11s03_py]
    # Insert and Track New Surfaces, set STOP to surface 1
    TheLDE = TheSystem.LDE
    TheLDE.InsertNewSurfaceAt(1)
    TheLDE.InsertNewSurfaceAt(1)
    TheLDE.InsertNewSurfaceAt(1)
    Surf_1 = TheLDE.GetSurfaceAt(1)
    Surf_2 = TheLDE.GetSurfaceAt(2)
    Surf_3 = TheLDE.GetSurfaceAt(3)
    Surf_4 = TheLDE.GetSurfaceAt(4)
    Surf_1.IsStop = 1
    # Set some baseline parameters
    Surf_1.Thickness = 5
    Surf_2.Thickness = 5
    Surf_2.Radius = 100
    Surf_2.Material = "N-BK7"
    Surf_3.Thickness = 3
    Surf_3.Radius = -30
    Surf_3.Material = "F2"
    Surf_4.Radius = -80
    #! [e11s03_py]
    
    #! [e11s04_py]
    # Set system lens units to inches, scale all values with Scale Lens tool
    unit = TheSystemData.Units.LensUnits  # For demonstration only. This file is new, so it has default units mm.
    ScaleLens = TheSystem.Tools.OpenScale()  # Open Scale Lens tool
    # Apply Tool Settings
    ScaleLens.ScaleByUnits = True
    ScaleLens.ScaleToUnit = 2  # 0=millimeters; 1=centimeters; 2=inches; 3=meters
    # Cast to ISystemTool interface to gain access to Run
    ScaleLens.RunAndWaitForCompletion()
    ScaleLens.Close()
    #! [e11s04_py]
    
    #! [e11s05_py]
    # Add Rectangular Aperture to Surface 1
    # Get surface 1, create aperture settings
    Surf_1 = TheSystem.LDE.GetSurfaceAt(1)
    rAperture = Surf_1.ApertureData.CreateApertureTypeSettings(ZOSAPI.Editors.LDE.SurfaceApertureTypes.RectangularAperture)
    # Set aperture size
    rAperture._S_RectangularAperture.XHalfWidth = .1
    rAperture._S_RectangularAperture.YHalfWidth = .1
    # Apply aperture settings to surface 1
    Surf_1.ApertureData.ChangeApertureTypeSettings(rAperture)
    #! [e11s05_py]
    
    #! [e11s06_py]
    # Run Quick Focus
    QuickFocus = TheSystem.Tools.OpenQuickFocus()
    QuickFocus.RunAndWaitForCompletion()
    QuickFocus.Close()
    #! [e11s06_py]
    
    #! [e11s07_py]
    # Open Universal Plot of RMS Spot Size vs Surface3 Thickness
    UnivPlot = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.UniversalPlot1D)
    UnivPlot_Settings = UnivPlot.GetSettings()
    print("Universal Plot has analysis specific settings? ", UnivPlot.HasAnalysisSpecificSettings)
    # Above is False; Universal Plot Settings must be changed via ModifySettings (changing a config (.cfg) file)
    cfg = TheApplication.ZemaxDataDir + "\\Configs\\UNI.CFG"
    UnivPlot_Settings.Save()  # Create new .cfg file, named "UNI.CFG" in \Configs\ folder
    UnivPlot_Settings.ModifySettings(cfg, 'UN1_SURFACE', str(TheSystem.LDE.NumberOfSurfaces - 2))
    UnivPlot_Settings.ModifySettings(cfg, 'UN1_STARTVAL', str(Surf_4.Thickness - 0.4 / 25.4))  # Change universal plot settings
    UnivPlot_Settings.ModifySettings(cfg, 'UN1_STOPVAL', str(Surf_4.Thickness + 0.1 / 25.4))
    UnivPlot_Settings.ModifySettings(cfg, 'UN1_STEPS', str(20))
    UnivPlot_Settings.ModifySettings(cfg, 'UN1_PAR1', str(10))
    UnivPlot_Settings.ModifySettings(cfg, 'UN1_OPERAND', "RSRE")
    # For ModifySettings keycodes (UN1_STARTVAL, UN1_STEPS, etc.), see MODIFYSETTINGS page in ZPL>keywords help files
    # LoadFrom allows you to load any CFG file, not just default; not available via GUI
    UnivPlot_Settings.LoadFrom(cfg)
    #! [e11s07_py]
    
    #! [e11s08_py]
    # Open Spot Diagram to See Result!
    newSpot = TheSystem.Analyses.New_StandardSpot()
    print("Spot has analysis specific settings? ", newSpot.HasAnalysisSpecificSettings)  # True; no ModifySettings
    newSettings = newSpot.GetSettings()
    newSettings.RayDensity = 15
    newSpot.ApplyAndWaitForCompletion()
    #! [e11s08_py]

    # save!
    TheSystem.Save()
    
    
    # This will clean up the connection to OpticStudio.
    # Note that it closes down the server instance of OpticStudio, so you for maximum performance do not do
    # this until you need to.
    del zos
    zos = None
```
