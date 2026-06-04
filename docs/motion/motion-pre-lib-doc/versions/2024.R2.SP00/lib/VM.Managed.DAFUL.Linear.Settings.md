# Class Settings

Namespace: [VM.Managed.DAFUL.Linear](VM.Managed.DAFUL.Linear.md)  
Assembly: VMDLinear.dll  

```csharp
[SettingsProvider(typeof(HybridSettingsProvider))]
[SettingsGroupName("VM.Managed.DAFUL.Linear.Settings")]
public class Settings : SettingsBase<Settings>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SettingsBase](https://learn.microsoft.com/dotnet/api/system.configuration.settingsbase) ← 
[ApplicationSettingsBase](https://learn.microsoft.com/dotnet/api/system.configuration.applicationsettingsbase) ← 
SettingsBase<Settings\> ← 
[Settings](VM.Managed.DAFUL.Linear.Settings.md)

#### Inherited Members

SettingsBase<Settings\>.GetProperty<TSettingType\>\(string\), 
SettingsBase<Settings\>.Default, 
SettingsBase<Settings\>.RootPath

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### Settings\(\)

```csharp
public Settings()
```

## Properties

### LowerBoundFrequency

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("0")]
public double LowerBoundFrequency { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### MaximumNumberOfNormalMode

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("20")]
public uint MaximumNumberOfNormalMode { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### PenaltyValue

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("1000000000")]
public double PenaltyValue { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ShiftValue

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("10000")]
public double ShiftValue { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### UpperBoundFrequency

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("100000000")]
public double UpperBoundFrequency { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### UseAutoPenalty

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("true")]
public bool UseAutoPenalty { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseAutoShift

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("true")]
public bool UseAutoShift { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseBoundFrequency

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("false")]
public bool UseBoundFrequency { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### InitializeParameter\(\)

```csharp
public void InitializeParameter()
```


