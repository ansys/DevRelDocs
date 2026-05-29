---
category: invariant
plugin: mapdl
license: None
---

# invariant:convertnum operator

**Version: 0.0.0**

## Description

Converts a fields container from one mapdl ordering to another mapdl ordering. Supported mapdl ordering are BCS=0, FUL=1, NOD=2.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [input_ordering](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/invariant/convertnum_op) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`int32`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>1</strong> | [output_ordering](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/invariant/convertnum_op) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`int32`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>2</strong> | [fields_container](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/invariant/convertnum_op) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>4</strong> | [data_sources](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/invariant/convertnum_op) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`data_sources`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |


<a id="input_0"></a>
### input_ordering (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Input ordering number

<a id="input_1"></a>
### output_ordering (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Output ordering number

<a id="input_2"></a>
### fields_container (Pin 2)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Expect fields container

<a id="input_4"></a>
### data_sources (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`data_sources`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Data_sources (must contain the full file).


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [fields_container](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/invariant/convertnum_op) |[`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |


<a id="output_0"></a>
### fields_container (Pin 0)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)




## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: invariant

 **Plugin**: mapdl

 **Scripting name**: convertnum_op

 **Full name**: invariant.convertnum_op

 **Internal name**: convertnum_op

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("convertnum_op"); // operator instantiation
op.connect(0, my_input_ordering);
op.connect(1, my_output_ordering);
op.connect(2, my_fields_container);
op.connect(4, my_data_sources);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.invariant.convertnum_op() # operator instantiation
op.inputs.input_ordering.connect(my_input_ordering)
op.inputs.output_ordering.connect(my_output_ordering)
op.inputs.fields_container.connect(my_fields_container)
op.inputs.data_sources.connect(my_data_sources)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.invariant.convertnum_op() # operator instantiation
op.inputs.input_ordering.Connect(my_input_ordering)
op.inputs.output_ordering.Connect(my_output_ordering)
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.data_sources.Connect(my_data_sources)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.