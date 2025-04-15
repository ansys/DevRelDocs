# math:modal superposition

## Description

Computes the solution in the time/frequency space from a modal solution by multiplying a modal basis (in 0) by the solution in this modal space (coefficients for each mode for each time/frequency) (in 1).

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | modal_basis |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes | One field by mode with each field representing a mode shape on nodes or elements. |
| **Pin 1** | solution_in_modal_space |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes | One field by time/frequency with each field having a ponderating coefficient for each mode of the modal_basis pin. |
| **Pin 3** | time_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping), [`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>) | No | Compute the result on a subset of the time frequency domain defined in the solution_in_modal_space fields container. |
| **Pin 4** | mesh_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping), [`scopings_container`](../../getting-started/using-data-containers.md#scopings-container) | No | Compute the result on a subset of the space domain defined in the modal_basis fields container. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **Pin num_threads** |[`int32`](../../getting-started/using-data-containers.md#int32) | 0 | Number of threads to use to run in parallel |
| **Pin read_inputs_in_parallel** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the operator's inputs will be evaluated in parallel. |
| **Pin run_in_parallel** |[`bool`](../../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **math** | core | modal_superposition | math.modal_superposition | expansion::modal_superposition | any_dpf_supported_increments |
