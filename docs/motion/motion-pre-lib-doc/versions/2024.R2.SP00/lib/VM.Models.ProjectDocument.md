# Class ProjectDocument

Namespace: [VM.Models](VM.Models.md)  
Assembly: VM.Models.Project.dll  

```csharp
public sealed class ProjectDocument : ProjectObjectBase, IObservableObject, IProjectDocument, IProjectObject, IHasID, IHasName, IDisposableObject
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[ProjectObjectBase](VM.Models.ProjectObjectBase.md) ← 
[ProjectDocument](VM.Models.ProjectDocument.md)

#### Implements

IObservableObject, 
[IProjectDocument](VM.Models.IProjectDocument.md), 
[IProjectObject](VM.Models.IProjectObject.md), 
IHasID, 
IHasName, 
IDisposableObject

#### Inherited Members

[ProjectObjectBase.OnDeserialization\(object\)](VM.Models.ProjectObjectBase.md\#VM\_Models\_ProjectObjectBase\_OnDeserialization\_System\_Object\_), 
[ProjectObjectBase.DisplayName](VM.Models.ProjectObjectBase.md\#VM\_Models\_ProjectObjectBase\_DisplayName), 
[ProjectObjectBase.ID](VM.Models.ProjectObjectBase.md\#VM\_Models\_ProjectObjectBase\_ID), 
[ProjectObjectBase.Name](VM.Models.ProjectObjectBase.md\#VM\_Models\_ProjectObjectBase\_Name), 
ObservableObject.Dispose\(\), 
ObservableObject.RaisePropertyChanged\(string\), 
ObservableObject.RaisePropertyChanged\(string, object, object\), 
ObservableObject.IsDisposed, 
ObservableObject.TryDisposing, 
ObservableObject.Disposed, 
ObservableObject.Disposing, 
ObservableObject.PropertyChanged

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### ProjectDocument\(string\)

```csharp
public ProjectDocument(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### ID

```csharp
public override Identifier ID { get; }
```

#### Property Value

 Identifier

### Items

```csharp
public IEnumerable<IScenario> Items { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IScenario](VM.Models.IScenario.md)\>

### RootPath

```csharp
[Browsable(false)]
public string RootPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ScenarioCount

```csharp
[Browsable(false)]
public int ScenarioCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### this\[Identifier\]

```csharp
public IScenario this[Identifier identifier] { get; }
```

#### Property Value

 [IScenario](VM.Models.IScenario.md)

### this\[int\]

```csharp
public IScenario this[int index] { get; }
```

#### Property Value

 [IScenario](VM.Models.IScenario.md)

### this\[string\]

```csharp
public IScenario this[string name] { get; }
```

#### Property Value

 [IScenario](VM.Models.IScenario.md)

## Methods

### Add\(IScenario\)

```csharp
public void Add(IScenario item)
```

#### Parameters

`item` [IScenario](VM.Models.IScenario.md)

### CanRegisterID\(Identifier\)

```csharp
public bool CanRegisterID(Identifier identifier)
```

#### Parameters

`identifier` Identifier

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CanRegisterName\(string\)

```csharp
public bool CanRegisterName(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Contains\(IScenario\)

```csharp
public bool Contains(IScenario item)
```

#### Parameters

`item` [IScenario](VM.Models.IScenario.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ContainsID\(Identifier\)

```csharp
public bool ContainsID(Identifier identifier)
```

#### Parameters

`identifier` Identifier

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ContainsName\(IProjectObject\)

```csharp
public bool ContainsName(IProjectObject item)
```

#### Parameters

`item` [IProjectObject](VM.Models.IProjectObject.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DisposeManagedResources\(\)

```csharp
protected override void DisposeManagedResources()
```

### Open\(string\)

```csharp
public static ProjectDocument Open(string path)
```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [ProjectDocument](VM.Models.ProjectDocument.md)

### Remove\(IScenario\)

```csharp
public void Remove(IScenario item)
```

#### Parameters

`item` [IScenario](VM.Models.IScenario.md)

### Save\(\)

```csharp
public void Save()
```

### TryGetValue\(Identifier, out IScenario\)

```csharp
public bool TryGetValue(Identifier identifier, out IScenario scenario)
```

#### Parameters

`identifier` Identifier

`scenario` [IScenario](VM.Models.IScenario.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TryGetValue\(string, out IScenario\)

```csharp
public bool TryGetValue(string name, out IScenario scenario)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`scenario` [IScenario](VM.Models.IScenario.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UnregisterID\(IProjectObject\)

```csharp
public void UnregisterID(IProjectObject item)
```

#### Parameters

`item` [IProjectObject](VM.Models.IProjectObject.md)

### UnregisterName\(IProjectObject\)

```csharp
public void UnregisterName(IProjectObject item)
```

#### Parameters

`item` [IProjectObject](VM.Models.IProjectObject.md)


