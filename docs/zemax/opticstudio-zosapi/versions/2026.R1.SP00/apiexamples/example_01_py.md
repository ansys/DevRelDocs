# Example 01 - Python

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
    
    # creates a new API directory
    if not os.path.exists(TheApplication.SamplesDir + "\\API\\Python"):
        os.makedirs(TheApplication.SamplesDir + "\\API\\Python")
    
    # Set up primary optical system
    sampleDir = TheApplication.SamplesDir
    
    #! [e01s01_py]
    # Make new file
    testFile = os.path.join(os.sep, sampleDir, r'API\Python\e01_new_file_and_quickfocus.zos')
    TheSystem.New(False)
    TheSystem.SaveAs(testFile)
    #! [e01s01_py]
    
    TheSystem.SystemData.MaterialCatalogs.AddCatalog('SCHOTT')
    
    #! [e01s02_py]
    # Aperture
    TheSystemData = TheSystem.SystemData
    TheSystemData.Aperture.ApertureValue = 40
    #! [e01s02_py]
    
    #! [e01s03_py]
    # Fields
    Field_1 = TheSystemData.Fields.GetField(1)
    NewField_2 = TheSystemData.Fields.AddField(0, 5.0, 1.0)
    #! [e01s03_py]
    
    #! [e01s04_py]
    # Wavelength preset
    slPreset = TheSystemData.Wavelengths.SelectWavelengthPreset(ZOSAPI.SystemData.WavelengthPreset.d_0p587)
    #! [e01s04_py]
    
    #! [e01s05_py]
    # Lens data
    TheLDE = TheSystem.LDE
    TheLDE.InsertNewSurfaceAt(2)
    TheLDE.InsertNewSurfaceAt(2)
    Surface_1 = TheLDE.GetSurfaceAt(1)
    Surface_2 = TheLDE.GetSurfaceAt(2)
    Surface_3 = TheLDE.GetSurfaceAt(3)
    #! [e01s05_py]
    
    #! [e01s06_py]
    # Changes surface cells in LDE
    Surface_1.Thickness = 50.0
    Surface_1.Comment = 'Stop is free to move'
    Surface_2.Radius = 100.0
    Surface_2.Thickness = 10.0
    Surface_2.Comment = 'front of lens'
    Surface_2.Material = 'N-BK7'
    Surface_3.Comment = 'rear of lens'
    #! [e01s06_py]
    
    #! [e01s07_py]
    # Solver
    Solver = Surface_3.RadiusCell.CreateSolveType(ZOSAPI.Editors.SolveType.FNumber)
    SolverFNumber = Solver._S_FNumber
    SolverFNumber.FNumber = 10
    Surface_3.RadiusCell.SetSolveData(Solver)
    #! [e01s07_py]
    
    #! [e01s08_py]
    # QuickFocus
    quickFocus = TheSystem.Tools.OpenQuickFocus()
    quickFocus.Criterion =  ZOSAPI.Tools.General.QuickFocusCriterion.SpotSizeRadial
    quickFocus.UseCentroid = True
    quickFocus.RunAndWaitForCompletion()
    quickFocus.Close()
    #! [e01s08_py]
    
    #! [e01s09_py]
    # Save and close
    TheSystem.Save()
    #! [e01s09_py]
    
    # This will clean up the connection to OpticStudio.
    # Note that it closes down the server instance of OpticStudio, so you for maximum performance do not do
    # this until you need to.
    del zos
    zos = None
```
