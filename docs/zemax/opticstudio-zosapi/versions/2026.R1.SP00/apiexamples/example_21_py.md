# Example 21 - Python

```py
import clr, os, winreg, sys
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
    if not os.path.exists(TheApplication.SamplesDir + "\\API\\Python"):
        os.makedirs(TheApplication.SamplesDir + "\\API\\Python")
    
    #! [e21s01_py]
    # Create a new non-sequential file
    TheSystem.New(False)
    TheSystem.MakeNonSequential()
    # Add new catalog MISC
    TheSystem.SystemData.MaterialCatalogs.AddCatalog('MISC')
    # Set Wave #1 to 0.47 micron
    TheSystem.SystemData.Wavelengths.GetWavelength(1).Wavelength = 0.47
    # Use lumens as the source unit
    TheSystem.SystemData.Units.SourceUnits = ZOSAPI.SystemData.ZemaxSourceUnits.Lumens
    #! [e21s01_py]

    #! [e21s02_py]
    # Add 4 more objects
    TheNCE = TheSystem.NCE
    TheNCE.AddObject()
    TheNCE.AddObject()
    TheNCE.AddObject()
    TheNCE.AddObject()
    #! [e21s02_py]
    
    #! [e21s03_py]
    # Set 1st object as a Source File
    Object_1 = TheNCE.GetObjectAt(1)
    Typeset_SourceFile = Object_1.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.SourceFile)
    Typeset_SourceFile.FileName1 = 'RAYFILE_LB_T67C_100K_190608_ZEMAX.DAT'
    Object_1.ChangeType(Typeset_SourceFile)
    Object_1.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par1).IntegerValue = 5
    Object_1.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par2).IntegerValue = 1000
    Object_1.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par3).DoubleValue = 2.485572
    Object_1.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par8).DoubleValue = 0.47
    Object_1.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par9).DoubleValue = 0.47
    #! [e21s03_py]

    #! [e21s04_py]
    # Edit source data of object 1
    # SourcesData includes all the settings in Object Properties > Sources
    Object_1.SourcesData.PrePropagation = -0.2
    Object_1.SourcesData.ArrayType = ZOSAPI.Editors.NCE.ArrayMode.Rectangular
    Object_1.SourcesData.ArrayNumberX = 5
    Object_1.SourcesData.ArrayNumberY = 5
    #! [e21s04_py]

    #! [e21s05_py]
    # Set 2nd object as CAD Part: STEP/IGES/SAT
    Object_2 = TheNCE.GetObjectAt(2)
    Typeset_CADPartSTEPIGESSAT = Object_1.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.CADPartSTEPIGESSAT)
    Typeset_CADPartSTEPIGESSAT.FileName1 = 'LB_T67C_190608_GEOMETRY.STEP'
    Object_2.ChangeType(Typeset_CADPartSTEPIGESSAT)
    #! [e21s05_py]

    #! [e21s06_py]
    # Set Rays Ignore Object = Always for object 2
    # TypeData includes all settings in Object Properties > Type
    Object_2.TypeData.RaysIgnoreObject = ZOSAPI.Editors.NCE.RaysIgnoreObjectType.Always
    #! [e21s06_py]
    
    #! [e21s07_py]
    # Set 3rd object as Cylinder Volume
    Object_3 = TheNCE.GetObjectAt(3)
    Typeset_CylinderVolume = Object_3.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.CylinderVolume)
    Object_3.ChangeType(Typeset_CylinderVolume)
    # Set positions, material and parameters
    Object_3.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.ZPosition).DoubleValue = 0.8
    Object_3.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Material).Value = 'PMMA'
    Object_3.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par1).DoubleValue = 1.2
    Object_3.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par2).DoubleValue = 0.1
    Object_3.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par3).DoubleValue = 1.2
    #! [e21s07_py]

    #! [e21s08_py]
    # Make Face 1 of object 3 has Lambertian scattering properties
    # To set scatter properties, you need to first create "ScatteringSettings" by "CreateScatterModelSettings()" method.
    # And then assign is to object 3 by ChangeScatterModelSettings().
    ScatType_Lam = Object_3.CoatScatterData.GetFaceData(1).CreateScatterModelSettings(ZOSAPI.Editors.NCE.ObjectScatteringTypes.Lambertian)
    ScatType_Lam._S_Lambertian.ScatterFraction = 1
    Object_3.CoatScatterData.GetFaceData(1).ChangeScatterModelSettings(ScatType_Lam)
    Object_3.CoatScatterData.GetFaceData(1).NumberOfRays = 1
    #! [e21s08_py]
    
    #! [e21s09_py]
    # Make object 3 a volume scattering material
    # VolumePhysicsData includes all settings in Object Properties > VolumePhysics.
    # Use Photoluminescence model
    Object_3.VolumePhysicsData.Model = ZOSAPI.Editors.NCE.VolumePhysicsModelType.PhotoluminescenceModel
    Photo_setting = Object_3.VolumePhysicsData.ModelSettings._S_PhotoluminescenceModel
    # Use Standard Algorithm
    Photo_setting.BasicAlgorithm = False
    # Set absorption, emission and quantum yield files
    Photo_setting.AbsorptionFile = '_sample_3.ZAS'
    Photo_setting.EmissionFile = '_sample_3.ZES'
    Photo_setting.QuantumYield = '_sample_3.ZQE'
    # set efficiency spectrum to quantum yield
    Photo_setting.EfficiencySpectrum = ZOSAPI.Editors.NCE.EfficiencySpectrumType.QuantumYield
    # set photoluminescence parameters
    Photo_setting.ExtinctionCoefficient = 1E+05
    Photo_setting.ExtinctionWavelength = 0.47
    Photo_setting.PLDensity = 3.1E+017
    # Set Model to Ignore Mie Scattering
    Photo_setting.ConsiderMieScattering = False
    #! [e21s09_py]
    
    #! [e21s10_py]
    # Set 4th object as Standard Lens
    Object_4 = TheNCE.GetObjectAt(4)
    Typeset_StandardLens = Object_4.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.StandardLens)
    Object_4.ChangeType(Typeset_StandardLens)
    # Set positions
    Object_4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.ZPosition).DoubleValue = 0.9
    # To set solve for any cell, you need to first create a "ISolveData" by "CreateSolveType()" method.
    # And then assign it to the cell.
    Solve_ObjPick = Object_4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Material).CreateSolveType(ZOSAPI.Editors.SolveType.ObjectPickup)
    Solve_ObjPick._S_ObjectPickup.Object = 3
    # Set parameters
    Object_4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Material).SetSolveData(Solve_ObjPick)
    Object_4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par3).DoubleValue = 1.2
    Object_4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par4).DoubleValue = 1.2
    Object_4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par5).DoubleValue = 1.2
    Object_4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par6).DoubleValue = -1.2
    Object_4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par8).DoubleValue = 1.2
    Object_4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par9).DoubleValue = 1.2
    #! [e21s10_py]
    
    #! [e21s11_py]
    # Set 5th object as Detector Color
    Object_5 = TheNCE.GetObjectAt(5)
    Typeset_DetectorColor = Object_5.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.DetectorColor)
    Object_5.ChangeType(Typeset_DetectorColor)
    # Set positions, material and parameters
    Object_5.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.ZPosition).DoubleValue = 7
    Object_5.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Material).Value = 'ABSORB'
    Object_5.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par1).DoubleValue = 5
    Object_5.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par2).DoubleValue = 5
    Object_5.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par3).IntegerValue = 150
    Object_5.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par4).IntegerValue = 150
    Object_5.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par6).IntegerValue = 4
    Object_5.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par7).IntegerValue = 3
    #! [e21s11_py]

    #! [e21s12_py]
    # Open NSC Ray Trace tool and turn on Scatter NSC Rays and Ignore Errors
    RayTraceControl = TheSystem.Tools.OpenNSCRayTrace()
    RayTraceControl.SplitNSCRays = False
    RayTraceControl.ScatterNSCRays = True
    RayTraceControl.UsePolarization = False
    RayTraceControl.IgnoreErrors = True
    RayTraceControl.SaveRays = False
    
    # Trace rays and report the progress when it's running.
    # Note that, instead an RunAndWaitCompletion(), Run() is used so that
    # the code will just go on without waiting the tracing finishs.
    # We will check the progress of tracing by a while loop.
    # You can check the properties "Progress", which is percentage integer data (1-100)

    print('Starting Tracing...')
    RayTraceControl.ClearDetectors(0)
    RayTraceControl.Run()
    while (RayTraceControl.Progress < 100):
        sys.stdout.write("\r" + str(RayTraceControl.Progress) + '%')
        sys.stdout.flush()
        time.sleep(1)

    RayTraceControl.Close()
    print('\nFinished!')
    #! [e21s12_py]
    
    #! [e21s13_py]
    # Open two detector viewers for showing results in angle space and position space
    # Detector Viewer has its own settings interface: IAS_DetectorViewer.
    # Note that not all analyses have a specific settings interface.
    TheAnalysis = TheSystem.Analyses
    Det1 = TheAnalysis.New_DetectorViewer()
    Det_Set1 = Det1.GetSettings()
    
    Det_Set1.ShowAs = ZOSAPI.Analysis.DetectorViewerShowAsTypes.TrueColor
    Det_Set1.Smoothing = 3
    Det1.ApplyAndWaitForCompletion()

    Det2 = TheAnalysis.New_DetectorViewer()
    Det_Set2 = Det2.GetSettings()
    
    Det_Set2.ShowAs = ZOSAPI.Analysis.DetectorViewerShowAsTypes.TrueColor
    Det_Set2.Smoothing = 3
    Det_Set2.DataType = ZOSAPI.Analysis.DetectorViewerShowDataTypes.AngleSpace
    Det2.ApplyAndWaitForCompletion()
    #! [e21s13_py]

    TheSystem.SaveAs(TheApplication.SamplesDir + '\\API\\Python\\e21_White_LED_Phosphor.zos')


    
    # This will clean up the connection to OpticStudio.
    # Note that it closes down the server instance of OpticStudio, so you for maximum performance do not do
    # this until you need to.
    del zos
    zos = None
```
