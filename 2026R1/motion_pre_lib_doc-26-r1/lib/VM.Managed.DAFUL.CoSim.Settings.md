# Class Settings
<a id="VM_Managed_DAFUL_CoSim_Settings"></a>

Namespace: [VM.Managed.DAFUL.CoSim](VM.Managed.DAFUL.CoSim.md)  
Assembly: VMDCoSimCore.dll  

This class is to represent the setting for co-simulation configuration.

```csharp
[SettingsProvider(typeof(HybridSettingsProvider))]
[SettingsGroupName("VM.Managed.DAFUL.CoSim.Settings")]
public class Settings : SettingsBase<Settings>
```

#### Inheritance

object ← 
SettingsBase ← 
ApplicationSettingsBase ← 
[SettingsBase<Settings\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VMManagedUtil/SettingsBase.cs) ← 
[Settings](VM.Managed.DAFUL.CoSim.Settings.md)

#### Inherited Members

[SettingsBase<Settings\>.GetProperty<TSettingType\>\(string\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VMManagedUtil/SettingsBase.cs), 
[SettingsBase<Settings\>.Default](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VMManagedUtil/SettingsBase.cs), 
[SettingsBase<Settings\>.RootPath](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VMManagedUtil/SettingsBase.cs)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_CoSim_Settings__ctor"></a> Settings\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.CoSim.Settings" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Settings()
```

## Properties

### <a id="VM_Managed_DAFUL_CoSim_Settings_InterfacePath"></a> InterfacePath

Gets the interface path.

```csharp
[ApplicationScopedSetting]
public string InterfacePath { get; }
```

#### Property Value

 string

