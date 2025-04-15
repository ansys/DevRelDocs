# mesh:decimate mesh

## Description

Decimate a meshed region

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | mesh |[`abstract_meshed_region`](../getting-started/using-data-containers.md#abstract-meshed-region) | Yes | Mesh to decimate |
| **Pin 1** | preservation_ratio |[`double`](../getting-started/using-data-containers.md#double) | No | Target ratio of elements to preserve, the actual number of elements preserved might differ. Default value is 0.5. |
| **Pin 2** | aggressiveness |[`int32`](../getting-started/using-data-containers.md#int32) | No | Quality measure for the resulting decimated mesh. Lower aggresiveness will provide a higher quality mesh with the tradeoff of higher execution time. Value range is 0 to 150, default is 0. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | mesh |[`abstract_meshed_region`](../getting-started/using-data-containers.md#abstract-meshed-region) | Yes | Decimated mesh with triangle elements |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **mesh** | mesh | None | None | decimate_mesh | None |
