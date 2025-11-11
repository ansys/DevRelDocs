# Class BoundaryConditionAPI
<a id="VM_API_Pre_FE_BoundaryConditionAPI"></a>

Namespace: [VM.API.Pre.FE](VM.API.Pre.FE.md)  
Assembly: VM.API.Pre.FE.dll  

This class implements APIs for <xref href="VM.Managed.DAFUL.Flexible.BoundaryCondition" data-throw-if-not-resolved="false"></xref> class.

```csharp
public static class BoundaryConditionAPI
```

#### Inheritance

object ← 
[BoundaryConditionAPI](VM.API.Pre.FE.BoundaryConditionAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_FE_BoundaryConditionAPI_CreateBoundaryCondition_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_System_String_System_Nullable_VM_API_Pre_Obj__System_Boolean_System_Boolean_System_Boolean_System_Boolean_System_Boolean_System_Boolean_"></a> CreateBoundaryCondition\(SubSystemDocument, Obj, string, Obj?, bool, bool, bool, bool, bool, bool\)

Create <xref href="VM.Managed.DAFUL.Flexible.BoundaryCondition" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "boundaryConditionComponent" })]
[MatchTypeObj(new object[] { "boundaryConditionComponent", typeof(IGeometricalComponent) })]
public static Obj CreateBoundaryCondition(this SubSystemDocument document, Obj boundaryConditionComponent, string boundaryConditionName = "", Obj? referenceMarker = null, bool translationalX = true, bool translationalY = true, bool translationalZ = true, bool rotationalX = true, bool rotationalY = true, bool rotationalZ = true)
```

#### Parameters

`document` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The document to create the boundary condition.

`boundaryConditionComponent` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The boundary condition component

`boundaryConditionName` string

The name of the boundary condition. If empty, default name starts with 'BC_' will be generated and used.

`referenceMarker` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)?

The reference marker.

`translationalX` bool

The flag whether using translational X.

`translationalY` bool

The flag whether using translational Y.

`translationalZ` bool

The flag whether using translational Z.

`rotationalX` bool

The flag whether using rotational X.

`rotationalY` bool

The flag whether using rotational Y.

`rotationalZ` bool

The flag whether using rotational Z.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.Flexible.BoundaryCondition" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'boundaryConditionComponent' arguments are empty.

 ArgumentNullException

Will be thrown if 'referenceMarker' argument is not empty and type of 'referenceMarker' is not <xref href="VM.Managed.IMarker" data-throw-if-not-resolved="false"></xref>.

