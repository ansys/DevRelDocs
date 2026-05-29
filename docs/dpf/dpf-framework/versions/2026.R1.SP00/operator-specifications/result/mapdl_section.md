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

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [properties_name](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/mapdl_section) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`string`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`vector&lt;string&gt;`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>1</strong> | [section](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/mapdl_section) |  |[`property_field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>3</strong> | [streams_container](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/mapdl_section) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`streams_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>4</strong> | [data_sources](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/mapdl_section) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`data_sources`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>5</strong> | [layer_property](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/mapdl_section) |  |[`bool`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>6</strong> | [layers_requested](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/mapdl_section) |  |[`vector&lt;int32&gt;`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |


<a id="input_0"></a>
### properties_name (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`string`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`vector&lt;string&gt;`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)



<a id="input_1"></a>
### section (Pin 1)

- **Required:** No
- **Expected type(s):** [`property_field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Property field that contains a section id per element.(optional)

<a id="input_3"></a>
### streams_container (Pin 3)

- **Required:** Yes
- **Expected type(s):** [`streams_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)



<a id="input_4"></a>
### data_sources (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`data_sources`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)



<a id="input_5"></a>
### layer_property (Pin 5)

- **Required:** No
- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Property requested is layered. Default = False.

<a id="input_6"></a>
### layers_requested (Pin 6)

- **Required:** No
- **Expected type(s):** [`vector&lt;int32&gt;`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Array with layers requested for the section. Default = AllLayers.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [properties_value](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/mapdl_section) |[`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
|  **1**| [layers_per_section](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/mapdl_section) |[`property_field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |


<a id="output_0"></a>
### properties_value (Pin 0)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)



<a id="output_1"></a>
### layers_per_section (Pin 1)

- **Expected type(s):** [`property_field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Only available if layer_property option is set to True.


## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: result

 **Plugin**: mapdl

 **Scripting name**: mapdl_section

 **Full name**: result.mapdl_section

 **Internal name**: mapdl_section_properties

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

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
<br />

## Changelog

- Version 0.0.0: Initial release.