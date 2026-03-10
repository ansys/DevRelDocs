# Example 07 - Python

```py
import clr, os, winreg
from itertools import islice

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
    FilePath = TheApplication.ZemaxDataDir + r"\Samples\Sequential\Objectives\Cooke 40 degree field.zos"
    TheSystem.LoadFile(FilePath, False)
    
    # ! [e07s01_py]
    # run the design lockdown tool to fix diameters, remove solves
    LockdownTool = TheSystem.Tools.OpenDesignLockdown()
    LockdownTool.UsePrecisionRounding = True
    LockdownTool.DecimalPrecision = 2
    LockdownTool.RunAndWaitForCompletion()
    LockdownTool.Close()
    # ! [e07s01_py]
    
    # recreate the functionality of the tilt/decenter elements tool
    # apply coordinate breaks around the 2nd lens element (surf 3/4)
    surf3 = TheSystem.LDE.InsertNewSurfaceAt(3)
    surf6 = TheSystem.LDE.InsertNewSurfaceAt(6)
    CB = surf3.GetSurfaceTypeSettings(ZOSAPI.Editors.LDE.SurfaceType.CoordinateBreak)
    surf3.ChangeType(CB)
    surf6.ChangeType(CB)
    # insert a dummy surface after 2nd CB
    surf7 = TheSystem.LDE.InsertNewSurfaceAt(7)
    surf7.Thickness = TheSystem.LDE.GetSurfaceAt(5).Thickness # the dummy carries the original thickness
    
    # ! [e07s02_py]
    # we're going to play with the STOP surface position, so let's put STOP on surf 1
    TheSystem.LDE.GetSurfaceAt(1).IsStop = True
    # ! [e07s02_p]
    
    # ! [e07s03_py]
    # create position solve
    PositionSolve = TheSystem.LDE.GetSurfaceAt(5).ThicknessCell.CreateSolveType(ZOSAPI.Editors.SolveType.Position)
    # set the properties for the position solve
    # solve-specific properties are in ISolvePosition interface, accessed via _S_Position
    PositionSolve._S_Position.FromSurface = 3
    PositionSolve._S_Position.Length = 0
    # apply position solve
    TheSystem.LDE.GetSurfaceAt(5).ThicknessCell.SetSolveData(PositionSolve)
    # ! [e07s03_py]
    
    # ! [e07s04_py]
    # create pickup solve
    PickupSolve = TheSystem.LDE.GetSurfaceAt(6).ThicknessCell.CreateSolveType(ZOSAPI.Editors.SolveType.SurfacePickup)
    # solve-specific properties are in ISolveSurfacePickup interface, accessed via _S_SurfacePickup
    PickupSolve._S_SurfacePickup.Surface = 5
    PickupSolve._S_SurfacePickup.ScaleFactor = -1
    PickupSolve._S_SurfacePickup.offset = 0
    PickupSolve._S_SurfacePickup.Column = ZOSAPI.Editors.LDE.SurfaceColumn.Thickness
    # apply the pickup solve
    TheSystem.LDE.GetSurfaceAt(6).ThicknessCell.SetSolveData(PickupSolve)
    # ! [e07s04_py]
    
    # ! [e07s05_py]
    # set pickup solves for coordinate break tilt/decenter parameter cells
    # these parameters are columns 12-16 in the Lens Data Editor (parameters 1-5)
    surf3 = TheSystem.LDE.GetSurfaceAt(3)
    surf6 = TheSystem.LDE.GetSurfaceAt(6)
    ParameterPickup = surf6.GetCellAt(12).CreateSolveType(ZOSAPI.Editors.SolveType.SurfacePickup)
    ParameterPickup._S_SurfacePickup.Surface = 3
    ParameterPickup._S_SurfacePickup.ScaleFactor = -1
    ParameterPickup._S_SurfacePickup.MakePickupFromCurrentColumn()
    for i in range(12, 17):
        surf6.GetCellAt(i).SetSolveData(ParameterPickup)
        surf3.GetCellAt(i).DoubleValue = np.random.uniform(-0.1, .01) # assign random tilt/decenter values
    # also, set the 'order' flag for CB#2
    surf6.GetCellAt(17).IntegerValue = 1
    # ! [e07s05_py]
    
    # ! [e07s06_py]
    # check the global rotation matrix of surface 5 (rear of tilted/decentered lens)
    GLCR = ZOSAPI.Editors.MFE.MeritOperandType.GLCR
    # GLCR operand only uses two input parameters: the surface number, and the rotation matrix entry number.
    # But, GetOperandValue() expects the operand type, plus 8 more inputs because some operands use all 8.
    # So, we will have to put 0's for the additional unused inputs in the function call.
    RotationMatrix = np.zeros([3, 3])
    i = 1
    for x in range(0, 3):
        for y in range(0, 3):
            RotationMatrix[x][y] = TheSystem.MFE.GetOperandValue(GLCR, 5, i, 0, 0, 0, 0, 0, 0)
            i = i + 1
    # ! [e07s06_py]
    
    OutFilePath = TheApplication.ZemaxDataDir + r"\Samples\API\Python\Python_07_TiltDecenterAndMFOperand.zos"
    TheSystem.SaveAs(OutFilePath)
    
    print('Created new file: %s' % OutFilePath)
    
    # This will clean up the connection to OpticStudio.
    # Note that it closes down the server instance of OpticStudio, so you for maximum performance do not do
    # this until you need to.
    del zos
    zos = None
```
