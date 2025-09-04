#  Class General

Namespace: [VM.Models.Pre.Connections](VM.Models.Pre.Connections.md)  
Assembly: VM.Models.Pre.Connections.dll  

<p>This class is to represent the general constraint.</p>

```csharp
public class General : Connector<PropertyGeneral>, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup, IDraw, IDrawIcon, IReferencable, ITransformable, IConnector, IGenerable, IArgument, IReportable, IFlip, IHasReplaceableEntity, ITranslationalMotionComponent, IRotationalMotionComponent, ICouplerComponent, IEnableForSimulationScenario, IEntityRelation, IRSpringDamperComponent, IRScalarComponent, IForceComponent, ITemplateObject, IReadableForceMarker, ITorqueReferenceForBearing
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<EntityEventCore\> ← 
ContainerObject<EntityEventCore\> ← 
EntityBase ← 
Entity<PropertyGeneral\> ← 
Connector<PropertyGeneral\> ← 
[General](VM.Models.Pre.Connections.General.md)

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
IDraw, 
IDrawIcon, 
IReferencable, 
ITransformable, 
IConnector, 
IGenerable, 
IArgument, 
IReportable, 
IFlip, 
IHasReplaceableEntity, 
ITranslationalMotionComponent, 
IRotationalMotionComponent, 
ICouplerComponent, 
IEnableForSimulationScenario, 
IEntityRelation, 
IRSpringDamperComponent, 
IRScalarComponent, 
IForceComponent, 
ITemplateObject, 
IReadableForceMarker, 
ITorqueReferenceForBearing

#### Inherited Members

Connector<PropertyGeneral\>.Initialize\(Unit.ConvertFactor\), 
Connector<PropertyGeneral\>.GetTargetListForUpdate\(\), 
Connector<PropertyGeneral\>.PostAddToDocument\(\), 
Connector<PropertyGeneral\>.ResetInvalidEntity\(\), 
Connector<PropertyGeneral\>.Verify\(VerifiedResult\), 
Connector<PropertyGeneral\>.LinkRequestUpdate\(object, LinkEventArgs\), 
Connector<PropertyGeneral\>.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\), 
Connector<PropertyGeneral\>.Draw\(Canvas\), 
Connector<PropertyGeneral\>.ReDraw\(\), 
Connector<PropertyGeneral\>.FindLocal\(string\), 
Connector<PropertyGeneral\>.Instantiate\(Reference, Canvas\), 
Connector<PropertyGeneral\>.MakeReference\(LinkedList<Reference\>\), 
Connector<PropertyGeneral\>.MakeReferenceImpl\(LinkedList<Reference\>\), 
Connector<PropertyGeneral\>.GetLayerImpl\(\), 
Connector<PropertyGeneral\>.SetLayerImpl\(Layer\), 
Connector<PropertyGeneral\>.SwitchImpl\(\), 
Connector<PropertyGeneral\>.BaseMarker, 
Connector<PropertyGeneral\>.ActionMarker, 
Connector<PropertyGeneral\>.ConnectorReferenceMarker, 
Connector<PropertyGeneral\>.PreventDuplicatedRBE, 
Connector<PropertyGeneral\>.Generable, 
Connector<PropertyGeneral\>.HasLayerExplicitly, 
Connector<PropertyGeneral\>.Hide, 
Connector<PropertyGeneral\>.Referencable, 
Connector<PropertyGeneral\>.Visible, 
Connector<PropertyGeneral\>.Layer, 
Connector<PropertyGeneral\>.ReferenceType, 
Connector<PropertyGeneral\>.ArgumentType, 
Connector<PropertyGeneral\>.CanWriteToOutFileImpl, 
Connector<PropertyGeneral\>.ReportTypeImpl, 
Connector<PropertyGeneral\>.CanSwitchImpl, 
Entity<PropertyGeneral\>.Initialize\(Unit.ConvertFactor\), 
Entity<PropertyGeneral\>.GetUnnamedObjectName\(object\), 
Entity<PropertyGeneral\>.FindLocal\(string\), 
Entity<PropertyGeneral\>.Property, 
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

### <a id="VM_Models_Pre_Connections_General__ctor"></a> General\(\)

<p>Initializes a new instance of the <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref> class.</p>

```csharp
public General()
```

### <a id="VM_Models_Pre_Connections_General__ctor_System_String_"></a> General\(string\)

<p>Initializes a new instance of the <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref> class.</p>

```csharp
public General(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

<p>Name of the general constraint.</p>

### <a id="VM_Models_Pre_Connections_General__ctor_System_String_VM_Models_Pre_Connections_PropertyGeneral_ConnectorType_"></a> General\(string, ConnectorType\)

<p>Initializes a new instance of the <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref> class.</p>

```csharp
public General(string strName, PropertyGeneral.ConnectorType type)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

<p>Name of the general constraint.</p>

`type` [PropertyGeneral](VM.Models.Pre.Connections.PropertyGeneral.md).[ConnectorType](VM.Models.Pre.Connections.PropertyGeneral.ConnectorType.md)

<p>Type of the general constraint.</p>

### <a id="VM_Models_Pre_Connections_General__ctor_System_String_VM_Managed_Property_"></a> General\(string, Property\)

<p>Initializes a new instance of the <xref href="VM.Models.Pre.Connections.General" data-throw-if-not-resolved="false"></xref> class.</p>

```csharp
public General(string strName, Property property)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

<p>Name of the general constraint</p>

`property` Property

<p>Property of the general constraint</p>

## Properties

### <a id="VM_Models_Pre_Connections_General_PreventDuplicatedRBE"></a> PreventDuplicatedRBE

Gets a value whether this instance prevent duplicated RBE.

```csharp
public override bool PreventDuplicatedRBE { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Pre_Connections_General_ReportTypeImpl"></a> ReportTypeImpl

Gets the report type.

```csharp
protected override IReportable.ReportEntityType ReportTypeImpl { get; }
```

#### Property Value

 IReportable.ReportEntityType

### <a id="VM_Models_Pre_Connections_General_TopologyEntityTypeName"></a> TopologyEntityTypeName

<p>Get the object type name</p>
<p>
        Type : System::String
        LinkRequestUpdate 시 처리 : N/A
        Read/Write : Read
        Read/Write Condition : N/A
        연관 프로퍼티 : N/A
        Validation 조건 : N/A
        UI Visibility : false
        변경 시 DFS 재생성 여부 : No
        변경 시 DFG 재생성 여부 : No
        변경 시 GINF 재생성 여부 : No
        </p>

```csharp
public override string TopologyEntityTypeName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Models_Pre_Connections_General_Draw_VM_CAD_Kernel_Render_Canvas_"></a> Draw\(Canvas\)

<p>Draws the icon.</p>

```csharp
public override void Draw(Canvas canvas)
```

#### Parameters

`canvas` Canvas

<p>The canvas has icon information.</p>

### <a id="VM_Models_Pre_Connections_General_InitializeEvent_VM_Managed_Document3D_"></a> InitializeEvent\(Document3D\)

<p>Initializes event.</p>

```csharp
public static void InitializeEvent(Document3D doc)
```

#### Parameters

`doc` Document3D

### <a id="VM_Models_Pre_Connections_General_MakeReferenceImpl_System_Collections_Generic_LinkedList_VM_Managed_Reference__"></a> MakeReferenceImpl\(LinkedList<Reference\>\)

<p>Makes the reference [implementation].</p>

```csharp
protected override void MakeReferenceImpl(LinkedList<Reference> lstRef)
```

#### Parameters

`lstRef` [LinkedList](https://learn.microsoft.com/dotnet/api/system.collections.generic.linkedlist\-1)<Reference\>

<p>The container.</p>

### <a id="VM_Models_Pre_Connections_General_ReadTemplateImpl_System_Xml_XmlReader_"></a> ReadTemplateImpl\(XmlReader\)

Reads the template document [implementation].

```csharp
protected override void ReadTemplateImpl(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The reader.

### <a id="VM_Models_Pre_Connections_General_WriteTemplateImpl_System_Xml_XmlWriter_"></a> WriteTemplateImpl\(XmlWriter\)

Writes the template document [implementation].

```csharp
protected override void WriteTemplateImpl(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The writer.

