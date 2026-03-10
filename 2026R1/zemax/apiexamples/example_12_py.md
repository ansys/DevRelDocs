# Example 12 - Python

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
    
    TheSystem.New(False)
    
    #! [e12s01_py]
    # Select 6 wavelengths with Gaussian Quadrature algorithm
    sysWave = TheSystem.SystemData.Wavelengths
    sysWave.GaussianQuadrature(0.45, 0.65, ZOSAPI.SystemData.QuadratureSteps.S6)
    #! [e12s01_py]

    #! [e12s02_py]
    # Define fields using Paraxial Image Height
    sysField = TheSystem.SystemData.Fields
    sysField.SetFieldType(ZOSAPI.SystemData.FieldType.ParaxialImageHeight)
    #! [e12s02_py]

    # Inserts paraxial lens so there will not be an error message when using ParaxialImageHeight
    TheSystem.SystemData.Aperture.ApertureValue = 10
    s1 = TheSystem.LDE.GetSurfaceAt(1)
    s1_type = s1.GetSurfaceTypeSettings(ZOSAPI.Editors.LDE.SurfaceType.Paraxial)
    s1.ChangeType(s1_type)
    s1.Thickness = 100

    #! [e12s03_py]
    # Change field 1 to be x=1.0 and y=2.0
    field1 = sysField.GetField(1)
    field1.X = 1.0
    field1.Y = 2.0
    #! [e12s03_py]
    
    #! [e12s04_py]
    # Change polarization axis reference to be Y
    sysPol = TheSystem.SystemData.Polarization
    sysPol.Method = ZOSAPI.SystemData.PolarizationMethod.YAxisMethod
    #! [e12s04_py]

    #! [e12s05_py]
    # Add Corning Catalog and remove Schott Catalog
    sysCat = TheSystem.SystemData.MaterialCatalogs
    sysCat.AddCatalog("Corning")
    sysCat.RemoveCatalog("Schott")
    #! [e12s05_py]

    #! [e12s06_py]
    # Add Title and Notes
    sysTitleNotes = TheSystem.SystemData.TitleNotes
    sysTitleNotes.Title = "Add Title Here"
    sysTitleNotes.Notes = "Add Notes Here"
    #! [e12s06_py]
    
    #! [e12s07_py]
    # As default Files choose: COATING.DAT, SCATTER_PROFILE.DAT, AGB_DATA.DAT
    sysFiles = TheSystem.SystemData.Files
    #sysFiles_cast = CastTo(sysFiles, "ISDFiles")
    # Note: These new files must already be present in the correct folder
    sysFiles.CoatingFile = "COATING.DAT"
    sysFiles.ScatterProfile = "SCATTER_PROFILE.DAT"
    sysFiles.ABgDataFile = "ABG_DATA.DAT"
    sysFiles.ReloadFiles()
    #! [e12s07_py]

    #! [e12s08_py]
    # Change lens units to inches
    sysUnits = TheSystem.SystemData.Units
    sysUnits.LensUnits = ZOSAPI.SystemData.ZemaxSystemUnits.Inches
    #! [e12s08_py]

    fileName = TheApplication.SamplesDir + r'\API\Python\e12_seq_system_explorer.zos'
    TheSystem.SaveAs(fileName)
    print('Saved file: %s' % fileName)
    
    # This will clean up the connection to OpticStudio.
    # Note that it closes down the server instance of OpticStudio, so you for maximum performance do not do
    # this until you need to.
    del zos
    zos = None
```
