# Struct ExceedancePlot

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

Contains information about a plot that displays an Exceedance.

```csharp
public struct ExceedancePlot
```

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### ExceedancePlot\(DataSubtype, int, DataItemIdentifier, Plot2d, double\)

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

### DataItemId

```csharp
public DataItemIdentifier DataItemId
```

#### Field Value

 [DataItemIdentifier](OpenTD.Results.Dataset.DataItemIdentifier.md)

### Index

```csharp
public int Index
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PercentDifference

```csharp
public double PercentDifference
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Plot

```csharp
public Plot2d Plot
```

#### Field Value

 [Plot2d](OpenTD.Results.Plot.Plot2d.md)

### Subtype

```csharp
public DataSubtype Subtype
```

#### Field Value

 [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

## See Also

[Exceedance](OpenTD.Results.Dataset.Exceedance.md)


