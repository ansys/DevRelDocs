# Example 05 - Matlab

```matlab
function [ r ] = MATLABStandalone_Read_ZRD_File( args )

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
sampleDir = TheApplication.SamplesDir;
Logic = {'False', 'True'};

% Add your custom code here...

% Open file and set Analysis Ryas to only 10
testFile = System.String.Concat(sampleDir, '\Non-sequential\Miscellaneous\Digital_projector_flys_eye_homogenizer.zos');
TheSystem.LoadFile(testFile, false);
TheSystem.NCE.GetObjectAt(1).GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par2).IntegerValue = 10;

%! [e27s01_m]
% Trace and save a ZRD file for test later
NSCRayTrace = TheSystem.Tools.OpenNSCRayTrace();
NSCRayTrace.SplitNSCRays = true;
NSCRayTrace.ScatterNSCRays = false;
NSCRayTrace.UsePolarization = true;
NSCRayTrace.IgnoreErrors = true;
NSCRayTrace.SaveRays = true;
NSCRayTrace.SaveRaysFile = 'Digital_projector_flys_eye_homogenizer.ZRD';
NSCRayTrace.ClearDetectors(0);
NSCRayTrace.RunAndWaitForCompletion();
NSCRayTrace.Close();
%! [e27s01_m]




%! [e27s02_m]
% Open ZRD Reader and read data
ZRDReader = TheSystem.Tools.OpenRayDatabaseReader();
ZRDReader.ZRDFile = System.String.Concat(sampleDir, '\Non-sequential\Miscellaneous\Digital_projector_flys_eye_homogenizer.ZRD');
ZRDReader.RunAndWaitForCompletion();
if ZRDReader.Succeeded == 0
    disp('Raytracing failed!\n\n')
    disp(ZRDReader.ErrorMessage)
else
    disp('Raytracing completed!\n\n')
end
%! [e27s02_m]


%! [e27s03_m]
ZRDResult = ZRDReader.GetResults();
% ReadNExtResult() returns data ray by ray
[success_NextResult, rayNumber, waveIndex, wlUM, numSegments] = ZRDResult.ReadNextResult();
while success_NextResult == 1
    fprintf('\n\nsuccess_NextResult: %s, rayNumber: %d, waveIndex: %d, wlUM: %d, numSegments: %d\n\n',...
        Logic{success_NextResult+1}, rayNumber, waveIndex, wlUM, numSegments)
    % ReadNextSegmentFull() returns data segment by segment
    [success_NextSegmentFull, segmentLevel, segmentParent, hitObj, hitFace, insideOf, status,...
        x, y, z, l, m, n, exr, exi, eyr, eyi, ezr, ezi, intensity, pathLength,...
        xybin, lmbin, xNorm, yNorm, zNorm, index, startingPhase, phaseOf, phaseAt] =...
        ZRDResult.ReadNextSegmentFull();
    while success_NextSegmentFull == 1
        fprintf(['success_NextSegmentFull: %s, segmentLevel: %d, segmentParent: %d,\n', ...
            'hitObj: %d, hitFace: %d, insideOf: %d, status: %s,\n', ...
            'x: %f, y: %f, z: %f,l: %f, m: %f, n: %f,\n', ...
            'exr: %f, exi: %f, eyr: %f, eyi: %f, ezr: %f, ezi: %f,\n', ...
            'intensity: %f, pathLength: %f, xybin: %d, lmbin: %d,\n', ...
            'xNorm: %f, yNorm: %f, zNorm: %f,\n', ...
            'index: %f, startingPhase: %f, phaseOf: %f, phaseAt: %f\n\n'], ...
            Logic{success_NextSegmentFull+1}, segmentLevel, segmentParent, hitObj, hitFace, insideOf, char(status), ...
            x, y, z, l, m, n, exr, exi, eyr, eyi, ezr, ezi, intensity, pathLength, ...
            xybin, lmbin, xNorm, yNorm, zNorm, index, startingPhase, phaseOf, phaseAt)
        [success_NextSegmentFull, segmentLevel, segmentParent, hitObj, hitFace, insideOf, status,...
            x, y, z, l, m, n, exr, exi, eyr, eyi, ezr, ezi, intensity, pathLength,...
            xybin, lmbin, xNorm, yNorm, zNorm, index, startingPhase, phaseOf, phaseAt] =...
            ZRDResult.ReadNextSegmentFull();
    end
    [success_NextResult, rayNumber, waveIndex, wlUM, numSegments] = ZRDResult.ReadNextResult();
end
ZRDReader.Close()
%! [e27s03_m]

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
