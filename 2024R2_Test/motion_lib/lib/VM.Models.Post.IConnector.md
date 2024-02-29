# <a id="VM_Models_Post_IConnector"></a> Interface IConnector

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public interface IConnector : IEntity, IObject, IHasName, IHasIndex, IHasID
```

#### Implements

[IEntity](VM.Models.Post.IEntity.md), 
[IObject](VM.Models.Post.IObject.md), 
IHasName, 
[IHasIndex](VM.Models.Post.IHasIndex.md), 
IHasID

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Post_IConnector_ActionBodyIndex"></a> ActionBodyIndex

```csharp
int ActionBodyIndex { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_IConnector_BaseBodyIndex"></a> BaseBodyIndex

```csharp
int BaseBodyIndex { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_IConnector_ConnectorType"></a> ConnectorType

```csharp
ConnectorType ConnectorType { get; }
```

#### Property Value

 [ConnectorType](VM.Models.Post.ConnectorType.md)

## Methods

### <a id="VM_Models_Post_IConnector_TryGetParentActionType_System_String_VM_Models_Post_ActionType__"></a> TryGetParentActionType\(string, out ActionType\)

```csharp
bool TryGetParentActionType(string bodyFullName, out ActionType actionType)
```

#### Parameters

`bodyFullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`actionType` [ActionType](VM.Models.Post.ActionType.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

