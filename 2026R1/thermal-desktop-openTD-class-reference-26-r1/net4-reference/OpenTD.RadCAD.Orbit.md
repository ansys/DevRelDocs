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
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="OpenTD_RadCAD_Orbit__ctor"></a> Orbit\(\)

```csharp
public Orbit()
```

## Properties

### <a id="OpenTD_RadCAD_Orbit_AlbedoArray"></a> AlbedoArray

```csharp
[DataMember]
public List<double> AlbedoArray { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="OpenTD_RadCAD_Orbit_AlbedoExp"></a> AlbedoExp

```csharp
[DataMember]
public ExpressionData AlbedoExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_Orbit_AlbedoLatLongData"></a> AlbedoLatLongData

```csharp
[DataMember]
public List<double> AlbedoLatLongData { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="OpenTD_RadCAD_Orbit_AlbedoLatitudeDeg"></a> AlbedoLatitudeDeg

```csharp
[DataMember]
public List<double> AlbedoLatitudeDeg { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="OpenTD_RadCAD_Orbit_AlbedoLongitudeDeg"></a> AlbedoLongitudeDeg

```csharp
[DataMember]
public List<double> AlbedoLongitudeDeg { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="OpenTD_RadCAD_Orbit_AlbedoOption"></a> AlbedoOption

```csharp
[DataMember]
public int AlbedoOption { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_AlbedoTimeArray"></a> AlbedoTimeArray

```csharp
[DataMember]
public DimensionalList<Time> AlbedoTimeArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_RadCAD_Orbit_AlignToCCS"></a> AlignToCCS

```csharp
[DataMember]
public bool AlignToCCS { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_RadCAD_Orbit_AtmosphericAttenuation"></a> AtmosphericAttenuation

```csharp
[DataMember]
public double AtmosphericAttenuation { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadCAD_Orbit_AtmosphericAttenuationExp"></a> AtmosphericAttenuationExp

```csharp
[DataMember]
public ExpressionData AtmosphericAttenuationExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_Orbit_CelestRot1Array"></a> CelestRot1Array

```csharp
[DataMember]
public DimensionalList<Angle> CelestRot1Array { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### <a id="OpenTD_RadCAD_Orbit_CelestRot1Axis"></a> CelestRot1Axis

```csharp
[DataMember]
public int CelestRot1Axis { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_CelestRot2Array"></a> CelestRot2Array

```csharp
[DataMember]
public DimensionalList<Angle> CelestRot2Array { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### <a id="OpenTD_RadCAD_Orbit_CelestRot2Axis"></a> CelestRot2Axis

```csharp
[DataMember]
public int CelestRot2Axis { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_CelestRot3Array"></a> CelestRot3Array

```csharp
[DataMember]
public DimensionalList<Angle> CelestRot3Array { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### <a id="OpenTD_RadCAD_Orbit_CelestRot3Axis"></a> CelestRot3Axis

```csharp
[DataMember]
public int CelestRot3Axis { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_CelestTimeArray"></a> CelestTimeArray

```csharp
[DataMember]
public DimensionalList<Time> CelestTimeArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_RadCAD_Orbit_CelestXArray"></a> CelestXArray

```csharp
[DataMember]
public DimensionalList<OrbitLength> CelestXArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[OrbitLength](OpenTD.Dimension.OrbitLength.md)\>

### <a id="OpenTD_RadCAD_Orbit_CelestYArray"></a> CelestYArray

```csharp
[DataMember]
public DimensionalList<OrbitLength> CelestYArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[OrbitLength](OpenTD.Dimension.OrbitLength.md)\>

### <a id="OpenTD_RadCAD_Orbit_CelestZArray"></a> CelestZArray

```csharp
[DataMember]
public DimensionalList<OrbitLength> CelestZArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[OrbitLength](OpenTD.Dimension.OrbitLength.md)\>

### <a id="OpenTD_RadCAD_Orbit_CloudinessFactor"></a> CloudinessFactor

```csharp
[DataMember]
public double CloudinessFactor { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadCAD_Orbit_CloudinessFactorExp"></a> CloudinessFactorExp

```csharp
[DataMember]
public ExpressionData CloudinessFactorExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_Orbit_Comment"></a> Comment

```csharp
[DataMember]
public string Comment { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadCAD_Orbit_ConstraintAxis"></a> ConstraintAxis

```csharp
[DataMember]
public int ConstraintAxis { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_ConstraintStarDec"></a> ConstraintStarDec

```csharp
[DataMember]
public Dimensional<Angle> ConstraintStarDec { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### <a id="OpenTD_RadCAD_Orbit_ConstraintStarDecExp"></a> ConstraintStarDecExp

```csharp
[DataMember]
public ExpressionData ConstraintStarDecExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_Orbit_ConstraintStarRA"></a> ConstraintStarRA

```csharp
[DataMember]
public Dimensional<Angle> ConstraintStarRA { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### <a id="OpenTD_RadCAD_Orbit_ConstraintStarRAExp"></a> ConstraintStarRAExp

```csharp
[DataMember]
public ExpressionData ConstraintStarRAExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_Orbit_ConstraintType"></a> ConstraintType

```csharp
[DataMember]
public Orbit.OrientTypes ConstraintType { get; set; }
```

#### Property Value

 [Orbit](OpenTD.RadCAD.Orbit.md).[OrientTypes](OpenTD.RadCAD.Orbit.OrientTypes.md)

### <a id="OpenTD_RadCAD_Orbit_DarkSideTempExp"></a> DarkSideTempExp

```csharp
[DataMember]
public ExpressionData DarkSideTempExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_Orbit_DiffuseSkyIRArray"></a> DiffuseSkyIRArray

In previous versions of OpenTD, this was erroneously identified as a
list of fluxes. It is actually a list of temperatures.

```csharp
[DataMember]
public DimensionalList<Temp> DiffuseSkyIRArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Temp](OpenTD.Dimension.Temp.md)\>

### <a id="OpenTD_RadCAD_Orbit_DiffuseSkyIRTemp"></a> DiffuseSkyIRTemp

```csharp
[DataMember]
public Dimensional<Temp> DiffuseSkyIRTemp { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Temp](OpenTD.Dimension.Temp.md)\>

### <a id="OpenTD_RadCAD_Orbit_DiffuseSkyIRTempExp"></a> DiffuseSkyIRTempExp

```csharp
[DataMember]
public ExpressionData DiffuseSkyIRTempExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_Orbit_DiffuseSkyIRTimeArray"></a> DiffuseSkyIRTimeArray

```csharp
[DataMember]
public DimensionalList<Time> DiffuseSkyIRTimeArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_RadCAD_Orbit_DiffuseSkySolarScatteringFraction"></a> DiffuseSkySolarScatteringFraction

```csharp
[DataMember]
public double DiffuseSkySolarScatteringFraction { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadCAD_Orbit_DiffuseSkySolarScatteringFractionExp"></a> DiffuseSkySolarScatteringFractionExp

```csharp
[DataMember]
public ExpressionData DiffuseSkySolarScatteringFractionExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_Orbit_DiffuseSolarArray"></a> DiffuseSolarArray

```csharp
[DataMember]
public DimensionalList<Flux> DiffuseSolarArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Flux](OpenTD.Dimension.Flux.md)\>

### <a id="OpenTD_RadCAD_Orbit_DiffuseSolarFlux"></a> DiffuseSolarFlux

```csharp
[DataMember]
public Dimensional<Flux> DiffuseSolarFlux { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Flux](OpenTD.Dimension.Flux.md)\>

### <a id="OpenTD_RadCAD_Orbit_DiffuseSolarFluxExp"></a> DiffuseSolarFluxExp

```csharp
[DataMember]
public ExpressionData DiffuseSolarFluxExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_Orbit_DiffuseSolarTimeArray"></a> DiffuseSolarTimeArray

```csharp
[DataMember]
public DimensionalList<Time> DiffuseSolarTimeArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_RadCAD_Orbit_DisplayPlanetTempOrFlux"></a> DisplayPlanetTempOrFlux

```csharp
[DataMember]
public int DisplayPlanetTempOrFlux { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_DisplaySkyIRTempOrFlux"></a> DisplaySkyIRTempOrFlux

```csharp
[DataMember]
public int DisplaySkyIRTempOrFlux { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_EndAnomaly"></a> EndAnomaly

```csharp
[DataMember]
public Dimensional<Angle> EndAnomaly { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### <a id="OpenTD_RadCAD_Orbit_EndAnomalyExp"></a> EndAnomalyExp

```csharp
[DataMember]
public ExpressionData EndAnomalyExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_Orbit_GroundEmissivity"></a> GroundEmissivity

```csharp
[DataMember]
public double GroundEmissivity { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadCAD_Orbit_GroundTemperatureMode"></a> GroundTemperatureMode

```csharp
[DataMember]
public int GroundTemperatureMode { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_HrOrbitRadiusArray"></a> HrOrbitRadiusArray

```csharp
[DataMember]
public List<double> HrOrbitRadiusArray { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="OpenTD_RadCAD_Orbit_HrPlanetVecArray"></a> HrPlanetVecArray

```csharp
[DataMember]
public List<Vector3d> HrPlanetVecArray { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Vector3d](OpenTD.Vector3d.md)\>

### <a id="OpenTD_RadCAD_Orbit_HrSpeedArray"></a> HrSpeedArray

```csharp
[DataMember]
public DimensionalList<OrbitVelocity> HrSpeedArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[OrbitVelocity](OpenTD.Dimension.OrbitVelocity.md)\>

### <a id="OpenTD_RadCAD_Orbit_HrSunVecArray"></a> HrSunVecArray

```csharp
[DataMember]
public List<Vector3d> HrSunVecArray { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Vector3d](OpenTD.Vector3d.md)\>

### <a id="OpenTD_RadCAD_Orbit_HrTimeArray"></a> HrTimeArray

```csharp
[DataMember]
public DimensionalList<Time> HrTimeArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_RadCAD_Orbit_HrVelocityVecArray"></a> HrVelocityVecArray

```csharp
[DataMember]
public List<Vector3d> HrVelocityVecArray { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Vector3d](OpenTD.Vector3d.md)\>

### <a id="OpenTD_RadCAD_Orbit_IncludeShadows"></a> IncludeShadows

```csharp
[DataMember]
public int IncludeShadows { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_LinkedOrbitName"></a> LinkedOrbitName

```csharp
[DataMember]
public string LinkedOrbitName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadCAD_Orbit_Name"></a> Name

```csharp
[DataMember]
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadCAD_Orbit_OrbitData"></a> OrbitData

```csharp
[DataMember]
public OrbitParameters OrbitData { get; set; }
```

#### Property Value

 [OrbitParameters](OpenTD.RadCAD.OrbitParameters.md)

### <a id="OpenTD_RadCAD_Orbit_OrbitDateTime"></a> OrbitDateTime

```csharp
[DataMember]
public OrbitDateTime OrbitDateTime { get; set; }
```

#### Property Value

 [OrbitDateTime](OpenTD.RadCAD.OrbitDateTime.md)

### <a id="OpenTD_RadCAD_Orbit_OrbitIncrements"></a> OrbitIncrements

```csharp
[DataMember]
public int OrbitIncrements { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_OrbitIncrementsExp"></a> OrbitIncrementsExp

```csharp
[DataMember]
public ExpressionData OrbitIncrementsExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_Orbit_OrbitPosInTrueAnom"></a> OrbitPosInTrueAnom

```csharp
[DataMember]
public int OrbitPosInTrueAnom { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_OrbitPositions"></a> OrbitPositions

```csharp
[DataMember]
public DimensionalList<Angle> OrbitPositions { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### <a id="OpenTD_RadCAD_Orbit_OrbitType"></a> OrbitType

```csharp
[DataMember]
public Orbit.OrbitTypes OrbitType { get; set; }
```

#### Property Value

 [Orbit](OpenTD.RadCAD.Orbit.md).[OrbitTypes](OpenTD.RadCAD.Orbit.OrbitTypes.md)

### <a id="OpenTD_RadCAD_Orbit_OrientType"></a> OrientType

```csharp
[DataMember]
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
[DataMember]
public PlanetParameters PlanetData { get; set; }
```

#### Property Value

 [PlanetParameters](OpenTD.RadCAD.PlanetParameters.md)

### <a id="OpenTD_RadCAD_Orbit_PlanetTempArray"></a> PlanetTempArray

```csharp
[DataMember]
public DimensionalList<Temp> PlanetTempArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Temp](OpenTD.Dimension.Temp.md)\>

### <a id="OpenTD_RadCAD_Orbit_PlanetTimeArray"></a> PlanetTimeArray

```csharp
[DataMember]
public DimensionalList<Time> PlanetTimeArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_RadCAD_Orbit_PlanetshineCS"></a> PlanetshineCS

```csharp
[DataMember]
public int PlanetshineCS { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_PlanetshineLatLongData"></a> PlanetshineLatLongData

```csharp
[DataMember]
public DimensionalList<Temp> PlanetshineLatLongData { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Temp](OpenTD.Dimension.Temp.md)\>

### <a id="OpenTD_RadCAD_Orbit_PlanetshineLatitudeDeg"></a> PlanetshineLatitudeDeg

```csharp
[DataMember]
public List<double> PlanetshineLatitudeDeg { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="OpenTD_RadCAD_Orbit_PlanetshineLongitudeDeg"></a> PlanetshineLongitudeDeg

```csharp
[DataMember]
public List<double> PlanetshineLongitudeDeg { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="OpenTD_RadCAD_Orbit_PlanetshineOption"></a> PlanetshineOption

```csharp
[DataMember]
public int PlanetshineOption { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_PointingAxis"></a> PointingAxis

```csharp
[DataMember]
public int PointingAxis { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_Rot1"></a> Rot1

```csharp
[DataMember]
public Dimensional<Angle> Rot1 { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### <a id="OpenTD_RadCAD_Orbit_Rot1Axis"></a> Rot1Axis

```csharp
[DataMember]
public int Rot1Axis { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_Rot1Exp"></a> Rot1Exp

```csharp
[DataMember]
public ExpressionData Rot1Exp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_Orbit_Rot2"></a> Rot2

```csharp
[DataMember]
public Dimensional<Angle> Rot2 { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### <a id="OpenTD_RadCAD_Orbit_Rot2Axis"></a> Rot2Axis

```csharp
[DataMember]
public int Rot2Axis { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_Rot2Exp"></a> Rot2Exp

```csharp
[DataMember]
public ExpressionData Rot2Exp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_Orbit_Rot3"></a> Rot3

```csharp
[DataMember]
public Dimensional<Angle> Rot3 { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### <a id="OpenTD_RadCAD_Orbit_Rot3Axis"></a> Rot3Axis

```csharp
[DataMember]
public int Rot3Axis { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_Rot3Exp"></a> Rot3Exp

```csharp
[DataMember]
public ExpressionData Rot3Exp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_Orbit_SolarAngle"></a> SolarAngle

```csharp
[DataMember]
public Dimensional<Angle> SolarAngle { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### <a id="OpenTD_RadCAD_Orbit_SolarAngleExp"></a> SolarAngleExp

```csharp
[DataMember]
public ExpressionData SolarAngleExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_Orbit_SolarArray"></a> SolarArray

```csharp
[DataMember]
public DimensionalList<Flux> SolarArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Flux](OpenTD.Dimension.Flux.md)\>

### <a id="OpenTD_RadCAD_Orbit_SolarFluxExp"></a> SolarFluxExp

```csharp
[DataMember]
public ExpressionData SolarFluxExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_Orbit_SolarTimeArray"></a> SolarTimeArray

```csharp
[DataMember]
public DimensionalList<Time> SolarTimeArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_RadCAD_Orbit_SpinAxis"></a> SpinAxis

```csharp
[DataMember]
public Vector3d SpinAxis { get; set; }
```

#### Property Value

 [Vector3d](OpenTD.Vector3d.md)

### <a id="OpenTD_RadCAD_Orbit_SpinVehicle"></a> SpinVehicle

```csharp
[DataMember]
public int SpinVehicle { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_StarDec"></a> StarDec

```csharp
[DataMember]
public Dimensional<Angle> StarDec { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### <a id="OpenTD_RadCAD_Orbit_StarDecExp"></a> StarDecExp

```csharp
[DataMember]
public ExpressionData StarDecExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_Orbit_StarRA"></a> StarRA

```csharp
[DataMember]
public Dimensional<Angle> StarRA { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### <a id="OpenTD_RadCAD_Orbit_StarRAExp"></a> StarRAExp

```csharp
[DataMember]
public ExpressionData StarRAExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_Orbit_StartAnomaly"></a> StartAnomaly

```csharp
[DataMember]
public Dimensional<Angle> StartAnomaly { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### <a id="OpenTD_RadCAD_Orbit_StartAnomalyExp"></a> StartAnomalyExp

```csharp
[DataMember]
public ExpressionData StartAnomalyExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_Orbit_SunSideTempExp"></a> SunSideTempExp

```csharp
[DataMember]
public ExpressionData SunSideTempExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_Orbit_TerrAltArray"></a> TerrAltArray

```csharp
[DataMember]
public DimensionalList<OrbitLength> TerrAltArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[OrbitLength](OpenTD.Dimension.OrbitLength.md)\>

### <a id="OpenTD_RadCAD_Orbit_TerrLatArrayDeg"></a> TerrLatArrayDeg

```csharp
[DataMember]
public List<double> TerrLatArrayDeg { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="OpenTD_RadCAD_Orbit_TerrLongArrayDeg"></a> TerrLongArrayDeg

```csharp
[DataMember]
public List<double> TerrLongArrayDeg { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="OpenTD_RadCAD_Orbit_TerrTimeArray"></a> TerrTimeArray

```csharp
[DataMember]
public DimensionalList<Time> TerrTimeArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_RadCAD_Orbit_TerrZrotArrayDeg"></a> TerrZrotArrayDeg

```csharp
[DataMember]
public List<double> TerrZrotArrayDeg { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="OpenTD_RadCAD_Orbit_UseAtmosphericAttenuation"></a> UseAtmosphericAttenuation

```csharp
[DataMember]
public int UseAtmosphericAttenuation { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_UseDarkAndSunSide"></a> UseDarkAndSunSide

```csharp
[DataMember]
public int UseDarkAndSunSide { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_UseEqualInc"></a> UseEqualInc

```csharp
[DataMember]
public int UseEqualInc { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_UseRightAscensionsOrCalculateFromDate"></a> UseRightAscensionsOrCalculateFromDate

```csharp
[DataMember]
public int UseRightAscensionsOrCalculateFromDate { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_UseTimeVaryDiffuseSkyIR"></a> UseTimeVaryDiffuseSkyIR

```csharp
[DataMember]
public int UseTimeVaryDiffuseSkyIR { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_UseTimeVaryDiffuseSolar"></a> UseTimeVaryDiffuseSolar

```csharp
[DataMember]
public int UseTimeVaryDiffuseSolar { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit_UseTimeVarySolar"></a> UseTimeVarySolar

```csharp
[DataMember]
public int UseTimeVarySolar { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_Orbit__Planet"></a> \_Planet

Do not use.

```csharp
[DataMember]
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

