

# RAResidenceTime

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAResidenceTime"></a>

### *class* RAResidenceTime

Rocky PrePost Scripting wrapper to manipulate Residence Time Calculators in a project.

The class corresponds to an individual “Residence Time” calculation under the
“Particles Calculation” item on the project’s data tree. To create the
[`RAResidenceTime`](#generated.RAResidenceTime) from a [`RACalculations`](RACalculations.md#generated.RACalculations), use:

```python
selection_process = study.GetElement('Particles')
particles_calculations = study.GetCalculations()
residence_time = particles_calculations.CreateSelectionResidenceTime(selection_process)
```

**Methods:**

| Name | Description |
|---------------------------------------------------------------------------|--------------------------------|
| [`GetCalculatorName`](#generated.RAResidenceTime.GetCalculatorName)()     | Get the grid function name.    |
| [`GetGridFunctionName`](#generated.RAResidenceTime.GetGridFunctionName)() | Get the grid function name.    |
| [`GetNameMask`](#generated.RAResidenceTime.GetNameMask)()                 | Get the value of "Name Mask".  |
| [`GetStartTime`](#generated.RAResidenceTime.GetStartTime)([unit])         | Get the value of "Start Time". |
| [`GetStopTime`](#generated.RAResidenceTime.GetStopTime)([unit])           | Get the value of "Stop Time".  |
| [`SetNameMask`](#generated.RAResidenceTime.SetNameMask)(value)            | Set the value of "Name Mask".  |
| [`SetStartTime`](#generated.RAResidenceTime.SetStartTime)(value[, unit])  | Set the value of "Start Time". |
| [`SetStopTime`](#generated.RAResidenceTime.SetStopTime)(value[, unit])    | Set the value of "Stop Time".  |

<a id="generated.RAResidenceTime.GetCalculatorName"></a>

#### GetCalculatorName()

Get the grid function name. This name can be used to access the grid
function on a particle-based process.

<a id="generated.RAResidenceTime.GetGridFunctionName"></a>

#### GetGridFunctionName()

Get the grid function name. This name can be used to access the grid
function on a particle-based process.

<a id="generated.RAResidenceTime.GetNameMask"></a>

#### GetNameMask()

Get the value of “Name Mask”.

<a id="generated.RAResidenceTime.GetStartTime"></a>

#### GetStartTime(unit: str | None = None)

Get the value of “Start Time”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

<a id="generated.RAResidenceTime.GetStopTime"></a>

#### GetStopTime(unit: str | None = None)

Get the value of “Stop Time”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

<a id="generated.RAResidenceTime.SetNameMask"></a>

#### SetNameMask(value: str)

Set the value of “Name Mask”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAResidenceTime.SetStartTime"></a>

#### SetStartTime(value: str | float, unit: str | None = None)

Set the value of “Start Time”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

<a id="generated.RAResidenceTime.SetStopTime"></a>

#### SetStopTime(value: str | float, unit: str | None = None)

Set the value of “Stop Time”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.
