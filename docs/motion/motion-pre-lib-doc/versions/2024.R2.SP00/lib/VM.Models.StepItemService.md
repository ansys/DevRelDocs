# Class StepItemService

Namespace: [VM.Models](VM.Models.md)  
Assembly: VM.Models.Project.dll  

```csharp
[DependencyResolve(typeof(IStepItemService))]
public class StepItemService : IStepItemService
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[StepItemService](VM.Models.StepItemService.md)

#### Implements

[IStepItemService](VM.Models.IStepItemService.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### StepItemService\(ApplicationTypes\)

```csharp
public StepItemService(ApplicationTypes target)
```

#### Parameters

`target` ApplicationTypes

## Properties

### Target

```csharp
public ApplicationTypes Target { get; }
```

#### Property Value

 ApplicationTypes

## Methods

### Add\(IStepItemSet, Type, Func<IEnumerable<IStepItem\>\>\)

```csharp
public void Add(IStepItemSet stepItemSet, Type stepType, Func<IEnumerable<IStepItem>> factory)
```

#### Parameters

`stepItemSet` [IStepItemSet](VM.Models.IStepItemSet.md)

`stepType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

`factory` [Func](https://learn.microsoft.com/dotnet/api/system.func\-1)<[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IStepItem](VM.Models.IStepItem.md)\>\>

### Clear\(\)

```csharp
public void Clear()
```

### Compose\(IEnumerable<Assembly\>\)

```csharp
public void Compose(IEnumerable<Assembly> assemblies)
```

#### Parameters

`assemblies` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Assembly](https://learn.microsoft.com/dotnet/api/system.reflection.assembly)\>

### GetItems\(Type, IStep\)

```csharp
public IEnumerable<IStepItem> GetItems(Type scenarioType, IStep parent)
```

#### Parameters

`scenarioType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

`parent` [IStep](VM.Models.IStep.md)

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IStepItem](VM.Models.IStepItem.md)\>


