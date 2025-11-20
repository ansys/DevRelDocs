# Class CreateSubsystem
<a id="VM_Managed_DAFUL_Operation_Util_CreateSubsystem"></a>

Namespace: [VM.Managed.DAFUL.Operation.Util](VM.Managed.DAFUL.Operation.Util.md)  
Assembly: VMOpCore.dll  

The utility class for a subsystem creation.

```csharp
public class CreateSubsystem
```

#### Inheritance

object ← 
[CreateSubsystem](VM.Managed.DAFUL.Operation.Util.CreateSubsystem.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubsystem__ctor"></a> CreateSubsystem\(\)

```csharp
public CreateSubsystem()
```

## Methods

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubsystem_Create_VM_Managed_Document3D_System_String_VM_Managed_TransformBase_System_String_"></a> Create\(Document3D, string, TransformBase, string\)

Create the subsystem.

```csharp
public static SubSystem Create(Document3D activeDocument, string strSubsystemFilePath, TransformBase transf, string strPrefixName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`strSubsystemFilePath` string

The subsystem file path.

`transf` TransformBase

The subsystem transformation.

`strPrefixName` string

The subsystem prefix name.

#### Returns

 [SubSystem](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystem.cs)

The new subsystem.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubsystem_Create_VM_Managed_Document3D_VM_Managed_DAFUL_SubSystemDocument_VM_Managed_TransformBase_System_String_"></a> Create\(Document3D, SubSystemDocument, TransformBase, string\)

Create the subsystem.

```csharp
public static SubSystem Create(Document3D activeDocument, SubSystemDocument docSubsystem, TransformBase transf, string strPrefixName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`docSubsystem` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The subsystem document.

`transf` TransformBase

The subsystem transformation.

`strPrefixName` string

The subsystem prefix name.

#### Returns

 [SubSystem](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystem.cs)

The new subsystem.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubsystem_ImportSubSystem_VM_Managed_DAFUL_SubSystemDocument_VM_Managed_DAFUL_SubSystemDocument_System_String_"></a> ImportSubSystem\(SubSystemDocument, SubSystemDocument, string\)

Import subsystem

```csharp
public static SubSystem ImportSubSystem(SubSystemDocument docParent, SubSystemDocument docChild, string strName)
```

#### Parameters

`docParent` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The parent subsystem document

`docChild` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The child subsystem document

`strName` string

The name

#### Returns

 [SubSystem](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystem.cs)

nodal body

