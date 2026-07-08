# Class BeamGroup

Namespace: [VM.Managed.DAFUL.Beam](VM.Managed.DAFUL.Beam.md)  
Assembly: VMDBeamGroup.dll  

Beam Group Class

```csharp
[CanNotOpenWithNewPreprocessor]
public class BeamGroup : Group, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, ISubEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, INamed, INavigatorItem, IVisible, IArgument, IMultiChangable, IDraw, ITransformable, IReportable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
SubEntity ← 
Group ← 
[BeamGroup](VM.Managed.DAFUL.Beam.BeamGroup.md)

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
IVisible, 
IArgument, 
IMultiChangable, 
IDraw, 
ITransformable, 
IReportable

#### Inherited Members

Group.OnLinkReserved\(ILink, object, EventArgs\), 
Group.OnDeserialization\(object\), 
Group.FixUp\(ObjectBase\), 
Group.GetSolidBody\(\), 
Group.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\), 
Group.AddObject\(ObjectBase\), 
Group.RemoveObject\(ObjectBase\), 
Group.AddAction\(GroupActionBase\), 
Group.ActionNames\(\), 
Group.ExcuteAction\(GroupActionBase, bool\), 
Group.ExcuteAction\(string, bool\), 
Group.StateAction\(string\), 
Group.GetLayerImpl\(\), 
Group.SetLayerImpl\(Layer\), 
Group.IsEnabled, 
Group.Objects, 
Group.IsVisible, 
Group.ReferenceType, 
Group.ArgumentType, 
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

### BeamGroup\(\)

Constructor of BeamGroup Class

```csharp
public BeamGroup()
```

### BeamGroup\(string\)

Constructor of BeamGroup Class with Name

```csharp
public BeamGroup(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

BeamGroup Name

## Properties

### BeamInfos

List container of beam information objects

```csharp
public BeamInfo[] BeamInfos { get; set; }
```

#### Property Value

 [BeamInfo](VM.Managed.DAFUL.Beam.BeamInfo.md)\[\]

### DefaultBodyPoints

Default body points when beam group is first created.

```csharp
public List<Vector> DefaultBodyPoints { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<Vector\>

### Hide

Gets or sets a value indicating whether this instance is hide.

```csharp
public bool Hide { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RestoretoStraight

Whether maintain straight status

```csharp
public bool RestoretoStraight { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SyncBeamBodyProp

Whether syncronise beam and body properties

```csharp
public bool SyncBeamBodyProp { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseBeamForce

Whether use beam force or matrix force

```csharp
public bool UseBeamForce { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### AddBeamInfo\(BeamInfo\)

Add beam information

```csharp
public void AddBeamInfo(BeamInfo beamInfo)
```

#### Parameters

`beamInfo` [BeamInfo](VM.Managed.DAFUL.Beam.BeamInfo.md)

Beam information to add

### CreateSolidBody\(string, Vector\)

Create Solid Body

```csharp
public static SolidBody CreateSolidBody(string name, Vector vecPoint)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`vecPoint` Vector

#### Returns

 SolidBody

### Draw\(Canvas\)

Draw Beam information geometry

```csharp
public void Draw(Canvas canvas)
```

#### Parameters

`canvas` Canvas

Canvas to draw beam geometry

### GetLayerImpl\(\)

Gets the layer impl.

```csharp
protected override Layer GetLayerImpl()
```

#### Returns

 Layer

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

Document of Group object is null.

### GetNextBeamInfo\(BeamInfo\)

Get next beam information

```csharp
public BeamInfo GetNextBeamInfo(BeamInfo beamInfo)
```

#### Parameters

`beamInfo` [BeamInfo](VM.Managed.DAFUL.Beam.BeamInfo.md)

Current beam information

#### Returns

 [BeamInfo](VM.Managed.DAFUL.Beam.BeamInfo.md)

Next beam information

### GetPrevBeamInfo\(BeamInfo\)

Get previous beam information

```csharp
public BeamInfo GetPrevBeamInfo(BeamInfo beamInfo)
```

#### Parameters

`beamInfo` [BeamInfo](VM.Managed.DAFUL.Beam.BeamInfo.md)

Current beam information

#### Returns

 [BeamInfo](VM.Managed.DAFUL.Beam.BeamInfo.md)

Previous beam information

### IsFirstBeamInfo\(BeamInfo\)

Whether beam element is a first entity among current beam group

```csharp
public bool IsFirstBeamInfo(BeamInfo beamInfo)
```

#### Parameters

`beamInfo` [BeamInfo](VM.Managed.DAFUL.Beam.BeamInfo.md)

Currnet beam information

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

It's true or false

### IsFirstBody\(SolidBody\)

Whether body is a first entity among all bodies

```csharp
public bool IsFirstBody(SolidBody solidBody)
```

#### Parameters

`solidBody` SolidBody

Body to check

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

It's true or false

### IsLastBeamInfo\(BeamInfo\)

Whether beam element is a last entity among current beam group

```csharp
public bool IsLastBeamInfo(BeamInfo beamInfo)
```

#### Parameters

`beamInfo` [BeamInfo](VM.Managed.DAFUL.Beam.BeamInfo.md)

Currnet beam information

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

It's true or false

### IsLastBody\(SolidBody\)

Whether body is a last entity among all bodies

```csharp
public bool IsLastBody(SolidBody solidBody)
```

#### Parameters

`solidBody` SolidBody

Body to check

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

It's true or false

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

### LinkRequestUpdate\(object, LinkEventArgs\)

Request to update the linked object.

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

### SetLayerImpl\(Layer\)

Implemented function to set layer

```csharp
protected override void SetLayerImpl(Layer layer)
```

#### Parameters

`layer` Layer

Layer Object

### UpdateBeamElementsOfAll\(\)

Update beam elements of all

```csharp
public void UpdateBeamElementsOfAll()
```

### UpdateBeamNodesOfAll\(\)

Update beam nodes of all

```csharp
public void UpdateBeamNodesOfAll()
```


