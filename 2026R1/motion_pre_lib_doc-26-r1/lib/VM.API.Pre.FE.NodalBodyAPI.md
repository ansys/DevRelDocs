# Class NodalBodyAPI
<a id="VM_API_Pre_FE_NodalBodyAPI"></a>

Namespace: [VM.API.Pre.FE](VM.API.Pre.FE.md)  
Assembly: VM.API.Pre.FE.dll  

This class implements APIs for <xref href="VM.Managed.DAFUL.FE.NodalBody" data-throw-if-not-resolved="false"></xref> class.

```csharp
public static class NodalBodyAPI
```

#### Inheritance

object ← 
[NodalBodyAPI](VM.API.Pre.FE.NodalBodyAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_FE_NodalBodyAPI_ChangeNodalModal_VM_API_Pre_Obj_VM_Managed_DAFUL_BodyAnalysisType_"></a> ChangeNodalModal\(Obj, BodyAnalysisType\)

Change body analysis type.

```csharp
[NotNullObj(new string[] { "nodalBody" })]
[MatchTypeObj(new object[] { "nodalBody", typeof(NodalBody) })]
public static void ChangeNodalModal(this Obj nodalBody, BodyAnalysisType type)
```

#### Parameters

`nodalBody` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The <xref href="VM.Managed.DAFUL.FE.NodalBody" data-throw-if-not-resolved="false"></xref>.

`type` BodyAnalysisType

The body analysis type.

#### Exceptions

 ArgumentNullException

Will be thrown if 'nodalBody' argument is empty.

 ArgumentException

Will be thrown if type of 'nodalBody' is not <xref href="VM.Managed.DAFUL.FE.NodalBody" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_FE_NodalBodyAPI_CreateNodalBody_VM_Managed_DAFUL_SubSystemDocument_System_String_VM_Managed_DAFUL_FE_MeshDocument_VM_Managed_TransformBase_"></a> CreateNodalBody\(SubSystemDocument, string, MeshDocument, TransformBase\)

Create New <xref href="VM.Managed.DAFUL.FE.NodalBody" data-throw-if-not-resolved="false"></xref> class with given <xref href="VM.Managed.DAFUL.FE.MeshDocument" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.TransformBase?text=Transformation" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "meshDocument" })]
public static Obj CreateNodalBody(this SubSystemDocument docToAdd, string strBodyName, MeshDocument meshDocument, TransformBase transformMesh)
```

#### Parameters

`docToAdd` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to add created <xref href="VM.Managed.DAFUL.FE.NodalBody" data-throw-if-not-resolved="false"></xref>.

`strBodyName` string

The body name of new <xref href="VM.Managed.DAFUL.FE.NodalBody" data-throw-if-not-resolved="false"></xref>.

`meshDocument` MeshDocument

The <xref href="VM.Managed.DAFUL.FE.MeshDocument" data-throw-if-not-resolved="false"></xref> to create <xref href="VM.Managed.DAFUL.FE.NodalBody" data-throw-if-not-resolved="false"></xref>

`transformMesh` TransformBase

The <xref href="VM.Managed.TransformBase?text=Transformation" data-throw-if-not-resolved="false"></xref> for the new <xref href="VM.Managed.DAFUL.FE.NodalBody" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.FE.NodalBody" data-throw-if-not-resolved="false"></xref>.

#### Exceptions

 ArgumentNullException

Will be thrown if 'meshDocument' argument is empty.

### <a id="VM_API_Pre_FE_NodalBodyAPI_CreateNodalBody_VM_Managed_DAFUL_SubSystemDocument_System_String_System_String_VM_Managed_TransformBase_"></a> CreateNodalBody\(SubSystemDocument, string, string, TransformBase\)

Create New <xref href="VM.Managed.DAFUL.FE.NodalBody" data-throw-if-not-resolved="false"></xref> class with given file path of the <xref href="VM.Managed.DAFUL.FE.MeshDocument" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.TransformBase?text=Transformation" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "docToAdd", "transformMesh" })]
[ExistFile(new string[] { "meshFilePath" })]
public static Obj CreateNodalBody(this SubSystemDocument docToAdd, string strBodyName, string meshFilePath, TransformBase transformMesh)
```

#### Parameters

`docToAdd` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to add created <xref href="VM.Managed.DAFUL.FE.NodalBody" data-throw-if-not-resolved="false"></xref>.

`strBodyName` string

The body name of new <xref href="VM.Managed.DAFUL.FE.NodalBody" data-throw-if-not-resolved="false"></xref>.

`meshFilePath` string

The path of the <xref href="VM.Managed.DAFUL.FE.MeshDocument" data-throw-if-not-resolved="false"></xref> to create <xref href="VM.Managed.DAFUL.FE.NodalBody" data-throw-if-not-resolved="false"></xref>

`transformMesh` TransformBase

The <xref href="VM.Managed.TransformBase?text=Transformation" data-throw-if-not-resolved="false"></xref> for the new <xref href="VM.Managed.DAFUL.FE.NodalBody" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.FE.NodalBody" data-throw-if-not-resolved="false"></xref>.

#### Exceptions

 ArgumentNullException

Will be thrown if 'docToAdd' or 'transformMesh' arguments are empty.

 Exception

Will be thrown if meshFilePath file is not exist.

### <a id="VM_API_Pre_FE_NodalBodyAPI_CreateNodalBody_VM_Managed_DAFUL_SubSystemDocument_System_String_VM_Managed_DAFUL_FE_MeshDocument_"></a> CreateNodalBody\(SubSystemDocument, string, MeshDocument\)

Create New <xref href="VM.Managed.DAFUL.FE.NodalBody" data-throw-if-not-resolved="false"></xref> class with given <xref href="VM.Managed.DAFUL.FE.MeshDocument" data-throw-if-not-resolved="false"></xref> with identity transformation.

```csharp
[NotNull(new string[] { "meshDocument" })]
public static Obj CreateNodalBody(this SubSystemDocument docToAdd, string strBodyName, MeshDocument meshDocument)
```

#### Parameters

`docToAdd` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to add created <xref href="VM.Managed.DAFUL.FE.NodalBody" data-throw-if-not-resolved="false"></xref>.

`strBodyName` string

The body name of new <xref href="VM.Managed.DAFUL.FE.NodalBody" data-throw-if-not-resolved="false"></xref>.

`meshDocument` MeshDocument

The <xref href="VM.Managed.DAFUL.FE.MeshDocument" data-throw-if-not-resolved="false"></xref> to create <xref href="VM.Managed.DAFUL.FE.NodalBody" data-throw-if-not-resolved="false"></xref>

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.FE.NodalBody" data-throw-if-not-resolved="false"></xref>.

#### Exceptions

 ArgumentNullException

Will be thrown if 'meshDocument' argument is empty.

### <a id="VM_API_Pre_FE_NodalBodyAPI_CreateNodalBody_VM_Managed_DAFUL_SubSystemDocument_System_String_System_String_"></a> CreateNodalBody\(SubSystemDocument, string, string\)

Create New <xref href="VM.Managed.DAFUL.FE.NodalBody" data-throw-if-not-resolved="false"></xref> class with given file path of the <xref href="VM.Managed.DAFUL.FE.MeshDocument" data-throw-if-not-resolved="false"></xref> with identity transformation.

```csharp
public static Obj CreateNodalBody(this SubSystemDocument docToAdd, string strBodyName, string meshFilePath)
```

#### Parameters

`docToAdd` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to add created <xref href="VM.Managed.DAFUL.FE.NodalBody" data-throw-if-not-resolved="false"></xref>.

`strBodyName` string

The body name of new <xref href="VM.Managed.DAFUL.FE.NodalBody" data-throw-if-not-resolved="false"></xref>.

`meshFilePath` string

The path of the <xref href="VM.Managed.DAFUL.FE.MeshDocument" data-throw-if-not-resolved="false"></xref> to create <xref href="VM.Managed.DAFUL.FE.NodalBody" data-throw-if-not-resolved="false"></xref>

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.FE.NodalBody" data-throw-if-not-resolved="false"></xref>.

