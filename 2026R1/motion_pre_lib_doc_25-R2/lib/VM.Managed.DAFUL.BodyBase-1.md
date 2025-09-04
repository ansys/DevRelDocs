#  Class BodyBase<TProperty\>

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This base class is to represent the body base.

```csharp
public abstract class BodyBase<TProperty> : Entity<TProperty>, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup, IMarkerCreatable, IFacesetCreatable, ICurvesetCreatable, IConnectableNotReference, IReferencable, IConnectableHasGeometry, IConnectable, IMarkerParent, IEntityRelation, IHasBody, IBody where TProperty : BodyPropertyBase, new()
```

#### Type Parameters

`TProperty` 

The type of the property.

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<EntityEventCore\> ← 
ContainerObject<EntityEventCore\> ← 
EntityBase ← 
Entity<TProperty\> ← 
[BodyBase<TProperty\>](VM.Managed.DAFUL.BodyBase\-1.md)

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
[IMarkerCreatable](VM.Managed.DAFUL.IMarkerCreatable.md), 
[IFacesetCreatable](VM.Managed.DAFUL.IFacesetCreatable.md), 
[ICurvesetCreatable](VM.Managed.DAFUL.ICurvesetCreatable.md), 
[IConnectableNotReference](VM.Managed.DAFUL.IConnectableNotReference.md), 
IReferencable, 
[IConnectableHasGeometry](VM.Managed.DAFUL.IConnectableHasGeometry.md), 
[IConnectable](VM.Managed.DAFUL.IConnectable.md), 
[IMarkerParent](VM.Managed.DAFUL.IMarkerParent.md), 
IEntityRelation, 
IHasBody, 
IBody

#### Inherited Members

Entity<TProperty\>.Initialize\(Unit.ConvertFactor\), 
Entity<TProperty\>.GetUnnamedObjectName\(object\), 
Entity<TProperty\>.FindLocal\(string\), 
Entity<TProperty\>.Property, 
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

### <a id="VM_Managed_DAFUL_BodyBase_1__ctor"></a> BodyBase\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.BodyBase%601" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected BodyBase()
```

### <a id="VM_Managed_DAFUL_BodyBase_1__ctor_System_String_"></a> BodyBase\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.BodyBase%601" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BodyBase(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the body base.

## Properties

### <a id="VM_Managed_DAFUL_BodyBase_1_Body"></a> Body

Gets the body.

```csharp
public IBody Body { get; }
```

#### Property Value

 IBody

### <a id="VM_Managed_DAFUL_BodyBase_1_ConnectableBody"></a> ConnectableBody

Gets the connectable body.

```csharp
public ObjectBase ConnectableBody { get; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_DAFUL_BodyBase_1_ConnectableFullName"></a> ConnectableFullName

Gets the full name of the connectable.

```csharp
public string ConnectableFullName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_BodyBase_1_ConnectableName"></a> ConnectableName

Gets the name of the connectable.

```csharp
public string ConnectableName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_BodyBase_1_ConnectablePosition"></a> ConnectablePosition

Sets the connectable position.

```csharp
public Vector ConnectablePosition { set; }
```

#### Property Value

 Vector

### <a id="VM_Managed_DAFUL_BodyBase_1_ConnectablePostfixName"></a> ConnectablePostfixName

Sets the postfix name of the connectable.

```csharp
public string ConnectablePostfixName { set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_BodyBase_1_Geometry"></a> Geometry

Gets the geometry.

```csharp
public virtual List<Body> Geometry { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<Body\>

### <a id="VM_Managed_DAFUL_BodyBase_1_HasLayerExplicitly"></a> HasLayerExplicitly

Gets a value indicating whether object has a layer explicitly.

```csharp
protected override bool HasLayerExplicitly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_BodyBase_1_IsVisible"></a> IsVisible

Gets or sets the visible state.

```csharp
public override bool IsVisible { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_BodyBase_1_Layer"></a> Layer

Gets or sets the layer.

```csharp
public override Layer Layer { get; set; }
```

#### Property Value

 Layer

### <a id="VM_Managed_DAFUL_BodyBase_1_ParentType"></a> ParentType

Gets the type of the marker's parent.

```csharp
public MarkerParentType ParentType { get; }
```

#### Property Value

 [MarkerParentType](VM.Managed.DAFUL.MarkerParentType.md)

### <a id="VM_Managed_DAFUL_BodyBase_1_ParentTypeImpl"></a> ParentTypeImpl

Gets the parent type [implementation].

```csharp
protected virtual MarkerParentType ParentTypeImpl { get; }
```

#### Property Value

 [MarkerParentType](VM.Managed.DAFUL.MarkerParentType.md)

### <a id="VM_Managed_DAFUL_BodyBase_1_ReferencableImpl"></a> ReferencableImpl

Gets a value indicating whether this <xref href="VM.Managed.DAFUL.BodyBase%601" data-throw-if-not-resolved="false"></xref> is referencable [implementation].

```csharp
protected virtual bool ReferencableImpl { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_BodyBase_1_ReferenceFrameType"></a> ReferenceFrameType

Gets the type of the marker's reference frame.

```csharp
public MarkerReferenceFrameType ReferenceFrameType { get; }
```

#### Property Value

 [MarkerReferenceFrameType](VM.Managed.DAFUL.MarkerReferenceFrameType.md)

## Methods

### <a id="VM_Managed_DAFUL_BodyBase_1_FixUp_VM_Managed_ObjectBase_"></a> FixUp\(ObjectBase\)

Before destroy the old object, perform a work.

```csharp
public override bool FixUp(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

The old object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_BodyBase_1_GetArgumentList_System_Collections_Generic_LinkedList_VM_Managed_ObjectBase__"></a> GetArgumentList\(LinkedList<ObjectBase\>\)

Get argument object list.

```csharp
public override void GetArgumentList(LinkedList<ObjectBase> lstObj)
```

#### Parameters

`lstObj` [LinkedList](https://learn.microsoft.com/dotnet/api/system.collections.generic.linkedlist\-1)<ObjectBase\>

The argument object list.

### <a id="VM_Managed_DAFUL_BodyBase_1_GetGeneralMarkerInfo_System_Xml_XmlDocument_System_Xml_XmlElement_VM_Managed_DAFUL_Marker_"></a> GetGeneralMarkerInfo\(XmlDocument, XmlElement, Marker\)

Gets the marker information for model navigator.

```csharp
protected bool GetGeneralMarkerInfo(XmlDocument xmlDom, XmlElement xmlEle, Marker marker)
```

#### Parameters

`xmlDom` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

The XmlDocument for marker.

`xmlEle` [XmlElement](https://learn.microsoft.com/dotnet/api/system.xml.xmlelement)

The XmlElement for marker.

`marker` [Marker](VM.Managed.DAFUL.Marker.md)

The marker.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_BodyBase_1_GetGeomModelNavigatorInfo_System_Xml_XmlDocument_System_Xml_XmlElement_VM_Managed_DAFUL_BodyProperty_VM_Managed_CAD_Body_"></a> GetGeomModelNavigatorInfo\(XmlDocument, XmlElement, BodyProperty, Body\)

Gets the geometry information for model navigator.

```csharp
protected virtual bool GetGeomModelNavigatorInfo(XmlDocument xmlDom, XmlElement xmlEle, BodyProperty bodyProp, Body body)
```

#### Parameters

`xmlDom` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

The XmlDocument for geometry.

`xmlEle` [XmlElement](https://learn.microsoft.com/dotnet/api/system.xml.xmlelement)

The XmlElement for geometry.

`bodyProp` [BodyProperty](VM.Managed.DAFUL.BodyProperty.md)

The body property.

`body` Body

The geometry.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_BodyBase_1_GetLayerImpl"></a> GetLayerImpl\(\)

Gets the layer [implementation].

```csharp
protected virtual Layer GetLayerImpl()
```

#### Returns

 Layer

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_BodyBase_1_GetTargetListForUpdate"></a> GetTargetListForUpdate\(\)

Gets the update objects.

```csharp
public override List<IEventProvider> GetTargetListForUpdate()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<IEventProvider\>

### <a id="VM_Managed_DAFUL_BodyBase_1_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_BodyBase_1_MakeReferenceImpl_System_Collections_Generic_LinkedList_VM_Managed_Reference__"></a> MakeReferenceImpl\(LinkedList<Reference\>\)

Makes the reference [implementation].

```csharp
protected virtual void MakeReferenceImpl(LinkedList<Reference> lstRef)
```

#### Parameters

`lstRef` [LinkedList](https://learn.microsoft.com/dotnet/api/system.collections.generic.linkedlist\-1)<Reference\>

The container.

### <a id="VM_Managed_DAFUL_BodyBase_1_OnUpdatePropertyImpl_VM_Managed_Property_VM_Managed_LinkEventArgs_"></a> OnUpdatePropertyImpl\(Property, LinkEventArgs\)

Called when [update property].

```csharp
protected override void OnUpdatePropertyImpl(Property prop, LinkEventArgs arg)
```

#### Parameters

`prop` Property

The property.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_BodyBase_1_SetLayerImpl_VM_Managed_Layer_"></a> SetLayerImpl\(Layer\)

Sets the layer [implementation].

```csharp
protected virtual void SetLayerImpl(Layer layer)
```

#### Parameters

`layer` Layer

The layer.

