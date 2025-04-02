#  Class Reboundstop

Namespace: [VM.Managed.DAFUL.Car.Force](VM.Managed.DAFUL.Car.Force.md)  
Assembly: VMDCar.dll  

The rebound stop force class

```csharp
public class Reboundstop : ForceCar<PropertyReboundstop>, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup, IDraw, IDrawIcon, IReferencable, ITransformable, IConnector, IEntityRelation, IGenerable, IArgument, IReportable, IFlip, IHasReplaceableEntity, IEnableForSimulationScenario, ITorqueReferenceForBearing, ITemplateObject
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<EntityEventCore\> ← 
ContainerObject<EntityEventCore\> ← 
EntityBase ← 
Entity<PropertyReboundstop\> ← 
Connector<PropertyReboundstop\> ← 
Force<PropertyReboundstop\> ← 
[ForceCar<PropertyReboundstop\>](VM.Managed.DAFUL.Car.Force.ForceCar\-1.md) ← 
[Reboundstop](VM.Managed.DAFUL.Car.Force.Reboundstop.md)

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
IHasReplaceableEntity, 
IEnableForSimulationScenario, 
ITorqueReferenceForBearing, 
ITemplateObject

#### Inherited Members

[ForceCar<PropertyReboundstop\>.m\_bSkipToUpdateSymmetric](VM.Managed.DAFUL.Car.Force.ForceCar\-1.md\#VM\_Managed\_DAFUL\_Car\_Force\_ForceCar\_1\_m\_bSkipToUpdateSymmetric), 
[ForceCar<PropertyReboundstop\>.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.Car.Force.ForceCar\-1.md\#VM\_Managed\_DAFUL\_Car\_Force\_ForceCar\_1\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[ForceCar<PropertyReboundstop\>.WriteTemplateImpl\(XmlWriter\)](VM.Managed.DAFUL.Car.Force.ForceCar\-1.md\#VM\_Managed\_DAFUL\_Car\_Force\_ForceCar\_1\_WriteTemplateImpl\_System\_Xml\_XmlWriter\_), 
[ForceCar<PropertyReboundstop\>.ReadTemplateImpl\(XmlReader\)](VM.Managed.DAFUL.Car.Force.ForceCar\-1.md\#VM\_Managed\_DAFUL\_Car\_Force\_ForceCar\_1\_ReadTemplateImpl\_System\_Xml\_XmlReader\_), 
Force<PropertyReboundstop\>.Initialize\(Unit.ConvertFactor\), 
Force<PropertyReboundstop\>.WriteMarker\(XmlWriter, Marker, string\), 
Force<PropertyReboundstop\>.ReadMarker\(XmlReader, Marker, string\), 
Force<PropertyReboundstop\>.UseForSimulationScenario, 
Connector<PropertyReboundstop\>.Initialize\(Unit.ConvertFactor\), 
Connector<PropertyReboundstop\>.GetTargetListForUpdate\(\), 
Connector<PropertyReboundstop\>.PostAddToDocument\(\), 
Connector<PropertyReboundstop\>.ResetInvalidEntity\(\), 
Connector<PropertyReboundstop\>.Verify\(VerifiedResult\), 
Connector<PropertyReboundstop\>.LinkRequestUpdate\(object, LinkEventArgs\), 
Connector<PropertyReboundstop\>.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\), 
Connector<PropertyReboundstop\>.Draw\(Canvas\), 
Connector<PropertyReboundstop\>.ReDraw\(\), 
Connector<PropertyReboundstop\>.FindLocal\(string\), 
Connector<PropertyReboundstop\>.Instantiate\(Reference, Canvas\), 
Connector<PropertyReboundstop\>.MakeReference\(LinkedList<Reference\>\), 
Connector<PropertyReboundstop\>.MakeReferenceImpl\(LinkedList<Reference\>\), 
Connector<PropertyReboundstop\>.GetLayerImpl\(\), 
Connector<PropertyReboundstop\>.SetLayerImpl\(Layer\), 
Connector<PropertyReboundstop\>.SwitchImpl\(\), 
Connector<PropertyReboundstop\>.BaseMarker, 
Connector<PropertyReboundstop\>.ActionMarker, 
Connector<PropertyReboundstop\>.ConnectorReferenceMarker, 
Connector<PropertyReboundstop\>.PreventDuplicatedRBE, 
Connector<PropertyReboundstop\>.Generable, 
Connector<PropertyReboundstop\>.HasLayerExplicitly, 
Connector<PropertyReboundstop\>.Hide, 
Connector<PropertyReboundstop\>.Referencable, 
Connector<PropertyReboundstop\>.Visible, 
Connector<PropertyReboundstop\>.Layer, 
Connector<PropertyReboundstop\>.ReferenceType, 
Connector<PropertyReboundstop\>.ArgumentType, 
Connector<PropertyReboundstop\>.CanWriteToOutFileImpl, 
Connector<PropertyReboundstop\>.ReportTypeImpl, 
Connector<PropertyReboundstop\>.CanSwitchImpl, 
Entity<PropertyReboundstop\>.Initialize\(Unit.ConvertFactor\), 
Entity<PropertyReboundstop\>.GetUnnamedObjectName\(object\), 
Entity<PropertyReboundstop\>.FindLocal\(string\), 
Entity<PropertyReboundstop\>.Property, 
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

### <a id="VM_Managed_DAFUL_Car_Force_Reboundstop__ctor"></a> Reboundstop\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.Force.Reboundstop" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Reboundstop()
```

### <a id="VM_Managed_DAFUL_Car_Force_Reboundstop__ctor_System_String_"></a> Reboundstop\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.Force.Reboundstop" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Reboundstop(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the STR.

## Properties

### <a id="VM_Managed_DAFUL_Car_Force_Reboundstop_CanWriteToOutFileImpl"></a> CanWriteToOutFileImpl

```csharp
protected override bool CanWriteToOutFileImpl { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Car_Force_Reboundstop_Diameter"></a> Diameter

Gets or sets the diameter.

```csharp
public double Diameter { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_Force_Reboundstop_GeomColor"></a> GeomColor

Gets or sets the color of the geom.

```csharp
public string GeomColor { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Car_Force_Reboundstop_MethodCoef"></a> MethodCoef

Gets or sets the method coef.

```csharp
public ExpressionValueVariable MethodCoef { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_Car_Force_Reboundstop_MethodTypes"></a> MethodTypes

Gets or sets the method types.

```csharp
public Reboundstop.MethodType MethodTypes { get; set; }
```

#### Property Value

 [Reboundstop](VM.Managed.DAFUL.Car.Force.Reboundstop.md).[MethodType](VM.Managed.DAFUL.Car.Force.Reboundstop.MethodType.md)

### <a id="VM_Managed_DAFUL_Car_Force_Reboundstop_ReportTypeImpl"></a> ReportTypeImpl

Gets the report type.

```csharp
protected override IReportable.ReportEntityType ReportTypeImpl { get; }
```

#### Property Value

 IReportable.ReportEntityType

## Methods

### <a id="VM_Managed_DAFUL_Car_Force_Reboundstop_Draw_VM_CAD_Kernel_Render_Canvas_"></a> Draw\(Canvas\)

Draws the icon.

```csharp
public override void Draw(Canvas canvas)
```

#### Parameters

`canvas` Canvas

The canvas has icon information.

### <a id="VM_Managed_DAFUL_Car_Force_Reboundstop_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes the specified factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The factor.

### <a id="VM_Managed_DAFUL_Car_Force_Reboundstop_ReadTemplateImpl_System_Xml_XmlReader_"></a> ReadTemplateImpl\(XmlReader\)

Reads the template document [implementation].

```csharp
protected override void ReadTemplateImpl(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The reader.

### <a id="VM_Managed_DAFUL_Car_Force_Reboundstop_WriteTemplateImpl_System_Xml_XmlWriter_"></a> WriteTemplateImpl\(XmlWriter\)

Writes the template document [implementation].

```csharp
protected override void WriteTemplateImpl(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The writer.

