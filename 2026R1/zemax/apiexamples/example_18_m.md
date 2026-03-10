# Example 18 - Matlab

```matlab
function [ r ] = MATLABStandalone_Set_MultiConfiguration( args )

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
    
    % Setup
    TheSystem.LoadFile(System.String.Concat(TheApplication.SamplesDir, '\Sequential\Objectives\Double Gauss 28 degree field.zos'), false);
    TheMCE = TheSystem.MCE;
    
    %! [e18s01_m]
    % Add 2 configurations (totally 3)
    TheMCE.AddConfiguration(false);
    TheMCE.AddConfiguration(false);
    %! [e18s01_m]

    %! [e18s02_m]
    % Add one operand (totally 2)
    TheMCE.AddOperand();
    %! [e18s02_m]
    
    %! [e18s03_m]
    % Get interface of each operand
    MCOperand1 = TheMCE.GetOperandAt(1);
    MCOperand2 = TheMCE.GetOperandAt(2);
    % Change both operands' type to THIC
    MCOperand1.ChangeType(ZOSAPI.Editors.MCE.MultiConfigOperandType.THIC);
    MCOperand2.ChangeType(ZOSAPI.Editors.MCE.MultiConfigOperandType.THIC);
    %! [e18s03_m]

    %! [e18s04_m]
    % Set parameters of operands
    % If the type of operand is THIC, the first parameter here means surface number
    MCOperand1.Param1 = 0;
    MCOperand2.Param1 = 11;
    %! [e18s04_m]
    
    %! [e18s05_m]
    % Set values of operand for each configuration
    MCOperand1.GetOperandCell(1).DoubleValue = 10000.0;
    MCOperand1.GetOperandCell(2).DoubleValue = 5000.0;
    MCOperand1.GetOperandCell(3).DoubleValue = 1000.0;
    %! [e18s05_m]

    %! [e18s06_m]
    % Refocus for each configuration
    quickfocus = TheSystem.Tools.OpenQuickFocus();
    TheMCE.SetCurrentConfiguration(1);  % Set system to config 1
    quickfocus.RunAndWaitForCompletion();  % Quick focus for config 1
    TheMCE.SetCurrentConfiguration(2);
    quickfocus.RunAndWaitForCompletion();
    TheMCE.SetCurrentConfiguration(3);
    quickfocus.RunAndWaitForCompletion();
    %! [e18s06_m]
    
    TheSystem.SaveAs(System.String.Concat(TheApplication.SamplesDir, '\API\Matlab\e18_Double_Gauss_28_degree_field_MultiConfig.zos'));

    %! [e18s07_m]
    % An example of manually "Make Thermal"
    TheSystem.LoadFile(System.String.Concat(TheApplication.SamplesDir, '\Sequential\Objectives\Doublet.zos'), false);
    % Add 1 configuration (totally 2)
    TheMCE.AddConfiguration(false);
    % Add 12 operands (totally 13)
    for i = 0:11
        TheMCE.AddOperand();
    end
        
    % Create an operand type array and later we will input the array into MCE with a for loop
    operandType = NET.createArray('ZOSAPI.Editors.MCE.MultiConfigOperandType', 13);
    operandType(1) = ZOSAPI.Editors.MCE.MultiConfigOperandType.TEMP;
    operandType(2) = ZOSAPI.Editors.MCE.MultiConfigOperandType.PRES;
	operandType(3) = ZOSAPI.Editors.MCE.MultiConfigOperandType.CRVT;
	operandType(4) = ZOSAPI.Editors.MCE.MultiConfigOperandType.THIC;
	operandType(5) = ZOSAPI.Editors.MCE.MultiConfigOperandType.GLSS;
	operandType(6) = ZOSAPI.Editors.MCE.MultiConfigOperandType.SDIA;
	operandType(7) = ZOSAPI.Editors.MCE.MultiConfigOperandType.CRVT;
	operandType(8) = ZOSAPI.Editors.MCE.MultiConfigOperandType.THIC;
	operandType(9) = ZOSAPI.Editors.MCE.MultiConfigOperandType.GLSS;
	operandType(10) = ZOSAPI.Editors.MCE.MultiConfigOperandType.SDIA;
	operandType(11) = ZOSAPI.Editors.MCE.MultiConfigOperandType.CRVT;
	operandType(12) = ZOSAPI.Editors.MCE.MultiConfigOperandType.THIC;
	operandType(13) = ZOSAPI.Editors.MCE.MultiConfigOperandType.SDIA;
    % Set parameter 1 for each config operand
    param1value = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3];
    for i = 1:11
        TheMCE.GetOperandAt(i + 2).Param1 = param1value(i);
    end
    
    % Set type for each config operand
    for i = 1:13
        TheMCE.GetOperandAt(i).ChangeType(operandType(i));
    end
    
    % Set thermal pickup solves
    ThermalPickupSolve = TheMCE.GetOperandAt(1).GetOperandCell(1).CreateSolveType(ZOSAPI.Editors.SolveType.ThermalPickup);
    tPickup = ThermalPickupSolve.S_ThermalPickup_;
    tPickup.Configuration = 1;
    ThermalPickup_num = [3, 4, 6, 7, 8, 10, 11, 12, 13];
    for i = 1:numel(ThermalPickup_num)
        TheMCE.GetOperandAt(ThermalPickup_num(i)).GetOperandCell(2).SetSolveData(ThermalPickupSolve);
    end
    
    % Set Pickup Solve
    ConfigPickupSolve = TheMCE.GetOperandAt(1).GetOperandCell(1).CreateSolveType(ZOSAPI.Editors.SolveType.ConfigPickup);
    cPickup = ConfigPickupSolve.S_ConfigPickup_;
    cPickup.Configuration = 1;
    GLSSops = [5, 9];  % Operands 5 and 9 are GLSS operands
    for i = 1:numel(GLSSops)
        ConfigPickupSolve.S_ConfigPickup_.Operand = GLSSops(i);  % Set pickup solve's "operand" value to pickup from correct place
        TheMCE.GetOperandAt(GLSSops(i)).GetOperandCell(2).SetSolveData(ConfigPickupSolve);  % apply solve for operands 5 and 9
    end
    
    % Set temperature of configuration 2 to 100 degrees
    TheMCE.GetOperandAt(1).GetOperandCell(2).DoubleValue = 100;
    TheSystemData = TheSystem.SystemData;
    TheSystemData.Environment.AdjustIndexToEnvironment = true;
    
    TheSystem.SaveAs(System.String.Concat(TheApplication.SamplesDir, '\API\Matlab\e18_Doublet_MakeTermal.zos'));
    %! [e18s07_m]
    
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
