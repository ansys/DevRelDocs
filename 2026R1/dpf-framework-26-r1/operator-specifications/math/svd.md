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

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | fields_container |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| s_svd |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Singular values of the input data, where A=U.S.Vt |
|  **Pin 1**| u_svd |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | U of the input data, where A=U.S.Vt |
|  **Pin 2**| vt_svd |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Vt of the input data, where A=U.S.Vt |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: math

 **Plugin**: core

 **Scripting name**: svd

 **Full name**: math.svd

 **Internal name**: svdOp

 **License**: any_dpf_supported_increments

## Examples

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
<br>

## Changelog

- Version 0.0.0: Initial release.