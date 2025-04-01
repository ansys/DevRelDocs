# Interface IProjectDocument

Namespace: [VM.Models](VM.Models.md)  
Assembly: VM.Models.Project.dll  

```csharp
public interface IProjectDocument : IProjectObject, IHasID, IHasName, IDisposableObject
```

#### Implements

[IProjectObject](VM.Models.IProjectObject.md), 
IHasID, 
IHasName, 
IDisposableObject

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### Items

```csharp
IEnumerable<IScenario> Items { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IScenario](VM.Models.IScenario.md)\>

### RootPath

```csharp
string RootPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ScenarioCount

```csharp
int ScenarioCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### this\[Identifier\]

```csharp
IScenario this[Identifier identifier] { get; }
```

#### Property Value

 [IScenario](VM.Models.IScenario.md)

### this\[int\]

```csharp
IScenario this[int index] { get; }
```

#### Property Value

 [IScenario](VM.Models.IScenario.md)

## Methods

### Add\(IScenario\)

```csharp
void Add(IScenario item)
```

#### Parameters

`item` [IScenario](VM.Models.IScenario.md)

### CanRegisterID\(Identifier\)

```csharp
bool CanRegisterID(Identifier identifier)
```

#### Parameters

`identifier` Identifier

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CanRegisterName\(string\)

```csharp
bool CanRegisterName(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Contains\(IScenario\)

```csharp
bool Contains(IScenario item)
```

#### Parameters

`item` [IScenario](VM.Models.IScenario.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ContainsID\(Identifier\)

```csharp
bool ContainsID(Identifier identifier)
```

#### Parameters

`identifier` Identifier

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ContainsName\(IProjectObject\)

```csharp
bool ContainsName(IProjectObject item)
```

#### Parameters

`item` [IProjectObject](VM.Models.IProjectObject.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RegisterID\(IProjectObject\)

```csharp
void RegisterID(IProjectObject item)
```

#### Parameters

`item` [IProjectObject](VM.Models.IProjectObject.md)

### RegisterName\(IScenario\)

```csharp
void RegisterName(IScenario item)
```

#### Parameters

`item` [IScenario](VM.Models.IScenario.md)

### Remove\(IScenario\)

```csharp
void Remove(IScenario item)
```

#### Parameters

`item` [IScenario](VM.Models.IScenario.md)

### Save\(\)

```csharp
void Save()
```

### TryGetValue\(Identifier, out IScenario\)

```csharp
bool TryGetValue(Identifier identifier, out IScenario scenario)
```

#### Parameters

`identifier` Identifier

`scenario` [IScenario](VM.Models.IScenario.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TryGetValue\(string, out IScenario\)

```csharp
bool TryGetValue(string name, out IScenario scenario)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`scenario` [IScenario](VM.Models.IScenario.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UnregisterID\(IProjectObject\)

```csharp
void UnregisterID(IProjectObject item)
```

#### Parameters

`item` [IProjectObject](VM.Models.IProjectObject.md)

### UnregisterName\(IProjectObject\)

```csharp
void UnregisterName(IProjectObject item)
```

#### Parameters

`item` [IProjectObject](VM.Models.IProjectObject.md)


