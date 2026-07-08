#  Class MTL

Namespace: [VM.Managed.DAFUL.Track](VM.Managed.DAFUL.Track.md)  
Assembly: VMDTrackBase.dll  

This class is to represent the massless track link

```csharp
public class MTL : Entity<PropertyMTL>, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup, IDraw, IDrawIcon, IPostDeserialized, IReportable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<EntityEventCore\> ← 
ContainerObject<EntityEventCore\> ← 
EntityBase ← 
Entity<PropertyMTL\> ← 
[MTL](VM.Managed.DAFUL.Track.MTL.md)

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
IPostDeserialized, 
IReportable

#### Inherited Members

Entity<PropertyMTL\>.Initialize\(Unit.ConvertFactor\), 
Entity<PropertyMTL\>.GetUnnamedObjectName\(object\), 
Entity<PropertyMTL\>.FindLocal\(string\), 
Entity<PropertyMTL\>.Property, 
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

### <a id="VM_Managed_DAFUL_Track_MTL__ctor"></a> MTL\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Track.MTL" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MTL()
```

### <a id="VM_Managed_DAFUL_Track_MTL__ctor_System_String_"></a> MTL\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Track.MTL" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MTL(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string.

## Properties

### <a id="VM_Managed_DAFUL_Track_MTL_BaseGeometry"></a> BaseGeometry

Gets or sets the base geometry.

```csharp
public IContactableRigid3D BaseGeometry { get; set; }
```

#### Property Value

 IContactableRigid3D

### <a id="VM_Managed_DAFUL_Track_MTL_BeamGroupData"></a> BeamGroupData

Gets or sets the beam group.

```csharp
public BeamGroup[] BeamGroupData { get; set; }
```

#### Property Value

 BeamGroup\[\]

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

Beam group is null.

### <a id="VM_Managed_DAFUL_Track_MTL_HasLayerExplicitly"></a> HasLayerExplicitly

Gets a value indicating whether object has a layer explicitly.

```csharp
protected override bool HasLayerExplicitly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Track_MTL_Hide"></a> Hide

Gets or sets a value indicating whether this instance is hide.

```csharp
public bool Hide { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Track_MTL_HullMarker"></a> HullMarker

Gets or sets the hull marker.

```csharp
public IMarker HullMarker { get; set; }
```

#### Property Value

 IMarker

### <a id="VM_Managed_DAFUL_Track_MTL_NumberOfContactPointForLength"></a> NumberOfContactPointForLength

Gets or sets the number of contact point for length.

```csharp
public ExpressionValueVariable NumberOfContactPointForLength { get; set; }
```

#### Property Value

 ExpressionValueVariable

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

Number of contact point for length is null.

### <a id="VM_Managed_DAFUL_Track_MTL_NumberOfContactPointForWidth"></a> NumberOfContactPointForWidth

Gets or sets the number of contact point for width.

```csharp
public ExpressionValueVariable NumberOfContactPointForWidth { get; set; }
```

#### Property Value

 ExpressionValueVariable

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

Number of contact point for width is null.

### <a id="VM_Managed_DAFUL_Track_MTL_PathDataSet"></a> PathDataSet

Gets or sets the path data.

```csharp
public MTL.PathData[] PathDataSet { get; set; }
```

#### Property Value

 [MTL](VM.Managed.DAFUL.Track.MTL.md).[PathData](VM.Managed.DAFUL.Track.MTL.PathData.md)\[\]

### <a id="VM_Managed_DAFUL_Track_MTL_SolidBodies"></a> SolidBodies

Gets or sets the solid bodies.

```csharp
public SolidBody[] SolidBodies { get; set; }
```

#### Property Value

 SolidBody\[\]

### <a id="VM_Managed_DAFUL_Track_MTL_Thickness"></a> Thickness

Gets or sets the thickness.

```csharp
public ExpressionValueVariable Thickness { get; set; }
```

#### Property Value

 ExpressionValueVariable

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

Thickness is null.

### <a id="VM_Managed_DAFUL_Track_MTL_VerticalDirection"></a> VerticalDirection

Gets or sets the Vertical Direction.

```csharp
public DirectionBase VerticalDirection { get; set; }
```

#### Property Value

 DirectionBase

### <a id="VM_Managed_DAFUL_Track_MTL_Width"></a> Width

Gets or sets the width.

```csharp
public ExpressionValueVariable Width { get; set; }
```

#### Property Value

 ExpressionValueVariable

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

Width is null.

### <a id="VM_Managed_DAFUL_Track_MTL__BaseGeometry"></a> \_BaseGeometry

Gets or sets the base geometry.

```csharp
public Linker<IContactableRigid3D> _BaseGeometry { get; set; }
```

#### Property Value

 Linker<IContactableRigid3D\>

### <a id="VM_Managed_DAFUL_Track_MTL__HullMarker"></a> \_HullMarker

Gets or sets the hull marker.

```csharp
public Linker<IMarker> _HullMarker { get; set; }
```

#### Property Value

 Linker<IMarker\>

## Methods

### <a id="VM_Managed_DAFUL_Track_MTL_Draw_VM_CAD_Kernel_Render_Canvas_"></a> Draw\(Canvas\)

Draws the icon.

```csharp
public virtual void Draw(Canvas canvas)
```

#### Parameters

`canvas` Canvas

The canvas has icon information.

### <a id="VM_Managed_DAFUL_Track_MTL_FindLocal_System_String_"></a> FindLocal\(string\)

Finds an object that matches a specified name in local.

```csharp
public override IObjectBase FindLocal(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name to search for.

#### Returns

 IObjectBase

An object that matches a specified name.

### <a id="VM_Managed_DAFUL_Track_MTL_GetBeamGroupXml_VM_Managed_DAFUL_Track_MTL_PathData___VM_Managed_DAFUL_Beam_BeamGroup___VM_Managed_VectorBase_System_Double_System_Double_System_String__System_String__"></a> GetBeamGroupXml\(PathData\[\], BeamGroup\[\], VectorBase, double, double, ref string, ref string\)

Gets beam group xml

```csharp
public static void GetBeamGroupXml(MTL.PathData[] arPathData, BeamGroup[] arBeamGroup, VectorBase vecDirY, double dWidth, double dThickness, ref string strBeamGroup, ref string strSolidBodies)
```

#### Parameters

`arPathData` [MTL](VM.Managed.DAFUL.Track.MTL.md).[PathData](VM.Managed.DAFUL.Track.MTL.PathData.md)\[\]

The path data array

`arBeamGroup` BeamGroup\[\]

The beamgroup

`vecDirY` VectorBase

The y direction

`dWidth` [double](https://learn.microsoft.com/dotnet/api/system.double)

The width

`dThickness` [double](https://learn.microsoft.com/dotnet/api/system.double)

The thickness

`strBeamGroup` [string](https://learn.microsoft.com/dotnet/api/system.string)

The beamgroup xml

`strSolidBodies` [string](https://learn.microsoft.com/dotnet/api/system.string)

The solid bodies xml

### <a id="VM_Managed_DAFUL_Track_MTL_GetModelNavigatorInformationImpl_System_Xml_XmlDocument_System_Xml_XmlElement_System_Boolean_"></a> GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)

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

### <a id="VM_Managed_DAFUL_Track_MTL_GetTangentPointOfPath_VM_Managed_DAFUL_Track_MTL_PathData___VM_Managed_DirectionExpression_System_Double_"></a> GetTangentPointOfPath\(PathData\[\], DirectionExpression, double\)

Gets tangent point of path

```csharp
public static List<VectorBase[]> GetTangentPointOfPath(MTL.PathData[] arPathData, DirectionExpression dirY, double dThickness)
```

#### Parameters

`arPathData` [MTL](VM.Managed.DAFUL.Track.MTL.md).[PathData](VM.Managed.DAFUL.Track.MTL.PathData.md)\[\]

The path data array

`dirY` DirectionExpression

The y direction

`dThickness` [double](https://learn.microsoft.com/dotnet/api/system.double)

The thickness

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<VectorBase\[\]\>

### <a id="VM_Managed_DAFUL_Track_MTL_GetUnnamedObjectName_System_Object_"></a> GetUnnamedObjectName\(object\)

Gets the name of the unnamed object.

```csharp
public override string GetUnnamedObjectName(object obUnnamed)
```

#### Parameters

`obUnnamed` [object](https://learn.microsoft.com/dotnet/api/system.object)

The ob unnamed.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Track_MTL_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_Track_MTL_OnLinkReserved_VM_Managed_ILink_System_Object_System_EventArgs_"></a> OnLinkReserved\(ILink, object, EventArgs\)

```csharp
protected override void OnLinkReserved(ILink reserved, object objNotifier, EventArgs args)
```

#### Parameters

`reserved` ILink

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs)

### <a id="VM_Managed_DAFUL_Track_MTL_ReDraw"></a> ReDraw\(\)

Redraw.

```csharp
public virtual void ReDraw()
```

