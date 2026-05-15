# Example 14 - Matlab

```matlab
function [ r ] = MATLABStandalone_seq_tolerance( args )

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
    
    %! [e14s01_m]
    % Open Double Gauss sample file
    samplesFolder = TheApplication.SamplesDir;
    DGfile = System.String.Concat(samplesFolder, '\Sequential\Objectives\Double Gauss 28 degree field.zos');
    TheSystem.LoadFile(DGfile, false);
    %! [e14s01_m]
    
    %! [e14s02_m]
    % Set up the Tolerance Wizard and run it
    tWiz = TheSystem.TDE.SEQToleranceWizard;
    % Specify surface tolerances
    tWiz.SurfaceRadius = 0.1;
    tWiz.SurfaceThickness = 0.1;
    tWiz.SurfaceDecenterX = 0.1;
    tWiz.SurfaceDecenterY = 0.1;
    tWiz.SurfaceTiltX = 0.2;
    tWiz.SurfaceTiltY = 0.2;
    % Specify element tolerances
    tWiz.ElementDecenterX = 0.1;
    tWiz.ElementDecenterY = 0.1;
    tWiz.ElementTiltXDegrees = 0.2;
    tWiz.ElementTiltYDegrees = 0.2;
    % Specify tolerances not to be used
    tWiz.IsSurfaceSandAIrregularityUsed = false;
    tWiz.IsIndexUsed = false;
    tWiz.IsIndexAbbePercentageUsed = false;
    % Select OK
    tWiz.OK();
    %! [e14s02_m]
    
    %! [e14s03_m]
    % Create a "Double Gauss" folder in the Samples folder
    dirLoc = System.String.Concat(samplesFolder, '\API\Matlab\e14_seq_tolerance');
    if (exist(char(dirLoc)) == 0) mkdir(char(dirLoc)); end;
    % Save a copy of the file in the Double Gauss folder
    fileNameSeq = System.String.Concat(dirLoc, '\Double Gauss (seq).zos');
    TheSystem.SaveAs(fileNameSeq);
    %! [e14s03_m]
    
    %! [e14s04_m]
    % Set up the Tolerancing analysis and run it
    tol = TheSystem.Tools.OpenTolerancing();
    % Select Sensitivity mode
    tol.SetupMode = ZOSAPI.Tools.Tolerancing.SetupModes.Sensitivity;
    % Select Criterion and related settings 
    tol.Criterion = ZOSAPI.Tools.Tolerancing.Criterions.RMSSpotRadius;
    tol.CriterionSampling = 3;
    tol.CriterionComp = ZOSAPI.Tools.Tolerancing.CriterionComps.OptimizeAll_DLS;
    tol.CriterionCycle = 2;
    tol.CriterionField = ZOSAPI.Tools.Tolerancing.CriterionFields.UserDefined;
    % Select the number or MC runs and files to save
    tol.NumberOfRuns = 20;
    tol.NumberToSave = 20;
    % Run the Tolerancing analysis
    tol.RunAndWaitForCompletion();
    tol.Close();
    %! [e14s04_m]
    
    %! [e14s05_m]
    % Convert file to Non-sequential mode
    convertNSmode = TheSystem.Tools.OpenConvertToNSCGroup();
    convertNSmode.ConvertFileToNSC = true;
    convertNSmode.RunAndWaitForCompletion();
    convertNSmode.Close();
    % Save the Non-sequential file to the Double Gauss folder
    fileNameNS = System.String.Concat(dirLoc, '\Double Gauss (NS).zos');
    TheSystem.SaveAs(fileNameNS);
    %! [e14s05_m]
    
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
