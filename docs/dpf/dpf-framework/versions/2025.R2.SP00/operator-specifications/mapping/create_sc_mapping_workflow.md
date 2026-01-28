---
category: mapping
plugin: N/A
license: any_dpf_supported_increments
---

# mapping:create system coupling mapping workflow

**Version: 0.0.0**

## Description

Prepares a workflow able to map data from an input mesh to a target mesh.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  source_mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container), [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Mesh where the source data is defined. PointCloud interpolations support both mesh/meshes_container and field/fields_container, whereas mesh-based interpolations only support mesh/meshes_container. If not set, an input pin named "source_mesh/source_coords" is exposed. |
| <strong>Pin 1</strong>|  target_mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container), [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Mesh where the target data is defined. PointCloud interpolations support both mesh/meshes_container and field/fields_container, whereas mesh-based interpolations only support mesh/meshes_container. If not set, an input pin named "source_mesh/source_coords" is exposed. |
| <strong>Pin 2</strong>|  is_conservative |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Boolean that indicates if the mapped variable is conservative (e.g. force) or not (e.g. pressure). If not set, an input pin named "is_conservative" is exposed. |
| <strong>Pin 3</strong>|  location |[`string`](../../core-concepts/dpf-types.md#standard-types) | Mesh support of the mapped variable. Supported options: Nodal and Elemental. If not set, an input pin named "location" is exposed. |
| <strong>Pin 4</strong>|  dimensionality |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Dimensionality of the mapped variable. Supported options: 1 and 3 (scalars or vectors). If not set, an input pin named "dimensionality" is exposed. |
| <strong>Pin 5</strong>|  is_pointcloud |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Boolean that indicates if the PointCloud interpolation is preferred over the FEM interpolation. Default: false. |
| <strong>Pin 6</strong>|  target_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) | Scoping that restricts the interpolation to a given set of nodes/elements in the target mesh. If not set, an input pin named "target_scoping" is exposed. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| mapping_workflow |[`workflow`](../../core-concepts/dpf-types.md#workflow) | Workflow with input pin "source_data"; optionally "source_mesh/source_coords", "target_mesh/target_coords", "is_conservative", "location", "dimensionality" and "target_scoping"; and output pin "target_data". |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mapping

 **Plugin**: N/A

 **Scripting name**: None

 **Full name**: None

 **Internal name**: create_sc_mapping_workflow

 **License**: any_dpf_supported_increments


## Changelog

- Version 0.0.0: Initial release.