#  Class SetCurveForEdges

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This class is to represent the curve set for edges.

```csharp
public class SetCurveForEdges : SetCurveBase, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, ISubEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, INamed, INavigatorItem, IArgument, ICurvesetComponent, ITopologyset, IContactableRigid2D, IContactableRigid, IContactable, IGeometricalComponent, IEntityRelation, IBodyAnalysisType, IHasBody, ITemplateObject, IMultiChangable, IObjectSet, IReferencable, IPostDeserialized
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
SubEntity ← 
[SetCurveBase](VM.Managed.DAFUL.SetCurveBase.md) ← 
[SetCurveForEdges](VM.Managed.DAFUL.SetCurveForEdges.md)

#### Derived

[PartSetCurveForEdges](VM.Managed.DAFUL.PartSetCurveForEdges.md)

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
IObjectSet, 
IReferencable, 
IPostDeserialized

#### Inherited Members

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

### <a id="VM_Managed_DAFUL_SetCurveForEdges__ctor"></a> SetCurveForEdges\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.SetCurveForEdges" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SetCurveForEdges()
```

### <a id="VM_Managed_DAFUL_SetCurveForEdges__ctor_System_String_"></a> SetCurveForEdges\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.SetCurveForEdges" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SetCurveForEdges(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the face set.

## Properties

### <a id="VM_Managed_DAFUL_SetCurveForEdges_EdgeList"></a> EdgeList

Gets the edge link list.

```csharp
public IList<Edge> EdgeList { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<Edge\>

### <a id="VM_Managed_DAFUL_SetCurveForEdges_IsReverseCurveDirection"></a> IsReverseCurveDirection

The flag that indicate reserve curve direction

```csharp
public bool IsReverseCurveDirection { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_SetCurveForEdges_MaximumAngle"></a> MaximumAngle

The maximum angle

```csharp
public ExpressionValueVariable MaximumAngle { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_SetCurveForEdges_MaximumLength"></a> MaximumLength

The maximum length

```csharp
public ExpressionValueVariable MaximumLength { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_SetCurveForEdges_MaximumTolerance"></a> MaximumTolerance

The maximum tolerance

```csharp
public ExpressionValueVariable MaximumTolerance { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_SetCurveForEdges_TopologyList"></a> TopologyList

Gets or sets the topology list.

```csharp
public TopologyList<Edge> TopologyList { get; set; }
```

#### Property Value

 [TopologyList](VM.Managed.DAFUL.TopologyList\-1.md)<Edge\>

## Methods

### <a id="VM_Managed_DAFUL_SetCurveForEdges_AddEdge_VM_Managed_CAD_Edge_"></a> AddEdge\(Edge\)

Adds the edge to topology list.

```csharp
public virtual void AddEdge(Edge edge)
```

#### Parameters

`edge` Edge

The edge.

### <a id="VM_Managed_DAFUL_SetCurveForEdges_FixUp_VM_Managed_ObjectBase_"></a> FixUp\(ObjectBase\)

Fix up object after update contents

```csharp
public override bool FixUp(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

The old object

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true if success, otherwise false.

### <a id="VM_Managed_DAFUL_SetCurveForEdges_GetCount"></a> GetCount\(\)

Gets the edge's count.

```csharp
public int GetCount()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

The edge's count.

### <a id="VM_Managed_DAFUL_SetCurveForEdges_GetElementKey_System_Int32_"></a> GetElementKey\(int\)

Gets the element(edge) key.

```csharp
public UIntPtr GetElementKey(int nIndex)
```

#### Parameters

`nIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The Index.

#### Returns

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The element(edge) key.

### <a id="VM_Managed_DAFUL_SetCurveForEdges_GetElementType"></a> GetElementType\(\)

Gets the type of the element(edge).

```csharp
public Type GetElementType()
```

#### Returns

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

The type of the element(edge).

### <a id="VM_Managed_DAFUL_SetCurveForEdges_GetPointDirection_VM_Managed_VectorBase__VM_Managed_VectorBase__VM_Managed_IReferencable_"></a> GetPointDirection\(ref VectorBase, ref VectorBase, IReferencable\)

Gets point direction

```csharp
public override bool GetPointDirection(ref VectorBase point, ref VectorBase direction, IReferencable reference)
```

#### Parameters

`point` VectorBase

The point

`direction` VectorBase

The direction

`reference` IReferencable

The reference entity

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_SetCurveForEdges_GetPoints"></a> GetPoints\(\)

Get points

```csharp
public override VectorBase[] GetPoints()
```

#### Returns

 VectorBase\[\]

The array of points

### <a id="VM_Managed_DAFUL_SetCurveForEdges_GetProfilePoint_System_Boolean__System_Collections_Generic_List_VM_Managed_VectorBase___"></a> GetProfilePoint\(ref bool, ref List<VectorBase\>\)

Gets the profile point

```csharp
public override int GetProfilePoint(ref bool bCloseLoop, ref List<VectorBase> lst)
```

#### Parameters

`bCloseLoop` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

close loop flag

`lst` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<VectorBase\>

The position list

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_SetCurveForEdges_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initialize the <xref href="VM.Managed.DAFUL.SetCurveForEdges" data-throw-if-not-resolved="false"></xref>

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The convert factor

### <a id="VM_Managed_DAFUL_SetCurveForEdges_LinkRequestDestroy_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestDestroy\(object, LinkEventArgs\)

Request for destroy the linked object.

```csharp
protected override void LinkRequestDestroy(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_SetCurveForEdges_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Link request update

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The notifier

`arg` LinkEventArgs

The event argument

### <a id="VM_Managed_DAFUL_SetCurveForEdges_MakeReferenceImpl_System_Collections_Generic_LinkedList_VM_Managed_Reference__"></a> MakeReferenceImpl\(LinkedList<Reference\>\)

Makes the reference [implementation].

```csharp
protected virtual void MakeReferenceImpl(LinkedList<Reference> lstRef)
```

#### Parameters

`lstRef` [LinkedList](https://learn.microsoft.com/dotnet/api/system.collections.generic.linkedlist\-1)<Reference\>

The container.

### <a id="VM_Managed_DAFUL_SetCurveForEdges_PostAddToDocument"></a> PostAddToDocument\(\)

Called after added to document.

```csharp
public override void PostAddToDocument()
```

### <a id="VM_Managed_DAFUL_SetCurveForEdges_PostRemoveFromDocument_VM_Managed_Document_"></a> PostRemoveFromDocument\(Document\)

Called after removed from document
<param name="document">The document</param>

```csharp
public override void PostRemoveFromDocument(Document document)
```

#### Parameters

`document` Document

### <a id="VM_Managed_DAFUL_SetCurveForEdges_RemoveAllEdge"></a> RemoveAllEdge\(\)

Removes all face from topology list.

```csharp
public void RemoveAllEdge()
```

### <a id="VM_Managed_DAFUL_SetCurveForEdges_RemoveEdge_VM_Managed_CAD_Edge_"></a> RemoveEdge\(Edge\)

Removes the edge from topology list.

```csharp
public void RemoveEdge(Edge edge)
```

#### Parameters

`edge` Edge

The edge.

### <a id="VM_Managed_DAFUL_SetCurveForEdges_ResetInvalidEntity"></a> ResetInvalidEntity\(\)

Reset invalid entity.

```csharp
public override void ResetInvalidEntity()
```

