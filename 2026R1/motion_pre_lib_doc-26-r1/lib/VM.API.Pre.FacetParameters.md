#  Struct FacetParameters

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This struct represents the facet parameters

```csharp
public struct FacetParameters
```

## Constructors

### <a id="VM_API_Pre_FacetParameters__ctor"></a> FacetParameters\(\)

Default constructor

```csharp
public FacetParameters()
```

## Properties

### <a id="VM_API_Pre_FacetParameters_CheckFacetAspectRatio"></a> CheckFacetAspectRatio

Flag for checking facet aspect ratio. The default value is true.

```csharp
public bool CheckFacetAspectRatio { readonly get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_API_Pre_FacetParameters_CheckMaximumFacetSize"></a> CheckMaximumFacetSize

Flag for checking maximum facet size. The default value is true.

```csharp
public bool CheckMaximumFacetSize { readonly get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_API_Pre_FacetParameters_CheckMaximumGridLine"></a> CheckMaximumGridLine

Flag for checking maximum grid line. The default value is false.

```csharp
public bool CheckMaximumGridLine { readonly get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_API_Pre_FacetParameters_CheckMinimumUGridLine"></a> CheckMinimumUGridLine

Flag for checking minimum grid line for U direction. The default value is false.

```csharp
public bool CheckMinimumUGridLine { readonly get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_API_Pre_FacetParameters_CheckMinimumVGridLine"></a> CheckMinimumVGridLine

Flag for checking minimum grid line for V direction. The default value is false.

```csharp
public bool CheckMinimumVGridLine { readonly get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_API_Pre_FacetParameters_CheckSurfaceAngularTolerance"></a> CheckSurfaceAngularTolerance

Flag for checking surface angular tolerance. The default value is true.

```csharp
public bool CheckSurfaceAngularTolerance { readonly get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_API_Pre_FacetParameters_CheckSurfaceTolerance"></a> CheckSurfaceTolerance

Flag for checking surface tolerance. The default value is false.

```csharp
public bool CheckSurfaceTolerance { readonly get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_API_Pre_FacetParameters_FacetAspectRatio"></a> FacetAspectRatio

The value for the facet aspect ratio. The default value is 1.0.

```csharp
public ExpressionValueVariable FacetAspectRatio { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_API_Pre_FacetParameters_MaximumFacetSize"></a> MaximumFacetSize

The value for the maximum facet size. The default value is 3.0.

```csharp
public ExpressionValueVariable MaximumFacetSize { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_API_Pre_FacetParameters_MaximumGridLine"></a> MaximumGridLine

The value for the maximum grid line. The default value is 512.

```csharp
public int MaximumGridLine { readonly get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_API_Pre_FacetParameters_MinimumUGridLine"></a> MinimumUGridLine

The value for the minimum grid line for the U direction. The default value is 0.

```csharp
public int MinimumUGridLine { readonly get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_API_Pre_FacetParameters_MinimumVGridLine"></a> MinimumVGridLine

The value for the minimum grid line for the V direction. The default value is 0.

```csharp
public int MinimumVGridLine { readonly get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_API_Pre_FacetParameters_SurfaceAngularTolerance"></a> SurfaceAngularTolerance

The value for the surface angular tolerance. The default value is 5.0.

```csharp
public ExpressionValueVariable SurfaceAngularTolerance { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_API_Pre_FacetParameters_SurfaceTolerance"></a> SurfaceTolerance

The value for the surface tolerance. The default value is 0.0.

```csharp
public ExpressionValueVariable SurfaceTolerance { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_API_Pre_FacetParameters_UseApproximatedGeometry"></a> UseApproximatedGeometry

Flag for whether using approximated geometry. The default value is false.

```csharp
public bool UseApproximatedGeometry { readonly get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_API_Pre_FacetParameters_UseEdge"></a> UseEdge

Flag for whether using edge. The default value is true.

```csharp
public bool UseEdge { readonly get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_API_Pre_FacetParameters_UseRegacyFacetParameters"></a> UseRegacyFacetParameters

Flag for whether using regacy facet algorithm. The default value is false.

```csharp
public bool UseRegacyFacetParameters { readonly get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

