# Example 02 - Matlab

```matlab
function [ r ] = MATLABStandalone_NSC_ray_trace( args )

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
    TheSystem = TheApplication.PrimarySystem;
    sampleDir = TheApplication.SamplesDir;
    
    %! [e02s01_m]
    % Open file
    testFile = System.String.Concat(sampleDir, '\Non-sequential\Miscellaneous\Digital_projector_flys_eye_homogenizer.zos');
    TheSystem.LoadFile(testFile, false);
    %! [e02s01_m]
    
    %! [e02s02_m]
    % Create ray trace
    NSCRayTrace = TheSystem.Tools.OpenNSCRayTrace();
    NSCRayTrace.SplitNSCRays = true;
    NSCRayTrace.ScatterNSCRays = false;
    NSCRayTrace.UsePolarization = true;
    NSCRayTrace.IgnoreErrors = true;
    NSCRayTrace.SaveRays = false;
    NSCRayTrace.ClearDetectors(0);
  
    % Run ray trace
    NSCRayTrace.RunAndWaitForCompletion();
    NSCRayTrace.Close();
    %! [e02s02_m]
  
    % Non-sequential component editor
    TheNCE = TheSystem.NCE;
    
    %! [e02s03_m]
    % Get detector data
	data = NET.createArray('System.Double', TheNCE.GetDetectorSize(4));
    TheNCE.GetAllDetectorData(4, 1, TheNCE.GetDetectorSize(4), data);
    
    [~, rows, cols] = TheNCE.GetDetectorDimensions(4);
    % rotates and flips image to reflect ZOS orientation
    detectorData = flipud(rot90(reshape(data.double, rows, cols)));
    %! [e02s03_m]
    
    % Plot
    close all;
    figure('position', [50, 150, 700, 600])
    surf(detectorData);
    axis([1 100 1 100]);
    shading flat;
    xlabel('Column #');
    ylabel('Row #');
    title('Incoherent Illuminance [lm/cm^2]');
    colorbar;
    
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
