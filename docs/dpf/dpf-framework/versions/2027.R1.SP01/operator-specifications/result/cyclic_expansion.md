---
category: result
plugin: core
license: None
---

# result:cyclic expansion

**Version: 0.0.0**

## Description

Expand cyclic results from a fieldsContainer for given sets, sectors and scoping (optionals).

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [time_scoping](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/result/cyclic_expansion) |  |[`scoping`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`vector&lt;int32&gt;`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>1</strong> | [mesh_scoping](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/result/cyclic_expansion) |  |[`scopings_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`scoping`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`vector&lt;int32&gt;`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>2</strong> | [fields_container](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/result/cyclic_expansion) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>3</strong> | [harmonic_index](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/result/cyclic_expansion) |  |[`int32`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>5</strong> | [bool_rotate_to_global](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/result/cyclic_expansion) |  |[`bool`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>6</strong> | [map_size_scoping_out](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/result/cyclic_expansion) |  |`umap<int32,int32>` |
| <strong>7</strong> | [normalization_factor](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/result/cyclic_expansion) |  |[`double`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>14</strong> | [merge_stages](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/result/cyclic_expansion) |  |[`bool`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>16</strong> | [cyclic_support](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/result/cyclic_expansion) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`cyclic_support`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>18</strong> | [sectors_to_expand](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/result/cyclic_expansion) |  |[`vector&lt;int32&gt;`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`scoping`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`scopings_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>19</strong> | [phi](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/result/cyclic_expansion) |  |[`double`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |


<a id="input_0"></a>
### time_scoping (Pin 0)

- **Required:** No
- **Expected type(s):** [`scoping`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`vector&lt;int32&gt;`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)



<a id="input_1"></a>
### mesh_scoping (Pin 1)

- **Required:** No
- **Expected type(s):** [`scopings_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`scoping`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`vector&lt;int32&gt;`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)



<a id="input_2"></a>
### fields_container (Pin 2)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

field container with the base and duplicate sectors

<a id="input_3"></a>
### harmonic_index (Pin 3)

- **Required:** No
- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)



<a id="input_5"></a>
### bool_rotate_to_global (Pin 5)

- **Required:** No
- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

default is true

<a id="input_6"></a>
### map_size_scoping_out (Pin 6)

- **Required:** No
- **Expected type(s):** `umap<int32,int32>`

map provider by scoping adapter

<a id="input_7"></a>
### normalization_factor (Pin 7)

- **Required:** No
- **Expected type(s):** [`double`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)



<a id="input_14"></a>
### merge_stages (Pin 14)

- **Required:** No
- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)



<a id="input_16"></a>
### cyclic_support (Pin 16)

- **Required:** Yes
- **Expected type(s):** [`cyclic_support`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)



<a id="input_18"></a>
### sectors_to_expand (Pin 18)

- **Required:** No
- **Expected type(s):** [`vector&lt;int32&gt;`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`scoping`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`scopings_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

sectors to expand (start at 0), for multistage: use scopings container with 'stage' label.

<a id="input_19"></a>
### phi (Pin 19)

- **Required:** No
- **Expected type(s):** [`double`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

angle phi in degrees (default value 0.0)


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [fields_container](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/result/cyclic_expansion) |[`fields_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |


<a id="output_0"></a>
### fields_container (Pin 0)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

FieldsContainer filled in


## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### [num_threads](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/operator-configurations)

- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)
- **Default value:** 0

Number of threads to use to run in parallel

### [run_in_parallel](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)
- **Default value:** true

Loops are allowed to run in parallel if the value of this config is set to true.

### [use_cache](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)
- **Default value:** true

Some intermediate data is put in cache if this config is set to true. This option can reduce computation time after the first run.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: result

 **Plugin**: core

 **Scripting name**: cyclic_expansion

 **Full name**: result.cyclic_expansion

 **Internal name**: cyclic_expansion

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("cyclic_expansion"); // operator instantiation
op.connect(0, my_time_scoping);
op.connect(1, my_mesh_scoping);
op.connect(2, my_fields_container);
op.connect(3, my_harmonic_index);
op.connect(5, my_bool_rotate_to_global);
op.connect(6, my_map_size_scoping_out);
op.connect(7, my_normalization_factor);
op.connect(14, my_merge_stages);
op.connect(16, my_cyclic_support);
op.connect(18, my_sectors_to_expand);
op.connect(19, my_phi);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.cyclic_expansion() # operator instantiation
op.inputs.time_scoping.connect(my_time_scoping)
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.fields_container.connect(my_fields_container)
op.inputs.harmonic_index.connect(my_harmonic_index)
op.inputs.bool_rotate_to_global.connect(my_bool_rotate_to_global)
op.inputs.map_size_scoping_out.connect(my_map_size_scoping_out)
op.inputs.normalization_factor.connect(my_normalization_factor)
op.inputs.merge_stages.connect(my_merge_stages)
op.inputs.cyclic_support.connect(my_cyclic_support)
op.inputs.sectors_to_expand.connect(my_sectors_to_expand)
op.inputs.phi.connect(my_phi)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.cyclic_expansion() # operator instantiation
op.inputs.time_scoping.Connect(my_time_scoping)
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.harmonic_index.Connect(my_harmonic_index)
op.inputs.bool_rotate_to_global.Connect(my_bool_rotate_to_global)
op.inputs.map_size_scoping_out.Connect(my_map_size_scoping_out)
op.inputs.normalization_factor.Connect(my_normalization_factor)
op.inputs.merge_stages.Connect(my_merge_stages)
op.inputs.cyclic_support.Connect(my_cyclic_support)
op.inputs.sectors_to_expand.Connect(my_sectors_to_expand)
op.inputs.phi.Connect(my_phi)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.