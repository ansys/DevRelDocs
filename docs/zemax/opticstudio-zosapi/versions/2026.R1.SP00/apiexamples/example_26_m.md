# Example 26 - Matlab

```matlab
function [ r ] = MATLABStandalone_modify_opticstudio_preferences( args )

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

    TheSystem = TheApplication.PrimarySystem;

    % Add your custom code here...

    %! [e26s01_m]
    % Define variables for OpticStudio Preferences
    Preference = TheApplication.Preferences;
    PrefG = Preference.General;
    Logic = {'False', 'True'};
    %! [e26s01_m]

    %! [e26s02_m]
    % Read and print the initial settings
    fprintf('\n===Check initial Settings===\n')
    fprintf('DateTimeFormat: %s\n', char(PrefG.DateTimeFormat))
    fprintf('Language: %s\n', char(PrefG.Language))
    fprintf('ZMXFileEncoding: %s\n', char(PrefG.ZMXFileEncoding))
    fprintf('TXTFileEncoding: %s\n', char(PrefG.TXTFileEncoding))
    fprintf('UseSessionFiles: %s\n', Logic{PrefG.UseSessionFiles+1})
    fprintf('IncludeCalculatedDataInsession: %s\n', Logic{PrefG.IncludeCalculatedDataInSession+1})
    fprintf('UpdateMostRecentlyUsedList: %s\n', Logic{PrefG.UpdateMostRecentlyUsedList+1})
    fprintf('UserPrefrences: %s\n', char(PrefG.UserPreferences))
    %! [e26s02_m]

    %! [e26s03_m]
    % Reset the settings to default
    Preference.ResetToDefaults();
    %! [e26s03_m]

    %! [e26s04_m]
    % Set and print the settings
    PrefG.DateTimeFormat = ZOSAPI.Preferences.DateTimeType.DateTime;
    PrefG.Language = ZOSAPI.Preferences.LanguageType.English;
    PrefG.ZMXFileEncoding = ZOSAPI.Preferences.EncodingType.ANSI;
    PrefG.TXTFileEncoding = ZOSAPI.Preferences.EncodingType.ANSI;
    PrefG.UseSessionFiles = false;
    PrefG.IncludeCalculatedDataInSession = false;
    PrefG.UpdateMostRecentlyUsedList = false;
    PrefG.UserPreferences = 'Never gonna make you cry, never gonna say goodbye';
    %! [e26s04_m]
    
    fprintf('\n===Final Settings===\n')
    fprintf('DateTimeFormat: %s\n', char(PrefG.DateTimeFormat))
    fprintf('Language: %s\n', char(PrefG.Language))
    fprintf('ZMXFileEncoding: %s\n', char(PrefG.ZMXFileEncoding))
    fprintf('TXTFileEncoding: %s\n', char(PrefG.TXTFileEncoding))
    fprintf('UseSessionFiles: %s\n', Logic{PrefG.UseSessionFiles+1})
    fprintf('IncludeCalculatedDataInsession: %s\n', Logic{PrefG.IncludeCalculatedDataInSession+1})
    fprintf('UpdateMostRecentlyUsedList: %s\n', Logic{PrefG.UpdateMostRecentlyUsedList+1})
    fprintf('UserPreferences: %s\n', char(PrefG.UserPreferences))
    

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
% success = ZOSAPI_NetHelper.ZOSAPI_Initializer.Initialize('C:\Program Files\Zemax OpticStudio\');
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

% Define a Preferences File.
% Preferences file is defined on the IZOSAPIConnection interface (prior to connecting to the API)
% If no PreferencesFile is defined it will use the default OpticStudio.CFG file however changes will not persist between sessions. 
% If a PreferencesFile is defined, then any changes will save automatically. 
%! [e26s05_m]
fprintf('\n===PreferencesFile===\n')
cfgFile = 'C:\Users\Documents\Zemax\Configs\OpticStudio.CFG';
if exist(cfgFile, 'file')
    TheConnection.PreferencesFile = cfgFile;
    fprintf('PreferencesFile: %s\n', char(TheConnection.PreferencesFile))
else
	fprintf('Default OpticStudio.CFG preferences used\n');
end
%! [e26s05_m]

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
ME = MException('zosapi:HandleError', error);
throw(ME);
end

function  CleanupConnection(TheApplication)
% Note - this will close down the connection.

% If you want to keep the application open, you should skip this step
% and store the instance somewhere instead.
TheApplication.CloseApplication();
end



```
