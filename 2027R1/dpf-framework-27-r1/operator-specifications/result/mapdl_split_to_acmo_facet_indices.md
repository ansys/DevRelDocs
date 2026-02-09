---
category: result
plugin: mapdl
license: None
---

# result:split to acmo facet indices

**Version: 0.0.0**

## Description

This will retain the already existing labels from the input FC and will change the facet label to now mean ACMO facet indices.Each Field in the input will be split/merged into several Fields, redistributing the data to the appropriate entity.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [fields_container](#input_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [property_fields_container_element_types](#input_1) |[`property_fields_container`](../../core-concepts/dpf-types.md#property-fields-container) |


<a id="input_0"></a>
### fields_container (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Fields container to split, with generic number of labels (e.g. time, zone, complex...), 'facet' label is compulsory.The Fields of the FieldsContainer will have location Elemental and the Scoping Ids will be the Element Ids on the skin mesh.

<a id="input_1"></a>
### property_fields_container_element_types (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`property_fields_container`](../../core-concepts/dpf-types.md#property-fields-container)

It should only have the 'facet' label. For each facet, it stores a PropertyField with the element types of the corresponding elements.The scoping should be the same as the scoping of the corresponding Field in input 0.


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [fields_container](#output_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="output_0"></a>
### fields_container (Pin 0)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Output splitted fields containter


## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: result

 **Plugin**: mapdl

 **Scripting name**: mapdl_split_to_acmo_facet_indices

 **Full name**: result.mapdl_split_to_acmo_facet_indices

 **Internal name**: mapdl::split_to_acmo_facet_indices

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("mapdl::split_to_acmo_facet_indices"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(1, my_property_fields_container_element_types);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.mapdl_split_to_acmo_facet_indices() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.property_fields_container_element_types.connect(my_property_fields_container_element_types)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.mapdl_split_to_acmo_facet_indices() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.property_fields_container_element_types.Connect(my_property_fields_container_element_types)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.