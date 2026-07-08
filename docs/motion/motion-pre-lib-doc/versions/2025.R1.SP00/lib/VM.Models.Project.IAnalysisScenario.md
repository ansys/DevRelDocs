#  Interface IAnalysisScenario

Namespace: [VM.Models.Project](VM.Models.Project.md)  
Assembly: VM.Models.Project.Preset.dll  

```csharp
public interface IAnalysisScenario : IScenario, IProjectObject, IHasID, IHasName, IDisposableObject, ISelected, IHasParent<IProjectDocument>
```

#### Implements

IScenario, 
IProjectObject, 
IHasID, 
IHasName, 
IDisposableObject, 
ISelected, 
IHasParent<IProjectDocument\>

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Models_Project_IAnalysisScenario_SaveScenarioData_VM_IScenarioDocument_"></a> SaveScenarioData\(IScenarioDocument\)

```csharp
void SaveScenarioData(IScenarioDocument scenarioDocument)
```

#### Parameters

`scenarioDocument` IScenarioDocument

