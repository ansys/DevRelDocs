#  Class BasicInvolute

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Basic Involute

```csharp
public class BasicInvolute : GearPropertyBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[GearPropertyBase](VM.Managed.DAFUL.GearTrain.GearPropertyBase.md) ← 
[BasicInvolute](VM.Managed.DAFUL.GearTrain.BasicInvolute.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider, 
ILinkContainerEvent, 
IVerifiable

#### Inherited Members

[GearPropertyBase.InitChild\(int\)](VM.Managed.DAFUL.GearTrain.GearPropertyBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearPropertyBase\_InitChild\_System\_Int32\_), 
LinkContainer.SetModified\(\), 
LinkContainer.raise\_OnUpdating\(object, LinkEventArgs\), 
LinkContainer.raise\_OnUpdate\(object, LinkEventArgs\), 
LinkContainer.raise\_OnDestroying\(object, LinkEventArgs\), 
LinkContainer.raise\_OnDestroy\(object, LinkEventArgs\), 
LinkContainer.raise\_OnAdded\(object, AddToDocEventArgs\), 
LinkContainer.raise\_OnRemoved\(object, RemoveFromDocEventArgs\), 
LinkContainer.GetTargetListForUpdate\(\), 
LinkContainer.SkipUpdateObjectImpl\(\), 
LinkContainer.Initialize\(Unit.ConvertFactor\), 
LinkContainer.SetFlagWhenXMLFile\(string, bool\), 
LinkContainer.IsSerializableEvent\(Delegate\), 
LinkContainer.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
LinkContainer.GetSerializedData\(SerializationInfo, StreamingContext\), 
LinkContainer.LinkRequestUpdating\(object, LinkEventArgs\), 
LinkContainer.LinkRequestUpdate\(object, LinkEventArgs\), 
LinkContainer.LinkRequestDestroying\(object, LinkEventArgs\), 
LinkContainer.LinkRequestDestroy\(object, LinkEventArgs\), 
LinkContainer.LinkAddedToDocument\(object, AddToDocEventArgs\), 
LinkContainer.LinkRemovedFromDocument\(object, RemoveFromDocEventArgs\), 
LinkContainer.OnLinkReserved\(ILink, object, EventArgs\), 
LinkContainer.CanBeDestroy\(object\), 
LinkContainer.DisposeManagedResources\(\), 
LinkContainer.SetContainer\(IOwned, bool\), 
LinkContainer.OnChildUpdated\(object, LinkEventArgs\), 
LinkContainer.OnContainerDestroy\(object, LinkEventArgs\), 
LinkContainer.OnDeserialization\(object\), 
LinkContainer.Verify\(VerifiedResult\), 
LinkContainer.GetCopy\(object\), 
LinkContainer.Dispose\(bool\), 
LinkContainer.ClearChildInfoBeforeDeserialize, 
LinkContainer.Container, 
LinkContainer.Owner, 
LinkContainer.Document, 
LinkContainer.ID, 
LinkContainer.IsChildExternable, 
LinkContainer.IsExternable, 
LinkContainer.OnRemoved, 
LinkContainer.OnAdded, 
LinkContainer.OnDestroy, 
LinkContainer.OnDestroying, 
LinkContainer.OnUpdate, 
LinkContainer.OnUpdating, 
LinkableBase.OnDeserialization\(object\), 
ObservableObject.Dispose\(\), 
ObservableObject.RaisePropertyChanged\(string\), 
ObservableObject.RaisePropertyChanged\(string, object, object\), 
ObservableObject.Dispose\(bool\), 
ObservableObject.DisposeManagedResources\(\), 
ObservableObject.DisposeUnmanagedResources\(\), 
ObservableObject.IsDisposed, 
ObservableObject.TryDisposing, 
ObservableObject.Disposed, 
ObservableObject.Disposing, 
ObservableObject.PropertyChanged

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_GearTrain_BasicInvolute__ctor"></a> BasicInvolute\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.BasicInvolute" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BasicInvolute()
```

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_BasicInvolute_CenterDistances"></a> CenterDistances

Gets or sets the center distances.

```csharp
public Variable[] CenterDistances { get; set; }
```

#### Property Value

 Variable\[\]

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

Variable list is null.
or
Variable list is null.
or
Variable is null.

### <a id="VM_Managed_DAFUL_GearTrain_BasicInvolute_ForceForToothStiffness"></a> ForceForToothStiffness

Gets or sets the force for tooth stiffness.

```csharp
public ExpressionValueVariable ForceForToothStiffness { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BasicInvolute_HelixAngle"></a> HelixAngle

Gets or sets the helix angle.

```csharp
public ExpressionValueVariable HelixAngle { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BasicInvolute_InputProfilMethod"></a> InputProfilMethod

Gets or sets the profile method type of gear.

```csharp
public BasicInvolute.ProfilMethodType InputProfilMethod { get; set; }
```

#### Property Value

 [BasicInvolute](VM.Managed.DAFUL.GearTrain.BasicInvolute.md).[ProfilMethodType](VM.Managed.DAFUL.GearTrain.BasicInvolute.ProfilMethodType.md)

### <a id="VM_Managed_DAFUL_GearTrain_BasicInvolute_InputTypeOfGear"></a> InputTypeOfGear

Gets or sets the type of gear.

```csharp
public BasicInvolute.GearType InputTypeOfGear { get; set; }
```

#### Property Value

 [BasicInvolute](VM.Managed.DAFUL.GearTrain.BasicInvolute.md).[GearType](VM.Managed.DAFUL.GearTrain.BasicInvolute.GearType.md)

### <a id="VM_Managed_DAFUL_GearTrain_BasicInvolute_InputTypeOfHelicalAngle"></a> InputTypeOfHelicalAngle

Gets or sets the type of helical angle.

```csharp
public BasicInvolute.HelicalAngleType InputTypeOfHelicalAngle { get; set; }
```

#### Property Value

 [BasicInvolute](VM.Managed.DAFUL.GearTrain.BasicInvolute.md).[HelicalAngleType](VM.Managed.DAFUL.GearTrain.BasicInvolute.HelicalAngleType.md)

### <a id="VM_Managed_DAFUL_GearTrain_BasicInvolute_IsUseModule"></a> IsUseModule

Gets or sets a value indicating whether [use module].

```csharp
public bool IsUseModule { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_GearTrain_BasicInvolute_Module"></a> Module

Gets or sets the module.

```csharp
public ExpressionValueVariable Module { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BasicInvolute_NumOfInvolutePoint"></a> NumOfInvolutePoint

Gets or sets a number of involute point.

```csharp
public int NumOfInvolutePoint { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_GearTrain_BasicInvolute_NumOfTrochoidPoint"></a> NumOfTrochoidPoint

Gets or sets a number of trochoid point.

```csharp
public int NumOfTrochoidPoint { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_GearTrain_BasicInvolute_NumberOfThinSlice"></a> NumberOfThinSlice

Gets or sets the number of thin slice.

```csharp
public ExpressionValueVariable NumberOfThinSlice { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BasicInvolute_OBD"></a> OBD

Gets or sets the obd.

```csharp
public ExpressionValueVariable OBD { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BasicInvolute_OverBallRadius"></a> OverBallRadius

Gets or sets the over ball radius.

```csharp
public ExpressionValueVariable OverBallRadius { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BasicInvolute_PairFaceWidth"></a> PairFaceWidth

Gets or sets the width of the pair face.

```csharp
public GearPairValue PairFaceWidth { get; set; }
```

#### Property Value

 [GearPairValue](VM.Managed.DAFUL.GearTrain.GearPairValue.md)

### <a id="VM_Managed_DAFUL_GearTrain_BasicInvolute_PairNumberOfTeeth"></a> PairNumberOfTeeth

Gets or sets the pair number of teeth.

```csharp
public GearPairValue PairNumberOfTeeth { get; set; }
```

#### Property Value

 [GearPairValue](VM.Managed.DAFUL.GearTrain.GearPairValue.md)

### <a id="VM_Managed_DAFUL_GearTrain_BasicInvolute_PasternAngle"></a> PasternAngle

Gets or sets the pastern angle.

```csharp
public ExpressionValueVariable PasternAngle { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BasicInvolute_PitchDiameter"></a> PitchDiameter

Gets or sets the pitch diameter.

```csharp
public ExpressionValueVariable PitchDiameter { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BasicInvolute_PressureAngle"></a> PressureAngle

Gets or sets the pressure angle.

```csharp
public ExpressionValueVariable PressureAngle { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BasicInvolute_Quality"></a> Quality

Gets or sets the quality.

```csharp
public GearPairValue Quality { get; set; }
```

#### Property Value

 [GearPairValue](VM.Managed.DAFUL.GearTrain.GearPairValue.md)

### <a id="VM_Managed_DAFUL_GearTrain_BasicInvolute_ToothThicknessInToleranceField"></a> ToothThicknessInToleranceField

Gets or sets the tooth thickness in tolerance field.

```csharp
public BasicInvolute.ToothThicknessInToleranceFieldType ToothThicknessInToleranceField { get; set; }
```

#### Property Value

 [BasicInvolute](VM.Managed.DAFUL.GearTrain.BasicInvolute.md).[ToothThicknessInToleranceFieldType](VM.Managed.DAFUL.GearTrain.BasicInvolute.ToothThicknessInToleranceFieldType.md)

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_BasicInvolute_InitChild_System_Int32_"></a> InitChild\(int\)

Initializes the child.

```csharp
public override void InitChild(int nNum)
```

#### Parameters

`nNum` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The n number.

### <a id="VM_Managed_DAFUL_GearTrain_BasicInvolute_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

