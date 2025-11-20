# Interface IDocument3D
<a id="VM_Models_Pre_IDocument3D"></a>

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

```csharp
public interface IDocument3D : IHandledDocument, IDocument, IObject, IEventProvider, IContainer, ILinkContainer, IOwned, IHasID, IDocumentOwner
```

#### Implements

[IHandledDocument](VM.Models.Pre.IHandledDocument.md), 
[IDocument](VM.Models.Pre.IDocument.md), 
[IObject](VM.Models.Pre.IObject.md), 
[IEventProvider](VM.Models.Pre.IEventProvider.md), 
[IContainer](VM.Models.Pre.IContainer.md), 
[ILinkContainer](VM.Models.Pre.ILinkContainer.md), 
[IOwned](VM.Models.Pre.IOwned.md), 
IHasID, 
[IDocumentOwner](VM.Models.Pre.IDocumentOwner.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[IDocumentExtensions.IsExistNameInDocument\(IDocument, string\)](VM.Models.Pre.IDocumentExtensions.md\#VM\_Models\_Pre\_IDocumentExtensions\_IsExistNameInDocument\_VM\_Models\_Pre\_IDocument\_System\_String\_)

## Properties

### <a id="VM_Models_Pre_IDocument3D_Categories"></a> Categories

```csharp
IEnumerable<string> Categories { get; }
```

#### Property Value

 IEnumerable<string\>

### <a id="VM_Models_Pre_IDocument3D_Comment"></a> Comment

```csharp
string Comment { get; set; }
```

#### Property Value

 string

### <a id="VM_Models_Pre_IDocument3D_IconSize"></a> IconSize

```csharp
double IconSize { get; set; }
```

#### Property Value

 double

## Methods

### <a id="VM_Models_Pre_IDocument3D_FindCategory_System_String_"></a> FindCategory\(string\)

```csharp
string FindCategory(string typeName)
```

#### Parameters

`typeName` string

#### Returns

 string

### <a id="VM_Models_Pre_IDocument3D_GetCategoryChildren_System_String_"></a> GetCategoryChildren\(string\)

```csharp
IEnumerable<IObjectBase> GetCategoryChildren(string categoryName)
```

#### Parameters

`categoryName` string

#### Returns

 IEnumerable<[IObjectBase](VM.Models.Pre.IObjectBase.md)\>

