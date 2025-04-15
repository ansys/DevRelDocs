# result:remove rigid body motion (fields container)

## Description

Removes rigid body mode from a total displacement field by minimization. Use a reference point in order to subtract its displacement to the result displacement field.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | field or fields container with only one field is expected |
| **Pin 1** | reference_node_id |[`int32`](../getting-started/using-data-containers.md#int32) | No | Id of the reference entity (node). |
| **Pin 7** | mesh |[`abstract_meshed_region`](../getting-started/using-data-containers.md#abstract-meshed-region) | No | default is the mesh in the support |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 1** | translation_field |[`field`](../getting-started/using-data-containers.md#field) | Yes | Global rigid translation vector |
| **Pin 2** | rotation_field |[`field`](../getting-started/using-data-containers.md#field) | Yes | Global rigid rotation angles |
| **Pin 3** | center_field |[`field`](../getting-started/using-data-containers.md#field) | Yes | Center of the rigid rotation |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **result** | mapdl | remove_rigid_body_motion_fc | result.remove_rigid_body_motion_fc | ExtractRigidBodyMotion_fc | None |
