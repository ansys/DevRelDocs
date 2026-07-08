# Class Entity<TProperty\>
<a id="VM_Managed_Entity_1"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMObjBase.dll  

This base class is to represent the entity.

```csharp
public abstract class Entity<TProperty> : EntityBase, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup where TProperty : Property, new()
```

#### Type Parameters

`TProperty` 

The type of the property.

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
ObjectBase ← 
Object<EntityEventCore\> ← 
ContainerObject<EntityEventCore\> ← 
[EntityBase](VM.Managed.EntityBase.md) ← 
[Entity<TProperty\>](VM.Managed.Entity\-1.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
ILinkContainerEvent, 
IVerifiable, 
[IHistoryObjectSerializable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/Interfaces.cs), 
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
[LinkableBase.OnDeserialization\(object\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs), 
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

### <a id="VM_Managed_Entity_1__ctor"></a> Entity\(\)

Initializes a new instance of the <xref href="VM.Managed.Entity%601" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected Entity()
```

### <a id="VM_Managed_Entity_1__ctor_System_String_"></a> Entity\(string\)

Initializes a new instance of the <xref href="VM.Managed.Entity%601" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected Entity(string strName)
```

#### Parameters

`strName` string

Name of the entity.

## Properties

### <a id="VM_Managed_Entity_1_Property"></a> Property

Gets or sets the property.

```csharp
public TProperty Property { get; set; }
```

#### Property Value

 TProperty

## Methods

### <a id="VM_Managed_Entity_1_FindLocal_System_String_"></a> FindLocal\(string\)

Finds an object that matches a specified name in local.

```csharp
public override IObjectBase FindLocal(string strName)
```

#### Parameters

`strName` string

Name to search for.

#### Returns

 IObjectBase

An object that matches a specified name.

### <a id="VM_Managed_Entity_1_GetUnnamedObjectName_System_Object_"></a> GetUnnamedObjectName\(object\)

Gets the name of the unnamed object.

```csharp
public override string GetUnnamedObjectName(object obUnnamed)
```

#### Parameters

`obUnnamed` object

The ob unnamed.

#### Returns

 string

### <a id="VM_Managed_Entity_1_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

