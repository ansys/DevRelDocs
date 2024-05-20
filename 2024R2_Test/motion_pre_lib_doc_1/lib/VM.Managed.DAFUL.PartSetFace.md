# Class PartSetFace

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This class is to represent the face set in part.

```csharp
public class PartSetFace : SetFace, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, ISubEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, INamed, INavigatorItem, IContactableRigid3D, IContactableRigid, IContactable3D, IContactable, IBodyAnalysisType, IObjectSet, IReferencable, ITemplateObject, IChainedSegmentConnector, IChainedSegmentContact, IArgument, IMultiChangable, IFaceSetComponent, ITopologyset, IConnectable, IEntityRelation, IHasBody, IMarkerParent, ITemperatureComponent, IConvectionComponent, IHeatFlowComponent, IHeatFluxComponent, IGeometricalComponent, IFaceSetInformation, IFaceInformation, IGapTarget, IPostDeserialized, IPostOpenDocumentForFaceset
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
SubEntity ← 
[SetFace](VM.Managed.DAFUL.SetFace.md) ← 
[PartSetFace](VM.Managed.DAFUL.PartSetFace.md)

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
INavigatorItem, 
[IContactableRigid3D](VM.Managed.DAFUL.IContactableRigid3D.md), 
[IContactableRigid](VM.Managed.DAFUL.IContactableRigid.md), 
[IContactable3D](VM.Managed.DAFUL.IContactable3D.md), 
[IContactable](VM.Managed.DAFUL.IContactable.md), 
[IBodyAnalysisType](VM.Managed.DAFUL.IBodyAnalysisType.md), 
IObjectSet, 
IReferencable, 
ITemplateObject, 
IChainedSegmentConnector, 
IChainedSegmentContact, 
IArgument, 
IMultiChangable, 
[IFaceSetComponent](VM.Managed.DAFUL.IFaceSetComponent.md), 
ITopologyset, 
[IConnectable](VM.Managed.DAFUL.IConnectable.md), 
IEntityRelation, 
IHasBody, 
[IMarkerParent](VM.Managed.DAFUL.IMarkerParent.md), 
[ITemperatureComponent](VM.Managed.DAFUL.ITemperatureComponent.md), 
[IConvectionComponent](VM.Managed.DAFUL.IConvectionComponent.md), 
[IHeatFlowComponent](VM.Managed.DAFUL.IHeatFlowComponent.md), 
[IHeatFluxComponent](VM.Managed.DAFUL.IHeatFluxComponent.md), 
[IGeometricalComponent](VM.Managed.DAFUL.IGeometricalComponent.md), 
IFaceSetInformation, 
IFaceInformation, 
[IGapTarget](VM.Managed.DAFUL.IGapTarget.md), 
IPostDeserialized, 
IPostOpenDocumentForFaceset

#### Inherited Members

[SetFace.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[SetFace.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[SetFace.LinkRequestDestroy\(object, LinkEventArgs\)](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_LinkRequestDestroy\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[SetFace.FixUp\(ObjectBase\)](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_FixUp\_VM\_Managed\_ObjectBase\_), 
[SetFace.GetTargetListForUpdate\(\)](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_GetTargetListForUpdate), 
[SetFace.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_GetModelNavigatorInformationImpl\_System\_Xml\_XmlDocument\_System\_Xml\_XmlElement\_System\_Boolean\_), 
[SetFace.GetGeometryNavigatorInformation\(XmlDocument, XmlElement\)](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_GetGeometryNavigatorInformation\_System\_Xml\_XmlDocument\_System\_Xml\_XmlElement\_), 
[SetFace.GetPointDirection\(ref VectorBase, ref VectorBase, IReferencable\)](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_GetPointDirection\_VM\_Managed\_VectorBase\_\_VM\_Managed\_VectorBase\_\_VM\_Managed\_IReferencable\_), 
[SetFace.GetPointDirectionOnGeometry\(ref VectorBase, ref VectorBase, IReferencable\)](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_GetPointDirectionOnGeometry\_VM\_Managed\_VectorBase\_\_VM\_Managed\_VectorBase\_\_VM\_Managed\_IReferencable\_), 
[SetFace.GetDefaultMaxPenetration\(ref double, IReferencable\)](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_GetDefaultMaxPenetration\_System\_Double\_\_VM\_Managed\_IReferencable\_), 
[SetFace.GetCount\(\)](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_GetCount), 
[SetFace.GetElementKey\(int\)](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_GetElementKey\_System\_Int32\_), 
[SetFace.GetElementType\(\)](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_GetElementType), 
[SetFace.MakeReferenceImpl\(LinkedList<Reference\>\)](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_MakeReferenceImpl\_System\_Collections\_Generic\_LinkedList\_VM\_Managed\_Reference\_\_), 
[SetFace.AddFace\(Face\)](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_AddFace\_VM\_Managed\_CAD\_Face\_), 
[SetFace.RemoveFace\(Face\)](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_RemoveFace\_VM\_Managed\_CAD\_Face\_), 
[SetFace.RemoveAllFace\(\)](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_RemoveAllFace), 
[SetFace.PostAddToDocument\(\)](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_PostAddToDocument), 
[SetFace.PostRemoveFromDocument\(Document\)](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_PostRemoveFromDocument\_VM\_Managed\_Document\_), 
[SetFace.IsContactableWithNormalVector\(VectorBase, VectorBase\)](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_IsContactableWithNormalVector\_VM\_Managed\_VectorBase\_VM\_Managed\_VectorBase\_), 
[SetFace.ResetInvalidEntity\(\)](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_ResetInvalidEntity), 
[SetFace.GetCADBody\(\)](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_GetCADBody), 
[SetFace.WriteTemplateImpl\(XmlWriter\)](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_WriteTemplateImpl\_System\_Xml\_XmlWriter\_), 
[SetFace.ReadTemplateImpl\(XmlReader\)](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_ReadTemplateImpl\_System\_Xml\_XmlReader\_), 
[SetFace.GetMinimumDistance\(IFaceInformation, TMatrix, TMatrix, double\)](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_GetMinimumDistance\_VM\_Managed\_IFaceInformation\_VM\_Managed\_TMatrix\_VM\_Managed\_TMatrix\_System\_Double\_), 
[SetFace.GetMinimumDistanceAndDirection\(IFaceInformation, TMatrix, TMatrix, ref VectorBase\[\], double\)](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_GetMinimumDistanceAndDirection\_VM\_Managed\_IFaceInformation\_VM\_Managed\_TMatrix\_VM\_Managed\_TMatrix\_VM\_Managed\_VectorBase\_\_\_\_System\_Double\_), 
[SetFace.GetPointAndConnectivity\(ref VectorBase\[\], ref int\[\], ref int\[\], Reference, double\)](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_GetPointAndConnectivity\_VM\_Managed\_VectorBase\_\_\_\_System\_Int32\_\_\_\_System\_Int32\_\_\_\_VM\_Managed\_Reference\_System\_Double\_), 
[SetFace.GetFacetModifiedTimeAttribute\(\)](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_GetFacetModifiedTimeAttribute), 
[SetFace.GetBodyModifiedTimeAttribute\(\)](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_GetBodyModifiedTimeAttribute), 
[SetFace.AutomaticSelectionGeometryType](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_AutomaticSelectionGeometryType), 
[SetFace.GeometryType](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_GeometryType), 
[SetFace.SphereRadius](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_SphereRadius), 
[SetFace.IsSphereTreatedAsSurface](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_IsSphereTreatedAsSurface), 
[SetFace.IsBaseGeometry](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_IsBaseGeometry), 
[SetFace.IsActionGeometry](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_IsActionGeometry), 
[SetFace.AnalysisType](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_AnalysisType), 
[SetFace.MaxPenetration](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_MaxPenetration), 
[SetFace.HalfThickness](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_HalfThickness), 
[SetFace.SurfaceSmoothingType](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_SurfaceSmoothingType), 
[SetFace.Connectable](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_Connectable), 
[SetFace.IsRepresentedAsBSurface](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_IsRepresentedAsBSurface), 
[SetFace.IsFacetingForGeometryRepresentation](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_IsFacetingForGeometryRepresentation), 
[SetFace.GeometryFullName](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_GeometryFullName), 
[SetFace.GeometryNameForMultiContact](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_GeometryNameForMultiContact), 
[SetFace.ParentType](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_ParentType), 
[SetFace.ReferenceFrameType](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_ReferenceFrameType), 
[SetFace.Center](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_Center), 
[SetFace.ConnectableName](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_ConnectableName), 
[SetFace.ConnectableFullName](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_ConnectableFullName), 
[SetFace.ConnectablePostfixName](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_ConnectablePostfixName), 
[SetFace.ConnectablePosition](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_ConnectablePosition), 
[SetFace.ConnectableBody](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_ConnectableBody), 
[SetFace.Body](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_Body), 
[SetFace.ParentBody](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_ParentBody), 
[SetFace.TopologyList](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_TopologyList), 
[SetFace.FaceList](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_FaceList), 
[SetFace.AttribType](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_AttribType), 
[SetFace.ReferenceType](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_ReferenceType), 
[SetFace.ArgumentType](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_ArgumentType), 
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

### PartSetFace\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.SetFace" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PartSetFace()
```

### PartSetFace\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.SetFace" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PartSetFace(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the face set.

## Methods

### AddFace\(Face\)

Adds the face to topology list.

```csharp
public override void AddFace(Face face)
```

#### Parameters

`face` Face

The face.

### MakeReferenceImpl\(LinkedList<Reference\>\)

Makes the reference [implementation].

```csharp
protected override void MakeReferenceImpl(LinkedList<Reference> lstRef)
```

#### Parameters

`lstRef` [LinkedList](https://learn.microsoft.com/dotnet/api/system.collections.generic.linkedlist\-1)<Reference\>

The container.


