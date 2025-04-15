# mesh:wireframe

## Description

Take a mesh and extracts its sharp edges, using pin 1 value as a threshold angle.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) | Yes |  |
| **Pin 1** | threshold |[`double`](../../getting-started/using-data-containers.md#double) | Yes | angle threshold in radian that will trigger an edge detection. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | wireframe |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **mesh** | core | wireframe | mesh.wireframe | wireframe | None |
