#  Class Tolerance

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Tolerance

```csharp
public class Tolerance : GearPropertyBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[GearPropertyBase](VM.Managed.DAFUL.GearTrain.GearPropertyBase.md) ← 
[Tolerance](VM.Managed.DAFUL.GearTrain.Tolerance.md)

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

### <a id="VM_Managed_DAFUL_GearTrain_Tolerance__ctor"></a> Tolerance\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Tolerance" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Tolerance()
```

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_Tolerance_BacklashParameter"></a> BacklashParameter

Gets or sets the backlash parameter.

```csharp
public Backlash BacklashParameter { get; set; }
```

#### Property Value

 [Backlash](VM.Managed.DAFUL.GearTrain.Backlash.md)

### <a id="VM_Managed_DAFUL_GearTrain_Tolerance_BallAndPinDiameterParameter"></a> BallAndPinDiameterParameter

Gets or sets the ball and diameter parameter.

```csharp
public BallAndPinDiameter BallAndPinDiameterParameter { get; set; }
```

#### Property Value

 [BallAndPinDiameter](VM.Managed.DAFUL.GearTrain.BallAndPinDiameter.md)

### <a id="VM_Managed_DAFUL_GearTrain_Tolerance_BaseTangentLengthParameter"></a> BaseTangentLengthParameter

Gets or sets the base tangent length parameter.

```csharp
public BaseTangentLength BaseTangentLengthParameter { get; set; }
```

#### Property Value

 [BaseTangentLength](VM.Managed.DAFUL.GearTrain.BaseTangentLength.md)

### <a id="VM_Managed_DAFUL_GearTrain_Tolerance_GeneratingProfileParameter"></a> GeneratingProfileParameter

Gets or sets the generating profile parameter.

```csharp
public GeneratingProfile GeneratingProfileParameter { get; set; }
```

#### Property Value

 [GeneratingProfile](VM.Managed.DAFUL.GearTrain.GeneratingProfile.md)

### <a id="VM_Managed_DAFUL_GearTrain_Tolerance_ToothThicknessParameter"></a> ToothThicknessParameter

Gets or sets the tooth thickness parameter.

```csharp
public ToothThickness ToothThicknessParameter { get; set; }
```

#### Property Value

 [ToothThickness](VM.Managed.DAFUL.GearTrain.ToothThickness.md)

### <a id="VM_Managed_DAFUL_GearTrain_Tolerance_TypeOfTolerance"></a> TypeOfTolerance

Gets or sets the tolerance type.

```csharp
public Tolerance.ToleranceType TypeOfTolerance { get; set; }
```

#### Property Value

 [Tolerance](VM.Managed.DAFUL.GearTrain.Tolerance.md).[ToleranceType](VM.Managed.DAFUL.GearTrain.Tolerance.ToleranceType.md)

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_Tolerance_InitChild_System_Int32_VM_Unit_ConvertFactor_"></a> InitChild\(int, ConvertFactor\)

Initializes the child.

```csharp
public void InitChild(int nNum, Unit.ConvertFactor factor)
```

#### Parameters

`nNum` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The n number.

`factor` Unit.ConvertFactor

The unit factor.

