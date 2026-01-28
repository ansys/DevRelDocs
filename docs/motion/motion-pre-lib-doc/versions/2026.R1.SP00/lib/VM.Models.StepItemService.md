# Class StepItemService
<a id="VM_Models_StepItemService"></a>

Namespace: [VM.Models](VM.Models.md)  
Assembly: VM.Models.Project.dll  

```csharp
[DependencyResolve(typeof(IStepItemService))]
public class StepItemService : IStepItemService
```

#### Inheritance

object ← 
[StepItemService](VM.Models.StepItemService.md)

#### Implements

[IStepItemService](VM.Models.IStepItemService.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_StepItemService__ctor_VM_Models_ApplicationTypes_"></a> StepItemService\(ApplicationTypes\)

```csharp
public StepItemService(ApplicationTypes target)
```

#### Parameters

`target` ApplicationTypes

## Properties

### <a id="VM_Models_StepItemService_Target"></a> Target

```csharp
public ApplicationTypes Target { get; }
```

#### Property Value

 ApplicationTypes

## Methods

### <a id="VM_Models_StepItemService_Add_VM_Models_IStepItemSet_System_Type_System_Func_System_Collections_Generic_IEnumerable_VM_Models_IStepItem___"></a> Add\(IStepItemSet, Type, Func<IEnumerable<IStepItem\>\>\)

```csharp
public void Add(IStepItemSet stepItemSet, Type stepType, Func<IEnumerable<IStepItem>> factory)
```

#### Parameters

`stepItemSet` [IStepItemSet](VM.Models.IStepItemSet.md)

`stepType` Type

`factory` Func<IEnumerable<[IStepItem](VM.Models.IStepItem.md)\>\>

### <a id="VM_Models_StepItemService_Clear"></a> Clear\(\)

```csharp
public void Clear()
```

### <a id="VM_Models_StepItemService_Compose_System_Collections_Generic_IEnumerable_System_Reflection_Assembly__"></a> Compose\(IEnumerable<Assembly\>\)

```csharp
public void Compose(IEnumerable<Assembly> assemblies)
```

#### Parameters

`assemblies` IEnumerable<Assembly\>

### <a id="VM_Models_StepItemService_GetItems_System_Type_VM_Models_IStep_"></a> GetItems\(Type, IStep\)

```csharp
public IEnumerable<IStepItem> GetItems(Type scenarioType, IStep parent)
```

#### Parameters

`scenarioType` Type

`parent` [IStep](VM.Models.IStep.md)

#### Returns

 IEnumerable<[IStepItem](VM.Models.IStepItem.md)\>

