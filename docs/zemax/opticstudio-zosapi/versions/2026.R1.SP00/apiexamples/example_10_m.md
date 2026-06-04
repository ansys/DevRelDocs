# Example 10 - Matlab

```matlab
function [ r ] = MATLABStandalone_10_NSC_ZRD_filter_string( args )

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
    
	%! [e10s01_m]
    % Open File, Save to New Name
    file = '\\Non-Sequential\\Ray Splitting\\Beam splitter.zos';
    TheSystem.LoadFile(System.String.Concat(TheApplication.SamplesDir, file), false);
    TheSystem.SaveAs(System.String.Concat(TheApplication.SamplesDir, '\API\Matlab\e10_NSC_ray_trace.zos'));
	%! [e10s01_m]
    
    %! [e10s02_m]
    % Run an NSC Ray Trace, Save .zrd file
    NSCRayTrace = TheSystem.Tools.OpenNSCRayTrace();  % Open NSC RayTrace tool
    NSCRayTrace.ClearDetectors(0);  % Clear all detectors
    % Set up RayTrace tool
    NSCRayTrace.IgnoreErrors = true;
    NSCRayTrace.SaveRays = true;
    NSCRayTrace.SaveRaysFile = 'e10_API_Raytrace.ZRD';  % Saves to same directory as lens file
    NSCRayTrace.RunAndWaitForCompletion();
    NSCRayTrace.Close();
    %! [e10s02_m]
    
    %! [e10s03_m]
    % Open Detector Viewer, view previously saved .zrd file
    DetectorView = TheSystem.Analyses.New_DetectorViewer();
    DetectorView_Settings = DetectorView.GetSettings();
    DetectorView_Settings.RayDatabaseFilename = 'e10_API_Raytrace.ZRD';
    DetectorView_Settings.ShowAs = ZOSAPI.Analysis.DetectorViewerShowAsTypes.FalseColor;
    DetectorView_Settings.Filter = 'X_HIT(2, 4)';  % Detector will only display rays which hit object 2 exactly 4 times

    DetectorView.ApplyAndWaitForCompletion(); % Apply Settings to Detector Viewer
    %! [e10s03_m]
    
    %! [e10s04_m]
    % Retrieve detector data and detector information
    TheNCE = TheSystem.NCE;
    [hits_bool_return, total_hits] = TheNCE.GetDetectorData(4, -3, 0);  % Object Number=4, Pix -3 & Data=0 (total hits)
    [flux_bool_return, total_flux] = TheNCE.GetDetectorData(4, 0, 0);  % Object Number=4, Pix=0 & Data=0 (total flux)
    [dims_bool_return, X_detectorDims, Y_detectorDims] = TheNCE.GetDetectorDimensions(4);  % get number of pixels in X, Y
    fprintf('total hits = %i\ntotal flux = %10.8f\n', total_hits, total_flux);
    
    length = X_detectorDims * Y_detectorDims + 1;
    pix = zeros(length);
    for i = 1:length
        [pix_bool, pix(i)] = TheNCE.GetDetectorData(4, int32(i), 0);
    end 
    %! [e10s04_m]
    
    %! [e10s05_m]
    % Save Ray Path Analysis to Text File
    if TheApplication.LicenseStatus == ZOSAPI.LicenseStatusType.PremiumEdition
        RayPath = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.PathAnalysis);
        RayPath_settings = RayPath.GetSettings();
        RayPath_settings.RayDatabaseFile = 'e10_API_Raytrace.ZRD';
        RayPath.ApplyAndWaitForCompletion();
        Rays = RayPath.GetResults();
        Rays.GetTextFile(System.String.Concat(TheApplication.SamplesDir, '\API\Matlab\e10_RayPathAnalysis.txt'));
    else
        fprintf('\nThe RayPathAnalysis is a premium feature only\n');
    end
    %! [e10s05_m]
    
    % Save!
	TheSystem.Save();
    
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
