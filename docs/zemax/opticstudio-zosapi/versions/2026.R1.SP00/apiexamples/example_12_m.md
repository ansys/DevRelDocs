# Example 12 - Matlab

```matlab
function [ r ] = MATLABStandalone_seq_system_explorer( args )

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

    %! [e12s01_m]
    % Select 6 wavelengths using a Gaussian Quadrature algorithm
    sysWave = TheSystem.SystemData.Wavelengths;
    sysWave.GaussianQuadrature(0.45, 0.65, ZOSAPI.SystemData.QuadratureSteps.S6);
    %! [e12s01_m]
    
    %! [e12s02_m]
    % Define fields using Paraxial Image Height
    sysField = TheSystem.SystemData.Fields;
    sysField.SetFieldType(ZOSAPI.SystemData.FieldType.ParaxialImageHeight);
    %! [e12s02_m]
    
    %! [e12s03_m]
    % Change field 1 to be X=1.0 and Y=2.0
    field1 = sysField.GetField(1);
    field1.X = 1.0;
    field1.Y = 2.0;
    %! [e12s03_m]

    % Inserts paraxial lens so there will not be an error when using ParaxialImageHeight
    TheSystem.SystemData.Aperture.ApertureValue = 10;
    s1 = TheSystem.LDE.GetSurfaceAt(1);
    s1_type = s1.GetSurfaceTypeSettings(ZOSAPI.Editors.LDE.SurfaceType.Paraxial);
    s1.ChangeType(s1_type);
    s1.Thickness = 100;
    
    %! [e12s04_m]
    % Change polarization axis reference to be Y
    sysPol = TheSystem.SystemData.Polarization;
    sysPol.Method = ZOSAPI.SystemData.PolarizationMethod.YAxisMethod;
    %! [e12s04_m]

    %! [e12s05_m]
    % Add Corning catalog and remove Schott catalog
    sysCat = TheSystem.SystemData.MaterialCatalogs;
    sysCat.AddCatalog('Corning');
    sysCat.RemoveCatalog('Schott');
    %! [e12s05_m]
    
    %! [e12s06_m]
    % Add Title and Notes
    sysTitleNotes = TheSystem.SystemData.TitleNotes;
    sysTitleNotes.Title = 'Add here the title';
    sysTitleNotes.Notes = 'Add here the notes';
    %! [e12s06_m]

    %! [e12s07_m]
    % As default Files choose: COATING.DAT, SCATTER_PROFILE.DAT, ABG_DATA.DAT 
    sysFiles = TheSystem.SystemData.Files;
    sysFiles.CoatingFile = 'COATING.DAT';
    sysFiles.ScatterProfile = 'SCATTER_PROFILE.DAT';
    sysFiles.ABgDataFile = 'ABG_DATA.DAT';
    TheSystem.SystemData.Files.ReloadFiles();
    %! [e12s07_m]
    
    %! [e12s08_m]
    % Change Lens Units to Inches
    sysUnits = TheSystem.SystemData.Units;
    sysUnits.LensUnits = ZOSAPI.SystemData.ZemaxSystemUnits.Inches;
    %! [e12s08_m]
    
    TheSystem.SaveAs(System.String.Concat(TheApplication.SamplesDir, '\API\Matlab\e12_seq_system_explorer.zos'));
    
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
