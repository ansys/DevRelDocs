#  Class SetNode

Namespace: [VM.Managed.DAFUL.FE](VM.Managed.DAFUL.FE.md)  
Assembly: VMFE.dll  

This class is to represent the set for node.

```csharp
public class SetNode : SetBase, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, ISubEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, INamed, INavigatorItem, IFEObject, IFEMeshChildItem, IChildItem, IMultiChangable, IPostDeserialized, IConnectable, IMarkerParent, IEntityRelation, IHasBody, ICLoadComponent, IBCComponent, INodeSet, IGeometricalComponent, IReferencable, IVisible, IChainedSegmentConnector, IArgument, IPointSetComponent
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
SubEntity ← 
[FESubEntity](VM.Managed.DAFUL.FE.FESubEntity.md) ← 
[SetBase](VM.Managed.DAFUL.FE.SetBase.md) ← 
[SetNode](VM.Managed.DAFUL.FE.SetNode.md)

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
[IFEObject](VM.Managed.DAFUL.FE.IFEObject.md), 
[IFEMeshChildItem](VM.Managed.DAFUL.FE.IFEMeshChildItem.md), 
IChildItem, 
IMultiChangable, 
IPostDeserialized, 
IConnectable, 
IMarkerParent, 
IEntityRelation, 
IHasBody, 
ICLoadComponent, 
IBCComponent, 
INodeSet, 
IGeometricalComponent, 
IReferencable, 
IVisible, 
IChainedSegmentConnector, 
IArgument, 
IPointSetComponent

#### Inherited Members

[SetBase.FixUp\(ObjectBase\)](VM.Managed.DAFUL.FE.SetBase.md\#VM\_Managed\_DAFUL\_FE\_SetBase\_FixUp\_VM\_Managed\_ObjectBase\_), 
[SetBase.LinkAddedToDocumentCore\(IOwned, bool\)](VM.Managed.DAFUL.FE.SetBase.md\#VM\_Managed\_DAFUL\_FE\_SetBase\_LinkAddedToDocumentCore\_VM\_Models\_Pre\_IOwned\_System\_Boolean\_), 
[SetBase.PostOpenDocument\(\)](VM.Managed.DAFUL.FE.SetBase.md\#VM\_Managed\_DAFUL\_FE\_SetBase\_PostOpenDocument), 
[SetBase.Color](VM.Managed.DAFUL.FE.SetBase.md\#VM\_Managed\_DAFUL\_FE\_SetBase\_Color), 
[FESubEntity.GetNodalBodyForReference\(Reference, Mesh\)](VM.Managed.DAFUL.FE.FESubEntity.md\#VM\_Managed\_DAFUL\_FE\_FESubEntity\_GetNodalBodyForReference\_VM\_Managed\_Reference\_VM\_Managed\_DAFUL\_FE\_Mesh\_), 
[FESubEntity.GetNodalBodyForSubsystem\(SubSystem, Mesh\)](VM.Managed.DAFUL.FE.FESubEntity.md\#VM\_Managed\_DAFUL\_FE\_FESubEntity\_GetNodalBodyForSubsystem\_VM\_Managed\_DAFUL\_SubSystem\_VM\_Managed\_DAFUL\_FE\_Mesh\_), 
[FESubEntity.FEID](VM.Managed.DAFUL.FE.FESubEntity.md\#VM\_Managed\_DAFUL\_FE\_FESubEntity\_FEID), 
[FESubEntity.OwnerMesh](VM.Managed.DAFUL.FE.FESubEntity.md\#VM\_Managed\_DAFUL\_FE\_FESubEntity\_OwnerMesh), 
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

### <a id="VM_Managed_DAFUL_FE_SetNode__ctor"></a> SetNode\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.SetNode" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SetNode()
```

## Properties

### <a id="VM_Managed_DAFUL_FE_SetNode_ArgumentType"></a> ArgumentType

Gets the type of the argument

```csharp
public virtual ArgumentTypes ArgumentType { get; }
```

#### Property Value

 ArgumentTypes

### <a id="VM_Managed_DAFUL_FE_SetNode_Color"></a> Color

Gets or sets the color.

```csharp
public override Color Color { set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Managed_DAFUL_FE_SetNode_Count"></a> Count

Gets the node count of this instance.

```csharp
public uint Count { get; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Managed_DAFUL_FE_SetNode_IsVisible"></a> IsVisible

Gets or sets a value indicating whether object is visible.

```csharp
bool IsVisible { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_FE_SetNode_Layer"></a> Layer

Gets or sets the layer.

```csharp
Layer Layer { get; set; }
```

#### Property Value

 Layer

### <a id="VM_Managed_DAFUL_FE_SetNode_NodeIndexCont"></a> NodeIndexCont

Gets the node index container.

```csharp
public SetNode.NodeIndexContainer NodeIndexCont { get; set; }
```

#### Property Value

 [SetNode](VM.Managed.DAFUL.FE.SetNode.md).[NodeIndexContainer](VM.Managed.DAFUL.FE.SetNode.NodeIndexContainer.md)

### <a id="VM_Managed_DAFUL_FE_SetNode_NodeShape"></a> NodeShape

Gets or sets the node shape.

```csharp
public MarkerType NodeShape { get; set; }
```

#### Property Value

 MarkerType

### <a id="VM_Managed_DAFUL_FE_SetNode_RBEInformation"></a> RBEInformation

Gets or sets the rbe info.

```csharp
public RBEInfo RBEInformation { get; set; }
```

#### Property Value

 [RBEInfo](VM.Managed.DAFUL.FE.RBEInfo.md)

### <a id="VM_Managed_DAFUL_FE_SetNode_ReferenceType"></a> ReferenceType

Gets the type of the array for argument.

```csharp
public virtual string ReferenceType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_FE_SetNode_Item_System_UInt32_"></a> this\[uint\]

```csharp
public Node this[uint A_0] { get; }
```

#### Property Value

 [Node](VM.Managed.DAFUL.FE.Node.md)

## Methods

### <a id="VM_Managed_DAFUL_FE_SetNode_AddNodes_System_UInt32___"></a> AddNodes\(uint\[\]\)

Add nodes.

```csharp
public void AddNodes(uint[] nodeIndexes)
```

#### Parameters

`nodeIndexes` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

The node index array.

### <a id="VM_Managed_DAFUL_FE_SetNode_AddNodes_System_Collections_Generic_ICollection_System_UInt32__"></a> AddNodes\(ICollection<uint\>\)

```csharp
public void AddNodes(ICollection<uint> nodeIndexes)
```

#### Parameters

`nodeIndexes` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)\>

### <a id="VM_Managed_DAFUL_FE_SetNode_AddNodes_VM_Managed_DAFUL_FE_Node___"></a> AddNodes\(Node\[\]\)

Add nodes.

```csharp
public void AddNodes(Node[] nodes)
```

#### Parameters

`nodes` [Node](VM.Managed.DAFUL.FE.Node.md)\[\]

The node array.

### <a id="VM_Managed_DAFUL_FE_SetNode_AddNodes_System_Collections_Generic_ICollection_VM_Managed_DAFUL_FE_Node__"></a> AddNodes\(ICollection<Node\>\)

```csharp
public void AddNodes(ICollection<Node> nodes)
```

#### Parameters

`nodes` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[Node](VM.Managed.DAFUL.FE.Node.md)\>

### <a id="VM_Managed_DAFUL_FE_SetNode_ConnectProxy"></a> ConnectProxy\(\)

```csharp
public override void ConnectProxy()
```

### <a id="VM_Managed_DAFUL_FE_SetNode_GetSchema"></a> GetSchema\(\)

This method is reserved and should not be used. When implementing the IXmlSerializable interface, 
you should return nullNothingnullptra null reference (Nothing in Visual Basic) (Nothing in Visual Basic) 
from this method, and instead, if specifying a custom schema is required, 
apply the XmlSchemaProviderAttribute to the class.

```csharp
public virtual XmlSchema GetSchema()
```

#### Returns

 [XmlSchema](https://learn.microsoft.com/dotnet/api/system.xml.schema.xmlschema)

An <xref href="System.Xml.Schema.XmlSchema" data-throw-if-not-resolved="false"></xref> that describes the XML representation of the object that is produced by the <xref href="System.Xml.Serialization.IXmlSerializable.WriteXml(System.Xml.XmlWriter)" data-throw-if-not-resolved="false"></xref> method and consumed by the <xref href="System.Xml.Serialization.IXmlSerializable.ReadXml(System.Xml.XmlReader)" data-throw-if-not-resolved="false"></xref> method.

### <a id="VM_Managed_DAFUL_FE_SetNode_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor A_0)
```

#### Parameters

`A_0` Unit.ConvertFactor

### <a id="VM_Managed_DAFUL_FE_SetNode_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
public override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### <a id="VM_Managed_DAFUL_FE_SetNode_PostOpenDocument"></a> PostOpenDocument\(\)

```csharp
protected override void PostOpenDocument()
```

### <a id="VM_Managed_DAFUL_FE_SetNode_ReadXml_System_Xml_XmlReader_"></a> ReadXml\(XmlReader\)

Generates an object from its XML representation.

```csharp
public virtual void ReadXml(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The XmlReader stream from which the object is deserialized.

### <a id="VM_Managed_DAFUL_FE_SetNode_RemoveNodes_VM_Managed_DAFUL_FE_Node___"></a> RemoveNodes\(Node\[\]\)

Remove nodes.

```csharp
public void RemoveNodes(Node[] nodes)
```

#### Parameters

`nodes` [Node](VM.Managed.DAFUL.FE.Node.md)\[\]

The node array.

### <a id="VM_Managed_DAFUL_FE_SetNode_RemoveNodes_System_Collections_Generic_ICollection_VM_Managed_DAFUL_FE_Node__"></a> RemoveNodes\(ICollection<Node\>\)

```csharp
public void RemoveNodes(ICollection<Node> nodes)
```

#### Parameters

`nodes` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[Node](VM.Managed.DAFUL.FE.Node.md)\>

### <a id="VM_Managed_DAFUL_FE_SetNode_RemoveNodes_System_UInt32___"></a> RemoveNodes\(uint\[\]\)

Remove nodes.

```csharp
public void RemoveNodes(uint[] nodeIndexes)
```

#### Parameters

`nodeIndexes` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

The node index array.

### <a id="VM_Managed_DAFUL_FE_SetNode_RemoveNodes_System_Collections_Generic_ICollection_System_UInt32__"></a> RemoveNodes\(ICollection<uint\>\)

```csharp
public void RemoveNodes(ICollection<uint> nodeIndexes)
```

#### Parameters

`nodeIndexes` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)\>

### <a id="VM_Managed_DAFUL_FE_SetNode_SetRBEInfo"></a> SetRBEInfo\(\)

```csharp
public void SetRBEInfo()
```

### <a id="VM_Managed_DAFUL_FE_SetNode_WriteXml_System_Xml_XmlWriter_"></a> WriteXml\(XmlWriter\)

Converts an object into its XML representation.

```csharp
public virtual void WriteXml(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The XmlWriter stream to which the object is serialized.

