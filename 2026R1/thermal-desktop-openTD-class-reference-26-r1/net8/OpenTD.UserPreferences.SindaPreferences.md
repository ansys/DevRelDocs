# <a id="OpenTD_UserPreferences_SindaPreferences"></a> Class SindaPreferences

Namespace: [OpenTD.UserPreferences](OpenTD.UserPreferences.md)  
Assembly: OpenTD.dll  

Use to set the global Sinda preferences.

```csharp
public class SindaPreferences : Preferences, IUpdatable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
TdConnected ← 
Preferences ← 
[SindaPreferences](OpenTD.UserPreferences.SindaPreferences.md)

#### Implements

[IUpdatable](OpenTD.IUpdatable.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_UserPreferences_SindaPreferences__ctor"></a> SindaPreferences\(\)

```csharp
public SindaPreferences()
```

### <a id="OpenTD_UserPreferences_SindaPreferences__ctor_OpenTD_ThermalDesktop_"></a> SindaPreferences\(ThermalDesktop\)

```csharp
public SindaPreferences(ThermalDesktop _td)
```

#### Parameters

`_td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

## Properties

### <a id="OpenTD_UserPreferences_SindaPreferences_sindaCsrOrSave"></a> sindaCsrOrSave

```csharp
public int sindaCsrOrSave { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_SindaPreferences_sindaRunStatusWindowIndex"></a> sindaRunStatusWindowIndex

```csharp
public int sindaRunStatusWindowIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_SindaPreferences_sindaUseOpenMP"></a> sindaUseOpenMP

```csharp
public int sindaUseOpenMP { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_SindaPreferences_thermalAnalyzer"></a> thermalAnalyzer

```csharp
public int thermalAnalyzer { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UserPreferences_SindaPreferences_waitForSindaLicense"></a> waitForSindaLicense

```csharp
public int waitForSindaLicense { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="OpenTD_UserPreferences_SindaPreferences_Update"></a> Update\(\)

Updates the TD entity with the latest client data.

```csharp
public void Update()
```

### <a id="OpenTD_UserPreferences_SindaPreferences_UpdateFromTD"></a> UpdateFromTD\(\)

Updates the client-side instance with the latest data from the TD entity.

```csharp
public void UpdateFromTD()
```

