# <a id="VM_Managed_DAFUL_FE_ReferenceNodeset"></a> Class ReferenceNodeset

Namespace: [VM.Managed.DAFUL.FE](VM.Managed.DAFUL.FE.md)  
Assembly: VMFE.dll  

This class is to represent the reference for node set.

```csharp
public class ReferenceNodeset : ReferenceConnectable, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IReferencable, INamed, INavigatorItem, IVisible, IReferenceAutoContactable, IAutoContactable, IMassProp, IBodyAnalysisType, IContactableGeometry2Dot5D, IConnectable, IMarkerParent, IEntityRelation, IHasBody, IBody, ICLoadComponent, IBCComponent, INodeSet, IChainedSegmentConnector, IArgument, INodalOutputCandidate, IPointSetComponent, ITemperatureComponent, IHeatFlowComponent, IGeometricalComponent
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
Reference ← 
ReferenceConnectable ← 
[ReferenceNodeset](VM.Managed.DAFUL.FE.ReferenceNodeset.md)

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
IMassProp, 
IBodyAnalysisType, 
IContactableGeometry2Dot5D, 
IConnectable, 
IMarkerParent, 
IEntityRelation, 
IHasBody, 
IBody, 
ICLoadComponent, 
IBCComponent, 
INodeSet, 
IChainedSegmentConnector, 
IArgument, 
INodalOutputCandidate, 
IPointSetComponent, 
ITemperatureComponent, 
IHeatFlowComponent, 
IGeometricalComponent

#### Inherited Members

ReferenceConnectable.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\), 
ReferenceConnectable.IsAutoContactable\(\), 
ReferenceConnectable.GetContactables\(\), 
ReferenceConnectable.GetPointDirection\(ref VectorBase, ref VectorBase, IReferencable\), 
ReferenceConnectable.ParentType, 
ReferenceConnectable.ReferenceFrameType, 
ReferenceConnectable.ConnectableName, 
ReferenceConnectable.ConnectablePostfixName, 
ReferenceConnectable.ConnectablePosition, 
ReferenceConnectable.ConnectableFullName, 
ReferenceConnectable.ConnectableBody, 
ReferenceConnectable.Body, 
ReferenceConnectable.TopologyEntityTypeName, 
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

### <a id="VM_Managed_DAFUL_FE_ReferenceNodeset__ctor_VM_Managed_ObjectBase_"></a> ReferenceNodeset\(ObjectBase\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.ReferenceNodeset" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ReferenceNodeset(ObjectBase obj)
```

#### Parameters

`obj` ObjectBase

The reference's object.

### <a id="VM_Managed_DAFUL_FE_ReferenceNodeset__ctor_System_Runtime_Serialization_SerializationInfo_System_Runtime_Serialization_StreamingContext_"></a> ReferenceNodeset\(SerializationInfo, StreamingContext\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.ReferenceNodeset" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected ReferenceNodeset(SerializationInfo info, StreamingContext context)
```

#### Parameters

`info` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)

The info.

`context` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

The context.

## Properties

### <a id="VM_Managed_DAFUL_FE_ReferenceNodeset_ArgumentType"></a> ArgumentType

Gets the type of the argument

```csharp
public virtual ArgumentTypes ArgumentType { get; }
```

#### Property Value

 ArgumentTypes

### <a id="VM_Managed_DAFUL_FE_ReferenceNodeset_ConnectableFullName"></a> ConnectableFullName

Gets the full name of the connectable.

```csharp
public override string ConnectableFullName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_FE_ReferenceNodeset_ConnectableName"></a> ConnectableName

Gets the name of the connectable.

```csharp
public override string ConnectableName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_FE_ReferenceNodeset_ConnectablePostfixName"></a> ConnectablePostfixName

Sets the postfix name of the connectable.

```csharp
public override string ConnectablePostfixName { set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_FE_ReferenceNodeset_ParentType"></a> ParentType

Gets the type of the parent.

```csharp
public override MarkerParentType ParentType { get; }
```

#### Property Value

 MarkerParentType

### <a id="VM_Managed_DAFUL_FE_ReferenceNodeset_ReferenceType"></a> ReferenceType

Gets the type of the reference.

```csharp
public virtual string ReferenceType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_DAFUL_FE_ReferenceNodeset_GetGeometryNavigatorInformation_System_Xml_XmlDocument_System_Xml_XmlElement_"></a> GetGeometryNavigatorInformation\(XmlDocument, XmlElement\)

Gets the geometry information for model navigator .

```csharp
public virtual bool GetGeometryNavigatorInformation(XmlDocument xmlDom, XmlElement xmlEle)
```

#### Parameters

`xmlDom` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

The XmlDocument information.

`xmlEle` [XmlElement](https://learn.microsoft.com/dotnet/api/system.xml.xmlelement)

The XmlElement information.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_FE_ReferenceNodeset_GetModelNavigatorInformationImpl_System_Xml_XmlDocument_System_Xml_XmlElement_System_Boolean_"></a> GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)

Gets the object information for model navigator [implementation].

```csharp
protected override bool GetModelNavigatorInformationImpl(XmlDocument xmlDom, XmlElement xmlEle, bool __unnamed002)
```

#### Parameters

`xmlDom` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

The XmlDocument for object.

`xmlEle` [XmlElement](https://learn.microsoft.com/dotnet/api/system.xml.xmlelement)

The XmlElement for object.

`__unnamed002` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_FE_ReferenceNodeset_GetPointCount"></a> GetPointCount\(\)

Gets the count of node point.

```csharp
public virtual uint GetPointCount()
```

#### Returns

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The count of node point.

### <a id="VM_Managed_DAFUL_FE_ReferenceNodeset_GetPointDirection_VM_Managed_VectorBase__VM_Managed_VectorBase__VM_Managed_IReferencable_"></a> GetPointDirection\(ref VectorBase, ref VectorBase, IReferencable\)

Gets the point direction.

```csharp
public override bool GetPointDirection(ref VectorBase point, ref VectorBase direction, IReferencable __unnamed002)
```

#### Parameters

`point` VectorBase

The point.

`direction` VectorBase

The direction.

`__unnamed002` IReferencable

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_FE_ReferenceNodeset_GetPointPosition_System_UInt32_VM_Managed_IReferencable_"></a> GetPointPosition\(uint, IReferencable\)

Gets the node point position.

```csharp
public virtual VectorBase GetPointPosition(uint index, IReferencable __unnamed001)
```

#### Parameters

`index` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The index.

`__unnamed001` IReferencable

#### Returns

 VectorBase

The node point position.

### <a id="VM_Managed_DAFUL_FE_ReferenceNodeset_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Request for update the linked object.

```csharp
protected override void LinkRequestUpdate(object obNotifier, LinkEventArgs arg)
```

#### Parameters

`obNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

