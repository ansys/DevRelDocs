# Class StressThermalGroupAssociation

Namespace: [OpenTD.PostProcessing](OpenTD.PostProcessing.md)  
Assembly: OpenTD.dll  

Client-side representation of class to define data mapper group associations

```csharp
[MessagePackObject(true)]
public class StressThermalGroupAssociation
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[StressThermalGroupAssociation](OpenTD.PostProcessing.StressThermalGroupAssociation.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### StressThermalGroupAssociation\(\)

```csharp
public StressThermalGroupAssociation()
```

## Properties

### StressElemIds

```csharp
public List<int> StressElemIds { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### StressGroupName

```csharp
public string StressGroupName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### StressNodeIds

```csharp
public List<int> StressNodeIds { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### ThermalGroupName

```csharp
public string ThermalGroupName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ThermalGroupNameGrad

```csharp
public string ThermalGroupNameGrad { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)


