# Example 07 - Matlab

```matlab
function [ r ] = MATLABStandaloneApplication( args )

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
FilePath = System.String.Concat(TheApplication.ZemaxDataDir, '\Samples\Sequential\Objectives\Cooke 40 degree field.zos');
TheSystem.LoadFile(FilePath, false);

%! [e07s01_m]
% run the design lockdown tool to fix diameters, remove solves
LockdownTool = TheSystem.Tools.OpenDesignLockdown();
LockdownTool.UsePrecisionRounding = true;
LockdownTool.DecimalPrecision = 2;
LockdownTool.RunAndWaitForCompletion();
LockdownTool.Close();
%! [e07s01_m]

% recreate the functionality of the tilt/decenter elements tool
% apply Coordinate Breaks around the 2nd lens element (surf 3/4)
surf3 = TheSystem.LDE.InsertNewSurfaceAt(3);
surf6 = TheSystem.LDE.InsertNewSurfaceAt(6);
CB = surf3.GetSurfaceTypeSettings(ZOSAPI.Editors.LDE.SurfaceType.CoordinateBreak);
surf3.ChangeType(CB);
surf6.ChangeType(CB);
% insert a dummy surface after the 2nd CB
surf7 = TheSystem.LDE.InsertNewSurfaceAt(7);
surf7.Thickness = TheSystem.LDE.GetSurfaceAt(5).Thickness; % the dummy surface carries the original thickness

%! [e07s02_m]
% we're going to play with the STOP surface position, so let's put STOP on surf 1
TheSystem.LDE.GetSurfaceAt(1).IsStop = true;
%! [e07s02_m]

%! [e07s03_m]
% create position solve
PositionSolve = TheSystem.LDE.GetSurfaceAt(5).ThicknessCell.CreateSolveType(ZOSAPI.Editors.SolveType.Position);
% set the properties for the position solve
% solve-specific properties are in ISolvePosition interface, accessed via _S_Position
PositionSolve.S_Position_.FromSurface = 3; 
PositionSolve.S_Position_.Length = 0;
% apply postion solve
TheSystem.LDE.GetSurfaceAt(5).ThicknessCell.SetSolveData(PositionSolve);
%! [e07s03_m]

%! [e07s04_m]
% create pickup solve
PickupSolve = TheSystem.LDE.GetSurfaceAt(6).ThicknessCell.CreateSolveType(ZOSAPI.Editors.SolveType.SurfacePickup);
% solve-specific properties are in ISolvePosition interface, accessed via _S_Position
PickupSolve.S_SurfacePickup_.Surface = 5;
PickupSolve.S_SurfacePickup_.ScaleFactor = -1;
PickupSolve.S_SurfacePickup_.Offset = 0;
PickupSolve.S_SurfacePickup_.Column = ZOSAPI.Editors.LDE.SurfaceColumn.Thickness;
% apply the pickup solve
TheSystem.LDE.GetSurfaceAt(6).ThicknessCell.SetSolveData(PickupSolve);
%! [e07s04_m]

%! [e07s05_m]
% set pickup solves for coordinate break tilt/decenter parameter cells
% these parameters are columns 12-16 in the Lens Data Editor (parameters 1-5)
ParameterPickup = TheSystem.LDE.GetSurfaceAt(6).GetCellAt(12).CreateSolveType(ZOSAPI.Editors.SolveType.SurfacePickup);
ParameterPickup.S_SurfacePickup_.Surface = 3;
ParameterPickup.S_SurfacePickup_.ScaleFactor = -1;
ParameterPickup.S_SurfacePickup_.MakePickupFromCurrentColumn();
for i=12:16
    TheSystem.LDE.GetSurfaceAt(6).GetCellAt(i).SetSolveData(ParameterPickup);
    TheSystem.LDE.GetSurfaceAt(3).GetCellAt(i).DoubleValue = -0.1 + 0.2*rand; % assign a random value between +/-0.1
end
% also, set the 'order' flag for CB#2
TheSystem.LDE.GetSurfaceAt(6).GetCellAt(17).IntegerValue = 1;
%! [e07s05_m]

%! [e07s06_m]
% check the global rotation matrix of surface 5 (rear of tilted/decentered lens)
GLCR = ZOSAPI.Editors.MFE.MeritOperandType.GLCR; % enumerator for operand type
% GLCR operand only uses two input parameters: the surface number and rotation matrix entry number.
% But, GetOperandValue() expects the operand type, plus 8 more inputs because some 
% operands use all 8. We have to put 0's for the additional unused inputs
RotationMatrix = zeros(3, 3);
i = 1;
for x = 1:3
    for y = 1:3
        RotationMatrix(x, y) = TheSystem.MFE.GetOperandValue(GLCR, 5, i, 0, 0, 0, 0, 0, 0);
        i = i + 1;
    end
end
%! [e07s06_m]  

OutFilePath = System.String.Concat(TheApplication.ZemaxDataDir, '\Samples\API\MATLAB\MATLAB_07_TiltDecenterAndMFOperand.zos');
TheSystem.SaveAs(OutFilePath);

r = [];

end

function app = InitConnection()

import System.Reflection.*;

% Find the installed version of OpticStudio.
zemaxData = winqueryreg('HKEY_CURRENT_USER', 'Software\Zemax', 'ZemaxRoot');
NetHelper = strcat(zemaxData, '\ZOS-API\Libraries\ZOSAPI_NetHelper.dll');
% Note -- uncomment the following line to use a custom NetHelper path
% NetHelper = 'C:\Users\zachary.Derocher\Documents\Zemax\ZOS-API\Libraries\ZOSAPI_NetHelper.dll';
% This is the path to OpticStudio
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
