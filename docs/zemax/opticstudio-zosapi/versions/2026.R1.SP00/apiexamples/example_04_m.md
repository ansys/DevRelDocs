# Example 04 - Matlab

```matlab
function [ r ] = MATLABStandalone_pull_data_from_FFTMTF( args )

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
    TheSystem = TheApplication.PrimarySystem;
    sampleDir = TheApplication.SamplesDir;
    
    %! [e04s01_m]
    % Open file
    testFile = System.String.Concat(sampleDir, '\Sequential\Objectives\Cooke 40 degree field.zos');
    TheSystem.LoadFile(testFile,false);
    %! [e04s01_m]

    %! [e04s02_m]
    % Create analysis
    newWin = TheSystem.Analyses.New_FftMtf(); 
    %! [e04s02_m]
    
    %! [e04s03_m]
    % Settings
    newWin_Settings = newWin.GetSettings();
    newWin_Settings.MaximumFrequency = 50;
    newWin_Settings.SampleSize = ZOSAPI.Analysis.SampleSizes.S_256x256;
    %! [e04s03_m]
    
    %! [e04s04_m]
    % Run Analysis & gets results
    newWin.ApplyAndWaitForCompletion();
    newWin_Results = newWin.GetResults();
    %! [e04s04_m]
    
    
    figure('position', [50, 150, 900, 600])
    hold on;
    grid on;
    
    %! [e04s05_m]
    % Read and plot data series
    dataSeries = newWin_Results.DataSeries;
    cc=lines(double(newWin_Results.NumberOfDataSeries));
    for gridN=1:newWin_Results.NumberOfDataSeries
        data = dataSeries(gridN);
        y = data.YData.Data.double;
        x = data.XData.Data.double;
        plot(x,y(:,1),'-','color',cc(gridN,:));
        plot(x,y(:,2),':','color',cc(gridN,:));
    end
    %! [e04s05_m]
        
    title('FFT MTF');
    xlabel('Spatial Frequency in cycles per mm');
    ylabel('Modulus of the OTF');
    legend('0^\circ tangential', '0^\circ sagittal', '14^\circ tangential', ...
        '14^\circ sagittal', '20^\circ tangential', '20^\circ sagittal');

    
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
