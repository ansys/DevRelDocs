# <a id="OpenTD_KickerData"></a> Class KickerData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Represents a Model Kicker task.

```csharp
[DataContract]
public class KickerData
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[KickerData](OpenTD.KickerData.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="OpenTD_KickerData__ctor"></a> KickerData\(\)

```csharp
public KickerData()
```

## Properties

### <a id="OpenTD_KickerData_IndividuallyOrAll"></a> IndividuallyOrAll

```csharp
[DataMember]
public int IndividuallyOrAll { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_KickerData_KickBoundaryNodes"></a> KickBoundaryNodes

```csharp
[DataMember]
public int KickBoundaryNodes { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_KickerData_KickDomains"></a> KickDomains

```csharp
[DataMember]
public List<string> KickDomains { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_KickerData_KickSubmodels"></a> KickSubmodels

```csharp
[DataMember]
public List<string> KickSubmodels { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_KickerData_KickValue"></a> KickValue

```csharp
[DataMember]
public double KickValue { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_KickerData_KickValueExp"></a> KickValueExp

```csharp
[DataMember]
public ExpressionData KickValueExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_KickerData_Name"></a> Name

```csharp
[DataMember]
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_KickerData_SubmodelsOrDomains"></a> SubmodelsOrDomains

```csharp
[DataMember]
public int SubmodelsOrDomains { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

