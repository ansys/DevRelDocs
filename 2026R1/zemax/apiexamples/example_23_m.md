# Example 23 - Matlab

```matlab
function [ r ] = MATLABStandalone_ray_fan_native_manual_comparison( args )

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
    
    max_rays = 150;
    
    %! [e23s01_m]
    max_field = 0;
    for i = 1:TheSystem.SystemData.Fields.NumberOfFields
       if (TheSystem.SystemData.Fields.GetField(i).Y > max_field); max_field = TheSystem.SystemData.Fields.GetField(i).Y; end;
    end
    max_num_field = TheSystem.SystemData.Fields.NumberOfFields;
    %! [e23s01_m]
    
    close all;
    figure('OuterPosition',[50, 50, 1200, 800])
    
    tic
    
    %! [e23s02_m]
    % Set up Batch Ray Trace
    raytrace = TheSystem.Tools.OpenBatchRayTrace();
    nsur = TheSystem.LDE.NumberOfSurfaces;
    normUnPolData = raytrace.CreateNormUnpol(max_rays + 1, ZOSAPI.Tools.RayTrace.RaysType.Real, nsur);
    %! [e23s02_m]
    
    %! [e23s03_m]
    % define batch ray trace constants
    hx = 0;
	py_ary = (0:(1 / max_rays):1) * 2 - 1;
	px = 0;
    max_wave = TheSystem.SystemData.Wavelengths.NumberOfWavelengths;
    %! [e23s03_m]
    
    %! [e23s04_m]
    % image surface number and primary wavelength
    nsur = TheSystem.LDE.NumberOfSurfaces;
    pwav = 0;
    for a = 1:TheSystem.SystemData.Wavelengths.NumberOfWavelengths
        if TheSystem.SystemData.Wavelengths.GetWavelength(a).IsPrimary == 1; pwav = a; end;
    end
    
    % creates array of Y coordinate chief ray values
    chief_ary = zeros(max_num_field);
    for field = 1:max_num_field
        if max_field == 0; hy = 1; else hy = TheSystem.SystemData.Fields.GetField(field).Y / max_field; end;
        % gets single value without using MFE (see ZPL OPEV)
        chief_ary(field) = TheSystem.MFE.GetOperandValue(ZOSAPI.Editors.MFE.MeritOperandType.REAY, nsur, pwav, 0, hy , 0, 0, 0, 0);
    end
    %! [e23s04_m]
    
    % initialize x/y image plane arrays
    y_ary = zeros(max_wave,(max_rays + 1) * (max_rays + 1));
    
    % setup plot
    for field = 1:max_num_field
        
        subplot(2, double(max_num_field) , double(field + max_num_field))
        hold on
        if max_field == 0; hy = 1; else hy = TheSystem.SystemData.Fields.GetField(field).Y / max_field; end;
        
        for wave = 1:max_wave
            %! [e23s05_m]
            % Adding Rays to Batch, varying normalised object height hy
            normUnPolData.ClearData();
            for i = 1:max_rays+1
                py = py_ary(i);
                normUnPolData.AddRay(wave, hx, hy, px, py, ZOSAPI.Tools.RayTrace.OPDMode.None);
            end
            %! [e23s05_m]
            
            %! [e23s06_m]
            % Run Batch Ray Trace
            raytrace.RunAndWaitForCompletion();
            %! [e23s06_m]
            
            %! [e23s07_m]
            % Read and display results
            normUnPolData.StartReadingResults();
            [success, rayNumber, errCode, vigCode, ~, y, ~, ~, ~, ~, ~, ~, ~, ~, ~] = normUnPolData.ReadNextResult();
            while success
                if ((errCode == 0 ) && (vigCode == 0))
                    y_ary(field, wave, rayNumber) = y;
                end
                [success, rayNumber, errCode, vigCode, ~, y, ~, ~, ~, ~, ~, ~, ~, ~, ~] = normUnPolData.ReadNextResult();
            end 
            plot(py_ary(:), squeeze((y_ary(field, wave, :) - chief_ary(field)) * 1000), '-', 'MarkerSize', 4);
            %! [e23s07_m]
        end
    end
    manual = toc;
    
    tic
    
    %! [e23s08_m]
    % runs a ray fan analysis and extracts
    ray = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.RayFan);
    ray_settings = ray.GetSettings();
    ray_settings.NumberOfRays = max_rays / 2;
    ray_settings.Field.UseAllFields();
    ray_settings.Wavelength.UseAllWavelengths();
    
    ray.ApplyAndWaitForCompletion();
    ray_results = ray.GetResults();
    %! [e23s08_m]
    
    hold on
    for field = 1:max_num_field
        %! [e23s09_m]
        % Read and display results
        subplot(2, double(max_num_field) , double(field))
        
        x = ray_results.DataSeries(field * 2 - 1).XData.Data.double;
        y = ray_results.DataSeries(field * 2 - 1).YData.Data.double;
        
        plot(x, y)
        if max_field == 0; hy = 1; else hy = TheSystem.SystemData.Fields.GetField(field).Y / max_field; end;
        title(sprintf('Field: %4.3f',hy))
        %! [e23s09_m]
    end
    native = toc;
    
    fprintf('\nTracing %i number of rays\n',max_rays + 1)
    fprintf('Elapsed time is %.6f seconds with native code\n', native);
    fprintf('Elapsed time is %.6f seconds with manual code\n', manual);
    fprintf('The native code is %4.2f%% faster\n',(manual - native)/native * 100);
    
    subplot(2, double(max_num_field), 1)
    ylabel(sprintf('Native Code (%.3fs)', native))
    subplot(2, double(max_num_field), double(max_num_field + 1))
    ylabel(sprintf('Manual Code (%.3fs)', manual))
    
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
