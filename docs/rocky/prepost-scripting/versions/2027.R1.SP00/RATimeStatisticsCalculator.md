

# RATimeStatisticsCalculator

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RATimeStatisticsCalculator"></a>

### *class* RATimeStatisticsCalculator

PrePost Scripting wrapper for TimeStatisticsCalculators.

Supports getting/setting the start and stop times, and retrieving the name of the grid function
generated (for use with the rest of the API).

**Methods:**

| Name | Description |
|----------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| [`GetGridFunctionName`](#generated.RATimeStatisticsCalculator.GetGridFunctionName)()   | Get the name of this time statistics grid function, usable on the rest of the API.   |
| [`GetStartTime`](#generated.RATimeStatisticsCalculator.GetStartTime)([unit])           | Get the value of "Start Time".                                                       |
| [`GetStopTime`](#generated.RATimeStatisticsCalculator.GetStopTime)([unit])             | Get the value of "Stop Time".                                                        |
| [`SetStartTime`](#generated.RATimeStatisticsCalculator.SetStartTime)(value[, unit])    | Set the value of "Start Time".                                                       |
| [`SetStopTime`](#generated.RATimeStatisticsCalculator.SetStopTime)(value[, unit])      | Set the value of "Stop Time".                                                        |

<a id="generated.RATimeStatisticsCalculator.GetGridFunctionName"></a>

#### GetGridFunctionName()

Get the name of this time statistics grid function, usable on the rest of the API.

<a id="generated.RATimeStatisticsCalculator.GetStartTime"></a>

#### GetStartTime(unit: str | None = None)

Get the value of “Start Time”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

<a id="generated.RATimeStatisticsCalculator.GetStopTime"></a>

#### GetStopTime(unit: str | None = None)

Get the value of “Stop Time”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

<a id="generated.RATimeStatisticsCalculator.SetStartTime"></a>

#### SetStartTime(value: str | float, unit: str | None = None)

Set the value of “Start Time”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

<a id="generated.RATimeStatisticsCalculator.SetStopTime"></a>

#### SetStopTime(value: str | float, unit: str | None = None)

Set the value of “Stop Time”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.
