#  Class AnalysisScenarioBase

Namespace: [VM.Models.Project.Preset](VM.Models.Project.Preset.md)  
Assembly: VM.Models.Project.Preset.dll  

```csharp
public abstract class AnalysisScenarioBase : ScenarioBase, IObservableObject, IAnalysisScenario, IScenario, IProjectObject, IHasID, IHasName, IDisposableObject, ISelected, IHasParent<IProjectDocument>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
ProjectObjectBase ← 
ScenarioBase ← 
[AnalysisScenarioBase](VM.Models.Project.Preset.AnalysisScenarioBase.md)

#### Derived

[DynamicAnalysis](VM.Models.Project.Preset.DynamicAnalysis.md), 
[EigenvalueAnalysis](VM.Models.Project.Preset.EigenvalueAnalysis.md), 
[HeatDeflectionAnalysis](VM.Models.Project.Preset.HeatDeflectionAnalysis.md), 
[StiffnessAnalysis](VM.Models.Project.Preset.StiffnessAnalysis.md), 
[StrengthAnalysis](VM.Models.Project.Preset.StrengthAnalysis.md)

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

### <a id="VM_Models_Project_Preset_AnalysisScenarioBase__ctor_VM_Models_IProjectDocument_System_String_"></a> AnalysisScenarioBase\(IProjectDocument, string\)

```csharp
public AnalysisScenarioBase(IProjectDocument parent, string name)
```

#### Parameters

`parent` IProjectDocument

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Models_Project_Preset_AnalysisScenarioBase_CategoryName"></a> CategoryName

```csharp
public override string CategoryName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Models_Project_Preset_AnalysisScenarioBase_SaveScenarioData_VM_IScenarioDocument_"></a> SaveScenarioData\(IScenarioDocument\)

```csharp
public abstract void SaveScenarioData(IScenarioDocument scenarioDocument)
```

#### Parameters

`scenarioDocument` IScenarioDocument

