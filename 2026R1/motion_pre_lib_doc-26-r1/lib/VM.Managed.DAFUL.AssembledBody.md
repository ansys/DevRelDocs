#  Class AssembledBody

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This class is represent the assembled body

```csharp
public class AssembledBody : InstanceContainer, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, ISubEntity, IEntityBase, IObjectBase, IObject, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, INamed, INavigatorItem, IContainer, ILinkContainer, IOwned, IHasID, IDocumentOwner, IReferencable, ITransformable, IVisible, IAssemblyOwner, IInterfaceTable, IGroup, IMultiChangable, IInstanceContainer, IMarkerCreatable, IFacesetCreatable, IConnectableNotReference, IDrawIcon, IConnectableHasGeometry, IMassProp, IChainable, IChainedSegmentConnector, IHasBuilder, IBodyAnalysisType, IMFModalable, ITemperatureComponent, IHeatGenerationComponent, IGeometricalComponent, IContactableGeometry2Dot5D, IConnectable, IMarkerParent, IEntityRelation, IHasBody, IBody, ICustomFullName, IHasMaterial
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
SubEntity ← 
InstanceContainer ← 
[AssembledBody](VM.Managed.DAFUL.AssembledBody.md)

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
IEventProvider, 
IHasKeyObject, 
IHasName, 
IEnabled, 
IHasComment, 
INamed, 
INavigatorItem, 
IContainer, 
ILinkContainer, 
IOwned, 
IHasID, 
IDocumentOwner, 
IReferencable, 
ITransformable, 
IVisible, 
IAssemblyOwner, 
IInterfaceTable, 
IGroup, 
IMultiChangable, 
IInstanceContainer, 
[IMarkerCreatable](VM.Managed.DAFUL.IMarkerCreatable.md), 
[IFacesetCreatable](VM.Managed.DAFUL.IFacesetCreatable.md), 
[IConnectableNotReference](VM.Managed.DAFUL.IConnectableNotReference.md), 
IDrawIcon, 
[IConnectableHasGeometry](VM.Managed.DAFUL.IConnectableHasGeometry.md), 
IMassProp, 
IChainable, 
IChainedSegmentConnector, 
IHasBuilder, 
[IBodyAnalysisType](VM.Managed.DAFUL.IBodyAnalysisType.md), 
[IMFModalable](VM.Managed.DAFUL.IMFModalable.md), 
[ITemperatureComponent](VM.Managed.DAFUL.ITemperatureComponent.md), 
[IHeatGenerationComponent](VM.Managed.DAFUL.IHeatGenerationComponent.md), 
[IGeometricalComponent](VM.Managed.DAFUL.IGeometricalComponent.md), 
[IContactableGeometry2Dot5D](VM.Managed.DAFUL.IContactableGeometry2Dot5D.md), 
[IConnectable](VM.Managed.DAFUL.IConnectable.md), 
[IMarkerParent](VM.Managed.DAFUL.IMarkerParent.md), 
IEntityRelation, 
IHasBody, 
IBody, 
[ICustomFullName](VM.Managed.DAFUL.ICustomFullName.md), 
IHasMaterial

#### Inherited Members

InstanceContainer.InitInterfaceTable\(\), 
InstanceContainer.LinkRequestUpdate\(object, LinkEventArgs\), 
InstanceContainer.BindInterface\(\), 
InstanceContainer.BindInterface\(ObjectBase, ObjectBase\), 
InstanceContainer.BindInterface\(InstanceContainer.InterfaceTable\), 
InstanceContainer.Find\(string\), 
InstanceContainer.FindLocal\(string\), 
InstanceContainer.GetNewEntityName\(string\), 
InstanceContainer.GetNewEntityName\(string, bool, int\), 
InstanceContainer.GetNewEntityName\(string, bool, int, int\), 
InstanceContainer.GetUnnamedObjectName\(object\), 
InstanceContainer.MakeReferenceImpl\(LinkedList<Reference\>\), 
InstanceContainer.PostOpenDocumentAfterHookEvent\(\), 
InstanceContainer.TransformImpl\(TMatrix\), 
InstanceContainer.Redraw\(\), 
InstanceContainer.GetLayerImpl\(\), 
InstanceContainer.SetLayerImpl\(Layer\), 
InstanceContainer.IsDestroyContainer\(\), 
InstanceContainer.GetTargetListForUpdate\(\), 
InstanceContainer.ProcessDuplicateReferenceImpl\(Reference\), 
InstanceContainer.PostAddToDocument\(\), 
InstanceContainer.LinkRequestDestroy\(object, LinkEventArgs\), 
InstanceContainer.GetChildListImpl\(\), 
InstanceContainer.OnDeserialization\(object\), 
InstanceContainer.Instance, 
InstanceContainer.InterfaceTableList, 
InstanceContainer.InterfaceTables, 
InstanceContainer.Layer, 
InstanceContainer.IsVisible, 
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

### <a id="VM_Managed_DAFUL_AssembledBody__ctor"></a> AssembledBody\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.AssembledBody" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AssembledBody()
```

### <a id="VM_Managed_DAFUL_AssembledBody__ctor_System_String_VM_Managed_Instance_"></a> AssembledBody\(string, Instance\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.AssembledBody" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AssembledBody(string strName, Instance instance)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the assembled body.

`instance` Instance

The instance.

## Properties

### <a id="VM_Managed_DAFUL_AssembledBody_AnalysisType"></a> AnalysisType

Gets or sets the type of the analysis.

```csharp
public BodyAnalysisType AnalysisType { get; set; }
```

#### Property Value

 [BodyAnalysisType](VM.Managed.DAFUL.BodyAnalysisType.md)

### <a id="VM_Managed_DAFUL_AssembledBody_Body"></a> Body

Gets the body.

```csharp
public IBody Body { get; }
```

#### Property Value

 IBody

### <a id="VM_Managed_DAFUL_AssembledBody_ConnectableBody"></a> ConnectableBody

Gets the connectable body.

```csharp
public ObjectBase ConnectableBody { get; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_DAFUL_AssembledBody_ConnectableFullName"></a> ConnectableFullName

Gets the full name of the connectable.

```csharp
public string ConnectableFullName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_AssembledBody_ConnectableName"></a> ConnectableName

Gets the name of the connectable.

```csharp
public string ConnectableName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_AssembledBody_ConnectablePosition"></a> ConnectablePosition

Sets the connectable position.

```csharp
public Vector ConnectablePosition { set; }
```

#### Property Value

 Vector

### <a id="VM_Managed_DAFUL_AssembledBody_ConnectablePostfixName"></a> ConnectablePostfixName

Sets the postfix name of the connectable.

```csharp
public string ConnectablePostfixName { set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_AssembledBody_DFMFPath"></a> DFMFPath

Gets or sets the DFMF file path.

```csharp
public string DFMFPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_AssembledBody_Geometry"></a> Geometry

Gets the geometry.

```csharp
public virtual List<Body> Geometry { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<Body\>

### <a id="VM_Managed_DAFUL_AssembledBody_LastModifiedTimeToDFMFFile"></a> LastModifiedTimeToDFMFFile

Gets or sets the last modified time to DFMF file.

```csharp
public string LastModifiedTimeToDFMFFile { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_AssembledBody_ModalReferencePosition"></a> ModalReferencePosition

Gets or sets the modal reference modal.

```csharp
public PointBase ModalReferencePosition { get; set; }
```

#### Property Value

 PointBase

### <a id="VM_Managed_DAFUL_AssembledBody_ModeArray"></a> ModeArray

Gets or sets the modes.

```csharp
public ModeForMFModal[] ModeArray { get; set; }
```

#### Property Value

 [ModeForMFModal](VM.Managed.DAFUL.ModeForMFModal.md)\[\]

### <a id="VM_Managed_DAFUL_AssembledBody_MovingReferenceFrame"></a> MovingReferenceFrame

Gets or sets the moving reference frame.

```csharp
public IMarker MovingReferenceFrame { get; set; }
```

#### Property Value

 IMarker

### <a id="VM_Managed_DAFUL_AssembledBody_ParentType"></a> ParentType

Gets the type of the parent.

```csharp
public MarkerParentType ParentType { get; }
```

#### Property Value

 [MarkerParentType](VM.Managed.DAFUL.MarkerParentType.md)

### <a id="VM_Managed_DAFUL_AssembledBody_PropertyOfAssembledBody"></a> PropertyOfAssembledBody

Gets or sets the property of assembled body.

```csharp
public AssembledBodyProperty PropertyOfAssembledBody { get; set; }
```

#### Property Value

 [AssembledBodyProperty](VM.Managed.DAFUL.AssembledBodyProperty.md)

### <a id="VM_Managed_DAFUL_AssembledBody_ReferenceFrameType"></a> ReferenceFrameType

Gets the type of the reference frame.

```csharp
public MarkerReferenceFrameType ReferenceFrameType { get; }
```

#### Property Value

 [MarkerReferenceFrameType](VM.Managed.DAFUL.MarkerReferenceFrameType.md)

### <a id="VM_Managed_DAFUL_AssembledBody_TopologyEntityTypeName"></a> TopologyEntityTypeName

Gets the topology entity type name

```csharp
public override string TopologyEntityTypeName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_AssembledBody_UseAdvancedOption"></a> UseAdvancedOption

Gets or sets use advanced option.

```csharp
public bool UseAdvancedOption { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_AssembledBody_UseModalReferencePosition"></a> UseModalReferencePosition

Gets or sets use modal reference modal.

```csharp
public bool UseModalReferencePosition { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_AssembledBody_UseRMovingReferenceFrame"></a> UseRMovingReferenceFrame

Gets or sets use rotational modal reference modal.

```csharp
public bool UseRMovingReferenceFrame { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_AssembledBody_UseTMovingReferenceFrame"></a> UseTMovingReferenceFrame

Gets or sets use translational modal reference modal.

```csharp
public bool UseTMovingReferenceFrame { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_AssembledBody__MovingReferenceFrame"></a> \_MovingReferenceFrame

Gets or sets the moving reference frame.

```csharp
public Linker<IMarker> _MovingReferenceFrame { get; set; }
```

#### Property Value

 Linker<IMarker\>

## Methods

### <a id="VM_Managed_DAFUL_AssembledBody_FindLocal_System_String_"></a> FindLocal\(string\)

Finds an object that matches a specified name in local.

```csharp
public override IObjectBase FindLocal(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name to search for.

#### Returns

 IObjectBase

An object that matches a specified name.

### <a id="VM_Managed_DAFUL_AssembledBody_FixUp_VM_Managed_ObjectBase_"></a> FixUp\(ObjectBase\)

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

### <a id="VM_Managed_DAFUL_AssembledBody_GetArgumentList_System_Collections_Generic_LinkedList_VM_Managed_ObjectBase__"></a> GetArgumentList\(LinkedList<ObjectBase\>\)

Get argument object list.

```csharp
public override void GetArgumentList(LinkedList<ObjectBase> lstObj)
```

#### Parameters

`lstObj` [LinkedList](https://learn.microsoft.com/dotnet/api/system.collections.generic.linkedlist\-1)<ObjectBase\>

The argument object list.

### <a id="VM_Managed_DAFUL_AssembledBody_GetBuilder"></a> GetBuilder\(\)

Gets the geometry.

```csharp
public ObjectBase[] GetBuilder()
```

#### Returns

 ObjectBase\[\]

geometry container

### <a id="VM_Managed_DAFUL_AssembledBody_GetChildListImpl"></a> GetChildListImpl\(\)

Get all children of the object

```csharp
protected override IEnumerable<ObjectBase> GetChildListImpl()
```

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ObjectBase\>

All children

### <a id="VM_Managed_DAFUL_AssembledBody_GetGeneralMarkerInfo_System_Xml_XmlDocument_System_Xml_XmlElement_VM_Managed_DAFUL_Marker_"></a> GetGeneralMarkerInfo\(XmlDocument, XmlElement, Marker\)

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

### <a id="VM_Managed_DAFUL_AssembledBody_GetGeometryNavigatorInformation_System_Xml_XmlDocument_System_Xml_XmlElement_"></a> GetGeometryNavigatorInformation\(XmlDocument, XmlElement\)

Gets the geometry information for model navigator.

```csharp
public bool GetGeometryNavigatorInformation(XmlDocument xmlDom, XmlElement xmlEle)
```

#### Parameters

`xmlDom` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

The XmlDocument for geometry.

`xmlEle` [XmlElement](https://learn.microsoft.com/dotnet/api/system.xml.xmlelement)

The XmlElement for geometry.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_AssembledBody_GetLayerImpl"></a> GetLayerImpl\(\)

Gets the layer [implementation].

```csharp
protected override Layer GetLayerImpl()
```

#### Returns

 Layer

The layer

### <a id="VM_Managed_DAFUL_AssembledBody_GetModelNavigatorInformationImpl_System_Xml_XmlDocument_System_Xml_XmlElement_System_Boolean_"></a> GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)

Gets the object information for model navigator [implementation].

```csharp
protected override bool GetModelNavigatorInformationImpl(XmlDocument xmlDom, XmlElement xmlEle, bool bHasChild)
```

#### Parameters

`xmlDom` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

The XmlDocument for object.

`xmlEle` [XmlElement](https://learn.microsoft.com/dotnet/api/system.xml.xmlelement)

The XmlElement for object.

`bHasChild` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [has child].

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_AssembledBody_GetNewEntityName_System_String_"></a> GetNewEntityName\(string\)

Gets the new name of the entity [Not Implemented].

```csharp
public override string GetNewEntityName(string strPrefix)
```

#### Parameters

`strPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

The prefix.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The new name

### <a id="VM_Managed_DAFUL_AssembledBody_GetPointDirection_VM_Managed_VectorBase__VM_Managed_VectorBase__VM_Managed_IReferencable_"></a> GetPointDirection\(ref VectorBase, ref VectorBase, IReferencable\)

Gets the geometry's point and direction.

```csharp
public bool GetPointDirection(ref VectorBase point, ref VectorBase direction, IReferencable reference)
```

#### Parameters

`point` VectorBase

The point.

`direction` VectorBase

The direction.

`reference` IReferencable

The reference [no use].

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_AssembledBody_GetPredefinedMarkerInfo_System_Xml_XmlDocument_System_Xml_XmlElement_VM_Managed_DAFUL_ReferencePartMarker_"></a> GetPredefinedMarkerInfo\(XmlDocument, XmlElement, ReferencePartMarker\)

Gets the marker information for model navigator.

```csharp
protected bool GetPredefinedMarkerInfo(XmlDocument xmlDom, XmlElement xmlEle, ReferencePartMarker marker)
```

#### Parameters

`xmlDom` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

The XmlDocument for marker.

`xmlEle` [XmlElement](https://learn.microsoft.com/dotnet/api/system.xml.xmlelement)

The XmlElement for marker.

`marker` [ReferencePartMarker](VM.Managed.DAFUL.ReferencePartMarker.md)

The marker.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_AssembledBody_GetTargetListForUpdate"></a> GetTargetListForUpdate\(\)

Gets the update objects.

```csharp
public override List<IEventProvider> GetTargetListForUpdate()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<IEventProvider\>

### <a id="VM_Managed_DAFUL_AssembledBody_GetUnnamedObjectName_System_Object_"></a> GetUnnamedObjectName\(object\)

Gets the name of the unnamed object.

```csharp
public override string GetUnnamedObjectName(object obUnnamed)
```

#### Parameters

`obUnnamed` [object](https://learn.microsoft.com/dotnet/api/system.object)

The ob unnamed.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The unnamed object name.

### <a id="VM_Managed_DAFUL_AssembledBody_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_AssembledBody_LinkRequestDestroy_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestDestroy\(object, LinkEventArgs\)

Request for destroy the linked object.

```csharp
protected override void LinkRequestDestroy(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_AssembledBody_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Request for update the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_AssembledBody_MakeReferenceImpl_System_Collections_Generic_LinkedList_VM_Managed_Reference__"></a> MakeReferenceImpl\(LinkedList<Reference\>\)

Makes the reference [implementation].

```csharp
protected override void MakeReferenceImpl(LinkedList<Reference> lstRef)
```

#### Parameters

`lstRef` [LinkedList](https://learn.microsoft.com/dotnet/api/system.collections.generic.linkedlist\-1)<Reference\>

The container.

### <a id="VM_Managed_DAFUL_AssembledBody_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### <a id="VM_Managed_DAFUL_AssembledBody_Redraw"></a> Redraw\(\)

Redraw.

```csharp
public override void Redraw()
```

### <a id="VM_Managed_DAFUL_AssembledBody_SetLayerImpl_VM_Managed_Layer_"></a> SetLayerImpl\(Layer\)

Sets the layer [implementation].

```csharp
protected override void SetLayerImpl(Layer layer)
```

#### Parameters

`layer` Layer

The layer.

### <a id="VM_Managed_DAFUL_AssembledBody_TransformImpl_VM_Managed_TMatrix_"></a> TransformImpl\(TMatrix\)

Transforms [implementation].

```csharp
protected override void TransformImpl(TMatrix matT)
```

#### Parameters

`matT` TMatrix

The mat T.

