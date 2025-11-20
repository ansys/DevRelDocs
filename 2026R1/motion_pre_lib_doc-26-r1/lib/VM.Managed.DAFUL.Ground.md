# Class Ground
<a id="VM_Managed_DAFUL_Ground"></a>

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This class is to represent the ground.

```csharp
public sealed class Ground : BodyBase<GroundBodyProperty>, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup, IMarkerCreatable, IFacesetCreatable, ICurvesetCreatable, IConnectableNotReference, IReferencable, IConnectableHasGeometry, IConnectable, IMarkerParent, IEntityRelation, IHasBody, IBody, IHasBuilder, IDrawIcon, ITransformable, IGeometryContainer, IHasCenterMarkerForGround
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
ObjectBase ← 
Object<EntityEventCore\> ← 
ContainerObject<EntityEventCore\> ← 
[EntityBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs) ← 
[Entity<GroundBodyProperty\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs) ← 
[BodyBase<GroundBodyProperty\>](VM.Managed.DAFUL.BodyBase\-1.md) ← 
[Ground](VM.Managed.DAFUL.Ground.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
ILinkContainerEvent, 
IVerifiable, 
[IHistoryObjectSerializable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/Interfaces.cs), 
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
IBody, 
IHasBuilder, 
IDrawIcon, 
ITransformable, 
IGeometryContainer, 
[IHasCenterMarkerForGround](VM.Managed.DAFUL.IHasCenterMarkerForGround.md)

#### Inherited Members

[BodyBase<GroundBodyProperty\>.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.BodyBase\-1.md\#VM\_Managed\_DAFUL\_BodyBase\_1\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[BodyBase<GroundBodyProperty\>.FixUp\(ObjectBase\)](VM.Managed.DAFUL.BodyBase\-1.md\#VM\_Managed\_DAFUL\_BodyBase\_1\_FixUp\_VM\_Managed\_ObjectBase\_), 
[BodyBase<GroundBodyProperty\>.GetArgumentList\(LinkedList<ObjectBase\>\)](VM.Managed.DAFUL.BodyBase\-1.md\#VM\_Managed\_DAFUL\_BodyBase\_1\_GetArgumentList\_System\_Collections\_Generic\_LinkedList\_VM\_Managed\_ObjectBase\_\_), 
[BodyBase<GroundBodyProperty\>.GetTargetListForUpdate\(\)](VM.Managed.DAFUL.BodyBase\-1.md\#VM\_Managed\_DAFUL\_BodyBase\_1\_GetTargetListForUpdate), 
[BodyBase<GroundBodyProperty\>.ParentType](VM.Managed.DAFUL.BodyBase\-1.md\#VM\_Managed\_DAFUL\_BodyBase\_1\_ParentType), 
[BodyBase<GroundBodyProperty\>.ReferenceFrameType](VM.Managed.DAFUL.BodyBase\-1.md\#VM\_Managed\_DAFUL\_BodyBase\_1\_ReferenceFrameType), 
[BodyBase<GroundBodyProperty\>.ConnectableName](VM.Managed.DAFUL.BodyBase\-1.md\#VM\_Managed\_DAFUL\_BodyBase\_1\_ConnectableName), 
[BodyBase<GroundBodyProperty\>.ConnectableFullName](VM.Managed.DAFUL.BodyBase\-1.md\#VM\_Managed\_DAFUL\_BodyBase\_1\_ConnectableFullName), 
[BodyBase<GroundBodyProperty\>.ConnectablePostfixName](VM.Managed.DAFUL.BodyBase\-1.md\#VM\_Managed\_DAFUL\_BodyBase\_1\_ConnectablePostfixName), 
[BodyBase<GroundBodyProperty\>.ConnectablePosition](VM.Managed.DAFUL.BodyBase\-1.md\#VM\_Managed\_DAFUL\_BodyBase\_1\_ConnectablePosition), 
[BodyBase<GroundBodyProperty\>.ConnectableBody](VM.Managed.DAFUL.BodyBase\-1.md\#VM\_Managed\_DAFUL\_BodyBase\_1\_ConnectableBody), 
[BodyBase<GroundBodyProperty\>.Body](VM.Managed.DAFUL.BodyBase\-1.md\#VM\_Managed\_DAFUL\_BodyBase\_1\_Body), 
[BodyBase<GroundBodyProperty\>.Layer](VM.Managed.DAFUL.BodyBase\-1.md\#VM\_Managed\_DAFUL\_BodyBase\_1\_Layer), 
[BodyBase<GroundBodyProperty\>.IsVisible](VM.Managed.DAFUL.BodyBase\-1.md\#VM\_Managed\_DAFUL\_BodyBase\_1\_IsVisible), 
[BodyBase<GroundBodyProperty\>.Geometry](VM.Managed.DAFUL.BodyBase\-1.md\#VM\_Managed\_DAFUL\_BodyBase\_1\_Geometry), 
[Entity<GroundBodyProperty\>.Initialize\(Unit.ConvertFactor\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[Entity<GroundBodyProperty\>.GetUnnamedObjectName\(object\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[Entity<GroundBodyProperty\>.FindLocal\(string\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[Entity<GroundBodyProperty\>.Property](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.Initialize\(Unit.ConvertFactor\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.SetOldNameWithNewEntity\(ObjectBase, ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.PropertyRequestUpdate\(object, LinkEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.OnDeserializationForAttribute\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.FixUp\(ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.FindLocal\(string\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.Name](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.FullName](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.NonSymmetricName](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.DisplayName](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.IsEnabled](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.Comment](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.UntypedProperty](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.Layer](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.IsVisible](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
ContainerObject<EntityEventCore\>.Find\(string\), 
ContainerObject<EntityEventCore\>.FindLocal\(string\), 
ContainerObject<EntityEventCore\>.GetUnnamedObjectName\(object\), 
ContainerObject<EntityEventCore\>.GetNewEntityName\(string\), 
ContainerObject<EntityEventCore\>.GetNewEntityName\(string, bool, int\), 
ContainerObject<EntityEventCore\>.GetNewEntityName\(string, bool, int, int\), 
Object<EntityEventCore\>.GetKey\(\), 
Object<EntityEventCore\>.Initialize\(Unit.ConvertFactor\), 
Object<EntityEventCore\>.SetIconColor\(Canvas\), 
Object<EntityEventCore\>.OnDeserializedCore\(object\), 
Object<EntityEventCore\>.Key, 
Object<EntityEventCore\>.UntypedEventCore, 
Object<EntityEventCore\>.EventCore, 
Object<EntityEventCore\>.Attributes, 
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
ObservableObject.Dispose\(\), 
ObservableObject.RaisePropertyChanged\(string\), 
ObservableObject.RaisePropertyChanged\(string, object, object\), 
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

### <a id="VM_Managed_DAFUL_Ground__ctor"></a> Ground\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Ground" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Ground()
```

### <a id="VM_Managed_DAFUL_Ground__ctor_System_String_"></a> Ground\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Ground" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Ground(string strName)
```

#### Parameters

`strName` string

Name of the ground.

## Properties

### <a id="VM_Managed_DAFUL_Ground_Geometry"></a> Geometry

Gets the geometry.

```csharp
public override List<Body> Geometry { get; }
```

#### Property Value

 List<Body\>

### <a id="VM_Managed_DAFUL_Ground_GroundName"></a> GroundName

Gets or sets the name of the ground.

```csharp
public static string GroundName { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Ground_ReferencableImpl"></a> ReferencableImpl

Gets a value indicating whether this <xref href="VM.Managed.DAFUL.BodyBase%601" data-throw-if-not-resolved="false"></xref> is referencable [implementation].

```csharp
protected override sealed bool ReferencableImpl { get; }
```

#### Property Value

 bool

## Methods

### <a id="VM_Managed_DAFUL_Ground_GetBuilder"></a> GetBuilder\(\)

Gets the geometry.

```csharp
public ObjectBase[] GetBuilder()
```

#### Returns

 ObjectBase\[\]

geometry container

### <a id="VM_Managed_DAFUL_Ground_GetGeomModelNavigatorInfo_System_Xml_XmlDocument_System_Xml_XmlElement_VM_Managed_DAFUL_BodyProperty_VM_Managed_CAD_Body_"></a> GetGeomModelNavigatorInfo\(XmlDocument, XmlElement, BodyProperty, Body\)

Gets the geometry information for model navigator.

```csharp
protected override bool GetGeomModelNavigatorInfo(XmlDocument xmlDom, XmlElement xmlEle, BodyProperty bodyProp, Body body)
```

#### Parameters

`xmlDom` XmlDocument

The XmlDocument for geometry.

`xmlEle` XmlElement

The XmlElement for geometry.

`bodyProp` [BodyProperty](VM.Managed.DAFUL.BodyProperty.md)

The body property.

`body` Body

The geometry.

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_Ground_GetLayerImpl"></a> GetLayerImpl\(\)

Gets the layer [implementation].

```csharp
protected override Layer GetLayerImpl()
```

#### Returns

 Layer

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_Ground_GetMarkerArrayModelNavigatorInfo_System_Xml_XmlDocument_System_Xml_XmlElement_VM_Managed_Collections_NamedObjectDictionary_VM_Managed_DAFUL_Marker__"></a> GetMarkerArrayModelNavigatorInfo\(XmlDocument, XmlElement, NamedObjectDictionary<Marker\>\)

Gets the marker array information for model navigator.

```csharp
public bool GetMarkerArrayModelNavigatorInfo(XmlDocument xmlDom, XmlElement xmlEle, NamedObjectDictionary<Marker> arMarker)
```

#### Parameters

`xmlDom` XmlDocument

The XmlDocument for marker array.

`xmlEle` XmlElement

The XmlElement for marker array.

`arMarker` [NamedObjectDictionary](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/NamedObjectDictionary.cs)<[Marker](VM.Managed.DAFUL.Marker.md)\>

The marker array.

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_Ground_GetModelNavigatorInformationImpl_System_Xml_XmlDocument_System_Xml_XmlElement_System_Boolean_"></a> GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)

Gets the object information for model navigator [implementation].

```csharp
protected override bool GetModelNavigatorInformationImpl(XmlDocument xmlDom, XmlElement xmlEle, bool bHasChild)
```

#### Parameters

`xmlDom` XmlDocument

The XmlDocument for object.

`xmlEle` XmlElement

The XmlDocument for object.

`bHasChild` bool

if set to <code>true</code> [has child].

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_Ground_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_Ground_MakeReferenceImpl_System_Collections_Generic_LinkedList_VM_Managed_Reference__"></a> MakeReferenceImpl\(LinkedList<Reference\>\)

Makes the reference [implementation].

```csharp
protected override sealed void MakeReferenceImpl(LinkedList<Reference> lstRef)
```

#### Parameters

`lstRef` LinkedList<Reference\>

The container.

### <a id="VM_Managed_DAFUL_Ground_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` object

The sender.

### <a id="VM_Managed_DAFUL_Ground_ReDraw"></a> ReDraw\(\)

Redraw.

```csharp
public void ReDraw()
```

### <a id="VM_Managed_DAFUL_Ground_SetLayerImpl_VM_Managed_Layer_"></a> SetLayerImpl\(Layer\)

Sets the layer [implementation].

```csharp
protected override void SetLayerImpl(Layer layer)
```

#### Parameters

`layer` Layer

The layer.

