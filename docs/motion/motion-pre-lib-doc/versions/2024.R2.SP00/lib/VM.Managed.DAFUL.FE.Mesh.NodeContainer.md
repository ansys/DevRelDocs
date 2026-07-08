# Class Mesh.NodeContainer

Namespace: [VM.Managed.DAFUL.FE](VM.Managed.DAFUL.FE.md)  
Assembly: VMFE.dll  

This struct is to represent the node container.

```csharp
public sealed class Mesh.NodeContainer
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Mesh.NodeContainer](VM.Managed.DAFUL.FE.Mesh.NodeContainer.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### NodeContainer\(Mesh\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.Mesh.NodeContainer" data-throw-if-not-resolved="false"></xref> class.

```csharp
public NodeContainer(Mesh meshParent)
```

#### Parameters

`meshParent` [Mesh](VM.Managed.DAFUL.FE.Mesh.md)

The owner mesh.

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

### this\[uint\]

```csharp
public Node this[uint nIndex] { get; set; }
```

#### Property Value

 [Node](VM.Managed.DAFUL.FE.Node.md)


