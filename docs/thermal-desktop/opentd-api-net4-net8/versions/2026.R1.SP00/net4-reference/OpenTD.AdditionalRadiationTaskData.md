# Class AdditionalRadiationTaskData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Represents one Radiation Analysis Data Control item

```csharp
[DataContract]
public class AdditionalRadiationTaskData
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AdditionalRadiationTaskData](OpenTD.AdditionalRadiationTaskData.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### AdditionalRadiationTaskData\(\)

```csharp
public AdditionalRadiationTaskData()
```

## Properties

### CalcAlbedo

```csharp
[DataMember]
public int CalcAlbedo { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CalcDiffuseSkyAlbedo

```csharp
[DataMember]
public int CalcDiffuseSkyAlbedo { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CalcDiffuseSkyIR

```csharp
[DataMember]
public int CalcDiffuseSkyIR { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CalcDiffuseSkySolar

```csharp
[DataMember]
public int CalcDiffuseSkySolar { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CalcNodes

```csharp
[DataMember]
public List<string> CalcNodes { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### CalcNodesType

```csharp
[DataMember]
public int CalcNodesType { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CalcPlanet

```csharp
[DataMember]
public int CalcPlanet { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CalcPos

```csharp
[DataMember]
public List<int> CalcPos { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### CalcPosType

```csharp
[DataMember]
public int CalcPosType { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CalcSolar

```csharp
[DataMember]
public int CalcSolar { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DhError

```csharp
[DataMember]
public double DhError { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### DhErrorExp

```csharp
[DataMember]
public ExpressionData DhErrorExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### DhRaysError

```csharp
[DataMember]
public ulong DhRaysError { get; set; }
```

#### Property Value

 [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### DhRaysErrorExp

```csharp
[DataMember]
public ExpressionData DhRaysErrorExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### EnergyCutoffFraction

```csharp
[DataMember]
public double EnergyCutoffFraction { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### EnergyCutoffFractionExp

```csharp
[DataMember]
public ExpressionData EnergyCutoffFractionExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### RaysPerNode

```csharp
[DataMember]
public ulong RaysPerNode { get; set; }
```

#### Property Value

 [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### RaysPerNodeExp

```csharp
[DataMember]
public ExpressionData RaysPerNodeExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)


