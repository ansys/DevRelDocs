# Class PressureLoadAPI
<a id="VM_API_Pre_FE_PressureLoadAPI"></a>

Namespace: [VM.API.Pre.FE](VM.API.Pre.FE.md)  
Assembly: VM.API.Pre.FE.dll  

This class implements APIs for BoundaryCondition class.

```csharp
public static class PressureLoadAPI
```

#### Inheritance

object ← 
[PressureLoadAPI](VM.API.Pre.FE.PressureLoadAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_FE_PressureLoadAPI_CreatePressureLoad_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_System_String_System_Nullable_VM_API_Pre_Obj__"></a> CreatePressureLoad\(SubSystemDocument, Obj, string, Obj?\)

Create <xref href="VM.Managed.DAFUL.FE.Force.PLoad" data-throw-if-not-resolved="false"></xref> with functions.

```csharp
[MatchTypeObj(new object[] { "function", typeof(Function) })]
public static Obj CreatePressureLoad(this SubSystemDocument document, Obj pressureLoadComponent, string pressureLoadName = "", Obj? function = null)
```

#### Parameters

`document` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The document to create the pressure load.

`pressureLoadComponent` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The pressure load component

`pressureLoadName` string

The name of the pressure load. If empty, default name starts with 'PLoad_' will be generated and used.

`function` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)?

The name of the function.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.FE.Force.PLoad" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'pressureLoadComponent' arguments are empty.

 ArgumentException

Will be thrown if 'function' argument is not empty and type of 'function' is not <xref href="VM.Managed.DAFUL.Function" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_FE_PressureLoadAPI_CreatePressureLoad_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_System_String_"></a> CreatePressureLoad\(SubSystemDocument, Obj, Obj, string\)

Create <xref href="VM.Managed.DAFUL.FE.Force.PLoad" data-throw-if-not-resolved="false"></xref> with user-subrooutine.

```csharp
[NotNullObj(new string[] { "usub" })]
[MatchTypeObj(new object[] { "usub", typeof(UserSubroutine) })]
public static Obj CreatePressureLoad(this SubSystemDocument document, Obj pressureLoadComponent, Obj usub, string pressureLoadName = "")
```

#### Parameters

`document` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The document to create the pressure load.

`pressureLoadComponent` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The pressure load component

`usub` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The name of the user-subrooutine.

`pressureLoadName` string

The name of the pressure load. If empty, default name starts with 'PLoad_' will be generated and used.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.FE.Force.PLoad" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'pressureLoadComponent' arguments are empty.

 ArgumentException

Will be thrown if 'usub' argument is not empty and type of 'usub' is not <xref href="VM.Managed.DAFUL.UserSubroutine" data-throw-if-not-resolved="false"></xref>.

