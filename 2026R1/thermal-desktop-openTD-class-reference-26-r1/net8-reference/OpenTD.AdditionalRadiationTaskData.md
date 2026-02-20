# Class AdditionalRadiationTaskData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Represents one Radiation Analysis Data Control item

```csharp
[MessagePackObject(true)]
public class AdditionalRadiationTaskData
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AdditionalRadiationTaskData](OpenTD.AdditionalRadiationTaskData.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### AdditionalRadiationTaskData\(\)

```csharp
public AdditionalRadiationTaskData()
```

## Properties

### CalcAlbedo

```csharp
public int CalcAlbedo { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CalcDiffuseSkyAlbedo

```csharp
public int CalcDiffuseSkyAlbedo { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CalcDiffuseSkyIR

```csharp
public int CalcDiffuseSkyIR { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CalcDiffuseSkySolar

```csharp
public int CalcDiffuseSkySolar { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CalcNodes

```csharp
public List<string> CalcNodes { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### CalcNodesType

```csharp
public int CalcNodesType { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CalcPlanet

```csharp
public int CalcPlanet { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CalcPos

```csharp
public List<int> CalcPos { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### CalcPosType

```csharp
public int CalcPosType { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CalcSolar

```csharp
public int CalcSolar { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DhError

```csharp
public double DhError { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### DhErrorExp

```csharp
public ExpressionData DhErrorExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### DhRaysError

```csharp
public ulong DhRaysError { get; set; }
```

#### Property Value

 [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### DhRaysErrorExp

```csharp
public ExpressionData DhRaysErrorExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### EnergyCutoffFraction

```csharp
public double EnergyCutoffFraction { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### EnergyCutoffFractionExp

```csharp
public ExpressionData EnergyCutoffFractionExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### RaysPerNode

```csharp
public ulong RaysPerNode { get; set; }
```

#### Property Value

 [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### RaysPerNodeExp

```csharp
public ExpressionData RaysPerNodeExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)


