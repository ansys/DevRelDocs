#  Class PropertyRVReducer.BearingInfo

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Bearing Information class

```csharp
public class PropertyRVReducer.BearingInfo : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[PropertyRVReducer.BearingInfo](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.BearingInfo.md)

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

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_BearingInfo__ctor"></a> BearingInfo\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.PropertyRVReducer.BearingInfo" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BearingInfo()
```

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_BearingInfo_Direction"></a> Direction

Gets or sets the direction.

```csharp
public bool Direction { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_BearingInfo_InnerEquipType"></a> InnerEquipType

Gets or sets the inner equip type.

```csharp
public PropertyRVReducer.BearingInfo.EquipType InnerEquipType { get; set; }
```

#### Property Value

 [PropertyRVReducer](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.md).[BearingInfo](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.BearingInfo.md).[EquipType](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.BearingInfo.EquipType.md)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_BearingInfo_InnerRaceway"></a> InnerRaceway

Gets or sets the inner raceway.

```csharp
public IConnectable InnerRaceway { get; set; }
```

#### Property Value

 IConnectable

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_BearingInfo_Offset"></a> Offset

Gets or sets the offset.

```csharp
public ExpressionValueVariable Offset { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_BearingInfo_OuterEquipType"></a> OuterEquipType

Gets or sets the outer equip type.

```csharp
public PropertyRVReducer.BearingInfo.EquipType OuterEquipType { get; set; }
```

#### Property Value

 [PropertyRVReducer](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.md).[BearingInfo](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.BearingInfo.md).[EquipType](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.BearingInfo.EquipType.md)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_BearingInfo_OuterRaceway"></a> OuterRaceway

Gets or sets the outer raceway.

```csharp
public IConnectable OuterRaceway { get; set; }
```

#### Property Value

 IConnectable

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_BearingInfo__InnerRaceway"></a> \_InnerRaceway

Gets or sets the inner raceway.

```csharp
public Linker<IConnectable> _InnerRaceway { get; set; }
```

#### Property Value

 Linker<IConnectable\>

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_BearingInfo__OuterRaceway"></a> \_OuterRaceway

Gets or sets the outer raceway.

```csharp
public Linker<IConnectable> _OuterRaceway { get; set; }
```

#### Property Value

 Linker<IConnectable\>

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_BearingInfo_Initialize"></a> Initialize\(\)

Initialize

```csharp
public void Initialize()
```

