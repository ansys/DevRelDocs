---
category: scoping
plugin: core
license: None
---

# scoping:on named selection

**Version: 0.0.0**

## Description

provides a scoping at a given location based on a given named selection

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  requested_location |[`string`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  named_selection_name |[`string`](../../core-concepts/dpf-types.md#standard-types) | the string is expected to be in upper case |
| <strong>Pin 2</strong>|  int_inclusive |[`int32`](../../core-concepts/dpf-types.md#standard-types) | If element scoping is requested on a nodal named selection, if Inclusive == 1 then add all the elements adjacent to the nodes.If Inclusive == 0, only the elements which have all their nodes in the named selection are included |
| <strong>Pin 3</strong>|  streams_container |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) |  |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: scoping

 **Plugin**: core

 **Scripting name**: on_named_selection

 **Full name**: scoping.on_named_selection

 **Internal name**: scoping_provider_by_ns

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("scoping_provider_by_ns"); // operator instantiation
op.connect(0, my_requested_location);
op.connect(1, my_named_selection_name);
op.connect(2, my_int_inclusive);
op.connect(3, my_streams_container);
op.connect(4, my_data_sources);
ansys::dpf::Scoping my_mesh_scoping = op.getOutput<ansys::dpf::Scoping>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.scoping.on_named_selection() # operator instantiation
op.inputs.requested_location.connect(my_requested_location)
op.inputs.named_selection_name.connect(my_named_selection_name)
op.inputs.int_inclusive.connect(my_int_inclusive)
op.inputs.streams_container.connect(my_streams_container)
op.inputs.data_sources.connect(my_data_sources)
my_mesh_scoping = op.outputs.mesh_scoping()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.scoping.on_named_selection() # operator instantiation
op.inputs.requested_location.Connect(my_requested_location)
op.inputs.named_selection_name.Connect(my_named_selection_name)
op.inputs.int_inclusive.Connect(my_int_inclusive)
op.inputs.streams_container.Connect(my_streams_container)
op.inputs.data_sources.Connect(my_data_sources)
my_mesh_scoping = op.outputs.mesh_scoping.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.