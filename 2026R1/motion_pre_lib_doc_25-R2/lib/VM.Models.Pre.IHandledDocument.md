#  Interface IHandledDocument

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

```csharp
public interface IHandledDocument : IDocument, IObject, IEventProvider, IContainer, ILinkContainer, IOwned, IHasID
```

#### Implements

[IDocument](VM.Models.Pre.IDocument.md), 
[IObject](VM.Models.Pre.IObject.md), 
[IEventProvider](VM.Models.Pre.IEventProvider.md), 
[IContainer](VM.Models.Pre.IContainer.md), 
[ILinkContainer](VM.Models.Pre.ILinkContainer.md), 
[IOwned](VM.Models.Pre.IOwned.md), 
IHasID

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[IDocumentExtensions.IsExistNameInDocument\(IDocument, string\)](VM.Models.Pre.IDocumentExtensions.md\#VM\_Models\_Pre\_IDocumentExtensions\_IsExistNameInDocument\_VM\_Models\_Pre\_IDocument\_System\_String\_)

## Properties

### <a id="VM_Models_Pre_IHandledDocument_Handle"></a> Handle

```csharp
UIntPtr Handle { get; }
```

#### Property Value

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

