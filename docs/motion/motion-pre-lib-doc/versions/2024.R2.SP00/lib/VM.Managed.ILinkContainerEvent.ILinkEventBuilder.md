# Interface ILinkContainerEvent.ILinkEventBuilder

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This interface is to represent the linked object's evnet builder.

```csharp
public interface ILinkContainerEvent.ILinkEventBuilder
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### CreatePostLinkEvent\(object\)

Create the linked object's post-event.

```csharp
EventHandler<LinkEventArgs> CreatePostLinkEvent(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object container.

#### Returns

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[LinkEventArgs](VM.Managed.LinkEventArgs.md)\>

### CreatePreLinkEvent\(object\)

Create the linked object's pre-event.

```csharp
EventHandler<LinkEventArgs> CreatePreLinkEvent(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object container.

#### Returns

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[LinkEventArgs](VM.Managed.LinkEventArgs.md)\>


