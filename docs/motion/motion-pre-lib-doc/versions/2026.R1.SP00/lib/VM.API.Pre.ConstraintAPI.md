# Class ConstraintAPI
<a id="VM_API_Pre_ConstraintAPI"></a>

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class implements APIs for <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref> class.

```csharp
public static class ConstraintAPI
```

#### Inheritance

object ← 
[ConstraintAPI](VM.API.Pre.ConstraintAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_ConstraintAPI_CreateBall_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_System_String_VM_API_Pre_FrictionBall_VM_Managed_SymmetricType_"></a> CreateBall\(SubSystemDocument, Obj, Obj, Vector, string, FrictionBall, SymmetricType\)

Create <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "baseEntity", "actionEntity" })]
[MatchTypeObj(new object[] { "baseEntity", typeof(IConnectable), "actionEntity", typeof(IConnectable) })]
public static Obj CreateBall(this SubSystemDocument subSystemDocument, Obj baseEntity, Obj actionEntity, Vector position, string name = "", FrictionBall friction = null, SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`subSystemDocument` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a ball constraint.

`baseEntity` [Obj](VM.API.Pre.Obj.md)

The base entity of a ball constraint.

`actionEntity` [Obj](VM.API.Pre.Obj.md)

The action entity of a ball constraint.

`position` Vector

The position of a ball constraint.

`name` string

The name of a ball constraint.

`friction` [FrictionBall](VM.API.Pre.FrictionBall.md)

The friction of a ball constraint.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'subSystemDocument', 'baseEntity', 'actionEntity' argument is null.

 ArgumentException

Will be thrown if the type of 'baseEntity', 'actionEntity' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_ConstraintAPI_CreateConstantVelocity_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_VM_Vector_VM_Vector_VM_Vector_System_String_VM_Managed_SymmetricType_"></a> CreateConstantVelocity\(SubSystemDocument, Obj, Obj, Vector, Vector, Vector, Vector, string, SymmetricType\)

Create <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "baseEntity", "actionEntity" })]
[MatchTypeObj(new object[] { "baseEntity", typeof(IConnectable), "actionEntity", typeof(IConnectable) })]
[NotZeroMagnitude(new string[] { "baseZAxis", "actionZAxis", "orthogonalAxis" })]
public static Obj CreateConstantVelocity(this SubSystemDocument subSystemDocument, Obj baseEntity, Obj actionEntity, Vector position, Vector baseZAxis, Vector actionZAxis, Vector orthogonalAxis, string name = "", SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`subSystemDocument` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a constant velocity constraint.

`baseEntity` [Obj](VM.API.Pre.Obj.md)

The base entity of a constant velocity constraint.

`actionEntity` [Obj](VM.API.Pre.Obj.md)

The action entity of a constant velocity constraint.

`position` Vector

The position of a constant velocity constraint.

`baseZAxis` Vector

The base Z-Axis of a constant velocity constraint.

`actionZAxis` Vector

The action Z-Axis of a constant velocity constraint.

`orthogonalAxis` Vector

The orthogonal Axis of a constant velocity constraint.

`name` string

The name of a constant velocity constraint.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'subSystemDocument', 'baseEntity', 'actionEntity' argument is null.

 ArgumentException

Will be thrown if the magnitude of 'baseZAxis', 'actionZAxis', 'orthogonalAxis' is 0 and if the type of 'baseEntity', 'actionEntity' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

 ArgumentException

Will be thrown if 'baseZAxis' is equal to 'actionZAxis', 'orthogonalAxis' or if 'actionZAxis' is equal to 'orthogonalAxis'.

### <a id="VM_API_Pre_ConstraintAPI_CreateCylindrical_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_VM_Vector_System_String_VM_API_Pre_Relative_VM_API_Pre_Relative_System_Nullable_VM_API_Pre_Restriction__System_Nullable_VM_API_Pre_Restriction__System_Nullable_VM_API_Pre_AdvancedRestriction__System_Nullable_VM_API_Pre_AdvancedRestriction__VM_API_Pre_FrictionTranslational_VM_API_Pre_FrictionRevolute_VM_Managed_SymmetricType_"></a> CreateCylindrical\(SubSystemDocument, Obj, Obj, Vector, Vector, string, Relative, Relative, Restriction?, Restriction?, AdvancedRestriction?, AdvancedRestriction?, FrictionTranslational, FrictionRevolute, SymmetricType\)

Create <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "baseEntity", "actionEntity" })]
[MatchTypeObj(new object[] { "baseEntity", typeof(IConnectable), "actionEntity", typeof(IConnectable) })]
[NotZeroMagnitude(new string[] { "zAxis" })]
public static Obj CreateCylindrical(this SubSystemDocument subSystemDocument, Obj baseEntity, Obj actionEntity, Vector position, Vector zAxis, string name = "", Relative relativeT = null, Relative relativeR = null, Restriction? restrictionT = null, Restriction? restrictionR = null, AdvancedRestriction? avancedRestrictionT = null, AdvancedRestriction? advancedRestrictionR = null, FrictionTranslational frictionT = null, FrictionRevolute frictionR = null, SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`subSystemDocument` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a cylindrical constraint.

`baseEntity` [Obj](VM.API.Pre.Obj.md)

The base entity of a cylindrical constraint.

`actionEntity` [Obj](VM.API.Pre.Obj.md)

The action entity of a cylindrical constraint.

`position` Vector

The position of a cylindrical constraint.

`zAxis` Vector

The Z-Axis of cylindrical constraint.

`name` string

The name of a cylindrical constraint.

`relativeT` [Relative](VM.API.Pre.Relative.md)

The translational relative of a revolute constraint. It's type can be 'None', 'Motion Function', 'Initial Conditions', 'Motion User Subroutine'.

`relativeR` [Relative](VM.API.Pre.Relative.md)

The revolute relative of a revolute constraint. It's type can be 'None', 'Motion Function', 'Initial Conditions', 'Motion User Subroutine'.

`restrictionT` [Restriction](VM.API.Pre.Restriction.md)?

The translational restriction of a cylindrical constraint.

`restrictionR` [Restriction](VM.API.Pre.Restriction.md)?

The revolute restriction of a cylindrical constraint.

`avancedRestrictionT` [AdvancedRestriction](VM.API.Pre.AdvancedRestriction.md)?

The translational advanced restriction of a cylindrical constraint.

`advancedRestrictionR` [AdvancedRestriction](VM.API.Pre.AdvancedRestriction.md)?

The revolute advanced restriction of a cylindrical constraint.

`frictionT` [FrictionTranslational](VM.API.Pre.FrictionTranslational.md)

The translational friction of a cylindrical constraint.

`frictionR` [FrictionRevolute](VM.API.Pre.FrictionRevolute.md)

The revolute friction of a cylindrical constraint.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'subSystemDocument', 'baseEntity', 'actionEntity' argument is null.

 ArgumentException

Will be thrown if the magnitude of 'zAxis' is 0 and if the type of 'baseEntity', 'actionEntity' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_ConstraintAPI_CreateDistance_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_VM_Vector_System_String_VM_Managed_SymmetricType_"></a> CreateDistance\(SubSystemDocument, Obj, Obj, Vector, Vector, string, SymmetricType\)

Create <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "baseEntity", "actionEntity" })]
[MatchTypeObj(new object[] { "baseEntity", typeof(IConnectable), "actionEntity", typeof(IConnectable) })]
public static Obj CreateDistance(this SubSystemDocument subSystemDocument, Obj baseEntity, Obj actionEntity, Vector basePosition, Vector actionPosition, string name = "", SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`subSystemDocument` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a distance constraint.

`baseEntity` [Obj](VM.API.Pre.Obj.md)

The base entity of a distance constraint.

`actionEntity` [Obj](VM.API.Pre.Obj.md)

The action entity of a distance constraint.

`basePosition` Vector

The base position of a distance constraint.

`actionPosition` Vector

The action position of a distance constraint.

`name` string

The name of a distance constraint.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'subSystemDocument', 'baseEntity', 'actionEntity' argument is null.

 ArgumentException

Will be thrown if the type of 'baseEntity', 'actionEntity' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

 ArgumentException

Will be thrown if 'basePosition' is equal to 'actionPosition'.

### <a id="VM_API_Pre_ConstraintAPI_CreateFixed_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_System_String_VM_Managed_SymmetricType_"></a> CreateFixed\(SubSystemDocument, Obj, Obj, Vector, string, SymmetricType\)

Create <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "baseEntity", "actionEntity" })]
[MatchTypeObj(new object[] { "baseEntity", typeof(IConnectable), "actionEntity", typeof(IConnectable) })]
public static Obj CreateFixed(this SubSystemDocument subSystemDocument, Obj baseEntity, Obj actionEntity, Vector position, string name = "", SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`subSystemDocument` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a fixed constraint.

`baseEntity` [Obj](VM.API.Pre.Obj.md)

The base entity of a fixed constraint.

`actionEntity` [Obj](VM.API.Pre.Obj.md)

The action entity of a fixed constraint.

`position` Vector

The position of a fixed constraint.

`name` string

The name of a fixed constraint.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'subSystemDocument', 'baseEntity', 'actionEntity' argument is null.

 ArgumentException

Will be thrown if the type of 'baseEntity', 'actionEntity' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_ConstraintAPI_CreateGroupAutoConnector_VM_Managed_DAFUL_SubSystemDocument_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__"></a> CreateGroupAutoConnector\(SubSystemDocument, IEnumerable<Obj\>\)

```csharp
[NotNull(new string[] { "subSystemDocument", "groups" })]
public static void CreateGroupAutoConnector(this SubSystemDocument subSystemDocument, IEnumerable<Obj> groups)
```

#### Parameters

`subSystemDocument` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

`groups` IEnumerable<[Obj](VM.API.Pre.Obj.md)\>

### <a id="VM_API_Pre_ConstraintAPI_CreateInline_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_VM_Vector_System_String_VM_Managed_SymmetricType_"></a> CreateInline\(SubSystemDocument, Obj, Obj, Vector, Vector, string, SymmetricType\)

Create <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "baseEntity", "actionEntity" })]
[MatchTypeObj(new object[] { "baseEntity", typeof(IConnectable), "actionEntity", typeof(IConnectable) })]
public static Obj CreateInline(this SubSystemDocument subSystemDocument, Obj baseEntity, Obj actionEntity, Vector basePosition, Vector actionPosition, string name = "", SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`subSystemDocument` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a inline constraint.

`baseEntity` [Obj](VM.API.Pre.Obj.md)

The base entity of a inline constraint.

`actionEntity` [Obj](VM.API.Pre.Obj.md)

The action entity of a inline constraint.

`basePosition` Vector

The base position of a inline constraint.

`actionPosition` Vector

The action position of a inline constraint.

`name` string

The name of a inline constraint.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'subSystemDocument', 'baseEntity', 'actionEntity' argument is null.

 ArgumentException

Will be thrown if the type of 'baseEntity', 'actionEntity' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

 ArgumentException

Will be thrown if the type of 'basePosition' is equal to 'actionPosition'..

### <a id="VM_API_Pre_ConstraintAPI_CreateInplane_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_VM_Vector_VM_Vector_System_String_VM_Managed_SymmetricType_"></a> CreateInplane\(SubSystemDocument, Obj, Obj, Vector, Vector, Vector, string, SymmetricType\)

Create <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "baseEntity", "actionEntity" })]
[MatchTypeObj(new object[] { "baseEntity", typeof(IConnectable), "actionEntity", typeof(IConnectable) })]
[NotZeroMagnitude(new string[] { "zAxis" })]
public static Obj CreateInplane(this SubSystemDocument subSystemDocument, Obj baseEntity, Obj actionEntity, Vector basePosition, Vector actionPosition, Vector zAxis, string name = "", SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`subSystemDocument` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a inplane constraint.

`baseEntity` [Obj](VM.API.Pre.Obj.md)

The base entity of a inplane constraint.

`actionEntity` [Obj](VM.API.Pre.Obj.md)

The action entity of a inplane constraint.

`basePosition` Vector

The base position of a inplane constraint.

`actionPosition` Vector

The action position of a inplane constraint.

`zAxis` Vector

The Z-Axis of a inplane constraint.

`name` string

The name of a inplane constraint.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'subSystemDocument', 'baseEntity', 'actionEntity' argument is null.

 ArgumentException

Will be thrown if the magnitude of 'zAxis' is 0 and if the type of 'baseEntity', 'actionEntity' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_ConstraintAPI_CreateOrientation_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_System_String_VM_Managed_SymmetricType_"></a> CreateOrientation\(SubSystemDocument, Obj, Obj, Vector, string, SymmetricType\)

Create <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "baseEntity", "actionEntity" })]
[MatchTypeObj(new object[] { "baseEntity", typeof(IConnectable), "actionEntity", typeof(IConnectable) })]
public static Obj CreateOrientation(this SubSystemDocument subSystemDocument, Obj baseEntity, Obj actionEntity, Vector position, string name = "", SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`subSystemDocument` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a orientation constraint.

`baseEntity` [Obj](VM.API.Pre.Obj.md)

The base entity of a orientation constraint.

`actionEntity` [Obj](VM.API.Pre.Obj.md)

The action entity of a orientation constraint.

`position` Vector

The position of a orientation constraint.

`name` string

The name of a orientation constraint.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'subSystemDocument', 'baseEntity', 'actionEntity' argument is null.

 ArgumentException

Will be thrown if the type of 'baseEntity', 'actionEntity' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_ConstraintAPI_CreateParallel_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_VM_Vector_VM_Vector_System_String_VM_Managed_SymmetricType_"></a> CreateParallel\(SubSystemDocument, Obj, Obj, Vector, Vector, Vector, string, SymmetricType\)

Create <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "baseEntity", "actionEntity" })]
[MatchTypeObj(new object[] { "baseEntity", typeof(IConnectable), "actionEntity", typeof(IConnectable) })]
[NotZeroMagnitude(new string[] { "zAxis" })]
public static Obj CreateParallel(this SubSystemDocument subSystemDocument, Obj baseEntity, Obj actionEntity, Vector basePosition, Vector actionPosition, Vector zAxis, string name = "", SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`subSystemDocument` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a parallel constraint.

`baseEntity` [Obj](VM.API.Pre.Obj.md)

The base entity of a parallel constraint.

`actionEntity` [Obj](VM.API.Pre.Obj.md)

The action entity of a parallel constraint.

`basePosition` Vector

The base position of a parallel constraint.

`actionPosition` Vector

The action position of a parallel constraint.

`zAxis` Vector

The Z-Axis of a parallel constraint.

`name` string

The name of a parallel constraint.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'subSystemDocument', 'baseEntity', 'actionEntity' argument is null.

 ArgumentException

Will be thrown if the magnitude of 'zAxis' is 0 and if the type of 'baseEntity', 'actionEntity' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_ConstraintAPI_CreatePerpendicular_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_VM_Vector_VM_Vector_System_String_VM_Managed_SymmetricType_"></a> CreatePerpendicular\(SubSystemDocument, Obj, Obj, Vector, Vector, Vector, string, SymmetricType\)

Create <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "baseEntity", "actionEntity" })]
[MatchTypeObj(new object[] { "baseEntity", typeof(IConnectable), "actionEntity", typeof(IConnectable) })]
[NotZeroMagnitude(new string[] { "baseZAxis", "actionZAxis" })]
public static Obj CreatePerpendicular(this SubSystemDocument subSystemDocument, Obj baseEntity, Obj actionEntity, Vector position, Vector baseZAxis, Vector actionZAxis, string name = "", SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`subSystemDocument` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a perpendicular constraint.

`baseEntity` [Obj](VM.API.Pre.Obj.md)

The base entity of a perpendicular constraint.

`actionEntity` [Obj](VM.API.Pre.Obj.md)

The action entity of a perpendicular constraint.

`position` Vector

The position of a perpendicular constraint.

`baseZAxis` Vector

The base Z-Axis of a perpendicular constraint.

`actionZAxis` Vector

The action Z-Axis of a perpendicular constraint.

`name` string

The name of a perpendicular constraint.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'subSystemDocument', 'baseEntity', 'actionEntity' argument is null.

 ArgumentException

Will be thrown if the magnitude of 'baseZAxis', 'actionZAxis' is 0 and if the type of 'baseEntity', 'actionEntity' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_ConstraintAPI_CreatePerpendicular_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_VM_Vector_VM_Vector_VM_Vector_System_String_VM_Managed_SymmetricType_"></a> CreatePerpendicular\(SubSystemDocument, Obj, Obj, Vector, Vector, Vector, Vector, string, SymmetricType\)

Create <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "baseEntity", "actionEntity" })]
[MatchTypeObj(new object[] { "baseEntity", typeof(IConnectable), "actionEntity", typeof(IConnectable) })]
[NotZeroMagnitude(new string[] { "baseZAxis", "actionZAxis" })]
public static Obj CreatePerpendicular(this SubSystemDocument subSystemDocument, Obj baseEntity, Obj actionEntity, Vector basePosition, Vector actionPosition, Vector baseZAxis, Vector actionZAxis, string name = "", SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`subSystemDocument` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a perpendicular constraint.

`baseEntity` [Obj](VM.API.Pre.Obj.md)

The base entity of a perpendicular constraint.

`actionEntity` [Obj](VM.API.Pre.Obj.md)

The action entity of a perpendicular constraint.

`basePosition` Vector

The base position of a perpendicular constraint.

`actionPosition` Vector

The action position of a perpendicular constraint.

`baseZAxis` Vector

The base Z-Axis of a perpendicular constraint.

`actionZAxis` Vector

The action Z-Axis of a perpendicular constraint.

`name` string

The name of a perpendicular constraint.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'subSystemDocument', 'baseEntity', 'actionEntity' argument is null.

 ArgumentException

Will be thrown if the magnitude of 'baseZAxis', 'actionZAxis' is 0 and if the type of 'baseEntity', 'actionEntity' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

 ArgumentException

Will be thrown if 'baseZAxis' is equal to 'actionZAxis'.

### <a id="VM_API_Pre_ConstraintAPI_CreatePlane_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_VM_Vector_System_String_VM_Managed_SymmetricType_"></a> CreatePlane\(SubSystemDocument, Obj, Obj, Vector, Vector, string, SymmetricType\)

Create <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "baseEntity", "actionEntity" })]
[MatchTypeObj(new object[] { "baseEntity", typeof(IConnectable), "actionEntity", typeof(IConnectable) })]
[NotZeroMagnitude(new string[] { "zAxis" })]
public static Obj CreatePlane(this SubSystemDocument subSystemDocument, Obj baseEntity, Obj actionEntity, Vector position, Vector zAxis, string name = "", SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`subSystemDocument` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a planar constraint.

`baseEntity` [Obj](VM.API.Pre.Obj.md)

The base entity of a planar constraint.

`actionEntity` [Obj](VM.API.Pre.Obj.md)

The action entity of a planar constraint.

`position` Vector

The position of a planar constraint.

`zAxis` Vector

The Z-Axis of a planar constraint.

`name` string

The name of a planar constraint.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'subSystemDocument', 'baseEntity', 'actionEntity' argument is null.

 ArgumentException

Will be thrown if the magnitude of 'zAxis' is 0 and if the type of 'baseEntity', 'actionEntity' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_ConstraintAPI_CreateRevolute_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_System_String_VM_API_Pre_Relative_System_Nullable_VM_API_Pre_Restriction__System_Nullable_VM_API_Pre_AdvancedRestriction__VM_API_Pre_FrictionRevolute_VM_API_Pre_ClearanceRevolute_VM_Managed_SymmetricType_"></a> CreateRevolute\(SubSystemDocument, Obj, Obj, Vector, string, Relative, Restriction?, AdvancedRestriction?, FrictionRevolute, ClearanceRevolute, SymmetricType\)

Create <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "baseEntity", "actionEntity" })]
[MatchTypeObj(new object[] { "baseEntity", typeof(IConnectable), "actionEntity", typeof(IConnectable) })]
public static Obj CreateRevolute(this SubSystemDocument subSystemDocument, Obj baseEntity, Obj actionEntity, Vector position, string name = "", Relative relative = null, Restriction? restriction = null, AdvancedRestriction? advancedRestriction = null, FrictionRevolute friction = null, ClearanceRevolute clearance = null, SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`subSystemDocument` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a revolute constraint.

`baseEntity` [Obj](VM.API.Pre.Obj.md)

The base entity of a revolute constraint.

`actionEntity` [Obj](VM.API.Pre.Obj.md)

The action entity of a revolute constraint.

`position` Vector

The position of a revolute constraint.

`name` string

The name of a revolute constraint.

`relative` [Relative](VM.API.Pre.Relative.md)

The relative of a revolute constraint. It's type can be 'None', 'Motion Function', 'Initial Conditions', 'Motion User Subroutine'.

`restriction` [Restriction](VM.API.Pre.Restriction.md)?

The restriction of a revolute constraint.

`advancedRestriction` [AdvancedRestriction](VM.API.Pre.AdvancedRestriction.md)?

The advanced restriction of a revolute constraint.

`friction` [FrictionRevolute](VM.API.Pre.FrictionRevolute.md)

The friction of a revolute constraint.

`clearance` [ClearanceRevolute](VM.API.Pre.ClearanceRevolute.md)

The clearance of a revolute constraint.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'subSystemDocument', 'baseEntity', 'actionEntity' argument is null.

 ArgumentException

Will be thrown if the type of 'baseEntity', 'actionEntity' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_ConstraintAPI_CreateRevolute_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_VM_Vector_System_String_VM_API_Pre_Relative_System_Nullable_VM_API_Pre_Restriction__System_Nullable_VM_API_Pre_AdvancedRestriction__VM_API_Pre_FrictionRevolute_VM_API_Pre_ClearanceRevolute_VM_Managed_SymmetricType_"></a> CreateRevolute\(SubSystemDocument, Obj, Obj, Vector, Vector, string, Relative, Restriction?, AdvancedRestriction?, FrictionRevolute, ClearanceRevolute, SymmetricType\)

Create <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "baseEntity", "actionEntity" })]
[MatchTypeObj(new object[] { "baseEntity", typeof(IConnectable), "actionEntity", typeof(IConnectable) })]
[NotZeroMagnitude(new string[] { "zAxis" })]
public static Obj CreateRevolute(this SubSystemDocument subSystemDocument, Obj baseEntity, Obj actionEntity, Vector position, Vector zAxis, string name = "", Relative relative = null, Restriction? restriction = null, AdvancedRestriction? advancedRestriction = null, FrictionRevolute friction = null, ClearanceRevolute clearance = null, SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`subSystemDocument` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a revolute constraint.

`baseEntity` [Obj](VM.API.Pre.Obj.md)

The base entity of a revolute constraint.

`actionEntity` [Obj](VM.API.Pre.Obj.md)

The action entity of a revolute constraint.

`position` Vector

The position of a revolute constraint.

`zAxis` Vector

The Z-Axis of a revolute constraint.

`name` string

The name of a revolute constraint.

`relative` [Relative](VM.API.Pre.Relative.md)

The relative of a revolute constraint. It's type can be 'None', 'Motion Function', 'Initial Conditions', 'Motion User Subroutine'.

`restriction` [Restriction](VM.API.Pre.Restriction.md)?

The restriction of a revolute constraint.

`advancedRestriction` [AdvancedRestriction](VM.API.Pre.AdvancedRestriction.md)?

The advanced restriction of a revolute constraint.

`friction` [FrictionRevolute](VM.API.Pre.FrictionRevolute.md)

The friction of a revolute constraint.

`clearance` [ClearanceRevolute](VM.API.Pre.ClearanceRevolute.md)

The clearance of a revolute constraint.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'subSystemDocument', 'baseEntity', 'actionEntity' argument is null.

 ArgumentException

Will be thrown if the magnitude of 'zAxis' is 0 and if the type of 'baseEntity', 'actionEntity' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_ConstraintAPI_CreateScrew_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_VM_Vector_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_String_VM_Managed_SymmetricType_"></a> CreateScrew\(SubSystemDocument, Obj, Obj, Vector, Vector, ExpressionValueVariable?, string, SymmetricType\)

Create <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "baseEntity", "actionEntity" })]
[MatchTypeObj(new object[] { "baseEntity", typeof(IConnectable), "actionEntity", typeof(IConnectable) })]
[NotZeroMagnitude(new string[] { "zAxis" })]
public static Obj CreateScrew(this SubSystemDocument subSystemDocument, Obj baseEntity, Obj actionEntity, Vector position, Vector zAxis, ExpressionValueVariable? pitch = null, string name = "", SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`subSystemDocument` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a screw.

`baseEntity` [Obj](VM.API.Pre.Obj.md)

The base entity of a screw.

`actionEntity` [Obj](VM.API.Pre.Obj.md)

The action entity of a screw.

`position` Vector

The position of a screw.

`zAxis` Vector

The Z-Axis of a screw.

`pitch` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The pitch of a screw.

`name` string

The name of a screw.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'subSystemDocument', 'baseEntity', 'actionEntity' argument is null.

 ArgumentException

Will be thrown if the magnitude of 'zAxis' is 0 and if the type of 'baseEntity', 'actionEntity' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_ConstraintAPI_CreateTranslational_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_VM_Vector_System_String_VM_API_Pre_Relative_System_Nullable_VM_API_Pre_Restriction__System_Nullable_VM_API_Pre_AdvancedRestriction__VM_API_Pre_FrictionTranslational_VM_API_Pre_ClearanceTranslational_VM_Managed_SymmetricType_"></a> CreateTranslational\(SubSystemDocument, Obj, Obj, Vector, Vector, string, Relative, Restriction?, AdvancedRestriction?, FrictionTranslational, ClearanceTranslational, SymmetricType\)

Create <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "baseEntity", "actionEntity" })]
[MatchTypeObj(new object[] { "baseEntity", typeof(IConnectable), "actionEntity", typeof(IConnectable) })]
[NotZeroMagnitude(new string[] { "zAxis" })]
public static Obj CreateTranslational(this SubSystemDocument subSystemDocument, Obj baseEntity, Obj actionEntity, Vector position, Vector zAxis, string name = "", Relative relative = null, Restriction? restriction = null, AdvancedRestriction? advancedRestriction = null, FrictionTranslational friction = null, ClearanceTranslational clearance = null, SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`subSystemDocument` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a translational constraint.

`baseEntity` [Obj](VM.API.Pre.Obj.md)

The base entity of a translational constraint.

`actionEntity` [Obj](VM.API.Pre.Obj.md)

The action entity of a translational constraint.

`position` Vector

The position of a translational constraint.

`zAxis` Vector

The Z-Axis of a translational constraint.

`name` string

The name of a translational constraint.

`relative` [Relative](VM.API.Pre.Relative.md)

The relative of a translational constraint. It's type can be 'None', 'Motion Function', 'Initial Conditions', 'Motion User Subroutine'.

`restriction` [Restriction](VM.API.Pre.Restriction.md)?

The restriction of a translational constraint.

`advancedRestriction` [AdvancedRestriction](VM.API.Pre.AdvancedRestriction.md)?

The advanced restriction of a translational constraint.

`friction` [FrictionTranslational](VM.API.Pre.FrictionTranslational.md)

The friction of a translational constraint.

`clearance` [ClearanceTranslational](VM.API.Pre.ClearanceTranslational.md)

The clearance of a translational constraint.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'subSystemDocument', 'baseEntity', 'actionEntity' argument is null.

 ArgumentException

Will be thrown if the magnitude of 'zAxis' is 0 and if the type of 'baseEntity', 'actionEntity' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_ConstraintAPI_CreateUniversal_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_VM_Vector_VM_Vector_System_String_VM_API_Pre_FrictionUniversal_VM_API_Pre_FrictionUniversal_VM_Managed_SymmetricType_"></a> CreateUniversal\(SubSystemDocument, Obj, Obj, Vector, Vector, Vector, string, FrictionUniversal, FrictionUniversal, SymmetricType\)

Create <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "baseEntity", "actionEntity" })]
[MatchTypeObj(new object[] { "baseEntity", typeof(IConnectable), "actionEntity", typeof(IConnectable) })]
[NotZeroMagnitude(new string[] { "baseXAxis", "actionXAxis" })]
public static Obj CreateUniversal(this SubSystemDocument subSystemDocument, Obj baseEntity, Obj actionEntity, Vector position, Vector baseXAxis, Vector actionXAxis, string name = "", FrictionUniversal baseFriction = null, FrictionUniversal actionFriction = null, SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`subSystemDocument` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a universal constraint.

`baseEntity` [Obj](VM.API.Pre.Obj.md)

The base entity of a universal constraint.

`actionEntity` [Obj](VM.API.Pre.Obj.md)

The action entity of a universal constraint.

`position` Vector

The position of a universal constraint.

`baseXAxis` Vector

The base X-Axis of a universal constraint.

`actionXAxis` Vector

The action X-Axis of a universal constraint.

`name` string

The name of a universal constraint.

`baseFriction` [FrictionUniversal](VM.API.Pre.FrictionUniversal.md)

The base friction of a universal constraint.

`actionFriction` [FrictionUniversal](VM.API.Pre.FrictionUniversal.md)

The action friction of a universal constraint.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'subSystemDocument', 'baseEntity', 'actionEntity' argument is null.

 ArgumentException

Will be thrown if the magnitude of 'baseXAxis', 'actionXAxis' is 0 and if the type of 'baseEntity', 'actionEntity' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_ConstraintAPI_GetSymmetricObject__1_VM_Managed_SymmetricType_VM_Models_Pre_IObjectBase_"></a> GetSymmetricObject<T\>\(SymmetricType, IObjectBase\)

Get a symmetric object.

```csharp
public static T GetSymmetricObject<T>(SymmetricType symmetricType, IObjectBase objectBase) where T : class
```

#### Parameters

`symmetricType` SymmetricType

The symmetric type of the object.

`objectBase` IObjectBase

The obejct.

#### Returns

 T

the object seleted by this API.

#### Type Parameters

`T` 

The object type

### <a id="VM_API_Pre_ConstraintAPI_GetSymmetricResult_VM_Managed_SymmetricType_VM_Models_Pre_IObjectBase_"></a> GetSymmetricResult\(SymmetricType, IObjectBase\)

Get a symmetric result.

```csharp
public static Obj GetSymmetricResult(SymmetricType symmetricType, IObjectBase objectBase)
```

#### Parameters

`symmetricType` SymmetricType

The symmetric type of the object.

`objectBase` IObjectBase

The obejct.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the object seleted by this API.

