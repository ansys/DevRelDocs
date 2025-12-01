---
category: result
plugin: core
license: None
---

# result:material property of element

**Version: 0.0.0**

## Description

Loads the appropriate operator based on the data sources and retrieves material properties.

## Supported file types

This operator supports the following keys ([file formats](../../index.md#overview-of-dpf)) for each listed namespace (plugin/solver):

- mapdl: rst, rstp, rth 

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 3</strong>|  streams_container |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) |  |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| material_properties |[`field`](../../core-concepts/dpf-types.md#field) | material properties |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: core

 **Scripting name**: material_property_of_element

 **Full name**: result.material_property_of_element

 **Internal name**: MaterialPropertyOfElement

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("MaterialPropertyOfElement"); // operator instantiation
op.connect(3, my_streams_container);
op.connect(4, my_data_sources);
ansys::dpf::Field my_material_properties = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.material_property_of_element() # operator instantiation
op.inputs.streams_container.connect(my_streams_container)
op.inputs.data_sources.connect(my_data_sources)
my_material_properties = op.outputs.material_properties()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.material_property_of_element() # operator instantiation
op.inputs.streams_container.Connect(my_streams_container)
op.inputs.data_sources.Connect(my_data_sources)
my_material_properties = op.outputs.material_properties.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.