---
category: result
plugin: mapdl
license: None
---

# result:mapdl_section

**Version: 0.0.0**

## Description

Read the values of the section properties for a given section property field (property field that contains section information for each element of a mesh). The following keys can be used: Thickness, NumLayers. For layered elements, the following keys can be used: Thickness, MatID, Orientation, NumIntPoints.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  properties_name |[`string`](../../core-concepts/dpf-types.md#standard-types), [`vector<string>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 1</strong>|  section |[`property_field`](../../core-concepts/dpf-types.md#property-field) | Property field that contains a section id per element.(optional) |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  streams_container |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) |  |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |  |
| <strong>Pin 5</strong>|  layer_property |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Property requested is layered. Default = False. |
| <strong>Pin 6</strong>|  layers_requested |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) | Array with layers requested for the section. Default = AllLayers. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| properties_value |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
|  **Pin 1**| layers_per_section |[`property_field`](../../core-concepts/dpf-types.md#property-field) | Only available if layer_property option is set to True. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: mapdl

 **Scripting name**: mapdl_section

 **Full name**: result.mapdl_section

 **Internal name**: mapdl_section_properties

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("mapdl_section_properties"); // operator instantiation
op.connect(0, my_properties_name);
op.connect(1, my_section);
op.connect(3, my_streams_container);
op.connect(4, my_data_sources);
op.connect(5, my_layer_property);
op.connect(6, my_layers_requested);
ansys::dpf::FieldsContainer my_properties_value = op.getOutput<ansys::dpf::FieldsContainer>(0);
ansys::dpf::PropertyField my_layers_per_section = op.getOutput<ansys::dpf::PropertyField>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.mapdl_section() # operator instantiation
op.inputs.properties_name.connect(my_properties_name)
op.inputs.section.connect(my_section)
op.inputs.streams_container.connect(my_streams_container)
op.inputs.data_sources.connect(my_data_sources)
op.inputs.layer_property.connect(my_layer_property)
op.inputs.layers_requested.connect(my_layers_requested)
my_properties_value = op.outputs.properties_value()
my_layers_per_section = op.outputs.layers_per_section()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.mapdl_section() # operator instantiation
op.inputs.properties_name.Connect(my_properties_name)
op.inputs.section.Connect(my_section)
op.inputs.streams_container.Connect(my_streams_container)
op.inputs.data_sources.Connect(my_data_sources)
op.inputs.layer_property.Connect(my_layer_property)
op.inputs.layers_requested.Connect(my_layers_requested)
my_properties_value = op.outputs.properties_value.GetData()
my_layers_per_section = op.outputs.layers_per_section.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.