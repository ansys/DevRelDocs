# utility:server path

## Description

Returns the platform-specific path to a folder in the Dpf server

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | subpath |[`int32`](../getting-started/using-data-containers.md#int32) | No | Subpath of the Dpf server. Supported values: 0 (default): root of the server, 1: "dpf/bin/platform", 2: "aisol/bin(dll)/platform", 3: "dpf/plugins", 4: "dpf/workflows". |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | path |[`string`](../getting-started/using-data-containers.md#string) | Yes | Path to the requested folder in the Dpf server |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | server_path | utility.server_path | server_path | None |
