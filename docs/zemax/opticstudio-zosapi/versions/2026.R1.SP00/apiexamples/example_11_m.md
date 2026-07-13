# Example 11 - Matlab

```matlab
function [ r ] = MATLABStandalone_basic_seq( args )

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
    
	%! [e11s01_m]
    % Create New Sequential File
    TheSystem.New(false);
    % Name File
    fileName = System.String.Concat(TheApplication.SamplesDir, '\API\Matlab\e11_basic_seq.zos');
    TheSystem.SaveAs(fileName);
    %! [e11s01_m]

    %! [e11s02_m]
    % Changing System Explorer Settings
    % Set Aperture
    TheSystemData = TheSystem.SystemData;
    TheSystemData.Aperture.ApertureValue = 20;
    TheSystem.SystemData.MaterialCatalogs.AddCatalog('SCHOTT');

    % Set Apodization Type to Gaussian, and set apodization factor to 1
    TheSystemData.Aperture.ApodizationType = ZOSAPI.SystemData.ZemaxApodizationType.Gaussian;
    TheSystemData.Aperture.ApodizationFactor = 1;
    % Set Wavelength
    TheSystemData.Wavelengths.SelectWavelengthPreset(ZOSAPI.SystemData.WavelengthPreset.FdC_Visible);
    %! [e11s02_m]
    
    %! [e11s03_m]
    % Insert and Track New Surfaces, set STOP to surface 1
    TheLDE = TheSystem.LDE;
    TheLDE.InsertNewSurfaceAt(1);
    TheLDE.InsertNewSurfaceAt(1);
    TheLDE.InsertNewSurfaceAt(1);
    Surf_1 = TheLDE.GetSurfaceAt(1);
    Surf_2 = TheLDE.GetSurfaceAt(2);
    Surf_3 = TheLDE.GetSurfaceAt(3);
    Surf_4 = TheLDE.GetSurfaceAt(4);
    Surf_1.IsStop = true;
    % Set some baseline parameters
    Surf_1.Thickness = 5;
    Surf_2.Thickness = 5;
    Surf_2.Radius = 100;
    Surf_2.Material = 'N-BK7';
    Surf_3.Thickness = 3;
    Surf_3.Radius = -30;
    Surf_3.Material = 'F2';
    Surf_4.Radius = -80;
    %! [e11s03_m]
    
    %! [e11s04_m]
    % Set system lens units to inches, scale all values with Scale Lens tool
    unit = TheSystemData.Units.LensUnits;  % For demonstration only. This file is new, so it has default units mm.
    ScaleLens = TheSystem.Tools.OpenScale();  % Open Scale Lens tool
    % Apply Tool Settings
    ScaleLens.ScaleByUnits = true;
    ScaleLens.ScaleToUnit = ZOSAPI.Tools.General.ScaleToUnits.Inches;
    ScaleLens.RunAndWaitForCompletion();
    ScaleLens.Close();
    %! [e11s04_m]
    
    %! [e11s05_m]
    % Add Rectangular Aperture to Surface 1
    % Get surface 1, create aperture settings
    Surf_1 = TheSystem.LDE.GetSurfaceAt(1);
    rAperture = Surf_1.ApertureData.CreateApertureTypeSettings(ZOSAPI.Editors.LDE.SurfaceApertureTypes.RectangularAperture);
    % Set aperture size
    rAperture.S_RectangularAperture_.XHalfWidth = 0.1;
    rAperture.S_RectangularAperture_.YHalfWidth = 0.1;
    % Apply aperture settings to surface 1
    Surf_1.ApertureData.ChangeApertureTypeSettings(rAperture);
    %! [e11s05_m]
    
    %! [e11s06_m]
    % Run Quick Focus
    QuickFocus = TheSystem.Tools.OpenQuickFocus();
    QuickFocus.RunAndWaitForCompletion();
    QuickFocus.Close();
    %! [e11s06_m]
    
    %! [e11s07_m]
    % Open Universal Plot of RMS Spot Size vs Surface3 Thickness
    UnivPlot = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.UniversalPlot1D);
    UnivPlot_Settings = UnivPlot.GetSettings();
    fprintf('Universal Plot has analysis specific settings? %i\n', UnivPlot.HasAnalysisSpecificSettings)
    % Above is False; Universal Plot Settings must be changed via ModifySettings (changing a config (.cfg) file)
    cfg = System.String.Concat(TheApplication.ZemaxDataDir, '\Configs\UNI.CFG');
	UnivPlot_Settings.Save(); % Create new .cfg file, named "UNI.CFG" in \Configs\ folder
    UnivPlot_Settings.ModifySettings(cfg, 'UN1_SURFACE', num2str(TheSystem.LDE.NumberOfSurfaces() - 2));
    UnivPlot_Settings.ModifySettings(cfg, 'UN1_STARTVAL', num2str(Surf_4.Thickness - 0.4 / 25.4));  % Change universal plot settings
    UnivPlot_Settings.ModifySettings(cfg, 'UN1_STOPVAL', num2str(Surf_4.Thickness + 0.1 / 25.4));
    UnivPlot_Settings.ModifySettings(cfg, 'UN1_STEPS', num2str(20));
    UnivPlot_Settings.ModifySettings(cfg, 'UN1_PAR1', num2str(10));
    UnivPlot_Settings.ModifySettings(cfg, 'UN1_OPERAND', 'RSRE');
    % For ModifySettings keycodes (UN1_STARTVAL, UN1_STEPS, etc.), see MODIFYSETTINGS page in ZPL>keywords help files
    % LoadFrom allows you to load any CFG file, not just default; not available via GUI
    UnivPlot_Settings.LoadFrom(cfg);  % Load in the Universal Plot Settings
    %! [e11s07_m]
    
    %! [e11s08_m]
    % Open Spot Diagram to See Result!
    newSpot = TheSystem.Analyses.New_StandardSpot();
    fprintf('Spot has analysis specific settings? %i\n', newSpot.HasAnalysisSpecificSettings); % True; no ModifySettings
    %Console.WriteLine("Spot has analysis specific settings? " + newSpot.HasAnalysisSpecificSettings.ToString());  // 
    spotSet = newSpot.GetSettings();
    spotSet.RayDensity = 15;
    newSpot.ApplyAndWaitForCompletion();
    %! [e11s08_m]
    
    fprintf('Finished!\n');
    
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
