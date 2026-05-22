---
category: logic
plugin: core
license: any_dpf_supported_increments
---

# logic:enrich materials

**Version: 0.0.0**

## Description

Takes a MaterialContainer and a stream and enriches the MaterialContainer using stream data.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [MaterialContainer](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>| |
| <strong>1</strong> | [streams](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`streams_container`](../../core-concepts/dpf-types.md#streams-container), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>2</strong> | [streams_mapping](#input_2) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`property_fields_container`](../../core-concepts/dpf-types.md#property-fields-container) |


<a id="input_0"></a>
### MaterialContainer (Pin 0)

- **Required:** Yes
- **Expected type(s):** 



<a id="input_1"></a>
### streams (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`streams_container`](../../core-concepts/dpf-types.md#streams-container), [`fields_container`](../../core-concepts/dpf-types.md#fields-container)



<a id="input_2"></a>
### streams_mapping (Pin 2)

- **Required:** Yes
- **Expected type(s):** [`property_fields_container`](../../core-concepts/dpf-types.md#property-fields-container)




## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [MaterialContainer](#output_0) |[`bool`](../../core-concepts/dpf-types.md#standard-types) |


<a id="output_0"></a>
### MaterialContainer (Pin 0)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)




## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: logic

 **Plugin**: core

 **Scripting name**: enrich_materials

 **Full name**: logic.enrich_materials

 **Internal name**: enrich_materials

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("enrich_materials"); // operator instantiation
op.connect(0, my_MaterialContainer);
op.connect(1, my_streams);
op.connect(2, my_streams_mapping);
bool my_MaterialContainer = op.getOutput<bool>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.logic.enrich_materials() # operator instantiation
op.inputs.MaterialContainer.connect(my_MaterialContainer)
op.inputs.streams.connect(my_streams)
op.inputs.streams_mapping.connect(my_streams_mapping)
my_MaterialContainer = op.outputs.MaterialContainer()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.logic.enrich_materials() # operator instantiation
op.inputs.MaterialContainer.Connect(my_MaterialContainer)
op.inputs.streams.Connect(my_streams)
op.inputs.streams_mapping.Connect(my_streams_mapping)
my_MaterialContainer = op.outputs.MaterialContainer.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.