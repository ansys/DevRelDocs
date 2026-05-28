---
category: utility
plugin: core
license: None
---

# utility:extract scoping

**Version: 0.0.0**

## Description

Takes a field type object, mesh or a collection of them and extracts its scoping or scopings container.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [field_or_fields_container](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/utility/extract_scoping) |  |[`field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`fields_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`property_field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`property_fields_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`custom_type_field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`custom_type_fields_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`string_field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`scoping`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`scopings_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`meshed_region`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`meshes_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>1</strong> | [requested_location](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/utility/extract_scoping) |  |[`int32`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |


<a id="input_0"></a>
### field_or_fields_container (Pin 0)

- **Required:** No
- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`fields_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`property_field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`property_fields_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`custom_type_field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`custom_type_fields_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`string_field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`scoping`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`scopings_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`meshed_region`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`meshes_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)



<a id="input_1"></a>
### requested_location (Pin 1)

- **Required:** No
- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

If input 0 is a mesh or a meshes_container, the operator returns the nodes scoping, possible locations are: Nodal(default) or Elemental


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [mesh_scoping](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/utility/extract_scoping) |[`scoping`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`scopings_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |


<a id="output_0"></a>
### mesh_scoping (Pin 0)

- **Expected type(s):** [`scoping`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`scopings_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)




## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: utility

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: extract_scoping

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("extract_scoping"); // operator instantiation
op.connect(0, my_field_or_fields_container);
op.connect(1, my_requested_location);
ansys::dpf::Scoping my_mesh_scoping = op.getOutput<ansys::dpf::Scoping>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.None() # operator instantiation
op.inputs.field_or_fields_container.connect(my_field_or_fields_container)
op.inputs.requested_location.connect(my_requested_location)
my_mesh_scoping_as_scoping = op.outputs.mesh_scoping_as_scoping()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.None() # operator instantiation
op.inputs.field_or_fields_container.Connect(my_field_or_fields_container)
op.inputs.requested_location.Connect(my_requested_location)
my_mesh_scoping = op.outputs.mesh_scoping.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.