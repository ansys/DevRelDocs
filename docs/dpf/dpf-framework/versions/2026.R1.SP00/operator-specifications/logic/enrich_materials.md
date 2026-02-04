---
category: logic
plugin: core
license: any_dpf_supported_increments
---

# logic:enrich materials

**Version: 0.0.0**

## Description

Takes a MaterialContainer and a stream and enriches the MaterialContainer using stream data.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  MaterialContainer | |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  streams |[`streams_container`](../../core-concepts/dpf-types.md#streams-container), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  streams_mapping |[`property_fields_container`](../../core-concepts/dpf-types.md#property-fields-container) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| MaterialContainer |[`bool`](../../core-concepts/dpf-types.md#standard-types) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: logic

 **Plugin**: core

 **Scripting name**: enrich_materials

 **Full name**: logic.enrich_materials

 **Internal name**: enrich_materials

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("enrich_materials"); // operator instantiation
op.connect(0, my_MaterialContainer);
op.connect(1, my_streams);
op.connect(2, my_streams_mapping);
bool my_MaterialContainer = op.getOutput<bool>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.logic.enrich_materials() # operator instantiation
op.inputs.MaterialContainer.connect(my_MaterialContainer)
op.inputs.streams.connect(my_streams)
op.inputs.streams_mapping.connect(my_streams_mapping)
my_MaterialContainer = op.outputs.MaterialContainer()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.logic.enrich_materials() # operator instantiation
op.inputs.MaterialContainer.Connect(my_MaterialContainer)
op.inputs.streams.Connect(my_streams)
op.inputs.streams_mapping.Connect(my_streams_mapping)
my_MaterialContainer = op.outputs.MaterialContainer.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.