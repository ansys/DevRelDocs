# RAParametricVar

<!-- Make "generated" the current module for all API classes so that we can cross-reference them
without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (API classes generally aren't
instantiated by the user). -->

### *class* RAParametricVar

Rocky API wrapper for a parametric input variable.

Parametric input variables can be retrieved via a project’s [`RAInputVariables`](RAInputVariables.md#generated.RAInputVariables). This
wrapper provides methods to rename the variable and change its value. Example usage:

```python
input_variables = project.GetInputVariables()
variable = input_variables.CreateVariable('a')

variable.SetName('b')
variable.SetValue(100)
```

**Methods:**

| [`GetValue`](#generated.RAParametricVar.GetValue)()      | Get the variable's current value.   |
|----------------------------------------------------------|-------------------------------------|
| [`SetValue`](#generated.RAParametricVar.SetValue)(value) | Set the variable's current value.   |

#### GetValue()

Get the variable’s current value.

#### SetValue(value: float)

Set the variable’s current value.
