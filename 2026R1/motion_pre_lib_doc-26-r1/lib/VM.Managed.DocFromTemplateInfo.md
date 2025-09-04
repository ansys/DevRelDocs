#  Class DocFromTemplateInfo

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the template document information in document create information.

```csharp
public class DocFromTemplateInfo : DocCreateInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DocCreateInfo](VM.Managed.DocCreateInfo.md) ← 
[DocFromTemplateInfo](VM.Managed.DocFromTemplateInfo.md)

#### Inherited Members

[DocCreateInfo.ModeChangeOperation](VM.Managed.DocCreateInfo.md\#VM\_Managed\_DocCreateInfo\_ModeChangeOperation), 
[DocCreateInfo.ActiveMode](VM.Managed.DocCreateInfo.md\#VM\_Managed\_DocCreateInfo\_ActiveMode), 
[DocCreateInfo.KernelLengthUnit](VM.Managed.DocCreateInfo.md\#VM\_Managed\_DocCreateInfo\_KernelLengthUnit), 
[DocCreateInfo.Unit](VM.Managed.DocCreateInfo.md\#VM\_Managed\_DocCreateInfo\_Unit), 
[DocCreateInfo.DocumentName](VM.Managed.DocCreateInfo.md\#VM\_Managed\_DocCreateInfo\_DocumentName)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DocFromTemplateInfo__ctor"></a> DocFromTemplateInfo\(\)

```csharp
public DocFromTemplateInfo()
```

## Properties

### <a id="VM_Managed_DocFromTemplateInfo_TemplatePath"></a> TemplatePath

Gets or sets the template document path.

```csharp
public string TemplatePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

