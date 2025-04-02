#  Class HDBGeometryInfo

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Hydro Dynamic Bearing Geometry Information

```csharp
public class HDBGeometryInfo : GeometryInfoBase, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, ISubEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, INamed, INavigatorItem
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
SubEntity ← 
[GeometryInfoBase](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.md) ← 
[HDBGeometryInfo](VM.Managed.DAFUL.GearTrain.HDBGeometryInfo.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
ILinkContainerEvent, 
IVerifiable, 
IHistoryObjectSerializable, 
IAttributeContainer, 
ISubEntity, 
IEntityBase, 
IObjectBase, 
IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider, 
IHasKeyObject, 
IHasName, 
IEnabled, 
IHasComment, 
INamed, 
INavigatorItem

#### Inherited Members

[GeometryInfoBase.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GeometryInfoBase\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[GeometryInfoBase.GeometryDepth](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GeometryInfoBase\_GeometryDepth), 
[GeometryInfoBase.ClearanceInformation](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GeometryInfoBase\_ClearanceInformation), 
[GeometryInfoBase.TypeOfGeometry](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GeometryInfoBase\_TypeOfGeometry), 
SubEntity.Initialize\(Unit.ConvertFactor\), 
SubEntity.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\), 
SubEntity.FixUp\(ObjectBase\), 
SubEntity.WriteTemplateImpl\(XmlWriter\), 
SubEntity.ReadTemplateImpl\(XmlReader\), 
SubEntity.Name, 
SubEntity.FullName, 
SubEntity.NonSymmetricName, 
SubEntity.DisplayName, 
SubEntity.IsEnabled, 
SubEntity.Comment, 
Object<ObjectEventCore\>.GetKey\(\), 
Object<ObjectEventCore\>.Initialize\(Unit.ConvertFactor\), 
Object<ObjectEventCore\>.SetIconColor\(Canvas\), 
Object<ObjectEventCore\>.OnDeserialization\(object\), 
Object<ObjectEventCore\>.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
Object<ObjectEventCore\>.RollbackEvent\(\), 
Object<ObjectEventCore\>.OnDeserializedCore\(object\), 
Object<ObjectEventCore\>.Key, 
Object<ObjectEventCore\>.UntypedEventCore, 
Object<ObjectEventCore\>.EventCore, 
Object<ObjectEventCore\>.Attributes, 
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

### <a id="VM_Managed_DAFUL_GearTrain_HDBGeometryInfo__ctor"></a> HDBGeometryInfo\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.HDBGeometryInfo" data-throw-if-not-resolved="false"></xref> class.

```csharp
public HDBGeometryInfo()
```

### <a id="VM_Managed_DAFUL_GearTrain_HDBGeometryInfo__ctor_System_String_VM_Managed_DAFUL_GearTrain_HDBGeometryInfo_HDBearingType_"></a> HDBGeometryInfo\(string, HDBearingType\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.HDBGeometryInfo" data-throw-if-not-resolved="false"></xref> class.

```csharp
public HDBGeometryInfo(string strName, HDBGeometryInfo.HDBearingType type)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the sub entity.

`type` [HDBGeometryInfo](VM.Managed.DAFUL.GearTrain.HDBGeometryInfo.md).[HDBearingType](VM.Managed.DAFUL.GearTrain.HDBGeometryInfo.HDBearingType.md)

v

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_HDBGeometryInfo_GeometryDepth"></a> GeometryDepth

Gets the geometry depth.

```csharp
public override double GeometryDepth { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_HDBGeometryInfo_GeometryHeight"></a> GeometryHeight

Gets the geometry height.

```csharp
public double GeometryHeight { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_HDBGeometryInfo_GeometryStartDepth"></a> GeometryStartDepth

Gets the geometry start depth.

```csharp
public double GeometryStartDepth { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_HDBGeometryInfo_Segments"></a> Segments

Gets or sets the segment info.

```csharp
public List<HDBGeometrySegment> Segments { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[HDBGeometrySegment](VM.Managed.DAFUL.GearTrain.HDBGeometrySegment.md)\>

### <a id="VM_Managed_DAFUL_GearTrain_HDBGeometryInfo_Type"></a> Type

Gets or sets the type.
Use SetType() when this instance sets for undo/redo

```csharp
public HDBGeometryInfo.HDBearingType Type { get; set; }
```

#### Property Value

 [HDBGeometryInfo](VM.Managed.DAFUL.GearTrain.HDBGeometryInfo.md).[HDBearingType](VM.Managed.DAFUL.GearTrain.HDBGeometryInfo.HDBearingType.md)

### <a id="VM_Managed_DAFUL_GearTrain_HDBGeometryInfo_TypeOfGeometry"></a> TypeOfGeometry

Gets the type of geometry.

```csharp
public override GeometryInfoBase.GeometryType TypeOfGeometry { get; }
```

#### Property Value

 [GeometryInfoBase](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.md).[GeometryType](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.GeometryType.md)

