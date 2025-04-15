# utility:txt file to dpf

## Description

Take an input string and parse it into dataProcessing type.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | input_string |[`string`](../getting-started/using-data-containers.md#string) | Yes | ex: 'double:1.0', 'int:1', 'vector<double>:1.0;1.0' |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | any_output | | Yes | any output |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | txt_file_to_dpf | utility.txt_file_to_dpf | text_parser | None |
