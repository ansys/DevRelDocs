---
category: averaging
plugin: core
license: None
---

# averaging:elemental nodal to nodal (fields container)

## Description

Transforms Elemental Nodal fields into Nodal fields using an averaging process. The result is computed on a given node's scoping. If the input fields are mixed shell/solid, then the fields are split by element shape and the output fields container has an elshape label.

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |
| <strong>Pin 1</strong>|  mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region), [`meshes_container`](../../getting-started/using-data-containers.md#meshes-container) | The mesh region in this pin is used to perform the averaging. It is used if there is no fields support. |
| <strong>Pin 2</strong>|  should_average |[`bool`](../../getting-started/using-data-containers.md#bool) | Each nodal value is divided by the number of elements linked to this node (default is true for discrete quantities). |
| <strong>Pin 3</strong>|  scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping), [`scopings_container`](../../getting-started/using-data-containers.md#scopings-container) | Average only on these nodes. If it is a scoping container, the label must correspond to the one of the fields containers. |
| <strong>Pin 4</strong>|  extend_to_mid_nodes |[`bool`](../../getting-started/using-data-containers.md#bool) | Compute mid nodes (when available) by averaging the neighbour primary nodes. |
| <strong>Pin 5</strong>|  extend_weights_to_mid_nodes |[`bool`](../../getting-started/using-data-containers.md#bool) | Extends weights to mid nodes (when available). Default is false. |
| <strong>Pin 26</strong>|  merge_solid_shell |[`bool`](../../getting-started/using-data-containers.md#bool) | For shell/solid mixed field, gather in one field all solids and shells (only on one layer, false by default). |
| <strong>Pin 27</strong>|  shell_layer |[`int32`](../../getting-started/using-data-containers.md#int32) | If merge_solid_shell pin set to true, user have to choose a shell layer. For shell/solid mixed field, gather in one field all solids and shells (only on one layer). |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | weights |[`class dataProcessing::DpfTypeCollection<class dataProcessing::CPropertyField>`](../../getting-started/using-data-containers.md#class-dataprocessing::dpftypecollection<class-dataprocessing::cpropertyfield>) | Gives for each node, the number of times it was found in the Elemental Nodal field. Can be used to average later. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../getting-started/using-data-containers.md#int32) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

- Category: averaging
- Plugin: core
- Scripting name: elemental_nodal_to_nodal_fc
- Full name: averaging.elemental_nodal_to_nodal_fc
- Internal name: elemental_nodal_To_nodal_fc
- License: None
  