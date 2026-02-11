# <a id="OpenTD_Model"></a> Class Model

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Use to get all OpenTD-supported entities from a TD instance.

```csharp
[DataContract]
public class Model
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Model](OpenTD.Model.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

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
[DataMember]
public List<AcEllipse> AcEllipses { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[AcEllipse](OpenTD.AcEllipse.md)\>

### <a id="OpenTD_Model_Arcs"></a> Arcs

```csharp
[DataMember]
public List<Arc> Arcs { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Arc](OpenTD.Arc.md)\>

### <a id="OpenTD_Model_Assemblies"></a> Assemblies

```csharp
[DataMember]
public List<Assembly> Assemblies { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Assembly](OpenTD.RadCAD.Assembly.md)\>

### <a id="OpenTD_Model_Cappmps"></a> Cappmps

```csharp
[DataMember]
public List<Cappmp> Cappmps { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Cappmp](OpenTD.FloCAD.Cappmp.md)\>

### <a id="OpenTD_Model_CaseSets"></a> CaseSets

```csharp
[DataMember]
public List<CaseSet> CaseSets { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[CaseSet](OpenTD.CaseSet.md)\>

### <a id="OpenTD_Model_Circles"></a> Circles

```csharp
[DataMember]
public List<Circle> Circles { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Circle](OpenTD.Circle.md)\>

### <a id="OpenTD_Model_Compartments"></a> Compartments

```csharp
[DataMember]
public List<Compartment> Compartments { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Compartment](OpenTD.FloCAD.Compartment.md)\>

### <a id="OpenTD_Model_Conductors"></a> Conductors

```csharp
[DataMember]
public List<Conductor> Conductors { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Conductor](OpenTD.Conductor.md)\>

### <a id="OpenTD_Model_Cones"></a> Cones

```csharp
[DataMember]
public List<Cone> Cones { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Cone](OpenTD.RadCAD.Cone.md)\>

### <a id="OpenTD_Model_Contactors"></a> Contactors

```csharp
[DataMember]
public List<Contactor> Contactors { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Contactor](OpenTD.Contactor.md)\>

### <a id="OpenTD_Model_Cylinders"></a> Cylinders

```csharp
[DataMember]
public List<Cylinder> Cylinders { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Cylinder](OpenTD.RadCAD.Cylinder.md)\>

### <a id="OpenTD_Model_Datasets"></a> Datasets

```csharp
[DataMember]
public List<Dataset> Datasets { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Dataset](OpenTD.PostProcessing.Dataset.md)\>

### <a id="OpenTD_Model_Disks"></a> Disks

```csharp
[DataMember]
public List<Disk> Disks { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Disk](OpenTD.RadCAD.Disk.md)\>

### <a id="OpenTD_Model_Domains"></a> Domains

```csharp
[DataMember]
public Domains Domains { get; set; }
```

#### Property Value

 [Domains](OpenTD.Domains.md)

### <a id="OpenTD_Model_DwgUnits"></a> DwgUnits

```csharp
[DataMember]
public UnitsData DwgUnits { get; set; }
```

#### Property Value

 [UnitsData](OpenTD.UnitsData.md)

### <a id="OpenTD_Model_Ellipses"></a> Ellipses

```csharp
[DataMember]
public List<Ellipse> Ellipses { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Ellipse](OpenTD.RadCAD.Ellipse.md)\>

### <a id="OpenTD_Model_Ellipsoids"></a> Ellipsoids

```csharp
[DataMember]
public List<Ellipsoid> Ellipsoids { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Ellipsoid](OpenTD.RadCAD.Ellipsoid.md)\>

### <a id="OpenTD_Model_EllipticCones"></a> EllipticCones

```csharp
[DataMember]
public List<EllipticCone> EllipticCones { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[EllipticCone](OpenTD.RadCAD.EllipticCone.md)\>

### <a id="OpenTD_Model_EllipticCylinders"></a> EllipticCylinders

```csharp
[DataMember]
public List<EllipticCylinder> EllipticCylinders { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[EllipticCylinder](OpenTD.RadCAD.EllipticCylinder.md)\>

### <a id="OpenTD_Model_FEMeshImporters"></a> FEMeshImporters

```csharp
[DataMember]
public List<FEMeshImporter> FEMeshImporters { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[FEMeshImporter](OpenTD.RadCAD.FEMeshImporter.md)\>

### <a id="OpenTD_Model_FTies"></a> FTies

```csharp
[DataMember]
public List<FTie> FTies { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[FTie](OpenTD.FloCAD.FTie.md)\>

### <a id="OpenTD_Model_FkLocators"></a> FkLocators

```csharp
[DataMember]
public List<FkLocator> FkLocators { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[FkLocator](OpenTD.FloCAD.FkLocator.md)\>

### <a id="OpenTD_Model_FluidSubmodels"></a> FluidSubmodels

```csharp
[DataMember]
public List<FluidSubmodel> FluidSubmodels { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[FluidSubmodel](OpenTD.FloCAD.FluidSubmodel.md)\>

### <a id="OpenTD_Model_HeatLoads"></a> HeatLoads

```csharp
[DataMember]
public List<HeatLoad> HeatLoads { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[HeatLoad](OpenTD.HeatLoad.md)\>

### <a id="OpenTD_Model_Heaters"></a> Heaters

```csharp
[DataMember]
public List<Heater> Heaters { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Heater](OpenTD.Heater.md)\>

### <a id="OpenTD_Model_Helices"></a> Helices

```csharp
[DataMember]
public List<Helix> Helices { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Helix](OpenTD.Helix.md)\>

### <a id="OpenTD_Model_IFaces"></a> IFaces

```csharp
[DataMember]
public List<IFace> IFaces { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[IFace](OpenTD.FloCAD.IFace.md)\>

### <a id="OpenTD_Model_Layers"></a> Layers

```csharp
[DataMember]
public List<Layer> Layers { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Layer](OpenTD.Layer.md)\>

### <a id="OpenTD_Model_LinearBricks"></a> LinearBricks

```csharp
[DataMember]
public List<LinearBrick> LinearBricks { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[LinearBrick](OpenTD.RadCAD.FEM.LinearBrick.md)\>

### <a id="OpenTD_Model_LinearPyramids"></a> LinearPyramids

```csharp
[DataMember]
public List<LinearPyramid> LinearPyramids { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[LinearPyramid](OpenTD.RadCAD.FEM.LinearPyramid.md)\>

### <a id="OpenTD_Model_LinearQuads"></a> LinearQuads

```csharp
[DataMember]
public List<LinearQuad> LinearQuads { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[LinearQuad](OpenTD.RadCAD.FEM.LinearQuad.md)\>

### <a id="OpenTD_Model_LinearTets"></a> LinearTets

```csharp
[DataMember]
public List<LinearTet> LinearTets { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[LinearTet](OpenTD.RadCAD.FEM.LinearTet.md)\>

### <a id="OpenTD_Model_LinearTris"></a> LinearTris

```csharp
[DataMember]
public List<LinearTri> LinearTris { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[LinearTri](OpenTD.RadCAD.FEM.LinearTri.md)\>

### <a id="OpenTD_Model_LinearWedges"></a> LinearWedges

```csharp
[DataMember]
public List<LinearWedge> LinearWedges { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[LinearWedge](OpenTD.RadCAD.FEM.LinearWedge.md)\>

### <a id="OpenTD_Model_Lines"></a> Lines

```csharp
[DataMember]
public List<Line> Lines { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Line](OpenTD.Line.md)\>

### <a id="OpenTD_Model_LogicObjects"></a> LogicObjects

```csharp
[DataMember]
public LogicObjects LogicObjects { get; set; }
```

#### Property Value

 [LogicObjects](OpenTD.LogicObjects.md)

### <a id="OpenTD_Model_Lumps"></a> Lumps

```csharp
[DataMember]
public List<Lump> Lumps { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Lump](OpenTD.FloCAD.Lump.md)\>

### <a id="OpenTD_Model_MaterialStacks"></a> MaterialStacks

```csharp
[DataMember]
public List<MaterialStack> MaterialStacks { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[MaterialStack](OpenTD.MaterialStack.md)\>

### <a id="OpenTD_Model_MeshFDs"></a> MeshFDs

```csharp
[DataMember]
public List<MeshFD> MeshFDs { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[MeshFD](OpenTD.RadCAD.MeshFD.md)\>

### <a id="OpenTD_Model_Nodes"></a> Nodes

```csharp
[DataMember]
public List<Node> Nodes { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Node](OpenTD.Node.md)\>

### <a id="OpenTD_Model_Notes"></a> Notes

```csharp
[DataMember]
public Notes Notes { get; set; }
```

#### Property Value

 [Notes](OpenTD.Notes.md)

### <a id="OpenTD_Model_OffsetParaboloids"></a> OffsetParaboloids

```csharp
[DataMember]
public List<OffsetParaboloid> OffsetParaboloids { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[OffsetParaboloid](OpenTD.RadCAD.OffsetParaboloid.md)\>

### <a id="OpenTD_Model_Ogives"></a> Ogives

```csharp
[DataMember]
public List<Ogive> Ogives { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Ogive](OpenTD.RadCAD.Ogive.md)\>

### <a id="OpenTD_Model_OpticalPropss"></a> OpticalPropss

```csharp
[DataMember]
public List<OpticalProps> OpticalPropss { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[OpticalProps](OpenTD.RadCAD.OpticalProps.md)\>

### <a id="OpenTD_Model_Orbits"></a> Orbits

```csharp
[DataMember]
public List<Orbit> Orbits { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Orbit](OpenTD.RadCAD.Orbit.md)\>

### <a id="OpenTD_Model_ParabolicTroughs"></a> ParabolicTroughs

```csharp
[DataMember]
public List<ParabolicTrough> ParabolicTroughs { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ParabolicTrough](OpenTD.RadCAD.ParabolicTrough.md)\>

### <a id="OpenTD_Model_Paraboloids"></a> Paraboloids

```csharp
[DataMember]
public List<Paraboloid> Paraboloids { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Paraboloid](OpenTD.RadCAD.Paraboloid.md)\>

### <a id="OpenTD_Model_Paths"></a> Paths

```csharp
[DataMember]
public List<Path> Paths { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Path](OpenTD.FloCAD.Path.md)\>

### <a id="OpenTD_Model_PipeStdSignatures"></a> PipeStdSignatures

```csharp
[DataMember]
public List<PipeStdSignatureData> PipeStdSignatures { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[PipeStdSignatureData](OpenTD.FloCAD.PipeStdSignatureData.md)\>

### <a id="OpenTD_Model_Pipes"></a> Pipes

```csharp
[DataMember]
public List<Pipe> Pipes { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Pipe](OpenTD.FloCAD.Pipe.md)\>

### <a id="OpenTD_Model_Polyline3ds"></a> Polyline3ds

```csharp
[DataMember]
public List<Polyline3d> Polyline3ds { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Polyline3d](OpenTD.Polyline3d.md)\>

### <a id="OpenTD_Model_Polylines"></a> Polylines

```csharp
[DataMember]
public List<Polyline> Polylines { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Polyline](OpenTD.Polyline.md)\>

### <a id="OpenTD_Model_Ports"></a> Ports

```csharp
[DataMember]
public List<Port> Ports { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Port](OpenTD.FloCAD.Port.md)\>

### <a id="OpenTD_Model_PressureLoads"></a> PressureLoads

```csharp
[DataMember]
public List<PressureLoad> PressureLoads { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[PressureLoad](OpenTD.PressureLoad.md)\>

### <a id="OpenTD_Model_QuadraticBricks"></a> QuadraticBricks

```csharp
[DataMember]
public List<QuadraticBrick> QuadraticBricks { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[QuadraticBrick](OpenTD.RadCAD.FEM.QuadraticBrick.md)\>

### <a id="OpenTD_Model_QuadraticPyramids"></a> QuadraticPyramids

```csharp
[DataMember]
public List<QuadraticPyramid> QuadraticPyramids { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[QuadraticPyramid](OpenTD.RadCAD.FEM.QuadraticPyramid.md)\>

### <a id="OpenTD_Model_QuadraticQuads"></a> QuadraticQuads

```csharp
[DataMember]
public List<QuadraticQuad> QuadraticQuads { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[QuadraticQuad](OpenTD.RadCAD.FEM.QuadraticQuad.md)\>

### <a id="OpenTD_Model_QuadraticTets"></a> QuadraticTets

```csharp
[DataMember]
public List<QuadraticTet> QuadraticTets { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[QuadraticTet](OpenTD.RadCAD.FEM.QuadraticTet.md)\>

### <a id="OpenTD_Model_QuadraticTris"></a> QuadraticTris

```csharp
[DataMember]
public List<QuadraticTri> QuadraticTris { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[QuadraticTri](OpenTD.RadCAD.FEM.QuadraticTri.md)\>

### <a id="OpenTD_Model_QuadraticWedges"></a> QuadraticWedges

```csharp
[DataMember]
public List<QuadraticWedge> QuadraticWedges { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[QuadraticWedge](OpenTD.RadCAD.FEM.QuadraticWedge.md)\>

### <a id="OpenTD_Model_RadiationAnalysisGroups"></a> RadiationAnalysisGroups

```csharp
[DataMember]
public List<Tuple<string, string>> RadiationAnalysisGroups { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Tuple](https://learn.microsoft.com/dotnet/api/system.tuple\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>\>

### <a id="OpenTD_Model_Rectangles"></a> Rectangles

```csharp
[DataMember]
public List<Rectangle> Rectangles { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Rectangle](OpenTD.RadCAD.Rectangle.md)\>

### <a id="OpenTD_Model_ScarfedCones"></a> ScarfedCones

```csharp
[DataMember]
public List<ScarfedCone> ScarfedCones { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ScarfedCone](OpenTD.RadCAD.ScarfedCone.md)\>

### <a id="OpenTD_Model_SolidBricks"></a> SolidBricks

```csharp
[DataMember]
public List<SolidBrick> SolidBricks { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[SolidBrick](OpenTD.RadCAD.FdSolid.SolidBrick.md)\>

### <a id="OpenTD_Model_SolidCones"></a> SolidCones

```csharp
[DataMember]
public List<SolidCone> SolidCones { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[SolidCone](OpenTD.RadCAD.FdSolid.SolidCone.md)\>

### <a id="OpenTD_Model_SolidCylinders"></a> SolidCylinders

```csharp
[DataMember]
public List<SolidCylinder> SolidCylinders { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[SolidCylinder](OpenTD.RadCAD.FdSolid.SolidCylinder.md)\>

### <a id="OpenTD_Model_SolidEllipsoids"></a> SolidEllipsoids

```csharp
[DataMember]
public List<SolidEllipsoid> SolidEllipsoids { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[SolidEllipsoid](OpenTD.RadCAD.FdSolid.SolidEllipsoid.md)\>

### <a id="OpenTD_Model_SolidSpheres"></a> SolidSpheres

```csharp
[DataMember]
public List<SolidSphere> SolidSpheres { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[SolidSphere](OpenTD.RadCAD.FdSolid.SolidSphere.md)\>

### <a id="OpenTD_Model_Spheres"></a> Spheres

```csharp
[DataMember]
public List<Sphere> Spheres { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Sphere](OpenTD.RadCAD.Sphere.md)\>

### <a id="OpenTD_Model_Splines"></a> Splines

```csharp
[DataMember]
public List<Spline> Splines { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Spline](OpenTD.Spline.md)\>

### <a id="OpenTD_Model_Submodels"></a> Submodels

```csharp
[DataMember]
public List<Submodel> Submodels { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Submodel](OpenTD.Submodel.md)\>

### <a id="OpenTD_Model_Symbols"></a> Symbols

```csharp
[DataMember]
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
[DataMember]
public List<Tec> Tecs { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Tec](OpenTD.Tec.md)\>

### <a id="OpenTD_Model_Tees"></a> Tees

```csharp
[DataMember]
public List<Tee> Tees { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Tee](OpenTD.FloCAD.Tee.md)\>

### <a id="OpenTD_Model_Texts"></a> Texts

```csharp
[DataMember]
public List<Text> Texts { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Text](OpenTD.Text.md)\>

### <a id="OpenTD_Model_ThermoPropAliases"></a> ThermoPropAliases

```csharp
[DataMember]
public List<Tuple<string, string>> ThermoPropAliases { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Tuple](https://learn.microsoft.com/dotnet/api/system.tuple\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>\>

### <a id="OpenTD_Model_ThermoPropss"></a> ThermoPropss

```csharp
[DataMember]
public List<ThermoProps> ThermoPropss { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ThermoProps](OpenTD.ThermoProps.md)\>

### <a id="OpenTD_Model_Ties"></a> Ties

```csharp
[DataMember]
public List<Tie> Ties { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Tie](OpenTD.FloCAD.Tie.md)\>

### <a id="OpenTD_Model_Toruses"></a> Toruses

```csharp
[DataMember]
public List<Torus> Toruses { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Torus](OpenTD.RadCAD.Torus.md)\>

### <a id="OpenTD_Model_Trackers"></a> Trackers

```csharp
[DataMember]
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

