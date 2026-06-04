

# RATimeRangeFilter

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RATimeRangeFilter"></a>

### *class* RATimeRangeFilter

Rocky PrePost Scripting wrapper to manipulate Time Range Filter.

**Methods:**

| Name | Description |
|-----------------------------------------------------------------------------------------|-------------------------------------------------------|
| [`GetDomainRange`](#generated.RATimeRangeFilter.GetDomainRange)()                       | Get the value of "Domain Range".                      |
| [`GetFinal`](#generated.RATimeRangeFilter.GetFinal)([unit])                             | Get the value of "Final".                             |
| [`GetInitial`](#generated.RATimeRangeFilter.GetInitial)([unit])                         | Get the value of "Initial".                           |
| [`GetValidDomainRangeValues`](#generated.RATimeRangeFilter.GetValidDomainRangeValues)() | Get a list of all possible values for "Domain Range". |
| [`SetDomainRange`](#generated.RATimeRangeFilter.SetDomainRange)(value)                  | Set the value of "Domain Range".                      |
| [`SetFinal`](#generated.RATimeRangeFilter.SetFinal)(value[, unit])                      | Set the value of "Final".                             |
| [`SetInitial`](#generated.RATimeRangeFilter.SetInitial)(value[, unit])                  | Set the value of "Initial".                           |

<a id="generated.RATimeRangeFilter.GetDomainRange"></a>

#### GetDomainRange()

Get the value of “Domain Range”.

<a id="generated.RATimeRangeFilter.GetFinal"></a>

#### GetFinal(unit: str | None = None)

Get the value of “Final”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

<a id="generated.RATimeRangeFilter.GetInitial"></a>

#### GetInitial(unit: str | None = None)

Get the value of “Initial”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

<a id="generated.RATimeRangeFilter.GetValidDomainRangeValues"></a>

#### GetValidDomainRangeValues()

Get a list of all possible values for “Domain Range”.

* **Returns:**
  The returned list is [‘Application Time Filter’, ‘All’, ‘Last Output’, ‘Time Range’,
  ‘Specific Time’, ‘After Time’, ‘Time Range Relative to Simulation End’].

<a id="generated.RATimeRangeFilter.SetDomainRange"></a>

#### SetDomainRange(value: str)

Set the value of “Domain Range”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RATimeRangeFilter.SetFinal"></a>

#### SetFinal(value: str | float, unit: str | None = None)

Set the value of “Final”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

<a id="generated.RATimeRangeFilter.SetInitial"></a>

#### SetInitial(value: str | float, unit: str | None = None)

Set the value of “Initial”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.
