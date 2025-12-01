# Class ReplaceFEBodyAPI
<a id="VM_API_Pre_FE_ReplaceFEBodyAPI"></a>

Namespace: [VM.API.Pre.FE](VM.API.Pre.FE.md)  
Assembly: VM.API.Pre.FE.dll  

This class implements APIs to replace FE body.

```csharp
public static class ReplaceFEBodyAPI
```

#### Inheritance

object ← 
[ReplaceFEBodyAPI](VM.API.Pre.FE.ReplaceFEBodyAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_FE_ReplaceFEBodyAPI_ReplaceFEBody_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_System_String_System_Boolean_System_Boolean_"></a> ReplaceFEBody\(SubSystemDocument, Obj, string, bool, bool\)

Replace FE body.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "nodalBody" })]
[MatchTypeObj(new object[] { "nodalBody", typeof(NodalBody) })]
[ExistFile(new string[] { "newFilePath" })]
public static void ReplaceFEBody(this SubSystemDocument document, Obj nodalBody, string newFilePath, bool allowMulti = false, bool hideRemoveMessage = true)
```

#### Parameters

`document` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The document to replace FE body.

`nodalBody` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The nodal body.

`newFilePath` string

The new mesh file path.

`allowMulti` bool

The multi allow flag. The default value is false.

`hideRemoveMessage` bool

The remove message show/hide flag. The default value is hide.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'newFilePath' argument is empty.

 ArgumentOutOfRangeException

Will be thrown if 'thickness' value equal to or less than 0.

 FileNotFoundException

Will be thrown if newFilePath file is not exist.

