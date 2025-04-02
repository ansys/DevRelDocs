#  Class Cylindrical

Namespace: [VM.Managed.DAFUL.Constraints](VM.Managed.DAFUL.Constraints.md)  
Assembly: VMDCB.dll  

This class is to represent the cylindrical constraint.

```csharp
public class Cylindrical : Constraint<PropertyCylindrical>, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup, IDraw, IDrawIcon, ITransformable, IConnector, IEntityRelation, IGenerable, IArgument, IReportable, IFlip, IHasReplaceableEntity, IEnableForSimulationScenario, ITorqueReferenceForBearing, ICouplerComponent, IReferencable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<EntityEventCore\> ← 
ContainerObject<EntityEventCore\> ← 
EntityBase ← 
Entity<PropertyCylindrical\> ← 
Connector<PropertyCylindrical\> ← 
[Constraint<PropertyCylindrical\>](VM.Managed.DAFUL.Constraints.Constraint\-1.md) ← 
[Cylindrical](VM.Managed.DAFUL.Constraints.Cylindrical.md)

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
ITransformable, 
IConnector, 
IEntityRelation, 
IGenerable, 
IArgument, 
IReportable, 
IFlip, 
IHasReplaceableEntity, 
IEnableForSimulationScenario, 
ITorqueReferenceForBearing, 
ICouplerComponent, 
IReferencable

#### Inherited Members

[Constraint<PropertyCylindrical\>.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.Constraints.Constraint\-1.md\#VM\_Managed\_DAFUL\_Constraints\_Constraint\_1\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[Constraint<PropertyCylindrical\>.Generable](VM.Managed.DAFUL.Constraints.Constraint\-1.md\#VM\_Managed\_DAFUL\_Constraints\_Constraint\_1\_Generable), 
Connector<PropertyCylindrical\>.Initialize\(Unit.ConvertFactor\), 
Connector<PropertyCylindrical\>.GetTargetListForUpdate\(\), 
Connector<PropertyCylindrical\>.PostAddToDocument\(\), 
Connector<PropertyCylindrical\>.ResetInvalidEntity\(\), 
Connector<PropertyCylindrical\>.Verify\(VerifiedResult\), 
Connector<PropertyCylindrical\>.LinkRequestUpdate\(object, LinkEventArgs\), 
Connector<PropertyCylindrical\>.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\), 
Connector<PropertyCylindrical\>.Draw\(Canvas\), 
Connector<PropertyCylindrical\>.ReDraw\(\), 
Connector<PropertyCylindrical\>.FindLocal\(string\), 
Connector<PropertyCylindrical\>.Instantiate\(Reference, Canvas\), 
Connector<PropertyCylindrical\>.MakeReference\(LinkedList<Reference\>\), 
Connector<PropertyCylindrical\>.MakeReferenceImpl\(LinkedList<Reference\>\), 
Connector<PropertyCylindrical\>.GetLayerImpl\(\), 
Connector<PropertyCylindrical\>.SetLayerImpl\(Layer\), 
Connector<PropertyCylindrical\>.SwitchImpl\(\), 
Connector<PropertyCylindrical\>.BaseMarker, 
Connector<PropertyCylindrical\>.ActionMarker, 
Connector<PropertyCylindrical\>.ConnectorReferenceMarker, 
Connector<PropertyCylindrical\>.PreventDuplicatedRBE, 
Connector<PropertyCylindrical\>.Generable, 
Connector<PropertyCylindrical\>.HasLayerExplicitly, 
Connector<PropertyCylindrical\>.Hide, 
Connector<PropertyCylindrical\>.Referencable, 
Connector<PropertyCylindrical\>.Visible, 
Connector<PropertyCylindrical\>.Layer, 
Connector<PropertyCylindrical\>.ReferenceType, 
Connector<PropertyCylindrical\>.ArgumentType, 
Connector<PropertyCylindrical\>.CanWriteToOutFileImpl, 
Connector<PropertyCylindrical\>.ReportTypeImpl, 
Connector<PropertyCylindrical\>.CanSwitchImpl, 
Entity<PropertyCylindrical\>.Initialize\(Unit.ConvertFactor\), 
Entity<PropertyCylindrical\>.GetUnnamedObjectName\(object\), 
Entity<PropertyCylindrical\>.FindLocal\(string\), 
Entity<PropertyCylindrical\>.Property, 
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

### <a id="VM_Managed_DAFUL_Constraints_Cylindrical__ctor"></a> Cylindrical\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Constraints.Cylindrical" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Cylindrical()
```

### <a id="VM_Managed_DAFUL_Constraints_Cylindrical__ctor_System_String_"></a> Cylindrical\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Constraints.Cylindrical" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Cylindrical(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the cylindrical constraint.

## Properties

### <a id="VM_Managed_DAFUL_Constraints_Cylindrical_PreventDuplicatedRBE"></a> PreventDuplicatedRBE

Gets a value whether this instance prevent duplicated RBE.

```csharp
public override bool PreventDuplicatedRBE { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Constraints_Cylindrical_ReportTypeImpl"></a> ReportTypeImpl

Gets the report type.

```csharp
protected override IReportable.ReportEntityType ReportTypeImpl { get; }
```

#### Property Value

 IReportable.ReportEntityType

## Methods

### <a id="VM_Managed_DAFUL_Constraints_Cylindrical_GetActionMarker"></a> GetActionMarker\(\)

Gets the action marker.

```csharp
public Marker GetActionMarker()
```

#### Returns

 Marker

The action marker.

### <a id="VM_Managed_DAFUL_Constraints_Cylindrical_GetActionParentConnectable"></a> GetActionParentConnectable\(\)

Gets the action parent connectable.

```csharp
public IConnectable GetActionParentConnectable()
```

#### Returns

 IConnectable

The action parent connectable

### <a id="VM_Managed_DAFUL_Constraints_Cylindrical_GetActionTransform"></a> GetActionTransform\(\)

Gets the action transform.

```csharp
public TransformBase GetActionTransform()
```

#### Returns

 TransformBase

The action transformation

### <a id="VM_Managed_DAFUL_Constraints_Cylindrical_GetBaseMarker"></a> GetBaseMarker\(\)

Gets the base marker.

```csharp
public Marker GetBaseMarker()
```

#### Returns

 Marker

The base marker.

### <a id="VM_Managed_DAFUL_Constraints_Cylindrical_GetBaseParentConnectable"></a> GetBaseParentConnectable\(\)

Gets the base parent connectable.

```csharp
public IConnectable GetBaseParentConnectable()
```

#### Returns

 IConnectable

The base parent connectable

### <a id="VM_Managed_DAFUL_Constraints_Cylindrical_GetBaseTransform"></a> GetBaseTransform\(\)

Gets the base transform.

```csharp
public TransformBase GetBaseTransform()
```

#### Returns

 TransformBase

The base transformation

### <a id="VM_Managed_DAFUL_Constraints_Cylindrical_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

