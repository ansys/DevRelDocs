# utility:merge fields into field matrix

## Description

Assembles a set of fields into a field matrix.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields |[`vector<shared_ptr<field>>`](../getting-started/using-data-containers.md#vector<shared-ptr<field>>), [`field`](../getting-started/using-data-containers.md#field), [`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | Either a fields container, a vector of fields to merge, or fields from pin 0 to ... |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | merged_field_matrix |[`field`](../getting-started/using-data-containers.md#field) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | merge_to_field_matrix | utility.merge_to_field_matrix | merge::to_field_matrix | None |
