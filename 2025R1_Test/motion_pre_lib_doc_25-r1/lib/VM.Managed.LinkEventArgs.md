#  Class LinkEventArgs

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

### <a id="VM_Managed_LinkEventArgs__ctor_VM_Managed_NotifyReason_System_Object_VM_Managed_LinkEventArgs_System_Object_"></a> LinkEventArgs\(NotifyReason, object, LinkEventArgs, object\)

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

### <a id="VM_Managed_LinkEventArgs__ctor_VM_Managed_Document_VM_Managed_NotifyReason_System_Object_"></a> LinkEventArgs\(Document, NotifyReason, object\)

Initializes a new instance of the <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> class.

```csharp
public LinkEventArgs(Document document, NotifyReason reason, object extra)
```

#### Parameters

`document` [Document](VM.Managed.Document.md)

The document of event.

`reason` [NotifyReason](VM.Managed.NotifyReason.md)

The type of event.

`extra` [object](https://learn.microsoft.com/dotnet/api/system.object)

The extra object information.

### <a id="VM_Managed_LinkEventArgs__ctor_VM_Managed_NotifyReason_System_Object_"></a> LinkEventArgs\(NotifyReason, object\)

Initializes a new instance of the <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> class.

```csharp
public LinkEventArgs(NotifyReason reason, object extra)
```

#### Parameters

`reason` [NotifyReason](VM.Managed.NotifyReason.md)

The type of event.

`extra` [object](https://learn.microsoft.com/dotnet/api/system.object)

The extra object information.

### <a id="VM_Managed_LinkEventArgs__ctor_VM_Managed_NotifyReason_VM_Managed_LinkEventArgs_System_Object_"></a> LinkEventArgs\(NotifyReason, LinkEventArgs, object\)

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

### <a id="VM_Managed_LinkEventArgs__ctor_VM_Managed_Document_VM_Managed_NotifyReason_"></a> LinkEventArgs\(Document, NotifyReason\)

Initializes a new instance of the <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> class.

```csharp
public LinkEventArgs(Document document, NotifyReason reason)
```

#### Parameters

`document` [Document](VM.Managed.Document.md)

The document of event.

`reason` [NotifyReason](VM.Managed.NotifyReason.md)

The type of event.

### <a id="VM_Managed_LinkEventArgs__ctor_VM_Managed_NotifyReason_"></a> LinkEventArgs\(NotifyReason\)

Initializes a new instance of the <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> class.

```csharp
public LinkEventArgs(NotifyReason reason)
```

#### Parameters

`reason` [NotifyReason](VM.Managed.NotifyReason.md)

The type of event.

## Properties

### <a id="VM_Managed_LinkEventArgs_Document"></a> Document

Gets the document.

```csharp
public Document Document { get; }
```

#### Property Value

 [Document](VM.Managed.Document.md)

### <a id="VM_Managed_LinkEventArgs_EntitiesForCircularReference"></a> EntitiesForCircularReference

Gets or sets the objects for circular reference.

```csharp
public HashSet<ObjectBase> EntitiesForCircularReference { get; set; }
```

#### Property Value

 [HashSet](https://learn.microsoft.com/dotnet/api/system.collections.generic.hashset\-1)<[ObjectBase](VM.Managed.ObjectBase.md)\>

### <a id="VM_Managed_LinkEventArgs_Extra"></a> Extra

Gets the extra object information.

```csharp
public object Extra { get; }
```

#### Property Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="VM_Managed_LinkEventArgs_InnerEventArgument"></a> InnerEventArgument

Gets the inner event.

```csharp
public LinkEventArgs InnerEventArgument { get; }
```

#### Property Value

 [LinkEventArgs](VM.Managed.LinkEventArgs.md)

### <a id="VM_Managed_LinkEventArgs_PreviousEventNotifier"></a> PreviousEventNotifier

Gets the previous linked object.

```csharp
public object PreviousEventNotifier { get; }
```

#### Property Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="VM_Managed_LinkEventArgs_Reason"></a> Reason

Gets the type of evnet.

```csharp
public NotifyReason Reason { get; }
```

#### Property Value

 [NotifyReason](VM.Managed.NotifyReason.md)

## Methods

### <a id="VM_Managed_LinkEventArgs_IsDestroying_System_Object_"></a> IsDestroying\(object\)

```csharp
public bool IsDestroying(object objNotifier)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_LinkEventArgs_IsUpdating_System_Object_"></a> IsUpdating\(object\)

```csharp
public bool IsUpdating(object objNotifier)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

