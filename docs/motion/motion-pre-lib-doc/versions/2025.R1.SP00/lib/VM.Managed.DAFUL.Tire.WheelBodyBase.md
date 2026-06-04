#  Class WheelBodyBase

Namespace: [VM.Managed.DAFUL.Tire](VM.Managed.DAFUL.Tire.md)  
Assembly: VMDTire.dll  

This class is to represent the wheel body base.

```csharp
public abstract class WheelBodyBase : SolidBody, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup, IMarkerCreatable, IFacesetCreatable, ICurvesetCreatable, IConnectableNotReference, IReferencable, IConnectableHasGeometry, IBody, IInterface, ITemplateObject, IHasBuilder, IDrawIcon, ITransformable, IGeometryContainer, IMassProp, IChainedSegmentConnector, IArgument, ITransparentable, IMFModalable, IBodyAnalysisType, IAutoContactable, ITemperatureComponent, IHeatGenerationComponent, IGeometricalComponent, IContactableGeometry2Dot5D, IConnectable, IMarkerParent, IEntityRelation, IHasBody, IHasMaterial
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<EntityEventCore\> ← 
ContainerObject<EntityEventCore\> ← 
EntityBase ← 
Entity<SolidBodyProperty\> ← 
BodyBase<SolidBodyProperty\> ← 
SolidBody ← 
[WheelBodyBase](VM.Managed.DAFUL.Tire.WheelBodyBase.md)

#### Derived

[WheelBody](VM.Managed.DAFUL.Tire.WheelBody.md)

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
IMarkerCreatable, 
IFacesetCreatable, 
ICurvesetCreatable, 
IConnectableNotReference, 
IReferencable, 
IConnectableHasGeometry, 
IBody, 
IInterface, 
ITemplateObject, 
IHasBuilder, 
IDrawIcon, 
ITransformable, 
IGeometryContainer, 
IMassProp, 
IChainedSegmentConnector, 
IArgument, 
ITransparentable, 
IMFModalable, 
IBodyAnalysisType, 
IAutoContactable, 
ITemperatureComponent, 
IHeatGenerationComponent, 
IGeometricalComponent, 
IContactableGeometry2Dot5D, 
IConnectable, 
IMarkerParent, 
IEntityRelation, 
IHasBody, 
IHasMaterial

#### Inherited Members

SolidBody.m\_MeshFreeProperty, 
SolidBody.Initialize\(Unit.ConvertFactor\), 
SolidBody.FixUp\(ObjectBase\), 
SolidBody.DoWorkAfterUpdateContents\(\), 
SolidBody.GetMarkerModelNavigatorInfo\(XmlDocument, XmlElement, Marker\), 
SolidBody.GetMarkerArrayModelNavigatorInfo\(XmlDocument, XmlElement, NamedObjectDictionary<Marker\>\), 
SolidBody.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\), 
SolidBody.MakeReferenceImpl\(LinkedList<Reference\>\), 
SolidBody.WriteTemplateImpl\(XmlWriter\), 
SolidBody.ReadTemplateImpl\(XmlReader\), 
SolidBody.GetBuilder\(\), 
SolidBody.FindLocal\(string\), 
SolidBody.GetUnnamedObjectName\(object\), 
SolidBody.PostAddToDocument\(\), 
SolidBody.ResetInvalidEntity\(\), 
SolidBody.ReDraw\(\), 
SolidBody.GetGeometryNavigatorInformation\(XmlDocument, XmlElement\), 
SolidBody.GetPointDirection\(ref VectorBase, ref VectorBase, IReferencable\), 
SolidBody.GetPointDirectionOnGeometry\(ref VectorBase, ref VectorBase, IReferencable\), 
SolidBody.GetDefaultMaxPenetration\(ref double, IReferencable\), 
SolidBody.GetLayerImpl\(\), 
SolidBody.SetLayerImpl\(Layer\), 
SolidBody.OnDeserialization\(object\), 
SolidBody.LinkRemovedFromDocument\(object, RemoveFromDocEventArgs\), 
SolidBody.LinkRequestDestroy\(object, LinkEventArgs\), 
SolidBody.GetAnalysisLevelInfo\(ref List<double\>, ref List<uint\>\), 
SolidBody.IsAutoContactable\(\), 
SolidBody.GetContactables\(\), 
SolidBody.IsInterface, 
SolidBody.ModeArray, 
SolidBody.DFMFPath, 
SolidBody.LastModifiedTimeToDFMFFile, 
SolidBody.\_MovingReferenceFrame, 
SolidBody.MovingReferenceFrame, 
SolidBody.ModalReferencePosition, 
SolidBody.UseModalReferencePosition, 
SolidBody.UseAdvancedOption, 
SolidBody.UseTMovingReferenceFrame, 
SolidBody.UseRMovingReferenceFrame, 
SolidBody.ParentTypeImpl, 
SolidBody.IsEditCM, 
SolidBody.IsBaseGeometry, 
SolidBody.IsActionGeometry, 
SolidBody.MaxPenetration, 
SolidBody.HalfThickness, 
SolidBody.SurfaceSmoothingType, 
SolidBody.Connectable, 
SolidBody.IsRepresentedAsBSurface, 
SolidBody.ReferenceType, 
SolidBody.ArgumentType, 
SolidBody.Geometry, 
SolidBody.MeshFreeProperty, 
SolidBody.AnalysisType, 
SolidBody.TopologyEntityTypeName, 
BodyBase<SolidBodyProperty\>.Initialize\(Unit.ConvertFactor\), 
BodyBase<SolidBodyProperty\>.GetGeomModelNavigatorInfo\(XmlDocument, XmlElement, BodyProperty, Body\), 
BodyBase<SolidBodyProperty\>.GetGeneralMarkerInfo\(XmlDocument, XmlElement, Marker\), 
BodyBase<SolidBodyProperty\>.MakeReferenceImpl\(LinkedList<Reference\>\), 
BodyBase<SolidBodyProperty\>.FixUp\(ObjectBase\), 
BodyBase<SolidBodyProperty\>.GetArgumentList\(LinkedList<ObjectBase\>\), 
BodyBase<SolidBodyProperty\>.OnUpdatePropertyImpl\(Property, LinkEventArgs\), 
BodyBase<SolidBodyProperty\>.GetLayerImpl\(\), 
BodyBase<SolidBodyProperty\>.SetLayerImpl\(Layer\), 
BodyBase<SolidBodyProperty\>.GetTargetListForUpdate\(\), 
BodyBase<SolidBodyProperty\>.HasLayerExplicitly, 
BodyBase<SolidBodyProperty\>.ParentType, 
BodyBase<SolidBodyProperty\>.ParentTypeImpl, 
BodyBase<SolidBodyProperty\>.ReferenceFrameType, 
BodyBase<SolidBodyProperty\>.ConnectableName, 
BodyBase<SolidBodyProperty\>.ConnectableFullName, 
BodyBase<SolidBodyProperty\>.ConnectablePostfixName, 
BodyBase<SolidBodyProperty\>.ConnectablePosition, 
BodyBase<SolidBodyProperty\>.ConnectableBody, 
BodyBase<SolidBodyProperty\>.Body, 
BodyBase<SolidBodyProperty\>.Layer, 
BodyBase<SolidBodyProperty\>.IsVisible, 
BodyBase<SolidBodyProperty\>.ReferencableImpl, 
BodyBase<SolidBodyProperty\>.Geometry, 
Entity<SolidBodyProperty\>.Initialize\(Unit.ConvertFactor\), 
Entity<SolidBodyProperty\>.GetUnnamedObjectName\(object\), 
Entity<SolidBodyProperty\>.FindLocal\(string\), 
Entity<SolidBodyProperty\>.Property, 
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

### <a id="VM_Managed_DAFUL_Tire_WheelBodyBase__ctor"></a> WheelBodyBase\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Tire.WheelBodyBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public WheelBodyBase()
```

### <a id="VM_Managed_DAFUL_Tire_WheelBodyBase__ctor_System_String_"></a> WheelBodyBase\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Tire.WheelBodyBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public WheelBodyBase(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the STR.

### <a id="VM_Managed_DAFUL_Tire_WheelBodyBase__ctor_System_String_VM_Managed_CAD_Builder_"></a> WheelBodyBase\(string, Builder\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Tire.WheelBodyBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public WheelBodyBase(string strName, Builder builder)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the STR.

`builder` Builder

The builder.

## Properties

### <a id="VM_Managed_DAFUL_Tire_WheelBodyBase_ActiveTirePropertyFile"></a> ActiveTirePropertyFile

Gets or sets the active tire property file.

```csharp
public ActiveTirePropertyFile ActiveTirePropertyFile { get; set; }
```

#### Property Value

 [ActiveTirePropertyFile](VM.Managed.DAFUL.Tire.Force.ActiveTirePropertyFile.md)

### <a id="VM_Managed_DAFUL_Tire_WheelBodyBase_CenterOffset"></a> CenterOffset

Gets or sets the center offset.

```csharp
public ExpressionValueVariable CenterOffset { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_Tire_WheelBodyBase_IsEditCM"></a> IsEditCM

Gets a value indicating whether this instance is edit CM.

```csharp
public override bool IsEditCM { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Tire_WheelBodyBase_Scale"></a> Scale

Gets or sets the scale.

```csharp
public Scale Scale { get; set; }
```

#### Property Value

 [Scale](VM.Managed.DAFUL.Tire.Scale.md)

### <a id="VM_Managed_DAFUL_Tire_WheelBodyBase_TypeOfSide"></a> TypeOfSide

Gets or sets the type of side.
Use SetTypeOfSide() when this instance sets for undo/redo

```csharp
public WheelBodyBase.SideType TypeOfSide { get; set; }
```

#### Property Value

 [WheelBodyBase](VM.Managed.DAFUL.Tire.WheelBodyBase.md).[SideType](VM.Managed.DAFUL.Tire.WheelBodyBase.SideType.md)

### <a id="VM_Managed_DAFUL_Tire_WheelBodyBase_WheelCenterOffset"></a> WheelCenterOffset

Gets or sets the wheel center offset.

```csharp
public ExpressionValueVariable WheelCenterOffset { get; set; }
```

#### Property Value

 ExpressionValueVariable

## Methods

### <a id="VM_Managed_DAFUL_Tire_WheelBodyBase_CreateOrUpdateBuilder_System_String_System_Boolean_VM_Managed_DAFUL_Tire_WheelBodyBase_CreateInfo_VM_Managed_Document_"></a> CreateOrUpdateBuilder\(string, bool, CreateInfo, Document\)

Creates the or update builder.

```csharp
public void CreateOrUpdateBuilder(string strXml, bool bCreate, WheelBodyBase.CreateInfo infoCreate, Document doc)
```

#### Parameters

`strXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

The STR XML.

`bCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b create].

`infoCreate` [WheelBodyBase](VM.Managed.DAFUL.Tire.WheelBodyBase.md).[CreateInfo](VM.Managed.DAFUL.Tire.WheelBodyBase.CreateInfo.md)

The info create.

`doc` Document

The doc.

### <a id="VM_Managed_DAFUL_Tire_WheelBodyBase_CreateOrUpdateBuilder_System_String_System_Boolean_VM_Managed_DAFUL_Tire_WheelBodyBase_CreateInfo_"></a> CreateOrUpdateBuilder\(string, bool, CreateInfo\)

Creates the or update builder.

```csharp
public void CreateOrUpdateBuilder(string strXml, bool bCreate, WheelBodyBase.CreateInfo infoCreate)
```

#### Parameters

`strXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

The XML info.

`bCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> create.

`infoCreate` [WheelBodyBase](VM.Managed.DAFUL.Tire.WheelBodyBase.md).[CreateInfo](VM.Managed.DAFUL.Tire.WheelBodyBase.CreateInfo.md)

The create information.

### <a id="VM_Managed_DAFUL_Tire_WheelBodyBase_FindLocal_System_String_"></a> FindLocal\(string\)

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

### <a id="VM_Managed_DAFUL_Tire_WheelBodyBase_GetOrientation_VM_Managed_OMatrix_"></a> GetOrientation\(OMatrix\)

Gets the orientation.

```csharp
public virtual OMatrix GetOrientation(OMatrix matInput)
```

#### Parameters

`matInput` OMatrix

The mat input.

#### Returns

 OMatrix

### <a id="VM_Managed_DAFUL_Tire_WheelBodyBase_GetUnnamedObjectName_System_Object_"></a> GetUnnamedObjectName\(object\)

Gets the name of the unnamed object.

```csharp
public override string GetUnnamedObjectName(object obUnnamed)
```

#### Parameters

`obUnnamed` [object](https://learn.microsoft.com/dotnet/api/system.object)

The ob unnamed.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The unnamed object name.

### <a id="VM_Managed_DAFUL_Tire_WheelBodyBase_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_Tire_WheelBodyBase_LinkRequestDestroying_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestDestroying\(object, LinkEventArgs\)

The destroying event occured from the linked object.

```csharp
protected override void LinkRequestDestroying(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The destroying event information.

### <a id="VM_Managed_DAFUL_Tire_WheelBodyBase_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Request for update the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_Tire_WheelBodyBase_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### <a id="VM_Managed_DAFUL_Tire_WheelBodyBase_ReadTemplateImpl_System_Xml_XmlReader_"></a> ReadTemplateImpl\(XmlReader\)

Reads the template document [implementation].

```csharp
protected override void ReadTemplateImpl(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The reader.

### <a id="VM_Managed_DAFUL_Tire_WheelBodyBase_SetModifiedImpl_VM_Managed_ModifiedResult_ModifiedType_"></a> SetModifiedImpl\(ModifiedType\)

Set modified type.

```csharp
public void SetModifiedImpl(ModifiedResult.ModifiedType type)
```

#### Parameters

`type` ModifiedResult.ModifiedType

The modified type.

### <a id="VM_Managed_DAFUL_Tire_WheelBodyBase_SetTypeOfSide_VM_Managed_DAFUL_Tire_WheelBodyBase_SideType_"></a> SetTypeOfSide\(SideType\)

Set side type.

```csharp
public void SetTypeOfSide(WheelBodyBase.SideType type)
```

#### Parameters

`type` [WheelBodyBase](VM.Managed.DAFUL.Tire.WheelBodyBase.md).[SideType](VM.Managed.DAFUL.Tire.WheelBodyBase.SideType.md)

The side type.

### <a id="VM_Managed_DAFUL_Tire_WheelBodyBase_WriteTemplateImpl_System_Xml_XmlWriter_"></a> WriteTemplateImpl\(XmlWriter\)

Writes the template document [implementation].

```csharp
protected override void WriteTemplateImpl(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The writer.

