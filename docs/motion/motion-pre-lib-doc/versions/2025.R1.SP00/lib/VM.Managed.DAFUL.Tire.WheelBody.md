#  Class WheelBody

Namespace: [VM.Managed.DAFUL.Tire](VM.Managed.DAFUL.Tire.md)  
Assembly: VMDTire.dll  

This class is to represent the wheel body.

```csharp
public class WheelBody : WheelBodyBase, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup, IMarkerCreatable, IFacesetCreatable, ICurvesetCreatable, IConnectableNotReference, IReferencable, IConnectableHasGeometry, IBody, IInterface, ITemplateObject, IHasBuilder, IDrawIcon, ITransformable, IGeometryContainer, IMassProp, IChainedSegmentConnector, IArgument, ITransparentable, IMFModalable, IBodyAnalysisType, IAutoContactable, ITemperatureComponent, IHeatGenerationComponent, IGeometricalComponent, IContactableGeometry2Dot5D, IConnectable, IMarkerParent, IEntityRelation, IHasBody, IHasMaterial
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<EntityEventCore\> ← 
ContainerObject<EntityEventCore\> ← 
EntityBase ← 
Entity<SolidBodyProperty\> ← 
BodyBase<SolidBodyProperty\> ← 
SolidBody ← 
[WheelBodyBase](VM.Managed.DAFUL.Tire.WheelBodyBase.md) ← 
[WheelBody](VM.Managed.DAFUL.Tire.WheelBody.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
ILinkContainerEvent, 
IVerifiable, 
IHistoryObjectSerializable, 
IAttributeContainer, 
IContainer, 
IEntity, 
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
IVisible, 
IDocumentOwner, 
INamed, 
INavigatorItem, 
IVisible, 
IMultiChangable, 
IHasProperty, 
IGroup, 
IMarkerCreatable, 
IFacesetCreatable, 
ICurvesetCreatable, 
IConnectableNotReference, 
IReferencable, 
IConnectableHasGeometry, 
IBody, 
IInterface, 
ITemplateObject, 
IHasBuilder, 
IDrawIcon, 
ITransformable, 
IGeometryContainer, 
IMassProp, 
IChainedSegmentConnector, 
IArgument, 
ITransparentable, 
IMFModalable, 
IBodyAnalysisType, 
IAutoContactable, 
ITemperatureComponent, 
IHeatGenerationComponent, 
IGeometricalComponent, 
IContactableGeometry2Dot5D, 
IConnectable, 
IMarkerParent, 
IEntityRelation, 
IHasBody, 
IHasMaterial

#### Inherited Members

[WheelBodyBase.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.Tire.WheelBodyBase.md\#VM\_Managed\_DAFUL\_Tire\_WheelBodyBase\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[WheelBodyBase.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.DAFUL.Tire.WheelBodyBase.md\#VM\_Managed\_DAFUL\_Tire\_WheelBodyBase\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[WheelBodyBase.LinkRequestDestroying\(object, LinkEventArgs\)](VM.Managed.DAFUL.Tire.WheelBodyBase.md\#VM\_Managed\_DAFUL\_Tire\_WheelBodyBase\_LinkRequestDestroying\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[WheelBodyBase.FindLocal\(string\)](VM.Managed.DAFUL.Tire.WheelBodyBase.md\#VM\_Managed\_DAFUL\_Tire\_WheelBodyBase\_FindLocal\_System\_String\_), 
[WheelBodyBase.GetUnnamedObjectName\(object\)](VM.Managed.DAFUL.Tire.WheelBodyBase.md\#VM\_Managed\_DAFUL\_Tire\_WheelBodyBase\_GetUnnamedObjectName\_System\_Object\_), 
[WheelBodyBase.CreateOrUpdateBuilder\(string, bool, WheelBodyBase.CreateInfo, Document\)](VM.Managed.DAFUL.Tire.WheelBodyBase.md\#VM\_Managed\_DAFUL\_Tire\_WheelBodyBase\_CreateOrUpdateBuilder\_System\_String\_System\_Boolean\_VM\_Managed\_DAFUL\_Tire\_WheelBodyBase\_CreateInfo\_VM\_Managed\_Document\_), 
[WheelBodyBase.GetOrientation\(OMatrix\)](VM.Managed.DAFUL.Tire.WheelBodyBase.md\#VM\_Managed\_DAFUL\_Tire\_WheelBodyBase\_GetOrientation\_VM\_Managed\_OMatrix\_), 
[WheelBodyBase.CreateOrUpdateBuilder\(string, bool, WheelBodyBase.CreateInfo\)](VM.Managed.DAFUL.Tire.WheelBodyBase.md\#VM\_Managed\_DAFUL\_Tire\_WheelBodyBase\_CreateOrUpdateBuilder\_System\_String\_System\_Boolean\_VM\_Managed\_DAFUL\_Tire\_WheelBodyBase\_CreateInfo\_), 
[WheelBodyBase.SetModifiedImpl\(ModifiedResult.ModifiedType\)](VM.Managed.DAFUL.Tire.WheelBodyBase.md\#VM\_Managed\_DAFUL\_Tire\_WheelBodyBase\_SetModifiedImpl\_VM\_Managed\_ModifiedResult\_ModifiedType\_), 
[WheelBodyBase.WriteTemplateImpl\(XmlWriter\)](VM.Managed.DAFUL.Tire.WheelBodyBase.md\#VM\_Managed\_DAFUL\_Tire\_WheelBodyBase\_WriteTemplateImpl\_System\_Xml\_XmlWriter\_), 
[WheelBodyBase.ReadTemplateImpl\(XmlReader\)](VM.Managed.DAFUL.Tire.WheelBodyBase.md\#VM\_Managed\_DAFUL\_Tire\_WheelBodyBase\_ReadTemplateImpl\_System\_Xml\_XmlReader\_), 
[WheelBodyBase.OnDeserialization\(object\)](VM.Managed.DAFUL.Tire.WheelBodyBase.md\#VM\_Managed\_DAFUL\_Tire\_WheelBodyBase\_OnDeserialization\_System\_Object\_), 
[WheelBodyBase.SetTypeOfSide\(WheelBodyBase.SideType\)](VM.Managed.DAFUL.Tire.WheelBodyBase.md\#VM\_Managed\_DAFUL\_Tire\_WheelBodyBase\_SetTypeOfSide\_VM\_Managed\_DAFUL\_Tire\_WheelBodyBase\_SideType\_), 
[WheelBodyBase.ActiveTirePropertyFile](VM.Managed.DAFUL.Tire.WheelBodyBase.md\#VM\_Managed\_DAFUL\_Tire\_WheelBodyBase\_ActiveTirePropertyFile), 
[WheelBodyBase.CenterOffset](VM.Managed.DAFUL.Tire.WheelBodyBase.md\#VM\_Managed\_DAFUL\_Tire\_WheelBodyBase\_CenterOffset), 
[WheelBodyBase.WheelCenterOffset](VM.Managed.DAFUL.Tire.WheelBodyBase.md\#VM\_Managed\_DAFUL\_Tire\_WheelBodyBase\_WheelCenterOffset), 
[WheelBodyBase.TypeOfSide](VM.Managed.DAFUL.Tire.WheelBodyBase.md\#VM\_Managed\_DAFUL\_Tire\_WheelBodyBase\_TypeOfSide), 
[WheelBodyBase.IsEditCM](VM.Managed.DAFUL.Tire.WheelBodyBase.md\#VM\_Managed\_DAFUL\_Tire\_WheelBodyBase\_IsEditCM), 
[WheelBodyBase.Scale](VM.Managed.DAFUL.Tire.WheelBodyBase.md\#VM\_Managed\_DAFUL\_Tire\_WheelBodyBase\_Scale), 
SolidBody.m\_MeshFreeProperty, 
SolidBody.Initialize\(Unit.ConvertFactor\), 
SolidBody.FixUp\(ObjectBase\), 
SolidBody.DoWorkAfterUpdateContents\(\), 
SolidBody.GetMarkerModelNavigatorInfo\(XmlDocument, XmlElement, Marker\), 
SolidBody.GetMarkerArrayModelNavigatorInfo\(XmlDocument, XmlElement, NamedObjectDictionary<Marker\>\), 
SolidBody.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\), 
SolidBody.MakeReferenceImpl\(LinkedList<Reference\>\), 
SolidBody.WriteTemplateImpl\(XmlWriter\), 
SolidBody.ReadTemplateImpl\(XmlReader\), 
SolidBody.GetBuilder\(\), 
SolidBody.FindLocal\(string\), 
SolidBody.GetUnnamedObjectName\(object\), 
SolidBody.PostAddToDocument\(\), 
SolidBody.ResetInvalidEntity\(\), 
SolidBody.ReDraw\(\), 
SolidBody.GetGeometryNavigatorInformation\(XmlDocument, XmlElement\), 
SolidBody.GetPointDirection\(ref VectorBase, ref VectorBase, IReferencable\), 
SolidBody.GetPointDirectionOnGeometry\(ref VectorBase, ref VectorBase, IReferencable\), 
SolidBody.GetDefaultMaxPenetration\(ref double, IReferencable\), 
SolidBody.GetLayerImpl\(\), 
SolidBody.SetLayerImpl\(Layer\), 
SolidBody.OnDeserialization\(object\), 
SolidBody.LinkRemovedFromDocument\(object, RemoveFromDocEventArgs\), 
SolidBody.LinkRequestDestroy\(object, LinkEventArgs\), 
SolidBody.GetAnalysisLevelInfo\(ref List<double\>, ref List<uint\>\), 
SolidBody.IsAutoContactable\(\), 
SolidBody.GetContactables\(\), 
SolidBody.IsInterface, 
SolidBody.ModeArray, 
SolidBody.DFMFPath, 
SolidBody.LastModifiedTimeToDFMFFile, 
SolidBody.\_MovingReferenceFrame, 
SolidBody.MovingReferenceFrame, 
SolidBody.ModalReferencePosition, 
SolidBody.UseModalReferencePosition, 
SolidBody.UseAdvancedOption, 
SolidBody.UseTMovingReferenceFrame, 
SolidBody.UseRMovingReferenceFrame, 
SolidBody.ParentTypeImpl, 
SolidBody.IsEditCM, 
SolidBody.IsBaseGeometry, 
SolidBody.IsActionGeometry, 
SolidBody.MaxPenetration, 
SolidBody.HalfThickness, 
SolidBody.SurfaceSmoothingType, 
SolidBody.Connectable, 
SolidBody.IsRepresentedAsBSurface, 
SolidBody.ReferenceType, 
SolidBody.ArgumentType, 
SolidBody.Geometry, 
SolidBody.MeshFreeProperty, 
SolidBody.AnalysisType, 
SolidBody.TopologyEntityTypeName, 
BodyBase<SolidBodyProperty\>.Initialize\(Unit.ConvertFactor\), 
BodyBase<SolidBodyProperty\>.GetGeomModelNavigatorInfo\(XmlDocument, XmlElement, BodyProperty, Body\), 
BodyBase<SolidBodyProperty\>.GetGeneralMarkerInfo\(XmlDocument, XmlElement, Marker\), 
BodyBase<SolidBodyProperty\>.MakeReferenceImpl\(LinkedList<Reference\>\), 
BodyBase<SolidBodyProperty\>.FixUp\(ObjectBase\), 
BodyBase<SolidBodyProperty\>.GetArgumentList\(LinkedList<ObjectBase\>\), 
BodyBase<SolidBodyProperty\>.OnUpdatePropertyImpl\(Property, LinkEventArgs\), 
BodyBase<SolidBodyProperty\>.GetLayerImpl\(\), 
BodyBase<SolidBodyProperty\>.SetLayerImpl\(Layer\), 
BodyBase<SolidBodyProperty\>.GetTargetListForUpdate\(\), 
BodyBase<SolidBodyProperty\>.HasLayerExplicitly, 
BodyBase<SolidBodyProperty\>.ParentType, 
BodyBase<SolidBodyProperty\>.ParentTypeImpl, 
BodyBase<SolidBodyProperty\>.ReferenceFrameType, 
BodyBase<SolidBodyProperty\>.ConnectableName, 
BodyBase<SolidBodyProperty\>.ConnectableFullName, 
BodyBase<SolidBodyProperty\>.ConnectablePostfixName, 
BodyBase<SolidBodyProperty\>.ConnectablePosition, 
BodyBase<SolidBodyProperty\>.ConnectableBody, 
BodyBase<SolidBodyProperty\>.Body, 
BodyBase<SolidBodyProperty\>.Layer, 
BodyBase<SolidBodyProperty\>.IsVisible, 
BodyBase<SolidBodyProperty\>.ReferencableImpl, 
BodyBase<SolidBodyProperty\>.Geometry, 
Entity<SolidBodyProperty\>.Initialize\(Unit.ConvertFactor\), 
Entity<SolidBodyProperty\>.GetUnnamedObjectName\(object\), 
Entity<SolidBodyProperty\>.FindLocal\(string\), 
Entity<SolidBodyProperty\>.Property, 
EntityBase.Initialize\(Unit.ConvertFactor\), 
EntityBase.SetOldNameWithNewEntity\(ObjectBase, ObjectBase\), 
EntityBase.PropertyRequestUpdate\(object, LinkEventArgs\), 
EntityBase.OnDeserializationForAttribute\(\), 
EntityBase.OnUpdatePropertyImpl\(Property, LinkEventArgs\), 
EntityBase.LinkRequestDestroying\(object, LinkEventArgs\), 
EntityBase.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\), 
EntityBase.FixUp\(ObjectBase\), 
EntityBase.FindLocal\(string\), 
EntityBase.WriteTemplateImpl\(XmlWriter\), 
EntityBase.ReadTemplateImpl\(XmlReader\), 
EntityBase.LinkAddedToDocument\(object, AddToDocEventArgs\), 
EntityBase.OnDeserialization\(object\), 
EntityBase.Name, 
EntityBase.FullName, 
EntityBase.NonSymmetricName, 
EntityBase.DisplayName, 
EntityBase.IsEnabled, 
EntityBase.Comment, 
EntityBase.HasLayerExplicitly, 
EntityBase.UntypedProperty, 
EntityBase.IsFileProperty, 
EntityBase.Layer, 
EntityBase.IsVisible, 
ContainerObject<EntityEventCore\>.Find\(string\), 
ContainerObject<EntityEventCore\>.FindLocal\(string\), 
ContainerObject<EntityEventCore\>.GetUnnamedObjectName\(object\), 
ContainerObject<EntityEventCore\>.GetNewEntityName\(string\), 
ContainerObject<EntityEventCore\>.GetNewEntityName\(string, bool, int\), 
ContainerObject<EntityEventCore\>.GetNewEntityName\(string, bool, int, int\), 
Object<EntityEventCore\>.GetKey\(\), 
Object<EntityEventCore\>.Initialize\(Unit.ConvertFactor\), 
Object<EntityEventCore\>.SetIconColor\(Canvas\), 
Object<EntityEventCore\>.OnDeserialization\(object\), 
Object<EntityEventCore\>.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
Object<EntityEventCore\>.RollbackEvent\(\), 
Object<EntityEventCore\>.OnDeserializedCore\(object\), 
Object<EntityEventCore\>.Key, 
Object<EntityEventCore\>.UntypedEventCore, 
Object<EntityEventCore\>.EventCore, 
Object<EntityEventCore\>.Attributes, 
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

### <a id="VM_Managed_DAFUL_Tire_WheelBody__ctor"></a> WheelBody\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Tire.WheelBody" data-throw-if-not-resolved="false"></xref> class.

```csharp
public WheelBody()
```

### <a id="VM_Managed_DAFUL_Tire_WheelBody__ctor_System_String_"></a> WheelBody\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Tire.WheelBody" data-throw-if-not-resolved="false"></xref> class.

```csharp
public WheelBody(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Name.

### <a id="VM_Managed_DAFUL_Tire_WheelBody__ctor_System_String_VM_Managed_CAD_Builder_"></a> WheelBody\(string, Builder\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Tire.WheelBody" data-throw-if-not-resolved="false"></xref> class.

```csharp
public WheelBody(string strName, Builder builder)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Name.

`builder` Builder

The builder.

## Properties

### <a id="VM_Managed_DAFUL_Tire_WheelBody_Roads"></a> Roads

Gets or sets the roads.

```csharp
public Road[] Roads { get; set; }
```

#### Property Value

 [Road](VM.Managed.DAFUL.Tire.Road.md)\[\]

## Methods

### <a id="VM_Managed_DAFUL_Tire_WheelBody_GetOrientation_VM_Managed_OMatrix_"></a> GetOrientation\(OMatrix\)

Gets the orientation.

```csharp
public override OMatrix GetOrientation(OMatrix matInput)
```

#### Parameters

`matInput` OMatrix

The mat input.

#### Returns

 OMatrix

### <a id="VM_Managed_DAFUL_Tire_WheelBody_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

