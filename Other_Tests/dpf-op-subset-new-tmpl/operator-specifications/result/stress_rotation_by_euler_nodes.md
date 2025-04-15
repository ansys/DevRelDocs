# result:stress solution to global cs

## Description

read Euler angles on elements from the rst file and rotate the fields in the fieldsContainer.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 2** | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | No |  |
| **Pin 3** | streams_container |[`streams_container`](../../getting-started/using-data-containers.md#streams-container), [`stream`](../../getting-started/using-data-containers.md#stream), [`class dataProcessing::CRstFileWrapper`](../../getting-started/using-data-containers.md#class-dataProcessing::CRstFileWrapper) | No |  |
| **Pin 4** | data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | Yes |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **result** | mapdl | stress_rotation_by_euler_nodes | result.stress_rotation_by_euler_nodes | mapdl::rst::S_rotation_by_euler_nodes | None |
