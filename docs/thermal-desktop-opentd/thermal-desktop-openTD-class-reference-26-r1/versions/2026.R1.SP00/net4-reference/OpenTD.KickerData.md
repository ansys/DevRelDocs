# Class KickerData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Represents a Model Kicker task.

```csharp
[DataContract]
public class KickerData
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[KickerData](OpenTD.KickerData.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### KickerData\(\)

```csharp
public KickerData()
```

## Properties

### IndividuallyOrAll

```csharp
[DataMember]
public int IndividuallyOrAll { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### KickBoundaryNodes

```csharp
[DataMember]
public int KickBoundaryNodes { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### KickDomains

```csharp
[DataMember]
public List<string> KickDomains { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### KickSubmodels

```csharp
[DataMember]
public List<string> KickSubmodels { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### KickValue

```csharp
[DataMember]
public double KickValue { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### KickValueExp

```csharp
[DataMember]
public ExpressionData KickValueExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### Name

```csharp
[DataMember]
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### SubmodelsOrDomains

```csharp
[DataMember]
public int SubmodelsOrDomains { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)


