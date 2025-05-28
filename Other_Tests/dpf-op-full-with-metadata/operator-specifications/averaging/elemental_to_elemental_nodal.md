---
category: averaging
plugin: core
license: None
---

# averaging:elemental to elemental nodal (field)

## Description

Transforms an Elemental field to an Elemental Nodal field.

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../getting-started/using-data-containers.md#field), [`fields_container`](../../getting-started/using-data-containers.md#fields-container) | field or fields container with only one field is expected |
| <strong>Pin 1</strong>|  mesh_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | average only on these entities |
| <strong>Pin 7</strong>|  mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) |  |


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
- Scripting name: elemental_to_elemental_nodal
- Full name: averaging.elemental_to_elemental_nodal
- Internal name: elemental_to_elemental_nodal
- License: None
  