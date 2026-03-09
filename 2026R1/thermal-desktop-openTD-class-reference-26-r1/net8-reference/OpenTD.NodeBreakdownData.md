# Class NodeBreakdownData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Represents node subdivisions, e.g., the u and v nodal breakdowns in a conic.

```csharp
[MessagePackObject(true)]
public class NodeBreakdownData
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[NodeBreakdownData](OpenTD.NodeBreakdownData.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### NodeBreakdownData\(\)

```csharp
public NodeBreakdownData()
```

## Properties

### Boundaries

```csharp
public List<double> Boundaries { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### Num

```csharp
public int Num { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumExp

```csharp
public ExpressionData NumExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### Spacing

```csharp
public NodeBreakdownData.SpacingType Spacing { get; set; }
```

#### Property Value

 [NodeBreakdownData](OpenTD.NodeBreakdownData.md).[SpacingType](OpenTD.NodeBreakdownData.SpacingType.md)


