---
category: averaging
plugin: core
license: None
---

# averaging:nodal to elemental (fields container)

**Version: 0.0.0**

## Description

Transforms Nodal fields into Elemental fields using an averaging process. The result is computed on a given element's scoping. If the input fields are mixed shell/solid, and the shell's layers are not specified as collapsed, then the fields are split by element shape and the output fields container has an elshape label.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [fields_container](/docs/dpf/dpf-framework/operator-specifications/averaging/nodal_to_elemental_fc) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>1</strong> | [mesh](/docs/dpf/dpf-framework/operator-specifications/averaging/nodal_to_elemental_fc) |  |[`abstract_meshed_region`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`meshes_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>3</strong> | [scoping](/docs/dpf/dpf-framework/operator-specifications/averaging/nodal_to_elemental_fc) |  |[`scoping`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`scopings_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>10</strong> | [collapse_shell_layers](/docs/dpf/dpf-framework/operator-specifications/averaging/nodal_to_elemental_fc) |  |[`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>26</strong> | [merge_solid_shell](/docs/dpf/dpf-framework/operator-specifications/averaging/nodal_to_elemental_fc) |  |[`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>27</strong> | [shell_layer](/docs/dpf/dpf-framework/operator-specifications/averaging/nodal_to_elemental_fc) |  |[`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="input_0"></a>
### fields_container (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)



<a id="input_1"></a>
### mesh (Pin 1)

- **Required:** No
- **Expected type(s):** [`abstract_meshed_region`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`meshes_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

The mesh region in this pin is used to perform the averaging. It is used if there is no fields support.

<a id="input_3"></a>
### scoping (Pin 3)

- **Required:** No
- **Expected type(s):** [`scoping`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`scopings_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Average only on these elements. If it is a scoping container, the label must correspond to the one of the fields containers.

<a id="input_10"></a>
### collapse_shell_layers (Pin 10)

- **Required:** No
- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

If true, the data across different shell layers is averaged as well (default is false).

<a id="input_26"></a>
### merge_solid_shell (Pin 26)

- **Required:** No
- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

For shell/solid mixed fields, group in the same field all solids and shells (false by default). If this pin is true and collapse_shell_layers is false, a shell_layer needs to be specified.

<a id="input_27"></a>
### shell_layer (Pin 27)

- **Required:** No
- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

0: Top, 1: Bottom, 2: TopBottom, 3: Mid, 4: TopBottomMid. If merge_solid_shell is true, this pin needs to be specified to a value that extracts only one layer (Top, Bottom or Mid).


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [fields_container](/docs/dpf/dpf-framework/operator-specifications/averaging/nodal_to_elemental_fc) |[`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="output_0"></a>
### fields_container (Pin 0)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)




## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### [num_threads](/docs/dpf/dpf-framework/core-concepts/operator-configurations)

- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types)
- **Default value:** 0

Number of threads to use to run in parallel

### [run_in_parallel](/docs/dpf/dpf-framework/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)
- **Default value:** true

Loops are allowed to run in parallel if the value of this config is set to true.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: averaging

 **Plugin**: core

 **Scripting name**: nodal_to_elemental_fc

 **Full name**: averaging.nodal_to_elemental_fc

 **Internal name**: nodal_to_elemental_fc

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("nodal_to_elemental_fc"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(1, my_mesh);
op.connect(3, my_scoping);
op.connect(10, my_collapse_shell_layers);
op.connect(26, my_merge_solid_shell);
op.connect(27, my_shell_layer);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.averaging.nodal_to_elemental_fc() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.mesh.connect(my_mesh)
op.inputs.scoping.connect(my_scoping)
op.inputs.collapse_shell_layers.connect(my_collapse_shell_layers)
op.inputs.merge_solid_shell.connect(my_merge_solid_shell)
op.inputs.shell_layer.connect(my_shell_layer)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.averaging.nodal_to_elemental_fc() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.mesh.Connect(my_mesh)
op.inputs.scoping.Connect(my_scoping)
op.inputs.collapse_shell_layers.Connect(my_collapse_shell_layers)
op.inputs.merge_solid_shell.Connect(my_merge_solid_shell)
op.inputs.shell_layer.Connect(my_shell_layer)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.