# Class DesignFrameAPI
<a id="VM_API_Pre_DesignFrameAPI"></a>

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class implements APIs for <xref href="VM.Managed.DesignFrame" data-throw-if-not-resolved="false"></xref> class.

```csharp
public static class DesignFrameAPI
```

#### Inheritance

object ← 
[DesignFrameAPI](VM.API.Pre.DesignFrameAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_DesignFrameAPI_CreateDesignFrame_VM_Models_Pre_IDocument_System_String_VM_TMatrix_"></a> CreateDesignFrame\(IDocument, string, TMatrix\)

Create <xref href="VM.Managed.DesignFrame" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "transform" })]
public static Obj CreateDesignFrame(this IDocument document, string name, TMatrix transform)
```

#### Parameters

`document` IDocument

The document to create the design frame.

`name` string

The name of the design frame.

`transform` TMatrix

The transform to create the design frame.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DesignFrame" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'transform' argument is null.

### <a id="VM_API_Pre_DesignFrameAPI_CreateDesignFrame_VM_Models_Pre_IDocument_System_String_VM_Managed_TransformBase_VM_Managed_SymmetricType_"></a> CreateDesignFrame\(IDocument, string, TransformBase, SymmetricType\)

Create <xref href="VM.Managed.DesignFrame" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "transform" })]
public static Obj CreateDesignFrame(this IDocument document, string name, TransformBase transform, SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`document` IDocument

The document to create the design frame.

`name` string

The name of the design frame.

`transform` TransformBase

The transform to create the design frame.

`symmetricType` SymmetricType

The symmetric type of the new Managed.DAFUL.DesignFrame

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DesignFrame" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'transform' argument is null.

