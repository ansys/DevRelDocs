---
category: averaging
plugin: core
license: None
---

# averaging:nodal extend to mid nodes (field)

## Description

Extends a Nodal field defined on corner nodes to a field defined also on mid nodes.

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../getting-started/using-data-containers.md#field), [`fields_container`](../../getting-started/using-data-containers.md#fields-container) | field or fields container with only one field is expected |
| <strong>Pin 1</strong>|  node_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | Nodes expected in output. |
| <strong>Pin 5</strong>|  element_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | Precomputed list of elements of interest (improves performances). |
| <strong>Pin 7</strong>|  mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | field |[`field`](../../getting-started/using-data-containers.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **inplace** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | The output is written over the input to save memory if this config is set to true. |
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: averaging
- Plugin: core
- Scripting name: nodal_extend_to_mid_nodes
- Full name: averaging.nodal_extend_to_mid_nodes
- Internal name: nodal_extend_to_mid_nodes
- License: None
  