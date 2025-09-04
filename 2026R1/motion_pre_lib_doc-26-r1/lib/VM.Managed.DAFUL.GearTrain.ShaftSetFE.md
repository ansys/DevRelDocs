#  Class ShaftSetFE

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

FE shaft

```csharp
public class ShaftSetFE : ShaftSetMeshBase<PropertyShaftSetFE>, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup, IOpenDesignerForGearTrain, IOpenDesigner, IReferencable, IMeshEntity, IHasBuilder, IReportable, IHasPowerLoad, IShaftSet, IHousing
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<EntityEventCore\> ← 
ContainerObject<EntityEventCore\> ← 
EntityBase ← 
Entity<PropertyShaftSetFE\> ← 
[OpenDesignerBase<PropertyShaftSetFE\>](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md) ← 
[HousingBase<PropertyShaftSetFE\>](VM.Managed.DAFUL.GearTrain.HousingBase\-1.md) ← 
[ShaftSetMeshBase<PropertyShaftSetFE\>](VM.Managed.DAFUL.GearTrain.ShaftSetMeshBase\-1.md) ← 
[ShaftSetFE](VM.Managed.DAFUL.GearTrain.ShaftSetFE.md)

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
[IOpenDesignerForGearTrain](VM.Managed.DAFUL.GearTrain.IOpenDesignerForGearTrain.md), 
IOpenDesigner, 
IReferencable, 
[IMeshEntity](VM.Managed.DAFUL.GearTrain.IMeshEntity.md), 
IHasBuilder, 
IReportable, 
[IHasPowerLoad](VM.Managed.DAFUL.GearTrain.IHasPowerLoad.md), 
[IShaftSet](VM.Managed.DAFUL.GearTrain.IShaftSet.md), 
[IHousing](VM.Managed.DAFUL.GearTrain.IHousing.md)

#### Inherited Members

[ShaftSetMeshBase<PropertyShaftSetFE\>.OnDeserialization\(object\)](VM.Managed.DAFUL.GearTrain.ShaftSetMeshBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_ShaftSetMeshBase\_1\_OnDeserialization\_System\_Object\_), 
[ShaftSetMeshBase<PropertyShaftSetFE\>.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.GearTrain.ShaftSetMeshBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_ShaftSetMeshBase\_1\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[ShaftSetMeshBase<PropertyShaftSetFE\>.TargetBody](VM.Managed.DAFUL.GearTrain.ShaftSetMeshBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_ShaftSetMeshBase\_1\_TargetBody), 
[HousingBase<PropertyShaftSetFE\>.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.DAFUL.GearTrain.HousingBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_HousingBase\_1\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[HousingBase<PropertyShaftSetFE\>.LinkRequestDestroying\(object, LinkEventArgs\)](VM.Managed.DAFUL.GearTrain.HousingBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_HousingBase\_1\_LinkRequestDestroying\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[HousingBase<PropertyShaftSetFE\>.FindLocal\(string\)](VM.Managed.DAFUL.GearTrain.HousingBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_HousingBase\_1\_FindLocal\_System\_String\_), 
[HousingBase<PropertyShaftSetFE\>.GetUnnamedObjectName\(object\)](VM.Managed.DAFUL.GearTrain.HousingBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_HousingBase\_1\_GetUnnamedObjectName\_System\_Object\_), 
[HousingBase<PropertyShaftSetFE\>.MakeReferenceImpl\(LinkedList<Reference\>\)](VM.Managed.DAFUL.GearTrain.HousingBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_HousingBase\_1\_MakeReferenceImpl\_System\_Collections\_Generic\_LinkedList\_VM\_Managed\_Reference\_\_), 
[HousingBase<PropertyShaftSetFE\>.SetDataToDesignDoc\(bool\)](VM.Managed.DAFUL.GearTrain.HousingBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_HousingBase\_1\_SetDataToDesignDoc\_System\_Boolean\_), 
[HousingBase<PropertyShaftSetFE\>.GetBuilder\(\)](VM.Managed.DAFUL.GearTrain.HousingBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_HousingBase\_1\_GetBuilder), 
[HousingBase<PropertyShaftSetFE\>.FindBody\(ObjectBase\)](VM.Managed.DAFUL.GearTrain.HousingBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_HousingBase\_1\_FindBody\_VM\_Managed\_ObjectBase\_), 
[HousingBase<PropertyShaftSetFE\>.Body](VM.Managed.DAFUL.GearTrain.HousingBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_HousingBase\_1\_Body), 
[HousingBase<PropertyShaftSetFE\>.Transformation](VM.Managed.DAFUL.GearTrain.HousingBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_HousingBase\_1\_Transformation), 
[HousingBase<PropertyShaftSetFE\>.TypeOfCreate](VM.Managed.DAFUL.GearTrain.HousingBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_HousingBase\_1\_TypeOfCreate), 
[HousingBase<PropertyShaftSetFE\>.TargetBody](VM.Managed.DAFUL.GearTrain.HousingBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_HousingBase\_1\_TargetBody), 
[HousingBase<PropertyShaftSetFE\>.TypeFileName](VM.Managed.DAFUL.GearTrain.HousingBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_HousingBase\_1\_TypeFileName), 
[HousingBase<PropertyShaftSetFE\>.Layer](VM.Managed.DAFUL.GearTrain.HousingBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_HousingBase\_1\_Layer), 
[OpenDesignerBase<PropertyShaftSetFE\>.LinkRequestDestroying\(object, LinkEventArgs\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_LinkRequestDestroying\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[OpenDesignerBase<PropertyShaftSetFE\>.SetDataToDesignDoc\(bool\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_SetDataToDesignDoc\_System\_Boolean\_), 
[OpenDesignerBase<PropertyShaftSetFE\>.CheckLicense\(\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_CheckLicense), 
[OpenDesignerBase<PropertyShaftSetFE\>.FindBody\(ObjectBase\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_FindBody\_VM\_Managed\_ObjectBase\_), 
[OpenDesignerBase<PropertyShaftSetFE\>.SetCustomFilterEvent\(object\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_SetCustomFilterEvent\_System\_Object\_), 
[OpenDesignerBase<PropertyShaftSetFE\>.GetFilePath\(\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_GetFilePath), 
[OpenDesignerBase<PropertyShaftSetFE\>.PostOpenDocument\(Document\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_PostOpenDocument\_VM\_Managed\_Document\_), 
[OpenDesignerBase<PropertyShaftSetFE\>.ResetViewOptions\(\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_ResetViewOptions), 
[OpenDesignerBase<PropertyShaftSetFE\>.Instantiate\(Reference, Canvas\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_Instantiate\_VM\_Managed\_Reference\_VM\_CAD\_Kernel\_Render\_Canvas\_), 
[OpenDesignerBase<PropertyShaftSetFE\>.MakeReference\(LinkedList<Reference\>\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_MakeReference\_System\_Collections\_Generic\_LinkedList\_VM\_Managed\_Reference\_\_), 
[OpenDesignerBase<PropertyShaftSetFE\>.MakeReferenceImpl\(LinkedList<Reference\>\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_MakeReferenceImpl\_System\_Collections\_Generic\_LinkedList\_VM\_Managed\_Reference\_\_), 
[OpenDesignerBase<PropertyShaftSetFE\>.TypeFileName](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_TypeFileName), 
[OpenDesignerBase<PropertyShaftSetFE\>.TargetBody](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_TargetBody), 
[OpenDesignerBase<PropertyShaftSetFE\>.TypeOfParent](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_TypeOfParent), 
[OpenDesignerBase<PropertyShaftSetFE\>.Extension](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_Extension), 
[OpenDesignerBase<PropertyShaftSetFE\>.HasLayerExplicitly](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_HasLayerExplicitly), 
[OpenDesignerBase<PropertyShaftSetFE\>.Referencable](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_Referencable), 
[OpenDesignerBase<PropertyShaftSetFE\>.Visible](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_Visible), 
Entity<PropertyShaftSetFE\>.Initialize\(Unit.ConvertFactor\), 
Entity<PropertyShaftSetFE\>.GetUnnamedObjectName\(object\), 
Entity<PropertyShaftSetFE\>.FindLocal\(string\), 
Entity<PropertyShaftSetFE\>.Property, 
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

### <a id="VM_Managed_DAFUL_GearTrain_ShaftSetFE__ctor"></a> ShaftSetFE\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.ShaftSetFE" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ShaftSetFE()
```

### <a id="VM_Managed_DAFUL_GearTrain_ShaftSetFE__ctor_System_String_"></a> ShaftSetFE\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.ShaftSetFE" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ShaftSetFE(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string.

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_ShaftSetFE_Extension"></a> Extension

Gets the extension.

```csharp
protected override string Extension { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_GearTrain_ShaftSetFE_TypeFileName"></a> TypeFileName

Gets the name of the type file.

```csharp
public override string TypeFileName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_GearTrain_ShaftSetFE_TypeOfCreate"></a> TypeOfCreate

Gets the type of create.

```csharp
public override CreateType TypeOfCreate { get; }
```

#### Property Value

 [CreateType](VM.Managed.DAFUL.GearTrain.CreateType.md)

### <a id="VM_Managed_DAFUL_GearTrain_ShaftSetFE_TypeOfParent"></a> TypeOfParent

Gets the type of parent.

```csharp
public override ParentType TypeOfParent { get; }
```

#### Property Value

 [ParentType](VM.Managed.DAFUL.GearTrain.ParentType.md)

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_ShaftSetFE_SetDataToDesignDoc_System_Boolean_"></a> SetDataToDesignDoc\(bool\)

Sets the data to design document.

```csharp
public override Document SetDataToDesignDoc(bool bRecord)
```

#### Parameters

`bRecord` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 Document

