# geo:scoping normals

## Description

compute the normals at the given nodes or element scoping based on the given mesh (first version, the element normal is only handled on the shell elements)

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) | No |  |
| **Pin 1** | mesh_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | No |  |
| **Pin 3** | field |[`field`](../../getting-started/using-data-containers.md#field) | No |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../../getting-started/using-data-containers.md#field) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **geo** | core | normals | geo.normals | normals_provider | any_dpf_supported_increments |
