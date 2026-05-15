# Example 15 - Python

```py
import clr, os, winreg
from itertools import islice

import time

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
    if not os.path.exists(TheApplication.SamplesDir + "\\API\\Python\\e15_Seq_Optimization"):
        os.makedirs(TheApplication.SamplesDir + "\\API\\Python\\e15_Seq_Optimization")
    
    #! [e15s01_py]
    # Tests if file exists & loads the correct double gauss design sample file
    if os.path.isfile(TheApplication.SamplesDir + '\\Short course\\sc_dbga1.zos'):
        TheSystem.LoadFile(TheApplication.SamplesDir + '\\Short course\\sc_dbga1.zos', False)
    else:
        TheSystem.LoadFile(TheApplication.SamplesDir + '\\Short course\\Optical System Design Using OpticStudio\\sc_dbga1.zos', False)
    print('Double Gauss Design:')
    #! [e15s01_py]
    
    #! [e15s02_py]
    # Define path locations
    SampleFile = TheApplication.SamplesDir + '\\API\\Python\\e15_Seq_Optimization\\OptimizedFile.zos'
    TheSystem.SaveAs(SampleFile)
    #! [e15s02_py]
    
    #! [e15s03_py]
    # Define System Explorer
    # Define Aperture
    SystExplorer = TheSystem.SystemData
    SystExplorer.Aperture.ApertureType = ZOSAPI.SystemData.ZemaxApertureType.EntrancePupilDiameter
    SystExplorer.Aperture.ApertureValue = 20
    #! [e15s03_py]

    #! [e15s04_py]
    # Add 3 fields
    Field_1 = SystExplorer.Fields.GetField(1)
    NewField_2 = SystExplorer.Fields.AddField(0, 5.0, 1.0)
    SystExplorer.Fields.SetFieldType(ZOSAPI.SystemData.FieldType.ParaxialImageHeight)
    SystExplorer.Fields.MakeEqualAreaFields(3, 21.6)
    #! [e15s04_py]

    #! [e15s05_py]
    # Add 3 wavelengths: F,d,C
    slPreset = SystExplorer.Wavelengths.SelectWavelengthPreset(ZOSAPI.SystemData.WavelengthPreset.FdC_Visible)
    #! [e15s05_py]

    #! [e15s06_py]
    # Open a shaded model
    analysis = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.ShadedModel)
    analysis.Terminate()
    analysis.WaitForCompletion()
    analysisSettings = analysis.GetSettings()
    cfgFile = os.environ.get('Temp') + '\\sha.cfg'
    # Save the current settings to the temp file
    analysisSettings.SaveTo(cfgFile)
    # make your modifications to it
    # MODIFYSETTINGS are defined in the ZPL help files: The Programming Tab > About the ZPL > Keywords
    analysisSettings.ModifySettings(cfgFile, 'SHA_ROTX', '90')
    analysisSettings.ModifySettings(cfgFile, 'SHA_ROTY', '0')
    analysisSettings.ModifySettings(cfgFile, 'SHA_ROTZ', '0')
    # now load in the modified settings
    analysisSettings.LoadFrom(cfgFile)
    # If you want to overwrite your default CFG, copy it after you are done modifying the settings:
    # CFG_fullname = os.environ.get('USERPROFILE') + '\\Documents\\Zemax\\Configs\\POP.CFG'
    # copyfile(cfgFile, CFG_fullname)
    # We don't need the temp file any more, so delete it
    if os.path.exists(cfgFile):
        os.remove(cfgFile)
    # Run the analysis with the new settings
    analysis.ApplyAndWaitForCompletion()
    #! [e15s06_py]
    
    #! [e15s07_py]
    # remove all variables and add a F# solve on last surface radius
    TheLDE = TheSystem.LDE
    #IOpticalSystemTools
    tools = TheSystem.Tools
    tools.RemoveAllVariables()
    Surface_Last = TheLDE.GetSurfaceAt(TheLDE.NumberOfSurfaces - 2)
    Solver = Surface_Last.RadiusCell.CreateSolveType(ZOSAPI.Editors.SolveType.FNumber)
    Solver._S_FNumber.FNumber = 3.1415
    Surface_Last.RadiusCell.SetSolveData(Solver)
    SampleFile = TheApplication.SamplesDir + '\\API\\Python\\e15_Seq_Optimization\\OptimizedFile1.zos'
    TheSystem.SaveAs(SampleFile)
    #! [e15s07_py]
    
    #! [e15s08_py]
    # change BFL & run quick focus
    Surface_Last.Thickness = 40.0
    QFocus = tools.OpenQuickFocus()
    QFocus.Criterion = ZOSAPI.Tools.General.QuickAdjustCriterion.SpotSizeRadial
    QFocus.UseCentroid = True
    QFocus.RunAndWaitForCompletion()
    QFocus.Close()
    SampleFile = TheApplication.SamplesDir + '\\API\\Python\\e15_Seq_Optimization\\OptimizedFile2.zos'
    TheSystem.SaveAs(SampleFile)
    #! [e15s08_py]

    #! [e15s09_py]
    # setup a few variables
    tools.SetAllRadiiVariable()
    Surface1 = TheLDE.GetSurfaceAt(1)
    Surface2 = TheLDE.GetSurfaceAt(2)
    Surface5 = TheLDE.GetSurfaceAt(5)
    Surface6 = TheLDE.GetSurfaceAt(6)
    Surface9 = TheLDE.GetSurfaceAt(9)
    Surface10 = TheLDE.GetSurfaceAt(10)
    Surface11 = TheLDE.GetSurfaceAt(11)
    #! [e15s09_py]

    #! [e15s10_py]
    # Thickness 2, 5, 6, 9, and 11 variable
    Surface2.ThicknessCell.MakeSolveVariable()
    Surface5.ThicknessCell.MakeSolveVariable()
    Surface6.ThicknessCell.MakeSolveVariable()
    Surface9.ThicknessCell.MakeSolveVariable()
    Surface11.ThicknessCell.MakeSolveVariable()
    #! [e15s10_py]
    
    #! [e15s11_py]
    # Thickness 10 pick up from 1
    Solver = Surface10.ThicknessCell.CreateSolveType(ZOSAPI.Editors.SolveType.SurfacePickup)
    SolverPickup = Solver._S_SurfacePickup
    SolverPickup.Surface = 1
    SolverPickup.ScaleFactor = 1
    SolverPickup.Column = ZOSAPI.Editors.LDE.SurfaceColumn.Thickness
    Surface10.ThicknessCell.SetSolveData(Solver)
    SampleFile = TheApplication.SamplesDir + '\\API\\Python\\e15_Seq_Optimization\\OptimizedFile3.zos'
    TheSystem.SaveAs(SampleFile)
    #! [e15s11_py]

    #! [e15s12_py]
    # define merit function
    # load merit function
    # you need to have 64-bit pywin32 to use the SEQOptimizationWizard with an error
    TheMFE = TheSystem.MFE
    OptWizard = TheMFE.SEQOptimizationWizard

    # Optimize for smallest RMS Spot, which is "Data" = 1
    OptWizard.Data = 1
    OptWizard.OverallWeight = 1
    # Gaussian Quadrature with 3 rings (refers to index number = 2)
    OptWizard.Ring = 2
    # Set air & glass boundaries
    OptWizard.IsGlassUsed = True
    OptWizard.GlassMin = 3.0
    OptWizard.GlassMax = 15.0
    OptWizard.GlassEdge = 3.0
    OptWizard.IsAirUsed = True
    OptWizard.AirMin = 0.5
    OptWizard.AirMax = 1000.0
    OptWizard.AirEdge = 0.5
    # And click OK!
    OptWizard.Apply()
    mf_filename = TheApplication.SamplesDir + '\\API\\Python\\e15_Seq_Optimization\\RMS_Spot_Radius.mf'
    TheMFE.SaveMeritFunction(mf_filename)
    TheMFE.LoadMeritFunction(mf_filename)
    SampleFile = TheApplication.SamplesDir + '\\API\\Python\\e15_Seq_Optimization\\OptimizedFile4.zos'
    TheSystem.SaveAs(SampleFile)
    #! [e15s12_py]
    
    #! [e15s13_py]
    # Run local optimization and measure time
    # Local optimization until completion
    t = time.time()

    LocalOpt = TheSystem.Tools.OpenLocalOptimization()
    if (LocalOpt != None):

        LocalOpt.Algorithm = ZOSAPI.Tools.Optimization.OptimizationAlgorithm.DampedLeastSquares
        LocalOpt.Cycles = ZOSAPI.Tools.Optimization.OptimizationCycles.Automatic
        LocalOpt.NumberOfCores = 8
        print('Local Optimization...')
        print('Initial Merit Function ', LocalOpt.InitialMeritFunction)
        
        LocalOpt.RunAndWaitForCompletion()
        print('Final Merit Function   ', LocalOpt.CurrentMeritFunction)
        LocalOpt.Close()

    # Get the elapsed time.
    elapsed = time.time() - t
    print('Time elapsed            ' + str(round(elapsed,3)) + 's')
    #! [e15s13_py]
    
    #! [e15s14_py]
    # run global search
    GlobalOptimTimeInSeconds = 5
    GlobalOpt = TheSystem.Tools.OpenGlobalOptimization()
    if (GlobalOpt != None):
        GlobalOpt.Algorithm = ZOSAPI.Tools.Optimization.OptimizationAlgorithm.DampedLeastSquares
        GlobalOpt.NumberOfCores = 8
        print('Global Optimization for ' + str(GlobalOptimTimeInSeconds) + ' seconds...')
        print('Initial Merit Function ', GlobalOpt.InitialMeritFunction)
        GlobalOpt.NumberToSave = ZOSAPI.Tools.Optimization.OptimizationSaveCount.Save_10
        
        GlobalOpt.RunAndWaitWithTimeout(1 * GlobalOptimTimeInSeconds)
        for j in range(1, 11):
            print(str(int(j)) + ': ' + str(GlobalOpt.CurrentMeritFunction(j)))
        GlobalOpt.Cancel()
        GlobalOpt.WaitForCompletion()
        GlobalOpt.Close()
    #! [e15s14_py]

    #! [e15s15_py]
    # run hammer optimization
    HammerOptimTimeInSeconds = 5
    HammerOpt = TheSystem.Tools.OpenHammerOptimization()
    if (HammerOpt != None):
        HammerOpt.Algorithm = ZOSAPI.Tools.Optimization.OptimizationAlgorithm.DampedLeastSquares
        HammerOpt.NumberOfCores = 8
        print('Hammer Optimization for ' + str(HammerOptimTimeInSeconds) + ' seconds...')
        print('Initial Merit Function ', HammerOpt.InitialMeritFunction)
        
        HammerOpt.RunAndWaitWithTimeout(1 * HammerOptimTimeInSeconds)
        print('Final Merit Function ', HammerOpt.CurrentMeritFunction)

        HammerOpt.Cancel()
        HammerOpt.WaitForCompletion()
        HammerOpt.Close()
    #! [e15s15_py]

    TheSystem.Save()
    
    
    # This will clean up the connection to OpticStudio.
    # Note that it closes down the server instance of OpticStudio, so you for maximum performance do not do
    # this until you need to.
    del zos
    zos = None
```
