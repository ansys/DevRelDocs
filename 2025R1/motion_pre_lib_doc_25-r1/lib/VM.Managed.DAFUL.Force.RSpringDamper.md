#  Class RSpringDamper

Namespace: [VM.Managed.DAFUL.Force](VM.Managed.DAFUL.Force.md)  
Assembly: VMDFB.dll  

This class is to represent the rotational spring damper force.

```csharp
public class RSpringDamper : Force<PropertyRSpringDamper>, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup, IDraw, IDrawIcon, IReferencable, ITransformable, IConnector, IEntityRelation, IGenerable, IArgument, IReportable, IFlip, IEnableForSimulationScenario, ITorqueReferenceForBearing
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<EntityEventCore\> ← 
ContainerObject<EntityEventCore\> ← 
EntityBase ← 
Entity<PropertyRSpringDamper\> ← 
Connector<PropertyRSpringDamper\> ← 
[Force<PropertyRSpringDamper\>](VM.Managed.DAFUL.Force.Force\-1.md) ← 
[RSpringDamper](VM.Managed.DAFUL.Force.RSpringDamper.md)

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
ITransformable, 
IConnector, 
IEntityRelation, 
IGenerable, 
IArgument, 
IReportable, 
IFlip, 
IEnableForSimulationScenario, 
ITorqueReferenceForBearing

#### Inherited Members

[Force<PropertyRSpringDamper\>.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.Force.Force\-1.md\#VM\_Managed\_DAFUL\_Force\_Force\_1\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[Force<PropertyRSpringDamper\>.WriteMarker\(XmlWriter, Marker, string\)](VM.Managed.DAFUL.Force.Force\-1.md\#VM\_Managed\_DAFUL\_Force\_Force\_1\_WriteMarker\_System\_Xml\_XmlWriter\_VM\_Managed\_DAFUL\_Marker\_System\_String\_), 
[Force<PropertyRSpringDamper\>.ReadMarker\(XmlReader, Marker, string\)](VM.Managed.DAFUL.Force.Force\-1.md\#VM\_Managed\_DAFUL\_Force\_Force\_1\_ReadMarker\_System\_Xml\_XmlReader\_VM\_Managed\_DAFUL\_Marker\_System\_String\_), 
[Force<PropertyRSpringDamper\>.UseForSimulationScenario](VM.Managed.DAFUL.Force.Force\-1.md\#VM\_Managed\_DAFUL\_Force\_Force\_1\_UseForSimulationScenario), 
Connector<PropertyRSpringDamper\>.Initialize\(Unit.ConvertFactor\), 
Connector<PropertyRSpringDamper\>.GetTargetListForUpdate\(\), 
Connector<PropertyRSpringDamper\>.PostAddToDocument\(\), 
Connector<PropertyRSpringDamper\>.ResetInvalidEntity\(\), 
Connector<PropertyRSpringDamper\>.Verify\(VerifiedResult\), 
Connector<PropertyRSpringDamper\>.LinkRequestUpdate\(object, LinkEventArgs\), 
Connector<PropertyRSpringDamper\>.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\), 
Connector<PropertyRSpringDamper\>.Draw\(Canvas\), 
Connector<PropertyRSpringDamper\>.ReDraw\(\), 
Connector<PropertyRSpringDamper\>.FindLocal\(string\), 
Connector<PropertyRSpringDamper\>.Instantiate\(Reference, Canvas\), 
Connector<PropertyRSpringDamper\>.MakeReference\(LinkedList<Reference\>\), 
Connector<PropertyRSpringDamper\>.MakeReferenceImpl\(LinkedList<Reference\>\), 
Connector<PropertyRSpringDamper\>.GetLayerImpl\(\), 
Connector<PropertyRSpringDamper\>.SetLayerImpl\(Layer\), 
Connector<PropertyRSpringDamper\>.SwitchImpl\(\), 
Connector<PropertyRSpringDamper\>.BaseMarker, 
Connector<PropertyRSpringDamper\>.ActionMarker, 
Connector<PropertyRSpringDamper\>.ConnectorReferenceMarker, 
Connector<PropertyRSpringDamper\>.PreventDuplicatedRBE, 
Connector<PropertyRSpringDamper\>.Generable, 
Connector<PropertyRSpringDamper\>.HasLayerExplicitly, 
Connector<PropertyRSpringDamper\>.Hide, 
Connector<PropertyRSpringDamper\>.Referencable, 
Connector<PropertyRSpringDamper\>.Visible, 
Connector<PropertyRSpringDamper\>.Layer, 
Connector<PropertyRSpringDamper\>.ReferenceType, 
Connector<PropertyRSpringDamper\>.ArgumentType, 
Connector<PropertyRSpringDamper\>.CanWriteToOutFileImpl, 
Connector<PropertyRSpringDamper\>.ReportTypeImpl, 
Connector<PropertyRSpringDamper\>.CanSwitchImpl, 
Entity<PropertyRSpringDamper\>.Initialize\(Unit.ConvertFactor\), 
Entity<PropertyRSpringDamper\>.GetUnnamedObjectName\(object\), 
Entity<PropertyRSpringDamper\>.FindLocal\(string\), 
Entity<PropertyRSpringDamper\>.Property, 
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

### <a id="VM_Managed_DAFUL_Force_RSpringDamper__ctor"></a> RSpringDamper\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Force.RSpringDamper" data-throw-if-not-resolved="false"></xref> class.

```csharp
public RSpringDamper()
```

### <a id="VM_Managed_DAFUL_Force_RSpringDamper__ctor_System_String_"></a> RSpringDamper\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Force.RSpringDamper" data-throw-if-not-resolved="false"></xref> class.

```csharp
public RSpringDamper(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the rotational spring damper.

## Properties

### <a id="VM_Managed_DAFUL_Force_RSpringDamper_FreeAngle"></a> FreeAngle

Gets or sets the free angle.

```csharp
public ExpressionValueVariable FreeAngle { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_Force_RSpringDamper_ReportTypeImpl"></a> ReportTypeImpl

Gets the report type.

```csharp
protected override IReportable.ReportEntityType ReportTypeImpl { get; }
```

#### Property Value

 IReportable.ReportEntityType

## Methods

### <a id="VM_Managed_DAFUL_Force_RSpringDamper_CalculationTwoMarkerAngle_VM_Managed_OMatrix_VM_Managed_OMatrix_System_Double___"></a> CalculationTwoMarkerAngle\(OMatrix, OMatrix, double\[\]\)

Calculations the two marker angle.

```csharp
public static bool CalculationTwoMarkerAngle(OMatrix baseOMat, OMatrix actionOMat, double[] angle)
```

#### Parameters

`baseOMat` OMatrix

The base orientation matrix.

`actionOMat` OMatrix

The action orientation matrix.

`angle` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The angle.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Force_RSpringDamper_CalculationTwoMarkerZAngle_VM_Managed_OMatrix_VM_Managed_OMatrix_"></a> CalculationTwoMarkerZAngle\(OMatrix, OMatrix\)

Calculations the two marker Z angle.

```csharp
public static double CalculationTwoMarkerZAngle(OMatrix baseOMat, OMatrix actionOMat)
```

#### Parameters

`baseOMat` OMatrix

The base O mat.

`actionOMat` OMatrix

The action O mat.

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Force_RSpringDamper_Draw_VM_CAD_Kernel_Render_Canvas_"></a> Draw\(Canvas\)

Draws the icon.

```csharp
public override void Draw(Canvas canvas)
```

#### Parameters

`canvas` Canvas

The canvas has icon information.

### <a id="VM_Managed_DAFUL_Force_RSpringDamper_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_Force_RSpringDamper_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Request for update the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_Force_RSpringDamper_MessageForPositionChanging_System_String_"></a> MessageForPositionChanging\(string\)

Messages for position changing.

```csharp
public static void MessageForPositionChanging(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string.

### <a id="VM_Managed_DAFUL_Force_RSpringDamper_UpdateFreeAngle"></a> UpdateFreeAngle\(\)

Updates the free angle.

```csharp
public void UpdateFreeAngle()
```

