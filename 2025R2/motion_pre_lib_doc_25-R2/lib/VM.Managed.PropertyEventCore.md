#  Class PropertyEventCore

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMObjBase.dll  

This class is to represent the event core for property.

```csharp
public class PropertyEventCore : ObjectEventCore, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IHistoryObjectSerializableDelegate
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObjectEventCore ← 
[PropertyEventCore](VM.Managed.PropertyEventCore.md)

#### Implements

IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider, 
ILinkContainerEvent, 
IHistoryObjectSerializableDelegate

#### Inherited Members

ObjectEventCore.GetObjectDataImpl\(SerializationInfo, StreamingContext\), 
ObjectEventCore.SetContainer\(IOwned, bool\), 
ObjectEventCore.GetTargetListForUpdate\(\), 
ObjectEventCore.SkipUpdateObjectImpl\(\), 
ObjectEventCore.GetInvocationUpdateTargetList\(\), 
ObjectEventCore.GetInvocationDestroyTargetList\(\), 
ObjectEventCore.RemoveInvocationUpdateTargetList\(\), 
ObjectEventCore.RemoveInvocationDestroyTargetList\(ObjectBase\), 
ObjectEventCore.ReplaceImpl\(ObjectEventCore\), 
ObjectEventCore.Swap\(ObjectEventCore, ObjectEventCore\), 
ObjectEventCore.Dispose\(bool\), 
ObjectEventCore.Dispose\(\), 
ObjectEventCore.IsChildExternable, 
ObjectEventCore.IsExternable, 
ObjectEventCore.Document, 
ObjectEventCore.Owner, 
ObjectEventCore.Container, 
ObjectEventCore.Object

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_PropertyEventCore__ctor"></a> PropertyEventCore\(\)

Initializes a new instance of the <xref href="VM.Managed.PropertyEventCore" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PropertyEventCore()
```

### <a id="VM_Managed_PropertyEventCore__ctor_System_Runtime_Serialization_SerializationInfo_System_Runtime_Serialization_StreamingContext_"></a> PropertyEventCore\(SerializationInfo, StreamingContext\)

Initializes a new instance of the <xref href="VM.Managed.PropertyEventCore" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected PropertyEventCore(SerializationInfo info, StreamingContext context)
```

#### Parameters

`info` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)

The info.

`context` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

The context.

