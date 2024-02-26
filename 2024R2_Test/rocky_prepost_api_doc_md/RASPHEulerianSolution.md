# RASPHEulerianSolution

<!-- Make "generated" the current module for all API classes so that we can cross-reference them
without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (API classes generally aren't
instantiated by the user). -->

### *class* RASPHEulerianSolution

Rocky API wrapper for SPH Eulerian Solution properties.

This wrapper corresponds to the “Eulerian Solution” item on a project’s data tree. Access it from
the [`RAStudy`](RAStudy.md#generated.RAStudy) with:

```python
eulerian_solution = study.GetSphEulerianSolution()
```

**Methods:**

| [`DisableEulerianSolution`](#generated.RASPHEulerianSolution.DisableEulerianSolution)()            | Set the value of "Eulerian Solution" to False.    |
|----------------------------------------------------------------------------------------------------|---------------------------------------------------|
| [`EnableEulerianSolution`](#generated.RASPHEulerianSolution.EnableEulerianSolution)()              | Set the value of "Eulerian Solution" to True.     |
| [`GetEulerianSolutionEnabled`](#generated.RASPHEulerianSolution.GetEulerianSolutionEnabled)()      | Delegates the method to the project sph settings. |
| [`IsEulerianSolutionEnabled`](#generated.RASPHEulerianSolution.IsEulerianSolutionEnabled)()        | Check if the "Eulerian Solution" is enabled.      |
| [`SetEulerianSolutionEnabled`](#generated.RASPHEulerianSolution.SetEulerianSolutionEnabled)(value) | Delegate the method to the project sph settings.  |

#### DisableEulerianSolution()

Set the value of “Eulerian Solution” to False.

#### EnableEulerianSolution()

Set the value of “Eulerian Solution” to True.

#### GetEulerianSolutionEnabled()

Delegates the method to the project sph settings.

#### IsEulerianSolutionEnabled()

Check if the “Eulerian Solution” is enabled.

#### SetEulerianSolutionEnabled(value: bool)

Delegate the method to the project sph settings.

* **Parameters:**
  **value** – The value to set.
