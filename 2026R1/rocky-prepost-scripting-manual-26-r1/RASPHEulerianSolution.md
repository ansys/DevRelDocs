

# RASPHEulerianSolution

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RASPHEulerianSolution"></a>

### *class* RASPHEulerianSolution

Rocky PrePost Scripting wrapper for SPH Eulerian Solution properties.

This wrapper corresponds to the “Eulerian Solution” item on a project’s data tree. Access it from
the [`RAStudy`](RAStudy.md#generated.RAStudy) with:

```python
eulerian_solution = study.GetSphEulerianSolution()
```

**Methods:**

| Name | Description |
|----------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| [`DisableEulerianSolution`](#generated.RASPHEulerianSolution.DisableEulerianSolution)()            | Set the value of "Eulerian Solution" to False.                     |
| [`EnableEulerianSolution`](#generated.RASPHEulerianSolution.EnableEulerianSolution)()              | Set the value of "Eulerian Solution" to True.                      |
| [`GetEulerianSolutionEnabled`](#generated.RASPHEulerianSolution.GetEulerianSolutionEnabled)()      | Delegates the method to the project sph settings.                  |
| [`GetMeshColoring`](#generated.RASPHEulerianSolution.GetMeshColoring)(window)                      | Get the RAMeshColoring related to the current object and a window. |
| [`IsEulerianSolutionEnabled`](#generated.RASPHEulerianSolution.IsEulerianSolutionEnabled)()        | Check if the "Eulerian Solution" is enabled.                       |
| [`SetEulerianSolutionEnabled`](#generated.RASPHEulerianSolution.SetEulerianSolutionEnabled)(value) | Delegate the method to the project sph settings.                   |

<a id="generated.RASPHEulerianSolution.DisableEulerianSolution"></a>

#### DisableEulerianSolution()

Set the value of “Eulerian Solution” to False.

<a id="generated.RASPHEulerianSolution.EnableEulerianSolution"></a>

#### EnableEulerianSolution()

Set the value of “Eulerian Solution” to True.

<a id="generated.RASPHEulerianSolution.GetEulerianSolutionEnabled"></a>

#### GetEulerianSolutionEnabled()

Delegates the method to the project sph settings.

<a id="generated.RASPHEulerianSolution.GetMeshColoring"></a>

#### GetMeshColoring(window: str | type[KAWorkspaceWindow])

Get the RAMeshColoring related to the current object and a window.

* **Parameters:**
  **window** – The window that the coloring is acting. The window must be a str of the name of the
  window or a KAWorkspaceWindow.
* **Raises:**
  **RockyApiError** – If window is not a str or KAWorkspaceWindow. Additionally, raises an error if no window
  is found or no coloring for the given item exists.

<a id="generated.RASPHEulerianSolution.IsEulerianSolutionEnabled"></a>

#### IsEulerianSolutionEnabled()

Check if the “Eulerian Solution” is enabled.

<a id="generated.RASPHEulerianSolution.SetEulerianSolutionEnabled"></a>

#### SetEulerianSolutionEnabled(value: bool)

Delegate the method to the project sph settings.

* **Parameters:**
  **value** – The value to set.
