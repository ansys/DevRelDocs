#  Class BearingAPI

Namespace: [VM.API.Pre.GearTrain](VM.API.Pre.GearTrain.md)  
Assembly: VM.API.Pre.GearTrain.dll  

This class implements APIs for <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref> class.

```csharp
public static class BearingAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
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

`document` HiddenBearingDocument

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenBearingDocument" data-throw-if-not-resolved="false"></xref> for bearing apply. If null, the active document will be used.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'bearing' arguments are empty.

### <a id="VM_API_Pre_GearTrain_BearingAPI_ApplySlidingBearing_VM_Managed_DAFUL_GearTrain_HiddenSlidingBearingDocument_"></a> ApplySlidingBearing\(HiddenSlidingBearingDocument\)

Apply sliding bearing in sliding bearing designer.

```csharp
[NotNull(new string[] { "document" })]
public static void ApplySlidingBearing(this HiddenSlidingBearingDocument document)
```

#### Parameters

`document` HiddenSlidingBearingDocument

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenSlidingBearingDocument" data-throw-if-not-resolved="false"></xref> for sliding bearing apply. If null, the active document will be used.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'slidingBearing' arguments are empty.

### <a id="VM_API_Pre_GearTrain_BearingAPI_CreateBearingForAngularContactBall_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Int32_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_System_Drawing_Color__System_Nullable_System_Drawing_Color__"></a> CreateBearingForAngularContactBall\(GearTrainDocument, string, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, int, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, Color?, Color?\)

Create <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref> for angular contact ball.

```csharp
[NotNull(new string[] { "document" })]
public static Obj CreateBearingForAngularContactBall(this GearTrainDocument document, string bearingName = "", ExpressionValueVariable? outerDiameterOfOuterRaceway = null, ExpressionValueVariable? innerDiameterOfOuterRaceway = null, ExpressionValueVariable? outerDiameterOfInnerRaceway = null, ExpressionValueVariable? innerDiameterOfInnerRaceway = null, ExpressionValueVariable? ballDiameter = null, ExpressionValueVariable? width = null, int numberOfBall = 11, ExpressionValueVariable? curvatureCenterOuter = null, ExpressionValueVariable? curvatureCenterInner = null, ExpressionValueVariable? roundingRadius = null, ExpressionValueVariable? outerRacewayShoulderBore2 = null, ExpressionValueVariable? innerRacewayShoulderDiameter2 = null, ExpressionValueVariable? actionPoint = null, ExpressionValueVariable? ballPitchDiameter = null, ExpressionValueVariable? ballCr = null, ExpressionValueVariable? ballC0r = null, ExpressionValueVariable? ballF0 = null, Color? outerRacewayColor = null, Color? innerRacewayColor = null)
```

#### Parameters

`document` GearTrainDocument

The document to create the bearing.

`bearingName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the bearing. If empty, default name starts with 'Rolling_' will be generated and used.

`outerDiameterOfOuterRaceway` ExpressionValueVariable?

The outer diameter of outer raceway. The default value is 47.

`innerDiameterOfOuterRaceway` ExpressionValueVariable?

The inner diameter of outer raceway. The default value is 36.5.

`outerDiameterOfInnerRaceway` ExpressionValueVariable?

The outer diameter of inner raceway. The default value is 30.8.

`innerDiameterOfInnerRaceway` ExpressionValueVariable?

The inner diameter of inner raceway. The default value is 20.

`ballDiameter` ExpressionValueVariable?

The ball diameter. The default value is 7.938.

`width` ExpressionValueVariable?

The width. The default value is 14.

`numberOfBall` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of ball. The default value is 11.

`curvatureCenterOuter` ExpressionValueVariable?

The curvature center of outer. The default value is 16.825.

`curvatureCenterInner` ExpressionValueVariable?

The curvature center of inner. The default value is 16.825.

`roundingRadius` ExpressionValueVariable?

The rounding radius. The default value is 1.

`outerRacewayShoulderBore2` ExpressionValueVariable?

The second shoulder bore of outer raceway. The default value is 41.7.

`innerRacewayShoulderDiameter2` ExpressionValueVariable?

The second shoulder diameter of outer raceway. The default value is 25.9.

`actionPoint` ExpressionValueVariable?

The action point. The default value is 21.

`ballPitchDiameter` ExpressionValueVariable?

The ball pitch diameter. The default value is 33.65.

`ballCr` ExpressionValueVariable?

The Cr. The default value is 14300.

`ballC0r` ExpressionValueVariable?

The C0r. The default value is 8150.

`ballF0` ExpressionValueVariable?

The f0. The default value is 15.

`outerRacewayColor` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the outer raceway.

`innerRacewayColor` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the inner raceway.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

### <a id="VM_API_Pre_GearTrain_BearingAPI_CreateBearingForCylindricalRoller_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Int32_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_System_Drawing_Color__System_Nullable_System_Drawing_Color__"></a> CreateBearingForCylindricalRoller\(GearTrainDocument, string, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, int, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, Color?, Color?\)

Create <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref> for cylindrical roller.

```csharp
[NotNull(new string[] { "document" })]
public static Obj CreateBearingForCylindricalRoller(this GearTrainDocument document, string bearingName = "", ExpressionValueVariable? outerDiameterOfOuterRaceway = null, ExpressionValueVariable? innerDiameterOfOuterRaceway = null, ExpressionValueVariable? outerDiameterOfInnerRaceway = null, ExpressionValueVariable? innerDiameterOfInnerRaceway = null, ExpressionValueVariable? ballDiameter = null, ExpressionValueVariable? width = null, int numberOfBall = 13, ExpressionValueVariable? roundingRadius = null, ExpressionValueVariable? rollerLen = null, ExpressionValueVariable? rollerPDia = null, ExpressionValueVariable? rollerCr = null, ExpressionValueVariable? rollerC0r = null, Color? outerRacewayColor = null, Color? innerRacewayColor = null)
```

#### Parameters

`document` GearTrainDocument

The document to create the bearing.

`bearingName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the bearing. If empty, default name starts with 'Rolling_' will be generated and used.

`outerDiameterOfOuterRaceway` ExpressionValueVariable?

The outer diameter of outer raceway. The default value is 47.

`innerDiameterOfOuterRaceway` ExpressionValueVariable?

The inner diameter of outer raceway. The default value is 36.5.

`outerDiameterOfInnerRaceway` ExpressionValueVariable?

The outer diameter of inner raceway. The default value is 30.8.

`innerDiameterOfInnerRaceway` ExpressionValueVariable?

The inner diameter of inner raceway. The default value is 20.

`ballDiameter` ExpressionValueVariable?

The ball diameter. The default value is 15.

`width` ExpressionValueVariable?

The width. The default value is 25.

`numberOfBall` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of ball. The default value is 13.

`roundingRadius` ExpressionValueVariable?

The rounding radius. The default value is 1.5.

`rollerLen` ExpressionValueVariable?

The roller length. The default value is 16.

`rollerPDia` ExpressionValueVariable?

The roller pitch diameter. The default value is 73.5.

`rollerCr` ExpressionValueVariable?

The Cr. The default value is 112000.

`rollerC0r` ExpressionValueVariable?

The C0r. The default value is 100000.

`outerRacewayColor` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the outer raceway.

`innerRacewayColor` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the inner raceway.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

### <a id="VM_API_Pre_GearTrain_BearingAPI_CreateBearingForRadialBall_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Int32_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_System_Drawing_Color__System_Nullable_System_Drawing_Color__"></a> CreateBearingForRadialBall\(GearTrainDocument, string, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, int, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, Color?, Color?\)

Create <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref> for radial ball.

```csharp
[NotNull(new string[] { "document" })]
public static Obj CreateBearingForRadialBall(this GearTrainDocument document, string bearingName = "", ExpressionValueVariable? outerDiameterOfOuterRaceway = null, ExpressionValueVariable? innerDiameterOfOuterRaceway = null, ExpressionValueVariable? outerDiameterOfInnerRaceway = null, ExpressionValueVariable? innerDiameterOfInnerRaceway = null, ExpressionValueVariable? ballDiameter = null, ExpressionValueVariable? width = null, int numberOfBall = 13, ExpressionValueVariable? curvatureCenterOuter = null, ExpressionValueVariable? curvatureCenterInner = null, ExpressionValueVariable? roundingRadius = null, ExpressionValueVariable? ballPitchDiameter = null, ExpressionValueVariable? ballCr = null, ExpressionValueVariable? ballC0r = null, ExpressionValueVariable? ballF0 = null, Color? outerRacewayColor = null, Color? innerRacewayColor = null)
```

#### Parameters

`document` GearTrainDocument

The document to create the bearing.

`bearingName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the bearing. If empty, default name starts with 'Rolling_' will be generated and used.

`outerDiameterOfOuterRaceway` ExpressionValueVariable?

The outer diameter of outer raceway. The default value is 32.

`innerDiameterOfOuterRaceway` ExpressionValueVariable?

The inner diameter of outer raceway. The default value is 28.3.

`outerDiameterOfInnerRaceway` ExpressionValueVariable?

The outer diameter of inner raceway. The default value is 23.8.

`innerDiameterOfInnerRaceway` ExpressionValueVariable?

The inner diameter of inner raceway. The default value is 20.

`ballDiameter` ExpressionValueVariable?

The ball diameter. The default value is 3.5.

`width` ExpressionValueVariable?

The width. The default value is 7.

`numberOfBall` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of ball. The default value is 13.

`curvatureCenterOuter` ExpressionValueVariable?

The curvature center of outer. The default value is 13.025.

`curvatureCenterInner` ExpressionValueVariable?

The curvature center of inner. The default value is 13.025.

`roundingRadius` ExpressionValueVariable?

The rounding radius. The default value is 0.3.

`ballPitchDiameter` ExpressionValueVariable?

The ball pitch diameter. The default value is 26.5.

`ballCr` ExpressionValueVariable?

The Cr. The default value is 4030.

`ballC0r` ExpressionValueVariable?

The C0r. The default value is 2320.

`ballF0` ExpressionValueVariable?

The f0. The default value is 15.

`outerRacewayColor` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the outer raceway.

`innerRacewayColor` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the inner raceway.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

### <a id="VM_API_Pre_GearTrain_BearingAPI_CreateBearingForTaperedRoller_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Int32_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_System_Drawing_Color__System_Nullable_System_Drawing_Color__"></a> CreateBearingForTaperedRoller\(GearTrainDocument, string, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, int, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, Color?, Color?\)

Create <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref> for tapered roller.

```csharp
[NotNull(new string[] { "document" })]
public static Obj CreateBearingForTaperedRoller(this GearTrainDocument document, string bearingName = "", ExpressionValueVariable? outerDiameterOfOuterRaceway = null, ExpressionValueVariable? outerDiameterOfInnerRaceway = null, ExpressionValueVariable? innerDiameterOfInnerRaceway = null, ExpressionValueVariable? ballDiameter = null, ExpressionValueVariable? width = null, ExpressionValueVariable? coneW = null, ExpressionValueVariable? cupW = null, int numberOfBall = 15, ExpressionValueVariable? roundingRadius1 = null, ExpressionValueVariable? roundingRadius2 = null, ExpressionValueVariable? actionPoint = null, ExpressionValueVariable? rollerAlpha = null, ExpressionValueVariable? rollerCP = null, ExpressionValueVariable? rollerPR = null, ExpressionValueVariable? rollerLen = null, ExpressionValueVariable? rollerBeta = null, ExpressionValueVariable? rollerCr = null, ExpressionValueVariable? rollerC0r = null, ExpressionValueVariable? rollerE = null, ExpressionValueVariable? rollerY = null, Color? outerRacewayColor = null, Color? innerRacewayColor = null)
```

#### Parameters

`document` GearTrainDocument

The document to create the bearing.

`bearingName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the bearing. If empty, default name starts with 'Rolling_' will be generated and used.

`outerDiameterOfOuterRaceway` ExpressionValueVariable?

The outer diameter of outer raceway. The default value is 47.

`outerDiameterOfInnerRaceway` ExpressionValueVariable?

The outer diameter of inner raceway. The default value is 33.7.

`innerDiameterOfInnerRaceway` ExpressionValueVariable?

The inner diameter of inner raceway. The default value is 20.

`ballDiameter` ExpressionValueVariable?

The ball diameter. The default value is 6.65.

`width` ExpressionValueVariable?

The width. The default value is 15.25.

`coneW` ExpressionValueVariable?

The width of cone. The default value is 14.

`cupW` ExpressionValueVariable?

The width of cup. The default value is 12.

`numberOfBall` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of ball. The default value is 15.

`roundingRadius1` ExpressionValueVariable?

The first rounding radius. The default value is 1.

`roundingRadius2` ExpressionValueVariable?

The second rounding radius. The default value is 1.

`actionPoint` ExpressionValueVariable?

The action point. The default value is 11.

`rollerAlpha` ExpressionValueVariable?

The roller contact angle. The default value is 15.49851.

`rollerCP` ExpressionValueVariable?

The roller center point. The default value is 7.09849.

`rollerPR` ExpressionValueVariable?

The roller pitch radius. The default value is 33.7986.

`rollerLen` ExpressionValueVariable?

The roller length. The default value is 10.

`rollerBeta` ExpressionValueVariable?

The tapered angle. The default value is 4.99702.

`rollerCr` ExpressionValueVariable?

The Cr. The default value is 0.27500.

`rollerC0r` ExpressionValueVariable?

The C0r. The default value is 28000.

`rollerE` ExpressionValueVariable?

The e. The default value is 35.

`rollerY` ExpressionValueVariable?

The Y. The default value is 17.

`outerRacewayColor` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the outer raceway.

`innerRacewayColor` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the inner raceway.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

### <a id="VM_API_Pre_GearTrain_BearingAPI_CreateSlidingBearing_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_VM_Managed_DAFUL_GearTrain_enSlidingBearingType_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_System_Drawing_Color__"></a> CreateSlidingBearing\(GearTrainDocument, string, enSlidingBearingType, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, Color?\)

Create <xref href="VM.Managed.DAFUL.GearTrain.SlidingBearing" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
public static Obj CreateSlidingBearing(this GearTrainDocument document, string bearingName = "", enSlidingBearingType type = enSlidingBearingType.CIRCULAR, ExpressionValueVariable? arcAngle = null, ExpressionValueVariable? length = null, ExpressionValueVariable? thickness = null, ExpressionValueVariable? innerRadius = null, Color? color = null)
```

#### Parameters

`document` GearTrainDocument

The document to create the sliding bearing.

`bearingName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the sliding bearing. If empty, default name starts with 'Sliding_' will be generated and used.

`type` enSlidingBearingType

The sliding bearing type. The default value is CIRCULAR.

`arcAngle` ExpressionValueVariable?

The arc angle. The default value is 80.

`length` ExpressionValueVariable?

The outer diameter of inner raceway. The default value is 10.

`thickness` ExpressionValueVariable?

The inner diameter of inner raceway. The default value is 5.

`innerRadius` ExpressionValueVariable?

The ball diameter. The default value is 30.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

### <a id="VM_API_Pre_GearTrain_BearingAPI_CreateSlidingBearing_VM_Managed_DAFUL_GearTrain_GearTrainDocument_VM_API_Pre_Obj_System_String_System_Nullable_System_Drawing_Color__"></a> CreateSlidingBearing\(GearTrainDocument, Obj, string, Color?\)

Create <xref href="VM.Managed.DAFUL.GearTrain.SlidingBearing" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "slidingBearingCopy" })]
public static Obj CreateSlidingBearing(this GearTrainDocument document, Obj slidingBearingCopy, string bearingName = "", Color? color = null)
```

#### Parameters

`document` GearTrainDocument

The document to create the sliding bearing.

`slidingBearingCopy` Obj

The sliding bearing to be copied. The type is <xref href="VM.Managed.DAFUL.GearTrain.SlidingBearing" data-throw-if-not-resolved="false"></xref>

`bearingName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the sliding bearing. If empty, default name starts with 'Sliding_' will be generated and used.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.GearTrain.SlidingBearing" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'slidingBearingCopy' arguments are empty.

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if type of 'slidingBearingCopy' is not <xref href="VM.Managed.DAFUL.GearTrain.SlidingBearing" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_BearingAPI_CreateStiffnessBearing_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Collections_Generic_IEnumerable_System_Double__System_Int32_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_System_Drawing_Color__System_Nullable_System_Drawing_Color__"></a> CreateStiffnessBearing\(GearTrainDocument, string, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, IEnumerable<double\>, int, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, Color?, Color?\)

Create StiffnessBearing <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
public static Obj CreateStiffnessBearing(this GearTrainDocument document, string bearingName = "", ExpressionValueVariable? dampingRatio = null, ExpressionValueVariable? outerDiameterOfOuterRaceway = null, ExpressionValueVariable? innerDiameterOfOuterRaceway = null, ExpressionValueVariable? outerDiameterOfInnerRaceway = null, ExpressionValueVariable? innerDiameterOfInnerRaceway = null, ExpressionValueVariable? ballDiameter = null, ExpressionValueVariable? width = null, IEnumerable<double> stiffness = null, int numberOfBall = 14, ExpressionValueVariable? unloadedContactAngle = null, ExpressionValueVariable? curvatureCenterOuter = null, ExpressionValueVariable? curvatureCenterInner = null, Color? outerRacewayColor = null, Color? innerRacewayColor = null)
```

#### Parameters

`document` GearTrainDocument

The document to create the stiffness bearing.

`bearingName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the stiffness bearing. If empty, default name starts with 'Stiffness_' will be generated and used.

`dampingRatio` ExpressionValueVariable?

The damping ratio. The default value is 0.00001.

`outerDiameterOfOuterRaceway` ExpressionValueVariable?

The outer diameter of outer raceway. The default value is 40.

`innerDiameterOfOuterRaceway` ExpressionValueVariable?

The inner diameter of outer raceway. The default value is 35.

`outerDiameterOfInnerRaceway` ExpressionValueVariable?

The outer diameter of inner raceway. The default value is 29.

`innerDiameterOfInnerRaceway` ExpressionValueVariable?

The inner diameter of inner raceway. The default value is 25.

`ballDiameter` ExpressionValueVariable?

The ball diameter. The default value is 4.

`width` ExpressionValueVariable?

The width. The default value is 12.

`stiffness` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

The stiffness. If it is not given, default values will be used.

`numberOfBall` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of ball. The default value is 14.

`unloadedContactAngle` ExpressionValueVariable?

The unloaded contact angle. The default value is 0.

`curvatureCenterOuter` ExpressionValueVariable?

The curvature center of outer. The default value is 16.

`curvatureCenterInner` ExpressionValueVariable?

The curvature center of inner. The default value is 16.

`outerRacewayColor` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the outer raceway.

`innerRacewayColor` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the inner raceway.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'stiffness' argument is not null and the length of 'stiffness' is not 25.

### <a id="VM_API_Pre_GearTrain_BearingAPI_CreateStiffnessBearing_VM_Managed_DAFUL_GearTrain_GearTrainDocument_VM_API_Pre_Obj_System_String_System_Nullable_System_Drawing_Color__System_Nullable_System_Drawing_Color__"></a> CreateStiffnessBearing\(GearTrainDocument, Obj, string, Color?, Color?\)

Create StiffnessBearing <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "bearingStiffnessCopy" })]
public static Obj CreateStiffnessBearing(this GearTrainDocument document, Obj bearingStiffnessCopy, string bearingName = "", Color? outerRacewayColor = null, Color? innerRacewayColor = null)
```

#### Parameters

`document` GearTrainDocument

The document to create the stiffness bearing.

`bearingStiffnessCopy` Obj

The stiffness bearing to be copied. The type is <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref>

`bearingName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the stiffness bearing. If empty, default name starts with 'Stiffness_' will be generated and used.

`outerRacewayColor` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the outer raceway.

`innerRacewayColor` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the inner raceway.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'bearingStiffnessCopy' arguments are empty.

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if type of 'bearingStiffnessCopy' is not <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_BearingAPI_UpdateBearing_VM_Managed_DAFUL_GearTrain_HiddenBearingDocument_"></a> UpdateBearing\(HiddenBearingDocument\)

Update bearing in bearing designer.

```csharp
[NotNull(new string[] { "document" })]
public static void UpdateBearing(this HiddenBearingDocument document)
```

#### Parameters

`document` HiddenBearingDocument

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenBearingDocument" data-throw-if-not-resolved="false"></xref> for bearing update. If null, the active document will be used.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

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

`document` HiddenDocumentMeshBase

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenDocumentMeshBase" data-throw-if-not-resolved="false"></xref> for bearing update. If null, the active document will be used.

`racewayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The raceway name to be attached on rbe.

`rbeName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The rbe name.

`zAxis` Vector

The z axis.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'racewayName' or 'rbeName' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

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

`document` HiddenDocumentMeshBase

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenDocumentMeshBase" data-throw-if-not-resolved="false"></xref> for bearing update. If null, the active document will be used.

`bearing` Obj

The bearing.

`racewayType` RacewayGeometryInfo.RacewayType

The bearing raceway type.

`rbe` Obj

The rbe.

`zAxis` Vector

The z axis.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'racewayName' or 'rbe' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

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

`document` HiddenDocumentMeshBase

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenDocumentMeshBase" data-throw-if-not-resolved="false"></xref> for bearing update. If null, the active document will be used.

`racewayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The raceway name to be attached on rbe.

`rbeName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The rbe name.

`zAxis` Vector

The z axis.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'racewayName' or 'rbeName' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

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

`document` HiddenDocumentMeshBase

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenDocumentMeshBase" data-throw-if-not-resolved="false"></xref> for bearing update. If null, the active document will be used.

`bearing` Obj

The bearing.

`racewayType` RacewayGeometryInfo.RacewayType

The bearing raceway type.

`rbe` Obj

The rbe.

`zAxis` Vector

The z axis.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'racewayName' or 'rbe' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the magnitude of 'zAxis' is 0.

### <a id="VM_API_Pre_GearTrain_BearingAPI_UpdateBearingInShaftSet_VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_System_String_VM_Models_Pre_ExpressionValueVariable_VM_API_Pre_GearTrain_AttachLocationType_VM_API_Pre_GearTrain_DirectionType_System_Nullable_VM_API_Pre_GearTrain_ClearanceParameters__"></a> UpdateBearingInShaftSet\(HiddenShaftSetDocument, string, ExpressionValueVariable, AttachLocationType, DirectionType, ClearanceParameters?\)

Update bearing in simple shaftset designer.

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "racewayName" })]
public static void UpdateBearingInShaftSet(this HiddenShaftSetDocument document, string racewayName, ExpressionValueVariable referenceOffset, AttachLocationType attachLocationType, DirectionType directionType, ClearanceParameters? clearanceParameters = null)
```

#### Parameters

`document` HiddenShaftSetDocument

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenShaftSetDocument" data-throw-if-not-resolved="false"></xref> for bearing update. If null, the active document will be used.

`racewayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The raceway name to be attached on rbe.

`referenceOffset` ExpressionValueVariable

The reference offset.

`attachLocationType` [AttachLocationType](VM.API.Pre.GearTrain.AttachLocationType.md)

The attach location type.

`directionType` [DirectionType](VM.API.Pre.GearTrain.DirectionType.md)

The direction type.

`clearanceParameters` [ClearanceParameters](VM.API.Pre.GearTrain.ClearanceParameters.md)?

The clearance parameter. If it is not given, default values will be used.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'racewayName' or 'clearanceInfo' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the magnitude of 'zAxis' is 0.

### <a id="VM_API_Pre_GearTrain_BearingAPI_UpdateBearingInShaftSet_VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_System_Nullable_VM_API_Pre_Obj__VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_RacewayType_VM_Models_Pre_ExpressionValueVariable_VM_API_Pre_GearTrain_AttachLocationType_VM_API_Pre_GearTrain_DirectionType_System_Nullable_VM_API_Pre_GearTrain_ClearanceParameters__"></a> UpdateBearingInShaftSet\(HiddenShaftSetDocument, Obj?, RacewayType, ExpressionValueVariable, AttachLocationType, DirectionType, ClearanceParameters?\)

Update bearing in simple shaftset designer.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "bearing" })]
public static void UpdateBearingInShaftSet(this HiddenShaftSetDocument document, Obj? bearing, RacewayGeometryInfo.RacewayType racewayType, ExpressionValueVariable referenceOffset, AttachLocationType attachLocationType, DirectionType directionType, ClearanceParameters? clearanceParameters = null)
```

#### Parameters

`document` HiddenShaftSetDocument

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenShaftSetDocument" data-throw-if-not-resolved="false"></xref> for bearing update. If null, the active document will be used.

`bearing` Obj?

The bearing.

`racewayType` RacewayGeometryInfo.RacewayType

The bearing raceway type.

`referenceOffset` ExpressionValueVariable

The reference offset.

`attachLocationType` [AttachLocationType](VM.API.Pre.GearTrain.AttachLocationType.md)

The attach location type.

`directionType` [DirectionType](VM.API.Pre.GearTrain.DirectionType.md)

The direction type.

`clearanceParameters` [ClearanceParameters](VM.API.Pre.GearTrain.ClearanceParameters.md)?

The clearance parameter. If it is not given, default values will be used.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'racewayName' or 'clearanceInfo' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the magnitude of 'zAxis' is 0.

### <a id="VM_API_Pre_GearTrain_BearingAPI_UpdateSlidingBearing_VM_Managed_DAFUL_GearTrain_HiddenSlidingBearingDocument_"></a> UpdateSlidingBearing\(HiddenSlidingBearingDocument\)

Update sliding bearing in sliding bearing designer.

```csharp
[NotNull(new string[] { "document" })]
public static void UpdateSlidingBearing(this HiddenSlidingBearingDocument document)
```

#### Parameters

`document` HiddenSlidingBearingDocument

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenSlidingBearingDocument" data-throw-if-not-resolved="false"></xref> for sliding bearing update. If null, the active document will be used.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

### <a id="VM_API_Pre_GearTrain_BearingAPI_UpdateSlidingBearingInEF_VM_Managed_DAFUL_GearTrain_HiddenDocumentMeshBase_System_String_System_String_"></a> UpdateSlidingBearingInEF\(HiddenDocumentMeshBase, string, string\)

Update sliding bearing in EF shaftset/housing designer.

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "slidingName", "rbeName" })]
public static void UpdateSlidingBearingInEF(this HiddenDocumentMeshBase document, string slidingName, string rbeName)
```

#### Parameters

`document` HiddenDocumentMeshBase

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenDocumentMeshBase" data-throw-if-not-resolved="false"></xref> for sliding bearing update. If null, the active document will be used.

`slidingName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The sliding name to be attached on rbe.

`rbeName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The rbe name.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

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

`document` HiddenDocumentMeshBase

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenDocumentMeshBase" data-throw-if-not-resolved="false"></xref> for sliding bearing update. If null, the active document will be used.

`slidingBearing` Obj

The sliding bearing to be attached on rbe.

`rbeName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The rbe name.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'slidingName' or 'rbeName' arguments are empty.

### <a id="VM_API_Pre_GearTrain_BearingAPI_UpdateSlidingBearingInFE_VM_Managed_DAFUL_GearTrain_HiddenDocumentMeshBase_System_String_System_String_"></a> UpdateSlidingBearingInFE\(HiddenDocumentMeshBase, string, string\)

Update sliding bearing in FE shaftset/housing designer.

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "slidingName", "rbeName" })]
public static void UpdateSlidingBearingInFE(this HiddenDocumentMeshBase document, string slidingName, string rbeName)
```

#### Parameters

`document` HiddenDocumentMeshBase

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenDocumentMeshBase" data-throw-if-not-resolved="false"></xref> for sliding bearing update. If null, the active document will be used.

`slidingName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The sliding name to be attached on rbe.

`rbeName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The rbe name.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'slidingName' or 'rbeName' arguments are empty.

### <a id="VM_API_Pre_GearTrain_BearingAPI_UpdateSlidingBearingInFE_VM_Managed_DAFUL_GearTrain_HiddenDocumentMeshBase_VM_API_Pre_Obj_System_String_"></a> UpdateSlidingBearingInFE\(HiddenDocumentMeshBase, Obj, string\)

Update sliding bearing in FE shaftset/housing designer.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "slidingBearing" })]
public static void UpdateSlidingBearingInFE(this HiddenDocumentMeshBase document, Obj slidingBearing, string rbeName)
```

#### Parameters

`document` HiddenDocumentMeshBase

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenDocumentMeshBase" data-throw-if-not-resolved="false"></xref> for sliding bearing update. If null, the active document will be used.

`slidingBearing` Obj

The sliding bearing to be attached on rbe.

`rbeName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The rbe name.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'slidingName' or 'rbeName' arguments are empty.

### <a id="VM_API_Pre_GearTrain_BearingAPI_UpdateSlidingBearingInShaftSet_VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_System_String_VM_Models_Pre_ExpressionValueVariable_VM_API_Pre_GearTrain_AttachLocationType_VM_Models_Pre_ExpressionValueVariable_"></a> UpdateSlidingBearingInShaftSet\(HiddenShaftSetDocument, string, ExpressionValueVariable, AttachLocationType, ExpressionValueVariable\)

Update sliding bearing in simple shaftset designer.

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "slidingName" })]
public static void UpdateSlidingBearingInShaftSet(this HiddenShaftSetDocument document, string slidingName, ExpressionValueVariable referenceOffset, AttachLocationType attachLocationType, ExpressionValueVariable startAngle)
```

#### Parameters

`document` HiddenShaftSetDocument

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenShaftSetDocument" data-throw-if-not-resolved="false"></xref> for sliding bearing update. If null, the active document will be used.

`slidingName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The sliding name to be attached on rbe.

`referenceOffset` ExpressionValueVariable

The reference offset.

`attachLocationType` [AttachLocationType](VM.API.Pre.GearTrain.AttachLocationType.md)

The attach location type.

`startAngle` ExpressionValueVariable

The start angle.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'slidingName' or 'clearanceInfo' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the magnitude of 'zAxis' is 0.

### <a id="VM_API_Pre_GearTrain_BearingAPI_UpdateSlidingBearingInShaftSet_VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_VM_API_Pre_Obj_VM_Models_Pre_ExpressionValueVariable_VM_API_Pre_GearTrain_AttachLocationType_VM_Models_Pre_ExpressionValueVariable_"></a> UpdateSlidingBearingInShaftSet\(HiddenShaftSetDocument, Obj, ExpressionValueVariable, AttachLocationType, ExpressionValueVariable\)

Update sliding bearing in simple shaftset designer.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "slidingBearing" })]
public static void UpdateSlidingBearingInShaftSet(this HiddenShaftSetDocument document, Obj slidingBearing, ExpressionValueVariable referenceOffset, AttachLocationType attachLocationType, ExpressionValueVariable startAngle)
```

#### Parameters

`document` HiddenShaftSetDocument

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenShaftSetDocument" data-throw-if-not-resolved="false"></xref> for sliding bearing update. If null, the active document will be used.

`slidingBearing` Obj

The sliding bearing to be attached on rbe.

`referenceOffset` ExpressionValueVariable

The reference offset.

`attachLocationType` [AttachLocationType](VM.API.Pre.GearTrain.AttachLocationType.md)

The attach location type.

`startAngle` ExpressionValueVariable

The start angle.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'slidingName' or 'clearanceInfo' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the magnitude of 'zAxis' is 0.

