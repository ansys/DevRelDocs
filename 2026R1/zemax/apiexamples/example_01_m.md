# Example 01 - Matlab

```matlab
function [ r ] = MATLABStandalone_new_file_and_quickfocus( args )

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
    
    %! [e01s01_m]
    % Make new file
    testFile = System.String.Concat(sampleDir, '\API\Matlab\e01_new_file_and_quickfocus.zos');
    TheSystem.New(false);
    TheSystem.SaveAs(testFile);
    %! [e01s01_m]
    
    TheSystem.SystemData.MaterialCatalogs.AddCatalog('SCHOTT');
    
    %! [e01s02_m]
    % Aperture
    TheSystemData = TheSystem.SystemData;
    TheSystemData.Aperture.ApertureValue = 40;
    %! [e01s02_m]
    
    %! [e01s03_m]
    % Fields
    Field_1 = TheSystemData.Fields.GetField(1);
    NewField_2 = TheSystemData.Fields.AddField(0,5.0,1.0);
    %! [e01s03_m]
    
    %! [e01s04_m]
    % Wavelength preset
    slPreset = TheSystemData.Wavelengths.SelectWavelengthPreset(ZOSAPI.SystemData.WavelengthPreset.d_0p587);
    %! [e01s04_m]
    
    %! [e01s05_m]
    % Lens data 
    TheLDE = TheSystem.LDE;
    TheLDE.InsertNewSurfaceAt(2);
    TheLDE.InsertNewSurfaceAt(2);
    Surface_1 = TheLDE.GetSurfaceAt(1);
    Surface_2 = TheLDE.GetSurfaceAt(2);
    Surface_3 = TheLDE.GetSurfaceAt(3);
    %! [e01s05_m]
    
    %! [e01s06_m]
    % Changes surface cells in LDE
    Surface_1.Thickness = 50.0;
    Surface_1.Comment = 'Stop is free to move';
    Surface_2.Radius = 100.0;
    Surface_2.Thickness = 10.0;
    Surface_2.Comment = 'front of lens';
    Surface_2.Material = 'N-BK7';      
    Surface_3.Comment = 'rear of lens';      
    %! [e01s06_m]    
    
    %! [e01s07_m]
    % Solver
    Solver = Surface_3.RadiusCell.CreateSolveType(ZOSAPI.Editors.SolveType.FNumber);
    Solver.FNumber = 10;
    Surface_3.RadiusCell.SetSolveData(Solver);
    %! [e01s07_m]
    
    %! [e01s08_m]
    % QuickFocus
    quickFocus = TheSystem.Tools.OpenQuickFocus();
    quickFocus.Criterion = ZOSAPI.Tools.General.QuickFocusCriterion.SpotSizeRadial;
    quickFocus.UseCentroid = true;
    quickFocus.RunAndWaitForCompletion();
    quickFocus.Close();
    %! [e01s08_m]
    
    %! [e01s09_m]
    % Save and close
    TheSystem.Save();
    %! [e01s09_m]
    
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
