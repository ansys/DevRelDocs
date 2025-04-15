# logic:same string fields?

## Description

Takes two string fields and compares them.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | string_fieldA |[`string_field`](../../getting-started/using-data-containers.md#string-field) | Yes |  |
| **Pin 1** | string_fieldB |[`string_field`](../../getting-started/using-data-containers.md#string-field) | Yes |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | are_identical |[`bool`](../../getting-started/using-data-containers.md#bool) | Yes |  |
| **Pin 1** | information |[`string`](../../getting-started/using-data-containers.md#string) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **logic** | core | identical_string_fields | logic.identical_string_fields | compare::string_field | None |
