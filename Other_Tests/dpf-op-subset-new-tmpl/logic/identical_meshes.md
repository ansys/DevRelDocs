# logic:same meshes?

## Description

Takes two meshes and compares them. Note: When comparing mesh properties, the current behaviour is to verify that the properties in the first mesh (pin 0) are included in the second mesh (pin 1).

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | meshA |[`abstract_meshed_region`](../getting-started/using-data-containers.md#abstract-meshed-region) | Yes |  |
| **Pin 1** | meshB |[`abstract_meshed_region`](../getting-started/using-data-containers.md#abstract-meshed-region) | Yes |  |
| **Pin 2** | small_value |[`double`](../getting-started/using-data-containers.md#double) | Yes | define what is a small value for numeric comparison. |
| **Pin 3** | tolerance |[`double`](../getting-started/using-data-containers.md#double) | Yes | define the relative tolerance ceil for numeric comparison. |
| **Pin 4** | compare_auxiliary |[`bool`](../getting-started/using-data-containers.md#bool) | Yes | compare auxiliary data (i.e property fields, scopings...). Default value is 'false'. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | are_identical |[`bool`](../getting-started/using-data-containers.md#bool) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **logic** | core | identical_meshes | logic.identical_meshes | compare::mesh | None |
