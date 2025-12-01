---
category: math
plugin: core
license: None
---

# math:average over label

**Version: 0.0.0**

## Description

Compute the component-wise average over all the fields that have the same ID as the label set as input in the fields container. This computation can be incremental. If the input fields container is connected and the operator is run multiple times, the output field will be on all the connected inputs.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 1</strong>|  label |[`string`](../../core-concepts/dpf-types.md#standard-types) | Label of the fields container where it should operate. If not defined and the input Fields Container has only one Label, the operation will be done over all the fields. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../core-concepts/dpf-types.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **incremental** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | This operator can be run several times with different inputs so that the output will take all the inputs of the different runs into account. It can be used to save memory. For example, a large time scoping can be split in smaller ranges of time to compute the result range by range. |
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: math

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: average_over_label_fc

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("average_over_label_fc"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(1, my_label);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.math.None() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.label.connect(my_label)
my_field = op.outputs.field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.math.None() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.label.Connect(my_label)
my_field = op.outputs.field.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.