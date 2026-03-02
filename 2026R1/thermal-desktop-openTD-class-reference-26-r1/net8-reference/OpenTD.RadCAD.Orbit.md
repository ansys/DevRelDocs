# Class Orbit

Namespace: [OpenTD.RadCAD](OpenTD.RadCAD.md)  
Assembly: OpenTD.dll  

Client-side representation of an orbit in a TD instance.

```csharp
[MessagePackObject(true)]
public class Orbit : DbObject, IUpdatable
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OpenTDObject](OpenTD.OpenTDObject.md) ← 
[DbObject](OpenTD.DbObject.md) ← 
[Orbit](OpenTD.RadCAD.Orbit.md)

## Implements

[IUpdatable](OpenTD.IUpdatable.md)

## Inherited Members

[DbObject.SetFrom\(DbObject\)](OpenTD.DbObject.md\#OpenTD\_DbObject\_SetFrom\_OpenTD\_DbObject\_), 
[DbObject.Update\(\)](OpenTD.DbObject.md\#OpenTD\_DbObject\_Update), 
[DbObject.UpdateFromTD\(\)](OpenTD.DbObject.md\#OpenTD\_DbObject\_UpdateFromTD), 
[DbObject.CreateIn\(ThermalDesktop\)](OpenTD.DbObject.md\#OpenTD\_DbObject\_CreateIn\_OpenTD\_ThermalDesktop\_), 
[DbObject.Handle](OpenTD.DbObject.md\#OpenTD\_DbObject\_Handle), 
[DbObject.TypeName](OpenTD.DbObject.md\#OpenTD\_DbObject\_TypeName), 
[DbObject.Equals\(object\)](OpenTD.DbObject.md\#OpenTD\_DbObject\_Equals\_System\_Object\_), 
[DbObject.GetHashCode\(\)](OpenTD.DbObject.md\#OpenTD\_DbObject\_GetHashCode), 
[OpenTDObject.SetFrom\(OpenTDObject\)](OpenTD.OpenTDObject.md\#OpenTD\_OpenTDObject\_SetFrom\_OpenTD\_OpenTDObject\_), 
[OpenTDObject.Update\(\)](OpenTD.OpenTDObject.md\#OpenTD\_OpenTDObject\_Update), 
[OpenTDObject.UpdateFromTD\(\)](OpenTD.OpenTDObject.md\#OpenTD\_OpenTDObject\_UpdateFromTD), 
[OpenTDObject.UpdateIn\(ThermalDesktop\)](OpenTD.OpenTDObject.md\#OpenTD\_OpenTDObject\_UpdateIn\_OpenTD\_ThermalDesktop\_), 
[OpenTDObject.CreateIn\(ThermalDesktop\)](OpenTD.OpenTDObject.md\#OpenTD\_OpenTDObject\_CreateIn\_OpenTD\_ThermalDesktop\_), 
[OpenTDObject.TdProxy](OpenTD.OpenTDObject.md\#OpenTD\_OpenTDObject\_TdProxy), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### Orbit\(\)

```csharp
public Orbit()
```

## Properties

### AlbedoArray

```csharp
public List<double> AlbedoArray { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### AlbedoExp

```csharp
public ExpressionData AlbedoExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### AlbedoLatLongData

```csharp
public List<double> AlbedoLatLongData { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### AlbedoLatitudeDeg

```csharp
public List<double> AlbedoLatitudeDeg { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### AlbedoLongitudeDeg

```csharp
public List<double> AlbedoLongitudeDeg { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### AlbedoOption

```csharp
public int AlbedoOption { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### AlbedoTimeArray

```csharp
public DimensionalList<Time> AlbedoTimeArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### AlignToCCS

```csharp
public bool AlignToCCS { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AtmosphericAttenuation

```csharp
public double AtmosphericAttenuation { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### AtmosphericAttenuationExp

```csharp
public ExpressionData AtmosphericAttenuationExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### CelestRot1Array

```csharp
public DimensionalList<Angle> CelestRot1Array { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### CelestRot1Axis

```csharp
public int CelestRot1Axis { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CelestRot2Array

```csharp
public DimensionalList<Angle> CelestRot2Array { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### CelestRot2Axis

```csharp
public int CelestRot2Axis { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CelestRot3Array

```csharp
public DimensionalList<Angle> CelestRot3Array { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### CelestRot3Axis

```csharp
public int CelestRot3Axis { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CelestTimeArray

```csharp
public DimensionalList<Time> CelestTimeArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### CelestXArray

```csharp
public DimensionalList<OrbitLength> CelestXArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[OrbitLength](OpenTD.Dimension.OrbitLength.md)\>

### CelestYArray

```csharp
public DimensionalList<OrbitLength> CelestYArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[OrbitLength](OpenTD.Dimension.OrbitLength.md)\>

### CelestZArray

```csharp
public DimensionalList<OrbitLength> CelestZArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[OrbitLength](OpenTD.Dimension.OrbitLength.md)\>

### CloudinessFactor

```csharp
public double CloudinessFactor { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### CloudinessFactorExp

```csharp
public ExpressionData CloudinessFactorExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### Comment

```csharp
public string Comment { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ConstraintAxis

```csharp
public int ConstraintAxis { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ConstraintStarDec

```csharp
public Dimensional<Angle> ConstraintStarDec { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### ConstraintStarDecExp

```csharp
public ExpressionData ConstraintStarDecExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### ConstraintStarRA

```csharp
public Dimensional<Angle> ConstraintStarRA { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### ConstraintStarRAExp

```csharp
public ExpressionData ConstraintStarRAExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### ConstraintType

```csharp
public Orbit.OrientTypes ConstraintType { get; set; }
```

#### Property Value

 [Orbit](OpenTD.RadCAD.Orbit.md).[OrientTypes](OpenTD.RadCAD.Orbit.OrientTypes.md)

### DarkSideTempExp

```csharp
public ExpressionData DarkSideTempExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### DiffuseSkyIRArray

In previous versions of OpenTD, this was erroneously identified as a
list of fluxes. It is actually a list of temperatures.

```csharp
public DimensionalList<Temp> DiffuseSkyIRArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Temp](OpenTD.Dimension.Temp.md)\>

### DiffuseSkyIRTemp

```csharp
public Dimensional<Temp> DiffuseSkyIRTemp { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Temp](OpenTD.Dimension.Temp.md)\>

### DiffuseSkyIRTempExp

```csharp
public ExpressionData DiffuseSkyIRTempExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### DiffuseSkyIRTimeArray

```csharp
public DimensionalList<Time> DiffuseSkyIRTimeArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### DiffuseSkySolarScatteringFraction

```csharp
public double DiffuseSkySolarScatteringFraction { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### DiffuseSkySolarScatteringFractionExp

```csharp
public ExpressionData DiffuseSkySolarScatteringFractionExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### DiffuseSolarArray

```csharp
public DimensionalList<Flux> DiffuseSolarArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Flux](OpenTD.Dimension.Flux.md)\>

### DiffuseSolarFlux

```csharp
public Dimensional<Flux> DiffuseSolarFlux { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Flux](OpenTD.Dimension.Flux.md)\>

### DiffuseSolarFluxExp

```csharp
public ExpressionData DiffuseSolarFluxExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### DiffuseSolarTimeArray

```csharp
public DimensionalList<Time> DiffuseSolarTimeArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### DisplayPlanetTempOrFlux

```csharp
public int DisplayPlanetTempOrFlux { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DisplaySkyIRTempOrFlux

```csharp
public int DisplaySkyIRTempOrFlux { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### EndAnomaly

```csharp
public Dimensional<Angle> EndAnomaly { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### EndAnomalyExp

```csharp
public ExpressionData EndAnomalyExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### GroundEmissivity

```csharp
public double GroundEmissivity { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### GroundTemperatureMode

```csharp
public int GroundTemperatureMode { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### HrOrbitRadiusArray

```csharp
public List<double> HrOrbitRadiusArray { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### HrPlanetVecArray

```csharp
public List<Vector3d> HrPlanetVecArray { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Vector3d](OpenTD.Vector3d.md)\>

### HrSpeedArray

```csharp
public DimensionalList<OrbitVelocity> HrSpeedArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[OrbitVelocity](OpenTD.Dimension.OrbitVelocity.md)\>

### HrSunVecArray

```csharp
public List<Vector3d> HrSunVecArray { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Vector3d](OpenTD.Vector3d.md)\>

### HrTimeArray

```csharp
public DimensionalList<Time> HrTimeArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### HrVelocityVecArray

```csharp
public List<Vector3d> HrVelocityVecArray { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Vector3d](OpenTD.Vector3d.md)\>

### IncludeShadows

```csharp
public int IncludeShadows { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### LinkedOrbitName

```csharp
public string LinkedOrbitName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Name

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### OrbitData

```csharp
public OrbitParameters OrbitData { get; set; }
```

#### Property Value

 [OrbitParameters](OpenTD.RadCAD.OrbitParameters.md)

### OrbitDateTime

```csharp
public OrbitDateTime OrbitDateTime { get; set; }
```

#### Property Value

 [OrbitDateTime](OpenTD.RadCAD.OrbitDateTime.md)

### OrbitIncrements

```csharp
public int OrbitIncrements { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OrbitIncrementsExp

```csharp
public ExpressionData OrbitIncrementsExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### OrbitPosInTrueAnom

```csharp
public int OrbitPosInTrueAnom { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OrbitPositions

```csharp
public DimensionalList<Angle> OrbitPositions { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### OrbitType

```csharp
public Orbit.OrbitTypes OrbitType { get; set; }
```

#### Property Value

 [Orbit](OpenTD.RadCAD.Orbit.md).[OrbitTypes](OpenTD.RadCAD.Orbit.OrbitTypes.md)

### OrientType

```csharp
public Orbit.OrientTypes OrientType { get; set; }
```

#### Property Value

 [Orbit](OpenTD.RadCAD.Orbit.md).[OrientTypes](OpenTD.RadCAD.Orbit.OrientTypes.md)

### Planet

Starting in OpenTD 6.3, changing this value will update the parameters in PlanetData.

```csharp
public Orbit.Planets Planet { get; set; }
```

#### Property Value

 [Orbit](OpenTD.RadCAD.Orbit.md).[Planets](OpenTD.RadCAD.Orbit.Planets.md)

### PlanetData

```csharp
public PlanetParameters PlanetData { get; set; }
```

#### Property Value

 [PlanetParameters](OpenTD.RadCAD.PlanetParameters.md)

### PlanetTempArray

```csharp
public DimensionalList<Temp> PlanetTempArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Temp](OpenTD.Dimension.Temp.md)\>

### PlanetTimeArray

```csharp
public DimensionalList<Time> PlanetTimeArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### PlanetshineCS

```csharp
public int PlanetshineCS { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PlanetshineLatLongData

```csharp
public DimensionalList<Temp> PlanetshineLatLongData { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Temp](OpenTD.Dimension.Temp.md)\>

### PlanetshineLatitudeDeg

```csharp
public List<double> PlanetshineLatitudeDeg { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### PlanetshineLongitudeDeg

```csharp
public List<double> PlanetshineLongitudeDeg { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### PlanetshineOption

```csharp
public int PlanetshineOption { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PointingAxis

```csharp
public int PointingAxis { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Rot1

```csharp
public Dimensional<Angle> Rot1 { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### Rot1Axis

```csharp
public int Rot1Axis { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Rot1Exp

```csharp
public ExpressionData Rot1Exp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### Rot2

```csharp
public Dimensional<Angle> Rot2 { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### Rot2Axis

```csharp
public int Rot2Axis { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Rot2Exp

```csharp
public ExpressionData Rot2Exp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### Rot3

```csharp
public Dimensional<Angle> Rot3 { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### Rot3Axis

```csharp
public int Rot3Axis { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Rot3Exp

```csharp
public ExpressionData Rot3Exp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### SolarAngle

```csharp
public Dimensional<Angle> SolarAngle { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### SolarAngleExp

```csharp
public ExpressionData SolarAngleExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### SolarArray

```csharp
public DimensionalList<Flux> SolarArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Flux](OpenTD.Dimension.Flux.md)\>

### SolarFluxExp

```csharp
public ExpressionData SolarFluxExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### SolarTimeArray

```csharp
public DimensionalList<Time> SolarTimeArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### SpinAxis

```csharp
public Vector3d SpinAxis { get; set; }
```

#### Property Value

 [Vector3d](OpenTD.Vector3d.md)

### SpinVehicle

```csharp
public int SpinVehicle { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### StarDec

```csharp
public Dimensional<Angle> StarDec { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### StarDecExp

```csharp
public ExpressionData StarDecExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### StarRA

```csharp
public Dimensional<Angle> StarRA { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### StarRAExp

```csharp
public ExpressionData StarRAExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### StartAnomaly

```csharp
public Dimensional<Angle> StartAnomaly { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### StartAnomalyExp

```csharp
public ExpressionData StartAnomalyExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### SunSideTempExp

```csharp
public ExpressionData SunSideTempExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### TerrAltArray

```csharp
public DimensionalList<OrbitLength> TerrAltArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[OrbitLength](OpenTD.Dimension.OrbitLength.md)\>

### TerrLatArrayDeg

```csharp
public List<double> TerrLatArrayDeg { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### TerrLongArrayDeg

```csharp
public List<double> TerrLongArrayDeg { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### TerrTimeArray

```csharp
public DimensionalList<Time> TerrTimeArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### TerrZrotArrayDeg

```csharp
public List<double> TerrZrotArrayDeg { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### UseAtmosphericAttenuation

```csharp
public int UseAtmosphericAttenuation { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### UseDarkAndSunSide

```csharp
public int UseDarkAndSunSide { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### UseEqualInc

```csharp
public int UseEqualInc { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### UseRightAscensionsOrCalculateFromDate

```csharp
public int UseRightAscensionsOrCalculateFromDate { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### UseTimeVaryDiffuseSkyIR

```csharp
public int UseTimeVaryDiffuseSkyIR { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### UseTimeVaryDiffuseSolar

```csharp
public int UseTimeVaryDiffuseSolar { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### UseTimeVarySolar

```csharp
public int UseTimeVarySolar { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### \_Planet

Do not use.

```csharp
public Orbit.Planets _Planet { get; set; }
```

#### Property Value

 [Orbit](OpenTD.RadCAD.Orbit.md).[Planets](OpenTD.RadCAD.Orbit.Planets.md)

## Methods

### CheckData\(\)

```csharp
public void CheckData()
```

### CreateIn\(ThermalDesktop\)

Creates the TD entity in the specified TD instance.

```csharp
public override void CreateIn(ThermalDesktop td)
```

#### Parameters

`td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

### Rename\(string\)

Renames both this client-side instance and the TD entity.

```csharp
public void Rename(string to)
```

#### Parameters

`to` [string](https://learn.microsoft.com/dotnet/api/system.string)

### ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

### Update\(\)

Updates the TD entity with the latest client data.

```csharp
public override void Update()
```

## See Also

[ThermalDesktop](OpenTD.ThermalDesktop.md)


