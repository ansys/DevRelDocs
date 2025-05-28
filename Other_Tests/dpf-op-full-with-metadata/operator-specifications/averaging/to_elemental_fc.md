---
category: averaging
plugin: core
license: None
---

# averaging:to elemental (fields container)

## Description

Transforms Input fields into Elemental fields using an averaging process. The result is computed on a given element's scoping.

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |
| <strong>Pin 1</strong>|  mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) |  |
| <strong>Pin 3</strong>|  mesh_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) |  |
| <strong>Pin 7</strong>|  smoothen_values |[`bool`](../../getting-started/using-data-containers.md#bool) | if it is set to true, Elemental Nodal fields are first averaged on nodes and then averaged on elements (default is false). |
| <strong>Pin 10</strong>|  collapse_shell_layers |[`bool`](../../getting-started/using-data-containers.md#bool) | if true shell layers are averaged as well (default is false) |
| <strong>Pin 26</strong>|  merge_solid_shell |[`bool`](../../getting-started/using-data-containers.md#bool) | For shell/solid mixed field, gather in one field all solids and shells (only on one layer, false by default). |
| <strong>Pin 27</strong>|  shell_layer |[`int32`](../../getting-started/using-data-containers.md#int32) | If merge_solid_shell pin set to true, user have to choose a shell layer. For shell/solid mixed field, gather in one field all solids and shells (only on one layer). |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../getting-started/using-data-containers.md#int32) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

- Category: averaging
- Plugin: core
- Scripting name: to_elemental_fc
- Full name: averaging.to_elemental_fc
- Internal name: to_elemental_fc
- License: None
  