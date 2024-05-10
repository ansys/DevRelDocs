# Class BoundaryCondition

Namespace: [VM.Managed.DAFUL.Flexible](VM.Managed.DAFUL.Flexible.md)  
Assembly: VMFlexibleBase.dll  

This class is to represent the boundary condition.

```csharp
public class BoundaryCondition : BoundaryConditionBase<PropertyBoundaryCondition>, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup, IDraw, IDrawIcon, IDrawChangeFacet, IEnableForSimulationScenario, IEntityRelation, IGenerable, IReportable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<EntityEventCore\> ← 
ContainerObject<EntityEventCore\> ← 
EntityBase ← 
Entity<PropertyBoundaryCondition\> ← 
[BoundaryConditionBase<PropertyBoundaryCondition\>](VM.Managed.DAFUL.Flexible.BoundaryConditionBase\-1.md) ← 
[BoundaryCondition](VM.Managed.DAFUL.Flexible.BoundaryCondition.md)

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
IDrawChangeFacet, 
IEnableForSimulationScenario, 
IEntityRelation, 
IGenerable, 
IReportable

#### Inherited Members

[BoundaryConditionBase<PropertyBoundaryCondition\>.FindLocal\(string\)](VM.Managed.DAFUL.Flexible.BoundaryConditionBase\-1.md\#VM\_Managed\_DAFUL\_Flexible\_BoundaryConditionBase\_1\_FindLocal\_System\_String\_), 
[BoundaryConditionBase<PropertyBoundaryCondition\>.GetUnnamedObjectName\(object\)](VM.Managed.DAFUL.Flexible.BoundaryConditionBase\-1.md\#VM\_Managed\_DAFUL\_Flexible\_BoundaryConditionBase\_1\_GetUnnamedObjectName\_System\_Object\_), 
[BoundaryConditionBase<PropertyBoundaryCondition\>.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.DAFUL.Flexible.BoundaryConditionBase\-1.md\#VM\_Managed\_DAFUL\_Flexible\_BoundaryConditionBase\_1\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[BoundaryConditionBase<PropertyBoundaryCondition\>.OnDeserialization\(object\)](VM.Managed.DAFUL.Flexible.BoundaryConditionBase\-1.md\#VM\_Managed\_DAFUL\_Flexible\_BoundaryConditionBase\_1\_OnDeserialization\_System\_Object\_), 
[BoundaryConditionBase<PropertyBoundaryCondition\>.Draw\(Canvas\)](VM.Managed.DAFUL.Flexible.BoundaryConditionBase\-1.md\#VM\_Managed\_DAFUL\_Flexible\_BoundaryConditionBase\_1\_Draw\_VM\_CAD\_Kernel\_Render\_Canvas\_), 
[BoundaryConditionBase<PropertyBoundaryCondition\>.ReDraw\(\)](VM.Managed.DAFUL.Flexible.BoundaryConditionBase\-1.md\#VM\_Managed\_DAFUL\_Flexible\_BoundaryConditionBase\_1\_ReDraw), 
[BoundaryConditionBase<PropertyBoundaryCondition\>.ReplaceEntityImpl\(Document, IGenerable\)](VM.Managed.DAFUL.Flexible.BoundaryConditionBase\-1.md\#VM\_Managed\_DAFUL\_Flexible\_BoundaryConditionBase\_1\_ReplaceEntityImpl\_VM\_Managed\_Document\_VM\_Managed\_IGenerable\_), 
[BoundaryConditionBase<PropertyBoundaryCondition\>.BCComponent](VM.Managed.DAFUL.Flexible.BoundaryConditionBase\-1.md\#VM\_Managed\_DAFUL\_Flexible\_BoundaryConditionBase\_1\_BCComponent), 
[BoundaryConditionBase<PropertyBoundaryCondition\>.\_BCComponent](VM.Managed.DAFUL.Flexible.BoundaryConditionBase\-1.md\#VM\_Managed\_DAFUL\_Flexible\_BoundaryConditionBase\_1\_\_BCComponent), 
[BoundaryConditionBase<PropertyBoundaryCondition\>.NameOfBody](VM.Managed.DAFUL.Flexible.BoundaryConditionBase\-1.md\#VM\_Managed\_DAFUL\_Flexible\_BoundaryConditionBase\_1\_NameOfBody), 
[BoundaryConditionBase<PropertyBoundaryCondition\>.ReferenceMarker](VM.Managed.DAFUL.Flexible.BoundaryConditionBase\-1.md\#VM\_Managed\_DAFUL\_Flexible\_BoundaryConditionBase\_1\_ReferenceMarker), 
[BoundaryConditionBase<PropertyBoundaryCondition\>.\_ReferenceMarker](VM.Managed.DAFUL.Flexible.BoundaryConditionBase\-1.md\#VM\_Managed\_DAFUL\_Flexible\_BoundaryConditionBase\_1\_\_ReferenceMarker), 
[BoundaryConditionBase<PropertyBoundaryCondition\>.HasLayerExplicitly](VM.Managed.DAFUL.Flexible.BoundaryConditionBase\-1.md\#VM\_Managed\_DAFUL\_Flexible\_BoundaryConditionBase\_1\_HasLayerExplicitly), 
[BoundaryConditionBase<PropertyBoundaryCondition\>.Hide](VM.Managed.DAFUL.Flexible.BoundaryConditionBase\-1.md\#VM\_Managed\_DAFUL\_Flexible\_BoundaryConditionBase\_1\_Hide), 
[BoundaryConditionBase<PropertyBoundaryCondition\>.GenerableImpl](VM.Managed.DAFUL.Flexible.BoundaryConditionBase\-1.md\#VM\_Managed\_DAFUL\_Flexible\_BoundaryConditionBase\_1\_GenerableImpl), 
Entity<PropertyBoundaryCondition\>.Initialize\(Unit.ConvertFactor\), 
Entity<PropertyBoundaryCondition\>.GetUnnamedObjectName\(object\), 
Entity<PropertyBoundaryCondition\>.FindLocal\(string\), 
Entity<PropertyBoundaryCondition\>.Property, 
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
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[FlexibleBaseHelper.SetGeomRefinementForIcon\(IAttributeContainer, Face\)](VM.Managed.DAFUL.Flexible.FlexibleBaseHelper.md\#VM\_Managed\_DAFUL\_Flexible\_FlexibleBaseHelper\_SetGeomRefinementForIcon\_VM\_Managed\_IAttributeContainer\_VM\_Managed\_CAD\_Face\_), 
[FlexibleBaseHelper.SetGeomRefinementForIcon\(IAttributeContainer, ICollection<Face\>\)](VM.Managed.DAFUL.Flexible.FlexibleBaseHelper.md\#VM\_Managed\_DAFUL\_Flexible\_FlexibleBaseHelper\_SetGeomRefinementForIcon\_VM\_Managed\_IAttributeContainer\_System\_Collections\_Generic\_ICollection\_VM\_Managed\_CAD\_Face\_\_)

## Constructors

### BoundaryCondition\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Flexible.BoundaryCondition" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BoundaryCondition()
```

### BoundaryCondition\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Flexible.BoundaryCondition" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BoundaryCondition(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the STR.

## Methods

### GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)

Gets the object information for model navigator [implementation].

```csharp
protected override bool GetModelNavigatorInformationImpl(XmlDocument xmlDom, XmlElement xmlEle, bool bHasChild)
```

#### Parameters

`xmlDom` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

The XmlDocument for object.

`xmlEle` [XmlElement](https://learn.microsoft.com/dotnet/api/system.xml.xmlelement)

The XmlElement for object.

`bHasChild` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> the tie has child.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### InitializeEvent\(Document3D\)

Initializes event.

```csharp
public static void InitializeEvent(Document3D doc)
```

#### Parameters

`doc` Document3D


