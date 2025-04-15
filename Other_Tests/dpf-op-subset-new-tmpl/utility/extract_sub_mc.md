# utility:extract sub meshes container

## Description

Creates a new meshes container with all the meshed regions corresponding to the label space in input 1. If pin 1 is not defined, pin 0 input will be copied to the output.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | meshes |[`meshes_container`](../getting-started/using-data-containers.md#meshes-container) | Yes | meshes |
| **Pin 1** | label_space |[`label_space`](../getting-started/using-data-containers.md#label-space), [`scoping`](../getting-started/using-data-containers.md#scoping) | No | Label space, or scoping defining the label space (scoping location), values to keep (scoping IDs) |
| **Pin 2** | collapse_labels |[`bool`](../getting-started/using-data-containers.md#bool) | No | If set to true (default) the input label space (scoping location) is suppressed from the output meshes container, otherwise, label space is kept. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | meshes_container |[`meshes_container`](../getting-started/using-data-containers.md#meshes-container) | Yes | meshes |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | extract_sub_mc | utility.extract_sub_mc | extract_sub_mc | None |
