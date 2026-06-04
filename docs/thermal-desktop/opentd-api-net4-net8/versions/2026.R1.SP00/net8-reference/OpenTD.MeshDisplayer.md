# Class MeshDisplayer

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Client-side representation of the TD base class that displays finite element
meshes.
Implements the <xref href="OpenTD.TdDbEntityData" data-throw-if-not-resolved="false"></xref>

```csharp
[MessagePackObject(true)]
[KnownType(typeof(FEMeshImporter))]
public class MeshDisplayer : TdDbEntityData, IUpdatable
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OpenTDObject](OpenTD.OpenTDObject.md) ← 
[DbObject](OpenTD.DbObject.md) ← 
[TdDbEntityData](OpenTD.TdDbEntityData.md) ← 
[MeshDisplayer](OpenTD.MeshDisplayer.md)

#### Derived

[DataMapper](OpenTD.PostProcessing.DataMapper.md), 
[FEMeshImporter](OpenTD.RadCAD.FEMeshImporter.md)

## Implements

[IUpdatable](OpenTD.IUpdatable.md)

## Inherited Members

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

### MeshDisplayer\(\)

```csharp
public MeshDisplayer()
```

## Properties

### BaseTrans

```csharp
public Matrix3d BaseTrans { get; set; }
```

#### Property Value

 [Matrix3d](OpenTD.Matrix3d.md)

### Label

```csharp
public string Label { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### LocalToWorldTransformation

```csharp
public Matrix3d LocalToWorldTransformation { get; }
```

#### Property Value

 [Matrix3d](OpenTD.Matrix3d.md)

### ModelViewDisplayMode

```csharp
public MeshDisplayerGraphicsMode ModelViewDisplayMode { get; set; }
```

#### Property Value

 [MeshDisplayerGraphicsMode](OpenTD.MeshDisplayerGraphicsMode.md)

### PostProcessingDisplayMode

```csharp
public MeshDisplayerGraphicsMode PostProcessingDisplayMode { get; set; }
```

#### Property Value

 [MeshDisplayerGraphicsMode](OpenTD.MeshDisplayerGraphicsMode.md)

### StressThermalGroupMap

Do not use.

```csharp
public Dictionary<string, StressThermalGroupAssociation> StressThermalGroupMap { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [StressThermalGroupAssociation](OpenTD.PostProcessing.StressThermalGroupAssociation.md)\>

## Methods

### GetThermalStressAssociations\(\)

Get list of post processing data mapper stress group to thermal group associations

```csharp
public List<StressThermalGroupAssociation> GetThermalStressAssociations()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[StressThermalGroupAssociation](OpenTD.PostProcessing.StressThermalGroupAssociation.md)\>

### SetThermalStressAssociation\(string, string\)

Set post processing data mapper stress group to thermal group association

```csharp
public void SetThermalStressAssociation(string stress, string thermal)
```

#### Parameters

`stress` [string](https://learn.microsoft.com/dotnet/api/system.string)

`thermal` [string](https://learn.microsoft.com/dotnet/api/system.string)

### SetThermalStressGradAssociation\(string, string\)

Set post processing data mapper stress group to thermal gradient group association

```csharp
public void SetThermalStressGradAssociation(string stress, string thermal)
```

#### Parameters

`stress` [string](https://learn.microsoft.com/dotnet/api/system.string)

`thermal` [string](https://learn.microsoft.com/dotnet/api/system.string)

### TransformBy\(Matrix3d\)

```csharp
public void TransformBy(Matrix3d x)
```

#### Parameters

`x` [Matrix3d](OpenTD.Matrix3d.md)

## See Also

[TdDbEntityData](OpenTD.TdDbEntityData.md), 
[FEMeshImporter](OpenTD.RadCAD.FEMeshImporter.md)


