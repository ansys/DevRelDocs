# Example 19 - Python

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
    
    # This code build a chain of prisms based on the KB article:
    # http://zemax.com/os/resources/learn/knowledgebase/how-to-work-in-global-coordinates-in-a-sequential
    TheSystem.New(False)
    
    #! [e19s01_py]
    # ISystemData represents the System Explorer in GUI.
    # We access options in System Explorer through ISystemData in ZOS-API
    TheSystemData = TheSystem.SystemData
    TheSystemData.Aperture.ApertureValue = 10
    TheSystemData.Aperture.AFocalImageSpace = True
    TheSystemData.Wavelengths.GetWavelength(1).Wavelength = 0.55
    #! [e19s01_py]
    
    TheSystem.SystemData.MaterialCatalogs.AddCatalog('SCHOTT');

    #! [e19s02_py]
    # Get interface of Lens Data Editor and add 3 surfaces.
    TheLDE = TheSystem.LDE
    TheLDE.InsertNewSurfaceAt(2)
    TheLDE.InsertNewSurfaceAt(2)
    TheLDE.InsertNewSurfaceAt(2)

    # Set thickness and material for each surface.
    TheLDE.GetSurfaceAt(1).Thickness = 30
    TheLDE.GetSurfaceAt(2).Thickness = 20
    TheLDE.GetSurfaceAt(4).Thickness = 30
    TheLDE.GetSurfaceAt(2).Material = 'N-BK7'
    #! [e19s02_py]
    
    #! [e19s03_py]
    # GetSurfaceAt(surface number shown in LDE) will return an interface ILDERow
    # Through property TiltDecenterData of each interface ILDERow, we can modify data in Surface Properties > Tilt/Decenter section
    TheLDE.GetSurfaceAt(2).TiltDecenterData.BeforeSurfaceOrder = ZOSAPI.Editors.LDE.TiltDecenterOrderType.Decenter_Tilt
    TheLDE.GetSurfaceAt(2).TiltDecenterData.BeforeSurfaceTiltX = 15
    TheLDE.GetSurfaceAt(2).TiltDecenterData.AfterSurfaceTiltX = -15
    TheLDE.GetSurfaceAt(3).TiltDecenterData.BeforeSurfaceTiltX = -15
    TheLDE.GetSurfaceAt(3).TiltDecenterData.AfterSurfaceTiltX = 15
    #! [e19s03_py]
    
    #! [e19s04_py]
    # To specify an aperture to a surface, we need to first create an ISurfaceApertureType and then assign it.
    Rect_Aper = TheLDE.GetSurfaceAt(2).ApertureData.CreateApertureTypeSettings(ZOSAPI.Editors.LDE.SurfaceApertureTypes.RectangularAperture)
    Rect_Aper._S_RectangularAperture.XHalfWidth = 10
    Rect_Aper._S_RectangularAperture.YHalfWidth = 10
    TheLDE.GetSurfaceAt(2).ApertureData.ChangeApertureTypeSettings(Rect_Aper)
    TheLDE.GetSurfaceAt(3).ApertureData.PickupFrom = 2
    #! [e19s04_py]
    
    #! [e19s05_py]
    # To change surface type, we need to first get an ISurfaceTypesettings and then assign it.
    SurfaceType_CB = TheLDE.GetSurfaceAt(4).GetSurfaceTypeSettings(ZOSAPI.Editors.LDE.SurfaceType.CoordinateBreak)
    TheLDE.GetSurfaceAt(4).ChangeType(SurfaceType_CB)
    #! [e19s05_py]

    #! [e19s06_py]
    # Set Chief Ray solves to surface 4, which is Coordinate Break
    # To set a solve to a cell in editor, we need to first create a ISolveData and then assign it.
    Solve_ChiefNormal = TheLDE.GetSurfaceAt(4).GetSurfaceCell(ZOSAPI.Editors.LDE.SurfaceColumn.Par1).CreateSolveType(ZOSAPI.Editors.SolveType.PickupChiefRay)
    TheLDE.GetSurfaceAt(4).GetSurfaceCell(ZOSAPI.Editors.LDE.SurfaceColumn.Par1).SetSolveData(Solve_ChiefNormal)
    TheLDE.GetSurfaceAt(4).GetSurfaceCell(ZOSAPI.Editors.LDE.SurfaceColumn.Par2).SetSolveData(Solve_ChiefNormal)
    TheLDE.GetSurfaceAt(4).GetSurfaceCell(ZOSAPI.Editors.LDE.SurfaceColumn.Par3).SetSolveData(Solve_ChiefNormal)
    TheLDE.GetSurfaceAt(4).GetSurfaceCell(ZOSAPI.Editors.LDE.SurfaceColumn.Par4).SetSolveData(Solve_ChiefNormal)
    TheLDE.GetSurfaceAt(4).GetSurfaceCell(ZOSAPI.Editors.LDE.SurfaceColumn.Par5).SetSolveData(Solve_ChiefNormal)
    #! [e19s06_py]

    #! [e19s07_py]
    # Copy 3 surfaces starting from surface number 2 in LDE and paste to surface number 5, which will become surface number 8 after pasting.
    for i in range(10):
        TheLDE.CopySurfaces(2, 3, 5)
    # Save file
    TheSystem.SaveAs(TheApplication.SamplesDir + '\\API\\Python\\e19_Sample_Prism_Chain.zos')
    #! [e19s07_py]
    
    #! [e19s08_py]
    # Run tool Convert Local To Global Coordinates to convert surface #2 to surface #35 to be globally referenced to surface #1
    TheLDE.RunTool_ConvertLocalToGlobalCoordinates(2, 35, 1)
    TheSystem.SaveAs(TheApplication.SamplesDir + '\\API\\Python\\e19_Sample_Prism_Chain_GlobalCoordinate.zos')
    #! [e19s08_py]

    #! [e19s09_py]
    # Run tool Conver Global To Local Coordinates to convert surface #1 to surface #57 back to local coordinate.
    TheLDE.RunTool_ConvertGlobalToLocalCoordinates(1, 57, ZOSAPI.Editors.LDE.ConversionOrder.Forward)
    TheSystem.SaveAs(TheApplication.SamplesDir + '\\API\\Python\\e19_Sample_Prism_Chain_BackTo_LocalCoordinate.zos')
    #! [e19s09_py]
    
    print("Saved Prism example file")
    
    # This will clean up the connection to OpticStudio.
    # Note that it closes down the server instance of OpticStudio, so you for maximum performance do not do
    # this until you need to.
    del zos
    zos = None
```
