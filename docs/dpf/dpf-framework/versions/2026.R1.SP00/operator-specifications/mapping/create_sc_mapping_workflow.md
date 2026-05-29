---
category: mapping
plugin: N/A
license: any_dpf_supported_increments
---

# mapping:create system coupling mapping workflow

**Version: 0.0.0**

## Description

Prepares a workflow able to map data from an input mesh to a target mesh.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [source_mesh](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/mapping/create_sc_mapping_workflow) |  |[`abstract_meshed_region`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`meshes_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>1</strong> | [target_mesh](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/mapping/create_sc_mapping_workflow) |  |[`abstract_meshed_region`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`meshes_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>2</strong> | [is_conservative](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/mapping/create_sc_mapping_workflow) |  |[`bool`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>3</strong> | [location](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/mapping/create_sc_mapping_workflow) |  |[`string`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>4</strong> | [dimensionality](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/mapping/create_sc_mapping_workflow) |  |[`int32`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>5</strong> | [is_pointcloud](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/mapping/create_sc_mapping_workflow) |  |[`bool`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>6</strong> | [target_scoping](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/mapping/create_sc_mapping_workflow) |  |[`scoping`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`scopings_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |


<a id="input_0"></a>
### source_mesh (Pin 0)

- **Required:** No
- **Expected type(s):** [`abstract_meshed_region`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`meshes_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Mesh where the source data is defined. PointCloud interpolations support both mesh/meshes_container and field/fields_container, whereas mesh-based interpolations only support mesh/meshes_container. If not set, an input pin named "source_mesh/source_coords" is exposed.

<a id="input_1"></a>
### target_mesh (Pin 1)

- **Required:** No
- **Expected type(s):** [`abstract_meshed_region`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`meshes_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Mesh where the target data is defined. PointCloud interpolations support both mesh/meshes_container and field/fields_container, whereas mesh-based interpolations only support mesh/meshes_container. If not set, an input pin named "source_mesh/source_coords" is exposed.

<a id="input_2"></a>
### is_conservative (Pin 2)

- **Required:** No
- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Boolean that indicates if the mapped variable is conservative (e.g. force) or not (e.g. pressure). If not set, an input pin named "is_conservative" is exposed.

<a id="input_3"></a>
### location (Pin 3)

- **Required:** No
- **Expected type(s):** [`string`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Mesh support of the mapped variable. Supported options: Nodal and Elemental. If not set, an input pin named "location" is exposed.

<a id="input_4"></a>
### dimensionality (Pin 4)

- **Required:** No
- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Dimensionality of the mapped variable. Supported options: 1 and 3 (scalars or vectors). If not set, an input pin named "dimensionality" is exposed.

<a id="input_5"></a>
### is_pointcloud (Pin 5)

- **Required:** No
- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Boolean that indicates if the PointCloud interpolation is preferred over the FEM interpolation. Default: false.

<a id="input_6"></a>
### target_scoping (Pin 6)

- **Required:** No
- **Expected type(s):** [`scoping`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`scopings_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Scoping that restricts the interpolation to a given set of nodes/elements in the target mesh. If not set, an input pin named "target_scoping" is exposed.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [mapping_workflow](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/mapping/create_sc_mapping_workflow) |[`workflow`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |


<a id="output_0"></a>
### mapping_workflow (Pin 0)

- **Expected type(s):** [`workflow`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Workflow with input pin "source_data"; optionally "source_mesh/source_coords", "target_mesh/target_coords", "is_conservative", "location", "dimensionality" and "target_scoping"; and output pin "target_data".


## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### [permissive](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)
- **Default value:** true

If permissive is set to false, the validity of the source and target meshes is checked before performing mapping, raising an error if they are invalid. If permissive is set to true, no check is done. Default is true.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: mapping

 **Plugin**: N/A

 **Scripting name**: None

 **Full name**: None

 **Internal name**: create_sc_mapping_workflow

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("create_sc_mapping_workflow"); // operator instantiation
op.connect(0, my_source_mesh);
op.connect(1, my_target_mesh);
op.connect(2, my_is_conservative);
op.connect(3, my_location);
op.connect(4, my_dimensionality);
op.connect(5, my_is_pointcloud);
op.connect(6, my_target_scoping);
ansys::dpf::Workflow my_mapping_workflow = op.getOutput<ansys::dpf::Workflow>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mapping.None() # operator instantiation
op.inputs.source_mesh.connect(my_source_mesh)
op.inputs.target_mesh.connect(my_target_mesh)
op.inputs.is_conservative.connect(my_is_conservative)
op.inputs.location.connect(my_location)
op.inputs.dimensionality.connect(my_dimensionality)
op.inputs.is_pointcloud.connect(my_is_pointcloud)
op.inputs.target_scoping.connect(my_target_scoping)
my_mapping_workflow = op.outputs.mapping_workflow()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mapping.None() # operator instantiation
op.inputs.source_mesh.Connect(my_source_mesh)
op.inputs.target_mesh.Connect(my_target_mesh)
op.inputs.is_conservative.Connect(my_is_conservative)
op.inputs.location.Connect(my_location)
op.inputs.dimensionality.Connect(my_dimensionality)
op.inputs.is_pointcloud.Connect(my_is_pointcloud)
op.inputs.target_scoping.Connect(my_target_scoping)
my_mapping_workflow = op.outputs.mapping_workflow.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.