#  Class BearingGeneral

Namespace: [VM.Managed.DAFUL.Bearing.Force](VM.Managed.DAFUL.Bearing.Force.md)  
Assembly: VMDBearing.dll  

This class is to represent the bearing general force.

```csharp
public class BearingGeneral : BearingBase<PropertyBearingGeneral>, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup, IDraw, IDrawIcon, IReferencable, ITransformable, IConnector, IEntityRelation, IGenerable, IArgument, IReportable, IFlip, IHasReplaceableEntity, IEnableForSimulationScenario, ITorqueReferenceForBearing
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<EntityEventCore\> ← 
ContainerObject<EntityEventCore\> ← 
EntityBase ← 
Entity<PropertyBearingGeneral\> ← 
Connector<PropertyBearingGeneral\> ← 
Force<PropertyBearingGeneral\> ← 
[BearingBase<PropertyBearingGeneral\>](VM.Managed.DAFUL.Bearing.Force.BearingBase\-1.md) ← 
[BearingGeneral](VM.Managed.DAFUL.Bearing.Force.BearingGeneral.md)

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
IEnableForSimulationScenario, 
ITorqueReferenceForBearing

#### Inherited Members

[BearingBase<PropertyBearingGeneral\>.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.Bearing.Force.BearingBase\-1.md\#VM\_Managed\_DAFUL\_Bearing\_Force\_BearingBase\_1\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[BearingBase<PropertyBearingGeneral\>.UseForSimulationScenario](VM.Managed.DAFUL.Bearing.Force.BearingBase\-1.md\#VM\_Managed\_DAFUL\_Bearing\_Force\_BearingBase\_1\_UseForSimulationScenario), 
Force<PropertyBearingGeneral\>.Initialize\(Unit.ConvertFactor\), 
Force<PropertyBearingGeneral\>.WriteMarker\(XmlWriter, Marker, string\), 
Force<PropertyBearingGeneral\>.ReadMarker\(XmlReader, Marker, string\), 
Force<PropertyBearingGeneral\>.UseForSimulationScenario, 
Connector<PropertyBearingGeneral\>.Initialize\(Unit.ConvertFactor\), 
Connector<PropertyBearingGeneral\>.GetTargetListForUpdate\(\), 
Connector<PropertyBearingGeneral\>.PostAddToDocument\(\), 
Connector<PropertyBearingGeneral\>.ResetInvalidEntity\(\), 
Connector<PropertyBearingGeneral\>.Verify\(VerifiedResult\), 
Connector<PropertyBearingGeneral\>.LinkRequestUpdate\(object, LinkEventArgs\), 
Connector<PropertyBearingGeneral\>.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\), 
Connector<PropertyBearingGeneral\>.Draw\(Canvas\), 
Connector<PropertyBearingGeneral\>.ReDraw\(\), 
Connector<PropertyBearingGeneral\>.FindLocal\(string\), 
Connector<PropertyBearingGeneral\>.Instantiate\(Reference, Canvas\), 
Connector<PropertyBearingGeneral\>.MakeReference\(LinkedList<Reference\>\), 
Connector<PropertyBearingGeneral\>.MakeReferenceImpl\(LinkedList<Reference\>\), 
Connector<PropertyBearingGeneral\>.GetLayerImpl\(\), 
Connector<PropertyBearingGeneral\>.SetLayerImpl\(Layer\), 
Connector<PropertyBearingGeneral\>.SwitchImpl\(\), 
Connector<PropertyBearingGeneral\>.BaseMarker, 
Connector<PropertyBearingGeneral\>.ActionMarker, 
Connector<PropertyBearingGeneral\>.ConnectorReferenceMarker, 
Connector<PropertyBearingGeneral\>.PreventDuplicatedRBE, 
Connector<PropertyBearingGeneral\>.Generable, 
Connector<PropertyBearingGeneral\>.HasLayerExplicitly, 
Connector<PropertyBearingGeneral\>.Hide, 
Connector<PropertyBearingGeneral\>.Referencable, 
Connector<PropertyBearingGeneral\>.Visible, 
Connector<PropertyBearingGeneral\>.Layer, 
Connector<PropertyBearingGeneral\>.ReferenceType, 
Connector<PropertyBearingGeneral\>.ArgumentType, 
Connector<PropertyBearingGeneral\>.CanWriteToOutFileImpl, 
Connector<PropertyBearingGeneral\>.ReportTypeImpl, 
Connector<PropertyBearingGeneral\>.CanSwitchImpl, 
Entity<PropertyBearingGeneral\>.Initialize\(Unit.ConvertFactor\), 
Entity<PropertyBearingGeneral\>.GetUnnamedObjectName\(object\), 
Entity<PropertyBearingGeneral\>.FindLocal\(string\), 
Entity<PropertyBearingGeneral\>.Property, 
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

### <a id="VM_Managed_DAFUL_Bearing_Force_BearingGeneral__ctor"></a> BearingGeneral\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Bearing.Force.BearingGeneral" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BearingGeneral()
```

### <a id="VM_Managed_DAFUL_Bearing_Force_BearingGeneral__ctor_System_String_"></a> BearingGeneral\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Bearing.Force.BearingGeneral" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BearingGeneral(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the force.

## Properties

### <a id="VM_Managed_DAFUL_Bearing_Force_BearingGeneral_CanWriteToOutFileImpl"></a> CanWriteToOutFileImpl

```csharp
protected override bool CanWriteToOutFileImpl { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Bearing_Force_BearingGeneral_ReportTypeImpl"></a> ReportTypeImpl

Gets the report type.

```csharp
protected override IReportable.ReportEntityType ReportTypeImpl { get; }
```

#### Property Value

 IReportable.ReportEntityType

## Methods

### <a id="VM_Managed_DAFUL_Bearing_Force_BearingGeneral_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

