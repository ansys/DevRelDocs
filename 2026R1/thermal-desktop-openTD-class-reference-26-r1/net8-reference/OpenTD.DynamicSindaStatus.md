# <a id="OpenTD_DynamicSindaStatus"></a> Class DynamicSindaStatus

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Use this to interact with messages that are written to the Dynamic
Sinda Status dialog during a run.

```csharp
public class DynamicSindaStatus : TdConnected
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
TdConnected ← 
[DynamicSindaStatus](OpenTD.DynamicSindaStatus.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_DynamicSindaStatus__ctor_OpenTD_ThermalDesktop_"></a> DynamicSindaStatus\(ThermalDesktop\)

```csharp
public DynamicSindaStatus(ThermalDesktop _td)
```

#### Parameters

`_td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

## Methods

### <a id="OpenTD_DynamicSindaStatus_GetMessages"></a> GetMessages\(\)

Get the messages currently shown in the Dynamic Sinda Status dialog.

```csharp
public List<string> GetMessages()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

