# result:erp radiation efficiency

## Description

Compute the radiation efficiency (enhanced erp divided by classical erp)

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes | the input field container expects displacements fields |
| **Pin 1** | mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region), [`meshes_container`](../../getting-started/using-data-containers.md#meshes-container) | Yes | the meshes region in this pin has to be boundary or skin mesh |
| **Pin 2** | time_scoping |[`int32`](../../getting-started/using-data-containers.md#int32), [`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>), [`scoping`](../../getting-started/using-data-containers.md#scoping) | Yes | load step number (if it's specified, the ERP is computed only on the substeps of this step) or time scoping |
| **Pin 3** | mass_density |[`double`](../../getting-started/using-data-containers.md#double) | Yes | mass density (if it's not specified, default value of the air is applied). |
| **Pin 4** | speed_of_sound |[`double`](../../getting-started/using-data-containers.md#double) | Yes | speed of sound (if it's not specified, default value of the speed of sound in the air is applied). |

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
| **result** | core | erp_radiation_efficiency | result.erp_radiation_efficiency | erp_radiation_efficiency | any_dpf_supported_increments |
