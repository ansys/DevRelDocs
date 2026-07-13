# Example 26 - Python

```py
import clr, os, winreg
from itertools import islice

from System import Enum

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
    
    #! [e26s01_py]
    # Define variables for OpticStudio Preferences
    Preference = TheApplication.Preferences
    PrefG = Preference.General
    Logic = ['False', 'True']

    #Define the enums to a map/dictionary 
    DateTimeTypeLookup = {
        Enum.Parse(ZOSAPI.Preferences.DateTimeType, "None"):'None',
        ZOSAPI.Preferences.DateTimeType.DateTime:'DateTime', 
        ZOSAPI.Preferences.DateTimeType.Date:'Date'}
    LanguageLookup = {
        ZOSAPI.Preferences.LanguageType.Chinese:'Chinese', 
        ZOSAPI.Preferences.LanguageType.English:'English', 
        ZOSAPI.Preferences.LanguageType.Japanese:'Japanese'}
    EncodingTypeLookup= {
        ZOSAPI.Preferences.EncodingType.ANSI:'ANSI', 
        ZOSAPI.Preferences.EncodingType.Unicode:'Unicode'}
    #! [e26s01_py]
    
    #! [e26s02_py]
    # Read and print the initial settings
    print('\n===Check Settings===')
    print('DateTimeFormat: %s' %DateTimeTypeLookup[PrefG.DateTimeFormat])
    print('Language: %s' %LanguageLookup[PrefG.Language])
    print('ZMXFileEncoding: %s' %EncodingTypeLookup[PrefG.ZMXFileEncoding])
    print('TXTFileEncoding: %s' %EncodingTypeLookup[PrefG.TXTFileEncoding])
    print('UseSessionFiles: %s' %(Logic[PrefG.UseSessionFiles]))
    print('IncludeCalculatedDataInsession: %s' %(Logic[PrefG.IncludeCalculatedDataInSession]))
    print('UpdateMostRecentlyUsedList: %s' %(Logic[PrefG.UpdateMostRecentlyUsedList]))
    print('UserPreferences: %s' %(PrefG.UserPreferences))
    #! [e26s02_py]
    
    #! [e26s03_py]
    # Reset the settings to default
    Preference.ResetToDefaults()
    #! [e26s03_py]
    
    #! [e26s04_py]
    # Set the settings
    PrefG.DateTimeFormat = Enum.Parse(ZOSAPI.Preferences.DateTimeType, "None");
    PrefG.ZMXFileEncoding = ZOSAPI.Preferences.EncodingType.ANSI;
    PrefG.TXTFileEncoding = ZOSAPI.Preferences.EncodingType.ANSI;
    PrefG.UseSessionFiles = False;
    PrefG.IncludeCalculatedDataInSession = False;
    PrefG.UpdateMostRecentlyUsedList = False;
    PrefG.UserPreferences = 'Never gonna tell a lie and hurt you';
    #! [e26s04_py]  
    
    print('\n===Final Settings===')
    print('DateTimeFormat: %s' %DateTimeTypeLookup[PrefG.DateTimeFormat])
    print('Language: %s' %LanguageLookup[PrefG.Language])
    print('ZMXFileEncoding: %s' %EncodingTypeLookup[PrefG.ZMXFileEncoding])
    print('TXTFileEncoding: %s' %EncodingTypeLookup[PrefG.TXTFileEncoding])
    print('UseSessionFiles: %s' %(Logic[PrefG.UseSessionFiles]))
    print('IncludeCalculatedDataInsession: %s' %(Logic[PrefG.IncludeCalculatedDataInSession]))
    print('UpdateMostRecentlyUsedList: %s' %(Logic[PrefG.UpdateMostRecentlyUsedList]))
    print('UserPreferences: %s' %(PrefG.UserPreferences))
      
    
    # This will clean up the connection to OpticStudio.
    # Note that it closes down the server instance of OpticStudio, so you for maximum performance do not do
    # this until you need to.
    del zos
    zos = None
```
