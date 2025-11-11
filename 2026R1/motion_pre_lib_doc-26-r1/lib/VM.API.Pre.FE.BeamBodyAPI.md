# Class BeamBodyAPI
<a id="VM_API_Pre_FE_BeamBodyAPI"></a>

Namespace: [VM.API.Pre.FE](VM.API.Pre.FE.md)  
Assembly: VM.API.Pre.FE.dll  

This class implements API to create new <xref href="VM.Builder.Pre.FE.BeamBody" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class BeamBodyAPI
```

#### Inheritance

object ← 
[BeamBodyAPI](VM.API.Pre.FE.BeamBodyAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_FE_BeamBodyAPI_CreateBeamNodalBody_VM_Managed_DAFUL_SubSystemDocument_System_String_System_String_VM_Vector_VM_Vector_VM_Vector_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_"></a> CreateBeamNodalBody\(SubSystemDocument, string, string, Vector, Vector, Vector, ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable\)

Create Beam FE Body for Beam Contact

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "strNewMeshFilePath" })]
[GreaterThanZero(new string[] { "radius" })]
[GreaterThanOrEqualToSomeValue("numOfBeamNodes", 3)]
public static Obj CreateBeamNodalBody(this SubSystemDocument document, string strNewMeshFilePath, string strFEBodyName, Vector startPoint, Vector endPoint, Vector yDirection, ExpressionValueVariable radius, ExpressionValueVariable numberOfHexElementPerSegment, ExpressionValueVariable numOfBeamNodes)
```

#### Parameters

`document` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create beam FE body.

`strNewMeshFilePath` string

The path to new .dfmesh file.

`strFEBodyName` string

The name of the new <xref href="VM.Managed.DAFUL.FE.NodalBody" data-throw-if-not-resolved="false"></xref>.

`startPoint` Vector

The start point of the beam.

`endPoint` Vector

The end point of the beam.

`yDirection` Vector

The Y direction vector of the beam.

`radius` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

The radius of the beam.

`numberOfHexElementPerSegment` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

The number of hexa elements per segment.

`numOfBeamNodes` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

The number of beam nodes.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

the new FE beam body

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'strNewMeshFilePath' arguments are empty.

 ArgumentException

Will be thrown if the magnitude of 'yDirection' is 0.

 ArgumentOutOfRangeException

Will be thrown if 'radius' value equal to or less than 0.

 ArgumentOutOfRangeException

Will be thrown if 'numOfBeamNodes' is less than 3.

 ArgumentException

Will be thrown if distance of 'startPoint' and 'endPoint' is less than 1.0e-5.

 ArgumentException

Will be thrown if vector of 'endPoint' - 'startPoint' parallel with 'yDirection'.

 ArgumentException

Will be thrown if 'numberOfHexElementPerSegment' is less than 8 or an odd number.

