# Class Tool

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Reference Profile

```csharp
public class Tool : GearPropertyBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[GearPropertyBase](VM.Managed.DAFUL.GearTrain.GearPropertyBase.md) ← 
[Tool](VM.Managed.DAFUL.GearTrain.Tool.md)

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

### Tool\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Tool" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Tool()
```

## Properties

### AddendumInput

Gets or sets the addendum Input type.

```csharp
public Tool.AddendumInputType AddendumInput { get; set; }
```

#### Property Value

 [Tool](VM.Managed.DAFUL.GearTrain.Tool.md).[AddendumInputType](VM.Managed.DAFUL.GearTrain.Tool.AddendumInputType.md)

### DataBaseGearArray

Gets or sets the data base gear1.

```csharp
public Tool.ToolDataType[] DataBaseGearArray { get; set; }
```

#### Property Value

 [Tool](VM.Managed.DAFUL.GearTrain.Tool.md).[ToolDataType](VM.Managed.DAFUL.GearTrain.Tool.ToolDataType.md)\[\]

### DedendumInput

Gets or sets the dedendum Input type.

```csharp
public Tool.DedendumInputType DedendumInput { get; set; }
```

#### Property Value

 [Tool](VM.Managed.DAFUL.GearTrain.Tool.md).[DedendumInputType](VM.Managed.DAFUL.GearTrain.Tool.DedendumInputType.md)

### PairActualTipDiameter

Gets or sets the pair actual tip diameter.

```csharp
public GearPairValue PairActualTipDiameter { get; set; }
```

#### Property Value

 [GearPairValue](VM.Managed.DAFUL.GearTrain.GearPairValue.md)

### PairActualWholeDepth

Gets or sets the pair actual root diameter.

```csharp
public GearPairValue PairActualWholeDepth { get; set; }
```

#### Property Value

 [GearPairValue](VM.Managed.DAFUL.GearTrain.GearPairValue.md)

### PairAddendum

Gets or sets the pair addendum.

```csharp
public GearPairValue PairAddendum { get; set; }
```

#### Property Value

 [GearPairValue](VM.Managed.DAFUL.GearTrain.GearPairValue.md)

### PairAddendumCoefficient

Gets or sets the pair addendum coefficient.

```csharp
public GearPairValue PairAddendumCoefficient { get; set; }
```

#### Property Value

 [GearPairValue](VM.Managed.DAFUL.GearTrain.GearPairValue.md)

### PairDedendum

Gets or sets the pair dedendum.

```csharp
public GearPairValue PairDedendum { get; set; }
```

#### Property Value

 [GearPairValue](VM.Managed.DAFUL.GearTrain.GearPairValue.md)

### PairDedendumCoefficient

Gets or sets the pair dedendum coefficient.

```csharp
public GearPairValue PairDedendumCoefficient { get; set; }
```

#### Property Value

 [GearPairValue](VM.Managed.DAFUL.GearTrain.GearPairValue.md)

### PairModifyStartingPoint

Gets or sets the pair modify starting point.

```csharp
public GearPairValue PairModifyStartingPoint { get; set; }
```

#### Property Value

 [GearPairValue](VM.Managed.DAFUL.GearTrain.GearPairValue.md)

### PairProfileShiftCoefficient

Gets or sets the pair profile shift coefficient.

```csharp
public GearPairValue PairProfileShiftCoefficient { get; set; }
```

#### Property Value

 [GearPairValue](VM.Managed.DAFUL.GearTrain.GearPairValue.md)

### PairRootDiameter

Gets or sets the pair root diameter.

```csharp
public GearPairValue PairRootDiameter { get; set; }
```

#### Property Value

 [GearPairValue](VM.Managed.DAFUL.GearTrain.GearPairValue.md)

### PairRootRadiusCoefficient

Gets or sets the pair root radius coefficient.

```csharp
public GearPairValue PairRootRadiusCoefficient { get; set; }
```

#### Property Value

 [GearPairValue](VM.Managed.DAFUL.GearTrain.GearPairValue.md)

### PairToolTipRadius

Gets or sets the pair tool tip radius.

```csharp
public GearPairValue PairToolTipRadius { get; set; }
```

#### Property Value

 [GearPairValue](VM.Managed.DAFUL.GearTrain.GearPairValue.md)

### RootRadiusInput

Gets or sets the root radius Input type.

```csharp
public Tool.RootRadiusInputType RootRadiusInput { get; set; }
```

#### Property Value

 [Tool](VM.Managed.DAFUL.GearTrain.Tool.md).[RootRadiusInputType](VM.Managed.DAFUL.GearTrain.Tool.RootRadiusInputType.md)

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


