# Class BeamGroupAPI
<a id="VM_API_Pre_BeamGroupAPI"></a>

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class implements APIs for beam group.

```csharp
public static class BeamGroupAPI
```

#### Inheritance

object ← 
[BeamGroupAPI](VM.API.Pre.BeamGroupAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_BeamGroupAPI_CreateBeamGroup_VM_Managed_DAFUL_SubSystemDocument_VM_Vector_VM_Vector_VM_Vector_System_String_VM_Managed_DAFUL_Beam_CrossSectionType_System_Collections_Generic_IEnumerable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_API_Pre_Obj__System_Nullable_System_Drawing_Color__"></a> CreateBeamGroup\(SubSystemDocument, Vector, Vector, Vector, string, CrossSectionType, IEnumerable<ExpressionValueVariable\>, ExpressionValueVariable?, Obj?, Color?\)

Create <xref href="VM.Managed.DAFUL.Beam.BeamGroup" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[MatchTypeObj(new object[] { "material", typeof(ISO) })]
[NotZeroMagnitude(new string[] { "directionY" })]
public static Obj CreateBeamGroup(this SubSystemDocument subSystemDocument, Vector startPoint, Vector endPoint, Vector directionY, string name = "", CrossSectionType crossSection = CrossSectionType.CIRCULAR, IEnumerable<ExpressionValueVariable> crossSectionValueInfo = null, ExpressionValueVariable? noOfElement = null, Obj? material = null, Color? color = null)
```

#### Parameters

`subSystemDocument` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a beam group.

`startPoint` Vector

The start point of a beam group.

`endPoint` Vector

The end point of a beam group.

`directionY` Vector

The Y-direction of a beam group.

`name` string

The name of a beam group.

`crossSection` [CrossSectionType](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.FE.BeamCrossSection/BeamCrossSection.cs)

The cross section of a beam group.

`crossSectionValueInfo` IEnumerable<[ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)\>

The cross section value info of a beam group.

`noOfElement` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The num of element of a beam group.

`material` [Obj](VM.API.Pre.Obj.md)?

The material of a beam group.

`color` Color?

The color of a beam group.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the new <xref href="VM.Managed.DAFUL.Beam.BeamGroup" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'subSystemDocument' argument is null.

 ArgumentException

Will be thrown if the magnitude of 'directionY' is 0 and if the type of 'material' is not 'ISO'.

### <a id="VM_API_Pre_BeamGroupAPI_CreateBeamGroup_VM_Managed_DAFUL_SubSystemDocument_System_Collections_Generic_IEnumerable_VM_Vector__VM_Vector_System_String_VM_Managed_DAFUL_Beam_CrossSectionType_System_Collections_Generic_IEnumerable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_API_Pre_Obj__System_Nullable_System_Drawing_Color__"></a> CreateBeamGroup\(SubSystemDocument, IEnumerable<Vector\>, Vector, string, CrossSectionType, IEnumerable<ExpressionValueVariable\>, ExpressionValueVariable?, Obj?, Color?\)

Create <xref href="VM.Managed.DAFUL.Beam.BeamGroup" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument", "positions" })]
[MatchTypeObj(new object[] { "material", typeof(ISO) })]
[NotZeroMagnitude(new string[] { "directionY" })]
public static Obj CreateBeamGroup(this SubSystemDocument subSystemDocument, IEnumerable<Vector> positions, Vector directionY, string name = "", CrossSectionType crossSection = CrossSectionType.CIRCULAR, IEnumerable<ExpressionValueVariable> crossSectionValueInfo = null, ExpressionValueVariable? noOfElement = null, Obj? material = null, Color? color = null)
```

#### Parameters

`subSystemDocument` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a beam group.

`positions` IEnumerable<Vector\>

The positions of a beam group.

`directionY` Vector

The Y-direction of a beam group.

`name` string

The name of a beam group.

`crossSection` [CrossSectionType](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.FE.BeamCrossSection/BeamCrossSection.cs)

The cross section of a beam group.

`crossSectionValueInfo` IEnumerable<[ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)\>

The cross section value info of a beam group.

`noOfElement` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The num of element of a beam group.

`material` [Obj](VM.API.Pre.Obj.md)?

The material of a beam group.

`color` Color?

The color of a beam group.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the new <xref href="VM.Managed.DAFUL.Beam.BeamGroup" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'subSystemDocument' argument is null.

 ArgumentException

Will be thrown if the magnitude of 'directionY' is 0 and if the type of 'material' is not ISO.

 ArgumentException

Will be thrown if the num of 'positions' is less than 2.

### <a id="VM_API_Pre_BeamGroupAPI_CreateBeamGroup_VM_Managed_DAFUL_SubSystemDocument_System_String_System_String_VM_Managed_DAFUL_Beam_CrossSectionType_VM_Vector_System_Collections_Generic_IEnumerable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_API_Pre_Obj__System_Nullable_System_Drawing_Color__"></a> CreateBeamGroup\(SubSystemDocument, string, string, CrossSectionType, Vector, IEnumerable<ExpressionValueVariable\>, ExpressionValueVariable?, Obj?, Color?\)

Create <xref href="VM.Managed.DAFUL.Beam.BeamGroup" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[MatchTypeObj(new object[] { "material", typeof(ISO) })]
[ExistFile(new string[] { "filePath" })]
public static Obj CreateBeamGroup(this SubSystemDocument subSystemDocument, string filePath, string name = "", CrossSectionType crossSection = CrossSectionType.CIRCULAR, Vector yDirection = default, IEnumerable<ExpressionValueVariable> crossSectionValueInfo = null, ExpressionValueVariable? noOfElement = null, Obj? material = null, Color? color = null)
```

#### Parameters

`subSystemDocument` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a beam group.

`filePath` string

The file path of a beam group.

`name` string

The name of a beam group.

`crossSection` [CrossSectionType](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.FE.BeamCrossSection/BeamCrossSection.cs)

The cross section of a beam group.

`yDirection` Vector

The Y Direction.

`crossSectionValueInfo` IEnumerable<[ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)\>

The cross section value info of a beam group.

`noOfElement` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The num of element of a beam group.

`material` [Obj](VM.API.Pre.Obj.md)?

The material of a beam group.

`color` Color?

The color of a beam group.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the new <xref href="VM.Managed.DAFUL.Beam.BeamGroup" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'subSystemDocument' argument is null.

 ArgumentException

Will be thrown if the type of 'material' is not 'ISO'.

 FileNotFoundException

Will be thrown if 'filePath' file is not exist.

