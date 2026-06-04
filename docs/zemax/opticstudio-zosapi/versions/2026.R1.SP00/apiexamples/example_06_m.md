# Example 06 - Matlab

```matlab
function [ r ] = MATLABStandalone_nsc_phase( args )

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
    
    %! [e06s01_m]
    % Create new non-sequential file
    TheSystem = TheApplication.CreateNewSystem(ZOSAPI.SystemType.NonSequential);
    TheNCE = TheSystem.NCE;
    %! [e06s01_m]
    
    %! [e06s02_m]
    % inserts objects and changes type
    TheNCE.InsertNewObjectAt(2);
    o1 = TheNCE.GetObjectAt(1);
    o2 = TheNCE.GetObjectAt(2);
    o1.ChangeType(o1.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.SourcePoint));
    o2.ChangeType(o2.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.DetectorRectangle));
    %! [e06s02_m]
    
    %! [e06s03_m]
    % modify object's cell values in the NCE
    o1.ObjectData.NumberOfAnalysisRays = 1e6;
    o1.ObjectData.NumberOfLayoutRays = 10;
    o1.ObjectData.ConeAngle = 2.5;
    
    o2.ZPosition = 1;
    o2.ObjectData.XHalfWidth = 0.1;
    o2.ObjectData.YHalfWidth = 0.1;
    o2.ObjectData.NumberXPixels = 100;
    o2.ObjectData.NumberYPixels = 100;
    %! [e06s03_m]
    
    %! [e06s04_m]
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
    %! [e06s04_m]
    
    % sets up plot
    close all;
    figure('OuterPosition',[0, 250, 1200, 500])
    subplot(1, 2, 1);
    axis('square');
    colormap jet;
    det = 2;
    
    %! [e06s05_m]
    % extracts the irradiance data from detector
    irradiance = flipud(TheSystem.NCE.GetAllDetectorDataSafe(det, 1).double);
    imagesc(irradiance);
    %! [e06s05_m]
    
    % irradiance plot formatting
    colorbar;
    title('Incoherent Irradiance');
    set(gca, 'XTick', '');
    set(gca, 'YTick', '');
    
    subplot(1, 2, 2);
    
    %! [e06s06_m]
    % Calculates phase data from Er & Ei
    real = TheSystem.NCE.GetAllCoherentDataSafe(det, ZOSAPI.Editors.NCE.DetectorDataType.Real).double;
    imag = TheSystem.NCE.GetAllCoherentDataSafe(det ,ZOSAPI.Editors.NCE.DetectorDataType.Imaginary).double;
    phase = flipud(atan2(imag , real) * 180 / pi);
    imagesc(phase)
    %! [e06s06_m]
    
    % phase plot formatting
    colorbar;
    title('Phase');
    set(gca, 'XTick', '');
    set(gca, 'YTick', '');
    
    TheSystem.SaveAs(System.String.Concat(TheApplication.SamplesDir, '\API\Matlab\e06_nsc_phase.zos'));
    
    
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
