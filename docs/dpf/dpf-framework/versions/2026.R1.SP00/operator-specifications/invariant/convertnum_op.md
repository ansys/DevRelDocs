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

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input_ordering |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Input ordering number |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  output_ordering |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Output ordering number |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Expect fields container |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | Data_sources (must contain the full file). |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: invariant

 **Plugin**: mapdl

 **Scripting name**: convertnum_op

 **Full name**: invariant.convertnum_op

 **Internal name**: convertnum_op

 **License**: None

## Examples

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
<br>

## Changelog

- Version 0.0.0: Initial release.