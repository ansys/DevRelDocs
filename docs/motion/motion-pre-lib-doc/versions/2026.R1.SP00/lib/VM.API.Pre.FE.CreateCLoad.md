# Class CreateCLoad
<a id="VM_API_Pre_FE_CreateCLoad"></a>

Namespace: [VM.API.Pre.FE](VM.API.Pre.FE.md)  
Assembly: VMOpMesh.dll  

```csharp
public static class CreateCLoad
```

#### Inheritance

object ← 
[CreateCLoad](VM.API.Pre.FE.CreateCLoad.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_FE_CreateCLoad_CreateCLoadSimple_VM_Managed_DAFUL_SubSystemDocument_System_String_VM_Managed_DAFUL_ICLoadComponent_"></a> CreateCLoadSimple\(SubSystemDocument, string, ICLoadComponent\)

```csharp
public static CLoad CreateCLoadSimple(this SubSystemDocument docToAdd, string strName, ICLoadComponent CLoadComponent)
```

#### Parameters

`docToAdd` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

`strName` string

`CLoadComponent` ICLoadComponent

#### Returns

 CLoad

### <a id="VM_API_Pre_FE_CreateCLoad_CreateCLoadWithFunction_VM_Managed_DAFUL_SubSystemDocument_System_String_VM_Managed_DAFUL_ICLoadComponent_VM_Managed_DAFUL_FE_Force_CLoadStandard_DirectionType_VM_Managed_DAFUL_Function_VM_Managed_DAFUL_Function_VM_Managed_DAFUL_Function_VM_Managed_DAFUL_Function_VM_Managed_DAFUL_Function_VM_Managed_DAFUL_Function_"></a> CreateCLoadWithFunction\(SubSystemDocument, string, ICLoadComponent, DirectionType, Function, Function, Function, Function, Function, Function\)

```csharp
public static CLoad CreateCLoadWithFunction(this SubSystemDocument docToAdd, string strName, ICLoadComponent CLoadComponent, CLoadStandard.DirectionType directionType = DirectionType.RECTANGULAR, Function functionFX = null, Function functionFY = null, Function functionFZ = null, Function functionTX = null, Function functionTY = null, Function functionTZ = null)
```

#### Parameters

`docToAdd` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

`strName` string

`CLoadComponent` ICLoadComponent

`directionType` CLoadStandard.DirectionType

`functionFX` [Function](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Function.cs)

`functionFY` [Function](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Function.cs)

`functionFZ` [Function](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Function.cs)

`functionTX` [Function](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Function.cs)

`functionTY` [Function](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Function.cs)

`functionTZ` [Function](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Function.cs)

#### Returns

 CLoad

### <a id="VM_API_Pre_FE_CreateCLoad_CreateCLoadWithUserSubroutine_VM_Managed_DAFUL_SubSystemDocument_System_String_VM_Managed_DAFUL_ICLoadComponent_VM_Managed_DAFUL_UserSubroutine_"></a> CreateCLoadWithUserSubroutine\(SubSystemDocument, string, ICLoadComponent, UserSubroutine\)

```csharp
public static CLoad CreateCLoadWithUserSubroutine(this SubSystemDocument docToAdd, string strName, ICLoadComponent CLoadComponent, UserSubroutine usub)
```

#### Parameters

`docToAdd` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

`strName` string

`CLoadComponent` ICLoadComponent

`usub` [UserSubroutine](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSP/UserSubroutine.cs)

#### Returns

 CLoad

