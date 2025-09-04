#  Class GearSetPlanetaryDP

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Gear set for double-pinion planetary

```csharp
public class GearSetPlanetaryDP : GearSetBase<PropertyGearSetPlanetaryDP>, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup, IOpenDesignerForGearTrain, IOpenDesigner, IReferencable, IGearSet, IHasGeometryInfo, ITransparentable, IHasBuilder, IReportable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<EntityEventCore\> ← 
ContainerObject<EntityEventCore\> ← 
EntityBase ← 
Entity<PropertyGearSetPlanetaryDP\> ← 
[OpenDesignerBase<PropertyGearSetPlanetaryDP\>](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md) ← 
[GearSetBase<PropertyGearSetPlanetaryDP\>](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md) ← 
[GearSetPlanetaryDP](VM.Managed.DAFUL.GearTrain.GearSetPlanetaryDP.md)

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

[GearSetBase<PropertyGearSetPlanetaryDP\>.SetDataToDesignDoc\(bool\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_SetDataToDesignDoc\_System\_Boolean\_), 
[GearSetBase<PropertyGearSetPlanetaryDP\>.Find\(string\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_Find\_System\_String\_), 
[GearSetBase<PropertyGearSetPlanetaryDP\>.GetUnnamedObjectName\(object\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_GetUnnamedObjectName\_System\_Object\_), 
[GearSetBase<PropertyGearSetPlanetaryDP\>.GetBuilder\(\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_GetBuilder), 
[GearSetBase<PropertyGearSetPlanetaryDP\>.AddBuilder\(Builder\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_AddBuilder\_VM\_Managed\_CAD\_Builder\_), 
[GearSetBase<PropertyGearSetPlanetaryDP\>.RemoveBuilder\(Builder\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_RemoveBuilder\_VM\_Managed\_CAD\_Builder\_), 
[GearSetBase<PropertyGearSetPlanetaryDP\>.AddPairInfo\(Body, Body\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_AddPairInfo\_VM\_Managed\_CAD\_Body\_VM\_Managed\_CAD\_Body\_), 
[GearSetBase<PropertyGearSetPlanetaryDP\>.CheckPowerFlow\(List<IGearBuilder\>\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_CheckPowerFlow\_System\_Collections\_Generic\_List\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_IGearBuilder\_\_), 
[GearSetBase<PropertyGearSetPlanetaryDP\>.AppendExtraRotateAngle\(List<IGearBuilder\>\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_AppendExtraRotateAngle\_System\_Collections\_Generic\_List\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_IGearBuilder\_\_), 
[GearSetBase<PropertyGearSetPlanetaryDP\>.Meshing\(List<IGearBuilder\>\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_Meshing\_System\_Collections\_Generic\_List\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_IGearBuilder\_\_), 
[GearSetBase<PropertyGearSetPlanetaryDP\>.MeshingCore\(int, double, ref List<IGearBuilder\>\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_MeshingCore\_System\_Int32\_System\_Double\_System\_Collections\_Generic\_List\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_IGearBuilder\_\_\_), 
[GearSetBase<PropertyGearSetPlanetaryDP\>.ExternalMeshing\(int, double, ref List<IGearBuilder\>\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_ExternalMeshing\_System\_Int32\_System\_Double\_System\_Collections\_Generic\_List\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_IGearBuilder\_\_\_), 
[GearSetBase<PropertyGearSetPlanetaryDP\>.InternalMeshing\(int, double, ref List<IGearBuilder\>\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_InternalMeshing\_System\_Int32\_System\_Double\_System\_Collections\_Generic\_List\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_IGearBuilder\_\_\_), 
[GearSetBase<PropertyGearSetPlanetaryDP\>.GetPositionsForMeshing\(List<IGearBuilder\>, int, ref VectorBase, ref VectorBase\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_GetPositionsForMeshing\_System\_Collections\_Generic\_List\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_IGearBuilder\_\_System\_Int32\_VM\_Managed\_VectorBase\_\_VM\_Managed\_VectorBase\_\_), 
[GearSetBase<PropertyGearSetPlanetaryDP\>.OnDeserializationForAttribute\(\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_OnDeserializationForAttribute), 
[GearSetBase<PropertyGearSetPlanetaryDP\>.GetBodyFromGeometryInfo\(GeometryInfoBase\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_GetBodyFromGeometryInfo\_VM\_Managed\_DAFUL\_GearTrain\_GeometryInfoBase\_), 
[GearSetBase<PropertyGearSetPlanetaryDP\>.FillGearData\(Document, bool, bool, string, string\[\]\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_FillGearData\_VM\_Managed\_Document\_System\_Boolean\_System\_Boolean\_System\_String\_System\_String\_\_\_), 
[GearSetBase<PropertyGearSetPlanetaryDP\>.FillGearData\(Document, int, string, string\[\], string\[\], string\[\], string\[\], bool, bool, string, string\[\]\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_FillGearData\_VM\_Managed\_Document\_System\_Int32\_System\_String\_System\_String\_\_\_System\_String\_\_\_System\_String\_\_\_System\_String\_\_\_System\_Boolean\_System\_Boolean\_System\_String\_System\_String\_\_\_), 
[GearSetBase<PropertyGearSetPlanetaryDP\>.CalculateWebMass\(PropertyGearSetBase, int\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_CalculateWebMass\_VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_System\_Int32\_), 
[GearSetBase<PropertyGearSetPlanetaryDP\>.OnPreBuildSpecial\(PropertyGearSetBase, Document, string\[\]\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_OnPreBuildSpecial\_VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_VM\_Managed\_Document\_System\_String\_\_\_), 
[GearSetBase<PropertyGearSetPlanetaryDP\>.OnPostBuildSpecial\(PropertyGearSetBase, Document, string\[\]\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_OnPostBuildSpecial\_VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_VM\_Managed\_Document\_System\_String\_\_\_), 
[GearSetBase<PropertyGearSetPlanetaryDP\>.CreateGearGeometry\(string, int, GearShapeBase\[\]\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_CreateGearGeometry\_System\_String\_System\_Int32\_VM\_Managed\_DAFUL\_GearTrain\_GearShapeBase\_\_\_), 
[GearSetBase<PropertyGearSetPlanetaryDP\>.OnDeserialization\(object\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_OnDeserialization\_System\_Object\_), 
[GearSetBase<PropertyGearSetPlanetaryDP\>.MakeReferenceImpl\(LinkedList<Reference\>\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_MakeReferenceImpl\_System\_Collections\_Generic\_LinkedList\_VM\_Managed\_Reference\_\_), 
[GearSetBase<PropertyGearSetPlanetaryDP\>.GeometryInfoBasesImpl\(\)](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_GeometryInfoBasesImpl), 
[GearSetBase<PropertyGearSetPlanetaryDP\>.Extension](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_Extension), 
[GearSetBase<PropertyGearSetPlanetaryDP\>.TargetBody](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_TargetBody), 
[GearSetBase<PropertyGearSetPlanetaryDP\>.TypeOfParent](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_TypeOfParent), 
[GearSetBase<PropertyGearSetPlanetaryDP\>.Layer](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_Layer), 
[GearSetBase<PropertyGearSetPlanetaryDP\>.GearBodies](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_GearBodies), 
[GearSetBase<PropertyGearSetPlanetaryDP\>.GearBodiesExceptWeb](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_GearBodiesExceptWeb), 
[GearSetBase<PropertyGearSetPlanetaryDP\>.GearWebBodies](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_GearWebBodies), 
[GearSetBase<PropertyGearSetPlanetaryDP\>.PairInfos](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_PairInfos), 
[GearSetBase<PropertyGearSetPlanetaryDP\>.AddToShaft](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_AddToShaft), 
[GearSetBase<PropertyGearSetPlanetaryDP\>.UseMeshing](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_GearSetBase\_1\_UseMeshing), 
[OpenDesignerBase<PropertyGearSetPlanetaryDP\>.LinkRequestDestroying\(object, LinkEventArgs\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_LinkRequestDestroying\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[OpenDesignerBase<PropertyGearSetPlanetaryDP\>.SetDataToDesignDoc\(bool\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_SetDataToDesignDoc\_System\_Boolean\_), 
[OpenDesignerBase<PropertyGearSetPlanetaryDP\>.CheckLicense\(\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_CheckLicense), 
[OpenDesignerBase<PropertyGearSetPlanetaryDP\>.FindBody\(ObjectBase\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_FindBody\_VM\_Managed\_ObjectBase\_), 
[OpenDesignerBase<PropertyGearSetPlanetaryDP\>.SetCustomFilterEvent\(object\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_SetCustomFilterEvent\_System\_Object\_), 
[OpenDesignerBase<PropertyGearSetPlanetaryDP\>.GetFilePath\(\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_GetFilePath), 
[OpenDesignerBase<PropertyGearSetPlanetaryDP\>.PostOpenDocument\(Document\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_PostOpenDocument\_VM\_Managed\_Document\_), 
[OpenDesignerBase<PropertyGearSetPlanetaryDP\>.ResetViewOptions\(\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_ResetViewOptions), 
[OpenDesignerBase<PropertyGearSetPlanetaryDP\>.Instantiate\(Reference, Canvas\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_Instantiate\_VM\_Managed\_Reference\_VM\_CAD\_Kernel\_Render\_Canvas\_), 
[OpenDesignerBase<PropertyGearSetPlanetaryDP\>.MakeReference\(LinkedList<Reference\>\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_MakeReference\_System\_Collections\_Generic\_LinkedList\_VM\_Managed\_Reference\_\_), 
[OpenDesignerBase<PropertyGearSetPlanetaryDP\>.MakeReferenceImpl\(LinkedList<Reference\>\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_MakeReferenceImpl\_System\_Collections\_Generic\_LinkedList\_VM\_Managed\_Reference\_\_), 
[OpenDesignerBase<PropertyGearSetPlanetaryDP\>.TypeFileName](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_TypeFileName), 
[OpenDesignerBase<PropertyGearSetPlanetaryDP\>.TargetBody](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_TargetBody), 
[OpenDesignerBase<PropertyGearSetPlanetaryDP\>.TypeOfParent](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_TypeOfParent), 
[OpenDesignerBase<PropertyGearSetPlanetaryDP\>.Extension](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_Extension), 
[OpenDesignerBase<PropertyGearSetPlanetaryDP\>.HasLayerExplicitly](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_HasLayerExplicitly), 
[OpenDesignerBase<PropertyGearSetPlanetaryDP\>.Referencable](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_Referencable), 
[OpenDesignerBase<PropertyGearSetPlanetaryDP\>.Visible](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_Visible), 
Entity<PropertyGearSetPlanetaryDP\>.Initialize\(Unit.ConvertFactor\), 
Entity<PropertyGearSetPlanetaryDP\>.GetUnnamedObjectName\(object\), 
Entity<PropertyGearSetPlanetaryDP\>.FindLocal\(string\), 
Entity<PropertyGearSetPlanetaryDP\>.Property, 
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

### <a id="VM_Managed_DAFUL_GearTrain_GearSetPlanetaryDP__ctor"></a> GearSetPlanetaryDP\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.GearSetPlanetaryDP" data-throw-if-not-resolved="false"></xref> class.

```csharp
public GearSetPlanetaryDP()
```

### <a id="VM_Managed_DAFUL_GearTrain_GearSetPlanetaryDP__ctor_System_String_"></a> GearSetPlanetaryDP\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.GearSetPlanetaryDP" data-throw-if-not-resolved="false"></xref> class.

```csharp
public GearSetPlanetaryDP(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string.

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_GearSetPlanetaryDP_Extension"></a> Extension

Gets the extension.

```csharp
protected override string Extension { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_GearTrain_GearSetPlanetaryDP_TypeFileName"></a> TypeFileName

Gets the name of the type file.

```csharp
public override string TypeFileName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_GearSetPlanetaryDP_FillGearData_VM_Managed_Document_System_Int32_System_String_System_String___System_String___System_String___System_String___System_Boolean_System_Boolean_System_String_System_String___"></a> FillGearData\(Document, int, string, string\[\], string\[\], string\[\], string\[\], bool, bool, string, string\[\]\)

Fill gear data

```csharp
public override bool FillGearData(Document doc, int nNGear, string strName, string[] CenterDistance, string[] NumberOfTeeth, string[] ProfileShift, string[] FaceWidth, bool bUseKissSoftInterface, bool bUseAdvanced, string Color, string[] InputArray)
```

#### Parameters

`doc` Document

The document

`nNGear` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The No. of gear

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The gear name

`CenterDistance` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The gear center distance

`NumberOfTeeth` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The No. of teeth

`ProfileShift` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The profile shift

`FaceWidth` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The face width

`bUseKissSoftInterface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The kiss soft interface flag

`bUseAdvanced` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The advanced flag

`Color` [string](https://learn.microsoft.com/dotnet/api/system.string)

The color

`InputArray` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The input array for create

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_GearTrain_GearSetPlanetaryDP_Meshing_System_Collections_Generic_List_VM_Managed_DAFUL_GearTrain_CAD_IGearBuilder__"></a> Meshing\(List<IGearBuilder\>\)

Meshing the gears.

```csharp
public override bool Meshing(List<IGearBuilder> lstGB)
```

#### Parameters

`lstGB` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[IGearBuilder](VM.Managed.DAFUL.GearTrain.CAD.IGearBuilder.md)\>

The gear builder list.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_GearTrain_GearSetPlanetaryDP_OnPostBuildSpecial_VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_VM_Managed_Document_System_String___"></a> OnPostBuildSpecial\(PropertyGearSetBase, Document, string\[\]\)

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

### <a id="VM_Managed_DAFUL_GearTrain_GearSetPlanetaryDP_OnPreBuildSpecial_VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_VM_Managed_Document_System_String___"></a> OnPreBuildSpecial\(PropertyGearSetBase, Document, string\[\]\)

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

