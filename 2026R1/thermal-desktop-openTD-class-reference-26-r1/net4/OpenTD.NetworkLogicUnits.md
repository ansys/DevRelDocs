# <a id="OpenTD_NetworkLogicUnits"></a> Class NetworkLogicUnits

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Controls how units are handled within a NetworkLogicData object.

```csharp
[DataContract]
public class NetworkLogicUnits
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[NetworkLogicUnits](OpenTD.NetworkLogicUnits.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="OpenTD_NetworkLogicUnits__ctor"></a> NetworkLogicUnits\(\)

```csharp
public NetworkLogicUnits()
```

## Properties

### <a id="OpenTD_NetworkLogicUnits_AbzroAware"></a> AbzroAware

```csharp
[DataMember]
public NetworkLogicUnits.AbzroTypes AbzroAware { get; set; }
```

#### Property Value

 [NetworkLogicUnits](OpenTD.NetworkLogicUnits.md).[AbzroTypes](OpenTD.NetworkLogicUnits.AbzroTypes.md)

### <a id="OpenTD_NetworkLogicUnits_CheckEnergy"></a> CheckEnergy

```csharp
public bool CheckEnergy { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_NetworkLogicUnits_CheckForce"></a> CheckForce

```csharp
public bool CheckForce { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_NetworkLogicUnits_CheckMass"></a> CheckMass

```csharp
public bool CheckMass { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_NetworkLogicUnits_CheckModelLength"></a> CheckModelLength

```csharp
public bool CheckModelLength { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_NetworkLogicUnits_CheckPressure"></a> CheckPressure

```csharp
public bool CheckPressure { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_NetworkLogicUnits_CheckTemp"></a> CheckTemp

```csharp
public bool CheckTemp { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_NetworkLogicUnits_CheckTime"></a> CheckTime

```csharp
public bool CheckTime { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_NetworkLogicUnits_CheckUnitsArray"></a> CheckUnitsArray

```csharp
[DataMember]
public List<bool> CheckUnitsArray { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

### <a id="OpenTD_NetworkLogicUnits_Comment"></a> Comment

```csharp
[DataMember]
public string Comment { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_NetworkLogicUnits_NonFlocadUnitsValues"></a> NonFlocadUnitsValues

```csharp
[DataMember]
public UnitsData NonFlocadUnitsValues { get; set; }
```

#### Property Value

 [UnitsData](OpenTD.UnitsData.md)

### <a id="OpenTD_NetworkLogicUnits_PatmosAware"></a> PatmosAware

```csharp
[DataMember]
public NetworkLogicUnits.PatmosTypes PatmosAware { get; set; }
```

#### Property Value

 [NetworkLogicUnits](OpenTD.NetworkLogicUnits.md).[PatmosTypes](OpenTD.NetworkLogicUnits.PatmosTypes.md)

### <a id="OpenTD_NetworkLogicUnits_SindaUidDependentValue"></a> SindaUidDependentValue

```csharp
[DataMember]
public NetworkLogicUnits.SindaUidTypes SindaUidDependentValue { get; set; }
```

#### Property Value

 [NetworkLogicUnits](OpenTD.NetworkLogicUnits.md).[SindaUidTypes](OpenTD.NetworkLogicUnits.SindaUidTypes.md)

### <a id="OpenTD_NetworkLogicUnits_SindaUidOrNonFlocad"></a> SindaUidOrNonFlocad

```csharp
[DataMember]
public NetworkLogicUnits.UnitSystemTypes SindaUidOrNonFlocad { get; set; }
```

#### Property Value

 [NetworkLogicUnits](OpenTD.NetworkLogicUnits.md).[UnitSystemTypes](OpenTD.NetworkLogicUnits.UnitSystemTypes.md)

## See Also

[NetworkLogicData](OpenTD.NetworkLogicData.md)

