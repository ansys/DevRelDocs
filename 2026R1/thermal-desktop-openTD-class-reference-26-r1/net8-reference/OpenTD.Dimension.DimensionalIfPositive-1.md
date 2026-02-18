# <a id="OpenTD_Dimension_DimensionalIfPositive_1"></a> Struct DimensionalIfPositive<T\>

Namespace: [OpenTD.Dimension](OpenTD.Dimension.md)  
Assembly: OpenTD.dll  

Works like a dimensional, but only for positive values. Negative values
act like doubles.

```csharp
public struct DimensionalIfPositive<T> where T : IDimension, new()
```

#### Type Parameters

`T` 

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_Dimension_DimensionalIfPositive_1__ctor_System_Double_"></a> DimensionalIfPositive\(double\)

```csharp
public DimensionalIfPositive(double x)
```

#### Parameters

`x` [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### <a id="OpenTD_Dimension_DimensionalIfPositive_1_GetValueSI"></a> GetValueSI\(\)

```csharp
public double GetValueSI()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Dimension_DimensionalIfPositive_1_ToString"></a> ToString\(\)

Returns the fully qualified type name of this instance.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The fully qualified type name.

## Operators

### <a id="OpenTD_Dimension_DimensionalIfPositive_1_op_Implicit_System_Double__OpenTD_Dimension_DimensionalIfPositive__0_"></a> implicit operator DimensionalIfPositive<T\>\(double\)

```csharp
public static implicit operator DimensionalIfPositive<T>(double x)
```

#### Parameters

`x` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [DimensionalIfPositive](OpenTD.Dimension.DimensionalIfPositive\-1.md)<T\>

### <a id="OpenTD_Dimension_DimensionalIfPositive_1_op_Implicit_OpenTD_Dimension_DimensionalIfPositive__0___System_Double"></a> implicit operator double\(DimensionalIfPositive<T\>\)

```csharp
public static implicit operator double(DimensionalIfPositive<T> x)
```

#### Parameters

`x` [DimensionalIfPositive](OpenTD.Dimension.DimensionalIfPositive\-1.md)<T\>

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## See Also

[Dimensional](OpenTD.Dimension.Dimensional\-1.md)<T\>

