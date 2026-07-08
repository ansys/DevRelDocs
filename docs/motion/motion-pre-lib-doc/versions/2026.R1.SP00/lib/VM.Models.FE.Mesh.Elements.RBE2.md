# Class RBE2
<a id="VM_Models_FE_Mesh_Elements_RBE2"></a>

Namespace: [VM.Models.FE.Mesh.Elements](VM.Models.FE.Mesh.Elements.md)  
Assembly: VM.Models.FE.Mesh.dll  

```csharp
[Table]
public class RBE2 : HasMultipleNodes, IEntity
```

#### Inheritance

object ← 
[Entity](VM.Models.FE.Mesh.Entity.md) ← 
[HasMultipleNodes](VM.Models.FE.Mesh.HasMultipleNodes.md) ← 
[RBE2](VM.Models.FE.Mesh.Elements.RBE2.md)

#### Implements

[IEntity](VM.Models.FE.Mesh.IEntity.md)

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
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[BDFWriter.WriteToBDF\(RBE2, TextWriter\)](VM.Models.FE.Mesh.Writer.BDFWriter.md\#VM\_Models\_FE\_Mesh\_Writer\_BDFWriter\_WriteToBDF\_VM\_Models\_FE\_Mesh\_Elements\_RBE2\_System\_IO\_TextWriter\_)

## Constructors

### <a id="VM_Models_FE_Mesh_Elements_RBE2__ctor"></a> RBE2\(\)

```csharp
public RBE2()
```

## Properties

### <a id="VM_Models_FE_Mesh_Elements_RBE2_MasterNodeId"></a> MasterNodeId

```csharp
[Column]
public int MasterNodeId { get; set; }
```

#### Property Value

 int

### <a id="VM_Models_FE_Mesh_Elements_RBE2_NodeIdsWrapper"></a> NodeIdsWrapper

```csharp
[Column]
public byte[] NodeIdsWrapper { get; set; }
```

#### Property Value

 byte\[\]

## Methods

### <a id="VM_Models_FE_Mesh_Elements_RBE2_Equals_System_Object_"></a> Equals\(object\)

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` object

#### Returns

 bool

### <a id="VM_Models_FE_Mesh_Elements_RBE2_GetHashCode"></a> GetHashCode\(\)

```csharp
public override int GetHashCode()
```

#### Returns

 int

