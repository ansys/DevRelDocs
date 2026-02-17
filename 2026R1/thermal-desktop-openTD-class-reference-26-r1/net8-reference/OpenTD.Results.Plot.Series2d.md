# <a id="OpenTD_Results_Plot_Series2d"></a> Class Series2d

Namespace: [OpenTD.Results.Plot](OpenTD.Results.Plot.md)  
Assembly: OpenTD.Results.dll  

Represents a 2d series on a plot. Will attempt to name itself based on the data
associated with it.

```csharp
public class Series2d
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Series2d](OpenTD.Results.Plot.Series2d.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_Results_Plot_Series2d__ctor_OpenTD_Results_Dataset_DataArray_"></a> Series2d\(DataArray\)

Initializes a new instance of the <xref href="OpenTD.Results.Plot.Series2d" data-throw-if-not-resolved="false"></xref> class, looking
in ydata's SourceDataset for time or record number to use as x data.

```csharp
public Series2d(DataArray ydata)
```

#### Parameters

`ydata` [DataArray](OpenTD.Results.Dataset.DataArray.md)

The y data.

### <a id="OpenTD_Results_Plot_Series2d__ctor_OpenTD_Results_Dataset_DataArray_System_String_"></a> Series2d\(DataArray, string\)

Initializes a new instance of the <xref href="OpenTD.Results.Plot.Series2d" data-throw-if-not-resolved="false"></xref> class, looking
in ydata's SourceDataset for time or record number to use as x data.

```csharp
public Series2d(DataArray ydata, string name)
```

#### Parameters

`ydata` [DataArray](OpenTD.Results.Dataset.DataArray.md)

The y data.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

A custom series name.

#### Exceptions

 OpenTDException

ydata dataset must contain a valid SourceDataset to look up x values

### <a id="OpenTD_Results_Plot_Series2d__ctor_OpenTD_Results_Dataset_DataArray_OpenTD_Results_Dataset_DataArray_"></a> Series2d\(DataArray, DataArray\)

Initializes a new instance of the <xref href="OpenTD.Results.Plot.Series2d" data-throw-if-not-resolved="false"></xref> class, explicitly
specifying x and y data.

```csharp
public Series2d(DataArray xdata, DataArray ydata)
```

#### Parameters

`xdata` [DataArray](OpenTD.Results.Dataset.DataArray.md)

The x data.

`ydata` [DataArray](OpenTD.Results.Dataset.DataArray.md)

The y data.

### <a id="OpenTD_Results_Plot_Series2d__ctor_OpenTD_Results_Dataset_DataArray_OpenTD_Results_Dataset_DataArray_System_String_"></a> Series2d\(DataArray, DataArray, string\)

Initializes a new instance of the <xref href="OpenTD.Results.Plot.Series2d" data-throw-if-not-resolved="false"></xref> class, explicitly
specifying x and y data.

```csharp
public Series2d(DataArray xdata, DataArray ydata, string name)
```

#### Parameters

`xdata` [DataArray](OpenTD.Results.Dataset.DataArray.md)

The x data.

`ydata` [DataArray](OpenTD.Results.Dataset.DataArray.md)

The y data.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

A custom series name.

## Fields

### <a id="OpenTD_Results_Plot_Series2d_Series2dStyle"></a> Series2dStyle

```csharp
public Series2dStyle Series2dStyle
```

#### Field Value

 [Series2dStyle](OpenTD.Results.Plot.Series2dStyle.md)

## Properties

### <a id="OpenTD_Results_Plot_Series2d_Comment"></a> Comment

```csharp
public string Comment { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Plot_Series2d_Enabled"></a> Enabled

```csharp
public bool Enabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Results_Plot_Series2d_InternalSuggestedComment"></a> InternalSuggestedComment

```csharp
public string InternalSuggestedComment { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Plot_Series2d_InternalSuggestedName"></a> InternalSuggestedName

```csharp
public string InternalSuggestedName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Plot_Series2d_Name"></a> Name

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Plot_Series2d_XAxis"></a> XAxis

```csharp
public Axis XAxis { get; set; }
```

#### Property Value

 [Axis](OpenTD.Results.Plot.Axis.md)

### <a id="OpenTD_Results_Plot_Series2d_XData"></a> XData

```csharp
public DataArray XData { get; set; }
```

#### Property Value

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

### <a id="OpenTD_Results_Plot_Series2d_YAxis"></a> YAxis

```csharp
public Axis YAxis { get; set; }
```

#### Property Value

 [Axis](OpenTD.Results.Plot.Axis.md)

### <a id="OpenTD_Results_Plot_Series2d_YData"></a> YData

```csharp
public DataArray YData { get; set; }
```

#### Property Value

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

## Methods

### <a id="OpenTD_Results_Plot_Series2d_CheckData"></a> CheckData\(\)

```csharp
public void CheckData()
```

### <a id="OpenTD_Results_Plot_Series2d_GetSeries2dStyle"></a> GetSeries2dStyle\(\)

```csharp
public Series2dStyle GetSeries2dStyle()
```

#### Returns

 [Series2dStyle](OpenTD.Results.Plot.Series2dStyle.md)

### <a id="OpenTD_Results_Plot_Series2d_SetSeries2dStyle_OpenTD_Results_Plot_Series2dStyle_"></a> SetSeries2dStyle\(Series2dStyle\)

```csharp
public void SetSeries2dStyle(Series2dStyle sstyle)
```

#### Parameters

`sstyle` [Series2dStyle](OpenTD.Results.Plot.Series2dStyle.md)

### <a id="OpenTD_Results_Plot_Series2d_ToString"></a> ToString\(\)

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

