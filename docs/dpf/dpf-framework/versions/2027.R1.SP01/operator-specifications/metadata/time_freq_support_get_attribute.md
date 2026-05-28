---
category: metadata
plugin: core
license: None
---

# metadata:time freq support get attribute

**Version: 0.0.0**

## Description

Uses the TimeFreqSupport APIs to return a given attribute of the scoping in input.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [time_freq_support](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/metadata/time_freq_support_get_attribute) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`time_freq_support`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>1</strong> | [property_name](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/metadata/time_freq_support_get_attribute) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`string`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>2</strong> | [property_identifier](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/metadata/time_freq_support_get_attribute) |  |[`int32`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`scoping`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>3</strong> | [property_identifier_2](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/metadata/time_freq_support_get_attribute) |  |[`int32`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |


<a id="input_0"></a>
### time_freq_support (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`time_freq_support`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)



<a id="input_1"></a>
### property_name (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`string`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

Supported property names are: "time_freqs", "imaginary_freqs", "frequency_tolerance", "set_id", "cummulative_index", "sets_freqs", "step_id_from_harmonic_index".

<a id="input_2"></a>
### property_identifier (Pin 2)

- **Required:** No
- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`scoping`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

Additional pin for properties "set_id" and "cummulative_index": the step id, for "sets_freqs": the sets scoping, for "step_id_from_harmonic_index" : the harmonic index.

<a id="input_3"></a>
### property_identifier_2 (Pin 3)

- **Required:** No
- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

Additional pin for properties "set_id" and "cummulative_index": the substep id (if none, last substep is considered).


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [property](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/metadata/time_freq_support_get_attribute) |[`double`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`scoping`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |


<a id="output_0"></a>
### property (Pin 0)

- **Expected type(s):** [`double`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`scoping`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

Returns a double for property: "frequency_tolerance", a single-value Scoping for properties for "set_id" and "cummulative_index", an int for "step_id_from_harmonic_index" and a Field otherwise.


## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: metadata

 **Plugin**: core

 **Scripting name**: time_freq_support_get_attribute

 **Full name**: metadata.time_freq_support_get_attribute

 **Internal name**: timefreqsupport::get_attribute

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("timefreqsupport::get_attribute"); // operator instantiation
op.connect(0, my_time_freq_support);
op.connect(1, my_property_name);
op.connect(2, my_property_identifier);
op.connect(3, my_property_identifier_2);
double my_property = op.getOutput<double>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.metadata.time_freq_support_get_attribute() # operator instantiation
op.inputs.time_freq_support.connect(my_time_freq_support)
op.inputs.property_name.connect(my_property_name)
op.inputs.property_identifier.connect(my_property_identifier)
op.inputs.property_identifier_2.connect(my_property_identifier_2)
my_property_as_double = op.outputs.property_as_double()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.metadata.time_freq_support_get_attribute() # operator instantiation
op.inputs.time_freq_support.Connect(my_time_freq_support)
op.inputs.property_name.Connect(my_property_name)
op.inputs.property_identifier.Connect(my_property_identifier)
op.inputs.property_identifier_2.Connect(my_property_identifier_2)
my_property = op.outputs.property.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.