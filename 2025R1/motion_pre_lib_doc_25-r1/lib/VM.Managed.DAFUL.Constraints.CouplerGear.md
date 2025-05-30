#  Class CouplerGear

Namespace: [VM.Managed.DAFUL.Constraints](VM.Managed.DAFUL.Constraints.md)  
Assembly: VMDCP.dll  

This class is to represent the coupler gear.

```csharp
public class CouplerGear : CouplerBase<PropertyCouplerGear>, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup, IEnableForSimulationScenario, IDraw, IDrawIcon, IArgument, ITemplateObject, IEntityRelation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<EntityEventCore\> ← 
ContainerObject<EntityEventCore\> ← 
EntityBase ← 
Entity<PropertyCouplerGear\> ← 
[CouplerBase<PropertyCouplerGear\>](VM.Managed.DAFUL.Constraints.CouplerBase\-1.md) ← 
[CouplerGear](VM.Managed.DAFUL.Constraints.CouplerGear.md)

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
IEnableForSimulationScenario, 
IDraw, 
IDrawIcon, 
IArgument, 
ITemplateObject, 
IEntityRelation

#### Inherited Members

[CouplerBase<PropertyCouplerGear\>.m\_bSkipToUpdateSymmetric](VM.Managed.DAFUL.Constraints.CouplerBase\-1.md\#VM\_Managed\_DAFUL\_Constraints\_CouplerBase\_1\_m\_bSkipToUpdateSymmetric), 
[CouplerBase<PropertyCouplerGear\>.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.DAFUL.Constraints.CouplerBase\-1.md\#VM\_Managed\_DAFUL\_Constraints\_CouplerBase\_1\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[CouplerBase<PropertyCouplerGear\>.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)](VM.Managed.DAFUL.Constraints.CouplerBase\-1.md\#VM\_Managed\_DAFUL\_Constraints\_CouplerBase\_1\_GetModelNavigatorInformationImpl\_System\_Xml\_XmlDocument\_System\_Xml\_XmlElement\_System\_Boolean\_), 
[CouplerBase<PropertyCouplerGear\>.Draw\(Canvas\)](VM.Managed.DAFUL.Constraints.CouplerBase\-1.md\#VM\_Managed\_DAFUL\_Constraints\_CouplerBase\_1\_Draw\_VM\_CAD\_Kernel\_Render\_Canvas\_), 
[CouplerBase<PropertyCouplerGear\>.ReDraw\(\)](VM.Managed.DAFUL.Constraints.CouplerBase\-1.md\#VM\_Managed\_DAFUL\_Constraints\_CouplerBase\_1\_ReDraw), 
[CouplerBase<PropertyCouplerGear\>.WriteTemplateImpl\(XmlWriter\)](VM.Managed.DAFUL.Constraints.CouplerBase\-1.md\#VM\_Managed\_DAFUL\_Constraints\_CouplerBase\_1\_WriteTemplateImpl\_System\_Xml\_XmlWriter\_), 
[CouplerBase<PropertyCouplerGear\>.ReadTemplateImpl\(XmlReader\)](VM.Managed.DAFUL.Constraints.CouplerBase\-1.md\#VM\_Managed\_DAFUL\_Constraints\_CouplerBase\_1\_ReadTemplateImpl\_System\_Xml\_XmlReader\_), 
[CouplerBase<PropertyCouplerGear\>.GetChildListImpl\(\)](VM.Managed.DAFUL.Constraints.CouplerBase\-1.md\#VM\_Managed\_DAFUL\_Constraints\_CouplerBase\_1\_GetChildListImpl), 
[CouplerBase<PropertyCouplerGear\>.Joint1](VM.Managed.DAFUL.Constraints.CouplerBase\-1.md\#VM\_Managed\_DAFUL\_Constraints\_CouplerBase\_1\_Joint1), 
[CouplerBase<PropertyCouplerGear\>.Joint1\_FullName](VM.Managed.DAFUL.Constraints.CouplerBase\-1.md\#VM\_Managed\_DAFUL\_Constraints\_CouplerBase\_1\_Joint1\_FullName), 
[CouplerBase<PropertyCouplerGear\>.Joint2](VM.Managed.DAFUL.Constraints.CouplerBase\-1.md\#VM\_Managed\_DAFUL\_Constraints\_CouplerBase\_1\_Joint2), 
[CouplerBase<PropertyCouplerGear\>.Joint2\_FullName](VM.Managed.DAFUL.Constraints.CouplerBase\-1.md\#VM\_Managed\_DAFUL\_Constraints\_CouplerBase\_1\_Joint2\_FullName), 
[CouplerBase<PropertyCouplerGear\>.JointType1](VM.Managed.DAFUL.Constraints.CouplerBase\-1.md\#VM\_Managed\_DAFUL\_Constraints\_CouplerBase\_1\_JointType1), 
[CouplerBase<PropertyCouplerGear\>.JointType2](VM.Managed.DAFUL.Constraints.CouplerBase\-1.md\#VM\_Managed\_DAFUL\_Constraints\_CouplerBase\_1\_JointType2), 
[CouplerBase<PropertyCouplerGear\>.HasLayerExplicitly](VM.Managed.DAFUL.Constraints.CouplerBase\-1.md\#VM\_Managed\_DAFUL\_Constraints\_CouplerBase\_1\_HasLayerExplicitly), 
[CouplerBase<PropertyCouplerGear\>.Hide](VM.Managed.DAFUL.Constraints.CouplerBase\-1.md\#VM\_Managed\_DAFUL\_Constraints\_CouplerBase\_1\_Hide), 
[CouplerBase<PropertyCouplerGear\>.ReferenceType](VM.Managed.DAFUL.Constraints.CouplerBase\-1.md\#VM\_Managed\_DAFUL\_Constraints\_CouplerBase\_1\_ReferenceType), 
[CouplerBase<PropertyCouplerGear\>.ArgumentType](VM.Managed.DAFUL.Constraints.CouplerBase\-1.md\#VM\_Managed\_DAFUL\_Constraints\_CouplerBase\_1\_ArgumentType), 
Entity<PropertyCouplerGear\>.Initialize\(Unit.ConvertFactor\), 
Entity<PropertyCouplerGear\>.GetUnnamedObjectName\(object\), 
Entity<PropertyCouplerGear\>.FindLocal\(string\), 
Entity<PropertyCouplerGear\>.Property, 
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

### <a id="VM_Managed_DAFUL_Constraints_CouplerGear__ctor"></a> CouplerGear\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Constraints.CouplerGear" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CouplerGear()
```

### <a id="VM_Managed_DAFUL_Constraints_CouplerGear__ctor_System_String_"></a> CouplerGear\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Constraints.CouplerGear" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CouplerGear(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the coupler gear.

## Methods

### <a id="VM_Managed_DAFUL_Constraints_CouplerGear_Draw_VM_CAD_Kernel_Render_Canvas_"></a> Draw\(Canvas\)

Draws the icon.

```csharp
public override void Draw(Canvas canvas)
```

#### Parameters

`canvas` Canvas

The canvas has icon information.

### <a id="VM_Managed_DAFUL_Constraints_CouplerGear_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_Constraints_CouplerGear_ReadTemplateImpl_System_Xml_XmlReader_"></a> ReadTemplateImpl\(XmlReader\)

Reads the template document [implementation].

```csharp
protected override void ReadTemplateImpl(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The reader.

### <a id="VM_Managed_DAFUL_Constraints_CouplerGear_WriteTemplateImpl_System_Xml_XmlWriter_"></a> WriteTemplateImpl\(XmlWriter\)

Writes the template document [implementation].

```csharp
protected override void WriteTemplateImpl(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The writer.

