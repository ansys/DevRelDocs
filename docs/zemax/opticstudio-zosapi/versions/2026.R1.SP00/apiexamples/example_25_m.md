# Example 25 - Matlab

```matlab
function [ r ] = MATLABStandalone_source_spectrum_diffraction_grating( args )

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
    
    %! [e25s01_m]
    % Initializes NCE and loads surfaces
    % Inserts objects
    TheNCE = TheSystem.NCE;
    TheNCE.InsertNewObjectAt(1);
    TheNCE.InsertNewObjectAt(1);
    TheNCE.InsertNewObjectAt(1);
    TheNCE.InsertNewObjectAt(1);
    %! [e25s01_m]
    
    o1 = TheNCE.GetObjectAt(1);
    o2 = TheNCE.GetObjectAt(2);
    o3 = TheNCE.GetObjectAt(3);
    o4 = TheNCE.GetObjectAt(4);
    o5 = TheNCE.GetObjectAt(5);
    
    %! [e25s02_m]
    % Changes Object Type
    o1.ChangeType(o1.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.SourceDiode));
    o2.ChangeType(o2.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.SourceDiode));
    o3.ChangeType(o3.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.NullObject));
    o4.ChangeType(o4.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.DiffractionGrating));
    o5.ChangeType(o5.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.DetectorColor));
    %! [e25s02_m]
    
    % Sets positions & materials
    o3.ZPosition = 10;
    o3.TiltAboutX = 10;
    o4.RefObject = 3;
    o4.Material = 'MIRROR';
    o5.YPosition = 8.45;
    o5.TiltAboutX = 40;
    
    % Sets parameters
    o1.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par7).DoubleValue = 5;
    o2.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par7).DoubleValue = 5;
    o4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par10).DoubleValue = 0.6;
    o4.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par11).DoubleValue = 1;
    
    %! [e25s03_m]
    % Changes sourcecolor to Blackbody, sets temperature, min/max wavelength
    o1.SourcesData.SourceColor = ZOSAPI.Editors.NCE.SourceColorMode.BlackBodySpectrum;
    o1.SourcesData.SourceColorSettings.TemperatureK = 6000;
    o1.SourcesData.SourceColorSettings.WavelengthFrom = 0.45;
    o1.SourcesData.SourceColorSettings.WavelengthTo = 0.65;
    %! [e25s03_m]
    
    o2.SourcesData.SourceColorSettings.TemperatureK = 6000;
    o2.SourcesData.SourceColor = ZOSAPI.Editors.NCE.SourceColorMode.BlackBodySpectrum;
    o2.SourcesData.SourceColorSettings.SpectrumCount = 100;
    o2.SourcesData.SourceColorSettings.WavelengthFrom = 0.4;
    o2.SourcesData.SourceColorSettings.WavelengthTo = 0.7;
    
    %! [e25s04_m]
    % Sets up the MCE, adds configuration & operands
    TheMCE = TheSystem.MCE;
    TheMCE.AddConfiguration(false);
    TheMCE.AddOperand();
    TheMCE.AddOperand();
    TheMCE.AddOperand();
    %! [e25s04_m]
    
    %! [e25s05_m]
    % change MCE to NPAR, modifies the number of Layout Rays for a Source
    for a = 1:4
       TheMCE.GetOperandAt(a).ChangeType(ZOSAPI.Editors.MCE.MultiConfigOperandType.NPAR); 
    end
    TheMCE.GetOperandAt(1).Param2 = 1;
    TheMCE.GetOperandAt(1).Param3 = 1;
    TheMCE.GetOperandAt(1).GetOperandCell(1).DoubleValue = 200;
    TheMCE.GetOperandAt(1).GetOperandCell(2).DoubleValue = 0;
    %! [e25s05_m]
    
    
    TheMCE.GetOperandAt(2).Param2 = 1;
    TheMCE.GetOperandAt(2).Param3 = 2;
    TheMCE.GetOperandAt(2).GetOperandCell(1).DoubleValue = 1000000;
    TheMCE.GetOperandAt(2).GetOperandCell(2).DoubleValue = 0;
    
    TheMCE.GetOperandAt(3).Param2 = 2;
    TheMCE.GetOperandAt(3).Param3 = 1;
    TheMCE.GetOperandAt(3).GetOperandCell(1).DoubleValue = 0;
    TheMCE.GetOperandAt(3).GetOperandCell(2).DoubleValue = 200;
    
    TheMCE.GetOperandAt(4).Param2 = 2;
    TheMCE.GetOperandAt(4).Param3 = 2;
    TheMCE.GetOperandAt(4).GetOperandCell(1).DoubleValue = 0;
    TheMCE.GetOperandAt(4).GetOperandCell(2).DoubleValue = 1000000;
    
    % Setup detector color
    x_width = 1.5;
    y_width = 1.5;
    x_pixel = 500;
    y_pixel = 500;
    
    o5.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par1).DoubleValue = x_width;
    o5.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par2).DoubleValue = y_width;
    o5.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par3).IntegerValue = x_pixel;
    o5.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par4).IntegerValue = y_pixel;
    
    close all;
    figure('OuterPosition',[0, 250, 1000, 500])
    for a = 1:TheMCE.NumberOfConfigurations
        TheMCE.SetCurrentConfiguration(a);
        
        % Setup and run the ray trace
        NSCRayTrace = TheSystem.Tools.OpenNSCRayTrace();
        NSCRayTrace.ClearDetectors(0);
        NSCRayTrace.SplitNSCRays = false;
        NSCRayTrace.ScatterNSCRays = false;
        NSCRayTrace.UsePolarization = false;
        NSCRayTrace.IgnoreErrors = true;
        NSCRayTrace.SaveRays = false;
        NSCRayTrace.RunAndWaitForCompletion();
        NSCRayTrace.Close();
        fprintf('Finished ray trace\n');
        
        %! [e25s06_m]
        % Creates a new detector viewer window, changes to true color
        det = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.DetectorViewer);
        det_settings = det.GetSettings();
        det_settings.ShowAs = ZOSAPI.Analysis.DetectorViewerShowAsTypes.TrueColor;
        det.ApplyAndWaitForCompletion();
        %! [e25s06_m]
        
        % Creates System.Single[] buffers to store pixel data
        rData = NET.createArray('System.Single', (x_pixel * y_pixel));
        gData = NET.createArray('System.Single', (x_pixel * y_pixel));
        bData = NET.createArray('System.Single', (x_pixel * y_pixel));
        
        %! [e25s07_m]
        % Loads RGB data into System.Single buffer
        det_raw = det.GetResults().DataGridsRgb.Get(0);
        det_raw.FillValues((x_pixel * y_pixel), rData, gData, bData);
        %! [e25s07_m]
        
        % Converts buffer to RGB array; rotates & resizes RGB array
        dData = zeros(y_pixel, x_pixel, 3) - 1;
        dData(:,:,1) = rot90(reshape(rData.double ./ 255, x_pixel, y_pixel));
        dData(:,:,2) = rot90(reshape(gData.double ./ 255, x_pixel, y_pixel));
        dData(:,:,3) = rot90(reshape(bData.double ./ 255, x_pixel, y_pixel));
        
        % Plots detector color values
        subplot(1, double(TheMCE.NumberOfConfigurations), double(a))
        imagesc(dData,'X',[-x_width x_width],'Y',[-y_width y_width]);
        axis equal tight;colormap('jet');
        str = sprintf('Config = %i',a);
        title(str);
    end
    
    TheSystem.SaveAs(System.String.Concat(TheApplication.SamplesDir, '\API\Matlab\e25_source_spectrum_diffraction_grating.zos'));

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
