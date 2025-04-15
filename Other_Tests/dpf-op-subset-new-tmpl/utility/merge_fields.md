# utility:merge fields

## Description

Assembles a set of fields into a unique one.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin -2** | sum_merge |[`bool`](../getting-started/using-data-containers.md#bool) | No | Default is false. If true, redundant quantities are summed instead of being ignored. |
| **Pin -1** | merged_support |[`abstract_field_support`](../getting-started/using-data-containers.md#abstract-field-support) | No | Already merged field support. |
| **Pin 0** | fields |[`vector<shared_ptr<field>>`](../getting-started/using-data-containers.md#vector<shared-ptr<field>>), [`field`](../getting-started/using-data-containers.md#field), [`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | Either a fields container, a vector of fields to merge, or fields from pin 0 to ... |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | merged_field |[`field`](../getting-started/using-data-containers.md#field) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **Pin read_inputs_in_parallel** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the operator's inputs will be evaluated in parallel. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | merge_fields | utility.merge_fields | merge::field | None |
