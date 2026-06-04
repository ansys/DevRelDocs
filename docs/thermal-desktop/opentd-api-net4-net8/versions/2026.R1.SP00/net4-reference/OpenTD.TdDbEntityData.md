# Class TdDbEntityData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Base class for objects sorted on AutoCAD layers.

```csharp
[DataContract]
public class TdDbEntityData : DbObject, IUpdatable
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OpenTDObject](OpenTD.OpenTDObject.md) ← 
[DbObject](OpenTD.DbObject.md) ← 
[TdDbEntityData](OpenTD.TdDbEntityData.md)

#### Derived

[AcEllipse](OpenTD.AcEllipse.md), 
[Arc](OpenTD.Arc.md), 
[Circle](OpenTD.Circle.md), 
[Compartment](OpenTD.FloCAD.Compartment.md), 
[Helix](OpenTD.Helix.md), 
[Measure](OpenTD.Measure.md), 
[MeshDisplayer](OpenTD.MeshDisplayer.md), 
[Polyline](OpenTD.Polyline.md), 
[Polyline3d](OpenTD.Polyline3d.md), 
[PressureLoad](OpenTD.PressureLoad.md), 
[RcEntityData](OpenTD.RadCAD.RcEntityData.md), 
[RcFdSolidData](OpenTD.RadCAD.FdSolid.RcFdSolidData.md), 
[RcSolidElement](OpenTD.RadCAD.FEM.RcSolidElement.md), 
[Spline](OpenTD.Spline.md)

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

### TdDbEntityData\(\)

```csharp
public TdDbEntityData()
```

### TdDbEntityData\(string\)

```csharp
public TdDbEntityData(string _Handle)
```

#### Parameters

`_Handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### ColorIndex

Specifies a color. See the AutoCAD Layer Properties Manager for valid values.

```csharp
[DataMember]
public int ColorIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Layer

```csharp
[DataMember]
public string Layer { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### SetFrom\(TdDbEntityData\)

```csharp
public void SetFrom(TdDbEntityData x)
```

#### Parameters

`x` [TdDbEntityData](OpenTD.TdDbEntityData.md)

### ToString\(string, string, string\)

```csharp
protected string ToString(string Submodel, string Id, string Comment)
```

#### Parameters

`Submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

`Id` [string](https://learn.microsoft.com/dotnet/api/system.string)

`Comment` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ToString\(string, int, string\)

```csharp
protected string ToString(string Submodel, int Id, string Comment)
```

#### Parameters

`Submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

`Id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`Comment` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

## See Also

[DbObject](OpenTD.DbObject.md)


