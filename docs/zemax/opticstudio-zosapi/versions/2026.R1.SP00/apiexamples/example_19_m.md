# Example 19 - Matlab

```matlab
function [ r ] = MATLABStandalone_Surface_Properties( args )

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
    
    % This code build a chain of prisms based on the KB article:
    % http://zemax.com/os/resources/learn/knowledgebase/how-to-work-in-global-coordinates-in-a-sequential
    TheSystem.New(false);
    
    %! [e19s01_m]
    % ISystemData represents the System Explorer in GUI.
    % We access options in System Explorer through ISystemData in ZOS-API
    TheSystemData = TheSystem.SystemData;
    TheSystemData.Aperture.ApertureValue = 10;
    TheSystemData.Aperture.AFocalImageSpace = true;
    TheSystemData.Wavelengths.GetWavelength(1).Wavelength = 0.55;
    %! [e19s01_m]
    
    TheSystem.SystemData.MaterialCatalogs.AddCatalog('SCHOTT');
    
    %! [e19s02_m]
    % Get interface of Lens Data Editor and add 3 surfaces.
    TheLDE = TheSystem.LDE;
    TheLDE.InsertNewSurfaceAt(2);
    TheLDE.InsertNewSurfaceAt(2);
    TheLDE.InsertNewSurfaceAt(2);

    % Set thickness and material for each surface.
    TheLDE.GetSurfaceAt(1).Thickness = 30;
    TheLDE.GetSurfaceAt(2).Thickness = 20;
    TheLDE.GetSurfaceAt(4).Thickness = 30;
    TheLDE.GetSurfaceAt(2).Material = 'N-BK7';
    %! [e19s02_m]
    
    %! [e19s03_m]
    % GetSurfaceAt(surface number shown in LDE) will return an interface ILDERow
    % Through property TiltDecenterData of each interface ILDERow, we can modify data in Surface Properties > Tilt/Decenter section
    TheLDE.GetSurfaceAt(2).TiltDecenterData.BeforeSurfaceOrder = ZOSAPI.Editors.LDE.TiltDecenterOrderType.Decenter_Tilt;
    TheLDE.GetSurfaceAt(2).TiltDecenterData.BeforeSurfaceTiltX = 15;
    TheLDE.GetSurfaceAt(2).TiltDecenterData.AfterSurfaceTiltX = -15;
    TheLDE.GetSurfaceAt(3).TiltDecenterData.BeforeSurfaceTiltX = -15;
    TheLDE.GetSurfaceAt(3).TiltDecenterData.AfterSurfaceTiltX = 15;
    %! [e19s03_m]

    %! [e19s04_m]
    % To specify an aperture to a surface, we need to first create an ISurfaceApertureType and then assign it.
    Rect_Aper = TheLDE.GetSurfaceAt(2).ApertureData.CreateApertureTypeSettings(ZOSAPI.Editors.LDE.SurfaceApertureTypes.RectangularAperture);
    Rect_Aper.S_RectangularAperture_.XHalfWidth = 10;
    Rect_Aper.S_RectangularAperture_.YHalfWidth = 10;
    TheLDE.GetSurfaceAt(2).ApertureData.ChangeApertureTypeSettings(Rect_Aper);
    TheLDE.GetSurfaceAt(3).ApertureData.PickupFrom = 2;
    %! [e19s04_m]
    
    %! [e19s05_m]
    % To change surface type, we need to first get an ISurfaceTypesettings and then assign it.
    SurfaceType_CB = TheLDE.GetSurfaceAt(4).GetSurfaceTypeSettings(ZOSAPI.Editors.LDE.SurfaceType.CoordinateBreak);
    TheLDE.GetSurfaceAt(4).ChangeType(SurfaceType_CB);
    %! [e19s05_m]

    %! [e19s06_m]
    % Set Chief Ray solves to surface 4, which is Coordinate Break
    % To set a solve to a cell in editor, we need to first create a ISolveData and then assign it.
    Solve_ChiefNormal = TheLDE.GetSurfaceAt(4).GetSurfaceCell(ZOSAPI.Editors.LDE.SurfaceColumn.Par1).CreateSolveType(ZOSAPI.Editors.SolveType.PickupChiefRay);
    TheLDE.GetSurfaceAt(4).GetSurfaceCell(ZOSAPI.Editors.LDE.SurfaceColumn.Par1).SetSolveData(Solve_ChiefNormal);
    TheLDE.GetSurfaceAt(4).GetSurfaceCell(ZOSAPI.Editors.LDE.SurfaceColumn.Par2).SetSolveData(Solve_ChiefNormal);
    TheLDE.GetSurfaceAt(4).GetSurfaceCell(ZOSAPI.Editors.LDE.SurfaceColumn.Par3).SetSolveData(Solve_ChiefNormal);
    TheLDE.GetSurfaceAt(4).GetSurfaceCell(ZOSAPI.Editors.LDE.SurfaceColumn.Par4).SetSolveData(Solve_ChiefNormal);
    TheLDE.GetSurfaceAt(4).GetSurfaceCell(ZOSAPI.Editors.LDE.SurfaceColumn.Par5).SetSolveData(Solve_ChiefNormal);
    %! [e19s06_m]
    
    %! [e19s07_m]
    % Copy 3 surfaces starting from surface number 2 in LDE and paste to surface number 5, which will become surface number 8 after pasting.
    for i =1:10
        TheLDE.CopySurfaces(2, 3, 5);
    end
    % Save file
    TheSystem.SaveAs(System.String.Concat(TheApplication.SamplesDir, '\API\Matlab\e19_Sample_Prism_Chain.zos'));
    %! [e19s07_m]
    
    %! [e19s08_m]
    % Run tool Convert Local To Global Coordinates to convert surface #2 to surface #35 to be globally referenced to surface #1
    TheLDE.RunTool_ConvertLocalToGlobalCoordinates(2, 35, 1);
    TheSystem.SaveAs(System.String.Concat(TheApplication.SamplesDir, '\API\Matlab\e19_Sample_Prism_Chain_GlobalCoordinate.zos'));
    %! [e19s08_m]

    %! [e19s09_m]
    % Run tool Conver Global To Local Coordinates to convert surface #1 to surface #57 back to local coordinate.
    TheLDE.RunTool_ConvertGlobalToLocalCoordinates(1, 57, ZOSAPI.Editors.LDE.ConversionOrder.Forward);
    TheSystem.SaveAs(System.String.Concat(TheApplication.SamplesDir, '\API\Matlab\e19_Sample_Prism_Chain_BackTo_LocalCoordinate.zos'));
    %! [e19s09_m]
    
    
    TheSystem.SaveAs('c:\temp\sc.zos');
    
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
