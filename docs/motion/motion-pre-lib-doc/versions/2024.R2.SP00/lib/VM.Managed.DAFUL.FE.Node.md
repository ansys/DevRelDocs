# Struct Node

Namespace: [VM.Managed.DAFUL.FE](VM.Managed.DAFUL.FE.md)  
Assembly: VMFE.dll  

This struct is to represent the node.

```csharp
public struct Node
```

## Constructors

### Node\(Mesh, uint\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.Node" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Node(Mesh meshParent, uint nIndex)
```

#### Parameters

`meshParent` [Mesh](VM.Managed.DAFUL.FE.Mesh.md)

The owner of mesh.

`nIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The index.

## Fields

### ID

ID.

```csharp
public uint ID
```

#### Field Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Index

index.

```csharp
public uint Index
```

#### Field Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Mass

mass.

```csharp
public double Mass
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### MomentOfInertia

moment of inertia.

```csharp
public _MomentOfInertia MomentOfInertia
```

#### Field Value

 [\_MomentOfInertia](VM.Managed.DAFUL.FE.\_MomentOfInertia.md)

### Position

position.

```csharp
public VectorBase Position
```

#### Field Value

 VectorBase


