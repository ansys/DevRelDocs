#  Class Element2Nodes

Namespace: [VM.Models.FE.Mesh.Elements](VM.Models.FE.Mesh.Elements.md)  
Assembly: VM.Models.FE.Mesh.dll  

```csharp
public abstract class Element2Nodes : Element, IEntity
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Entity](VM.Models.FE.Mesh.Entity.md) ← 
[Element](VM.Models.FE.Mesh.Elements.Element.md) ← 
[Element2Nodes](VM.Models.FE.Mesh.Elements.Element2Nodes.md)

#### Derived

[Beam2](VM.Models.FE.Mesh.Elements.Beam2.md), 
[Element3Nodes](VM.Models.FE.Mesh.Elements.Element3Nodes.md)

#### Implements

[IEntity](VM.Models.FE.Mesh.IEntity.md)

#### Inherited Members

[Element.Equals\(object\)](VM.Models.FE.Mesh.Elements.Element.md\#VM\_Models\_FE\_Mesh\_Elements\_Element\_Equals\_System\_Object\_), 
[Element.ElementType](VM.Models.FE.Mesh.Elements.Element.md\#VM\_Models\_FE\_Mesh\_Elements\_Element\_ElementType), 
[Element.Node1Id](VM.Models.FE.Mesh.Elements.Element.md\#VM\_Models\_FE\_Mesh\_Elements\_Element\_Node1Id), 
[Element.NodeIds](VM.Models.FE.Mesh.Elements.Element.md\#VM\_Models\_FE\_Mesh\_Elements\_Element\_NodeIds), 
[Element.PropertyId](VM.Models.FE.Mesh.Elements.Element.md\#VM\_Models\_FE\_Mesh\_Elements\_Element\_PropertyId), 
[Element.NumberOfNodes](VM.Models.FE.Mesh.Elements.Element.md\#VM\_Models\_FE\_Mesh\_Elements\_Element\_NumberOfNodes), 
[Entity.Equals\(object\)](VM.Models.FE.Mesh.Entity.md\#VM\_Models\_FE\_Mesh\_Entity\_Equals\_System\_Object\_), 
[Entity.GetHashCode\(\)](VM.Models.FE.Mesh.Entity.md\#VM\_Models\_FE\_Mesh\_Entity\_GetHashCode), 
[Entity.FromByteArray<T\>\(byte\[\]\)](VM.Models.FE.Mesh.Entity.md\#VM\_Models\_FE\_Mesh\_Entity\_FromByteArray\_\_1\_System\_Byte\_\_\_), 
[Entity.ToByteArray<T\>\(T\)](VM.Models.FE.Mesh.Entity.md\#VM\_Models\_FE\_Mesh\_Entity\_ToByteArray\_\_1\_\_\_0\_), 
[Entity.Id](VM.Models.FE.Mesh.Entity.md\#VM\_Models\_FE\_Mesh\_Entity\_Id)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[BDFWriter.WriteToBDF\(Element, TextWriter\)](VM.Models.FE.Mesh.Writer.BDFWriter.md\#VM\_Models\_FE\_Mesh\_Writer\_BDFWriter\_WriteToBDF\_VM\_Models\_FE\_Mesh\_Elements\_Element\_System\_IO\_TextWriter\_)

## Constructors

### <a id="VM_Models_FE_Mesh_Elements_Element2Nodes__ctor"></a> Element2Nodes\(\)

```csharp
protected Element2Nodes()
```

## Properties

### <a id="VM_Models_FE_Mesh_Elements_Element2Nodes_Node2Id"></a> Node2Id

```csharp
[Column]
public int Node2Id { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_FE_Mesh_Elements_Element2Nodes_NumberOfNodes"></a> NumberOfNodes

```csharp
protected override int NumberOfNodes { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

