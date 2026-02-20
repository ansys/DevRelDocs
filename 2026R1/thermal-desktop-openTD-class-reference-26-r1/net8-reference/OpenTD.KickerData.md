# Class KickerData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Represents a Model Kicker task.

```csharp
[MessagePackObject(true)]
public class KickerData
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[KickerData](OpenTD.KickerData.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### KickerData\(\)

```csharp
public KickerData()
```

## Properties

### IndividuallyOrAll

```csharp
public int IndividuallyOrAll { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### KickBoundaryNodes

```csharp
public int KickBoundaryNodes { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### KickDomains

```csharp
public List<string> KickDomains { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### KickSubmodels

```csharp
public List<string> KickSubmodels { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### KickValue

```csharp
public double KickValue { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### KickValueExp

```csharp
public ExpressionData KickValueExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### Name

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### SubmodelsOrDomains

```csharp
public int SubmodelsOrDomains { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)


