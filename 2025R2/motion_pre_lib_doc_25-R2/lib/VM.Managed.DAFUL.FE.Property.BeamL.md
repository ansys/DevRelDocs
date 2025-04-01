# Class BeamL

Namespace: [VM.Managed.DAFUL.FE.Property](VM.Managed.DAFUL.FE.Property.md)  
Assembly: VMFE.dll  

This class is to represent the property for BeamL.

```csharp
public class BeamL : Beam, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, ISubEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, INamed, INavigatorItem, IFEObject, IHasMaterial
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
SubEntity ← 
[FESubEntity](VM.Managed.DAFUL.FE.FESubEntity.md) ← 
[PropertyBase](VM.Managed.DAFUL.FE.Property.PropertyBase.md) ← 
[Beam](VM.Managed.DAFUL.FE.Property.Beam.md) ← 
[BeamL](VM.Managed.DAFUL.FE.Property.BeamL.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
ILinkContainerEvent, 
IVerifiable, 
IHistoryObjectSerializable, 
IAttributeContainer, 
ISubEntity, 
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
INamed, 
INavigatorItem, 
[IFEObject](VM.Managed.DAFUL.FE.IFEObject.md), 
IHasMaterial

#### Inherited Members

[Beam.Init\(\)](VM.Managed.DAFUL.FE.Property.Beam.md\#VM\_Managed\_DAFUL\_FE\_Property\_Beam\_Init), 
[Beam.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.FE.Property.Beam.md\#VM\_Managed\_DAFUL\_FE\_Property\_Beam\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[Beam.OnDeserialization\(object\)](VM.Managed.DAFUL.FE.Property.Beam.md\#VM\_Managed\_DAFUL\_FE\_Property\_Beam\_OnDeserialization\_System\_Object\_), 
[Beam.Direction](VM.Managed.DAFUL.FE.Property.Beam.md\#VM\_Managed\_DAFUL\_FE\_Property\_Beam\_Direction), 
[Beam.ShearAreaRatioZ](VM.Managed.DAFUL.FE.Property.Beam.md\#VM\_Managed\_DAFUL\_FE\_Property\_Beam\_ShearAreaRatioZ), 
[Beam.ShearAreaRatioY](VM.Managed.DAFUL.FE.Property.Beam.md\#VM\_Managed\_DAFUL\_FE\_Property\_Beam\_ShearAreaRatioY), 
[Beam.IXX](VM.Managed.DAFUL.FE.Property.Beam.md\#VM\_Managed\_DAFUL\_FE\_Property\_Beam\_IXX), 
[Beam.IYZ](VM.Managed.DAFUL.FE.Property.Beam.md\#VM\_Managed\_DAFUL\_FE\_Property\_Beam\_IYZ), 
[Beam.IZZ](VM.Managed.DAFUL.FE.Property.Beam.md\#VM\_Managed\_DAFUL\_FE\_Property\_Beam\_IZZ), 
[Beam.IYY](VM.Managed.DAFUL.FE.Property.Beam.md\#VM\_Managed\_DAFUL\_FE\_Property\_Beam\_IYY), 
[Beam.Area](VM.Managed.DAFUL.FE.Property.Beam.md\#VM\_Managed\_DAFUL\_FE\_Property\_Beam\_Area), 
[Beam.Type](VM.Managed.DAFUL.FE.Property.Beam.md\#VM\_Managed\_DAFUL\_FE\_Property\_Beam\_Type), 
[PropertyBase.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.DAFUL.FE.Property.PropertyBase.md\#VM\_Managed\_DAFUL\_FE\_Property\_PropertyBase\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[PropertyBase.LinkAddedToDocumentCore\(IOwned, bool\)](VM.Managed.DAFUL.FE.Property.PropertyBase.md\#VM\_Managed\_DAFUL\_FE\_Property\_PropertyBase\_LinkAddedToDocumentCore\_VM\_Models\_Pre\_IOwned\_System\_Boolean\_), 
[PropertyBase.\_Material](VM.Managed.DAFUL.FE.Property.PropertyBase.md\#VM\_Managed\_DAFUL\_FE\_Property\_PropertyBase\_\_Material), 
[PropertyBase.Material](VM.Managed.DAFUL.FE.Property.PropertyBase.md\#VM\_Managed\_DAFUL\_FE\_Property\_PropertyBase\_Material), 
[PropertyBase.Type](VM.Managed.DAFUL.FE.Property.PropertyBase.md\#VM\_Managed\_DAFUL\_FE\_Property\_PropertyBase\_Type), 
[FESubEntity.GetNodalBodyForReference\(Reference, Mesh\)](VM.Managed.DAFUL.FE.FESubEntity.md\#VM\_Managed\_DAFUL\_FE\_FESubEntity\_GetNodalBodyForReference\_VM\_Managed\_Reference\_VM\_Managed\_DAFUL\_FE\_Mesh\_), 
[FESubEntity.GetNodalBodyForSubsystem\(SubSystem, Mesh\)](VM.Managed.DAFUL.FE.FESubEntity.md\#VM\_Managed\_DAFUL\_FE\_FESubEntity\_GetNodalBodyForSubsystem\_VM\_Managed\_DAFUL\_SubSystem\_VM\_Managed\_DAFUL\_FE\_Mesh\_), 
[FESubEntity.FEID](VM.Managed.DAFUL.FE.FESubEntity.md\#VM\_Managed\_DAFUL\_FE\_FESubEntity\_FEID), 
[FESubEntity.OwnerMesh](VM.Managed.DAFUL.FE.FESubEntity.md\#VM\_Managed\_DAFUL\_FE\_FESubEntity\_OwnerMesh), 
SubEntity.Initialize\(Unit.ConvertFactor\), 
SubEntity.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\), 
SubEntity.FixUp\(ObjectBase\), 
SubEntity.WriteTemplateImpl\(XmlWriter\), 
SubEntity.ReadTemplateImpl\(XmlReader\), 
SubEntity.Name, 
SubEntity.FullName, 
SubEntity.NonSymmetricName, 
SubEntity.DisplayName, 
SubEntity.IsEnabled, 
SubEntity.Comment, 
Object<ObjectEventCore\>.GetKey\(\), 
Object<ObjectEventCore\>.Initialize\(Unit.ConvertFactor\), 
Object<ObjectEventCore\>.SetIconColor\(Canvas\), 
Object<ObjectEventCore\>.OnDeserialization\(object\), 
Object<ObjectEventCore\>.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
Object<ObjectEventCore\>.RollbackEvent\(\), 
Object<ObjectEventCore\>.OnDeserializedCore\(object\), 
Object<ObjectEventCore\>.Key, 
Object<ObjectEventCore\>.UntypedEventCore, 
Object<ObjectEventCore\>.EventCore, 
Object<ObjectEventCore\>.Attributes, 
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

### BeamL\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.Property.BeamL" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BeamL(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the property BeamL.

### BeamL\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.Property.BeamL" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BeamL()
```

## Properties

### CrossSectionType

Gets or sets the cross section type

```csharp
public CrossSectionType CrossSectionType { get; set; }
```

#### Property Value

 CrossSectionType

### GeomInfoList

Gets or sets the list of geometric informations

```csharp
public Variable[] GeomInfoList { get; set; }
```

#### Property Value

 Variable\[\]

### PoissonRatio

Gets poisson's ratio of iso material type

```csharp
public double PoissonRatio { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### SyncWithGeom

Gets or sets whether synchronize with geometry.

```csharp
public bool SyncWithGeom { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### YDirection

Gets or sets the Y-direction.

```csharp
public Vector YDirection { get; set; }
```

#### Property Value

 Vector

## Methods

### Init\(\)

```csharp
protected override void Init()
```

### Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### LinkRequestUpdate\(object, LinkEventArgs\)

Request for update the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.


