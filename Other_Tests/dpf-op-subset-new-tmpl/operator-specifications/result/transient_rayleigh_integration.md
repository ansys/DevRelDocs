# result:transient rayleigh integration

## Description

Computes the transient Rayleigh integral

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes | the input field container expects acceleration fields |
| **Pin 1** | mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region), [`meshes_container`](../../getting-started/using-data-containers.md#meshes-container) | Yes | The meshes region in this pin has to be boundary or skin mesh. This is the source meshes. |
| **Pin 2** | time_scoping |[`int32`](../../getting-started/using-data-containers.md#int32), [`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>), [`scoping`](../../getting-started/using-data-containers.md#scoping) | Yes | Load step number (if it's specified, the Transient rayleigh integration is computed only on the substeps of this step) or time scoping |
| **Pin 3** | field |[`field`](../../getting-started/using-data-containers.md#field) | Yes | The field represents the coordinates of the observation position. It should be specified if not observation mesh is provided.  |
| **Pin 4** | observation_mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) | Yes | This is the observation mesh region |
| **Pin 5** | mass_density |[`double`](../../getting-started/using-data-containers.md#double) | Yes | Mass density (if it's not specified, default value of the air is applied). |
| **Pin 6** | speed_of_sound |[`double`](../../getting-started/using-data-containers.md#double) | Yes | Speed of sound (if it's not specified, default value of the speed of sound in the air is applied). |

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
| **result** | core | transient_rayleigh_integration | result.transient_rayleigh_integration | transient_rayleigh_integration | any_dpf_supported_increments |
