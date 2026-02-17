# <a id="OpenTD_AdditionalRadiationTaskData"></a> Class AdditionalRadiationTaskData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Represents one Radiation Analysis Data Control item

```csharp
public class AdditionalRadiationTaskData
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AdditionalRadiationTaskData](OpenTD.AdditionalRadiationTaskData.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_AdditionalRadiationTaskData__ctor"></a> AdditionalRadiationTaskData\(\)

```csharp
public AdditionalRadiationTaskData()
```

## Properties

### <a id="OpenTD_AdditionalRadiationTaskData_CalcAlbedo"></a> CalcAlbedo

```csharp
public int CalcAlbedo { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_AdditionalRadiationTaskData_CalcDiffuseSkyAlbedo"></a> CalcDiffuseSkyAlbedo

```csharp
public int CalcDiffuseSkyAlbedo { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_AdditionalRadiationTaskData_CalcDiffuseSkyIR"></a> CalcDiffuseSkyIR

```csharp
public int CalcDiffuseSkyIR { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_AdditionalRadiationTaskData_CalcDiffuseSkySolar"></a> CalcDiffuseSkySolar

```csharp
public int CalcDiffuseSkySolar { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_AdditionalRadiationTaskData_CalcNodes"></a> CalcNodes

```csharp
public List<string> CalcNodes { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_AdditionalRadiationTaskData_CalcNodesType"></a> CalcNodesType

```csharp
public int CalcNodesType { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_AdditionalRadiationTaskData_CalcPlanet"></a> CalcPlanet

```csharp
public int CalcPlanet { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_AdditionalRadiationTaskData_CalcPos"></a> CalcPos

```csharp
public List<int> CalcPos { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="OpenTD_AdditionalRadiationTaskData_CalcPosType"></a> CalcPosType

```csharp
public int CalcPosType { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_AdditionalRadiationTaskData_CalcSolar"></a> CalcSolar

```csharp
public int CalcSolar { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_AdditionalRadiationTaskData_DhError"></a> DhError

```csharp
public double DhError { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_AdditionalRadiationTaskData_DhErrorExp"></a> DhErrorExp

```csharp
public ExpressionData DhErrorExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_AdditionalRadiationTaskData_DhRaysError"></a> DhRaysError

```csharp
public ulong DhRaysError { get; set; }
```

#### Property Value

 [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### <a id="OpenTD_AdditionalRadiationTaskData_DhRaysErrorExp"></a> DhRaysErrorExp

```csharp
public ExpressionData DhRaysErrorExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_AdditionalRadiationTaskData_EnergyCutoffFraction"></a> EnergyCutoffFraction

```csharp
public double EnergyCutoffFraction { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_AdditionalRadiationTaskData_EnergyCutoffFractionExp"></a> EnergyCutoffFractionExp

```csharp
public ExpressionData EnergyCutoffFractionExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_AdditionalRadiationTaskData_RaysPerNode"></a> RaysPerNode

```csharp
public ulong RaysPerNode { get; set; }
```

#### Property Value

 [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### <a id="OpenTD_AdditionalRadiationTaskData_RaysPerNodeExp"></a> RaysPerNodeExp

```csharp
public ExpressionData RaysPerNodeExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

