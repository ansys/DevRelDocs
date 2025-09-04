#  Class Set

Namespace: [VM.Models.FE.Mesh.Sets](VM.Models.FE.Mesh.Sets.md)  
Assembly: VM.Models.FE.Mesh.dll  

```csharp
public abstract class Set : HasMultipleNodes, IEntity, ISet
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Entity](VM.Models.FE.Mesh.Entity.md) ← 
[HasMultipleNodes](VM.Models.FE.Mesh.HasMultipleNodes.md) ← 
[Set](VM.Models.FE.Mesh.Sets.Set.md)

#### Derived

[ElementSet](VM.Models.FE.Mesh.Sets.ElementSet.md), 
[NodeSet](VM.Models.FE.Mesh.Sets.NodeSet.md), 
[PatchSet](VM.Models.FE.Mesh.Sets.PatchSet.md)

#### Implements

[IEntity](VM.Models.FE.Mesh.IEntity.md), 
[ISet](VM.Models.FE.Mesh.ISet.md)

#### Inherited Members

[HasMultipleNodes.Equals\(object\)](VM.Models.FE.Mesh.HasMultipleNodes.md\#VM\_Models\_FE\_Mesh\_HasMultipleNodes\_Equals\_System\_Object\_), 
[HasMultipleNodes.GetHashCode\(\)](VM.Models.FE.Mesh.HasMultipleNodes.md\#VM\_Models\_FE\_Mesh\_HasMultipleNodes\_GetHashCode), 
[HasMultipleNodes.NodeIds](VM.Models.FE.Mesh.HasMultipleNodes.md\#VM\_Models\_FE\_Mesh\_HasMultipleNodes\_NodeIds), 
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

### <a id="VM_Models_FE_Mesh_Sets_Set__ctor"></a> Set\(\)

```csharp
protected Set()
```

## Properties

### <a id="VM_Models_FE_Mesh_Sets_Set_ItemCount"></a> ItemCount

```csharp
public virtual int ItemCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

