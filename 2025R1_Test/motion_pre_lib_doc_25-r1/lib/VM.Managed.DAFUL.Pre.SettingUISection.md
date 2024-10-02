#  Class SettingUISection

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpredat.dll  

This class is to represent the setting for UI.

```csharp
public class SettingUISection
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SettingUISection](VM.Managed.DAFUL.Pre.SettingUISection.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Pre_SettingUISection__ctor"></a> SettingUISection\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Pre.SettingUISection" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SettingUISection()
```

## Properties

### <a id="VM_Managed_DAFUL_Pre_SettingUISection_Page"></a> Page

Gets or sets the page.

```csharp
public string Page { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_SettingUISection_PageType"></a> PageType

Gets the type of the page.

```csharp
public Type PageType { get; }
```

#### Property Value

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

### <a id="VM_Managed_DAFUL_Pre_SettingUISection_SettingType"></a> SettingType

Gets or sets the type of the setting.

```csharp
public Type SettingType { get; set; }
```

#### Property Value

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

### <a id="VM_Managed_DAFUL_Pre_SettingUISection_SubSections"></a> SubSections

Gets or sets the sub sections.

```csharp
public SettingUISection[] SubSections { get; set; }
```

#### Property Value

 [SettingUISection](VM.Managed.DAFUL.Pre.SettingUISection.md)\[\]

