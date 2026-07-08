---
category: composite
plugin: composite
license: None
---

# composite:ls_dyna_preparing_results

**Version: 0.0.0**

## Description

Remove unused result (integration points).The number of integration points in the d3plot format corresponds to the value of MAXINT, regardless of how many layers a layered element has and the results of the unused integration points are zero. These are removed so that the number of integration points corresponds to the number of layers. In addition, the operator reorders the results from bottom to top if MAXINT is 3. Assumptions: MAXINT >= maximum number of layers, integration scheme is trapezoidal except MAXINT=3, The initial CFieldsContainer is retunred in case the layer information is not available. See 'composite::layup_provider_operator' for more information.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  maxint |[`int32`](../../core-concepts/dpf-types.md#standard-types) | The value of MAXINT. |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Result container. For instance strains or stresses. |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | Enriched meshed region with section information such as number of layers. See 'composite::layup_provider_operator' for more information. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Fields container with the prepared results. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: composite

 **Plugin**: composite

 **Scripting name**: ls_dyna_preparing_results

 **Full name**: composite.ls_dyna_preparing_results

 **Internal name**: composite::ls_dyna_preparing_results

 **License**: None


## Changelog

- Version 0.0.0: Initial release.