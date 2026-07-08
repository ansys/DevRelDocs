# Class PropertyRVReducer

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Property of RV Reducer

```csharp
public class PropertyRVReducer : Property, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, ILinkContainer, IOwned, IHasID
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<PropertyEventCore\> ← 
ContainerObject<PropertyEventCore\> ← 
Property ← 
[PropertyRVReducer](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
IObjectBase, 
IObject, 
IEventProvider, 
IHasKeyObject, 
ILinkContainerEvent, 
IVerifiable, 
IHistoryObjectSerializable, 
IAttributeContainer, 
IContainer, 
ILinkContainer, 
IOwned, 
IHasID

#### Inherited Members

Property.Initialize\(Unit.ConvertFactor\), 
Property.PropertyRequestUpdate\(object, LinkEventArgs\), 
Property.OnUpdatePropertyImpl\(Property, LinkEventArgs\), 
Property.GetUnnamedObjectName\(object\), 
Property.FindLocal\(string\), 
Property.Draw\(Canvas, TMatrix, TMatrix, bool\), 
ContainerObject<PropertyEventCore\>.Find\(string\), 
ContainerObject<PropertyEventCore\>.FindLocal\(string\), 
ContainerObject<PropertyEventCore\>.GetUnnamedObjectName\(object\), 
ContainerObject<PropertyEventCore\>.GetNewEntityName\(string\), 
ContainerObject<PropertyEventCore\>.GetNewEntityName\(string, bool, int\), 
ContainerObject<PropertyEventCore\>.GetNewEntityName\(string, bool, int, int\), 
Object<PropertyEventCore\>.GetKey\(\), 
Object<PropertyEventCore\>.Initialize\(Unit.ConvertFactor\), 
Object<PropertyEventCore\>.SetIconColor\(Canvas\), 
Object<PropertyEventCore\>.OnDeserialization\(object\), 
Object<PropertyEventCore\>.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
Object<PropertyEventCore\>.RollbackEvent\(\), 
Object<PropertyEventCore\>.OnDeserializedCore\(object\), 
Object<PropertyEventCore\>.Key, 
Object<PropertyEventCore\>.UntypedEventCore, 
Object<PropertyEventCore\>.EventCore, 
Object<PropertyEventCore\>.Attributes, 
ObjectBase.ReplaceEventCore\(ObjectEventCore\), 
ObjectBase.SetModifiedCore\(ModifiedResult.ModifiedType\), 
ObjectBase.AddPostDeserialize\(StreamingContext\), 
ObjectBase.LinkAddedToDocumentCore\(IOwned, bool\), 
ObjectBase.SetModified\(ModifiedResult.ModifiedType\), 
ObjectBase.SetModified\(\), 
ObjectBase.SetModified\(ModifiedResult.ModifiedType, IDocument\), 
ObjectBase.DestroyObject\(object, LinkEventArgs\), 
ObjectBase.DestroyObject\(DestroyEventArgs\), 
ObjectBase.DestroyObject\(\), 
ObjectBase.Initialize\(Unit.ConvertFactor\), 
ObjectBase.FixUp\(ObjectBase\), 
ObjectBase.DoWorkAfterUpdateContents\(\), 
ObjectBase.SetOldNameWithNewEntity\(ObjectBase, ObjectBase\), 
ObjectBase.SetIconColor\(Canvas\), 
ObjectBase.RemoveFromCreatedList\(\), 
ObjectBase.PostAddToDocument\(\), 
ObjectBase.PostRemoveFromDocument\(Document\), 
ObjectBase.GetArgumentList\(LinkedList<ObjectBase\>\), 
ObjectBase.ResetInvalidEntity\(\), 
ObjectBase.OnDeserialization\(object\), 
ObjectBase.IsSerializableEvent\(Delegate\), 
ObjectBase.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
ObjectBase.CheckAndUpdateLink\(HashSet<ObjectBase\>\), 
ObjectBase.Verify\(VerifiedResult\), 
ObjectBase.ConnectProxy\(\), 
ObjectBase.RollbackEvent\(\), 
ObjectBase.LinkRequestUpdating\(object, LinkEventArgs\), 
ObjectBase.LinkRequestUpdate\(object, LinkEventArgs\), 
ObjectBase.LinkRequestDestroying\(object, LinkEventArgs\), 
ObjectBase.LinkRequestDestroy\(object, LinkEventArgs\), 
ObjectBase.LinkAddedToDocument\(object, AddToDocEventArgs\), 
ObjectBase.LinkRemovedFromDocument\(object, RemoveFromDocEventArgs\), 
ObjectBase.DisposeManagedResources\(\), 
ObjectBase.GetDestroyEventExtraData\(\), 
ObjectBase.OnLinkReserved\(ILink, object, EventArgs\), 
ObjectBase.CreateEntityWhenUpdateContents\(Action\), 
ObjectBase.GetObjectByKey\(UIntPtr\), 
ObjectBase.FindObjectOnXmlDeserialize\(string\), 
ObjectBase.UpdateContents\(XmlReader, ObjectBase, string\), 
ObjectBase.UpdateContents\(XmlReader, ObjectBase\), 
ObjectBase.UpdateContents\(string, string\), 
ObjectBase.UpdateContents\(string\), 
ObjectBase.SetFlagWhenXMLFile\(string, bool\), 
ObjectBase.IsEqualArray<T\>\(T\[\], T\[\]\), 
ObjectBase.IsEqualList\(List<double\>, List<double\>\), 
ObjectBase.SetContainer\(IOwned, bool\), 
ObjectBase.GetTargetListForUpdate\(\), 
ObjectBase.SkipUpdateObjectImpl\(\), 
ObjectBase.raise\_OnUpdating\(object, LinkEventArgs\), 
ObjectBase.raise\_OnUpdate\(object, LinkEventArgs\), 
ObjectBase.raise\_OnDestroying\(object, LinkEventArgs\), 
ObjectBase.raise\_OnDestroy\(object, LinkEventArgs\), 
ObjectBase.raise\_Destroying\(object, Identifier\), 
ObjectBase.raise\_OnAdded\(object, AddToDocEventArgs\), 
ObjectBase.raise\_OnRemoved\(object, RemoveFromDocEventArgs\), 
ObjectBase.raise\_OnContentsUpdated\(object, EventArgs\), 
ObjectBase.Dispose\(bool\), 
ObjectBase.SkipModified, 
ObjectBase.ClearChildInfoBeforeDeserialize, 
ObjectBase.KeyImpl, 
ObjectBase.ID, 
ObjectBase.TopologyEntityTypeName, 
ObjectBase.ObjectStateForCircularError, 
ObjectBase.ObjectState, 
ObjectBase.IsChildExternable, 
ObjectBase.IsExternable, 
ObjectBase.Container, 
ObjectBase.Owner, 
ObjectBase.Document, 
ObjectBase.UntypedEventCore, 
ObjectBase.KernelKey, 
ObjectBase.Key, 
ObjectBase.OnContentsUpdated, 
ObjectBase.OnRemoved, 
ObjectBase.OnAdded, 
ObjectBase.Destroying, 
ObjectBase.OnDestroy, 
ObjectBase.OnDestroying, 
ObjectBase.OnUpdate, 
ObjectBase.OnUpdating, 
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

### PropertyRVReducer\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.PropertyRVReducer" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PropertyRVReducer()
```

## Properties

### BearingBodies

Gets or sets the bearing bodies.

```csharp
public SolidBody[] BearingBodies { get; set; }
```

#### Property Value

 SolidBody\[\]

### CenterOfPinset

Gets or sets the center of pinset.

```csharp
public PointBase CenterOfPinset { get; set; }
```

#### Property Value

 PointBase

### ExtraBearingInformationList

Gets or sets the extra bearing information list.

```csharp
public PropertyRVReducer.BearingInfo[] ExtraBearingInformationList { get; set; }
```

#### Property Value

 [PropertyRVReducer](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.md).[BearingInfo](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.BearingInfo.md)\[\]

### FrontAngularContactBallBearing

Gets or sets the front angular contact ball bearing.

```csharp
public IBearing FrontAngularContactBallBearing { get; set; }
```

#### Property Value

 [IBearing](VM.Managed.DAFUL.GearTrain.IBearing.md)

### FrontAngularContactBallBearingInformation

Gets or sets the front angular contact ball bearing information.

```csharp
public PropertyRVReducer.BearingInfo FrontAngularContactBallBearingInformation { get; set; }
```

#### Property Value

 [PropertyRVReducer](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.md).[BearingInfo](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.BearingInfo.md)

### FrontNeedleRollerBearingInformation

Gets or sets the front needle roller bearing information.

```csharp
public PropertyRVReducer.BearingInfo FrontNeedleRollerBearingInformation { get; set; }
```

#### Property Value

 [PropertyRVReducer](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.md).[BearingInfo](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.BearingInfo.md)

### FrontTaperedRollerBearingInformation

Gets or sets the front tapered roller bearing information.

```csharp
public PropertyRVReducer.BearingInfo FrontTaperedRollerBearingInformation { get; set; }
```

#### Property Value

 [PropertyRVReducer](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.md).[BearingInfo](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.BearingInfo.md)

### GearSetCycloidPinList

Gets or sets the cycloid pin gearset list.

```csharp
public GearSetCycloidPin[] GearSetCycloidPinList { get; set; }
```

#### Property Value

 [GearSetCycloidPin](VM.Managed.DAFUL.GearTrain.GearSetCycloidPin.md)\[\]

### GeneralContacts

Gets or sets the general contacts.

```csharp
public GeneralContact[] GeneralContacts { get; set; }
```

#### Property Value

 GeneralContact\[\]

### NeedleRollerBearingList

Gets or sets the needle roller bearing list.

```csharp
public IBearing[] NeedleRollerBearingList { get; set; }
```

#### Property Value

 [IBearing](VM.Managed.DAFUL.GearTrain.IBearing.md)\[\]

### NumberOfCrankShaft

Gets the number of crank shaft.

```csharp
public int NumberOfCrankShaft { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumberOfCycloidDisc

Gets the number of cycloid disc.

```csharp
public int NumberOfCycloidDisc { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PlanetaryGearSet

Gets or sets the planetary gearSet.

```csharp
public IGearSet PlanetaryGearSet { get; set; }
```

#### Property Value

 [IGearSet](VM.Managed.DAFUL.GearTrain.IGearSet.md)

### RacewayInfoForAssemblyList

Gets or sets the raceway information list for assmbly.

```csharp
public PropertyRVReducer.RacewayInfoForAssembly[] RacewayInfoForAssemblyList { get; set; }
```

#### Property Value

 [PropertyRVReducer](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.md).[RacewayInfoForAssembly](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.RacewayInfoForAssembly.md)\[\]

### RearAngularContactBallBearing

Gets or sets the rear angular contact ball bearing.

```csharp
public IBearing RearAngularContactBallBearing { get; set; }
```

#### Property Value

 [IBearing](VM.Managed.DAFUL.GearTrain.IBearing.md)

### RearAngularContactBallBearingInformation

Gets or sets the rear angular contact ball bearing information.

```csharp
public PropertyRVReducer.BearingInfo RearAngularContactBallBearingInformation { get; set; }
```

#### Property Value

 [PropertyRVReducer](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.md).[BearingInfo](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.BearingInfo.md)

### RearNeedleRollerBearingInformation

Gets or sets the rear needle roller bearing information.

```csharp
public PropertyRVReducer.BearingInfo RearNeedleRollerBearingInformation { get; set; }
```

#### Property Value

 [PropertyRVReducer](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.md).[BearingInfo](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.BearingInfo.md)

### RearTaperedRollerBearingInformation

Gets or sets the rear tapered roller bearing information.

```csharp
public PropertyRVReducer.BearingInfo RearTaperedRollerBearingInformation { get; set; }
```

#### Property Value

 [PropertyRVReducer](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.md).[BearingInfo](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.BearingInfo.md)

### ReferencePosition

Gets or sets the reference position.

```csharp
public PointBase ReferencePosition { get; set; }
```

#### Property Value

 PointBase

### RotateAxis

Gets or sets the rotate axis.

```csharp
public DirectionBase RotateAxis { get; set; }
```

#### Property Value

 DirectionBase

### SectionInformationList

Gets or sets the section information list.

```csharp
public PropertyRVReducer.CrankShaftSectionInfo[] SectionInformationList { get; set; }
```

#### Property Value

 [PropertyRVReducer](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.md).[CrankShaftSectionInfo](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.CrankShaftSectionInfo.md)\[\]

### SelectedNeedleRollerBearing

Gets or sets the selected needle roller bearing.

```csharp
public IBearing SelectedNeedleRollerBearing { get; set; }
```

#### Property Value

 [IBearing](VM.Managed.DAFUL.GearTrain.IBearing.md)

### SelectedTaperedRollerBearing

Gets or sets the selected tapered roller bearing.

```csharp
public IBearing SelectedTaperedRollerBearing { get; set; }
```

#### Property Value

 [IBearing](VM.Managed.DAFUL.GearTrain.IBearing.md)

### SetFaces

Gets or sets the setfaces.

```csharp
public SetFace[] SetFaces { get; set; }
```

#### Property Value

 SetFace\[\]

### ShaftSetForSun

Gets or sets the shaft set for sun.

```csharp
public IShaftSet ShaftSetForSun { get; set; }
```

#### Property Value

 [IShaftSet](VM.Managed.DAFUL.GearTrain.IShaftSet.md)

### ShaftsetList

Gets or sets the shaftset list.

```csharp
public IShaftSet[] ShaftsetList { get; set; }
```

#### Property Value

 [IShaftSet](VM.Managed.DAFUL.GearTrain.IShaftSet.md)\[\]

### SynchronizeBearing

Gets or sets the synchronize crank shaft flag

```csharp
public bool SynchronizeBearing { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SynchronizeCrankShaft

Gets or sets the synchronize crank shaft flag

```csharp
public bool SynchronizeCrankShaft { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TaperedRollerBearingList

Gets or sets the tapered roller bearing list.

```csharp
public IBearing[] TaperedRollerBearingList { get; set; }
```

#### Property Value

 [IBearing](VM.Managed.DAFUL.GearTrain.IBearing.md)\[\]

### \_FrontAngularContactBallBearing

Gets or sets the front angular contact ball bearing.

```csharp
public Linker<IBearing> _FrontAngularContactBallBearing { get; set; }
```

#### Property Value

 Linker<[IBearing](VM.Managed.DAFUL.GearTrain.IBearing.md)\>

### \_NeedleRollerBearingList

Gets or sets the needle roller bearing list.

```csharp
public Linker<IBearing>[] _NeedleRollerBearingList { get; set; }
```

#### Property Value

 Linker<[IBearing](VM.Managed.DAFUL.GearTrain.IBearing.md)\>\[\]

### \_PlanetaryGearSet

Gets or sets the planetary gearSet.

```csharp
public Linker<IGearSet> _PlanetaryGearSet { get; set; }
```

#### Property Value

 Linker<[IGearSet](VM.Managed.DAFUL.GearTrain.IGearSet.md)\>

### \_RearAngularContactBallBearing

Gets or sets the rear angular contact ball bearing.

```csharp
public Linker<IBearing> _RearAngularContactBallBearing { get; set; }
```

#### Property Value

 Linker<[IBearing](VM.Managed.DAFUL.GearTrain.IBearing.md)\>

### \_ShaftSetForSun

Gets or sets the shaft set for sun.

```csharp
public Linker<IShaftSet> _ShaftSetForSun { get; set; }
```

#### Property Value

 Linker<[IShaftSet](VM.Managed.DAFUL.GearTrain.IShaftSet.md)\>

### \_ShaftsetList

Gets or sets the shaftset list.

```csharp
public Linker<IShaftSet>[] _ShaftsetList { get; set; }
```

#### Property Value

 Linker<[IShaftSet](VM.Managed.DAFUL.GearTrain.IShaftSet.md)\>\[\]

### \_TaperedRollerBearingList

Gets or sets the tapered roller bearing list.

```csharp
public Linker<IBearing>[] _TaperedRollerBearingList { get; set; }
```

#### Property Value

 Linker<[IBearing](VM.Managed.DAFUL.GearTrain.IBearing.md)\>\[\]

## Methods

### AddBearingBody\(SolidBody\)

Add bearing body.

```csharp
public void AddBearingBody(SolidBody solidBody)
```

#### Parameters

`solidBody` SolidBody

The solid body

### AddCrankShaft\(IShaftSet\)

Add crank shaft

```csharp
public void AddCrankShaft(IShaftSet shaftSet)
```

#### Parameters

`shaftSet` [IShaftSet](VM.Managed.DAFUL.GearTrain.IShaftSet.md)

The shaft set

### AddFaceset\(SetFace\)

Add faceset.

```csharp
public void AddFaceset(SetFace setFace)
```

#### Parameters

`setFace` SetFace

The faceset

### AddGeneralContact\(GeneralContact\)

Add general contact.

```csharp
public void AddGeneralContact(GeneralContact generalContact)
```

#### Parameters

`generalContact` GeneralContact

The general contact

### AddNeedleRollerBearing\(enBearingType, IBearing\)

Add needle roller bearing

```csharp
public void AddNeedleRollerBearing(PropertyBearing.enBearingType bearingType, IBearing bearing)
```

#### Parameters

`bearingType` [PropertyBearing](VM.Managed.DAFUL.GearTrain.PropertyBearing.md).[enBearingType](VM.Managed.DAFUL.GearTrain.PropertyBearing.enBearingType.md)

The bearing type

`bearing` [IBearing](VM.Managed.DAFUL.GearTrain.IBearing.md)

The bearing

### AddRacewayInfoForAssembly\(RacewayInfoForAssembly\)

Add raceway Info for assembly.

```csharp
public void AddRacewayInfoForAssembly(PropertyRVReducer.RacewayInfoForAssembly racewayInfoForAssembly)
```

#### Parameters

`racewayInfoForAssembly` [PropertyRVReducer](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.md).[RacewayInfoForAssembly](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.RacewayInfoForAssembly.md)

The raceway Info for assembly

### ClearBearingBody\(\)

Clear bearing body

```csharp
public void ClearBearingBody()
```

### ContainsBearingBody\(SolidBody\)

Contains bearing body

```csharp
public bool ContainsBearingBody(SolidBody solidBody)
```

#### Parameters

`solidBody` SolidBody

The solidBody

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DefaultCrankShaftSectionInfo\(int\)

Gets the default crank shaft section information

```csharp
public PropertyRVReducer.CrankShaftSectionInfo[] DefaultCrankShaftSectionInfo(int nSection)
```

#### Parameters

`nSection` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The No. section

#### Returns

 [PropertyRVReducer](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.md).[CrankShaftSectionInfo](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.CrankShaftSectionInfo.md)\[\]

### Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### LinkRequestDestroying\(object, LinkEventArgs\)

Links the request destroying.

```csharp
protected override void LinkRequestDestroying(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object notifier.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### RemoveAtForBearing\(int\)

RemoveAt for bearing

```csharp
public void RemoveAtForBearing(int nIndex)
```

#### Parameters

`nIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The index

### RemoveCrankShaft\(int\)

Remove crank shaft

```csharp
public void RemoveCrankShaft(int nIndex)
```

#### Parameters

`nIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The shaft set index

### RemoveRacewayInfoForAssembly\(RacewayInfoForAssembly\)

Remove raceway Info for assembly.

```csharp
public void RemoveRacewayInfoForAssembly(PropertyRVReducer.RacewayInfoForAssembly racewayInfoForAssembly)
```

#### Parameters

`racewayInfoForAssembly` [PropertyRVReducer](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.md).[RacewayInfoForAssembly](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.RacewayInfoForAssembly.md)

The raceway Info for assembly


