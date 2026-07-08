#  Class ConvectionBase<TProperty\>

Namespace: [VM.Managed.DAFUL.Thermal](VM.Managed.DAFUL.Thermal.md)  
Assembly: VMThermalBase.dll  

This base class is to represent the convection.

```csharp
public abstract class ConvectionBase<TProperty> : ThermalBase<TProperty>, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup, IDraw, IDrawIcon, IHasReplaceableEntity where TProperty : PropertyConvectionBase, new()
```

#### Type Parameters

`TProperty` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<EntityEventCore\> ← 
ContainerObject<EntityEventCore\> ← 
EntityBase ← 
Entity<TProperty\> ← 
[ThermalBase<TProperty\>](VM.Managed.DAFUL.Thermal.ThermalBase\-1.md) ← 
[ConvectionBase<TProperty\>](VM.Managed.DAFUL.Thermal.ConvectionBase\-1.md)

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
IHasReplaceableEntity

#### Inherited Members

[ThermalBase<TProperty\>.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.Thermal.ThermalBase\-1.md\#VM\_Managed\_DAFUL\_Thermal\_ThermalBase\_1\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[ThermalBase<TProperty\>.GetUnnamedObjectName\(object\)](VM.Managed.DAFUL.Thermal.ThermalBase\-1.md\#VM\_Managed\_DAFUL\_Thermal\_ThermalBase\_1\_GetUnnamedObjectName\_System\_Object\_), 
[ThermalBase<TProperty\>.FindLocal\(string\)](VM.Managed.DAFUL.Thermal.ThermalBase\-1.md\#VM\_Managed\_DAFUL\_Thermal\_ThermalBase\_1\_FindLocal\_System\_String\_), 
[ThermalBase<TProperty\>.ReplaceEntityImpl\(ObjectBase\)](VM.Managed.DAFUL.Thermal.ThermalBase\-1.md\#VM\_Managed\_DAFUL\_Thermal\_ThermalBase\_1\_ReplaceEntityImpl\_VM\_Managed\_ObjectBase\_), 
[ThermalBase<TProperty\>.Draw\(Canvas\)](VM.Managed.DAFUL.Thermal.ThermalBase\-1.md\#VM\_Managed\_DAFUL\_Thermal\_ThermalBase\_1\_Draw\_VM\_CAD\_Kernel\_Render\_Canvas\_), 
[ThermalBase<TProperty\>.ReDraw\(\)](VM.Managed.DAFUL.Thermal.ThermalBase\-1.md\#VM\_Managed\_DAFUL\_Thermal\_ThermalBase\_1\_ReDraw), 
[ThermalBase<TProperty\>.TemperatureFiltering\(object, FilterArgs\)](VM.Managed.DAFUL.Thermal.ThermalBase\-1.md\#VM\_Managed\_DAFUL\_Thermal\_ThermalBase\_1\_TemperatureFiltering\_System\_Object\_VM\_Managed\_Picker\_Core\_FilterArgs\_), 
[ThermalBase<TProperty\>.HeatGenerationFiltering\(object, FilterArgs\)](VM.Managed.DAFUL.Thermal.ThermalBase\-1.md\#VM\_Managed\_DAFUL\_Thermal\_ThermalBase\_1\_HeatGenerationFiltering\_System\_Object\_VM\_Managed\_Picker\_Core\_FilterArgs\_), 
[ThermalBase<TProperty\>.ThermalContactFiltering\(object, FilterArgs\)](VM.Managed.DAFUL.Thermal.ThermalBase\-1.md\#VM\_Managed\_DAFUL\_Thermal\_ThermalBase\_1\_ThermalContactFiltering\_System\_Object\_VM\_Managed\_Picker\_Core\_FilterArgs\_), 
[ThermalBase<TProperty\>.TargetObject](VM.Managed.DAFUL.Thermal.ThermalBase\-1.md\#VM\_Managed\_DAFUL\_Thermal\_ThermalBase\_1\_TargetObject), 
[ThermalBase<TProperty\>.HasLayerExplicitly](VM.Managed.DAFUL.Thermal.ThermalBase\-1.md\#VM\_Managed\_DAFUL\_Thermal\_ThermalBase\_1\_HasLayerExplicitly), 
[ThermalBase<TProperty\>.Hide](VM.Managed.DAFUL.Thermal.ThermalBase\-1.md\#VM\_Managed\_DAFUL\_Thermal\_ThermalBase\_1\_Hide), 
Entity<TProperty\>.Initialize\(Unit.ConvertFactor\), 
Entity<TProperty\>.GetUnnamedObjectName\(object\), 
Entity<TProperty\>.FindLocal\(string\), 
Entity<TProperty\>.Property, 
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

### <a id="VM_Managed_DAFUL_Thermal_ConvectionBase_1__ctor"></a> ConvectionBase\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Thermal.ConvectionBase%601" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ConvectionBase()
```

### <a id="VM_Managed_DAFUL_Thermal_ConvectionBase_1__ctor_System_String_"></a> ConvectionBase\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Thermal.ConvectionBase%601" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ConvectionBase(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the STR.

## Properties

### <a id="VM_Managed_DAFUL_Thermal_ConvectionBase_1_ConvectionComponent"></a> ConvectionComponent

Gets or sets the convection component.

```csharp
public IConvectionComponent ConvectionComponent { get; set; }
```

#### Property Value

 IConvectionComponent

### <a id="VM_Managed_DAFUL_Thermal_ConvectionBase_1_TargetObject"></a> TargetObject

Gets the target object.

```csharp
protected override ObjectBase TargetObject { get; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_DAFUL_Thermal_ConvectionBase_1__ConvectionComponent"></a> \_ConvectionComponent

Gets or sets the convection component.

```csharp
public Linker<IConvectionComponent> _ConvectionComponent { get; set; }
```

#### Property Value

 Linker<IConvectionComponent\>

## Methods

### <a id="VM_Managed_DAFUL_Thermal_ConvectionBase_1_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_Thermal_ConvectionBase_1_ReplaceEntityImpl_VM_Managed_ObjectBase_"></a> ReplaceEntityImpl\(ObjectBase\)

Replace entity

```csharp
protected override void ReplaceEntityImpl(ObjectBase newObject)
```

#### Parameters

`newObject` ObjectBase

The new object

