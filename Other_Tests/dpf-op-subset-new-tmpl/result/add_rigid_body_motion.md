# result:add rigid body motion (field)

## Description

Adds a given rigid translation, center and rotation from a displacement field. The rotation is given in terms of rotations angles. Note that the displacement field has to be in the global coordinate system

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | displacement_field |[`field`](../getting-started/using-data-containers.md#field) | Yes |  |
| **Pin 1** | translation_field |[`field`](../getting-started/using-data-containers.md#field) | Yes |  |
| **Pin 2** | rotation_field |[`field`](../getting-started/using-data-containers.md#field) | Yes |  |
| **Pin 3** | center_field |[`field`](../getting-started/using-data-containers.md#field) | Yes |  |
| **Pin 7** | mesh |[`abstract_meshed_region`](../getting-started/using-data-containers.md#abstract-meshed-region) | No | default is the mesh in the support |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../getting-started/using-data-containers.md#field) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **result** | mapdl | add_rigid_body_motion | result.add_rigid_body_motion | RigidBodyAddition | None |
