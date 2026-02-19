# Class LogicObjects

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Use to get all logic objects within a TD instance.

```csharp
[MessagePackObject(true)]
public class LogicObjects
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[LogicObjects](OpenTD.LogicObjects.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### LogicObjects\(\)

```csharp
public LogicObjects()
```

### LogicObjects\(ThermalDesktop, bool\)

```csharp
public LogicObjects(ThermalDesktop tdInstance, bool searchXREFS = false)
```

#### Parameters

`tdInstance` [ThermalDesktop](OpenTD.ThermalDesktop.md)

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Properties

### ArrayInterpolations

```csharp
public List<ArrayInterpolation> ArrayInterpolations { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ArrayInterpolation](OpenTD.ArrayInterpolation.md)\>

### FortranArrays

```csharp
public List<UDFACollection> FortranArrays { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[UDFACollection](OpenTD.UDFACollection.md)\>

### PIDs

```csharp
public List<PID> PIDs { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[PID](OpenTD.PID.md)\>

### TD

```csharp
[IgnoreMember]
public ThermalDesktop TD { get; set; }
```

#### Property Value

 [ThermalDesktop](OpenTD.ThermalDesktop.md)

### UserArrays

```csharp
public List<UserArray> UserArrays { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[UserArray](OpenTD.UserArray.md)\>

### UserCodes

```csharp
public List<UserCode> UserCodes { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[UserCode](OpenTD.UserCode.md)\>

## Methods

### UpdateFromTD\(bool\)

Updates the client-side instance with the latest data from the TD entity.

```csharp
public void UpdateFromTD(bool searchXREFs = false)
```

#### Parameters

`searchXREFs` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


