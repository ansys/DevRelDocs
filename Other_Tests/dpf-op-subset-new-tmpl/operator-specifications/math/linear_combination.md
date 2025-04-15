# math:linear combination

## Description

Computes aXY + bZ where a,b (in 0, in 3) are scalar and X,Y,Z (in 1,2,4) are complex numbers.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | a |[`double`](../../getting-started/using-data-containers.md#double) | Yes | Double |
| **Pin 1** | fields_containerA |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 2** | fields_containerB |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 3** | b |[`double`](../../getting-started/using-data-containers.md#double) | Yes | Double |
| **Pin 4** | fields_containerC |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **math** | core | linear_combination | math.linear_combination | CplxOp | None |
