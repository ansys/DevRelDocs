# Interface IStep

Namespace: [VM.Models](VM.Models.md)  
Assembly: VM.Models.Project.dll  

```csharp
public interface IStep : IProjectObject, IHasID, IHasName, IDisposableObject, ISelected, IHasParent<IScenario>
```

#### Implements

[IProjectObject](VM.Models.IProjectObject.md), 
IHasID, 
IHasName, 
IDisposableObject, 
ISelected, 
IHasParent<IScenario\>

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### DefaultCommand

```csharp
ICommand DefaultCommand { get; }
```

#### Property Value

 [ICommand](https://learn.microsoft.com/dotnet/api/system.windows.input.icommand)

### FilePath

```csharp
string FilePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Items

```csharp
IEnumerable<IStepItem> Items { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IStepItem](VM.Models.IStepItem.md)\>

### ParentDocument

```csharp
IProjectDocument ParentDocument { get; }
```

#### Property Value

 [IProjectDocument](VM.Models.IProjectDocument.md)

### Source

```csharp
IStep Source { get; }
```

#### Property Value

 [IStep](VM.Models.IStep.md)

### State

```csharp
StepState State { get; }
```

#### Property Value

 [StepState](VM.Models.StepState.md)

### TargetApplicationType

```csharp
ApplicationTypes TargetApplicationType { get; }
```

#### Property Value

 ApplicationTypes

### Targets

```csharp
IEnumerable<IStep> Targets { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IStep](VM.Models.IStep.md)\>

### Type

```csharp
StepType Type { get; }
```

#### Property Value

 [StepType](VM.Models.StepType.md)

### this\[int\]

```csharp
IStepItem this[int index] { get; }
```

#### Property Value

 [IStepItem](VM.Models.IStepItem.md)

## Methods

### Add\(IStepItem\)

```csharp
void Add(IStepItem item)
```

#### Parameters

`item` [IStepItem](VM.Models.IStepItem.md)

### AddTarget\(IStep\)

```csharp
void AddTarget(IStep item)
```

#### Parameters

`item` [IStep](VM.Models.IStep.md)

### CanRelation\(IStep\)

```csharp
bool CanRelation(IStep source)
```

#### Parameters

`source` [IStep](VM.Models.IStep.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ContainsTarget\(IStep\)

```csharp
bool ContainsTarget(IStep item)
```

#### Parameters

`item` [IStep](VM.Models.IStep.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RemoveTarget\(IStep\)

```csharp
void RemoveTarget(IStep item)
```

#### Parameters

`item` [IStep](VM.Models.IStep.md)

### ResetSource\(\)

```csharp
void ResetSource()
```

### SetSource\(IStep\)

```csharp
void SetSource(IStep source)
```

#### Parameters

`source` [IStep](VM.Models.IStep.md)


