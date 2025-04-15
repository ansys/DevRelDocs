# utility:html doc

## Description

Create dpf's html documentation. Only on Windows.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | output_path |[`string`](../../getting-started/using-data-containers.md#string) | No | default is {working directory}/dataProcessingDoc.html |
| **Pin 1** | exposure_level |[`int32`](../../getting-started/using-data-containers.md#int32) | No | Generate the documentation depending on exposure level : 0 (default) for public operators, 1 includes hidden operator, 2 includes private operator, 3 includes operator without specifications. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | html_doc | utility.html_doc | html_doc | None |
