#  Class Modification

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Modification

```csharp
public class Modification : GearPropertyBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[GearPropertyBase](VM.Managed.DAFUL.GearTrain.GearPropertyBase.md) ← 
[Modification](VM.Managed.DAFUL.GearTrain.Modification.md)

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

### <a id="VM_Managed_DAFUL_GearTrain_Modification__ctor"></a> Modification\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Modification" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Modification()
```

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_Modification_APoint"></a> APoint

Gets or sets a point.

```csharp
public GearPairLeftRightValue APoint { get; set; }
```

#### Property Value

 [GearPairLeftRightValue](VM.Managed.DAFUL.GearTrain.GearPairLeftRightValue.md)

### <a id="VM_Managed_DAFUL_GearTrain_Modification_BPoint"></a> BPoint

Gets or sets the b point.

```csharp
public GearPairLeftRightValue BPoint { get; set; }
```

#### Property Value

 [GearPairLeftRightValue](VM.Managed.DAFUL.GearTrain.GearPairLeftRightValue.md)

### <a id="VM_Managed_DAFUL_GearTrain_Modification_FirstEndReliefLength"></a> FirstEndReliefLength

Gets or sets the first end relief length.

```csharp
public GearPairValue FirstEndReliefLength { get; set; }
```

#### Property Value

 [GearPairValue](VM.Managed.DAFUL.GearTrain.GearPairValue.md)

### <a id="VM_Managed_DAFUL_GearTrain_Modification_LeadCrown"></a> LeadCrown

Gets or sets the lead crown.

```csharp
public GearPairLeftRightValue LeadCrown { get; set; }
```

#### Property Value

 [GearPairLeftRightValue](VM.Managed.DAFUL.GearTrain.GearPairLeftRightValue.md)

### <a id="VM_Managed_DAFUL_GearTrain_Modification_LeadRelief"></a> LeadRelief

Gets or sets the lead relief.

```csharp
public GearPairLeftRightValue LeadRelief { get; set; }
```

#### Property Value

 [GearPairLeftRightValue](VM.Managed.DAFUL.GearTrain.GearPairLeftRightValue.md)

### <a id="VM_Managed_DAFUL_GearTrain_Modification_LeadSlope"></a> LeadSlope

Gets or sets the lead slope.

```csharp
public GearPairLeftRightValue LeadSlope { get; set; }
```

#### Property Value

 [GearPairLeftRightValue](VM.Managed.DAFUL.GearTrain.GearPairLeftRightValue.md)

### <a id="VM_Managed_DAFUL_GearTrain_Modification_ProfileCrown"></a> ProfileCrown

Gets or sets the profile crown.

```csharp
public GearPairLeftRightValue ProfileCrown { get; set; }
```

#### Property Value

 [GearPairLeftRightValue](VM.Managed.DAFUL.GearTrain.GearPairLeftRightValue.md)

### <a id="VM_Managed_DAFUL_GearTrain_Modification_ProfileSlope"></a> ProfileSlope

Gets or sets the profile slope.

```csharp
public GearPairLeftRightValue ProfileSlope { get; set; }
```

#### Property Value

 [GearPairLeftRightValue](VM.Managed.DAFUL.GearTrain.GearPairLeftRightValue.md)

### <a id="VM_Managed_DAFUL_GearTrain_Modification_RootRadius"></a> RootRadius

Gets or sets the modification end diameter at root.

```csharp
public GearPairValue RootRadius { get; set; }
```

#### Property Value

 [GearPairValue](VM.Managed.DAFUL.GearTrain.GearPairValue.md)

### <a id="VM_Managed_DAFUL_GearTrain_Modification_SecondEndReliefLength"></a> SecondEndReliefLength

Gets or sets the second end relief length.

```csharp
public GearPairValue SecondEndReliefLength { get; set; }
```

#### Property Value

 [GearPairValue](VM.Managed.DAFUL.GearTrain.GearPairValue.md)

### <a id="VM_Managed_DAFUL_GearTrain_Modification_TipRadius"></a> TipRadius

Gets or sets the modification end diameter at tip.

```csharp
public GearPairValue TipRadius { get; set; }
```

#### Property Value

 [GearPairValue](VM.Managed.DAFUL.GearTrain.GearPairValue.md)

### <a id="VM_Managed_DAFUL_GearTrain_Modification_TipRelief"></a> TipRelief

Gets or sets the tip relief.

```csharp
public GearPairLeftRightValue TipRelief { get; set; }
```

#### Property Value

 [GearPairLeftRightValue](VM.Managed.DAFUL.GearTrain.GearPairLeftRightValue.md)

### <a id="VM_Managed_DAFUL_GearTrain_Modification_Twist"></a> Twist

Gets or sets the twist.

```csharp
public GearPairLeftRightValue Twist { get; set; }
```

#### Property Value

 [GearPairLeftRightValue](VM.Managed.DAFUL.GearTrain.GearPairLeftRightValue.md)

### <a id="VM_Managed_DAFUL_GearTrain_Modification_UseCalculateValue"></a> UseCalculateValue

Gets or sets a flag of calculate value for reference point

```csharp
public bool UseCalculateValue { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_GearTrain_Modification_ZPoint"></a> ZPoint

Gets or sets the z point.

```csharp
public GearPairLeftRightValue ZPoint { get; set; }
```

#### Property Value

 [GearPairLeftRightValue](VM.Managed.DAFUL.GearTrain.GearPairLeftRightValue.md)

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_Modification_InitChild_System_Int32_"></a> InitChild\(int\)

Initializes the child.

```csharp
public override void InitChild(int nNum)
```

#### Parameters

`nNum` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The n number.

### <a id="VM_Managed_DAFUL_GearTrain_Modification_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

