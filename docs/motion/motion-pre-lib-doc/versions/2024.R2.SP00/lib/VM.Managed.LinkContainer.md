# Class LinkContainer

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the object container that has a relation with other object.

```csharp
public abstract class LinkContainer : LinkableBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
[LinkContainer](VM.Managed.LinkContainer.md)

#### Derived

[AttributeBase](VM.Managed.AttributeBase.md), 
[AttributeCollection](VM.Managed.AttributeCollection.md), 
[Container](VM.Managed.Container.md), 
[DirectionBase](VM.Managed.DirectionBase.md), 
[Body.EdgeContainer](VM.Managed.CAD.Body.EdgeContainer.md), 
[Expression](VM.Managed.Expression.md), 
[Body.FaceContainer](VM.Managed.CAD.Body.FaceContainer.md), 
[Body.IndexContainer](VM.Managed.CAD.Body.IndexContainer.md), 
[Topology.IndexContainer](VM.Managed.CAD.Topology.IndexContainer.md), 
[LinkDictionaryCollectionBase<T, TValue, TValueWrapper, TValueConverter\>](VM.Managed.Collections.LinkDictionaryCollectionBase\-4.md), 
[MeshFreeAnalysisLevel](VM.Managed.MeshFreeAnalysisLevel.md), 
[MeshFreeAnalysisLevelGroup](VM.Managed.MeshFreeAnalysisLevelGroup.md), 
[PlaneBase](VM.Managed.PlaneBase.md), 
[PointBase](VM.Managed.PointBase.md), 
[Range](VM.Managed.Range.md), 
[Body.VertexContainer](VM.Managed.CAD.Body.VertexContainer.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider, 
[ILinkContainerEvent](VM.Managed.ILinkContainerEvent.md), 
[IVerifiable](VM.Managed.IVerifiable.md)

#### Inherited Members

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

### LinkContainer\(SerializationInfo, StreamingContext\)

```csharp
protected LinkContainer(SerializationInfo info, StreamingContext context)
```

#### Parameters

`info` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)

`context` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

### LinkContainer\(IOwned\)

Initializes a new instance of the <xref href="VM.Managed.LinkContainer" data-throw-if-not-resolved="false"></xref> class.

```csharp
public LinkContainer(IOwned owner)
```

#### Parameters

`owner` IOwned

The owner object.

### LinkContainer\(\)

Initializes a new instance of the <xref href="VM.Managed.LinkContainer" data-throw-if-not-resolved="false"></xref> class.

```csharp
public LinkContainer()
```

## Properties

### ClearChildInfoBeforeDeserialize

Gets a value indicating whether [clear child info before deserialize].

```csharp
virtual bool ClearChildInfoBeforeDeserialize { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Container

Gets or sets the owner object.

```csharp
public IOwned Container { get; }
```

#### Property Value

 IOwned

### Document

Gets the document that contains the object.

```csharp
public virtual Document Document { get; }
```

#### Property Value

 [Document](VM.Managed.Document.md)

### ID

Gets or sets the id.

```csharp
virtual Identifier ID { get; }
```

#### Property Value

 Identifier

### IsChildExternable

Gets a value indicating whether this instance's child is Externable.

```csharp
virtual bool IsChildExternable { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsExternable

Gets a value indicating whether this instance is Externable.

```csharp
virtual bool IsExternable { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Owner

Gets the owner object.

```csharp
public virtual ObjectBase Owner { get; }
```

#### Property Value

 [ObjectBase](VM.Managed.ObjectBase.md)

## Methods

### CanBeDestroy\(object\)

```csharp
protected virtual bool CanBeDestroy(object A_0)
```

#### Parameters

`A_0` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CustomGetObjectData\(SerializationInfo, StreamingContext\)

Customize the GetObjectData function.

```csharp
protected virtual void CustomGetObjectData(SerializationInfo info, StreamingContext context)
```

#### Parameters

`info` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)

The info.

`context` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

The context.

### Dispose\(bool\)

```csharp
[HandleProcessCorruptedStateExceptions]
protected override void Dispose(bool A_0)
```

#### Parameters

`A_0` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DisposeManagedResources\(\)

Dispose managed resources

```csharp
protected override void DisposeManagedResources()
```

### GetCopy\(object\)

Gets the copied object.

```csharp
protected object GetCopy(object original)
```

#### Parameters

`original` [object](https://learn.microsoft.com/dotnet/api/system.object)

The original object.

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

The copied object.

### GetSerializedData\(SerializationInfo, StreamingContext\)

Load Customized Data function.

```csharp
protected void GetSerializedData(SerializationInfo info, StreamingContext context)
```

#### Parameters

`info` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)

The info.

`context` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

The context.

### GetTargetListForUpdate\(\)

Gets a updated objects.

```csharp
virtual List<IEventProvider> GetTargetListForUpdate()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<IEventProvider\>

### Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public virtual void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### IsSerializableEvent\(Delegate\)

Determines whether is [serializable event] [the specified delegate].

```csharp
protected virtual bool IsSerializableEvent(Delegate del)
```

#### Parameters

`del` [Delegate](https://learn.microsoft.com/dotnet/api/system.delegate)

The delegate.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if is [serializable event] [the specified delegate]; otherwise, <code>false</code>.

### LinkAddedToDocument\(object, AddToDocEventArgs\)

The event that added to document occured from the linked object.

```csharp
protected virtual void LinkAddedToDocument(object objNotifier, AddToDocEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The added object.

`arg` [AddToDocEventArgs](VM.Managed.AddToDocEventArgs.md)

The event information that added to document.

### LinkRemovedFromDocument\(object, RemoveFromDocEventArgs\)

The event that removed from document occured from the linked object.

```csharp
protected virtual void LinkRemovedFromDocument(object objNotifier, RemoveFromDocEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The removed object.

`arg` [RemoveFromDocEventArgs](VM.Managed.RemoveFromDocEventArgs.md)

The event information that removed to document.

### LinkRequestDestroy\(object, LinkEventArgs\)

The destroy event occured from the linked object.

```csharp
protected virtual void LinkRequestDestroy(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The destroy event information.

### LinkRequestDestroying\(object, LinkEventArgs\)

The destroying event occured from the linked object.

```csharp
protected virtual void LinkRequestDestroying(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The destroy event information.

### LinkRequestUpdate\(object, LinkEventArgs\)

The update event occured from the linked object.

```csharp
protected virtual void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The update event information.

### LinkRequestUpdating\(object, LinkEventArgs\)

The updating event occured from the linked object.

```csharp
protected virtual void LinkRequestUpdating(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The update event information.

### OnChildUpdated\(object, LinkEventArgs\)

Called when [child updated].

```csharp
protected virtual void OnChildUpdated(object obj, LinkEventArgs args)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object.

`args` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### OnContainerDestroy\(object, LinkEventArgs\)

Called when [container destroy].

```csharp
protected virtual void OnContainerDestroy(object obj, LinkEventArgs args)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object.

`args` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### OnLinkReserved\(ILink, object, EventArgs\)

```csharp
protected virtual void OnLinkReserved(ILink A_0, object A_1, EventArgs A_2)
```

#### Parameters

`A_0` [ILink](VM.Managed.ILink.md)

`A_1` [object](https://learn.microsoft.com/dotnet/api/system.object)

`A_2` [EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs)

### SetContainer\(IOwned, bool\)

```csharp
public virtual void SetContainer(IOwned owner, bool bBackup)
```

#### Parameters

`owner` IOwned

`bBackup` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetFlagWhenXMLFile\(string, bool\)

Set flag when xml file open

```csharp
public static void SetFlagWhenXMLFile(string strFilePath, bool bValue)
```

#### Parameters

`strFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path.

`bValue` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag.

### SetModified\(\)

Called when object modified.

```csharp
public virtual void SetModified()
```

### SkipUpdateObjectImpl\(\)

Skip the object that updated.

```csharp
virtual bool SkipUpdateObjectImpl()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Verify\(VerifiedResult\)

Verify.

```csharp
protected virtual void Verify(VerifiedResult vr)
```

#### Parameters

`vr` [VerifiedResult](VM.Managed.VerifiedResult.md)

The Verified result.

### raise\_OnAdded\(object, AddToDocEventArgs\)

```csharp
public void raise_OnAdded(object objNotifier, AddToDocEventArgs args)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [AddToDocEventArgs](VM.Managed.AddToDocEventArgs.md)

### raise\_OnDestroy\(object, LinkEventArgs\)

```csharp
public void raise_OnDestroy(object objNotifier, LinkEventArgs args)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

### raise\_OnDestroying\(object, LinkEventArgs\)

```csharp
public void raise_OnDestroying(object objNotifier, LinkEventArgs args)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

### raise\_OnRemoved\(object, RemoveFromDocEventArgs\)

```csharp
public void raise_OnRemoved(object obj, RemoveFromDocEventArgs args)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [RemoveFromDocEventArgs](VM.Managed.RemoveFromDocEventArgs.md)

### raise\_OnUpdate\(object, LinkEventArgs\)

```csharp
public void raise_OnUpdate(object objNotifier, LinkEventArgs args)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

### raise\_OnUpdating\(object, LinkEventArgs\)

```csharp
public void raise_OnUpdating(object objNotifier, LinkEventArgs args)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

### OnAdded

Occurs when [on add].

```csharp
public event EventHandler<AddToDocEventArgs> OnAdded
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[AddToDocEventArgs](VM.Managed.AddToDocEventArgs.md)\>

### OnDestroy

Occurs when [on destroy].

```csharp
public event EventHandler<LinkEventArgs> OnDestroy
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[LinkEventArgs](VM.Managed.LinkEventArgs.md)\>

### OnDestroying

Occurs when [on destroy].

```csharp
public event EventHandler<LinkEventArgs> OnDestroying
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[LinkEventArgs](VM.Managed.LinkEventArgs.md)\>

### OnRemoved

Occurs when [on remove].

```csharp
public event EventHandler<RemoveFromDocEventArgs> OnRemoved
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[RemoveFromDocEventArgs](VM.Managed.RemoveFromDocEventArgs.md)\>

### OnUpdate

Occurs when [on update].

```csharp
public event EventHandler<LinkEventArgs> OnUpdate
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[LinkEventArgs](VM.Managed.LinkEventArgs.md)\>

### OnUpdating

Occurs when [on update].

```csharp
public event EventHandler<LinkEventArgs> OnUpdating
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[LinkEventArgs](VM.Managed.LinkEventArgs.md)\>


