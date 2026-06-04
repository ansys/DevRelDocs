# Example 22 - Python

```py
import clr, os, winreg
from itertools import islice

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
    if not os.path.exists(TheApplication.SamplesDir + "\\API\\Python"):
        os.makedirs(TheApplication.SamplesDir + "\\API\\Python")
    
    # Set up primary optical system
    sampleDir = TheApplication.SamplesDir
    file = "Double Gauss 28 degree field.zos"
    testFile = sampleDir + "\\Sequential\\Objectives\\" + file
    TheSystem.LoadFile(testFile, False)

    #! [e22s01_py]
    # Set up Batch Ray Trace
    raytrace = TheSystem.Tools.OpenBatchRayTrace()
    nsur = TheSystem.LDE.NumberOfSurfaces
    max_rays = 30
    normUnPolData = raytrace.CreateNormUnpol((max_rays + 1) * (max_rays + 1), ZOSAPI.Tools.RayTrace.RaysType.Real, nsur)
    #! [e22s01_py]

    #! [e22s02_py]
    # Define batch ray trace constants
    hx = 0.0
    max_wave = TheSystem.SystemData.Wavelengths.NumberOfWavelengths
    num_fields = TheSystem.SystemData.Fields.NumberOfFields
    hy_ary = np.array([0, 0.707, 1])
    #! [e22s02_py]
    
    # Initialize x/y image plane arrays
    x_ary = np.empty((num_fields, max_wave, ((max_rays + 1) * (max_rays + 1))))
    y_ary = np.empty((num_fields, max_wave, ((max_rays + 1) * (max_rays + 1))))

    #! [e22s03_py]
    # Determine maximum field in Y only
    max_field = 0.0
    for i in range(1, num_fields + 1):
        if (TheSystem.SystemData.Fields.GetField(i).Y > max_field):
            max_field = TheSystem.SystemData.Fields.GetField(i).Y
    #! [e22s03_py]

    plt.rcParams["figure.figsize"] = (15, 4)
    colors = ('b', 'g', 'r', 'c', 'm', 'y', 'k')

    if TheSystem.SystemData.Fields.GetFieldType() == ZOSAPI.SystemData.FieldType.Angle:
        field_type = 'Angle'
    elif TheSystem.SystemData.Fields.GetFieldType() == ZOSAPI.SystemData.FieldType.ObjectHeight:
        field_type = 'Height'
    elif TheSystem.SystemData.Fields.GetFieldType() == ZOSAPI.SystemData.FieldType.ParaxialImageHeight:
        field_type = 'Height'
    elif TheSystem.SystemData.Fields.GetFieldType() == ZOSAPI.SystemData.FieldType.RealImageHeight:
        field_type = 'Height'
        
    for field in range(1, len(hy_ary) + 1):
        plt.subplot(1, 3, field, aspect='equal').set_title('Hy: %.2f (%s)' % (hy_ary[field - 1] * max_field, field_type))

        for wave in range(1, max_wave + 1):

            #! [e22s04_py]
            # Adding Rays to Batch, varying normalised object height hy
            normUnPolData.ClearData()
            waveNumber = wave
            #for i = 1:((max_rays + 1) * (max_rays + 1))
            for i in range(1, (max_rays + 1) * (max_rays + 1) + 1):

                px = np.random.random() * 2 - 1
                py = np.random.random() * 2 - 1

                while (px*px + py*py > 1):
                    py = np.random.random() * 2 - 1
                normUnPolData.AddRay(waveNumber, hx, hy_ary[field - 1], px, py, Enum.Parse(ZOSAPI.Tools.RayTrace.OPDMode, "None"))
            #! [e22s04_py]
            
            raytrace.RunAndWaitForCompletion()

            #! [e22s05_py]
            # Read batch raytrace and display results
            normUnPolData.StartReadingResults()
            
            # Python NET requires all arguments to be passed in as reference, so need to have placeholders
            sysInt = Int32(1)
            sysDbl = Double(1.0)
            
            output = normUnPolData.ReadNextResult(sysInt, sysInt, sysInt,
                            sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl);

            while output[0]:                                                    # success
                if ((output[2] == 0) and (output[3] == 0)):                     # ErrorCode & vignetteCode
                    x_ary[field - 1, wave - 1, output[1] - 1] = output[4]   # X
                    y_ary[field - 1, wave - 1, output[1] - 1] = output[5]   # Y
                output = normUnPolData.ReadNextResult(sysInt, sysInt, sysInt,
                            sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl, sysDbl);
            #! [e22s05_py]
            temp = plt.plot(np.squeeze(x_ary[field - 1, wave - 1, :]), np.squeeze(y_ary[field - 1, wave - 1, :]), '.', ms = 1, color = colors[wave - 1])

    plt.suptitle('Spot Diagram: %s' % (os.path.basename(testFile)))
    plt.subplots_adjust(wspace=0.8)
    plt.draw()

    #! [e22s06_py]
    # Spot Diagram Analysis Results
    spot = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.StandardSpot)
    spot_setting = spot.GetSettings()
    spot_setting.Field.SetFieldNumber(0)
    spot_setting.Wavelength.SetWavelengthNumber(0)
    spot_setting.ReferTo = ZOSAPI.Analysis.Settings.RMS.ReferTo.Centroid
    #! [e22s06_py]

    #! [e22s07_py]
    # extract RMS & Geo spot size for field points
    spot.ApplyAndWaitForCompletion()
    #spot_results = spot.GetResults()
    spot_results = spot.GetResults()
    print('RMS radius: %6.3f  %6.3f  %6.3f' % (spot_results.SpotData.GetRMSSpotSizeFor(1, 1), spot_results.SpotData.GetRMSSpotSizeFor(2, 1), spot_results.SpotData.GetRMSSpotSizeFor(3, 1)))
    print('GEO radius: %6.3f  %6.3f  %6.3f' % (spot_results.SpotData.GetGeoSpotSizeFor(1, 1), spot_results.SpotData.GetGeoSpotSizeFor(2, 1), spot_results.SpotData.GetGeoSpotSizeFor(3, 1)))
    #! [e22s07_py]
    
    # This will clean up the connection to OpticStudio.
    # Note that it closes down the server instance of OpticStudio, so you for maximum performance do not do
    # this until you need to.
    del zos
    zos = None
    
    # place plt.show() after clean up to release OpticStudio from memory
    plt.show()
```
