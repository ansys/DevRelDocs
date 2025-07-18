---
category: result
plugin: mapdl
license: None
---

# result:remove rigid body motion (field)

**Version: 0.0.0**

## Description

Removes rigid body mode from a total displacement field by minimization. Use a reference point in order to subtract its displacement to the result displacement field.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) | field or fields container with only one field is expected |
| <strong>Pin 1</strong>|  reference_node_id |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Id of the reference entity (node). |
| <strong>Pin 7</strong>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | default is the mesh in the support |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../core-concepts/dpf-types.md#field) |  |
|  **Pin 1**| translation_field |[`field`](../../core-concepts/dpf-types.md#field) | Global rigid translation vector |
|  **Pin 2**| rotation_field |[`field`](../../core-concepts/dpf-types.md#field) | Global rigid rotation angles |
|  **Pin 3**| center_field |[`field`](../../core-concepts/dpf-types.md#field) | Center of the rigid rotation |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: mapdl

 **Scripting name**: remove_rigid_body_motion

 **Full name**: result.remove_rigid_body_motion

 **Internal name**: ExtractRigidBodyMotion

 **License**: None


## Changelog

- Version 0.0.0: Initial release.