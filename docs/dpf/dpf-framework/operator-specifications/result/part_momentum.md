---
category: result
plugin: core
license: None
namespaces:
  hdf5: [h5dpf]
  lsdyna: [binout]
---

# result:part momentum (LSDyna)

**Version: 0.0.0**

## Description

Read Part Momentum (LSDyna) by calling the readers defined by the datasources.

## Supported file types

This operator supports the following keys ([file formats](/docs/dpf/dpf-framework/index)) for each listed namespace (plugin/solver):

- hdf5: h5dpf 
- lsdyna: binout 

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>3</strong> | [streams_container](/docs/dpf/dpf-framework/operator-specifications/result/part_momentum) |  |[`streams_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>4</strong> | [data_sources](/docs/dpf/dpf-framework/operator-specifications/result/part_momentum) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`data_sources`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>6</strong> | [entity_scoping](/docs/dpf/dpf-framework/operator-specifications/result/part_momentum) |  |[`scoping`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>50</strong> | [unit_system](/docs/dpf/dpf-framework/operator-specifications/result/part_momentum) |  |[`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`string`](/docs/dpf/dpf-framework/core-concepts/dpf-types), `class dataProcessing::unit::CUnitSystem` |


<a id="input_3"></a>
### streams_container (Pin 3)

- **Required:** No
- **Expected type(s):** [`streams_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

result file container allowed to be kept open to cache data

<a id="input_4"></a>
### data_sources (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`data_sources`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

result file path container, used if no streams are set

<a id="input_6"></a>
### entity_scoping (Pin 6)

- **Required:** No
- **Expected type(s):** [`scoping`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

entity (part for matsum, interface for rcforc) where the result will be scoped

<a id="input_50"></a>
### unit_system (Pin 50)

- **Required:** No
- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`string`](/docs/dpf/dpf-framework/core-concepts/dpf-types), `class dataProcessing::unit::CUnitSystem`

(LSDyna) Unit System ID (int), semicolon-separated list of base unit strings (str) or UnitSystem instance


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [fields_container](/docs/dpf/dpf-framework/operator-specifications/result/part_momentum) |[`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="output_0"></a>
### fields_container (Pin 0)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)




## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: result

 **Plugin**: core

 **Scripting name**: part_momentum

 **Full name**: result.part_momentum

 **Internal name**: M_MV

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("M_MV"); // operator instantiation
op.connect(3, my_streams_container);
op.connect(4, my_data_sources);
op.connect(6, my_entity_scoping);
op.connect(50, my_unit_system);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.part_momentum() # operator instantiation
op.inputs.streams_container.connect(my_streams_container)
op.inputs.data_sources.connect(my_data_sources)
op.inputs.entity_scoping.connect(my_entity_scoping)
op.inputs.unit_system.connect(my_unit_system)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.part_momentum() # operator instantiation
op.inputs.streams_container.Connect(my_streams_container)
op.inputs.data_sources.Connect(my_data_sources)
op.inputs.entity_scoping.Connect(my_entity_scoping)
op.inputs.unit_system.Connect(my_unit_system)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.