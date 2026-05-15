# Example 14 - Python

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
    
    #! [e14s01_py]
    # Open Double Gauss sample file
    samplesFolder = TheApplication.SamplesDir
    DGfile = samplesFolder + r"\Sequential\Objectives\Double Gauss 28 degree field.zos"
    TheSystem.LoadFile(DGfile, False)
    #! [e14s01_py]

    #! [e14s02_py]
    # Set up Tolerance Wizard and run it
    tWiz = TheSystem.TDE.SEQToleranceWizard
    
    # Specify surface tolerances
    tWiz.SurfaceRadius = 0.1
    tWiz.SurfaceThickness = 0.1
    tWiz.SurfaceDecenterX = 0.1
    tWiz.SurfaceDecenterY = 0.1
    tWiz.SurfaceTiltX = 0.2
    tWiz.SurfaceTiltY = 0.2
    # Specify element tolerances
    tWiz.ElementDecenterX = 0.1
    tWiz.ElementDecenterY = 0.1
    tWiz.ElementTiltXDegrees = 0.2
    tWiz.ElementTiltYDegrees = 0.2
    # Specify tolerances not to be used
    tWiz.IsSurfaceSandAIrregularityUsed = False
    tWiz.IsIndexUsed = False
    tWiz.IsIndexAbbePercentageUsed = False
    tWiz.OK()
    #! [e14s02_py]
    
    #! [e14s03_py]
    # Create a "Double Gauss" folder in the Samples folder
    import os
    dirLoc = samplesFolder + "\\API\\Python\\e14_seq_tolerance"
    if not os.path.exists(dirLoc):
        os.makedirs(dirLoc)
    # Save new file to Double Gauss folder
    fileNameSeq = dirLoc + "\\Double Gauss (seq).zos"
    TheSystem.SaveAs(fileNameSeq)
    #! [e14s03_py]
    print('File saved: %s' % fileNameSeq)
    
    #! [e14s04_py]
    # Set up Tolerancing analysis and run it
    tol = TheSystem.Tools.OpenTolerancing()
    # Select Sensitivity mode
    tol.SetupMode =  ZOSAPI.Tools.Tolerancing.SetupModes.Sensitivity
    # Select Criterion and related settings
    tol.Criterion = ZOSAPI.Tools.Tolerancing.Criterions.RMSSpotRadius
    tol.CriterionSampling = 3
    tol.CriterionComp = ZOSAPI.Tools.Tolerancing.CriterionComps.OptimizeAll_DLS
    tol.CriterionCycle = 2
    tol.CriterionField = ZOSAPI.Tools.Tolerancing.CriterionFields.UserDefined
    # Select number of MC runs and files to save
    tol.NumberOfRuns = 20
    tol.NumberToSave = 20
    # Run the Tolerancing analysis
    tol.RunAndWaitForCompletion()
    tol.Close()
    #! [e14s04_py]
    
    #! [e14s05_py]
    # Convert file to Non-sequential mode
    convertNSmode = TheSystem.Tools.OpenConvertToNSCGroup()
    convertNSmode.ConvertFileToNSC = True
    convertNSmode.RunAndWaitForCompletion()
    convertNSmode.Close();
    # Save the Non-sequential file to the Double Gauss folder
    fileNameNS = dirLoc + "\\Double Gauss (NS).zos"
    TheSystem.SaveAs(fileNameNS)
    #! [e14s05_py]
    print('File saved: %s' % fileNameNS)
    
    # This will clean up the connection to OpticStudio.
    # Note that it closes down the server instance of OpticStudio, so you for maximum performance do not do
    # this until you need to.
    del zos
    zos = None
```
