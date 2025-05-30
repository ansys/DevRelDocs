# scoping:rescope custom type field

## Description

Rescopes a custom type field on the given scoping. If an ID does not exist in the original custom type field, the default value (in 2) is used when defined.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields |[`custom_type_fields_container`](../../getting-started/using-data-containers.md#custom-type-fields-container), [`custom_type_field`](../../getting-started/using-data-containers.md#custom-type-field) | Yes |  |
| **Pin 1** | mesh_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping), [`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>) | No |  |
| **Pin 2** | default_value |[`custom_type_field`](../../getting-started/using-data-containers.md#custom-type-field), [`custom_type_field`](../../getting-started/using-data-containers.md#custom-type-field) | No | If pin 2 is used, the IDs not found in the custom type field are added with this default value. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields |[`custom_type_fields_container`](../../getting-started/using-data-containers.md#custom-type-fields-container), [`custom_type_field`](../../getting-started/using-data-containers.md#custom-type-field) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **Pin num_threads** |[`int32`](../../getting-started/using-data-containers.md#int32) | 0 | Number of threads to use to run in parallel |
| **Pin run_in_parallel** |[`bool`](../../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **scoping** | core | rescope_custom_type_field | scoping.rescope_custom_type_field | Rescope_ctf | None |
