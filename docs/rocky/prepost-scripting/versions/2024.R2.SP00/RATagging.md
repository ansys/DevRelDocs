# RATagging

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RATagging"></a>

### *class* RATagging

Rocky PrePost Scripting wrapper to manipulate Tagging Calculators in a project.

The class corresponds to an individual “Tagging” calculation under the
“Particles Calculation” item on the project’s data tree. To create the
[`RATagging`](#generated.RATagging) from a [`RACalculations`](RACalculations.md#generated.RACalculations), use:

```python
selection_process = study.GetElement('Particles')
particles_calculations = study.GetCalculations()
tagging = particles_calculations.CreateTagging(selection_process)
```

**Methods:**

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------|
| [`GetGridFunctionName`](#generated.RATagging.GetGridFunctionName)()   | Get the tagging grid function name.                           |
| [`GetNameMask`](#generated.RATagging.GetNameMask)()                   | Get the value of "Name Mask".                                 |
| [`GetTagValue`](#generated.RATagging.GetTagValue)()                   | Get the value of "Tag Value".                                 |
| [`GetTimeRangeFilter`](#generated.RATagging.GetTimeRangeFilter)()     | Get the API object that wraps the specific Time Range Filter. |
| [`SetNameMask`](#generated.RATagging.SetNameMask)(value)              | Set the value of "Name Mask".                                 |
| [`SetTagValue`](#generated.RATagging.SetTagValue)(value)              | Set the value of "Tag Value".                                 |

<a id="generated.RATagging.GetGridFunctionName"></a>

#### GetGridFunctionName()

Get the tagging grid function name. This name can be used to access the tagging grid
function on a particle-based process.
:rtype: str

<a id="generated.RATagging.GetNameMask"></a>

#### GetNameMask()

Get the value of “Name Mask”.

<a id="generated.RATagging.GetTagValue"></a>

#### GetTagValue()

Get the value of “Tag Value”.

<a id="generated.RATagging.GetTimeRangeFilter"></a>

#### GetTimeRangeFilter()

Get the API object that wraps the specific Time Range Filter.
:rtype: RATimeRangeFilter

<a id="generated.RATagging.SetNameMask"></a>

#### SetNameMask(value: str)

Set the value of “Name Mask”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RATagging.SetTagValue"></a>

#### SetTagValue(value: Union[str, int])

Set the value of “Tag Value”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.
