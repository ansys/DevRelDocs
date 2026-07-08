# Class Settings
<a id="VM_Managed_DAFUL_Linear_Settings"></a>

Namespace: [VM.Managed.DAFUL.Linear](VM.Managed.DAFUL.Linear.md)  
Assembly: VMDLinear.dll  

```csharp
[SettingsProvider(typeof(HybridSettingsProvider))]
[SettingsGroupName("VM.Managed.DAFUL.Linear.Settings")]
public class Settings : SettingsBase<Settings>
```

#### Inheritance

object ← 
SettingsBase ← 
ApplicationSettingsBase ← 
[SettingsBase<Settings\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VMManagedUtil/SettingsBase.cs) ← 
[Settings](VM.Managed.DAFUL.Linear.Settings.md)

#### Inherited Members

[SettingsBase<Settings\>.GetProperty<TSettingType\>\(string\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VMManagedUtil/SettingsBase.cs), 
[SettingsBase<Settings\>.Default](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VMManagedUtil/SettingsBase.cs), 
[SettingsBase<Settings\>.RootPath](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VMManagedUtil/SettingsBase.cs)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Linear_Settings__ctor"></a> Settings\(\)

```csharp
public Settings()
```

## Properties

### <a id="VM_Managed_DAFUL_Linear_Settings_LowerBoundFrequency"></a> LowerBoundFrequency

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("0")]
public double LowerBoundFrequency { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_Linear_Settings_MaximumNumberOfNormalMode"></a> MaximumNumberOfNormalMode

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("20")]
public uint MaximumNumberOfNormalMode { get; set; }
```

#### Property Value

 uint

### <a id="VM_Managed_DAFUL_Linear_Settings_PenaltyValue"></a> PenaltyValue

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("1000000000")]
public double PenaltyValue { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_Linear_Settings_ShiftValue"></a> ShiftValue

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("10000")]
public double ShiftValue { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_Linear_Settings_UpperBoundFrequency"></a> UpperBoundFrequency

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("100000000")]
public double UpperBoundFrequency { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_Linear_Settings_UseAutoPenalty"></a> UseAutoPenalty

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("true")]
public bool UseAutoPenalty { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_Linear_Settings_UseAutoShift"></a> UseAutoShift

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("true")]
public bool UseAutoShift { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_Linear_Settings_UseBoundFrequency"></a> UseBoundFrequency

```csharp
[UserScopedSetting]
[NoSettingsVersionUpgrade]
[DefaultSettingValue("false")]
public bool UseBoundFrequency { get; set; }
```

#### Property Value

 bool

## Methods

### <a id="VM_Managed_DAFUL_Linear_Settings_InitializeParameter"></a> InitializeParameter\(\)

```csharp
public void InitializeParameter()
```

