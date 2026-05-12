#  Class SystemModelingStep

Namespace: [VM.Models.Project.Preset](VM.Models.Project.Preset.md)  
Assembly: VM.Models.Project.Preset.dll  

```csharp
public class SystemModelingStep : StepBase, IObservableObject, IStep, IProjectObject, IHasID, IHasName, IDisposableObject, ISelected, IHasParent<IScenario>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
ProjectObjectBase ← 
StepBase ← 
[SystemModelingStep](VM.Models.Project.Preset.SystemModelingStep.md)

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

### <a id="VM_Models_Project_Preset_SystemModelingStep__ctor_VM_Models_IScenario_"></a> SystemModelingStep\(IScenario\)

```csharp
public SystemModelingStep(IScenario parent)
```

#### Parameters

`parent` IScenario

## Properties

### <a id="VM_Models_Project_Preset_SystemModelingStep_Name"></a> Name

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Project_Preset_SystemModelingStep_TargetApplicationType"></a> TargetApplicationType

```csharp
public override ApplicationTypes TargetApplicationType { get; }
```

#### Property Value

 ApplicationTypes

### <a id="VM_Models_Project_Preset_SystemModelingStep_Type"></a> Type

```csharp
public override StepType Type { get; }
```

#### Property Value

 StepType

## Methods

### <a id="VM_Models_Project_Preset_SystemModelingStep_CanRelation_VM_Models_IStep_"></a> CanRelation\(IStep\)

```csharp
public override bool CanRelation(IStep source)
```

#### Parameters

`source` IStep

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Project_Preset_SystemModelingStep_FileChanged_System_String_"></a> FileChanged\(string\)

```csharp
public void FileChanged(string fullPath)
```

#### Parameters

`fullPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Project_Preset_SystemModelingStep_FileCreated_System_String_"></a> FileCreated\(string\)

```csharp
public void FileCreated(string fullPath)
```

#### Parameters

`fullPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Project_Preset_SystemModelingStep_FileDeleted_System_String_"></a> FileDeleted\(string\)

```csharp
public void FileDeleted(string fullPath)
```

#### Parameters

`fullPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Project_Preset_SystemModelingStep_FileRenamed_System_String_"></a> FileRenamed\(string\)

```csharp
public void FileRenamed(string fullPath)
```

#### Parameters

`fullPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Project_Preset_SystemModelingStep_GetExtension"></a> GetExtension\(\)

```csharp
public string GetExtension()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Project_Preset_SystemModelingStep_SetFilePath"></a> SetFilePath\(\)

```csharp
public void SetFilePath()
```

