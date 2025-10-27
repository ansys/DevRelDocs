# Class PropertyRVReducer
<a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer"></a>

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Property of RV Reducer

```csharp
public class PropertyRVReducer : Property, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, ILinkContainer, IOwned, IHasID
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
ObjectBase ← 
Object<PropertyEventCore\> ← 
ContainerObject<PropertyEventCore\> ← 
[Property](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Property.cs) ← 
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
[IHistoryObjectSerializable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/Interfaces.cs), 
IAttributeContainer, 
IContainer, 
ILinkContainer, 
IOwned, 
IHasID

#### Inherited Members

[Property.Initialize\(Unit.ConvertFactor\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Property.cs), 
[Property.PropertyRequestUpdate\(object, LinkEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Property.cs), 
[Property.OnUpdatePropertyImpl\(Property, LinkEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Property.cs), 
[Property.GetUnnamedObjectName\(object\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Property.cs), 
[Property.FindLocal\(string\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Property.cs), 
[Property.Draw\(Canvas, TMatrix, TMatrix, bool\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Property.cs), 
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
[LinkableBase.OnDeserialization\(object\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs), 
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

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer__ctor"></a> PropertyRVReducer\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.PropertyRVReducer" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PropertyRVReducer()
```

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_BearingBodies"></a> BearingBodies

Gets or sets the bearing bodies.

```csharp
public SolidBody[] BearingBodies { get; set; }
```

#### Property Value

 [SolidBody](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Body.cs)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_CenterOfPinset"></a> CenterOfPinset

Gets or sets the center of pinset.

```csharp
public PointBase CenterOfPinset { get; set; }
```

#### Property Value

 PointBase

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_ExtraBearingInformationList"></a> ExtraBearingInformationList

Gets or sets the extra bearing information list.

```csharp
public PropertyRVReducer.BearingInfo[] ExtraBearingInformationList { get; set; }
```

#### Property Value

 [PropertyRVReducer](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.md).[BearingInfo](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.BearingInfo.md)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_FrontAngularContactBallBearing"></a> FrontAngularContactBallBearing

Gets or sets the front angular contact ball bearing.

```csharp
public IBearing FrontAngularContactBallBearing { get; set; }
```

#### Property Value

 [IBearing](VM.Managed.DAFUL.GearTrain.IBearing.md)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_FrontAngularContactBallBearingInformation"></a> FrontAngularContactBallBearingInformation

Gets or sets the front angular contact ball bearing information.

```csharp
public PropertyRVReducer.BearingInfo FrontAngularContactBallBearingInformation { get; set; }
```

#### Property Value

 [PropertyRVReducer](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.md).[BearingInfo](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.BearingInfo.md)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_FrontNeedleRollerBearingInformation"></a> FrontNeedleRollerBearingInformation

Gets or sets the front needle roller bearing information.

```csharp
public PropertyRVReducer.BearingInfo FrontNeedleRollerBearingInformation { get; set; }
```

#### Property Value

 [PropertyRVReducer](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.md).[BearingInfo](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.BearingInfo.md)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_FrontTaperedRollerBearingInformation"></a> FrontTaperedRollerBearingInformation

Gets or sets the front tapered roller bearing information.

```csharp
public PropertyRVReducer.BearingInfo FrontTaperedRollerBearingInformation { get; set; }
```

#### Property Value

 [PropertyRVReducer](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.md).[BearingInfo](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.BearingInfo.md)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_GearSetCycloidPinList"></a> GearSetCycloidPinList

Gets or sets the cycloid pin gearset list.

```csharp
public GearSetCycloidPin[] GearSetCycloidPinList { get; set; }
```

#### Property Value

 [GearSetCycloidPin](VM.Managed.DAFUL.GearTrain.GearSetCycloidPin.md)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_GeneralContacts"></a> GeneralContacts

Gets or sets the general contacts.

```csharp
public GeneralContact[] GeneralContacts { get; set; }
```

#### Property Value

 [GeneralContact](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCt/GeneralContact.cs)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_NeedleRollerBearingList"></a> NeedleRollerBearingList

Gets or sets the needle roller bearing list.

```csharp
public IBearing[] NeedleRollerBearingList { get; set; }
```

#### Property Value

 [IBearing](VM.Managed.DAFUL.GearTrain.IBearing.md)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_NumberOfCrankShaft"></a> NumberOfCrankShaft

Gets the number of crank shaft.

```csharp
public int NumberOfCrankShaft { get; }
```

#### Property Value

 int

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_NumberOfCycloidDisc"></a> NumberOfCycloidDisc

Gets the number of cycloid disc.

```csharp
public int NumberOfCycloidDisc { get; }
```

#### Property Value

 int

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_PlanetaryGearSet"></a> PlanetaryGearSet

Gets or sets the planetary gearSet.

```csharp
public IGearSet PlanetaryGearSet { get; set; }
```

#### Property Value

 [IGearSet](VM.Managed.DAFUL.GearTrain.IGearSet.md)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_RacewayInfoForAssemblyList"></a> RacewayInfoForAssemblyList

Gets or sets the raceway information list for assmbly.

```csharp
public PropertyRVReducer.RacewayInfoForAssembly[] RacewayInfoForAssemblyList { get; set; }
```

#### Property Value

 [PropertyRVReducer](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.md).[RacewayInfoForAssembly](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.RacewayInfoForAssembly.md)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_RearAngularContactBallBearing"></a> RearAngularContactBallBearing

Gets or sets the rear angular contact ball bearing.

```csharp
public IBearing RearAngularContactBallBearing { get; set; }
```

#### Property Value

 [IBearing](VM.Managed.DAFUL.GearTrain.IBearing.md)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_RearAngularContactBallBearingInformation"></a> RearAngularContactBallBearingInformation

Gets or sets the rear angular contact ball bearing information.

```csharp
public PropertyRVReducer.BearingInfo RearAngularContactBallBearingInformation { get; set; }
```

#### Property Value

 [PropertyRVReducer](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.md).[BearingInfo](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.BearingInfo.md)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_RearNeedleRollerBearingInformation"></a> RearNeedleRollerBearingInformation

Gets or sets the rear needle roller bearing information.

```csharp
public PropertyRVReducer.BearingInfo RearNeedleRollerBearingInformation { get; set; }
```

#### Property Value

 [PropertyRVReducer](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.md).[BearingInfo](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.BearingInfo.md)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_RearTaperedRollerBearingInformation"></a> RearTaperedRollerBearingInformation

Gets or sets the rear tapered roller bearing information.

```csharp
public PropertyRVReducer.BearingInfo RearTaperedRollerBearingInformation { get; set; }
```

#### Property Value

 [PropertyRVReducer](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.md).[BearingInfo](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.BearingInfo.md)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_ReferencePosition"></a> ReferencePosition

Gets or sets the reference position.

```csharp
public PointBase ReferencePosition { get; set; }
```

#### Property Value

 PointBase

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_RotateAxis"></a> RotateAxis

Gets or sets the rotate axis.

```csharp
public DirectionBase RotateAxis { get; set; }
```

#### Property Value

 DirectionBase

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_SectionInformationList"></a> SectionInformationList

Gets or sets the section information list.

```csharp
public PropertyRVReducer.CrankShaftSectionInfo[] SectionInformationList { get; set; }
```

#### Property Value

 [PropertyRVReducer](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.md).[CrankShaftSectionInfo](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.CrankShaftSectionInfo.md)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_SelectedNeedleRollerBearing"></a> SelectedNeedleRollerBearing

Gets or sets the selected needle roller bearing.

```csharp
public IBearing SelectedNeedleRollerBearing { get; set; }
```

#### Property Value

 [IBearing](VM.Managed.DAFUL.GearTrain.IBearing.md)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_SelectedTaperedRollerBearing"></a> SelectedTaperedRollerBearing

Gets or sets the selected tapered roller bearing.

```csharp
public IBearing SelectedTaperedRollerBearing { get; set; }
```

#### Property Value

 [IBearing](VM.Managed.DAFUL.GearTrain.IBearing.md)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_SetFaces"></a> SetFaces

Gets or sets the setfaces.

```csharp
public SetFace[] SetFaces { get; set; }
```

#### Property Value

 [SetFace](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SetFace.cs)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_ShaftSetForSun"></a> ShaftSetForSun

Gets or sets the shaft set for sun.

```csharp
public IShaftSet ShaftSetForSun { get; set; }
```

#### Property Value

 [IShaftSet](VM.Managed.DAFUL.GearTrain.IShaftSet.md)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_ShaftsetList"></a> ShaftsetList

Gets or sets the shaftset list.

```csharp
public IShaftSet[] ShaftsetList { get; set; }
```

#### Property Value

 [IShaftSet](VM.Managed.DAFUL.GearTrain.IShaftSet.md)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_SynchronizeBearing"></a> SynchronizeBearing

Gets or sets the synchronize crank shaft flag

```csharp
public bool SynchronizeBearing { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_SynchronizeCrankShaft"></a> SynchronizeCrankShaft

Gets or sets the synchronize crank shaft flag

```csharp
public bool SynchronizeCrankShaft { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_TaperedRollerBearingList"></a> TaperedRollerBearingList

Gets or sets the tapered roller bearing list.

```csharp
public IBearing[] TaperedRollerBearingList { get; set; }
```

#### Property Value

 [IBearing](VM.Managed.DAFUL.GearTrain.IBearing.md)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer__FrontAngularContactBallBearing"></a> \_FrontAngularContactBallBearing

Gets or sets the front angular contact ball bearing.

```csharp
public Linker<IBearing> _FrontAngularContactBallBearing { get; set; }
```

#### Property Value

 Linker<[IBearing](VM.Managed.DAFUL.GearTrain.IBearing.md)\>

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer__NeedleRollerBearingList"></a> \_NeedleRollerBearingList

Gets or sets the needle roller bearing list.

```csharp
public Linker<IBearing>[] _NeedleRollerBearingList { get; set; }
```

#### Property Value

 Linker<[IBearing](VM.Managed.DAFUL.GearTrain.IBearing.md)\>\[\]

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer__PlanetaryGearSet"></a> \_PlanetaryGearSet

Gets or sets the planetary gearSet.

```csharp
public Linker<IGearSet> _PlanetaryGearSet { get; set; }
```

#### Property Value

 Linker<[IGearSet](VM.Managed.DAFUL.GearTrain.IGearSet.md)\>

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer__RearAngularContactBallBearing"></a> \_RearAngularContactBallBearing

Gets or sets the rear angular contact ball bearing.

```csharp
public Linker<IBearing> _RearAngularContactBallBearing { get; set; }
```

#### Property Value

 Linker<[IBearing](VM.Managed.DAFUL.GearTrain.IBearing.md)\>

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer__ShaftSetForSun"></a> \_ShaftSetForSun

Gets or sets the shaft set for sun.

```csharp
public Linker<IShaftSet> _ShaftSetForSun { get; set; }
```

#### Property Value

 Linker<[IShaftSet](VM.Managed.DAFUL.GearTrain.IShaftSet.md)\>

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer__ShaftsetList"></a> \_ShaftsetList

Gets or sets the shaftset list.

```csharp
public Linker<IShaftSet>[] _ShaftsetList { get; set; }
```

#### Property Value

 Linker<[IShaftSet](VM.Managed.DAFUL.GearTrain.IShaftSet.md)\>\[\]

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer__TaperedRollerBearingList"></a> \_TaperedRollerBearingList

Gets or sets the tapered roller bearing list.

```csharp
public Linker<IBearing>[] _TaperedRollerBearingList { get; set; }
```

#### Property Value

 Linker<[IBearing](VM.Managed.DAFUL.GearTrain.IBearing.md)\>\[\]

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_AddBearingBody_VM_Managed_DAFUL_SolidBody_"></a> AddBearingBody\(SolidBody\)

Add bearing body.

```csharp
public void AddBearingBody(SolidBody solidBody)
```

#### Parameters

`solidBody` [SolidBody](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Body.cs)

The solid body

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_AddCrankShaft_VM_Managed_DAFUL_GearTrain_IShaftSet_"></a> AddCrankShaft\(IShaftSet\)

Add crank shaft

```csharp
public void AddCrankShaft(IShaftSet shaftSet)
```

#### Parameters

`shaftSet` [IShaftSet](VM.Managed.DAFUL.GearTrain.IShaftSet.md)

The shaft set

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_AddFaceset_VM_Managed_DAFUL_SetFace_"></a> AddFaceset\(SetFace\)

Add faceset.

```csharp
public void AddFaceset(SetFace setFace)
```

#### Parameters

`setFace` [SetFace](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SetFace.cs)

The faceset

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_AddGeneralContact_VM_Managed_DAFUL_Contact_GeneralContact_"></a> AddGeneralContact\(GeneralContact\)

Add general contact.

```csharp
public void AddGeneralContact(GeneralContact generalContact)
```

#### Parameters

`generalContact` [GeneralContact](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCt/GeneralContact.cs)

The general contact

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_AddNeedleRollerBearing_VM_Managed_DAFUL_GearTrain_PropertyBearing_enBearingType_VM_Managed_DAFUL_GearTrain_IBearing_"></a> AddNeedleRollerBearing\(enBearingType, IBearing\)

Add needle roller bearing

```csharp
public void AddNeedleRollerBearing(PropertyBearing.enBearingType bearingType, IBearing bearing)
```

#### Parameters

`bearingType` [PropertyBearing](VM.Managed.DAFUL.GearTrain.PropertyBearing.md).[enBearingType](VM.Managed.DAFUL.GearTrain.PropertyBearing.enBearingType.md)

The bearing type

`bearing` [IBearing](VM.Managed.DAFUL.GearTrain.IBearing.md)

The bearing

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_AddRacewayInfoForAssembly_VM_Managed_DAFUL_GearTrain_PropertyRVReducer_RacewayInfoForAssembly_"></a> AddRacewayInfoForAssembly\(RacewayInfoForAssembly\)

Add raceway Info for assembly.

```csharp
public void AddRacewayInfoForAssembly(PropertyRVReducer.RacewayInfoForAssembly racewayInfoForAssembly)
```

#### Parameters

`racewayInfoForAssembly` [PropertyRVReducer](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.md).[RacewayInfoForAssembly](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.RacewayInfoForAssembly.md)

The raceway Info for assembly

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_ClearBearingBody"></a> ClearBearingBody\(\)

Clear bearing body

```csharp
public void ClearBearingBody()
```

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_ContainsBearingBody_VM_Managed_DAFUL_SolidBody_"></a> ContainsBearingBody\(SolidBody\)

Contains bearing body

```csharp
public bool ContainsBearingBody(SolidBody solidBody)
```

#### Parameters

`solidBody` [SolidBody](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Body.cs)

The solidBody

#### Returns

 bool

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_DefaultCrankShaftSectionInfo_System_Int32_"></a> DefaultCrankShaftSectionInfo\(int\)

Gets the default crank shaft section information

```csharp
public PropertyRVReducer.CrankShaftSectionInfo[] DefaultCrankShaftSectionInfo(int nSection)
```

#### Parameters

`nSection` int

The No. section

#### Returns

 [PropertyRVReducer](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.md).[CrankShaftSectionInfo](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.CrankShaftSectionInfo.md)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_LinkRequestDestroying_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestDestroying\(object, LinkEventArgs\)

Links the request destroying.

```csharp
protected override void LinkRequestDestroying(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` object

The object notifier.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_RemoveAtForBearing_System_Int32_"></a> RemoveAtForBearing\(int\)

RemoveAt for bearing

```csharp
public void RemoveAtForBearing(int nIndex)
```

#### Parameters

`nIndex` int

The index

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_RemoveCrankShaft_System_Int32_"></a> RemoveCrankShaft\(int\)

Remove crank shaft

```csharp
public void RemoveCrankShaft(int nIndex)
```

#### Parameters

`nIndex` int

The shaft set index

### <a id="VM_Managed_DAFUL_GearTrain_PropertyRVReducer_RemoveRacewayInfoForAssembly_VM_Managed_DAFUL_GearTrain_PropertyRVReducer_RacewayInfoForAssembly_"></a> RemoveRacewayInfoForAssembly\(RacewayInfoForAssembly\)

Remove raceway Info for assembly.

```csharp
public void RemoveRacewayInfoForAssembly(PropertyRVReducer.RacewayInfoForAssembly racewayInfoForAssembly)
```

#### Parameters

`racewayInfoForAssembly` [PropertyRVReducer](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.md).[RacewayInfoForAssembly](VM.Managed.DAFUL.GearTrain.PropertyRVReducer.RacewayInfoForAssembly.md)

The raceway Info for assembly

