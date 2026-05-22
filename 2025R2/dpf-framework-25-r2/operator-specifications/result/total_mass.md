---
category: result
plugin: mapdl
license: None
---

# result:total mass

**Version: 0.0.0**

## Description

Reads total mass from mode file.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>4</strong> | [data_sources](#input_4) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |


<a id="input_4"></a>
### data_sources (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`data_sources`](../../core-concepts/dpf-types.md#data-sources)

Data sources (must contain at least one mode file).


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [mass](#output_0) |[`double`](../../core-concepts/dpf-types.md#standard-types) |


<a id="output_0"></a>
### mass (Pin 0)

- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

the unit should be grabbed from the rst file


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: result

 **Plugin**: mapdl

 **Scripting name**: total_mass

 **Full name**: result.total_mass

 **Internal name**: mapdl::mode::total_mass

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("mapdl::mode::total_mass"); // operator instantiation
op.connect(4, my_data_sources);
double my_mass = op.getOutput<double>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.total_mass() # operator instantiation
op.inputs.data_sources.connect(my_data_sources)
my_mass = op.outputs.mass()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.total_mass() # operator instantiation
op.inputs.data_sources.Connect(my_data_sources)
my_mass = op.outputs.mass.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.