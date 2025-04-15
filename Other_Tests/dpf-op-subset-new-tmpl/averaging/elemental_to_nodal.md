# averaging:elemental to nodal (field)

## Description

Transforms an Elemental field to a Nodal field. The result is computed on a given node's scoping.

1. For a finite element mesh, the value on a node is the average of the values of the neighbour elements.

2. For a volume finite volume mesh, the agorithm is :
   - For each node, compute interpolation weights for the cells connected to it based	on the Frink's Laplacian method.
	- If the determinant of the I matrix is zero, switch to an inverse distance weighted average.
	- If not, compute the Frink weights and apply the Holmes' weight clip.
	- If the clipping produces a large overshoot, inverse volume weighted average is used..
3. For a face finite volume mesh inverse distance weighted average is used.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../getting-started/using-data-containers.md#field), [`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | field or fields container with only one field is expected |
| **Pin 1** | mesh_scoping |[`scoping`](../getting-started/using-data-containers.md#scoping) | No |  |
| **Pin 2** | force_averaging |[`int32`](../getting-started/using-data-containers.md#int32) | No | Averaging on nodes is used if this pin is set to 1 (default is 1 for integrated results and 0 for discrete ones). |
| **Pin 200** | algorithm |[`int32`](../getting-started/using-data-containers.md#int32) | No | Forces the usage of algorithm 1, 2 or 3 (default is chosen based on the type of mesh). |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../getting-started/using-data-containers.md#field) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **Pin run_in_parallel** |[`bool`](../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **averaging** | core | elemental_to_nodal | averaging.elemental_to_nodal | elemental_to_nodal | None |
