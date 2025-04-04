# Class ChainedSegment

Namespace: [VM.Managed.DAFUL.Chained](VM.Managed.DAFUL.Chained.md)  
Assembly: VMDChainedBase.dll  

This class is to represent the data for ChainedSegment.

```csharp
public class ChainedSegment : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[ChainedSegment](VM.Managed.DAFUL.Chained.ChainedSegment.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider, 
ILinkContainerEvent, 
IVerifiable

#### Inherited Members

LinkContainer.SetModified\(\), 
LinkContainer.raise\_OnUpdating\(object, LinkEventArgs\), 
LinkContainer.raise\_OnUpdate\(object, LinkEventArgs\), 
LinkContainer.raise\_OnDestroying\(object, LinkEventArgs\), 
LinkContainer.raise\_OnDestroy\(object, LinkEventArgs\), 
LinkContainer.raise\_OnAdded\(object, AddToDocEventArgs\), 
LinkContainer.raise\_OnRemoved\(object, RemoveFromDocEventArgs\), 
LinkContainer.GetTargetListForUpdate\(\), 
LinkContainer.SkipUpdateObjectImpl\(\), 
LinkContainer.Initialize\(Unit.ConvertFactor\), 
LinkContainer.SetFlagWhenXMLFile\(string, bool\), 
LinkContainer.IsSerializableEvent\(Delegate\), 
LinkContainer.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
LinkContainer.GetSerializedData\(SerializationInfo, StreamingContext\), 
LinkContainer.LinkRequestUpdating\(object, LinkEventArgs\), 
LinkContainer.LinkRequestUpdate\(object, LinkEventArgs\), 
LinkContainer.LinkRequestDestroying\(object, LinkEventArgs\), 
LinkContainer.LinkRequestDestroy\(object, LinkEventArgs\), 
LinkContainer.LinkAddedToDocument\(object, AddToDocEventArgs\), 
LinkContainer.LinkRemovedFromDocument\(object, RemoveFromDocEventArgs\), 
LinkContainer.OnLinkReserved\(ILink, object, EventArgs\), 
LinkContainer.CanBeDestroy\(object\), 
LinkContainer.DisposeManagedResources\(\), 
LinkContainer.SetContainer\(IOwned, bool\), 
LinkContainer.OnChildUpdated\(object, LinkEventArgs\), 
LinkContainer.OnContainerDestroy\(object, LinkEventArgs\), 
LinkContainer.OnDeserialization\(object\), 
LinkContainer.Verify\(VerifiedResult\), 
LinkContainer.GetCopy\(object\), 
LinkContainer.Dispose\(bool\), 
LinkContainer.ClearChildInfoBeforeDeserialize, 
LinkContainer.Container, 
LinkContainer.Owner, 
LinkContainer.Document, 
LinkContainer.ID, 
LinkContainer.IsChildExternable, 
LinkContainer.IsExternable, 
LinkContainer.OnRemoved, 
LinkContainer.OnAdded, 
LinkContainer.OnDestroy, 
LinkContainer.OnDestroying, 
LinkContainer.OnUpdate, 
LinkContainer.OnUpdating, 
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

### ChainedSegment\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Chained.ChainedSegment" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ChainedSegment()
```

## Properties

### Connectors

Gets or sets the list of connector

```csharp
public IList<ObjectBase> Connectors { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<ObjectBase\>

### Contacts

Gets or sets the list of contact.

```csharp
public IList<ObjectBase> Contacts { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<ObjectBase\>

### GeometryReference

Gets or sets the geometry reference.

```csharp
public ObjectBase GeometryReference { get; set; }
```

#### Property Value

 ObjectBase

### SegmentHeight1

Gets or sets the segment height1.

```csharp
public ExpressionValueVariable SegmentHeight1 { get; set; }
```

#### Property Value

 ExpressionValueVariable

### SegmentHeight2

Gets or sets the segment height2.

```csharp
public ExpressionValueVariable SegmentHeight2 { get; set; }
```

#### Property Value

 ExpressionValueVariable

### SegmentLength

Gets or sets the segment length.

```csharp
public ExpressionValueVariable SegmentLength { get; set; }
```

#### Property Value

 ExpressionValueVariable

### Transforms

Gets or sets the list of transform

```csharp
public IList<ObjectBase> Transforms { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<ObjectBase\>

## Methods

### Add\_Connector\(ObjectBase\)

Add the connector

```csharp
public void Add_Connector(ObjectBase obj)
```

#### Parameters

`obj` ObjectBase

The connector

### Add\_Connectors\(ObjectBase\[\]\)

Add the connector`s link list.

```csharp
public void Add_Connectors(ObjectBase[] obj)
```

#### Parameters

`obj` ObjectBase\[\]

The array of connector.

### Add\_Contact\(ObjectBase\)

Add the object for contact.

```csharp
public void Add_Contact(ObjectBase obj)
```

#### Parameters

`obj` ObjectBase

The Faceset or PatchSet.

### Add\_Contacts\(ObjectBase\[\]\)

Add the contact`s link list.

```csharp
public void Add_Contacts(ObjectBase[] obj)
```

#### Parameters

`obj` ObjectBase\[\]

The array of contact.

### Add\_Transform\(ObjectBase\)

Add the Transform.

```csharp
public void Add_Transform(ObjectBase obj)
```

#### Parameters

`obj` ObjectBase

The DesignFrame.

### Add\_Transforms\(ObjectBase\[\]\)

Add the Transform`s array.

```csharp
public void Add_Transforms(ObjectBase[] obj)
```

#### Parameters

`obj` ObjectBase\[\]

The array of DesignFrame.

### Initialize\_Connectors\(\)

Initializes the list of connector.

```csharp
public void Initialize_Connectors()
```

### Initialize\_Contacts\(\)

Initializes the list of contact.

```csharp
public void Initialize_Contacts()
```

### Initialize\_Transforms\(\)

Initializes the list of Transform.

```csharp
public void Initialize_Transforms()
```

### LinkRequestDestroying\(object, LinkEventArgs\)

The destroying event occured from the linked object.

```csharp
protected override void LinkRequestDestroying(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The destroy event information.

### OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.


