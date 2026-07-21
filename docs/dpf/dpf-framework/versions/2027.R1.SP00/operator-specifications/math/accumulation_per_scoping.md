---
category: math
plugin: core
license: any_dpf_supported_increments
---

# math:accumulation per scoping

**Version: 0.0.0**

## Description


For each scoping in the input scopings container, computes the entity-wise sum of the input fields container values over that scoping, and the percentage of that sum relative to a master sum.
The sum is computed independently for each field in the container; the output contains one output field per input field, regardless of the container label (time, complex, or other).

The master sum is computed by summing all entity values of the input fields container restricted to the master scoping when provided, or of the full input fields container otherwise.

For cyclic and multistage models, the master scoping and the input scopings container are first expanded to the full mesh.
When a master scoping is provided, each scoping in the input scopings container is intersected with it before accumulation.

Each output field contains one entity per scoping plus one master entity:
- entity id $0$ holds the master sum (or $100\%$ for the percentage output).
- entity ids $1$ to $N$ hold the sum (or percentage of the master sum) for the $N$ scopings of the input scopings container, in the same order.

The percentage is set to $0$ when the master sum is below machine epsilon.


## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [fields_container](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>1</strong> | [mesh_scoping](#input_1) |  |[`scoping`](../../core-concepts/dpf-types.md#scoping) |
| <strong>3</strong> | [streams_container](#input_3) |  |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) |
| <strong>4</strong> | [data_sources](#input_4) |  |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |
| <strong>5</strong> | [scopings_container](#input_5) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) |


<a id="input_0"></a>
### fields_container (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Fields container containing the values to accumulate per scoping.

<a id="input_1"></a>
### mesh_scoping (Pin 1)

- **Required:** No
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)

Master scoping. When provided, each scoping in the input scopings container is intersected with it, and the master sum is computed over this scoping. When omitted, the master sum is computed over the full input fields container and no intersection is performed.

<a id="input_3"></a>
### streams_container (Pin 3)

- **Required:** No
- **Expected type(s):** [`streams_container`](../../core-concepts/dpf-types.md#streams-container)

Streams describing the source result file. Required when no data sources is provided. Used to detect cyclic and multistage models and expand the scopings accordingly. Takes precedence over the data sources when both are provided.

<a id="input_4"></a>
### data_sources (Pin 4)

- **Required:** No
- **Expected type(s):** [`data_sources`](../../core-concepts/dpf-types.md#data-sources)

Data sources describing the source result file. Required when no streams is provided. Used to detect cyclic and multistage models and expand the scopings accordingly.

<a id="input_5"></a>
### scopings_container (Pin 5)

- **Required:** Yes
- **Expected type(s):** [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container)

Scopings container. The sum of the input fields container is computed over each scoping it contains. Must contain at least one scoping.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [accumulation_per_scoping](#output_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **1**| [accumulation_per_scoping_percentage](#output_1) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="output_0"></a>
### accumulation_per_scoping (Pin 0)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Fields container with one field per input field. Each field holds the master sum at entity id $0$ and the per-scoping sums at entity ids $1$ to $N$, following the order of the input scopings container.

<a id="output_1"></a>
### accumulation_per_scoping_percentage (Pin 1)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Fields container with the same layout as the accumulation output. Entity id $0$ is $100$, entity ids $1$ to $N$ contain the per-scoping sum expressed as a percentage of the master sum, or $0$ when the master sum is below machine epsilon.


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: math

 **Plugin**: core

 **Scripting name**: accumulation_per_scoping

 **Full name**: math.accumulation_per_scoping

 **Internal name**: accumulation_per_scoping

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("accumulation_per_scoping"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(1, my_mesh_scoping);
op.connect(3, my_streams_container);
op.connect(4, my_data_sources);
op.connect(5, my_scopings_container);
ansys::dpf::FieldsContainer my_accumulation_per_scoping = op.getOutput<ansys::dpf::FieldsContainer>(0);
ansys::dpf::FieldsContainer my_accumulation_per_scoping_percentage = op.getOutput<ansys::dpf::FieldsContainer>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.math.accumulation_per_scoping() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.streams_container.connect(my_streams_container)
op.inputs.data_sources.connect(my_data_sources)
op.inputs.scopings_container.connect(my_scopings_container)
my_accumulation_per_scoping = op.outputs.accumulation_per_scoping()
my_accumulation_per_scoping_percentage = op.outputs.accumulation_per_scoping_percentage()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.math.accumulation_per_scoping() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
op.inputs.streams_container.Connect(my_streams_container)
op.inputs.data_sources.Connect(my_data_sources)
op.inputs.scopings_container.Connect(my_scopings_container)
my_accumulation_per_scoping = op.outputs.accumulation_per_scoping.GetData()
my_accumulation_per_scoping_percentage = op.outputs.accumulation_per_scoping_percentage.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.