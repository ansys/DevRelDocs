#  Class VisibleEntity<TProperty\>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMObjBase.dll  

```csharp
public abstract class VisibleEntity<TProperty> : Entity<TProperty>, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup where TProperty : Property, new()
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
[EntityBase](VM.Managed.EntityBase.md) ← 
[Entity<TProperty\>](VM.Managed.Entity\-1.md) ← 
[VisibleEntity<TProperty\>](VM.Managed.VisibleEntity\-1.md)

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
[IHasProperty](VM.Managed.IHasProperty.md), 
IGroup

#### Inherited Members

[Entity<TProperty\>.Initialize\(Unit.ConvertFactor\)](VM.Managed.Entity\-1.md\#VM\_Managed\_Entity\_1\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[Entity<TProperty\>.GetUnnamedObjectName\(object\)](VM.Managed.Entity\-1.md\#VM\_Managed\_Entity\_1\_GetUnnamedObjectName\_System\_Object\_), 
[Entity<TProperty\>.FindLocal\(string\)](VM.Managed.Entity\-1.md\#VM\_Managed\_Entity\_1\_FindLocal\_System\_String\_), 
[Entity<TProperty\>.Property](VM.Managed.Entity\-1.md\#VM\_Managed\_Entity\_1\_Property), 
[EntityBase.Initialize\(Unit.ConvertFactor\)](VM.Managed.EntityBase.md\#VM\_Managed\_EntityBase\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[EntityBase.SetOldNameWithNewEntity\(ObjectBase, ObjectBase\)](VM.Managed.EntityBase.md\#VM\_Managed\_EntityBase\_SetOldNameWithNewEntity\_VM\_Managed\_ObjectBase\_VM\_Managed\_ObjectBase\_), 
[EntityBase.PropertyRequestUpdate\(object, LinkEventArgs\)](VM.Managed.EntityBase.md\#VM\_Managed\_EntityBase\_PropertyRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[EntityBase.OnDeserializationForAttribute\(\)](VM.Managed.EntityBase.md\#VM\_Managed\_EntityBase\_OnDeserializationForAttribute), 
[EntityBase.OnUpdatePropertyImpl\(Property, LinkEventArgs\)](VM.Managed.EntityBase.md\#VM\_Managed\_EntityBase\_OnUpdatePropertyImpl\_VM\_Managed\_Property\_VM\_Managed\_LinkEventArgs\_), 
[EntityBase.LinkRequestDestroying\(object, LinkEventArgs\)](VM.Managed.EntityBase.md\#VM\_Managed\_EntityBase\_LinkRequestDestroying\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[EntityBase.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)](VM.Managed.EntityBase.md\#VM\_Managed\_EntityBase\_GetModelNavigatorInformationImpl\_System\_Xml\_XmlDocument\_System\_Xml\_XmlElement\_System\_Boolean\_), 
[EntityBase.FixUp\(ObjectBase\)](VM.Managed.EntityBase.md\#VM\_Managed\_EntityBase\_FixUp\_VM\_Managed\_ObjectBase\_), 
[EntityBase.FindLocal\(string\)](VM.Managed.EntityBase.md\#VM\_Managed\_EntityBase\_FindLocal\_System\_String\_), 
[EntityBase.WriteTemplateImpl\(XmlWriter\)](VM.Managed.EntityBase.md\#VM\_Managed\_EntityBase\_WriteTemplateImpl\_System\_Xml\_XmlWriter\_), 
[EntityBase.ReadTemplateImpl\(XmlReader\)](VM.Managed.EntityBase.md\#VM\_Managed\_EntityBase\_ReadTemplateImpl\_System\_Xml\_XmlReader\_), 
[EntityBase.LinkAddedToDocument\(object, AddToDocEventArgs\)](VM.Managed.EntityBase.md\#VM\_Managed\_EntityBase\_LinkAddedToDocument\_System\_Object\_VM\_Managed\_AddToDocEventArgs\_), 
[EntityBase.OnDeserialization\(object\)](VM.Managed.EntityBase.md\#VM\_Managed\_EntityBase\_OnDeserialization\_System\_Object\_), 
[EntityBase.Name](VM.Managed.EntityBase.md\#VM\_Managed\_EntityBase\_Name), 
[EntityBase.FullName](VM.Managed.EntityBase.md\#VM\_Managed\_EntityBase\_FullName), 
[EntityBase.NonSymmetricName](VM.Managed.EntityBase.md\#VM\_Managed\_EntityBase\_NonSymmetricName), 
[EntityBase.DisplayName](VM.Managed.EntityBase.md\#VM\_Managed\_EntityBase\_DisplayName), 
[EntityBase.IsEnabled](VM.Managed.EntityBase.md\#VM\_Managed\_EntityBase\_IsEnabled), 
[EntityBase.Comment](VM.Managed.EntityBase.md\#VM\_Managed\_EntityBase\_Comment), 
[EntityBase.HasLayerExplicitly](VM.Managed.EntityBase.md\#VM\_Managed\_EntityBase\_HasLayerExplicitly), 
[EntityBase.UntypedProperty](VM.Managed.EntityBase.md\#VM\_Managed\_EntityBase\_UntypedProperty), 
[EntityBase.IsFileProperty](VM.Managed.EntityBase.md\#VM\_Managed\_EntityBase\_IsFileProperty), 
[EntityBase.Layer](VM.Managed.EntityBase.md\#VM\_Managed\_EntityBase\_Layer), 
[EntityBase.IsVisible](VM.Managed.EntityBase.md\#VM\_Managed\_EntityBase\_IsVisible), 
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

### <a id="VM_Managed_VisibleEntity_1__ctor"></a> VisibleEntity\(\)

Initializes a new instance of the <xref href="VM.Managed.VisibleEntity%601" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected VisibleEntity()
```

### <a id="VM_Managed_VisibleEntity_1__ctor_System_String_"></a> VisibleEntity\(string\)

Initializes a new instance of the <xref href="VM.Managed.VisibleEntity%601" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected VisibleEntity(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the entity.

