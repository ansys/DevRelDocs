---
category: result
plugin: core
license: any_dpf_supported_increments
---

# result:torque

**Version: 0.0.0**

## Description

Compute torque of a force based on a 3D point. The torque is computed in units consistent with the force and the mesh support.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [fields_container](/docs/dpf/dpf-framework/operator-specifications/result/torque) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>1</strong> | [spoint](/docs/dpf/dpf-framework/operator-specifications/result/torque) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="input_0"></a>
### fields_container (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Fields container containing the nodal forces. The fields must have an associated mesh support.

<a id="input_1"></a>
### spoint (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Field or fields container containing the summation points for each associated field on pin 0. If unitless, it is assumed to be in meters.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [fields_container](/docs/dpf/dpf-framework/operator-specifications/result/torque) |[`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


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

 **Scripting name**: torque

 **Full name**: result.torque

 **Internal name**: torque

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("torque"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(1, my_spoint);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.torque() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.spoint.connect(my_spoint)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.torque() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.spoint.Connect(my_spoint)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.