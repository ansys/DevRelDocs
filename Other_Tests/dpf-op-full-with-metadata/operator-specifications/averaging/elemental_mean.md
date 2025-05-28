---
category: averaging
plugin: core
license: None
---

# averaging:elemental mean (field)

## Description

Computes the average of a multi-entity field, (ElementalNodal -> Elemental), (NodalElemental -> Nodal).

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 1</strong>|  collapse_shell_layers |[`bool`](../../getting-started/using-data-containers.md#bool) | If true, shell layers are averaged as well (default is false). |
| <strong>Pin 2</strong>|  force_averaging |[`bool`](../../getting-started/using-data-containers.md#bool) | If true you average, if false you just sum. |
| <strong>Pin 3</strong>|  scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | Average only on these elements. If it is a scoping container, the label must correspond to the one of the fields containers. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | field |[`field`](../../getting-started/using-data-containers.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: averaging
- Plugin: core
- Scripting name: elemental_mean
- Full name: averaging.elemental_mean
- Internal name: entity_average
- License: None
  