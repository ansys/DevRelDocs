#  Class ExecutePreprocessorStepItem

Namespace: [VM.Models.Project.Preset](VM.Models.Project.Preset.md)  
Assembly: VM.Models.Project.Preset.dll  

```csharp
public sealed class ExecutePreprocessorStepItem : CommandStepItem, IObservableObject, IDisposableObject, IStepItem, IHasParent<IStep>, IHasName, IVisible, IEnabled
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
CommandStepItem ← 
[ExecutePreprocessorStepItem](VM.Models.Project.Preset.ExecutePreprocessorStepItem.md)

#### Implements

IObservableObject, 
IDisposableObject, 
IStepItem, 
IHasParent<IStep\>, 
IHasName, 
IVisible, 
IEnabled

#### Inherited Members

CommandStepItem.Initialize\(\), 
CommandStepItem.Command, 
CommandStepItem.DisplayName, 
CommandStepItem.Icon, 
CommandStepItem.Name, 
CommandStepItem.Parent, 
CommandStepItem.ToolTip, 
CommandStepItem.IsVisible, 
CommandStepItem.IsEnabled, 
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

### <a id="VM_Models_Project_Preset_ExecutePreprocessorStepItem__ctor"></a> ExecutePreprocessorStepItem\(\)

```csharp
public ExecutePreprocessorStepItem()
```

## Properties

### <a id="VM_Models_Project_Preset_ExecutePreprocessorStepItem_Name"></a> Name

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Models_Project_Preset_ExecutePreprocessorStepItem_Initialize"></a> Initialize\(\)

```csharp
public override void Initialize()
```

