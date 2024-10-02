#  Class ReferenceSetCurve

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This class is to represent the reference for curve set.

```csharp
public class ReferenceSetCurve : Reference, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IReferencable, INamed, INavigatorItem, IVisible, IReferenceAutoContactable, IAutoContactable, IBody, IContactableRigid2D, IContactableRigid, IContactable, IGeometricalComponent, IEntityRelation, IBodyAnalysisType, IHasBody, IReferedTopologyset, ITopologyset
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
Reference ← 
[ReferenceSetCurve](VM.Managed.DAFUL.ReferenceSetCurve.md)

#### Derived

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
IHistoryObjectSerializable, 
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

### <a id="VM_Managed_DAFUL_ReferenceSetCurve__ctor_System_Runtime_Serialization_SerializationInfo_System_Runtime_Serialization_StreamingContext_"></a> ReferenceSetCurve\(SerializationInfo, StreamingContext\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.ReferenceSetCurve" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected ReferenceSetCurve(SerializationInfo info, StreamingContext context)
```

#### Parameters

`info` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)

The info.

`context` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

The context.

### <a id="VM_Managed_DAFUL_ReferenceSetCurve__ctor_VM_Managed_ObjectBase_"></a> ReferenceSetCurve\(ObjectBase\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.ReferenceSetCurve" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ReferenceSetCurve(ObjectBase obj)
```

#### Parameters

`obj` ObjectBase

The reference's object.

## Properties

### <a id="VM_Managed_DAFUL_ReferenceSetCurve_AnalysisType"></a> AnalysisType

Gets the analysis type.

```csharp
public BodyAnalysisType AnalysisType { get; }
```

#### Property Value

 [BodyAnalysisType](VM.Managed.DAFUL.BodyAnalysisType.md)

### <a id="VM_Managed_DAFUL_ReferenceSetCurve_Body"></a> Body

Gets the body.

```csharp
public IBody Body { get; }
```

#### Property Value

 IBody

### <a id="VM_Managed_DAFUL_ReferenceSetCurve_Connectable"></a> Connectable

Gets the connectable.

```csharp
public IConnectable Connectable { get; }
```

#### Property Value

 [IConnectable](VM.Managed.DAFUL.IConnectable.md)

### <a id="VM_Managed_DAFUL_ReferenceSetCurve_GeometryFullName"></a> GeometryFullName

Gets the geometry full name

```csharp
public string GeometryFullName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_ReferenceSetCurve_GeometryNameForMultiContact"></a> GeometryNameForMultiContact

Gets the name for multiple contact

```csharp
public string GeometryNameForMultiContact { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_ReferenceSetCurve_IsActionGeometry"></a> IsActionGeometry

Gets or sets a value indicating whether this instance is action geometry.

```csharp
public bool IsActionGeometry { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_ReferenceSetCurve_IsBaseGeometry"></a> IsBaseGeometry

Gets or sets a value indicating whether this instance is base geometry.

```csharp
public bool IsBaseGeometry { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_ReferenceSetCurve_IsCloseLoop"></a> IsCloseLoop

Gets value indicating whether this instance is close loop.

```csharp
public bool IsCloseLoop { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_ReferenceSetCurve_ParentBody"></a> ParentBody

Gets or sets the parent body.

```csharp
public ObjectBase ParentBody { get; }
```

#### Property Value

 ObjectBase

## Methods

### <a id="VM_Managed_DAFUL_ReferenceSetCurve_GetConnectableImpl"></a> GetConnectableImpl\(\)

Gets the connectable [implementation].

```csharp
protected virtual IConnectable GetConnectableImpl()
```

#### Returns

 [IConnectable](VM.Managed.DAFUL.IConnectable.md)

### <a id="VM_Managed_DAFUL_ReferenceSetCurve_GetDefaultMaxPenetration_System_Double__VM_Managed_IReferencable_"></a> GetDefaultMaxPenetration\(ref double, IReferencable\)

Gets the default maximum penetration.

```csharp
public bool GetDefaultMaxPenetration(ref double dMaxPenetration, IReferencable reference)
```

#### Parameters

`dMaxPenetration` [double](https://learn.microsoft.com/dotnet/api/system.double)

The maximum penetration.

`reference` IReferencable

The reference.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_ReferenceSetCurve_GetGeometryNavigatorInformation_System_Xml_XmlDocument_System_Xml_XmlElement_"></a> GetGeometryNavigatorInformation\(XmlDocument, XmlElement\)

Gets the geometry information for model navigator .

```csharp
public bool GetGeometryNavigatorInformation(XmlDocument xmlDom, XmlElement xmlEle)
```

#### Parameters

`xmlDom` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

The XmlDocument information.

`xmlEle` [XmlElement](https://learn.microsoft.com/dotnet/api/system.xml.xmlelement)

The XmlElement information.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_ReferenceSetCurve_GetPointDirection_VM_Managed_VectorBase__VM_Managed_VectorBase__VM_Managed_IReferencable_"></a> GetPointDirection\(ref VectorBase, ref VectorBase, IReferencable\)

Gets the point direction. (using facet information)

```csharp
public bool GetPointDirection(ref VectorBase point, ref VectorBase direction, IReferencable reference)
```

#### Parameters

`point` VectorBase

The point.

`direction` VectorBase

The direction.

`reference` IReferencable

The reference.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_ReferenceSetCurve_GetPoints"></a> GetPoints\(\)

Gets the points.

```csharp
public VectorBase[] GetPoints()
```

#### Returns

 VectorBase\[\]

the points.

### <a id="VM_Managed_DAFUL_ReferenceSetCurve_GetPointsAboutOrigin"></a> GetPointsAboutOrigin\(\)

Gets the points.

```csharp
public VectorBase[] GetPointsAboutOrigin()
```

#### Returns

 VectorBase\[\]

the points.

### <a id="VM_Managed_DAFUL_ReferenceSetCurve_GetProfilePoint_System_Boolean__System_Collections_Generic_List_VM_Managed_VectorBase___"></a> GetProfilePoint\(ref bool, ref List<VectorBase\>\)

Gets the profile point.

```csharp
public int GetProfilePoint(ref bool bCloseLoop, ref List<VectorBase> lst)
```

#### Parameters

`bCloseLoop` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if this instance is close loop; otherwise, <code>false</code>.

`lst` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<VectorBase\>

The points.

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

the profile point.

