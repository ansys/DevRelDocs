---
category: metadata
plugin: core
license: None
---

# metadata:element types provider

**Version: 0.0.0**

## Description

Reads element types data from the result files contained in the streams or data sources.
- If the output is a GenericDataContainer, its class_name is ElementTypesProperties and it contains the following property fields:
  - element_routine_number: Element routine number. E.g 186 for SOLID186.
  - keyopts: Element type option keys.
  - kdofs: DOF/node for this element type. This is a bit mapping.
  - nodelm: Number of nodes for this element type.
  - nodfor: Number of nodes per element having nodal forces.
  - nodstr: Number of nodes per element having nodal stresses.
  - new_gen_element: Element of new generation.
- If the output is a PropertyField, it contains the 200 possible ElementTypesProperties for each solver element type id. These properties are in the order documented in ansys/customize/include/echprm.inc and have the meaning documented in ansys/customize/include/elccmt.inc.

## Supported file types

This operator supports the following keys ([file formats](../../index.md#overview-of-dpf)) for each listed namespace (plugin/solver):

- mapdl: rst, rstp, rth 

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>1</strong>|  [solver_element_types_ids](#input_1) |[`int32`](../../core-concepts/dpf-types.md#standard-types), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>3</strong>|  [streams](#input_3) |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) |
| <strong>4</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [data_sources](#input_4) |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |
| <strong>200</strong>|  [output_type](#input_200) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_1"></a>
### solver_element_types_ids (Pin 1)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types)

Element Type ids to recover used by the solver. If not set, all available element types are recovered.

<a id="input_3"></a>
### streams (Pin 3)

- **Required:** No
- **Expected type(s):** [`streams_container`](../../core-concepts/dpf-types.md#streams-container)

Result file container allowed to be kept open to cache data.

<a id="input_4"></a>
### data_sources (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`data_sources`](../../core-concepts/dpf-types.md#data-sources)

Result file path container, used if no streams are set.

<a id="input_200"></a>
### output_type (Pin 200)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Get the output as a GenericDataContainer (pin value 1, default) or as a PropertyField (pin value 2).


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [element_types_data](#output_0) |[`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container), [`property_field`](../../core-concepts/dpf-types.md#property-field) |


<a id="output_0"></a>
### element_types_data (Pin 0)

- **Expected type(s):** [`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container), [`property_field`](../../core-concepts/dpf-types.md#property-field)




## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### num_threads

- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** 0

Number of threads to use to run in parallel

### run_in_parallel

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** true

Loops are allowed to run in parallel if the value of this config is set to true.



## Scripting

 **Category**: metadata

 **Plugin**: core

 **Scripting name**: element_types_provider

 **Full name**: metadata.element_types_provider

 **Internal name**: element_types_provider

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("element_types_provider"); // operator instantiation
op.connect(1, my_solver_element_types_ids);
op.connect(3, my_streams);
op.connect(4, my_data_sources);
op.connect(200, my_output_type);
ansys::dpf::GenericDataContainer my_element_types_data = op.getOutput<ansys::dpf::GenericDataContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.metadata.element_types_provider() # operator instantiation
op.inputs.solver_element_types_ids.connect(my_solver_element_types_ids)
op.inputs.streams.connect(my_streams)
op.inputs.data_sources.connect(my_data_sources)
op.inputs.output_type.connect(my_output_type)
my_element_types_data_as_generic_data_container = op.outputs.element_types_data_as_generic_data_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.metadata.element_types_provider() # operator instantiation
op.inputs.solver_element_types_ids.Connect(my_solver_element_types_ids)
op.inputs.streams.Connect(my_streams)
op.inputs.data_sources.Connect(my_data_sources)
op.inputs.output_type.Connect(my_output_type)
my_element_types_data = op.outputs.element_types_data.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.