# mesh:iso surfaces

## Description

Extract multiple iso-contours from mesh_cut operator and set it into a meshes container. If pin 1 is provided, "num_surfaces" iso-contours will be computed, ranging from "min_value" to "max_value" linearly. If pin 4 is provided, the iso-values are the one set by the user. The iso-values are stored into a FieldsContainer.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../getting-started/using-data-containers.md#field) | Yes | Field containing the values for the iso-surface computation. The mesh can be retrieved from this field's support or through pin 2. |
| **Pin 1** | num_surfaces |[`int32`](../getting-started/using-data-containers.md#int32) | No | If provided, iso_values are linearly computed between the min and the max of the field of results. If not, iso_values must be provided by the user through pin 4 |
| **Pin 2** | mesh |[`meshed_region`](../getting-started/using-data-containers.md#meshed-region) | No | Mesh to compute the iso-surface from. Used when not given through the support of the field in pin 0. |
| **Pin 3** | slice_surfaces |[`bool`](../getting-started/using-data-containers.md#bool) | Yes | True: slicing will also take into account shell and skin elements. False: slicing will ignore shell and skin elements. The default is true. |
| **Pin 4** | vector_iso_values |[`vector<double>`](../getting-started/using-data-containers.md#vector<double>) | No | If provided, user defined iso_values to compute. If not provided, iso_values are linearly compute between the min and the max of the field of results. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | meshes |[`meshes_container`](../getting-started/using-data-containers.md#meshes-container) | Yes |  |
| **Pin 1** | fields_container |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **mesh** | core | iso_surfaces | mesh.iso_surfaces | iso_surfaces | None |
