# Class Mesh.ElementContainer

Namespace: [VM.Managed.DAFUL.FE](VM.Managed.DAFUL.FE.md)  
Assembly: VMFE.dll  

This struct is to represent the element container.

```csharp
public sealed class Mesh.ElementContainer
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Mesh.ElementContainer](VM.Managed.DAFUL.FE.Mesh.ElementContainer.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### ElementContainer\(Mesh, ElementType, uint\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.Mesh.ElementContainer" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ElementContainer(Mesh meshParent, ElementType type, uint nIndexElementType)
```

#### Parameters

`meshParent` [Mesh](VM.Managed.DAFUL.FE.Mesh.md)

The owner mesh.

`type` [ElementType](VM.Managed.DAFUL.FE.ElementType.md)

The element type.

`nIndexElementType` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The index of element type.

## Properties

### Count

Gets the count.

```csharp
public uint Count { get; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Mesh

Gets the mesh.

```csharp
public Mesh Mesh { get; }
```

#### Property Value

 [Mesh](VM.Managed.DAFUL.FE.Mesh.md)

### Type

Gets the element type.

```csharp
public ElementType Type { get; }
```

#### Property Value

 [ElementType](VM.Managed.DAFUL.FE.ElementType.md)

### this\[uint\]

```csharp
public Element this[uint nIndex] { get; set; }
```

#### Property Value

 [Element](VM.Managed.DAFUL.FE.Element.md)


