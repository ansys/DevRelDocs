---
category: result
plugin: core
license: None
---

# result:read cms_rbd file

**Version: 0.0.0**

## Description

Read the invariant terms and the model data from a cms_rbd file

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  in_cms_rbd_file_path |[`string`](../../core-concepts/dpf-types.md#standard-types) | file name with cms_rbd extension where to read the input cms_rbd file. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| model_data |[`property_field`](../../core-concepts/dpf-types.md#property-field) | data describing the finite element model |
|  **Pin 1**| center_of_mass |[`field`](../../core-concepts/dpf-types.md#field) | center of mass of the body |
|  **Pin 2**| inertia_relief |[`field`](../../core-concepts/dpf-types.md#field) | inertia matrix |
|  **Pin 3**| model_size |[`property_field`](../../core-concepts/dpf-types.md#property-field) |  |
|  **Pin 4**| master_node_coordinates |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 5**| v_trsf |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) | translational and rotational shape functions |
|  **Pin 6**| k_mat |[`field`](../../core-concepts/dpf-types.md#field) |  |
|  **Pin 7**| mass_mat |[`field`](../../core-concepts/dpf-types.md#field) |  |
|  **Pin 8**| c_mat |[`field`](../../core-concepts/dpf-types.md#field) |  |
|  **Pin 9**| rhs |[`field`](../../core-concepts/dpf-types.md#field) |  |
|  **Pin 10**| dn |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 11**| dr_cross_n |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 12**| drn |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 13**| dn_cross_n |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 14**| dnx_y |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 15**| dny_y |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 16**| dnz_y |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 17**| dyx_n |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 18**| dyy_n |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 19**| dyz_n |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 20**| dnxn |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 21**| dnyn |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 22**| dnzn |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: core

 **Scripting name**: read_cms_rbd_file

 **Full name**: result.read_cms_rbd_file

 **Internal name**: read_cms_rbd_file

 **License**: None


## Changelog

- Version 0.0.0: Initial release.