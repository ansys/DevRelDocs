# <a id="VM_Models_IStepItemService"></a> Interface IStepItemService

Namespace: [VM.Models](VM.Models.md)  
Assembly: VM.Models.Project.dll  

```csharp
public interface IStepItemService
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Models_IStepItemService_Add_VM_Models_IStepItemSet_System_Type_System_Func_System_Collections_Generic_IEnumerable_VM_Models_IStepItem___"></a> Add\(IStepItemSet, Type, Func<IEnumerable<IStepItem\>\>\)

```csharp
void Add(IStepItemSet stepItemSet, Type stepType, Func<IEnumerable<IStepItem>> factory)
```

#### Parameters

`stepItemSet` [IStepItemSet](VM.Models.IStepItemSet.md)

`stepType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

`factory` [Func](https://learn.microsoft.com/dotnet/api/system.func\-1)<[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IStepItem](VM.Models.IStepItem.md)\>\>

### <a id="VM_Models_IStepItemService_Clear"></a> Clear\(\)

```csharp
void Clear()
```

### <a id="VM_Models_IStepItemService_Compose_System_Collections_Generic_IEnumerable_System_Reflection_Assembly__"></a> Compose\(IEnumerable<Assembly\>\)

```csharp
void Compose(IEnumerable<Assembly> assemblies)
```

#### Parameters

`assemblies` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Assembly](https://learn.microsoft.com/dotnet/api/system.reflection.assembly)\>

### <a id="VM_Models_IStepItemService_GetItems_System_Type_VM_Models_IStep_"></a> GetItems\(Type, IStep\)

```csharp
IEnumerable<IStepItem> GetItems(Type scenarioType, IStep parent)
```

#### Parameters

`scenarioType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

`parent` [IStep](VM.Models.IStep.md)

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IStepItem](VM.Models.IStepItem.md)\>

