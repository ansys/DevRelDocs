# Class ResultStep
<a id="VM_Models_Project_Preset_ResultStep"></a>

Namespace: [VM.Models.Project.Preset](VM.Models.Project.Preset.md)  
Assembly: VM.Models.Project.Preset.dll  

```csharp
public class ResultStep : StepBase, IObservableObject, IStep, IProjectObject, IHasID, IHasName, IDisposableObject, ISelected, IHasParent<IScenario>
```

#### Inheritance

object ← 
ObservableObject ← 
[ProjectObjectBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/ProjectObjectBase.cs) ← 
[StepBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/StepBase.cs) ← 
[ResultStep](VM.Models.Project.Preset.ResultStep.md)

#### Implements

IObservableObject, 
IStep, 
IProjectObject, 
IHasID, 
IHasName, 
IDisposableObject, 
ISelected, 
IHasParent<IScenario\>

#### Inherited Members

[StepBase.Add\(IStepItem\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/StepBase.cs), 
[StepBase.AddTarget\(IStep\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/StepBase.cs), 
[StepBase.CanRelation\(IStep\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/StepBase.cs), 
[StepBase.ContainsTarget\(IStep\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/StepBase.cs), 
[StepBase.OnDeserialization\(object\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/StepBase.cs), 
[StepBase.RemoveTarget\(IStep\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/StepBase.cs), 
[StepBase.ResetSource\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/StepBase.cs), 
[StepBase.SetSource\(IStep\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/StepBase.cs), 
[StepBase.DisposeManagedResources\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/StepBase.cs), 
[StepBase.DefaultCommand](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/StepBase.cs), 
[StepBase.FilePath](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/StepBase.cs), 
[StepBase.IsSelected](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/StepBase.cs), 
[StepBase.Items](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/StepBase.cs), 
[StepBase.Parent](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/StepBase.cs), 
[StepBase.ParentDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/StepBase.cs), 
[StepBase.Source](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/StepBase.cs), 
[StepBase.State](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/StepBase.cs), 
[StepBase.TargetApplicationType](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/StepBase.cs), 
[StepBase.Type](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/StepBase.cs), 
[StepBase.StepItemService](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/StepBase.cs), 
[StepBase.this\[int\]](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/StepBase.cs), 
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

### <a id="VM_Models_Project_Preset_ResultStep__ctor_VM_Models_IScenario_"></a> ResultStep\(IScenario\)

```csharp
public ResultStep(IScenario parent)
```

#### Parameters

`parent` IScenario

## Properties

### <a id="VM_Models_Project_Preset_ResultStep_Name"></a> Name

```csharp
public override string Name { get; }
```

#### Property Value

 string

### <a id="VM_Models_Project_Preset_ResultStep_TargetApplicationType"></a> TargetApplicationType

```csharp
public override ApplicationTypes TargetApplicationType { get; }
```

#### Property Value

 ApplicationTypes

### <a id="VM_Models_Project_Preset_ResultStep_Type"></a> Type

```csharp
public override StepType Type { get; }
```

#### Property Value

 StepType

## Methods

### <a id="VM_Models_Project_Preset_ResultStep_CanRelation_VM_Models_IStep_"></a> CanRelation\(IStep\)

```csharp
public override bool CanRelation(IStep source)
```

#### Parameters

`source` IStep

#### Returns

 bool

### <a id="VM_Models_Project_Preset_ResultStep_FileChanged_System_String_"></a> FileChanged\(string\)

```csharp
public void FileChanged(string fullPath)
```

#### Parameters

`fullPath` string

### <a id="VM_Models_Project_Preset_ResultStep_FileCreated_System_String_"></a> FileCreated\(string\)

```csharp
public void FileCreated(string fullPath)
```

#### Parameters

`fullPath` string

### <a id="VM_Models_Project_Preset_ResultStep_FileDeleted_System_String_"></a> FileDeleted\(string\)

```csharp
public void FileDeleted(string fullPath)
```

#### Parameters

`fullPath` string

### <a id="VM_Models_Project_Preset_ResultStep_FileRenamed_System_String_"></a> FileRenamed\(string\)

```csharp
public void FileRenamed(string fullPath)
```

#### Parameters

`fullPath` string

### <a id="VM_Models_Project_Preset_ResultStep_SetFilePath"></a> SetFilePath\(\)

```csharp
public void SetFilePath()
```

