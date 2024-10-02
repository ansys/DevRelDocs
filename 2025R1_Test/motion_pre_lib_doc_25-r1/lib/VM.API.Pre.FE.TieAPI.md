#  Class TieAPI

Namespace: [VM.API.Pre.FE](VM.API.Pre.FE.md)  
Assembly: VM.API.Pre.FE.dll  

This class implements APIs for <xref href="VM.Managed.DAFUL.Builder.FE.Contact.Tie" data-throw-if-not-resolved="false"></xref> class.

```csharp
public static class TieAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TieAPI](VM.API.Pre.FE.TieAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_FE_TieAPI_CreateTie_VM_Models_Pre_IDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_System_String_"></a> CreateTie\(IDocument, Obj, Obj, string\)

Create <xref href="VM.Managed.DAFUL.Builder.FE.Contact.Tie" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "baseContactable", "actionContactable" })]
[MatchTypeObj(new object[] { "baseContactable", typeof(IContactable), "actionContactable", typeof(IContactable) })]
public static Obj CreateTie(this IDocument document, Obj baseContactable, Obj actionContactable, string tieName = "")
```

#### Parameters

`document` IDocument

The document to create the tie.

`baseContactable` Obj

The base contactable object.

`actionContactable` Obj

The action contactable object.

`tieName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the tie. If empty, default name starts with 'TIE_' will be generated and used.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.Builder.FE.Contact.Tie" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'baseContactable' or 'actionContactable' arguments are empty.

