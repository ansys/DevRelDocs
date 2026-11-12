# Class Element
<a id="VM_Models_FE_Mesh_Elements_Element"></a>

Namespace: [VM.Models.FE.Mesh.Elements](VM.Models.FE.Mesh.Elements.md)  
Assembly: VM.Models.FE.Mesh.dll  

```csharp
public abstract class Element : Entity, IEntity
```

#### Inheritance

object ← 
[Entity](VM.Models.FE.Mesh.Entity.md) ← 
[Element](VM.Models.FE.Mesh.Elements.Element.md)

#### Derived

[Element2Nodes](VM.Models.FE.Mesh.Elements.Element2Nodes.md)

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
[BDFWriter.WriteToBDF\(Element, TextWriter\)](VM.Models.FE.Mesh.Writer.BDFWriter.md\#VM\_Models\_FE\_Mesh\_Writer\_BDFWriter\_WriteToBDF\_VM\_Models\_FE\_Mesh\_Elements\_Element\_System\_IO\_TextWriter\_)

## Constructors

### <a id="VM_Models_FE_Mesh_Elements_Element__ctor"></a> Element\(\)

```csharp
public Element()
```

## Properties

### <a id="VM_Models_FE_Mesh_Elements_Element_ElementType"></a> ElementType

```csharp
public abstract ElementTypes ElementType { get; }
```

#### Property Value

 [ElementTypes](VM.Models.FE.Mesh.ElementTypes.md)

### <a id="VM_Models_FE_Mesh_Elements_Element_Node1Id"></a> Node1Id

```csharp
[Column]
public int Node1Id { get; set; }
```

#### Property Value

 int

### <a id="VM_Models_FE_Mesh_Elements_Element_NodeIds"></a> NodeIds

```csharp
public IList<int> NodeIds { get; }
```

#### Property Value

 IList<int\>

### <a id="VM_Models_FE_Mesh_Elements_Element_NumberOfNodes"></a> NumberOfNodes

```csharp
protected abstract int NumberOfNodes { get; }
```

#### Property Value

 int

### <a id="VM_Models_FE_Mesh_Elements_Element_PropertyId"></a> PropertyId

```csharp
[Column]
public int PropertyId { get; set; }
```

#### Property Value

 int

## Methods

### <a id="VM_Models_FE_Mesh_Elements_Element_Equals_System_Object_"></a> Equals\(object\)

```csharp
public override sealed bool Equals(object obj)
```

#### Parameters

`obj` object

#### Returns

 bool

