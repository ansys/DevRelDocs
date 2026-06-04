# Class TimeoutProperties

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Data used to decide when to timeout an operation.

```csharp
public class TimeoutProperties
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TimeoutProperties](OpenTD.TimeoutProperties.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### TimeoutProperties\(\)

```csharp
public TimeoutProperties()
```

### TimeoutProperties\(TimeoutProperties\)

```csharp
public TimeoutProperties(TimeoutProperties x)
```

#### Parameters

`x` [TimeoutProperties](OpenTD.TimeoutProperties.md)

## Properties

### DelayMs

The delay in ms between tries.

```csharp
public int DelayMs { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumberOfTries

The number of tries before timing out.

```csharp
public int NumberOfTries { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)


