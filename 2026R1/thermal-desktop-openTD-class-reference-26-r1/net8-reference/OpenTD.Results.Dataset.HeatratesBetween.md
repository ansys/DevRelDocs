# <a id="OpenTD_Results_Dataset_HeatratesBetween"></a> Class HeatratesBetween

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

Helper class for <code>NodeHeatrates</code> providing summary calculations
for heatrates between "From" and "To" node collections.  Positive heatrates
indicate heat flowing out of the From set.

```csharp
public class HeatratesBetween
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[HeatratesBetween](OpenTD.Results.Dataset.HeatratesBetween.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="OpenTD_Results_Dataset_HeatratesBetween_FromSet"></a> FromSet

```csharp
public string FromSet { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_HeatratesBetween_LinearCount"></a> LinearCount

```csharp
public int LinearCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_Results_Dataset_HeatratesBetween_LinearHeatrate"></a> LinearHeatrate

```csharp
public Dimensional<HeatRate> LinearHeatrate { get; }
```

#### Property Value

 Dimensional<HeatRate\>

### <a id="OpenTD_Results_Dataset_HeatratesBetween_NodeHeatrates"></a> NodeHeatrates

```csharp
public List<NodeHeatrates> NodeHeatrates { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[NodeHeatrates](OpenTD.Results.Dataset.NodeHeatrates.md)\>

### <a id="OpenTD_Results_Dataset_HeatratesBetween_RadiativeCount"></a> RadiativeCount

```csharp
public int RadiativeCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_Results_Dataset_HeatratesBetween_RadiativeHeatrate"></a> RadiativeHeatrate

```csharp
public Dimensional<HeatRate> RadiativeHeatrate { get; }
```

#### Property Value

 Dimensional<HeatRate\>

### <a id="OpenTD_Results_Dataset_HeatratesBetween_TieCount"></a> TieCount

```csharp
public int TieCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_Results_Dataset_HeatratesBetween_TieHeatrate"></a> TieHeatrate

```csharp
public Dimensional<HeatRate> TieHeatrate { get; }
```

#### Property Value

 Dimensional<HeatRate\>

### <a id="OpenTD_Results_Dataset_HeatratesBetween_ToSet"></a> ToSet

```csharp
public string ToSet { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_HeatratesBetween_TotalCount"></a> TotalCount

```csharp
public int TotalCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_Results_Dataset_HeatratesBetween_TotalHeatrate"></a> TotalHeatrate

```csharp
public Dimensional<HeatRate> TotalHeatrate { get; }
```

#### Property Value

 Dimensional<HeatRate\>

