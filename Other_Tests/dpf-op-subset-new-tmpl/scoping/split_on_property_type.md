# scoping:split on property type

## Description

Splits a given scoping or the mesh scoping (nodal or elemental) on given properties (elshape and/or material) and returns a scopings container with those split scopings.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 1** | mesh_scoping |[`scoping`](../getting-started/using-data-containers.md#scoping) | No | Scoping |
| **Pin 7** | mesh |[`abstract_meshed_region`](../getting-started/using-data-containers.md#abstract-meshed-region) | Yes | mesh region |
| **Pin 9** | requested_location |[`string`](../getting-started/using-data-containers.md#string) | Yes | location (default is elemental) |
| **Pin 12** | skin_case |[`int32`](../getting-started/using-data-containers.md#int32) | No | set to 0: to have skin elements in their own group, 1: merge skin and solid elements, 2: merge skin and shell elements (default) |
| **Pin 13** | label |[`string`](../getting-started/using-data-containers.md#string), [`vector<string>`](../getting-started/using-data-containers.md#vector<string>) | No | properties to apply the filtering 'mat' and/or 'elshape' (default is 'elshape') |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | mesh_scoping |[`scopings_container`](../getting-started/using-data-containers.md#scopings-container) | Yes | Scoping |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **scoping** | core | split_on_property_type | scoping.split_on_property_type | scoping::by_property | None |
