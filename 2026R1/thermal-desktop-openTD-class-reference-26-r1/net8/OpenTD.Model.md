# <a id="OpenTD_Model"></a> Class Model

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Use to get all OpenTD-supported entities from a TD instance.

```csharp
public class Model
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Model](OpenTD.Model.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_Model__ctor"></a> Model\(\)

```csharp
public Model()
```

### <a id="OpenTD_Model__ctor_OpenTD_ThermalDesktop_"></a> Model\(ThermalDesktop\)

```csharp
public Model(ThermalDesktop tdInstance)
```

#### Parameters

`tdInstance` [ThermalDesktop](OpenTD.ThermalDesktop.md)

## Properties

### <a id="OpenTD_Model_AcEllipses"></a> AcEllipses

```csharp
public List<AcEllipse> AcEllipses { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[AcEllipse](OpenTD.AcEllipse.md)\>

### <a id="OpenTD_Model_Arcs"></a> Arcs

```csharp
public List<Arc> Arcs { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Arc](OpenTD.Arc.md)\>

### <a id="OpenTD_Model_Assemblies"></a> Assemblies

```csharp
public List<Assembly> Assemblies { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Assembly](OpenTD.RadCAD.Assembly.md)\>

### <a id="OpenTD_Model_Cappmps"></a> Cappmps

```csharp
public List<Cappmp> Cappmps { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Cappmp](OpenTD.FloCAD.Cappmp.md)\>

### <a id="OpenTD_Model_CaseSets"></a> CaseSets

```csharp
public List<CaseSet> CaseSets { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[CaseSet](OpenTD.CaseSet.md)\>

### <a id="OpenTD_Model_Circles"></a> Circles

```csharp
public List<Circle> Circles { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Circle](OpenTD.Circle.md)\>

### <a id="OpenTD_Model_Compartments"></a> Compartments

```csharp
public List<Compartment> Compartments { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Compartment](OpenTD.FloCAD.Compartment.md)\>

### <a id="OpenTD_Model_Conductors"></a> Conductors

```csharp
public List<Conductor> Conductors { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Conductor](OpenTD.Conductor.md)\>

### <a id="OpenTD_Model_Cones"></a> Cones

```csharp
public List<Cone> Cones { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Cone](OpenTD.RadCAD.Cone.md)\>

### <a id="OpenTD_Model_Contactors"></a> Contactors

```csharp
public List<Contactor> Contactors { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Contactor](OpenTD.Contactor.md)\>

### <a id="OpenTD_Model_Cylinders"></a> Cylinders

```csharp
public List<Cylinder> Cylinders { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Cylinder](OpenTD.RadCAD.Cylinder.md)\>

### <a id="OpenTD_Model_Datasets"></a> Datasets

```csharp
public List<Dataset> Datasets { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Dataset](OpenTD.PostProcessing.Dataset.md)\>

### <a id="OpenTD_Model_Disks"></a> Disks

```csharp
public List<Disk> Disks { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Disk](OpenTD.RadCAD.Disk.md)\>

### <a id="OpenTD_Model_Domains"></a> Domains

```csharp
public Domains Domains { get; set; }
```

#### Property Value

 [Domains](OpenTD.Domains.md)

### <a id="OpenTD_Model_DwgUnits"></a> DwgUnits

```csharp
public UnitsData DwgUnits { get; set; }
```

#### Property Value

 [UnitsData](OpenTD.UnitsData.md)

### <a id="OpenTD_Model_Ellipses"></a> Ellipses

```csharp
public List<Ellipse> Ellipses { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Ellipse](OpenTD.RadCAD.Ellipse.md)\>

### <a id="OpenTD_Model_Ellipsoids"></a> Ellipsoids

```csharp
public List<Ellipsoid> Ellipsoids { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Ellipsoid](OpenTD.RadCAD.Ellipsoid.md)\>

### <a id="OpenTD_Model_EllipticCones"></a> EllipticCones

```csharp
public List<EllipticCone> EllipticCones { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[EllipticCone](OpenTD.RadCAD.EllipticCone.md)\>

### <a id="OpenTD_Model_EllipticCylinders"></a> EllipticCylinders

```csharp
public List<EllipticCylinder> EllipticCylinders { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[EllipticCylinder](OpenTD.RadCAD.EllipticCylinder.md)\>

### <a id="OpenTD_Model_FEMeshImporters"></a> FEMeshImporters

```csharp
public List<FEMeshImporter> FEMeshImporters { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[FEMeshImporter](OpenTD.RadCAD.FEMeshImporter.md)\>

### <a id="OpenTD_Model_FTies"></a> FTies

```csharp
public List<FTie> FTies { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[FTie](OpenTD.FloCAD.FTie.md)\>

### <a id="OpenTD_Model_FkLocators"></a> FkLocators

```csharp
public List<FkLocator> FkLocators { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[FkLocator](OpenTD.FloCAD.FkLocator.md)\>

### <a id="OpenTD_Model_FluidSubmodels"></a> FluidSubmodels

```csharp
public List<FluidSubmodel> FluidSubmodels { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[FluidSubmodel](OpenTD.FloCAD.FluidSubmodel.md)\>

### <a id="OpenTD_Model_HeatLoads"></a> HeatLoads

```csharp
public List<HeatLoad> HeatLoads { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[HeatLoad](OpenTD.HeatLoad.md)\>

### <a id="OpenTD_Model_Heaters"></a> Heaters

```csharp
public List<Heater> Heaters { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Heater](OpenTD.Heater.md)\>

### <a id="OpenTD_Model_Helices"></a> Helices

```csharp
public List<Helix> Helices { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Helix](OpenTD.Helix.md)\>

### <a id="OpenTD_Model_IFaces"></a> IFaces

```csharp
public List<IFace> IFaces { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[IFace](OpenTD.FloCAD.IFace.md)\>

### <a id="OpenTD_Model_Layers"></a> Layers

```csharp
public List<Layer> Layers { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Layer](OpenTD.Layer.md)\>

### <a id="OpenTD_Model_LinearBricks"></a> LinearBricks

```csharp
public List<LinearBrick> LinearBricks { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[LinearBrick](OpenTD.RadCAD.FEM.LinearBrick.md)\>

### <a id="OpenTD_Model_LinearPyramids"></a> LinearPyramids

```csharp
public List<LinearPyramid> LinearPyramids { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[LinearPyramid](OpenTD.RadCAD.FEM.LinearPyramid.md)\>

### <a id="OpenTD_Model_LinearQuads"></a> LinearQuads

```csharp
public List<LinearQuad> LinearQuads { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[LinearQuad](OpenTD.RadCAD.FEM.LinearQuad.md)\>

### <a id="OpenTD_Model_LinearTets"></a> LinearTets

```csharp
public List<LinearTet> LinearTets { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[LinearTet](OpenTD.RadCAD.FEM.LinearTet.md)\>

### <a id="OpenTD_Model_LinearTris"></a> LinearTris

```csharp
public List<LinearTri> LinearTris { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[LinearTri](OpenTD.RadCAD.FEM.LinearTri.md)\>

### <a id="OpenTD_Model_LinearWedges"></a> LinearWedges

```csharp
public List<LinearWedge> LinearWedges { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[LinearWedge](OpenTD.RadCAD.FEM.LinearWedge.md)\>

### <a id="OpenTD_Model_Lines"></a> Lines

```csharp
public List<Line> Lines { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Line](OpenTD.Line.md)\>

### <a id="OpenTD_Model_LogicObjects"></a> LogicObjects

```csharp
public LogicObjects LogicObjects { get; set; }
```

#### Property Value

 [LogicObjects](OpenTD.LogicObjects.md)

### <a id="OpenTD_Model_Lumps"></a> Lumps

```csharp
public List<Lump> Lumps { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Lump](OpenTD.FloCAD.Lump.md)\>

### <a id="OpenTD_Model_MaterialStacks"></a> MaterialStacks

```csharp
public List<MaterialStack> MaterialStacks { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[MaterialStack](OpenTD.MaterialStack.md)\>

### <a id="OpenTD_Model_MeshFDs"></a> MeshFDs

```csharp
public List<MeshFD> MeshFDs { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[MeshFD](OpenTD.RadCAD.MeshFD.md)\>

### <a id="OpenTD_Model_Nodes"></a> Nodes

```csharp
public List<Node> Nodes { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Node](OpenTD.Node.md)\>

### <a id="OpenTD_Model_Notes"></a> Notes

```csharp
public Notes Notes { get; set; }
```

#### Property Value

 [Notes](OpenTD.Notes.md)

### <a id="OpenTD_Model_OffsetParaboloids"></a> OffsetParaboloids

```csharp
public List<OffsetParaboloid> OffsetParaboloids { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[OffsetParaboloid](OpenTD.RadCAD.OffsetParaboloid.md)\>

### <a id="OpenTD_Model_Ogives"></a> Ogives

```csharp
public List<Ogive> Ogives { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Ogive](OpenTD.RadCAD.Ogive.md)\>

### <a id="OpenTD_Model_OpticalPropss"></a> OpticalPropss

```csharp
public List<OpticalProps> OpticalPropss { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[OpticalProps](OpenTD.RadCAD.OpticalProps.md)\>

### <a id="OpenTD_Model_Orbits"></a> Orbits

```csharp
public List<Orbit> Orbits { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Orbit](OpenTD.RadCAD.Orbit.md)\>

### <a id="OpenTD_Model_ParabolicTroughs"></a> ParabolicTroughs

```csharp
public List<ParabolicTrough> ParabolicTroughs { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ParabolicTrough](OpenTD.RadCAD.ParabolicTrough.md)\>

### <a id="OpenTD_Model_Paraboloids"></a> Paraboloids

```csharp
public List<Paraboloid> Paraboloids { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Paraboloid](OpenTD.RadCAD.Paraboloid.md)\>

### <a id="OpenTD_Model_Paths"></a> Paths

```csharp
public List<Path> Paths { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Path](OpenTD.FloCAD.Path.md)\>

### <a id="OpenTD_Model_PipeStdSignatures"></a> PipeStdSignatures

```csharp
public List<PipeStdSignatureData> PipeStdSignatures { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[PipeStdSignatureData](OpenTD.FloCAD.PipeStdSignatureData.md)\>

### <a id="OpenTD_Model_Pipes"></a> Pipes

```csharp
public List<Pipe> Pipes { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Pipe](OpenTD.FloCAD.Pipe.md)\>

### <a id="OpenTD_Model_Polyline3ds"></a> Polyline3ds

```csharp
public List<Polyline3d> Polyline3ds { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Polyline3d](OpenTD.Polyline3d.md)\>

### <a id="OpenTD_Model_Polylines"></a> Polylines

```csharp
public List<Polyline> Polylines { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Polyline](OpenTD.Polyline.md)\>

### <a id="OpenTD_Model_Ports"></a> Ports

```csharp
public List<Port> Ports { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Port](OpenTD.FloCAD.Port.md)\>

### <a id="OpenTD_Model_PressureLoads"></a> PressureLoads

```csharp
public List<PressureLoad> PressureLoads { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[PressureLoad](OpenTD.PressureLoad.md)\>

### <a id="OpenTD_Model_QuadraticBricks"></a> QuadraticBricks

```csharp
public List<QuadraticBrick> QuadraticBricks { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[QuadraticBrick](OpenTD.RadCAD.FEM.QuadraticBrick.md)\>

### <a id="OpenTD_Model_QuadraticPyramids"></a> QuadraticPyramids

```csharp
public List<QuadraticPyramid> QuadraticPyramids { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[QuadraticPyramid](OpenTD.RadCAD.FEM.QuadraticPyramid.md)\>

### <a id="OpenTD_Model_QuadraticQuads"></a> QuadraticQuads

```csharp
public List<QuadraticQuad> QuadraticQuads { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[QuadraticQuad](OpenTD.RadCAD.FEM.QuadraticQuad.md)\>

### <a id="OpenTD_Model_QuadraticTets"></a> QuadraticTets

```csharp
public List<QuadraticTet> QuadraticTets { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[QuadraticTet](OpenTD.RadCAD.FEM.QuadraticTet.md)\>

### <a id="OpenTD_Model_QuadraticTris"></a> QuadraticTris

```csharp
public List<QuadraticTri> QuadraticTris { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[QuadraticTri](OpenTD.RadCAD.FEM.QuadraticTri.md)\>

### <a id="OpenTD_Model_QuadraticWedges"></a> QuadraticWedges

```csharp
public List<QuadraticWedge> QuadraticWedges { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[QuadraticWedge](OpenTD.RadCAD.FEM.QuadraticWedge.md)\>

### <a id="OpenTD_Model_RadiationAnalysisGroups"></a> RadiationAnalysisGroups

```csharp
public List<Tuple<string, string>> RadiationAnalysisGroups { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Tuple](https://learn.microsoft.com/dotnet/api/system.tuple\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>\>

### <a id="OpenTD_Model_Rectangles"></a> Rectangles

```csharp
public List<Rectangle> Rectangles { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Rectangle](OpenTD.RadCAD.Rectangle.md)\>

### <a id="OpenTD_Model_ScarfedCones"></a> ScarfedCones

```csharp
public List<ScarfedCone> ScarfedCones { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ScarfedCone](OpenTD.RadCAD.ScarfedCone.md)\>

### <a id="OpenTD_Model_SolidBricks"></a> SolidBricks

```csharp
public List<SolidBrick> SolidBricks { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[SolidBrick](OpenTD.RadCAD.FdSolid.SolidBrick.md)\>

### <a id="OpenTD_Model_SolidCones"></a> SolidCones

```csharp
public List<SolidCone> SolidCones { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[SolidCone](OpenTD.RadCAD.FdSolid.SolidCone.md)\>

### <a id="OpenTD_Model_SolidCylinders"></a> SolidCylinders

```csharp
public List<SolidCylinder> SolidCylinders { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[SolidCylinder](OpenTD.RadCAD.FdSolid.SolidCylinder.md)\>

### <a id="OpenTD_Model_SolidEllipsoids"></a> SolidEllipsoids

```csharp
public List<SolidEllipsoid> SolidEllipsoids { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[SolidEllipsoid](OpenTD.RadCAD.FdSolid.SolidEllipsoid.md)\>

### <a id="OpenTD_Model_SolidSpheres"></a> SolidSpheres

```csharp
public List<SolidSphere> SolidSpheres { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[SolidSphere](OpenTD.RadCAD.FdSolid.SolidSphere.md)\>

### <a id="OpenTD_Model_Spheres"></a> Spheres

```csharp
public List<Sphere> Spheres { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Sphere](OpenTD.RadCAD.Sphere.md)\>

### <a id="OpenTD_Model_Splines"></a> Splines

```csharp
public List<Spline> Splines { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Spline](OpenTD.Spline.md)\>

### <a id="OpenTD_Model_Submodels"></a> Submodels

```csharp
public List<Submodel> Submodels { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Submodel](OpenTD.Submodel.md)\>

### <a id="OpenTD_Model_Symbols"></a> Symbols

```csharp
public List<Symbol> Symbols { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Symbol](OpenTD.Symbol.md)\>

### <a id="OpenTD_Model_TD"></a> TD

```csharp
public ThermalDesktop TD { get; set; }
```

#### Property Value

 [ThermalDesktop](OpenTD.ThermalDesktop.md)

### <a id="OpenTD_Model_Tecs"></a> Tecs

```csharp
public List<Tec> Tecs { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Tec](OpenTD.Tec.md)\>

### <a id="OpenTD_Model_Tees"></a> Tees

```csharp
public List<Tee> Tees { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Tee](OpenTD.FloCAD.Tee.md)\>

### <a id="OpenTD_Model_Texts"></a> Texts

```csharp
public List<Text> Texts { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Text](OpenTD.Text.md)\>

### <a id="OpenTD_Model_ThermoPropAliases"></a> ThermoPropAliases

```csharp
public List<Tuple<string, string>> ThermoPropAliases { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Tuple](https://learn.microsoft.com/dotnet/api/system.tuple\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>\>

### <a id="OpenTD_Model_ThermoPropss"></a> ThermoPropss

```csharp
public List<ThermoProps> ThermoPropss { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ThermoProps](OpenTD.ThermoProps.md)\>

### <a id="OpenTD_Model_Ties"></a> Ties

```csharp
public List<Tie> Ties { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Tie](OpenTD.FloCAD.Tie.md)\>

### <a id="OpenTD_Model_Toruses"></a> Toruses

```csharp
public List<Torus> Toruses { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Torus](OpenTD.RadCAD.Torus.md)\>

### <a id="OpenTD_Model_Trackers"></a> Trackers

```csharp
public List<Tracker> Trackers { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Tracker](OpenTD.RadCAD.Tracker.md)\>

## Methods

### <a id="OpenTD_Model_UpdateFromTD_OpenTD_ThermalDesktop_System_Boolean_"></a> UpdateFromTD\(ThermalDesktop, bool\)

Updates the client-side instance with the latest data from the TD entity.

```csharp
public void UpdateFromTD(ThermalDesktop tdInstance, bool searchXREFS = false)
```

#### Parameters

`tdInstance` [ThermalDesktop](OpenTD.ThermalDesktop.md)

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Model_UpdateFromTD_System_Boolean_"></a> UpdateFromTD\(bool\)

Updates the client-side instance with the latest data from the TD entity.

```csharp
public void UpdateFromTD(bool searchXREFS = false)
```

#### Parameters

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

