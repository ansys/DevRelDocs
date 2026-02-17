# <a id="OpenTD_NodeBreakdownData"></a> Class NodeBreakdownData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Represents node subdivisions, e.g., the u and v nodal breakdowns in a conic.

```csharp
[DataContract]
public class NodeBreakdownData
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[NodeBreakdownData](OpenTD.NodeBreakdownData.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="OpenTD_NodeBreakdownData__ctor"></a> NodeBreakdownData\(\)

```csharp
public NodeBreakdownData()
```

## Properties

### <a id="OpenTD_NodeBreakdownData_Boundaries"></a> Boundaries

```csharp
[DataMember]
public List<double> Boundaries { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="OpenTD_NodeBreakdownData_Num"></a> Num

```csharp
[DataMember]
public int Num { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_NodeBreakdownData_NumExp"></a> NumExp

```csharp
[DataMember]
public ExpressionData NumExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_NodeBreakdownData_Spacing"></a> Spacing

```csharp
[DataMember]
public NodeBreakdownData.SpacingType Spacing { get; set; }
```

#### Property Value

 [NodeBreakdownData](OpenTD.NodeBreakdownData.md).[SpacingType](OpenTD.NodeBreakdownData.SpacingType.md)

