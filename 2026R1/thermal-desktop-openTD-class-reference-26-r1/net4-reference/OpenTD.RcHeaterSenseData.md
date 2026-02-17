# <a id="OpenTD_RcHeaterSenseData"></a> Class RcHeaterSenseData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Data describing what a heater senses.

```csharp
[DataContract]
public class RcHeaterSenseData
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RcHeaterSenseData](OpenTD.RcHeaterSenseData.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="OpenTD_RcHeaterSenseData__ctor"></a> RcHeaterSenseData\(\)

```csharp
public RcHeaterSenseData()
```

## Properties

### <a id="OpenTD_RcHeaterSenseData_HeaterSenseType"></a> HeaterSenseType

```csharp
[DataMember]
public RcHeaterSenseData.HeaterSenseTypes HeaterSenseType { get; set; }
```

#### Property Value

 [RcHeaterSenseData](OpenTD.RcHeaterSenseData.md).[HeaterSenseTypes](OpenTD.RcHeaterSenseData.HeaterSenseTypes.md)

### <a id="OpenTD_RcHeaterSenseData_UserLogic"></a> UserLogic

```csharp
[DataMember]
public string UserLogic { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

