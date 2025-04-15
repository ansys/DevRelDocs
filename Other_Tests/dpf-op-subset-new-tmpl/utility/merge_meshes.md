# utility:merge meshes

## Description

Take a set of mesh and assemble them in a unique one

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin -200** | should_merge_named_selections |[`bool`](../getting-started/using-data-containers.md#bool) | No | For certain types of files (such as RST), scoping from names selection does not need to be merged.If this pin is true, the merge occurs. If this pin is false, the merge does not occur. Default is true. |
| **Pin 0** | meshes |[`vector<shared_ptr<abstract_meshed_region>>`](../getting-started/using-data-containers.md#vector<shared-ptr<abstract-meshed-region>>), [`abstract_meshed_region`](../getting-started/using-data-containers.md#abstract-meshed-region) | Yes | A vector of meshed region to merge or meshed region from pin 0 to ... |
| **Pin 101** | merge_method |[`int32`](../getting-started/using-data-containers.md#int32) | No | 0: merge by distance, 1: merge by node id (default) |
| **Pin 102** | box_size |[`double`](../getting-started/using-data-containers.md#double) | No | Box size used when merging by distance. Default value is 1e-10. |
| **Pin 103** | remove_duplicate_elements |[`int32`](../getting-started/using-data-containers.md#int32) | No | 0: keep duplicate elements (default), 1: remove duplicate elements |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | merges_mesh |[`abstract_meshed_region`](../getting-started/using-data-containers.md#abstract-meshed-region) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **Pin read_inputs_in_parallel** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the operator's inputs will be evaluated in parallel. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | merge_meshes | utility.merge_meshes | merge::mesh | None |
