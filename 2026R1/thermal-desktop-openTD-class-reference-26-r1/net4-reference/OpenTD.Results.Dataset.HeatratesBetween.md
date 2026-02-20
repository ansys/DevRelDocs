# Class HeatratesBetween

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

Helper class for <code>NodeHeatrates</code> providing summary calculations
for heatrates between "From" and "To" node collections.  Positive heatrates
indicate heat flowing out of the From set.

```csharp
public class HeatratesBetween
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[HeatratesBetween](OpenTD.Results.Dataset.HeatratesBetween.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Properties

### FromSet

```csharp
public string FromSet { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### LinearCount

```csharp
public int LinearCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### LinearHeatrate

```csharp
public Dimensional<HeatRate> LinearHeatrate { get; }
```

#### Property Value

 Dimensional<HeatRate\>

### NodeHeatrates

```csharp
public List<NodeHeatrates> NodeHeatrates { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[NodeHeatrates](OpenTD.Results.Dataset.NodeHeatrates.md)\>

### RadiativeCount

```csharp
public int RadiativeCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RadiativeHeatrate

```csharp
public Dimensional<HeatRate> RadiativeHeatrate { get; }
```

#### Property Value

 Dimensional<HeatRate\>

### TieCount

```csharp
public int TieCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TieHeatrate

```csharp
public Dimensional<HeatRate> TieHeatrate { get; }
```

#### Property Value

 Dimensional<HeatRate\>

### ToSet

```csharp
public string ToSet { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### TotalCount

```csharp
public int TotalCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TotalHeatrate

```csharp
public Dimensional<HeatRate> TotalHeatrate { get; }
```

#### Property Value

 Dimensional<HeatRate\>


