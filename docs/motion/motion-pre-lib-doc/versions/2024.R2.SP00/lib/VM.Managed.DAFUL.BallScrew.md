# Class BallScrew

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDBallPlacing.dll  

This class is to represent the ball screw.

```csharp
public class BallScrew : Entity<PropertyBallScrew>, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<EntityEventCore\> ← 
ContainerObject<EntityEventCore\> ← 
EntityBase ← 
Entity<PropertyBallScrew\> ← 
[BallScrew](VM.Managed.DAFUL.BallScrew.md)

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
IGroup

#### Inherited Members

Entity<PropertyBallScrew\>.Initialize\(Unit.ConvertFactor\), 
Entity<PropertyBallScrew\>.GetUnnamedObjectName\(object\), 
Entity<PropertyBallScrew\>.FindLocal\(string\), 
Entity<PropertyBallScrew\>.Property, 
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

### BallScrew\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.BallScrew" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BallScrew()
```

## Properties

### BallDiameter

Gets or sets the ball diameter.

```csharp
public ExpressionValueVariable BallDiameter { get; set; }
```

#### Property Value

 ExpressionValueVariable

### DirectionX

Gets or sets the directionX.

```csharp
public Vector DirectionX { get; set; }
```

#### Property Value

 Vector

### DirectionZ

Gets or sets the directionZ.

```csharp
public Vector DirectionZ { get; set; }
```

#### Property Value

 Vector

### HasLayerExplicitly

Gets a value indicating whether object has a layer explicitly.

```csharp
protected override bool HasLayerExplicitly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsRight

Gets or sets a value indicating whether screw is right handed.

```csharp
public bool IsRight { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Lead

Gets or sets the lead.

```csharp
public ExpressionValueVariable Lead { get; set; }
```

#### Property Value

 ExpressionValueVariable

### Nut

Gets or sets the nut.

```csharp
public SolidBody Nut { get; set; }
```

#### Property Value

 SolidBody

### NutChamperAngle

Gets or sets the nut champer angle.

```csharp
public ExpressionValueVariable NutChamperAngle { get; set; }
```

#### Property Value

 ExpressionValueVariable

### NutConformity

Gets or sets the nut conformity.

```csharp
public ExpressionValueVariable NutConformity { get; set; }
```

#### Property Value

 ExpressionValueVariable

### NutContactAngle

Gets or sets the nut contact angle.

```csharp
public ExpressionValueVariable NutContactAngle { get; set; }
```

#### Property Value

 ExpressionValueVariable

### NutInnerRadius

Gets or sets the nut inner radius.

```csharp
public ExpressionValueVariable NutInnerRadius { get; set; }
```

#### Property Value

 ExpressionValueVariable

### NutLength

Gets or sets the nut length.

```csharp
public ExpressionValueVariable NutLength { get; set; }
```

#### Property Value

 ExpressionValueVariable

### NutOD

Gets or sets the nut OD.

```csharp
public ExpressionValueVariable NutOD { get; set; }
```

#### Property Value

 ExpressionValueVariable

### NutPCD

Gets or sets the nut PCD.

```csharp
public ExpressionValueVariable NutPCD { get; set; }
```

#### Property Value

 ExpressionValueVariable

### NutScrewEndLength

Gets or sets the nut screw end length.

```csharp
public ExpressionValueVariable NutScrewEndLength { get; set; }
```

#### Property Value

 ExpressionValueVariable

### NutScrewStartLength

Gets or sets the nut screw start length.

```csharp
public ExpressionValueVariable NutScrewStartLength { get; set; }
```

#### Property Value

 ExpressionValueVariable

### NutShoulderRadius

Gets or sets the nut shoulder radius.

```csharp
public ExpressionValueVariable NutShoulderRadius { get; set; }
```

#### Property Value

 ExpressionValueVariable

### NutShoulderType

Gets or sets the nut shoulder type.

```csharp
public ShoulderType NutShoulderType { get; set; }
```

#### Property Value

 [ShoulderType](VM.Managed.DAFUL.ShoulderType.md)

### NutStartArcAngle

Gets or sets the nut start arc angle.

```csharp
public ExpressionValueVariable NutStartArcAngle { get; set; }
```

#### Property Value

 ExpressionValueVariable

### NutStartLength

Gets or sets the nut start length.

```csharp
public ExpressionValueVariable NutStartLength { get; set; }
```

#### Property Value

 ExpressionValueVariable

### Shaft

Gets or sets the shaft.

```csharp
public SolidBody Shaft { get; set; }
```

#### Property Value

 SolidBody

### ShaftChamperAngle

Gets or sets the shaft champer angle.

```csharp
public ExpressionValueVariable ShaftChamperAngle { get; set; }
```

#### Property Value

 ExpressionValueVariable

### ShaftConformity

Gets or sets the shaft conformity.

```csharp
public ExpressionValueVariable ShaftConformity { get; set; }
```

#### Property Value

 ExpressionValueVariable

### ShaftContactAngle

Gets or sets the shaft contact angle.

```csharp
public ExpressionValueVariable ShaftContactAngle { get; set; }
```

#### Property Value

 ExpressionValueVariable

### ShaftLength

Gets or sets the shaft length.

```csharp
public ExpressionValueVariable ShaftLength { get; set; }
```

#### Property Value

 ExpressionValueVariable

### ShaftOuterRadius

Gets or sets the shaft outer radius.

```csharp
public ExpressionValueVariable ShaftOuterRadius { get; set; }
```

#### Property Value

 ExpressionValueVariable

### ShaftPCD

Gets or sets the shaft PCD.

```csharp
public ExpressionValueVariable ShaftPCD { get; set; }
```

#### Property Value

 ExpressionValueVariable

### ShaftReferencePosition

Gets or sets the shaft reference position.

```csharp
public PointBase ShaftReferencePosition { get; set; }
```

#### Property Value

 PointBase

### ShaftScrewEndLength

Gets or sets the shaft screw end length.

```csharp
public ExpressionValueVariable ShaftScrewEndLength { get; set; }
```

#### Property Value

 ExpressionValueVariable

### ShaftScrewStartAngle

Gets or sets the shaft screw start angle.

```csharp
public ExpressionValueVariable ShaftScrewStartAngle { get; set; }
```

#### Property Value

 ExpressionValueVariable

### ShaftScrewStartLength

Gets or sets the shaft screw start length.

```csharp
public ExpressionValueVariable ShaftScrewStartLength { get; set; }
```

#### Property Value

 ExpressionValueVariable

### ShaftShoulderRadius

Gets or sets the shaft shoulder radius.

```csharp
public ExpressionValueVariable ShaftShoulderRadius { get; set; }
```

#### Property Value

 ExpressionValueVariable

### ShaftShoulderType

Gets or sets the shaft shoulder type.

```csharp
public ShoulderType ShaftShoulderType { get; set; }
```

#### Property Value

 [ShoulderType](VM.Managed.DAFUL.ShoulderType.md)

### ShaftStartArcAngle

Gets or sets the shaft start arc angle.

```csharp
public ExpressionValueVariable ShaftStartArcAngle { get; set; }
```

#### Property Value

 ExpressionValueVariable

## Methods

### Create\(Document3D\)

Create Shaft and Nut

```csharp
public void Create(Document3D document3D)
```

#### Parameters

`document3D` Document3D

The document.

### FixUp\(ObjectBase\)

Before destroy the old object, perform a work.

```csharp
public override bool FixUp(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

The old object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### LinkRequestDestroy\(object, LinkEventArgs\)

Request for destroy the linked object.

```csharp
protected override void LinkRequestDestroy(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.


