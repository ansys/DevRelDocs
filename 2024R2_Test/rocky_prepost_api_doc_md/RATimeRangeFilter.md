# RATimeRangeFilter

<!-- Make "generated" the current module for all API classes so that we can cross-reference them
without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (API classes generally aren't
instantiated by the user). -->

### *class* RATimeRangeFilter

Rocky API wrapper to manipulate Time Range Filter.

**Methods:**

| [`GetDomainRange`](#generated.RATimeRangeFilter.GetDomainRange)()                       | Get the value of "Domain Range".                      |
|-----------------------------------------------------------------------------------------|-------------------------------------------------------|
| [`GetFinal`](#generated.RATimeRangeFilter.GetFinal)([unit])                             | Get the value of "Final".                             |
| [`GetInitial`](#generated.RATimeRangeFilter.GetInitial)([unit])                         | Get the value of "Initial".                           |
| [`GetValidDomainRangeValues`](#generated.RATimeRangeFilter.GetValidDomainRangeValues)() | Get a list of all possible values for "Domain Range". |
| [`SetDomainRange`](#generated.RATimeRangeFilter.SetDomainRange)(value)                  | Set the value of "Domain Range".                      |
| [`SetFinal`](#generated.RATimeRangeFilter.SetFinal)(value[, unit])                      | Set the value of "Final".                             |
| [`SetInitial`](#generated.RATimeRangeFilter.SetInitial)(value[, unit])                  | Set the value of "Initial".                           |

#### GetDomainRange()

Get the value of “Domain Range”.

#### GetFinal(unit: Optional[str] = None)

Get the value of “Final”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

#### GetInitial(unit: Optional[str] = None)

Get the value of “Initial”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

#### GetValidDomainRangeValues()

Get a list of all possible values for “Domain Range”.

* **Returns:**
  The returned list is [‘Application Time Filter’, ‘All’, ‘Last Output’, ‘Time Range’,
  ‘Specific Time’, ‘After Time’, ‘Time Range Relative to Simulation End’].

#### SetDomainRange(value: str)

Set the value of “Domain Range”.

* **Parameters:**
  **value** – The value to set.

#### SetFinal(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Final”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

#### SetInitial(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Initial”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.
