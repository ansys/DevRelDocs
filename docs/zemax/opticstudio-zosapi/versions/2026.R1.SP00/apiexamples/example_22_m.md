# Example 22 - Matlab

```matlab
function [ r ] = MATLABStandalone_seq_spot_diagram( args )

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

    % Set up primary optical system
    TheSystem = TheApplication.CreateNewSystem(ZOSAPI.SystemType.Sequential);
    sampleDir = TheApplication.SamplesDir;
    testFile = System.String.Concat(sampleDir, '\Sequential\Objectives\Double Gauss 28 degree field.zos');
    TheSystem.LoadFile(testFile, false);
    
    %! [e22s01_m]
    % Set up Batch Ray Trace
    raytrace = TheSystem.Tools.OpenBatchRayTrace();
    nsur = TheSystem.LDE.NumberOfSurfaces;
    max_rays = 30;
    normUnPolData = raytrace.CreateNormUnpol((max_rays + 1) * (max_rays + 1),ZOSAPI.Tools.RayTrace.RaysType.Real,nsur);
    %! [e22s01_m]
    
    %! [e22s02_m]
    % define batch ray trace constants
    hx = 0;
    max_wave = TheSystem.SystemData.Wavelengths.NumberOfWavelengths;
    hy_ary = [0, 0.707, 1];
    %! [e22s02_m]
    
    % initialize x/y image plane arrays
    x_ary = zeros(TheSystem.SystemData.Fields.NumberOfFields, max_wave,(max_rays+1) * (max_rays+1));
    y_ary = zeros(TheSystem.SystemData.Fields.NumberOfFields, max_wave,(max_rays+1) * (max_rays+1));
    
    % setup plot
    close all;
    figure('OuterPosition',[0, 250, 1500, 500])
    color_ary = {'blue', 'green', 'red', 'gold', 'pink', 'cyan', 'purple', 'teal'};
    
    %! [e22s03_m]
    % determine maximum field in Y only
    max_field = 0;
    for i=1:TheSystem.SystemData.Fields.NumberOfFields
        if TheSystem.SystemData.Fields.GetField(i).Y > max_field; max_field = TheSystem.SystemData.Fields.GetField(i).Y ; end;
    end
    %! [e22s03_m]
    
    tic
    for field = 1:length(hy_ary)
        subplot(1, 3, double(field))
        hold on
        for wave = 1:max_wave
            %! [e22s04_m]
            % Adding Rays to Batch, varying normalised object height hy
            normUnPolData.ClearData();
            waveNumber=wave;
            for i = 1:((max_rays + 1) * (max_rays + 1))
                px = rand() * 2 - 1;py = rand() * 2 - 1;
                while (px^2 + py^2 > 1); py = rand() * 2 - 1; end;
                normUnPolData.AddRay(waveNumber, hx, hy_ary(field), px, py, ZOSAPI.Tools.RayTrace.OPDMode.None);
            end
            %! [e22s04_m]

            
            % Run Batch Ray Trace
            raytrace.RunAndWaitForCompletion();
            
            %! [e22s05_m]
            % Read batch raytrace and display results
            normUnPolData.StartReadingResults();
            [success, rayNumber, errCode, vigCode, x, y, ~, ~, ~, ~, ~, ~, ~, ~, ~] = normUnPolData.ReadNextResult();
            while success
                if ((errCode == 0 ) && (vigCode == 0))
                    x_ary(field, wave, rayNumber) = x;
                    y_ary(field, wave, rayNumber) = y;
                end
                [success, rayNumber, errCode, vigCode, x, y, ~, ~, ~, ~, ~, ~, ~, ~, ~] = normUnPolData.ReadNextResult();
            end
            %! [e22s05_m]
            plot(squeeze(x_ary(field, wave, :)), squeeze(y_ary(field, wave, :)), '.', 'MarkerSize', 4, 'color', char(color_ary(wave)));    
        end
        title(sprintf('Hy: %.2f (%s)',hy_ary(field) * max_field, char(TheSystem.SystemData.Fields.GetFieldType)));
        axis('square');
    end
    toc
    
    %! [e22s06_m]
    % Spot Diagram Analysis Results
	spot = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.StandardSpot);
    spot_setting = spot.GetSettings();
    spot_setting.Field.SetFieldNumber(0);
    spot_setting.Wavelength.SetWavelengthNumber(0);
    spot_setting.ReferTo = ZOSAPI.Analysis.Settings.Spot.Reference.Centroid;
    %! [e22s06_m]
    
    %! [e22s07_m]
    % extract RMS & Geo spot size for field points
    spot.ApplyAndWaitForCompletion();
    spot_results = spot.GetResults();
    fprintf('RMS radius: %6.3f  %6.3f  %6.3f\n',spot_results.SpotData.GetRMSSpotSizeFor(1,1),spot_results.SpotData.GetRMSSpotSizeFor(2,1),spot_results.SpotData.GetRMSSpotSizeFor(3,1))
    fprintf('GEO radius: %6.3f  %6.3f  %6.3f\n',spot_results.SpotData.GetGeoSpotSizeFor(1,1),spot_results.SpotData.GetGeoSpotSizeFor(2,1),spot_results.SpotData.GetGeoSpotSizeFor(3,1))
    %! [e22s07_m]
    

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
