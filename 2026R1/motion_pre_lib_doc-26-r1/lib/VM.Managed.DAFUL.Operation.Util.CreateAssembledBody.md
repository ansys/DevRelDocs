# Class CreateAssembledBody
<a id="VM_Managed_DAFUL_Operation_Util_CreateAssembledBody"></a>

Namespace: [VM.Managed.DAFUL.Operation.Util](VM.Managed.DAFUL.Operation.Util.md)  
Assembly: VMOpCore.dll  

The utility class for an assembled body creation.

```csharp
public class CreateAssembledBody
```

#### Inheritance

object ← 
[CreateAssembledBody](VM.Managed.DAFUL.Operation.Util.CreateAssembledBody.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Operation_Util_CreateAssembledBody__ctor"></a> CreateAssembledBody\(\)

```csharp
public CreateAssembledBody()
```

## Methods

### <a id="VM_Managed_DAFUL_Operation_Util_CreateAssembledBody_Create_VM_Managed_Document3D_System_String_VM_Managed_TransformBase_System_String_"></a> Create\(Document3D, string, TransformBase, string\)

Create the assembled body.

```csharp
public static AssembledBody Create(Document3D activeDocument, string strPartFilePath, TransformBase transf, string strPrefixName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`strPartFilePath` string

The part file path.

`transf` TransformBase

The assembled body transformation.

`strPrefixName` string

The assembled body prefix name.

#### Returns

 [AssembledBody](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/AssembledBody.cs)

The new assembled body.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateAssembledBody_Create_VM_Managed_Document3D_VM_Managed_DAFUL_PartDocument_VM_Managed_TransformBase_System_String_"></a> Create\(Document3D, PartDocument, TransformBase, string\)

Create the assembled body.

```csharp
public static AssembledBody Create(Document3D activeDocument, PartDocument docPart, TransformBase transf, string strPrefixName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`docPart` [PartDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/PartDocument.cs)

The part document.

`transf` TransformBase

The assembled body transformation.

`strPrefixName` string

The assembled body prefix name.

#### Returns

 [AssembledBody](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/AssembledBody.cs)

The new assembled body.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateAssembledBody_ImportAssembledBody_VM_Managed_DAFUL_SubSystemDocument_VM_Managed_DAFUL_PartDocument_System_String_"></a> ImportAssembledBody\(SubSystemDocument, PartDocument, string\)

Import assembled body

```csharp
public static AssembledBody ImportAssembledBody(SubSystemDocument docSub, PartDocument docPart, string strName)
```

#### Parameters

`docSub` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The subsystem document

`docPart` [PartDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/PartDocument.cs)

The part document

`strName` string

The name

#### Returns

 [AssembledBody](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/AssembledBody.cs)

nodal body

### <a id="VM_Managed_DAFUL_Operation_Util_CreateAssembledBody_ImportAssembledBody_VM_Managed_DAFUL_SubSystemDocument_VM_Managed_DAFUL_PartDocument_VM_Managed_TransformBase_System_String_"></a> ImportAssembledBody\(SubSystemDocument, PartDocument, TransformBase, string\)

Import assembled body

```csharp
public static AssembledBody ImportAssembledBody(SubSystemDocument docSub, PartDocument docPart, TransformBase transform, string strName)
```

#### Parameters

`docSub` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The subsystem document

`docPart` [PartDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/PartDocument.cs)

The part document

`transform` TransformBase

The transform

`strName` string

The name

#### Returns

 [AssembledBody](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/AssembledBody.cs)

nodal body

