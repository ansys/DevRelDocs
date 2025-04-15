# logic:fields included?

## Description

Checks if one field belongs to another.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fieldA |[`field`](../getting-started/using-data-containers.md#field) | Yes |  |
| **Pin 1** | fieldB |[`field`](../getting-started/using-data-containers.md#field) | Yes |  |
| **Pin 2** | double_value |[`double`](../getting-started/using-data-containers.md#double) | Yes | Double positive small value. Smallest value which will be considered during the comparison step. All the abs(values) in the field less than this value are considered as null, (default value:1.0e-14). |
| **Pin 3** | double_tolerance |[`double`](../getting-started/using-data-containers.md#double) | No | Double relative tolerance. Maximum tolerance gap between two compared values. Values within relative tolerance are considered identical (v1-v2)/v2 < relativeTol (default is 0.001). |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | included |[`bool`](../getting-started/using-data-containers.md#bool) | Yes | bool (true if belongs...) |
| **Pin 1** | message |[`string`](../getting-started/using-data-containers.md#string) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **logic** | core | included_fields | logic.included_fields | Are_fields_included | None |
