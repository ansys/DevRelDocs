#  Class FrequencyResponseAPI

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class implements APIs for actuator and channel class.

```csharp
public static class FrequencyResponseAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[FrequencyResponseAPI](VM.API.Pre.FrequencyResponseAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_FrequencyResponseAPI_CreateInputChannel_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_Vector_VM_OMatrix_VM_API_Pre_Obj_VM_API_Pre_InputChannelInputType_VM_Managed_DAFUL_Linear_InputModeType_System_String_"></a> CreateInputChannel\(SubSystemDocument, Obj, Vector, OMatrix, Obj, InputChannelInputType, InputModeType, string\)

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "body", "actuator" })]
public static Obj CreateInputChannel(this SubSystemDocument subSystemDocument, Obj body, Vector position, OMatrix orientation, Obj actuator, InputChannelInputType inputType = InputChannelInputType.Force, InputModeType inputMode = InputModeType.Translational, string name = "")
```

#### Parameters

`subSystemDocument` SubSystemDocument

`body` [Obj](VM.API.Pre.Obj.md)

`position` Vector

`orientation` OMatrix

`actuator` [Obj](VM.API.Pre.Obj.md)

`inputType` [InputChannelInputType](VM.API.Pre.InputChannelInputType.md)

`inputMode` InputModeType

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Obj](VM.API.Pre.Obj.md)

### <a id="VM_API_Pre_FrequencyResponseAPI_CreateOutputChannel_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_System_Nullable_VM_API_Pre_Obj__System_Nullable_VM_API_Pre_Obj__VM_API_Pre_OutputChannelInputType_VM_API_Pre_ChannelDirectionType_System_String_"></a> CreateOutputChannel\(SubSystemDocument, Obj, Obj?, Obj?, OutputChannelInputType, ChannelDirectionType, string\)

Create <xref href="VM.Managed.DAFUL.Linear.ChannelOutput" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "actionMarker" })]
[MatchTypeObj(new object[] { "actionMarker", typeof(IMarker) })]
public static Obj CreateOutputChannel(this SubSystemDocument subSystemDocument, Obj actionMarker, Obj? baseMarker = null, Obj? referenceMarker = null, OutputChannelInputType type = OutputChannelInputType.Displacement, ChannelDirectionType direction = ChannelDirectionType.X, string name = "")
```

#### Parameters

`subSystemDocument` SubSystemDocument

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a output channel.

`actionMarker` [Obj](VM.API.Pre.Obj.md)

The action marker of a output channel.

`baseMarker` [Obj](VM.API.Pre.Obj.md)?

The base marker of a output channel.

`referenceMarker` [Obj](VM.API.Pre.Obj.md)?

The reference marker of a output channel.

`type` [OutputChannelInputType](VM.API.Pre.OutputChannelInputType.md)

The type of a output channel.

`direction` [ChannelDirectionType](VM.API.Pre.ChannelDirectionType.md)

The direction of a output channel.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the <xref href="VM.Managed.DAFUL.Linear.ChannelOutput" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'OC' will be generated and used.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.Linear.ChannelOutput" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument', 'actionMarker' is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'baseMarker', 'referenceMarker' is not <xref href="VM.Managed.IMarker" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_FrequencyResponseAPI_CreateRotatingMassActuatorForForce_VM_Managed_DAFUL_SubSystemDocument_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_String_"></a> CreateRotatingMassActuatorForForce\(SubSystemDocument, ExpressionValueVariable?, ExpressionValueVariable?, string\)

Create <xref href="VM.Managed.DAFUL.Builder.Linear.ActuatorRotatingMass" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "subSystemDocument" })]
public static Obj CreateRotatingMassActuatorForForce(this SubSystemDocument subSystemDocument, ExpressionValueVariable? mass = null, ExpressionValueVariable? radialOffset = null, string name = "")
```

#### Parameters

`subSystemDocument` SubSystemDocument

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a rotating mass actuator.

`mass` ExpressionValueVariable?

The mass of a rotating mass actuator.

`radialOffset` ExpressionValueVariable?

The radial offset of a rotating mass actuator.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the <xref href="VM.Managed.DAFUL.Builder.Linear.ActuatorRotatingMass" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'RMA_' will be generated and used.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.Builder.Linear.ActuatorRotatingMass" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument' is null.

### <a id="VM_API_Pre_FrequencyResponseAPI_CreateRotatingMassActuatorForMoment_VM_Managed_DAFUL_SubSystemDocument_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_String_"></a> CreateRotatingMassActuatorForMoment\(SubSystemDocument, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, string\)

Create <xref href="VM.Managed.DAFUL.Builder.Linear.ActuatorRotatingMass" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "subSystemDocument" })]
public static Obj CreateRotatingMassActuatorForMoment(this SubSystemDocument subSystemDocument, ExpressionValueVariable? mass = null, ExpressionValueVariable? radialOffset = null, ExpressionValueVariable? offsetNormalToPlane = null, string name = "")
```

#### Parameters

`subSystemDocument` SubSystemDocument

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a rotating mass actuator.

`mass` ExpressionValueVariable?

The mass of a rotating mass actuator.

`radialOffset` ExpressionValueVariable?

The radial offset of a rotating mass actuator.

`offsetNormalToPlane` ExpressionValueVariable?

The offset normal to plane of a rotating mass actuator.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the <xref href="VM.Managed.DAFUL.Builder.Linear.ActuatorRotatingMass" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'RMA_' will be generated and used.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.Builder.Linear.ActuatorRotatingMass" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument' is null.

### <a id="VM_API_Pre_FrequencyResponseAPI_CreateSweptSineActuator_VM_Managed_DAFUL_SubSystemDocument_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_String_"></a> CreateSweptSineActuator\(SubSystemDocument, ExpressionValueVariable?, ExpressionValueVariable?, string\)

Create <xref href="VM.Managed.DAFUL.Builder.Linear.ActuatorSweptSine" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "subSystemDocument" })]
public static Obj CreateSweptSineActuator(this SubSystemDocument subSystemDocument, ExpressionValueVariable? magnitude = null, ExpressionValueVariable? phaseAngle = null, string name = "")
```

#### Parameters

`subSystemDocument` SubSystemDocument

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a swept sine actuator.

`magnitude` ExpressionValueVariable?

The magnitude of a swept sine actuator.

`phaseAngle` ExpressionValueVariable?

The phase angle of a swept sine actuator.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the <xref href="VM.Managed.DAFUL.Builder.Linear.ActuatorSweptSine" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'SSA_' will be generated and used.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.Builder.Linear.ActuatorSweptSine" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument' is null.

