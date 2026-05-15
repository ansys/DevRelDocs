# Class Model

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Use to get all OpenTD-supported entities from a TD instance.

```csharp
[MessagePackObject(true)]
public class Model
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Model](OpenTD.Model.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### Model\(\)

```csharp
public Model()
```

### Model\(ThermalDesktop\)

```csharp
public Model(ThermalDesktop tdInstance)
```

#### Parameters

`tdInstance` [ThermalDesktop](OpenTD.ThermalDesktop.md)

## Properties

### AcEllipses

```csharp
public List<AcEllipse> AcEllipses { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[AcEllipse](OpenTD.AcEllipse.md)\>

### Arcs

```csharp
public List<Arc> Arcs { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Arc](OpenTD.Arc.md)\>

### Assemblies

```csharp
public List<Assembly> Assemblies { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Assembly](OpenTD.RadCAD.Assembly.md)\>

### Cappmps

```csharp
public List<Cappmp> Cappmps { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Cappmp](OpenTD.FloCAD.Cappmp.md)\>

### CaseSets

```csharp
public List<CaseSet> CaseSets { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[CaseSet](OpenTD.CaseSet.md)\>

### Circles

```csharp
public List<Circle> Circles { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Circle](OpenTD.Circle.md)\>

### Compartments

```csharp
public List<Compartment> Compartments { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Compartment](OpenTD.FloCAD.Compartment.md)\>

### Conductors

```csharp
public List<Conductor> Conductors { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Conductor](OpenTD.Conductor.md)\>

### Cones

```csharp
public List<Cone> Cones { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Cone](OpenTD.RadCAD.Cone.md)\>

### Contactors

```csharp
public List<Contactor> Contactors { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Contactor](OpenTD.Contactor.md)\>

### Cylinders

```csharp
public List<Cylinder> Cylinders { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Cylinder](OpenTD.RadCAD.Cylinder.md)\>

### Datasets

```csharp
public List<Dataset> Datasets { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Dataset](OpenTD.PostProcessing.Dataset.md)\>

### Disks

```csharp
public List<Disk> Disks { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Disk](OpenTD.RadCAD.Disk.md)\>

### Domains

```csharp
public Domains Domains { get; set; }
```

#### Property Value

 [Domains](OpenTD.Domains.md)

### DwgUnits

```csharp
public UnitsData DwgUnits { get; set; }
```

#### Property Value

 [UnitsData](OpenTD.UnitsData.md)

### Ellipses

```csharp
public List<Ellipse> Ellipses { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Ellipse](OpenTD.RadCAD.Ellipse.md)\>

### Ellipsoids

```csharp
public List<Ellipsoid> Ellipsoids { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Ellipsoid](OpenTD.RadCAD.Ellipsoid.md)\>

### EllipticCones

```csharp
public List<EllipticCone> EllipticCones { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[EllipticCone](OpenTD.RadCAD.EllipticCone.md)\>

### EllipticCylinders

```csharp
public List<EllipticCylinder> EllipticCylinders { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[EllipticCylinder](OpenTD.RadCAD.EllipticCylinder.md)\>

### FEMeshImporters

```csharp
public List<FEMeshImporter> FEMeshImporters { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[FEMeshImporter](OpenTD.RadCAD.FEMeshImporter.md)\>

### FTies

```csharp
public List<FTie> FTies { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[FTie](OpenTD.FloCAD.FTie.md)\>

### FkLocators

```csharp
public List<FkLocator> FkLocators { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[FkLocator](OpenTD.FloCAD.FkLocator.md)\>

### FluidSubmodels

```csharp
public List<FluidSubmodel> FluidSubmodels { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[FluidSubmodel](OpenTD.FloCAD.FluidSubmodel.md)\>

### HeatLoads

```csharp
public List<HeatLoad> HeatLoads { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[HeatLoad](OpenTD.HeatLoad.md)\>

### Heaters

```csharp
public List<Heater> Heaters { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Heater](OpenTD.Heater.md)\>

### Helices

```csharp
public List<Helix> Helices { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Helix](OpenTD.Helix.md)\>

### IFaces

```csharp
public List<IFace> IFaces { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[IFace](OpenTD.FloCAD.IFace.md)\>

### Layers

```csharp
public List<Layer> Layers { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Layer](OpenTD.Layer.md)\>

### LinearBricks

```csharp
public List<LinearBrick> LinearBricks { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[LinearBrick](OpenTD.RadCAD.FEM.LinearBrick.md)\>

### LinearPyramids

```csharp
public List<LinearPyramid> LinearPyramids { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[LinearPyramid](OpenTD.RadCAD.FEM.LinearPyramid.md)\>

### LinearQuads

```csharp
public List<LinearQuad> LinearQuads { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[LinearQuad](OpenTD.RadCAD.FEM.LinearQuad.md)\>

### LinearTets

```csharp
public List<LinearTet> LinearTets { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[LinearTet](OpenTD.RadCAD.FEM.LinearTet.md)\>

### LinearTris

```csharp
public List<LinearTri> LinearTris { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[LinearTri](OpenTD.RadCAD.FEM.LinearTri.md)\>

### LinearWedges

```csharp
public List<LinearWedge> LinearWedges { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[LinearWedge](OpenTD.RadCAD.FEM.LinearWedge.md)\>

### Lines

```csharp
public List<Line> Lines { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Line](OpenTD.Line.md)\>

### LogicObjects

```csharp
public LogicObjects LogicObjects { get; set; }
```

#### Property Value

 [LogicObjects](OpenTD.LogicObjects.md)

### Lumps

```csharp
public List<Lump> Lumps { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Lump](OpenTD.FloCAD.Lump.md)\>

### MaterialStacks

```csharp
public List<MaterialStack> MaterialStacks { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[MaterialStack](OpenTD.MaterialStack.md)\>

### MeshFDs

```csharp
public List<MeshFD> MeshFDs { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[MeshFD](OpenTD.RadCAD.MeshFD.md)\>

### Nodes

```csharp
public List<Node> Nodes { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Node](OpenTD.Node.md)\>

### Notes

```csharp
public Notes Notes { get; set; }
```

#### Property Value

 [Notes](OpenTD.Notes.md)

### OffsetParaboloids

```csharp
public List<OffsetParaboloid> OffsetParaboloids { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[OffsetParaboloid](OpenTD.RadCAD.OffsetParaboloid.md)\>

### Ogives

```csharp
public List<Ogive> Ogives { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Ogive](OpenTD.RadCAD.Ogive.md)\>

### OpticalPropss

```csharp
public List<OpticalProps> OpticalPropss { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[OpticalProps](OpenTD.RadCAD.OpticalProps.md)\>

### Orbits

```csharp
public List<Orbit> Orbits { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Orbit](OpenTD.RadCAD.Orbit.md)\>

### ParabolicTroughs

```csharp
public List<ParabolicTrough> ParabolicTroughs { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ParabolicTrough](OpenTD.RadCAD.ParabolicTrough.md)\>

### Paraboloids

```csharp
public List<Paraboloid> Paraboloids { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Paraboloid](OpenTD.RadCAD.Paraboloid.md)\>

### Paths

```csharp
public List<Path> Paths { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Path](OpenTD.FloCAD.Path.md)\>

### PipeStdSignatures

```csharp
public List<PipeStdSignatureData> PipeStdSignatures { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[PipeStdSignatureData](OpenTD.FloCAD.PipeStdSignatureData.md)\>

### Pipes

```csharp
public List<Pipe> Pipes { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Pipe](OpenTD.FloCAD.Pipe.md)\>

### Polyline3ds

```csharp
public List<Polyline3d> Polyline3ds { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Polyline3d](OpenTD.Polyline3d.md)\>

### Polylines

```csharp
public List<Polyline> Polylines { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Polyline](OpenTD.Polyline.md)\>

### Ports

```csharp
public List<Port> Ports { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Port](OpenTD.FloCAD.Port.md)\>

### PressureLoads

```csharp
public List<PressureLoad> PressureLoads { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[PressureLoad](OpenTD.PressureLoad.md)\>

### QuadraticBricks

```csharp
public List<QuadraticBrick> QuadraticBricks { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[QuadraticBrick](OpenTD.RadCAD.FEM.QuadraticBrick.md)\>

### QuadraticPyramids

```csharp
public List<QuadraticPyramid> QuadraticPyramids { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[QuadraticPyramid](OpenTD.RadCAD.FEM.QuadraticPyramid.md)\>

### QuadraticQuads

```csharp
public List<QuadraticQuad> QuadraticQuads { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[QuadraticQuad](OpenTD.RadCAD.FEM.QuadraticQuad.md)\>

### QuadraticTets

```csharp
public List<QuadraticTet> QuadraticTets { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[QuadraticTet](OpenTD.RadCAD.FEM.QuadraticTet.md)\>

### QuadraticTris

```csharp
public List<QuadraticTri> QuadraticTris { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[QuadraticTri](OpenTD.RadCAD.FEM.QuadraticTri.md)\>

### QuadraticWedges

```csharp
public List<QuadraticWedge> QuadraticWedges { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[QuadraticWedge](OpenTD.RadCAD.FEM.QuadraticWedge.md)\>

### RadiationAnalysisGroups

```csharp
public List<Tuple<string, string>> RadiationAnalysisGroups { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Tuple](https://learn.microsoft.com/dotnet/api/system.tuple\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>\>

### Rectangles

```csharp
public List<Rectangle> Rectangles { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Rectangle](OpenTD.RadCAD.Rectangle.md)\>

### ScarfedCones

```csharp
public List<ScarfedCone> ScarfedCones { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ScarfedCone](OpenTD.RadCAD.ScarfedCone.md)\>

### SolidBricks

```csharp
public List<SolidBrick> SolidBricks { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[SolidBrick](OpenTD.RadCAD.FdSolid.SolidBrick.md)\>

### SolidCones

```csharp
public List<SolidCone> SolidCones { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[SolidCone](OpenTD.RadCAD.FdSolid.SolidCone.md)\>

### SolidCylinders

```csharp
public List<SolidCylinder> SolidCylinders { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[SolidCylinder](OpenTD.RadCAD.FdSolid.SolidCylinder.md)\>

### SolidEllipsoids

```csharp
public List<SolidEllipsoid> SolidEllipsoids { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[SolidEllipsoid](OpenTD.RadCAD.FdSolid.SolidEllipsoid.md)\>

### SolidSpheres

```csharp
public List<SolidSphere> SolidSpheres { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[SolidSphere](OpenTD.RadCAD.FdSolid.SolidSphere.md)\>

### Spheres

```csharp
public List<Sphere> Spheres { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Sphere](OpenTD.RadCAD.Sphere.md)\>

### Splines

```csharp
public List<Spline> Splines { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Spline](OpenTD.Spline.md)\>

### Submodels

```csharp
public List<Submodel> Submodels { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Submodel](OpenTD.Submodel.md)\>

### Symbols

```csharp
public List<Symbol> Symbols { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Symbol](OpenTD.Symbol.md)\>

### TD

```csharp
[IgnoreMember]
public ThermalDesktop TD { get; set; }
```

#### Property Value

 [ThermalDesktop](OpenTD.ThermalDesktop.md)

### Tecs

```csharp
public List<Tec> Tecs { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Tec](OpenTD.Tec.md)\>

### Tees

```csharp
public List<Tee> Tees { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Tee](OpenTD.FloCAD.Tee.md)\>

### Texts

```csharp
public List<Text> Texts { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Text](OpenTD.Text.md)\>

### ThermoPropAliases

```csharp
public List<Tuple<string, string>> ThermoPropAliases { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Tuple](https://learn.microsoft.com/dotnet/api/system.tuple\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>\>

### ThermoPropss

```csharp
public List<ThermoProps> ThermoPropss { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ThermoProps](OpenTD.ThermoProps.md)\>

### Ties

```csharp
public List<Tie> Ties { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Tie](OpenTD.FloCAD.Tie.md)\>

### Toruses

```csharp
public List<Torus> Toruses { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Torus](OpenTD.RadCAD.Torus.md)\>

### Trackers

```csharp
public List<Tracker> Trackers { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Tracker](OpenTD.RadCAD.Tracker.md)\>

## Methods

### UpdateFromTD\(ThermalDesktop, bool\)

Updates the client-side instance with the latest data from the TD entity.

```csharp
public void UpdateFromTD(ThermalDesktop tdInstance, bool searchXREFS = false)
```

#### Parameters

`tdInstance` [ThermalDesktop](OpenTD.ThermalDesktop.md)

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UpdateFromTD\(bool\)

Updates the client-side instance with the latest data from the TD entity.

```csharp
public void UpdateFromTD(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


