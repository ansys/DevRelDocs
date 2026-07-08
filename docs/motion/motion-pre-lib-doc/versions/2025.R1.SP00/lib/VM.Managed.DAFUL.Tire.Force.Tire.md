#  Class Tire

Namespace: [VM.Managed.DAFUL.Tire.Force](VM.Managed.DAFUL.Tire.Force.md)  
Assembly: VMDTire.dll  

This class is to represent the tire force.

```csharp
public class Tire : TireBase, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup, IDraw, IDrawIcon, IReferencable, ITransformable, IConnector, IEntityRelation, IGenerable, IArgument, IReportable, IFlip, IEnableForSimulationScenario, ITorqueReferenceForBearing, ITemplateObject
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<EntityEventCore\> ← 
ContainerObject<EntityEventCore\> ← 
EntityBase ← 
Entity<PropertyTire\> ← 
Connector<PropertyTire\> ← 
Force<PropertyTire\> ← 
[TireBase](VM.Managed.DAFUL.Tire.Force.TireBase.md) ← 
[Tire](VM.Managed.DAFUL.Tire.Force.Tire.md)

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
IEnableForSimulationScenario, 
ITorqueReferenceForBearing, 
ITemplateObject

#### Inherited Members

[TireBase.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.Tire.Force.TireBase.md\#VM\_Managed\_DAFUL\_Tire\_Force\_TireBase\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[TireBase.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.DAFUL.Tire.Force.TireBase.md\#VM\_Managed\_DAFUL\_Tire\_Force\_TireBase\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[TireBase.LinkRequestDestroying\(object, LinkEventArgs\)](VM.Managed.DAFUL.Tire.Force.TireBase.md\#VM\_Managed\_DAFUL\_Tire\_Force\_TireBase\_LinkRequestDestroying\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[TireBase.FindLocal\(string\)](VM.Managed.DAFUL.Tire.Force.TireBase.md\#VM\_Managed\_DAFUL\_Tire\_Force\_TireBase\_FindLocal\_System\_String\_), 
[TireBase.GetUnnamedObjectName\(object\)](VM.Managed.DAFUL.Tire.Force.TireBase.md\#VM\_Managed\_DAFUL\_Tire\_Force\_TireBase\_GetUnnamedObjectName\_System\_Object\_), 
[TireBase.WriteTemplateImpl\(XmlWriter\)](VM.Managed.DAFUL.Tire.Force.TireBase.md\#VM\_Managed\_DAFUL\_Tire\_Force\_TireBase\_WriteTemplateImpl\_System\_Xml\_XmlWriter\_), 
[TireBase.ReadTemplateImpl\(XmlReader\)](VM.Managed.DAFUL.Tire.Force.TireBase.md\#VM\_Managed\_DAFUL\_Tire\_Force\_TireBase\_ReadTemplateImpl\_System\_Xml\_XmlReader\_), 
[TireBase.ReportTypeImpl](VM.Managed.DAFUL.Tire.Force.TireBase.md\#VM\_Managed\_DAFUL\_Tire\_Force\_TireBase\_ReportTypeImpl), 
[TireBase.ActivePropertyFile](VM.Managed.DAFUL.Tire.Force.TireBase.md\#VM\_Managed\_DAFUL\_Tire\_Force\_TireBase\_ActivePropertyFile), 
[TireBase.WheelBodyBase](VM.Managed.DAFUL.Tire.Force.TireBase.md\#VM\_Managed\_DAFUL\_Tire\_Force\_TireBase\_WheelBodyBase), 
[TireBase.CanSwitchImpl](VM.Managed.DAFUL.Tire.Force.TireBase.md\#VM\_Managed\_DAFUL\_Tire\_Force\_TireBase\_CanSwitchImpl), 
Force<PropertyTire\>.Initialize\(Unit.ConvertFactor\), 
Force<PropertyTire\>.WriteMarker\(XmlWriter, Marker, string\), 
Force<PropertyTire\>.ReadMarker\(XmlReader, Marker, string\), 
Force<PropertyTire\>.UseForSimulationScenario, 
Connector<PropertyTire\>.Initialize\(Unit.ConvertFactor\), 
Connector<PropertyTire\>.GetTargetListForUpdate\(\), 
Connector<PropertyTire\>.PostAddToDocument\(\), 
Connector<PropertyTire\>.ResetInvalidEntity\(\), 
Connector<PropertyTire\>.Verify\(VerifiedResult\), 
Connector<PropertyTire\>.LinkRequestUpdate\(object, LinkEventArgs\), 
Connector<PropertyTire\>.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\), 
Connector<PropertyTire\>.Draw\(Canvas\), 
Connector<PropertyTire\>.ReDraw\(\), 
Connector<PropertyTire\>.FindLocal\(string\), 
Connector<PropertyTire\>.Instantiate\(Reference, Canvas\), 
Connector<PropertyTire\>.MakeReference\(LinkedList<Reference\>\), 
Connector<PropertyTire\>.MakeReferenceImpl\(LinkedList<Reference\>\), 
Connector<PropertyTire\>.GetLayerImpl\(\), 
Connector<PropertyTire\>.SetLayerImpl\(Layer\), 
Connector<PropertyTire\>.SwitchImpl\(\), 
Connector<PropertyTire\>.BaseMarker, 
Connector<PropertyTire\>.ActionMarker, 
Connector<PropertyTire\>.ConnectorReferenceMarker, 
Connector<PropertyTire\>.PreventDuplicatedRBE, 
Connector<PropertyTire\>.Generable, 
Connector<PropertyTire\>.HasLayerExplicitly, 
Connector<PropertyTire\>.Hide, 
Connector<PropertyTire\>.Referencable, 
Connector<PropertyTire\>.Visible, 
Connector<PropertyTire\>.Layer, 
Connector<PropertyTire\>.ReferenceType, 
Connector<PropertyTire\>.ArgumentType, 
Connector<PropertyTire\>.CanWriteToOutFileImpl, 
Connector<PropertyTire\>.ReportTypeImpl, 
Connector<PropertyTire\>.CanSwitchImpl, 
Entity<PropertyTire\>.Initialize\(Unit.ConvertFactor\), 
Entity<PropertyTire\>.GetUnnamedObjectName\(object\), 
Entity<PropertyTire\>.FindLocal\(string\), 
Entity<PropertyTire\>.Property, 
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

### <a id="VM_Managed_DAFUL_Tire_Force_Tire__ctor"></a> Tire\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Tire.Force.Tire" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Tire()
```

### <a id="VM_Managed_DAFUL_Tire_Force_Tire__ctor_System_String_"></a> Tire\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Tire.Force.Tire" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Tire(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the bush force.

## Methods

### <a id="VM_Managed_DAFUL_Tire_Force_Tire_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes the specified factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The factor.

