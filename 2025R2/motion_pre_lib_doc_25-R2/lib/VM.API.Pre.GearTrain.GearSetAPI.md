#  Class GearSetAPI

Namespace: [VM.API.Pre.GearTrain](VM.API.Pre.GearTrain.md)  
Assembly: VM.API.Pre.GearTrain.dll  

This class implements APIs for <xref href="VM.Managed.DAFUL.GearTrain.GearSet" data-throw-if-not-resolved="false"></xref> class.

```csharp
public static class GearSetAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[GearSetAPI](VM.API.Pre.GearTrain.GearSetAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_GearTrain_GearSetAPI_CalculateBeamStiffness_VM_Managed_DAFUL_GearTrain_HiddenGearSetRackAndPinionDocument_"></a> CalculateBeamStiffness\(HiddenGearSetRackAndPinionDocument\)

Calculate beam stiffness.

```csharp
[NotNull(new string[] { "document" })]
public static IEnumerable<double> CalculateBeamStiffness(this HiddenGearSetRackAndPinionDocument document)
```

#### Parameters

`document` HiddenGearSetRackAndPinionDocument

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenGearSetRackAndPinionDocument" data-throw-if-not-resolved="false"></xref> for simulate. If null, the active document will be used.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

The 6 by 6 stiffness.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

 [FileNotFoundException](https://learn.microsoft.com/dotnet/api/system.io.filenotfoundexception)

Will be thrown if 'feDataFilePath' is not found.

### <a id="VM_API_Pre_GearTrain_GearSetAPI_CalculateToothStiffness_VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_System_Int32_"></a> CalculateToothStiffness\(HiddenGearSetDocumentBase, int\)

Calculate tooth stiffness in gear designer.

```csharp
public static void CalculateToothStiffness(this HiddenGearSetDocumentBase document, int gearIdx)
```

#### Parameters

`document` HiddenGearSetDocumentBase

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase" data-throw-if-not-resolved="false"></xref> for calculate. If null, the active document will be used.

`gearIdx` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The gear index.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'gearIdx' argument is less than 0.

### <a id="VM_API_Pre_GearTrain_GearSetAPI_CalculateToothStiffness_VM_Managed_DAFUL_GearTrain_GearTrainDocument_VM_API_Pre_Obj_System_Int32_"></a> CalculateToothStiffness\(GearTrainDocument, Obj, int\)

Calculate tooth stiffness in gear train subsystem.

```csharp
[NotNullObj(new string[] { "gearset" })]
public static void CalculateToothStiffness(this GearTrainDocument document, Obj gearset, int gearIdx)
```

#### Parameters

`document` GearTrainDocument

The <xref href="VM.Managed.DAFUL.GearTrain.GearTrainDocument" data-throw-if-not-resolved="false"></xref> for simulate. If null, the active document will be used.

`gearset` Obj

The gearset. The type is <xref href="VM.Managed.DAFUL.GearTrain.IGearSet" data-throw-if-not-resolved="false"></xref>.

`gearIdx` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The gear index.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'gearset' arguments are empty.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'gearIdx' argument is less than 0.

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if type of 'gearset' is not <xref href="VM.Managed.DAFUL.GearTrain.IGearSet" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_GearSetAPI_CalculateToothStiffnessForCycloid_VM_Managed_DAFUL_GearTrain_HiddenGearSetCycloidPinDocument_System_Int32_"></a> CalculateToothStiffnessForCycloid\(HiddenGearSetCycloidPinDocument, int\)

Calculate tooth stiffness for cycloid in gear designer.

```csharp
public static void CalculateToothStiffnessForCycloid(this HiddenGearSetCycloidPinDocument document, int gearIdx)
```

#### Parameters

`document` HiddenGearSetCycloidPinDocument

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase" data-throw-if-not-resolved="false"></xref> for calculate. If null, the active document will be used.

`gearIdx` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The gear index.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'gearIdx' argument is less than 0.

### <a id="VM_API_Pre_GearTrain_GearSetAPI_CalculateToothStiffnessForCycloid_VM_Managed_DAFUL_GearTrain_GearTrainDocument_VM_API_Pre_Obj_System_Int32_"></a> CalculateToothStiffnessForCycloid\(GearTrainDocument, Obj, int\)

Calculate tooth stiffness for cycloid in gear train subsystem.

```csharp
[NotNullObj(new string[] { "gearset" })]
public static void CalculateToothStiffnessForCycloid(this GearTrainDocument document, Obj gearset, int gearIdx)
```

#### Parameters

`document` GearTrainDocument

The <xref href="VM.Managed.DAFUL.GearTrain.GearTrainDocument" data-throw-if-not-resolved="false"></xref> for simulate. If null, the active document will be used.

`gearset` Obj

The gearset. The type is <xref href="VM.Managed.DAFUL.GearTrain.IGearSet" data-throw-if-not-resolved="false"></xref>.

`gearIdx` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The gear index.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'gearset' arguments are empty.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'gearIdx' argument is less than 0.

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if type of 'gearset' is not <xref href="VM.Managed.DAFUL.GearTrain.IGearSet" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_GearSetAPI_CalculateToothStiffnessForRackAndPinion_VM_Managed_DAFUL_GearTrain_HiddenGearSetRackAndPinionDocument_System_Int32_"></a> CalculateToothStiffnessForRackAndPinion\(HiddenGearSetRackAndPinionDocument, int\)

Calculate tooth stiffness for rack and pinion in gear designer.

```csharp
public static void CalculateToothStiffnessForRackAndPinion(this HiddenGearSetRackAndPinionDocument document, int gearIdx)
```

#### Parameters

`document` HiddenGearSetRackAndPinionDocument

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenGearSetRackAndPinionDocument" data-throw-if-not-resolved="false"></xref> for calculate. If null, the active document will be used.

`gearIdx` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The gear index.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'gearIdx' argument is less than 0.

### <a id="VM_API_Pre_GearTrain_GearSetAPI_CalculateToothStiffnessForRackAndPinion_VM_Managed_DAFUL_GearTrain_GearTrainDocument_VM_API_Pre_Obj_System_Int32_"></a> CalculateToothStiffnessForRackAndPinion\(GearTrainDocument, Obj, int\)

Calculate tooth stiffness for rack and pinion in gear train subsystem.

```csharp
[NotNullObj(new string[] { "gearset" })]
public static void CalculateToothStiffnessForRackAndPinion(this GearTrainDocument document, Obj gearset, int gearIdx)
```

#### Parameters

`document` GearTrainDocument

The <xref href="VM.Managed.DAFUL.GearTrain.GearTrainDocument" data-throw-if-not-resolved="false"></xref> for simulate. If null, the active document will be used.

`gearset` Obj

The gearset. The type is <xref href="VM.Managed.DAFUL.GearTrain.IGearSet" data-throw-if-not-resolved="false"></xref>.

`gearIdx` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The gear index.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'gearset' arguments are empty.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'gearIdx' argument is less than 0.

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if type of 'gearset' is not <xref href="VM.Managed.DAFUL.GearTrain.IGearSet" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_GearSetAPI_CalculateWebStiffnessForEF_VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_System_String_System_Int32_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_"></a> CalculateWebStiffnessForEF\(HiddenGearSetDocumentBase, string, int, ExpressionValueVariable, ExpressionValueVariable\)

Calculate ef web stiffness for EF in gear designer.

```csharp
[ExistFile(new string[] { "cadDataFilePath" })]
public static (double, IEnumerable<double>, IEnumerable<double>) CalculateWebStiffnessForEF(this HiddenGearSetDocumentBase document, string cadDataFilePath, int gearIdx, ExpressionValueVariable angle, ExpressionValueVariable offset)
```

#### Parameters

`document` HiddenGearSetDocumentBase

The <xref href="VM.Managed.DAFUL.GearTrain.GearTrainDocument" data-throw-if-not-resolved="false"></xref> for simulate. If null, the active document will be used.

`cadDataFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The cad data file path.

`gearIdx` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The gear index.

`angle` ExpressionValueVariable

The angle.

`offset` ExpressionValueVariable

The offset.

#### Returns

 \([double](https://learn.microsoft.com/dotnet/api/system.double), [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>, [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>\)

The mass, moment of inertia(Ixx, Ixy, Ixz, Iyy, Iyz, Izz), 6 by 6 stiffness.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

 [FileNotFoundException](https://learn.microsoft.com/dotnet/api/system.io.filenotfoundexception)

Will be thrown if 'feDataFilePath' is not found.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'gearIdx' argument is less than 0.

### <a id="VM_API_Pre_GearTrain_GearSetAPI_CalculateWebStiffnessForFE_VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_System_String_System_Int32_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_"></a> CalculateWebStiffnessForFE\(HiddenGearSetDocumentBase, string, int, ExpressionValueVariable, ExpressionValueVariable\)

Calculate fe web stiffness for FE in gear designer.

```csharp
[ExistFile(new string[] { "feDataFilePath" })]
public static (double, IEnumerable<double>, IEnumerable<double>) CalculateWebStiffnessForFE(this HiddenGearSetDocumentBase document, string feDataFilePath, int gearIdx, ExpressionValueVariable angle, ExpressionValueVariable offset)
```

#### Parameters

`document` HiddenGearSetDocumentBase

The <xref href="VM.Managed.DAFUL.GearTrain.GearTrainDocument" data-throw-if-not-resolved="false"></xref> for simulate. If null, the active document will be used.

`feDataFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The fe data file path.

`gearIdx` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The gear index.

`angle` ExpressionValueVariable

The angle.

`offset` ExpressionValueVariable

The offset.

#### Returns

 \([double](https://learn.microsoft.com/dotnet/api/system.double), [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>, [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>\)

The mass, moment of inertia(Ixx, Ixy, Ixz, Iyy, Iyz, Izz), 6 by 6 stiffness.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

 [FileNotFoundException](https://learn.microsoft.com/dotnet/api/system.io.filenotfoundexception)

Will be thrown if 'feDataFilePath' is not found.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'gearIdx' argument is less than 0.

### <a id="VM_API_Pre_GearTrain_GearSetAPI_ContactAnalysis_VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_System_Int32_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_System_Boolean_VM_Managed_DAFUL_GearTrain_PropertyGearSetPlanetary_ContactAnalysisInputType_VM_Managed_DAFUL_GearTrain_PropertyGearSetPlanetary_ContactAnalysisInputType_"></a> ContactAnalysis\(HiddenGearSetDocumentBase, int, ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable, bool, ContactAnalysisInputType, ContactAnalysisInputType\)

Contact analysis In gearset designer.

```csharp
[NotNull(new string[] { "document" })]
[GreaterThanOrEqualToZero(new string[] { "nGearPairIndex" })]
public static void ContactAnalysis(this HiddenGearSetDocumentBase document, int nGearPairIndex, ExpressionValueVariable speed, ExpressionValueVariable torque, ExpressionValueVariable ratio, bool openPost = false, PropertyGearSetPlanetary.ContactAnalysisInputType input = ContactAnalysisInputType.SunGear, PropertyGearSetPlanetary.ContactAnalysisInputType output = ContactAnalysisInputType.Carrier)
```

#### Parameters

`document` HiddenGearSetDocumentBase

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase" data-throw-if-not-resolved="false"></xref> for simulate. If null, the active document will be used.

`nGearPairIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The gear pair index.

`speed` ExpressionValueVariable

The speed.

`torque` ExpressionValueVariable

The torque.

`ratio` ExpressionValueVariable

The ratio.

`openPost` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag for whether opening post processor. The default value is false.

`input` PropertyGearSetPlanetary.ContactAnalysisInputType

The input type. The default value is SunGear.

`output` PropertyGearSetPlanetary.ContactAnalysisInputType

The output type. The default value is Carrier.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'gearIdx' argument is less than 0.

### <a id="VM_API_Pre_GearTrain_GearSetAPI_CreateCrossHelicalGearSet_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_VM_Managed_DAFUL_GearTrain_BasicInvolute_HelicalAngleType_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Collections_Generic_IEnumerable_VM_Models_Pre_ExpressionValueVariable__System_Collections_Generic_IEnumerable_VM_Models_Pre_ExpressionValueVariable__System_Collections_Generic_IEnumerable_VM_Models_Pre_ExpressionValueVariable__System_Collections_Generic_IEnumerable_VM_Models_Pre_ExpressionValueVariable__System_Collections_Generic_IEnumerable_System_String__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_System_Drawing_Color__"></a> CreateCrossHelicalGearSet\(GearTrainDocument, string, HelicalAngleType, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, IEnumerable<ExpressionValueVariable\>, IEnumerable<ExpressionValueVariable\>, IEnumerable<ExpressionValueVariable\>, IEnumerable<ExpressionValueVariable\>, IEnumerable<string\>, ExpressionValueVariable?, Color?\)

Create <xref href="VM.Managed.DAFUL.GearTrain.GearSetCrossHelical" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
public static Obj CreateCrossHelicalGearSet(this GearTrainDocument document, string gearsetName = "", BasicInvolute.HelicalAngleType helicalAngleType = HelicalAngleType.Right, ExpressionValueVariable? module = null, ExpressionValueVariable? pressureAngle = null, ExpressionValueVariable? helixAngle = null, IEnumerable<ExpressionValueVariable> centerDistance = null, IEnumerable<ExpressionValueVariable> numberOfTeeth = null, IEnumerable<ExpressionValueVariable> profileShift = null, IEnumerable<ExpressionValueVariable> faceWidth = null, IEnumerable<string> gearName = null, ExpressionValueVariable? crossAxisAngle = null, Color? color = null)
```

#### Parameters

`document` GearTrainDocument

The document to create the cross helical gearset.

`gearsetName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the gearset. If empty, default name starts with 'CrossHelicalGearSet_' will be generated and used.

`helicalAngleType` BasicInvolute.HelicalAngleType

The helical angle type. The default value is Right.

`module` ExpressionValueVariable?

The module. The default value is 3.046.

`pressureAngle` ExpressionValueVariable?

The pressure angle. The default value is 20.

`helixAngle` ExpressionValueVariable?

The helix angle. The default value is 10.

`centerDistance` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ExpressionValueVariable\>

The center distance of each gear pair. The default value is 74.

`numberOfTeeth` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ExpressionValueVariable\>

The number of teeth of each gear. The default value is 18, 25.

`profileShift` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ExpressionValueVariable\>

The profile shift of each gear. The default value is 0,0.

`faceWidth` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ExpressionValueVariable\>

The face width of each gear. The default value is 30, 30.

`gearName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The gear name of each gear. The default value is Gear1, Gear2.

`crossAxisAngle` ExpressionValueVariable?

The cross axis angle. The default value is 45.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the gearset.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.GearTrain.GearSetCrossHelical" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if length of 'centerDistance' is not 1.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if length of 'numberOfTeeth' is not 2.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if length of 'profileShift' is not 2.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if length of 'faceWidth' is not 2.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if length of 'gearName' is not 2.

### <a id="VM_API_Pre_GearTrain_GearSetAPI_CreateCrossHelicalGearSet_VM_Managed_DAFUL_GearTrain_GearTrainDocument_VM_API_Pre_Obj_System_String_System_Nullable_System_Drawing_Color__"></a> CreateCrossHelicalGearSet\(GearTrainDocument, Obj, string, Color?\)

Create <xref href="VM.Managed.DAFUL.GearTrain.GearSetCrossHelical" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "gearsetCopy" })]
[MatchTypeObj(new object[] { "gearsetCopy", typeof(GearSetCrossHelical) })]
public static Obj CreateCrossHelicalGearSet(this GearTrainDocument document, Obj gearsetCopy, string gearsetName = "", Color? color = null)
```

#### Parameters

`document` GearTrainDocument

The document to create the cross helical gearset.

`gearsetCopy` Obj

The cross helical gearset to be copied. The type is <xref href="VM.Managed.DAFUL.GearTrain.GearSetCrossHelical" data-throw-if-not-resolved="false"></xref>.

`gearsetName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the gearset. If empty, default name starts with 'CrossHelicalGearSet_' will be generated and used.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the gearset.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.GearTrain.GearSetCrossHelical" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'gearsetCopy' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if type of 'gearsetCopy' is not <xref href="VM.Managed.DAFUL.GearTrain.GearSetCrossHelical" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_GearSetAPI_CreateCrossHelicalGearSetWithKISSsoft_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_System_String_System_Nullable_System_Drawing_Color__"></a> CreateCrossHelicalGearSetWithKISSsoft\(GearTrainDocument, string, string, Color?\)

Create <xref href="VM.Managed.DAFUL.GearTrain.GearSetCrossHelical" data-throw-if-not-resolved="false"></xref> with KISSsoft.

```csharp
[NotNull(new string[] { "document" })]
[ExistFile(new string[] { "modelFilePath" })]
public static Obj CreateCrossHelicalGearSetWithKISSsoft(this GearTrainDocument document, string modelFilePath, string gearsetName = "", Color? color = null)
```

#### Parameters

`document` GearTrainDocument

The document to create the cross helical gearset.

`modelFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The KISS soft model file path.

`gearsetName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the gearset. If empty, default name starts with 'CrossHelicalGearSet_' will be generated and used.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the gearset.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.GearTrain.GearSetCrossHelical" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'modelPath' arguments are empty.

 [FileNotFoundException](https://learn.microsoft.com/dotnet/api/system.io.filenotfoundexception)

Will be thrown if 'modelPath' is not found.

### <a id="VM_API_Pre_GearTrain_GearSetAPI_CreateCustomGearSet_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_System_Int32_System_Collections_Generic_IEnumerable_System_String__System_Nullable_System_Drawing_Color__"></a> CreateCustomGearSet\(GearTrainDocument, string, int, IEnumerable<string\>, Color?\)

Create <xref href="VM.Managed.DAFUL.GearTrain.GearSetCustom" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
public static Obj CreateCustomGearSet(this GearTrainDocument document, string gearsetName = "", int numberOfGear = 2, IEnumerable<string> gearName = null, Color? color = null)
```

#### Parameters

`document` GearTrainDocument

The document to create the rack and pinion gearset.

`gearsetName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the gearset. If empty, default name starts with 'CustomGearSet_' will be generated and used.

`numberOfGear` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of gear. The default value is 2.

`gearName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The gear name of each gear. The default value is Gear1, Gear2.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the gearset.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.GearTrain.GearSetCustom" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if length of 'gearName' is not 'numberOfGear'.

### <a id="VM_API_Pre_GearTrain_GearSetAPI_CreateCustomGearSet_VM_Managed_DAFUL_GearTrain_GearTrainDocument_VM_API_Pre_Obj_System_String_System_Nullable_System_Drawing_Color__"></a> CreateCustomGearSet\(GearTrainDocument, Obj, string, Color?\)

Create <xref href="VM.Managed.DAFUL.GearTrain.GearSetCustom" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "gearsetCopy" })]
[MatchTypeObj(new object[] { "gearsetCopy", typeof(GearSetCustom) })]
public static Obj CreateCustomGearSet(this GearTrainDocument document, Obj gearsetCopy, string gearsetName = "", Color? color = null)
```

#### Parameters

`document` GearTrainDocument

The document to create the custom gearset.

`gearsetCopy` Obj

The custom gearset to be copied. The type is <xref href="VM.Managed.DAFUL.GearTrain.GearSetCustom" data-throw-if-not-resolved="false"></xref>.

`gearsetName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the gearset. If empty, default name starts with 'CustomGearSet_' will be generated and used.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the gearset.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.GearTrain.GearSetCustom" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'gearsetCopy' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if type of 'gearsetCopy' is not <xref href="VM.Managed.DAFUL.GearTrain.GearSetCustom" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_GearSetAPI_CreateCycloidPinGearSet_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_System_String_System_Collections_Generic_IEnumerable_VM_Models_Pre_ExpressionValueVariable__System_Collections_Generic_IEnumerable_VM_Models_Pre_ExpressionValueVariable__System_Collections_Generic_IEnumerable_System_String__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_System_Drawing_Color__"></a> CreateCycloidPinGearSet\(GearTrainDocument, string, string, IEnumerable<ExpressionValueVariable\>, IEnumerable<ExpressionValueVariable\>, IEnumerable<string\>, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, Color?\)

Create <xref href="VM.Managed.DAFUL.GearTrain.GearSetCycloidPin" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[ExistFile(new string[] { "cycloidProfilePath" })]
public static Obj CreateCycloidPinGearSet(this GearTrainDocument document, string cycloidProfilePath, string gearsetName = "", IEnumerable<ExpressionValueVariable> numberOfTeeth = null, IEnumerable<ExpressionValueVariable> faceWidth = null, IEnumerable<string> gearName = null, ExpressionValueVariable? pinDiameterOfGear = null, ExpressionValueVariable? pinPitchOfGear = null, ExpressionValueVariable? eccentricityOfGear = null, Color? color = null)
```

#### Parameters

`document` GearTrainDocument

The document to create the cycloid pin gearset.

`cycloidProfilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The cycloid profile path.

`gearsetName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the gearset. If empty, default name starts with 'CycloidPinGearSet_' will be generated and used.

`numberOfTeeth` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ExpressionValueVariable\>

The number of teeth of each gear. The default value is 39, 40.

`faceWidth` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ExpressionValueVariable\>

The face width of each gear. The default value is 10, 10.

`gearName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The gear name of each gear. The default value is Cycloid, Pin.

`pinDiameterOfGear` ExpressionValueVariable?

The pin diameter of gear. The default value is 6.

`pinPitchOfGear` ExpressionValueVariable?

The pin pitch of gear. The default value is 141.

`eccentricityOfGear` ExpressionValueVariable?

The eccentricity of gear. The default value is 1.4.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the gearset.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.GearTrain.GearSetCycloidPin" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

 [FileNotFoundException](https://learn.microsoft.com/dotnet/api/system.io.filenotfoundexception)

Will be thrown if 'modelPath' is not found.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if length of 'numberOfTeeth' is not 2.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if length of 'profileShift' is not 2.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if length of 'faceWidth' is not 2.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if length of 'gearName' is not 2.

### <a id="VM_API_Pre_GearTrain_GearSetAPI_CreateCycloidPinGearSet_VM_Managed_DAFUL_GearTrain_GearTrainDocument_VM_API_Pre_Obj_System_String_System_Nullable_System_Drawing_Color__"></a> CreateCycloidPinGearSet\(GearTrainDocument, Obj, string, Color?\)

Create <xref href="VM.Managed.DAFUL.GearTrain.GearSetCycloidPin" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "gearsetCopy" })]
[MatchTypeObj(new object[] { "gearsetCopy", typeof(GearSetCycloidPin) })]
public static Obj CreateCycloidPinGearSet(this GearTrainDocument document, Obj gearsetCopy, string gearsetName = "", Color? color = null)
```

#### Parameters

`document` GearTrainDocument

The document to create the cycloid pin  gearset.

`gearsetCopy` Obj

The cycloid pin gearset to be copied. The type is <xref href="VM.Managed.DAFUL.GearTrain.GearSetCycloidPin" data-throw-if-not-resolved="false"></xref>.

`gearsetName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the gearset. If empty, default name starts with 'CycloidPinGearSet_' will be generated and used.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the gearset.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.GearTrain.GearSetCycloidPin" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'gearsetCopy' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if type of 'gearsetCopy' is not <xref href="VM.Managed.DAFUL.GearTrain.GearSetCycloidPin" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_GearSetAPI_CreateExternalGearSet_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_VM_Managed_DAFUL_GearTrain_BasicInvolute_GearType_VM_Managed_DAFUL_GearTrain_BasicInvolute_HelicalAngleType_System_Int32_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Collections_Generic_IEnumerable_VM_Models_Pre_ExpressionValueVariable__System_Collections_Generic_IEnumerable_VM_Models_Pre_ExpressionValueVariable__System_Collections_Generic_IEnumerable_VM_Models_Pre_ExpressionValueVariable__System_Collections_Generic_IEnumerable_VM_Models_Pre_ExpressionValueVariable__System_Collections_Generic_IEnumerable_System_String__System_Boolean_System_Nullable_System_Drawing_Color__"></a> CreateExternalGearSet\(GearTrainDocument, string, GearType, HelicalAngleType, int, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, IEnumerable<ExpressionValueVariable\>, IEnumerable<ExpressionValueVariable\>, IEnumerable<ExpressionValueVariable\>, IEnumerable<ExpressionValueVariable\>, IEnumerable<string\>, bool, Color?\)

Create <xref href="VM.Managed.DAFUL.GearTrain.GearSet" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[GreaterThanOrEqualToSomeValue("numberOfGear", 2)]
public static Obj CreateExternalGearSet(this GearTrainDocument document, string gearsetName = "", BasicInvolute.GearType gearType = GearType.Helical, BasicInvolute.HelicalAngleType helicalAngleType = HelicalAngleType.Right, int numberOfGear = 2, ExpressionValueVariable? module = null, ExpressionValueVariable? pressureAngle = null, ExpressionValueVariable? helixAngle = null, IEnumerable<ExpressionValueVariable> centerDistance = null, IEnumerable<ExpressionValueVariable> numberOfTeeth = null, IEnumerable<ExpressionValueVariable> profileShift = null, IEnumerable<ExpressionValueVariable> faceWidth = null, IEnumerable<string> gearName = null, bool useAdvanced = false, Color? color = null)
```

#### Parameters

`document` GearTrainDocument

The document to create the external gearset.

`gearsetName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the gearset. If empty, default name starts with 'ExternalGearSet_' will be generated and used.

`gearType` BasicInvolute.GearType

The gear type. The default value is Helical.

`helicalAngleType` BasicInvolute.HelicalAngleType

The helical angle type. The default value is Right.

`numberOfGear` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of gear. The default value is 2.

`module` ExpressionValueVariable?

The module. The default value is 2.245.

`pressureAngle` ExpressionValueVariable?

The pressure angle. The default value is 17.

`helixAngle` ExpressionValueVariable?

The helix angle. The default value is 29.

`centerDistance` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ExpressionValueVariable\>

The center distance of each gear pair. The default value is 75.

`numberOfTeeth` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ExpressionValueVariable\>

The number of teeth of each gear. If the number of gear is 2, the default value is 17, 40.

`profileShift` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ExpressionValueVariable\>

The profile shift of each gear. If the number of gear is 2, the default value is 0.3441, 0.5426.

`faceWidth` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ExpressionValueVariable\>

The face width of each gear. If the number of gear is 2, the default value is 31, 31.

`gearName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The gear name of each gear. If the number of gear is 2, the default value is Gear1, Gear2.

`useAdvanced` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag that indicates using advanced mode. The default value is false.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the gearset.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.GearTrain.GearSet" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'numberOfGear' is less than 2.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if length of 'centerDistance' is not 'numberOfGear'-1.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if length of 'numberOfTeeth' is not 'numberOfGear'.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if length of 'profileShift' is not 'numberOfGear'.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if length of 'faceWidth' is not 'numberOfGear'.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if length of 'gearName' is not 'numberOfGear'.

### <a id="VM_API_Pre_GearTrain_GearSetAPI_CreateExternalGearSet_VM_Managed_DAFUL_GearTrain_GearTrainDocument_VM_API_Pre_Obj_System_String_System_Nullable_System_Drawing_Color__"></a> CreateExternalGearSet\(GearTrainDocument, Obj, string, Color?\)

Create <xref href="VM.Managed.DAFUL.GearTrain.GearSet" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "gearsetCopy" })]
[MatchTypeObj(new object[] { "gearsetCopy", typeof(GearSet) })]
public static Obj CreateExternalGearSet(this GearTrainDocument document, Obj gearsetCopy, string gearsetName = "", Color? color = null)
```

#### Parameters

`document` GearTrainDocument

The document to create the external gearset.

`gearsetCopy` Obj

The external gearset to be copied. The type is <xref href="VM.Managed.DAFUL.GearTrain.GearSet" data-throw-if-not-resolved="false"></xref>.

`gearsetName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the gearset. If empty, default name starts with 'ExternalGearSet_' will be generated and used.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the gearset.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.GearTrain.GearSet" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'gearsetCopy' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if type of 'gearsetCopy' is not <xref href="VM.Managed.DAFUL.GearTrain.GearSet" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_GearSetAPI_CreateExternalGearSetWithKISSsoft_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_System_String_System_Nullable_System_Drawing_Color__"></a> CreateExternalGearSetWithKISSsoft\(GearTrainDocument, string, string, Color?\)

Create <xref href="VM.Managed.DAFUL.GearTrain.GearSet" data-throw-if-not-resolved="false"></xref> with KISSsoft.

```csharp
[NotNull(new string[] { "document" })]
[ExistFile(new string[] { "modelFilePath" })]
public static Obj CreateExternalGearSetWithKISSsoft(this GearTrainDocument document, string modelFilePath, string gearsetName = "", Color? color = null)
```

#### Parameters

`document` GearTrainDocument

The document to create the external gearset.

`modelFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The KISS soft model file path.

`gearsetName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the gearset. If empty, default name starts with 'ExternalGearSet_' will be generated and used.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the gearset.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.GearTrain.GearSet" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'modelPath' arguments are empty.

 [FileNotFoundException](https://learn.microsoft.com/dotnet/api/system.io.filenotfoundexception)

Will be thrown if 'modelPath' is not found.

### <a id="VM_API_Pre_GearTrain_GearSetAPI_CreateInternalGearSet_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_VM_Managed_DAFUL_GearTrain_BasicInvolute_GearType_VM_Managed_DAFUL_GearTrain_BasicInvolute_HelicalAngleType_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Collections_Generic_IEnumerable_VM_Models_Pre_ExpressionValueVariable__System_Collections_Generic_IEnumerable_VM_Models_Pre_ExpressionValueVariable__System_Collections_Generic_IEnumerable_VM_Models_Pre_ExpressionValueVariable__System_Collections_Generic_IEnumerable_VM_Models_Pre_ExpressionValueVariable__System_Collections_Generic_IEnumerable_System_String__System_Boolean_System_Nullable_System_Drawing_Color__"></a> CreateInternalGearSet\(GearTrainDocument, string, GearType, HelicalAngleType, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, IEnumerable<ExpressionValueVariable\>, IEnumerable<ExpressionValueVariable\>, IEnumerable<ExpressionValueVariable\>, IEnumerable<ExpressionValueVariable\>, IEnumerable<string\>, bool, Color?\)

Create <xref href="VM.Managed.DAFUL.GearTrain.GearSetInternal" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
public static Obj CreateInternalGearSet(this GearTrainDocument document, string gearsetName = "", BasicInvolute.GearType gearType = GearType.Helical, BasicInvolute.HelicalAngleType helicalAngleType = HelicalAngleType.Right, ExpressionValueVariable? module = null, ExpressionValueVariable? pressureAngle = null, ExpressionValueVariable? helixAngle = null, IEnumerable<ExpressionValueVariable> centerDistance = null, IEnumerable<ExpressionValueVariable> numberOfTeeth = null, IEnumerable<ExpressionValueVariable> profileShift = null, IEnumerable<ExpressionValueVariable> faceWidth = null, IEnumerable<string> gearName = null, bool useAdvanced = false, Color? color = null)
```

#### Parameters

`document` GearTrainDocument

The document to create the internal gearset.

`gearsetName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the gearset. If empty, default name starts with 'InternalGearSet_' will be generated and used.

`gearType` BasicInvolute.GearType

The gear type. The default value is Helical.

`helicalAngleType` BasicInvolute.HelicalAngleType

The helical angle type. The default value is Right.

`module` ExpressionValueVariable?

The module. The default value is 2.245.

`pressureAngle` ExpressionValueVariable?

The pressure angle. The default value is 17.

`helixAngle` ExpressionValueVariable?

The helix angle. The default value is 29.

`centerDistance` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ExpressionValueVariable\>

The center distance of each gear pair. The default value is 26.

`numberOfTeeth` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ExpressionValueVariable\>

The number of teeth of each gear. The default value is 17, -40.

`profileShift` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ExpressionValueVariable\>

The profile shift of each gear. The default value is 0.3441, -0.5426.

`faceWidth` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ExpressionValueVariable\>

The face width of each gear. The default value is 31, 31.

`gearName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The gear name of each gear. The default value is Pinion, RingGear.

`useAdvanced` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag that indicates using advanced mode. The default value is false.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the gearset.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.GearTrain.GearSetInternal" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if length of 'centerDistance' is not 1.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if length of 'numberOfTeeth' is not 2.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if length of 'profileShift' is not 2.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if length of 'faceWidth' is not 2.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if length of 'gearName' is not 2.

### <a id="VM_API_Pre_GearTrain_GearSetAPI_CreateInternalGearSet_VM_Managed_DAFUL_GearTrain_GearTrainDocument_VM_API_Pre_Obj_System_String_System_Nullable_System_Drawing_Color__"></a> CreateInternalGearSet\(GearTrainDocument, Obj, string, Color?\)

Create <xref href="VM.Managed.DAFUL.GearTrain.GearSetInternal" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "gearsetCopy" })]
[MatchTypeObj(new object[] { "gearsetCopy", typeof(GearSetInternal) })]
public static Obj CreateInternalGearSet(this GearTrainDocument document, Obj gearsetCopy, string gearsetName = "", Color? color = null)
```

#### Parameters

`document` GearTrainDocument

The document to create the internal gearset.

`gearsetCopy` Obj

The internal gearset to be copied. <xref href="VM.Managed.DAFUL.GearTrain.GearSetInternal" data-throw-if-not-resolved="false"></xref>.

`gearsetName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the gearset. If empty, default name starts with 'InternalGearSet_' will be generated and used.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the gearset.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.GearTrain.GearSetInternal" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'gearsetCopy' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if type of 'gearsetCopy' is not <xref href="VM.Managed.DAFUL.GearTrain.GearSetInternal" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_GearSetAPI_CreateInternalGearSetWithKISSsoft_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_System_String_System_Nullable_System_Drawing_Color__"></a> CreateInternalGearSetWithKISSsoft\(GearTrainDocument, string, string, Color?\)

Create <xref href="VM.Managed.DAFUL.GearTrain.GearSetInternal" data-throw-if-not-resolved="false"></xref> with KISSsoft.

```csharp
[NotNull(new string[] { "document" })]
[ExistFile(new string[] { "modelFilePath" })]
public static Obj CreateInternalGearSetWithKISSsoft(this GearTrainDocument document, string modelFilePath, string gearsetName = "", Color? color = null)
```

#### Parameters

`document` GearTrainDocument

The document to create the internal gearset.

`modelFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The KISS soft model file path.

`gearsetName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the gearset. If empty, default name starts with 'InternalGearSet_' will be generated and used.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the gearset.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.GearTrain.GearSetInternal" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'modelPath' arguments are empty.

 [FileNotFoundException](https://learn.microsoft.com/dotnet/api/system.io.filenotfoundexception)

Will be thrown if 'modelPath' is not found.

### <a id="VM_API_Pre_GearTrain_GearSetAPI_CreatePlanetaryDPGearSet_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_VM_Managed_DAFUL_GearTrain_BasicInvolute_GearType_VM_Managed_DAFUL_GearTrain_BasicInvolute_HelicalAngleType_System_Int32_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Collections_Generic_IEnumerable_VM_Models_Pre_ExpressionValueVariable__System_Collections_Generic_IEnumerable_VM_Models_Pre_ExpressionValueVariable__System_Collections_Generic_IEnumerable_VM_Models_Pre_ExpressionValueVariable__System_Collections_Generic_IEnumerable_VM_Models_Pre_ExpressionValueVariable__VM_Managed_DAFUL_GearTrain_PropertyGearSetPlanetaryDP_DogLegDirectionType_System_Nullable_System_Drawing_Color__"></a> CreatePlanetaryDPGearSet\(GearTrainDocument, string, GearType, HelicalAngleType, int, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, IEnumerable<ExpressionValueVariable\>, IEnumerable<ExpressionValueVariable\>, IEnumerable<ExpressionValueVariable\>, IEnumerable<ExpressionValueVariable\>, DogLegDirectionType, Color?\)

Create <xref href="VM.Managed.DAFUL.GearTrain.GearSetPlanetaryDP" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[GreaterThanOrEqualToSomeValue("numberOfPinionGear", 2)]
public static Obj CreatePlanetaryDPGearSet(this GearTrainDocument document, string gearsetName = "", BasicInvolute.GearType gearType = GearType.Helical, BasicInvolute.HelicalAngleType helicalAngleType = HelicalAngleType.Right, int numberOfPinionGear = 5, ExpressionValueVariable? module = null, ExpressionValueVariable? pressureAngle = null, ExpressionValueVariable? helixAngle = null, IEnumerable<ExpressionValueVariable> centerDistance = null, IEnumerable<ExpressionValueVariable> numberOfTeeth = null, IEnumerable<ExpressionValueVariable> profileShift = null, IEnumerable<ExpressionValueVariable> faceWidth = null, PropertyGearSetPlanetaryDP.DogLegDirectionType dogLegDirectionType = DogLegDirectionType.Right, Color? color = null)
```

#### Parameters

`document` GearTrainDocument

The document to create the double pinion planetary gearset.

`gearsetName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the gearset. If empty, default name starts with 'PlanetaryGearSet_' will be generated and used.

`gearType` BasicInvolute.GearType

The gear type. The default value is Helical.

`helicalAngleType` BasicInvolute.HelicalAngleType

The helical angle type. The default value is Right.

`numberOfPinionGear` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of pinion gear. The default value is 5.

`module` ExpressionValueVariable?

The module. The default value is 1.5.

`pressureAngle` ExpressionValueVariable?

The pressure angle. The default value is 20.

`helixAngle` ExpressionValueVariable?

The helix angle. The default value is 22.

`centerDistance` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ExpressionValueVariable\>

The center distance of each gear pair. If the number of pinion gear is 5, The default value is 49.343, 25.076, 64.712, 0.

`numberOfTeeth` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ExpressionValueVariable\>

The number of teeth of each gear. If the number of pinion gear is 5, the default value is 46, 15, 16, -96.

`profileShift` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ExpressionValueVariable\>

The profile shift of each gear. If the number of pinion gear is 5, the default value is 0, 0, 0, 0.

`faceWidth` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ExpressionValueVariable\>

The face width of each gear. If the number of pinion gear is 5, the default value is 10, 10, 10, 10.

`dogLegDirectionType` PropertyGearSetPlanetaryDP.DogLegDirectionType

The dog leg direction type. The default value is Right..

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the gearset.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.GearTrain.GearSetPlanetaryDP" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'numberOfPinionGear' is less than 2.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if length of 'centerDistance' is not 4.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if length of 'numberOfTeeth' is not 4.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if length of 'profileShift' is not 4.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if length of 'faceWidth' is not 4.

### <a id="VM_API_Pre_GearTrain_GearSetAPI_CreatePlanetaryDPGearSet_VM_Managed_DAFUL_GearTrain_GearTrainDocument_VM_API_Pre_Obj_System_String_System_Nullable_System_Drawing_Color__"></a> CreatePlanetaryDPGearSet\(GearTrainDocument, Obj, string, Color?\)

Create <xref href="VM.Managed.DAFUL.GearTrain.GearSetPlanetaryDP" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "gearsetCopy" })]
[MatchTypeObj(new object[] { "gearsetCopy", typeof(GearSetPlanetaryDP) })]
public static Obj CreatePlanetaryDPGearSet(this GearTrainDocument document, Obj gearsetCopy, string gearsetName = "", Color? color = null)
```

#### Parameters

`document` GearTrainDocument

The document to create the double pinion planetary gearset.

`gearsetCopy` Obj

The double pinion planetary gearset to be copied. The type is <xref href="VM.Managed.DAFUL.GearTrain.GearSetPlanetaryDP" data-throw-if-not-resolved="false"></xref>.

`gearsetName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the gearset. If empty, default name starts with 'PlanetaryGearSet_' will be generated and used.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the gearset.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.GearTrain.GearSetPlanetaryDP" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'gearsetCopy' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if type of 'gearsetCopy' is not <xref href="VM.Managed.DAFUL.GearTrain.GearSetPlanetaryDP" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_GearSetAPI_CreatePlanetaryGearSet_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_VM_Managed_DAFUL_GearTrain_BasicInvolute_GearType_VM_Managed_DAFUL_GearTrain_BasicInvolute_HelicalAngleType_System_Int32_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Collections_Generic_IEnumerable_VM_Models_Pre_ExpressionValueVariable__System_Collections_Generic_IEnumerable_VM_Models_Pre_ExpressionValueVariable__System_Collections_Generic_IEnumerable_VM_Models_Pre_ExpressionValueVariable__System_Collections_Generic_IEnumerable_VM_Models_Pre_ExpressionValueVariable__System_Boolean_System_Nullable_System_Drawing_Color__"></a> CreatePlanetaryGearSet\(GearTrainDocument, string, GearType, HelicalAngleType, int, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, IEnumerable<ExpressionValueVariable\>, IEnumerable<ExpressionValueVariable\>, IEnumerable<ExpressionValueVariable\>, IEnumerable<ExpressionValueVariable\>, bool, Color?\)

Create <xref href="VM.Managed.DAFUL.GearTrain.GearSetPlanetary" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[GreaterThanOrEqualToSomeValue("numberOfPinionGear", 1)]
public static Obj CreatePlanetaryGearSet(this GearTrainDocument document, string gearsetName = "", BasicInvolute.GearType gearType = GearType.Helical, BasicInvolute.HelicalAngleType helicalAngleType = HelicalAngleType.Right, int numberOfPinionGear = 3, ExpressionValueVariable? module = null, ExpressionValueVariable? pressureAngle = null, ExpressionValueVariable? helixAngle = null, IEnumerable<ExpressionValueVariable> centerDistance = null, IEnumerable<ExpressionValueVariable> numberOfTeeth = null, IEnumerable<ExpressionValueVariable> profileShift = null, IEnumerable<ExpressionValueVariable> faceWidth = null, bool useAdvanced = false, Color? color = null)
```

#### Parameters

`document` GearTrainDocument

The document to create the planetary gearset.

`gearsetName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the gearset. If empty, default name starts with 'PlanetaryGearSet_' will be generated and used.

`gearType` BasicInvolute.GearType

The gear type. The default value is Helical.

`helicalAngleType` BasicInvolute.HelicalAngleType

The helical angle type. The default value is Right.

`numberOfPinionGear` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of pinion gear. The default value is 3.

`module` ExpressionValueVariable?

The module. The default value is 0.8.

`pressureAngle` ExpressionValueVariable?

The pressure angle. The default value is 20.

`helixAngle` ExpressionValueVariable?

The helix angle. The default value is 0.

`centerDistance` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ExpressionValueVariable\>

The center distance of each gear pair. If the number of pinion gear is 3, The default value is 10.6, 10.6, 10.6.

`numberOfTeeth` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ExpressionValueVariable\>

The number of teeth of each gear. If the number of pinion gear is 3, the default value is 11, 14, -40.

`profileShift` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ExpressionValueVariable\>

The profile shift of each gear. If the number of pinion gear is 3, the default value is 0.3125, 0.4055, -0.6725.

`faceWidth` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ExpressionValueVariable\>

The face width of each gear. If the number of pinion gear is 3, the default value is 10, 10, 10.

`useAdvanced` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag that indicates using advanced mode. The default value is false.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the gearset.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.GearTrain.GearSetPlanetary" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'numberOfPinionGear' is less than 1.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if length of 'centerDistance' is not 3.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if length of 'numberOfTeeth' is not 3.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if length of 'profileShift' is not 3.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if length of 'faceWidth' is not 3.

### <a id="VM_API_Pre_GearTrain_GearSetAPI_CreatePlanetaryGearSet_VM_Managed_DAFUL_GearTrain_GearTrainDocument_VM_API_Pre_Obj_System_String_System_Nullable_System_Drawing_Color__"></a> CreatePlanetaryGearSet\(GearTrainDocument, Obj, string, Color?\)

Create <xref href="VM.Managed.DAFUL.GearTrain.GearSetPlanetary" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "gearsetCopy" })]
[MatchTypeObj(new object[] { "gearsetCopy", typeof(GearSetPlanetary) })]
public static Obj CreatePlanetaryGearSet(this GearTrainDocument document, Obj gearsetCopy, string gearsetName = "", Color? color = null)
```

#### Parameters

`document` GearTrainDocument

The document to create the planetary gearset.

`gearsetCopy` Obj

The planetary gearset to be copied. The type is <xref href="VM.Managed.DAFUL.GearTrain.GearSetPlanetary" data-throw-if-not-resolved="false"></xref>.

`gearsetName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the gearset. If empty, default name starts with 'PlanetaryGearSet_' will be generated and used.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the gearset.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.GearTrain.GearSetPlanetary" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'gearsetCopy' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if type of 'gearsetCopy' is not <xref href="VM.Managed.DAFUL.GearTrain.GearSetPlanetary" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_GearSetAPI_CreatePlanetaryGearSetWithKISSsoft_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_System_String_System_Nullable_System_Drawing_Color__"></a> CreatePlanetaryGearSetWithKISSsoft\(GearTrainDocument, string, string, Color?\)

Create <xref href="VM.Managed.DAFUL.GearTrain.GearSetPlanetary" data-throw-if-not-resolved="false"></xref> with KISSsoft.

```csharp
[NotNull(new string[] { "document" })]
[ExistFile(new string[] { "modelFilePath" })]
public static Obj CreatePlanetaryGearSetWithKISSsoft(this GearTrainDocument document, string modelFilePath, string gearsetName = "", Color? color = null)
```

#### Parameters

`document` GearTrainDocument

The document to create the planetary gearset.

`modelFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The KISS soft model file path.

`gearsetName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the gearset. If empty, default name starts with 'PlanetaryGearSet_' will be generated and used.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the gearset.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.GearTrain.GearSetPlanetary" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'modelPath' arguments are empty.

 [FileNotFoundException](https://learn.microsoft.com/dotnet/api/system.io.filenotfoundexception)

Will be thrown if 'modelPath' is not found.

### <a id="VM_API_Pre_GearTrain_GearSetAPI_CreateRackAndPinionGearSet_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_VM_Managed_DAFUL_GearTrain_BasicInvolute_GearType_VM_Managed_DAFUL_GearTrain_BasicInvolute_HelicalAngleType_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Collections_Generic_IEnumerable_VM_Models_Pre_ExpressionValueVariable__System_Collections_Generic_IEnumerable_VM_Models_Pre_ExpressionValueVariable__System_Collections_Generic_IEnumerable_VM_Models_Pre_ExpressionValueVariable__System_Collections_Generic_IEnumerable_VM_Models_Pre_ExpressionValueVariable__System_Collections_Generic_IEnumerable_System_String__System_Boolean_System_Nullable_VM_Models_Pre_ExpressionValueVariable__VM_Managed_DAFUL_GearTrain_Rack_BarType_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_System_Drawing_Color__"></a> CreateRackAndPinionGearSet\(GearTrainDocument, string, GearType, HelicalAngleType, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, IEnumerable<ExpressionValueVariable\>, IEnumerable<ExpressionValueVariable\>, IEnumerable<ExpressionValueVariable\>, IEnumerable<ExpressionValueVariable\>, IEnumerable<string\>, bool, ExpressionValueVariable?, BarType, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, Color?\)

Create <xref href="VM.Managed.DAFUL.GearTrain.GearSetRackAndPinion" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
public static Obj CreateRackAndPinionGearSet(this GearTrainDocument document, string gearsetName = "", BasicInvolute.GearType gearType = GearType.Helical, BasicInvolute.HelicalAngleType helicalAngleType = HelicalAngleType.Right, ExpressionValueVariable? module = null, ExpressionValueVariable? pressureAngle = null, ExpressionValueVariable? helixAngle = null, IEnumerable<ExpressionValueVariable> centerDistance = null, IEnumerable<ExpressionValueVariable> numberOfTeeth = null, IEnumerable<ExpressionValueVariable> profileShift = null, IEnumerable<ExpressionValueVariable> faceWidth = null, IEnumerable<string> gearName = null, bool useDifferentHelixAngle = true, ExpressionValueVariable? rackHelixAngle = null, Rack.BarType rackType = BarType.Circular, ExpressionValueVariable? diameterOfRack = null, ExpressionValueVariable? heightOfRack = null, ExpressionValueVariable? sideLength = null, Color? color = null)
```

#### Parameters

`document` GearTrainDocument

The document to create the rack and pinion gearset.

`gearsetName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the gearset. If empty, default name starts with 'RackPSet_' will be generated and used.

`gearType` BasicInvolute.GearType

The gear type. The default value is Helical.

`helicalAngleType` BasicInvolute.HelicalAngleType

The helical angle type. The default value is Right.

`module` ExpressionValueVariable?

The module. The default value is 2.

`pressureAngle` ExpressionValueVariable?

The pressure angle. The default value is 20.

`helixAngle` ExpressionValueVariable?

The helix angle. The default value is 15.

`centerDistance` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ExpressionValueVariable\>

The center distance of each gear pair. The default value is 18.5.

`numberOfTeeth` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ExpressionValueVariable\>

The number of teeth of each gear. The default value is 10, 32.

`profileShift` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ExpressionValueVariable\>

The profile shift of each gear. The default value is 0.5, 0.

`faceWidth` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ExpressionValueVariable\>

The face width of each gear. The default value is 49, 49.

`gearName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The gear name of each gear. The default value is Pinion, Rack.

`useDifferentHelixAngle` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag that indicates using different helix angle. The default value is true.

`rackHelixAngle` ExpressionValueVariable?

The rack helix angle. The default value is 5.0.

`rackType` Rack.BarType

The rack type. The default value is Circular.

`diameterOfRack` ExpressionValueVariable?

The diameter of rack. The default value is 28.

`heightOfRack` ExpressionValueVariable?

The height of rack. The default value is 23.

`sideLength` ExpressionValueVariable?

The side length. The default value is 9.1834.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the gearset.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.GearTrain.GearSetRackAndPinion" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if length of 'centerDistance' is not 1.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if length of 'numberOfTeeth' is not 2.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if length of 'profileShift' is not 2.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if length of 'faceWidth' is not 2.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if length of 'gearName' is not 2.

### <a id="VM_API_Pre_GearTrain_GearSetAPI_CreateRackAndPinionGearSet_VM_Managed_DAFUL_GearTrain_GearTrainDocument_VM_API_Pre_Obj_System_String_System_Nullable_System_Drawing_Color__"></a> CreateRackAndPinionGearSet\(GearTrainDocument, Obj, string, Color?\)

Create <xref href="VM.Managed.DAFUL.GearTrain.GearSetRackAndPinion" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "gearsetCopy" })]
[MatchTypeObj(new object[] { "gearsetCopy", typeof(GearSetRackAndPinion) })]
public static Obj CreateRackAndPinionGearSet(this GearTrainDocument document, Obj gearsetCopy, string gearsetName = "", Color? color = null)
```

#### Parameters

`document` GearTrainDocument

The document to create the rack and pinion gearset.

`gearsetCopy` Obj

The rack and pinion gearset to be copied. The type is <xref href="VM.Managed.DAFUL.GearTrain.GearSetRackAndPinion" data-throw-if-not-resolved="false"></xref>.

`gearsetName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the gearset. If empty, default name starts with 'RackPSet_' will be generated and used.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the gearset.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.GearTrain.GearSetRackAndPinion" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'gearsetCopy' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if type of 'gearsetCopy' is not <xref href="VM.Managed.DAFUL.GearTrain.GearSetRackAndPinion" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_GearSetAPI_CreateWormAndWormWheelGearSet_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_VM_Managed_DAFUL_GearTrain_BasicInvolute_HelicalAngleType_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Collections_Generic_IEnumerable_VM_Models_Pre_ExpressionValueVariable__System_Collections_Generic_IEnumerable_VM_Models_Pre_ExpressionValueVariable__System_Collections_Generic_IEnumerable_VM_Models_Pre_ExpressionValueVariable__System_Collections_Generic_IEnumerable_VM_Models_Pre_ExpressionValueVariable__System_Collections_Generic_IEnumerable_System_String__System_Nullable_System_Drawing_Color__"></a> CreateWormAndWormWheelGearSet\(GearTrainDocument, string, HelicalAngleType, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, IEnumerable<ExpressionValueVariable\>, IEnumerable<ExpressionValueVariable\>, IEnumerable<ExpressionValueVariable\>, IEnumerable<ExpressionValueVariable\>, IEnumerable<string\>, Color?\)

Create <xref href="VM.Managed.DAFUL.GearTrain.GearSetWormAndWormWheel" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
public static Obj CreateWormAndWormWheelGearSet(this GearTrainDocument document, string gearsetName = "", BasicInvolute.HelicalAngleType helicalAngleType = HelicalAngleType.Right, ExpressionValueVariable? module = null, ExpressionValueVariable? pressureAngle = null, ExpressionValueVariable? leadAngle = null, IEnumerable<ExpressionValueVariable> centerDistance = null, IEnumerable<ExpressionValueVariable> numberOfTeeth = null, IEnumerable<ExpressionValueVariable> profileShift = null, IEnumerable<ExpressionValueVariable> faceWidth = null, IEnumerable<string> gearName = null, Color? color = null)
```

#### Parameters

`document` GearTrainDocument

The document to create the worm and worm wheel gearset.

`gearsetName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the gearset. If empty, default name starts with 'WormGearSet_' will be generated and used.

`helicalAngleType` BasicInvolute.HelicalAngleType

The helical angle type. The default value is Right.

`module` ExpressionValueVariable?

The module. The default value is 0.802183.

`pressureAngle` ExpressionValueVariable?

The pressure angle. The default value is 14.5.

`leadAngle` ExpressionValueVariable?

The lead angle. The default value is 30.

`centerDistance` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ExpressionValueVariable\>

The center distance of each gear pair. The default value is 14.2.

`numberOfTeeth` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ExpressionValueVariable\>

The number of teeth of each gear. The default value is 5, 22.

`profileShift` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ExpressionValueVariable\>

The profile shift of each gear. The default value is -0.75, 0.465.

`faceWidth` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ExpressionValueVariable\>

The face width of each gear. The default value is 13, 9.

`gearName` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The gear name of each gear. The default value is Worm, Wheel.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the gearset.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.GearTrain.GearSetWormAndWormWheel" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if length of 'centerDistance' is not 1.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if length of 'numberOfTeeth' is not 2.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if length of 'profileShift' is not 2.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if length of 'faceWidth' is not 2.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if length of 'gearName' is not 2.

### <a id="VM_API_Pre_GearTrain_GearSetAPI_CreateWormAndWormWheelGearSet_VM_Managed_DAFUL_GearTrain_GearTrainDocument_VM_API_Pre_Obj_System_String_System_Nullable_System_Drawing_Color__"></a> CreateWormAndWormWheelGearSet\(GearTrainDocument, Obj, string, Color?\)

Create <xref href="VM.Managed.DAFUL.GearTrain.GearSetWormAndWormWheel" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "gearsetCopy" })]
[MatchTypeObj(new object[] { "gearsetCopy", typeof(GearSetWormAndWormWheel) })]
public static Obj CreateWormAndWormWheelGearSet(this GearTrainDocument document, Obj gearsetCopy, string gearsetName = "", Color? color = null)
```

#### Parameters

`document` GearTrainDocument

The document to create the worm and worm wheel gearset.

`gearsetCopy` Obj

The worm and worm wheel gearset to be copied. The type is <xref href="VM.Managed.DAFUL.GearTrain.GearSetWormAndWormWheel" data-throw-if-not-resolved="false"></xref>.

`gearsetName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the gearset. If empty, default name starts with 'WormGearSet_' will be generated and used.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the gearset.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.GearTrain.GearSetWormAndWormWheel" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'gearsetCopy' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if type of 'gearsetCopy' is not <xref href="VM.Managed.DAFUL.GearTrain.GearSetWormAndWormWheel" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_GearSetAPI_MeshingGearSet_VM_Managed_DAFUL_GearTrain_GearTrainDocument_VM_API_Pre_Obj_"></a> MeshingGearSet\(GearTrainDocument, Obj\)

Meshing gearset in gear train subsystem.

```csharp
[NotNullObj(new string[] { "gearset" })]
public static bool MeshingGearSet(this GearTrainDocument document, Obj gearset)
```

#### Parameters

`document` GearTrainDocument

The <xref href="VM.Managed.DAFUL.GearTrain.GearTrainDocument" data-throw-if-not-resolved="false"></xref> for simulate. If null, the active document will be used.

`gearset` Obj

The gearset. The type is <xref href="VM.Managed.DAFUL.GearTrain.IGearSet" data-throw-if-not-resolved="false"></xref>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag for success.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'gearset' arguments are empty.

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if type of 'gearset' is not <xref href="VM.Managed.DAFUL.GearTrain.IGearSet" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_GearSetAPI_UpdateGearInEF_VM_Managed_DAFUL_GearTrain_HiddenDocumentMeshBase_VM_API_Pre_Obj_System_Int32_VM_Models_Pre_ExpressionValueVariable_VM_API_Pre_GearTrain_AttachLocationType_VM_API_Pre_Obj_VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_RacewayType_"></a> UpdateGearInEF\(HiddenDocumentMeshBase, Obj, int, ExpressionValueVariable, AttachLocationType, Obj, RacewayType\)

Update gear in EF shaftset/housing designer.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "gearset", "bearing" })]
[GreaterThanOrEqualToZero(new string[] { "gearIdx" })]
public static void UpdateGearInEF(this HiddenDocumentMeshBase document, Obj gearset, int gearIdx, ExpressionValueVariable referenceOffset, AttachLocationType attachLocationType, Obj bearing, RacewayGeometryInfo.RacewayType racewayType)
```

#### Parameters

`document` HiddenDocumentMeshBase

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenDocumentMeshBase" data-throw-if-not-resolved="false"></xref> for gear update. If null, the active document will be used.

`gearset` Obj

The gearset. The type is <xref href="VM.Managed.DAFUL.GearTrain.IGearSet" data-throw-if-not-resolved="false"></xref>.

`gearIdx` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The gear index.

`referenceOffset` ExpressionValueVariable

The reference offset.

`attachLocationType` [AttachLocationType](VM.API.Pre.GearTrain.AttachLocationType.md)

The attach location type.

`bearing` Obj

The bearing. The type is <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref>.

`racewayType` RacewayGeometryInfo.RacewayType

The raceway type.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'gearset' or 'bearing' arguments are empty.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'gearIndex' is less than zero.

### <a id="VM_API_Pre_GearTrain_GearSetAPI_UpdateGearInEF_VM_Managed_DAFUL_GearTrain_HiddenDocumentMeshBase_VM_API_Pre_Obj_System_Int32_VM_API_Pre_Obj_"></a> UpdateGearInEF\(HiddenDocumentMeshBase, Obj, int, Obj\)

Update gear in EF shaftset/housing designer.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "gearset", "connectable" })]
[GreaterThanOrEqualToZero(new string[] { "gearIdx" })]
public static void UpdateGearInEF(this HiddenDocumentMeshBase document, Obj gearset, int gearIdx, Obj connectable)
```

#### Parameters

`document` HiddenDocumentMeshBase

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenDocumentMeshBase" data-throw-if-not-resolved="false"></xref> for gear update. If null, the active document will be used.

`gearset` Obj

The gearset. The type is <xref href="VM.Managed.DAFUL.GearTrain.IGearSet" data-throw-if-not-resolved="false"></xref>.

`gearIdx` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The gear index.

`connectable` Obj

The start rbe. The type is <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'connectable' arguments are empty.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'gearIndex' is less than zero.

### <a id="VM_API_Pre_GearTrain_GearSetAPI_UpdateGearInFE_VM_Managed_DAFUL_GearTrain_HiddenDocumentMeshBase_VM_API_Pre_Obj_System_Int32_VM_Models_Pre_ExpressionValueVariable_VM_API_Pre_GearTrain_AttachLocationType_VM_API_Pre_Obj_VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_RacewayType_"></a> UpdateGearInFE\(HiddenDocumentMeshBase, Obj, int, ExpressionValueVariable, AttachLocationType, Obj, RacewayType\)

Update gear in FE shaftset/housing designer.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "gearset", "bearing" })]
[GreaterThanOrEqualToZero(new string[] { "gearIdx" })]
public static void UpdateGearInFE(this HiddenDocumentMeshBase document, Obj gearset, int gearIdx, ExpressionValueVariable referenceOffset, AttachLocationType attachLocationType, Obj bearing, RacewayGeometryInfo.RacewayType racewayType)
```

#### Parameters

`document` HiddenDocumentMeshBase

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenDocumentMeshBase" data-throw-if-not-resolved="false"></xref> for gear update. If null, the active document will be used.

`gearset` Obj

The gearset. The type is <xref href="VM.Managed.DAFUL.GearTrain.IGearSet" data-throw-if-not-resolved="false"></xref>.

`gearIdx` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The gear index.

`referenceOffset` ExpressionValueVariable

The reference offset.

`attachLocationType` [AttachLocationType](VM.API.Pre.GearTrain.AttachLocationType.md)

The attach location type.

`bearing` Obj

The bearing. The type is <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref>.

`racewayType` RacewayGeometryInfo.RacewayType

The raceway type.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'gearset' or 'bearing' arguments are empty.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'gearIdx' argument is less than 0.

### <a id="VM_API_Pre_GearTrain_GearSetAPI_UpdateGearInFE_VM_Managed_DAFUL_GearTrain_HiddenDocumentMeshBase_VM_API_Pre_Obj_System_Int32_VM_API_Pre_Obj_"></a> UpdateGearInFE\(HiddenDocumentMeshBase, Obj, int, Obj\)

Update gear in FE shaftset/housing designer.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "gearset", "connectable" })]
[GreaterThanOrEqualToZero(new string[] { "gearIdx" })]
public static void UpdateGearInFE(this HiddenDocumentMeshBase document, Obj gearset, int gearIdx, Obj connectable)
```

#### Parameters

`document` HiddenDocumentMeshBase

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenDocumentMeshBase" data-throw-if-not-resolved="false"></xref> for gear update. If null, the active document will be used.

`gearset` Obj

The gearset. The type is <xref href="VM.Managed.DAFUL.GearTrain.IGearSet" data-throw-if-not-resolved="false"></xref>.

`gearIdx` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The gear index.

`connectable` Obj

The start rbe. The type is <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'connectable' arguments are empty.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'gearIdx' argument is less than 0.

### <a id="VM_API_Pre_GearTrain_GearSetAPI_UpdateGearInShaftSet_VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_VM_API_Pre_Obj_System_Int32_VM_Models_Pre_ExpressionValueVariable_VM_API_Pre_GearTrain_AttachLocationType_VM_API_Pre_Obj_VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_RacewayType_System_Nullable_VM_API_Pre_GearTrain_ClearanceParameters__"></a> UpdateGearInShaftSet\(HiddenShaftSetDocument, Obj, int, ExpressionValueVariable, AttachLocationType, Obj, RacewayType, ClearanceParameters?\)

Update gear in simple shaftset designer.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "gearset", "bearing" })]
[GreaterThanOrEqualToZero(new string[] { "gearIdx" })]
public static void UpdateGearInShaftSet(this HiddenShaftSetDocument document, Obj gearset, int gearIdx, ExpressionValueVariable referenceOffset, AttachLocationType attachLocationType, Obj bearing, RacewayGeometryInfo.RacewayType racewayType, ClearanceParameters? clearanceParameters = null)
```

#### Parameters

`document` HiddenShaftSetDocument

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenShaftSetDocument" data-throw-if-not-resolved="false"></xref> for gear update. If null, the active document will be used.

`gearset` Obj

The gearset. The type is <xref href="VM.Managed.DAFUL.GearTrain.IGearSet" data-throw-if-not-resolved="false"></xref>.

`gearIdx` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The gear index.

`referenceOffset` ExpressionValueVariable

The reference offset.

`attachLocationType` [AttachLocationType](VM.API.Pre.GearTrain.AttachLocationType.md)

The attach location type.

`bearing` Obj

The bearing. The type is <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref>.

`racewayType` RacewayGeometryInfo.RacewayType

The raceway type.

`clearanceParameters` [ClearanceParameters](VM.API.Pre.GearTrain.ClearanceParameters.md)?

The clearance parameter. If it is not given, default values will be used.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'gearset' or 'bearing' arguments are empty.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'gearIndex' is less than zero.

### <a id="VM_API_Pre_GearTrain_GearSetAPI_UpdateGearInShaftSet_VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_VM_API_Pre_Obj_System_Int32_System_Nullable_VM_API_Pre_GearTrain_ClearanceParameters__"></a> UpdateGearInShaftSet\(HiddenShaftSetDocument, Obj, int, ClearanceParameters?\)

Update gear in simple shaftset designer.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "gearset" })]
[GreaterThanOrEqualToZero(new string[] { "gearIdx" })]
public static void UpdateGearInShaftSet(this HiddenShaftSetDocument document, Obj gearset, int gearIdx, ClearanceParameters? clearanceParameters = null)
```

#### Parameters

`document` HiddenShaftSetDocument

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenShaftSetDocument" data-throw-if-not-resolved="false"></xref> for gear update. If null, the active document will be used.

`gearset` Obj

The gearset. The type is <xref href="VM.Managed.DAFUL.GearTrain.IGearSet" data-throw-if-not-resolved="false"></xref>.

`gearIdx` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The gear index.

`clearanceParameters` [ClearanceParameters](VM.API.Pre.GearTrain.ClearanceParameters.md)?

The clearance parameter. If it is not given, default values will be used.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'gearset' or 'connectable' arguments are empty.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'gearIndex' is less than zero.

### <a id="VM_API_Pre_GearTrain_GearSetAPI_UpdateGearSet_VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_"></a> UpdateGearSet\(HiddenGearSetDocumentBase\)

Update gearset in gearset designer.

```csharp
[NotNull(new string[] { "document" })]
public static void UpdateGearSet(this HiddenGearSetDocumentBase document)
```

#### Parameters

`document` HiddenGearSetDocumentBase

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase" data-throw-if-not-resolved="false"></xref> for gearset update. If null, the active document will be used.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

### <a id="VM_API_Pre_GearTrain_GearSetAPI_UpdateRackInEF_VM_Managed_DAFUL_GearTrain_HiddenDocumentMeshBase_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_API_Pre_Obj_System_Boolean_System_Boolean_VM_Vector_VM_Models_Pre_ExpressionValueVariable_"></a> UpdateRackInEF\(HiddenDocumentMeshBase, Obj, Obj, Obj, bool, bool, Vector, ExpressionValueVariable\)

Update rack in EF shaftset/housing designer.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "gearset" })]
[NotZeroMagnitude(new string[] { "zAxis" })]
public static void UpdateRackInEF(this HiddenDocumentMeshBase document, Obj gearset, Obj startConnectable, Obj endConnectable, bool useStart, bool useEnd, Vector zAxis, ExpressionValueVariable initialAngle)
```

#### Parameters

`document` HiddenDocumentMeshBase

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenDocumentMeshBase" data-throw-if-not-resolved="false"></xref> for gear update. If null, the active document will be used.

`gearset` Obj

The gearset. The type is <xref href="VM.Managed.DAFUL.GearTrain.IGearSet" data-throw-if-not-resolved="false"></xref>.

`startConnectable` Obj

The start rbe. The type is <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>

`endConnectable` Obj

The end rbe. The type is <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>

`useStart` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag whether using start rbe.

`useEnd` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag whether using end rbe.

`zAxis` Vector

The z axis.

`initialAngle` ExpressionValueVariable

The initial angle.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'gearset' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the magnitude of 'zAxis' is 0.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the 'useStart' is true and 'startConnectable' is empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the 'useEnd' is true and 'endConnectable' is empty.

### <a id="VM_API_Pre_GearTrain_GearSetAPI_UpdateRackInFE_VM_Managed_DAFUL_GearTrain_HiddenDocumentMeshBase_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_API_Pre_Obj_System_Boolean_System_Boolean_VM_Vector_VM_Models_Pre_ExpressionValueVariable_"></a> UpdateRackInFE\(HiddenDocumentMeshBase, Obj, Obj, Obj, bool, bool, Vector, ExpressionValueVariable\)

Update rack in FE shaftset/housing designer.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "gearset" })]
[NotZeroMagnitude(new string[] { "zAxis" })]
public static void UpdateRackInFE(this HiddenDocumentMeshBase document, Obj gearset, Obj startConnectable, Obj endConnectable, bool useStart, bool useEnd, Vector zAxis, ExpressionValueVariable initialAngle)
```

#### Parameters

`document` HiddenDocumentMeshBase

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenDocumentMeshBase" data-throw-if-not-resolved="false"></xref> for gear update. If null, the active document will be used.

`gearset` Obj

The gearset. The type is <xref href="VM.Managed.DAFUL.GearTrain.IGearSet" data-throw-if-not-resolved="false"></xref>.

`startConnectable` Obj

The start rbe. The type is <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>

`endConnectable` Obj

The end rbe. The type is <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>

`useStart` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag whether using start rbe.

`useEnd` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag whether using end rbe.

`zAxis` Vector

The z axis.

`initialAngle` ExpressionValueVariable

The initial angle.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'gearset' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the magnitude of 'zAxis' is 0.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the 'useStart' is true and 'startConnectable' is empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the 'useEnd' is true and 'endConnectable' is empty.

### <a id="VM_API_Pre_GearTrain_GearSetAPI_UpdateRackInShaftSet_VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_VM_API_Pre_Obj_VM_Models_Pre_ExpressionValueVariable_"></a> UpdateRackInShaftSet\(HiddenShaftSetDocument, Obj, ExpressionValueVariable\)

Update rack in simple shaftset designer.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "gearset" })]
public static void UpdateRackInShaftSet(this HiddenShaftSetDocument document, Obj gearset, ExpressionValueVariable initialAngle)
```

#### Parameters

`document` HiddenShaftSetDocument

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenShaftSetDocument" data-throw-if-not-resolved="false"></xref> for gear update. If null, the active document will be used.

`gearset` Obj

The gearset. The type is <xref href="VM.Managed.DAFUL.GearTrain.IGearSet" data-throw-if-not-resolved="false"></xref>.

`initialAngle` ExpressionValueVariable

The initial angle.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'gearName' or 'clearanceInfo' arguments are empty.

