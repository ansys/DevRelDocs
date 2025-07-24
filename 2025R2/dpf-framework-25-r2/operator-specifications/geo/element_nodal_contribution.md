---
category: geo
plugin: core
license: any_dpf_supported_increments
---

# geo:element nodal contribution

**Version: 0.0.0**

## Description

Compute the fraction of the element measure attributed to each node of each element (fraction of the volume for 3D elements, fraction of the area for 2D elements or fraction of the length for 1D elements). It is computed by taking the integral of the shape function associated to each node within each element.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |  |
| <strong>Pin 1</strong>|  scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Integrate the input field over a specific scoping. |
| <strong>Pin 2</strong>|  volume_fraction |[`bool`](../../core-concepts/dpf-types.md#standard-types) | If true, returns influence volume, area or length. If false, the values are normalized with the element volume, area or length. Default: true. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../core-concepts/dpf-types.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: geo

 **Plugin**: core

 **Scripting name**: element_nodal_contribution

 **Full name**: geo.element_nodal_contribution

 **Internal name**: element::nodal_contribution

 **License**: any_dpf_supported_increments


## Changelog

- Version 0.0.0: Initial release.