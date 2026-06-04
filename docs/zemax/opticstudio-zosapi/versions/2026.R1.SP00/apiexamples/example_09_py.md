# Example 09 - Python

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
    
    
    #! [e09s01_py]
    # Open new Non-Sequential system and save
    TheSystem = TheApplication.CreateNewSystem(ZOSAPI.SystemType.NonSequential)    # Create New NSC File
    filename = TheApplication.SamplesDir + "\\API\\Python\\e09_NSC_CAD.zos"   # Define file path and name
    TheSystem.SaveAs(filename)  # Save New NSC File
    #! [e09s01_py]
    
    #! [e09s02_py]
    # Insert CAD object
    NSCE = TheSystem.NCE
    Obj1 = NSCE.GetObjectAt(1)
    Obj1.ZPosition = -5
    Obj1_Type = Obj1.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.CADPartSTEPIGESSAT)  # create CAD object type
    # Set object 1 as ExtPoly.stp if it exists in proper directory. The directory is defined under OpticStudio Preferences...Folders...Objects
    if os.path.isfile(TheApplication.ObjectsDir + "\\CAD Files\\ExtPoly.stp"):  # Check if the CAD part exists in correct directory
        Obj1_Type.FileName1 = 'ExtPoly.stp'  # set CAD file to be used (file must be in valid directory)
        Obj1.ChangeType(Obj1_Type)  # Set Object 1 as the previously specified CAD file
    else:
        raise ImportError("CAD file not found")
    #! [e09s02_py]
    
    #! [e09s03_py]
    # Access the CAD settings for object 1
    Obj1_CAD = Obj1.CADData  

    # Determine if the surface-to-face mapping is available for this object. If yes, update the mapping
    if Obj1_CAD.HasFaceData:
        if Obj1_CAD.NumberOfSurfaces > 1:
            # Assign the last face to surface 0. Now, the first and last surfaces will be defined with the same scatter and coating properties. 
            Obj1_CAD.SetSurfaceFace(0, Obj1_CAD.NumberOfSurfaces-1)  
    #! [e09s03_py]
    
    #! [e09s04_py]
    POBfile = open(TheApplication.ObjectsDir + "\\Polygon Objects\\API_cube_demo.POB", "w")  # Open new POB file
    # Append new POB file with polygon definitions (see help files for syntax information)
    POBfile.write("! A cube" '\n')
    POBfile.write("! front face vertices" '\n' "V 1 -1 -1 0" '\n' "V 2 1 -1 0" '\n' "V 3 1 1 0" '\n' "V 4 -1 1 0" '\n')
    POBfile.write("! back face vertices" '\n' "V 5 -1 -1 2" '\n' "V 6 1 -1 2" '\n' "V 7 1 1 2" '\n' "V 8 -1 1 2" '\n')
    POBfile.write("! Front" '\n' "R 1 2 3 4 0 0" '\n' "! Back" '\n' "R 5 6 7 8 0 0" '\n')
    POBfile.write("! Top" '\n' "R 4 3 7 8 0 0" '\n' "! Bottom" '\n' "R 1 2 6 5 0 0" '\n')
    POBfile.write("! Left Side" '\n' "R 1 4 8 5 0 0" '\n' "! Right Side" '\n' "R 2 3 7 6 0 0")
    POBfile.close()
    Obj2 = NSCE.InsertNewObjectAt(2)  # Add new line to NSCE
    Obj2_Type = Obj2.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.PolygonObject)
    Obj2_Type.FileName1 = "API_cube_demo.POB"
    Obj2.ChangeType(Obj2_Type)
    #! [e09s04_py]
    
    TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.NSC3DLayout)
    TheSystem.Save()  # Save NSC File
    
    
    # This will clean up the connection to OpticStudio.
    # Note that it closes down the server instance of OpticStudio, so you for maximum performance do not do
    # this until you need to.
    del zos
    zos = None

```
