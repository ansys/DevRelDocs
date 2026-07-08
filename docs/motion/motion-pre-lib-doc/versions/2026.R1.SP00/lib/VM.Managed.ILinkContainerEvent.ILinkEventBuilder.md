# Interface ILinkContainerEvent.ILinkEventBuilder
<a id="VM_Managed_ILinkContainerEvent_ILinkEventBuilder"></a>

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

### <a id="VM_Managed_ILinkContainerEvent_ILinkEventBuilder_CreatePostLinkEvent_System_Object_"></a> CreatePostLinkEvent\(object\)

Create the linked object's post-event.

```csharp
EventHandler<LinkEventArgs> CreatePostLinkEvent(object obj)
```

#### Parameters

`obj` object

The object container.

#### Returns

 EventHandler<[LinkEventArgs](VM.Managed.LinkEventArgs.md)\>

### <a id="VM_Managed_ILinkContainerEvent_ILinkEventBuilder_CreatePreLinkEvent_System_Object_"></a> CreatePreLinkEvent\(object\)

Create the linked object's pre-event.

```csharp
EventHandler<LinkEventArgs> CreatePreLinkEvent(object obj)
```

#### Parameters

`obj` object

The object container.

#### Returns

 EventHandler<[LinkEventArgs](VM.Managed.LinkEventArgs.md)\>

