# System Coupling Commands

This document provides detailed information on the commands you can use to interact with System Coupling from the command line, whether from System Coupling's command-line interface (CLI) or from the **Command Console** tab of its graphical user interface (GUI).

---

## `AddAerodampingDataTransfers`

### Description

Adds data transfer for each specified mode shape.

Returns the name of the Data Transfers created.

### Essential Keyword Arguments

- **Interface**: String indicating the name of the interface on which the data transfer
is to be created.

### Optional Keyword Arguments

- **ModeShapes**: List of mode shapes to transfer. If not provided, a
data transfer is created for each available modeshape.

### Example

```python
#Add a group of data transfers for aerodamping physics:
>>> AddAerodampingDataTransfers(Interface = "Interface-1", ModeShapes = ['ModeShape_Mode1_HI1', 'ModeShape_Mode3_HI2'])
['ModeShape_Mode1_HI1', 'ModeShape_Mode3_HI2']
```

## `AddDataTransfer`

### Description

Adds data transfer based on arguments that specify the interface, target
side, and variables to be associated with each side of the interface.
The command requires that you specify variables using their names, as
described below in Essential Keyword Arguments. Either a variable-based or
expression-based data transfer may be created with this command based on
the Optional Keyword Arguments. If a variable-based data transfer argument
is given, then no expression-based data transfer arguments can be used. If
an expression-based data transfer argument is given, then no variable-based
data transfer arguments can be used.

Cannot be run after participants have been started.

Returns the name of the Data Transfer created.

### Essential Keyword Arguments

- **Interface**: String indicating the name of the interface on which the data transfer
is to be created.
- **TargetSide**: String indicating the side of the interface to receive the data
transfer variable. Possible values are 'One' or 'Two'.

### Optional Keyword Arguments

- **SourceVariable**: String specifying the name of the variable on the source side of
the data transfer. Used when creating a variable-based data transfer.
Must be combined with TargetVariable.
- **TargetVariable**: String specifying the name of the variable on the target side of
the data transfer. Must be combined with either SourceVariable (when
creating a variable-based data transfer) or with Value{X|Y|Z}
(when creating an expression-based data transfer).
- **Value**: String specifying the expression to use on the source side of the data
transfer. Used when creating an expression-based data transfer. If the
TargetVariable is a vector, a vector-valued expression must be provided.
Alternatively, ValueX, ValueY, ValueZ may be used to specify the
individual components of the vector expression.
- **ValueX**: String specifying the X component of the expression to use on the
source side of the data transfer. This may optionally be used when creating
an expression-based data transfer if the TargetVariable is a vector as an
alternative to specifying a vector-valued expression in Value. ValueY and
ValueZ are also required if ValueX is used.
- **ValueY**: String specifying the Y component of the expression to use on the
source side of the data transfer. This may optionally be used when creating
an expression-based data transfer if the TargetVariable is a vector as an
alternative to specifying a vector-valued expression in Value. ValueX and
ValueZ are also required if ValueY is used.
- **ValueZ**: String specifying the Z component of the expression to use on the
source side of the data transfer. This may optionally be used when creating
an expression-based data transfer if the TargetVariable is a vector as an
alternative to specifying a vector-valued expression in Value. ValueX and
ValueY are also required if ValueZ is used.
- **SideOneVariable**: String specifying the name of the variable associated with side1
of the interface. Must be combined with SideTwoVariable. Used only
when creating variable-based data transfers. Consider using
SourceVariable/TargetVariable parameters instead.
- **SideTwoVariable**: String specifying the name of the variable associated with side2
of the interface. Must be combined with SideTwoVariable. Used only
when creating variable-based data transfers. Consider using
SourceVariable/TargetVariable parameters instead.

### Examples

#### Example 1

```python
#Add a variable-based data transfer:
>>> AddDataTransfer(Interface = "Interface-1",
TargetSide = "One",
SourceVariable = "force",
TargetVariable = "FORC")
```

#### Example 2

```python
#Add an expression-based data transfer:
>>> AddDataTransfer(Interface = "Interface-1",
TargetSide = "One",
TargetVariable = "Temperature",
Value = "300 [K] if Step  < 3 else temperature")
```

#### Example 3

```python
#Add an expression-based vector data transfer:
>>> AddDataTransfer(Interface = "Interface-1",
TargetSide = "One",
TargetVariable = "INCD",
Value = "vector(
INCD * Position.x / 1 [m],
INCD * Position.y / 0.5 [m],
INCD * Position.z / 0.02 [m])")
```

## `AddExpressionFunction`

### Description

Creates an expression function object in the data model that makes
available an external Python function for use in expressions.

The parameters specified should correspond to a module and function
that exists and can successfully be loaded when the application
starts. Otherwise, the data model object will be created but there
will be validation errors and the function will not be available for
use.

### Essential Keyword Arguments

- **Module**: The name of the Python module (in the 'Modules' sub-directory of
the working directory) from which the function is to be obtained.
- **Function**: The name of the function in the module. If no FunctionName is
specified, this will also be the name by which the function should
be referenced when used in an expression.

### Optional Keyword Arguments

- **FunctionName**: Optionally specify a different name from Function which should be
the name used to reference the function in an expression.

### Examples

#### Example 1

```python
#If the parameters are valid, 'f' is available to be referenced with
#appropriate arguments in an expression - e.g. "2 * f(Time)".
>>>AddExpressionFunction(Module='my_module', Function='f')
```

#### Example 2

```python
#If the parameters are valid, 'f1' is available to be referenced with
#appropriate arguments in an expression - e.g. "2 * f1(Time)".
>>>AddExpressionFunction(Module='my_module', Function='f', FunctionName='f1')
```

## `AddFSIDataTransfers`

### Description

Adds group of data transfers for FSI physics.

Returns the list of the data transfers created.

### Essential Keyword Arguments

- **Interface**: String indicating the name of the interface on which the data transfer
is to be created.

### Optional Keyword Arguments

- **UseForceDensity**: Boolean indicating whether to prefer force density variable over force. Default value is False.

### Example

```python
#Add a group of data transfers for FSI physics:
>>> AddFSIDataTransfers(Interface = "Interface-1")
['FORC', 'displacement']
```

## `AddFlowBoundaryDataTransfers`

### Description

Adds group of data transfers for flow boundary coupling.

Returns the list of the data transfers created.

### Essential Keyword Arguments

- **Interface**: String indicating the name of the interface on which the data transfer
is to be created.

### Example

```python
#Add a group of data transfers for flow boundary coupling:
>>> AddFlowBoundaryDataTransfers(Interface = "Interface-1")
['mass-flow-rate', 'backflow-total-temperature']
```

## `AddInterface`

### Description

Adds an interface based on the participant and region names specified
as arguments for each side of the interface. This command requires that
you specify participants using their names as described below in
Essential Keyword Arguments. Non-FMU participants can provide a list
of regions as described below in Optional Keyword Arguments. For FMU
interfaces, specifying the regions are not allowed.

Cannot be run after participants have been started.

Returns the name of the Interface created.

### Essential Keyword Arguments

- **SideOneParticipant**: String indicating the name of the participant to be associated with
side One of the interface.
- **SideTwoParticipant**: String indicating the name of the participant to be associated with
side Two of the interface.

### Optional Keyword Arguments

- **SideOneRegions**: List specifying the name(s) of region(s) to be added to side One of
the interface. Must be provided if SideOneParticipant is not an FMU.
- **SideTwoRegions**: List specifying the name(s) of region(s) to be added to side Two of
the interface. Must be provided if SideOneParticipant is not an FMU.

### Examples

#### Example1

```python
#Create interface by specifying participant name and region names for each
#side of the interface.
>>> AddInterface(SideOneParticipant = "MAPDL-1",
SideOneRegions = ["FSIN_1"],
SideTwoParticipant = "FLUENT-2",
SideTwoRegions = ["wall"])
```

#### Example2

```python
#Create an interface between an FMU and a non-FMU participant.
>>> AddInterface(SideOneParticipant = "MAPDL-1",
SideOneRegions = ["FSIN_1"],
SideTwoParticipant = "FMU-2")
```

## `AddNamedExpression`

### Description

Creates a named expression object in the data model.
If there is already an object in the data model whose 'ExpressionName'
matches the provided ExpressionName, its 'ExpressionString' will be
overwritten with the provided ExpressionString

### Essential Keyword Arguments

- **ExpressionName**: The name by which this expression should be referenced when used in
another expression.
- **ExpressionString**: String containing the definition of the expression.

### Example

```python
#create a named expression called 'twoPi' that evaluates to 2 * pi:
>>>AddNamedExpression(ExpressionName='twoPi', ExpressionString='2 * pi')
#'twoPi' is now available to be referenced in any other expression.
```

## `AddOrderedDataTransfers`

### Description

Adds data transfer for each ordered pair of variables in an
FMU-FMU interface. Requires the FMU-FMU interface. Requires
that the target FMU has the same number of input variables
as the source FMU has output variables.
The transfers are added in order. That is, the n-th output
variable for side one will be connected to the n-th input
variable for side two. This is only available for interfaces
with FMUs on both side one and side two.

Data transfers will be created in both directions, if possible.

Returns the name of the data transfers created.

### Essential Keyword Arguments

- **Interface**: String indicating the name of the interface on which the data transfer
is to be created.

### Example

```python
#Add a group of ordered data transfers for an FMU-FMU interface:
>>> AddOrderedDataTransfers(Interface = "Interface-1")
['Real_1', 'Real_2', 'Real_3']
```

## `AddParticipant`

### Description

Adds a coupling participant to the setup.
Cannot be called after participants have been started.
Returns the name of the participant.

There are several options that can be selected to add the
participant - via a file, via a participant executable, or via a
Python script. Some of these options may be combined. For example,
sometimes it is useful to use an input file while at the same time
providing a custom participant executable or Python script.

Option 1: Using an input file

Given an input file containing participant coupling information, reads the
specified file, pushes the participant's information to the data model.

Option 2: Using a participant executable

Given the path to the executable for this participant (and optionally,
additional arguments and/or working directory), start the participant
executable, connect to the participant using the socket connection,
and get the participant's information and add it to the data model.

Option 3: Using a Python script

This can be seen as a special case of Option 2 (using an executable),
but instead of an executable, a Python script is used. System Coupling
will invoke a specialized script to set up the environment so
that the Python script can more easily interact with System Coupling.

### Optional Keyword Arguments

- **ParticipantType**: Participant type. To get a list of supported participant types, use
the GetSupportedParticipantTypes() query. If unspecified,
AddParticipant will attempt to deduce the type from InputFile.
- **InputFile**: Name of the input file for the participant to be added.
Currently supported formats are SCP files, Forte input (FTSIM)
files, mechanical server (*.rst) files, cfd server (*.csv) files,
FMU (.fmu) files (Beta), and system coupling data server (*.scdt/axdt/csv) files.
- **Executable**: Path to the executable file for the participant to be added.
- **AdditionalArguments**: Any additional arguments to be passed to the participant's executable.
- **WorkingDirectory**: Path to the working directory for this participant.
- **PythonScript**: Instead of the executable, use a Python script and wrap it with
System Coupling-provided .bat/.sh scripts to set up the environment
correctly before calling this Python script. On Windows, a few
lines will need to be included near the top of the Python script to
add the required dll directories as follows:
if sys.platform.startswith("win"):
    for p in os.environ["PYTHON_DLL_PATH"].split(os.pathsep):
        os.add_dll_directory(p)

### Examples

#### Example1

```python
#Add a participant to a coupled analysis via an input file:
>>> AddParticipant(InputFile = "MAPDL.scp")
```

#### Example2

```python
#Add a participant to a coupled analysis via an executable:
>>> AddParticipant(Executable = "participantSolver.bat")
```

#### Example3

```python
#Add a participant to a coupled analysis via a Python script:
>>> AddParticipant(PythonScript = "participantSolver.py")
```

#### Example4

```python
#Add a participant to a coupled analysis via a Python script and
#an SCP file:
>>> AddParticipant(InputFile = "setup.scp",
PythonScript = "participantSolver.py")
```

## `AddReferenceFrame`

### Description

Add a reference frame to the datamodel

The function will add a blank reference frame to the datamodel. Any
transformations must be added separately.

Reference frame name will be "Frame-#" where # is the first positive
integer which yields a unique frame name.

Returns the name of the reference frame.

### Optional Keyword Arguments

- **ParentReferenceFrame**: Name of a reference frame that the added frame should use as the
parent. If the argument is not provided, the default parent reference
frame "GlobalReferenceFrame" will be added.

### Example

```python
#Add a reference frame with a parent reference frame:
>>> AddReferenceFrame(ParentReferenceFrame = "Frame-3")
'Frame-4'
```

## `AddThermalDataTransfers`

### Description

Adds group of data transfers for thermal physics.

Returns the list of the data transfers created.

### Essential Keyword Arguments

- **Interface**: String indicating the name of the interface on which the data transfer
is to be created.

### Optional Keyword Arguments

- **Option**: Thermal data transfer option: 'Heat Rate' (default) or
'Heat Transfer Coefficient' (possible for surface-surface transfers).

### Example

```python
#Add a group of data transfers for thermal physics:
>>> AddThermalDataTransfers(Interface = "Interface-1", Option = 'HeatRate')
['temperature', 'HFLW']
```

## `AddTransformation`

### Description

Add a transformation to a reference frame defined in the datamodel

Given the reference frame to add to the transform to, the type of transform
to be added, and any required information for the transformation, add the
transformation to the referenceFrame. Not all parameters are required for
every transformation.

The name of the transformation will be based on the type of transformation.
The name will be of the form "<TransformationType>-#" where # is the first
positive integer which yields a unique frame name.

The transformation will also be added to the end of the TransformationOrder
list for the reference frame.

Returns the name of the transformation.

### Essential Keyword Arguments

- **ReferenceFrame**: Name of the reference frame to which the transformation will be added.
- **TransformationType**: Type of transformation to be added. Available options are Rotation or
Translation

Required Parameters for Transformation Types:
    Rotation: Angle, Axis, Vector (if Axis is "UserDefined")
    Translation: Vector

### Optional Keyword Arguments

- **Angle**: Angle to rotate a reference frame. Used with Rotation
TransformationType. Default unit is Radians.
- **Axis**: Axis about which a rotation is applied. Used with
Rotation TransformationType. Available options are: "XAxis", "YAxis",
"ZAxis", and "UserDefined".
- **Vector**: A vector for use with Translation TransformationType or Rotation
TransformationType if the Axis is "UserDefined".

### Example

```python
#Add a translation transformation to a reference frame:
>>> AddTransformation(
ReferenceFrame = "Frame-1",
TransformationType = "Rotation",
Axis = "XAxis",
Angle = "7 [deg]")
'Rotation-3'
```

## `ClearState`

### Description

Clears the state of the entire System Coupling service, removing all
data model items, parameter values, and calculated values.

Cannot be run after participants have been started.

## `ConnectEnSightDVS`

### Description

Allow System Coupling to create DVS clients and connect these clients to
the dvs server that is already launched in another process/thread remotely.

When this command is issued, System Coupling is connected to remote EnSight
and the in-situ data streaming from system coupling to EnSight is ready.

### Optional Keyword Arguments

- **Port**: DVS Server port that System Coupling would connect to. Default value is 50055.
- **HostName**: DVS Server host name that System Coupling would connect to. Default value is "127.0.0.1".

### Example

```python
#Connect to EnSight DVS server launched in the machine with the
#above host name and port number.
>>> ConnectEnSightDVS(Port=50055,HostName="127.0.0.1")
```

## `CreateNamedExpression`

### Description

Important: this command is deprecated and will be removed in a future
release. The command AddNamedExpression has identical functionality
and should be used instead.

Creates a named expression object in the data model.
If there is already an object in the data model whose 'ExpressionName'
matches the provided ExpressionName, its 'ExpressionString' will be
overwritten with the provided ExpressionString.

### Essential Keyword Arguments

- **ExpressionName**: The name by which this expression should be referenced when used in
another expression.
- **ExpressionString**: String containing the definition of the expression.

### Example

```python
#create a named expression called 'twoPi' that evaluates to 2 * pi:
>>>CreateNamedExpression(ExpressionName='twoPi', ExpressionString='2 * pi')
#'twoPi' is now available to be referenced in any other expression.
```

## `CreateRestartPoint`

### Description

Interactive command that creates a restart point at the end of the
last completed coupling step.

Signals the System Coupling service and all coupling participants that a
restart point should be created before the next coupling step begins. The
restart point is created in addition to restart points created by the
'OutputControl' setting in the data model.

Note that some participants write their restart files only when the
coupling run resumes, so their files will not be available immediately
after the command is issued.

Results information for the coupling step is written to a file named
according to the convention "Results_step<#>|iter<#>.h5", where "#" is the number of
the coupling step or iteration. The restart files are written to the "SyC"
directory, which is automatically created by System Coupling.

## `DeleteObject`

### Description

Deletes the specified object from the data model.

### Essential Keyword Arguments

- **ObjectPath**: String indicating the path of the object to be deleted.

### Example

```python
#Delete an interface object from the data model
>>> DeleteObject(ObjectPath = '/SystemCoupling/CouplingInterface:
interface-1')
```

## `DeleteSnapshot`

### Description

Deletes the specified snapshot.
If the snapshot does not exist, an error will
be raised.

### Essential Keyword Arguments

- **SnapshotName**: Name of the snapshot to be deleted.

### Example

```python
#Delete a snapshot called 'Initial'
>>> DeleteSnapshot(SnapshotName='Initial')
```

## `DeleteTransformation`

### Description

Delete a transformation from a reference frame

In addition to deleting the transformation object, it will also remove the
transformation from TransformationOrder (if it exists in that list).

### Essential Keyword Arguments

- **ReferenceFrame**: Name of the reference frame from which the transformation will be
deleted.
- **TransformationName**: Name of the transformation which will be deleted.

### Example

```python
#Delete a transformation from a reference frame:
>>> DeleteTransformation(
ReferenceFrame = "Frame-1",
TransformationName = "Rotation-3")
```

## `ExecuteCommandString`

### Description

Executes a command in the Python interpreter, enabling you to issue a
generic Python command to the System Coupling Service.

### Essential Keyword Arguments

- **CommandString**: String indicating the command to be executed.

### Example

```python
#Execute a command string to print the state of a singleton
>>> ExecuteCommandString(CommandString = 'DatamodelRoot()
.OutputControl.PrintState()')
OutputControl
Option = LastStep
```

## `GenerateInputFile`

### Description

Generates the input journal file for a given Fluent participant.

Available for Fluent participants when FluentInput.Option is not
set to JournalFile.

Given the participant's name and a file name, generates a Fluent
journal script which may be set as the value for the JournalFile
setting.

System Coupling uses the generated scrkpt for the coupled analysis.

Scripts generated using this method may be edited before the
coupled analysis is started.

### Essential Keyword Arguments

- **ParticipantName**: Name of the participant for which the execution command will
be returned.
- **FileName**: Name of the journal script to be written. Note that this name is relative
to the participant's working directory.

### Example

```python
#Get a participant's execution command
>>> GenerateInputFile(ParticipantName = 'FLUENT-1', FileName = 'fluent.jou')
```

## `GetErrors`

### Description

If errors exist, returns them as a list of dictionaries containing error
details; otherwise, returns an empty list. See also: GetErrorsXML().

## `GetExecutionCommand`

### Description

Gets the execution command needed to start the specified participant.

### Essential Keyword Arguments

- **ParticipantName**: Name of the participant for which the execution command will
be returned.

### Example

```python
#Get a participant's execution command
>>> GetExecutionCommand(ParticipantName = 'MAPDL-1')
'"C:\Program Files\ANSYS Inc\v261\ansys\bin\winx64\ANSYS252.exe"
-b nolist -s noread -o MAPDL-1.out -scport 55122
-schost 127.0.0.1 -scname "MAPDL-1" -i ds.dat'
```

## `GetRegionNamesForParticipant`

### Description

This query is deprecated and will be deleted in future releases.
To get region names for a participant, you can use GetChildNames()
query, for example:

DatamodelRoot().CouplingParticipant[name].Region.GetChildNames()

### Essential Keyword Arguments

- **ParticipantName**: Name of the participant.

## `GetTransformation`

### Description

Given an interface and side, returns the resultant transformation, in
the form of a Python dictionary and formatted as a DataModel
ReferenceFrame object. If multiple transformations are applied to the
interface side, the composite transformation is returned.

This command can only be invoked after the analysis
is initialized.

### Essential Keyword Arguments

- **InterfaceName**: Name of the interface
- **Side**: Interface side. Can be "One" or "Two".

### Example

```python
#Get the transformation for an interface side:
>>> t = GetTransformation(InterfaceName = "Interface-1", Side = "One")
```

## `ImportSystemCouplingInputFile`

### Description

Reads the specified System Coupling SCI file and pushes its information
into the data model. The SCI file is the required System Coupling input
format for the initial run of a coupled analysis set up in Workbench.

After the initial run based on an imported SCI file, a reissue
of the ImportSystemCouplingInputFile command is unnecessary and is
not recommended unless the setup has changed.

Cannot be run after participants have been started.

### Essential Keyword Arguments

- **FilePath**: Path and file name for the SCI file to be read.

### Example

```python
#Import an SCI file for an initial run
>>> ImportSystemCouplingInputFile(FilePath = 'scInput.sci')
```

## `Initialize`

### Description

Interactive command that initializes a coupled analysis.

Initialization includes preparing System Coupling, making connections
between System Coupling and all participants, starting participants (if
necessary), and writing participant build information to the Transcript
and Log.

Note that if the ExecutionControl Option for a participant is set to
ExternallyManaged, then System Coupling will not start the participant
using either this command or any of the other commands that automatically
start participants. The user is expected to manually start the participant.
This function will not return until all participants have been connected.

Note that this command will raise an exception if another instance of
System Coupling is solving in the current working directory.

## `Map`

### Description

Command to perform map operation.

When user friendly mapping workflow is enabled, this command will perform
the map operation between the interfaces as part of the user friendly mapping
workflow.
Otherwise, this operation would clears all existing state, except for datamodel,
before beginning the operation.

## `Open`

### Description

Reads the state of a coupled analysis. The state consists of settings to
populate the datamodel and results to restart the analysis at the end of
a specified coupling step.

Settings are stored in a file named Settings.h5. Results files may
correspond either to coupling iterations or coupling steps, depending on
the analysis type and the types of participants involved.

By default, this command looks for the "SyC" directory in the current
working directory. By default, if multiple Results files exist, the
most recent one is opened.

If given optional arguments, behaves as described below in "Optional
Keyword Arguments".

Cannot be run after the participants have been started.

### Optional Keyword Arguments

- **FilePath**: Directory containing the .h5 file(s) to be read. When used, the
System Coupling Service looks for files in the specified directory.
Default is 'SyC'. It is recommend to not use anything other than
a default directory for the FilePath.
- **CouplingStep**: Integer specifying the coupling step at which the coupled analysis is
restarted. When used, System Coupling reads the corresponding
Results_step<#>.h5 file in the specified directory and restarts the
analysis at the end of the specified coupling step. When this argument
is used, System Coupling automatically removes the output files related
to all later coupling steps. If the files cannot be removed, then
System Coupling generates an exception message instructing you to free
up the files and reissue the Open command with the CouplingStep
argument. If the simulation's Results files are associated with
coupling iterations, then System Coupling prints an error message
indicating this.
- **CouplingIteration**: Integer specifying the coupling iteration at which the coupled analysis
is restarted. When used, System Coupling reads the corresponding
Results_iter<#>.h5 file in the specified directory and restarts the
analysis at the end of the specified coupling iteration. When this
argument is used, System Coupling automatically removes the output
files related to all later coupling iterations. If the files cannot be
removed, then System Coupling generates an exception message
instructing you to free up the files and reissue the Open command with
the CouplingIteration argument. If the simulation's Results files are
associated with coupling steps, then System Coupling prints an error
message indicating this.

### Examples

#### Example 1

```python
#Load the last solved coupling step
>>> Open()
```

#### Example 2

```python
#Load coupling step 6
>>> Open(CouplingStep = 6)
```

#### Example 3

```python
#Load coupling iteration 7
>>> Open(CouplingIteration = 7)
```

## `OpenResultsInEnSight`

### Description

Allows for System Coupling results to be postprocessed in EnSight.

When this command is issued, System Coupling looks for the Results.enc
file in the SyC/Results subdirectory of the current working directory.

When System Coupling finds the file, it loads the file into EnSight and
generates a confirmation message indicating that results are being opened.

If System Coupling is unable to find the Results.enc file and/or the
EnSight executable, then it raises an error.

The OpenResultsInEnSight command may be issued multiple times from the same
instance of System Coupling. Each time the command is issued, a new
instance of the EnSight application is opened. Any existing instances of
EnSight remain open, both when additional instances are created and when
System Coupling exits.

### Optional Keyword Arguments

- **FileName**: The basename of the EnSight case file if using a non-standard file
name. Overrides the default file name "Results".
- **FilePath**: The path to the EnSight case if using a non-standard location.
Overrides the default path of SyC/Results.

### Example

```python
#Open results in EnSight using the default file name and path:
>>> OpenResultsInEnSight()
"Results are being opened in EnSight"
```

## `OpenSnapshot`

### Description

Opens a snapshot containing a previously saved state of the simulation.
All state (files and directories) stored in the snapshot will be restored.
If other state exists in the working directory, then it will not be
modified by this command.

Note: Snapshot cannot be opened if participants have been started.

### Optional Keyword Arguments

- **SnapshotName**: The name of the snapshot to be opened. This is optional if and only if
there is only one snapshot available to be loaded. If multiple
snapshots exist, then the snapshot name must be specified.

### Example

```python
#Open a snapshot called 'InitialState'
>>> OpenSnapshot(SnapshotName='InitialState')
```

## `PartitionParticipants`

### Description

Provide a utility for setting the parallel algorithm, parallel partitioning
fractions for each participant, and machine list information.

At least one participant must be defined for this command to be used. Use
of this command is not recommended if participants are already running.

Note:
Ansys recommends only using this command for the Custom partitioning algorithm.

When other algorithms are used (SharedAllocateMachines,
DistributedAllocateCores, etc.) the algorithm should be specified directly,
for example:

DatamodelRoot().AnalysisControl.PartitioningAlgorithm = "SharedAllocateMachines"

The participant parallel fractions can also be specified directly, for example:

DatamodelRoot().CouplingParticipant["FLUENT-1"].ExecutionControl.ParallelFraction = 0.5

The machine list should be specified via System Coupling command line arguments,
for example:

<v261>/SystemCoupling/binsystemcoupling --cnf="hostA:4,hostB:4"

### Optional Keyword Arguments

- **AlgorithmName**: Name of the partitioning algorithm. Available algorithms are:
'SharedAllocateMachines'(default), 'SharedAllocateCores',
'DistributedAllocateMachines', 'DistributedAllocateCores',
and 'Custom' (please see PartitioningInfo section below for more details
for this algorithm). The algorithms allow for both shared and distributed execution and for
the allocation of machines or cores. The default value is generally the
best choice, as it allows for each participant to take advantage of all
the allocated resources. The other partitioning methods are provided to
handle situations where not enough resources are available to run the
same machines. See the System Coupling documentation for more details of the
partitioning algorithms.
- **NamesAndFractions**: List of tuples specifying the fractions of core count applied for
each participant. Each tuple must have the ParticipantName as its first item and the
associated fraction as its second item. If this parameter is omitted,
then cores will be allocated for all participants set in the
data model.
- **MachineList**: List of dictionaries specifying machines available for distributed run.
Each dictionary must have a key 'machine-name' with machine name as its
value, and key 'core-count' with number of cores for that machine as
its value. Providing this argument will over-ride any machine-list
information detected from the scheduler environment and any information
provided by the --cnf command-line argument.
- **PartitioningInfo**: Dictionary specifying machines resources assigned to each participant by user.
Dictionary must have participant names as keys and machineLists containing
machine resources as values. The value of PartitioningInfo machineList is
a list of dictionaries specifying machines assigned to corresponding participants.
Each dictionary of machineList must have a key 'machine-name' with machine name
as its value, and key 'core-count' with number of cores for that machine as its value.
Providing this argument will disallow other arguments except AlgorithmName,
which must set as 'Custom' if provided. Otherwise, AlgorithmName will be set as
'Custom' internally if PartitioningInfo is provided.

### Example

```python
#Allocate machine resources for participants based on custom partitioning information.
#In this example, FLUENT-1 participant will run on machine "host-1" and "host-2"
#with 19 cores, and MAPDL-2 participant will run on machine "host-3" with 8 cores.
>>> PartitionParticipants(
PartitioningInfo={"FLUENT-1":[{"machine-name":"host-1","core-count":10},
{"machine-name":"host-2","core-count":9}],
"MAPDL-2":[{"machine-name":"host-3","core-count":8}]})
```

## `PrintExpressionVariables`

### Description

Given a path to an object, and a parameter name, print a list of
variables which can be used in an expression assigned to the
parameter. For convenience, as a special case, the parameter name may
be omitted if the path is to a DataTransfer object.

If an expression cannot be used at the specified data model location,
or if there are no valid variables which can be used in the expression,
then no output will be printed.

For the purposes of the command, "valid" means that the variable may be
used in the expression. Note however that "valid" does not necessarily mean
that a variable can be used in the expression. Other validation rules may
preclude the use of the variable. See the user documentation for more
details.

For the DataTransfer case, the list of variables will be ordered with
the most likely variables first. That is, those sharing the same quantity
type and/or dimensionality as the target of the expression.

### Essential Keyword Arguments

- **ObjectPath**: String indicating the path of the object to print expression variables for.

### Optional Keyword Arguments

- **ParameterName**: String indicating the name of the parameter to print expression variables for.
Note: this is optional only if ObjectPath is a path to a DataTransfer object.

### Example

```python
#Get source side variables for a data transfer
>>> PrintExpressionVariables(ObjectPath = '/SystemCoupling/CouplingInterface:Interface-1/DataTransfer:Transfer-1')
+-----------------------------------------------------------------------------+
|                             Available Variables                             |
+-----------------------------------------------------------------------------+
| Variable                            |   Tensor Type        Dimension        |
+-----------------------------------------------------------------------------+
| Target                              |                                       |
|   Loss                              |     (Scalar)       [kg m^2 s^-3]      |
| Source                              |                                       |
|   heatflow                          |     (Scalar)       [kg m^2 s^-3]      |
|   Position                          |     (Vector)            [m]           |
|   Normal                            |     (Vector)            [ ]           |
|   Area                              |     (Scalar)           [m^2]          |
|   Step                              |     (Scalar)            [ ]           |
|   Iteration                         |     (Scalar)            [ ]           |
|   Time                              |     (Scalar)            [s]           |
+-----------------------------------------------------------------------------+
```

## `PrintSetup`

### Description

Prints a summary of the System Coupling setup.

## `PrintSnapshots`

### Description

Prints a list of available snapshots.

### Example

```python
#Print all available snapshots:
>>> PrintSnapshots()
+-------------------------------------------------------------------+
|                        Available Snapshots                        |
+-------------------------------------------------------------------+
| FinalState                                                        |
|    Steps :                                                1, 3, 5 |
| Initial                                                           |
|    Steps :                                                        |
+-------------------------------------------------------------------+
```

## `ReadScriptFile`

### Description

Reads a script file in the command environment.

### Essential Keyword Arguments

- **FileName**: Name of the script file that is to be read.

### Example

```python
#Read a Python script file
>>> ReadScriptFile(FileName = 'run.py')
```

## `ReloadExpressionFunctionModules`

### Description

This may be called to force a reload of expression function modules
if they have changed since they were last loaded.

## `Save`

### Description

Saves the state of the coupled analysis data model.

Analysis settings are written to a single Settings.h5 file which
can be used to reload analysis settings.

Restart files for all restart points in the current co-simulation will
be written when this command is called. Existing restart files from
previous System Coupling versions will be renamed to conform to the new
naming scheme.

Restart files are named according to the convention
Restart_step#.h5 or Restart_iter#.h5, where "#" is the index of
the corresponding coupling step or iteration.

Returns a Boolean value of 'True' if the files were saved successfully;
otherwise, returns a value of 'False'.

Note that this command will raise an exception if another instance of
System Coupling is solving in the current working directory.

If given optional arguments, then behaves as described below in "Optional
Keyword Arguments."

### Optional Keyword Arguments

- **FilePath**: Writeable directory to which the SyC directory is added. (Settings and
Results .h5 files will be written to the SyC directory.). Ansys does
not recommend changing the default value of this argument.

### Example

```python
#Save the state of a coupled analysis in a "SyC" directory under current
#working directory.
>>> Save()
True
```

## `SaveSnapshot`

### Description

Saves a snapshot of the current state of the simulation. Snapshot will
contain all files and directories within the working directory that are
tracked by System Coupling: the SyC directory and the working directories
of all loaded participants. Before saving the snapshot, the current
datamodel will be saved.

Note: Snapshot cannot be saved if participants have been started.

Note: If files required for cosimulation are not stored within the working
directory, then they will not be included in the snapshot.

### Essential Keyword Arguments

- **SnapshotName**: Name of the snapshot to be saved.

### Optional Keyword Arguments

- **OverwriteExisting**: Boolean argument controlling whether an existing snapshot should be
overwritten. If True, then an existing snapshot named SnapshotName will
be overwritten if it exists. If False (default), then if SnapshotName is
shared with an existing snapshot, a warning will be written and the
command will return without saving the snapshot.

### Example

```python
#Save a snapshot called 'InitialState'
>>> SaveSnapshot(SnapshotName='InitialState')
```

## `SetState`

### Description

Sets the state of a specified datamodel container (can be either a
singleton or an object).

Returns a Boolean value of 'True' if the state was updated;
otherwise, returns a value of 'False'. (The latter would happen if
a value were set that is no different from the value already in the
state.)

By default, System Coupling will allow settings to be made that are
not currently available in the datamodel, as long as they are settings
that are potentially available. They will not show up in the datamodel
if they are not currently available, but if the state is later adjusted
such that the settings become available, the values that were previously
set will be seen.

This behavior can be controlled by the optional 'VerifyCommittedState'
argument. This will cause a check to be performed for submission of
unavailable settings, and an exception will be raised if the check fails.
Note that, despite the exception, the settings will remain committed.

### Essential Keyword Arguments

- **ObjectPath**: String indicating the path of the container to have its state set.
- **State**: Dictionary with the container state (settings) as keys and setting
values as values.

### Optional Keyword Arguments

- **VerifyCommittedState**: Boolean to control whether to check whether only settings that are
currently available have been submitted. If the check is performed and
it fails, an exception will be raised.

### Examples

#### Example 1

```python
#Use 'SetState' on a singleton
>>> SetState(ObjectPath = '/SystemCoupling/AnalysisControl/GlobalStabilization',
State = {'Option': 'Quasi-Newton'})
True
```

#### Example 2

```python
#Using 'SetState' on an object
>>> SetState(ObjectPath = '/SystemCoupling/CouplingParticipant:MAPDL-1
/Variable:FORC', State = {'QuantityType': 'Force', 'DisplayName':
'TestForce'} )
True
```

## `Shutdown`

### Description

Interactive command that shuts down a coupled analysis.

Shutdown includes ending the coupling run and signaling participants
to end the run. This produces a clean shutdown, generating the final
restart point and corresponding Results file before disconnecting
from participants.

After participants are disconnected, the coupling service writes
timing details to the transcript. If participants were started
automatically, it ends participant processes.

When System Coupling disconnects from the analysis and shuts down, the GUI
Server file is removed from the working directory.

## `Solve`

### Description

Solves the coupled analysis. This command will execute until
end coupled analysis is reached, or it is interrupted or aborted
(for example, via scStop file).

Disabled when a solution is already in progress.

For restarts, the Open command must be run before the Solve command.

Note that if the ExecutionControl Option for a participant is set to
ExternallyManaged, then System Coupling will not start the participant
using either this command or any of the other commands that automatically
start participants. The user is expected to manually start the participant.
This function will not return until all participants have been connected.

Note that this command will raise an exception if another instance of
System Coupling is solving in the current working directory.

## `Step`

### Description

Interactive command that initializes the analysis (if necessary) and
runs the specified number of coupling steps before pausing the coupled
analysis.

Disabled when a solution is already in progress.

Disabled for iterations-only steady analyses.

By default, runs a single step. If given the optional 'Count' argument,
then runs the specified number of steps.

For restarts, the 'Open' command must be run before the 'Step' command.

When you run this command, System Coupling initializes the analysis if
needed and then begins the solution. When the specified number of coupling
steps has been run, the solution is paused, providing you with an
opportunity to interact with the analysis.

Note that if the ExecutionControl Option for a participant is set to
ExternallyManaged, then System Coupling will not start the participant
using either this command or any of the other commands that automatically
start participants. The user is expected to manually start the participant.
This function will not return until all participants have been connected.

When the solution is resumed, either by reissuing this command or by
running the Solve command, System Coupling restarts the analysis at the
point it left off and continues the solution with the next step.

Note that this command will raise an exception if another instance of
System Coupling is solving in the current working directory.

### Optional Keyword Arguments

- **Count**: Integer specifying the number of steps to be run. Defaults to 1.

### Examples

#### Example 1

```python
#Use the default (the analysis runs one coupling step)
>>> Step()
```

#### Example 2

```python
#Specify that the analysis runs three coupling steps
>>> Step(Count = 3)
```

## `UpdateInterfaces`

### Description

Command to apply transformation and instance defined in the interfaces.
And display mapping mesh with the transformation and instance applied in the
System Coupling viewer.

The purpose of this command is to visually confirm the correctness of coupling
interfaces definition, alignment and instancing settings, and to allow modifying
those settings to fix any issues ("nudge" the alignment, etc.)

## `UpdateParticipant`

### Description

Given the name of a participant, updates the state of the participant.

Available for DEFAULT-SRV, CFD-SRV, MECH-SRV, and SCDT-SRV and
AEDT participants.

As part of the update, System Coupling updates all regions, variables,
and parameters defined in the participant, including all variable
attributes. Regions, variables, and parameters may be added to the
participant but may not be removed.

You may specify an input file using an optional argument. If an input
file is not provided, then the original input file will be reimported.

Note: AEDT participants must be updated using an scp file.

If the update process fails, System Coupling displays an error. In this
case, you can either update the setup in the participant application to
remove any issues with the update process or delete the participant
from the analysis and then re-add it using the updated input file.

### Essential Keyword Arguments

- **ParticipantName**: Participant name. Must be the name of an existing participant.

### Optional Keyword Arguments

- **InputFile**: Name of the input file for the participant to be added.
Currently supported formats are SCP files, mechanical server
(*.rst) files, cfd server (*.csv) files, and system coupling
data server (*.scdt/axdt/csv) files.

### Examples

#### Example1

```python
#Update a participant:
>>> UpdateParticipant(ParticipantName = "MECH-SRV-1")
```

#### Example2

```python
#Update a participant using a new input file:
>>> UpdateParticipant(ParticipantName = "MECH-SRV-1", InputFile = "new.rst")
```

## `WriteCsvChartFiles`

### Description

For each coupling interface, exports a CSV file containing chart data
(convergence and source/target quantity transfer values) for
that interface.

Each file is named according to the convention <interface>.csv, where
<interface> is the object name of the corresponding coupling interface.

This command will overwrite any CSV charting files that already exist,
including any that were written during the solution.

## `WriteEnSight`

### Description

Write a file with mesh and results which can be loaded into EnSight for
post processing.

### Essential Keyword Arguments

- **FileName**: Base name for EnSight files. It will generate <base>.encas file which
should be loaded into EnSight. Other files are generated for geometry
and variables.

### Optional Keyword Arguments

- **Binary**: To control if file is to be written in binary format or ASCII. ASCII
slows down performance, but may be useful for debugging and seeing
raw data.

### Examples

#### Example 1

```python
#Write EnSight file with base name of 'test'
>>> WriteEnSight(FileName='test')
```

#### Example 2

```python
#Write EnSight file with base name of 'test' in ASCII
>>> WriteEnSight(FileName='test', Binary = False)
```

## `WriteTargetData`

### Description

Command to write target data for target participant after mapping operation.

The purpose of this command is to write target mesh and target mapped data in
the target participant working directory and thus mapping results from SystemCoupling can
be check in the target participant.

### Optional Keyword Arguments

- **Overwrite**: Flag indicating whether to overwrite the existing target data file. Default value is False.

