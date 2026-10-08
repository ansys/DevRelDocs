---
category: min_max
plugin: core
license: None
---

# min_max:over label

**Version: 0.0.0**

## Description


Groups the fields of the input fields container by the given label and, within each group, computes the per-component minimum and maximum across all fields of the group.

If the label is not set or does not exist in the fields container, the operation runs over all fields as a single group.

Outputs:

- Pins 0 and 1: fields of per-group, per-component minima and maxima. Their scoping is the set of label ids (or a single entity when no label applies).
- Pins 2 and 3 (optional): for each output entry, the id of one remaining label of the input fields container corresponding to the field that provided the minimum and maximum, respectively.
- Pins 4 and 5: for each output entry, the input scoping id of the entity within the source field that provided the minimum and maximum.

Input fields with no data are excluded from the output.

Within each input field, all elementary values contribute to the per-group reduction: elemental-nodal expansions and shell-layer values (when present) are folded into the same per-component min/max.

**When to use:** fields in the container are indexed by one or more labels (for example `body`, `zone`) and you want one per-component extremum per label id, collapsing every entity of each group into a single output entry.
Example: peak of each stress component per body when the container is labelled by body id.
Without a label, all entities of all fields collapse into a single output entity, equivalent to `min_max(min_max_fc(...))`.
Use `min_max_by_entity` to keep entity resolution instead, or `min_max_fc` to keep per-field resolution.


## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [fields_container](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>1</strong> | [label](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`string`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### fields_container (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Fields container whose fields are grouped by the label passed on pin 1.

<a id="input_1"></a>
### label (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

Name of the label used to group the fields of the input fields container. If not set or not present, all fields are used as a single group.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [field_min](#output_0) |[`field`](../../core-concepts/dpf-types.md#field) |
|  **1**| [field_max](#output_1) |[`field`](../../core-concepts/dpf-types.md#field) |
|  **2**| [domain_ids_min](#output_2) |[`scoping`](../../core-concepts/dpf-types.md#scoping) |
|  **3**| [domain_ids_max](#output_3) |[`scoping`](../../core-concepts/dpf-types.md#scoping) |
|  **4**| [scoping_ids_min](#output_4) |[`scoping`](../../core-concepts/dpf-types.md#scoping) |
|  **5**| [scoping_ids_max](#output_5) |[`scoping`](../../core-concepts/dpf-types.md#scoping) |


<a id="output_0"></a>
### field_min (Pin 0)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

Field of per-group, per-component minima. Scoped on the label ids used for grouping.

<a id="output_1"></a>
### field_max (Pin 1)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

Field of per-group, per-component maxima. Scoped on the label ids used for grouping.

<a id="output_2"></a>
### domain_ids_min (Pin 2)

- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)

For each entry of the output minimum field, the id of one remaining label of the input fields container from the field that provided the minimum. Populated only when the input fields container has more than one label.

<a id="output_3"></a>
### domain_ids_max (Pin 3)

- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)

For each entry of the output maximum field, the id of one remaining label of the input fields container from the field that provided the maximum. Populated only when the input fields container has more than one label.

<a id="output_4"></a>
### scoping_ids_min (Pin 4)

- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)

For each entry of the output minimum field, the input scoping id of the entity within the source field that provided the minimum.

<a id="output_5"></a>
### scoping_ids_max (Pin 5)

- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)

For each entry of the output maximum field, the input scoping id of the entity within the source field that provided the maximum.


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: min_max

 **Plugin**: core

 **Scripting name**: min_max_over_label_fc

 **Full name**: min_max.min_max_over_label_fc

 **Internal name**: min_max_over_label_fc

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("min_max_over_label_fc"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(1, my_label);
ansys::dpf::Field my_field_min = op.getOutput<ansys::dpf::Field>(0);
ansys::dpf::Field my_field_max = op.getOutput<ansys::dpf::Field>(1);
ansys::dpf::Scoping my_domain_ids_min = op.getOutput<ansys::dpf::Scoping>(2);
ansys::dpf::Scoping my_domain_ids_max = op.getOutput<ansys::dpf::Scoping>(3);
ansys::dpf::Scoping my_scoping_ids_min = op.getOutput<ansys::dpf::Scoping>(4);
ansys::dpf::Scoping my_scoping_ids_max = op.getOutput<ansys::dpf::Scoping>(5);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.min_max.min_max_over_label_fc() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.label.connect(my_label)
my_field_min = op.outputs.field_min()
my_field_max = op.outputs.field_max()
my_domain_ids_min = op.outputs.domain_ids_min()
my_domain_ids_max = op.outputs.domain_ids_max()
my_scoping_ids_min = op.outputs.scoping_ids_min()
my_scoping_ids_max = op.outputs.scoping_ids_max()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.min_max.min_max_over_label_fc() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.label.Connect(my_label)
my_field_min = op.outputs.field_min.GetData()
my_field_max = op.outputs.field_max.GetData()
my_domain_ids_min = op.outputs.domain_ids_min.GetData()
my_domain_ids_max = op.outputs.domain_ids_max.GetData()
my_scoping_ids_min = op.outputs.scoping_ids_min.GetData()
my_scoping_ids_max = op.outputs.scoping_ids_max.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.