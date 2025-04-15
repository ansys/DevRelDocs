# averaging:nodal difference (fields container)

## Description

Transforms Elemental Nodal fields into Nodal fields. Each nodal value is the maximum difference between the unaveraged computed result for all elements that share this particular node. The result is computed on a given node scoping. If the input fields are mixed shell/solid, then the fields are split by element shape and the output fields container has an elshape label.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 1** | mesh |[`abstract_meshed_region`](../getting-started/using-data-containers.md#abstract-meshed-region), [`meshes_container`](../getting-started/using-data-containers.md#meshes-container) | No | The mesh region in this pin is used to perform the averaging. It is used if there is no fields support. |
| **Pin 3** | scoping |[`scoping`](../getting-started/using-data-containers.md#scoping), [`scopings_container`](../getting-started/using-data-containers.md#scopings-container) | No | Average only on these nodes. If it is a scoping container, the label must correspond to the one of the fields containers. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **Pin num_threads** |[`int32`](../getting-started/using-data-containers.md#int32) | 0 | Number of threads to use to run in parallel |
| **Pin run_in_parallel** |[`bool`](../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **averaging** | core | nodal_difference_fc | averaging.nodal_difference_fc | nodal_difference_fc | any_dpf_supported_increments |
