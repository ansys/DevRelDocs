#  Class CouplerAPI

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class implements APIs for <xref href="VM.Managed.DAFUL.Constraints.Coupler" data-throw-if-not-resolved="false"></xref> class.

```csharp
public static class CouplerAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CouplerAPI](VM.API.Pre.CouplerAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_CouplerAPI_CreateCable_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_String_VM_Managed_SymmetricType_"></a> CreateCable\(SubSystemDocument, Obj, Obj, ExpressionValueVariable?, ExpressionValueVariable?, string, SymmetricType\)

Create <xref href="VM.Managed.DAFUL.Constraints.CouplerCable" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.DAFUL.Builder.Constraints.CouplerCableJJ" data-throw-if-not-resolved="false"></xref> builder.

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "firstJoint", "secondJoint" })]
[MatchTypeObj(new object[] { "firstJoint", typeof(ITranslationalMotionComponent), "secondJoint", typeof(ITranslationalMotionComponent) })]
public static Obj CreateCable(this SubSystemDocument subSystemDocument, Obj firstJoint, Obj secondJoint, ExpressionValueVariable? firstRatio = null, ExpressionValueVariable? secondRatio = null, string name = "", SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`subSystemDocument` SubSystemDocument

The document to create the coupler cable.

`firstJoint` [Obj](VM.API.Pre.Obj.md)

The first joint to create the coupler cable.

`secondJoint` [Obj](VM.API.Pre.Obj.md)

The second joint of the coupler cable.

`firstRatio` ExpressionValueVariable?

The first ratio of the coupler cable.

`secondRatio` ExpressionValueVariable?

The second ratio of the coupler cable.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the <xref href="VM.Managed.DAFUL.Constraints.CouplerCable" data-throw-if-not-resolved="false"></xref>.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Managed.DAFUL.Constraints.CouplerCable" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.Constraints.CouplerCable" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument', 'firstJoint', 'secondJoint' is null.

### <a id="VM_API_Pre_CouplerAPI_CreateCoupler_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Managed_DAFUL_Constraints_PropertyCouplerBase_MotionType_VM_Managed_DAFUL_Constraints_PropertyCouplerBase_MotionType_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_String_VM_Managed_SymmetricType_"></a> CreateCoupler\(SubSystemDocument, Obj, Obj, MotionType, MotionType, ExpressionValueVariable?, ExpressionValueVariable?, string, SymmetricType\)

Create <xref href="VM.Managed.DAFUL.Constraints.Coupler" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.DAFUL.Builder.Constraints.CouplerJJ" data-throw-if-not-resolved="false"></xref> builder.

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "firstJoint", "secondJoint" })]
[MatchTypeObj(new object[] { "firstJoint", typeof(ICouplerComponent), "secondJoint", typeof(ICouplerComponent) })]
public static Obj CreateCoupler(this SubSystemDocument subSystemDocument, Obj firstJoint, Obj secondJoint, PropertyCouplerBase.MotionType firstType = MotionType.Translation, PropertyCouplerBase.MotionType secondType = MotionType.Translation, ExpressionValueVariable? firstRatio = null, ExpressionValueVariable? secondRatio = null, string name = "", SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`subSystemDocument` SubSystemDocument

The document to create the coupler.

`firstJoint` [Obj](VM.API.Pre.Obj.md)

The first joint to create the coupler.

`secondJoint` [Obj](VM.API.Pre.Obj.md)

The second joint of the coupler.

`firstType` PropertyCouplerBase.MotionType

The first type of the coupler.

`secondType` PropertyCouplerBase.MotionType

The second type of the coupler.

`firstRatio` ExpressionValueVariable?

The first ratio of the coupler.

`secondRatio` ExpressionValueVariable?

The second ratio of the coupler.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the <xref href="VM.Managed.DAFUL.Constraints.Coupler" data-throw-if-not-resolved="false"></xref>.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Managed.DAFUL.Constraints.Coupler" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.Constraints.Coupler" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument', 'firstJoint', 'secondJoint' is null.

### <a id="VM_API_Pre_CouplerAPI_CreateCoupler_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Managed_DAFUL_Constraints_PropertyCouplerBase_MotionType_VM_Managed_DAFUL_Constraints_PropertyCouplerBase_MotionType_VM_Managed_DAFUL_Constraints_PropertyCouplerBase_MotionType_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_String_VM_Managed_SymmetricType_"></a> CreateCoupler\(SubSystemDocument, Obj, Obj, Obj, MotionType, MotionType, MotionType, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, string, SymmetricType\)

Create <xref href="VM.Managed.DAFUL.Constraints.Coupler" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.DAFUL.Builder.Constraints.CouplerJJ" data-throw-if-not-resolved="false"></xref> builder.

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "firstJoint", "secondJoint", "thirdJoint" })]
[MatchTypeObj(new object[] { "firstJoint", typeof(ICouplerComponent), "secondJoint", typeof(ICouplerComponent), "thirdJoint", typeof(ICouplerComponent) })]
public static Obj CreateCoupler(this SubSystemDocument subSystemDocument, Obj firstJoint, Obj secondJoint, Obj thirdJoint, PropertyCouplerBase.MotionType firstType = MotionType.Translation, PropertyCouplerBase.MotionType secondType = MotionType.Translation, PropertyCouplerBase.MotionType thirdType = MotionType.Translation, ExpressionValueVariable? firstRatio = null, ExpressionValueVariable? secondRatio = null, ExpressionValueVariable? thirdRatio = null, string name = "", SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`subSystemDocument` SubSystemDocument

The document to create the coupler.

`firstJoint` [Obj](VM.API.Pre.Obj.md)

The first joint to create the coupler.

`secondJoint` [Obj](VM.API.Pre.Obj.md)

The second joint of the coupler.

`thirdJoint` [Obj](VM.API.Pre.Obj.md)

The third joint of the coupler.

`firstType` PropertyCouplerBase.MotionType

The first type of the coupler.

`secondType` PropertyCouplerBase.MotionType

The second type of the coupler.

`thirdType` PropertyCouplerBase.MotionType

The third type of the coupler.

`firstRatio` ExpressionValueVariable?

The first ratio of the coupler.

`secondRatio` ExpressionValueVariable?

The second ratio of the coupler.

`thirdRatio` ExpressionValueVariable?

The third ratio of the coupler.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the <xref href="VM.Managed.DAFUL.Constraints.Coupler" data-throw-if-not-resolved="false"></xref>.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Managed.DAFUL.Constraints.Coupler" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.Constraints.Coupler" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument', 'firstJoint', 'secondJoint', 'thirdJoint' is null.

### <a id="VM_API_Pre_CouplerAPI_CreateGear_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_String_VM_Managed_SymmetricType_"></a> CreateGear\(SubSystemDocument, Obj, Obj, ExpressionValueVariable?, ExpressionValueVariable?, string, SymmetricType\)

Create <xref href="VM.Managed.DAFUL.Constraints.CouplerGear" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.DAFUL.Builder.Constraints.CouplerGearJJ" data-throw-if-not-resolved="false"></xref> builder.

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "firstJoint", "secondJoint" })]
[MatchTypeObj(new object[] { "firstJoint", typeof(IRotationalMotionComponent), "secondJoint", typeof(IRotationalMotionComponent) })]
public static Obj CreateGear(this SubSystemDocument subSystemDocument, Obj firstJoint, Obj secondJoint, ExpressionValueVariable? firstRatio = null, ExpressionValueVariable? secondRatio = null, string name = "", SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`subSystemDocument` SubSystemDocument

The document to create the coupler gear.

`firstJoint` [Obj](VM.API.Pre.Obj.md)

The first joint to create the coupler gear.

`secondJoint` [Obj](VM.API.Pre.Obj.md)

The second joint of the coupler gear.

`firstRatio` ExpressionValueVariable?

The first ratio of the coupler gear.

`secondRatio` ExpressionValueVariable?

The second ratio of the coupler gear.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the <xref href="VM.Managed.DAFUL.Constraints.CouplerGear" data-throw-if-not-resolved="false"></xref>.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Managed.DAFUL.Constraints.CouplerGear" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.Constraints.CouplerGear" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument', 'firstJoint', 'secondJoint' is null.

### <a id="VM_API_Pre_CouplerAPI_CreateRackAndPinion_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_String_VM_Managed_SymmetricType_"></a> CreateRackAndPinion\(SubSystemDocument, Obj, Obj, ExpressionValueVariable?, ExpressionValueVariable?, string, SymmetricType\)

Create <xref href="VM.Managed.DAFUL.Constraints.CouplerRackPinion" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.DAFUL.Builder.Constraints.CouplerRackPinionJJ" data-throw-if-not-resolved="false"></xref> builder.

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "firstJoint", "secondJoint" })]
[MatchTypeObj(new object[] { "firstJoint", typeof(ITranslationalMotionComponent), "secondJoint", typeof(IRotationalMotionComponent) })]
public static Obj CreateRackAndPinion(this SubSystemDocument subSystemDocument, Obj firstJoint, Obj secondJoint, ExpressionValueVariable? firstRatio = null, ExpressionValueVariable? secondRatio = null, string name = "", SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`subSystemDocument` SubSystemDocument

The document to create the coupler rack and pinion.

`firstJoint` [Obj](VM.API.Pre.Obj.md)

The first joint to create the coupler rack and pinion.

`secondJoint` [Obj](VM.API.Pre.Obj.md)

The second joint of the coupler rack and pinion.

`firstRatio` ExpressionValueVariable?

The first ratio of the coupler rack and pinion.

`secondRatio` ExpressionValueVariable?

The second ratio of the coupler rack and pinion.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the <xref href="VM.Managed.DAFUL.Constraints.CouplerRackPinion" data-throw-if-not-resolved="false"></xref>.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Managed.DAFUL.Constraints.CouplerRackPinion" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.Constraints.CouplerRackPinion" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument', 'firstJoint', 'secondJoint' is null.

