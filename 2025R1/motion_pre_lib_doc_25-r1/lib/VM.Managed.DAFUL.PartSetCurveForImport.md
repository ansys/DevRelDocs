#  Class PartSetCurveForImport

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This class is to represent the face set in part.

```csharp
public class PartSetCurveForImport : SetCurveForImport, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, ISubEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, INamed, INavigatorItem, IArgument, ICurvesetComponent, ITopologyset, IContactableRigid2D, IContactableRigid, IContactable, IGeometricalComponent, IEntityRelation, IBodyAnalysisType, IHasBody, ITemplateObject, IMultiChangable, IDraw, IReferencable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
SubEntity ← 
[SetCurveBase](VM.Managed.DAFUL.SetCurveBase.md) ← 
[SetCurveForImport](VM.Managed.DAFUL.SetCurveForImport.md) ← 
[PartSetCurveForImport](VM.Managed.DAFUL.PartSetCurveForImport.md)

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
IDraw, 
IReferencable

#### Inherited Members

[SetCurveForImport.Draw\(Canvas\)](VM.Managed.DAFUL.SetCurveForImport.md\#VM\_Managed\_DAFUL\_SetCurveForImport\_Draw\_VM\_CAD\_Kernel\_Render\_Canvas\_), 
[SetCurveForImport.AddPoint\(PointBase\)](VM.Managed.DAFUL.SetCurveForImport.md\#VM\_Managed\_DAFUL\_SetCurveForImport\_AddPoint\_VM\_Managed\_PointBase\_), 
[SetCurveForImport.GetPoints\(\)](VM.Managed.DAFUL.SetCurveForImport.md\#VM\_Managed\_DAFUL\_SetCurveForImport\_GetPoints), 
[SetCurveForImport.GetPointDirection\(ref VectorBase, ref VectorBase, IReferencable\)](VM.Managed.DAFUL.SetCurveForImport.md\#VM\_Managed\_DAFUL\_SetCurveForImport\_GetPointDirection\_VM\_Managed\_VectorBase\_\_VM\_Managed\_VectorBase\_\_VM\_Managed\_IReferencable\_), 
[SetCurveForImport.GetProfilePoint\(ref bool, ref List<VectorBase\>\)](VM.Managed.DAFUL.SetCurveForImport.md\#VM\_Managed\_DAFUL\_SetCurveForImport\_GetProfilePoint\_System\_Boolean\_\_System\_Collections\_Generic\_List\_VM\_Managed\_VectorBase\_\_\_), 
[SetCurveForImport.OnDeserialization\(object\)](VM.Managed.DAFUL.SetCurveForImport.md\#VM\_Managed\_DAFUL\_SetCurveForImport\_OnDeserialization\_System\_Object\_), 
[SetCurveForImport.MakeReferenceImpl\(LinkedList<Reference\>\)](VM.Managed.DAFUL.SetCurveForImport.md\#VM\_Managed\_DAFUL\_SetCurveForImport\_MakeReferenceImpl\_System\_Collections\_Generic\_LinkedList\_VM\_Managed\_Reference\_\_), 
[SetCurveForImport.ImportPath](VM.Managed.DAFUL.SetCurveForImport.md\#VM\_Managed\_DAFUL\_SetCurveForImport\_ImportPath), 
[SetCurveForImport.NumberOfPoints](VM.Managed.DAFUL.SetCurveForImport.md\#VM\_Managed\_DAFUL\_SetCurveForImport\_NumberOfPoints), 
[SetCurveForImport.Points](VM.Managed.DAFUL.SetCurveForImport.md\#VM\_Managed\_DAFUL\_SetCurveForImport\_Points), 
[SetCurveForImport.Hide](VM.Managed.DAFUL.SetCurveForImport.md\#VM\_Managed\_DAFUL\_SetCurveForImport\_Hide), 
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

### <a id="VM_Managed_DAFUL_PartSetCurveForImport__ctor"></a> PartSetCurveForImport\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.PartSetCurveForImport" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PartSetCurveForImport()
```

### <a id="VM_Managed_DAFUL_PartSetCurveForImport__ctor_System_String_"></a> PartSetCurveForImport\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.PartSetCurveForImport" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PartSetCurveForImport(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the face set.

## Methods

### <a id="VM_Managed_DAFUL_PartSetCurveForImport_MakeReferenceImpl_System_Collections_Generic_LinkedList_VM_Managed_Reference__"></a> MakeReferenceImpl\(LinkedList<Reference\>\)

Makes the reference [implementation].

```csharp
protected override void MakeReferenceImpl(LinkedList<Reference> lstRef)
```

#### Parameters

`lstRef` [LinkedList](https://learn.microsoft.com/dotnet/api/system.collections.generic.linkedlist\-1)<Reference\>

The container.

