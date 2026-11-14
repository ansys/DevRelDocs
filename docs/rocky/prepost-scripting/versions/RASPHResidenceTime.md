

# RASPHResidenceTime

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RASPHResidenceTime"></a>

### *class* RASPHResidenceTime

Rocky PrePost Scripting wrapper to manipulate SPH Residence Time Calculators in a project.

The class corresponds to an individual “Residence Time (SPH)” calculation under the
“Calculation” item on the project’s data tree. To create the
`RASphResidenceTime` from a [`RACalculations`](RACalculations.md#generated.RACalculations), use:

```python
selection_process = study.GetElement('SPH')
calculations = study.GetCalculations()
residence_time = calculations.CreateSelectionResidenceTime(selection_process)
```

**Methods:**

| Name | Description |
|------------------------------------------------------------------------------|--------------------------------|
| [`GetCalculatorName`](#generated.RASPHResidenceTime.GetCalculatorName)()     | Get the grid function name.    |
| [`GetGridFunctionName`](#generated.RASPHResidenceTime.GetGridFunctionName)() | Get the grid function name.    |
| [`GetNameMask`](#generated.RASPHResidenceTime.GetNameMask)()                 | Get the value of "Name Mask".  |
| [`GetStartTime`](#generated.RASPHResidenceTime.GetStartTime)([unit])         | Get the value of "Start Time". |
| [`GetStopTime`](#generated.RASPHResidenceTime.GetStopTime)([unit])           | Get the value of "Stop Time".  |
| [`SetNameMask`](#generated.RASPHResidenceTime.SetNameMask)(value)            | Set the value of "Name Mask".  |
| [`SetStartTime`](#generated.RASPHResidenceTime.SetStartTime)(value[, unit])  | Set the value of "Start Time". |
| [`SetStopTime`](#generated.RASPHResidenceTime.SetStopTime)(value[, unit])    | Set the value of "Stop Time".  |

<a id="generated.RASPHResidenceTime.GetCalculatorName"></a>

#### GetCalculatorName()

Get the grid function name. This name can be used to access the grid
function on a SPH-based process.

<a id="generated.RASPHResidenceTime.GetGridFunctionName"></a>

#### GetGridFunctionName()

Get the grid function name. This name can be used to access the grid
function on a SPH-based process.

<a id="generated.RASPHResidenceTime.GetNameMask"></a>

#### GetNameMask()

Get the value of “Name Mask”.

<a id="generated.RASPHResidenceTime.GetStartTime"></a>

#### GetStartTime(unit: str | None = None)

Get the value of “Start Time”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

<a id="generated.RASPHResidenceTime.GetStopTime"></a>

#### GetStopTime(unit: str | None = None)

Get the value of “Stop Time”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

<a id="generated.RASPHResidenceTime.SetNameMask"></a>

#### SetNameMask(value: str)

Set the value of “Name Mask”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RASPHResidenceTime.SetStartTime"></a>

#### SetStartTime(value: str | float, unit: str | None = None)

Set the value of “Start Time”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

<a id="generated.RASPHResidenceTime.SetStopTime"></a>

#### SetStopTime(value: str | float, unit: str | None = None)

Set the value of “Stop Time”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.
