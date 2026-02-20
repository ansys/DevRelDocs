# Class NetworkLogicUnits

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Controls how units are handled within a NetworkLogicData object.

```csharp
[MessagePackObject(true)]
public class NetworkLogicUnits
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[NetworkLogicUnits](OpenTD.NetworkLogicUnits.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### NetworkLogicUnits\(\)

```csharp
public NetworkLogicUnits()
```

## Properties

### AbzroAware

```csharp
public NetworkLogicUnits.AbzroTypes AbzroAware { get; set; }
```

#### Property Value

 [NetworkLogicUnits](OpenTD.NetworkLogicUnits.md).[AbzroTypes](OpenTD.NetworkLogicUnits.AbzroTypes.md)

### CheckEnergy

```csharp
[IgnoreMember]
public bool CheckEnergy { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CheckForce

```csharp
[IgnoreMember]
public bool CheckForce { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CheckMass

```csharp
[IgnoreMember]
public bool CheckMass { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CheckModelLength

```csharp
[IgnoreMember]
public bool CheckModelLength { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CheckPressure

```csharp
[IgnoreMember]
public bool CheckPressure { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CheckTemp

```csharp
[IgnoreMember]
public bool CheckTemp { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CheckTime

```csharp
[IgnoreMember]
public bool CheckTime { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CheckUnitsArray

```csharp
public List<bool> CheckUnitsArray { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

### Comment

```csharp
public string Comment { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### NonFlocadUnitsValues

```csharp
public UnitsData NonFlocadUnitsValues { get; set; }
```

#### Property Value

 [UnitsData](OpenTD.UnitsData.md)

### PatmosAware

```csharp
public NetworkLogicUnits.PatmosTypes PatmosAware { get; set; }
```

#### Property Value

 [NetworkLogicUnits](OpenTD.NetworkLogicUnits.md).[PatmosTypes](OpenTD.NetworkLogicUnits.PatmosTypes.md)

### SindaUidDependentValue

```csharp
public NetworkLogicUnits.SindaUidTypes SindaUidDependentValue { get; set; }
```

#### Property Value

 [NetworkLogicUnits](OpenTD.NetworkLogicUnits.md).[SindaUidTypes](OpenTD.NetworkLogicUnits.SindaUidTypes.md)

### SindaUidOrNonFlocad

```csharp
public NetworkLogicUnits.UnitSystemTypes SindaUidOrNonFlocad { get; set; }
```

#### Property Value

 [NetworkLogicUnits](OpenTD.NetworkLogicUnits.md).[UnitSystemTypes](OpenTD.NetworkLogicUnits.UnitSystemTypes.md)

## See Also

[NetworkLogicData](OpenTD.NetworkLogicData.md)


