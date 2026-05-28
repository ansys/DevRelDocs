---
category: metadata
plugin: core
license: None
namespaces:
  mapdl: [rst, rstp, rth]
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

This operator supports the following keys ([file formats](/docs/dpf/dpf-framework/versions/2027.R1.SP01/index)) for each listed namespace (plugin/solver):

- mapdl: rst, rstp, rth 

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>1</strong> | [solver_element_types_ids](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/metadata/element_types_provider) |  |[`int32`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`vector&lt;int32&gt;`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>3</strong> | [streams](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/metadata/element_types_provider) |  |[`streams_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>4</strong> | [data_sources](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/metadata/element_types_provider) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`data_sources`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>200</strong> | [output_type](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/metadata/element_types_provider) |  |[`int32`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |


<a id="input_1"></a>
### solver_element_types_ids (Pin 1)

- **Required:** No
- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`vector&lt;int32&gt;`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

Element Type ids to recover used by the solver. If not set, all available element types are recovered.

<a id="input_3"></a>
### streams (Pin 3)

- **Required:** No
- **Expected type(s):** [`streams_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

Result file container allowed to be kept open to cache data.

<a id="input_4"></a>
### data_sources (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`data_sources`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

Result file path container, used if no streams are set.

<a id="input_200"></a>
### output_type (Pin 200)

- **Required:** No
- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

Get the output as a GenericDataContainer (pin value 1, default) or as a PropertyField (pin value 2).


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [element_types_data](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/metadata/element_types_provider) |[`generic_data_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`property_field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |


<a id="output_0"></a>
### element_types_data (Pin 0)

- **Expected type(s):** [`generic_data_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`property_field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)




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



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: metadata

 **Plugin**: core

 **Scripting name**: element_types_provider

 **Full name**: metadata.element_types_provider

 **Internal name**: element_types_provider

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

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
<br />

## Changelog

- Version 0.0.0: Initial release.