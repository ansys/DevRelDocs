# Class Mesh.ElementContainer
<a id="VM_Managed_DAFUL_FE_Mesh_ElementContainer"></a>

Namespace: [VM.Managed.DAFUL.FE](VM.Managed.DAFUL.FE.md)  
Assembly: VMFE.dll  

This struct is to represent the element container.

```csharp
public sealed class Mesh.ElementContainer
```

#### Inheritance

object ← 
[Mesh.ElementContainer](VM.Managed.DAFUL.FE.Mesh.ElementContainer.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_FE_Mesh_ElementContainer__ctor_VM_Managed_DAFUL_FE_Mesh_VM_Managed_DAFUL_FE_ElementType_System_UInt32_"></a> ElementContainer\(Mesh, ElementType, uint\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.Mesh.ElementContainer" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ElementContainer(Mesh meshParent, ElementType type, uint nIndexElementType)
```

#### Parameters

`meshParent` [Mesh](VM.Managed.DAFUL.FE.Mesh.md)

The owner mesh.

`type` [ElementType](VM.Managed.DAFUL.FE.ElementType.md)

The element type.

`nIndexElementType` uint

The index of element type.

## Properties

### <a id="VM_Managed_DAFUL_FE_Mesh_ElementContainer_Count"></a> Count

Gets the count.

```csharp
public uint Count { get; }
```

#### Property Value

 uint

### <a id="VM_Managed_DAFUL_FE_Mesh_ElementContainer_Mesh"></a> Mesh

Gets the mesh.

```csharp
public Mesh Mesh { get; }
```

#### Property Value

 [Mesh](VM.Managed.DAFUL.FE.Mesh.md)

### <a id="VM_Managed_DAFUL_FE_Mesh_ElementContainer_Type"></a> Type

Gets the element type.

```csharp
public ElementType Type { get; }
```

#### Property Value

 [ElementType](VM.Managed.DAFUL.FE.ElementType.md)

### <a id="VM_Managed_DAFUL_FE_Mesh_ElementContainer_Item_System_UInt32_"></a> this\[uint\]

```csharp
public Element this[uint nIndex] { get; set; }
```

#### Property Value

 [Element](VM.Managed.DAFUL.FE.Element.md)

