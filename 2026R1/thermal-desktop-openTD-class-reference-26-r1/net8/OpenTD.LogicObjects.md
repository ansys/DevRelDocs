# <a id="OpenTD_LogicObjects"></a> Class LogicObjects

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Use to get all logic objects within a TD instance.

```csharp
public class LogicObjects
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[LogicObjects](OpenTD.LogicObjects.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_LogicObjects__ctor"></a> LogicObjects\(\)

```csharp
public LogicObjects()
```

### <a id="OpenTD_LogicObjects__ctor_OpenTD_ThermalDesktop_System_Boolean_"></a> LogicObjects\(ThermalDesktop, bool\)

```csharp
public LogicObjects(ThermalDesktop tdInstance, bool searchXREFS = false)
```

#### Parameters

`tdInstance` [ThermalDesktop](OpenTD.ThermalDesktop.md)

`searchXREFS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Properties

### <a id="OpenTD_LogicObjects_ArrayInterpolations"></a> ArrayInterpolations

```csharp
public List<ArrayInterpolation> ArrayInterpolations { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ArrayInterpolation](OpenTD.ArrayInterpolation.md)\>

### <a id="OpenTD_LogicObjects_FortranArrays"></a> FortranArrays

```csharp
public List<UDFACollection> FortranArrays { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[UDFACollection](OpenTD.UDFACollection.md)\>

### <a id="OpenTD_LogicObjects_PIDs"></a> PIDs

```csharp
public List<PID> PIDs { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[PID](OpenTD.PID.md)\>

### <a id="OpenTD_LogicObjects_TD"></a> TD

```csharp
public ThermalDesktop TD { get; set; }
```

#### Property Value

 [ThermalDesktop](OpenTD.ThermalDesktop.md)

### <a id="OpenTD_LogicObjects_UserArrays"></a> UserArrays

```csharp
public List<UserArray> UserArrays { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[UserArray](OpenTD.UserArray.md)\>

### <a id="OpenTD_LogicObjects_UserCodes"></a> UserCodes

```csharp
public List<UserCode> UserCodes { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[UserCode](OpenTD.UserCode.md)\>

## Methods

### <a id="OpenTD_LogicObjects_UpdateFromTD_System_Boolean_"></a> UpdateFromTD\(bool\)

Updates the client-side instance with the latest data from the TD entity.

```csharp
public void UpdateFromTD(bool searchXREFs = false)
```

#### Parameters

`searchXREFs` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

