# Example 03 - Python

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
    sampleDir = TheApplication.SamplesDir
    
    # creates a new API directory
    if not os.path.exists(TheApplication.SamplesDir + "\\API\\Python"):
        os.makedirs(TheApplication.SamplesDir + "\\API\\Python")
    
    #! [e03s01_py]
    # Open file
    testFile = sampleDir + '\\API\\Python\\e01_new_file_and_quickfocus.zos'
    if not os.path.exists(testFile):
        # closes connection to ZOS; normally done at end of script
        del zos
        zos = None
        sys.exit('You need to run Example 01 before running this example')
    TheSystem.LoadFile(testFile, False)
    testFile2 = sampleDir + '\\API\\Python\\e03_open_file_and_optimise.zos'
    TheSystem.SaveAs(testFile2)
    #! [e03s01_py]
    
    #! [e03s02_py]
    # Get Surfaces
    TheLDE = TheSystem.LDE
    Surface_1 = TheLDE.GetSurfaceAt(1)
    Surface_2 = TheLDE.GetSurfaceAt(2)
    Surface_3 = TheLDE.GetSurfaceAt(3)
    #! [e03s02_py]
    
    #! [e03s03_py]
    # Make thicknesses and radii variable
    Surface_1.ThicknessCell.MakeSolveVariable()
    Surface_2.ThicknessCell.MakeSolveVariable()
    Surface_2.RadiusCell.MakeSolveVariable()
    Surface_3.ThicknessCell.MakeSolveVariable()
    #! [e03s03_py]
    
    #! [e03s04_py]
    # Merit functions
    TheMFE = TheSystem.MFE
    Operand_1 = TheMFE.GetOperandAt(1)
    Operand_1.ChangeType(ZOSAPI.Editors.MFE.MeritOperandType.ASTI)
    Operand_1.Target = 0.0
    Operand_1.Weight = 10.0
    #! [e03s04_py]
    
    Operand_2 = TheMFE.InsertNewOperandAt(2)
    Operand_2.ChangeType(ZOSAPI.Editors.MFE.MeritOperandType.COMA)
    Operand_2.Target = 0.0
    Operand_2.Weight = 1.0
    
    #Air min / max
    Operand_3 = TheMFE.AddOperand()
    Operand_3.ChangeType(ZOSAPI.Editors.MFE.MeritOperandType.MNCA)
    Operand_3.Target = 0.5
    Operand_3.Weight = 1.0
    Operand_3.GetCellAt(2).IntegerValue = 1
    Operand_3.GetCellAt(3).IntegerValue = 3
    Operand_4 = TheMFE.AddOperand()
    Operand_4.ChangeType(ZOSAPI.Editors.MFE.MeritOperandType.MXCA)
    Operand_4.Target = 1000
    Operand_4.Weight = 1.0
    Operand_4.GetCellAt(2).IntegerValue = 1
    Operand_4.GetCellAt(3).IntegerValue = 3
    Operand_5 = TheMFE.AddOperand()
    Operand_5.ChangeType(ZOSAPI.Editors.MFE.MeritOperandType.MNEA)
    Operand_5.Target = 0.5
    Operand_5.Weight = 1.0
    Operand_5.GetCellAt(2).IntegerValue = 1
    Operand_5.GetCellAt(3).IntegerValue = 3
    
    # Material min / max
    Operand_6 = TheMFE.AddOperand()
    Operand_6.ChangeType(ZOSAPI.Editors.MFE.MeritOperandType.MNCG)
    Operand_6.Target = 3.0
    Operand_6.Weight = 1.0
    Operand_6.GetCellAt(2).IntegerValue = 1
    Operand_6.GetCellAt(3).IntegerValue = 3
    Operand_7 = TheMFE.AddOperand()
    Operand_7.ChangeType(ZOSAPI.Editors.MFE.MeritOperandType.MXCG)
    Operand_7.Target = 15.0
    Operand_7.Weight = 1.0
    Operand_7.GetCellAt(2).IntegerValue = 1
    Operand_7.GetCellAt(3).IntegerValue = 3
    Operand_8 = TheMFE.AddOperand()
    Operand_8.ChangeType(ZOSAPI.Editors.MFE.MeritOperandType.MNEG)
    Operand_8.Target = 3.0
    Operand_8.Weight = 1.0
    Operand_8.GetCellAt(2).IntegerValue = 1
    Operand_8.GetCellAt(3).IntegerValue = 3
    
    #! [e03s05_py]
    # Local optimisation till completion
    print('Running Local Optimization')
    LocalOpt = TheSystem.Tools.OpenLocalOptimization()
    LocalOpt.Algorithm = ZOSAPI.Tools.Optimization.OptimizationAlgorithm.DampedLeastSquares
    LocalOpt.Cycles = ZOSAPI.Tools.Optimization.OptimizationCycles.Automatic
    LocalOpt.NumberOfCores = 8
    LocalOpt.RunAndWaitForCompletion()
    LocalOpt.Close()
    #! [e03s05_py]
    
    #! [e03s06_py]
    # Hammer for 10 seconds
    # need to 'import time' at the top of the file to use the pause function
    print('Running Hammer Optimization')
    HammerOpt = TheSystem.Tools.OpenHammerOptimization()
    HammerOpt.RunAndWaitWithTimeout(10)    
    HammerOpt.Cancel()
    HammerOpt.WaitForCompletion()
    HammerOpt.Close()
    #! [e03s06_py]
    
    #Save and close
    TheSystem.Save()
    
    # This will clean up the connection to OpticStudio.
    # Note that it closes down the server instance of OpticStudio, so you for maximum performance do not do
    # this until you need to.
    del zos
    zos = None
```
