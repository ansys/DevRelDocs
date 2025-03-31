# Interface IScenario

Namespace: [VM.Models](VM.Models.md)  
Assembly: VM.Models.Project.dll  

```csharp
public interface IScenario : IProjectObject, IHasID, IHasName, IDisposableObject, ISelected, IHasParent<IProjectDocument>
```

#### Implements

[IProjectObject](VM.Models.IProjectObject.md), 
IHasID, 
IHasName, 
IDisposableObject, 
ISelected, 
IHasParent<IProjectDocument\>

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### CategoryName

```csharp
string CategoryName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Items

```csharp
IEnumerable<IStep> Items { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IStep](VM.Models.IStep.md)\>

### Left

```csharp
double Left { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Top

```csharp
double Top { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### this\[Identifier\]

```csharp
IStep this[Identifier identifier] { get; }
```

#### Property Value

 [IStep](VM.Models.IStep.md)

### this\[int\]

```csharp
IStep this[int index] { get; }
```

#### Property Value

 [IStep](VM.Models.IStep.md)

## Methods

### Add\(IStep\)

```csharp
void Add(IStep item)
```

#### Parameters

`item` [IStep](VM.Models.IStep.md)

### Clear\(\)

```csharp
void Clear()
```

### Remove\(IStep\)

```csharp
void Remove(IStep item)
```

#### Parameters

`item` [IStep](VM.Models.IStep.md)

### TryGetItem\(Identifier, out IStep\)

```csharp
bool TryGetItem(Identifier identifier, out IStep item)
```

#### Parameters

`identifier` Identifier

`item` [IStep](VM.Models.IStep.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


