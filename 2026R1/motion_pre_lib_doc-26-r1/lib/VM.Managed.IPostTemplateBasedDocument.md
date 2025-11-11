# Interface IPostTemplateBasedDocument
<a id="VM_Managed_IPostTemplateBasedDocument"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This interface is to represent the template document.

```csharp
public interface IPostTemplateBasedDocument
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Managed_IPostTemplateBasedDocument_CreateGroup"></a> CreateGroup\(\)

Create group

```csharp
void CreateGroup()
```

### <a id="VM_Managed_IPostTemplateBasedDocument_SetTemplateInfo_VM_Managed_DocFromTemplateInfo_"></a> SetTemplateInfo\(DocFromTemplateInfo\)

Sets the template information.

```csharp
void SetTemplateInfo(DocFromTemplateInfo docTemplateInfo)
```

#### Parameters

`docTemplateInfo` [DocFromTemplateInfo](VM.Managed.DocFromTemplateInfo.md)

The document template information.

