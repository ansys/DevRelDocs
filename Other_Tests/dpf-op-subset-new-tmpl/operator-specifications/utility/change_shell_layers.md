# utility:change shell layers

## Description

Extract the expected shell layers from the input fields. If the fields contain only one layer and the permissive configuration input is set to true then it returns the input fields. If permissive configuration input is set to false, any change which should not be permitted won't be achieved and corresponding field in output will be empty. If permissive configuration input is set to true (default), carefully check the result.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container), [`field`](../../getting-started/using-data-containers.md#field) | Yes |  |
| **Pin 1** | e_shell_layer |[`int32`](../../getting-started/using-data-containers.md#int32), [`enum dataProcessing::EShellLayers`](../../getting-started/using-data-containers.md#enum-dataProcessing::EShellLayers) | Yes | 0:Top, 1: Bottom, 2: BottomTop, 3:Mid, 4:BottomTopMid |
| **Pin 2** | mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region), [`meshes_container`](../../getting-started/using-data-containers.md#meshes-container) | No | Mesh support of the input fields_container, in case it does not have one defined. If the fields_container contains mixed shell/solid results, the mesh is required (either by connecting this pin or in the support). |
| **Pin 26** | merge |[`bool`](../../getting-started/using-data-containers.md#bool) | No | If set to true, merge shells and solids regarding the shell layer set in s_shell_layer pin (false by default). |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container), [`field`](../../getting-started/using-data-containers.md#field) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **Pin permissive** |[`bool`](../../getting-started/using-data-containers.md#bool) | true | If permissive is set to false, the operator run will ensure the 'change shell layers' operation is allowed (for example, if asking mid layer for a field defined on top and bottom layers, the computed field will be empty). If permissive is set to true, the operator run will be done in a permissive way (no check). Default is true. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | change_shell_layers | utility.change_shell_layers | change_shellLayers | None |
