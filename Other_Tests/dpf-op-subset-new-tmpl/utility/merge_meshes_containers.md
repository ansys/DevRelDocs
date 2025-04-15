# utility:merge meshes containers

## Description

Assembles a set of meshes containers into a unique one.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | meshes_containers |[`vector<shared_ptr<meshes_container>>`](../getting-started/using-data-containers.md#vector<shared-ptr<meshes-container>>), [`meshes_container`](../getting-started/using-data-containers.md#meshes-container) | Yes | a vector of meshes containers to merge or meshes containers from pin 0 to ... |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | merged_meshes_container |[`meshes_container`](../getting-started/using-data-containers.md#meshes-container) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **Pin read_inputs_in_parallel** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the operator's inputs will be evaluated in parallel. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | merge_meshes_containers | utility.merge_meshes_containers | merge::meshes_container | None |
