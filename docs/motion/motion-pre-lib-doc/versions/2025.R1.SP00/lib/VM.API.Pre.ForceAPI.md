#  Class ForceAPI

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class implements APIs for force.

```csharp
public static class ForceAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ForceAPI](VM.API.Pre.ForceAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_ForceAPI_CreateBushing_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_System_String_VM_Managed_SymmetricType_"></a> CreateBushing\(SubSystemDocument, Obj, Obj, Vector, string, SymmetricType\)

Create <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "baseEntity", "actionEntity" })]
[MatchTypeObj(new object[] { "baseEntity", typeof(IConnectable), "actionEntity", typeof(IConnectable) })]
public static Obj CreateBushing(this SubSystemDocument subSystemDocument, Obj baseEntity, Obj actionEntity, Vector position, string name = "", SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`subSystemDocument` SubSystemDocument

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a bush force.

`baseEntity` [Obj](VM.API.Pre.Obj.md)

The base entity of a bush force.

`actionEntity` [Obj](VM.API.Pre.Obj.md)

The action entity of a bush force.

`position` Vector

The position of a bush force.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of a bush force.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument', 'baseEntity', 'actionEntity' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'baseEntity', 'actionEntity' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'baseEntity' is equal to 'actionEntity'.

### <a id="VM_API_Pre_ForceAPI_CreateBushing_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_VM_Vector_System_String_VM_Managed_SymmetricType_"></a> CreateBushing\(SubSystemDocument, Obj, Obj, Vector, Vector, string, SymmetricType\)

Create <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "baseEntity", "actionEntity" })]
[MatchTypeObj(new object[] { "baseEntity", typeof(IConnectable), "actionEntity", typeof(IConnectable) })]
[NotZeroMagnitude(new string[] { "direction" })]
public static Obj CreateBushing(this SubSystemDocument subSystemDocument, Obj baseEntity, Obj actionEntity, Vector position, Vector direction, string name = "", SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`subSystemDocument` SubSystemDocument

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a bush force.

`baseEntity` [Obj](VM.API.Pre.Obj.md)

The base entity of a bush force.

`actionEntity` [Obj](VM.API.Pre.Obj.md)

The action entity of a bush force.

`position` Vector

The position of a bushr force.

`direction` Vector

The direction of a bush force.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of a bush force.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument', 'baseEntity', 'actionEntity' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'baseEntity', 'actionEntity' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref> and if the magnitude of 'direction' is 0.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'baseEntity' is equal to 'actionEntity'.

### <a id="VM_API_Pre_ForceAPI_CreateBushing_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_VM_OMatrix_System_String_VM_Managed_SymmetricType_"></a> CreateBushing\(SubSystemDocument, Obj, Obj, Vector, OMatrix, string, SymmetricType\)

Create <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "baseEntity", "actionEntity" })]
[MatchTypeObj(new object[] { "baseEntity", typeof(IConnectable), "actionEntity", typeof(IConnectable) })]
public static Obj CreateBushing(this SubSystemDocument subSystemDocument, Obj baseEntity, Obj actionEntity, Vector position, OMatrix orientation, string name = "", SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`subSystemDocument` SubSystemDocument

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a bush force.

`baseEntity` [Obj](VM.API.Pre.Obj.md)

The base entity of a bush force.

`actionEntity` [Obj](VM.API.Pre.Obj.md)

The action entity of a bush force.

`position` Vector

The position of a bush force.

`orientation` OMatrix

The orientation of a bush force.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of a bush force.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument', 'baseEntity', 'actionEntity' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'baseEntity', 'actionEntity' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref> and if the magnitude of 'orientation' is 0.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'baseEntity' is equal to 'actionEntity'.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the X, Y, Z Vector magnitudes of 'orientation' are equal to 0.

### <a id="VM_API_Pre_ForceAPI_CreateGeneralBearing_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_VM_Vector_System_String_"></a> CreateGeneralBearing\(SubSystemDocument, Obj, Obj, Vector, Vector, string\)

Create BearingGeneral

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "baseEntity", "actionEntity" })]
[MatchTypeObj(new object[] { "baseEntity", typeof(IConnectable), "actionEntity", typeof(IConnectable) })]
[NotZeroMagnitude(new string[] { "axisZ" })]
public static Obj CreateGeneralBearing(this SubSystemDocument subSystemDocument, Obj baseEntity, Obj actionEntity, Vector position, Vector axisZ, string name = "")
```

#### Parameters

`subSystemDocument` SubSystemDocument

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a bearing general force.

`baseEntity` [Obj](VM.API.Pre.Obj.md)

The base entity of a bearing general force.

`actionEntity` [Obj](VM.API.Pre.Obj.md)

The action entity of a bearing general force.

`position` Vector

The position of a bearing general force.

`axisZ` Vector

The Z-Axis of a bearing general force.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of a bearing general force.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the new BearingGeneral object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument', 'baseEntity', 'actionEntity' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the magnitude of 'axisZ' is 0 and if the type of 'baseEntity', 'actionEntity' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'baseEntity' is equal to 'actionEntity'.

### <a id="VM_API_Pre_ForceAPI_CreateLeafSpring_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Managed_TMatrix_VM_Vector_VM_Vector_System_String_"></a> CreateLeafSpring\(SubSystemDocument, Obj, Obj, Obj, TMatrix, Vector, Vector, string\)

Create <xref href="VM.Models.Pre.Force.LeafSpring" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument", "transform" })]
[NotNullObj(new string[] { "frontConnectionFrame", "rearConnectionFrame", "axle" })]
[MatchTypeObj(new object[] { "frontConnectionFrame", typeof(IConnectable), "rearConnectionFrame", typeof(IConnectable), "axle", typeof(IConnectable) })]
public static Obj CreateLeafSpring(this SubSystemDocument subSystemDocument, Obj frontConnectionFrame, Obj rearConnectionFrame, Obj axle, TMatrix transform, Vector eyePosition, Vector shackleToFramePosition, string name = "")
```

#### Parameters

`subSystemDocument` SubSystemDocument

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a leaf spring.

`frontConnectionFrame` [Obj](VM.API.Pre.Obj.md)

The front connection frame of a leaf spring.

`rearConnectionFrame` [Obj](VM.API.Pre.Obj.md)

The rear connection frame of a leaf spring.

`axle` [Obj](VM.API.Pre.Obj.md)

The axle of a leaf spring.

`transform` TMatrix

The transform of a leaf spring.

`eyePosition` Vector

The eye position of a leaf spring.

`shackleToFramePosition` Vector

The shackle to frame position of a leaf spring.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of a leaf spring.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the new <xref href="VM.Models.Pre.Force.LeafSpring" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument', 'transform', 'frontConnectionFrame', 'rearConnectionFrame', 'axle' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'frontConnectionFrame', 'rearConnectionFrame', 'axle' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'frontConnectionFrame', 'rearConnectionFrame', 'axle' are same.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the X, Y, Z Vector magnitudes of 'transform' are equal to 0.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'eyePosition' is equal to 'shackleToFramePosition'.

### <a id="VM_API_Pre_ForceAPI_CreateMagnetic_VM_Managed_DAFUL_SubSystemDocument_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__"></a> CreateMagnetic\(SubSystemDocument, IEnumerable<Obj\>\)

Create a magnetic.

```csharp
[NotNull(new string[] { "subSystemDocument", "groups" })]
public static void CreateMagnetic(this SubSystemDocument subSystemDocument, IEnumerable<Obj> groups)
```

#### Parameters

`subSystemDocument` SubSystemDocument

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a magnetic force.

`groups` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Obj](VM.API.Pre.Obj.md)\>

The groups of a magnetic force.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument', 'groups' is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'groups' is not <xref href="VM.Managed.DAFUL.Group" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_ForceAPI_CreateMatrix_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_VM_Vector_System_String_VM_Managed_SymmetricType_"></a> CreateMatrix\(SubSystemDocument, Obj, Obj, Vector, Vector, string, SymmetricType\)

Create <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "baseEntity", "actionEntity" })]
[MatchTypeObj(new object[] { "baseEntity", typeof(IConnectable), "actionEntity", typeof(IConnectable) })]
public static Obj CreateMatrix(this SubSystemDocument subSystemDocument, Obj baseEntity, Obj actionEntity, Vector basePosition, Vector actionPosition, string name = "", SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`subSystemDocument` SubSystemDocument

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a matrix force.

`baseEntity` [Obj](VM.API.Pre.Obj.md)

The base entity of a matrix force.

`actionEntity` [Obj](VM.API.Pre.Obj.md)

The action entity of a matrix force.

`basePosition` Vector

The base position of a matrix force.

`actionPosition` Vector

The action position of a matrix force.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of a matrix force.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument', 'baseEntity', 'actionEntity' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'baseEntity', 'actionEntity' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_ForceAPI_CreateMatrix_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_VM_Vector_System_Nullable_VM_API_Pre_Obj__System_String_VM_Managed_SymmetricType_"></a> CreateMatrix\(SubSystemDocument, Obj, Obj, Vector, Vector, Obj?, string, SymmetricType\)

Create <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "baseEntity", "actionEntity" })]
[MatchTypeObj(new object[] { "baseEntity", typeof(IConnectable), "actionEntity", typeof(IConnectable) })]
public static Obj CreateMatrix(this SubSystemDocument subSystemDocument, Obj baseEntity, Obj actionEntity, Vector basePosition, Vector actionPosition, Obj? userSubroutine, string name = "", SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`subSystemDocument` SubSystemDocument

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a matrix force.

`baseEntity` [Obj](VM.API.Pre.Obj.md)

The base entity of a matrix force.

`actionEntity` [Obj](VM.API.Pre.Obj.md)

The action entity of a matrix force.

`basePosition` Vector

The base position of a matrix force.

`actionPosition` Vector

The action position of a matrix force.

`userSubroutine` [Obj](VM.API.Pre.Obj.md)?

The user subroutine of a matrix force.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of a matrix force.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the new <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument', 'baseEntity', 'actionEntity' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'baseEntity', 'actionEntity' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'baseEntity' is equal to 'actionEntity'.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'userSubroutine' is equal to <xref href="VM.Managed.DAFUL.UserSubroutine" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_ForceAPI_CreateRotationalScalar_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_System_Nullable_VM_API_Pre_Obj__System_String_VM_Managed_SymmetricType_"></a> CreateRotationalScalar\(SubSystemDocument, Obj, Obj?, string, SymmetricType\)

Create <xref href="VM.Managed.DAFUL.Force.RScalar" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "joint" })]
[MatchTypeObj(new object[] { "joint", typeof(IRScalarComponent) })]
public static Obj CreateRotationalScalar(this SubSystemDocument subSystemDocument, Obj joint, Obj? function = null, string name = "", SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`subSystemDocument` SubSystemDocument

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a rotational scalar force.

`joint` [Obj](VM.API.Pre.Obj.md)

The joint of a rotational scalar force.

`function` [Obj](VM.API.Pre.Obj.md)?

The function of a rotational scalar force.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of a rotational scalar force.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Managed.DAFUL.Force.RScalar" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the new <xref href="VM.Managed.DAFUL.Force.RScalar" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument', 'joint' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'joint' is not <xref href="VM.Managed.DAFUL.IRScalarComponent" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'function' is not <xref href="VM.Managed.DAFUL.UserSubroutine" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.DAFUL.Function" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_ForceAPI_CreateRotationalScalar_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_VM_Vector_System_Nullable_VM_API_Pre_Obj__System_String_VM_Managed_SymmetricType_"></a> CreateRotationalScalar\(SubSystemDocument, Obj, Obj, Vector, Vector, Obj?, string, SymmetricType\)

Create <xref href="VM.Managed.DAFUL.Force.RScalar" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "baseEntity", "actionEntity" })]
[MatchTypeObj(new object[] { "baseEntity", typeof(IConnectable), "actionEntity", typeof(IConnectable) })]
[NotZeroMagnitude(new string[] { "axisZ" })]
public static Obj CreateRotationalScalar(this SubSystemDocument subSystemDocument, Obj baseEntity, Obj actionEntity, Vector position, Vector axisZ, Obj? function = null, string name = "", SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`subSystemDocument` SubSystemDocument

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a rotational scalar force.

`baseEntity` [Obj](VM.API.Pre.Obj.md)

The base entity of a rotational scalar force.

`actionEntity` [Obj](VM.API.Pre.Obj.md)

The action entity of a rotational scalar force.

`position` Vector

The position of a rotational scalar force.

`axisZ` Vector

The Z-Axis of a rotational scalar force.

`function` [Obj](VM.API.Pre.Obj.md)?

The function of a rotational scalar force.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of a rotational scalar force.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Managed.DAFUL.Force.RScalar" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the new <xref href="VM.Managed.DAFUL.Force.RScalar" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument', 'baseEntity', 'actionEntity' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the magnitude of 'axisZ' is 0 and if the type of 'baseEntity', 'actionEntity' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'baseEntity' is equal to 'actionEntity'.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'function' is not <xref href="VM.Managed.DAFUL.UserSubroutine" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.DAFUL.Function" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_ForceAPI_CreateRotationalSpring_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_System_String_VM_Managed_SymmetricType_"></a> CreateRotationalSpring\(SubSystemDocument, Obj, string, SymmetricType\)

Create <xref href="VM.Managed.DAFUL.Force.RSpringDamper" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "joint" })]
[MatchTypeObj(new object[] { "joint", typeof(IRotationalMotionComponent) })]
public static Obj CreateRotationalSpring(this SubSystemDocument subSystemDocument, Obj joint, string name = "", SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`subSystemDocument` SubSystemDocument

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a rotational spring damper force.

`joint` [Obj](VM.API.Pre.Obj.md)

The joint of a rotational spring damper force.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of a rotational spring damper force.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Managed.DAFUL.Force.RSpringDamper" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the new <xref href="VM.Managed.DAFUL.Force.RSpringDamper" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument', 'joint' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'joint' is not <xref href="VM.Managed.DAFUL.IRotationalMotionComponent" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_ForceAPI_CreateSpring_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_VM_Vector_System_String_VM_Managed_SymmetricType_"></a> CreateSpring\(SubSystemDocument, Obj, Obj, Vector, Vector, string, SymmetricType\)

Create <xref href="VM.Managed.DAFUL.Force.TSpringDamper" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "baseEntity", "actionEntity" })]
[MatchTypeObj(new object[] { "baseEntity", typeof(IConnectable), "actionEntity", typeof(IConnectable) })]
public static Obj CreateSpring(this SubSystemDocument subSystemDocument, Obj baseEntity, Obj actionEntity, Vector basePosition, Vector actionPosition, string name = "", SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`subSystemDocument` SubSystemDocument

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a translational spring damper force.

`baseEntity` [Obj](VM.API.Pre.Obj.md)

The base entity of a translational spring damper force.

`actionEntity` [Obj](VM.API.Pre.Obj.md)

The action entity of a translational spring damper force.

`basePosition` Vector

The base position of a translational spring damper force.

`actionPosition` Vector

The action position of a translational spring damper force.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of a translational spring damper force.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Managed.DAFUL.Force.TSpringDamper" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the new <xref href="VM.Managed.DAFUL.Force.TSpringDamper" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument', 'baseEntity', 'actionEntity' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'baseEntity', 'actionEntity' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'baseEntity' is equal to 'actionEntity' or if 'basePosition' is equal to 'actionPosition'.

### <a id="VM_API_Pre_ForceAPI_CreateTranslationalScalar_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_VM_Vector_System_Nullable_VM_API_Pre_Obj__System_String_VM_Managed_SymmetricType_"></a> CreateTranslationalScalar\(SubSystemDocument, Obj, Obj, Vector, Vector, Obj?, string, SymmetricType\)

Create <xref href="VM.Managed.DAFUL.Force.TScalar" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "baseEntity", "actionEntity" })]
[MatchTypeObj(new object[] { "baseEntity", typeof(IConnectable), "actionEntity", typeof(IConnectable) })]
public static Obj CreateTranslationalScalar(this SubSystemDocument subSystemDocument, Obj baseEntity, Obj actionEntity, Vector basePosition, Vector actionPosition, Obj? function = null, string name = "", SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`subSystemDocument` SubSystemDocument

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a translational scalar force.

`baseEntity` [Obj](VM.API.Pre.Obj.md)

The base entity of a translational scalar force.

`actionEntity` [Obj](VM.API.Pre.Obj.md)

The action entity of a translational scalar force.

`basePosition` Vector

The base position of a translational scalar force.

`actionPosition` Vector

The action position of a translational scalar force.

`function` [Obj](VM.API.Pre.Obj.md)?

The function of a translational scalar force.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of a translational scalar force.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Managed.DAFUL.Force.TScalar" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the new <xref href="VM.Managed.DAFUL.Force.TScalar" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument', 'baseEntity', 'actionEntity' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'baseEntity', 'actionEntity' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'baseEntity' is equal to 'actionEntity' or if 'basePosition' is equal to 'actionPosition'.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'function' is not <xref href="VM.Managed.DAFUL.UserSubroutine" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.DAFUL.Function" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_ForceAPI_CreateVector_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_System_Nullable_VM_API_Pre_VectorFunctions__System_String_VM_Managed_SymmetricType_"></a> CreateVector\(SubSystemDocument, Obj, Obj, Vector, VectorFunctions?, string, SymmetricType\)

Create <xref href="VM.Managed.DAFUL.Force.Vector" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "baseEntity", "actionEntity" })]
[MatchTypeObj(new object[] { "baseEntity", typeof(IConnectable), "actionEntity", typeof(IConnectable) })]
public static Obj CreateVector(this SubSystemDocument subSystemDocument, Obj baseEntity, Obj actionEntity, Vector position, VectorFunctions? functions = null, string name = "", SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`subSystemDocument` SubSystemDocument

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a vector force.

`baseEntity` [Obj](VM.API.Pre.Obj.md)

The base entity of a vector force.

`actionEntity` [Obj](VM.API.Pre.Obj.md)

The action entity of a vector force.

`position` Vector

The position of a vector force.

`functions` [VectorFunctions](VM.API.Pre.VectorFunctions.md)?

The functions of a vector force.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of a vector force.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Managed.DAFUL.Force.Vector" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the new <xref href="VM.Managed.DAFUL.Force.Vector" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument', 'baseEntity', 'actionEntity' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'baseEntity', 'actionEntity' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_ForceAPI_CreateVector_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_VM_Vector_System_Nullable_VM_API_Pre_VectorFunctions__System_String_VM_Managed_SymmetricType_"></a> CreateVector\(SubSystemDocument, Obj, Obj, Vector, Vector, VectorFunctions?, string, SymmetricType\)

Create <xref href="VM.Managed.DAFUL.Force.Vector" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "baseEntity", "actionEntity" })]
[MatchTypeObj(new object[] { "baseEntity", typeof(IConnectable), "actionEntity", typeof(IConnectable) })]
public static Obj CreateVector(this SubSystemDocument subSystemDocument, Obj baseEntity, Obj actionEntity, Vector basePosition, Vector actionPosition, VectorFunctions? functions = null, string name = "", SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`subSystemDocument` SubSystemDocument

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a vector force.

`baseEntity` [Obj](VM.API.Pre.Obj.md)

The base entity of a vector force.

`actionEntity` [Obj](VM.API.Pre.Obj.md)

The action entity of a vector force.

`basePosition` Vector

The base position of a vector force.

`actionPosition` Vector

The action position of a vector force.

`functions` [VectorFunctions](VM.API.Pre.VectorFunctions.md)?

The functions of a vector force.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of a vector force.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Managed.DAFUL.Force.Vector" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the new <xref href="VM.Managed.DAFUL.Force.Vector" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument', 'baseEntity', 'actionEntity' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'baseEntity', 'actionEntity' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'baseEntity' is equal to 'actionEntity'.

### <a id="VM_API_Pre_ForceAPI_CreateVector_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_VM_API_Pre_Obj_System_String_VM_Managed_SymmetricType_"></a> CreateVector\(SubSystemDocument, Obj, Obj, Vector, Obj, string, SymmetricType\)

Create <xref href="VM.Managed.DAFUL.Force.Vector" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "baseEntity", "actionEntity", "userSubroutine" })]
[MatchTypeObj(new object[] { "baseEntity", typeof(IConnectable), "actionEntity", typeof(IConnectable) })]
public static Obj CreateVector(this SubSystemDocument subSystemDocument, Obj baseEntity, Obj actionEntity, Vector position, Obj userSubroutine, string name = "", SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`subSystemDocument` SubSystemDocument

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a vector force.

`baseEntity` [Obj](VM.API.Pre.Obj.md)

The base entity of a vector force.

`actionEntity` [Obj](VM.API.Pre.Obj.md)

The action entity of a vector force.

`position` Vector

The position of a vector force.

`userSubroutine` [Obj](VM.API.Pre.Obj.md)

The user subroutine of a vector force.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of a vector force.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Managed.DAFUL.Force.Vector" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the new <xref href="VM.Managed.DAFUL.Force.Vector" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument', 'baseEntity', 'actionEntity', 'userSubroutine' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'baseEntity', 'actionEntity' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_ForceAPI_CreateVector_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_VM_Vector_VM_API_Pre_Obj_System_String_VM_Managed_SymmetricType_"></a> CreateVector\(SubSystemDocument, Obj, Obj, Vector, Vector, Obj, string, SymmetricType\)

Create <xref href="VM.Managed.DAFUL.Force.Vector" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "baseEntity", "actionEntity", "userSubroutine" })]
[MatchTypeObj(new object[] { "baseEntity", typeof(IConnectable), "actionEntity", typeof(IConnectable) })]
public static Obj CreateVector(this SubSystemDocument subSystemDocument, Obj baseEntity, Obj actionEntity, Vector basePosition, Vector actionPosition, Obj userSubroutine, string name = "", SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`subSystemDocument` SubSystemDocument

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a vector force.

`baseEntity` [Obj](VM.API.Pre.Obj.md)

The base entity of a vector force.

`actionEntity` [Obj](VM.API.Pre.Obj.md)

The action entity of a vector force.

`basePosition` Vector

The base position of a vector force.

`actionPosition` Vector

The action position of a vector force.

`userSubroutine` [Obj](VM.API.Pre.Obj.md)

The user subroutine of a vector force.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of a vector force.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Managed.DAFUL.Force.Vector" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the new <xref href="VM.Managed.DAFUL.Force.Vector" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument', 'baseEntity', 'actionEntity', 'userSubroutine' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'baseEntity', 'actionEntity' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'baseEntity' is equal to 'actionEntity'.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'userSubroutine' is not <xref href="VM.Managed.DAFUL.UserSubroutine" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_ForceAPI_RunLeafSpringSimulation_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_System_Boolean_"></a> RunLeafSpringSimulation\(SubSystemDocument, Obj, bool\)

Create a <xref href="VM.Operations.Pre.Force.LeafSpringSimulation" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "subSystemDocument", "leafSpring" })]
[MatchTypeObj(new object[] { "leafSpring", typeof(LeafSpring) })]
public static void RunLeafSpringSimulation(this SubSystemDocument subSystemDocument, Obj leafSpring, bool isForceTest)
```

#### Parameters

`subSystemDocument` SubSystemDocument

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a leaf spring simulation.

`leafSpring` [Obj](VM.API.Pre.Obj.md)

The leaf spring of a leaf spring simulation.

`isForceTest` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The isForceTest of a leaf spring simulation.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument', 'getLeafSpring' is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'leafSpring' is not <xref href="VM.Models.Pre.Force.LeafSpring" data-throw-if-not-resolved="false"></xref>.

