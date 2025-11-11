# Class BearingAPI
<a id="VM_API_Pre_GearTrain_BearingAPI"></a>

Namespace: [VM.API.Pre.GearTrain](VM.API.Pre.GearTrain.md)  
Assembly: VM.API.Pre.GearTrain.dll  

This class implements APIs for <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref> class.

```csharp
public static class BearingAPI
```

#### Inheritance

object ← 
[BearingAPI](VM.API.Pre.GearTrain.BearingAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_GearTrain_BearingAPI_ApplyRollingBearing_VM_Managed_DAFUL_GearTrain_HiddenBearingDocument_"></a> ApplyRollingBearing\(HiddenBearingDocument\)

Apply bearing in bearing designer.

```csharp
[NotNull(new string[] { "document" })]
public static void ApplyRollingBearing(this HiddenBearingDocument document)
```

#### Parameters

`document` [HiddenBearingDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenBearingDocument.cs)

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenBearingDocument" data-throw-if-not-resolved="false"></xref> for bearing apply. If null, the active document will be used.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'bearing' arguments are empty.

### <a id="VM_API_Pre_GearTrain_BearingAPI_ApplySlidingBearing_VM_Managed_DAFUL_GearTrain_HiddenSlidingBearingDocument_"></a> ApplySlidingBearing\(HiddenSlidingBearingDocument\)

Apply sliding bearing in sliding bearing designer.

```csharp
[NotNull(new string[] { "document" })]
public static void ApplySlidingBearing(this HiddenSlidingBearingDocument document)
```

#### Parameters

`document` [HiddenSlidingBearingDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenBearingDocument.cs)

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenSlidingBearingDocument" data-throw-if-not-resolved="false"></xref> for sliding bearing apply. If null, the active document will be used.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'slidingBearing' arguments are empty.

### <a id="VM_API_Pre_GearTrain_BearingAPI_CreateBearingForAngularContactBall_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Int32_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_System_Drawing_Color__System_Nullable_System_Drawing_Color__"></a> CreateBearingForAngularContactBall\(GearTrainDocument, string, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, int, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, Color?, Color?\)

Create <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref> for angular contact ball.

```csharp
[NotNull(new string[] { "document" })]
public static Obj CreateBearingForAngularContactBall(this GearTrainDocument document, string bearingName = "", ExpressionValueVariable? outerDiameterOfOuterRaceway = null, ExpressionValueVariable? innerDiameterOfOuterRaceway = null, ExpressionValueVariable? outerDiameterOfInnerRaceway = null, ExpressionValueVariable? innerDiameterOfInnerRaceway = null, ExpressionValueVariable? ballDiameter = null, ExpressionValueVariable? width = null, int numberOfBall = 11, ExpressionValueVariable? curvatureCenterOuter = null, ExpressionValueVariable? curvatureCenterInner = null, ExpressionValueVariable? roundingRadius = null, ExpressionValueVariable? outerRacewayShoulderBore2 = null, ExpressionValueVariable? innerRacewayShoulderDiameter2 = null, ExpressionValueVariable? actionPoint = null, ExpressionValueVariable? ballPitchDiameter = null, ExpressionValueVariable? ballCr = null, ExpressionValueVariable? ballC0r = null, ExpressionValueVariable? ballF0 = null, Color? outerRacewayColor = null, Color? innerRacewayColor = null)
```

#### Parameters

`document` [GearTrainDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/GearTrainDocument.cs)

The document to create the bearing.

`bearingName` string

The name of the bearing. If empty, default name starts with 'Rolling_' will be generated and used.

`outerDiameterOfOuterRaceway` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The outer diameter of outer raceway. The default value is 47.

`innerDiameterOfOuterRaceway` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The inner diameter of outer raceway. The default value is 36.5.

`outerDiameterOfInnerRaceway` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The outer diameter of inner raceway. The default value is 30.8.

`innerDiameterOfInnerRaceway` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The inner diameter of inner raceway. The default value is 20.

`ballDiameter` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The ball diameter. The default value is 7.938.

`width` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The width. The default value is 14.

`numberOfBall` int

The number of ball. The default value is 11.

`curvatureCenterOuter` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The curvature center of outer. The default value is 16.825.

`curvatureCenterInner` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The curvature center of inner. The default value is 16.825.

`roundingRadius` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The rounding radius. The default value is 1.

`outerRacewayShoulderBore2` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The second shoulder bore of outer raceway. The default value is 41.7.

`innerRacewayShoulderDiameter2` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The second shoulder diameter of outer raceway. The default value is 25.9.

`actionPoint` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The action point. The default value is 21.

`ballPitchDiameter` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The ball pitch diameter. The default value is 33.65.

`ballCr` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The Cr. The default value is 14300.

`ballC0r` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The C0r. The default value is 8150.

`ballF0` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The f0. The default value is 15.

`outerRacewayColor` Color?

The color of the outer raceway.

`innerRacewayColor` Color?

The color of the inner raceway.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' argument is empty.

### <a id="VM_API_Pre_GearTrain_BearingAPI_CreateBearingForCylindricalRoller_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Int32_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_System_Drawing_Color__System_Nullable_System_Drawing_Color__"></a> CreateBearingForCylindricalRoller\(GearTrainDocument, string, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, int, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, Color?, Color?\)

Create <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref> for cylindrical roller.

```csharp
[NotNull(new string[] { "document" })]
public static Obj CreateBearingForCylindricalRoller(this GearTrainDocument document, string bearingName = "", ExpressionValueVariable? outerDiameterOfOuterRaceway = null, ExpressionValueVariable? innerDiameterOfOuterRaceway = null, ExpressionValueVariable? outerDiameterOfInnerRaceway = null, ExpressionValueVariable? innerDiameterOfInnerRaceway = null, ExpressionValueVariable? ballDiameter = null, ExpressionValueVariable? width = null, int numberOfBall = 13, ExpressionValueVariable? roundingRadius = null, ExpressionValueVariable? rollerLen = null, ExpressionValueVariable? rollerPDia = null, ExpressionValueVariable? rollerCr = null, ExpressionValueVariable? rollerC0r = null, Color? outerRacewayColor = null, Color? innerRacewayColor = null)
```

#### Parameters

`document` [GearTrainDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/GearTrainDocument.cs)

The document to create the bearing.

`bearingName` string

The name of the bearing. If empty, default name starts with 'Rolling_' will be generated and used.

`outerDiameterOfOuterRaceway` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The outer diameter of outer raceway. The default value is 47.

`innerDiameterOfOuterRaceway` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The inner diameter of outer raceway. The default value is 36.5.

`outerDiameterOfInnerRaceway` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The outer diameter of inner raceway. The default value is 30.8.

`innerDiameterOfInnerRaceway` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The inner diameter of inner raceway. The default value is 20.

`ballDiameter` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The ball diameter. The default value is 15.

`width` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The width. The default value is 25.

`numberOfBall` int

The number of ball. The default value is 13.

`roundingRadius` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The rounding radius. The default value is 1.5.

`rollerLen` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The roller length. The default value is 16.

`rollerPDia` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The roller pitch diameter. The default value is 73.5.

`rollerCr` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The Cr. The default value is 112000.

`rollerC0r` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The C0r. The default value is 100000.

`outerRacewayColor` Color?

The color of the outer raceway.

`innerRacewayColor` Color?

The color of the inner raceway.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' argument is empty.

### <a id="VM_API_Pre_GearTrain_BearingAPI_CreateBearingForRadialBall_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Int32_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_System_Drawing_Color__System_Nullable_System_Drawing_Color__"></a> CreateBearingForRadialBall\(GearTrainDocument, string, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, int, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, Color?, Color?\)

Create <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref> for radial ball.

```csharp
[NotNull(new string[] { "document" })]
public static Obj CreateBearingForRadialBall(this GearTrainDocument document, string bearingName = "", ExpressionValueVariable? outerDiameterOfOuterRaceway = null, ExpressionValueVariable? innerDiameterOfOuterRaceway = null, ExpressionValueVariable? outerDiameterOfInnerRaceway = null, ExpressionValueVariable? innerDiameterOfInnerRaceway = null, ExpressionValueVariable? ballDiameter = null, ExpressionValueVariable? width = null, int numberOfBall = 13, ExpressionValueVariable? curvatureCenterOuter = null, ExpressionValueVariable? curvatureCenterInner = null, ExpressionValueVariable? roundingRadius = null, ExpressionValueVariable? ballPitchDiameter = null, ExpressionValueVariable? ballCr = null, ExpressionValueVariable? ballC0r = null, ExpressionValueVariable? ballF0 = null, Color? outerRacewayColor = null, Color? innerRacewayColor = null)
```

#### Parameters

`document` [GearTrainDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/GearTrainDocument.cs)

The document to create the bearing.

`bearingName` string

The name of the bearing. If empty, default name starts with 'Rolling_' will be generated and used.

`outerDiameterOfOuterRaceway` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The outer diameter of outer raceway. The default value is 32.

`innerDiameterOfOuterRaceway` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The inner diameter of outer raceway. The default value is 28.3.

`outerDiameterOfInnerRaceway` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The outer diameter of inner raceway. The default value is 23.8.

`innerDiameterOfInnerRaceway` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The inner diameter of inner raceway. The default value is 20.

`ballDiameter` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The ball diameter. The default value is 3.5.

`width` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The width. The default value is 7.

`numberOfBall` int

The number of ball. The default value is 13.

`curvatureCenterOuter` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The curvature center of outer. The default value is 13.025.

`curvatureCenterInner` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The curvature center of inner. The default value is 13.025.

`roundingRadius` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The rounding radius. The default value is 0.3.

`ballPitchDiameter` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The ball pitch diameter. The default value is 26.0.

`ballCr` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The Cr. The default value is 4030.

`ballC0r` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The C0r. The default value is 2320.

`ballF0` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The f0. The default value is 15.

`outerRacewayColor` Color?

The color of the outer raceway.

`innerRacewayColor` Color?

The color of the inner raceway.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' argument is empty.

### <a id="VM_API_Pre_GearTrain_BearingAPI_CreateBearingForTaperedRoller_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Int32_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_System_Drawing_Color__System_Nullable_System_Drawing_Color__"></a> CreateBearingForTaperedRoller\(GearTrainDocument, string, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, int, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, Color?, Color?\)

Create <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref> for tapered roller.

```csharp
[NotNull(new string[] { "document" })]
public static Obj CreateBearingForTaperedRoller(this GearTrainDocument document, string bearingName = "", ExpressionValueVariable? outerDiameterOfOuterRaceway = null, ExpressionValueVariable? outerDiameterOfInnerRaceway = null, ExpressionValueVariable? innerDiameterOfInnerRaceway = null, ExpressionValueVariable? ballDiameter = null, ExpressionValueVariable? width = null, ExpressionValueVariable? coneW = null, ExpressionValueVariable? cupW = null, int numberOfBall = 15, ExpressionValueVariable? roundingRadius1 = null, ExpressionValueVariable? roundingRadius2 = null, ExpressionValueVariable? actionPoint = null, ExpressionValueVariable? rollerAlpha = null, ExpressionValueVariable? rollerCP = null, ExpressionValueVariable? rollerPR = null, ExpressionValueVariable? rollerLen = null, ExpressionValueVariable? rollerBeta = null, ExpressionValueVariable? rollerCr = null, ExpressionValueVariable? rollerC0r = null, ExpressionValueVariable? rollerE = null, ExpressionValueVariable? rollerY = null, Color? outerRacewayColor = null, Color? innerRacewayColor = null)
```

#### Parameters

`document` [GearTrainDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/GearTrainDocument.cs)

The document to create the bearing.

`bearingName` string

The name of the bearing. If empty, default name starts with 'Rolling_' will be generated and used.

`outerDiameterOfOuterRaceway` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The outer diameter of outer raceway. The default value is 47.

`outerDiameterOfInnerRaceway` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The outer diameter of inner raceway. The default value is 33.7.

`innerDiameterOfInnerRaceway` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The inner diameter of inner raceway. The default value is 20.

`ballDiameter` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The ball diameter. The default value is 6.65.

`width` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The width. The default value is 15.25.

`coneW` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The width of cone. The default value is 14.

`cupW` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The width of cup. The default value is 12.

`numberOfBall` int

The number of ball. The default value is 15.

`roundingRadius1` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The first rounding radius. The default value is 1.

`roundingRadius2` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The second rounding radius. The default value is 1.

`actionPoint` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The action point. The default value is 11.

`rollerAlpha` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The roller contact angle. The default value is 15.49851.

`rollerCP` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The roller center point. The default value is 7.09849.

`rollerPR` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The roller pitch radius. The default value is 33.7986.

`rollerLen` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The roller length. The default value is 10.

`rollerBeta` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The tapered angle. The default value is 4.99702.

`rollerCr` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The Cr. The default value is 0.27500.

`rollerC0r` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The C0r. The default value is 28000.

`rollerE` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The e. The default value is 35.

`rollerY` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The Y. The default value is 17.

`outerRacewayColor` Color?

The color of the outer raceway.

`innerRacewayColor` Color?

The color of the inner raceway.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' argument is empty.

### <a id="VM_API_Pre_GearTrain_BearingAPI_CreateSlidingBearing_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_VM_Managed_DAFUL_GearTrain_enSlidingBearingType_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_System_Drawing_Color__"></a> CreateSlidingBearing\(GearTrainDocument, string, enSlidingBearingType, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, Color?\)

Create <xref href="VM.Managed.DAFUL.GearTrain.SlidingBearing" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
public static Obj CreateSlidingBearing(this GearTrainDocument document, string bearingName = "", enSlidingBearingType type = enSlidingBearingType.CIRCULAR, ExpressionValueVariable? arcAngle = null, ExpressionValueVariable? length = null, ExpressionValueVariable? thickness = null, ExpressionValueVariable? innerRadius = null, Color? color = null)
```

#### Parameters

`document` [GearTrainDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/GearTrainDocument.cs)

The document to create the sliding bearing.

`bearingName` string

The name of the sliding bearing. If empty, default name starts with 'Sliding_' will be generated and used.

`type` enSlidingBearingType

The sliding bearing type. The default value is CIRCULAR.

`arcAngle` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The arc angle. The default value is 80.

`length` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The outer diameter of inner raceway. The default value is 10.

`thickness` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The inner diameter of inner raceway. The default value is 5.

`innerRadius` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The ball diameter. The default value is 30.

`color` Color?

The color.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' argument is empty.

### <a id="VM_API_Pre_GearTrain_BearingAPI_CreateSlidingBearing_VM_Managed_DAFUL_GearTrain_GearTrainDocument_VM_API_Pre_Obj_System_String_System_Nullable_System_Drawing_Color__"></a> CreateSlidingBearing\(GearTrainDocument, Obj, string, Color?\)

Create <xref href="VM.Managed.DAFUL.GearTrain.SlidingBearing" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "slidingBearingCopy" })]
public static Obj CreateSlidingBearing(this GearTrainDocument document, Obj slidingBearingCopy, string bearingName = "", Color? color = null)
```

#### Parameters

`document` [GearTrainDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/GearTrainDocument.cs)

The document to create the sliding bearing.

`slidingBearingCopy` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The sliding bearing to be copied. The type is <xref href="VM.Managed.DAFUL.GearTrain.SlidingBearing" data-throw-if-not-resolved="false"></xref>

`bearingName` string

The name of the sliding bearing. If empty, default name starts with 'Sliding_' will be generated and used.

`color` Color?

The color.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.GearTrain.SlidingBearing" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'slidingBearingCopy' arguments are empty.

 ArgumentNullException

Will be thrown if type of 'slidingBearingCopy' is not <xref href="VM.Managed.DAFUL.GearTrain.SlidingBearing" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_BearingAPI_CreateStiffnessBearing_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Collections_Generic_IEnumerable_System_Double__System_Int32_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_System_Drawing_Color__System_Nullable_System_Drawing_Color__"></a> CreateStiffnessBearing\(GearTrainDocument, string, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, IEnumerable<double\>, int, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, Color?, Color?\)

Create StiffnessBearing <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
public static Obj CreateStiffnessBearing(this GearTrainDocument document, string bearingName = "", ExpressionValueVariable? dampingRatio = null, ExpressionValueVariable? outerDiameterOfOuterRaceway = null, ExpressionValueVariable? innerDiameterOfOuterRaceway = null, ExpressionValueVariable? outerDiameterOfInnerRaceway = null, ExpressionValueVariable? innerDiameterOfInnerRaceway = null, ExpressionValueVariable? ballDiameter = null, ExpressionValueVariable? width = null, IEnumerable<double> stiffness = null, int numberOfBall = 14, ExpressionValueVariable? unloadedContactAngle = null, ExpressionValueVariable? curvatureCenterOuter = null, ExpressionValueVariable? curvatureCenterInner = null, Color? outerRacewayColor = null, Color? innerRacewayColor = null)
```

#### Parameters

`document` [GearTrainDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/GearTrainDocument.cs)

The document to create the stiffness bearing.

`bearingName` string

The name of the stiffness bearing. If empty, default name starts with 'Stiffness_' will be generated and used.

`dampingRatio` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The damping ratio. The default value is 0.00001.

`outerDiameterOfOuterRaceway` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The outer diameter of outer raceway. The default value is 40.

`innerDiameterOfOuterRaceway` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The inner diameter of outer raceway. The default value is 35.

`outerDiameterOfInnerRaceway` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The outer diameter of inner raceway. The default value is 29.

`innerDiameterOfInnerRaceway` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The inner diameter of inner raceway. The default value is 25.

`ballDiameter` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The ball diameter. The default value is 4.

`width` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The width. The default value is 12.

`stiffness` IEnumerable<double\>

The stiffness. If it is not given, default values will be used.

`numberOfBall` int

The number of ball. The default value is 14.

`unloadedContactAngle` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The unloaded contact angle. The default value is 0.

`curvatureCenterOuter` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The curvature center of outer. The default value is 16.

`curvatureCenterInner` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The curvature center of inner. The default value is 16.

`outerRacewayColor` Color?

The color of the outer raceway.

`innerRacewayColor` Color?

The color of the inner raceway.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' argument is empty.

 ArgumentException

Will be thrown if 'stiffness' argument is not null and the length of 'stiffness' is not 25.

### <a id="VM_API_Pre_GearTrain_BearingAPI_CreateStiffnessBearing_VM_Managed_DAFUL_GearTrain_GearTrainDocument_VM_API_Pre_Obj_System_String_System_Nullable_System_Drawing_Color__System_Nullable_System_Drawing_Color__"></a> CreateStiffnessBearing\(GearTrainDocument, Obj, string, Color?, Color?\)

Create StiffnessBearing <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "bearingStiffnessCopy" })]
public static Obj CreateStiffnessBearing(this GearTrainDocument document, Obj bearingStiffnessCopy, string bearingName = "", Color? outerRacewayColor = null, Color? innerRacewayColor = null)
```

#### Parameters

`document` [GearTrainDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/GearTrainDocument.cs)

The document to create the stiffness bearing.

`bearingStiffnessCopy` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The stiffness bearing to be copied. The type is <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref>

`bearingName` string

The name of the stiffness bearing. If empty, default name starts with 'Stiffness_' will be generated and used.

`outerRacewayColor` Color?

The color of the outer raceway.

`innerRacewayColor` Color?

The color of the inner raceway.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'bearingStiffnessCopy' arguments are empty.

 ArgumentNullException

Will be thrown if type of 'bearingStiffnessCopy' is not <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_BearingAPI_UpdateBearing_VM_Managed_DAFUL_GearTrain_HiddenBearingDocument_"></a> UpdateBearing\(HiddenBearingDocument\)

Update bearing in bearing designer.

```csharp
[NotNull(new string[] { "document" })]
public static void UpdateBearing(this HiddenBearingDocument document)
```

#### Parameters

`document` [HiddenBearingDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenBearingDocument.cs)

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenBearingDocument" data-throw-if-not-resolved="false"></xref> for bearing update. If null, the active document will be used.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' argument is empty.

### <a id="VM_API_Pre_GearTrain_BearingAPI_UpdateBearingInEF_VM_Managed_DAFUL_GearTrain_HiddenDocumentMeshBase_System_String_System_String_VM_Vector_"></a> UpdateBearingInEF\(HiddenDocumentMeshBase, string, string, Vector\)

Update bearing in EF shaftset/housing designer.

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "racewayName", "rbeName" })]
[NotZeroMagnitude(new string[] { "zAxis" })]
public static void UpdateBearingInEF(this HiddenDocumentMeshBase document, string racewayName, string rbeName, Vector zAxis)
```

#### Parameters

`document` [HiddenDocumentMeshBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenDocumentFEBase.cs)

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenDocumentMeshBase" data-throw-if-not-resolved="false"></xref> for bearing update. If null, the active document will be used.

`racewayName` string

The raceway name to be attached on rbe.

`rbeName` string

The rbe name.

`zAxis` Vector

The z axis.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'racewayName' or 'rbeName' arguments are empty.

 ArgumentException

Will be thrown if the magnitude of 'zAxis' is 0.

### <a id="VM_API_Pre_GearTrain_BearingAPI_UpdateBearingInEF_VM_Managed_DAFUL_GearTrain_HiddenDocumentMeshBase_VM_API_Pre_Obj_VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_RacewayType_VM_API_Pre_Obj_VM_Vector_"></a> UpdateBearingInEF\(HiddenDocumentMeshBase, Obj, RacewayType, Obj, Vector\)

Update bearing in EF shaftset/housing designer.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "bearing", "rbe" })]
[NotZeroMagnitude(new string[] { "zAxis" })]
public static void UpdateBearingInEF(this HiddenDocumentMeshBase document, Obj bearing, RacewayGeometryInfo.RacewayType racewayType, Obj rbe, Vector zAxis)
```

#### Parameters

`document` [HiddenDocumentMeshBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenDocumentFEBase.cs)

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenDocumentMeshBase" data-throw-if-not-resolved="false"></xref> for bearing update. If null, the active document will be used.

`bearing` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The bearing.

`racewayType` [RacewayGeometryInfo](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/BearingRacewayGeometryInfo.cs).[RacewayType](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/BearingRacewayGeometryInfo.cs)

The bearing raceway type.

`rbe` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The rbe.

`zAxis` Vector

The z axis.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'racewayName' or 'rbe' arguments are empty.

 ArgumentException

Will be thrown if the magnitude of 'zAxis' is 0.

### <a id="VM_API_Pre_GearTrain_BearingAPI_UpdateBearingInFE_VM_Managed_DAFUL_GearTrain_HiddenDocumentMeshBase_System_String_System_String_VM_Vector_"></a> UpdateBearingInFE\(HiddenDocumentMeshBase, string, string, Vector\)

Update bearing in FE shaftset/housing designer.

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "racewayName", "rbeName" })]
[NotZeroMagnitude(new string[] { "zAxis" })]
public static void UpdateBearingInFE(this HiddenDocumentMeshBase document, string racewayName, string rbeName, Vector zAxis)
```

#### Parameters

`document` [HiddenDocumentMeshBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenDocumentFEBase.cs)

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenDocumentMeshBase" data-throw-if-not-resolved="false"></xref> for bearing update. If null, the active document will be used.

`racewayName` string

The raceway name to be attached on rbe.

`rbeName` string

The rbe name.

`zAxis` Vector

The z axis.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'racewayName' or 'rbeName' arguments are empty.

 ArgumentException

Will be thrown if the magnitude of 'zAxis' is 0.

### <a id="VM_API_Pre_GearTrain_BearingAPI_UpdateBearingInFE_VM_Managed_DAFUL_GearTrain_HiddenDocumentMeshBase_VM_API_Pre_Obj_VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_RacewayType_VM_API_Pre_Obj_VM_Vector_"></a> UpdateBearingInFE\(HiddenDocumentMeshBase, Obj, RacewayType, Obj, Vector\)

Update bearing in FE shaftset/housing designer.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "bearing", "rbe" })]
[NotZeroMagnitude(new string[] { "zAxis" })]
public static void UpdateBearingInFE(this HiddenDocumentMeshBase document, Obj bearing, RacewayGeometryInfo.RacewayType racewayType, Obj rbe, Vector zAxis)
```

#### Parameters

`document` [HiddenDocumentMeshBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenDocumentFEBase.cs)

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenDocumentMeshBase" data-throw-if-not-resolved="false"></xref> for bearing update. If null, the active document will be used.

`bearing` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The bearing.

`racewayType` [RacewayGeometryInfo](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/BearingRacewayGeometryInfo.cs).[RacewayType](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/BearingRacewayGeometryInfo.cs)

The bearing raceway type.

`rbe` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The rbe.

`zAxis` Vector

The z axis.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'racewayName' or 'rbe' arguments are empty.

 ArgumentException

Will be thrown if the magnitude of 'zAxis' is 0.

### <a id="VM_API_Pre_GearTrain_BearingAPI_UpdateBearingInShaftSet_VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_System_String_VM_Models_Pre_ExpressionValueVariable_VM_API_Pre_GearTrain_AttachLocationType_VM_API_Pre_GearTrain_DirectionType_System_Nullable_VM_API_Pre_GearTrain_ClearanceParameters__"></a> UpdateBearingInShaftSet\(HiddenShaftSetDocument, string, ExpressionValueVariable, AttachLocationType, DirectionType, ClearanceParameters?\)

Update bearing in simple shaftset designer.

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "racewayName" })]
public static void UpdateBearingInShaftSet(this HiddenShaftSetDocument document, string racewayName, ExpressionValueVariable referenceOffset, AttachLocationType attachLocationType, DirectionType directionType, ClearanceParameters? clearanceParameters = null)
```

#### Parameters

`document` [HiddenShaftSetDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenShaftSetDocument.cs)

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenShaftSetDocument" data-throw-if-not-resolved="false"></xref> for bearing update. If null, the active document will be used.

`racewayName` string

The raceway name to be attached on rbe.

`referenceOffset` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

The reference offset.

`attachLocationType` [AttachLocationType](VM.API.Pre.GearTrain.AttachLocationType.md)

The attach location type.

`directionType` [DirectionType](VM.API.Pre.GearTrain.DirectionType.md)

The direction type.

`clearanceParameters` [ClearanceParameters](VM.API.Pre.GearTrain.ClearanceParameters.md)?

The clearance parameter. If it is not given, default values will be used.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'racewayName' or 'clearanceInfo' arguments are empty.

 ArgumentException

Will be thrown if the magnitude of 'zAxis' is 0.

### <a id="VM_API_Pre_GearTrain_BearingAPI_UpdateBearingInShaftSet_VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_System_Nullable_VM_API_Pre_Obj__VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_RacewayType_VM_Models_Pre_ExpressionValueVariable_VM_API_Pre_GearTrain_AttachLocationType_VM_API_Pre_GearTrain_DirectionType_System_Nullable_VM_API_Pre_GearTrain_ClearanceParameters__"></a> UpdateBearingInShaftSet\(HiddenShaftSetDocument, Obj?, RacewayType, ExpressionValueVariable, AttachLocationType, DirectionType, ClearanceParameters?\)

Update bearing in simple shaftset designer.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "bearing" })]
public static void UpdateBearingInShaftSet(this HiddenShaftSetDocument document, Obj? bearing, RacewayGeometryInfo.RacewayType racewayType, ExpressionValueVariable referenceOffset, AttachLocationType attachLocationType, DirectionType directionType, ClearanceParameters? clearanceParameters = null)
```

#### Parameters

`document` [HiddenShaftSetDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenShaftSetDocument.cs)

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenShaftSetDocument" data-throw-if-not-resolved="false"></xref> for bearing update. If null, the active document will be used.

`bearing` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)?

The bearing.

`racewayType` [RacewayGeometryInfo](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/BearingRacewayGeometryInfo.cs).[RacewayType](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/BearingRacewayGeometryInfo.cs)

The bearing raceway type.

`referenceOffset` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

The reference offset.

`attachLocationType` [AttachLocationType](VM.API.Pre.GearTrain.AttachLocationType.md)

The attach location type.

`directionType` [DirectionType](VM.API.Pre.GearTrain.DirectionType.md)

The direction type.

`clearanceParameters` [ClearanceParameters](VM.API.Pre.GearTrain.ClearanceParameters.md)?

The clearance parameter. If it is not given, default values will be used.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'racewayName' or 'clearanceInfo' arguments are empty.

 ArgumentException

Will be thrown if the magnitude of 'zAxis' is 0.

### <a id="VM_API_Pre_GearTrain_BearingAPI_UpdateSlidingBearing_VM_Managed_DAFUL_GearTrain_HiddenSlidingBearingDocument_"></a> UpdateSlidingBearing\(HiddenSlidingBearingDocument\)

Update sliding bearing in sliding bearing designer.

```csharp
[NotNull(new string[] { "document" })]
public static void UpdateSlidingBearing(this HiddenSlidingBearingDocument document)
```

#### Parameters

`document` [HiddenSlidingBearingDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenBearingDocument.cs)

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenSlidingBearingDocument" data-throw-if-not-resolved="false"></xref> for sliding bearing update. If null, the active document will be used.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' argument is empty.

### <a id="VM_API_Pre_GearTrain_BearingAPI_UpdateSlidingBearingInEF_VM_Managed_DAFUL_GearTrain_HiddenDocumentMeshBase_System_String_System_String_"></a> UpdateSlidingBearingInEF\(HiddenDocumentMeshBase, string, string\)

Update sliding bearing in EF shaftset/housing designer.

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "slidingName", "rbeName" })]
public static void UpdateSlidingBearingInEF(this HiddenDocumentMeshBase document, string slidingName, string rbeName)
```

#### Parameters

`document` [HiddenDocumentMeshBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenDocumentFEBase.cs)

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenDocumentMeshBase" data-throw-if-not-resolved="false"></xref> for sliding bearing update. If null, the active document will be used.

`slidingName` string

The sliding name to be attached on rbe.

`rbeName` string

The rbe name.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'slidingName' or 'rbeName' arguments are empty.

### <a id="VM_API_Pre_GearTrain_BearingAPI_UpdateSlidingBearingInEF_VM_Managed_DAFUL_GearTrain_HiddenDocumentMeshBase_VM_API_Pre_Obj_System_String_"></a> UpdateSlidingBearingInEF\(HiddenDocumentMeshBase, Obj, string\)

Update sliding bearing in EF shaftset/housing designer.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "slidingBearing" })]
[NotNullOrEmpty(new string[] { "rbeName" })]
public static void UpdateSlidingBearingInEF(this HiddenDocumentMeshBase document, Obj slidingBearing, string rbeName)
```

#### Parameters

`document` [HiddenDocumentMeshBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenDocumentFEBase.cs)

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenDocumentMeshBase" data-throw-if-not-resolved="false"></xref> for sliding bearing update. If null, the active document will be used.

`slidingBearing` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The sliding bearing to be attached on rbe.

`rbeName` string

The rbe name.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'slidingName' or 'rbeName' arguments are empty.

### <a id="VM_API_Pre_GearTrain_BearingAPI_UpdateSlidingBearingInFE_VM_Managed_DAFUL_GearTrain_HiddenDocumentMeshBase_System_String_System_String_"></a> UpdateSlidingBearingInFE\(HiddenDocumentMeshBase, string, string\)

Update sliding bearing in FE shaftset/housing designer.

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "slidingName", "rbeName" })]
public static void UpdateSlidingBearingInFE(this HiddenDocumentMeshBase document, string slidingName, string rbeName)
```

#### Parameters

`document` [HiddenDocumentMeshBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenDocumentFEBase.cs)

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenDocumentMeshBase" data-throw-if-not-resolved="false"></xref> for sliding bearing update. If null, the active document will be used.

`slidingName` string

The sliding name to be attached on rbe.

`rbeName` string

The rbe name.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'slidingName' or 'rbeName' arguments are empty.

### <a id="VM_API_Pre_GearTrain_BearingAPI_UpdateSlidingBearingInFE_VM_Managed_DAFUL_GearTrain_HiddenDocumentMeshBase_VM_API_Pre_Obj_System_String_"></a> UpdateSlidingBearingInFE\(HiddenDocumentMeshBase, Obj, string\)

Update sliding bearing in FE shaftset/housing designer.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "slidingBearing" })]
public static void UpdateSlidingBearingInFE(this HiddenDocumentMeshBase document, Obj slidingBearing, string rbeName)
```

#### Parameters

`document` [HiddenDocumentMeshBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenDocumentFEBase.cs)

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenDocumentMeshBase" data-throw-if-not-resolved="false"></xref> for sliding bearing update. If null, the active document will be used.

`slidingBearing` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The sliding bearing to be attached on rbe.

`rbeName` string

The rbe name.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'slidingName' or 'rbeName' arguments are empty.

### <a id="VM_API_Pre_GearTrain_BearingAPI_UpdateSlidingBearingInShaftSet_VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_System_String_VM_Models_Pre_ExpressionValueVariable_VM_API_Pre_GearTrain_AttachLocationType_VM_Models_Pre_ExpressionValueVariable_"></a> UpdateSlidingBearingInShaftSet\(HiddenShaftSetDocument, string, ExpressionValueVariable, AttachLocationType, ExpressionValueVariable\)

Update sliding bearing in simple shaftset designer.

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "slidingName" })]
public static void UpdateSlidingBearingInShaftSet(this HiddenShaftSetDocument document, string slidingName, ExpressionValueVariable referenceOffset, AttachLocationType attachLocationType, ExpressionValueVariable startAngle)
```

#### Parameters

`document` [HiddenShaftSetDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenShaftSetDocument.cs)

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenShaftSetDocument" data-throw-if-not-resolved="false"></xref> for sliding bearing update. If null, the active document will be used.

`slidingName` string

The sliding name to be attached on rbe.

`referenceOffset` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

The reference offset.

`attachLocationType` [AttachLocationType](VM.API.Pre.GearTrain.AttachLocationType.md)

The attach location type.

`startAngle` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

The start angle.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'slidingName' or 'clearanceInfo' arguments are empty.

 ArgumentException

Will be thrown if the magnitude of 'zAxis' is 0.

### <a id="VM_API_Pre_GearTrain_BearingAPI_UpdateSlidingBearingInShaftSet_VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_VM_API_Pre_Obj_VM_Models_Pre_ExpressionValueVariable_VM_API_Pre_GearTrain_AttachLocationType_VM_Models_Pre_ExpressionValueVariable_"></a> UpdateSlidingBearingInShaftSet\(HiddenShaftSetDocument, Obj, ExpressionValueVariable, AttachLocationType, ExpressionValueVariable\)

Update sliding bearing in simple shaftset designer.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "slidingBearing" })]
public static void UpdateSlidingBearingInShaftSet(this HiddenShaftSetDocument document, Obj slidingBearing, ExpressionValueVariable referenceOffset, AttachLocationType attachLocationType, ExpressionValueVariable startAngle)
```

#### Parameters

`document` [HiddenShaftSetDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenShaftSetDocument.cs)

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenShaftSetDocument" data-throw-if-not-resolved="false"></xref> for sliding bearing update. If null, the active document will be used.

`slidingBearing` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The sliding bearing to be attached on rbe.

`referenceOffset` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

The reference offset.

`attachLocationType` [AttachLocationType](VM.API.Pre.GearTrain.AttachLocationType.md)

The attach location type.

`startAngle` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

The start angle.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'slidingName' or 'clearanceInfo' arguments are empty.

 ArgumentException

Will be thrown if the magnitude of 'zAxis' is 0.

