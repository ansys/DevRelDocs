# <a id="VM_Models_Project_Preset_ChartStep"></a> Class ChartStep

Namespace: [VM.Models.Project.Preset](VM.Models.Project.Preset.md)  
Assembly: VM.Models.Project.Preset.dll  

```csharp
public class ChartStep : StepBase, IObservableObject, IStep, IProjectObject, IHasID, IHasName, IDisposableObject, ISelected, IHasParent<IScenario>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
ProjectObjectBase ← 
StepBase ← 
[ChartStep](VM.Models.Project.Preset.ChartStep.md)

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

StepBase.Add\(IStepItem\), 
StepBase.AddTarget\(IStep\), 
StepBase.CanRelation\(IStep\), 
StepBase.ContainsTarget\(IStep\), 
StepBase.OnDeserialization\(object\), 
StepBase.RemoveTarget\(IStep\), 
StepBase.ResetSource\(\), 
StepBase.SetSource\(IStep\), 
StepBase.DisposeManagedResources\(\), 
StepBase.DefaultCommand, 
StepBase.FilePath, 
StepBase.IsSelected, 
StepBase.Items, 
StepBase.Parent, 
StepBase.ParentDocument, 
StepBase.Source, 
StepBase.State, 
StepBase.TargetApplicationType, 
StepBase.Type, 
StepBase.StepItemService, 
StepBase.this\[int\], 
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

### <a id="VM_Models_Project_Preset_ChartStep__ctor_VM_Models_IScenario_"></a> ChartStep\(IScenario\)

```csharp
public ChartStep(IScenario parent)
```

#### Parameters

`parent` IScenario

## Properties

### <a id="VM_Models_Project_Preset_ChartStep_Name"></a> Name

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Project_Preset_ChartStep_TargetApplicationType"></a> TargetApplicationType

```csharp
public override ApplicationTypes TargetApplicationType { get; }
```

#### Property Value

 ApplicationTypes

### <a id="VM_Models_Project_Preset_ChartStep_Type"></a> Type

```csharp
public override StepType Type { get; }
```

#### Property Value

 StepType

