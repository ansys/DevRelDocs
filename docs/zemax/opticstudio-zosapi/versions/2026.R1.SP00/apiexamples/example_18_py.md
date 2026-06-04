# Example 18 - Python

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
    
    # Setup
    TheSystem.LoadFile(TheApplication.SamplesDir + "\Sequential\Objectives\Double Gauss 28 degree field.zos", False)
    TheMCE = TheSystem.MCE

    #! [e18s01_py]
    # Add 2 configurations (totally 3)
    TheMCE.AddConfiguration(False)
    TheMCE.AddConfiguration(False)
    #! [e18s01_py]

    #! [e18s02_py]
    # Add one operand (totally 2)
    TheMCE.AddOperand()
    #! [e18s02_py]

    #! [e18s03_py]
    # Get interface of each operand
    MCOperand1 = TheMCE.GetOperandAt(1)
    MCOperand2 = TheMCE.GetOperandAt(2)
    # Change both operands' type to THIC
    MCOperand1.ChangeType(ZOSAPI.Editors.MCE.MultiConfigOperandType.THIC)
    MCOperand2.ChangeType(ZOSAPI.Editors.MCE.MultiConfigOperandType.THIC)
    #! [e18s03_py]
    
    #! [e18s04_py]
    # Set parameters of operands
    # If the type of operand is THIC, the first parameter here means surface number
    MCOperand1.Param1 = 0
    MCOperand2.Param1 = 11
    #! [e18s04_py]

    #! [e18s05_py]
    # Set values of operand for each configuration
    MCOperand1.GetOperandCell(1).DoubleValue = 10000.0
    MCOperand1.GetOperandCell(2).DoubleValue = 5000.0
    MCOperand1.GetOperandCell(3).DoubleValue = 1000.0
    #! [e18s05_py]

    #! [e18s06_py]
    # Refocus for each configuration
    quickfocus = TheSystem.Tools.OpenQuickFocus()
    TheMCE.SetCurrentConfiguration(1)  # Set system to config 1
    quickfocus.RunAndWaitForCompletion()  # Quick focus for config 1
    TheMCE.SetCurrentConfiguration(2)
    quickfocus.RunAndWaitForCompletion()
    TheMCE.SetCurrentConfiguration(3)
    quickfocus.RunAndWaitForCompletion()
    #! [e18s06_py]
    
    TheSystem.SaveAs(TheApplication.SamplesDir + "\\API\\Python\\e18_Double_Gauss_28_degree_field_MultiConfig.zos")

    #! [e18s07_py]
    # An example of manually "Make Thermal"
    TheSystem.LoadFile(TheApplication.SamplesDir + "\Sequential\Objectives\Doublet.zos", False)
    # Add 1 configuration (totally 2)
    TheMCE.AddConfiguration(False)
    # Add 12 operands (totally 13)
    for i in range(0, 12):
        TheMCE.AddOperand()
    # Create an operand type array and later we will input the array into MCE with a for loop
    operandType = [ZOSAPI.Editors.MCE.MultiConfigOperandType.TEMP, ZOSAPI.Editors.MCE.MultiConfigOperandType.PRES,
                   ZOSAPI.Editors.MCE.MultiConfigOperandType.CRVT, ZOSAPI.Editors.MCE.MultiConfigOperandType.THIC,
                   ZOSAPI.Editors.MCE.MultiConfigOperandType.GLSS, ZOSAPI.Editors.MCE.MultiConfigOperandType.SDIA,
                   ZOSAPI.Editors.MCE.MultiConfigOperandType.CRVT, ZOSAPI.Editors.MCE.MultiConfigOperandType.THIC,
                   ZOSAPI.Editors.MCE.MultiConfigOperandType.GLSS, ZOSAPI.Editors.MCE.MultiConfigOperandType.SDIA,
                   ZOSAPI.Editors.MCE.MultiConfigOperandType.CRVT, ZOSAPI.Editors.MCE.MultiConfigOperandType.THIC,
                   ZOSAPI.Editors.MCE.MultiConfigOperandType.SDIA]
    # Set parameter 1 for each config operand
    param1value = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3]
    for i in range(0, 11):
        TheMCE.GetOperandAt(i+3).Param1 = param1value[i]

    # Set type for each config operand
    for i in range(13):
        TheMCE.GetOperandAt(i+1).ChangeType(operandType[i])

    # Set thermal pickup solves
    ThermalPickupSolve = TheMCE.GetOperandAt(1).GetOperandCell(1).CreateSolveType(ZOSAPI.Editors.SolveType.ThermalPickup)
    ThermalPickupSolve._S_ThermalPickup.Configuration = 1
    ThermalPickup_num = [3, 4, 6, 7, 8, 10, 11, 12, 13]
    for i in ThermalPickup_num:
        TheMCE.GetOperandAt(i).GetOperandCell(2).SetSolveData(ThermalPickupSolve)

    # Set Pickup Solve
    ConfigPickupSolve = TheMCE.GetOperandAt(1).GetOperandCell(1).CreateSolveType(ZOSAPI.Editors.SolveType.ConfigPickup)
    ConfigPickupSolve._S_ConfigPickup.Configuration = 1
    GLSSops = [5, 9]  # Operands 5 and 9 are GLSS operands
    for i in GLSSops:
        ConfigPickupSolve._S_ConfigPickup.Operand = i  # Set pickup solve's "operand" value to pickup from correct place
        TheMCE.GetOperandAt(i).GetOperandCell(2).SetSolveData(ConfigPickupSolve)  # apply solve for operands 5 and 9

    # Set temperature of configuration 2 to 100 degrees
    TheMCE.GetOperandAt(1).GetOperandCell(2).DoubleValue = 100
    TheSystemData = TheSystem.SystemData
    TheSystemData.Environment.AdjustIndexToEnvironment = True

    TheSystem.SaveAs(TheApplication.SamplesDir + "\\API\\Python\\e18_Doublet_MakeTermal.zos")
    #! [e18s07_py]
    print("Saved 'Doublet_MakeTermal.zos' file")
    
    # This will clean up the connection to OpticStudio.
    # Note that it closes down the server instance of OpticStudio, so you for maximum performance do not do
    # this until you need to.
    del zos
    zos = None
```
