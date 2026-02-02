---
category: serialization
plugin: csv
license: None
---

# serialization:mechanical csv to field

**Version: 0.0.0**

## Description

Reads mechanical exported csv file

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  unit |`class dataProcessing::unit::CUnit` |  |
| <strong>Pin 1</strong>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |  |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |  |
| <strong>Pin 9</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  requested_location |[`string`](../../core-concepts/dpf-types.md#standard-types), [`field_definition`](../../core-concepts/dpf-types.md#field-definition) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../core-concepts/dpf-types.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: serialization

 **Plugin**: csv

 **Scripting name**: None

 **Full name**: None

 **Internal name**: mechanical_csv_to_field

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("mechanical_csv_to_field"); // operator instantiation
op.connect(0, my_unit);
op.connect(1, my_mesh);
op.connect(4, my_data_sources);
op.connect(9, my_requested_location);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.serialization.None() # operator instantiation
op.inputs.unit.connect(my_unit)
op.inputs.mesh.connect(my_mesh)
op.inputs.data_sources.connect(my_data_sources)
op.inputs.requested_location.connect(my_requested_location)
my_field = op.outputs.field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.serialization.None() # operator instantiation
op.inputs.unit.Connect(my_unit)
op.inputs.mesh.Connect(my_mesh)
op.inputs.data_sources.Connect(my_data_sources)
op.inputs.requested_location.Connect(my_requested_location)
my_field = op.outputs.field.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.