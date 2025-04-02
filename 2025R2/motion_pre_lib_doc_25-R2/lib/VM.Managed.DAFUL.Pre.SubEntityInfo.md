#  Class SubEntityInfo

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpredat.dll  

This class is to represent the subentity information.

```csharp
public class SubEntityInfo : DockableWindowInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DockableWindowInfo](VM.Managed.DAFUL.Pre.DockableWindowInfo.md) ← 
[SubEntityInfo](VM.Managed.DAFUL.Pre.SubEntityInfo.md)

#### Inherited Members

[DockableWindowInfo.Name](VM.Managed.DAFUL.Pre.DockableWindowInfo.md\#VM\_Managed\_DAFUL\_Pre\_DockableWindowInfo\_Name), 
[DockableWindowInfo.Text](VM.Managed.DAFUL.Pre.DockableWindowInfo.md\#VM\_Managed\_DAFUL\_Pre\_DockableWindowInfo\_Text), 
[DockableWindowInfo.Image](VM.Managed.DAFUL.Pre.DockableWindowInfo.md\#VM\_Managed\_DAFUL\_Pre\_DockableWindowInfo\_Image), 
[DockableWindowInfo.Type](VM.Managed.DAFUL.Pre.DockableWindowInfo.md\#VM\_Managed\_DAFUL\_Pre\_DockableWindowInfo\_Type), 
[DockableWindowInfo.Toolbar](VM.Managed.DAFUL.Pre.DockableWindowInfo.md\#VM\_Managed\_DAFUL\_Pre\_DockableWindowInfo\_Toolbar), 
[DockableWindowInfo.Command](VM.Managed.DAFUL.Pre.DockableWindowInfo.md\#VM\_Managed\_DAFUL\_Pre\_DockableWindowInfo\_Command)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Pre_SubEntityInfo__ctor"></a> SubEntityInfo\(\)

```csharp
public SubEntityInfo()
```

## Properties

### <a id="VM_Managed_DAFUL_Pre_SubEntityInfo_InputDocuments"></a> InputDocuments

Gets or sets the input documents.

```csharp
public List<InputDocument> InputDocuments { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[InputDocument](VM.Managed.DAFUL.Pre.InputDocument.md)\>

### <a id="VM_Managed_DAFUL_Pre_SubEntityInfo_RibbonCommand"></a> RibbonCommand

Gets or sets the ribbon command.

```csharp
public string RibbonCommand { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

