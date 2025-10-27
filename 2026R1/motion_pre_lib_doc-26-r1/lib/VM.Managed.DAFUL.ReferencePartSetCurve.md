# Class ReferencePartSetCurve
<a id="VM_Managed_DAFUL_ReferencePartSetCurve"></a>

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This class is to represent the reference for curve set.

```csharp
public class ReferencePartSetCurve : ReferenceSetCurve, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IReferencable, INamed, INavigatorItem, IVisible, IReferenceAutoContactable, IAutoContactable, IBody, IContactableRigid2D, IContactableRigid, IContactable, IGeometricalComponent, IEntityRelation, IBodyAnalysisType, IHasBody, IReferedTopologyset, ITopologyset
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
Reference ← 
[ReferenceSetCurve](VM.Managed.DAFUL.ReferenceSetCurve.md) ← 
[ReferencePartSetCurve](VM.Managed.DAFUL.ReferencePartSetCurve.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
IObjectBase, 
IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider, 
IHasKeyObject, 
ILinkContainerEvent, 
IVerifiable, 
[IHistoryObjectSerializable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/Interfaces.cs), 
IAttributeContainer, 
IReferencable, 
INamed, 
INavigatorItem, 
IVisible, 
IReferenceAutoContactable, 
IAutoContactable, 
IBody, 
[IContactableRigid2D](VM.Managed.DAFUL.IContactableRigid2D.md), 
[IContactableRigid](VM.Managed.DAFUL.IContactableRigid.md), 
[IContactable](VM.Managed.DAFUL.IContactable.md), 
[IGeometricalComponent](VM.Managed.DAFUL.IGeometricalComponent.md), 
IEntityRelation, 
[IBodyAnalysisType](VM.Managed.DAFUL.IBodyAnalysisType.md), 
IHasBody, 
IReferedTopologyset, 
ITopologyset

#### Inherited Members

[ReferenceSetCurve.GetConnectableImpl\(\)](VM.Managed.DAFUL.ReferenceSetCurve.md\#VM\_Managed\_DAFUL\_ReferenceSetCurve\_GetConnectableImpl), 
[ReferenceSetCurve.GetPoints\(\)](VM.Managed.DAFUL.ReferenceSetCurve.md\#VM\_Managed\_DAFUL\_ReferenceSetCurve\_GetPoints), 
[ReferenceSetCurve.GetPointsAboutOrigin\(\)](VM.Managed.DAFUL.ReferenceSetCurve.md\#VM\_Managed\_DAFUL\_ReferenceSetCurve\_GetPointsAboutOrigin), 
[ReferenceSetCurve.GetProfilePoint\(ref bool, ref List<VectorBase\>\)](VM.Managed.DAFUL.ReferenceSetCurve.md\#VM\_Managed\_DAFUL\_ReferenceSetCurve\_GetProfilePoint\_System\_Boolean\_\_System\_Collections\_Generic\_List\_VM\_Managed\_VectorBase\_\_\_), 
[ReferenceSetCurve.GetDefaultMaxPenetration\(ref double, IReferencable\)](VM.Managed.DAFUL.ReferenceSetCurve.md\#VM\_Managed\_DAFUL\_ReferenceSetCurve\_GetDefaultMaxPenetration\_System\_Double\_\_VM\_Managed\_IReferencable\_), 
[ReferenceSetCurve.GetGeometryNavigatorInformation\(XmlDocument, XmlElement\)](VM.Managed.DAFUL.ReferenceSetCurve.md\#VM\_Managed\_DAFUL\_ReferenceSetCurve\_GetGeometryNavigatorInformation\_System\_Xml\_XmlDocument\_System\_Xml\_XmlElement\_), 
[ReferenceSetCurve.GetPointDirection\(ref VectorBase, ref VectorBase, IReferencable\)](VM.Managed.DAFUL.ReferenceSetCurve.md\#VM\_Managed\_DAFUL\_ReferenceSetCurve\_GetPointDirection\_VM\_Managed\_VectorBase\_\_VM\_Managed\_VectorBase\_\_VM\_Managed\_IReferencable\_), 
[ReferenceSetCurve.ParentBody](VM.Managed.DAFUL.ReferenceSetCurve.md\#VM\_Managed\_DAFUL\_ReferenceSetCurve\_ParentBody), 
[ReferenceSetCurve.IsCloseLoop](VM.Managed.DAFUL.ReferenceSetCurve.md\#VM\_Managed\_DAFUL\_ReferenceSetCurve\_IsCloseLoop), 
[ReferenceSetCurve.AnalysisType](VM.Managed.DAFUL.ReferenceSetCurve.md\#VM\_Managed\_DAFUL\_ReferenceSetCurve\_AnalysisType), 
[ReferenceSetCurve.Connectable](VM.Managed.DAFUL.ReferenceSetCurve.md\#VM\_Managed\_DAFUL\_ReferenceSetCurve\_Connectable), 
[ReferenceSetCurve.Body](VM.Managed.DAFUL.ReferenceSetCurve.md\#VM\_Managed\_DAFUL\_ReferenceSetCurve\_Body), 
[ReferenceSetCurve.IsBaseGeometry](VM.Managed.DAFUL.ReferenceSetCurve.md\#VM\_Managed\_DAFUL\_ReferenceSetCurve\_IsBaseGeometry), 
[ReferenceSetCurve.IsActionGeometry](VM.Managed.DAFUL.ReferenceSetCurve.md\#VM\_Managed\_DAFUL\_ReferenceSetCurve\_IsActionGeometry), 
[ReferenceSetCurve.GeometryFullName](VM.Managed.DAFUL.ReferenceSetCurve.md\#VM\_Managed\_DAFUL\_ReferenceSetCurve\_GeometryFullName), 
[ReferenceSetCurve.GeometryNameForMultiContact](VM.Managed.DAFUL.ReferenceSetCurve.md\#VM\_Managed\_DAFUL\_ReferenceSetCurve\_GeometryNameForMultiContact), 
Reference.LinkAddedToDocument\(object, AddToDocEventArgs\), 
Reference.SetModified\(ModifiedResult.ModifiedType\), 
Reference.SetModified\(\), 
Reference.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\), 
Reference.GetContactables\(\), 
Reference.IsAutoContactable\(\), 
Reference.IsOwner\(Reference\), 
Reference.LinkRequestUpdate\(object, LinkEventArgs\), 
Reference.LinkRequestDestroy\(object, LinkEventArgs\), 
Reference.GetTransform\(Unit\), 
Reference.GetFullTransform\(Unit\), 
Reference.GetTotalSubSystemName\(Document3D, ObjectBase\), 
Reference.GetTotalSubSystemNameCore\(Document3D, Document3D, ref Stack<string\>, ref ValueType\), 
Reference.IsVisible, 
Reference.Layer, 
Reference.FullTransformationInKernel, 
Reference.FullTransformation, 
Reference.Transformation, 
Reference.Prototype, 
Reference.Object, 
Reference.OwnerInstance, 
Reference.ClearChildInfoBeforeDeserialize, 
Reference.NonSymmetricName, 
Reference.FullName, 
Reference.Name, 
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

### <a id="VM_Managed_DAFUL_ReferencePartSetCurve__ctor_System_Runtime_Serialization_SerializationInfo_System_Runtime_Serialization_StreamingContext_"></a> ReferencePartSetCurve\(SerializationInfo, StreamingContext\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.ReferencePartSetCurve" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected ReferencePartSetCurve(SerializationInfo info, StreamingContext context)
```

#### Parameters

`info` SerializationInfo

The info.

`context` StreamingContext

The context.

### <a id="VM_Managed_DAFUL_ReferencePartSetCurve__ctor_VM_Managed_ObjectBase_"></a> ReferencePartSetCurve\(ObjectBase\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.ReferencePartSetCurve" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ReferencePartSetCurve(ObjectBase obj)
```

#### Parameters

`obj` ObjectBase

The reference's object.

## Methods

### <a id="VM_Managed_DAFUL_ReferencePartSetCurve_GetConnectableImpl"></a> GetConnectableImpl\(\)

Gets the connectable [implementation].

```csharp
protected override IConnectable GetConnectableImpl()
```

#### Returns

 [IConnectable](VM.Managed.DAFUL.IConnectable.md)

