# utility:extract time freq

## Description

Extract timefreqs with sets scoping from a time freq support

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | time_freq_support |[`time_freq_support`](../../getting-started/using-data-containers.md#time-freq-support) | Yes |  |
| **Pin 1** | time_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | No |  |
| **Pin 2** | real_or_complex |[`bool`](../../getting-started/using-data-containers.md#bool) | No | False for real only (default). True for complex output. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../../getting-started/using-data-containers.md#field), [`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | extract_time_freq | utility.extract_time_freq | extract_time_freq | None |
