# utility:merge string fields

## Description

Assembles a set of string fields into a unique one.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | vector<shared_ptr<string_field>> |[`vector<shared_ptr<string_field>>`](../../getting-started/using-data-containers.md#vector<shared-ptr<string-field>>), [`string_field`](../../getting-started/using-data-containers.md#string-field) | Yes | Either a a vector of string fields to merge or string fields from pin 0 to ... |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | string_field |[`string_field`](../../getting-started/using-data-containers.md#string-field) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | merge_string_fields | utility.merge_string_fields | merge::string_field | None |
