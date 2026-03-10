# Example 25 - Python

```py
import clr, os, winreg
from itertools import islice

import time
import matplotlib.pyplot as plt
import numpy as np

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
    
    # makes system non-seqnuential and adds 2 objects (3 in total)
    TheSystem = TheApplication.CreateNewSystem(ZOSAPI.SystemType.NonSequential)
    
    #! [e25s01_py]
    # Initializes NCE and loads surfaces
    # Inserts objects
    TheNCE = TheSystem.NCE
    TheNCE.InsertNewObjectAt(1)
    TheNCE.InsertNewObjectAt(1)
    TheNCE.InsertNewObjectAt(1)
    TheNCE.InsertNewObjectAt(1)
    #! [e25s01_py]

    o1 = TheNCE.GetObjectAt(1)
    o2 = TheNCE.GetObjectAt(2)
    o3 = TheNCE.GetObjectAt(3)
    o4 = TheNCE.GetObjectAt(4)
    o5 = TheNCE.GetObjectAt(5)

    #! [e25s02_py]
    # Changes Object Type
    o1.ChangeType(o1.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.SourceDiode))
    o2.ChangeType(o2.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.SourceDiode))
    o3.ChangeType(o3.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.NullObject))
    o4.ChangeType(o4.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.DiffractionGrating))
    o5.ChangeType(o5.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.DetectorColor))
    #! [e25s02_py]
    
    # Sets positions & materials
    o3.ZPosition = 10
    o3.TiltAboutX = 10
    o4.RefObject = 3
    o4.Material = 'MIRROR'
    o5.YPosition = 8.45
    o5.TiltAboutX = 40

    # Sets parameters
    o1.ObjectData.XMinusDivergence = 5
    o2.ObjectData.XMinusDivergence = 5
    o4.ObjectData.LinesPerMicron = 0.6
    o4.ObjectData.DiffOrder = 1

    #! [e25s03_py]
    # Changes sourcecolor to Blackbody, sets temperature, min/max wavelength
    o1.SourcesData.SourceColor = ZOSAPI.Editors.NCE.SourceColorMode.BlackBodySpectrum
    o1.SourcesData.SourceColorSettings._S_BlackBodySpectrum.TemperatureK = 6000
    o1.SourcesData.SourceColorSettings._S_BlackBodySpectrum.WavelengthFrom = 0.45
    o1.SourcesData.SourceColorSettings._S_BlackBodySpectrum.WavelengthTo = 0.65
    #! [e25s03_py]
    
    o2.SourcesData.SourceColor = ZOSAPI.Editors.NCE.SourceColorMode.BlackBodySpectrum
    o2.SourcesData.SourceColorSettings._S_BlackBodySpectrum.TemperatureK = 6000
    o2.SourcesData.SourceColorSettings._S_BlackBodySpectrum.SpectrumCount = 100
    o2.SourcesData.SourceColorSettings._S_BlackBodySpectrum.WavelengthFrom = 0.4
    o2.SourcesData.SourceColorSettings._S_BlackBodySpectrum.WavelengthTo = 0.7

    #! [e25s04_py]
    # Sets up the MCE, adds configuration & operands
    TheMCE = TheSystem.MCE
    TheMCE.AddConfiguration(False)
    TheMCE.AddOperand()
    TheMCE.AddOperand()
    TheMCE.AddOperand()
    #! [e25s04_py]

    #! [e25s05_py]
    # change MCE to NPAR, modifies the number of Layout Rays for a Source
    for a in range(1, 5):
        TheMCE.GetOperandAt(a).ChangeType(ZOSAPI.Editors.MCE.MultiConfigOperandType.NPAR)
    TheMCE.GetOperandAt(1).Param2 = 1
    TheMCE.GetOperandAt(1).Param3 = 1
    TheMCE.GetOperandAt(1).GetOperandCell(1).DoubleValue = 200
    TheMCE.GetOperandAt(1).GetOperandCell(2).DoubleValue = 0
    #! [e25s05_py]
    
    TheMCE.GetOperandAt(2).Param2 = 1
    TheMCE.GetOperandAt(2).Param3 = 2
    TheMCE.GetOperandAt(2).GetOperandCell(1).DoubleValue = 1000000
    TheMCE.GetOperandAt(2).GetOperandCell(2).DoubleValue = 0

    TheMCE.GetOperandAt(3).Param2 = 2
    TheMCE.GetOperandAt(3).Param3 = 1
    TheMCE.GetOperandAt(3).GetOperandCell(1).DoubleValue = 0
    TheMCE.GetOperandAt(3).GetOperandCell(2).DoubleValue = 200

    TheMCE.GetOperandAt(4).Param2 = 2
    TheMCE.GetOperandAt(4).Param3 = 2
    TheMCE.GetOperandAt(4).GetOperandCell(1).DoubleValue = 0
    TheMCE.GetOperandAt(4).GetOperandCell(2).DoubleValue = 1000000

    # Setup detector color
    x_width = 1.5
    y_width = 1.5
    x_pixel = 500
    y_pixel = 500
    
    o5.ObjectData.XHalfWidth = x_width
    o5.ObjectData.YHalfWidth = x_width
    o5.ObjectData.NumberXPixels = x_pixel
    o5.ObjectData.NumberYPixels = y_pixel

    plt.rcParams["figure.figsize"] = (10, 4)
    for a in range(1, TheMCE.NumberOfConfigurations + 1):
        TheMCE.SetCurrentConfiguration(a)
        # Setup and run the ray trace
        NSCRayTrace = TheSystem.Tools.OpenNSCRayTrace()
        NSCRayTrace.ClearDetectors(0)
        NSCRayTrace.SplitNSCRays = False
        NSCRayTrace.ScatterNSCRays = False
        NSCRayTrace.UsePolarization = False
        NSCRayTrace.IgnoreErrors = True
        NSCRayTrace.SaveRays = False
        NSCRayTrace.RunAndWaitForCompletion()
        NSCRayTrace.Close()

        print('Finished ray trace')

        #! [e25s06_py]
        # Creates a new detector viewer window, changes to true color
        det = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.DetectorViewer)
        det_settings = det.GetSettings()
        # ensure detector viewer is true color to extract RGB data
        det_settings.ShowAs = ZOSAPI.Analysis.DetectorViewerShowAsTypes.TrueColor
        det.ApplyAndWaitForCompletion()
        #! [e25s06_py]
        
        #! [e25s07_py]
        det_raw = det.GetResults().GetDataGridRgb(0)
        # FillValues() method still in development for Python; need to use GetValue()
        xpix = o5.ObjectData.NumberXPixels
        ypix = o5.ObjectData.NumberYPixels
        data = np.zeros([ypix, xpix, 3])
        for y in range(0, ypix):
            for x in range(0, xpix):
                rgb = det_raw.GetValue(x, y)
                data[y, x, 0] = rgb.R / 255
                data[y, x, 1] = rgb.G / 255
                data[y, x, 2] = rgb.B / 255

        #! [e25s07_py]
        plt.subplot(1, TheMCE.NumberOfConfigurations, a)
        plt.imshow(np.flipud(data), extent=[-x_width, x_width, -y_width, y_width])
        plt.title('Config = ' + str(a))
    
    TheSystem.SaveAs(TheApplication.SamplesDir + '\\API\\Python\\e25_source_spectrum_diffraction_grating.zos')

    # This will clean up the connection to OpticStudio.
    # Note that it closes down the server instance of OpticStudio, so you for maximum performance do not do
    # this until you need to.
    del zos
    zos = None
    
    # place plt.show() after clean up to release OpticStudio from memory
    plt.show()
```
