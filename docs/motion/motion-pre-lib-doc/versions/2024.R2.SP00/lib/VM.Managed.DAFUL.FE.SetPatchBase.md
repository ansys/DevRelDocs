# Class SetPatchBase

Namespace: [VM.Managed.DAFUL.FE](VM.Managed.DAFUL.FE.md)  
Assembly: VMFE.dll  

This class is to represent the set for patch.

```csharp
public abstract class SetPatchBase : SetBase, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, ISubEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, INamed, INavigatorItem, IFEObject, IFEMeshChildItem, IChildItem, IMultiChangable, IPostDeserialized, IContactableFlex3D, ITieContactable, IContactable3D, INTSFContactable, IContactable, IEntityRelation, IBodyAnalysisType, IHasBody, IPLoadComponent, IGeometricalComponent, IReferencable, IVisible, IArgument, IFaceSetComponent, ITopologyset, IGapTarget
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
[SetPatchBase](VM.Managed.DAFUL.FE.SetPatchBase.md)

#### Derived

[SetEdge](VM.Managed.DAFUL.FE.SetEdge.md), 
[SetPatch](VM.Managed.DAFUL.FE.SetPatch.md)

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
IContactableFlex3D, 
ITieContactable, 
IContactable3D, 
INTSFContactable, 
IContactable, 
IEntityRelation, 
IBodyAnalysisType, 
IHasBody, 
IPLoadComponent, 
IGeometricalComponent, 
IReferencable, 
IVisible, 
IArgument, 
IFaceSetComponent, 
ITopologyset, 
IGapTarget

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

### SetPatchBase\(string, string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.SetPatchBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SetPatchBase(string strProxyName, string strBuildInfo)
```

#### Parameters

`strProxyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the proxy.

`strBuildInfo` [string](https://learn.microsoft.com/dotnet/api/system.string)

The build information.

### SetPatchBase\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.SetPatchBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SetPatchBase()
```

## Fields

### m\_bActionGeometry

```csharp
protected bool m_bActionGeometry
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### m\_bBaseGeometry

```csharp
protected bool m_bBaseGeometry
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### m\_bFailedConnectProxy

```csharp
protected bool m_bFailedConnectProxy
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### m\_lstPatch

```csharp
protected List<Patch> m_lstPatch
```

#### Field Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Patch](VM.Managed.DAFUL.FE.Patch.md)\>

## Properties

### ArgumentType

Gets the type of the argument

```csharp
public virtual ArgumentTypes ArgumentType { get; }
```

#### Property Value

 ArgumentTypes

### Count

Gets the patch count of this instance.

```csharp
public virtual uint Count { get; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Gap

The gap

```csharp
public virtual Variable Gap { get; }
```

#### Property Value

 Variable

### GeometryFullName

Gets the geometry full name

```csharp
public string GeometryFullName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### GeometryNameForMultiContact

Gets the name for multiple contact

```csharp
public string GeometryNameForMultiContact { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### HalfThickness

Gets a half thickness.

```csharp
public virtual Variable HalfThickness { get; set; }
```

#### Property Value

 Variable

### IsVisible

Gets or sets a value indicating whether object is visible.

```csharp
bool IsVisible { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Layer

Gets or sets the layer.

```csharp
Layer Layer { get; set; }
```

#### Property Value

 Layer

### MaxPenetration

Gets a maximum penetration.

```csharp
public virtual Variable MaxPenetration { get; }
```

#### Property Value

 Variable

### ReferenceType

Gets the type of the array for argument.

```csharp
public virtual string ReferenceType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### SurfaceSmoothingType

Gets a surface smoothing.

```csharp
public virtual SurfaceSmoothing SurfaceSmoothingType { get; set; }
```

#### Property Value

 SurfaceSmoothing

### this\[uint\]

```csharp
public Node this[uint A_0] { get; }
```

#### Property Value

 [Node](VM.Managed.DAFUL.FE.Node.md)

## Methods

### AddPatches\(Patch\[\]\)

Add patches.

```csharp
public void AddPatches(Patch[] patches)
```

#### Parameters

`patches` [Patch](VM.Managed.DAFUL.FE.Patch.md)\[\]

The patch array.

### AddPatches\(ICollection<Patch\>\)

```csharp
public virtual void AddPatches(ICollection<Patch> patches)
```

#### Parameters

`patches` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[Patch](VM.Managed.DAFUL.FE.Patch.md)\>

### GetCenterPositionDirectionImpl\(uint, ref VectorBase, ref VectorBase, IReferencable\)

```csharp
protected virtual void GetCenterPositionDirectionImpl(uint index, ref VectorBase center, ref VectorBase direction, IReferencable reference)
```

#### Parameters

`index` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`center` VectorBase

`direction` VectorBase

`reference` IReferencable

### GetDefaultMaxPenetrationImpl\(ref double, IReferencable\)

```csharp
protected virtual bool GetDefaultMaxPenetrationImpl(ref double dMaxPenetration, IReferencable reference)
```

#### Parameters

`dMaxPenetration` [double](https://learn.microsoft.com/dotnet/api/system.double)

`reference` IReferencable

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetPointDirectionImpl\(ref VectorBase, ref VectorBase, IReferencable\)

```csharp
protected virtual bool GetPointDirectionImpl(ref VectorBase point, ref VectorBase direction, IReferencable reference)
```

#### Parameters

`point` VectorBase

`direction` VectorBase

`reference` IReferencable

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetSchema\(\)

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

### InstantiateImpl\(Reference, Canvas\)

```csharp
protected virtual void InstantiateImpl(Reference reference, Canvas canvas)
```

#### Parameters

`reference` Reference

`canvas` Canvas

### MakeReferenceImpl\(LinkedList<Reference\>\)

```csharp
protected virtual void MakeReferenceImpl(LinkedList<Reference> lstRef)
```

#### Parameters

`lstRef` [LinkedList](https://learn.microsoft.com/dotnet/api/system.collections.generic.linkedlist\-1)<Reference\>

### ReadXml\(XmlReader\)

Generates an object from its XML representation.

```csharp
public virtual void ReadXml(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The XmlReader stream from which the object is deserialized.

### ReadXmlCore\(XmlReader, ref bool\)

```csharp
protected virtual void ReadXmlCore(XmlReader reader, ref bool bNeedUpdate)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

`bNeedUpdate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RemovePatches\(Patch\[\]\)

Remove patches.

```csharp
public void RemovePatches(Patch[] patches)
```

#### Parameters

`patches` [Patch](VM.Managed.DAFUL.FE.Patch.md)\[\]

The patch array.

### RemovePatches\(ICollection<Patch\>\)

```csharp
public void RemovePatches(ICollection<Patch> patches)
```

#### Parameters

`patches` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[Patch](VM.Managed.DAFUL.FE.Patch.md)\>

### SetGap\(string\)

Sets the gap

```csharp
public virtual void SetGap(string strValue)
```

#### Parameters

`strValue` [string](https://learn.microsoft.com/dotnet/api/system.string)

The value

### SetLayer\(Layer\)

```csharp
protected virtual void SetLayer(Layer value)
```

#### Parameters

`value` Layer

### WriteXml\(XmlWriter\)

Converts an object into its XML representation.

```csharp
public virtual void WriteXml(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The XmlWriter stream to which the object is serialized.


