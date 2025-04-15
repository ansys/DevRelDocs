# utility:set property

## Description

Sets a property to an input field/field container.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../getting-started/using-data-containers.md#field), [`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 1** | property_name |[`string`](../getting-started/using-data-containers.md#string) | Yes | Property to set |
| **Pin 2** | property_value |[`string`](../getting-started/using-data-containers.md#string), [`int32`](../getting-started/using-data-containers.md#int32), [`double`](../getting-started/using-data-containers.md#double) | Yes | Property to set |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../getting-started/using-data-containers.md#field), [`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | set_property | utility.set_property | field::set_property | None |
