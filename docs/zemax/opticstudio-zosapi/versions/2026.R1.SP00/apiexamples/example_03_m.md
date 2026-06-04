# Example 03 - Matlab

```matlab
function [ r ] = MATLABStandalone_open_file_and_optimise( args )

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
    
    %! [e03s01_m]
    % Open file
    testFile = System.String.Concat(sampleDir, '\API\Matlab\e01_new_file_and_quickfocus.zos');
    if (exist(char(testFile)) == 0)
        fprintf('You need to run Example 01 before running this example\n');
        r = [];
        return;
    end
    TheSystem.LoadFile(testFile,false);
    testFile2 = System.String.Concat(sampleDir, '\API\Matlab\e03_open_file_and_optimise.zos');
    TheSystem.SaveAs(testFile2);
    %! [e03s01_m]
    
    %! [e03s02_m]
    % Get Surfaces
    TheLDE = TheSystem.LDE;
    Surface_1 = TheLDE.GetSurfaceAt(1);
    Surface_2 = TheLDE.GetSurfaceAt(2);
    Surface_3 = TheLDE.GetSurfaceAt(3);
    %! [e03s02_m]
    
    %! [e03s03_m]
    % Make thicknesses and radii variable
    Surface_1.ThicknessCell.MakeSolveVariable();
    Surface_2.ThicknessCell.MakeSolveVariable();
    Surface_2.RadiusCell.MakeSolveVariable();
    Surface_3.ThicknessCell.MakeSolveVariable();
    %! [e03s03_m]
    
    %! [e03s04_m]
    % Merit functions
    TheMFE = TheSystem.MFE;
    Operand_1 = TheMFE.GetOperandAt(1);
    Operand_1.ChangeType(ZOSAPI.Editors.MFE.MeritOperandType.ASTI);
    Operand_1.Target = 0.0;
    Operand_1.Weight = 10.0;
    %! [e03s04_m]
    
    Operand_2 = TheMFE.InsertNewOperandAt(2);
    Operand_2.ChangeType(ZOSAPI.Editors.MFE.MeritOperandType.COMA);
    Operand_2.Target = 0.0;
    Operand_2.Weight = 1.0;
    % Air min/max
    Operand_3 = TheMFE.AddOperand();
    Operand_3.ChangeType(ZOSAPI.Editors.MFE.MeritOperandType.MNCA);
    Operand_3.Target = 0.5;
    Operand_3.Weight = 1.0;
    Operand_3.GetCellAt(2).IntegerValue = 1;
    Operand_3.GetCellAt(3).IntegerValue = 3;    
    Operand_4 = TheMFE.AddOperand();
    Operand_4.ChangeType(ZOSAPI.Editors.MFE.MeritOperandType.MXCA);
    Operand_4.Target = 1000;
    Operand_4.Weight = 1.0;
    Operand_4.GetCellAt(2).IntegerValue = 1;
    Operand_4.GetCellAt(3).IntegerValue = 3;
    Operand_5=TheMFE.AddOperand();
    Operand_5.ChangeType(ZOSAPI.Editors.MFE.MeritOperandType.MNEA);
    Operand_5.Target = 0.5;
    Operand_5.Weight = 1.0;
    Operand_5.GetCellAt(2).IntegerValue = 1;
    Operand_5.GetCellAt(3).IntegerValue = 3;
    % Material min/max
    Operand_6 = TheMFE.AddOperand();
    Operand_6.ChangeType(ZOSAPI.Editors.MFE.MeritOperandType.MNCG);
    Operand_6.Target = 3.0;
    Operand_6.Weight = 1.0;
    Operand_6.GetCellAt(2).IntegerValue = 1;
    Operand_6.GetCellAt(3).IntegerValue = 3;
    Operand_7=TheMFE.AddOperand();
    Operand_7.ChangeType(ZOSAPI.Editors.MFE.MeritOperandType.MXCG);
    Operand_7.Target = 15.0;
    Operand_7.Weight = 1.0;
    Operand_7.GetCellAt(2).IntegerValue = 1;
    Operand_7.GetCellAt(3).IntegerValue = 3;
    Operand_8 = TheMFE.AddOperand();
    Operand_8.ChangeType(ZOSAPI.Editors.MFE.MeritOperandType.MNEG);
    Operand_8.Target = 3.0;
    Operand_8.Weight = 1.0;
    Operand_8.GetCellAt(2).IntegerValue = 1;
    Operand_8.GetCellAt(3).IntegerValue = 3;
    
    %! [e03s05_m]
    % Local optimisation till completion
    LocalOpt = TheSystem.Tools.OpenLocalOptimization();
    LocalOpt.Algorithm = ZOSAPI.Tools.Optimization.OptimizationAlgorithm.DampedLeastSquares;
    LocalOpt.Cycles = ZOSAPI.Tools.Optimization.OptimizationCycles.Automatic;
    LocalOpt.NumberOfCores = 8;
    LocalOpt.RunAndWaitForCompletion();
    LocalOpt.Close();
    %! [e03s05_m]
    
    %! [e03s06_m]
    % Hammer for 10 seconds
    HammerOpt = TheSystem.Tools.OpenHammerOptimization();
    HammerOpt.RunAndWaitWithTimeout(10);    
    HammerOpt.Cancel();
	HammerOpt.WaitForCompletion();
    HammerOpt.Close();
    %! [e03s06_m]
   
    % Save and close
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
