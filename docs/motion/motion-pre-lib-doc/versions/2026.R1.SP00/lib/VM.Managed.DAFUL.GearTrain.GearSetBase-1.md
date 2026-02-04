# Class GearSetBase<TProperty\>
<a id="VM_Managed_DAFUL_GearTrain_GearSetBase_1"></a>

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Gear set base

```csharp
public abstract class GearSetBase<TProperty> : OpenDesignerBase<TProperty>, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup, IOpenDesignerForGearTrain, IOpenDesigner, IReferencable, IGearSet, IHasGeometryInfo, ITransparentable, IHasBuilder, IReportable, IMassProp where TProperty : PropertyGearSetBase, new()
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
[EntityBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs) ← 
[Entity<TProperty\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs) ← 
[OpenDesignerBase<TProperty\>](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md) ← 
[GearSetBase<TProperty\>](VM.Managed.DAFUL.GearTrain.GearSetBase\-1.md)

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
IHasProperty, 
IGroup, 
[IOpenDesignerForGearTrain](VM.Managed.DAFUL.GearTrain.IOpenDesignerForGearTrain.md), 
IOpenDesigner, 
IReferencable, 
[IGearSet](VM.Managed.DAFUL.GearTrain.IGearSet.md), 
[IHasGeometryInfo](VM.Managed.DAFUL.GearTrain.IHasGeometryInfo.md), 
ITransparentable, 
IHasBuilder, 
IReportable, 
IMassProp

#### Inherited Members

[OpenDesignerBase<TProperty\>.LinkRequestDestroying\(object, LinkEventArgs\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_LinkRequestDestroying\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[OpenDesignerBase<TProperty\>.SetDataToDesignDoc\(bool\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_SetDataToDesignDoc\_System\_Boolean\_), 
[OpenDesignerBase<TProperty\>.CheckLicense\(\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_CheckLicense), 
[OpenDesignerBase<TProperty\>.FindBody\(ObjectBase\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_FindBody\_VM\_Managed\_ObjectBase\_), 
[OpenDesignerBase<TProperty\>.SetCustomFilterEvent\(object\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_SetCustomFilterEvent\_System\_Object\_), 
[OpenDesignerBase<TProperty\>.GetFilePath\(\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_GetFilePath), 
[OpenDesignerBase<TProperty\>.PostOpenDocument\(Document\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_PostOpenDocument\_VM\_Managed\_Document\_), 
[OpenDesignerBase<TProperty\>.ResetViewOptions\(\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_ResetViewOptions), 
[OpenDesignerBase<TProperty\>.Instantiate\(Reference, Canvas\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_Instantiate\_VM\_Managed\_Reference\_VM\_CAD\_Kernel\_Render\_Canvas\_), 
[OpenDesignerBase<TProperty\>.MakeReference\(LinkedList<Reference\>\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_MakeReference\_System\_Collections\_Generic\_LinkedList\_VM\_Managed\_Reference\_\_), 
[OpenDesignerBase<TProperty\>.MakeReferenceImpl\(LinkedList<Reference\>\)](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_MakeReferenceImpl\_System\_Collections\_Generic\_LinkedList\_VM\_Managed\_Reference\_\_), 
[OpenDesignerBase<TProperty\>.TypeFileName](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_TypeFileName), 
[OpenDesignerBase<TProperty\>.TargetBody](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_TargetBody), 
[OpenDesignerBase<TProperty\>.TypeOfParent](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_TypeOfParent), 
[OpenDesignerBase<TProperty\>.Extension](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_Extension), 
[OpenDesignerBase<TProperty\>.HasLayerExplicitly](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_HasLayerExplicitly), 
[OpenDesignerBase<TProperty\>.Referencable](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_Referencable), 
[OpenDesignerBase<TProperty\>.Visible](VM.Managed.DAFUL.GearTrain.OpenDesignerBase\-1.md\#VM\_Managed\_DAFUL\_GearTrain\_OpenDesignerBase\_1\_Visible), 
[Entity<TProperty\>.Initialize\(Unit.ConvertFactor\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[Entity<TProperty\>.GetUnnamedObjectName\(object\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[Entity<TProperty\>.FindLocal\(string\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[Entity<TProperty\>.Property](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.Initialize\(Unit.ConvertFactor\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.SetOldNameWithNewEntity\(ObjectBase, ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.PropertyRequestUpdate\(object, LinkEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.OnDeserializationForAttribute\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.OnUpdatePropertyImpl\(Property, LinkEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.LinkRequestDestroying\(object, LinkEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.FixUp\(ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.FindLocal\(string\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.WriteTemplateImpl\(XmlWriter\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.ReadTemplateImpl\(XmlReader\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.LinkAddedToDocument\(object, AddToDocEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.OnDeserialization\(object\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.Name](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.FullName](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.NonSymmetricName](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.DisplayName](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.IsEnabled](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.Comment](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.HasLayerExplicitly](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.UntypedProperty](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.IsFileProperty](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.Layer](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.IsVisible](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
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

### <a id="VM_Managed_DAFUL_GearTrain_GearSetBase_1__ctor"></a> GearSetBase\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.GearSetBase%601" data-throw-if-not-resolved="false"></xref> class.

```csharp
public GearSetBase()
```

### <a id="VM_Managed_DAFUL_GearTrain_GearSetBase_1__ctor_System_String_"></a> GearSetBase\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.GearSetBase%601" data-throw-if-not-resolved="false"></xref> class.

```csharp
public GearSetBase(string strName)
```

#### Parameters

`strName` string

Name of the string.

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_GearSetBase_1_AddToShaft"></a> AddToShaft

Gets the flag whether this instance add to shaft or not.

```csharp
public virtual bool AddToShaft { get; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_GearTrain_GearSetBase_1_Extension"></a> Extension

Gets the extension.

```csharp
protected override string Extension { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_GearTrain_GearSetBase_1_GearBodies"></a> GearBodies

Gets or sets the gear bodies.

```csharp
public Body[] GearBodies { get; set; }
```

#### Property Value

 Body\[\]

#### Exceptions

 Exception

GearBody list is null.
or
GearBody list is null.
or
GearBody is null.

### <a id="VM_Managed_DAFUL_GearTrain_GearSetBase_1_GearBodiesExceptWeb"></a> GearBodiesExceptWeb

Gets the gear bodies except web.

```csharp
public Body[] GearBodiesExceptWeb { get; }
```

#### Property Value

 Body\[\]

#### Exceptions

 Exception

GearBody list is null.

### <a id="VM_Managed_DAFUL_GearTrain_GearSetBase_1_GearWebBodies"></a> GearWebBodies

Gets the gear web bodies.

```csharp
public Body[] GearWebBodies { get; }
```

#### Property Value

 Body\[\]

### <a id="VM_Managed_DAFUL_GearTrain_GearSetBase_1_Layer"></a> Layer

Gets or sets the layer.

```csharp
public override Layer Layer { get; set; }
```

#### Property Value

 Layer

### <a id="VM_Managed_DAFUL_GearTrain_GearSetBase_1_PairInfos"></a> PairInfos

Gets or sets the pair infos.

```csharp
public GearPairInfoForSubsystem[] PairInfos { get; set; }
```

#### Property Value

 [GearPairInfoForSubsystem](VM.Managed.DAFUL.GearTrain.GearPairInfoForSubsystem.md)\[\]

#### Exceptions

 Exception

PairInfo list is null.
or
PairInfo list is null.
or
PairInfo is null.

### <a id="VM_Managed_DAFUL_GearTrain_GearSetBase_1_TargetBody"></a> TargetBody

Gets the target body.

```csharp
public override ObjectBase[] TargetBody { get; }
```

#### Property Value

 ObjectBase\[\]

### <a id="VM_Managed_DAFUL_GearTrain_GearSetBase_1_TypeOfParent"></a> TypeOfParent

Gets the type of parent.

```csharp
public override ParentType TypeOfParent { get; }
```

#### Property Value

 [ParentType](VM.Managed.DAFUL.GearTrain.ParentType.md)

### <a id="VM_Managed_DAFUL_GearTrain_GearSetBase_1_UseMeshing"></a> UseMeshing

Gets the flag whether this instance is meshing or not.

```csharp
public virtual bool UseMeshing { get; }
```

#### Property Value

 bool

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_GearSetBase_1_AddBuilder_VM_Managed_CAD_Builder_"></a> AddBuilder\(Builder\)

Adds the builder.

```csharp
public Body AddBuilder(Builder bui)
```

#### Parameters

`bui` Builder

The bui.

#### Returns

 Body

### <a id="VM_Managed_DAFUL_GearTrain_GearSetBase_1_AddPairInfo_VM_Managed_CAD_Body_VM_Managed_CAD_Body_"></a> AddPairInfo\(Body, Body\)

Adds the pair information.

```csharp
public void AddPairInfo(Body target, Body tool)
```

#### Parameters

`target` Body

The target.

`tool` Body

The tool.

### <a id="VM_Managed_DAFUL_GearTrain_GearSetBase_1_AppendExtraRotateAngle_System_Collections_Generic_List_VM_Managed_DAFUL_GearTrain_CAD_IGearBuilder__"></a> AppendExtraRotateAngle\(List<IGearBuilder\>\)

Append extra rotate angle

```csharp
protected virtual void AppendExtraRotateAngle(List<IGearBuilder> lstOrder)
```

#### Parameters

`lstOrder` List<[IGearBuilder](VM.Managed.DAFUL.GearTrain.CAD.IGearBuilder.md)\>

gear builder list

### <a id="VM_Managed_DAFUL_GearTrain_GearSetBase_1_CalculateWebMass_VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_System_Int32_"></a> CalculateWebMass\(PropertyGearSetBase, int\)

```csharp
protected void CalculateWebMass(PropertyGearSetBase propGearSet, int nIdx)
```

#### Parameters

`propGearSet` [PropertyGearSetBase](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md)

`nIdx` int

### <a id="VM_Managed_DAFUL_GearTrain_GearSetBase_1_CheckPowerFlow_System_Collections_Generic_List_VM_Managed_DAFUL_GearTrain_CAD_IGearBuilder__"></a> CheckPowerFlow\(List<IGearBuilder\>\)

Check power flow

```csharp
protected void CheckPowerFlow(List<IGearBuilder> lstGB)
```

#### Parameters

`lstGB` List<[IGearBuilder](VM.Managed.DAFUL.GearTrain.CAD.IGearBuilder.md)\>

The gear builder list.

### <a id="VM_Managed_DAFUL_GearTrain_GearSetBase_1_CreateGearGeometry_System_String_System_Int32_VM_Managed_DAFUL_GearTrain_GearShapeBase___"></a> CreateGearGeometry\(string, int, GearShapeBase\[\]\)

Create Gear Geometry.

```csharp
protected virtual void CreateGearGeometry(string strGearType, int nNGear, GearShapeBase[] arGeom)
```

#### Parameters

`strGearType` string

THe gear type

`nNGear` int

The No. of gear

`arGeom` [GearShapeBase](VM.Managed.DAFUL.GearTrain.GearShapeBase.md)\[\]

The gear shape geometry

### <a id="VM_Managed_DAFUL_GearTrain_GearSetBase_1_ExternalMeshing_System_Int32_System_Double_System_Collections_Generic_List_VM_Managed_DAFUL_GearTrain_CAD_IGearBuilder___"></a> ExternalMeshing\(int, double, ref List<IGearBuilder\>\)

Meshing for external gear

```csharp
protected void ExternalMeshing(int nRes, double dInitialAngle, ref List<IGearBuilder> lstOrder)
```

#### Parameters

`nRes` int

The result count

`dInitialAngle` double

The initial angle

`lstOrder` List<[IGearBuilder](VM.Managed.DAFUL.GearTrain.CAD.IGearBuilder.md)\>

The builder list

### <a id="VM_Managed_DAFUL_GearTrain_GearSetBase_1_FillGearData_VM_Managed_Document_System_Boolean_System_Boolean_System_String_System_String___"></a> FillGearData\(Document, bool, bool, string, string\[\]\)

Fill gear data

```csharp
public bool FillGearData(Document doc, bool bUseKissSoftInterface, bool bUseAdvanced, string Color, string[] InputArray)
```

#### Parameters

`doc` Document

The document

`bUseKissSoftInterface` bool

The kiss soft interface flag

`bUseAdvanced` bool

The advanced flag

`Color` string

The color

`InputArray` string\[\]

The input array for create

#### Returns

 bool

### <a id="VM_Managed_DAFUL_GearTrain_GearSetBase_1_FillGearData_VM_Managed_Document_System_Int32_System_String_System_String___System_String___System_String___System_String___System_Boolean_System_Boolean_System_String_System_String___"></a> FillGearData\(Document, int, string, string\[\], string\[\], string\[\], string\[\], bool, bool, string, string\[\]\)

Fill gear data

```csharp
public virtual bool FillGearData(Document doc, int nNGear, string strName, string[] CenterDistance, string[] NumberOfTeeth, string[] ProfileShift, string[] FaceWidth, bool bUseKissSoftInterface, bool bUseAdvanced, string Color, string[] InputArray)
```

#### Parameters

`doc` Document

The document

`nNGear` int

The No. of gear

`strName` string

The gear name

`CenterDistance` string\[\]

The gear center distance

`NumberOfTeeth` string\[\]

The No. of teeth

`ProfileShift` string\[\]

The profile shift

`FaceWidth` string\[\]

The face width

`bUseKissSoftInterface` bool

The kiss soft interface flag

`bUseAdvanced` bool

The advanced flag

`Color` string

The color

`InputArray` string\[\]

The input array for create

#### Returns

 bool

### <a id="VM_Managed_DAFUL_GearTrain_GearSetBase_1_Find_System_String_"></a> Find\(string\)

Finds the specified string name.

```csharp
public override IObjectBase Find(string strName)
```

#### Parameters

`strName` string

Name of the string.

#### Returns

 IObjectBase

### <a id="VM_Managed_DAFUL_GearTrain_GearSetBase_1_GeometryInfoBasesImpl"></a> GeometryInfoBasesImpl\(\)

Get geometry infos

```csharp
protected virtual GeometryInfoBase[] GeometryInfoBasesImpl()
```

#### Returns

 [GeometryInfoBase](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.md)\[\]

The geometry infos.

### <a id="VM_Managed_DAFUL_GearTrain_GearSetBase_1_GetBodyFromGeometryInfo_VM_Managed_DAFUL_GearTrain_GeometryInfoBase_"></a> GetBodyFromGeometryInfo\(GeometryInfoBase\)

Get body from geometry information.

```csharp
public Body GetBodyFromGeometryInfo(GeometryInfoBase gInfo)
```

#### Parameters

`gInfo` [GeometryInfoBase](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.md)

The geometry information.

#### Returns

 Body

### <a id="VM_Managed_DAFUL_GearTrain_GearSetBase_1_GetBuilder"></a> GetBuilder\(\)

Gets the builders.

```csharp
public ObjectBase[] GetBuilder()
```

#### Returns

 ObjectBase\[\]

The builders.

### <a id="VM_Managed_DAFUL_GearTrain_GearSetBase_1_GetMassPropImpl_System_Double__VM_Managed_VectorBase_VM_Managed_OMatrix_System_Double___System_Boolean_"></a> GetMassPropImpl\(ref double, VectorBase, OMatrix, double\[\], bool\)

```csharp
protected virtual void GetMassPropImpl(ref double dMass, VectorBase vecCenterPosition, OMatrix vecOrientation, double[] arTensor, bool bGlobal)
```

#### Parameters

`dMass` double

`vecCenterPosition` VectorBase

`vecOrientation` OMatrix

`arTensor` double\[\]

`bGlobal` bool

### <a id="VM_Managed_DAFUL_GearTrain_GearSetBase_1_GetPositionsForMeshing_System_Collections_Generic_List_VM_Managed_DAFUL_GearTrain_CAD_IGearBuilder__System_Int32_VM_Managed_VectorBase__VM_Managed_VectorBase__"></a> GetPositionsForMeshing\(List<IGearBuilder\>, int, ref VectorBase, ref VectorBase\)

Get positions for meshing.

```csharp
protected virtual void GetPositionsForMeshing(List<IGearBuilder> lstOrder, int i, ref VectorBase vec1, ref VectorBase vec2)
```

#### Parameters

`lstOrder` List<[IGearBuilder](VM.Managed.DAFUL.GearTrain.CAD.IGearBuilder.md)\>

The builder list

`i` int

The gear index

`vec1` VectorBase

The first gear position

`vec2` VectorBase

The second gear position

### <a id="VM_Managed_DAFUL_GearTrain_GearSetBase_1_GetUnnamedObjectName_System_Object_"></a> GetUnnamedObjectName\(object\)

Gets the name of the unnamed object.

```csharp
public override string GetUnnamedObjectName(object obUnnamed)
```

#### Parameters

`obUnnamed` object

The ob unnamed.

#### Returns

 string

The unnamed object name.

### <a id="VM_Managed_DAFUL_GearTrain_GearSetBase_1_InternalMeshing_System_Int32_System_Double_System_Collections_Generic_List_VM_Managed_DAFUL_GearTrain_CAD_IGearBuilder___"></a> InternalMeshing\(int, double, ref List<IGearBuilder\>\)

Meshing for internal gear

```csharp
protected void InternalMeshing(int nRes, double dInitialAngle, ref List<IGearBuilder> lstOrder)
```

#### Parameters

`nRes` int

The result count

`dInitialAngle` double

The initial angle

`lstOrder` List<[IGearBuilder](VM.Managed.DAFUL.GearTrain.CAD.IGearBuilder.md)\>

The builder list

### <a id="VM_Managed_DAFUL_GearTrain_GearSetBase_1_MakeReferenceImpl_System_Collections_Generic_LinkedList_VM_Managed_Reference__"></a> MakeReferenceImpl\(LinkedList<Reference\>\)

Makes the reference [implementation].

```csharp
protected override void MakeReferenceImpl(LinkedList<Reference> lstRef)
```

#### Parameters

`lstRef` LinkedList<Reference\>

The container.

### <a id="VM_Managed_DAFUL_GearTrain_GearSetBase_1_Meshing_System_Collections_Generic_List_VM_Managed_DAFUL_GearTrain_CAD_IGearBuilder__"></a> Meshing\(List<IGearBuilder\>\)

Meshing the gears.

```csharp
public virtual bool Meshing(List<IGearBuilder> lstGB)
```

#### Parameters

`lstGB` List<[IGearBuilder](VM.Managed.DAFUL.GearTrain.CAD.IGearBuilder.md)\>

The gear builder list.

#### Returns

 bool

### <a id="VM_Managed_DAFUL_GearTrain_GearSetBase_1_MeshingCore_System_Int32_System_Double_System_Collections_Generic_List_VM_Managed_DAFUL_GearTrain_CAD_IGearBuilder___"></a> MeshingCore\(int, double, ref List<IGearBuilder\>\)

Meshing

```csharp
protected virtual void MeshingCore(int nRes, double dInitialAngle, ref List<IGearBuilder> lstOrder)
```

#### Parameters

`nRes` int

The result count

`dInitialAngle` double

The initial angle

`lstOrder` List<[IGearBuilder](VM.Managed.DAFUL.GearTrain.CAD.IGearBuilder.md)\>

The builder list

### <a id="VM_Managed_DAFUL_GearTrain_GearSetBase_1_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` object

The sender.

### <a id="VM_Managed_DAFUL_GearTrain_GearSetBase_1_OnDeserializationForAttribute"></a> OnDeserializationForAttribute\(\)

Called when [deserialization for attribute].

```csharp
public override void OnDeserializationForAttribute()
```

### <a id="VM_Managed_DAFUL_GearTrain_GearSetBase_1_OnPostBuildSpecial_VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_VM_Managed_Document_System_String___"></a> OnPostBuildSpecial\(PropertyGearSetBase, Document, string\[\]\)

Post build in Special

```csharp
protected virtual void OnPostBuildSpecial(PropertyGearSetBase propGearSet, Document doc, string[] InputArray)
```

#### Parameters

`propGearSet` [PropertyGearSetBase](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md)

The gearset property

`doc` Document

The document

`InputArray` string\[\]

The input array

### <a id="VM_Managed_DAFUL_GearTrain_GearSetBase_1_OnPreBuildSpecial_VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_VM_Managed_Document_System_String___"></a> OnPreBuildSpecial\(PropertyGearSetBase, Document, string\[\]\)

Pre build in Special

```csharp
protected virtual void OnPreBuildSpecial(PropertyGearSetBase propGearSet, Document doc, string[] InputArray)
```

#### Parameters

`propGearSet` [PropertyGearSetBase](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md)

The gearset property

`doc` Document

The document

`InputArray` string\[\]

The input array

### <a id="VM_Managed_DAFUL_GearTrain_GearSetBase_1_RemoveBuilder_VM_Managed_CAD_Builder_"></a> RemoveBuilder\(Builder\)

Removes the builder.

```csharp
public void RemoveBuilder(Builder bui)
```

#### Parameters

`bui` Builder

The bui.

### <a id="VM_Managed_DAFUL_GearTrain_GearSetBase_1_SetDataToDesignDoc_System_Boolean_"></a> SetDataToDesignDoc\(bool\)

Sets the data to design document.

```csharp
public override Document SetDataToDesignDoc(bool bRecord)
```

#### Parameters

`bRecord` bool

#### Returns

 Document

