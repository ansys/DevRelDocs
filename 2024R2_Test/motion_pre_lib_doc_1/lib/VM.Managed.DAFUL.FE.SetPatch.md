# Class SetPatch

Namespace: [VM.Managed.DAFUL.FE](VM.Managed.DAFUL.FE.md)  
Assembly: VMFE.dll  

This class is to represent the set for patch.

```csharp
public class SetPatch : SetPatchBase, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, ISubEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, INamed, INavigatorItem, IFEObject, IFEMeshChildItem, IChildItem, IMultiChangable, IPostDeserialized, IContactableFlex3D, ITieContactable, IContactable3D, INTSFContactable, IContactable, IEntityRelation, IBodyAnalysisType, IHasBody, IPLoadComponent, IGeometricalComponent, IReferencable, IVisible, IArgument, IFaceSetComponent, ITopologyset, IGapTarget, IChainedSegmentConnector, IChainedSegmentContact, IPatchSetInformation, IFaceInformation
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
[SetPatchBase](VM.Managed.DAFUL.FE.SetPatchBase.md) ← 
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
IGapTarget, 
IChainedSegmentConnector, 
IChainedSegmentContact, 
IPatchSetInformation, 
IFaceInformation

#### Inherited Members

[SetPatchBase.m\_bBaseGeometry](VM.Managed.DAFUL.FE.SetPatchBase.md\#VM\_Managed\_DAFUL\_FE\_SetPatchBase\_m\_bBaseGeometry), 
[SetPatchBase.m\_bActionGeometry](VM.Managed.DAFUL.FE.SetPatchBase.md\#VM\_Managed\_DAFUL\_FE\_SetPatchBase\_m\_bActionGeometry), 
[SetPatchBase.m\_bFailedConnectProxy](VM.Managed.DAFUL.FE.SetPatchBase.md\#VM\_Managed\_DAFUL\_FE\_SetPatchBase\_m\_bFailedConnectProxy), 
[SetPatchBase.m\_lstPatch](VM.Managed.DAFUL.FE.SetPatchBase.md\#VM\_Managed\_DAFUL\_FE\_SetPatchBase\_m\_lstPatch), 
[SetPatchBase.AddPatches\(Patch\[\]\)](VM.Managed.DAFUL.FE.SetPatchBase.md\#VM\_Managed\_DAFUL\_FE\_SetPatchBase\_AddPatches\_VM\_Managed\_DAFUL\_FE\_Patch\_\_\_), 
[SetPatchBase.AddPatches\(ICollection<Patch\>\)](VM.Managed.DAFUL.FE.SetPatchBase.md\#VM\_Managed\_DAFUL\_FE\_SetPatchBase\_AddPatches\_System\_Collections\_Generic\_ICollection\_VM\_Managed\_DAFUL\_FE\_Patch\_\_), 
[SetPatchBase.RemovePatches\(Patch\[\]\)](VM.Managed.DAFUL.FE.SetPatchBase.md\#VM\_Managed\_DAFUL\_FE\_SetPatchBase\_RemovePatches\_VM\_Managed\_DAFUL\_FE\_Patch\_\_\_), 
[SetPatchBase.RemovePatches\(ICollection<Patch\>\)](VM.Managed.DAFUL.FE.SetPatchBase.md\#VM\_Managed\_DAFUL\_FE\_SetPatchBase\_RemovePatches\_System\_Collections\_Generic\_ICollection\_VM\_Managed\_DAFUL\_FE\_Patch\_\_), 
[SetPatchBase.SetGap\(string\)](VM.Managed.DAFUL.FE.SetPatchBase.md\#VM\_Managed\_DAFUL\_FE\_SetPatchBase\_SetGap\_System\_String\_), 
[SetPatchBase.GetSchema\(\)](VM.Managed.DAFUL.FE.SetPatchBase.md\#VM\_Managed\_DAFUL\_FE\_SetPatchBase\_GetSchema), 
[SetPatchBase.ReadXml\(XmlReader\)](VM.Managed.DAFUL.FE.SetPatchBase.md\#VM\_Managed\_DAFUL\_FE\_SetPatchBase\_ReadXml\_System\_Xml\_XmlReader\_), 
[SetPatchBase.WriteXml\(XmlWriter\)](VM.Managed.DAFUL.FE.SetPatchBase.md\#VM\_Managed\_DAFUL\_FE\_SetPatchBase\_WriteXml\_System\_Xml\_XmlWriter\_), 
[SetPatchBase.InstantiateImpl\(Reference, Canvas\)](VM.Managed.DAFUL.FE.SetPatchBase.md\#VM\_Managed\_DAFUL\_FE\_SetPatchBase\_InstantiateImpl\_VM\_Managed\_Reference\_VM\_CAD\_Kernel\_Render\_Canvas\_), 
[SetPatchBase.MakeReferenceImpl\(LinkedList<Reference\>\)](VM.Managed.DAFUL.FE.SetPatchBase.md\#VM\_Managed\_DAFUL\_FE\_SetPatchBase\_MakeReferenceImpl\_System\_Collections\_Generic\_LinkedList\_VM\_Managed\_Reference\_\_), 
[SetPatchBase.SetLayer\(Layer\)](VM.Managed.DAFUL.FE.SetPatchBase.md\#VM\_Managed\_DAFUL\_FE\_SetPatchBase\_SetLayer\_VM\_Managed\_Layer\_), 
[SetPatchBase.GetPointDirectionImpl\(ref VectorBase, ref VectorBase, IReferencable\)](VM.Managed.DAFUL.FE.SetPatchBase.md\#VM\_Managed\_DAFUL\_FE\_SetPatchBase\_GetPointDirectionImpl\_VM\_Managed\_VectorBase\_\_VM\_Managed\_VectorBase\_\_VM\_Managed\_IReferencable\_), 
[SetPatchBase.GetDefaultMaxPenetrationImpl\(ref double, IReferencable\)](VM.Managed.DAFUL.FE.SetPatchBase.md\#VM\_Managed\_DAFUL\_FE\_SetPatchBase\_GetDefaultMaxPenetrationImpl\_System\_Double\_\_VM\_Managed\_IReferencable\_), 
[SetPatchBase.GetCenterPositionDirectionImpl\(uint, ref VectorBase, ref VectorBase, IReferencable\)](VM.Managed.DAFUL.FE.SetPatchBase.md\#VM\_Managed\_DAFUL\_FE\_SetPatchBase\_GetCenterPositionDirectionImpl\_System\_UInt32\_VM\_Managed\_VectorBase\_\_VM\_Managed\_VectorBase\_\_VM\_Managed\_IReferencable\_), 
[SetPatchBase.ReadXmlCore\(XmlReader, ref bool\)](VM.Managed.DAFUL.FE.SetPatchBase.md\#VM\_Managed\_DAFUL\_FE\_SetPatchBase\_ReadXmlCore\_System\_Xml\_XmlReader\_System\_Boolean\_\_), 
[SetPatchBase.GeometryNameForMultiContact](VM.Managed.DAFUL.FE.SetPatchBase.md\#VM\_Managed\_DAFUL\_FE\_SetPatchBase\_GeometryNameForMultiContact), 
[SetPatchBase.GeometryFullName](VM.Managed.DAFUL.FE.SetPatchBase.md\#VM\_Managed\_DAFUL\_FE\_SetPatchBase\_GeometryFullName), 
[SetPatchBase.IsVisible](VM.Managed.DAFUL.FE.SetPatchBase.md\#VM\_Managed\_DAFUL\_FE\_SetPatchBase\_IsVisible), 
[SetPatchBase.Layer](VM.Managed.DAFUL.FE.SetPatchBase.md\#VM\_Managed\_DAFUL\_FE\_SetPatchBase\_Layer), 
[SetPatchBase.Gap](VM.Managed.DAFUL.FE.SetPatchBase.md\#VM\_Managed\_DAFUL\_FE\_SetPatchBase\_Gap), 
[SetPatchBase.SurfaceSmoothingType](VM.Managed.DAFUL.FE.SetPatchBase.md\#VM\_Managed\_DAFUL\_FE\_SetPatchBase\_SurfaceSmoothingType), 
[SetPatchBase.HalfThickness](VM.Managed.DAFUL.FE.SetPatchBase.md\#VM\_Managed\_DAFUL\_FE\_SetPatchBase\_HalfThickness), 
[SetPatchBase.MaxPenetration](VM.Managed.DAFUL.FE.SetPatchBase.md\#VM\_Managed\_DAFUL\_FE\_SetPatchBase\_MaxPenetration), 
[SetPatchBase.ArgumentType](VM.Managed.DAFUL.FE.SetPatchBase.md\#VM\_Managed\_DAFUL\_FE\_SetPatchBase\_ArgumentType), 
[SetPatchBase.ReferenceType](VM.Managed.DAFUL.FE.SetPatchBase.md\#VM\_Managed\_DAFUL\_FE\_SetPatchBase\_ReferenceType), 
[SetPatchBase.this\[uint\]](VM.Managed.DAFUL.FE.SetPatchBase.md\#VM\_Managed\_DAFUL\_FE\_SetPatchBase\_Item\_System\_UInt32\_), 
[SetPatchBase.Count](VM.Managed.DAFUL.FE.SetPatchBase.md\#VM\_Managed\_DAFUL\_FE\_SetPatchBase\_Count), 
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

### SetPatch\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.SetPatch" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SetPatch()
```

## Properties

### Color

Gets or sets the color.

```csharp
public override Color Color { set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### PatchIndexCont

Gets the patch index container.

```csharp
public SetPatch.PatchIndexContainer PatchIndexCont { get; set; }
```

#### Property Value

 [SetPatch](VM.Managed.DAFUL.FE.SetPatch.md).[PatchIndexContainer](VM.Managed.DAFUL.FE.SetPatch.PatchIndexContainer.md)

## Methods

### ConnectProxy\(\)

```csharp
public override void ConnectProxy()
```

### Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor A_0)
```

#### Parameters

`A_0` Unit.ConvertFactor

### InstantiateImpl\(Reference, Canvas\)

```csharp
protected override void InstantiateImpl(Reference reference, Canvas canvas)
```

#### Parameters

`reference` Reference

`canvas` Canvas

### MakeReferenceImpl\(LinkedList<Reference\>\)

```csharp
protected override void MakeReferenceImpl(LinkedList<Reference> lstRef)
```

#### Parameters

`lstRef` [LinkedList](https://learn.microsoft.com/dotnet/api/system.collections.generic.linkedlist\-1)<Reference\>

### OnDeserialization\(object\)

Called when [deserialization].

```csharp
public override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### PostOpenDocument\(\)

```csharp
protected override void PostOpenDocument()
```

### ReadXml\(XmlReader\)

Generates an object from its XML representation.

```csharp
public override void ReadXml(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The XmlReader stream from which the object is deserialized.

### ReadXmlCore\(XmlReader, ref bool\)

```csharp
protected override void ReadXmlCore(XmlReader reader, ref bool bNeedUpdate)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

`bNeedUpdate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetLayer\(Layer\)

```csharp
protected override void SetLayer(Layer value)
```

#### Parameters

`value` Layer

### WriteXml\(XmlWriter\)

Converts an object into its XML representation.

```csharp
public override void WriteXml(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The XmlWriter stream to which the object is serialized.


