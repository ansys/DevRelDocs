

# RAParametricVar

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAParametricVar"></a>

### *class* RAParametricVar

Rocky PrePost Scripting wrapper for a parametric input variable.

Parametric input variables can be retrieved via a project’s [`RAInputVariables`](RAInputVariables.md#generated.RAInputVariables). This
wrapper provides methods to rename the variable and change its value. Example usage:

```python
input_variables = project.GetInputVariables()
variable = input_variables.CreateVariable('a')

variable.SetName('b')
variable.SetValue(100)
```

**Methods:**

| Name | Description |
|----------------------------------------------------------|-------------------------------------|
| [`GetValue`](#generated.RAParametricVar.GetValue)()      | Get the variable's current value.   |
| [`SetValue`](#generated.RAParametricVar.SetValue)(value) | Set the variable's current value.   |

<a id="generated.RAParametricVar.GetValue"></a>

#### GetValue()

Get the variable’s current value.

<a id="generated.RAParametricVar.SetValue"></a>

#### SetValue(value: float)

Set the variable’s current value.
