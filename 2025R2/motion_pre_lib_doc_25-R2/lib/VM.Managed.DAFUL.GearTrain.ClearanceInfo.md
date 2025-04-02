#  Class ClearanceInfo

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Clearance Information

```csharp
public class ClearanceInfo : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[ClearanceInfo](VM.Managed.DAFUL.GearTrain.ClearanceInfo.md)

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

### <a id="VM_Managed_DAFUL_GearTrain_ClearanceInfo__ctor"></a> ClearanceInfo\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.ClearanceInfo" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ClearanceInfo()
```

### <a id="VM_Managed_DAFUL_GearTrain_ClearanceInfo__ctor_VM_Models_Pre_IOwned_"></a> ClearanceInfo\(IOwned\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.ClearanceInfo" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ClearanceInfo(IOwned owner)
```

#### Parameters

`owner` IOwned

The owner.

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_ClearanceInfo_AxialLeft"></a> AxialLeft

Gets or sets the axial left.

```csharp
public ExpressionValueVariable AxialLeft { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_ClearanceInfo_AxialPreload"></a> AxialPreload

Gets or sets the axial preload.

```csharp
public ExpressionValueVariable AxialPreload { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_ClearanceInfo_AxialRight"></a> AxialRight

Gets or sets the axial right.

```csharp
public ExpressionValueVariable AxialRight { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_ClearanceInfo_DampingRatio"></a> DampingRatio

Gets or sets the damping ratio.

```csharp
public ExpressionValueVariable DampingRatio { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_ClearanceInfo_InputTypeOfAxial"></a> InputTypeOfAxial

Gets or sets the type of axial.

```csharp
public ClearanceInfo.AxialType InputTypeOfAxial { get; set; }
```

#### Property Value

 [ClearanceInfo](VM.Managed.DAFUL.GearTrain.ClearanceInfo.md).[AxialType](VM.Managed.DAFUL.GearTrain.ClearanceInfo.AxialType.md)

### <a id="VM_Managed_DAFUL_GearTrain_ClearanceInfo_InputTypeOfRadial"></a> InputTypeOfRadial

Gets or sets the type of radial.

```csharp
public ClearanceInfo.RadialType InputTypeOfRadial { get; set; }
```

#### Property Value

 [ClearanceInfo](VM.Managed.DAFUL.GearTrain.ClearanceInfo.md).[RadialType](VM.Managed.DAFUL.GearTrain.ClearanceInfo.RadialType.md)

### <a id="VM_Managed_DAFUL_GearTrain_ClearanceInfo_Penalty"></a> Penalty

Gets or sets the penalty.

```csharp
public ExpressionValueVariable Penalty { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_ClearanceInfo_Radial"></a> Radial

Gets or sets the radial.

```csharp
public ExpressionValueVariable Radial { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_ClearanceInfo_RadialPreload"></a> RadialPreload

Gets or sets the radial preload.

```csharp
public ExpressionValueVariable RadialPreload { get; set; }
```

#### Property Value

 ExpressionValueVariable

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_ClearanceInfo_InitChild"></a> InitChild\(\)

Initializes the child.

```csharp
public void InitChild()
```

### <a id="VM_Managed_DAFUL_GearTrain_ClearanceInfo_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

