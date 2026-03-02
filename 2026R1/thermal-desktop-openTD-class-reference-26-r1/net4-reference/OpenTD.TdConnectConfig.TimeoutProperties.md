# Class TdConnectConfig.TimeoutProperties

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Data used to decide when to timeout an operation.

```csharp
public class TdConnectConfig.TimeoutProperties
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TdConnectConfig.TimeoutProperties](OpenTD.TdConnectConfig.TimeoutProperties.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

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


