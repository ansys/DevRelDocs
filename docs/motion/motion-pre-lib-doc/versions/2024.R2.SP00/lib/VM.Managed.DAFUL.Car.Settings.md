# Class Settings

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

This class is to represent the setting for car configuration.

```csharp
[SettingsProvider(typeof(HybridSettingsProvider))]
[SettingsGroupName("VM.Managed.DAFUL.Car.Settings")]
public class Settings : SettingsBase<Settings>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SettingsBase](https://learn.microsoft.com/dotnet/api/system.configuration.settingsbase) ← 
[ApplicationSettingsBase](https://learn.microsoft.com/dotnet/api/system.configuration.applicationsettingsbase) ← 
SettingsBase<Settings\> ← 
[Settings](VM.Managed.DAFUL.Car.Settings.md)

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

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.Settings" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Settings()
```

## Properties

### FourPostTestrigPath

Gets the four post testrig path.

```csharp
[ApplicationScopedSetting]
public string FourPostTestrigPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### FullTestrigPath

Gets the full testrig path.

```csharp
[ApplicationScopedSetting]
public string FullTestrigPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### HalfTestrigPath

Gets the half testrig path.

```csharp
[ApplicationScopedSetting]
public string HalfTestrigPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### IsoLaneChangePath

Gets the iso lane change path.

```csharp
[ApplicationScopedSetting]
public string IsoLaneChangePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### RoadPath

Gets or sets the road path.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("..\\Document\\Standard Work\\Roads\\2d_flat.rdf")]
public string RoadPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ShimmyJudderTestrigPath

Gets the shimmy judder testrig path.

```csharp
[ApplicationScopedSetting]
public string ShimmyJudderTestrigPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### StandardWorkPath

Gets the standard work path.

```csharp
[ApplicationScopedSetting]
public string StandardWorkPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### TireTestrigPath

Gets the tire testrig path.

```csharp
[ApplicationScopedSetting]
public string TireTestrigPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### UsedFourPostTestRigName

Gets or sets the name of the used four post test rig.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
public string UsedFourPostTestRigName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### UsedFullTestRigName

Gets or sets the name of the used full test rig.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
public string UsedFullTestRigName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### UsedHalfTestRigName

Gets or sets the name of the used half test rig.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
public string UsedHalfTestRigName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### UsedShimmyJudderTestRigName

Gets or sets the name of the used shimmy judder test rig.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
public string UsedShimmyJudderTestRigName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### UsedTireTestRigName

Gets or sets the name of the used tire test rig.

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
public string UsedTireTestRigName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)


