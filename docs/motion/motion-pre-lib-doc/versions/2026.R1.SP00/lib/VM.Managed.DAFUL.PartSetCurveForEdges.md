# Class PartSetCurveForEdges
<a id="VM_Managed_DAFUL_PartSetCurveForEdges"></a>

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This class is to represent the face set in part.

```csharp
public class PartSetCurveForEdges : SetCurveForEdges, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, ISubEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, INamed, INavigatorItem, IArgument, ICurvesetComponent, ITopologyset, IContactableRigid2D, IContactableRigid, IContactable, IGeometricalComponent, IEntityRelation, IBodyAnalysisType, IHasBody, ITemplateObject, IMultiChangable, IObjectSet, IReferencable, IPostDeserialized
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
[SubEntity](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs) ← 
[SetCurveBase](VM.Managed.DAFUL.SetCurveBase.md) ← 
[SetCurveForEdges](VM.Managed.DAFUL.SetCurveForEdges.md) ← 
[PartSetCurveForEdges](VM.Managed.DAFUL.PartSetCurveForEdges.md)

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
IArgument, 
[ICurvesetComponent](VM.Managed.DAFUL.ICurvesetComponent.md), 
ITopologyset, 
[IContactableRigid2D](VM.Managed.DAFUL.IContactableRigid2D.md), 
[IContactableRigid](VM.Managed.DAFUL.IContactableRigid.md), 
[IContactable](VM.Managed.DAFUL.IContactable.md), 
[IGeometricalComponent](VM.Managed.DAFUL.IGeometricalComponent.md), 
IEntityRelation, 
[IBodyAnalysisType](VM.Managed.DAFUL.IBodyAnalysisType.md), 
IHasBody, 
ITemplateObject, 
IMultiChangable, 
IObjectSet, 
IReferencable, 
IPostDeserialized

#### Inherited Members

[SetCurveForEdges.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.SetCurveForEdges.md\#VM\_Managed\_DAFUL\_SetCurveForEdges\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[SetCurveForEdges.ResetInvalidEntity\(\)](VM.Managed.DAFUL.SetCurveForEdges.md\#VM\_Managed\_DAFUL\_SetCurveForEdges\_ResetInvalidEntity), 
[SetCurveForEdges.AddEdge\(Edge\)](VM.Managed.DAFUL.SetCurveForEdges.md\#VM\_Managed\_DAFUL\_SetCurveForEdges\_AddEdge\_VM\_Managed\_CAD\_Edge\_), 
[SetCurveForEdges.RemoveEdge\(Edge\)](VM.Managed.DAFUL.SetCurveForEdges.md\#VM\_Managed\_DAFUL\_SetCurveForEdges\_RemoveEdge\_VM\_Managed\_CAD\_Edge\_), 
[SetCurveForEdges.RemoveAllEdge\(\)](VM.Managed.DAFUL.SetCurveForEdges.md\#VM\_Managed\_DAFUL\_SetCurveForEdges\_RemoveAllEdge), 
[SetCurveForEdges.GetPoints\(\)](VM.Managed.DAFUL.SetCurveForEdges.md\#VM\_Managed\_DAFUL\_SetCurveForEdges\_GetPoints), 
[SetCurveForEdges.GetCount\(\)](VM.Managed.DAFUL.SetCurveForEdges.md\#VM\_Managed\_DAFUL\_SetCurveForEdges\_GetCount), 
[SetCurveForEdges.GetElementKey\(int\)](VM.Managed.DAFUL.SetCurveForEdges.md\#VM\_Managed\_DAFUL\_SetCurveForEdges\_GetElementKey\_System\_Int32\_), 
[SetCurveForEdges.GetElementType\(\)](VM.Managed.DAFUL.SetCurveForEdges.md\#VM\_Managed\_DAFUL\_SetCurveForEdges\_GetElementType), 
[SetCurveForEdges.PostAddToDocument\(\)](VM.Managed.DAFUL.SetCurveForEdges.md\#VM\_Managed\_DAFUL\_SetCurveForEdges\_PostAddToDocument), 
[SetCurveForEdges.PostRemoveFromDocument\(Document\)](VM.Managed.DAFUL.SetCurveForEdges.md\#VM\_Managed\_DAFUL\_SetCurveForEdges\_PostRemoveFromDocument\_VM\_Managed\_Document\_), 
[SetCurveForEdges.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.DAFUL.SetCurveForEdges.md\#VM\_Managed\_DAFUL\_SetCurveForEdges\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[SetCurveForEdges.LinkRequestDestroy\(object, LinkEventArgs\)](VM.Managed.DAFUL.SetCurveForEdges.md\#VM\_Managed\_DAFUL\_SetCurveForEdges\_LinkRequestDestroy\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[SetCurveForEdges.FixUp\(ObjectBase\)](VM.Managed.DAFUL.SetCurveForEdges.md\#VM\_Managed\_DAFUL\_SetCurveForEdges\_FixUp\_VM\_Managed\_ObjectBase\_), 
[SetCurveForEdges.GetProfilePoint\(ref bool, ref List<VectorBase\>\)](VM.Managed.DAFUL.SetCurveForEdges.md\#VM\_Managed\_DAFUL\_SetCurveForEdges\_GetProfilePoint\_System\_Boolean\_\_System\_Collections\_Generic\_List\_VM\_Managed\_VectorBase\_\_\_), 
[SetCurveForEdges.GetPointDirection\(ref VectorBase, ref VectorBase, IReferencable\)](VM.Managed.DAFUL.SetCurveForEdges.md\#VM\_Managed\_DAFUL\_SetCurveForEdges\_GetPointDirection\_VM\_Managed\_VectorBase\_\_VM\_Managed\_VectorBase\_\_VM\_Managed\_IReferencable\_), 
[SetCurveForEdges.MakeReferenceImpl\(LinkedList<Reference\>\)](VM.Managed.DAFUL.SetCurveForEdges.md\#VM\_Managed\_DAFUL\_SetCurveForEdges\_MakeReferenceImpl\_System\_Collections\_Generic\_LinkedList\_VM\_Managed\_Reference\_\_), 
[SetCurveForEdges.TopologyList](VM.Managed.DAFUL.SetCurveForEdges.md\#VM\_Managed\_DAFUL\_SetCurveForEdges\_TopologyList), 
[SetCurveForEdges.EdgeList](VM.Managed.DAFUL.SetCurveForEdges.md\#VM\_Managed\_DAFUL\_SetCurveForEdges\_EdgeList), 
[SetCurveForEdges.MaximumTolerance](VM.Managed.DAFUL.SetCurveForEdges.md\#VM\_Managed\_DAFUL\_SetCurveForEdges\_MaximumTolerance), 
[SetCurveForEdges.MaximumLength](VM.Managed.DAFUL.SetCurveForEdges.md\#VM\_Managed\_DAFUL\_SetCurveForEdges\_MaximumLength), 
[SetCurveForEdges.MaximumAngle](VM.Managed.DAFUL.SetCurveForEdges.md\#VM\_Managed\_DAFUL\_SetCurveForEdges\_MaximumAngle), 
[SetCurveForEdges.IsReverseCurveDirection](VM.Managed.DAFUL.SetCurveForEdges.md\#VM\_Managed\_DAFUL\_SetCurveForEdges\_IsReverseCurveDirection), 
[SetCurveBase.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.SetCurveBase.md\#VM\_Managed\_DAFUL\_SetCurveBase\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[SetCurveBase.GetCADBody\(\)](VM.Managed.DAFUL.SetCurveBase.md\#VM\_Managed\_DAFUL\_SetCurveBase\_GetCADBody), 
[SetCurveBase.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)](VM.Managed.DAFUL.SetCurveBase.md\#VM\_Managed\_DAFUL\_SetCurveBase\_GetModelNavigatorInformationImpl\_System\_Xml\_XmlDocument\_System\_Xml\_XmlElement\_System\_Boolean\_), 
[SetCurveBase.GetPoints\(\)](VM.Managed.DAFUL.SetCurveBase.md\#VM\_Managed\_DAFUL\_SetCurveBase\_GetPoints), 
[SetCurveBase.GetPointsAboutOrigin\(\)](VM.Managed.DAFUL.SetCurveBase.md\#VM\_Managed\_DAFUL\_SetCurveBase\_GetPointsAboutOrigin), 
[SetCurveBase.GetProfilePoint\(ref bool, ref List<VectorBase\>\)](VM.Managed.DAFUL.SetCurveBase.md\#VM\_Managed\_DAFUL\_SetCurveBase\_GetProfilePoint\_System\_Boolean\_\_System\_Collections\_Generic\_List\_VM\_Managed\_VectorBase\_\_\_), 
[SetCurveBase.GetDefaultMaxPenetration\(ref double, IReferencable\)](VM.Managed.DAFUL.SetCurveBase.md\#VM\_Managed\_DAFUL\_SetCurveBase\_GetDefaultMaxPenetration\_System\_Double\_\_VM\_Managed\_IReferencable\_), 
[SetCurveBase.GetGeometryNavigatorInformation\(XmlDocument, XmlElement\)](VM.Managed.DAFUL.SetCurveBase.md\#VM\_Managed\_DAFUL\_SetCurveBase\_GetGeometryNavigatorInformation\_System\_Xml\_XmlDocument\_System\_Xml\_XmlElement\_), 
[SetCurveBase.GetPointDirection\(ref VectorBase, ref VectorBase, IReferencable\)](VM.Managed.DAFUL.SetCurveBase.md\#VM\_Managed\_DAFUL\_SetCurveBase\_GetPointDirection\_VM\_Managed\_VectorBase\_\_VM\_Managed\_VectorBase\_\_VM\_Managed\_IReferencable\_), 
[SetCurveBase.GetAkimaSpline\(double\[\], double\[\], double\[\]\)](VM.Managed.DAFUL.SetCurveBase.md\#VM\_Managed\_DAFUL\_SetCurveBase\_GetAkimaSpline\_System\_Double\_\_\_System\_Double\_\_\_System\_Double\_\_\_), 
[SetCurveBase.GetAkimaSpline\(VectorBase\[\], int\)](VM.Managed.DAFUL.SetCurveBase.md\#VM\_Managed\_DAFUL\_SetCurveBase\_GetAkimaSpline\_VM\_Managed\_VectorBase\_\_\_System\_Int32\_), 
[SetCurveBase.GetAkimaSpline\(double\[\], double\[\], double\[\], int\)](VM.Managed.DAFUL.SetCurveBase.md\#VM\_Managed\_DAFUL\_SetCurveBase\_GetAkimaSpline\_System\_Double\_\_\_System\_Double\_\_\_System\_Double\_\_\_System\_Int32\_), 
[SetCurveBase.AttribType](VM.Managed.DAFUL.SetCurveBase.md\#VM\_Managed\_DAFUL\_SetCurveBase\_AttribType), 
[SetCurveBase.ParentBody](VM.Managed.DAFUL.SetCurveBase.md\#VM\_Managed\_DAFUL\_SetCurveBase\_ParentBody), 
[SetCurveBase.IsCloseLoop](VM.Managed.DAFUL.SetCurveBase.md\#VM\_Managed\_DAFUL\_SetCurveBase\_IsCloseLoop), 
[SetCurveBase.GeometryFullName](VM.Managed.DAFUL.SetCurveBase.md\#VM\_Managed\_DAFUL\_SetCurveBase\_GeometryFullName), 
[SetCurveBase.GeometryNameForMultiContact](VM.Managed.DAFUL.SetCurveBase.md\#VM\_Managed\_DAFUL\_SetCurveBase\_GeometryNameForMultiContact), 
[SetCurveBase.ReferenceType](VM.Managed.DAFUL.SetCurveBase.md\#VM\_Managed\_DAFUL\_SetCurveBase\_ReferenceType), 
[SetCurveBase.ArgumentType](VM.Managed.DAFUL.SetCurveBase.md\#VM\_Managed\_DAFUL\_SetCurveBase\_ArgumentType), 
[SetCurveBase.Connectable](VM.Managed.DAFUL.SetCurveBase.md\#VM\_Managed\_DAFUL\_SetCurveBase\_Connectable), 
[SetCurveBase.IsBaseGeometry](VM.Managed.DAFUL.SetCurveBase.md\#VM\_Managed\_DAFUL\_SetCurveBase\_IsBaseGeometry), 
[SetCurveBase.IsActionGeometry](VM.Managed.DAFUL.SetCurveBase.md\#VM\_Managed\_DAFUL\_SetCurveBase\_IsActionGeometry), 
[SetCurveBase.AnalysisType](VM.Managed.DAFUL.SetCurveBase.md\#VM\_Managed\_DAFUL\_SetCurveBase\_AnalysisType), 
[SetCurveBase.Body](VM.Managed.DAFUL.SetCurveBase.md\#VM\_Managed\_DAFUL\_SetCurveBase\_Body), 
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

### <a id="VM_Managed_DAFUL_PartSetCurveForEdges__ctor"></a> PartSetCurveForEdges\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.PartSetCurveForEdges" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PartSetCurveForEdges()
```

### <a id="VM_Managed_DAFUL_PartSetCurveForEdges__ctor_System_String_"></a> PartSetCurveForEdges\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.PartSetCurveForEdges" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PartSetCurveForEdges(string strName)
```

#### Parameters

`strName` string

Name of the face set.

## Methods

### <a id="VM_Managed_DAFUL_PartSetCurveForEdges_AddEdge_VM_Managed_CAD_Edge_"></a> AddEdge\(Edge\)

Adds the edge to topology list.

```csharp
public override void AddEdge(Edge edge)
```

#### Parameters

`edge` Edge

The edge.

### <a id="VM_Managed_DAFUL_PartSetCurveForEdges_MakeReferenceImpl_System_Collections_Generic_LinkedList_VM_Managed_Reference__"></a> MakeReferenceImpl\(LinkedList<Reference\>\)

Makes the reference [implementation].

```csharp
protected override void MakeReferenceImpl(LinkedList<Reference> lstRef)
```

#### Parameters

`lstRef` LinkedList<Reference\>

The container.

