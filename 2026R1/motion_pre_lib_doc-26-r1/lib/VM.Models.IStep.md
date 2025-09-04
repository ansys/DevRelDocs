#  Interface IStep

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

### <a id="VM_Models_IStep_DefaultCommand"></a> DefaultCommand

```csharp
ICommand DefaultCommand { get; }
```

#### Property Value

 [ICommand](https://learn.microsoft.com/dotnet/api/system.windows.input.icommand)

### <a id="VM_Models_IStep_FilePath"></a> FilePath

```csharp
string FilePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_IStep_Items"></a> Items

```csharp
IEnumerable<IStepItem> Items { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IStepItem](VM.Models.IStepItem.md)\>

### <a id="VM_Models_IStep_ParentDocument"></a> ParentDocument

```csharp
IProjectDocument ParentDocument { get; }
```

#### Property Value

 [IProjectDocument](VM.Models.IProjectDocument.md)

### <a id="VM_Models_IStep_Source"></a> Source

```csharp
IStep Source { get; }
```

#### Property Value

 [IStep](VM.Models.IStep.md)

### <a id="VM_Models_IStep_State"></a> State

```csharp
StepState State { get; }
```

#### Property Value

 [StepState](VM.Models.StepState.md)

### <a id="VM_Models_IStep_TargetApplicationType"></a> TargetApplicationType

```csharp
ApplicationTypes TargetApplicationType { get; }
```

#### Property Value

 ApplicationTypes

### <a id="VM_Models_IStep_Targets"></a> Targets

```csharp
IEnumerable<IStep> Targets { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IStep](VM.Models.IStep.md)\>

### <a id="VM_Models_IStep_Type"></a> Type

```csharp
StepType Type { get; }
```

#### Property Value

 [StepType](VM.Models.StepType.md)

### <a id="VM_Models_IStep_Item_System_Int32_"></a> this\[int\]

```csharp
IStepItem this[int index] { get; }
```

#### Property Value

 [IStepItem](VM.Models.IStepItem.md)

## Methods

### <a id="VM_Models_IStep_Add_VM_Models_IStepItem_"></a> Add\(IStepItem\)

```csharp
void Add(IStepItem item)
```

#### Parameters

`item` [IStepItem](VM.Models.IStepItem.md)

### <a id="VM_Models_IStep_AddTarget_VM_Models_IStep_"></a> AddTarget\(IStep\)

```csharp
void AddTarget(IStep item)
```

#### Parameters

`item` [IStep](VM.Models.IStep.md)

### <a id="VM_Models_IStep_CanRelation_VM_Models_IStep_"></a> CanRelation\(IStep\)

```csharp
bool CanRelation(IStep source)
```

#### Parameters

`source` [IStep](VM.Models.IStep.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_IStep_ContainsTarget_VM_Models_IStep_"></a> ContainsTarget\(IStep\)

```csharp
bool ContainsTarget(IStep item)
```

#### Parameters

`item` [IStep](VM.Models.IStep.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_IStep_RemoveTarget_VM_Models_IStep_"></a> RemoveTarget\(IStep\)

```csharp
void RemoveTarget(IStep item)
```

#### Parameters

`item` [IStep](VM.Models.IStep.md)

### <a id="VM_Models_IStep_ResetSource"></a> ResetSource\(\)

```csharp
void ResetSource()
```

### <a id="VM_Models_IStep_SetSource_VM_Models_IStep_"></a> SetSource\(IStep\)

```csharp
void SetSource(IStep source)
```

#### Parameters

`source` [IStep](VM.Models.IStep.md)

