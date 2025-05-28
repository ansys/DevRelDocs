---
category: mesh
plugin: core
license: None
---

# mesh:iso surfaces

## Description

Extract multiple iso-contours from mesh_cut operator and set it into a meshes container. If pin 1 is provided, "num_surfaces" iso-contours will be computed, ranging from "min_value" to "max_value" linearly. If pin 4 is provided, the iso-values are the one set by the user. The iso-values are stored into a FieldsContainer.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../getting-started/using-data-containers.md#field) | Field containing the values for the iso-surface computation. The mesh can be retrieved from this field's support or through pin 2. |
| <strong>Pin 1</strong>|  num_surfaces |[`int32`](../../getting-started/using-data-containers.md#int32) | If provided, iso_values are linearly computed between the min and the max of the field of results. If not, iso_values must be provided by the user through pin 4 |
| <strong>Pin 2</strong>|  mesh |[`meshed_region`](../../getting-started/using-data-containers.md#meshed-region) | Mesh to compute the iso-surface from. Used when not given through the support of the field in pin 0. |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  slice_surfaces |[`bool`](../../getting-started/using-data-containers.md#bool) | True: slicing will also take into account shell and skin elements. False: slicing will ignore shell and skin elements. The default is true. |
| <strong>Pin 4</strong>|  vector_iso_values |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | If provided, user defined iso_values to compute. If not provided, iso_values are linearly compute between the min and the max of the field of results. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| meshes |[`meshes_container`](../../getting-started/using-data-containers.md#meshes-container) |  |
|  **Pin 1**| fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: iso_surfaces

 **Full name**: mesh.iso_surfaces

 **Internal name**: iso_surfaces

 **License**: None
