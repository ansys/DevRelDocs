# RADivisionsTagging

<!-- Make "generated" the current module for all API classes so that we can cross-reference them
without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (API classes generally aren't
instantiated by the user). -->

### *class* RADivisionsTagging

Rocky API wrapper to manipulate Divisions Tagging Calculators in a project.

The class corresponds to an individual “Divisions Tagging” calculation under
the “Particles Calculation” item on the project’s data tree. To create the
[`RADivisionsTagging`](#generated.RADivisionsTagging) from a [`RACalculations`](RACalculations.md#generated.RACalculations), use:

```python
selection_process = study.GetElement('Cube <01>)
particles_calculations = study.GetCalculations()
divisions_tagging = particles_calculations.CreateDivisionsTagging(selection_process)
```

**Methods:**

| [`GetDivisionsI`](#generated.RADivisionsTagging.GetDivisionsI)()             | Get the value of "Divisions I".                               |
|------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`GetDivisionsJ`](#generated.RADivisionsTagging.GetDivisionsJ)()             | Get the value of "Divisions J".                               |
| [`GetDivisionsK`](#generated.RADivisionsTagging.GetDivisionsK)()             | Get the value of "Divisions K".                               |
| [`GetGridFunctionName`](#generated.RADivisionsTagging.GetGridFunctionName)() | Get the tagging grid function name.                           |
| [`GetNameMask`](#generated.RADivisionsTagging.GetNameMask)()                 | Get the value of "Name Mask".                                 |
| [`GetTagStride`](#generated.RADivisionsTagging.GetTagStride)()               | Get the value of "Tag Stride".                                |
| [`GetTagValue`](#generated.RADivisionsTagging.GetTagValue)()                 | Get the value of "Tag Value".                                 |
| [`GetTimeRangeFilter`](#generated.RADivisionsTagging.GetTimeRangeFilter)()   | Get the API object that wraps the specific Time Range Filter. |
| [`SetDivisionsI`](#generated.RADivisionsTagging.SetDivisionsI)(value)        | Set the value of "Divisions I".                               |
| [`SetDivisionsJ`](#generated.RADivisionsTagging.SetDivisionsJ)(value)        | Set the value of "Divisions J".                               |
| [`SetDivisionsK`](#generated.RADivisionsTagging.SetDivisionsK)(value)        | Set the value of "Divisions K".                               |
| [`SetNameMask`](#generated.RADivisionsTagging.SetNameMask)(value)            | Set the value of "Name Mask".                                 |
| [`SetTagStride`](#generated.RADivisionsTagging.SetTagStride)(value)          | Set the value of "Tag Stride".                                |
| [`SetTagValue`](#generated.RADivisionsTagging.SetTagValue)(value)            | Set the value of "Tag Value".                                 |

#### GetDivisionsI()

Get the value of “Divisions I”.

#### GetDivisionsJ()

Get the value of “Divisions J”.

#### GetDivisionsK()

Get the value of “Divisions K”.

#### GetGridFunctionName()

Get the tagging grid function name. This name can be used to access the tagging grid
function on a particle-based process.
:rtype: str

#### GetNameMask()

Get the value of “Name Mask”.

#### GetTagStride()

Get the value of “Tag Stride”.

#### GetTagValue()

Get the value of “Tag Value”.

#### GetTimeRangeFilter()

Get the API object that wraps the specific Time Range Filter.
:rtype: RATimeRangeFilter

#### SetDivisionsI(value: Union[str, int])

Set the value of “Divisions I”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

#### SetDivisionsJ(value: Union[str, int])

Set the value of “Divisions J”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

#### SetDivisionsK(value: Union[str, int])

Set the value of “Divisions K”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

#### SetNameMask(value: str)

Set the value of “Name Mask”.

* **Parameters:**
  **value** – The value to set.

#### SetTagStride(value: Union[str, int])

Set the value of “Tag Stride”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

#### SetTagValue(value: Union[str, int])

Set the value of “Tag Value”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.
