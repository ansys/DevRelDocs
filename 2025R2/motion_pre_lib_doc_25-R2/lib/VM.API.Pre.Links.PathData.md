# Struct PathData

Namespace: [VM.API.Pre.Links](VM.API.Pre.Links.md)  
Assembly: VM.API.Pre.Links.dll  

This struct represents the path data

```csharp
public struct PathData
```

## Constructors

### PathData\(\)

Default constructor

```csharp
public PathData()
```

### PathData\(PathType, Obj, ExpressionValueVariable\)

Initializes a new instance of the pathdata class.

```csharp
public PathData(MTL.PathData.PathType pathType, Obj marker, ExpressionValueVariable windingRadius)
```

#### Parameters

`pathType` MTL.PathData.PathType

The path type.

`marker` Obj

The marker.

`windingRadius` ExpressionValueVariable

The winding radius.

## Properties

### Marker

The marker. The default value null.

```csharp
public Obj Marker { readonly get; set; }
```

#### Property Value

 Obj

### TypeOfPath

The type of path. The default value is idler.

```csharp
public MTL.PathData.PathType TypeOfPath { readonly get; set; }
```

#### Property Value

 MTL.PathData.PathType

### WindingRadius

The value for the winding radius. The default value is 0.

```csharp
public ExpressionValueVariable WindingRadius { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable


