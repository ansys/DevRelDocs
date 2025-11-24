---
category: scoping
plugin: core
license: None
---

# scoping:on property

**Version: 0.0.0**

## Description

Provides a scoping at a given location based on a given property name and a property number.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  requested_location |[`string`](../../core-concepts/dpf-types.md#standard-types) | Nodal or Elemental location are expected |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  property_name |[`string`](../../core-concepts/dpf-types.md#standard-types) | ex "mapdl_element_type", "mapdl_element_type_id", "apdl_type_index", "mapdl_type_id", "material", "apdl_section_id", "apdl_real_id", "apdl_esys_id", "apdl_tshape", "shell_axi", "volume_axi"... |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  property_id |[`vector<string>`](../../core-concepts/dpf-types.md#standard-types), [`int32`](../../core-concepts/dpf-types.md#standard-types) | property_id or vector of property ids |
| <strong>Pin 3</strong>|  streams_container |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) |  |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |  |
| <strong>Pin 5</strong>|  inclusive |[`int32`](../../core-concepts/dpf-types.md#standard-types) | If element scoping is requested on a nodal named selection, if inclusive == 1 then all the elements/faces adjacent to the nodes/faces ids in input are added, if inclusive == 0, only the elements/faces which have all their nodes/faces in the scoping are included |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Scoping |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: scoping

 **Plugin**: core

 **Scripting name**: on_property

 **Full name**: scoping.on_property

 **Internal name**: scoping_provider_by_prop

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("scoping_provider_by_prop"); // operator instantiation
op.connect(0, my_requested_location);
op.connect(1, my_property_name);
op.connect(2, my_property_id);
op.connect(3, my_streams_container);
op.connect(4, my_data_sources);
op.connect(5, my_inclusive);
ansys::dpf::Scoping my_mesh_scoping = op.getOutput<ansys::dpf::Scoping>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.scoping.on_property() # operator instantiation
op.inputs.requested_location.connect(my_requested_location)
op.inputs.property_name.connect(my_property_name)
op.inputs.property_id.connect(my_property_id)
op.inputs.streams_container.connect(my_streams_container)
op.inputs.data_sources.connect(my_data_sources)
op.inputs.inclusive.connect(my_inclusive)
my_mesh_scoping = op.outputs.mesh_scoping()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.scoping.on_property() # operator instantiation
op.inputs.requested_location.Connect(my_requested_location)
op.inputs.property_name.Connect(my_property_name)
op.inputs.property_id.Connect(my_property_id)
op.inputs.streams_container.Connect(my_streams_container)
op.inputs.data_sources.Connect(my_data_sources)
op.inputs.inclusive.Connect(my_inclusive)
my_mesh_scoping = op.outputs.mesh_scoping.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.