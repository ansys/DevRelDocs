# utility:field get attribute

## Description

A Field in pin 0 and a property name (string) in pin 1 are expected in input.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../getting-started/using-data-containers.md#field) | Yes |  |
| **Pin 1** | property_name |[`string`](../getting-started/using-data-containers.md#string) | Yes | Accepted inputs are: 'time_freq_support' and 'scoping'. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | property |[`time_freq_support`](../getting-started/using-data-containers.md#time-freq-support), [`scoping`](../getting-started/using-data-containers.md#scoping) | Yes | Property value. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | field_get_attribute | utility.field_get_attribute | field::get_attribute | None |
