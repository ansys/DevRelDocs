

# RAInputVariables

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAInputVariables"></a>

### *class* RAInputVariables

Rocky PrePost Scripting wrapper for the list of parametric input variables.

The input variables correspond to the Variables list on the Input tab of a project’s
Expressions/Variables dock. This wrapper can be used to create, remove and list a project’s
input variables.

Retrieve the [`RAInputVariables`](#generated.RAInputVariables) through the corresponding [`RAProject`](RAProject.md#generated.RAProject).
Example usage:

```python
project = app.GetProject()
input_variables = project.GetInputVariables()

input_variables.CreateVariable('a', value=1)
input_variables.CreateVariable('b', value=2)

input_variables.RemoveVariable('a')

for variable in input_variables:
    variable.SetValue(3)

b = input_variables.GetVariableByName('b')
b.SetValue(4)
```

**Methods:**

| Name | Description |
|---------------------------------------------------------------------------------|----------------------------------------------|
| [`CreateVariable`](#generated.RAInputVariables.CreateVariable)(name[, value])   | Create a new input variable.                 |
| [`GetVariableByName`](#generated.RAInputVariables.GetVariableByName)(name)      | Get an existing input variable via its name. |
| [`RemoveVariable`](#generated.RAInputVariables.RemoveVariable)(variable)        | Remove an input variable.                    |

<a id="generated.RAInputVariables.CreateVariable"></a>

#### CreateVariable(name: str, value: float = 0.0)

Create a new input variable. Returns the new variable.

* **Parameters:**
  * **name** – The variable’s name.
  * **value** – The initial value for the variable.

<a id="generated.RAInputVariables.GetVariableByName"></a>

#### GetVariableByName(name: str)

Get an existing input variable via its name.

* **Parameters:**
  **name** – The input variable’s name.

<a id="generated.RAInputVariables.RemoveVariable"></a>

#### RemoveVariable(variable: [RAParametricVar](RAParametricVar.md#generated.RAParametricVar) | str)

Remove an input variable.

* **Parameters:**
  **variable** – Either an instance of RAParametricVar or the name of the variable to remove.
