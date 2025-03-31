# Class Modification

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

### Modification\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Modification" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Modification()
```

## Properties

### APoint

Gets or sets a point.

```csharp
public GearPairLeftRightValue APoint { get; set; }
```

#### Property Value

 [GearPairLeftRightValue](VM.Managed.DAFUL.GearTrain.GearPairLeftRightValue.md)

### BPoint

Gets or sets the b point.

```csharp
public GearPairLeftRightValue BPoint { get; set; }
```

#### Property Value

 [GearPairLeftRightValue](VM.Managed.DAFUL.GearTrain.GearPairLeftRightValue.md)

### FirstEndReliefLength

Gets or sets the first end relief length.

```csharp
public GearPairValue FirstEndReliefLength { get; set; }
```

#### Property Value

 [GearPairValue](VM.Managed.DAFUL.GearTrain.GearPairValue.md)

### LeadCrown

Gets or sets the lead crown.

```csharp
public GearPairLeftRightValue LeadCrown { get; set; }
```

#### Property Value

 [GearPairLeftRightValue](VM.Managed.DAFUL.GearTrain.GearPairLeftRightValue.md)

### LeadRelief

Gets or sets the lead relief.

```csharp
public GearPairLeftRightValue LeadRelief { get; set; }
```

#### Property Value

 [GearPairLeftRightValue](VM.Managed.DAFUL.GearTrain.GearPairLeftRightValue.md)

### LeadSlope

Gets or sets the lead slope.

```csharp
public GearPairLeftRightValue LeadSlope { get; set; }
```

#### Property Value

 [GearPairLeftRightValue](VM.Managed.DAFUL.GearTrain.GearPairLeftRightValue.md)

### ProfileCrown

Gets or sets the profile crown.

```csharp
public GearPairLeftRightValue ProfileCrown { get; set; }
```

#### Property Value

 [GearPairLeftRightValue](VM.Managed.DAFUL.GearTrain.GearPairLeftRightValue.md)

### ProfileSlope

Gets or sets the profile slope.

```csharp
public GearPairLeftRightValue ProfileSlope { get; set; }
```

#### Property Value

 [GearPairLeftRightValue](VM.Managed.DAFUL.GearTrain.GearPairLeftRightValue.md)

### RootRadius

Gets or sets the modification end diameter at root.

```csharp
public GearPairValue RootRadius { get; set; }
```

#### Property Value

 [GearPairValue](VM.Managed.DAFUL.GearTrain.GearPairValue.md)

### SecondEndReliefLength

Gets or sets the second end relief length.

```csharp
public GearPairValue SecondEndReliefLength { get; set; }
```

#### Property Value

 [GearPairValue](VM.Managed.DAFUL.GearTrain.GearPairValue.md)

### TipRadius

Gets or sets the modification end diameter at tip.

```csharp
public GearPairValue TipRadius { get; set; }
```

#### Property Value

 [GearPairValue](VM.Managed.DAFUL.GearTrain.GearPairValue.md)

### TipRelief

Gets or sets the tip relief.

```csharp
public GearPairLeftRightValue TipRelief { get; set; }
```

#### Property Value

 [GearPairLeftRightValue](VM.Managed.DAFUL.GearTrain.GearPairLeftRightValue.md)

### Twist

Gets or sets the twist.

```csharp
public GearPairLeftRightValue Twist { get; set; }
```

#### Property Value

 [GearPairLeftRightValue](VM.Managed.DAFUL.GearTrain.GearPairLeftRightValue.md)

### UseCalculateValue

Gets or sets a flag of calculate value for reference point

```csharp
public bool UseCalculateValue { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ZPoint

Gets or sets the z point.

```csharp
public GearPairLeftRightValue ZPoint { get; set; }
```

#### Property Value

 [GearPairLeftRightValue](VM.Managed.DAFUL.GearTrain.GearPairLeftRightValue.md)

## Methods

### InitChild\(int\)

Initializes the child.

```csharp
public override void InitChild(int nNum)
```

#### Parameters

`nNum` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The n number.

### OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.


