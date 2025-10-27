# Class Material
<a id="VM_Models_FE_Mesh_Materials_Material"></a>

Namespace: [VM.Models.FE.Mesh.Materials](VM.Models.FE.Mesh.Materials.md)  
Assembly: VM.Models.FE.Mesh.dll  

```csharp
public abstract class Material : Entity, IEntity
```

#### Inheritance

object ← 
[Entity](VM.Models.FE.Mesh.Entity.md) ← 
[Material](VM.Models.FE.Mesh.Materials.Material.md)

#### Derived

[ISO](VM.Models.FE.Mesh.Materials.ISO.md)

#### Implements

[IEntity](VM.Models.FE.Mesh.IEntity.md)

#### Inherited Members

[Entity.Equals\(object\)](VM.Models.FE.Mesh.Entity.md\#VM\_Models\_FE\_Mesh\_Entity\_Equals\_System\_Object\_), 
[Entity.GetHashCode\(\)](VM.Models.FE.Mesh.Entity.md\#VM\_Models\_FE\_Mesh\_Entity\_GetHashCode), 
[Entity.FromByteArray<T\>\(byte\[\]\)](VM.Models.FE.Mesh.Entity.md\#VM\_Models\_FE\_Mesh\_Entity\_FromByteArray\_\_1\_System\_Byte\_\_\_), 
[Entity.ToByteArray<T\>\(T\)](VM.Models.FE.Mesh.Entity.md\#VM\_Models\_FE\_Mesh\_Entity\_ToByteArray\_\_1\_\_\_0\_), 
[Entity.Id](VM.Models.FE.Mesh.Entity.md\#VM\_Models\_FE\_Mesh\_Entity\_Id)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_FE_Mesh_Materials_Material__ctor"></a> Material\(\)

```csharp
protected Material()
```

## Properties

### <a id="VM_Models_FE_Mesh_Materials_Material_Density"></a> Density

```csharp
[Column]
public double Density { get; set; }
```

#### Property Value

 double

## Methods

### <a id="VM_Models_FE_Mesh_Materials_Material_Equals_System_Object_"></a> Equals\(object\)

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` object

#### Returns

 bool

### <a id="VM_Models_FE_Mesh_Materials_Material_GetHashCode"></a> GetHashCode\(\)

```csharp
public override int GetHashCode()
```

#### Returns

 int

