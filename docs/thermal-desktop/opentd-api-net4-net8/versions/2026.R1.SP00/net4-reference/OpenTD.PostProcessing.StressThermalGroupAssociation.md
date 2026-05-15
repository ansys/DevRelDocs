# Class StressThermalGroupAssociation

Namespace: [OpenTD.PostProcessing](OpenTD.PostProcessing.md)  
Assembly: OpenTD.dll  

Client-side representation of class to define data mapper group associations

```csharp
[DataContract]
public class StressThermalGroupAssociation
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[StressThermalGroupAssociation](OpenTD.PostProcessing.StressThermalGroupAssociation.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### StressThermalGroupAssociation\(\)

```csharp
public StressThermalGroupAssociation()
```

## Properties

### StressElemIds

```csharp
[DataMember]
public List<int> StressElemIds { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### StressGroupName

```csharp
[DataMember]
public string StressGroupName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### StressNodeIds

```csharp
[DataMember]
public List<int> StressNodeIds { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### ThermalGroupName

```csharp
[DataMember]
public string ThermalGroupName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ThermalGroupNameGrad

```csharp
[DataMember]
public string ThermalGroupNameGrad { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)


