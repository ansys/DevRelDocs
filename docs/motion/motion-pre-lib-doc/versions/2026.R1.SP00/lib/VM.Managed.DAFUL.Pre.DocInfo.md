# Class DocInfo
<a id="VM_Managed_DAFUL_Pre_DocInfo"></a>

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpredat.dll  

This class is to represent the document information.

```csharp
public class DocInfo
```

#### Inheritance

object ← 
[DocInfo](VM.Managed.DAFUL.Pre.DocInfo.md)

#### Derived

[AssemblyDocInfo](VM.Managed.DAFUL.Pre.AssemblyDocInfo.md), 
[ControlDocInfo](VM.Managed.DAFUL.Pre.ControlDocInfo.md), 
[PropertyDocInfo](VM.Managed.DAFUL.Pre.PropertyDocInfo.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Pre_DocInfo__ctor"></a> DocInfo\(\)

```csharp
public DocInfo()
```

## Properties

### <a id="VM_Managed_DAFUL_Pre_DocInfo_ActiveModel"></a> ActiveModel

Gets or sets the active model.

```csharp
public Model ActiveModel { get; set; }
```

#### Property Value

 [Model](VM.Managed.DAFUL.Pre.Model.md)

### <a id="VM_Managed_DAFUL_Pre_DocInfo_ActiveWork"></a> ActiveWork

Gets or sets the active work.

```csharp
public Work ActiveWork { get; set; }
```

#### Property Value

 [Work](VM.Managed.DAFUL.Pre.Work.md)

### <a id="VM_Managed_DAFUL_Pre_DocInfo_Description"></a> Description

Gets or sets the description.

```csharp
public string Description { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Pre_DocInfo_Designer"></a> Designer

Gets or sets the designer.

```csharp
public string Designer { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Pre_DocInfo_DocCreateInfo"></a> DocCreateInfo

Gets or sets the doc create info.

```csharp
public DocCreateInfo DocCreateInfo { get; set; }
```

#### Property Value

 DocCreateInfo

### <a id="VM_Managed_DAFUL_Pre_DocInfo_DocumentType"></a> DocumentType

Gets the type of the document.

```csharp
public Type DocumentType { get; }
```

#### Property Value

 Type

### <a id="VM_Managed_DAFUL_Pre_DocInfo_Extension"></a> Extension

Gets or sets the extension.

```csharp
public string Extension { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Pre_DocInfo_Filter"></a> Filter

Gets or sets the filter.

```csharp
public string Filter { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Pre_DocInfo_Group"></a> Group

Gets or sets the group.

```csharp
public string Group { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Pre_DocInfo_Handle"></a> Handle

Gets or sets the handle.

```csharp
public UIntPtr Handle { get; set; }
```

#### Property Value

 UIntPtr

### <a id="VM_Managed_DAFUL_Pre_DocInfo_Helper"></a> Helper

Gets or sets the helper.

```csharp
public IDocInfoHelper Helper { set; }
```

#### Property Value

 [IDocInfoHelper](VM.Managed.DAFUL.Pre.IDocInfoHelper.md)

### <a id="VM_Managed_DAFUL_Pre_DocInfo_Hidden"></a> Hidden

Gets or sets the hidden state.

```csharp
public string Hidden { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Pre_DocInfo_Icon"></a> Icon

Gets or sets the icon.

```csharp
public Icon Icon { get; }
```

#### Property Value

 Icon

### <a id="VM_Managed_DAFUL_Pre_DocInfo_IconFile"></a> IconFile

Gets or sets the icon file.

```csharp
public string IconFile { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Pre_DocInfo_IsFailedLicense"></a> IsFailedLicense

Gets a value indicating whether this instance's license is failed.

```csharp
public bool IsFailedLicense { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_Pre_DocInfo_Mode"></a> Mode

Gets or sets the mode.

```csharp
public string Mode { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Pre_DocInfo_Modules"></a> Modules

Gets or sets the module files.

```csharp
public string[] Modules { get; set; }
```

#### Property Value

 string\[\]

### <a id="VM_Managed_DAFUL_Pre_DocInfo_Name"></a> Name

Gets or sets the name.

```csharp
public string Name { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Pre_DocInfo_Navigator"></a> Navigator

Gets or sets the navigator.

```csharp
public string Navigator { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Pre_DocInfo_NewDocumentName"></a> NewDocumentName

Gets the new name of the document.

```csharp
public string NewDocumentName { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Pre_DocInfo_NewFormType"></a> NewFormType

Gets or sets the new type of the form.

```csharp
public string NewFormType { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Pre_DocInfo_Toolkit"></a> Toolkit

Gets or sets the toolkit.

```csharp
public string Toolkit { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Pre_DocInfo_Type"></a> Type

Gets or sets the type.

```csharp
public string Type { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Pre_DocInfo_TypeID"></a> TypeID

Gets or sets the type ID.

```csharp
public string TypeID { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Pre_DocInfo_TypeName"></a> TypeName

Gets or sets the name of the type.

```csharp
public string TypeName { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Pre_DocInfo_UntitledDocCount"></a> UntitledDocCount

Gets or sets the untitled doc count.

```csharp
public uint UntitledDocCount { get; set; }
```

#### Property Value

 uint

