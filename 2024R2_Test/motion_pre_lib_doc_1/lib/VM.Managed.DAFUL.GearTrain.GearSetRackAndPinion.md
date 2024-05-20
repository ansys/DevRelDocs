# Class GearSetRackAndPinion

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Gear set for Rack and Pinion

```csharp
public class GearSetRackAndPinion : GearSetBase<PropertyGearSetRackAndPinion>, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup, IOpenDesignerForGearTrain, IOpenDesigner, IReferencable, IGearSet, IHasGeometryInfo, ITransparentable, IHasBuilder, IReportable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<EntityEventCore\> ← 
ContainerObject<EntityEventCore\> ← 
EntityBase ← 
Entity<PropertyGearSetRackAndPinion\> ← 
[OpenDesignerBase<PropertyGearSetRackAndPinion\>](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md) ← 
[GearSetBase<PropertyGearSetRackAndPinion\>](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md) ← 
[GearSetRackAndPinion](VM.Managed.DAFUL.GearTrain.GearSetRackAndPinion.md)

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
[IOpenDesignerForGearTrain](VM.Managed.DAFUL.GearTrain.IOpenDesignerForGearTrain.md), 
IOpenDesigner, 
IReferencable, 
[IGearSet](VM.Managed.DAFUL.GearTrain.IGearSet.md), 
[IHasGeometryInfo](VM.Managed.DAFUL.GearTrain.IHasGeometryInfo.md), 
ITransparentable, 
IHasBuilder, 
IReportable

#### Inherited Members

[GearSetBase<PropertyGearSetRackAndPinion\>.SetDataToDesignDoc\(bool\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_SetDataToDesignDoc\_System\_Boolean\_), 
[GearSetBase<PropertyGearSetRackAndPinion\>.Find\(string\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_Find\_System\_String\_), 
[GearSetBase<PropertyGearSetRackAndPinion\>.GetUnnamedObjectName\(object\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_GetUnnamedObjectName\_System\_Object\_), 
[GearSetBase<PropertyGearSetRackAndPinion\>.GetBuilder\(\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_GetBuilder), 
[GearSetBase<PropertyGearSetRackAndPinion\>.AddBuilder\(Builder\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_AddBuilder\_VM\_Managed\_CAD\_Builder\_), 
[GearSetBase<PropertyGearSetRackAndPinion\>.RemoveBuilder\(Builder\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_RemoveBuilder\_VM\_Managed\_CAD\_Builder\_), 
[GearSetBase<PropertyGearSetRackAndPinion\>.AddPairInfo\(Body, Body\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_AddPairInfo\_VM\_Managed\_CAD\_Body\_VM\_Managed\_CAD\_Body\_), 
[GearSetBase<PropertyGearSetRackAndPinion\>.CheckPowerFlow\(List<IGearBuilder\>\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_CheckPowerFlow\_System\_Collections\_Generic\_List\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_IGearBuilder\_\_), 
[GearSetBase<PropertyGearSetRackAndPinion\>.AppendExtraRotateAngle\(List<IGearBuilder\>\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_AppendExtraRotateAngle\_System\_Collections\_Generic\_List\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_IGearBuilder\_\_), 
[GearSetBase<PropertyGearSetRackAndPinion\>.Meshing\(List<IGearBuilder\>\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_Meshing\_System\_Collections\_Generic\_List\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_IGearBuilder\_\_), 
[GearSetBase<PropertyGearSetRackAndPinion\>.MeshingCore\(int, double, ref List<IGearBuilder\>\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_MeshingCore\_System\_Int32\_System\_Double\_System\_Collections\_Generic\_List\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_IGearBuilder\_\_\_), 
[GearSetBase<PropertyGearSetRackAndPinion\>.ExternalMeshing\(int, double, ref List<IGearBuilder\>\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_ExternalMeshing\_System\_Int32\_System\_Double\_System\_Collections\_Generic\_List\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_IGearBuilder\_\_\_), 
[GearSetBase<PropertyGearSetRackAndPinion\>.InternalMeshing\(int, double, ref List<IGearBuilder\>\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_InternalMeshing\_System\_Int32\_System\_Double\_System\_Collections\_Generic\_List\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_IGearBuilder\_\_\_), 
[GearSetBase<PropertyGearSetRackAndPinion\>.GetPositionsForMeshing\(List<IGearBuilder\>, int, ref VectorBase, ref VectorBase\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_GetPositionsForMeshing\_System\_Collections\_Generic\_List\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_IGearBuilder\_\_System\_Int32\_VM\_Managed\_VectorBase\_\_VM\_Managed\_VectorBase\_\_), 
[GearSetBase<PropertyGearSetRackAndPinion\>.OnDeserializationForAttribute\(\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_OnDeserializationForAttribute), 
[GearSetBase<PropertyGearSetRackAndPinion\>.GetBodyFromGeometryInfo\(GeometryInfoBase\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_GetBodyFromGeometryInfo\_VM\_Managed\_DAFUL\_GearTrain\_GeometryInfoBase\_), 
[GearSetBase<PropertyGearSetRackAndPinion\>.FillGearData\(Document, bool, bool, string, string\[\]\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_FillGearData\_VM\_Managed\_Document\_System\_Boolean\_System\_Boolean\_System\_String\_System\_String\_\_\_), 
[GearSetBase<PropertyGearSetRackAndPinion\>.FillGearData\(Document, int, string, string\[\], string\[\], string\[\], string\[\], bool, bool, string, string\[\]\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_FillGearData\_VM\_Managed\_Document\_System\_Int32\_System\_String\_System\_String\_\_\_System\_String\_\_\_System\_String\_\_\_System\_String\_\_\_System\_Boolean\_System\_Boolean\_System\_String\_System\_String\_\_\_), 
[GearSetBase<PropertyGearSetRackAndPinion\>.CalculateWebMass\(PropertyGearSetBase, int\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_CalculateWebMass\_VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_System\_Int32\_), 
[GearSetBase<PropertyGearSetRackAndPinion\>.OnPreBuildSpecial\(PropertyGearSetBase, Document, string\[\]\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_OnPreBuildSpecial\_VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_VM\_Managed\_Document\_System\_String\_\_\_), 
[GearSetBase<PropertyGearSetRackAndPinion\>.OnPostBuildSpecial\(PropertyGearSetBase, Document, string\[\]\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_OnPostBuildSpecial\_VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_VM\_Managed\_Document\_System\_String\_\_\_), 
[GearSetBase<PropertyGearSetRackAndPinion\>.CreateGearGeometry\(string, int, GearShapeBase\[\]\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_CreateGearGeometry\_System\_String\_System\_Int32\_VM\_Managed\_DAFUL\_GearTrain\_GearShapeBase\_\_\_), 
[GearSetBase<PropertyGearSetRackAndPinion\>.OnDeserialization\(object\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_OnDeserialization\_System\_Object\_), 
[GearSetBase<PropertyGearSetRackAndPinion\>.MakeReferenceImpl\(LinkedList<Reference\>\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_MakeReferenceImpl\_System\_Collections\_Generic\_LinkedList\_VM\_Managed\_Reference\_\_), 
[GearSetBase<PropertyGearSetRackAndPinion\>.GeometryInfoBasesImpl\(\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_GeometryInfoBasesImpl), 
[GearSetBase<PropertyGearSetRackAndPinion\>.Extension](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_Extension), 
[GearSetBase<PropertyGearSetRackAndPinion\>.TargetBody](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_TargetBody), 
[GearSetBase<PropertyGearSetRackAndPinion\>.TypeOfParent](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_TypeOfParent), 
[GearSetBase<PropertyGearSetRackAndPinion\>.Layer](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_Layer), 
[GearSetBase<PropertyGearSetRackAndPinion\>.GearBodies](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_GearBodies), 
[GearSetBase<PropertyGearSetRackAndPinion\>.GearBodiesExceptWeb](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_GearBodiesExceptWeb), 
[GearSetBase<PropertyGearSetRackAndPinion\>.GearWebBodies](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_GearWebBodies), 
[GearSetBase<PropertyGearSetRackAndPinion\>.PairInfos](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_PairInfos), 
[GearSetBase<PropertyGearSetRackAndPinion\>.AddToShaft](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_AddToShaft), 
[GearSetBase<PropertyGearSetRackAndPinion\>.UseMeshing](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_UseMeshing), 
[OpenDesignerBase<PropertyGearSetRackAndPinion\>.LinkRequestDestroying\(object, LinkEventArgs\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_LinkRequestDestroying\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[OpenDesignerBase<PropertyGearSetRackAndPinion\>.SetDataToDesignDoc\(bool\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_SetDataToDesignDoc\_System\_Boolean\_), 
[OpenDesignerBase<PropertyGearSetRackAndPinion\>.CheckLicense\(\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_CheckLicense), 
[OpenDesignerBase<PropertyGearSetRackAndPinion\>.FindBody\(ObjectBase\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_FindBody\_VM\_Managed\_ObjectBase\_), 
[OpenDesignerBase<PropertyGearSetRackAndPinion\>.SetCustomFilterEvent\(object\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_SetCustomFilterEvent\_System\_Object\_), 
[OpenDesignerBase<PropertyGearSetRackAndPinion\>.GetFilePath\(\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_GetFilePath), 
[OpenDesignerBase<PropertyGearSetRackAndPinion\>.PostOpenDocument\(Document\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_PostOpenDocument\_VM\_Managed\_Document\_), 
[OpenDesignerBase<PropertyGearSetRackAndPinion\>.ResetViewOptions\(\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_ResetViewOptions), 
[OpenDesignerBase<PropertyGearSetRackAndPinion\>.Instantiate\(Reference, Canvas\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_Instantiate\_VM\_Managed\_Reference\_VM\_CAD\_Kernel\_Render\_Canvas\_), 
[OpenDesignerBase<PropertyGearSetRackAndPinion\>.MakeReference\(LinkedList<Reference\>\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_MakeReference\_System\_Collections\_Generic\_LinkedList\_VM\_Managed\_Reference\_\_), 
[OpenDesignerBase<PropertyGearSetRackAndPinion\>.MakeReferenceImpl\(LinkedList<Reference\>\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_MakeReferenceImpl\_System\_Collections\_Generic\_LinkedList\_VM\_Managed\_Reference\_\_), 
[OpenDesignerBase<PropertyGearSetRackAndPinion\>.TypeFileName](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_TypeFileName), 
[OpenDesignerBase<PropertyGearSetRackAndPinion\>.TargetBody](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_TargetBody), 
[OpenDesignerBase<PropertyGearSetRackAndPinion\>.TypeOfParent](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_TypeOfParent), 
[OpenDesignerBase<PropertyGearSetRackAndPinion\>.Extension](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_Extension), 
[OpenDesignerBase<PropertyGearSetRackAndPinion\>.HasLayerExplicitly](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_HasLayerExplicitly), 
[OpenDesignerBase<PropertyGearSetRackAndPinion\>.Referencable](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_Referencable), 
[OpenDesignerBase<PropertyGearSetRackAndPinion\>.Visible](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_Visible), 
Entity<PropertyGearSetRackAndPinion\>.Initialize\(Unit.ConvertFactor\), 
Entity<PropertyGearSetRackAndPinion\>.GetUnnamedObjectName\(object\), 
Entity<PropertyGearSetRackAndPinion\>.FindLocal\(string\), 
Entity<PropertyGearSetRackAndPinion\>.Property, 
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

### GearSetRackAndPinion\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.GearSetRackAndPinion" data-throw-if-not-resolved="false"></xref> class.

```csharp
public GearSetRackAndPinion()
```

### GearSetRackAndPinion\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.GearSetRackAndPinion" data-throw-if-not-resolved="false"></xref> class.

```csharp
public GearSetRackAndPinion(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string.

## Properties

### AddToShaft

Gets the flag whether this instance add to shaft or not.

```csharp
public override bool AddToShaft { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Extension

Gets the extension.

```csharp
protected override string Extension { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### TypeFileName

Gets the name of the type file.

```csharp
public override string TypeFileName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### CreateGearGeometry\(string, int, GearShapeBase\[\]\)

Create Gear Geometry.

```csharp
protected override void CreateGearGeometry(string strGearType, int nNGear, GearShapeBase[] arGeom)
```

#### Parameters

`strGearType` [string](https://learn.microsoft.com/dotnet/api/system.string)

THe gear type

`nNGear` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The No. of gear

`arGeom` [GearShapeBase](VM.Managed.DAFUL.GearTrain.GearShapeBase.md)\[\]

The gear shape geometry

### GetResultAfterCalculateBeamStiffness\(string\[\]\)

Get result after beam stiffness calculate.

```csharp
public static double[] GetResultAfterCalculateBeamStiffness(string[] calculatedResults)
```

#### Parameters

`calculatedResults` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The calculated results

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### Meshing\(List<IGearBuilder\>\)

Meshing the gears.

```csharp
public override bool Meshing(List<IGearBuilder> lstGB)
```

#### Parameters

`lstGB` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[IGearBuilder](VM.Managed.DAFUL.GearTrain.CAD.IGearBuilder.md)\>

The gear builder list.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OnPostBuildSpecial\(PropertyGearSetBase, Document, string\[\]\)

Post build in Special

```csharp
protected override void OnPostBuildSpecial(PropertyGearSetBase propGearSet, Document doc, string[] InputArray)
```

#### Parameters

`propGearSet` [PropertyGearSetBase](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md)

The gearset property

`doc` Document

The document

`InputArray` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The input array

### OnPreBuildSpecial\(PropertyGearSetBase, Document, string\[\]\)

Pre build in Special

```csharp
protected override void OnPreBuildSpecial(PropertyGearSetBase propGearSet, Document doc, string[] InputArray)
```

#### Parameters

`propGearSet` [PropertyGearSetBase](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md)

The gearset property

`doc` Document

The document

`InputArray` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The input array


