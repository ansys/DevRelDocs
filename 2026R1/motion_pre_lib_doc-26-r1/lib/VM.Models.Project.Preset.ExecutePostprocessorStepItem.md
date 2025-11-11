# Class ExecutePostprocessorStepItem
<a id="VM_Models_Project_Preset_ExecutePostprocessorStepItem"></a>

Namespace: [VM.Models.Project.Preset](VM.Models.Project.Preset.md)  
Assembly: VM.Models.Project.Preset.dll  

```csharp
public class ExecutePostprocessorStepItem : CommandStepItem, IObservableObject, IDisposableObject, IStepItem, IHasParent<IStep>, IHasName, IVisible, IEnabled
```

#### Inheritance

object ← 
ObservableObject ← 
[CommandStepItem](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/CommandStepItem.cs) ← 
[ExecutePostprocessorStepItem](VM.Models.Project.Preset.ExecutePostprocessorStepItem.md)

#### Implements

IObservableObject, 
IDisposableObject, 
IStepItem, 
IHasParent<IStep\>, 
IHasName, 
IVisible, 
IEnabled

#### Inherited Members

[CommandStepItem.Initialize\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/CommandStepItem.cs), 
[CommandStepItem.DisposeManagedResources\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/CommandStepItem.cs), 
[CommandStepItem.Command](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/CommandStepItem.cs), 
[CommandStepItem.DisplayName](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/CommandStepItem.cs), 
[CommandStepItem.Icon](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/CommandStepItem.cs), 
[CommandStepItem.Name](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/CommandStepItem.cs), 
[CommandStepItem.Parent](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/CommandStepItem.cs), 
[CommandStepItem.ToolTip](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/CommandStepItem.cs), 
[CommandStepItem.IsVisible](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/CommandStepItem.cs), 
[CommandStepItem.IsEnabled](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.Project/Models/CommandStepItem.cs), 
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

### <a id="VM_Models_Project_Preset_ExecutePostprocessorStepItem__ctor"></a> ExecutePostprocessorStepItem\(\)

```csharp
public ExecutePostprocessorStepItem()
```

## Properties

### <a id="VM_Models_Project_Preset_ExecutePostprocessorStepItem_Name"></a> Name

```csharp
public override string Name { get; }
```

#### Property Value

 string

## Methods

### <a id="VM_Models_Project_Preset_ExecutePostprocessorStepItem_Initialize"></a> Initialize\(\)

```csharp
public override void Initialize()
```

