# Class Node
<a id="VM_Models_FE_Mesh_Node"></a>

Namespace: [VM.Models.FE.Mesh](VM.Models.FE.Mesh.md)  
Assembly: VM.Models.FE.Mesh.dll  

```csharp
[Table]
public class Node : Entity, IEntity
```

#### Inheritance

object ← 
[Entity](VM.Models.FE.Mesh.Entity.md) ← 
[Node](VM.Models.FE.Mesh.Node.md)

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
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[BDFWriter.WriteToBDF\(Node, TextWriter\)](VM.Models.FE.Mesh.Writer.BDFWriter.md\#VM\_Models\_FE\_Mesh\_Writer\_BDFWriter\_WriteToBDF\_VM\_Models\_FE\_Mesh\_Node\_System\_IO\_TextWriter\_)

## Constructors

### <a id="VM_Models_FE_Mesh_Node__ctor"></a> Node\(\)

```csharp
public Node()
```

## Properties

### <a id="VM_Models_FE_Mesh_Node_Position"></a> Position

```csharp
public Vector Position { get; set; }
```

#### Property Value

 Vector

### <a id="VM_Models_FE_Mesh_Node_X"></a> X

```csharp
[Column]
public double X { get; set; }
```

#### Property Value

 double

### <a id="VM_Models_FE_Mesh_Node_Y"></a> Y

```csharp
[Column]
public double Y { get; set; }
```

#### Property Value

 double

### <a id="VM_Models_FE_Mesh_Node_Z"></a> Z

```csharp
[Column]
public double Z { get; set; }
```

#### Property Value

 double

## Methods

### <a id="VM_Models_FE_Mesh_Node_Equals_System_Object_"></a> Equals\(object\)

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` object

#### Returns

 bool

### <a id="VM_Models_FE_Mesh_Node_GetHashCode"></a> GetHashCode\(\)

```csharp
public override int GetHashCode()
```

#### Returns

 int

