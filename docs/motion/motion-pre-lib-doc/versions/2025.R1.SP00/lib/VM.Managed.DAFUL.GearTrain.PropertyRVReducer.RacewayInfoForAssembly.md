#  Class PropertyRVReducer.RacewayInfoForAssembly

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

raceway Info For Assembly

```csharp
public class PropertyRVReducer.RacewayInfoForAssembly : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[PropertyRVReducer.RacewayInfoForAssembly](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.RacewayInfoForAssembly.md)

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

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_RacewayInfoForAssembly__ctor"></a> RacewayInfoForAssembly\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.PropertyRVReducer.RacewayInfoForAssembly" data-throw-if-not-resolved="false"></xref> class.

```csharp
public RacewayInfoForAssembly()
```

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_RacewayInfoForAssembly__ctor_VM_Models_Pre_IOwned_"></a> RacewayInfoForAssembly\(IOwned\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.PropertyRVReducer.RacewayInfoForAssembly" data-throw-if-not-resolved="false"></xref> class.

```csharp
public RacewayInfoForAssembly(IOwned owner)
```

#### Parameters

`owner` IOwned

The owner.

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_RacewayInfoForAssembly_InnerParentBody"></a> InnerParentBody

Gets or sets the inner parent body.

```csharp
public IConnectable InnerParentBody { get; set; }
```

#### Property Value

 IConnectable

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_RacewayInfoForAssembly_InnerRacewayInfo"></a> InnerRacewayInfo

Gets or sets the inner raceway information.

```csharp
public RacewayGeometryInfo InnerRacewayInfo { get; set; }
```

#### Property Value

 [RacewayGeometryInfo](VM.Managed.DAFUL.GearTrain.RacewayGeometryInfo.md)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_RacewayInfoForAssembly_OuterParentBody"></a> OuterParentBody

Gets or sets the outer parent body.

```csharp
public IConnectable OuterParentBody { get; set; }
```

#### Property Value

 IConnectable

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_RacewayInfoForAssembly_OuterRacewayInfo"></a> OuterRacewayInfo

Gets or sets the outer raceway information.

```csharp
public RacewayGeometryInfo OuterRacewayInfo { get; set; }
```

#### Property Value

 [RacewayGeometryInfo](VM.Managed.DAFUL.GearTrain.RacewayGeometryInfo.md)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_RacewayInfoForAssembly__InnerParentBody"></a> \_InnerParentBody

Gets or sets the inner parent body.

```csharp
public Linker<IConnectable> _InnerParentBody { get; set; }
```

#### Property Value

 Linker<IConnectable\>

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_RacewayInfoForAssembly__OuterParentBody"></a> \_OuterParentBody

Gets or sets the outer parent body.

```csharp
public Linker<IConnectable> _OuterParentBody { get; set; }
```

#### Property Value

 Linker<IConnectable\>

