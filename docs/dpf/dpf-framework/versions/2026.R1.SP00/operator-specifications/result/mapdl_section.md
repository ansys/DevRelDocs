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

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [properties_name](#input_0) |[`string`](../../core-concepts/dpf-types.md#standard-types), [`vector<string>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>1</strong>|  [section](#input_1) |[`property_field`](../../core-concepts/dpf-types.md#property-field) |
| <strong>3</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [streams_container](#input_3) |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) |
| <strong>4</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [data_sources](#input_4) |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |
| <strong>5</strong>|  [layer_property](#input_5) |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>6</strong>|  [layers_requested](#input_6) |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### properties_name (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types), [`vector<string>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_1"></a>
### section (Pin 1)

- **Required:** No
- **Expected type(s):** [`property_field`](../../core-concepts/dpf-types.md#property-field)

Property field that contains a section id per element.(optional)

<a id="input_3"></a>
### streams_container (Pin 3)

- **Required:** Yes
- **Expected type(s):** [`streams_container`](../../core-concepts/dpf-types.md#streams-container)



<a id="input_4"></a>
### data_sources (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`data_sources`](../../core-concepts/dpf-types.md#data-sources)



<a id="input_5"></a>
### layer_property (Pin 5)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

Property requested is layered. Default = False.

<a id="input_6"></a>
### layers_requested (Pin 6)

- **Required:** No
- **Expected type(s):** [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types)

Array with layers requested for the section. Default = AllLayers.


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [properties_value](#output_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **1**| [layers_per_section](#output_1) |[`property_field`](../../core-concepts/dpf-types.md#property-field) |


<a id="output_0"></a>
### properties_value (Pin 0)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)



<a id="output_1"></a>
### layers_per_section (Pin 1)

- **Expected type(s):** [`property_field`](../../core-concepts/dpf-types.md#property-field)

Only available if layer_property option is set to True.


## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



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