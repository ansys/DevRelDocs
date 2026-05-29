---
category: math
plugin: core
license: any_dpf_supported_increments
---

# math:svd

**Version: 0.0.0**

## Description

Computes the matrix singular value decomposition (SVD) for each field in the given fields container.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [fields_container](/docs/dpf/dpf-framework/operator-specifications/math/svd) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="input_0"></a>
### fields_container (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

fields_container


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [s_svd](/docs/dpf/dpf-framework/operator-specifications/math/svd) |[`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
|  **1**| [u_svd](/docs/dpf/dpf-framework/operator-specifications/math/svd) |[`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
|  **2**| [vt_svd](/docs/dpf/dpf-framework/operator-specifications/math/svd) |[`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="output_0"></a>
### s_svd (Pin 0)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Singular values of the input data, where A=U.S.Vt

<a id="output_1"></a>
### u_svd (Pin 1)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

U of the input data, where A=U.S.Vt

<a id="output_2"></a>
### vt_svd (Pin 2)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Vt of the input data, where A=U.S.Vt


## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: math

 **Plugin**: core

 **Scripting name**: svd

 **Full name**: math.svd

 **Internal name**: svdOp

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("svdOp"); // operator instantiation
op.connect(0, my_fields_container);
ansys::dpf::FieldsContainer my_s_svd = op.getOutput<ansys::dpf::FieldsContainer>(0);
ansys::dpf::FieldsContainer my_u_svd = op.getOutput<ansys::dpf::FieldsContainer>(1);
ansys::dpf::FieldsContainer my_vt_svd = op.getOutput<ansys::dpf::FieldsContainer>(2);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.math.svd() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
my_s_svd = op.outputs.s_svd()
my_u_svd = op.outputs.u_svd()
my_vt_svd = op.outputs.vt_svd()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.math.svd() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
my_s_svd = op.outputs.s_svd.GetData()
my_u_svd = op.outputs.u_svd.GetData()
my_vt_svd = op.outputs.vt_svd.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.