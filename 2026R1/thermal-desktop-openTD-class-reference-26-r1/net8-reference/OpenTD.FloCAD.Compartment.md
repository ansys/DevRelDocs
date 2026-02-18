# <a id="OpenTD_FloCAD_Compartment"></a> Class Compartment

Namespace: [OpenTD.FloCAD](OpenTD.FloCAD.md)  
Assembly: OpenTD.dll  

Client-side representation of a Compartment entity in a TD instance.

```csharp
public class Compartment : TdDbEntityData, IUpdatable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OpenTDObject](OpenTD.OpenTDObject.md) ← 
[DbObject](OpenTD.DbObject.md) ← 
[TdDbEntityData](OpenTD.TdDbEntityData.md) ← 
[Compartment](OpenTD.FloCAD.Compartment.md)

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
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_FloCAD_Compartment__ctor"></a> Compartment\(\)

```csharp
public Compartment()
```

## Properties

### <a id="OpenTD_FloCAD_Compartment_Bays"></a> Bays

```csharp
public List<Bay> Bays { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Bay](OpenTD.FloCAD.Bay.md)\>

### <a id="OpenTD_FloCAD_Compartment_Comment"></a> Comment

```csharp
public string Comment { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_FloCAD_Compartment_CompartmentId"></a> CompartmentId

```csharp
public int CompartmentId { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_FloCAD_Compartment_Enabled"></a> Enabled

```csharp
public int Enabled { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_FloCAD_Compartment_EnabledExp"></a> EnabledExp

```csharp
public ExpressionData EnabledExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_FloCAD_Compartment_LiquidColor"></a> LiquidColor

```csharp
public int LiquidColor { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_FloCAD_Compartment_LumpHandle"></a> LumpHandle

```csharp
public string LumpHandle { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_FloCAD_Compartment_PackingFactor"></a> PackingFactor

```csharp
public double PackingFactor { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_FloCAD_Compartment_PackingFactorExp"></a> PackingFactorExp

```csharp
public ExpressionData PackingFactorExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_FloCAD_Compartment_ShowIds"></a> ShowIds

```csharp
public bool ShowIds { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_FloCAD_Compartment_ShowLV"></a> ShowLV

```csharp
public int ShowLV { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_FloCAD_Compartment_ShowLVExp"></a> ShowLVExp

```csharp
public ExpressionData ShowLVExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_FloCAD_Compartment_ShowSelectionRing"></a> ShowSelectionRing

```csharp
public int ShowSelectionRing { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_FloCAD_Compartment_ShowSelectionRingExp"></a> ShowSelectionRingExp

```csharp
public ExpressionData ShowSelectionRingExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_FloCAD_Compartment_Ties"></a> Ties

```csharp
public List<CompartmentTie> Ties { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[CompartmentTie](OpenTD.FloCAD.CompartmentTie.md)\>

### <a id="OpenTD_FloCAD_Compartment_TwinLump"></a> TwinLump

```csharp
public int TwinLump { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_FloCAD_Compartment__LumpHandle"></a> \_LumpHandle

Do not use.

```csharp
public string _LumpHandle { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="OpenTD_FloCAD_Compartment_CreateIn_OpenTD_ThermalDesktop_"></a> CreateIn\(ThermalDesktop\)

Creates the TD entity in the specified TD instance.

```csharp
public override void CreateIn(ThermalDesktop td)
```

#### Parameters

`td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

### <a id="OpenTD_FloCAD_Compartment_ToString"></a> ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

### <a id="OpenTD_FloCAD_Compartment_Update"></a> Update\(\)

Updates the TD entity with the latest client data.

```csharp
public override void Update()
```

### <a id="OpenTD_FloCAD_Compartment_UpdateFromTD"></a> UpdateFromTD\(\)

Updates the client-side instance with the latest data from the TD entity.

```csharp
public override void UpdateFromTD()
```

## See Also

[ThermalDesktop](OpenTD.ThermalDesktop.md)

