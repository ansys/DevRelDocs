# <a id="VM_Managed_DAFUL_SurfaceWithCurvesets"></a> Class SurfaceWithCurvesets

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDBallPlacing.dll  

This class is to represent the surface with curvesets.

```csharp
public class SurfaceWithCurvesets : Entity<PropertySurfaceWithCurvesets>, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup, IDraw, IDrawIcon, IContactable, IGeometricalComponent, IEntityRelation, IBodyAnalysisType, IHasBody
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<EntityEventCore\> ← 
ContainerObject<EntityEventCore\> ← 
EntityBase ← 
Entity<PropertySurfaceWithCurvesets\> ← 
[SurfaceWithCurvesets](VM.Managed.DAFUL.SurfaceWithCurvesets.md)

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
IContactable, 
IGeometricalComponent, 
IEntityRelation, 
IBodyAnalysisType, 
IHasBody

#### Inherited Members

Entity<PropertySurfaceWithCurvesets\>.Initialize\(Unit.ConvertFactor\), 
Entity<PropertySurfaceWithCurvesets\>.GetUnnamedObjectName\(object\), 
Entity<PropertySurfaceWithCurvesets\>.FindLocal\(string\), 
Entity<PropertySurfaceWithCurvesets\>.Property, 
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

### <a id="VM_Managed_DAFUL_SurfaceWithCurvesets__ctor"></a> SurfaceWithCurvesets\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.SurfaceWithCurvesets" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SurfaceWithCurvesets()
```

## Properties

### <a id="VM_Managed_DAFUL_SurfaceWithCurvesets_CuttingPlaneRadius"></a> CuttingPlaneRadius

Gets or sets the cutting plane radius.

```csharp
public ExpressionValueVariable CuttingPlaneRadius { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_SurfaceWithCurvesets_EndCurveset"></a> EndCurveset

Gets or sets the end curveset.

```csharp
public SetCurveForEdges EndCurveset { get; set; }
```

#### Property Value

 SetCurveForEdges

### <a id="VM_Managed_DAFUL_SurfaceWithCurvesets_Faceset"></a> Faceset

Gets or sets the faceset.

```csharp
public SetFace Faceset { get; set; }
```

#### Property Value

 SetFace

### <a id="VM_Managed_DAFUL_SurfaceWithCurvesets_HasLayerExplicitly"></a> HasLayerExplicitly

Gets a value indicating whether object has a layer explicitly.

```csharp
protected override bool HasLayerExplicitly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_SurfaceWithCurvesets_Hide"></a> Hide

Gets or sets a value indicating whether this instance is hide.

```csharp
public bool Hide { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_SurfaceWithCurvesets_IsNormalDirectionUp"></a> IsNormalDirectionUp

Gets or sets a value indicating whether normal direction is up.

```csharp
public bool IsNormalDirectionUp { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_SurfaceWithCurvesets_MaxPen"></a> MaxPen

Gets or sets the maximum penentration.

```csharp
public ExpressionValueVariable MaxPen { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_SurfaceWithCurvesets_NumberOfSlice"></a> NumberOfSlice

Gets or sets the number of slice.

```csharp
public ExpressionValueVariable NumberOfSlice { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_SurfaceWithCurvesets_NumberOfSliceBetweenCurve"></a> NumberOfSliceBetweenCurve

Gets or sets the number of slice between curve.

```csharp
public ExpressionValueVariable NumberOfSliceBetweenCurve { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_SurfaceWithCurvesets_Offset"></a> Offset

Gets or sets the offset.

```csharp
public ExpressionValueVariable Offset { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_SurfaceWithCurvesets_Path"></a> Path

Gets or sets the path.

```csharp
public List<Vector> Path { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<Vector\>

### <a id="VM_Managed_DAFUL_SurfaceWithCurvesets_SliceInfos"></a> SliceInfos

Gets or sets the slice infos.

```csharp
public SliceInfo[] SliceInfos { get; set; }
```

#### Property Value

 [SliceInfo](VM.Managed.DAFUL.SliceInfo.md)\[\]

### <a id="VM_Managed_DAFUL_SurfaceWithCurvesets_StartCurveset"></a> StartCurveset

Gets or sets the start curveset.

```csharp
public SetCurveForEdges StartCurveset { get; set; }
```

#### Property Value

 SetCurveForEdges

## Methods

### <a id="VM_Managed_DAFUL_SurfaceWithCurvesets_GetCurvesetsPoint"></a> GetCurvesetsPoint\(\)

Get curvesets points.

```csharp
public List<VectorBase[]> GetCurvesetsPoint()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<VectorBase\[\]\>

The curveset point list.

### <a id="VM_Managed_DAFUL_SurfaceWithCurvesets_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

