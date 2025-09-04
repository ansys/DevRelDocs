#  Class NameChangedEventArgs

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the event information that name changed from linked object.

```csharp
public sealed class NameChangedEventArgs : LinkEventArgs
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs) ← 
[LinkEventArgs](VM.Managed.LinkEventArgs.md) ← 
[NameChangedEventArgs](VM.Managed.NameChangedEventArgs.md)

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

### <a id="VM_Managed_NameChangedEventArgs__ctor_System_String_VM_Managed_LinkEventArgs_System_Object_"></a> NameChangedEventArgs\(string, LinkEventArgs, object\)

Initializes a new instance of the <xref href="VM.Managed.NameChangedEventArgs" data-throw-if-not-resolved="false"></xref> class.

```csharp
public NameChangedEventArgs(string strOldName, LinkEventArgs innerArgs, object obEventPrevious)
```

#### Parameters

`strOldName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The previous name information.

`innerArgs` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The inner event.

`obEventPrevious` [object](https://learn.microsoft.com/dotnet/api/system.object)

The previous linked object.

### <a id="VM_Managed_NameChangedEventArgs__ctor_System_String_"></a> NameChangedEventArgs\(string\)

Initializes a new instance of the <xref href="VM.Managed.NameChangedEventArgs" data-throw-if-not-resolved="false"></xref> class.

```csharp
public NameChangedEventArgs(string strOldName)
```

#### Parameters

`strOldName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The previous name information.

## Properties

### <a id="VM_Managed_NameChangedEventArgs_OldName"></a> OldName

Gets the previous name information.

```csharp
public string OldName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

