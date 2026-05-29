---
category: result
plugin: mapdl
license: None
---

# result:cms matrices provider

**Version: 0.0.0**

## Description

Read reduced matrices for cms elements. Extract stiffness, damping, mass matrices and load vector from a subfile.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>4</strong> | [data_sources](/docs/dpf/dpf-framework/operator-specifications/result/cms_matrices_provider) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`data_sources`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>200</strong> | [matrix_form](/docs/dpf/dpf-framework/operator-specifications/result/cms_matrices_provider) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="input_4"></a>
### data_sources (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`data_sources`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Data_sources (must contain at list one subfile).

<a id="input_200"></a>
### matrix_form (Pin 200)

- **Required:** Yes
- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

If this pin i set to true, data are return as matrix form.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [fields_container](/docs/dpf/dpf-framework/operator-specifications/result/cms_matrices_provider) |[`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="output_0"></a>
### fields_container (Pin 0)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Fields container containing in this order : stiffness, damping, mass matrices, and then load vector. But if pin 200 is set to true, it's in matrix form.


## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: result

 **Plugin**: mapdl

 **Scripting name**: cms_matrices_provider

 **Full name**: result.cms_matrices_provider

 **Internal name**: cms_matrices_provider

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("cms_matrices_provider"); // operator instantiation
op.connect(4, my_data_sources);
op.connect(200, my_matrix_form);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.cms_matrices_provider() # operator instantiation
op.inputs.data_sources.connect(my_data_sources)
op.inputs.matrix_form.connect(my_matrix_form)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.cms_matrices_provider() # operator instantiation
op.inputs.data_sources.Connect(my_data_sources)
op.inputs.matrix_form.Connect(my_matrix_form)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.