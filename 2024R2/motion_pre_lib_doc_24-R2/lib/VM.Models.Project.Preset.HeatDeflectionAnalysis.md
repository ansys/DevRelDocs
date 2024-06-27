# Class HeatDeflectionAnalysis

Namespace: [VM.Models.Project.Preset](VM.Models.Project.Preset.md)  
Assembly: VM.Models.Project.Preset.dll  

```csharp
[Export(typeof(IScenario))]
public class HeatDeflectionAnalysis : AnalysisScenarioBase, IObservableObject, IAnalysisScenario, IScenario, IProjectObject, IHasID, IHasName, IDisposableObject, ISelected, IHasParent<IProjectDocument>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
ProjectObjectBase ← 
ScenarioBase ← 
[AnalysisScenarioBase](VM.Models.Project.Preset.AnalysisScenarioBase.md) ← 
[HeatDeflectionAnalysis](VM.Models.Project.Preset.HeatDeflectionAnalysis.md)

#### Implements

IObservableObject, 
[IAnalysisScenario](VM.Models.Project.IAnalysisScenario.md), 
IScenario, 
IProjectObject, 
IHasID, 
IHasName, 
IDisposableObject, 
ISelected, 
IHasParent<IProjectDocument\>

#### Inherited Members

[AnalysisScenarioBase.SaveScenarioData\(IScenarioDocument\)](VM.Models.Project.Preset.AnalysisScenarioBase.md\#VM\_Models\_Project\_Preset\_AnalysisScenarioBase\_SaveScenarioData\_VM\_IScenarioDocument\_), 
[AnalysisScenarioBase.CategoryName](VM.Models.Project.Preset.AnalysisScenarioBase.md\#VM\_Models\_Project\_Preset\_AnalysisScenarioBase\_CategoryName), 
ScenarioBase.Add\(IStep\), 
ScenarioBase.Clear\(\), 
ScenarioBase.Remove\(IStep\), 
ScenarioBase.TryGetItem\(Identifier, out IStep\), 
ScenarioBase.DisposeManagedResources\(\), 
ScenarioBase.CategoryName, 
ScenarioBase.IsSelected, 
ScenarioBase.Items, 
ScenarioBase.Left, 
ScenarioBase.Name, 
ScenarioBase.Parent, 
ScenarioBase.ParentDocument, 
ScenarioBase.Top, 
ScenarioBase.this\[Identifier\], 
ScenarioBase.this\[int\], 
ProjectObjectBase.OnDeserialization\(object\), 
ProjectObjectBase.DisposeManagedResources\(\), 
ProjectObjectBase.DisplayName, 
ProjectObjectBase.ID, 
ProjectObjectBase.Name, 
ObservableObject.Dispose\(\), 
ObservableObject.RaisePropertyChanged\(string\), 
ObservableObject.RaisePropertyChanged\(string, object, object\), 
ObservableObject.Dispose\(bool\), 
ObservableObject.DisposeManagedResources\(\), 
ObservableObject.DisposeUnmanagedResources\(\), 
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

### HeatDeflectionAnalysis\(IProjectDocument, string\)

```csharp
public HeatDeflectionAnalysis(IProjectDocument parent, string name)
```

#### Parameters

`parent` IProjectDocument

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### DisplayName

```csharp
public override string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### SaveScenarioData\(IScenarioDocument\)

```csharp
public override void SaveScenarioData(IScenarioDocument scenarioDocument)
```

#### Parameters

`scenarioDocument` IScenarioDocument


