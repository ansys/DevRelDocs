# Example 08 - Matlab

```matlab
function [ r ] = MATLABStandaloneApplication3( args )

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
%{   
-. load \Samples\Non-Sequential\Scattering\ABg scattering surface.zos
1. delete object 3 (specular ray blocking)
2. insert detector polar positioned at same pos as object 2
      - retrieve obj 2 rotation matrix, match orientation
      - size = 20
   remove absorb material from obj 4
-. run ray trace
3/4. Save/Load Detector Data
5/6. get detector data for detector polar
      - retrieve single-value data with GetDetectorPolarData()
      - retrieve data grid (all pixels) with GetAllDetectorPolarDataSafe()
7/8. get detector rectangle data
      - retrieve single-value data with GetDetectorData()
      - retrieve data grid (all pixels) with GetAllDetectorDataSafe()
9/10. get coherent detector rectangle data
      - retrieve single-value data with GetCoherentData()
      - retrieve data grid (all pixels) with GetAllCoherentDataSafe()
%}
file = '\Samples\Non-sequential\Scattering\ABg scattering surface.zos';
DataDir = TheApplication.ZemaxDataDir;
filepath = System.String.Concat(DataDir, file);
TheSystem.LoadFile(filepath, false);

% creates a new API directory
apiPath = System.String.Concat(TheApplication.SamplesDir, '\API\Matlab');
if (exist(char(apiPath)) == 0) mkdir(char(apiPath)); end;


%! [e08s01_m]
% delete unnecessary object from NSCE
TheSystem.NCE.RemoveObjectAt(3);
% Add detector polar, change radial size to 20mm
obj3 = TheSystem.NCE.InsertNewObjectAt(3);
DetectorPolar = obj3.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.DetectorPolar);
obj3.ChangeType(DetectorPolar);
% Set the detector polar radial size to 20
obj3.GetCellAt(12).DoubleValue = 20; % cell 12 corresponds to 'Par2' in NSCE
%! [e08s01_m]

%! [e08s02_m]
% Co-locate object 3 with object 2 (here, could alternatively use Ref Object flag)
[success, R11, R12, R13, R21, R22, R23, R31, R32, R33, Xo, Yo, Zo]= TheSystem.NCE.GetMatrix(2);
obj3.XPosition = Xo;
obj3.YPosition = Yo;
obj3.ZPosition = Zo;
% Conversion from rotation matrix to tilts described in KBA "Rotation Matrix and Tilt About X/Y/Z in OpticStudio"
obj3.TiltAboutX = rad2deg(atan2(-1*R23,R33));
obj3.TiltAboutY = rad2deg(asin(R13));
obj3.TiltAboutZ = rad2deg(atan2(-1*R12, R11));     
%! [e08s02_m]

% Remove ABSORB material from object 4
TheSystem.NCE.GetObjectAt(4).Material = '';
% Run the ray trace
RayTrace = TheSystem.Tools.OpenNSCRayTrace();
RayTrace.ClearDetectors(0); % clear the old detector data!
RayTrace.ScatterNSCRays = true;
RayTrace.UsePolarization = false;
RayTrace.SplitNSCRays = false;
RayTrace.IgnoreErrors = true;
RayTrace.RunAndWaitForCompletion();
RayTrace.Close();

% The next two steps are technically unnecessary in this case; since we just ran the 
% ray trace, the results are already there. But, we demonstrate usage here anyways
%! [e08s03_m]
% Save detector data -- allows ray trace results to be loaded later
% For detector polar, the file type is .DDP; for detector rectangle, it's .DDR
DetectorPolarFile = System.String.Concat(TheApplication.ZemaxDataDir, '\Samples\API\MATLAB\detector3polar.DDP');
DetectorRectFile = System.String.Concat(TheApplication.ZemaxDataDir, '\Samples\API\MATLAB\detector4rect.DDR');
TheSystem.NCE.SaveDetector(3, DetectorPolarFile);
TheSystem.NCE.SaveDetector(4, DetectorRectFile);
%! [e08s03_m]

%! [e08s04_m]
% Load detector data -- for analyzing previous ray trace results
% For detector polar, the file type is .DDP; for detector rectangle, it's .DDR
DetectorPolarFile = System.String.Concat(TheApplication.ZemaxDataDir, '\Samples\API\MATLAB\detector3polar.DDP');
DetectorRectFile = System.String.Concat(TheApplication.ZemaxDataDir, '\Samples\API\MATLAB\detector4rect.DDR');
TheSystem.NCE.LoadDetector(3, DetectorPolarFile, false);
TheSystem.NCE.LoadDetector(4, DetectorRectFile, false);
%! [e08s04_m]

%! [e08s05_m]
% Here we read in the detector polar data from ZOS
% GetPolarDetectorData() is very similar to the MF operand NSDP;
% can retrieve RMS (degrees), total power, chromaticity, etc. (see NSDP in OpticStudio Help)
% Note: GetPolarDetectorData() uses an enumeration for data type, shown here
DataFlag_Power = ZOSAPI.Editors.NCE.PolarDetectorDataType.Power;
DataFlag_ChromX = ZOSAPI.Editors.NCE.PolarDetectorDataType.Cx;
DataFlag_ChromY = ZOSAPI.Editors.NCE.PolarDetectorDataType.Cy;
[success, DetPolarData_RadialRMS] = TheSystem.NCE.GetPolarDetectorData(3, -4, DataFlag_Power); % obj=3, pix=-4, data=power enum    
[success, DetPolarData_ChromX] = TheSystem.NCE.GetPolarDetectorData(3, 0, DataFlag_ChromX); % obj=3, pix=0, data=chromaticityX enum
[success, DetPolarData_ChromY] = TheSystem.NCE.GetPolarDetectorData(3, 0, DataFlag_ChromY); % obj=3, pix=0, data=chromaticityY enum
%! [e08s05_m]

%! [e08s06_m]
% To retrieve the entire data array (power, tristim. X/Y/Z, etc. for each pixel)
% can use GetAllPolarDetectorDataSafe(), or GetAllPolarDetectorData().
% Note: GetPolarDetectorData uses an enumeration for data type, shown here
DataFlag_TriX = ZOSAPI.Editors.NCE.PolarDetectorDataType.TriX;
DataFlag_TriY = ZOSAPI.Editors.NCE.PolarDetectorDataType.TriY;
DataFlag_TriZ = ZOSAPI.Editors.NCE.PolarDetectorDataType.TriZ;
% ".double" converts the .NET type System.Double to a MATLAB double array
DetPolarData_TriX = TheSystem.NCE.GetAllPolarDetectorDataSafe(3, DataFlag_TriX).double; % Tristimulus X value polar pixel
DetPolarData_TriY = TheSystem.NCE.GetAllPolarDetectorDataSafe(3, DataFlag_TriY).double; % Tristimulus Y value on each pixel
DetPolarData_TriZ = TheSystem.NCE.GetAllPolarDetectorDataSafe(3, DataFlag_TriZ).double; % Tristimulus Z value on each pixel
%! [e08s06_m]

%! [e08s07_m]
% Here we read in the detector rectangle data
% GetDetectorData() is very similar to the operand NSDD
% can retrieve Std Deviation, # of rays, total power, etc.; data calculated over whole detector or individual pixel
[success, DetRectangleData_StdDev] = TheSystem.NCE.GetDetectorData(4, -4, 0);  % obj=4, pix=-4, data=0  
%! [e08s07_m]

%! [e08s08_m]    
% To retrieve the entire data array (flux, flux/area, etc.) for all pixel data,
% can use GetAllDetectorDataSafe() or GetAllDetectorData().
% The 'Data' inputs for these functions (parameter 2) can be found in the API syntax help,
% under the listing for GetDetectorData. 
% ".double" converts the .NET type System.Double to a MATLAB double array
DetRectangleData_Flux = TheSystem.NCE.GetAllDetectorDataSafe(4, 0).double; % total flux on each pixel
DetRectangleData_FluxArea = TheSystem.NCE.GetAllDetectorDataSafe(4, 1).double; % flux/area on each pixel
DetRectangleData_FluxSAP = TheSystem.NCE.GetAllDetectorDataSafe(4, 2).double; % flux/solid angle pixel on each pixel
%! [e08s08_m]

% Finally, let's read coherent data.
% The coherent data is meaningless in this example, but it serves to demonstrate API usage and functionality.
%! [e08s09_m]
% Read in the detector rectangle coherent data
% GetCoherentData() is very similar to the operand NSDC
% can retrieve real, imaginary, amplitude, power, with 'data' input
% for pix=0, get sum on detector; pix>0 gives single pixel data
[success, DetRectangle_CoherentAmp] = TheSystem.NCE.GetCoherentData(4, 0, ZOSAPI.Editors.NCE.DetectorDataType.Amplitude);  % obj=4, pix=0, data=2  
[success, DetRectangle_CoherentPower] = TheSystem.NCE.GetCoherentData(4, 0, ZOSAPI.Editors.NCE.DetectorDataType.Power);  % obj=4, pix=0, data=3  
%! [e08s09_m]

%! [e08s10_m]    
% Retrieve whole data array with GetAllCoherentDataSafe(), or GetAllCoherentData(). 
% The 'Data' input functions similarly to NSDC (real, imaginary, amplitude, power)
% Note: divide coherent power by pixel area to get coherent irradiance
DetRectangle_CoherentPowerFull = TheSystem.NCE.GetAllCoherentDataSafe(4, ZOSAPI.Editors.NCE.DetectorDataType.Power).double;  % obj=4, data=3 
%! [e08s10_m]

OutFile = System.String.Concat(DataDir, '\Samples\API\MATLAB\MATLAB_08_NSCEDetectorData.zos');
TheSystem.SaveAs(OutFile);

% from here, we can plot or analyze any detector data we want!

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
