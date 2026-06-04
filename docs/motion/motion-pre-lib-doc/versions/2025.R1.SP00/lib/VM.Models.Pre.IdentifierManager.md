#  Class IdentifierManager

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

```csharp
public class IdentifierManager : IIdentifierManager
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[IdentifierManager](VM.Models.Pre.IdentifierManager.md)

#### Implements

[IIdentifierManager](VM.Models.Pre.IIdentifierManager.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Pre_IdentifierManager__ctor"></a> IdentifierManager\(\)

```csharp
public IdentifierManager()
```

### <a id="VM_Models_Pre_IdentifierManager__ctor_System_Runtime_Serialization_SerializationInfo_System_Runtime_Serialization_StreamingContext_"></a> IdentifierManager\(SerializationInfo, StreamingContext\)

```csharp
public IdentifierManager(SerializationInfo info, StreamingContext context)
```

#### Parameters

`info` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)

`context` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

## Properties

### <a id="VM_Models_Pre_IdentifierManager_Current"></a> Current

```csharp
public Identifier Current { get; }
```

#### Property Value

 Identifier

## Methods

### <a id="VM_Models_Pre_IdentifierManager_GetNextIdentifier"></a> GetNextIdentifier\(\)

```csharp
public Identifier GetNextIdentifier()
```

#### Returns

 Identifier

### <a id="VM_Models_Pre_IdentifierManager_SetNextIdentifier_VM_Identifier_"></a> SetNextIdentifier\(Identifier\)

```csharp
public void SetNextIdentifier(Identifier identifier)
```

#### Parameters

`identifier` Identifier

