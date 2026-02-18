# <a id="OpenTD_Results_Plot_Axis"></a> Class Axis

Namespace: [OpenTD.Results.Plot](OpenTD.Results.Plot.md)  
Assembly: OpenTD.Results.dll  

Represents an axis on a plot. Will attempt to name itself based on the series
associated with it.

```csharp
public class Axis
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Axis](OpenTD.Results.Plot.Axis.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_Results_Plot_Axis__ctor"></a> Axis\(\)

```csharp
public Axis()
```

### <a id="OpenTD_Results_Plot_Axis__ctor_OpenTD_UnitsData_UnitsType_"></a> Axis\(UnitsType\)

```csharp
public Axis(UnitsData.UnitsType dimension)
```

#### Parameters

`dimension` UnitsData.UnitsType

### <a id="OpenTD_Results_Plot_Axis__ctor_OpenTD_UnitsData_UnitsType_OpenTD_UnitsData_"></a> Axis\(UnitsType, UnitsData\)

```csharp
public Axis(UnitsData.UnitsType dimension, UnitsData units)
```

#### Parameters

`dimension` UnitsData.UnitsType

`units` UnitsData

## Properties

### <a id="OpenTD_Results_Plot_Axis_AutoCommenter"></a> AutoCommenter

```csharp
protected AutoCommenter AutoCommenter { get; set; }
```

#### Property Value

 AutoCommenter

### <a id="OpenTD_Results_Plot_Axis_AutoNamer"></a> AutoNamer

```csharp
protected AutoNamer AutoNamer { get; set; }
```

#### Property Value

 AutoNamer

### <a id="OpenTD_Results_Plot_Axis_AutoScaleInterval"></a> AutoScaleInterval

```csharp
public bool AutoScaleInterval { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Results_Plot_Axis_AutoScaleMaximumValue"></a> AutoScaleMaximumValue

```csharp
public bool AutoScaleMaximumValue { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Results_Plot_Axis_AutoScaleMinimumValue"></a> AutoScaleMinimumValue

```csharp
public bool AutoScaleMinimumValue { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Results_Plot_Axis_AutoScaleNumIntervals"></a> AutoScaleNumIntervals

```csharp
public int AutoScaleNumIntervals { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_Results_Plot_Axis_AxisStyle"></a> AxisStyle

```csharp
public AxisStyle AxisStyle { get; set; }
```

#### Property Value

 [AxisStyle](OpenTD.Results.Plot.AxisStyle.md)

### <a id="OpenTD_Results_Plot_Axis_Comment"></a> Comment

```csharp
public string Comment { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Plot_Axis_Dimension"></a> Dimension

Physical dimension of the axis.

```csharp
public UnitsData.UnitsType Dimension { get; set; }
```

#### Property Value

 UnitsData.UnitsType

### <a id="OpenTD_Results_Plot_Axis_InternalSuggestedComment"></a> InternalSuggestedComment

```csharp
public string InternalSuggestedComment { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Plot_Axis_InternalSuggestedName"></a> InternalSuggestedName

```csharp
public string InternalSuggestedName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Plot_Axis_Interval"></a> Interval

```csharp
public double Interval { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Results_Plot_Axis_IsInteger"></a> IsInteger

```csharp
public bool IsInteger { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Results_Plot_Axis_IsReversed"></a> IsReversed

```csharp
public bool IsReversed { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Results_Plot_Axis_MajorGrid"></a> MajorGrid

```csharp
public Grid MajorGrid { get; set; }
```

#### Property Value

 [Grid](OpenTD.Results.Plot.Grid.md)

### <a id="OpenTD_Results_Plot_Axis_MaximumValue"></a> MaximumValue

```csharp
public double MaximumValue { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Results_Plot_Axis_MinimumValue"></a> MinimumValue

```csharp
public double MinimumValue { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Results_Plot_Axis_MinorGrid"></a> MinorGrid

```csharp
public Grid MinorGrid { get; set; }
```

#### Property Value

 [Grid](OpenTD.Results.Plot.Grid.md)

### <a id="OpenTD_Results_Plot_Axis_Name"></a> Name

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Plot_Axis_Position"></a> Position

```csharp
public Axis.Positions Position { get; set; }
```

#### Property Value

 [Axis](OpenTD.Results.Plot.Axis.md).[Positions](OpenTD.Results.Plot.Axis.Positions.md)

### <a id="OpenTD_Results_Plot_Axis_Title"></a> Title

```csharp
public string Title { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Plot_Axis_Units"></a> Units

Units system to display on the axis and to use to plot series associated with it.

```csharp
public UnitsData Units { get; set; }
```

#### Property Value

 UnitsData

## Methods

### <a id="OpenTD_Results_Plot_Axis_GetAxisStyle"></a> GetAxisStyle\(\)

```csharp
public AxisStyle GetAxisStyle()
```

#### Returns

 [AxisStyle](OpenTD.Results.Plot.AxisStyle.md)

### <a id="OpenTD_Results_Plot_Axis_GetSelfSuggestedComment"></a> GetSelfSuggestedComment\(\)

```csharp
protected virtual string GetSelfSuggestedComment()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Plot_Axis_GetSelfSuggestedName"></a> GetSelfSuggestedName\(\)

```csharp
protected virtual string GetSelfSuggestedName()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Plot_Axis_SetAxisStyle_OpenTD_Results_Plot_AxisStyle_"></a> SetAxisStyle\(AxisStyle\)

```csharp
public void SetAxisStyle(AxisStyle ax)
```

#### Parameters

`ax` [AxisStyle](OpenTD.Results.Plot.AxisStyle.md)

### <a id="OpenTD_Results_Plot_Axis_ToString"></a> ToString\(\)

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

