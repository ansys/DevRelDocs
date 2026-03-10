# Example 04 - Python

```py
import clr, os, winreg
from itertools import islice

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
        from itertools import islice
        if type(data) is not list:
            data = list(data)
        var_lst = [y] * x;
        it = iter(data)
        res = [list(islice(it, i)) for i in var_lst]
        if transpose:
            return self.transpose(data);
        return res
    
    def transpose(self, data):
        if type(data) is not list:
            data = list(data)
        return list(map(list, zip(*data)))
    
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
    
    # use http://matplotlib.org/ to plot line graph
    # need to install this package before running this code
    
    # load local variables
    ZOSAPI = zos.ZOSAPI
    TheApplication = zos.TheApplication
    TheSystem = zos.TheSystem
    sampleDir = TheApplication.SamplesDir
    
    #! [e04s01_py]
    # Open file
    testFile = sampleDir + '\\Sequential\\Objectives\\Cooke 40 degree field.zos'
    TheSystem.LoadFile(testFile, False)
    #! [e04s01_py]

    #! [e04s02_py]
    # Create analysis
    TheAnalyses = TheSystem.Analyses
    newWin = TheAnalyses.New_FftMtf()
    #! [e04s02_py]

    #! [e04s03_py]
    # Settings
    newWin_Settings = newWin.GetSettings()
    newWin_Settings.MaximumFrequency = 50
    newWin_Settings.SampleSize = ZOSAPI.Analysis.SampleSizes.S_256x256
    #! [e04s03_py]
    
    #! [e04s04_py]
    # Run Analysis
    newWin.ApplyAndWaitForCompletion()
    # Get Analysis Results
    newWin_Results = newWin.GetResults()
    #! [e04s04_py]
    
    
    #! [e04s05_py]
    # Read and plot data series
    # NOTE: numpy functions are used to unpack and plot the 2D tuple for Sagittal & Tangential MTF
    # You will need to import the numpy module to get this part of the code to work
    colors = ('b','g','r','c', 'm', 'y', 'k')
    for seriesNum in range(0,newWin_Results.NumberOfDataSeries, 1):
        data = newWin_Results.GetDataSeries(seriesNum)
        
        # get raw .NET data into numpy array
        xRaw = data.XData.Data
        yRaw = data.YData.Data

        x = list(xRaw)
        y = zos.reshape(yRaw, yRaw.GetLength(0), yRaw.GetLength(1), True)
        
        plt.plot(x,y[0],color=colors[seriesNum])
        plt.plot(x,y[1],linestyle='--',color=colors[seriesNum])        
    #! [e04s05_py]
    
    # If you want to use numpy, you can replace the last 4 commands in the for loop with:
    #     x = np.array(tuple(xRaw))
    #     y = np.array(np.asarray(tuple(yRaw)).reshape(data.YData.Data.GetLength(0), data.YData.Data.GetLength(1)))
    #    
    #     plt.plot(x[:],y[:,0],color=colors[seriesNum])
    #     plt.plot(x[:],y[:,1],linestyle='--',color=colors[seriesNum])
        
    
    # format the plot
    plt.title('FFT MTF: ' + os.path.basename(testFile))
    plt.xlabel('Spatial Frequency in cycles per mm')
    plt.ylabel('Modulus of the OTF')
    plt.legend([r'$0^\circ$ tangential',r'$0^\circ$ sagittal',r'$14^\circ$ tangential',r'$14^\circ$ sagittal',r'$20^\circ$ tangential',r'$20^\circ$ sagittal'])
    plt.grid(True)
    
    # This will clean up the connection to OpticStudio.
    # Note that it closes down the server instance of OpticStudio, so you for maximum performance do not do
    # this until you need to.
    del zos
    zos = None
    
    # place plt.show() after clean up to release OpticStudio from memory
    plt.show()
```
