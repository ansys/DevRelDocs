# RAModuleCollection

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAModuleCollection"></a>

### *class* RAModuleCollection

Rocky PrePost Scripting wrapper for the collection of module in a project.

This wrapper corresponds to the “Modules” item on the project’s data tree. Retrieve the
[`RAModuleCollection`](#generated.RAModuleCollection) from a [`RAStudy`](RAStudy.md#generated.RAStudy) via:

```python
module_collection = study.GetModuleCollection()
```

**Methods:**

| [`GetEnabledModules`](#generated.RAModuleCollection.GetEnabledModules)()   | Get the names of the enabled modules in project.   |
|----------------------------------------------------------------------------|----------------------------------------------------|
| [`GetModule`](#generated.RAModuleCollection.GetModule)(module_name)        | Get a module given its name.                       |
| [`GetModuleNames`](#generated.RAModuleCollection.GetModuleNames)()         | Get the names of the modules in project.           |

<a id="generated.RAModuleCollection.GetEnabledModules"></a>

#### GetEnabledModules()

Get the names of the enabled modules in project.

<a id="generated.RAModuleCollection.GetModule"></a>

#### GetModule(module_name: str)

Get a module given its name.

* **Parameters:**
  **module_name** – The name of the module to get.

<a id="generated.RAModuleCollection.GetModuleNames"></a>

#### GetModuleNames()

Get the names of the modules in project.
