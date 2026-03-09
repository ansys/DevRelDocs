# Example 24 - Matlab

```matlab
function [ r ] = MATLABStandalone_nsc_detectors( args )

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
    
    % Set up primary optical system
    TheSystem = TheApplication.CreateNewSystem(ZOSAPI.SystemType.NonSequential);
    sampleDir = TheApplication.SamplesDir;
    
    %! [e24s01_m]
    % Initializes NCE and loads surfaces
    % Inserts objects
    TheNCE = TheSystem.NCE;
    for a = 1:4
        TheNCE.InsertNewObjectAt(1);
    end
    %! [e24s01_m]
    
    TheSystem.SystemData.MaterialCatalogs.AddCatalog('SCHOTT');
    
    %! [e24s02_m]
    % Gets reference to specific object
    o1 = TheNCE.GetObjectAt(1);
    o2 = TheNCE.GetObjectAt(2);
    o3 = TheNCE.GetObjectAt(3);
    o4 = TheNCE.GetObjectAt(4);
    o5 = TheNCE.GetObjectAt(5);
    %! [e24s02_m]
    
    %! [e24s03_m]
    % Changes Object Type
    TheNCE.GetObjectAt(1).ChangeType(o1.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.SourceEllipse));
    o2.ChangeType(o2.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.AsphericSurface2));
    o3.ChangeType(o3.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.StandardLens));
    o4.ChangeType(o4.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.DetectorColor));
    o5.ChangeType(o5.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.DetectorRectangle));
    %! [e24s03_m]
    
    %! [e24s04_m]
    % Sets positions & materials
    TheNCE.GetObjectAt(2).XPosition = 1.5;
    TheNCE.GetObjectAt(2).ZPosition = 9.99;
    TheNCE.GetObjectAt(2).Material = 'ABSORB';
    %! [e24s04_m]
    o3.YPosition = 1.5;
    o3.ZPosition = 8.99;
    o3.Material = 'N-BK7';
    o4.ZPosition = 10;
    o5.RefObject = 4;
    o5.ZPosition = 1e-3;
    
    %! [e24s05_m]
    % Sets layout rays based on parameter number
    TheNCE.GetObjectAt(1).GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par1).IntegerValue = 100;
    % Sets analysis rays based on object data column
    TheNCE.GetObjectAt(1).ObjectData.NumberOfAnalysisRays = 1E6;
    %! [e24s05_m]
    o1.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par10).DoubleValue = 50;
    o1.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par11).DoubleValue = 50;
    
    o2.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par3).DoubleValue = 0.5;
    o2.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par4).DoubleValue = 1;
    o2.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par9).IntegerValue = 1;
    
    o4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par1).DoubleValue = 8.223;
    o4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par2).DoubleValue = 2.565; 
    o4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par3).IntegerValue = 200;
    o4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par4).IntegerValue = 150;
    
    o5_x = 10;
    o5_y = 12.23;
    o5.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par1).DoubleValue = o5_x; % 5
    o5.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par2).DoubleValue = o5_y; % 5
    o5.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par3).IntegerValue = 100;
    o5.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par4).IntegerValue = 100;
    
    %! [e24s06_m]
    % changes face type and coating properties
    TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(0).FaceIs = ZOSAPI.Editors.NCE.FaceIsType.Absorbing;
    TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(1).FaceIs = ZOSAPI.Editors.NCE.FaceIsType.ObjectDefault;
    TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(1).Coating = 'I.50';
    %! [e24s06_m]
    
    %! [e24s07_m]
    % changes scatter profile on face
    o3_Scatter = TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(2).CreateScatterModelSettings(ZOSAPI.Editors.NCE.ObjectScatteringTypes.Lambertian);
    o3_Scatter.S_Lambertian_.ScatterFraction = 0.5;
    TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(2).ChangeScatterModelSettings(o3_Scatter);
    TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(2).NumberOfRays = 2;
    %! [e24s07_m]
    
    %! [e24s08_m]
    % removes pixel interpolation for the detector
    o4.TypeData.UsePixelInterpolation = false;
    %! [e24s08_m]
    
    %! [e24s09_m]
    % Setup and run the ray trace
    NSCRayTrace = TheSystem.Tools.OpenNSCRayTrace();
    NSCRayTrace.SplitNSCRays = false;
    NSCRayTrace.ScatterNSCRays = true;
    NSCRayTrace.UsePolarization = false;
    NSCRayTrace.IgnoreErrors = true;
    NSCRayTrace.SaveRays = false;
    NSCRayTrace.ClearDetectors(0);
    
    NSCRayTrace.RunAndWaitForCompletion();
    NSCRayTrace.Close();
    %! [e24s09_m]
    
    % saves file to disk to expose all objects
    TheSystem.SaveAs(System.String.Concat(TheApplication.SamplesDir, '\API\Matlab\e24_nsc_detectors.zos'));
    
    tic;
    %! [e24s10_m]
    % Creates a new detector viewer analysis reference, changes to TrueColor for RGB extraction
    d4 = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.DetectorViewer);
    d4_settings = d4.GetSettings();
    d4_settings.ShowAs = ZOSAPI.Analysis.DetectorViewerShowAsTypes.TrueColor;
    d4_settings.Detector.SetDetectorNumber(4);
    d4.ApplyAndWaitForCompletion();
    d4_Results = d4.GetResults();
    d4_raw =  d4_Results.DataGridsRgb.Get(0);
    %! [e24s10_m]
    
    % Reads in values from NCE for detector settings
    obj = 4;
    x_half   = TheSystem.NCE.GetObjectAt(obj).GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par1).DoubleValue;
    y_half   = TheSystem.NCE.GetObjectAt(obj).GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par2).DoubleValue;
    x_pixels = double(TheSystem.NCE.GetObjectAt(obj).GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par3).IntegerValue);
    y_pixels = double(TheSystem.NCE.GetObjectAt(obj).GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par4).IntegerValue);
    
    %! [e24s11_m]
    % Creates System.Single[] buffers to store pixel data
    % required any time Interface Documentation shows a Single[] or Double[] output
    rData = NET.createArray('System.Single', (x_pixels * y_pixels));
    gData = NET.createArray('System.Single', (x_pixels * y_pixels));
    bData = NET.createArray('System.Single', (x_pixels * y_pixels));
    %! [e24s11_m]
    
    %! [e24s12_m]
    % reads values from detector color raw data
    % Loads RGB data into System.Single buffer
    d4_raw.FillValues((x_pixels * y_pixels), rData, gData, bData);
    % Converts buffer to RGB array; rotates & resizes RGB array
    dData = zeros(y_pixels, x_pixels, 3) - 1;
    dData(:,:,1) = rot90(reshape(rData.double ./ 255, x_pixels, y_pixels));
    dData(:,:,2) = rot90(reshape(gData.double ./ 255, x_pixels, y_pixels));
    dData(:,:,3) = rot90(reshape(bData.double ./ 255, x_pixels, y_pixels));
    %! [e24s12_m]
    
    % Plots detector color values
    close all
    figure
    imshow(dData,'X',[-x_half x_half],'Y',[-y_half y_half])
    
    toc
    %! [e24s13_m]
    % changes default values for Detector Viewer
    % pltos the Incoherent Irradiance in False Color
    d5 = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.DetectorViewer);   
    d5_set = d5.GetSettings();
    d5_set.Detector.SetDetectorNumber(5);
    d5_set.ShowAs = ZOSAPI.Analysis.DetectorViewerShowAsTypes.FalseColor;
    d5.ApplyAndWaitForCompletion()
    d5_results = d5.GetResults();
    d5_values =  d5_results.GetDataGrid(0).Values.double;
    %! [e24s13_m]
    
    figure
    imagesc(flipud(d5_values),'X',[-o5_x o5_x],'Y',[-o5_y o5_y])
    fprintf('The max value is %4.2f\n',max(max(d5_values)));
    colormap('jet');
    colorbar;
    axis equal;
    
    toc
    %! [e24s14_m]
    % saves current system in memory
    TheSystem.Save();
    %! [e24s14_m]
    

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
