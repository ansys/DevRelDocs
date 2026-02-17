# <a id="OpenTD_Dimension_Dimensional_1"></a> Struct Dimensional<T\>

Namespace: [OpenTD.Dimension](OpenTD.Dimension.md)  
Assembly: OpenTD.dll  

Dimensionals represent dimensional quantities, like endTime or initialTemperature.
When set or get, dimensional values reflect the current Units.WorkingUnits system.
For example, if you set WorkingUnits.temp to C, then set a Dimensional{Temperature}
to 0, then set WorkingUnits.temp to F, the Dimensional would now return 32.
Dimensionals implicitly convert to/from doubles.

```csharp
public struct Dimensional<T> where T : IDimension, new()
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

### <a id="OpenTD_Dimension_Dimensional_1__ctor_System_Double_"></a> Dimensional\(double\)

```csharp
public Dimensional(double x)
```

#### Parameters

`x` [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Dimension_Dimensional_1__ctor_System_Double_OpenTD_UnitsData_"></a> Dimensional\(double, UnitsData\)

```csharp
public Dimensional(double x, UnitsData inputUnits)
```

#### Parameters

`x` [double](https://learn.microsoft.com/dotnet/api/system.double)

`inputUnits` [UnitsData](OpenTD.UnitsData.md)

## Methods

### <a id="OpenTD_Dimension_Dimensional_1_GetValueSI"></a> GetValueSI\(\)

```csharp
public double GetValueSI()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Dimension_Dimensional_1_ToString"></a> ToString\(\)

Returns the fully qualified type name of this instance.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The fully qualified type name.

## Operators

### <a id="OpenTD_Dimension_Dimensional_1_op_Implicit_System_Double__OpenTD_Dimension_Dimensional__0_"></a> implicit operator Dimensional<T\>\(double\)

```csharp
public static implicit operator Dimensional<T>(double x)
```

#### Parameters

`x` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<T\>

### <a id="OpenTD_Dimension_Dimensional_1_op_Implicit_OpenTD_Dimension_Dimensional__0___System_Double"></a> implicit operator double\(Dimensional<T\>\)

```csharp
public static implicit operator double(Dimensional<T> x)
```

#### Parameters

`x` [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<T\>

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

