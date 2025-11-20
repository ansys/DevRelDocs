# Class ExternalLoadAPI
<a id="VM_API_Pre_FE_ExternalLoadAPI"></a>

Namespace: [VM.API.Pre.FE](VM.API.Pre.FE.md)  
Assembly: VM.API.Pre.FE.dll  

This class implements APIs for <xref href="VM.Models.Pre.Force.ExternalLoad" data-throw-if-not-resolved="false"></xref> class.

```csharp
public static class ExternalLoadAPI
```

#### Inheritance

object ← 
[ExternalLoadAPI](VM.API.Pre.FE.ExternalLoadAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_FE_ExternalLoadAPI_CreateExternalLoad_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_System_String_"></a> CreateExternalLoad\(SubSystemDocument, Obj, string\)

Create <xref href="VM.Models.Pre.Force.ExternalLoad" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "body" })]
public static Obj CreateExternalLoad(this SubSystemDocument subSystemDocument, Obj body, string name = "")
```

#### Parameters

`subSystemDocument` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a external load.

`body` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The base entity of a external load.

`name` string

The name of a external load.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

the new <xref href="VM.Models.Pre.Force.ExternalLoad" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'subSystemDocument', 'body' argument is null.

