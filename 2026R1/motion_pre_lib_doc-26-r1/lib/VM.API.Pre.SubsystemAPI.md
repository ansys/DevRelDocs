# Class SubsystemAPI
<a id="VM_API_Pre_SubsystemAPI"></a>

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class implements APIs for subsystem.

```csharp
public static class SubsystemAPI
```

#### Inheritance

object ← 
[SubsystemAPI](VM.API.Pre.SubsystemAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_SubsystemAPI_CreateSubSystem_VM_Managed_Document_System_String_VM_Managed_TMatrix_System_String_"></a> CreateSubSystem\(Document, string, TMatrix, string\)

Create <xref href="VM.Managed.DAFUL.Builder.SubSystem" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document", "transform" })]
[ExistFile(new string[] { "subsystemFilePath" })]
public static Obj CreateSubSystem(this Document document, string subsystemFilePath, TMatrix transform, string subsystemName = "")
```

#### Parameters

`document` Document

The document to create the subsystem.

`subsystemFilePath` string

The file path of imported subsystem document

`transform` TMatrix

The transformation matrix for a subsystem.

`subsystemName` string

The name of the subsystem. If empty, default name starts with 'SubSystem_' will be generated and used.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.Builder.SubSystem" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'subsystemFilePath' arguments are empty.

 FileNotFoundException

Will be thrown if 'subsystemFilePath' does not exist.

### <a id="VM_API_Pre_SubsystemAPI_CreateSubSystem_VM_Managed_Document_System_String_"></a> CreateSubSystem\(Document, string\)

Create <xref href="VM.Managed.DAFUL.Builder.AssembledBody" data-throw-if-not-resolved="false"></xref>.

```csharp
public static Obj CreateSubSystem(this Document document, string subsystemFilePath)
```

#### Parameters

`document` Document

The document to create the subsystem.

`subsystemFilePath` string

The file path of imported subsystem document

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.Builder.SubSystem" data-throw-if-not-resolved="false"></xref> object that is created by this API.

