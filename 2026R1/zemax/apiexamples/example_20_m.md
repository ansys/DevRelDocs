# Example 20 - Matlab

```matlab
function [ r ] = MATLABStandalone_export_CAD_File( args )

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
    
    % Load a non-sequential file
    TheSystem.LoadFile(System.String.Concat(TheApplication.SamplesDir, '\\Non-Sequential\\Miscellaneous\\Digital_projector_flys_eye_homogenizer.zos'), false);
    
    %! [e20s01_m]
	% Get interface of IExportCAD
	ToolExportCAD = TheSystem.Tools.OpenExportCAD();
	%! [e20s01_m]
    
    %! [e20s02_m]
	% default option settings
	ToolExportCAD.FirstObject = 1;
	ToolExportCAD.LastObject = 8;
	ToolExportCAD.RayLayer = 1;
	ToolExportCAD.LensLayer = 0;
	ToolExportCAD.DummyThickness = 1;
	ToolExportCAD.SplineSegments = ZOSAPI.Tools.General.SplineSegmentsType.N_032;
	ToolExportCAD.FileType = ZOSAPI.Tools.General.CADFileType.STEP;
	ToolExportCAD.Tolerance = ZOSAPI.Tools.General.CADToleranceType.N_TenEMinus4;
	ToolExportCAD.SetCurrentConfiguration();
	% For other configuration choices, use following methods.
	%ToolExportCAD.SetConfigurationAllAtOnce();
	%ToolExportCAD.SetConfigurationAllByFile();
	%ToolExportCAD.SetConfigurationAllByLayer();
	%ToolExportCAD.SetSingleConfiguration(1);
	%! [e20s02_m]
    
    %! [e20s03_m]
	% default check boxes settings
	ToolExportCAD.SurfacesAsSolids = true;
	ToolExportCAD.ScatterNSCRays = false;
	ToolExportCAD.ExportDummySurfaces = false;
	ToolExportCAD.SplitNSCRays = false;
	ToolExportCAD.UsePolarization = false;
	%! [e20s03_m]
    
    %! [e20s04_m]
	% set output file name
	ToolExportCAD.OutputFileName = System.String.Concat(TheApplication.ObjectsDir, '\\CAD Files\\API_CADexport_sample.step');
	%! [e20s04_m]
    
    %! [e20s05_m]
	% Starting exporting
	% Run with a 3 minites timeout
	fprintf('Starting exporting...\n');
    ToolExportCAD.Run();
	[runstatus] = ToolExportCAD.WaitWithTimeout(3 * 60);
    
    % Report the status
    switch (runstatus)
        case ZOSAPI.Tools.RunStatus.Completed
            fprintf('Completed!\n');
        case ZOSAPI.Tools.RunStatus.FailedToStart
            fprintf('Failed To Start!\n');
        case ZOSAPI.Tools.RunStatus.InvalidTimeout
            cfprintf('Invalid Timeout!\n');
        case ZOSAPI.Tools.RunStatus.TimedOut
            fprintf('Timed Out!\n');
    end
    
    fprintf('Progress: %i\n', ToolExportCAD.Progress);
    
	% If the exporting is not completed and can be cancelled, cancel the work
    if (runstatus ~= ZOSAPI.Tools.RunStatus.Completed && ToolExportCAD.CanCancel)
        ToolExportCAD.Cancel();
    end

	% Close the tool
	ToolExportCAD.Close();
	%! [e20s05_m]
    
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
