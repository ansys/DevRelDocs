# Class ConcentratedLoadAPI
<a id="VM_API_Pre_FE_ConcentratedLoadAPI"></a>

Namespace: [VM.API.Pre.FE](VM.API.Pre.FE.md)  
Assembly: VM.API.Pre.FE.dll  

This class implements APIs for <xref href="VM.Managed.DAFUL.FE.Force.CLoad" data-throw-if-not-resolved="false"></xref> class.

```csharp
public static class ConcentratedLoadAPI
```

#### Inheritance

object ← 
[ConcentratedLoadAPI](VM.API.Pre.FE.ConcentratedLoadAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_FE_ConcentratedLoadAPI_CreateConcentratedLoad_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_System_String_VM_Managed_DAFUL_FE_Force_CLoadStandard_DirectionType_System_Nullable_VM_API_Pre_Obj__System_Nullable_VM_API_Pre_Obj__System_Nullable_VM_API_Pre_Obj__System_Nullable_VM_API_Pre_Obj__System_Nullable_VM_API_Pre_Obj__System_Nullable_VM_API_Pre_Obj__"></a> CreateConcentratedLoad\(SubSystemDocument, Obj, string, DirectionType, Obj?, Obj?, Obj?, Obj?, Obj?, Obj?\)

Create <xref href="VM.Managed.DAFUL.FE.Force.CLoad" data-throw-if-not-resolved="false"></xref> with functions.

```csharp
[MatchTypeObj(new object[] { "functionFX", typeof(Function), "functionFY", typeof(Function), "functionFZ", typeof(Function), "functionTX", typeof(Function), "functionTY", typeof(Function), "functionTZ", typeof(Function) })]
public static Obj CreateConcentratedLoad(this SubSystemDocument document, Obj concentratedLoadComponent, string concentratedLoadName = "", CLoadStandard.DirectionType directionType = DirectionType.RECTANGULAR, Obj? functionFX = null, Obj? functionFY = null, Obj? functionFZ = null, Obj? functionTX = null, Obj? functionTY = null, Obj? functionTZ = null)
```

#### Parameters

`document` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The document to create the concentrated load.

`concentratedLoadComponent` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The concentrated load component

`concentratedLoadName` string

The name of the concentrated load. If empty, default name starts with 'CLoad_' will be generated and used.

`directionType` CLoadStandard.DirectionType

The direction type.

`functionFX` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)?

The name of the fx function.

`functionFY` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)?

The name of the fy function.

`functionFZ` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)?

The name of the fz function.

`functionTX` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)?

The name of the tx function.

`functionTY` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)?

The name of the ty function.

`functionTZ` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)?

The name of the tz function.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.FE.Force.CLoad" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'concentratedLoadComponent' arguments are empty.

 ArgumentException

Will be thrown if 'functionFX' argument is not empty and type of 'functionFX' is not <xref href="VM.Managed.DAFUL.Function" data-throw-if-not-resolved="false"></xref>.

 ArgumentException

Will be thrown if 'functionFY' argument is not empty and type of 'functionFY' is not <xref href="VM.Managed.DAFUL.Function" data-throw-if-not-resolved="false"></xref>.

 ArgumentException

Will be thrown if 'functionFZ' argument is not empty and type of 'functionFZ' is not <xref href="VM.Managed.DAFUL.Function" data-throw-if-not-resolved="false"></xref>.

 ArgumentException

Will be thrown if 'functionTX' argument is not empty and type of 'functionTX' is not <xref href="VM.Managed.DAFUL.Function" data-throw-if-not-resolved="false"></xref>.

 ArgumentException

Will be thrown if 'functionTY' argument is not empty and type of 'functionTY' is not <xref href="VM.Managed.DAFUL.Function" data-throw-if-not-resolved="false"></xref>.

 ArgumentException

Will be thrown if 'functionTZ' argument is not empty and type of 'functionTZ' is not <xref href="VM.Managed.DAFUL.Function" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_FE_ConcentratedLoadAPI_CreateConcentratedLoad_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_System_String_"></a> CreateConcentratedLoad\(SubSystemDocument, Obj, Obj, string\)

Create <xref href="VM.Managed.DAFUL.FE.Force.CLoad" data-throw-if-not-resolved="false"></xref> with user-subrooutine.

```csharp
[NotNullObj(new string[] { "usub" })]
[MatchTypeObj(new object[] { "usub", typeof(UserSubroutine) })]
public static Obj CreateConcentratedLoad(this SubSystemDocument document, Obj concentratedLoadComponent, Obj usub, string concentratedLoadName = "")
```

#### Parameters

`document` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The document to create the concentrated load.

`concentratedLoadComponent` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The concentrated load component

`usub` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The name of the user-subrooutine.

`concentratedLoadName` string

The name of the concentrated load. If empty, default name starts with 'CLoad_' will be generated and used.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.FE.Force.CLoad" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'concentratedLoadComponent' or 'usub' arguments are empty.

 ArgumentException

Will be thrown if 'usub' argument is not empty and type of 'usub' is not <xref href="VM.Managed.DAFUL.UserSubroutine" data-throw-if-not-resolved="false"></xref>.

