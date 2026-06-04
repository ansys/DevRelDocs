# Appendix A: Using OpenTD with MATLAB

While it is not feasible for us to maintain separate "Getting Started with OpenTD" guides for every programming language, we would still like to help you get started with OpenTD, even if you are not using C#. The following .m script is a MATLAB port of the program in the [Create and run a case](working-with-case-sets.md#create-and-run-a-case) section. This can be used as a sort of "Rosetta Stone" to help you translate other C# examples to MATLAB.

```MATLAB
%% Using OpenTD with MATLAB
% CRTech
% Tested with MATLAB R2023b

% OpenTD is an Application Programming Interface (API) for Thermal Desktop
% (TD) that allows you to automate many of the tasks currently performed
% interactively using TD’s Graphical User Interface (GUI). OpenTD gives you
% the tools to programmatically create, query, edit, delete, and run
% models. You can use any .NET language to interact with OpenTD (C#,
% VB.NET, F\#, etc.) or any system that can load .NET assemblies such as
% MATLAB or Python.

% Regardless of how you interact with OpenTD, you’ll need to have at least
% an intermediate understanding of .NET object-oriented programming. If you
% are starting from scratch, we recommend learning C#, since it is the
% language that we support. However, we understand that there might be
% compelling reasons for you to connect to OpenTD via MATLAB. It is
% possible, although the way MATLAB handles .NET enums is awkward and
% MATLAB does not support implicit constructors.

% To get started with OpenTD, read "Getting Started with OpenTD.pdf",
% which can be found in your TD v241 installation directory under "Manual".
% The Getting Started guide explains the fundamental concepts of OpenTD,
% using several C# examples. We've ported one of those examples to MATLAB
% below.

%% The "Create and Run a Case" example ported to MATLAB
% See "Getting Started with OpenTD.pdf" in your TD v241 installation
% directory under "Manual" for an explanation of this script.

% Note: Please contact us at crtech.support@ansys.com if you think there are
% better ways to use OpenTD with MATLAB, especially with regard to .NET
% enums and implicit constructors. For examples of awkward code, see how a
% node is set to be a boundary node and how the InitialTemp of a node is
% set -- in the script below vs. in the original C#.

openTD = NET.addAssembly('OpenTD');
import OpenTD.*;
td = ThermalDesktop;
td.Connect();

% *** Create a simple model of a heated bar ***
barNodes = NET.createArray('OpenTD.Node', 10);
for i = 1:10
    n = td.CreateNode();
    n.Submodel = SubmodelNameData('bar');
    n.Id = i;
    n.MassVol = 10;
    n.Origin = Point3d(0.01 * (i - 1), 1, 0);
    n.InitialTemp = Dimensional(n.InitialTemp, 300);
    n.Update();
    barNodes(i) = n;
end
for i = 1:9
    c = td.CreateConductor(...
    Connection(barNodes(i).Handle), Connection(barNodes(i+1).Handle));
    c.Submodel = SubmodelNameData('bar');
    c.Value = 0.1;
    c.Update();
end

roomAir = td.CreateNode();
roomAir.Submodel = SubmodelNameData('room');
roomAir.NodeType = OpenTD.('RcNodeData+NodeTypes').BOUNDARY;
roomAir.Origin = Point3d(0.055, 1.1, 0);
roomAir.InitialTemp = Dimensional(roomAir.InitialTemp, 300);
roomAir.Update();

barConnections = NET.createGeneric(...
    'System.Collections.Generic.List', {'OpenTD.Connection'},10);
for i = 1:10
    barConnections.Add(Connection(barNodes(i).Handle));
end
convection = td.CreateConductor(...
    Connection(roomAir.Handle), barConnections);
convection.Value = 1;
convection.Submodel = SubmodelNameData('room');
convection.Update();

qTorch = td.CreateSymbol('qTorch', '80');
heatLoadConnections = NET.createGeneric(...
    'System.Collections.Generic.List', {'OpenTD.Connection'},1);
heatLoadConnections.Add(Connection(barNodes(1).Handle));
torch = td.CreateHeatLoad(heatLoadConnections);
torch.ValueExp.Value = qTorch.Name;
torch.Submodel = SubmodelNameData('torch');
torch.Update();

td.ZoomExtents();
% *** End simple model creation ***

% Create a transient case and run it:
nominal = td.CreateCaseSet(...
    'transient with nominal torch', '', 'torchNom');
nominal.SteadyState = 0;
nominal.Transient = 1;
nominal.SindaControl.timend...
    = Dimensional(nominal.SindaControl.timend, 600);
nominal.Update();
nominal.Run();

% Create a cold case by overriding a symbol, and run it:
cold = td.CreateCaseSet(...
    'transient with cold torch', '', 'torchCold');
cold.SteadyState = 0;
cold.Transient = 1;
cold.SindaControl.timend...
    = Dimensional(nominal.SindaControl.timend, 1200);
cold.SymbolNames.Add(qTorch.Name);
cold.SymbolValues.Add('50');
cold.SymbolComments.Add('cold torch heat input');
cold.SaveAll = 1;
cold.Update();
cold.Run();

%% Working with Dimensionals

% All dimensional quanitities in the API are stored using a custom .NET
% generic type called a Dimensional. For example, a Dimensional<Temp>
% stores temperatures. Using C#, Dimensionals are implicitly cast to and
% from doubles as required, but this does not appear to work in MATLAB.
% Instead, we've overloaded the double function and created a Dimensional
% function to explicitly cast doubles to Dimensionals.

function x = double(Dimensional)
% Cast a .NET generic Dimensional type to a double
    x = Dimensional.op_Implicit(Dimensional);
end

function x = Dimensional(Dimensional, double)
% Cast a double to a .NET generic Dimensional type
    x = Dimensional.op_Implicit(double);
end

%% Acknowledgements

% Thank you to Dan Hensley and Daniel Reasa with ATA Engineering for
% performing some of the early work to determine how to use OpenTD with
% MATLAB.
```
