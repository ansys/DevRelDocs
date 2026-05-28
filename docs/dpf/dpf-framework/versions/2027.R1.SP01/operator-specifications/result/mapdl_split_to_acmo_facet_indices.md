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

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [fields_container](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/result/mapdl_split_to_acmo_facet_indices) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>1</strong> | [property_fields_container_element_types](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/result/mapdl_split_to_acmo_facet_indices) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`property_fields_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |


<a id="input_0"></a>
### fields_container (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

Fields container to split, with generic number of labels (e.g. time, zone, complex...), 'facet' label is compulsory.The Fields of the FieldsContainer will have location Elemental and the Scoping Ids will be the Element Ids on the skin mesh.

<a id="input_1"></a>
### property_fields_container_element_types (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`property_fields_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

It should only have the 'facet' label. For each facet, it stores a PropertyField with the element types of the corresponding elements.The scoping should be the same as the scoping of the corresponding Field in input 0.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [fields_container](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/result/mapdl_split_to_acmo_facet_indices) |[`fields_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |


<a id="output_0"></a>
### fields_container (Pin 0)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

Output splitted fields containter


## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: result

 **Plugin**: mapdl

 **Scripting name**: mapdl_split_to_acmo_facet_indices

 **Full name**: result.mapdl_split_to_acmo_facet_indices

 **Internal name**: mapdl::split_to_acmo_facet_indices

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

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
<br />

## Changelog

- Version 0.0.0: Initial release.