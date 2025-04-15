# scoping:scoping get attribute

## Description

Uses the Scoping APIs to return a given attribute of the scoping in input.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | Yes |  |
| **Pin 1** | property_name |[`string`](../../getting-started/using-data-containers.md#string) | Yes | Supported property names are: "ids", "location". |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | property |[`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>), [`string`](../../getting-started/using-data-containers.md#string) | Yes | Returns a vector of int for property: "ids" and a string for property: "location". |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **scoping** | core | scoping_get_attribute | scoping.scoping_get_attribute | scoping::get_attribute | None |
