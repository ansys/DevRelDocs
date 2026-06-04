# Example 17 - Matlab

```matlab
function [ r ] = MATLABStandalone_NSC_BulkScatter( args )

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
    
    %! [e17s01_m]
    % Create New File
    TheSystem.New(false);
    TheSystem.MakeNonSequential();
    %! [e17s01_m]
    
    TheSystem.SystemData.MaterialCatalogs.AddCatalog('SCHOTT');
    
    %! [e17s02_m]
    % Define Path Locations
    SamplesFolder = TheApplication.SamplesDir;
    SampleFile = System.String.Concat(SamplesFolder, '\API\Matlab\e17_NSC_BulkScatter.zos');
    TheSystem.SaveAs(SampleFile)
    %! [e17s02_m]
    
    %! [e17s03_m]
    % Non-sequential component editor
    TheNCE = TheSystem.NCE;
    Object_1 = TheNCE.InsertNewObjectAt(1);
    Object_2 = TheNCE.InsertNewObjectAt(2);
    Object_3 = TheNCE.GetObjectAt(3);
    %! [e17s03_m]
    
    %! [e17s04_m]
    % Source point
    oType_1 = Object_1.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.SourcePoint);
    Object_1.ChangeType(oType_1);
    Source1_data = Object_1.ObjectData;
    Source1_data.NumberOfLayoutRays = 3;
    Source1_data.NumberOfAnalysisRays = 1000000;
    %! [e17s04_m]
    
    %! [e17s05_m]
    % Rectangular Volume
    % Scattering Properties
    % Draw:opacity set to 50%
    oType_2 = Object_2.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.RectangularVolume);
    Object_2.ChangeType(oType_2);
    Object_2.ZPosition = 2;
    Object_2.Material = 'N-BK7';
    RectVolume2_data = Object_2.ObjectData;
    RectVolume2_data.X1HalfWidth = 12;
    RectVolume2_data.Y1HalfWidth = 12;
    RectVolume2_data.ZLength = 40;
    RectVolume2_data.X2HalfWidth = 12;
    RectVolume2_data.Y2HalfWidth = 12;
    RectVolume2_volphysdata = Object_2.VolumePhysicsData;
    RectVolume2_volphysdata.Model = ZOSAPI.Editors.NCE.VolumePhysicsModelType.AngleScattering;
    RectVolume2_volphysdata.ModelSettings.S_AngleScattering_.MeanPath = 5;
    RectVolume2_volphysdata.ModelSettings.S_AngleScattering_.Angle = 30;
    RectVolume2_DrawData = Object_2.DrawData;
    RectVolume2_DrawData.Opacity = ZOSAPI.Common.ZemaxOpacity.P50;
    %! [e17s05_m]
    
    %! [e17s06_m]
    % Detector Rectangle
    oType_3 = Object_3.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.DetectorRectangle);
    Object_3.RefObject = 2;
    Object_3.ZPosition = 42;
    Object_3.Material = 'ABSORB';
    Object_3.ChangeType(oType_3);
    DetRect3_data = Object_3.ObjectData;
    DetRect3_data.XHalfWidth = 15;
    DetRect3_data.YHalfWidth = 15;
    DetRect3_data.NumberXPixels = 25;
    DetRect3_data.NumberYPixels = 25;
    DetRect3_data.DataType = 0;
    DetRect3_data.Color = 2;
    DetRect3_data.Smoothing = 1;
    %! [e17s06_m]
    
    %! [e17s07_m]
    % Open a shaded model
    analysis = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.NSCShadedModel);
    analysis.WaitForCompletion();
    analysisSettings = analysis.GetSettings();
    cfgFile = char(System.String.Concat(SamplesFolder, '\API\Matlab\e17_NSC_BulkScatter.cfg'));
    analysisSettings.SaveTo(cfgFile);  % Save current settings to a cfg file
    % MODIFYSETTINGS are defined in ZPL help files: The Programming Tab > About the ZPL > Keywords
    % need to manually turn on SCATTERING in shaded model to see bulk scattering
    analysisSettings.ModifySettings(cfgFile, 'SHA_ROTX', '20');
    analysisSettings.ModifySettings(cfgFile, 'SHA_ROTY', '-20');
    analysisSettings.ModifySettings(cfgFile, 'SHA_ROTZ', '30');
    analysisSettings.LoadFrom(cfgFile);  % Load in the newly modified settings
    % If you want to overwrite your default CFG, save over it with newly modified CFG file:
    %  CFG_fullname = System.String.Concat(getenv('Temp'), '\Documents\Zemax\Configs\LSN.CFG');
    %  copyfile(char(cfgFile), char(CFG_fullname));
    analysis.ApplyAndWaitForCompletion();  % Run analysis
    %! [e17s07_m]
    
    %! [e17s08_m]
    % Open a detector viewer
    det_analysis = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.DetectorViewer);
    det_analysisSettings = det_analysis.GetSettings();
    det_cfgFile = System.String.Concat(SamplesFolder, '\API\Matlab\e17_DetectorViewer.cfg');
    det_analysisSettings.SaveTo(det_cfgFile);
    det_analysisSettings.ModifySettings(det_cfgFile, 'DVW_SHOW', '2');
    det_analysisSettings.ModifySettings(det_cfgFile, 'DVW_SMOOTHING', '1');
    det_analysisSettings.LoadFrom(det_cfgFile);
    det_analysis.ApplyAndWaitForCompletion();
    %! [e17s08_m]
    
    %! [e17s09_m]
    % Run a ray trace
    NSCRayTrace = TheSystem.Tools.OpenNSCRayTrace();
    NSCRayTrace.SplitNSCRays = false;
    NSCRayTrace.ScatterNSCRays = true;
    NSCRayTrace.UsePolarization = false;
    NSCRayTrace.IgnoreErrors = true;
    NSCRayTrace.SaveRays = false;
    NSCRayTrace.ClearDetectors(0);
    NSCRayTrace.RunAndWaitForCompletion();
    NSCRayTrace.Close();
    %! [e17s09_m]
    
    TheSystem.SaveAs(SampleFile);
    
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
