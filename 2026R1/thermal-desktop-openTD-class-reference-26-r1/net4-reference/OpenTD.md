# Namespace OpenTD

### Namespaces

 [OpenTD.AddIn](OpenTD.AddIn.md)

 [OpenTD.CoSolver](OpenTD.CoSolver.md)

 [OpenTD.Dimension](OpenTD.Dimension.md)

 [OpenTD.FloCAD](OpenTD.FloCAD.md)

 [OpenTD.Logging](OpenTD.Logging.md)

 [OpenTD.PostProcessing](OpenTD.PostProcessing.md)

 [OpenTD.RadCAD](OpenTD.RadCAD.md)

 [OpenTD.UserInterface](OpenTD.UserInterface.md)

 [OpenTD.UserPreferences](OpenTD.UserPreferences.md)

 [OpenTD.Utility](OpenTD.Utility.md)

### Classes

 [AcEllipse](OpenTD.AcEllipse.md)

Client-side representation of an AutoCAD Ellipse entity in a TD instance.

 [AdditionalRadiationTaskData](OpenTD.AdditionalRadiationTaskData.md)

Represents one Radiation Analysis Data Control item

 [AggregateComponentData](OpenTD.AggregateComponentData.md)

Represents one component/layer of an aggregate/laminate material.

 [AggregateData](OpenTD.AggregateData.md)

Represents an aggregate or laminate material.

 [Arc](OpenTD.Arc.md)

Client-side representation of an AutoCAD Arc entity in a TD instance.

 [ArrayInterpolation](OpenTD.ArrayInterpolation.md)

Client-side representation of an Array Interpolatiopn Logic Object.

 [ArxContext](OpenTD.ArxContext.md)

ArxContext contains objects that can be accessed in-process by AutoCAD addins,
if RadCAD has been loaded first.

 [AutocadConfig](OpenTD.AutocadConfig.md)

Controls how AutoCAD will be launched.

 [AutocadLauncher](OpenTD.AutocadLauncher.md)

Use to launch an instance of AutoCAD and run a series of commands.
Defaults to the latest version of AutoCAD installed, but this can be
controlled via the LaunchConfig property.

 [AutocadVariableData](OpenTD.AutocadVariableData.md)

Represents an AutoCAD variable.
Examples: FILEDIA, PICKBOX, TOOLTIPS, etc.

 [BadDataException](OpenTD.BadDataException.md)

Thrown when OpenTD encounters bad input data.

 [BatchControl](OpenTD.BatchControl.md)

Used to control batch run settings in the Case Set Manager.

 [BivariateArrayData](OpenTD.BivariateArrayData.md)

Represents a TD bivariate array.

 [CaseSet](OpenTD.CaseSet.md)

Client-side representation of a Case Set in a TD instance.

 [CaseSetManager](OpenTD.CaseSetManager.md)

Use the CaseSetManager to run cases in batch mode, or to perform
other operations available in TD's Case Set Manager.

 [CaseSetManagerOptions](OpenTD.CaseSetManagerOptions.md)

Client-side representation of Case Set Manager options in a TD instance.

 [Circle](OpenTD.Circle.md)

Client-side representation of an AutoCAD Circle entity in a TD instance.

 [Conductor](OpenTD.Conductor.md)

Client-side representation of a Conductor entity in a TD instance.

 [Connection](OpenTD.Connection.md)

A connection contains a handle and a marker. The handle uniquely identifies a
TD entity while the marker specifies how to connect to the entity, e.g., which
side of a surface to connect to.

 [Contactor](OpenTD.Contactor.md)

Client-side representation of a Contactor entity in a TD instance.

 [DbObject](OpenTD.DbObject.md)

Base class for objects stored in the AutoCAD database
and uniquely-identified by AutoCAD handles.

 [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

A dimensionless 3D vector.

 [Domains](OpenTD.Domains.md)

Use to get all domains within a TD instance.

 [DynamicSindaStatus](OpenTD.DynamicSindaStatus.md)

Use this to interact with messages that are written to the Dynamic
Sinda Status dialog during a run.

 [ExportNodeInfoOptionsData](OpenTD.ExportNodeInfoOptionsData.md)

Sets options for the ThermalDesktop.ExportNodeInfo command, 
which can be used to get node info as a list (the default) or
write node info to the screen or to a file.

 [ExpressionArrayClass2Data](OpenTD.ExpressionArrayClass2Data.md)

2d array of TD expressions.

 [ExpressionArrayClassData](OpenTD.ExpressionArrayClassData.md)

Array of TD expressions.

 [ExpressionData](OpenTD.ExpressionData.md)

Data describing a TD expression.

 [FluintLogicData](OpenTD.FluintLogicData.md)

User logic for a fluid submodel.

 [HeatLoad](OpenTD.HeatLoad.md)

Client-side representation of a HeatLoad entity in a TD instance.

 [Heater](OpenTD.Heater.md)

Client-side representation of a Heater entity in a TD instance.

 [Helix](OpenTD.Helix.md)

Client-side representation of an AutoCAD Helix entity in a TD instance.

 [KickerData](OpenTD.KickerData.md)

Represents a Model Kicker task.

 [Layer](OpenTD.Layer.md)

An AutoCAD layer.

 [Line](OpenTD.Line.md)

Client-side representation of an AutoCAD Line entity in a TD instance.

 [ListSI](OpenTD.ListSI.md)

A list of doubles named to explicitly state SI units.

 [LogicObject](OpenTD.LogicObject.md)

Base class for TD logic objects.

 [LogicObjects](OpenTD.LogicObjects.md)

Use to get all logic objects within a TD instance.

 [MaterialStack](OpenTD.MaterialStack.md)

Client-side representation of a Material Stack entity in a TD instance.

 [MaterialStackLayerData](OpenTD.MaterialStackLayerData.md)

Represents one layer of a Material Stack.

 [Matrix3d](OpenTD.Matrix3d.md)

A 4x4 matrix.

 [Measure](OpenTD.Measure.md)

Client-side representation of a TD Measure object.

 [MeasureMappingTolerances](OpenTD.MeasureMappingTolerances.md)

Use to get and set mapping tolerances for Measures.

 [MergeNodesOptionsData](OpenTD.MergeNodesOptionsData.md)

Provides options for the ThermalDesktop.MergeNodes command.

 [MeshDisplayer](OpenTD.MeshDisplayer.md)

Client-side representation of the TD base class that displays finite element
meshes.
Implements the <xref href="OpenTD.TdDbEntityData" data-throw-if-not-resolved="false"></xref>

 [Model](OpenTD.Model.md)

Use to get all OpenTD-supported entities from a TD instance.

 [NameData](OpenTD.NameData.md)

A Sinda name, e.g., MAIN.1.

 [NetworkLogicData](OpenTD.NetworkLogicData.md)

TD network logic.

 [NetworkLogicUnits](OpenTD.NetworkLogicUnits.md)

Controls how units are handled within a NetworkLogicData object.

 [Node](OpenTD.Node.md)

Client-side representation of a Node entity in a TD instance.

 [NodeBreakdownData](OpenTD.NodeBreakdownData.md)

Represents node subdivisions, e.g., the u and v nodal breakdowns in a conic.

 [Notes](OpenTD.Notes.md)

Client-side representation of the dwg notes in a TD instance.

 [NurbsData](OpenTD.NurbsData.md)

Describes a Non-Uniform Rational B-Spline

 [OpenTDException](OpenTD.OpenTDException.md)

General exception thrown by OpenTD.

 [OpenTDObject](OpenTD.OpenTDObject.md)

Base class for client-side objects linked to entities in a TD instance.

 [OpticalPropAliasManager](OpenTD.OpticalPropAliasManager.md)

Use to manage optical property aliases.
Each ThermalDesktop object includes an OpticalPropAliaxManager.

 [PID](OpenTD.PID.md)

Client-side representation of a Logic Object PID in a TD instance.

 [Point2d](OpenTD.Point2d.md)

A mathematical point in 2D.

 [Point3d](OpenTD.Point3d.md)

A mathematical point in 3D.

 [Polyline](OpenTD.Polyline.md)

Client-side representation of an AutoCAD LWPolyline entity in a TD instance.

 [Polyline3d](OpenTD.Polyline3d.md)

Client-side representation of an AutoCAD Polyline (3dPoly) entity in a TD instance.

 [PolylineVertex](OpenTD.PolylineVertex.md)

Describes a vertex and attached line segment in a Polyline.

 [PressureLoad](OpenTD.PressureLoad.md)

Client-side representation of a Pressure entity in a TD instance.

 [Quaternion](OpenTD.Quaternion.md)

Describes a mathematical quaternion. Used, for example, to describe material
orientation in solid finite elements.

 [RadiationTaskData](OpenTD.RadiationTaskData.md)

Data describing a radiation task.

 [RcHeaterSenseData](OpenTD.RcHeaterSenseData.md)

Data describing what a heater senses.

 [RegisterData](OpenTD.RegisterData.md)

Represents a Sinda register, used in a Case Set.

 [Script](OpenTD.Script.md)

Base class that is useful for collecting several OpenTD scripts together
and presenting them to your users with a common interface. Script is used
by the official CRTech OpenTD Demos.

 [SelectionOptions](OpenTD.SelectionOptions.md)

Use SelectionOptions to control how ThermalDesktop.GetSelection requests the
user to select entities from the TD graphics window.

 [SindaControlData](OpenTD.SindaControlData.md)

Sinda control constants. Used in Case Set.

 [SindaCyclicData](OpenTD.SindaCyclicData.md)

Sinda cyclic run data. Used in Case Set.

 [SindaOptionsData](OpenTD.SindaOptionsData.md)

Sinda options. Used in Case Set.

 [SolverControlData](OpenTD.SolverControlData.md)

Sinda solver (optimization) control constants. Used in Case Set.

 [SolverDesignData](OpenTD.SolverDesignData.md)

A Sinda solver (optimization) design or constraint variable. Used in Case Set.

 [Spline](OpenTD.Spline.md)

Client-side representation of an AutoCAD Spline entity in a TD instance.

 [StackAliasManager](OpenTD.StackAliasManager.md)

Use to manage thermophysical property aliases.
Each ThermalDesktop object includes a StackAliasManager.

 [Submodel](OpenTD.Submodel.md)

A thermal submodel. Implicitly converts to/from string.

 [SubmodelNameData](OpenTD.SubmodelNameData.md)

A submodel name. Implicitly converts to/from string. Automatically converts to uppercase.

 [Symbol](OpenTD.Symbol.md)

Client-side representation of a Symbol in a TD instance.

 [TdConnectConfig](OpenTD.TdConnectConfig.md)

Controls how ThermalDesktop object connects to its actual TD instance
when ThermalDesktop.Connect() is called.

 [TdDbEntityData](OpenTD.TdDbEntityData.md)

Base class for objects sorted on AutoCAD layers.

 [Tec](OpenTD.Tec.md)

Client-side representation of a Tec entity in a TD instance.

 [Text](OpenTD.Text.md)

Client-side representation of a Text annotation in a TD instance.

 [ThermalDesktop](OpenTD.ThermalDesktop.md)

Represents one instance of Thermal Desktop.
This is the top-level class for interacting with OpenTD.

 [ThermalLogicData](OpenTD.ThermalLogicData.md)

User logic for one submodel. Can be used for thermal or fluid submodels.
(For fluid submodels, TD will write code to corresponding fluid headers,
e.g., any data in Variables0 will be written to the FLOGIC 0 header.)
Used in a Case Set.

 [ThermoPropAliasManager](OpenTD.ThermoPropAliasManager.md)

Use to manage thermophysical property aliases.
Each ThermalDesktop object includes a ThermoPropAliasManager.

 [ThermoProps](OpenTD.ThermoProps.md)

Client-side representation of a Thermophysical Property in a TD instance.

 [TdConnectConfig.TimeoutProperties](OpenTD.TdConnectConfig.TimeoutProperties.md)

Data used to decide when to timeout an operation.

 [Transformation](OpenTD.Transformation.md)

A 3D transformation, described as translation plus up to 3 sequential rotations.

 [UCS](OpenTD.UCS.md)

Client-side representation of the AutoCAD User Coordinate System.
Implements <xref href="OpenTD.Matrix3d" data-throw-if-not-resolved="false"></xref>
Implements <xref href="OpenTD.IUpdatable" data-throw-if-not-resolved="false"></xref>

 [UDFA](OpenTD.UDFA.md)

Client-side representation of a User-Defined Fortran Array (UDFA).

 [UDFACollection](OpenTD.UDFACollection.md)

Client-side representation of a Logic Object Fortran Array in a TD instance. 
This holds a collection of individual Fortran arrays

 [UniqueNameObject](OpenTD.UniqueNameObject.md)

An object that is uniquely-identified by its name,
instead of, for example, an AutoCAD handle.

 [Units](OpenTD.Units.md)

Static class with methods for working with units.
Includes methods to convert between unit systems.

 [UnitsData](OpenTD.UnitsData.md)

Describes a system of units. Can be inconsistent.

 [UnitsDefData](OpenTD.UnitsDefData.md)

UnitsDefData is used to create units with arbitrary combinations of dimensions.

 [UserArray](OpenTD.UserArray.md)

Client-side representation of a Logic Object User Array in a TD instance.

 [UserCode](OpenTD.UserCode.md)

Client-side representation of a Logic Object User Code item in a TD instance.

 [Vector3d](OpenTD.Vector3d.md)

A 3D vector. Note that coordinates are dimensional and reflect the current
OpenTD WorkingUnits ModelLength.

 [VisibilityManager](OpenTD.VisibilityManager.md)

 [XrefInfo](OpenTD.XrefInfo.md)

Information about XREF'd dwgs

### Structs

 [EntityDescriptor](OpenTD.EntityDescriptor.md)

Describes a TD entity, such as a node or a lump

### Interfaces

 [IDbIterator](OpenTD.IDbIterator.md)

Use to iterate through the AutoCAD database, getting entities
such as nodes, conics, etc.

 [IDomainManager](OpenTD.IDomainManager.md)

Use to manage domains in TD. Use ThermalDesktop.GetDomainManager() to get
an IDomainManager for that instance of TD.

 [ITdConsole](OpenTD.ITdConsole.md)

Provides methods to interact via TD's console

 [IUpdatable](OpenTD.IUpdatable.md)

Contains methods to send and receive data from a corresponding object
in a TD instance.

### Enums

 [NetworkLogicUnits.AbzroTypes](OpenTD.NetworkLogicUnits.AbzroTypes.md)

How to handle absolute zero in a NetworkLogicData object

 [UnitsData.Angle](OpenTD.UnitsData.Angle.md)

Angle units

 [UnitsData.Current](OpenTD.UnitsData.Current.md)

Current units

 [ExportNodeInfoOptionsData.Datasets](OpenTD.ExportNodeInfoOptionsData.Datasets.md)

What data should be used by ExportNodeInfo

 [ExportNodeInfoOptionsData.Destinations](OpenTD.ExportNodeInfoOptionsData.Destinations.md)

Where to send ExportNodeInfo results

 [DomainType](OpenTD.DomainType.md)

 [CaseSetManagerOptions.DuplicateNodes](OpenTD.CaseSetManagerOptions.DuplicateNodes.md)

How to handle duplicate nodes when running cases.

 [UnitsData.Energy](OpenTD.UnitsData.Energy.md)

Energy units

 [UnitsData.FlocadOutputUnitsType](OpenTD.UnitsData.FlocadOutputUnitsType.md)

FloCAD/FLUINT units system types.

 [UnitsData.Force](OpenTD.UnitsData.Force.md)

Force units

 [SolverControlData.GoalType](OpenTD.SolverControlData.GoalType.md)

Optimization goal type: minimize, maximize, etc.

 [RcHeaterSenseData.HeaterSenseTypes](OpenTD.RcHeaterSenseData.HeaterSenseTypes.md)

Specifies what a heater senses.

 [IsoViews](OpenTD.IsoViews.md)

Standard AutoCAD isometric views.

 [MergeNodesOptionsData.KeepMethods](OpenTD.MergeNodesOptionsData.KeepMethods.md)

Determines which node to keep when merging nodes

 [ExportNodeInfoOptionsData.Locations](OpenTD.ExportNodeInfoOptionsData.Locations.md)

How to generate node locations for ExportNodeInfo

 [LogicObjectRoutineTypes](OpenTD.LogicObjectRoutineTypes.md)

Specifies where in a Sinda deck to place code generated by TD logic object.

 [LogicObject.LogicType](OpenTD.LogicObject.LogicType.md)

TD Logic Object types.

 [UnitsData.Mass](OpenTD.UnitsData.Mass.md)

Mass units

 [MeshDisplayerGraphicsMode](OpenTD.MeshDisplayerGraphicsMode.md)

How to display a mesh

 [UnitsData.ModelLength](OpenTD.UnitsData.ModelLength.md)

Length units to describe model dimensions

 [RadiationTaskData.NodeNameTypes](OpenTD.RadiationTaskData.NodeNameTypes.md)

Nodalization Schemes.

 [UnitsData.OrbitLength](OpenTD.UnitsData.OrbitLength.md)

Length units to describe orbital distances

 [OrthoViews](OpenTD.OrthoViews.md)

Standard AutoCAD orthographic views.

 [NetworkLogicUnits.PatmosTypes](OpenTD.NetworkLogicUnits.PatmosTypes.md)

How to handle atmospheric pressure in a NetworkLogicData object

 [UnitsData.Pressure](OpenTD.UnitsData.Pressure.md)

Pressure units

 [PressureLoad.PressureTypes](OpenTD.PressureLoad.PressureTypes.md)

How pressures are defined for a PressureLoad

 [UnitsData.Resistance](OpenTD.UnitsData.Resistance.md)

Electrical resistance units

 [NetworkLogicUnits.SindaUidTypes](OpenTD.NetworkLogicUnits.SindaUidTypes.md)

How to handle Sinda units in a NetworkLogicData object

 [SindaControlData.SolutionType](OpenTD.SindaControlData.SolutionType.md)

Sinda calculation method

 [NodeBreakdownData.SpacingType](OpenTD.NodeBreakdownData.SpacingType.md)

Determines how the node breakdown is specified.

 [UnitsData.Temp](OpenTD.UnitsData.Temp.md)

Temperature units

 [UnitsData.Time](OpenTD.UnitsData.Time.md)

Time units

 [AutocadVariableData.Types](OpenTD.AutocadVariableData.Types.md)

What kind of data is stored in this AutoCAD variable?
Examples: integer, string, etc.

 [TdConnectConfig.Types](OpenTD.TdConnectConfig.Types.md)

Determines whether ThermalDesktop will start a new instance of TD,
attach to an existing instance, or automatically try to attach but
revert to starting a new instance if attaching fails. There's also
an INPROCESS option that is only used internally by TD.

 [UDFA.UdfaInitType](OpenTD.UDFA.UdfaInitType.md)

How a UDFA is initialized

 [UDFA.UdfaType](OpenTD.UDFA.UdfaType.md)

Type of entity (if any) associated with UDFA

 [NetworkLogicUnits.UnitSystemTypes](OpenTD.NetworkLogicUnits.UnitSystemTypes.md)

How to handle units in a NetworkLogicData object

 [UnitsData.UnitsType](OpenTD.UnitsData.UnitsType.md)

Physical dimensions.

 [UDFA.ValueType](OpenTD.UDFA.ValueType.md)

UDFA values type: real, integer, etc.

 [RegisterData.ValueType](OpenTD.RegisterData.ValueType.md)

Specifies what register value will be sent to Sinda.

 [VisualStyles](OpenTD.VisualStyles.md)

AutoCAD visual styles.

 [UnitsData.Voltage](OpenTD.UnitsData.Voltage.md)

Voltage units

 [AggregateData.WeightTypes](OpenTD.AggregateData.WeightTypes.md)

Determines how quantity fractions are specified.

 [RadiationTaskData.calcMethod](OpenTD.RadiationTaskData.calcMethod.md)

Calculation Method (Monte Carlo or Progressive Radiosity).

 [RadiationTaskData.calcType](OpenTD.RadiationTaskData.calcType.md)

The type of radiation task.


