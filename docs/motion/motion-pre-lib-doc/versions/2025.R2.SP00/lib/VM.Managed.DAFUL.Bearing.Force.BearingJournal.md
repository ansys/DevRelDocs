#  Class BearingJournal

Namespace: [VM.Managed.DAFUL.Bearing.Force](VM.Managed.DAFUL.Bearing.Force.md)  
Assembly: VMDBearing.dll  

This class is to represent the bearing journal force.

```csharp
public class BearingJournal : BearingAnalytic<PropertyBearingJournal>, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup, IDraw, IDrawIcon, IReferencable, ITransformable, IConnector, IEntityRelation, IGenerable, IArgument, IReportable, IFlip, IHasReplaceableEntity, IEnableForSimulationScenario, ITorqueReferenceForBearing
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<EntityEventCore\> ← 
ContainerObject<EntityEventCore\> ← 
EntityBase ← 
Entity<PropertyBearingJournal\> ← 
Connector<PropertyBearingJournal\> ← 
Force<PropertyBearingJournal\> ← 
[BearingBase<PropertyBearingJournal\>](VM.Managed.DAFUL.Bearing.Force.BearingBase\-1.md) ← 
[BearingAnalytic<PropertyBearingJournal\>](VM.Managed.DAFUL.Bearing.Force.BearingAnalytic\-1.md) ← 
[BearingJournal](VM.Managed.DAFUL.Bearing.Force.BearingJournal.md)

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

[BearingAnalytic<PropertyBearingJournal\>.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.Bearing.Force.BearingAnalytic\-1.md\#VM\_Managed\_DAFUL\_Bearing\_Force\_BearingAnalytic\_1\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[BearingAnalytic<PropertyBearingJournal\>.CanWriteToOutFileImpl](VM.Managed.DAFUL.Bearing.Force.BearingAnalytic\-1.md\#VM\_Managed\_DAFUL\_Bearing\_Force\_BearingAnalytic\_1\_CanWriteToOutFileImpl), 
[BearingAnalytic<PropertyBearingJournal\>.ReportTypeImpl](VM.Managed.DAFUL.Bearing.Force.BearingAnalytic\-1.md\#VM\_Managed\_DAFUL\_Bearing\_Force\_BearingAnalytic\_1\_ReportTypeImpl), 
[BearingBase<PropertyBearingJournal\>.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.Bearing.Force.BearingBase\-1.md\#VM\_Managed\_DAFUL\_Bearing\_Force\_BearingBase\_1\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[BearingBase<PropertyBearingJournal\>.UseForSimulationScenario](VM.Managed.DAFUL.Bearing.Force.BearingBase\-1.md\#VM\_Managed\_DAFUL\_Bearing\_Force\_BearingBase\_1\_UseForSimulationScenario), 
Force<PropertyBearingJournal\>.Initialize\(Unit.ConvertFactor\), 
Force<PropertyBearingJournal\>.WriteMarker\(XmlWriter, Marker, string\), 
Force<PropertyBearingJournal\>.ReadMarker\(XmlReader, Marker, string\), 
Force<PropertyBearingJournal\>.UseForSimulationScenario, 
Connector<PropertyBearingJournal\>.Initialize\(Unit.ConvertFactor\), 
Connector<PropertyBearingJournal\>.GetTargetListForUpdate\(\), 
Connector<PropertyBearingJournal\>.PostAddToDocument\(\), 
Connector<PropertyBearingJournal\>.ResetInvalidEntity\(\), 
Connector<PropertyBearingJournal\>.Verify\(VerifiedResult\), 
Connector<PropertyBearingJournal\>.LinkRequestUpdate\(object, LinkEventArgs\), 
Connector<PropertyBearingJournal\>.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\), 
Connector<PropertyBearingJournal\>.Draw\(Canvas\), 
Connector<PropertyBearingJournal\>.ReDraw\(\), 
Connector<PropertyBearingJournal\>.FindLocal\(string\), 
Connector<PropertyBearingJournal\>.Instantiate\(Reference, Canvas\), 
Connector<PropertyBearingJournal\>.MakeReference\(LinkedList<Reference\>\), 
Connector<PropertyBearingJournal\>.MakeReferenceImpl\(LinkedList<Reference\>\), 
Connector<PropertyBearingJournal\>.GetLayerImpl\(\), 
Connector<PropertyBearingJournal\>.SetLayerImpl\(Layer\), 
Connector<PropertyBearingJournal\>.SwitchImpl\(\), 
Connector<PropertyBearingJournal\>.BaseMarker, 
Connector<PropertyBearingJournal\>.ActionMarker, 
Connector<PropertyBearingJournal\>.ConnectorReferenceMarker, 
Connector<PropertyBearingJournal\>.PreventDuplicatedRBE, 
Connector<PropertyBearingJournal\>.Generable, 
Connector<PropertyBearingJournal\>.HasLayerExplicitly, 
Connector<PropertyBearingJournal\>.Hide, 
Connector<PropertyBearingJournal\>.Referencable, 
Connector<PropertyBearingJournal\>.Visible, 
Connector<PropertyBearingJournal\>.Layer, 
Connector<PropertyBearingJournal\>.ReferenceType, 
Connector<PropertyBearingJournal\>.ArgumentType, 
Connector<PropertyBearingJournal\>.CanWriteToOutFileImpl, 
Connector<PropertyBearingJournal\>.ReportTypeImpl, 
Connector<PropertyBearingJournal\>.CanSwitchImpl, 
Entity<PropertyBearingJournal\>.Initialize\(Unit.ConvertFactor\), 
Entity<PropertyBearingJournal\>.GetUnnamedObjectName\(object\), 
Entity<PropertyBearingJournal\>.FindLocal\(string\), 
Entity<PropertyBearingJournal\>.Property, 
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

### <a id="VM_Managed_DAFUL_Bearing_Force_BearingJournal__ctor"></a> BearingJournal\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Bearing.Force.BearingJournal" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BearingJournal()
```

### <a id="VM_Managed_DAFUL_Bearing_Force_BearingJournal__ctor_System_String_"></a> BearingJournal\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Bearing.Force.BearingJournal" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BearingJournal(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the force.

## Methods

### <a id="VM_Managed_DAFUL_Bearing_Force_BearingJournal_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

