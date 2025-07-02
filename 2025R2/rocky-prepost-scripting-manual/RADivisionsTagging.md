

# RADivisionsTagging

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RADivisionsTagging"></a>

### *class* RADivisionsTagging

Rocky PrePost Scripting wrapper to manipulate Divisions Tagging Calculators in a project.

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

<a id="generated.RADivisionsTagging.GetDivisionsI"></a>

#### GetDivisionsI()

Get the value of “Divisions I”.

<a id="generated.RADivisionsTagging.GetDivisionsJ"></a>

#### GetDivisionsJ()

Get the value of “Divisions J”.

<a id="generated.RADivisionsTagging.GetDivisionsK"></a>

#### GetDivisionsK()

Get the value of “Divisions K”.

<a id="generated.RADivisionsTagging.GetGridFunctionName"></a>

#### GetGridFunctionName()

Get the tagging grid function name. This name can be used to access the tagging grid
function on a particle-based process.
:rtype: str

<a id="generated.RADivisionsTagging.GetNameMask"></a>

#### GetNameMask()

Get the value of “Name Mask”.

<a id="generated.RADivisionsTagging.GetTagStride"></a>

#### GetTagStride()

Get the value of “Tag Stride”.

<a id="generated.RADivisionsTagging.GetTagValue"></a>

#### GetTagValue()

Get the value of “Tag Value”.

<a id="generated.RADivisionsTagging.GetTimeRangeFilter"></a>

#### GetTimeRangeFilter()

Get the API object that wraps the specific Time Range Filter.
:rtype: RATimeRangeFilter

<a id="generated.RADivisionsTagging.SetDivisionsI"></a>

#### SetDivisionsI(value: str | int)

Set the value of “Divisions I”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

<a id="generated.RADivisionsTagging.SetDivisionsJ"></a>

#### SetDivisionsJ(value: str | int)

Set the value of “Divisions J”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

<a id="generated.RADivisionsTagging.SetDivisionsK"></a>

#### SetDivisionsK(value: str | int)

Set the value of “Divisions K”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

<a id="generated.RADivisionsTagging.SetNameMask"></a>

#### SetNameMask(value: str)

Set the value of “Name Mask”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RADivisionsTagging.SetTagStride"></a>

#### SetTagStride(value: str | int)

Set the value of “Tag Stride”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

<a id="generated.RADivisionsTagging.SetTagValue"></a>

#### SetTagValue(value: str | int)

Set the value of “Tag Value”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.
