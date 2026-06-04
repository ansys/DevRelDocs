#  Class ISO

Namespace: [VM.Models.FE.Mesh.Materials](VM.Models.FE.Mesh.Materials.md)  
Assembly: VM.Models.FE.Mesh.dll  

```csharp
[Table]
public class ISO : Material, IEntity
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Entity](VM.Models.FE.Mesh.Entity.md) ← 
[Material](VM.Models.FE.Mesh.Materials.Material.md) ← 
[ISO](VM.Models.FE.Mesh.Materials.ISO.md)

#### Implements

[IEntity](VM.Models.FE.Mesh.IEntity.md)

#### Inherited Members

[Material.Equals\(object\)](VM.Models.FE.Mesh.Materials.Material.md\#VM\_Models\_FE\_Mesh\_Materials\_Material\_Equals\_System\_Object\_), 
[Material.GetHashCode\(\)](VM.Models.FE.Mesh.Materials.Material.md\#VM\_Models\_FE\_Mesh\_Materials\_Material\_GetHashCode), 
[Material.Density](VM.Models.FE.Mesh.Materials.Material.md\#VM\_Models\_FE\_Mesh\_Materials\_Material\_Density), 
[Entity.Equals\(object\)](VM.Models.FE.Mesh.Entity.md\#VM\_Models\_FE\_Mesh\_Entity\_Equals\_System\_Object\_), 
[Entity.GetHashCode\(\)](VM.Models.FE.Mesh.Entity.md\#VM\_Models\_FE\_Mesh\_Entity\_GetHashCode), 
[Entity.FromByteArray<T\>\(byte\[\]\)](VM.Models.FE.Mesh.Entity.md\#VM\_Models\_FE\_Mesh\_Entity\_FromByteArray\_\_1\_System\_Byte\_\_\_), 
[Entity.ToByteArray<T\>\(T\)](VM.Models.FE.Mesh.Entity.md\#VM\_Models\_FE\_Mesh\_Entity\_ToByteArray\_\_1\_\_\_0\_), 
[Entity.Id](VM.Models.FE.Mesh.Entity.md\#VM\_Models\_FE\_Mesh\_Entity\_Id)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[BDFWriter.WriteToBDF\(ISO, TextWriter\)](VM.Models.FE.Mesh.Writer.BDFWriter.md\#VM\_Models\_FE\_Mesh\_Writer\_BDFWriter\_WriteToBDF\_VM\_Models\_FE\_Mesh\_Materials\_ISO\_System\_IO\_TextWriter\_)

## Constructors

### <a id="VM_Models_FE_Mesh_Materials_ISO__ctor"></a> ISO\(\)

```csharp
public ISO()
```

## Properties

### <a id="VM_Models_FE_Mesh_Materials_ISO_DampingRatio"></a> DampingRatio

```csharp
[Column]
public double DampingRatio { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_FE_Mesh_Materials_ISO_PoissonsRation"></a> PoissonsRation

```csharp
[Column]
public double PoissonsRation { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_FE_Mesh_Materials_ISO_ShearModulus"></a> ShearModulus

```csharp
[Column]
public double ShearModulus { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_FE_Mesh_Materials_ISO_YoungsModulus"></a> YoungsModulus

```csharp
[Column]
public double YoungsModulus { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### <a id="VM_Models_FE_Mesh_Materials_ISO_Equals_System_Object_"></a> Equals\(object\)

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_FE_Mesh_Materials_ISO_GetHashCode"></a> GetHashCode\(\)

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

