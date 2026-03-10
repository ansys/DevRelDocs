# Example 24 - Python

```py
import clr, os, winreg
from itertools import islice

import time, array
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

    #! [e24s01_py]
    # Initializes NCE and loads surfaces
    # Inserts objects
    TheNCE = TheSystem.NCE
    for a in range(1,5):
        TheNCE.InsertNewObjectAt(1)
    #! [e24s01_py]

    TheSystem.SystemData.MaterialCatalogs.AddCatalog("SCHOTT")

    #! [e24s02_py]
    # Gets reference to specific object
    o1 = TheNCE.GetObjectAt(1)
    o2 = TheNCE.GetObjectAt(2)
    o3 = TheNCE.GetObjectAt(3)
    o4 = TheNCE.GetObjectAt(4)
    o5 = TheNCE.GetObjectAt(5)
    #! [e24s02_py]
    
    #! [e24s03_py]
    # Changes Object Type
    TheNCE.GetObjectAt(1).ChangeType(o1.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.SourceEllipse))
    o2.ChangeType(o2.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.AsphericSurface2))
    o3.ChangeType(o3.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.StandardLens))
    o4.ChangeType(o4.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.DetectorColor))
    o5.ChangeType(o5.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.DetectorRectangle))
    #! [e24s03_py]

    #! [e24s04_py]
    # Sets positions & materials
    TheNCE.GetObjectAt(2).XPosition = 1.5
    TheNCE.GetObjectAt(2).ZPosition = 9.99
    TheNCE.GetObjectAt(2).Material = 'ABSORB'
    #! [e24s04_py]
    o3.YPosition = 1.5
    o3.ZPosition = 8.99
    o3.Material = 'N-BK7'
    o4.ZPosition = 10
    o5.RefObject = 4
    o5.ZPosition = 1e-3

    #! [e24s05_py]
    # Sets layout rays based on parameter number
    TheNCE.GetObjectAt(1).GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par1).IntegerValue = 100
    # Sets analysis rays based on object data column
    o1.ObjectData.NumberOfAnalysisRays = 1E6
    #! [e24s05_py]
    
    o1.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par10).DoubleValue = 50
    o1.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par11).DoubleValue = 50

    o2.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par3).DoubleValue = 0.5
    o2.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par4).DoubleValue = 1
    o2.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par9).IntegerValue = 1

    o4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par1).DoubleValue = 8.223
    o4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par2).DoubleValue = 2.565
    o4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par3).IntegerValue = 200
    o4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par4).IntegerValue = 150

    o5_x = 10
    o5_y = 12.23
    o5.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par1).DoubleValue = o5_x
    o5.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par2).DoubleValue = o5_y
    o5.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par3).IntegerValue = 100
    o5.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par4).IntegerValue = 100
    
    #! [e24s06_py]
    # changes face type and coating properties
    TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(0).FaceIs = ZOSAPI.Editors.NCE.FaceIsType.Absorbing
    TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(1).FaceIs = ZOSAPI.Editors.NCE.FaceIsType.ObjectDefault
    TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(1).Coating = 'I.50'
    #! [e24s06_py]
    
    #! [e24s07_py]
    # changes scatter profile on face
    o3_Scatter = TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(2).CreateScatterModelSettings(ZOSAPI.Editors.NCE.ObjectScatteringTypes.Lambertian)
    o3_Scatter._S_Lambertian.ScatterFraction = 0.5
    TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(2).ChangeScatterModelSettings(o3_Scatter)
    TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(2).NumberOfRays = 2
    #! [e24s07_py]

    #! [e24s08_py]
    # removes pixel interpolation for the detector
    o4.TypeData.UsePixelInterpolation = False
    #! [e24s08_py]
    
    #! [e24s09_py]
    # Setup and run the ray trace
    NSCRayTrace = TheSystem.Tools.OpenNSCRayTrace()
    NSCRayTrace.SplitNSCRays = False
    NSCRayTrace.ScatterNSCRays = True
    NSCRayTrace.UsePolarization = False
    NSCRayTrace.IgnoreErrors = True
    NSCRayTrace.SaveRays = False
    NSCRayTrace.ClearDetectors(0)
    NSCRayTrace.RunAndWaitForCompletion()
    NSCRayTrace.Close()
    #! [e24s09_py]

    # saves file to disk to expose all objects
    TheSystem.SaveAs(TheApplication.SamplesDir + '\\API\\Python\\e24_nsc_detectors.zos')
    
    tic = time.time()
    #! [e24s10_py]
    # Creates a new detector viewer analysis reference, changes to TrueColor for RGB extraction
    d4 = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.DetectorViewer)
    det_settings = d4.GetSettings()
    det_settings.ShowAs = ZOSAPI.Analysis.DetectorViewerShowAsTypes.TrueColor
    det_settings.Detector.SetDetectorNumber(4);
    d4.ApplyAndWaitForCompletion()
    d4_Results = d4.GetResults()
    d4_raw = d4_Results.GetDataGridRgb(0)
    #! [e24s10_py]

    # Reads in values from NCE for detector settings
    obj = 4
    x_half = TheSystem.NCE.GetObjectAt(obj).GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par1).DoubleValue
    y_half = TheSystem.NCE.GetObjectAt(obj).GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par2).DoubleValue
    x_pixels = TheSystem.NCE.GetObjectAt(obj).GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par3).IntegerValue
    y_pixels = TheSystem.NCE.GetObjectAt(obj).GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par4).IntegerValue

    #! [e24s11_py]
    # FillValues() method still in development for Python; need to use GetValue()
    #! [e24s11_py]
    
    #! [e24s12_py]
    # FillValues() method still in development for Python
    # creates 3D array to store normalized RGB data
    data = np.zeros([y_pixels, x_pixels, 3])

    for y in range(0, y_pixels):
        for x in range(0, x_pixels):
            rgb = d4_raw.GetValue(x, y)
            data[y, x, 0] = rgb.R / 255
            data[y, x, 1] = rgb.G / 255
            data[y, x, 2] = rgb.B / 255
    #! [e24s12_py]
    
    plt.figure()
    plt.imshow(np.flipud(data), extent=[-x_half, x_half, -y_half, y_half])
    
    #! [e24s13_py]
    # changes default values for Detector Viewer
    # pltos the Incoherent Irradiance in False Color
    d5 = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.DetectorViewer)
    d5_set = d5.GetSettings()

    d5_set.Detector.SetDetectorNumber(5)
    d5_set.ShowAs = ZOSAPI.Analysis.DetectorViewerShowAsTypes.FalseColor
    d5.ApplyAndWaitForCompletion()
    d5_results = d5.GetResults()
    d5_values = d5_results.GetDataGrid(0).Values
    #! [e24s13_py]

    npData = zos.reshape(d5_values, d5_values.GetLength(0), d5_values.GetLength(1))
    #npData = (np.asarray(tuple(d5_values))).reshape(d5_values.GetLength(0), d5_values.GetLength(1));
    plt.figure()
    plt.imshow(np.flipud(npData), cmap='jet', extent=[-o5_x, o5_x, -o5_y, o5_y])
    plt.colorbar()

    toc = round(time.time() - tic, 3)
    print('Elapsed time is ' + str(toc) + ' seconds.')
    
    #! [e24s14_py]
    # saves current system in memory
    TheSystem.Save()
    #! [e24s14_py]

    
    # This will clean up the connection to OpticStudio.
    # Note that it closes down the server instance of OpticStudio, so you for maximum performance do not do
    # this until you need to.
    del zos
    zos = None
    
    # place plt.show() after clean up to release OpticStudio from memory
    plt.show()
```
