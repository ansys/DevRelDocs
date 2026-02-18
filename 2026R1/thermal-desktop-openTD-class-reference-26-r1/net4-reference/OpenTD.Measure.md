# <a id="OpenTD_Measure"></a> Class Measure

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Client-side representation of a TD Measure object.

```csharp
[DataContract]
public class Measure : TdDbEntityData, IUpdatable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OpenTDObject](OpenTD.OpenTDObject.md) ← 
[DbObject](OpenTD.DbObject.md) ← 
[TdDbEntityData](OpenTD.TdDbEntityData.md) ← 
[Measure](OpenTD.Measure.md)

#### Implements

[IUpdatable](OpenTD.IUpdatable.md)

#### Inherited Members

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

### <a id="OpenTD_Measure__ctor"></a> Measure\(\)

```csharp
public Measure()
```

## Properties

### <a id="OpenTD_Measure_AllowMappingToXrefDomain"></a> AllowMappingToXrefDomain

```csharp
[DataMember]
public bool AllowMappingToXrefDomain { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Measure_Comment"></a> Comment

```csharp
[DataMember]
public string Comment { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Measure_Cond"></a> Cond

```csharp
[DataMember]
public Dimensional<Conductance> Cond { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Conductance](OpenTD.Dimension.Conductance.md)\>

### <a id="OpenTD_Measure_CondExp"></a> CondExp

```csharp
[DataMember]
public ExpressionData CondExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_Measure_DrawName"></a> DrawName

```csharp
[DataMember]
public bool DrawName { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Measure_Enabled"></a> Enabled

```csharp
[DataMember]
public int Enabled { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_Measure_EnabledExp"></a> EnabledExp

```csharp
[DataMember]
public ExpressionData EnabledExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_Measure_GroupName"></a> GroupName

```csharp
[DataMember]
public string GroupName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Measure_MapOption"></a> MapOption

```csharp
[DataMember]
public int MapOption { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_Measure_Name"></a> Name

```csharp
[DataMember]
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Measure_NodeId"></a> NodeId

```csharp
[DataMember]
public int NodeId { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_Measure_Origin"></a> Origin

```csharp
[DataMember]
public Point3d Origin { get; set; }
```

#### Property Value

 [Point3d](OpenTD.Point3d.md)

### <a id="OpenTD_Measure_OutputNode"></a> OutputNode

```csharp
[DataMember]
public bool OutputNode { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Measure_OutputRegister"></a> OutputRegister

```csharp
[DataMember]
public bool OutputRegister { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Measure_RegisterName"></a> RegisterName

```csharp
[DataMember]
public string RegisterName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Measure_Size"></a> Size

```csharp
[DataMember]
public Dimensional<ModelLength> Size { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### <a id="OpenTD_Measure_Submodel"></a> Submodel

```csharp
[DataMember]
public string Submodel { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Measure_ThermalMass"></a> ThermalMass

```csharp
[DataMember]
public Dimensional<ThermalMass> ThermalMass { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ThermalMass](OpenTD.Dimension.ThermalMass.md)\>

### <a id="OpenTD_Measure_ThermalMassExp"></a> ThermalMassExp

```csharp
[DataMember]
public ExpressionData ThermalMassExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_Measure_UseContactAndMass"></a> UseContactAndMass

```csharp
[DataMember]
public bool UseContactAndMass { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Measure_UseMLI"></a> UseMLI

```csharp
[DataMember]
public bool UseMLI { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Measure_ZAxis"></a> ZAxis

```csharp
public DimensionlessVector3d ZAxis { get; set; }
```

#### Property Value

 [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

### <a id="OpenTD_Measure__ZAxis"></a> \_ZAxis

Do not use.

```csharp
[DataMember]
public Vector3d _ZAxis { get; set; }
```

#### Property Value

 [Vector3d](OpenTD.Vector3d.md)

## Methods

### <a id="OpenTD_Measure_CreateIn_OpenTD_ThermalDesktop_"></a> CreateIn\(ThermalDesktop\)

Creates the TD entity in the specified TD instance.

```csharp
public override void CreateIn(ThermalDesktop td)
```

#### Parameters

`td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

### <a id="OpenTD_Measure_Update"></a> Update\(\)

Updates the TD entity with the latest client data.

```csharp
public override void Update()
```

### <a id="OpenTD_Measure_UpdateFromTD"></a> UpdateFromTD\(\)

Updates the client-side instance with the latest data from the TD entity.

```csharp
public override void UpdateFromTD()
```

