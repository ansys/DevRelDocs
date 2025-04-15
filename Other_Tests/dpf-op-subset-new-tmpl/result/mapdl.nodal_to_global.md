# result:nodal_to_global

## Description

Rotates nodal elemental results to global coordinate system

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fieldA |[`field`](../getting-started/using-data-containers.md#field) | Yes | Vector or tensor field that must be rotated, expressed in nodal coordinate system. |
| **Pin 1** | fieldB |[`field`](../getting-started/using-data-containers.md#field) | Yes | Nodal euler angles defined from an rst file. Those  must be the rotations from Nodal to Global. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../getting-started/using-data-containers.md#field) | Yes | Rotated field |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **result** | mapdl | mapdl.nodal_to_global | result.mapdl.nodal_to_global | NodalElementalResultsRotation | None |
