#  Class MultipleContactBase

Namespace: [VM.Managed.DAFUL.Contact](VM.Managed.DAFUL.Contact.md)  
Assembly: VMDCt.dll  

This base class is to represent the base of multiple contact.

```csharp
[CanNotOpenWithNewPreprocessor]
public abstract class MultipleContactBase : Contact<PropertyMultiContact>, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup, IEnableForSimulationScenario, IDraw, IDrawIcon, ITemplateObject, IArgument, IReportable, IReferencable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<EntityEventCore\> ← 
ContainerObject<EntityEventCore\> ← 
EntityBase ← 
Entity<PropertyMultiContact\> ← 
[Contact<PropertyMultiContact\>](VM.Managed.DAFUL.Contact.Contact\-1.md) ← 
[MultipleContactBase](VM.Managed.DAFUL.Contact.MultipleContactBase.md)

#### Derived

[MbyNContact](VM.Managed.DAFUL.Contact.MbyNContact.md), 
[NCombinationContact](VM.Managed.DAFUL.Contact.NCombinationContact.md)

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
IEnableForSimulationScenario, 
IDraw, 
IDrawIcon, 
ITemplateObject, 
IArgument, 
IReportable, 
IReferencable

#### Inherited Members

[Contact<PropertyMultiContact\>.UpdateIcon\(\)](VM.Managed.DAFUL.Contact.Contact\-1.md\#VM\_Managed\_DAFUL\_Contact\_Contact\_1\_UpdateIcon), 
[Contact<PropertyMultiContact\>.Draw\(Canvas\)](VM.Managed.DAFUL.Contact.Contact\-1.md\#VM\_Managed\_DAFUL\_Contact\_Contact\_1\_Draw\_VM\_CAD\_Kernel\_Render\_Canvas\_), 
[Contact<PropertyMultiContact\>.ReDraw\(\)](VM.Managed.DAFUL.Contact.Contact\-1.md\#VM\_Managed\_DAFUL\_Contact\_Contact\_1\_ReDraw), 
[Contact<PropertyMultiContact\>.WriteTemplateImpl\(XmlWriter\)](VM.Managed.DAFUL.Contact.Contact\-1.md\#VM\_Managed\_DAFUL\_Contact\_Contact\_1\_WriteTemplateImpl\_System\_Xml\_XmlWriter\_), 
[Contact<PropertyMultiContact\>.ReadTemplateImpl\(XmlReader\)](VM.Managed.DAFUL.Contact.Contact\-1.md\#VM\_Managed\_DAFUL\_Contact\_Contact\_1\_ReadTemplateImpl\_System\_Xml\_XmlReader\_), 
[Contact<PropertyMultiContact\>.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.DAFUL.Contact.Contact\-1.md\#VM\_Managed\_DAFUL\_Contact\_Contact\_1\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[Contact<PropertyMultiContact\>.LinkRequestDestroy\(object, LinkEventArgs\)](VM.Managed.DAFUL.Contact.Contact\-1.md\#VM\_Managed\_DAFUL\_Contact\_Contact\_1\_LinkRequestDestroy\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[Contact<PropertyMultiContact\>.HasLayerExplicitly](VM.Managed.DAFUL.Contact.Contact\-1.md\#VM\_Managed\_DAFUL\_Contact\_Contact\_1\_HasLayerExplicitly), 
[Contact<PropertyMultiContact\>.Hide](VM.Managed.DAFUL.Contact.Contact\-1.md\#VM\_Managed\_DAFUL\_Contact\_Contact\_1\_Hide), 
[Contact<PropertyMultiContact\>.ReferenceType](VM.Managed.DAFUL.Contact.Contact\-1.md\#VM\_Managed\_DAFUL\_Contact\_Contact\_1\_ReferenceType), 
[Contact<PropertyMultiContact\>.ArgumentType](VM.Managed.DAFUL.Contact.Contact\-1.md\#VM\_Managed\_DAFUL\_Contact\_Contact\_1\_ArgumentType), 
[Contact<PropertyMultiContact\>.ReportTypeImpl](VM.Managed.DAFUL.Contact.Contact\-1.md\#VM\_Managed\_DAFUL\_Contact\_Contact\_1\_ReportTypeImpl), 
Entity<PropertyMultiContact\>.Initialize\(Unit.ConvertFactor\), 
Entity<PropertyMultiContact\>.GetUnnamedObjectName\(object\), 
Entity<PropertyMultiContact\>.FindLocal\(string\), 
Entity<PropertyMultiContact\>.Property, 
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

### <a id="VM_Managed_DAFUL_Contact_MultipleContactBase__ctor"></a> MultipleContactBase\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Contact.MultipleContactBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MultipleContactBase()
```

### <a id="VM_Managed_DAFUL_Contact_MultipleContactBase__ctor_System_String_"></a> MultipleContactBase\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Contact.MultipleContactBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MultipleContactBase(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the contact.

## Properties

### <a id="VM_Managed_DAFUL_Contact_MultipleContactBase_MultiContactType"></a> MultiContactType

Gets or sets the contact type.

```csharp
public MultiContactType MultiContactType { get; set; }
```

#### Property Value

 [MultiContactType](VM.Managed.DAFUL.Contact.MultiContactType.md)

### <a id="VM_Managed_DAFUL_Contact_MultipleContactBase_ReportTypeImpl"></a> ReportTypeImpl

Gets the report type.

```csharp
protected override IReportable.ReportEntityType ReportTypeImpl { get; }
```

#### Property Value

 IReportable.ReportEntityType

## Methods

### <a id="VM_Managed_DAFUL_Contact_MultipleContactBase_IsUseContactType_VM_Managed_DAFUL_IContactable_VM_Managed_DAFUL_IContactable_VM_Managed_DAFUL_Contact_MultiContactType_"></a> IsUseContactType\(IContactable, IContactable, MultiContactType\)

Determines whether the specified object is contact.

```csharp
public static bool IsUseContactType(IContactable base_bd, IContactable act_bd, MultiContactType type)
```

#### Parameters

`base_bd` IContactable

The base body.

`act_bd` IContactable

The action body.

`type` [MultiContactType](VM.Managed.DAFUL.Contact.MultiContactType.md)

The type.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if the specified object is contact; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_Contact_MultipleContactBase_IsUseContactType_VM_Managed_DAFUL_IContactable_VM_Managed_DAFUL_IContactable_VM_Managed_DAFUL_Contact_MultiContactType_System_Boolean__"></a> IsUseContactType\(IContactable, IContactable, MultiContactType, ref bool\)

Determines whether the specified object is contact.

```csharp
public static bool IsUseContactType(IContactable base_bd, IContactable act_bd, MultiContactType type, ref bool bSwitch)
```

#### Parameters

`base_bd` IContactable

The base body.

`act_bd` IContactable

The action body.

`type` [MultiContactType](VM.Managed.DAFUL.Contact.MultiContactType.md)

The type.

`bSwitch` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The switch.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if the specified object is contact; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_Contact_MultipleContactBase_UpdateIcon"></a> UpdateIcon\(\)

Update the icon.

```csharp
protected override void UpdateIcon()
```

