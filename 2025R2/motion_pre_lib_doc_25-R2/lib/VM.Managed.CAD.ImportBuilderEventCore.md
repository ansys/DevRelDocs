#  Class ImportBuilderEventCore

Namespace: [VM.Managed.CAD](VM.Managed.CAD.md)  
Assembly: VMAppCore.dll  

This class is to represent the event core for import builder.

```csharp
public class ImportBuilderEventCore : ObjectEventCore, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IHistoryObjectSerializableDelegate
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ObjectEventCore](VM.Managed.ObjectEventCore.md) ← 
[ImportBuilderEventCore](VM.Managed.CAD.ImportBuilderEventCore.md)

#### Implements

IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider, 
[ILinkContainerEvent](VM.Managed.ILinkContainerEvent.md), 
IHistoryObjectSerializableDelegate

#### Inherited Members

[ObjectEventCore.GetObjectDataImpl\(SerializationInfo, StreamingContext\)](VM.Managed.ObjectEventCore.md\#VM\_Managed\_ObjectEventCore\_GetObjectDataImpl\_System\_Runtime\_Serialization\_SerializationInfo\_System\_Runtime\_Serialization\_StreamingContext\_), 
[ObjectEventCore.SetContainer\(IOwned, bool\)](VM.Managed.ObjectEventCore.md\#VM\_Managed\_ObjectEventCore\_SetContainer\_VM\_Models\_Pre\_IOwned\_System\_Boolean\_), 
[ObjectEventCore.GetTargetListForUpdate\(\)](VM.Managed.ObjectEventCore.md\#VM\_Managed\_ObjectEventCore\_GetTargetListForUpdate), 
[ObjectEventCore.SkipUpdateObjectImpl\(\)](VM.Managed.ObjectEventCore.md\#VM\_Managed\_ObjectEventCore\_SkipUpdateObjectImpl), 
[ObjectEventCore.GetInvocationUpdateTargetList\(\)](VM.Managed.ObjectEventCore.md\#VM\_Managed\_ObjectEventCore\_GetInvocationUpdateTargetList), 
[ObjectEventCore.GetInvocationDestroyTargetList\(\)](VM.Managed.ObjectEventCore.md\#VM\_Managed\_ObjectEventCore\_GetInvocationDestroyTargetList), 
[ObjectEventCore.RemoveInvocationUpdateTargetList\(\)](VM.Managed.ObjectEventCore.md\#VM\_Managed\_ObjectEventCore\_RemoveInvocationUpdateTargetList), 
[ObjectEventCore.RemoveInvocationDestroyTargetList\(ObjectBase\)](VM.Managed.ObjectEventCore.md\#VM\_Managed\_ObjectEventCore\_RemoveInvocationDestroyTargetList\_VM\_Managed\_ObjectBase\_), 
[ObjectEventCore.ReplaceImpl\(ObjectEventCore\)](VM.Managed.ObjectEventCore.md\#VM\_Managed\_ObjectEventCore\_ReplaceImpl\_VM\_Managed\_ObjectEventCore\_), 
[ObjectEventCore.Swap\(ObjectEventCore, ObjectEventCore\)](VM.Managed.ObjectEventCore.md\#VM\_Managed\_ObjectEventCore\_Swap\_VM\_Managed\_ObjectEventCore\_VM\_Managed\_ObjectEventCore\_), 
[ObjectEventCore.Dispose\(bool\)](VM.Managed.ObjectEventCore.md\#VM\_Managed\_ObjectEventCore\_Dispose\_System\_Boolean\_), 
[ObjectEventCore.Dispose\(\)](VM.Managed.ObjectEventCore.md\#VM\_Managed\_ObjectEventCore\_Dispose), 
[ObjectEventCore.IsChildExternable](VM.Managed.ObjectEventCore.md\#VM\_Managed\_ObjectEventCore\_IsChildExternable), 
[ObjectEventCore.IsExternable](VM.Managed.ObjectEventCore.md\#VM\_Managed\_ObjectEventCore\_IsExternable), 
[ObjectEventCore.Document](VM.Managed.ObjectEventCore.md\#VM\_Managed\_ObjectEventCore\_Document), 
[ObjectEventCore.Owner](VM.Managed.ObjectEventCore.md\#VM\_Managed\_ObjectEventCore\_Owner), 
[ObjectEventCore.Container](VM.Managed.ObjectEventCore.md\#VM\_Managed\_ObjectEventCore\_Container), 
[ObjectEventCore.Object](VM.Managed.ObjectEventCore.md\#VM\_Managed\_ObjectEventCore\_Object)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_CAD_ImportBuilderEventCore__ctor_VM_Managed_ObjectBase_"></a> ImportBuilderEventCore\(ObjectBase\)

Initializes a new instance of the <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ImportBuilderEventCore(ObjectBase ob)
```

#### Parameters

`ob` [ObjectBase](VM.Managed.ObjectBase.md)

Name of the object base.

### <a id="VM_Managed_CAD_ImportBuilderEventCore__ctor"></a> ImportBuilderEventCore\(\)

Initializes a new instance of the <xref href="VM.Managed.CAD.ImportBuilderEventCore" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ImportBuilderEventCore()
```

### <a id="VM_Managed_CAD_ImportBuilderEventCore__ctor_System_Runtime_Serialization_SerializationInfo_System_Runtime_Serialization_StreamingContext_"></a> ImportBuilderEventCore\(SerializationInfo, StreamingContext\)

Initializes a new instance of the <xref href="VM.Managed.CAD.ImportBuilderEventCore" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected ImportBuilderEventCore(SerializationInfo info, StreamingContext context)
```

#### Parameters

`info` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)

The info.

`context` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

The context.

## Methods

### <a id="VM_Managed_CAD_ImportBuilderEventCore_Dispose_System_Boolean_"></a> Dispose\(bool\)

```csharp
[HandleProcessCorruptedStateExceptions]
protected override void Dispose(bool A_0)
```

#### Parameters

`A_0` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_CAD_ImportBuilderEventCore_GetObjectDataImpl_System_Runtime_Serialization_SerializationInfo_System_Runtime_Serialization_StreamingContext_"></a> GetObjectDataImpl\(SerializationInfo, StreamingContext\)

Serialization function for restore.

```csharp
protected override void GetObjectDataImpl(SerializationInfo info, StreamingContext context)
```

#### Parameters

`info` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)

The info.

`context` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

The context.

