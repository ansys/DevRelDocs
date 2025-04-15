# logic:same fields container?

## Description

Checks if two fields containers are identical.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_containerA |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 1** | fields_containerB |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 2** | small_value |[`double`](../getting-started/using-data-containers.md#double) | No | Double positive small value. Smallest value which will be considered during the comparison step. All the abs(values) in the field less than this value are considered as null, (default value:1.0e-14). |
| **Pin 3** | tolerance |[`double`](../getting-started/using-data-containers.md#double) | No | Double relative tolerance. Maximum tolerance gap between two compared values. Values within relative tolerance are considered identical (v1-v2)/v2 < relativeTol (default is 0.001). |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | boolean |[`bool`](../getting-started/using-data-containers.md#bool) | Yes | bool (true if identical...) |
| **Pin 1** | message |[`string`](../getting-started/using-data-containers.md#string) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **logic** | core | identical_fc | logic.identical_fc | AreFieldsIdentical_fc | None |
