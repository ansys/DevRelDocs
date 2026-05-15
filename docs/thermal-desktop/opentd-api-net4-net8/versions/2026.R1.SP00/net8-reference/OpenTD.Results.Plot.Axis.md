# Class Axis

Namespace: [OpenTD.Results.Plot](OpenTD.Results.Plot.md)  
Assembly: OpenTD.Results.dll  

Represents an axis on a plot. Will attempt to name itself based on the series
associated with it.

```csharp
public class Axis
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Axis](OpenTD.Results.Plot.Axis.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### Axis\(\)

```csharp
public Axis()
```

### Axis\(UnitsType\)

```csharp
public Axis(UnitsData.UnitsType dimension)
```

#### Parameters

`dimension` UnitsData.UnitsType

### Axis\(UnitsType, UnitsData\)

```csharp
public Axis(UnitsData.UnitsType dimension, UnitsData units)
```

#### Parameters

`dimension` UnitsData.UnitsType

`units` UnitsData

## Properties

### AutoCommenter

```csharp
protected AutoCommenter AutoCommenter { get; set; }
```

#### Property Value

 AutoCommenter

### AutoNamer

```csharp
protected AutoNamer AutoNamer { get; set; }
```

#### Property Value

 AutoNamer

### AutoScaleInterval

```csharp
public bool AutoScaleInterval { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AutoScaleMaximumValue

```csharp
public bool AutoScaleMaximumValue { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AutoScaleMinimumValue

```csharp
public bool AutoScaleMinimumValue { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AutoScaleNumIntervals

```csharp
public int AutoScaleNumIntervals { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### AxisStyle

```csharp
public AxisStyle AxisStyle { get; set; }
```

#### Property Value

 [AxisStyle](OpenTD.Results.Plot.AxisStyle.md)

### Comment

```csharp
public string Comment { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Dimension

Physical dimension of the axis.

```csharp
public UnitsData.UnitsType Dimension { get; set; }
```

#### Property Value

 UnitsData.UnitsType

### InternalSuggestedComment

```csharp
public string InternalSuggestedComment { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### InternalSuggestedName

```csharp
public string InternalSuggestedName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Interval

```csharp
public double Interval { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### IsInteger

```csharp
public bool IsInteger { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsReversed

```csharp
public bool IsReversed { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MajorGrid

```csharp
public Grid MajorGrid { get; set; }
```

#### Property Value

 [Grid](OpenTD.Results.Plot.Grid.md)

### MaximumValue

```csharp
public double MaximumValue { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### MinimumValue

```csharp
public double MinimumValue { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### MinorGrid

```csharp
public Grid MinorGrid { get; set; }
```

#### Property Value

 [Grid](OpenTD.Results.Plot.Grid.md)

### Name

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Position

```csharp
public Axis.Positions Position { get; set; }
```

#### Property Value

 [Axis](OpenTD.Results.Plot.Axis.md).[Positions](OpenTD.Results.Plot.Axis.Positions.md)

### Title

```csharp
public string Title { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Units

Units system to display on the axis and to use to plot series associated with it.

```csharp
public UnitsData Units { get; set; }
```

#### Property Value

 UnitsData

## Methods

### GetAxisStyle\(\)

```csharp
public AxisStyle GetAxisStyle()
```

#### Returns

 [AxisStyle](OpenTD.Results.Plot.AxisStyle.md)

### GetSelfSuggestedComment\(\)

```csharp
protected virtual string GetSelfSuggestedComment()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetSelfSuggestedName\(\)

```csharp
protected virtual string GetSelfSuggestedName()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### SetAxisStyle\(AxisStyle\)

```csharp
public void SetAxisStyle(AxisStyle ax)
```

#### Parameters

`ax` [AxisStyle](OpenTD.Results.Plot.AxisStyle.md)

### ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

## See Also

[Plot2d](OpenTD.Results.Plot.Plot2d.md), 
IAutoName


