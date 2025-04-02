#  Class HasMultipleNodes

Namespace: [VM.Models.FE.Mesh](VM.Models.FE.Mesh.md)  
Assembly: VM.Models.FE.Mesh.dll  

```csharp
public class HasMultipleNodes : Entity, IEntity
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Entity](VM.Models.FE.Mesh.Entity.md) ← 
[HasMultipleNodes](VM.Models.FE.Mesh.HasMultipleNodes.md)

#### Derived

[RBE2](VM.Models.FE.Mesh.Elements.RBE2.md), 
[Set](VM.Models.FE.Mesh.Sets.Set.md)

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

### <a id="VM_Models_FE_Mesh_HasMultipleNodes__ctor"></a> HasMultipleNodes\(\)

```csharp
public HasMultipleNodes()
```

## Properties

### <a id="VM_Models_FE_Mesh_HasMultipleNodes_NodeIds"></a> NodeIds

```csharp
public int[] NodeIds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

## Methods

### <a id="VM_Models_FE_Mesh_HasMultipleNodes_Equals_System_Object_"></a> Equals\(object\)

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_FE_Mesh_HasMultipleNodes_GetHashCode"></a> GetHashCode\(\)

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

