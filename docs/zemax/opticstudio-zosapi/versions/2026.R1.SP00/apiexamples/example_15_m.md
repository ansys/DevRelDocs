# Example 15 - Matlab

```matlab
function [ r ] = MATLABStandalone_Seq_Optimization( args )

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
    apiPath = System.String.Concat(TheApplication.SamplesDir, '\API\Matlab\e15_Seq_Optimization');
    if (exist(char(apiPath)) == 0) mkdir(char(apiPath)); end;
    
    % Load a sample file
    TheSystem = TheApplication.PrimarySystem;
    
    %! [e15s01_m]
	b_load = TheSystem.LoadFile(System.String.Concat(TheApplication.SamplesDir,'\Short course\Optical System Design Using OpticStudio\sc_dbga1.zos'), false);
    fprintf('\nDouble Gauss Design:\n');
    %! [e15s01_m]
    
    %! [e15s02_m]
    %Define path locations
    SampleFile = System.String.Concat(TheApplication.SamplesDir, '\API\Matlab\e15_Seq_Optimization\OptimizedFile.zos');
    TheSystem.SaveAs(SampleFile);
    %! [e15s02_m]
    
    %! [e15s03_m]
    %Define System Explorer
    %Define Aperture
    SystExplorer = TheSystem.SystemData;
    SystExplorer.Aperture.ApertureType = ZOSAPI.SystemData.ZemaxApertureType.EntrancePupilDiameter;
    SystExplorer.Aperture.ApertureValue = 20;
    %! [e15s03_m]

    %! [e15s04_m]
    %Add 3 fields 
    Field_1 = SystExplorer.Fields.GetField(1);           
    NewField_2 = SystExplorer.Fields.AddField(0, 5.0, 1.0);
    SystExplorer.Fields.SetFieldType(ZOSAPI.SystemData.FieldType.ParaxialImageHeight);
    SystExplorer.Fields.MakeEqualAreaFields(3, 21.6);
    %! [e15s04_m]
    
    %! [e15s05_m]
    %Add 3 wavelengths: F,d,C
    slPreset = SystExplorer.Wavelengths.SelectWavelengthPreset(ZOSAPI.SystemData.WavelengthPreset.FdC_Visible);                  
    %! [e15s05_m]
    
    %! [e15s06_m]
    %Open a shaded model
    analysis = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.ShadedModel);
    analysis.Terminate();
    analysis.WaitForCompletion();
    analysisSettings = analysis.GetSettings();
    cfgFile = System.IO.Path.GetTempFileName();
    % Save the current settings to the temp file
    analysisSettings.SaveTo(cfgFile);
    % make your modifications to it
    %MODIFYSETTINGS are defined in the ZPL help files: The Programming Tab > About the ZPL > Keywords
    analysisSettings.ModifySettings(cfgFile, 'SHA_ROTX', '90');
    analysisSettings.ModifySettings(cfgFile, 'SHA_ROTY', '0');
    analysisSettings.ModifySettings(cfgFile, 'SHA_ROTZ', '0');
    % now load in the modified settings
    analysisSettings.LoadFrom(cfgFile);
    % If you want to overwrite your default CFG, copy it after you are done modifying the settings:
    %string CFG_fullname = System.Environment.GetEnvironmentVariable("USERPROFILE") + "\\Configs\\POP.CFG";
    %System.IO.File.Copy(cfgFile, CFG_fullname, true);
    % We don't need the temp file any more, so delete it
    System.IO.File.Delete(cfgFile);
    % Run the analysis with the new settings
    analysis.ApplyAndWaitForCompletion();
    %! [e15s06_m]
    
    %! [e15s07_m]
    % remove all variables and add a F# solve on last surface radius
    TheLDE = TheSystem.LDE;
    tools = TheSystem.Tools;
    tools.RemoveAllVariables();
    Surface_Last = TheLDE.GetSurfaceAt(TheLDE.NumberOfSurfaces - 2);
    Solver = Surface_Last.RadiusCell.CreateSolveType(ZOSAPI.Editors.SolveType.FNumber);
    Solver.S_FNumber_.FNumber = 3.1415;
    Surface_Last.RadiusCell.SetSolveData(Solver);
    SampleFile = System.String.Concat(TheApplication.SamplesDir, '\API\Matlab\e15_Seq_Optimization\OptimizedFile1.zos');
    TheSystem.SaveAs(SampleFile);
    %! [e15s07_m]
    
    %! [e15s08_m]
    %change BFL & run quick focus                         
    Surface_Last.Thickness = 40.0;
    QFocus = tools.OpenQuickFocus();
    QFocus.Criterion = ZOSAPI.Tools.General.QuickFocusCriterion.SpotSizeRadial;
    QFocus.UseCentroid = true;
    QFocus.RunAndWaitForCompletion();
    QFocus.Close();
    SampleFile = System.String.Concat(TheApplication.SamplesDir, '\API\Matlab\e15_Seq_Optimization\OptimizedFile2.zos');
    TheSystem.SaveAs(SampleFile);
    %! [e15s08_m]
    
    %! [e15s09_m]
    %setup a few variables
    tools.SetAllRadiiVariable();            
    Surface1 = TheLDE.GetSurfaceAt(1);
    Surface2 = TheLDE.GetSurfaceAt(2);
    Surface5 = TheLDE.GetSurfaceAt(5);
    Surface6 = TheLDE.GetSurfaceAt(6);
    Surface9 = TheLDE.GetSurfaceAt(9);
    Surface10 = TheLDE.GetSurfaceAt(10);
    Surface11 = TheLDE.GetSurfaceAt(11);
    %! [e15s09_m]
    
    %! [e15s10_m]
    %Thickness 2, 5, 6, 9, and 11 variable
    Surface2.ThicknessCell.MakeSolveVariable();
    Surface5.ThicknessCell.MakeSolveVariable();
    Surface6.ThicknessCell.MakeSolveVariable();
    Surface9.ThicknessCell.MakeSolveVariable();
    Surface11.ThicknessCell.MakeSolveVariable();
    %! [e15s10_m]
    
    %! [e15s11_m]
    %Thickness 10 pick up from 1
    Solver = Surface10.ThicknessCell.CreateSolveType(ZOSAPI.Editors.SolveType.SurfacePickup);
    SolverPickup = Solver.S_SurfacePickup_;
    SolverPickup.Surface = 1;
    SolverPickup.ScaleFactor = 1;
    SolverPickup.Column = ZOSAPI.Editors.LDE.SurfaceColumn.Thickness;
    Surface10.ThicknessCell.SetSolveData(Solver);
    SampleFile = System.String.Concat(TheApplication.SamplesDir, '\API\Matlab\e15_Seq_Optimization\OptimizedFile3.zos');
    TheSystem.SaveAs(SampleFile);
    %! [e15s11_m]
    
    %! [e15s12_m]
    %define merit function
    %load merit function
    TheMFE = TheSystem.MFE;
    OptWizard = TheMFE.SEQOptimizationWizard;
    
    %Optimize for smallest RMS Spot, which is "Data" = 1
    OptWizard.Data = 1;
    OptWizard.OverallWeight = 1;
    %Gaussian Quadrature with 3 rings (refers to index number = 2)
    OptWizard.Ring = 2;
    %Set air & glass boundaries
    OptWizard.IsGlassUsed = true;
    OptWizard.GlassMin = 3.0;
    OptWizard.GlassMax = 15.0;
    OptWizard.GlassEdge = 3.0;
    OptWizard.IsAirUsed = true;
    OptWizard.AirMin = 0.5;
    OptWizard.AirMax = 1000.0;
    OptWizard.AirEdge = 0.5;
    %And click OK!
    OptWizard.Apply();
    mf_filename = System.String.Concat(TheApplication.SamplesDir, '\API\Matlab\e15_Seq_Optimization\RMS_Spot_Radius.mf');
    TheMFE.SaveMeritFunction(mf_filename);
    TheMFE.LoadMeritFunction(mf_filename);
    SampleFile = System.String.Concat(TheApplication.SamplesDir, '\API\Matlab\e15_Seq_Optimization\OptimizedFile4.zos');
    %! [e15s12_m]
    
    %! [e15s13_m]
    % Run local optimization and measure time
    % Local optimization until completion
    tic;

    LocalOpt = TheSystem.Tools.OpenLocalOptimization();
    if ~isempty(LocalOpt)
        LocalOpt.Algorithm = ZOSAPI.Tools.Optimization.OptimizationAlgorithm.DampedLeastSquares;
        LocalOpt.Cycles = ZOSAPI.Tools.Optimization.OptimizationCycles.Automatic;
        LocalOpt.NumberOfCores = 8;
        fprintf('Local Optimization...\n');
        fprintf('Initial Merit Function %6.3f\n', LocalOpt.InitialMeritFunction);
        LocalOpt.RunAndWaitForCompletion();
        fprintf('Final Merit Function %6.3f\n', LocalOpt.CurrentMeritFunction);
        LocalOpt.Close();
    end
    
    % Get the elapsed time as a TimeSpan value.
    toc;
    %! [e15s13_m]
    
    %! [e15s14_m]
    % run global search
    GlobalOptimTimeInSeconds = 15;
    GlobalOpt = TheSystem.Tools.OpenGlobalOptimization();
    if ~isempty(GlobalOpt)
        GlobalOpt.Algorithm = ZOSAPI.Tools.Optimization.OptimizationAlgorithm.DampedLeastSquares;
        GlobalOpt.NumberOfCores = 8;
        fprintf('Global Optimization for %i seconds...\n', GlobalOptimTimeInSeconds);
        fprintf('Initial Merit Function %6.3%\n', GlobalOpt.InitialMeritFunction);
        GlobalOpt.NumberToSave = ZOSAPI.Tools.Optimization.OptimizationSaveCount.Save_10;
        GlobalOpt.RunAndWaitWithTimeout(GlobalOptimTimeInSeconds);
        for j =1:10
            fprintf('%i: %6.3f\n', j, GlobalOpt.CurrentMeritFunction(j));
        end
        GlobalOpt.Cancel();
        GlobalOpt.WaitForCompletion();
        GlobalOpt.Close();
    end
    %! [e15s14_m]
    
    %! [e15s15_m]
    %run hammer optimization
    HammerOptimTimeInSeconds = 15;
    HammerOpt = TheSystem.Tools.OpenHammerOptimization();
    if ~isempty(HammerOpt)
        HammerOpt.Algorithm = ZOSAPI.Tools.Optimization.OptimizationAlgorithm.DampedLeastSquares;
        HammerOpt.NumberOfCores = 8;
        fprintf('Hammer Optimization for %i seconds...\n', HammerOptimTimeInSeconds);
        fprintf('Initial Merit Function %6.3f\n',HammerOpt.InitialMeritFunction);
        HammerOpt.RunAndWaitWithTimeout(HammerOptimTimeInSeconds);
        fprintf('Final Merit Function %6.3f\n', HammerOpt.CurrentMeritFunction);

        HammerOpt.Cancel();
		HammerOpt.WaitForCompletion();
        HammerOpt.Close();
    end
    %! [e15s15_m]
    
    TheSystem.SaveAs(SampleFile);
    
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
