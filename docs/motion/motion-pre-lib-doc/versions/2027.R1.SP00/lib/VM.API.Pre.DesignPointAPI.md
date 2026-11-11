# Class DesignPointAPI
<a id="VM_API_Pre_DesignPointAPI"></a>

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class implements APIs for <xref href="VM.Managed.DesignPoint" data-throw-if-not-resolved="false"></xref> class.

```csharp
public static class DesignPointAPI
```

#### Inheritance

object ← 
[DesignPointAPI](VM.API.Pre.DesignPointAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_DesignPointAPI_CreateDesignPoint_VM_Models_Pre_IDocument_System_String_VM_Vector_VM_Managed_SymmetricType_"></a> CreateDesignPoint\(IDocument, string, Vector, SymmetricType\)

Create <xref href="VM.Managed.DesignPoint" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "position" })]
public static Obj CreateDesignPoint(this IDocument document, string name, Vector position, SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`document` IDocument

The document to create the design point.

`name` string

The name of the design point.

`position` Vector

The position to create the design point.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Managed.DesignPoint" data-throw-if-not-resolved="false"></xref>

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DesignPoint" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'position' argument is null.

### <a id="VM_API_Pre_DesignPointAPI_CreateDesignPoint_VM_Models_Pre_IDocument_System_String_VM_Managed_PointBase_VM_Managed_SymmetricType_"></a> CreateDesignPoint\(IDocument, string, PointBase, SymmetricType\)

Create <xref href="VM.Managed.DesignPoint" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "position" })]
public static Obj CreateDesignPoint(this IDocument document, string name, PointBase position, SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`document` IDocument

The document to create the design point.

`name` string

The name of the design point.

`position` PointBase

The position to create the design point.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Managed.DesignPoint" data-throw-if-not-resolved="false"></xref>

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DesignPoint" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'position' argument is null.

