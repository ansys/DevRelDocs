#  Class SPTSP

Namespace: [VM.Managed.DAFUL.Contact](VM.Managed.DAFUL.Contact.md)  
Assembly: VMDCt.dll  

Not implementated

```csharp
public class SPTSP : ContactConstraint<PropertySPTSP>, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup, IDraw, IDrawIcon, IReferencable, ITransformable, IConnector, IEntityRelation, IGenerable, IArgument, IReportable, IFlip, IHasReplaceableEntity, IEnableForSimulationScenario
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<EntityEventCore\> ← 
ContainerObject<EntityEventCore\> ← 
EntityBase ← 
Entity<PropertySPTSP\> ← 
Connector<PropertySPTSP\> ← 
[ContactConstraint<PropertySPTSP\>](VM.Managed.DAFUL.Contact.ContactConstraint\-1.md) ← 
[SPTSP](VM.Managed.DAFUL.Contact.SPTSP.md)

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
IEntityRelation, 
IGenerable, 
IArgument, 
IReportable, 
IFlip, 
IHasReplaceableEntity, 
IEnableForSimulationScenario

#### Inherited Members

[ContactConstraint<PropertySPTSP\>.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)](VM.Managed.DAFUL.Contact.ContactConstraint\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactConstraint\_1\_GetModelNavigatorInformationImpl\_System\_Xml\_XmlDocument\_System\_Xml\_XmlElement\_System\_Boolean\_), 
[ContactConstraint<PropertySPTSP\>.TargetType](VM.Managed.DAFUL.Contact.ContactConstraint\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactConstraint\_1\_TargetType), 
[ContactConstraint<PropertySPTSP\>.Use](VM.Managed.DAFUL.Contact.ContactConstraint\-1.md\#VM\_Managed\_DAFUL\_Contact\_ContactConstraint\_1\_Use), 
Connector<PropertySPTSP\>.Initialize\(Unit.ConvertFactor\), 
Connector<PropertySPTSP\>.GetTargetListForUpdate\(\), 
Connector<PropertySPTSP\>.PostAddToDocument\(\), 
Connector<PropertySPTSP\>.ResetInvalidEntity\(\), 
Connector<PropertySPTSP\>.Verify\(VerifiedResult\), 
Connector<PropertySPTSP\>.LinkRequestUpdate\(object, LinkEventArgs\), 
Connector<PropertySPTSP\>.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\), 
Connector<PropertySPTSP\>.Draw\(Canvas\), 
Connector<PropertySPTSP\>.ReDraw\(\), 
Connector<PropertySPTSP\>.FindLocal\(string\), 
Connector<PropertySPTSP\>.Instantiate\(Reference, Canvas\), 
Connector<PropertySPTSP\>.MakeReference\(LinkedList<Reference\>\), 
Connector<PropertySPTSP\>.MakeReferenceImpl\(LinkedList<Reference\>\), 
Connector<PropertySPTSP\>.GetLayerImpl\(\), 
Connector<PropertySPTSP\>.SetLayerImpl\(Layer\), 
Connector<PropertySPTSP\>.SwitchImpl\(\), 
Connector<PropertySPTSP\>.BaseMarker, 
Connector<PropertySPTSP\>.ActionMarker, 
Connector<PropertySPTSP\>.ConnectorReferenceMarker, 
Connector<PropertySPTSP\>.PreventDuplicatedRBE, 
Connector<PropertySPTSP\>.Generable, 
Connector<PropertySPTSP\>.HasLayerExplicitly, 
Connector<PropertySPTSP\>.Hide, 
Connector<PropertySPTSP\>.Referencable, 
Connector<PropertySPTSP\>.Visible, 
Connector<PropertySPTSP\>.Layer, 
Connector<PropertySPTSP\>.ReferenceType, 
Connector<PropertySPTSP\>.ArgumentType, 
Connector<PropertySPTSP\>.CanWriteToOutFileImpl, 
Connector<PropertySPTSP\>.ReportTypeImpl, 
Connector<PropertySPTSP\>.CanSwitchImpl, 
Entity<PropertySPTSP\>.Initialize\(Unit.ConvertFactor\), 
Entity<PropertySPTSP\>.GetUnnamedObjectName\(object\), 
Entity<PropertySPTSP\>.FindLocal\(string\), 
Entity<PropertySPTSP\>.Property, 
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

### <a id="VM_Managed_DAFUL_Contact_SPTSP__ctor"></a> SPTSP\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Contact.SPTSP" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected SPTSP()
```

### <a id="VM_Managed_DAFUL_Contact_SPTSP__ctor_System_String_"></a> SPTSP\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Contact.SPTSP" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SPTSP(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the sphere to sphere contact.

## Properties

### <a id="VM_Managed_DAFUL_Contact_SPTSP_ActionGeom"></a> ActionGeom

Gets or sets the action geom.

```csharp
public ContactGeom3D ActionGeom { get; set; }
```

#### Property Value

 [ContactGeom3D](VM.Managed.DAFUL.Contact.ContactGeom3D.md)

### <a id="VM_Managed_DAFUL_Contact_SPTSP_BaseGeom"></a> BaseGeom

Gets or sets the base geom.

```csharp
public ContactGeom3D BaseGeom { get; set; }
```

#### Property Value

 [ContactGeom3D](VM.Managed.DAFUL.Contact.ContactGeom3D.md)

### <a id="VM_Managed_DAFUL_Contact_SPTSP_CanSwitchImpl"></a> CanSwitchImpl

```csharp
protected override bool CanSwitchImpl { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Contact_SPTSP_ReportTypeImpl"></a> ReportTypeImpl

Gets the report type.

```csharp
protected override IReportable.ReportEntityType ReportTypeImpl { get; }
```

#### Property Value

 IReportable.ReportEntityType

### <a id="VM_Managed_DAFUL_Contact_SPTSP_TargetType"></a> TargetType

Gets the type of the target.

```csharp
public override string TargetType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Contact_SPTSP_Use"></a> Use

Gets a value indicating whether use this instance.

```csharp
public override bool Use { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Managed_DAFUL_Contact_SPTSP_FindLocal_System_String_"></a> FindLocal\(string\)

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

