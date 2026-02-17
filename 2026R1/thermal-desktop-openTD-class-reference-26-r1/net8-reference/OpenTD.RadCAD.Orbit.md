# <a id="OpenTD_RadCAD_Orbit"></a> Class Orbit

Namespace: [OpenTD.RadCAD](OpenTD.RadCAD.md)  
Assembly: OpenTD.dll  

Client-side representation of an orbit in a TD instance.

```csharp
public class Orbit : DbObject, IUpdatable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OpenTDObject](OpenTD.OpenTDObject.md) ← 
[DbObject](OpenTD.DbObject.md) ← 
[Orbit](OpenTD.RadCAD.Orbit.md)

#### Implements

[IUpdatable](OpenTD.IUpdatable.md)

#### Inherited Members

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

### <a id="OpenTD_RadCAD_Orbit__ctor"></a> Orbit\(\)

```csharp
public Orbit()
```

## Properties

### <a id="OpenTD_RadCAD_Orbit_AlbedoArray"></a> AlbedoArray

```csharp
public List<double> AlbedoArray { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="OpenTD_RadCAD_Orbit_AlbedoExp"></a> AlbedoExp

```csharp
public ExpressionData AlbedoExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_Orbit_AlbedoLatLongData"></a> AlbedoLatLongData

```csharp
public List<double> AlbedoLatLongData { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="OpenTD_RadCAD_Orbit_AlbedoLatitudeDeg"></a> AlbedoLatitudeDeg

```csharp
public List<double> AlbedoLatitudeDeg { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="OpenTD_RadCAD_Orbit_AlbedoLongitudeDeg"></a> AlbedoLongitudeDeg

```csharp
public List<double> AlbedoLongitudeDeg { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="OpenTD_RadCAD_Orbit_AlbedoOption"></a> AlbedoOption

```csharp
public int AlbedoOption { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_AlbedoTimeArray"></a> AlbedoTimeArray

```csharp
public DimensionalList<Time> AlbedoTimeArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_RadCAD_Orbit_AlignToCCS"></a> AlignToCCS

```csharp
public bool AlignToCCS { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_RadCAD_Orbit_AtmosphericAttenuation"></a> AtmosphericAttenuation

```csharp
public double AtmosphericAttenuation { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadCAD_Orbit_AtmosphericAttenuationExp"></a> AtmosphericAttenuationExp

```csharp
public ExpressionData AtmosphericAttenuationExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_Orbit_CelestRot1Array"></a> CelestRot1Array

```csharp
public DimensionalList<Angle> CelestRot1Array { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### <a id="OpenTD_RadCAD_Orbit_CelestRot1Axis"></a> CelestRot1Axis

```csharp
public int CelestRot1Axis { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_CelestRot2Array"></a> CelestRot2Array

```csharp
public DimensionalList<Angle> CelestRot2Array { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### <a id="OpenTD_RadCAD_Orbit_CelestRot2Axis"></a> CelestRot2Axis

```csharp
public int CelestRot2Axis { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_CelestRot3Array"></a> CelestRot3Array

```csharp
public DimensionalList<Angle> CelestRot3Array { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### <a id="OpenTD_RadCAD_Orbit_CelestRot3Axis"></a> CelestRot3Axis

```csharp
public int CelestRot3Axis { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_CelestTimeArray"></a> CelestTimeArray

```csharp
public DimensionalList<Time> CelestTimeArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_RadCAD_Orbit_CelestXArray"></a> CelestXArray

```csharp
public DimensionalList<OrbitLength> CelestXArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[OrbitLength](OpenTD.Dimension.OrbitLength.md)\>

### <a id="OpenTD_RadCAD_Orbit_CelestYArray"></a> CelestYArray

```csharp
public DimensionalList<OrbitLength> CelestYArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[OrbitLength](OpenTD.Dimension.OrbitLength.md)\>

### <a id="OpenTD_RadCAD_Orbit_CelestZArray"></a> CelestZArray

```csharp
public DimensionalList<OrbitLength> CelestZArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[OrbitLength](OpenTD.Dimension.OrbitLength.md)\>

### <a id="OpenTD_RadCAD_Orbit_CloudinessFactor"></a> CloudinessFactor

```csharp
public double CloudinessFactor { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadCAD_Orbit_CloudinessFactorExp"></a> CloudinessFactorExp

```csharp
public ExpressionData CloudinessFactorExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_Orbit_Comment"></a> Comment

```csharp
public string Comment { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadCAD_Orbit_ConstraintAxis"></a> ConstraintAxis

```csharp
public int ConstraintAxis { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_ConstraintStarDec"></a> ConstraintStarDec

```csharp
public Dimensional<Angle> ConstraintStarDec { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### <a id="OpenTD_RadCAD_Orbit_ConstraintStarDecExp"></a> ConstraintStarDecExp

```csharp
public ExpressionData ConstraintStarDecExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_Orbit_ConstraintStarRA"></a> ConstraintStarRA

```csharp
public Dimensional<Angle> ConstraintStarRA { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### <a id="OpenTD_RadCAD_Orbit_ConstraintStarRAExp"></a> ConstraintStarRAExp

```csharp
public ExpressionData ConstraintStarRAExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_Orbit_ConstraintType"></a> ConstraintType

```csharp
public Orbit.OrientTypes ConstraintType { get; set; }
```

#### Property Value

 [Orbit](OpenTD.RadCAD.Orbit.md).[OrientTypes](OpenTD.RadCAD.Orbit.OrientTypes.md)

### <a id="OpenTD_RadCAD_Orbit_DarkSideTempExp"></a> DarkSideTempExp

```csharp
public ExpressionData DarkSideTempExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_Orbit_DiffuseSkyIRArray"></a> DiffuseSkyIRArray

In previous versions of OpenTD, this was erroneously identified as a
list of fluxes. It is actually a list of temperatures.

```csharp
public DimensionalList<Temp> DiffuseSkyIRArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Temp](OpenTD.Dimension.Temp.md)\>

### <a id="OpenTD_RadCAD_Orbit_DiffuseSkyIRTemp"></a> DiffuseSkyIRTemp

```csharp
public Dimensional<Temp> DiffuseSkyIRTemp { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Temp](OpenTD.Dimension.Temp.md)\>

### <a id="OpenTD_RadCAD_Orbit_DiffuseSkyIRTempExp"></a> DiffuseSkyIRTempExp

```csharp
public ExpressionData DiffuseSkyIRTempExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_Orbit_DiffuseSkyIRTimeArray"></a> DiffuseSkyIRTimeArray

```csharp
public DimensionalList<Time> DiffuseSkyIRTimeArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_RadCAD_Orbit_DiffuseSkySolarScatteringFraction"></a> DiffuseSkySolarScatteringFraction

```csharp
public double DiffuseSkySolarScatteringFraction { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadCAD_Orbit_DiffuseSkySolarScatteringFractionExp"></a> DiffuseSkySolarScatteringFractionExp

```csharp
public ExpressionData DiffuseSkySolarScatteringFractionExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_Orbit_DiffuseSolarArray"></a> DiffuseSolarArray

```csharp
public DimensionalList<Flux> DiffuseSolarArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Flux](OpenTD.Dimension.Flux.md)\>

### <a id="OpenTD_RadCAD_Orbit_DiffuseSolarFlux"></a> DiffuseSolarFlux

```csharp
public Dimensional<Flux> DiffuseSolarFlux { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Flux](OpenTD.Dimension.Flux.md)\>

### <a id="OpenTD_RadCAD_Orbit_DiffuseSolarFluxExp"></a> DiffuseSolarFluxExp

```csharp
public ExpressionData DiffuseSolarFluxExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_Orbit_DiffuseSolarTimeArray"></a> DiffuseSolarTimeArray

```csharp
public DimensionalList<Time> DiffuseSolarTimeArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_RadCAD_Orbit_DisplayPlanetTempOrFlux"></a> DisplayPlanetTempOrFlux

```csharp
public int DisplayPlanetTempOrFlux { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_DisplaySkyIRTempOrFlux"></a> DisplaySkyIRTempOrFlux

```csharp
public int DisplaySkyIRTempOrFlux { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_EndAnomaly"></a> EndAnomaly

```csharp
public Dimensional<Angle> EndAnomaly { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### <a id="OpenTD_RadCAD_Orbit_EndAnomalyExp"></a> EndAnomalyExp

```csharp
public ExpressionData EndAnomalyExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_Orbit_GroundEmissivity"></a> GroundEmissivity

```csharp
public double GroundEmissivity { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadCAD_Orbit_GroundTemperatureMode"></a> GroundTemperatureMode

```csharp
public int GroundTemperatureMode { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_HrOrbitRadiusArray"></a> HrOrbitRadiusArray

```csharp
public List<double> HrOrbitRadiusArray { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="OpenTD_RadCAD_Orbit_HrPlanetVecArray"></a> HrPlanetVecArray

```csharp
public List<Vector3d> HrPlanetVecArray { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Vector3d](OpenTD.Vector3d.md)\>

### <a id="OpenTD_RadCAD_Orbit_HrSpeedArray"></a> HrSpeedArray

```csharp
public DimensionalList<OrbitVelocity> HrSpeedArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[OrbitVelocity](OpenTD.Dimension.OrbitVelocity.md)\>

### <a id="OpenTD_RadCAD_Orbit_HrSunVecArray"></a> HrSunVecArray

```csharp
public List<Vector3d> HrSunVecArray { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Vector3d](OpenTD.Vector3d.md)\>

### <a id="OpenTD_RadCAD_Orbit_HrTimeArray"></a> HrTimeArray

```csharp
public DimensionalList<Time> HrTimeArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_RadCAD_Orbit_HrVelocityVecArray"></a> HrVelocityVecArray

```csharp
public List<Vector3d> HrVelocityVecArray { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Vector3d](OpenTD.Vector3d.md)\>

### <a id="OpenTD_RadCAD_Orbit_IncludeShadows"></a> IncludeShadows

```csharp
public int IncludeShadows { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_LinkedOrbitName"></a> LinkedOrbitName

```csharp
public string LinkedOrbitName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadCAD_Orbit_Name"></a> Name

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadCAD_Orbit_OrbitData"></a> OrbitData

```csharp
public OrbitParameters OrbitData { get; set; }
```

#### Property Value

 [OrbitParameters](OpenTD.RadCAD.OrbitParameters.md)

### <a id="OpenTD_RadCAD_Orbit_OrbitDateTime"></a> OrbitDateTime

```csharp
public OrbitDateTime OrbitDateTime { get; set; }
```

#### Property Value

 [OrbitDateTime](OpenTD.RadCAD.OrbitDateTime.md)

### <a id="OpenTD_RadCAD_Orbit_OrbitIncrements"></a> OrbitIncrements

```csharp
public int OrbitIncrements { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_OrbitIncrementsExp"></a> OrbitIncrementsExp

```csharp
public ExpressionData OrbitIncrementsExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_Orbit_OrbitPosInTrueAnom"></a> OrbitPosInTrueAnom

```csharp
public int OrbitPosInTrueAnom { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_OrbitPositions"></a> OrbitPositions

```csharp
public DimensionalList<Angle> OrbitPositions { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### <a id="OpenTD_RadCAD_Orbit_OrbitType"></a> OrbitType

```csharp
public Orbit.OrbitTypes OrbitType { get; set; }
```

#### Property Value

 [Orbit](OpenTD.RadCAD.Orbit.md).[OrbitTypes](OpenTD.RadCAD.Orbit.OrbitTypes.md)

### <a id="OpenTD_RadCAD_Orbit_OrientType"></a> OrientType

```csharp
public Orbit.OrientTypes OrientType { get; set; }
```

#### Property Value

 [Orbit](OpenTD.RadCAD.Orbit.md).[OrientTypes](OpenTD.RadCAD.Orbit.OrientTypes.md)

### <a id="OpenTD_RadCAD_Orbit_Planet"></a> Planet

Starting in OpenTD 6.3, changing this value will update the parameters in PlanetData.

```csharp
public Orbit.Planets Planet { get; set; }
```

#### Property Value

 [Orbit](OpenTD.RadCAD.Orbit.md).[Planets](OpenTD.RadCAD.Orbit.Planets.md)

### <a id="OpenTD_RadCAD_Orbit_PlanetData"></a> PlanetData

```csharp
public PlanetParameters PlanetData { get; set; }
```

#### Property Value

 [PlanetParameters](OpenTD.RadCAD.PlanetParameters.md)

### <a id="OpenTD_RadCAD_Orbit_PlanetTempArray"></a> PlanetTempArray

```csharp
public DimensionalList<Temp> PlanetTempArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Temp](OpenTD.Dimension.Temp.md)\>

### <a id="OpenTD_RadCAD_Orbit_PlanetTimeArray"></a> PlanetTimeArray

```csharp
public DimensionalList<Time> PlanetTimeArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_RadCAD_Orbit_PlanetshineCS"></a> PlanetshineCS

```csharp
public int PlanetshineCS { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_PlanetshineLatLongData"></a> PlanetshineLatLongData

```csharp
public DimensionalList<Temp> PlanetshineLatLongData { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Temp](OpenTD.Dimension.Temp.md)\>

### <a id="OpenTD_RadCAD_Orbit_PlanetshineLatitudeDeg"></a> PlanetshineLatitudeDeg

```csharp
public List<double> PlanetshineLatitudeDeg { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="OpenTD_RadCAD_Orbit_PlanetshineLongitudeDeg"></a> PlanetshineLongitudeDeg

```csharp
public List<double> PlanetshineLongitudeDeg { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="OpenTD_RadCAD_Orbit_PlanetshineOption"></a> PlanetshineOption

```csharp
public int PlanetshineOption { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_PointingAxis"></a> PointingAxis

```csharp
public int PointingAxis { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_Rot1"></a> Rot1

```csharp
public Dimensional<Angle> Rot1 { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### <a id="OpenTD_RadCAD_Orbit_Rot1Axis"></a> Rot1Axis

```csharp
public int Rot1Axis { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_Rot1Exp"></a> Rot1Exp

```csharp
public ExpressionData Rot1Exp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_Orbit_Rot2"></a> Rot2

```csharp
public Dimensional<Angle> Rot2 { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### <a id="OpenTD_RadCAD_Orbit_Rot2Axis"></a> Rot2Axis

```csharp
public int Rot2Axis { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_Rot2Exp"></a> Rot2Exp

```csharp
public ExpressionData Rot2Exp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_Orbit_Rot3"></a> Rot3

```csharp
public Dimensional<Angle> Rot3 { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### <a id="OpenTD_RadCAD_Orbit_Rot3Axis"></a> Rot3Axis

```csharp
public int Rot3Axis { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_Rot3Exp"></a> Rot3Exp

```csharp
public ExpressionData Rot3Exp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_Orbit_SolarAngle"></a> SolarAngle

```csharp
public Dimensional<Angle> SolarAngle { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### <a id="OpenTD_RadCAD_Orbit_SolarAngleExp"></a> SolarAngleExp

```csharp
public ExpressionData SolarAngleExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_Orbit_SolarArray"></a> SolarArray

```csharp
public DimensionalList<Flux> SolarArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Flux](OpenTD.Dimension.Flux.md)\>

### <a id="OpenTD_RadCAD_Orbit_SolarFluxExp"></a> SolarFluxExp

```csharp
public ExpressionData SolarFluxExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_Orbit_SolarTimeArray"></a> SolarTimeArray

```csharp
public DimensionalList<Time> SolarTimeArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_RadCAD_Orbit_SpinAxis"></a> SpinAxis

```csharp
public Vector3d SpinAxis { get; set; }
```

#### Property Value

 [Vector3d](OpenTD.Vector3d.md)

### <a id="OpenTD_RadCAD_Orbit_SpinVehicle"></a> SpinVehicle

```csharp
public int SpinVehicle { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_StarDec"></a> StarDec

```csharp
public Dimensional<Angle> StarDec { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### <a id="OpenTD_RadCAD_Orbit_StarDecExp"></a> StarDecExp

```csharp
public ExpressionData StarDecExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_Orbit_StarRA"></a> StarRA

```csharp
public Dimensional<Angle> StarRA { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### <a id="OpenTD_RadCAD_Orbit_StarRAExp"></a> StarRAExp

```csharp
public ExpressionData StarRAExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_Orbit_StartAnomaly"></a> StartAnomaly

```csharp
public Dimensional<Angle> StartAnomaly { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### <a id="OpenTD_RadCAD_Orbit_StartAnomalyExp"></a> StartAnomalyExp

```csharp
public ExpressionData StartAnomalyExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_Orbit_SunSideTempExp"></a> SunSideTempExp

```csharp
public ExpressionData SunSideTempExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_Orbit_TerrAltArray"></a> TerrAltArray

```csharp
public DimensionalList<OrbitLength> TerrAltArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[OrbitLength](OpenTD.Dimension.OrbitLength.md)\>

### <a id="OpenTD_RadCAD_Orbit_TerrLatArrayDeg"></a> TerrLatArrayDeg

```csharp
public List<double> TerrLatArrayDeg { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="OpenTD_RadCAD_Orbit_TerrLongArrayDeg"></a> TerrLongArrayDeg

```csharp
public List<double> TerrLongArrayDeg { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="OpenTD_RadCAD_Orbit_TerrTimeArray"></a> TerrTimeArray

```csharp
public DimensionalList<Time> TerrTimeArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_RadCAD_Orbit_TerrZrotArrayDeg"></a> TerrZrotArrayDeg

```csharp
public List<double> TerrZrotArrayDeg { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="OpenTD_RadCAD_Orbit_UseAtmosphericAttenuation"></a> UseAtmosphericAttenuation

```csharp
public int UseAtmosphericAttenuation { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_UseDarkAndSunSide"></a> UseDarkAndSunSide

```csharp
public int UseDarkAndSunSide { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_UseEqualInc"></a> UseEqualInc

```csharp
public int UseEqualInc { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_UseRightAscensionsOrCalculateFromDate"></a> UseRightAscensionsOrCalculateFromDate

```csharp
public int UseRightAscensionsOrCalculateFromDate { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_UseTimeVaryDiffuseSkyIR"></a> UseTimeVaryDiffuseSkyIR

```csharp
public int UseTimeVaryDiffuseSkyIR { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_UseTimeVaryDiffuseSolar"></a> UseTimeVaryDiffuseSolar

```csharp
public int UseTimeVaryDiffuseSolar { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_UseTimeVarySolar"></a> UseTimeVarySolar

```csharp
public int UseTimeVarySolar { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit__Planet"></a> \_Planet

Do not use.

```csharp
public Orbit.Planets _Planet { get; set; }
```

#### Property Value

 [Orbit](OpenTD.RadCAD.Orbit.md).[Planets](OpenTD.RadCAD.Orbit.Planets.md)

## Methods

### <a id="OpenTD_RadCAD_Orbit_CheckData"></a> CheckData\(\)

```csharp
public void CheckData()
```

### <a id="OpenTD_RadCAD_Orbit_CreateIn_OpenTD_ThermalDesktop_"></a> CreateIn\(ThermalDesktop\)

Creates the TD entity in the specified TD instance.

```csharp
public override void CreateIn(ThermalDesktop td)
```

#### Parameters

`td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

### <a id="OpenTD_RadCAD_Orbit_Rename_System_String_"></a> Rename\(string\)

Renames both this client-side instance and the TD entity.

```csharp
public void Rename(string to)
```

#### Parameters

`to` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadCAD_Orbit_ToString"></a> ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

### <a id="OpenTD_RadCAD_Orbit_Update"></a> Update\(\)

Updates the TD entity with the latest client data.

```csharp
public override void Update()
```

## See Also

[ThermalDesktop](OpenTD.ThermalDesktop.md)

