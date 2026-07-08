#  Class HydroForce

Namespace: [VM.Managed.DAFUL.Track](VM.Managed.DAFUL.Track.md)  
Assembly: VMDTrackBase.dll  

This class is to represent the hydro force.

```csharp
public class HydroForce : Entity<PropertyHydroForce>, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup, IDraw, IDrawIcon, IReferencable, IHydroForce, IHasOtherEntityInSameCategory, IReportable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<EntityEventCore\> ← 
ContainerObject<EntityEventCore\> ← 
EntityBase ← 
Entity<PropertyHydroForce\> ← 
[HydroForce](VM.Managed.DAFUL.Track.HydroForce.md)

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
[IHydroForce](VM.Managed.DAFUL.Track.IHydroForce.md), 
IHasOtherEntityInSameCategory, 
IReportable

#### Inherited Members

Entity<PropertyHydroForce\>.Initialize\(Unit.ConvertFactor\), 
Entity<PropertyHydroForce\>.GetUnnamedObjectName\(object\), 
Entity<PropertyHydroForce\>.FindLocal\(string\), 
Entity<PropertyHydroForce\>.Property, 
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

### <a id="VM_Managed_DAFUL_Track_HydroForce__ctor"></a> HydroForce\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Track.HydroForce" data-throw-if-not-resolved="false"></xref> class.

```csharp
public HydroForce()
```

### <a id="VM_Managed_DAFUL_Track_HydroForce__ctor_System_String_"></a> HydroForce\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Track.HydroForce" data-throw-if-not-resolved="false"></xref> class.

```csharp
public HydroForce(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string.

## Properties

### <a id="VM_Managed_DAFUL_Track_HydroForce_ActionBodies"></a> ActionBodies

Gets or sets the action body data.

```csharp
public HydroForce.ActionBodyData[] ActionBodies { get; set; }
```

#### Property Value

 [HydroForce](VM.Managed.DAFUL.Track.HydroForce.md).[ActionBodyData](VM.Managed.DAFUL.Track.HydroForce.ActionBodyData.md)\[\]

### <a id="VM_Managed_DAFUL_Track_HydroForce_HasLayerExplicitly"></a> HasLayerExplicitly

Gets a value indicating whether object has a layer explicitly.

```csharp
protected override bool HasLayerExplicitly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Track_HydroForce_Hide"></a> Hide

Gets or sets a value indicating whether this instance is hide.

```csharp
public bool Hide { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Track_HydroForce_Water"></a> Water

Gets or sets the water.

```csharp
public IWater Water { get; set; }
```

#### Property Value

 [IWater](VM.Managed.DAFUL.Track.IWater.md)

### <a id="VM_Managed_DAFUL_Track_HydroForce__Water"></a> \_Water

Gets or sets the water.

```csharp
public Linker<IWater> _Water { get; set; }
```

#### Property Value

 Linker<[IWater](VM.Managed.DAFUL.Track.IWater.md)\>

## Methods

### <a id="VM_Managed_DAFUL_Track_HydroForce_Draw_VM_CAD_Kernel_Render_Canvas_"></a> Draw\(Canvas\)

Draws the icon.

```csharp
public virtual void Draw(Canvas canvas)
```

#### Parameters

`canvas` Canvas

The canvas has icon information.

### <a id="VM_Managed_DAFUL_Track_HydroForce_GetCenterMarkerFromIConnectable_VM_Managed_DAFUL_IConnectable_"></a> GetCenterMarkerFromIConnectable\(IConnectable\)

Gets center marker from connectable entity

```csharp
public static IMarker GetCenterMarkerFromIConnectable(IConnectable connectable)
```

#### Parameters

`connectable` IConnectable

The connectable entity

#### Returns

 IMarker

### <a id="VM_Managed_DAFUL_Track_HydroForce_GetMassFromIConnectable_VM_Managed_DAFUL_IConnectable_"></a> GetMassFromIConnectable\(IConnectable\)

Gets mass from connectable entity

```csharp
public static double GetMassFromIConnectable(IConnectable connectable)
```

#### Parameters

`connectable` IConnectable

The connectable entity

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Track_HydroForce_GetModelNavigatorInformationImpl_System_Xml_XmlDocument_System_Xml_XmlElement_System_Boolean_"></a> GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)

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

if set to <code>true</code> [has child].

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_Track_HydroForce_GetPatches_VM_Managed_DAFUL_Track_HydroForce_ActionBodyData_VM_Managed_VectorBase____System_UInt32____VM_Managed_TMatrix__System_Double__"></a> GetPatches\(ActionBodyData, ref VectorBase\[\], ref uint\[\], ref TMatrix, ref double\)

Gets Patches

```csharp
public void GetPatches(HydroForce.ActionBodyData actionBodyData, ref VectorBase[] arPos, ref uint[] arConnectivity, ref TMatrix matT, ref double dBBVolume)
```

#### Parameters

`actionBodyData` [HydroForce](VM.Managed.DAFUL.Track.HydroForce.md).[ActionBodyData](VM.Managed.DAFUL.Track.HydroForce.ActionBodyData.md)

The action body data

`arPos` VectorBase\[\]

The postition

`arConnectivity` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

The connectivity

`matT` TMatrix

The transform matrix

`dBBVolume` [double](https://learn.microsoft.com/dotnet/api/system.double)

The boundary box volume

### <a id="VM_Managed_DAFUL_Track_HydroForce_GetPatches_VM_Managed_Document_System_String_VM_Managed_DAFUL_Track_HydroForce_ActionBodyData_SurfaceType_System_Int32_VM_Managed_VectorBase____System_UInt32____VM_Managed_TMatrix__System_Double__VM_Managed_DAFUL_Track_HydroForce_SetProgressDelegate_"></a> GetPatches\(Document, string, SurfaceType, int, ref VectorBase\[\], ref uint\[\], ref TMatrix, ref double, SetProgressDelegate\)

Gets Patches

```csharp
public static void GetPatches(Document document, string strBodyName, HydroForce.ActionBodyData.SurfaceType typeSurface, int nCoarseningFactor, ref VectorBase[] arPos, ref uint[] arConnectivity, ref TMatrix matT, ref double dBBVolume, HydroForce.SetProgressDelegate delegateProgress)
```

#### Parameters

`document` Document

The document

`strBodyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The body name

`typeSurface` [HydroForce](VM.Managed.DAFUL.Track.HydroForce.md).[ActionBodyData](VM.Managed.DAFUL.Track.HydroForce.ActionBodyData.md).[SurfaceType](VM.Managed.DAFUL.Track.HydroForce.ActionBodyData.SurfaceType.md)

The surface type

`nCoarseningFactor` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The coarsening factor

`arPos` VectorBase\[\]

The postition

`arConnectivity` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

The connectivity

`matT` TMatrix

The transform matrix

`dBBVolume` [double](https://learn.microsoft.com/dotnet/api/system.double)

The boundary box volume

`delegateProgress` [HydroForce](VM.Managed.DAFUL.Track.HydroForce.md).[SetProgressDelegate](VM.Managed.DAFUL.Track.HydroForce.SetProgressDelegate.md)

The progress delegate

### <a id="VM_Managed_DAFUL_Track_HydroForce_GetVolumeFromIConnectable_VM_Managed_DAFUL_IConnectable_"></a> GetVolumeFromIConnectable\(IConnectable\)

Gets volume from connectable entity

```csharp
public static double GetVolumeFromIConnectable(IConnectable connectable)
```

#### Parameters

`connectable` IConnectable

The connectable entity

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Track_HydroForce_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Request for update the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_Track_HydroForce_ReDraw"></a> ReDraw\(\)

Redraw.

```csharp
public virtual void ReDraw()
```

