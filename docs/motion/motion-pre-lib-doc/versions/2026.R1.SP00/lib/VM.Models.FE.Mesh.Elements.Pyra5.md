# Class Pyra5
<a id="VM_Models_FE_Mesh_Elements_Pyra5"></a>

Namespace: [VM.Models.FE.Mesh.Elements](VM.Models.FE.Mesh.Elements.md)  
Assembly: VM.Models.FE.Mesh.dll  

```csharp
[Table]
public class Pyra5 : Element5Nodes, IEntity
```

#### Inheritance

object ← 
[Entity](VM.Models.FE.Mesh.Entity.md) ← 
[Element](VM.Models.FE.Mesh.Elements.Element.md) ← 
[Element2Nodes](VM.Models.FE.Mesh.Elements.Element2Nodes.md) ← 
[Element3Nodes](VM.Models.FE.Mesh.Elements.Element3Nodes.md) ← 
[Element4Nodes](VM.Models.FE.Mesh.Elements.Element4Nodes.md) ← 
[Element5Nodes](VM.Models.FE.Mesh.Elements.Element5Nodes.md) ← 
[Pyra5](VM.Models.FE.Mesh.Elements.Pyra5.md)

#### Implements

[IEntity](VM.Models.FE.Mesh.IEntity.md)

#### Inherited Members

[Element5Nodes.Node5Id](VM.Models.FE.Mesh.Elements.Element5Nodes.md\#VM\_Models\_FE\_Mesh\_Elements\_Element5Nodes\_Node5Id), 
[Element5Nodes.NumberOfNodes](VM.Models.FE.Mesh.Elements.Element5Nodes.md\#VM\_Models\_FE\_Mesh\_Elements\_Element5Nodes\_NumberOfNodes), 
[Element4Nodes.Node4Id](VM.Models.FE.Mesh.Elements.Element4Nodes.md\#VM\_Models\_FE\_Mesh\_Elements\_Element4Nodes\_Node4Id), 
[Element4Nodes.NumberOfNodes](VM.Models.FE.Mesh.Elements.Element4Nodes.md\#VM\_Models\_FE\_Mesh\_Elements\_Element4Nodes\_NumberOfNodes), 
[Element3Nodes.Node3Id](VM.Models.FE.Mesh.Elements.Element3Nodes.md\#VM\_Models\_FE\_Mesh\_Elements\_Element3Nodes\_Node3Id), 
[Element3Nodes.NumberOfNodes](VM.Models.FE.Mesh.Elements.Element3Nodes.md\#VM\_Models\_FE\_Mesh\_Elements\_Element3Nodes\_NumberOfNodes), 
[Element2Nodes.Node2Id](VM.Models.FE.Mesh.Elements.Element2Nodes.md\#VM\_Models\_FE\_Mesh\_Elements\_Element2Nodes\_Node2Id), 
[Element2Nodes.NumberOfNodes](VM.Models.FE.Mesh.Elements.Element2Nodes.md\#VM\_Models\_FE\_Mesh\_Elements\_Element2Nodes\_NumberOfNodes), 
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

### <a id="VM_Models_FE_Mesh_Elements_Pyra5__ctor"></a> Pyra5\(\)

```csharp
public Pyra5()
```

## Properties

### <a id="VM_Models_FE_Mesh_Elements_Pyra5_ElementType"></a> ElementType

```csharp
public override ElementTypes ElementType { get; }
```

#### Property Value

 [ElementTypes](VM.Models.FE.Mesh.ElementTypes.md)

