# Example 23 - Python

```py
import clr, os, winreg
from itertools import islice

import time
import matplotlib.pyplot as plt
import numpy as np

from System import Enum, Int32, Double

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
    
    # Set up primary optical system
    sampleDir = TheApplication.SamplesDir
    testFile = sampleDir + "\\Sequential\\Objectives\\Double Gauss 28 degree field.zos"
    TheSystem.LoadFile(testFile, False)
    
    max_rays = 150
    #! [e23s01_py]
    max_field = 0
    for i in range(1,TheSystem.SystemData.Fields.NumberOfFields + 1):
        if TheSystem.SystemData.Fields.GetField(i).Y > max_field:
            max_field = TheSystem.SystemData.Fields.GetField(i).Y
    #! [e23s01_py]

    max_num_field = TheSystem.SystemData.Fields.NumberOfFields

    # sets up plot
    plt.close('all')
    plt.rcParams["figure.figsize"] = (15, 8)
    colors = ('b', 'g', 'r', 'c', 'm', 'y', 'k')

    tic = time.time()
    
    #! [e23s02_py]
    # Set up Batch Ray Trace
    raytrace = TheSystem.Tools.OpenBatchRayTrace()
    nsur = TheSystem.LDE.NumberOfSurfaces
    normUnPolData = raytrace.CreateNormUnpol(max_rays + 1, ZOSAPI.Tools.RayTrace.RaysType.Real, nsur)
    #! [e23s02_py]
    
    #! [e23s03_py]
    # define batch ray trace constants
    hx = 0
    # since python doesn't include STOP number in range, need to use STOP value slightly more than 1
    py_ary = np.arange(0, 1.0001, 1 / max_rays) * 2 - 1
    px = 0
    max_wave = TheSystem.SystemData.Wavelengths.NumberOfWavelengths
    #! [e23s03_py]
    
    # initilize x/y image plane arrays
    y_ary = np.zeros((max_num_field + 1, max_wave + 1, max_rays + 1))
    
    #! [e23s04_py]
    # image surface number and primary wavelength
    nsur = TheSystem.LDE.NumberOfSurfaces
    pwav = 0
    for a in range(1, TheSystem.SystemData.Wavelengths.NumberOfWavelengths + 1):
        if TheSystem.SystemData.Wavelengths.GetWavelength(a).IsPrimary == 1:
            pwav = a

    # creates array of Y coordinate chief ray values
    chief_ary = np.zeros(max_num_field)
    for field in range(1, max_num_field + 1):
        #hy = TheSystem.SystemData.Fields.GetField(field).Y / max_field
        hy = 1 if max_field == 0 else TheSystem.SystemData.Fields.GetField(field).Y / max_field
        # gets single value without using MFE (see ZPL OPEV)
        chief_ary[field - 1] = TheSystem.MFE.GetOperandValue(ZOSAPI.Editors.MFE.MeritOperandType.REAY, nsur, pwav, 0, hy , 0, 0, 0, 0)
    #! [e23s04_py]
    
    # setup plot
    for field in range(1, max_num_field + 1):
        if (field == 1):
            ax1 = plt.subplot(2, max_num_field, field + max_num_field)
        else:
            plt.subplot(2, max_num_field, field + max_num_field)

        hy = 1 if max_field == 0 else TheSystem.SystemData.Fields.GetField(field).Y / max_field

        for wave in range(1, max_wave + 1):
            #! [e23s05_py]
            # Adding Rays to Batch, varying normalized object height hy
            normUnPolData.ClearData()
            for i in range(0, max_rays + 1):
                py = py_ary[i]
                normUnPolData.AddRay(Int32(wave), Double(hx), Double(hy), Double(px), Double(py), Enum.Parse(ZOSAPI.Tools.RayTrace.OPDMode, "None"))
            #! [e23s05_py]

            #! [e23s06_py]
            # Run Batch Ray Trace
            raytrace.RunAndWaitForCompletion()
            #! [e23s06_py]

            #! [e23s07_py]
            # Read and display results
            normUnPolData.StartReadingResults()
            
            # Python NET requires all arguments to be passed in as reference, so need to have placeholders
            sysInt = Int32(1)
            sysDbl = Double(1.0)
            
            output = normUnPolData.ReadNextResult(sysInt, sysInt, sysInt,
                            sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl);
            
            while output[0]:
                if (output[2] == 0 and output[3] == 0):
                    y_ary[field, wave, output[1] - 1] = output[5]
                
                # Python NET requires all arguments to be passed in as reference, so need to have placeholders
                output = normUnPolData.ReadNextResult(sysInt, sysInt, sysInt,
                            sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl);
            plt.plot(py_ary[:], np.squeeze((y_ary[field, wave,:] - chief_ary[field - 1]) * 1000), '-', ms = 4)
            #! [e23s07_py]
    raytrace.Close();
    manual = round(time.time() - tic, 3)

    tic = time.time()
    
    #! [e23s08_py]
    ray = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.RayFan)
    ray_settings = ray.GetSettings()
    ray_settings.NumberOfRays = max_rays / 2
    ray_settings.Field.UseAllFields()
    ray_settings.Wavelength.UseAllWavelengths()

    ray.ApplyAndWaitForCompletion()
    ray_results = ray.GetResults()
    #! [e23s08_py]
    
    for field in range(1, max_num_field + 1):
        #! [e23s09_py]
        # Read and display results
        if field == 1:
            ax2 = plt.subplot(2, max_num_field, field)
        else:
            plt.subplot(2, max_num_field, field)
        
        ds = ray_results.GetDataSeries(field *2 - 2)
        # get raw .NET data into numpy array
        xRaw = np.asarray(tuple(ds.XData.Data))
        yRaw = np.asarray(tuple(ds.YData.Data))
        
        x = xRaw
        y = yRaw.reshape(ds.YData.Data.GetLength(0), ds.YData.Data.GetLength(1))

        plt.plot(x, y)
        hy = 1 if max_field == 0 else TheSystem.SystemData.Fields.GetField(field).Y / max_field
        plt.title('Field: %4.3f' % (hy))
        #! [e23s09_py]

    native = round(time.time() - tic, 3)

    print('Tracing ' + str(max_rays + 1) + ' number of rays')
    print('Elapsed time is ' + str(native) + ' seconds with native code')
    print('Elapsed time is ' + str(manual) + ' seconds with manual code')
    print('The native code is ' + str(round((manual - native) / native * 100, 2)) + '% faster')
    
    ax1.set_ylabel('Manual Code (%.3fs)' % (manual))
    ax2.set_ylabel('Native Code (%.3fs)' % (native))

    plt.subplots_adjust(wspace=0.5)
    
    # This will clean up the connection to OpticStudio.
    # Note that it closes down the server instance of OpticStudio, so you for maximum performance do not do
    # this until you need to.
    del zos
    zos = None
    
    # place plt.show() after clean up to release OpticStudio from memory
    plt.show()
```
