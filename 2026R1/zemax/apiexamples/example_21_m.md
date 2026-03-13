# Example 21 - Matlab

```matlab
function [ r ] = MATLABStandalone_White_LED_Phosphor( args )

if ~exist('args', 'var')
    args = [];
end

% Initialize the OpticStudio connection
TheApplication = InitConnection();
if isempty(TheApplication)
    % failed to initialize a connection
    r = [];
else
    try
        r = BeginApplication(TheApplication, args);
        CleanupConnection(TheApplication);
    catch err
        CleanupConnection(TheApplication);
        rethrow(err);
    end
end
end


function [r] = BeginApplication(TheApplication, args)

import ZOSAPI.*;

    % creates a new API directory
    apiPath = System.String.Concat(TheApplication.SamplesDir, '\API\Matlab');
    if (exist(char(apiPath)) == 0) mkdir(char(apiPath)); end;
    
    % Load a sample file
    TheSystem = TheApplication.PrimarySystem;
    
    %! [e21s01_m]
    % Create a new non-sequential file
    TheSystem.New(false);
    TheSystem.MakeNonSequential();
    % Add new catalog MISC
    TheSystem.SystemData.MaterialCatalogs.AddCatalog('MISC');
    % Set Wave #1 to 0.47 micron
    TheSystem.SystemData.Wavelengths.GetWavelength(1).Wavelength = 0.47;
    % Use lumens as the source unit
    TheSystem.SystemData.Units.SourceUnits = ZOSAPI.SystemData.ZemaxSourceUnits.Lumens;
    %! [e21s01_m]
    
    %! [e21s02_m]
    % Add 4 more objects
    TheNCE = TheSystem.NCE;
    TheNCE.AddObject();
    TheNCE.AddObject();
    TheNCE.AddObject();
    TheNCE.AddObject();
    %! [e21s02_m]
    
    %! [e21s03_m]
    % Set 1st object as a Source File
    Object_1 = TheNCE.GetObjectAt(1);
    Typeset_SourceFile = Object_1.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.SourceFile);
    Typeset_SourceFile.FileName1 = 'RAYFILE_LB_T67C_100K_190608_ZEMAX.DAT';
    Object_1.ChangeType(Typeset_SourceFile);
    Object_1.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par1).IntegerValue = 5;
    Object_1.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par2).IntegerValue = 1000;
    Object_1.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par3).DoubleValue = 2.485572;
    Object_1.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par8).DoubleValue = 0.47;
    Object_1.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par9).DoubleValue = 0.47;
    %! [e21s03_m]
    
    %! [e21s04_m]
    % Edit source data of object 1
    % SourcesData includes all the settings in Object Properties > Sources
    Object_1.SourcesData.PrePropagation = -0.2;
    Object_1.SourcesData.ArrayType = ZOSAPI.Editors.NCE.ArrayMode.Rectangular;
    Object_1.SourcesData.ArrayNumberX = 5;
    Object_1.SourcesData.ArrayNumberY = 5;
    %! [e21s04_m]
    
    %! [e21s05_m]
    % Set 2nd object as CAD Part: STEP/IGES/SAT
    Object_2 = TheNCE.GetObjectAt(2);
    Typeset_CADPartSTEPIGESSAT = Object_2.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.CADPartSTEPIGESSAT);
    Typeset_CADPartSTEPIGESSAT.FileName1 = 'LB_T67C_190608_GEOMETRY.STEP';
    Object_2.ChangeType(Typeset_CADPartSTEPIGESSAT);
    %! [e21s05_m]
    
    %! [e21s06_m]
    % Set Rays Ignore Object = Always for object 2
    % TypeData includes all settings in Object Properties > Type
    Object_2.TypeData.RaysIgnoreObject = ZOSAPI.Editors.NCE.RaysIgnoreObjectType.Always;
    %! [e21s06_m]

    %! [e21s07_m]
    % Set 3rd object as Cylinder Volume
    Object_3 = TheNCE.GetObjectAt(3);
    Typeset_CylinderVolume = Object_3.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.CylinderVolume);
    Object_3.ChangeType(Typeset_CylinderVolume);
    % Set positions, material and parameters
    Object_3.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.ZPosition).DoubleValue = 0.8;
    Object_3.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Material).Value = 'PMMA';
    Object_3.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par1).DoubleValue = 1.2;
    Object_3.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par2).DoubleValue = 0.1;
    Object_3.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par3).DoubleValue = 1.2;
    %! [e21s07_m]
    
    %! [e21s08_m]
    % Make Face 1 of object 3 has Lambertian scattering properties
    % To set scatter properties, you need to first create "ScatteringSettings" by "CreateScatterModelSettings()" method.
    % And then assign is to object 3 by ChangeScatterModelSettings().
    ScatType_Lam = Object_3.CoatScatterData.GetFaceData(1).CreateScatterModelSettings(ZOSAPI.Editors.NCE.ObjectScatteringTypes.Lambertian);
    ScatType_Lam.S_Lambertian_.ScatterFraction = 1;
    Object_3.CoatScatterData.GetFaceData(1).ChangeScatterModelSettings(ScatType_Lam);
    Object_3.CoatScatterData.GetFaceData(1).NumberOfRays = 1;
    %! [e21s08_m]

    %! [e21s09_m]
    % Make object 3 a volume scattering material
    % VolumePhysicsData includes all settings in Object Properties > VolumePhysics.
    % Use Photoluminescence model
    Object_3.VolumePhysicsData.Model = ZOSAPI.Editors.NCE.VolumePhysicsModelType.PhotoluminescenceModel;
    Photo_setting = Object_3.VolumePhysicsData.ModelSettings.S_PhotoluminescenceModel_;
    % Use Standard algorithm
    Photo_setting.BasicAlgorithm = false;
    % Set absorption, emission and quantum yield files
    Photo_setting.AbsorptionFile = '_sample_3.ZAS';
    Photo_setting.EmissionFile = '_sample_3.ZES';
    Photo_setting.QuantumYield = '_sample_3.ZQE';
    % Set efficiency spectrum to quantum yield
    Photo_setting.EfficiencySpectrum = ZOSAPI.Editors.NCE.EfficiencySpectrumType.QuantumYield;
    % Set photoluminescence parameters
    Photo_setting.ExtinctionCoefficient = 1E+05;
    Photo_setting.ExtinctionWavelength = 0.47;
    Photo_setting.PLDensity = 3.1E+17;
    % Disable Mie Model
    Photo_setting.ConsiderMieScattering = false;
    %! [e21s09_m]
    
    %! [e21s10_m]
    % Set 4th object as Standard Lens
    Object_4 = TheNCE.GetObjectAt(4);
    Typeset_StandardLens = Object_4.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.StandardLens);
    Object_4.ChangeType(Typeset_StandardLens);
    % Set positions
    Object_4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.ZPosition).DoubleValue = 0.9;
    % To set solve for any cell, you need to first create a "ISolveData" by "CreateSolveType()" method.
    % And then assign it to the cell.
    Solve_ObjPick = Object_4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Material).CreateSolveType(ZOSAPI.Editors.SolveType.ObjectPickup);
    Solve_ObjPick.S_ObjectPickup_.Object = 3;
    % Set parameters
    Object_4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Material).SetSolveData(Solve_ObjPick);
    Object_4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par3).DoubleValue = 1.2;
    Object_4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par4).DoubleValue = 1.2;
    Object_4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par5).DoubleValue = 1.2;
    Object_4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par6).DoubleValue = -1.2;
    Object_4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par8).DoubleValue = 1.2;
    Object_4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par9).DoubleValue = 1.2;
    %! [e21s10_m]
    
    %! [e21s11_m]
    % Set 5th object as Detector Color
    Object_5 = TheNCE.GetObjectAt(5);
    Typeset_DetectorColor = Object_5.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.DetectorColor);
    Object_5.ChangeType(Typeset_DetectorColor);
    % Set positions, material and parameters
    Object_5.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.ZPosition).DoubleValue = 7;
    Object_5.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Material).Value = 'ABSORB';
    Object_5.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par1).DoubleValue = 5;
    Object_5.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par2).DoubleValue = 5;
    Object_5.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par3).IntegerValue = 150;
    Object_5.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par4).IntegerValue = 150;
    Object_5.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par6).IntegerValue = 4;
    Object_5.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par7).IntegerValue = 3;
    %! [e21s11_m]
    
    %! [e21s12_m]
    % Open NSC Ray Trace tool and turn on Scatter NSC Rays and Ignore Errors
    RayTraceControl = TheSystem.Tools.OpenNSCRayTrace();
    RayTraceControl.SplitNSCRays = false;
    RayTraceControl.ScatterNSCRays = true;
    RayTraceControl.UsePolarization = false;
    RayTraceControl.IgnoreErrors = true;
    RayTraceControl.SaveRays = false;
	
    % Trace rays and report the progress when it's running.
    % Note that, instead an RunAndWaitCompletion(), Run() is used so that
    % the code will just go on without waiting the tracing finishs.
    % We will check the progress of tracing by a while loop.
    % You can check the properties "Progress", which is percentage integer data (1-100)
    
    fprintf('Starting Tracing...    \n');
    RayTraceControl.ClearDetectors(0);
    RayTraceControl.Run();
    n = 0;
    while (RayTraceControl.Progress ~= 100)
        pause(1);
        fprintf(repmat('\b',1,n));
        msg = char(System.String.Concat(num2str(RayTraceControl.Progress), '%%'));
        fprintf(msg);
        n = numel(msg) - 1;
    end
    RayTraceControl.Close();
    fprintf('\nFinished!\n');
    %! [e21s12_m]
    
    %! [e21s13_m]
    % Open two detector viewers for showing results in angle space and position space
    % Note that not all analyses have a specific settings interface.
    TheAnalysis = TheSystem.Analyses;
    Det1 = TheAnalysis.New_DetectorViewer();
    Det_Set1 = Det1.GetSettings();
    Det_Set1.ShowAs = ZOSAPI.Analysis.DetectorViewerShowAsTypes.TrueColor;
    Det_Set1.Smoothing = 3;
    Det1.ApplyAndWaitForCompletion();

    Det2 = TheAnalysis.New_DetectorViewer();
    Det_Set2 = Det2.GetSettings();
    Det_Set2.ShowAs = ZOSAPI.Analysis.DetectorViewerShowAsTypes.TrueColor;
    Det_Set2.Smoothing = 3;
    Det_Set2.DataType = ZOSAPI.Analysis.DetectorViewerShowDataTypes.AngleSpace;
    Det2.ApplyAndWaitForCompletion();
    %! [e21s13_m]
    
    TheSystem.SaveAs(System.String.Concat(TheApplication.SamplesDir, '\API\Matlab\e21_White_LED_Phosphor.zos'));
    
    r = [];
end

function app = InitConnection()

import System.Reflection.*;

% Find the installed version of OpticStudio.
zemaxData = winqueryreg('HKEY_CURRENT_USER', 'Software\Zemax', 'ZemaxRoot');
NetHelper = strcat(zemaxData, '\ZOS-API\Libraries\ZOSAPI_NetHelper.dll');
% Note -- uncomment the following line to use a custom NetHelper path
% NetHelper = 'C:\Users\Documents\Zemax\ZOS-API\Libraries\ZOSAPI_NetHelper.dll';
NET.addAssembly(NetHelper);

success = ZOSAPI_NetHelper.ZOSAPI_Initializer.Initialize();
% Note -- uncomment the following line to use a custom initialization path
% success = ZOSAPI_NetHelper.ZOSAPI_Initializer.Initialize('C:\Program Files\OpticStudio\');
if success == 1
    LogMessage(strcat('Found OpticStudio at: ', char(ZOSAPI_NetHelper.ZOSAPI_Initializer.GetZemaxDirectory())));
else
    app = [];
    return;
end

% Now load the ZOS-API assemblies
NET.addAssembly(AssemblyName('ZOSAPI_Interfaces'));
NET.addAssembly(AssemblyName('ZOSAPI'));

% Create the initial connection class
TheConnection = ZOSAPI.ZOSAPI_Connection();

% Attempt to create a Standalone connection

% NOTE - if this fails with a message like 'Unable to load one or more of
% the requested types', it is usually caused by try to connect to a 32-bit
% version of OpticStudio from a 64-bit version of MATLAB (or vice-versa).
% This is an issue with how MATLAB interfaces with .NET, and the only
% current workaround is to use 32- or 64-bit versions of both applications.
app = TheConnection.CreateNewApplication();
if isempty(app)
   HandleError('An unknown connection error occurred!');
end
if ~app.IsValidLicenseForAPI
    HandleError('License check failed!');
    app = [];
end

end

function LogMessage(msg)
disp(msg);
end

function HandleError(error)
ME = MXException(error);
throw(ME);
end

function  CleanupConnection(TheApplication)
% Note - this will close down the connection.

% If you want to keep the application open, you should skip this step
% and store the instance somewhere instead.
TheApplication.CloseApplication();
end



```
