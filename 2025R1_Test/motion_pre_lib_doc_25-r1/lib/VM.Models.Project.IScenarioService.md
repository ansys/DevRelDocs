#  Interface IScenarioService

Namespace: [VM.Models.Project](VM.Models.Project.md)  
Assembly: VM.Models.Project.dll  

```csharp
public interface IScenarioService
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Models_Project_IScenarioService_Clear"></a> Clear\(\)

```csharp
void Clear()
```

### <a id="VM_Models_Project_IScenarioService_Compose_System_Collections_Generic_IEnumerable_System_Reflection_Assembly__"></a> Compose\(IEnumerable<Assembly\>\)

```csharp
void Compose(IEnumerable<Assembly> assemblies)
```

#### Parameters

`assemblies` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Assembly](https://learn.microsoft.com/dotnet/api/system.reflection.assembly)\>

### <a id="VM_Models_Project_IScenarioService_ContainsName_System_String_"></a> ContainsName\(string\)

```csharp
bool ContainsName(string typeName)
```

#### Parameters

`typeName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Project_IScenarioService_TryGetInstance_System_String_VM_Models_IProjectDocument_System_String_VM_Models_IScenario__"></a> TryGetInstance\(string, IProjectDocument, string, out IScenario\)

```csharp
bool TryGetInstance(string typeName, IProjectDocument parent, string scenarioName, out IScenario scenario)
```

#### Parameters

`typeName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`parent` [IProjectDocument](VM.Models.IProjectDocument.md)

`scenarioName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`scenario` [IScenario](VM.Models.IScenario.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Project_IScenarioService_TryGetType_System_String_System_Type__"></a> TryGetType\(string, out Type\)

```csharp
bool TryGetType(string typeName, out Type scenarioType)
```

#### Parameters

`typeName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`scenarioType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

