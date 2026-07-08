# Class LinkEventArgs

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the argument of event from linked object.

```csharp
public class LinkEventArgs : EventArgs
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs) ← 
[LinkEventArgs](VM.Managed.LinkEventArgs.md)

#### Derived

[DestroyEventArgs](VM.Managed.DestroyEventArgs.md), 
[GetRelationInfoEventArgs](VM.Managed.GetRelationInfoEventArgs.md), 
[NameChangedEventArgs](VM.Managed.NameChangedEventArgs.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### LinkEventArgs\(NotifyReason, object, LinkEventArgs, object\)

Initializes a new instance of the <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> class.

```csharp
public LinkEventArgs(NotifyReason reason, object extra, LinkEventArgs innerArgs, object obEventPrevious)
```

#### Parameters

`reason` [NotifyReason](VM.Managed.NotifyReason.md)

The type of event.

`extra` [object](https://learn.microsoft.com/dotnet/api/system.object)

The extra object information.

`innerArgs` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The inner event.

`obEventPrevious` [object](https://learn.microsoft.com/dotnet/api/system.object)

The previous linked object.

### LinkEventArgs\(NotifyReason, object\)

Initializes a new instance of the <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> class.

```csharp
public LinkEventArgs(NotifyReason reason, object extra)
```

#### Parameters

`reason` [NotifyReason](VM.Managed.NotifyReason.md)

The type of event.

`extra` [object](https://learn.microsoft.com/dotnet/api/system.object)

The extra object information.

### LinkEventArgs\(NotifyReason, LinkEventArgs, object\)

Initializes a new instance of the <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> class.

```csharp
public LinkEventArgs(NotifyReason reason, LinkEventArgs innerArgs, object obEventPrevious)
```

#### Parameters

`reason` [NotifyReason](VM.Managed.NotifyReason.md)

The type of event.

`innerArgs` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The inner event.

`obEventPrevious` [object](https://learn.microsoft.com/dotnet/api/system.object)

The previous linked object.

### LinkEventArgs\(NotifyReason\)

Initializes a new instance of the <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> class.

```csharp
public LinkEventArgs(NotifyReason reason)
```

#### Parameters

`reason` [NotifyReason](VM.Managed.NotifyReason.md)

The type of event.

## Properties

### EntitiesForCircularReference

Gets or sets the objects for circular reference.

```csharp
public HashSet<ObjectBase> EntitiesForCircularReference { get; set; }
```

#### Property Value

 [HashSet](https://learn.microsoft.com/dotnet/api/system.collections.generic.hashset\-1)<[ObjectBase](VM.Managed.ObjectBase.md)\>

### Extra

Gets the extra object information.

```csharp
public object Extra { get; }
```

#### Property Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### InnerEventArgument

Gets the inner event.

```csharp
public LinkEventArgs InnerEventArgument { get; }
```

#### Property Value

 [LinkEventArgs](VM.Managed.LinkEventArgs.md)

### PreviousEventNotifier

Gets the previous linked object.

```csharp
public object PreviousEventNotifier { get; }
```

#### Property Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### Reason

Gets the type of evnet.

```csharp
public NotifyReason Reason { get; }
```

#### Property Value

 [NotifyReason](VM.Managed.NotifyReason.md)

## Methods

### IsDestroying\(object\)

```csharp
public bool IsDestroying(object objNotifier)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsUpdating\(object\)

```csharp
public bool IsUpdating(object objNotifier)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


