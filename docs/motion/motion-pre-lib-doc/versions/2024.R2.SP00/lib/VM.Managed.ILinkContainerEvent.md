# Interface ILinkContainerEvent

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This interface is to represent the object container events that has a relation with other object.

```csharp
public interface ILinkContainerEvent
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### AddedToDocEventHandler

Gets the event handler for add.

```csharp
EventHandler<AddToDocEventArgs> AddedToDocEventHandler { get; }
```

#### Property Value

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[AddToDocEventArgs](VM.Managed.AddToDocEventArgs.md)\>

### DestroyEventHandler

Gets the event handler for destroy.

```csharp
EventHandler<LinkEventArgs> DestroyEventHandler { get; }
```

#### Property Value

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[LinkEventArgs](VM.Managed.LinkEventArgs.md)\>

### DestroyingEventHandler

Gets the event handler for destroying.

```csharp
EventHandler<LinkEventArgs> DestroyingEventHandler { get; }
```

#### Property Value

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[LinkEventArgs](VM.Managed.LinkEventArgs.md)\>

### RemovedFromDocEventHandler

Gets the event handler for remove.

```csharp
EventHandler<RemoveFromDocEventArgs> RemovedFromDocEventHandler { get; }
```

#### Property Value

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[RemoveFromDocEventArgs](VM.Managed.RemoveFromDocEventArgs.md)\>

### UpdateEventHandler

Gets the event handler for update.

```csharp
EventHandler<LinkEventArgs> UpdateEventHandler { get; }
```

#### Property Value

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[LinkEventArgs](VM.Managed.LinkEventArgs.md)\>

### UpdatingEventHandler

Gets the event handler for updating.

```csharp
EventHandler<LinkEventArgs> UpdatingEventHandler { get; }
```

#### Property Value

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[LinkEventArgs](VM.Managed.LinkEventArgs.md)\>

## Methods

### LinkAddedToDocument\(object, AddToDocEventArgs\)

The event that added to document occured from the linked object.

```csharp
void LinkAddedToDocument(object obj, AddToDocEventArgs arg)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The added object.

`arg` [AddToDocEventArgs](VM.Managed.AddToDocEventArgs.md)

The event information that added to document.

### LinkRemovedFromDocument\(object, RemoveFromDocEventArgs\)

The event that removed from document occured from the linked object.

```csharp
void LinkRemovedFromDocument(object obj, RemoveFromDocEventArgs arg)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The removed object.

`arg` [RemoveFromDocEventArgs](VM.Managed.RemoveFromDocEventArgs.md)

The event information that removed to document.

### LinkRequestDestroy\(object, LinkEventArgs\)

The destroy event occured from the linked object.

```csharp
void LinkRequestDestroy(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The destroy event information.

### LinkRequestDestroying\(object, LinkEventArgs\)

The destroying event occured from the linked object.

```csharp
void LinkRequestDestroying(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The destroy event information.

### LinkRequestUpdate\(object, LinkEventArgs\)

The update event occured from the linked object.

```csharp
void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The update event information.

### LinkRequestUpdating\(object, LinkEventArgs\)

The updatung event occured from the linked object.

```csharp
void LinkRequestUpdating(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The update event information.

### OnAdded

Occurs when [on add].

```csharp
event EventHandler<AddToDocEventArgs> OnAdded
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[AddToDocEventArgs](VM.Managed.AddToDocEventArgs.md)\>

### OnDestroy

Occurs when [on destroy].

```csharp
event EventHandler<LinkEventArgs> OnDestroy
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[LinkEventArgs](VM.Managed.LinkEventArgs.md)\>

### OnDestroying

Occurs when [on destroy].

```csharp
event EventHandler<LinkEventArgs> OnDestroying
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[LinkEventArgs](VM.Managed.LinkEventArgs.md)\>

### OnRemoved

Occurs when [on remove].

```csharp
event EventHandler<RemoveFromDocEventArgs> OnRemoved
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[RemoveFromDocEventArgs](VM.Managed.RemoveFromDocEventArgs.md)\>

### OnUpdate

Occurs when [on update].

```csharp
event EventHandler<LinkEventArgs> OnUpdate
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[LinkEventArgs](VM.Managed.LinkEventArgs.md)\>

### OnUpdating

Occurs when [on update].

```csharp
event EventHandler<LinkEventArgs> OnUpdating
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[LinkEventArgs](VM.Managed.LinkEventArgs.md)\>


