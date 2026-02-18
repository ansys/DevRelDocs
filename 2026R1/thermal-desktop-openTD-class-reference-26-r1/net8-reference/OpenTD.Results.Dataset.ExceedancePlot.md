# <a id="OpenTD_Results_Dataset_ExceedancePlot"></a> Struct ExceedancePlot

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

Contains information about a plot that displays an Exceedance.

```csharp
public struct ExceedancePlot
```

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_Results_Dataset_ExceedancePlot__ctor_OpenTD_Results_Dataset_DataSubtype_System_Int32_OpenTD_Results_Dataset_DataItemIdentifier_OpenTD_Results_Plot_Plot2d_System_Double_"></a> ExceedancePlot\(DataSubtype, int, DataItemIdentifier, Plot2d, double\)

```csharp
public ExceedancePlot(DataSubtype subtype, int index, DataItemIdentifier dataItemId, Plot2d plot, double percentDiff)
```

#### Parameters

`subtype` [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`dataItemId` [DataItemIdentifier](OpenTD.Results.Dataset.DataItemIdentifier.md)

`plot` [Plot2d](OpenTD.Results.Plot.Plot2d.md)

`percentDiff` [double](https://learn.microsoft.com/dotnet/api/system.double)

## Fields

### <a id="OpenTD_Results_Dataset_ExceedancePlot_DataItemId"></a> DataItemId

```csharp
public DataItemIdentifier DataItemId
```

#### Field Value

 [DataItemIdentifier](OpenTD.Results.Dataset.DataItemIdentifier.md)

### <a id="OpenTD_Results_Dataset_ExceedancePlot_Index"></a> Index

```csharp
public int Index
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_Results_Dataset_ExceedancePlot_PercentDifference"></a> PercentDifference

```csharp
public double PercentDifference
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Results_Dataset_ExceedancePlot_Plot"></a> Plot

```csharp
public Plot2d Plot
```

#### Field Value

 [Plot2d](OpenTD.Results.Plot.Plot2d.md)

### <a id="OpenTD_Results_Dataset_ExceedancePlot_Subtype"></a> Subtype

```csharp
public DataSubtype Subtype
```

#### Field Value

 [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

## See Also

[Exceedance](OpenTD.Results.Dataset.Exceedance.md)

