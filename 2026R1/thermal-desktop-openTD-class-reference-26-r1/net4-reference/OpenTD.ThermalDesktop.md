# Class ThermalDesktop

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Represents one instance of Thermal Desktop.
This is the top-level class for interacting with OpenTD.

```csharp
public class ThermalDesktop : ITdConsole
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ThermalDesktop](OpenTD.ThermalDesktop.md)

## Implements

[ITdConsole](OpenTD.ITdConsole.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### ThermalDesktop\(string\)

```csharp
public ThermalDesktop(string dwgPathname)
```

#### Parameters

`dwgPathname` [string](https://learn.microsoft.com/dotnet/api/system.string)

### ThermalDesktop\(\)

```csharp
public ThermalDesktop()
```

## Properties

### CaseSetManager

The Case Set Manager. While case sets can be worked with directly,
the Case Set Manager is used to set global case set options.
It can also be used to run multiple cases in TD batch mode.

```csharp
public CaseSetManager CaseSetManager { get; }
```

#### Property Value

 [CaseSetManager](OpenTD.CaseSetManager.md)

#### See Also

[CaseSetManager](OpenTD.CaseSetManager.md)

### ConnectConfig

Controls how Connect() will try to connect to TD.

```csharp
public TdConnectConfig ConnectConfig { get; set; }
```

#### Property Value

 [TdConnectConfig](OpenTD.TdConnectConfig.md)

### DatasetManager

Use the DatasetManager to access TD's "Postprocessing Datasets"
dialog. Use it to control what data is displayed as a contour plot
in TD, for example.

```csharp
public DatasetManager DatasetManager { get; }
```

#### Property Value

 [DatasetManager](OpenTD.PostProcessing.DatasetManager.md)

#### See Also

[DatasetManager](OpenTD.PostProcessing.DatasetManager.md)

### OpticalPropAliasManager

The optical property alias manager.

```csharp
public OpticalPropAliasManager OpticalPropAliasManager { get; }
```

#### Property Value

 [OpticalPropAliasManager](OpenTD.OpticalPropAliasManager.md)

#### See Also

[OpticalPropAliasManager](OpenTD.OpticalPropAliasManager.md)

### ProgressBar

Use to show progress of a procedure in TD.

```csharp
public ProgressBar ProgressBar { get; }
```

#### Property Value

 [ProgressBar](OpenTD.AddIn.ProgressBar.md)

#### See Also

[ProgressBar](OpenTD.AddIn.ProgressBar.md)

### RadiationAnalysisGroupManager

The radiation analysis group manager.

```csharp
public RadiationAnalysisGroupManager RadiationAnalysisGroupManager { get; }
```

#### Property Value

 [RadiationAnalysisGroupManager](OpenTD.RadCAD.RadiationAnalysisGroupManager.md)

#### See Also

[RadiationAnalysisGroupManager](OpenTD.RadCAD.RadiationAnalysisGroupManager.md)

### StackAliasManager

The stack alias manager.

```csharp
public StackAliasManager StackAliasManager { get; }
```

#### Property Value

 [StackAliasManager](OpenTD.StackAliasManager.md)

#### See Also

[StackAliasManager](OpenTD.StackAliasManager.md)

### ThermoPropAliasManager

The thermophysical property alias manager.

```csharp
public ThermoPropAliasManager ThermoPropAliasManager { get; }
```

#### Property Value

 [ThermoPropAliasManager](OpenTD.ThermoPropAliasManager.md)

#### See Also

[ThermoPropAliasManager](OpenTD.ThermoPropAliasManager.md)

### UCS

Gets or sets AutoCAD's User Coordinate System (UCS).
Note: most OpenTD positions are defined relative to the
World Coordinate System (WCS), so setting the UCS will
have no effect on how entities are positioned. One
exception is the PostProcessingDataMapper, which can be
positioned relative to the UCS.

```csharp
public UCS UCS { get; }
```

#### Property Value

 [UCS](OpenTD.UCS.md)

#### See Also

[DataMapper](OpenTD.PostProcessing.DataMapper.md)

### UserPreferences

Use this to get/set selected global user preferences, such as dwg units
and acceleration.

```csharp
public UserPreferences UserPreferences { get; }
```

#### Property Value

 [UserPreferences](OpenTD.UserPreferences.UserPreferences.md)

### VisibilityManager

Use to manage the visibility of entities in a TD instance.

```csharp
public VisibilityManager VisibilityManager { get; }
```

#### Property Value

 [VisibilityManager](OpenTD.VisibilityManager.md)

## Methods

### AddNodeCorrespondence\(NameData, NameData\)

Adds TRASYS-style node correspondence between SINDA and RadCAD nodes.
Use SetNodeCorrespondenceState to turn node correspondence on or off.
Use SetNodeCorrespondenceMap to set the entire map in one step.

```csharp
public void AddNodeCorrespondence(NameData SindaNode, NameData RadcadNode)
```

#### Parameters

`SindaNode` [NameData](OpenTD.NameData.md)

The sinda node.

`RadcadNode` [NameData](OpenTD.NameData.md)

The radcad node.

#### See Also

[ThermalDesktop](OpenTD.ThermalDesktop.md).[SetNodeCorrespondenceState](OpenTD.ThermalDesktop.md\#OpenTD\_ThermalDesktop\_SetNodeCorrespondenceState\_System\_Boolean\_)\([bool](https://learn.microsoft.com/dotnet/api/system.boolean)\), 
[ThermalDesktop](OpenTD.ThermalDesktop.md).[SetNodeCorrespondenceMap](OpenTD.ThermalDesktop.md\#OpenTD\_ThermalDesktop\_SetNodeCorrespondenceMap\_System\_Collections\_Generic\_Dictionary\_System\_String\_System\_Collections\_Generic\_List\_System\_String\_\_\_)\([Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>\>\)

### BringToFront\(\)

Brings the AutoCAD window to the foreground.

```csharp
public void BringToFront()
```

### CaptureGraphicsArea\(\)

Captures the AutoCAD graphics area.
Known issue: if AutoCAD is in fast-shaded mode then this command
will return an all-black image if visual style is set to SHADED,
SHADED_W_EDGES, or WIRE.

```csharp
public Bitmap CaptureGraphicsArea()
```

#### Returns

 [Bitmap](https://learn.microsoft.com/dotnet/api/system.drawing.bitmap)

Bitmap.

### ClearSelection\(\)

```csharp
public void ClearSelection()
```

### Connect\(\)

Connect to an instance of TD using the options specified in ConnectConfig.

```csharp
public void Connect()
```

#### See Also

[ThermalDesktop](OpenTD.ThermalDesktop.md).[ConnectConfig](OpenTD.ThermalDesktop.md\#OpenTD\_ThermalDesktop\_ConnectConfig)

### Connect\(TdConnectConfig\)

Set ConnectConfig to the supplied TdConnectConfig and call Connect().

```csharp
public void Connect(TdConnectConfig connectConfig)
```

#### Parameters

`connectConfig` [TdConnectConfig](OpenTD.TdConnectConfig.md)

### Connect\(string\)

Set ConnectConfig.DwgPathname to the supplied path and call Connect().

```csharp
public void Connect(string dwgPathname)
```

#### Parameters

`dwgPathname` [string](https://learn.microsoft.com/dotnet/api/system.string)

### ConnectAsync\(\)

Connect to an instance of TD asynchronously
using the options specified in ConnectConfig.

```csharp
public Task ConnectAsync()
```

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

#### See Also

[ThermalDesktop](OpenTD.ThermalDesktop.md).[ConnectConfig](OpenTD.ThermalDesktop.md\#OpenTD\_ThermalDesktop\_ConnectConfig)

### ConvertFDtoFE\(IEnumerable<string\>\)

Convert FD entities (with edge nodes) to FE meshes

```csharp
public void ConvertFDtoFE(IEnumerable<string> handles)
```

#### Parameters

`handles` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### CreateAcEllipse\(\)

Creates a new Ellipse in this Thermal Desktop instance.

```csharp
public AcEllipse CreateAcEllipse()
```

#### Returns

 [AcEllipse](OpenTD.AcEllipse.md)

#### See Also

[AcEllipse](OpenTD.AcEllipse.md)

### CreateArc\(\)

Creates a new Arc in this Thermal Desktop instance.

```csharp
public Arc CreateArc()
```

#### Returns

 [Arc](OpenTD.Arc.md)

#### See Also

[Arc](OpenTD.Arc.md)

### CreateArrayInterpolation\(IEnumerable<double\>, IEnumerable<double\>, string\)

Creates a new ArrayInterpolation using defaults from this TD instance.

```csharp
public ArrayInterpolation CreateArrayInterpolation(IEnumerable<double> xValues, IEnumerable<double> yValues, string outputSymbol)
```

#### Parameters

`xValues` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

`yValues` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

`outputSymbol` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [ArrayInterpolation](OpenTD.ArrayInterpolation.md)

#### See Also

[UserArray](OpenTD.UserArray.md)

### CreateAssembly\(Point3d\)

Creates a new Assembly using defaults from this TD instance.

```csharp
public Assembly CreateAssembly(Point3d origin)
```

#### Parameters

`origin` [Point3d](OpenTD.Point3d.md)

#### Returns

 [Assembly](OpenTD.RadCAD.Assembly.md)

#### See Also

[Assembly](OpenTD.RadCAD.Assembly.md)

### CreateCappmp\(Connection, Connection, Connection\)

Creates a new cappmp using defaults from this TD instance.

```csharp
public Cappmp CreateCappmp(Connection fromLump, Connection toLump, Connection Node = null)
```

#### Parameters

`fromLump` [Connection](OpenTD.Connection.md)

`toLump` [Connection](OpenTD.Connection.md)

`Node` [Connection](OpenTD.Connection.md)

#### Returns

 [Cappmp](OpenTD.FloCAD.Cappmp.md)

#### See Also

[Cappmp](OpenTD.FloCAD.Cappmp.md)

### CreateCaseSet\(string, string, string\)

Creates a new Case Set using defaults from this TD instance.

```csharp
public CaseSet CreateCaseSet(string name, string groupName = "", string sindaFilenames = "")
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`groupName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`sindaFilenames` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [CaseSet](OpenTD.CaseSet.md)

#### See Also

[CaseSet](OpenTD.CaseSet.md)

### CreateCircle\(\)

Creates a new Circle in this Thermal Desktop instance.

```csharp
public Circle CreateCircle()
```

#### Returns

 [Circle](OpenTD.Circle.md)

#### See Also

[Circle](OpenTD.Circle.md)

### CreateCompartment\(List<List<Connection\>\>, List<List<Connection\>\>\)

Creates a new Compartment using defaults from this TD instance.

```csharp
public Compartment CreateCompartment(List<List<Connection>> volumes, List<List<Connection>> surfaces = null)
```

#### Parameters

`volumes` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Connection](OpenTD.Connection.md)\>\>

`surfaces` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Connection](OpenTD.Connection.md)\>\>

#### Returns

 [Compartment](OpenTD.FloCAD.Compartment.md)

#### See Also

[Compartment](OpenTD.FloCAD.Compartment.md)

### CreateConductor\(Connection, Connection\)

Creates a new Conductor using defaults from this TD instance.

```csharp
public Conductor CreateConductor(Connection from, Connection to)
```

#### Parameters

`from` [Connection](OpenTD.Connection.md)

`to` [Connection](OpenTD.Connection.md)

#### Returns

 [Conductor](OpenTD.Conductor.md)

#### See Also

[Conductor](OpenTD.Conductor.md)

### CreateConductor\(Connection, IEnumerable<Connection\>\)

Creates a new Conductor using defaults from this TD instance.

```csharp
public Conductor CreateConductor(Connection from, IEnumerable<Connection> to)
```

#### Parameters

`from` [Connection](OpenTD.Connection.md)

`to` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Connection](OpenTD.Connection.md)\>

#### Returns

 [Conductor](OpenTD.Conductor.md)

#### See Also

[Conductor](OpenTD.Conductor.md)

### CreateCone\(\)

Creates a new Cone using defaults from this TD instance.

```csharp
public Cone CreateCone()
```

#### Returns

 [Cone](OpenTD.RadCAD.Cone.md)

#### See Also

[Cone](OpenTD.RadCAD.Cone.md)

### CreateContactor\(IEnumerable<Connection\>, IEnumerable<Connection\>\)

Creates a new Contactor using defaults from this TD instance.

```csharp
public Contactor CreateContactor(IEnumerable<Connection> from, IEnumerable<Connection> to)
```

#### Parameters

`from` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Connection](OpenTD.Connection.md)\>

`to` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Connection](OpenTD.Connection.md)\>

#### Returns

 [Contactor](OpenTD.Contactor.md)

#### See Also

[Contactor](OpenTD.Contactor.md)

### CreateContactor\(Connection, IEnumerable<Connection\>\)

Creates a new Contactor using defaults from this TD instance.

```csharp
public Contactor CreateContactor(Connection from, IEnumerable<Connection> to)
```

#### Parameters

`from` [Connection](OpenTD.Connection.md)

`to` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Connection](OpenTD.Connection.md)\>

#### Returns

 [Contactor](OpenTD.Contactor.md)

#### See Also

[Contactor](OpenTD.Contactor.md)

### CreateContactor\(IEnumerable<Connection\>, Connection\)

Creates a new Contactor using defaults from this TD instance.

```csharp
public Contactor CreateContactor(IEnumerable<Connection> from, Connection to)
```

#### Parameters

`from` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Connection](OpenTD.Connection.md)\>

`to` [Connection](OpenTD.Connection.md)

#### Returns

 [Contactor](OpenTD.Contactor.md)

#### See Also

[Contactor](OpenTD.Contactor.md)

### CreateContactor\(Connection, Connection\)

Creates a new Contactor using defaults from this TD instance.

```csharp
public Contactor CreateContactor(Connection from, Connection to)
```

#### Parameters

`from` [Connection](OpenTD.Connection.md)

`to` [Connection](OpenTD.Connection.md)

#### Returns

 [Contactor](OpenTD.Contactor.md)

#### See Also

[Contactor](OpenTD.Contactor.md)

### CreateCylinder\(\)

Creates a new Cylinder using defaults from this TD instance.

```csharp
public Cylinder CreateCylinder()
```

#### Returns

 [Cylinder](OpenTD.RadCAD.Cylinder.md)

#### See Also

[Cylinder](OpenTD.RadCAD.Cylinder.md)

### CreateDbIterator\(bool, bool, bool, bool, bool\)

Creates an iterator for walking the AutoCAD entity database.

```csharp
public IDbIterator CreateDbIterator(bool forward = true, bool modelSpace = true, bool xRefs = false, bool paperSpace = false, bool tdOnly = true)
```

#### Parameters

`forward` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> iterates forward.

`modelSpace` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> iterates through model space.

`xRefs` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> iterates through XREF's.

`paperSpace` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> iterates through paper space.

`tdOnly` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [IDbIterator](OpenTD.IDbIterator.md)

IDbIterator.

### CreateDisk\(\)

Creates a new Disk using defaults from this TD instance.

```csharp
public Disk CreateDisk()
```

#### Returns

 [Disk](OpenTD.RadCAD.Disk.md)

#### See Also

[Disk](OpenTD.RadCAD.Disk.md)

### CreateEllipse\(\)

Creates a new Ellipse using defaults from this TD instance.

```csharp
public Ellipse CreateEllipse()
```

#### Returns

 [Ellipse](OpenTD.RadCAD.Ellipse.md)

#### See Also

[Ellipse](OpenTD.RadCAD.Ellipse.md)

### CreateEllipsoid\(\)

Creates a new Ellipsoid using defaults from this TD instance.

```csharp
public Ellipsoid CreateEllipsoid()
```

#### Returns

 [Ellipsoid](OpenTD.RadCAD.Ellipsoid.md)

#### See Also

[Ellipsoid](OpenTD.RadCAD.Ellipsoid.md)

### CreateEllipticCone\(\)

Creates a new EllipticCone using defaults from this TD instance.

```csharp
public EllipticCone CreateEllipticCone()
```

#### Returns

 [EllipticCone](OpenTD.RadCAD.EllipticCone.md)

#### See Also

[EllipticCone](OpenTD.RadCAD.EllipticCone.md)

### CreateEllipticCylinder\(\)

Creates a new EllipticCylinder using defaults from this TD instance.

```csharp
public EllipticCylinder CreateEllipticCylinder()
```

#### Returns

 [EllipticCylinder](OpenTD.RadCAD.EllipticCylinder.md)

#### See Also

[EllipticCylinder](OpenTD.RadCAD.EllipticCylinder.md)

### CreateFEMeshImporter\(string, bool\)

Creates a new FEMeshImporter.

```csharp
public FEMeshImporter CreateFEMeshImporter(string name, bool useCurrentUCS)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`useCurrentUCS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [FEMeshImporter](OpenTD.RadCAD.FEMeshImporter.md)

#### See Also

[FEMeshImporter](OpenTD.RadCAD.FEMeshImporter.md)

### CreateFTie\(Connection, Connection, Connection, FTieTypes\)

Creates a new FTie using defaults from this TD instance.

```csharp
public FTie CreateFTie(Connection AttachedLumpC, Connection AttachedLumpD, Connection AttachedPath, RcFTieData.FTieTypes FTieType = FTieTypes.USERFTIE)
```

#### Parameters

`AttachedLumpC` [Connection](OpenTD.Connection.md)

`AttachedLumpD` [Connection](OpenTD.Connection.md)

`AttachedPath` [Connection](OpenTD.Connection.md)

`FTieType` RcFTieData.FTieTypes

#### Returns

 [FTie](OpenTD.FloCAD.FTie.md)

#### See Also

[FTie](OpenTD.FloCAD.FTie.md)

### CreateFkLocator\(string, Point3d\)

Creates a new FkLocator using defaults from this TD instance.

```csharp
public FkLocator CreateFkLocator(string attachedHandle, Point3d origin)
```

#### Parameters

`attachedHandle` [string](https://learn.microsoft.com/dotnet/api/system.string)

`origin` [Point3d](OpenTD.Point3d.md)

#### Returns

 [FkLocator](OpenTD.FloCAD.FkLocator.md)

#### See Also

[FkLocator](OpenTD.FloCAD.FkLocator.md)

### CreateFluidSubmodel\(string\)

Creates a new fluid submodel using defaults from this TD instance.

```csharp
public FluidSubmodel CreateFluidSubmodel(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [FluidSubmodel](OpenTD.FloCAD.FluidSubmodel.md)

#### See Also

[FluidSubmodel](OpenTD.FloCAD.FluidSubmodel.md)

### CreateHeatLoad\(IEnumerable<Connection\>\)

Creates a new HeatLoad using defaults from this TD instance.

```csharp
public HeatLoad CreateHeatLoad(IEnumerable<Connection> applyConnections)
```

#### Parameters

`applyConnections` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Connection](OpenTD.Connection.md)\>

#### Returns

 [HeatLoad](OpenTD.HeatLoad.md)

#### See Also

[HeatLoad](OpenTD.HeatLoad.md)

### CreateHeatLoad\(Connection\)

Creates a new HeatLoad using defaults from this TD instance.

```csharp
public HeatLoad CreateHeatLoad(Connection applyConnection)
```

#### Parameters

`applyConnection` [Connection](OpenTD.Connection.md)

#### Returns

 [HeatLoad](OpenTD.HeatLoad.md)

#### See Also

[HeatLoad](OpenTD.HeatLoad.md)

### CreateHeater\(IEnumerable<Connection\>, IEnumerable<Connection\>\)

Creates a new Heater using defaults from this TD instance.

```csharp
public Heater CreateHeater(IEnumerable<Connection> applyConnections, IEnumerable<Connection> sensorConnections)
```

#### Parameters

`applyConnections` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Connection](OpenTD.Connection.md)\>

`sensorConnections` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Connection](OpenTD.Connection.md)\>

#### Returns

 [Heater](OpenTD.Heater.md)

#### See Also

[Heater](OpenTD.Heater.md)

### CreateHelix\(\)

Creates a new Helix in this Thermal Desktop instance.

```csharp
public Helix CreateHelix()
```

#### Returns

 [Helix](OpenTD.Helix.md)

#### See Also

[Helix](OpenTD.Helix.md)

### CreateIFace\(Connection, Connection\)

Creates a new IFace using defaults from this TD instance.

```csharp
public IFace CreateIFace(Connection TankA, Connection TankB)
```

#### Parameters

`TankA` [Connection](OpenTD.Connection.md)

`TankB` [Connection](OpenTD.Connection.md)

#### Returns

 [IFace](OpenTD.FloCAD.IFace.md)

#### See Also

[IFace](OpenTD.FloCAD.IFace.md)

### CreateLayer\(string\)

Creates a new Layer using defaults from this TD instance.

```csharp
public Layer CreateLayer(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Layer](OpenTD.Layer.md)

#### See Also

[Layer](OpenTD.Layer.md)

### CreateLine\(Point3d, Point3d\)

Creates a new Line in this TD instance.

```csharp
public Line CreateLine(Point3d pointA, Point3d pointB)
```

#### Parameters

`pointA` [Point3d](OpenTD.Point3d.md)

`pointB` [Point3d](OpenTD.Point3d.md)

#### Returns

 [Line](OpenTD.Line.md)

#### See Also

[Line](OpenTD.Line.md)

### CreateLinearBrick\(IEnumerable<string\>\)

Creates a new LinearBrick using defaults from this TD instance.

```csharp
public LinearBrick CreateLinearBrick(IEnumerable<string> nodeHandles)
```

#### Parameters

`nodeHandles` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 [LinearBrick](OpenTD.RadCAD.FEM.LinearBrick.md)

#### See Also

[LinearBrick](OpenTD.RadCAD.FEM.LinearBrick.md)

### CreateLinearPyramid\(IEnumerable<string\>\)

Creates a new LinearPyramid using defaults from this TD instance.

```csharp
public LinearPyramid CreateLinearPyramid(IEnumerable<string> nodeHandles)
```

#### Parameters

`nodeHandles` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 [LinearPyramid](OpenTD.RadCAD.FEM.LinearPyramid.md)

#### See Also

[LinearPyramid](OpenTD.RadCAD.FEM.LinearPyramid.md)

### CreateLinearQuad\(IEnumerable<string\>\)

Creates a new LinearQuad using defaults from this TD instance.

```csharp
public LinearQuad CreateLinearQuad(IEnumerable<string> nodeHandles)
```

#### Parameters

`nodeHandles` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 [LinearQuad](OpenTD.RadCAD.FEM.LinearQuad.md)

#### See Also

[LinearQuad](OpenTD.RadCAD.FEM.LinearQuad.md)

### CreateLinearTet\(IEnumerable<string\>\)

Creates a new LinearTet using defaults from this TD instance.

```csharp
public LinearTet CreateLinearTet(IEnumerable<string> nodeHandles)
```

#### Parameters

`nodeHandles` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 [LinearTet](OpenTD.RadCAD.FEM.LinearTet.md)

#### See Also

[LinearTet](OpenTD.RadCAD.FEM.LinearTet.md)

### CreateLinearTri\(IEnumerable<string\>\)

Creates a new LinearTri using defaults from this TD instance.

```csharp
public LinearTri CreateLinearTri(IEnumerable<string> nodeHandles)
```

#### Parameters

`nodeHandles` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 [LinearTri](OpenTD.RadCAD.FEM.LinearTri.md)

#### See Also

[LinearTri](OpenTD.RadCAD.FEM.LinearTri.md)

### CreateLinearWedge\(IEnumerable<string\>\)

Creates a new LinearWedge using defaults from this TD instance.

```csharp
public LinearWedge CreateLinearWedge(IEnumerable<string> nodeHandles)
```

#### Parameters

`nodeHandles` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 [LinearWedge](OpenTD.RadCAD.FEM.LinearWedge.md)

#### See Also

[LinearWedge](OpenTD.RadCAD.FEM.LinearWedge.md)

### CreateLump\(\)

Creates a new Lump using defaults from this TD instance.

```csharp
public Lump CreateLump()
```

#### Returns

 [Lump](OpenTD.FloCAD.Lump.md)

#### See Also

[Lump](OpenTD.FloCAD.Lump.md)

### CreateMaterialStack\(string\)

Creates a new Material Stack using defaults from this TD instance.

```csharp
public MaterialStack CreateMaterialStack(string caseSensitiveName)
```

#### Parameters

`caseSensitiveName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [MaterialStack](OpenTD.MaterialStack.md)

#### See Also

[MaterialStack](OpenTD.MaterialStack.md)

### CreateMeasure\(\)

Creates a new Measure using defaults from this TD instance.

```csharp
public Measure CreateMeasure()
```

#### Returns

 [Measure](OpenTD.Measure.md)

#### See Also

[Measure](OpenTD.Measure.md)

### CreateMeshFD\(IEnumerable<Face\>, IEnumerable<Point3d\>\)

Creates a new MeshFD using defaults from this TD instance.

```csharp
public MeshFD CreateMeshFD(IEnumerable<Face> faces, IEnumerable<Point3d> vertices)
```

#### Parameters

`faces` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Face](OpenTD.RadCAD.Face.md)\>

`vertices` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Point3d](OpenTD.Point3d.md)\>

#### Returns

 [MeshFD](OpenTD.RadCAD.MeshFD.md)

#### See Also

[MeshFD](OpenTD.RadCAD.MeshFD.md)

### CreateNode\(\)

Creates a new Node using defaults from this TD instance.

```csharp
public Node CreateNode()
```

#### Returns

 [Node](OpenTD.Node.md)

#### See Also

[Node](OpenTD.Node.md)

### CreateNode\(Point3d\)

Creates a new Node with a given origin using defaults from this TD instance.

```csharp
public Node CreateNode(Point3d origin)
```

#### Parameters

`origin` [Point3d](OpenTD.Point3d.md)

#### Returns

 [Node](OpenTD.Node.md)

#### See Also

[Node](OpenTD.Node.md), 
[Point3d](OpenTD.Point3d.md)

### CreateOffsetParaboloid\(\)

Creates a new OffsetParaboloid using defaults from this TD instance.

```csharp
public OffsetParaboloid CreateOffsetParaboloid()
```

#### Returns

 [OffsetParaboloid](OpenTD.RadCAD.OffsetParaboloid.md)

#### See Also

[OffsetParaboloid](OpenTD.RadCAD.OffsetParaboloid.md)

### CreateOgive\(\)

Creates a new Ogive using defaults from this TD instance.

```csharp
public Ogive CreateOgive()
```

#### Returns

 [Ogive](OpenTD.RadCAD.Ogive.md)

#### See Also

[Ogive](OpenTD.RadCAD.Ogive.md)

### CreateOpticalProps\(string\)

Creates a new optical property using defaults from this TD instance.

```csharp
public OpticalProps CreateOpticalProps(string caseSensitiveName)
```

#### Parameters

`caseSensitiveName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [OpticalProps](OpenTD.RadCAD.OpticalProps.md)

#### See Also

[OpticalProps](OpenTD.RadCAD.OpticalProps.md)

### CreateOrbit\(string\)

Creates a new orbit using defaults from this TD instance.

```csharp
public Orbit CreateOrbit(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Orbit](OpenTD.RadCAD.Orbit.md)

#### See Also

[Orbit](OpenTD.RadCAD.Orbit.md)

### CreatePID\(\)

Creates a new PID using defaults from this TD instance.

```csharp
public PID CreatePID()
```

#### Returns

 [PID](OpenTD.PID.md)

#### See Also

[PID](OpenTD.PID.md)

### CreateParabolicTrough\(\)

Creates a new ParabolicTrough using defaults from this TD instance.

```csharp
public ParabolicTrough CreateParabolicTrough()
```

#### Returns

 [ParabolicTrough](OpenTD.RadCAD.ParabolicTrough.md)

#### See Also

[ParabolicTrough](OpenTD.RadCAD.ParabolicTrough.md)

### CreateParaboloid\(\)

Creates a new Paraboloid using defaults from this TD instance.

```csharp
public Paraboloid CreateParaboloid()
```

#### Returns

 [Paraboloid](OpenTD.RadCAD.Paraboloid.md)

#### See Also

[Paraboloid](OpenTD.RadCAD.Paraboloid.md)

### CreatePath\(Connection, Connection, PathTypes, bool\)

Creates a new Path using defaults from this TD instance.

```csharp
public Path CreatePath(Connection from, Connection to, RcPathData.PathTypes pType = PathTypes.TUBE, bool twinPath = false)
```

#### Parameters

`from` [Connection](OpenTD.Connection.md)

`to` [Connection](OpenTD.Connection.md)

`pType` RcPathData.PathTypes

`twinPath` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [Path](OpenTD.FloCAD.Path.md)

#### See Also

[Path](OpenTD.FloCAD.Path.md)

### CreatePipe\(DbObject\)

```csharp
public Pipe CreatePipe(DbObject centerline)
```

#### Parameters

`centerline` [DbObject](OpenTD.DbObject.md)

#### Returns

 [Pipe](OpenTD.FloCAD.Pipe.md)

### CreatePipe\(IEnumerable<string\>\)

Creates a new Pipe using defaults from this TD instance.

```csharp
public Pipe CreatePipe(IEnumerable<string> centerlineHandles)
```

#### Parameters

`centerlineHandles` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 [Pipe](OpenTD.FloCAD.Pipe.md)

#### See Also

[Pipe](OpenTD.FloCAD.Pipe.md)

### CreatePolygon\(IEnumerable<Point3d\>\)

Creates a new single-face MeshFD using defaults from this TD instance.

```csharp
public Polygon CreatePolygon(IEnumerable<Point3d> vertices)
```

#### Parameters

`vertices` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Point3d](OpenTD.Point3d.md)\>

#### Returns

 [Polygon](OpenTD.RadCAD.Polygon.md)

#### See Also

[Polygon](OpenTD.RadCAD.Polygon.md)

### CreatePolyline\(\)

Creates a new LWPolyline in this Thermal Desktop instance.

```csharp
public Polyline CreatePolyline()
```

#### Returns

 [Polyline](OpenTD.Polyline.md)

#### See Also

[Polyline](OpenTD.Polyline.md)

### CreatePolyline3d\(IEnumerable<Point3d\>, bool\)

Creates a new 3d polyline in this Thermal Desktop instance.

```csharp
public Polyline3d CreatePolyline3d(IEnumerable<Point3d> vertices, bool closed = false)
```

#### Parameters

`vertices` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Point3d](OpenTD.Point3d.md)\>

`closed` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [Polyline3d](OpenTD.Polyline3d.md)

#### See Also

[Polyline3d](OpenTD.Polyline3d.md)

### CreatePort\(Connection\)

Creates a new Port using defaults from this TD instance. Pass an empty connection
to create a port that's not attached to anything.

```csharp
public Port CreatePort(Connection connection)
```

#### Parameters

`connection` [Connection](OpenTD.Connection.md)

#### Returns

 [Port](OpenTD.FloCAD.Port.md)

#### See Also

[Port](OpenTD.FloCAD.Port.md)

### CreatePostProcessingDataMapper\(string, ModelLength, FileFormats, bool, string, bool\)

Creates a new PostProcessingDataMapper using defaults from this TD instance.

```csharp
public DataMapper CreatePostProcessingDataMapper(string inputPathname, UnitsData.ModelLength inputUnit, DataMapper.FileFormats inputFileFormat, bool loadGroupsFromPatran = false, string patranPathname = "", bool useUCS = false)
```

#### Parameters

`inputPathname` [string](https://learn.microsoft.com/dotnet/api/system.string)

`inputUnit` [UnitsData](OpenTD.UnitsData.md).[ModelLength](OpenTD.UnitsData.ModelLength.md)

`inputFileFormat` [DataMapper](OpenTD.PostProcessing.DataMapper.md).[FileFormats](OpenTD.PostProcessing.DataMapper.FileFormats.md)

`loadGroupsFromPatran` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`patranPathname` [string](https://learn.microsoft.com/dotnet/api/system.string)

`useUCS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [DataMapper](OpenTD.PostProcessing.DataMapper.md)

#### See Also

[DataMapper](OpenTD.PostProcessing.DataMapper.md)

### CreatePressureLoad\(IEnumerable<Connection\>\)

Creates a new PressureLoad using defaults from this TD instance.

```csharp
public PressureLoad CreatePressureLoad(IEnumerable<Connection> appliedTo)
```

#### Parameters

`appliedTo` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Connection](OpenTD.Connection.md)\>

#### Returns

 [PressureLoad](OpenTD.PressureLoad.md)

#### See Also

[PressureLoad](OpenTD.PressureLoad.md)

### CreateQuadraticBrick\(IEnumerable<string\>\)

Creates a new QuadraticBrick using defaults from this TD instance.

```csharp
public QuadraticBrick CreateQuadraticBrick(IEnumerable<string> nodeHandles)
```

#### Parameters

`nodeHandles` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 [QuadraticBrick](OpenTD.RadCAD.FEM.QuadraticBrick.md)

#### See Also

[QuadraticBrick](OpenTD.RadCAD.FEM.QuadraticBrick.md)

### CreateQuadraticPyramid\(IEnumerable<string\>\)

Creates a new QuadraticPyramid using defaults from this TD instance.

```csharp
public QuadraticPyramid CreateQuadraticPyramid(IEnumerable<string> nodeHandles)
```

#### Parameters

`nodeHandles` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 [QuadraticPyramid](OpenTD.RadCAD.FEM.QuadraticPyramid.md)

#### See Also

[QuadraticPyramid](OpenTD.RadCAD.FEM.QuadraticPyramid.md)

### CreateQuadraticQuad\(IEnumerable<string\>\)

Creates a new QuadraticQuad using defaults from this TD instance.

```csharp
public QuadraticQuad CreateQuadraticQuad(IEnumerable<string> nodeHandles)
```

#### Parameters

`nodeHandles` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 [QuadraticQuad](OpenTD.RadCAD.FEM.QuadraticQuad.md)

#### See Also

[QuadraticQuad](OpenTD.RadCAD.FEM.QuadraticQuad.md)

### CreateQuadraticTet\(IEnumerable<string\>\)

Creates a new QuadraticTet using defaults from this TD instance.

```csharp
public QuadraticTet CreateQuadraticTet(IEnumerable<string> nodeHandles)
```

#### Parameters

`nodeHandles` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 [QuadraticTet](OpenTD.RadCAD.FEM.QuadraticTet.md)

#### See Also

[QuadraticTet](OpenTD.RadCAD.FEM.QuadraticTet.md)

### CreateQuadraticTri\(IEnumerable<string\>\)

Creates a new QuadraticTri using defaults from this TD instance.

```csharp
public QuadraticTri CreateQuadraticTri(IEnumerable<string> nodeHandles)
```

#### Parameters

`nodeHandles` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 [QuadraticTri](OpenTD.RadCAD.FEM.QuadraticTri.md)

#### See Also

[QuadraticTri](OpenTD.RadCAD.FEM.QuadraticTri.md)

### CreateQuadraticWedge\(IEnumerable<string\>\)

Creates a new QuadraticWedge using defaults from this TD instance.

```csharp
public QuadraticWedge CreateQuadraticWedge(IEnumerable<string> nodeHandles)
```

#### Parameters

`nodeHandles` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 [QuadraticWedge](OpenTD.RadCAD.FEM.QuadraticWedge.md)

#### See Also

[QuadraticWedge](OpenTD.RadCAD.FEM.QuadraticWedge.md)

### CreateRectangle\(\)

Creates a new Rectangle using defaults from this TD instance.

```csharp
public Rectangle CreateRectangle()
```

#### Returns

 [Rectangle](OpenTD.RadCAD.Rectangle.md)

#### See Also

[Rectangle](OpenTD.RadCAD.Rectangle.md)

### CreateScarfedCone\(\)

Creates a new ScarfedCone using defaults from this TD instance.

```csharp
public ScarfedCone CreateScarfedCone()
```

#### Returns

 [ScarfedCone](OpenTD.RadCAD.ScarfedCone.md)

#### See Also

[ScarfedCone](OpenTD.RadCAD.ScarfedCone.md)

### CreateScarfedCylinder\(\)

Creates a new ScarfedCylinder using defaults from this TD instance.

```csharp
public ScarfedCylinder CreateScarfedCylinder()
```

#### Returns

 [ScarfedCylinder](OpenTD.RadCAD.ScarfedCylinder.md)

#### See Also

[ScarfedCylinder](OpenTD.RadCAD.ScarfedCylinder.md)

### CreateSolidBrick\(\)

Creates a new SolidBrick using defaults from this TD instance.

```csharp
public SolidBrick CreateSolidBrick()
```

#### Returns

 [SolidBrick](OpenTD.RadCAD.FdSolid.SolidBrick.md)

#### See Also

[SolidBrick](OpenTD.RadCAD.FdSolid.SolidBrick.md)

### CreateSolidCone\(\)

Creates a new SolidCone using defaults from this TD instance.

```csharp
public SolidCone CreateSolidCone()
```

#### Returns

 [SolidCone](OpenTD.RadCAD.FdSolid.SolidCone.md)

#### See Also

[SolidCone](OpenTD.RadCAD.FdSolid.SolidCone.md)

### CreateSolidCylinder\(\)

Creates a new SolidCylinder using defaults from this TD instance.

```csharp
public SolidCylinder CreateSolidCylinder()
```

#### Returns

 [SolidCylinder](OpenTD.RadCAD.FdSolid.SolidCylinder.md)

#### See Also

[SolidCylinder](OpenTD.RadCAD.FdSolid.SolidCylinder.md)

### CreateSolidEllipsoid\(\)

Creates a new SolidEllipsoid using defaults from this TD instance.

```csharp
public SolidEllipsoid CreateSolidEllipsoid()
```

#### Returns

 [SolidEllipsoid](OpenTD.RadCAD.FdSolid.SolidEllipsoid.md)

#### See Also

[SolidEllipsoid](OpenTD.RadCAD.FdSolid.SolidEllipsoid.md)

### CreateSolidSphere\(\)

Creates a new SolidSphere using defaults from this TD instance.

```csharp
public SolidSphere CreateSolidSphere()
```

#### Returns

 [SolidSphere](OpenTD.RadCAD.FdSolid.SolidSphere.md)

#### See Also

[SolidSphere](OpenTD.RadCAD.FdSolid.SolidSphere.md)

### CreateSphere\(\)

Creates a new Sphere using defaults from this TD instance.

```csharp
public Sphere CreateSphere()
```

#### Returns

 [Sphere](OpenTD.RadCAD.Sphere.md)

#### See Also

[Sphere](OpenTD.RadCAD.Sphere.md)

### CreateSpline\(\)

Creates a new Spline in this Thermal Desktop instance.

```csharp
public Spline CreateSpline()
```

#### Returns

 [Spline](OpenTD.Spline.md)

#### See Also

[Spline](OpenTD.Spline.md)

### CreateSubmodel\(string\)

Creates a new Submodel using defaults from this TD instance.

```csharp
public Submodel CreateSubmodel(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Submodel](OpenTD.Submodel.md)

#### See Also

[Submodel](OpenTD.Submodel.md)

### CreateSymbol\(string, string\)

Creates a new Symbol using defaults from this TD instance.

```csharp
public Symbol CreateSymbol(string name, string value)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Symbol](OpenTD.Symbol.md)

#### See Also

[Symbol](OpenTD.Symbol.md)

### CreateTec\(IEnumerable<Connection\>, IEnumerable<Connection\>\)

Creates a new Tec using defaults from this TD instance.

```csharp
public Tec CreateTec(IEnumerable<Connection> from, IEnumerable<Connection> to)
```

#### Parameters

`from` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Connection](OpenTD.Connection.md)\>

`to` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Connection](OpenTD.Connection.md)\>

#### Returns

 [Tec](OpenTD.Tec.md)

#### See Also

[Tec](OpenTD.Tec.md)

### CreateTec\(Connection, IEnumerable<Connection\>\)

Creates a new Tec using defaults from this TD instance.

```csharp
public Tec CreateTec(Connection from, IEnumerable<Connection> to)
```

#### Parameters

`from` [Connection](OpenTD.Connection.md)

`to` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Connection](OpenTD.Connection.md)\>

#### Returns

 [Tec](OpenTD.Tec.md)

#### See Also

[Tec](OpenTD.Tec.md)

### CreateTec\(IEnumerable<Connection\>, Connection\)

Creates a new Tec using defaults from this TD instance.

```csharp
public Tec CreateTec(IEnumerable<Connection> from, Connection to)
```

#### Parameters

`from` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Connection](OpenTD.Connection.md)\>

`to` [Connection](OpenTD.Connection.md)

#### Returns

 [Tec](OpenTD.Tec.md)

#### See Also

[Tec](OpenTD.Tec.md)

### CreateTec\(Connection, Connection\)

Creates a new Tec using defaults from this TD instance.

```csharp
public Tec CreateTec(Connection from, Connection to)
```

#### Parameters

`from` [Connection](OpenTD.Connection.md)

`to` [Connection](OpenTD.Connection.md)

#### Returns

 [Tec](OpenTD.Tec.md)

#### See Also

[Tec](OpenTD.Tec.md)

### CreateTee\(IEnumerable<string\>, string\)

Creates a new Tee from a main branch and side branch using defaults from this TD instance.

```csharp
public Tee CreateTee(IEnumerable<string> mainBranchHandles, string sideBranchHandle)
```

#### Parameters

`mainBranchHandles` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

`sideBranchHandle` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Tee](OpenTD.FloCAD.Tee.md)

#### See Also

[Tee](OpenTD.FloCAD.Tee.md)

### CreateTee\(IEnumerable<string\>, Point3d\)

Creates a new Tee from a main branch and a location using defaults from this TD instance.

```csharp
public Tee CreateTee(IEnumerable<string> mainBranchHandles, Point3d origin)
```

#### Parameters

`mainBranchHandles` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

`origin` [Point3d](OpenTD.Point3d.md)

#### Returns

 [Tee](OpenTD.FloCAD.Tee.md)

#### See Also

[Tee](OpenTD.FloCAD.Tee.md)

### CreateText\(string\)

Creates a new Text annotation using defaults from this TD instance.

```csharp
public Text CreateText(string text)
```

#### Parameters

`text` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Text](OpenTD.Text.md)

#### See Also

[Text](OpenTD.Text.md)

### CreateThermoProps\(string\)

Creates a new ThermoProps using defaults from this TD instance.

```csharp
public ThermoProps CreateThermoProps(string caseSensitiveName)
```

#### Parameters

`caseSensitiveName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [ThermoProps](OpenTD.ThermoProps.md)

#### See Also

[ThermoProps](OpenTD.ThermoProps.md)

### CreateTie\(IEnumerable<Connection\>, IEnumerable<Connection\>, IEnumerable<string\>\)

Creates a new Tie using defaults from this TD instance.

```csharp
public Tie CreateTie(IEnumerable<Connection> thermals, IEnumerable<Connection> lumps, IEnumerable<string> paths)
```

#### Parameters

`thermals` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Connection](OpenTD.Connection.md)\>

`lumps` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Connection](OpenTD.Connection.md)\>

`paths` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 [Tie](OpenTD.FloCAD.Tie.md)

#### See Also

[Tie](OpenTD.FloCAD.Tie.md)

### CreateTorus\(\)

Creates a new Torus using defaults from this TD instance.

```csharp
public Torus CreateTorus()
```

#### Returns

 [Torus](OpenTD.RadCAD.Torus.md)

#### See Also

[Torus](OpenTD.RadCAD.Torus.md)

### CreateTracker\(Point3d\)

Creates a new Tracker using defaults from this TD instance.

```csharp
public Tracker CreateTracker(Point3d origin)
```

#### Parameters

`origin` [Point3d](OpenTD.Point3d.md)

#### Returns

 [Tracker](OpenTD.RadCAD.Tracker.md)

#### See Also

[Tracker](OpenTD.RadCAD.Tracker.md)

### CreateUDFACollection\(\)

Creates a new UDFACollection using defaults from this TD instance.

```csharp
public UDFACollection CreateUDFACollection()
```

#### Returns

 [UDFACollection](OpenTD.UDFACollection.md)

#### See Also

[UDFACollection](OpenTD.UDFACollection.md)

### CreateUserArray\(SubmodelNameData, int, IEnumerable<double\>\)

Creates a new UserArray using defaults from this TD instance.

```csharp
public UserArray CreateUserArray(SubmodelNameData submodel, int arrayId, IEnumerable<double> singletArray)
```

#### Parameters

`submodel` [SubmodelNameData](OpenTD.SubmodelNameData.md)

`arrayId` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`singletArray` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

#### Returns

 [UserArray](OpenTD.UserArray.md)

#### See Also

[UserArray](OpenTD.UserArray.md)

### CreateUserCode\(\)

Creates a new UserCode using defaults from this TD instance.

```csharp
public UserCode CreateUserCode()
```

#### Returns

 [UserCode](OpenTD.UserCode.md)

#### See Also

[UserCode](OpenTD.UserCode.md)

### DeleteCaseSet\(string, string\)

Deletes a Case Set within this TD instance.

```csharp
public void DeleteCaseSet(string caseName, string groupName = "")
```

#### Parameters

`caseName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`groupName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### See Also

[CaseSet](OpenTD.CaseSet.md)

### DeleteEntity\(TdDbEntityData\)

Deletes a TD/AutoCAD entity from the AutoCAD database.

```csharp
public void DeleteEntity(TdDbEntityData x)
```

#### Parameters

`x` [TdDbEntityData](OpenTD.TdDbEntityData.md)

The entity to delete.

### DeleteFluidSubmodel\(string\)

Deletes a fluid submodel within this TD instance.

```csharp
public void DeleteFluidSubmodel(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### See Also

[FluidSubmodel](OpenTD.FloCAD.FluidSubmodel.md)

### DeleteLayer\(string\)

Deletes a Layer within this TD instance.

```csharp
public void DeleteLayer(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### See Also

[Layer](OpenTD.Layer.md)

### DeleteLogicObject\(string\)

Deletes a LogicObject within this TD instance.

```csharp
public void DeleteLogicObject(string handle)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### See Also

[LogicObject](OpenTD.LogicObject.md)

### DeleteMaterialStack\(string\)

Deletes a Material Stack within this TD instance.

```csharp
public void DeleteMaterialStack(string caseSensitiveName)
```

#### Parameters

`caseSensitiveName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### See Also

[MaterialStack](OpenTD.MaterialStack.md)

### DeleteOpticalProps\(string\)

Deletes an optical property within this TD instance.

```csharp
public void DeleteOpticalProps(string caseSensitiveName)
```

#### Parameters

`caseSensitiveName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### See Also

[OpticalProps](OpenTD.RadCAD.OpticalProps.md)

### DeleteOrbit\(string\)

Deletes an orbit within this TD instance.

```csharp
public void DeleteOrbit(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### See Also

[Orbit](OpenTD.RadCAD.Orbit.md)

### DeleteSubmodel\(string\)

Deletes a Submodel within this TD instance.

```csharp
public void DeleteSubmodel(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### See Also

[Submodel](OpenTD.Submodel.md)

### DeleteSymbol\(string\)

Deletes a Symbol within this TD instance.

```csharp
public void DeleteSymbol(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### See Also

[Symbol](OpenTD.Symbol.md)

### DeleteThermoProps\(string\)

Deletes a ThermoProps within this TD instance.

```csharp
public void DeleteThermoProps(string caseSensitiveName)
```

#### Parameters

`caseSensitiveName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### See Also

[ThermoProps](OpenTD.ThermoProps.md)

### DisableUndo\(\)

```csharp
public void DisableUndo()
```

### EnableUndo\(\)

```csharp
public void EnableUndo()
```

### ExportNodeInfo\(ExportNodeInfoOptionsData\)

Call the TD Export Node Info command to get node info as a list of strings
(the default) or to write node info to the screen or file.

```csharp
public List<string> ExportNodeInfo(ExportNodeInfoOptionsData x)
```

#### Parameters

`x` [ExportNodeInfoOptionsData](OpenTD.ExportNodeInfoOptionsData.md)

Options.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### Filter<T\>\(List<T\>, Predicate<T\>\)

Filters the specified input list using a predicate/rule.

```csharp
public List<T> Filter<T>(List<T> inputList, Predicate<T> filter)
```

#### Parameters

`inputList` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<T\>

The input list.

`filter` [Predicate](https://learn.microsoft.com/dotnet/api/system.predicate\-1)<T\>

The rule.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<T\>

List&lt;T&gt;.

#### Type Parameters

`T` 

### GetAcEllipse\(string, bool\)

Gets an existing Ellipse from this TD instance.

```csharp
public AcEllipse GetAcEllipse(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to an Ellipse in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [AcEllipse](OpenTD.AcEllipse.md)

#### See Also

[AcEllipse](OpenTD.AcEllipse.md)

### GetAcEllipses\(bool\)

Gets all the Ellipses in this TD instance.

```csharp
public List<AcEllipse> GetAcEllipses(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[AcEllipse](OpenTD.AcEllipse.md)\>

#### See Also

[AcEllipse](OpenTD.AcEllipse.md)

### GetArc\(string, bool\)

Gets an existing Arc from this TD instance.

```csharp
public Arc GetArc(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to an Arc in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the Arc search.

#### Returns

 [Arc](OpenTD.Arc.md)

#### See Also

[Arc](OpenTD.Arc.md)

### GetArcs\(bool\)

Gets all the Arcs in this TD instance.

```csharp
public List<Arc> GetArcs(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Arc](OpenTD.Arc.md)\>

#### See Also

[Arc](OpenTD.Arc.md)

### GetAssemblies\(bool\)

Gets all the Assemblys in this TD instance.

```csharp
public List<Assembly> GetAssemblies(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Assembly](OpenTD.RadCAD.Assembly.md)\>

#### See Also

[Assembly](OpenTD.RadCAD.Assembly.md)

### GetAssembly\(string, bool\)

Gets an existing Assembly from this TD instance.

```csharp
public Assembly GetAssembly(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a Assembly in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the Assembly search

#### Returns

 [Assembly](OpenTD.RadCAD.Assembly.md)

#### See Also

[Assembly](OpenTD.RadCAD.Assembly.md)

### GetAutocadVariable\(string, out int\)

Gets the autocad variable.

```csharp
public void GetAutocadVariable(string name, out int value)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name.

`value` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The value.

#### Exceptions

 [OpenTDException](OpenTD.OpenTDException.md)

Autocad variable " + name + " is of type " + rawValue.Type + ", not INT

### GetAutocadVariable\(string, out double\)

Gets the autocad variable.

```csharp
public void GetAutocadVariable(string name, out double value)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name.

`value` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value.

#### Exceptions

 [OpenTDException](OpenTD.OpenTDException.md)

Autocad variable " + name + " is of type " + rawValue.Type + ", not DOUBLE

### GetAutocadVariable\(string, out string\)

Gets the autocad variable.

```csharp
public void GetAutocadVariable(string name, out string value)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name.

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)

The value.

#### Exceptions

 [OpenTDException](OpenTD.OpenTDException.md)

Autocad variable " + name + " is of type " + rawValue.Type + ", not STRING

### GetCappmp\(string, bool\)

Gets an existing cappmp from this TD instance.

```csharp
public Cappmp GetCappmp(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a cappmp in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [Cappmp](OpenTD.FloCAD.Cappmp.md)

#### See Also

[Cappmp](OpenTD.FloCAD.Cappmp.md)

### GetCappmps\(bool\)

Gets all the cappmps in this TD instance.

```csharp
public List<Cappmp> GetCappmps(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Cappmp](OpenTD.FloCAD.Cappmp.md)\>

#### See Also

[Cappmp](OpenTD.FloCAD.Cappmp.md)

### GetCaseSet\(string, string\)

Gets an existing Case Set from this TD instance.

```csharp
public CaseSet GetCaseSet(string name, string groupName = "")
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`groupName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [CaseSet](OpenTD.CaseSet.md)

#### See Also

[CaseSet](OpenTD.CaseSet.md)

### GetCaseSets\(\)

Gets all the Case Sets in this TD instance.

```csharp
public List<CaseSet> GetCaseSets()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[CaseSet](OpenTD.CaseSet.md)\>

#### See Also

[CaseSet](OpenTD.CaseSet.md)

### GetCircle\(string, bool\)

Gets an existing Circle from this TD instance.

```csharp
public Circle GetCircle(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to an Circle in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [Circle](OpenTD.Circle.md)

#### See Also

[Circle](OpenTD.Circle.md)

### GetCircles\(bool\)

Gets all the Circles in this TD instance.

```csharp
public List<Circle> GetCircles(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also seCircleh XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Circle](OpenTD.Circle.md)\>

#### See Also

[Circle](OpenTD.Circle.md)

### GetCommandHistory\(\)

Gets the AutoCAD command history. Note: this command will modify your Windows Clipboard.

```csharp
public string GetCommandHistory()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

System.String.

### GetCompartment\(string, bool\)

Gets an existing Compartment from this TD instance.

```csharp
public Compartment GetCompartment(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a Compartment in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [Compartment](OpenTD.FloCAD.Compartment.md)

#### See Also

[Compartment](OpenTD.FloCAD.Compartment.md)

### GetCompartments\(bool\)

Gets all the Compartments in this TD instance.

```csharp
public List<Compartment> GetCompartments(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Compartment](OpenTD.FloCAD.Compartment.md)\>

#### See Also

[Compartment](OpenTD.FloCAD.Compartment.md)

### GetConductor\(string, bool\)

Gets an existing Conductor from this TD instance.

```csharp
public Conductor GetConductor(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a Conductor in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [Conductor](OpenTD.Conductor.md)

#### See Also

[Conductor](OpenTD.Conductor.md)

### GetConductors\(bool\)

Gets all the Conductors in this TD instance.

```csharp
public List<Conductor> GetConductors(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Conductor](OpenTD.Conductor.md)\>

#### See Also

[Conductor](OpenTD.Conductor.md)

### GetCone\(string, bool\)

Gets an existing Cone from this TD instance.

```csharp
public Cone GetCone(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a Cone in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [Cone](OpenTD.RadCAD.Cone.md)

#### See Also

[Cone](OpenTD.RadCAD.Cone.md)

### GetCones\(bool\)

Gets all the Cones in this TD instance.

```csharp
public List<Cone> GetCones(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Cone](OpenTD.RadCAD.Cone.md)\>

#### See Also

[Cone](OpenTD.RadCAD.Cone.md)

### GetContactor\(string, bool\)

Gets an existing Contactor from this TD instance.

```csharp
public Contactor GetContactor(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a Contactor in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [Contactor](OpenTD.Contactor.md)

#### See Also

[Contactor](OpenTD.Contactor.md)

### GetContactors\(bool\)

Gets all the Contactors in this TD instance.

```csharp
public List<Contactor> GetContactors(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Contactor](OpenTD.Contactor.md)\>

#### See Also

[Contactor](OpenTD.Contactor.md)

### GetCurrentDwgPathname\(\)

```csharp
public string GetCurrentDwgPathname()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetCurrentLayer\(\)

Get the current layer from this TD instance.

```csharp
public Layer GetCurrentLayer()
```

#### Returns

 [Layer](OpenTD.Layer.md)

### GetCurrentWorkingDirectory\(\)

```csharp
public string GetCurrentWorkingDirectory()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetCylinder\(string, bool\)

Gets an existing Cylinder from this TD instance.

```csharp
public Cylinder GetCylinder(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a Cylinder in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [Cylinder](OpenTD.RadCAD.Cylinder.md)

#### See Also

[Cylinder](OpenTD.RadCAD.Cylinder.md)

### GetCylinders\(bool\)

Gets all the Cylinders in this TD instance.

```csharp
public List<Cylinder> GetCylinders(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Cylinder](OpenTD.RadCAD.Cylinder.md)\>

#### See Also

[Cylinder](OpenTD.RadCAD.Cylinder.md)

### GetDisk\(string, bool\)

Gets an existing Disk from this TD instance.

```csharp
public Disk GetDisk(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a Disk in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [Disk](OpenTD.RadCAD.Disk.md)

#### See Also

[Disk](OpenTD.RadCAD.Disk.md)

### GetDisks\(bool\)

Gets all the Disks in this TD instance.

```csharp
public List<Disk> GetDisks(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Disk](OpenTD.RadCAD.Disk.md)\>

#### See Also

[Disk](OpenTD.RadCAD.Disk.md)

### GetDomainManager\(\)

Gets an IDomainManager for working with domains in this TD instance.

```csharp
public IDomainManager GetDomainManager()
```

#### Returns

 [IDomainManager](OpenTD.IDomainManager.md)

IDomainManager.

#### See Also

[IDomainManager](OpenTD.IDomainManager.md)

### GetDwgUnits\(\)

Gets the TD units. Deprecated. Use ThermalDesktop.UserPreferences.Units instead.

```csharp
public UnitsData GetDwgUnits()
```

#### Returns

 [UnitsData](OpenTD.UnitsData.md)

UnitsData.

### GetDynamicSindaStatus\(\)

```csharp
public DynamicSindaStatus GetDynamicSindaStatus()
```

#### Returns

 [DynamicSindaStatus](OpenTD.DynamicSindaStatus.md)

### GetEllipse\(string, bool\)

Gets an existing Ellipse from this TD instance.

```csharp
public Ellipse GetEllipse(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to an Ellipse in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [Ellipse](OpenTD.RadCAD.Ellipse.md)

#### See Also

[Ellipse](OpenTD.RadCAD.Ellipse.md)

### GetEllipses\(bool\)

Gets all the Ellipses in this TD instance.

```csharp
public List<Ellipse> GetEllipses(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Ellipse](OpenTD.RadCAD.Ellipse.md)\>

#### See Also

[Ellipse](OpenTD.RadCAD.Ellipse.md)

### GetEllipsoid\(string, bool\)

Gets an existing Ellipsoid from this TD instance.

```csharp
public Ellipsoid GetEllipsoid(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to an Ellipsoid in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [Ellipsoid](OpenTD.RadCAD.Ellipsoid.md)

#### See Also

[Ellipsoid](OpenTD.RadCAD.Ellipsoid.md)

### GetEllipsoids\(bool\)

Gets all the Ellipsoids in this TD instance.

```csharp
public List<Ellipsoid> GetEllipsoids(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Ellipsoid](OpenTD.RadCAD.Ellipsoid.md)\>

#### See Also

[Ellipsoid](OpenTD.RadCAD.Ellipsoid.md)

### GetEllipticCone\(string, bool\)

Gets an existing EllipticCone from this TD instance.

```csharp
public EllipticCone GetEllipticCone(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to an EllipticCone in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [EllipticCone](OpenTD.RadCAD.EllipticCone.md)

#### See Also

[EllipticCone](OpenTD.RadCAD.EllipticCone.md)

### GetEllipticCones\(bool\)

Gets all the Cones in this TD instance.

```csharp
public List<EllipticCone> GetEllipticCones(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[EllipticCone](OpenTD.RadCAD.EllipticCone.md)\>

#### See Also

[EllipticCone](OpenTD.RadCAD.EllipticCone.md)

### GetEllipticCylinder\(string, bool\)

Gets an existing EllipticCylinder from this TD instance.

```csharp
public EllipticCylinder GetEllipticCylinder(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a single-face MeshFD in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [EllipticCylinder](OpenTD.RadCAD.EllipticCylinder.md)

#### See Also

[EllipticCylinder](OpenTD.RadCAD.EllipticCylinder.md)

### GetEllipticCylinders\(bool\)

Gets all the EllipticCylinders in this TD instance.

```csharp
public List<EllipticCylinder> GetEllipticCylinders(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[EllipticCylinder](OpenTD.RadCAD.EllipticCylinder.md)\>

#### See Also

[EllipticCylinder](OpenTD.RadCAD.EllipticCylinder.md)

### GetEntityType\(string\)

Use to determine the entity type ("RcNode", "RcRectangle", and so on) for a handle.

```csharp
public EntityDescriptor GetEntityType(string handle)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [EntityDescriptor](OpenTD.EntityDescriptor.md)

### GetEntityTypes\(IEnumerable<string\>\)

Use to determine the entity types ("RcNode", "RcRectangle", and so on) for a list
of handles.

```csharp
public List<EntityDescriptor> GetEntityTypes(IEnumerable<string> handles)
```

#### Parameters

`handles` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[EntityDescriptor](OpenTD.EntityDescriptor.md)\>

### GetFEMeshImporter\(string, bool\)

Gets an existing FEMeshImporter from this TD instance.

```csharp
public FEMeshImporter GetFEMeshImporter(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a FEMeshImporter in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [FEMeshImporter](OpenTD.RadCAD.FEMeshImporter.md)

#### See Also

[FEMeshImporter](OpenTD.RadCAD.FEMeshImporter.md)

### GetFEMeshImporters\(bool\)

Gets all the FEMeshImporters in this TD instance.

```csharp
public List<FEMeshImporter> GetFEMeshImporters(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[FEMeshImporter](OpenTD.RadCAD.FEMeshImporter.md)\>

#### See Also

[FEMeshImporter](OpenTD.RadCAD.FEMeshImporter.md)

### GetFTie\(string, bool\)

Gets an existing FTie from this TD instance.

```csharp
public FTie GetFTie(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to an FTie in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [FTie](OpenTD.FloCAD.FTie.md)

#### See Also

[FTie](OpenTD.FloCAD.FTie.md)

### GetFTies\(bool\)

Gets all the FTies in this TD instance.

```csharp
public List<FTie> GetFTies(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[FTie](OpenTD.FloCAD.FTie.md)\>

#### See Also

[FTie](OpenTD.FloCAD.FTie.md)

### GetFkLocator\(string, bool\)

Gets an existing FkLocator from this TD instance.

```csharp
public FkLocator GetFkLocator(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a  in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [FkLocator](OpenTD.FloCAD.FkLocator.md)

#### See Also

[FkLocator](OpenTD.FloCAD.FkLocator.md)

### GetFkLocators\(bool\)

Gets all the FkLocators in this TD instance.

```csharp
public List<FkLocator> GetFkLocators(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[FkLocator](OpenTD.FloCAD.FkLocator.md)\>

#### See Also

[FkLocator](OpenTD.FloCAD.FkLocator.md)

### GetFluidSubmodel\(string\)

Gets an existing fluid submodel from this TD instance.

```csharp
public FluidSubmodel GetFluidSubmodel(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [FluidSubmodel](OpenTD.FloCAD.FluidSubmodel.md)

#### See Also

[FluidSubmodel](OpenTD.FloCAD.FluidSubmodel.md)

### GetFluidSubmodels\(bool\)

Gets all the fluid submodels in this TD instance.

```csharp
public List<FluidSubmodel> GetFluidSubmodels(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[FluidSubmodel](OpenTD.FloCAD.FluidSubmodel.md)\>

#### See Also

[FluidSubmodel](OpenTD.FloCAD.FluidSubmodel.md)

### GetHeatLoad\(string, bool\)

Gets an existing HeatLoad from this TD instance.

```csharp
public HeatLoad GetHeatLoad(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a HeatLoad in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [HeatLoad](OpenTD.HeatLoad.md)

#### See Also

[HeatLoad](OpenTD.HeatLoad.md)

### GetHeatLoads\(bool\)

Gets all the HeatLoads in this TD instance.

```csharp
public List<HeatLoad> GetHeatLoads(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[HeatLoad](OpenTD.HeatLoad.md)\>

#### See Also

[HeatLoad](OpenTD.HeatLoad.md)

### GetHeater\(string, bool\)

Gets an existing Heater from this TD instance.

```csharp
public Heater GetHeater(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a Heater in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [Heater](OpenTD.Heater.md)

#### See Also

[Heater](OpenTD.Heater.md)

### GetHeaters\(bool\)

Gets all the Heaters in this TD instance.

```csharp
public List<Heater> GetHeaters(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Heater](OpenTD.Heater.md)\>

#### See Also

[Heater](OpenTD.Heater.md)

### GetHelices\(bool\)

Gets all the Helixs in this TD instance.

```csharp
public List<Helix> GetHelices(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Helix](OpenTD.Helix.md)\>

#### See Also

[Helix](OpenTD.Helix.md)

### GetHelix\(string, bool\)

Gets an existing Helix from this TD instance.

```csharp
public Helix GetHelix(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to an Helix in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [Helix](OpenTD.Helix.md)

#### See Also

[Helix](OpenTD.Helix.md)

### GetIFace\(string, bool\)

Gets an existing IFace from this TD instance.

```csharp
public IFace GetIFace(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to an IFace in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [IFace](OpenTD.FloCAD.IFace.md)

#### See Also

[IFace](OpenTD.FloCAD.IFace.md)

### GetIFaces\(bool\)

Gets all the IFaces in this TD instance.

```csharp
public List<IFace> GetIFaces(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[IFace](OpenTD.FloCAD.IFace.md)\>

#### See Also

[IFace](OpenTD.FloCAD.IFace.md)

### GetInstanceDataListString\(\)

Use the Set/GetInstanceData methods to store general data with this OpenTD server.

```csharp
public List<string> GetInstanceDataListString()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### GetLayer\(string\)

Gets an existing Layer from this TD instance. Note: this method accecpts an AutoCAD handle, not a layer name.

```csharp
public Layer GetLayer(string handle)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Layer](OpenTD.Layer.md)

#### See Also

[Layer](OpenTD.Layer.md)

### GetLayerByName\(string\)

Gets an existing Layer from this TD instance, based on the layer name.

```csharp
public Layer GetLayerByName(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Layer](OpenTD.Layer.md)

### GetLayers\(bool\)

Gets all the Layers in this TD instance.

```csharp
public List<Layer> GetLayers(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Layer](OpenTD.Layer.md)\>

#### See Also

[Layer](OpenTD.Layer.md)

### GetLine\(string, bool\)

Gets an existing Line from this TD instance.

```csharp
public Line GetLine(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a Line in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [Line](OpenTD.Line.md)

#### See Also

[Line](OpenTD.Line.md)

### GetLinearBrick\(string, bool\)

Gets an existing LinearBrick from this TD instance.

```csharp
public LinearBrick GetLinearBrick(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a LinearBrick in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [LinearBrick](OpenTD.RadCAD.FEM.LinearBrick.md)

#### See Also

[LinearBrick](OpenTD.RadCAD.FEM.LinearBrick.md)

### GetLinearBricks\(bool\)

Gets all the LinearBricks in this TD instance.

```csharp
public List<LinearBrick> GetLinearBricks(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[LinearBrick](OpenTD.RadCAD.FEM.LinearBrick.md)\>

#### See Also

[LinearBrick](OpenTD.RadCAD.FEM.LinearBrick.md)

### GetLinearPyramid\(string, bool\)

Gets an existing LinearPyramid from this TD instance.

```csharp
public LinearPyramid GetLinearPyramid(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a LinearPyramid in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [LinearPyramid](OpenTD.RadCAD.FEM.LinearPyramid.md)

#### See Also

[LinearPyramid](OpenTD.RadCAD.FEM.LinearPyramid.md)

### GetLinearPyramids\(bool\)

Gets all the LinearPyramids in this TD instance.

```csharp
public List<LinearPyramid> GetLinearPyramids(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[LinearPyramid](OpenTD.RadCAD.FEM.LinearPyramid.md)\>

#### See Also

[LinearPyramid](OpenTD.RadCAD.FEM.LinearPyramid.md)

### GetLinearQuad\(string, bool\)

Gets an existing LinearQuad from this TD instance.

```csharp
public LinearQuad GetLinearQuad(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a LinearQuad in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [LinearQuad](OpenTD.RadCAD.FEM.LinearQuad.md)

#### See Also

[LinearQuad](OpenTD.RadCAD.FEM.LinearQuad.md)

### GetLinearQuads\(bool\)

Gets all the LinearQuads in this TD instance.

```csharp
public List<LinearQuad> GetLinearQuads(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[LinearQuad](OpenTD.RadCAD.FEM.LinearQuad.md)\>

#### See Also

[LinearQuad](OpenTD.RadCAD.FEM.LinearQuad.md)

### GetLinearTet\(string, bool\)

Gets an existing LinearTet from this TD instance.

```csharp
public LinearTet GetLinearTet(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a LinearTet in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [LinearTet](OpenTD.RadCAD.FEM.LinearTet.md)

#### See Also

[LinearTet](OpenTD.RadCAD.FEM.LinearTet.md)

### GetLinearTets\(bool\)

Gets all the LinearTets in this TD instance.

```csharp
public List<LinearTet> GetLinearTets(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[LinearTet](OpenTD.RadCAD.FEM.LinearTet.md)\>

#### See Also

[LinearTet](OpenTD.RadCAD.FEM.LinearTet.md)

### GetLinearTri\(string, bool\)

Gets an existing LinearTri from this TD instance.

```csharp
public LinearTri GetLinearTri(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a LinearTri in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [LinearTri](OpenTD.RadCAD.FEM.LinearTri.md)

#### See Also

[LinearTri](OpenTD.RadCAD.FEM.LinearTri.md)

### GetLinearTris\(bool\)

Gets all the LinearTris in this TD instance.

```csharp
public List<LinearTri> GetLinearTris(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[LinearTri](OpenTD.RadCAD.FEM.LinearTri.md)\>

#### See Also

[LinearTri](OpenTD.RadCAD.FEM.LinearTri.md)

### GetLinearWedge\(string, bool\)

Gets an existing LinearWedge from this TD instance.

```csharp
public LinearWedge GetLinearWedge(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a LinearWedge in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [LinearWedge](OpenTD.RadCAD.FEM.LinearWedge.md)

#### See Also

[LinearWedge](OpenTD.RadCAD.FEM.LinearWedge.md)

### GetLinearWedges\(bool\)

Gets all the LinearWedges in this TD instance.

```csharp
public List<LinearWedge> GetLinearWedges(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[LinearWedge](OpenTD.RadCAD.FEM.LinearWedge.md)\>

#### See Also

[LinearWedge](OpenTD.RadCAD.FEM.LinearWedge.md)

### GetLines\(bool\)

Gets all the Lines in this TD instance.

```csharp
public List<Line> GetLines(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Line](OpenTD.Line.md)\>

#### See Also

[Line](OpenTD.Line.md)

### GetLogicObjects\(bool\)

Gets all the LogicObjects in this TD instance.

```csharp
public List<LogicObject> GetLogicObjects(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[LogicObject](OpenTD.LogicObject.md)\>

#### See Also

[LogicObject](OpenTD.LogicObject.md)

### GetLump\(string, bool\)

Gets an existing Lump from this TD instance.

```csharp
public Lump GetLump(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a Lump in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [Lump](OpenTD.FloCAD.Lump.md)

#### See Also

[Lump](OpenTD.FloCAD.Lump.md)

### GetLumps\(bool\)

Gets all the Lumps in this TD instance.

```csharp
public List<Lump> GetLumps(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Lump](OpenTD.FloCAD.Lump.md)\>

#### See Also

[Lump](OpenTD.FloCAD.Lump.md)

### GetMainWindow\(\)

Gets a NativeWindow representing the TD main window. This can be
used as an input to Form.Show to make the form a child of the
TD window. Especially useful for AddIns to ensure they are displayed
on top of the TD window and close nicely when TD closes.

```csharp
public NativeWindow GetMainWindow()
```

#### Returns

 [NativeWindow](https://learn.microsoft.com/dotnet/api/system.windows.forms.nativewindow)

### GetMaterialStack\(string\)

Gets an existing Material Stack from this TD instance.

```csharp
public MaterialStack GetMaterialStack(string caseSensitiveName)
```

#### Parameters

`caseSensitiveName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [MaterialStack](OpenTD.MaterialStack.md)

#### See Also

[MaterialStack](OpenTD.MaterialStack.md)

### GetMaterialStacks\(bool\)

Gets all the Material Stacks in this TD instance.

```csharp
public List<MaterialStack> GetMaterialStacks(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[MaterialStack](OpenTD.MaterialStack.md)\>

#### See Also

[MaterialStack](OpenTD.MaterialStack.md)

### GetMeasure\(string, bool\)

Gets an existing Measure from this TD instance.

```csharp
public Measure GetMeasure(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a Measure in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [Measure](OpenTD.Measure.md)

#### See Also

[Measure](OpenTD.Measure.md)

### GetMeasureMappingTolerances\(\)

Gets the mapping tolerances used by Measures in this TD instance.

```csharp
public MeasureMappingTolerances GetMeasureMappingTolerances()
```

#### Returns

 [MeasureMappingTolerances](OpenTD.MeasureMappingTolerances.md)

#### See Also

[Measure](OpenTD.Measure.md)

### GetMeasures\(bool\)

Gets all the Measures in this TD instance.

```csharp
public List<Measure> GetMeasures(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Measure](OpenTD.Measure.md)\>

#### See Also

[Measure](OpenTD.Measure.md)

### GetMeshFD\(string, bool\)

Gets an existing MeshFD from this TD instance.

```csharp
public MeshFD GetMeshFD(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a MeshFD in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [MeshFD](OpenTD.RadCAD.MeshFD.md)

#### See Also

[MeshFD](OpenTD.RadCAD.MeshFD.md)

### GetMeshFDs\(bool\)

Gets all the MeshFDs in this TD instance.

```csharp
public List<MeshFD> GetMeshFDs(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[MeshFD](OpenTD.RadCAD.MeshFD.md)\>

#### See Also

[MeshFD](OpenTD.RadCAD.MeshFD.md)

### GetModel\(\)

Gets a Model representing all OpenTD-supported entities in this TD instance.

```csharp
public Model GetModel()
```

#### Returns

 [Model](OpenTD.Model.md)

Model.

#### See Also

[Model](OpenTD.Model.md)

### GetNode\(string, bool\)

Gets an existing Node from this TD instance.

```csharp
public Node GetNode(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a Node in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [Node](OpenTD.Node.md)

#### See Also

[Node](OpenTD.Node.md)

### GetNodeCorrespondenceMap\(\)

Gets the TRASYS-style node correspondence dictionary. Keys are SINDA node names.
Values are lists of RadCAD nodes that correspond to each SINDA node.
Use SetNodeCorrespondenceState to turn node correspondence on or off.

```csharp
public Dictionary<string, List<string>> GetNodeCorrespondenceMap()
```

#### Returns

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>\>

#### See Also

[ThermalDesktop](OpenTD.ThermalDesktop.md).[SetNodeCorrespondenceState](OpenTD.ThermalDesktop.md\#OpenTD\_ThermalDesktop\_SetNodeCorrespondenceState\_System\_Boolean\_)\([bool](https://learn.microsoft.com/dotnet/api/system.boolean)\), 
[ThermalDesktop](OpenTD.ThermalDesktop.md).[SetNodeCorrespondenceMap](OpenTD.ThermalDesktop.md\#OpenTD\_ThermalDesktop\_SetNodeCorrespondenceMap\_System\_Collections\_Generic\_Dictionary\_System\_String\_System\_Collections\_Generic\_List\_System\_String\_\_\_)\([Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>\>\)

### GetNodes\(bool\)

Gets all the Nodes in this TD instance.

```csharp
public List<Node> GetNodes(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Node](OpenTD.Node.md)\>

#### See Also

[Node](OpenTD.Node.md)

### GetNotes\(\)

Gets the dwg notes from this TD instance.

```csharp
public Notes GetNotes()
```

#### Returns

 [Notes](OpenTD.Notes.md)

#### See Also

[Notes](OpenTD.Notes.md)

### GetNumberOfDbObjects\(bool, bool, bool, bool, bool\)

```csharp
public int GetNumberOfDbObjects(bool forward = true, bool modelSpace = true, bool xRefs = false, bool paperSpace = false, bool tdOnly = true)
```

#### Parameters

`forward` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`modelSpace` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`xRefs` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`paperSpace` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`tdOnly` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetOffsetParaboloid\(string, bool\)

Gets an existing OffsetParaboloid from this TD instance.

```csharp
public OffsetParaboloid GetOffsetParaboloid(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to an OffsetParaboloid in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [OffsetParaboloid](OpenTD.RadCAD.OffsetParaboloid.md)

#### See Also

[OffsetParaboloid](OpenTD.RadCAD.OffsetParaboloid.md)

### GetOffsetParaboloids\(bool\)

Gets all the OffsetParaboloids in this TD instance.

```csharp
public List<OffsetParaboloid> GetOffsetParaboloids(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[OffsetParaboloid](OpenTD.RadCAD.OffsetParaboloid.md)\>

#### See Also

[OffsetParaboloid](OpenTD.RadCAD.OffsetParaboloid.md)

### GetOgive\(string, bool\)

Gets an existing Ogive from this TD instance.

```csharp
public Ogive GetOgive(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to an Ogive in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [Ogive](OpenTD.RadCAD.Ogive.md)

#### See Also

[Ogive](OpenTD.RadCAD.Ogive.md)

### GetOgives\(bool\)

Gets all the Ogives in this TD instance.

```csharp
public List<Ogive> GetOgives(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Ogive](OpenTD.RadCAD.Ogive.md)\>

#### See Also

[Ogive](OpenTD.RadCAD.Ogive.md)

### GetOpticalPropDBPathname\(\)

Gets the pathname of the current optical property database file
in use by this TD instance.

```csharp
public string GetOpticalPropDBPathname()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetOpticalProps\(string\)

Gets an existing optical property from this TD instance.

```csharp
public OpticalProps GetOpticalProps(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [OpticalProps](OpenTD.RadCAD.OpticalProps.md)

#### See Also

[OpticalProps](OpenTD.RadCAD.OpticalProps.md)

### GetOpticalPropss\(bool\)

Gets all the optical properties in this TD instance.

```csharp
public List<OpticalProps> GetOpticalPropss(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[OpticalProps](OpenTD.RadCAD.OpticalProps.md)\>

#### See Also

[OpticalProps](OpenTD.RadCAD.OpticalProps.md)

### GetOrbit\(string\)

Gets an existing orbit from this TD instance.

```csharp
public Orbit GetOrbit(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Orbit](OpenTD.RadCAD.Orbit.md)

#### See Also

[Orbit](OpenTD.RadCAD.Orbit.md)

### GetOrbits\(\)

Gets all the orbits in this TD instance.

```csharp
public List<Orbit> GetOrbits()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Orbit](OpenTD.RadCAD.Orbit.md)\>

#### See Also

[Orbit](OpenTD.RadCAD.Orbit.md)

### GetParabolicTrough\(string, bool\)

Gets an existing ParabolicTrough from this TD instance.

```csharp
public ParabolicTrough GetParabolicTrough(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a ParabolicTrough in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [ParabolicTrough](OpenTD.RadCAD.ParabolicTrough.md)

#### See Also

[ParabolicTrough](OpenTD.RadCAD.ParabolicTrough.md)

### GetParabolicTroughs\(bool\)

Gets all the ParabolicTroughs in this TD instance.

```csharp
public List<ParabolicTrough> GetParabolicTroughs(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ParabolicTrough](OpenTD.RadCAD.ParabolicTrough.md)\>

#### See Also

[ParabolicTrough](OpenTD.RadCAD.ParabolicTrough.md)

### GetParaboloid\(string, bool\)

Gets an existing Paraboloid from this TD instance.

```csharp
public Paraboloid GetParaboloid(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a Paraboloid in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [Paraboloid](OpenTD.RadCAD.Paraboloid.md)

#### See Also

[Paraboloid](OpenTD.RadCAD.Paraboloid.md)

### GetParaboloids\(bool\)

Gets all the Paraboloids in this TD instance.

```csharp
public List<Paraboloid> GetParaboloids(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Paraboloid](OpenTD.RadCAD.Paraboloid.md)\>

#### See Also

[Paraboloid](OpenTD.RadCAD.Paraboloid.md)

### GetPath\(string, bool\)

Gets an existing Path from this TD instance.

```csharp
public Path GetPath(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a Path in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [Path](OpenTD.FloCAD.Path.md)

#### See Also

[Path](OpenTD.FloCAD.Path.md)

### GetPaths\(bool\)

Gets all the Paths in this TD instance.

```csharp
public List<Path> GetPaths(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Path](OpenTD.FloCAD.Path.md)\>

#### See Also

[Path](OpenTD.FloCAD.Path.md)

### GetPipe\(string, bool\)

Gets an existing Pipe from this TD instance.

```csharp
public Pipe GetPipe(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a Pipe in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [Pipe](OpenTD.FloCAD.Pipe.md)

#### See Also

[Pipe](OpenTD.FloCAD.Pipe.md)

### GetPipes\(bool\)

Gets all the Pipes in this TD instance.

```csharp
public List<Pipe> GetPipes(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Pipe](OpenTD.FloCAD.Pipe.md)\>

#### See Also

[Pipe](OpenTD.FloCAD.Pipe.md)

### GetPolygon\(string\)

Gets an existing single-face MeshFD from this TD instance.

```csharp
public Polygon GetPolygon(string handle)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a single-face MeshFD in this TD instance.

#### Returns

 [Polygon](OpenTD.RadCAD.Polygon.md)

#### See Also

[Polygon](OpenTD.RadCAD.Polygon.md)

### GetPolygons\(bool\)

Gets all the Polygons in this TD instance.

```csharp
public List<Polygon> GetPolygons(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Polygon](OpenTD.RadCAD.Polygon.md)\>

#### See Also

[Polygon](OpenTD.RadCAD.Polygon.md)

### GetPolyline\(string, bool\)

Gets an existing LWPolyline from this TD instance.

```csharp
public Polyline GetPolyline(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to an LWPolyline in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [Polyline](OpenTD.Polyline.md)

#### See Also

[Polyline](OpenTD.Polyline.md)

### GetPolyline3d\(string, bool\)

Gets an existing 3d polyline from this TD instance.

```csharp
public Polyline3d GetPolyline3d(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to an 3d polyline in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [Polyline3d](OpenTD.Polyline3d.md)

#### See Also

[Polyline3d](OpenTD.Polyline3d.md)

### GetPolyline3ds\(bool\)

Gets all the 3d polylines in this TD instance.

```csharp
public List<Polyline3d> GetPolyline3ds(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Polyline3d](OpenTD.Polyline3d.md)\>

#### See Also

[Polyline3d](OpenTD.Polyline3d.md)

### GetPolylines\(bool\)

Gets all the LWPolylines in this TD instance.

```csharp
public List<Polyline> GetPolylines(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Polyline](OpenTD.Polyline.md)\>

#### See Also

[Polyline](OpenTD.Polyline.md)

### GetPort\(string, bool\)

Gets an existing Port from this TD instance.

```csharp
public Port GetPort(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a Port in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [Port](OpenTD.FloCAD.Port.md)

#### See Also

[Port](OpenTD.FloCAD.Port.md)

### GetPorts\(bool\)

Gets all the Ports in this TD instance.

```csharp
public List<Port> GetPorts(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Port](OpenTD.FloCAD.Port.md)\>

#### See Also

[Port](OpenTD.FloCAD.Port.md)

### GetPostProcessingDataMapper\(string, bool\)

Gets an existing PostProcessingDataMapper from this TD instance.

```csharp
public DataMapper GetPostProcessingDataMapper(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a PostProcessingDataMapper in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [DataMapper](OpenTD.PostProcessing.DataMapper.md)

#### See Also

[DataMapper](OpenTD.PostProcessing.DataMapper.md)

### GetPostProcessingDataMappers\(bool\)

Gets all the PostProcessingDataMappers in this TD instance.

```csharp
public List<DataMapper> GetPostProcessingDataMappers(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[DataMapper](OpenTD.PostProcessing.DataMapper.md)\>

#### See Also

[DataMapper](OpenTD.PostProcessing.DataMapper.md)

### GetPressureLoad\(string, bool\)

Gets an existing PressureLoad from this TD instance.

```csharp
public PressureLoad GetPressureLoad(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a PressureLoad in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [PressureLoad](OpenTD.PressureLoad.md)

#### See Also

[PressureLoad](OpenTD.PressureLoad.md)

### GetPressureLoads\(bool\)

Gets all the PressureLoads in this TD instance.

```csharp
public List<PressureLoad> GetPressureLoads(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[PressureLoad](OpenTD.PressureLoad.md)\>

#### See Also

[PressureLoad](OpenTD.PressureLoad.md)

### GetQuadraticBrick\(string, bool\)

Gets an existing QuadraticBrick from this TD instance.

```csharp
public QuadraticBrick GetQuadraticBrick(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a QuadraticBrick in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [QuadraticBrick](OpenTD.RadCAD.FEM.QuadraticBrick.md)

#### See Also

[QuadraticBrick](OpenTD.RadCAD.FEM.QuadraticBrick.md)

### GetQuadraticBricks\(bool\)

Gets all the QuadraticBricks in this TD instance.

```csharp
public List<QuadraticBrick> GetQuadraticBricks(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[QuadraticBrick](OpenTD.RadCAD.FEM.QuadraticBrick.md)\>

#### See Also

[QuadraticBrick](OpenTD.RadCAD.FEM.QuadraticBrick.md)

### GetQuadraticPyramid\(string, bool\)

Gets an existing QuadraticPyramid from this TD instance.

```csharp
public QuadraticPyramid GetQuadraticPyramid(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a QuadraticPyramid in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [QuadraticPyramid](OpenTD.RadCAD.FEM.QuadraticPyramid.md)

#### See Also

[QuadraticPyramid](OpenTD.RadCAD.FEM.QuadraticPyramid.md)

### GetQuadraticPyramids\(bool\)

Gets all the QuadraticPyramids in this TD instance.

```csharp
public List<QuadraticPyramid> GetQuadraticPyramids(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[QuadraticPyramid](OpenTD.RadCAD.FEM.QuadraticPyramid.md)\>

#### See Also

[QuadraticPyramid](OpenTD.RadCAD.FEM.QuadraticPyramid.md)

### GetQuadraticQuad\(string, bool\)

Gets an existing QuadraticQuad from this TD instance.

```csharp
public QuadraticQuad GetQuadraticQuad(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a QuadraticQuad in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [QuadraticQuad](OpenTD.RadCAD.FEM.QuadraticQuad.md)

#### See Also

[QuadraticQuad](OpenTD.RadCAD.FEM.QuadraticQuad.md)

### GetQuadraticQuads\(bool\)

Gets all the QuadraticQuads in this TD instance.

```csharp
public List<QuadraticQuad> GetQuadraticQuads(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[QuadraticQuad](OpenTD.RadCAD.FEM.QuadraticQuad.md)\>

#### See Also

[QuadraticQuad](OpenTD.RadCAD.FEM.QuadraticQuad.md)

### GetQuadraticTet\(string, bool\)

Gets an existing QuadraticTet from this TD instance.

```csharp
public QuadraticTet GetQuadraticTet(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a QuadraticTet in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [QuadraticTet](OpenTD.RadCAD.FEM.QuadraticTet.md)

#### See Also

[QuadraticTet](OpenTD.RadCAD.FEM.QuadraticTet.md)

### GetQuadraticTets\(bool\)

Gets all the QuadraticTets in this TD instance.

```csharp
public List<QuadraticTet> GetQuadraticTets(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[QuadraticTet](OpenTD.RadCAD.FEM.QuadraticTet.md)\>

#### See Also

[QuadraticTet](OpenTD.RadCAD.FEM.QuadraticTet.md)

### GetQuadraticTri\(string, bool\)

Gets an existing QuadraticTri from this TD instance.

```csharp
public QuadraticTri GetQuadraticTri(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a QuadraticTri in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [QuadraticTri](OpenTD.RadCAD.FEM.QuadraticTri.md)

#### See Also

[QuadraticTri](OpenTD.RadCAD.FEM.QuadraticTri.md)

### GetQuadraticTris\(bool\)

Gets all the QuadraticTris in this TD instance.

```csharp
public List<QuadraticTri> GetQuadraticTris(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[QuadraticTri](OpenTD.RadCAD.FEM.QuadraticTri.md)\>

#### See Also

[QuadraticTri](OpenTD.RadCAD.FEM.QuadraticTri.md)

### GetQuadraticWedge\(string, bool\)

Gets an existing QuadraticWedge from this TD instance.

```csharp
public QuadraticWedge GetQuadraticWedge(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a QuadraticWedge in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [QuadraticWedge](OpenTD.RadCAD.FEM.QuadraticWedge.md)

#### See Also

[QuadraticWedge](OpenTD.RadCAD.FEM.QuadraticWedge.md)

### GetQuadraticWedges\(bool\)

Gets all the QuadraticWedges in this TD instance.

```csharp
public List<QuadraticWedge> GetQuadraticWedges(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[QuadraticWedge](OpenTD.RadCAD.FEM.QuadraticWedge.md)\>

#### See Also

[QuadraticWedge](OpenTD.RadCAD.FEM.QuadraticWedge.md)

### GetRectangle\(string, bool\)

Gets an existing Rectangle from this TD instance.

```csharp
public Rectangle GetRectangle(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a Rectangle in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [Rectangle](OpenTD.RadCAD.Rectangle.md)

#### See Also

[Rectangle](OpenTD.RadCAD.Rectangle.md)

### GetRectangles\(bool\)

Gets all the Rectangles in this TD instance.

```csharp
public List<Rectangle> GetRectangles(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Rectangle](OpenTD.RadCAD.Rectangle.md)\>

#### See Also

[Rectangle](OpenTD.RadCAD.Rectangle.md)

### GetScarfedCone\(string, bool\)

Gets an existing ScarfedCone from this TD instance.

```csharp
public ScarfedCone GetScarfedCone(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a ScarfedCone in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [ScarfedCone](OpenTD.RadCAD.ScarfedCone.md)

#### See Also

[ScarfedCone](OpenTD.RadCAD.ScarfedCone.md)

### GetScarfedCones\(bool\)

Gets all the ScarfedCones in this TD instance.

```csharp
public List<ScarfedCone> GetScarfedCones(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ScarfedCone](OpenTD.RadCAD.ScarfedCone.md)\>

#### See Also

[ScarfedCone](OpenTD.RadCAD.ScarfedCone.md)

### GetScarfedCylinder\(string, bool\)

Gets an existing ScarfedCylinder from this TD instance.

```csharp
public ScarfedCylinder GetScarfedCylinder(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a ScarfedCylinder in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [ScarfedCylinder](OpenTD.RadCAD.ScarfedCylinder.md)

#### See Also

[ScarfedCylinder](OpenTD.RadCAD.ScarfedCylinder.md)

### GetScarfedCylinders\(bool\)

Gets all the ScarfedCylinders in this TD instance.

```csharp
public List<ScarfedCylinder> GetScarfedCylinders(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ScarfedCylinder](OpenTD.RadCAD.ScarfedCylinder.md)\>

#### See Also

[ScarfedCylinder](OpenTD.RadCAD.ScarfedCylinder.md)

### GetSelection\(SelectionOptions\)

Prompts the user to select entities in TD graphically, or from the Model Browser,
or from Domains or AutoCAD Groups.

```csharp
public List<EntityDescriptor> GetSelection(SelectionOptions options)
```

#### Parameters

`options` [SelectionOptions](OpenTD.SelectionOptions.md)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[EntityDescriptor](OpenTD.EntityDescriptor.md)\>

#### See Also

[SelectionOptions](OpenTD.SelectionOptions.md)

### GetSelection\(\)

Prompts the user to select entities in TD using default SelectionOptions.

```csharp
public List<EntityDescriptor> GetSelection()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[EntityDescriptor](OpenTD.EntityDescriptor.md)\>

#### See Also

[SelectionOptions](OpenTD.SelectionOptions.md)

### GetSolidBrick\(string, bool\)

Gets an existing SolidBrick from this TD instance.

```csharp
public SolidBrick GetSolidBrick(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a SolidBrick in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [SolidBrick](OpenTD.RadCAD.FdSolid.SolidBrick.md)

#### See Also

[SolidBrick](OpenTD.RadCAD.FdSolid.SolidBrick.md)

### GetSolidBricks\(bool\)

Gets all the SolidBricks in this TD instance.

```csharp
public List<SolidBrick> GetSolidBricks(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[SolidBrick](OpenTD.RadCAD.FdSolid.SolidBrick.md)\>

#### See Also

[SolidBrick](OpenTD.RadCAD.FdSolid.SolidBrick.md)

### GetSolidCone\(string, bool\)

Gets an existing SolidCone from this TD instance.

```csharp
public SolidCone GetSolidCone(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a SolidCone in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [SolidCone](OpenTD.RadCAD.FdSolid.SolidCone.md)

#### See Also

[SolidCone](OpenTD.RadCAD.FdSolid.SolidCone.md)

### GetSolidCones\(bool\)

Gets all the SolidCones in this TD instance.

```csharp
public List<SolidCone> GetSolidCones(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[SolidCone](OpenTD.RadCAD.FdSolid.SolidCone.md)\>

#### See Also

[SolidCone](OpenTD.RadCAD.FdSolid.SolidCone.md)

### GetSolidCylinder\(string, bool\)

Gets an existing SolidCylinder from this TD instance.

```csharp
public SolidCylinder GetSolidCylinder(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a SolidCylinder in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [SolidCylinder](OpenTD.RadCAD.FdSolid.SolidCylinder.md)

#### See Also

[SolidCylinder](OpenTD.RadCAD.FdSolid.SolidCylinder.md)

### GetSolidCylinders\(bool\)

Gets all the SolidCylinders in this TD instance.

```csharp
public List<SolidCylinder> GetSolidCylinders(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[SolidCylinder](OpenTD.RadCAD.FdSolid.SolidCylinder.md)\>

#### See Also

[SolidCylinder](OpenTD.RadCAD.FdSolid.SolidCylinder.md)

### GetSolidEllipsoid\(string, bool\)

Gets an existing SolidEllipsoid from this TD instance.

```csharp
public SolidEllipsoid GetSolidEllipsoid(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a SolidEllipsoid in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [SolidEllipsoid](OpenTD.RadCAD.FdSolid.SolidEllipsoid.md)

#### See Also

[SolidEllipsoid](OpenTD.RadCAD.FdSolid.SolidEllipsoid.md)

### GetSolidEllipsoids\(bool\)

Gets all the SolidEllipsoids in this TD instance.

```csharp
public List<SolidEllipsoid> GetSolidEllipsoids(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[SolidEllipsoid](OpenTD.RadCAD.FdSolid.SolidEllipsoid.md)\>

#### See Also

[SolidEllipsoid](OpenTD.RadCAD.FdSolid.SolidEllipsoid.md)

### GetSolidSphere\(string, bool\)

Gets an existing SolidSphere from this TD instance.

```csharp
public SolidSphere GetSolidSphere(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a SolidSphere in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [SolidSphere](OpenTD.RadCAD.FdSolid.SolidSphere.md)

#### See Also

[SolidSphere](OpenTD.RadCAD.FdSolid.SolidSphere.md)

### GetSolidSpheres\(bool\)

Gets all the SolidSpheres in this TD instance.

```csharp
public List<SolidSphere> GetSolidSpheres(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[SolidSphere](OpenTD.RadCAD.FdSolid.SolidSphere.md)\>

#### See Also

[SolidSphere](OpenTD.RadCAD.FdSolid.SolidSphere.md)

### GetSphere\(string, bool\)

Gets an existing Sphere from this TD instance.

```csharp
public Sphere GetSphere(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a Sphere in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [Sphere](OpenTD.RadCAD.Sphere.md)

#### See Also

[Sphere](OpenTD.RadCAD.Sphere.md)

### GetSpheres\(bool\)

Gets all the Spheres in this TD instance.

```csharp
public List<Sphere> GetSpheres(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Sphere](OpenTD.RadCAD.Sphere.md)\>

#### See Also

[Sphere](OpenTD.RadCAD.Sphere.md)

### GetSpline\(string, bool\)

Gets an existing Spline from this TD instance.

```csharp
public Spline GetSpline(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to an Spline in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [Spline](OpenTD.Spline.md)

#### See Also

[Spline](OpenTD.Spline.md)

### GetSplines\(bool\)

Gets all the Splines in this TD instance.

```csharp
public List<Spline> GetSplines(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Spline](OpenTD.Spline.md)\>

#### See Also

[Spline](OpenTD.Spline.md)

### GetSubmodels\(bool\)

Gets all the Submodels in this TD instance.

```csharp
public List<Submodel> GetSubmodels(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Submodel](OpenTD.Submodel.md)\>

#### See Also

[Submodel](OpenTD.Submodel.md)

### GetSymbol\(string\)

Gets an existing Symbol from this TD instance.

```csharp
public Symbol GetSymbol(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Symbol](OpenTD.Symbol.md)

#### See Also

[Symbol](OpenTD.Symbol.md)

### GetSymbolValue\(string\)

Gets an evaluated symbol value from this TD instance.
Throws an OpenTDException if symbol does not exist.

```csharp
public double GetSymbolValue(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name.

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

System.Double.

### GetSymbols\(\)

Gets all the Symbols in this TD instance.

```csharp
public List<Symbol> GetSymbols()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Symbol](OpenTD.Symbol.md)\>

#### See Also

[Symbol](OpenTD.Symbol.md)

### GetTec\(string, bool\)

Gets an existing Tec from this TD instance.

```csharp
public Tec GetTec(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a Tec in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [Tec](OpenTD.Tec.md)

#### See Also

[Tec](OpenTD.Tec.md)

### GetTecs\(bool\)

Gets all the Tecs in this TD instance.

```csharp
public List<Tec> GetTecs(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Tec](OpenTD.Tec.md)\>

#### See Also

[Tec](OpenTD.Tec.md)

### GetTee\(string, bool\)

Gets an existing Tee from this TD instance.

```csharp
public Tee GetTee(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a Tee in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [Tee](OpenTD.FloCAD.Tee.md)

#### See Also

[Tee](OpenTD.FloCAD.Tee.md)

### GetTees\(bool\)

Gets all the Tees in this TD instance.

```csharp
public List<Tee> GetTees(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Tee](OpenTD.FloCAD.Tee.md)\>

#### See Also

[Tee](OpenTD.FloCAD.Tee.md)

### GetText\(string, bool\)

Gets an existing Text annotation from this TD instance.

```csharp
public Text GetText(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a Text in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [Text](OpenTD.Text.md)

#### See Also

[Text](OpenTD.Text.md)

### GetTexts\(bool\)

Gets all the Text annotations in this TD instance.

```csharp
public List<Text> GetTexts(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Text](OpenTD.Text.md)\>

#### See Also

[Text](OpenTD.Text.md)

### GetThermalDesktopVersion\(\)

Gets the thermal desktop version.

```csharp
public string GetThermalDesktopVersion()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

System.String.

### GetThermoPropDBPathname\(\)

Gets the pathname of the current thermophysical property database file
in use by this TD instance.

```csharp
public string GetThermoPropDBPathname()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetThermoProps\(string\)

Gets an existing ThermoProps from this TD instance.

```csharp
public ThermoProps GetThermoProps(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [ThermoProps](OpenTD.ThermoProps.md)

#### See Also

[ThermoProps](OpenTD.ThermoProps.md)

### GetThermoPropss\(bool\)

Gets all the ThermoProps in this TD instance.

```csharp
public List<ThermoProps> GetThermoPropss(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ThermoProps](OpenTD.ThermoProps.md)\>

#### See Also

[ThermoProps](OpenTD.ThermoProps.md)

### GetTie\(string, bool\)

Gets an existing Tie from this TD instance.

```csharp
public Tie GetTie(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a Tie in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [Tie](OpenTD.FloCAD.Tie.md)

#### See Also

[Tie](OpenTD.FloCAD.Tie.md)

### GetTies\(bool\)

Gets all the Ties in this TD instance.

```csharp
public List<Tie> GetTies(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Tie](OpenTD.FloCAD.Tie.md)\>

#### See Also

[Tie](OpenTD.FloCAD.Tie.md)

### GetTorus\(string, bool\)

Gets an existing Torus from this TD instance.

```csharp
public Torus GetTorus(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a Torus in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [Torus](OpenTD.RadCAD.Torus.md)

#### See Also

[Torus](OpenTD.RadCAD.Torus.md)

### GetToruses\(bool\)

Gets all the Toruss in this TD instance.

```csharp
public List<Torus> GetToruses(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Torus](OpenTD.RadCAD.Torus.md)\>

#### See Also

[Torus](OpenTD.RadCAD.Torus.md)

### GetTracker\(string, bool\)

Gets an existing Tracker from this TD instance.

```csharp
public Tracker GetTracker(string handle, bool searchXREFS = false)
```

#### Parameters

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

An AutoCAD handle attached to a Tracker in this TD instance.

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If true, xref drawings will be included in the search.

#### Returns

 [Tracker](OpenTD.RadCAD.Tracker.md)

#### See Also

[Tracker](OpenTD.RadCAD.Tracker.md)

### GetTrackers\(bool\)

Gets all the Trackers in this TD instance.

```csharp
public List<Tracker> GetTrackers(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> also search XREF's referenced in this TD instance.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Tracker](OpenTD.RadCAD.Tracker.md)\>

#### See Also

[Tracker](OpenTD.RadCAD.Tracker.md)

### GetViewNames\(\)

Gets the names of the AutoCAD named views in this TD instance.

```csharp
public List<string> GetViewNames()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### GetXREFpathnames\(\)

```csharp
public List<XrefInfo> GetXREFpathnames()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[XrefInfo](OpenTD.XrefInfo.md)\>

### HideModelBrowser\(\)

```csharp
public void HideModelBrowser()
```

### IsConnected\(\)

Determines whether this ThermalDesktop is connected to an instance of TD.

```csharp
public bool IsConnected()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if this instance is connected; otherwise, <code>false</code>.

### MergeNodes\(MergeNodesOptionsData\)

Calls the TD Merge Nodes command.

```csharp
public void MergeNodes(MergeNodesOptionsData x)
```

#### Parameters

`x` [MergeNodesOptionsData](OpenTD.MergeNodesOptionsData.md)

Options.

### OpenOpticalPropDB\(string\)

Opens an optical property database file.

```csharp
public void OpenOpticalPropDB(string pathname)
```

#### Parameters

`pathname` [string](https://learn.microsoft.com/dotnet/api/system.string)

The rco pathname.

### OpenThermoPropDB\(string\)

Opens a thermophysical property database file.

```csharp
public void OpenThermoPropDB(string pathname)
```

#### Parameters

`pathname` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tdp pathname.

### Print\(string\)

Prints the specified text to the AutoCAD commandline, without automatically adding a newline.

```csharp
public void Print(string text)
```

#### Parameters

`text` [string](https://learn.microsoft.com/dotnet/api/system.string)

The text.

### Quit\(bool\)

Quits TD without saving the dwg.
If ForceKillProcess is true, it will just kill the acad.exe process. This may leave lock files
in the dwg directory and/or have other unintended consequences.

```csharp
public void Quit(bool ForceKillProcess = false)
```

#### Parameters

`ForceKillProcess` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ResetGraphics\(\)

Calls the TD Reset Graphics command.

```csharp
public void ResetGraphics()
```

### RestoreIsoView\(IsoViews\)

Restores the view to one of the standard isometric views defined by AutoCAD.

```csharp
public void RestoreIsoView(IsoViews view)
```

#### Parameters

`view` [IsoViews](OpenTD.IsoViews.md)

The view.

### RestoreOrthoView\(OrthoViews\)

Restores the view to one of the standard orthographic views defined by AutoCAD.

```csharp
public void RestoreOrthoView(OrthoViews view)
```

#### Parameters

`view` [OrthoViews](OpenTD.OrthoViews.md)

The view.

### RestoreView\(string\)

Restores the view to an AutoCAD named view.

```csharp
public void RestoreView(string viewName)
```

#### Parameters

`viewName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the view.

### SaveAs\(string\)

Saves the dwg. Automatically overwrites existing file at pathname.

```csharp
public void SaveAs(string pathname)
```

#### Parameters

`pathname` [string](https://learn.microsoft.com/dotnet/api/system.string)

The pathname.

### SendCommand\(string, bool, int\)

Sends an AutoCAD command.

```csharp
public void SendCommand(string command, bool echo = true, int delay = 1000)
```

#### Parameters

`command` [string](https://learn.microsoft.com/dotnet/api/system.string)

The command. (Use spaces for carriage returns.)

`echo` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> echo the command to the commandline.

`delay` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Delay in ms to wait after sending command. (AutoCAD commands are executed asynchronously.)

### SendLegacyComCommand\(string, int\)

Emulates the TD COM parser -- an ancestor of OpenTD -- without using COM.

```csharp
public string SendLegacyComCommand(string command, int delay = 0)
```

#### Parameters

`command` [string](https://learn.microsoft.com/dotnet/api/system.string)

`delay` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Delay in ms to wait after sending command. (Some legacy COM commands are executed asynchronously.)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

Before OpenTD, TD offered a simple API via COM. The TD COM server operated by parsing a command string.
The SendLegacyComCommand method emulates the TD COM parser, without having to connect to TD via COM.

Most TD COM functionality can be accomplished using OpenTD methods. The SendLegacyComCommand
method is included for completeness, and to ease the process of migrating an existing TD COM application to OpenTD.
SendLegacyComCommand is not recommended to be used by new OpenTD applications.

Since the underlying RadCAD functions used by the COM server report success/failure via the AutoCAD console
and not via a return value, SendLegacyComCommand may appear to succeed when it did not. It will only throw exceptions
if it doesn't recognize a command or if the command crashes AutoCAD, and not if the command fails in some non-catastrophic
way.

SendLegacyComCommand usually returns an empty string. The only exception to this is the "get" command,
which attempts to return a string representing the value of a symbol.

The following commands are supported:

acadcommand "command" ["optional parameter" "optional parameter" ...]
Executes an AutoCAD console command. The command and any parameters are individually enclosed in double quotes.
New applications should use ThermalDesktop.SendCommand instead.
Examples:
   SendLegacyComCommand("acadcommand \"zoom\" \"extents\"")
   SendLegacyComCommand("acadcommand \"line\" \"1,1\" \"2,2\" \"\"")

case [optional parameters]
Calculates radiation and Cond/Cap data for the current case set.
Examples:
   SendLegacyComCommand("case") // Calculates all radiation and cond/cap data.
   SendLegacyComCommand("case rad0 rad3 cc") // Calculates 1st and 4th radation tasks and cond/cap data.

caseset parameters
Provides access to the Case Set Manager. New applications should use OpenTD CaseSetManager and/or CaseSet instead.

copyradkfiles fromFilename toFilename
Copies radk files.

createmapset
Undocumented interactive command.

disableuserbreaks
Disables the ability to press ESC to end tasks.

displaycurrentdataset
Displays the current post-processing dataset. New applications should use OpenTD.PostProcessing instead.

dumpppmap outputFilename
Undocumented post-processing command. New applications should use OpenTD.Results instead.

exitautocad
Attempts to exit Thermal Desktop without saving the dwg. New applications should use ThermalDesktop.Quit instead.

exportnodeinfo
Calls the RcExportNodeInfo command. New applications should use ThermalDesktop.ExportNodeInfo instead.

get symbolName
Returns a string representing the evaluated value of a symbol. New applications should use ThermalDesktop.GetSymbol instead.

importcomet filename
Undocumented.

mapnastran inputFilename outputFilename [optional tolerance]
Maps the current post-processing data to the Nastran mesh defined in inputFilename,
writing the results in Nastran format in outputFilename.

object
This command is used by Dynamic Sinda to display the value of OBJECT in the TD Dynamic Sinda status window.

opticalias alias opticalProp
Changes what optical property an alias refers to. The names cannot include spaces. New applications should
use ThermalDesktop.OpticalPropAliasManager instead.

orbit parameters
Provides access to the Heating Rate Case Manager. New applications should use OpenTD Orbit instead.

output message
Writes message to the TD Dynamic Sinda status window.

postprocess filename [optional delay in ms]
Creates or updates a TEXT-type dataset from a file. New applications should use PostProcessing.DatasetManager instead.

ppnexttime
Steps forward to the next record in the current dataset. New applications should use PostProcessing.DatasetManager instead.

ppsavefile savOrCsrPathname
Creates or updates a SF-type dataset from a save file or CSR directory. New applications should use PostProcessing.DatasetManager instead.

ppsettime index
Sets the record for the current post-processing dataset. Uses 0-indexed record array index (0, 1, 2, etc) not record number.
New applications should use PostProcessing.DatasetManager instead.

sendf4
Sends the F4 keycode. Useful for capturing the screen using hypersnap/cam.

set symbolName expressionIncludingSpaces
Updates an existing symbol's expression. New applications should use OpenTD Symbol instead.

setmapconstanttol toleranceInDwgUnits
Sets the constant tolerance to be used by the mapnastran command, in dwg units.

setmapcurrentorall parameter
If parameter is ALL, the mapnastran command will perform the mapping for all records in the dataset.
If parameter is any other value, it will perform the mapping at the current record.

setmapset mapsetName
Instructs the mapnastran command to only use the specified object mapset.

setmapvariabletol TolerancesSeperatedBySpaces
Sets the progressive tolerance to be used by the mapnastran command, in dwg units.

startcase [optional name]
Runs the current case set, or the one specified by the optional name. New applications should use OpenTD CaseSetManager and/or CaseSet instead.

tdmapallmappers appendToFilename
Executes all mappers. Inserts the appendToFilename string at the end of each output file, before any extension.

thermoalias alias thermoProp
Changes what thermophysical property an alias refers to. The names cannot include spaces. New applications should
use ThermalDesktop.ThermoPropAliasManager instead.

update
Updates all entity values based on symbol expressions.

### SetAutocadVariable\(string, int\)

Sets an autocad variable that takes an integer value.

```csharp
public void SetAutocadVariable(string name, int value)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name.

`value` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The value.

### SetAutocadVariable\(string, double\)

Sets an autocad variable that takes a double value.

```csharp
public void SetAutocadVariable(string name, double value)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name.

`value` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value.

### SetAutocadVariable\(string, string\)

Sets an autocad variable that takes a string value.

```csharp
public void SetAutocadVariable(string name, string value)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name.

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)

The value.

### SetCurrentLayer\(string\)

```csharp
public void SetCurrentLayer(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

### SetDwgUnits\(UnitsData, bool\)

Sets the dwg units. Deprecated. Use ThermalDesktop.UserPreferences.Units instead.

```csharp
public void SetDwgUnits(UnitsData x, bool DoNotScaleModel = false)
```

#### Parameters

`x` [UnitsData](OpenTD.UnitsData.md)

The units.

`DoNotScaleModel` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> do not scale model to new length units.

### SetInstanceDataListString\(List<string\>\)

Use the Set/GetInstanceData methods to store general data with this OpenTD server.

```csharp
public void SetInstanceDataListString(List<string> x)
```

#### Parameters

`x` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### SetNodeCorrespondenceMap\(Dictionary<string, List<string\>\>\)

Sets the TRASYS-style node correspondence dictionary. Keys are SINDA node names.
Values are lists of RadCAD nodes that correspond to each SINDA node.
Use SetNodeCorrespondenceState to turn node correspondence on or off.

```csharp
public void SetNodeCorrespondenceMap(Dictionary<string, List<string>> map)
```

#### Parameters

`map` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>\>

#### See Also

[ThermalDesktop](OpenTD.ThermalDesktop.md).[SetNodeCorrespondenceState](OpenTD.ThermalDesktop.md\#OpenTD\_ThermalDesktop\_SetNodeCorrespondenceState\_System\_Boolean\_)\([bool](https://learn.microsoft.com/dotnet/api/system.boolean)\), 
[ThermalDesktop](OpenTD.ThermalDesktop.md).[GetNodeCorrespondenceMap](OpenTD.ThermalDesktop.md\#OpenTD\_ThermalDesktop\_GetNodeCorrespondenceMap)\(\)

### SetNodeCorrespondenceState\(bool\)

Turns node correspondence on or off.

```csharp
public void SetNodeCorrespondenceState(bool activated)
```

#### Parameters

`activated` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> activates node correspondence.

### SetSelection\(IEnumerable<DbObject\>\)

Highlight objects in the TD graphics window.

```csharp
public void SetSelection(IEnumerable<DbObject> items)
```

#### Parameters

`items` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[DbObject](OpenTD.DbObject.md)\>

### SetSelection\(IEnumerable<string\>\)

Highlight objects by handle in the TD graphics window.

```csharp
public void SetSelection(IEnumerable<string> itemHandles)
```

#### Parameters

`itemHandles` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### SetUnits\(UnitsData\)

Sets OpenTD WorkingUnits and the TD dwg units.

```csharp
public void SetUnits(UnitsData x)
```

#### Parameters

`x` [UnitsData](OpenTD.UnitsData.md)

The units.

### SetView\(IsoViews\)

```csharp
public void SetView(IsoViews view)
```

#### Parameters

`view` [IsoViews](OpenTD.IsoViews.md)

### SetView\(OrthoViews\)

```csharp
public void SetView(OrthoViews view)
```

#### Parameters

`view` [OrthoViews](OpenTD.OrthoViews.md)

### SetView\(string\)

```csharp
public void SetView(string namedView)
```

#### Parameters

`namedView` [string](https://learn.microsoft.com/dotnet/api/system.string)

### SetVisualStyle\(VisualStyles\)

Sets the AutoCAD visual style.

```csharp
public void SetVisualStyle(VisualStyles style)
```

#### Parameters

`style` [VisualStyles](OpenTD.VisualStyles.md)

The style.

### ShowModelBrowser\(\)

```csharp
public void ShowModelBrowser()
```

### SnapMeasures\(IEnumerable<string\>\)

```csharp
public void SnapMeasures(IEnumerable<string> handles)
```

#### Parameters

`handles` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### StopService\(\)

Stops the OpenTD server running in TD.

```csharp
public bool StopService()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UpdateFromTD\(\)

```csharp
public void UpdateFromTD()
```

### UpdateGraphics\(\)

Calls the TD Updates Graphics command.

```csharp
public void UpdateGraphics()
```

### UpdateMeasures\(\)

```csharp
public void UpdateMeasures()
```

### ZoomExtents\(\)

Zooms the view to the extents of the model.

```csharp
public void ZoomExtents()
```

### \_Scratchpad\(\)

Do not use.

```csharp
public void _Scratchpad()
```


