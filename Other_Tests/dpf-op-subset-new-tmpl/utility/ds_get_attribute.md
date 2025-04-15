# utility:data sources get attribute

## Description

A DataSources in pin 0 and a property name (string) in pin 1 are expected in input. An index refering to the property can also be provided.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | data_sources |[`data_sources`](../getting-started/using-data-containers.md#data-sources) | Yes |  |
| **Pin 1** | property_name |[`string`](../getting-started/using-data-containers.md#string) | Yes | Accepted inputs are: 'file_path' (returns string), 'result_file_name' (returns string), 'domain_file_path' (returns string), 'domain_result_file_name' (returns string), 'num_keys' (returns int), num_result_key (returns int), num_file_path (returns int), 'num_result_file_path' (returns int), 'key_by_index' (returns string), 'result_key_by_index' (returns string), 'path_by_index' (returns string), 'path_key_by_index' (returns string). |
| **Pin 2** | property_index |[`int32`](../getting-started/using-data-containers.md#int32) | No | Index for the property. Must be set for 'domain_file_path', 'domain_result_file_name' 'key_by_index', 'result_key_by_index', 'path_by_index' and 'path_key_by_index' properties. |
| **Pin 3** | property_key |[`string`](../getting-started/using-data-containers.md#string) | No | Key to look for. Must be set for 'file_path' and 'domain_file_path' properties. |
| **Pin 4** | property_result_key |[`string`](../getting-started/using-data-containers.md#string) | No | Result key to look for. Can be used for 'file_path', 'result_file_name', 'domain_file_path' and 'domain_result_file_name'. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | property |[`string`](../getting-started/using-data-containers.md#string), [`int32`](../getting-started/using-data-containers.md#int32) | Yes | Property value. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | ds_get_attribute | utility.ds_get_attribute | datasources::get_attribute | None |
