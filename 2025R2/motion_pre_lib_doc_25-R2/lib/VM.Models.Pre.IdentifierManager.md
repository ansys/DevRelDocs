# Class IdentifierManager

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

### IdentifierManager\(\)

```csharp
public IdentifierManager()
```

### IdentifierManager\(SerializationInfo, StreamingContext\)

```csharp
public IdentifierManager(SerializationInfo info, StreamingContext context)
```

#### Parameters

`info` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)

`context` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

## Properties

### Current

```csharp
public Identifier Current { get; }
```

#### Property Value

 Identifier

## Methods

### GetNextIdentifier\(\)

```csharp
public Identifier GetNextIdentifier()
```

#### Returns

 Identifier

### SetNextIdentifier\(Identifier\)

```csharp
public void SetNextIdentifier(Identifier identifier)
```

#### Parameters

`identifier` Identifier


