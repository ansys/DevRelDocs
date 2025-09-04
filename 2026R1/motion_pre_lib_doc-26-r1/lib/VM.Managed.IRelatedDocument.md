#  Interface IRelatedDocument

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This interface is to represent the related document.

```csharp
public interface IRelatedDocument
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Managed_IRelatedDocument_RegisterDependentDocument_VM_Managed_Document_"></a> RegisterDependentDocument\(Document\)

Registers the dependent document.

```csharp
void RegisterDependentDocument(Document docDependent)
```

#### Parameters

`docDependent` [Document](VM.Managed.Document.md)

The dependent document.

### <a id="VM_Managed_IRelatedDocument_UnregisterDependentDocument_VM_Managed_Document_"></a> UnregisterDependentDocument\(Document\)

Unregisters the dependent document.

```csharp
void UnregisterDependentDocument(Document docDependent)
```

#### Parameters

`docDependent` [Document](VM.Managed.Document.md)

The dependent document.

