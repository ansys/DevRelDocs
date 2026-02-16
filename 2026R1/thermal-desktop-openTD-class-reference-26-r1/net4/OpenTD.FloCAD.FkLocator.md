# <a id="OpenTD_FloCAD_FkLocator"></a> Class FkLocator

Namespace: [OpenTD.FloCAD](OpenTD.FloCAD.md)  
Assembly: OpenTD.dll  

Client-side representation of an FkLocator entity in a TD instance.

```csharp
[DataContract]
public class FkLocator : Port, IUpdatable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OpenTDObject](OpenTD.OpenTDObject.md) ← 
[DbObject](OpenTD.DbObject.md) ← 
[TdDbEntityData](OpenTD.TdDbEntityData.md) ← 
RcPortData ← 
[Port](OpenTD.FloCAD.Port.md) ← 
[FkLocator](OpenTD.FloCAD.FkLocator.md)

#### Implements

[IUpdatable](OpenTD.IUpdatable.md)

#### Inherited Members

[Port.Update\(\)](OpenTD.FloCAD.Port.md\#OpenTD\_FloCAD\_Port\_Update), 
[Port.CreateIn\(ThermalDesktop\)](OpenTD.FloCAD.Port.md\#OpenTD\_FloCAD\_Port\_CreateIn\_OpenTD\_ThermalDesktop\_), 
[TdDbEntityData.SetFrom\(TdDbEntityData\)](OpenTD.TdDbEntityData.md\#OpenTD\_TdDbEntityData\_SetFrom\_OpenTD\_TdDbEntityData\_), 
[TdDbEntityData.Layer](OpenTD.TdDbEntityData.md\#OpenTD\_TdDbEntityData\_Layer), 
[TdDbEntityData.ColorIndex](OpenTD.TdDbEntityData.md\#OpenTD\_TdDbEntityData\_ColorIndex), 
[TdDbEntityData.ToString\(string, string, string\)](OpenTD.TdDbEntityData.md\#OpenTD\_TdDbEntityData\_ToString\_System\_String\_System\_String\_System\_String\_), 
[TdDbEntityData.ToString\(string, int, string\)](OpenTD.TdDbEntityData.md\#OpenTD\_TdDbEntityData\_ToString\_System\_String\_System\_Int32\_System\_String\_), 
[TdDbEntityData.ToString\(\)](OpenTD.TdDbEntityData.md\#OpenTD\_TdDbEntityData\_ToString), 
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

### <a id="OpenTD_FloCAD_FkLocator__ctor"></a> FkLocator\(\)

```csharp
public FkLocator()
```

## Properties

### <a id="OpenTD_FloCAD_FkLocator_Anchor"></a> Anchor

```csharp
[DataMember]
public bool Anchor { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_FloCAD_FkLocator_ApplyAfth"></a> ApplyAfth

```csharp
[DataMember]
public bool ApplyAfth { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_FloCAD_FkLocator_Inlet"></a> Inlet

```csharp
[DataMember]
public bool Inlet { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_FloCAD_FkLocator_LossCoefficient"></a> LossCoefficient

```csharp
[DataMember]
public double LossCoefficient { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_FloCAD_FkLocator_LossCoefficientExp"></a> LossCoefficientExp

```csharp
[DataMember]
public ExpressionData LossCoefficientExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_FloCAD_FkLocator_Outlet"></a> Outlet

```csharp
[DataMember]
public bool Outlet { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_FloCAD_FkLocator_PathFrac"></a> PathFrac

```csharp
[DataMember]
public double PathFrac { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_FloCAD_FkLocator_PathFracExp"></a> PathFracExp

```csharp
[DataMember]
public ExpressionData PathFracExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_FloCAD_FkLocator_UseFkCalc"></a> UseFkCalc

```csharp
[DataMember]
public bool UseFkCalc { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="OpenTD_FloCAD_FkLocator_CreateIn_OpenTD_ThermalDesktop_"></a> CreateIn\(ThermalDesktop\)

Creates the TD entity in the specified TD instance.

```csharp
public override void CreateIn(ThermalDesktop td)
```

#### Parameters

`td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

### <a id="OpenTD_FloCAD_FkLocator_Update"></a> Update\(\)

Updates the TD entity with the latest client data.

```csharp
public override void Update()
```

## See Also

[ThermalDesktop](OpenTD.ThermalDesktop.md)

