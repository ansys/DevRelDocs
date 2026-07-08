#  Struct PathData

Namespace: [VM.API.Pre.Links](VM.API.Pre.Links.md)  
Assembly: VM.API.Pre.Links.dll  

This struct represents the path data

```csharp
public struct PathData
```

## Constructors

### <a id="VM_API_Pre_Links_PathData__ctor"></a> PathData\(\)

Default constructor

```csharp
public PathData()
```

### <a id="VM_API_Pre_Links_PathData__ctor_VM_Managed_DAFUL_Track_MTL_PathData_PathType_VM_API_Pre_Obj_VM_Models_Pre_ExpressionValueVariable_"></a> PathData\(PathType, Obj, ExpressionValueVariable\)

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

### <a id="VM_API_Pre_Links_PathData_Marker"></a> Marker

The marker. The default value null.

```csharp
public Obj Marker { readonly get; set; }
```

#### Property Value

 Obj

### <a id="VM_API_Pre_Links_PathData_TypeOfPath"></a> TypeOfPath

The type of path. The default value is idler.

```csharp
public MTL.PathData.PathType TypeOfPath { readonly get; set; }
```

#### Property Value

 MTL.PathData.PathType

### <a id="VM_API_Pre_Links_PathData_WindingRadius"></a> WindingRadius

The value for the winding radius. The default value is 0.

```csharp
public ExpressionValueVariable WindingRadius { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

