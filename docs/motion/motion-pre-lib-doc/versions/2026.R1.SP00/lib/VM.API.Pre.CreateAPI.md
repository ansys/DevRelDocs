# Class CreateAPI
<a id="VM_API_Pre_CreateAPI"></a>

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class implements APIs for create entity class.

```csharp
public static class CreateAPI
```

#### Inheritance

object ← 
[CreateAPI](VM.API.Pre.CreateAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_CreateAPI_Create__1_VM_Models_Pre_IDocument_System_String_System_Func_System_String___0__"></a> Create<T\>\(IDocument, string, Func<string, T\>\)

Create Entity.

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "name" })]
public static T Create<T>(this IDocument document, string name, Func<string, T> funcCreate)
```

#### Parameters

`document` IDocument

The document to create the entity.

`name` string

The name of the entity.

`funcCreate` Func<string, T\>

The customized create function.

#### Returns

 T

The new entity that is created by this API.

#### Type Parameters

`T` 

The entity type

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'name' arguments are null.

