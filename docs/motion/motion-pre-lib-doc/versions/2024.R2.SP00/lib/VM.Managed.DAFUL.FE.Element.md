# Struct Element

Namespace: [VM.Managed.DAFUL.FE](VM.Managed.DAFUL.FE.md)  
Assembly: VMFE.dll  

This struct is to represent the element.

```csharp
public struct Element
```

## Constructors

### Element\(Mesh, uint, uint, ObjectEventCore\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.Element" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Element(Mesh meshParent, uint nIndex, uint nIndexType, ObjectEventCore coreProp)
```

#### Parameters

`meshParent` [Mesh](VM.Managed.DAFUL.FE.Mesh.md)

The owner of mesh.

`nIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The index.

`nIndexType` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The type of index.

`coreProp` ObjectEventCore

The event core.

## Fields

### NodeIndex

The node index array.

```csharp
public uint[] NodeIndex
```

#### Field Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

### Type

The element type.

```csharp
public ElementType Type
```

#### Field Value

 [ElementType](VM.Managed.DAFUL.FE.ElementType.md)

## Properties

### Property

Gets or sets the property.

```csharp
public PropertyBase Property { get; set; }
```

#### Property Value

 [PropertyBase](VM.Managed.DAFUL.FE.Property.PropertyBase.md)


