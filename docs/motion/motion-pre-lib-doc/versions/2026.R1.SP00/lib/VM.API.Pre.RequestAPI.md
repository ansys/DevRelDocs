# Class RequestAPI
<a id="VM_API_Pre_RequestAPI"></a>

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class implements APIs for request class.

```csharp
public static class RequestAPI
```

#### Inheritance

object ← 
[RequestAPI](VM.API.Pre.RequestAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_RequestAPI_CreateConnectedEntityRequest_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_System_String_"></a> CreateConnectedEntityRequest\(SubSystemDocument, Obj, string\)

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "actionEntity" })]
[MatchTypeObj(new object[] { "actionEntity", typeof(IBodyAnalysisType) })]
public static Obj CreateConnectedEntityRequest(this SubSystemDocument subSystemDocument, Obj actionEntity, string name)
```

#### Parameters

`subSystemDocument` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

`actionEntity` [Obj](VM.API.Pre.Obj.md)

`name` string

#### Returns

 [Obj](VM.API.Pre.Obj.md)

### <a id="VM_API_Pre_RequestAPI_CreateEntitiesRequest_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj___System_String_"></a> CreateEntitiesRequest\(SubSystemDocument, Obj\[\], string\)

```csharp
[NotNull(new string[] { "subSystemDocument" })]
public static void CreateEntitiesRequest(this SubSystemDocument subSystemDocument, Obj[] actionEntities, string name)
```

#### Parameters

`subSystemDocument` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

`actionEntities` [Obj](VM.API.Pre.Obj.md)\[\]

`name` string

### <a id="VM_API_Pre_RequestAPI_CreateEntityRequest_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_System_String_"></a> CreateEntityRequest\(SubSystemDocument, Obj, string\)

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "actionEntity" })]
[MatchTypeObj(new object[] { "actionEntity", typeof(IReportable) })]
public static Obj CreateEntityRequest(this SubSystemDocument subSystemDocument, Obj actionEntity, string name)
```

#### Parameters

`subSystemDocument` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

`actionEntity` [Obj](VM.API.Pre.Obj.md)

`name` string

#### Returns

 [Obj](VM.API.Pre.Obj.md)

### <a id="VM_API_Pre_RequestAPI_CreateKinematicRequest_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_System_String_System_Nullable_VM_API_Pre_Obj__System_Nullable_VM_API_Pre_Obj__System_Nullable_VM_Managed_DAFUL_RequestKinematic_OutputType__"></a> CreateKinematicRequest\(SubSystemDocument, Obj, string, Obj?, Obj?, OutputType?\)

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "actionEntity" })]
public static Obj CreateKinematicRequest(this SubSystemDocument subSystemDocument, Obj actionEntity, string name, Obj? baseEntity = null, Obj? referenceMarker = null, RequestKinematic.OutputType? outputType = null)
```

#### Parameters

`subSystemDocument` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

`actionEntity` [Obj](VM.API.Pre.Obj.md)

`name` string

`baseEntity` [Obj](VM.API.Pre.Obj.md)?

`referenceMarker` [Obj](VM.API.Pre.Obj.md)?

`outputType` [RequestKinematic](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/RequestKinematic.cs).[OutputType](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/RequestKinematic.cs)?

#### Returns

 [Obj](VM.API.Pre.Obj.md)

### <a id="VM_API_Pre_RequestAPI_CreateStructuralRequest_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_System_String_VM_Managed_DAFUL_RequestStructure_SideFilter_System_Nullable_VM_Managed_DAFUL_RequestStructure_OutputType__"></a> CreateStructuralRequest\(SubSystemDocument, Obj, string, SideFilter, OutputType?\)

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "actionEntity" })]
public static Obj CreateStructuralRequest(this SubSystemDocument subSystemDocument, Obj actionEntity, string name, RequestStructure.SideFilter sideFilter = SideFilter.Maximum, RequestStructure.OutputType? outputType = null)
```

#### Parameters

`subSystemDocument` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

`actionEntity` [Obj](VM.API.Pre.Obj.md)

`name` string

`sideFilter` [RequestStructure](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/RequestStructure.cs).[SideFilter](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/RequestStructure.cs)

`outputType` [RequestStructure](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/RequestStructure.cs).[OutputType](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/RequestStructure.cs)?

#### Returns

 [Obj](VM.API.Pre.Obj.md)

