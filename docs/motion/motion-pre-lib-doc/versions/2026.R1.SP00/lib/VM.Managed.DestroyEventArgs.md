# Class DestroyEventArgs
<a id="VM_Managed_DestroyEventArgs"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the event information that deleted from linked object.

```csharp
public sealed class DestroyEventArgs : LinkEventArgs
```

#### Inheritance

object ← 
EventArgs ← 
[LinkEventArgs](VM.Managed.LinkEventArgs.md) ← 
[DestroyEventArgs](VM.Managed.DestroyEventArgs.md)

#### Inherited Members

[LinkEventArgs.IsUpdating\(object\)](VM.Managed.LinkEventArgs.md\#VM\_Managed\_LinkEventArgs\_IsUpdating\_System\_Object\_), 
[LinkEventArgs.IsDestroying\(object\)](VM.Managed.LinkEventArgs.md\#VM\_Managed\_LinkEventArgs\_IsDestroying\_System\_Object\_), 
[LinkEventArgs.ExistUpdatingTarget\(object\)](VM.Managed.LinkEventArgs.md\#VM\_Managed\_LinkEventArgs\_ExistUpdatingTarget\_System\_Object\_), 
[LinkEventArgs.ExistDestroyingTarget\(object\)](VM.Managed.LinkEventArgs.md\#VM\_Managed\_LinkEventArgs\_ExistDestroyingTarget\_System\_Object\_), 
[LinkEventArgs.EntitiesForCircularReference](VM.Managed.LinkEventArgs.md\#VM\_Managed\_LinkEventArgs\_EntitiesForCircularReference), 
[LinkEventArgs.PreviousEventNotifier](VM.Managed.LinkEventArgs.md\#VM\_Managed\_LinkEventArgs\_PreviousEventNotifier), 
[LinkEventArgs.InnerEventArgument](VM.Managed.LinkEventArgs.md\#VM\_Managed\_LinkEventArgs\_InnerEventArgument), 
[LinkEventArgs.Extra](VM.Managed.LinkEventArgs.md\#VM\_Managed\_LinkEventArgs\_Extra), 
[LinkEventArgs.Document](VM.Managed.LinkEventArgs.md\#VM\_Managed\_LinkEventArgs\_Document), 
[LinkEventArgs.Reason](VM.Managed.LinkEventArgs.md\#VM\_Managed\_LinkEventArgs\_Reason)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DestroyEventArgs__ctor_VM_Managed_LinkEventArgs_System_Object_System_Object_"></a> DestroyEventArgs\(LinkEventArgs, object, object\)

Initializes a new instance of the <xref href="VM.Managed.DestroyEventArgs" data-throw-if-not-resolved="false"></xref> class.

```csharp
public DestroyEventArgs(LinkEventArgs innerArgs, object obEventPrevious, object extra)
```

#### Parameters

`innerArgs` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The inner argument.

`obEventPrevious` object

The previous event.

`extra` object

The extra data.

### <a id="VM_Managed_DestroyEventArgs__ctor_VM_Managed_LinkEventArgs_System_Object_"></a> DestroyEventArgs\(LinkEventArgs, object\)

Initializes a new instance of the <xref href="VM.Managed.DestroyEventArgs" data-throw-if-not-resolved="false"></xref> class.

```csharp
public DestroyEventArgs(LinkEventArgs innerArgs, object obEventPrevious)
```

#### Parameters

`innerArgs` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The inner argument.

`obEventPrevious` object

The previous event.

### <a id="VM_Managed_DestroyEventArgs__ctor_VM_Managed_Document_System_Object_"></a> DestroyEventArgs\(Document, object\)

Initializes a new instance of the <xref href="VM.Managed.DestroyEventArgs" data-throw-if-not-resolved="false"></xref> class.

```csharp
public DestroyEventArgs(Document document, object extra)
```

#### Parameters

`document` [Document](VM.Managed.Document.md)

The document.

`extra` object

The extra data.

## Properties

### <a id="VM_Managed_DestroyEventArgs_Type"></a> Type

Gets the type of destroy method.

```csharp
public DestroyType Type { get; }
```

#### Property Value

 [DestroyType](VM.Managed.DestroyType.md)

