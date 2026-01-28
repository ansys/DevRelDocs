# Class StiffnessAnalysis
<a id="VM_Models_Project_Preset_StiffnessAnalysis"></a>

Namespace: [VM.Models.Project.Preset](VM.Models.Project.Preset.md)  
Assembly: VM.Models.Project.Preset.dll  

```csharp
[Export(typeof(IScenario))]
public class StiffnessAnalysis : AnalysisScenarioBase, IObservableObject, IAnalysisScenario, IScenario, IProjectObject, IHasID, IHasName, IDisposableObject, ISelected, IHasParent<IProjectDocument>
```

#### Inheritance

object ← 
ObservableObject ← 
[ProjectObjectBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/ProjectObjectBase.cs) ← 
[ScenarioBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/ScenarioBase.cs) ← 
[AnalysisScenarioBase](VM.Models.Project.Preset.AnalysisScenarioBase.md) ← 
[StiffnessAnalysis](VM.Models.Project.Preset.StiffnessAnalysis.md)

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
[ScenarioBase.Add\(IStep\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/ScenarioBase.cs), 
[ScenarioBase.Clear\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/ScenarioBase.cs), 
[ScenarioBase.Remove\(IStep\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/ScenarioBase.cs), 
[ScenarioBase.TryGetItem\(Identifier, out IStep\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/ScenarioBase.cs), 
[ScenarioBase.DisposeManagedResources\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/ScenarioBase.cs), 
[ScenarioBase.CategoryName](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/ScenarioBase.cs), 
[ScenarioBase.IsSelected](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/ScenarioBase.cs), 
[ScenarioBase.Items](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/ScenarioBase.cs), 
[ScenarioBase.Left](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/ScenarioBase.cs), 
[ScenarioBase.Name](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/ScenarioBase.cs), 
[ScenarioBase.Parent](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/ScenarioBase.cs), 
[ScenarioBase.ParentDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/ScenarioBase.cs), 
[ScenarioBase.Top](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/ScenarioBase.cs), 
[ScenarioBase.this\[Identifier\]](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/ScenarioBase.cs), 
[ScenarioBase.this\[int\]](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/ScenarioBase.cs), 
[ProjectObjectBase.OnDeserialization\(object\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/ProjectObjectBase.cs), 
[ProjectObjectBase.DisposeManagedResources\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/ProjectObjectBase.cs), 
[ProjectObjectBase.DisplayName](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/ProjectObjectBase.cs), 
[ProjectObjectBase.ID](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/ProjectObjectBase.cs), 
[ProjectObjectBase.Name](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/ProjectObjectBase.cs), 
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

### <a id="VM_Models_Project_Preset_StiffnessAnalysis__ctor_VM_Models_IProjectDocument_System_String_"></a> StiffnessAnalysis\(IProjectDocument, string\)

```csharp
public StiffnessAnalysis(IProjectDocument parent, string name)
```

#### Parameters

`parent` IProjectDocument

`name` string

## Properties

### <a id="VM_Models_Project_Preset_StiffnessAnalysis_CategoryName"></a> CategoryName

```csharp
public override string CategoryName { get; }
```

#### Property Value

 string

### <a id="VM_Models_Project_Preset_StiffnessAnalysis_DisplayName"></a> DisplayName

```csharp
public override string DisplayName { get; }
```

#### Property Value

 string

## Methods

### <a id="VM_Models_Project_Preset_StiffnessAnalysis_SaveScenarioData_VM_IScenarioDocument_"></a> SaveScenarioData\(IScenarioDocument\)

```csharp
public override void SaveScenarioData(IScenarioDocument scenarioDocument)
```

#### Parameters

`scenarioDocument` IScenarioDocument

