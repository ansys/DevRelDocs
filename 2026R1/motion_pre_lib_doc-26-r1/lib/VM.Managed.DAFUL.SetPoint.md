# Class SetPoint
<a id="VM_Managed_DAFUL_SetPoint"></a>

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This class is to represent a specific geometry region.

```csharp
public class SetPoint : SetPointBase, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, ISubEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, INamed, INavigatorItem, IContactableRigid3D, IContactableRigid, IContactable3D, IContactable, IBodyAnalysisType, IObjectSet, IReferencable, ITemplateObject, IChainedSegmentConnector, IChainedSegmentContact, IArgument, IMultiChangable, IFaceSetComponent, ITopologyset, IConnectable, IEntityRelation, IHasBody, IMarkerParent, ITemperatureComponent, IConvectionComponent, IHeatFlowComponent, IHeatFluxComponent, IGeometricalComponent, IFaceSetInformation, IFaceInformation, IGapTarget, IPostDeserialized, IPostOpenDocumentForFaceset, IPointSetComponent
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
[SubEntity](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs) ← 
[SetFace](VM.Managed.DAFUL.SetFace.md) ← 
[SetPointBase](VM.Managed.DAFUL.SetPointBase.md) ← 
[SetPoint](VM.Managed.DAFUL.SetPoint.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
ILinkContainerEvent, 
IVerifiable, 
[IHistoryObjectSerializable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/Interfaces.cs), 
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
IPostOpenDocumentForFaceset, 
[IPointSetComponent](VM.Managed.DAFUL.IPointSetComponent.md)

#### Inherited Members

[SetPointBase.m\_lstRange](VM.Managed.DAFUL.SetPointBase.md\#VM\_Managed\_DAFUL\_SetPointBase\_m\_lstRange), 
[SetPointBase.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.DAFUL.SetPointBase.md\#VM\_Managed\_DAFUL\_SetPointBase\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[SetPointBase.AddRange\(Range\)](VM.Managed.DAFUL.SetPointBase.md\#VM\_Managed\_DAFUL\_SetPointBase\_AddRange\_VM\_Managed\_Range\_), 
[SetPointBase.OnDeserialization\(object\)](VM.Managed.DAFUL.SetPointBase.md\#VM\_Managed\_DAFUL\_SetPointBase\_OnDeserialization\_System\_Object\_), 
[SetPointBase.Ranges](VM.Managed.DAFUL.SetPointBase.md\#VM\_Managed\_DAFUL\_SetPointBase\_Ranges), 
[SetFace.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[SetFace.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[SetFace.LinkRequestDestroy\(object, LinkEventArgs\)](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_LinkRequestDestroy\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[SetFace.FixUp\(ObjectBase\)](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_FixUp\_VM\_Managed\_ObjectBase\_), 
[SetFace.GetTargetListForUpdate\(\)](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_GetTargetListForUpdate), 
[SetFace.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_GetModelNavigatorInformationImpl\_System\_Xml\_XmlDocument\_System\_Xml\_XmlElement\_System\_Boolean\_), 
[SetFace.GetGeometryNavigatorInformation\(XmlDocument, XmlElement\)](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_GetGeometryNavigatorInformation\_System\_Xml\_XmlDocument\_System\_Xml\_XmlElement\_), 
[SetFace.GetFacetOption\(\)](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_GetFacetOption), 
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
[SetFace.GetPointAndConnectivity\(FacetOption, ref VectorBase\[\], ref int\[\], ref int\[\], Reference, double\)](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_GetPointAndConnectivity\_VM\_Models\_Pre\_FacetOption\_VM\_Managed\_VectorBase\_\_\_\_System\_Int32\_\_\_\_System\_Int32\_\_\_\_VM\_Managed\_Reference\_System\_Double\_), 
[SetFace.GetFacetModifiedTimeAttribute\(\)](VM.Managed.DAFUL.SetFace.md\#VM\_Managed\_DAFUL\_SetFace\_GetFacetModifiedTimeAttribute), 
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
[SubEntity.Initialize\(Unit.ConvertFactor\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
[SubEntity.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
[SubEntity.FixUp\(ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
[SubEntity.WriteTemplateImpl\(XmlWriter\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
[SubEntity.ReadTemplateImpl\(XmlReader\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
[SubEntity.Name](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
[SubEntity.FullName](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
[SubEntity.NonSymmetricName](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
[SubEntity.DisplayName](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
[SubEntity.IsEnabled](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
[SubEntity.Comment](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
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

### <a id="VM_Managed_DAFUL_SetPoint__ctor"></a> SetPoint\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.SetPoint" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SetPoint()
```

### <a id="VM_Managed_DAFUL_SetPoint__ctor_System_String_"></a> SetPoint\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.SetPoint" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SetPoint(string strName)
```

#### Parameters

`strName` string

Name of the point set.

## Methods

### <a id="VM_Managed_DAFUL_SetPoint_GetFormattedData_VM_Managed_DAFUL_SetPoint_"></a> GetFormattedData\(SetPoint\)

Get formatted data from SetPoint object.

```csharp
public static string GetFormattedData(SetPoint pointset)
```

#### Parameters

`pointset` [SetPoint](VM.Managed.DAFUL.SetPoint.md)

The SetPoint object.

#### Returns

 string

The formatted data.

### <a id="VM_Managed_DAFUL_SetPoint_GetFormattedData_VM_Managed_CAD_Face_"></a> GetFormattedData\(Face\)

Get formatted data from Face object.

```csharp
public static string GetFormattedData(Face face)
```

#### Parameters

`face` Face

The Face object.

#### Returns

 string

The formatted data.

### <a id="VM_Managed_DAFUL_SetPoint_GetFormattedData_VM_Managed_Range_"></a> GetFormattedData\(Range\)

Get formatted data from Range object.

```csharp
public static string GetFormattedData(Range range)
```

#### Parameters

`range` Range

The Range object.

#### Returns

 string

The formatted data.

### <a id="VM_Managed_DAFUL_SetPoint_GetFormattedData_VM_Managed_TransformBase_VM_Managed_Variable_"></a> GetFormattedData\(TransformBase, Variable\)

Get formatted data from Range object.

```csharp
public static string GetFormattedData(TransformBase transform, Variable varRadius)
```

#### Parameters

`transform` TransformBase

The transform.

`varRadius` Variable

The radius.

#### Returns

 string

The formatted data.

### <a id="VM_Managed_DAFUL_SetPoint_GetObject_System_String__"></a> GetObject\(ref string\)

Get SetPoint object from formatted data.

```csharp
public static SetPoint GetObject(ref string strFormattedData)
```

#### Parameters

`strFormattedData` string

The formatted data.

#### Returns

 [SetPoint](VM.Managed.DAFUL.SetPoint.md)

The SetPoint object.

