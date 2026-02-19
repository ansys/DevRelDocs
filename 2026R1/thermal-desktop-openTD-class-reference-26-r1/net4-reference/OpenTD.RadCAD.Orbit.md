# Class Orbit

Namespace: [OpenTD.RadCAD](OpenTD.RadCAD.md)  
Assembly: OpenTD.dll  

Client-side representation of an orbit in a TD instance.

```csharp
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
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### Orbit\(\)

```csharp
public Orbit()
```

## Properties

### AlbedoArray

```csharp
[DataMember]
public List<double> AlbedoArray { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### AlbedoExp

```csharp
[DataMember]
public ExpressionData AlbedoExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### AlbedoLatLongData

```csharp
[DataMember]
public List<double> AlbedoLatLongData { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### AlbedoLatitudeDeg

```csharp
[DataMember]
public List<double> AlbedoLatitudeDeg { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### AlbedoLongitudeDeg

```csharp
[DataMember]
public List<double> AlbedoLongitudeDeg { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### AlbedoOption

```csharp
[DataMember]
public int AlbedoOption { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### AlbedoTimeArray

```csharp
[DataMember]
public DimensionalList<Time> AlbedoTimeArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### AlignToCCS

```csharp
[DataMember]
public bool AlignToCCS { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AtmosphericAttenuation

```csharp
[DataMember]
public double AtmosphericAttenuation { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### AtmosphericAttenuationExp

```csharp
[DataMember]
public ExpressionData AtmosphericAttenuationExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### CelestRot1Array

```csharp
[DataMember]
public DimensionalList<Angle> CelestRot1Array { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### CelestRot1Axis

```csharp
[DataMember]
public int CelestRot1Axis { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CelestRot2Array

```csharp
[DataMember]
public DimensionalList<Angle> CelestRot2Array { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### CelestRot2Axis

```csharp
[DataMember]
public int CelestRot2Axis { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CelestRot3Array

```csharp
[DataMember]
public DimensionalList<Angle> CelestRot3Array { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### CelestRot3Axis

```csharp
[DataMember]
public int CelestRot3Axis { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CelestTimeArray

```csharp
[DataMember]
public DimensionalList<Time> CelestTimeArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### CelestXArray

```csharp
[DataMember]
public DimensionalList<OrbitLength> CelestXArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[OrbitLength](OpenTD.Dimension.OrbitLength.md)\>

### CelestYArray

```csharp
[DataMember]
public DimensionalList<OrbitLength> CelestYArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[OrbitLength](OpenTD.Dimension.OrbitLength.md)\>

### CelestZArray

```csharp
[DataMember]
public DimensionalList<OrbitLength> CelestZArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[OrbitLength](OpenTD.Dimension.OrbitLength.md)\>

### CloudinessFactor

```csharp
[DataMember]
public double CloudinessFactor { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### CloudinessFactorExp

```csharp
[DataMember]
public ExpressionData CloudinessFactorExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### Comment

```csharp
[DataMember]
public string Comment { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ConstraintAxis

```csharp
[DataMember]
public int ConstraintAxis { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ConstraintStarDec

```csharp
[DataMember]
public Dimensional<Angle> ConstraintStarDec { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### ConstraintStarDecExp

```csharp
[DataMember]
public ExpressionData ConstraintStarDecExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### ConstraintStarRA

```csharp
[DataMember]
public Dimensional<Angle> ConstraintStarRA { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### ConstraintStarRAExp

```csharp
[DataMember]
public ExpressionData ConstraintStarRAExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### ConstraintType

```csharp
[DataMember]
public Orbit.OrientTypes ConstraintType { get; set; }
```

#### Property Value

 [Orbit](OpenTD.RadCAD.Orbit.md).[OrientTypes](OpenTD.RadCAD.Orbit.OrientTypes.md)

### DarkSideTempExp

```csharp
[DataMember]
public ExpressionData DarkSideTempExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### DiffuseSkyIRArray

In previous versions of OpenTD, this was erroneously identified as a
list of fluxes. It is actually a list of temperatures.

```csharp
[DataMember]
public DimensionalList<Temp> DiffuseSkyIRArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Temp](OpenTD.Dimension.Temp.md)\>

### DiffuseSkyIRTemp

```csharp
[DataMember]
public Dimensional<Temp> DiffuseSkyIRTemp { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Temp](OpenTD.Dimension.Temp.md)\>

### DiffuseSkyIRTempExp

```csharp
[DataMember]
public ExpressionData DiffuseSkyIRTempExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### DiffuseSkyIRTimeArray

```csharp
[DataMember]
public DimensionalList<Time> DiffuseSkyIRTimeArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### DiffuseSkySolarScatteringFraction

```csharp
[DataMember]
public double DiffuseSkySolarScatteringFraction { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### DiffuseSkySolarScatteringFractionExp

```csharp
[DataMember]
public ExpressionData DiffuseSkySolarScatteringFractionExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### DiffuseSolarArray

```csharp
[DataMember]
public DimensionalList<Flux> DiffuseSolarArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Flux](OpenTD.Dimension.Flux.md)\>

### DiffuseSolarFlux

```csharp
[DataMember]
public Dimensional<Flux> DiffuseSolarFlux { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Flux](OpenTD.Dimension.Flux.md)\>

### DiffuseSolarFluxExp

```csharp
[DataMember]
public ExpressionData DiffuseSolarFluxExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### DiffuseSolarTimeArray

```csharp
[DataMember]
public DimensionalList<Time> DiffuseSolarTimeArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### DisplayPlanetTempOrFlux

```csharp
[DataMember]
public int DisplayPlanetTempOrFlux { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DisplaySkyIRTempOrFlux

```csharp
[DataMember]
public int DisplaySkyIRTempOrFlux { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### EndAnomaly

```csharp
[DataMember]
public Dimensional<Angle> EndAnomaly { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### EndAnomalyExp

```csharp
[DataMember]
public ExpressionData EndAnomalyExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### GroundEmissivity

```csharp
[DataMember]
public double GroundEmissivity { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### GroundTemperatureMode

```csharp
[DataMember]
public int GroundTemperatureMode { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### HrOrbitRadiusArray

```csharp
[DataMember]
public List<double> HrOrbitRadiusArray { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### HrPlanetVecArray

```csharp
[DataMember]
public List<Vector3d> HrPlanetVecArray { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Vector3d](OpenTD.Vector3d.md)\>

### HrSpeedArray

```csharp
[DataMember]
public DimensionalList<OrbitVelocity> HrSpeedArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[OrbitVelocity](OpenTD.Dimension.OrbitVelocity.md)\>

### HrSunVecArray

```csharp
[DataMember]
public List<Vector3d> HrSunVecArray { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Vector3d](OpenTD.Vector3d.md)\>

### HrTimeArray

```csharp
[DataMember]
public DimensionalList<Time> HrTimeArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### HrVelocityVecArray

```csharp
[DataMember]
public List<Vector3d> HrVelocityVecArray { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Vector3d](OpenTD.Vector3d.md)\>

### IncludeShadows

```csharp
[DataMember]
public int IncludeShadows { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### LinkedOrbitName

```csharp
[DataMember]
public string LinkedOrbitName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Name

```csharp
[DataMember]
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### OrbitData

```csharp
[DataMember]
public OrbitParameters OrbitData { get; set; }
```

#### Property Value

 [OrbitParameters](OpenTD.RadCAD.OrbitParameters.md)

### OrbitDateTime

```csharp
[DataMember]
public OrbitDateTime OrbitDateTime { get; set; }
```

#### Property Value

 [OrbitDateTime](OpenTD.RadCAD.OrbitDateTime.md)

### OrbitIncrements

```csharp
[DataMember]
public int OrbitIncrements { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OrbitIncrementsExp

```csharp
[DataMember]
public ExpressionData OrbitIncrementsExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### OrbitPosInTrueAnom

```csharp
[DataMember]
public int OrbitPosInTrueAnom { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OrbitPositions

```csharp
[DataMember]
public DimensionalList<Angle> OrbitPositions { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### OrbitType

```csharp
[DataMember]
public Orbit.OrbitTypes OrbitType { get; set; }
```

#### Property Value

 [Orbit](OpenTD.RadCAD.Orbit.md).[OrbitTypes](OpenTD.RadCAD.Orbit.OrbitTypes.md)

### OrientType

```csharp
[DataMember]
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
[DataMember]
public PlanetParameters PlanetData { get; set; }
```

#### Property Value

 [PlanetParameters](OpenTD.RadCAD.PlanetParameters.md)

### PlanetTempArray

```csharp
[DataMember]
public DimensionalList<Temp> PlanetTempArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Temp](OpenTD.Dimension.Temp.md)\>

### PlanetTimeArray

```csharp
[DataMember]
public DimensionalList<Time> PlanetTimeArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### PlanetshineCS

```csharp
[DataMember]
public int PlanetshineCS { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PlanetshineLatLongData

```csharp
[DataMember]
public DimensionalList<Temp> PlanetshineLatLongData { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Temp](OpenTD.Dimension.Temp.md)\>

### PlanetshineLatitudeDeg

```csharp
[DataMember]
public List<double> PlanetshineLatitudeDeg { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### PlanetshineLongitudeDeg

```csharp
[DataMember]
public List<double> PlanetshineLongitudeDeg { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### PlanetshineOption

```csharp
[DataMember]
public int PlanetshineOption { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PointingAxis

```csharp
[DataMember]
public int PointingAxis { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Rot1

```csharp
[DataMember]
public Dimensional<Angle> Rot1 { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### Rot1Axis

```csharp
[DataMember]
public int Rot1Axis { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Rot1Exp

```csharp
[DataMember]
public ExpressionData Rot1Exp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### Rot2

```csharp
[DataMember]
public Dimensional<Angle> Rot2 { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### Rot2Axis

```csharp
[DataMember]
public int Rot2Axis { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Rot2Exp

```csharp
[DataMember]
public ExpressionData Rot2Exp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### Rot3

```csharp
[DataMember]
public Dimensional<Angle> Rot3 { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### Rot3Axis

```csharp
[DataMember]
public int Rot3Axis { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Rot3Exp

```csharp
[DataMember]
public ExpressionData Rot3Exp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### SolarAngle

```csharp
[DataMember]
public Dimensional<Angle> SolarAngle { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### SolarAngleExp

```csharp
[DataMember]
public ExpressionData SolarAngleExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### SolarArray

```csharp
[DataMember]
public DimensionalList<Flux> SolarArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Flux](OpenTD.Dimension.Flux.md)\>

### SolarFluxExp

```csharp
[DataMember]
public ExpressionData SolarFluxExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### SolarTimeArray

```csharp
[DataMember]
public DimensionalList<Time> SolarTimeArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### SpinAxis

```csharp
[DataMember]
public Vector3d SpinAxis { get; set; }
```

#### Property Value

 [Vector3d](OpenTD.Vector3d.md)

### SpinVehicle

```csharp
[DataMember]
public int SpinVehicle { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### StarDec

```csharp
[DataMember]
public Dimensional<Angle> StarDec { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### StarDecExp

```csharp
[DataMember]
public ExpressionData StarDecExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### StarRA

```csharp
[DataMember]
public Dimensional<Angle> StarRA { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### StarRAExp

```csharp
[DataMember]
public ExpressionData StarRAExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### StartAnomaly

```csharp
[DataMember]
public Dimensional<Angle> StartAnomaly { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### StartAnomalyExp

```csharp
[DataMember]
public ExpressionData StartAnomalyExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### SunSideTempExp

```csharp
[DataMember]
public ExpressionData SunSideTempExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### TerrAltArray

```csharp
[DataMember]
public DimensionalList<OrbitLength> TerrAltArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[OrbitLength](OpenTD.Dimension.OrbitLength.md)\>

### TerrLatArrayDeg

```csharp
[DataMember]
public List<double> TerrLatArrayDeg { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### TerrLongArrayDeg

```csharp
[DataMember]
public List<double> TerrLongArrayDeg { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### TerrTimeArray

```csharp
[DataMember]
public DimensionalList<Time> TerrTimeArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### TerrZrotArrayDeg

```csharp
[DataMember]
public List<double> TerrZrotArrayDeg { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### UseAtmosphericAttenuation

```csharp
[DataMember]
public int UseAtmosphericAttenuation { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### UseDarkAndSunSide

```csharp
[DataMember]
public int UseDarkAndSunSide { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### UseEqualInc

```csharp
[DataMember]
public int UseEqualInc { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### UseRightAscensionsOrCalculateFromDate

```csharp
[DataMember]
public int UseRightAscensionsOrCalculateFromDate { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### UseTimeVaryDiffuseSkyIR

```csharp
[DataMember]
public int UseTimeVaryDiffuseSkyIR { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### UseTimeVaryDiffuseSolar

```csharp
[DataMember]
public int UseTimeVaryDiffuseSolar { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### UseTimeVarySolar

```csharp
[DataMember]
public int UseTimeVarySolar { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### \_Planet

Do not use.

```csharp
[DataMember]
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


