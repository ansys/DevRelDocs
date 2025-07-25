---
category: result
plugin: mapdl
license: None
---

# result:split on facet indices

**Version: 0.0.0**

## Description

Splits each Field in a FieldsContainer defined on the skin elements of a mesh according to the local facets indices of its corresponding solid element. The output FieldsContainer retains the original labels and adds a 'facet' label, which indicates at which facet of the solid mesh was the original skin element located. The facet ids are according to MAPDL convention. The scoping of the output Fields reflects the element indices in the solid mesh.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Fields container to split, with generic number of labels (e.g. time, zone, complex...), and the Fields of the FieldsContainer will have location Elemental and the Scoping Ids will be the Element Ids on the skin mesh. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  property_field_new_elements_to_old |[`property_field`](../../core-concepts/dpf-types.md#property-field) | This property field provides, for each new face element ID (in the scoping), the corresponding 3D volume element index (in the data) it has been extracted from. The 3D volume element ID can be found with the element scoping of the input mesh. |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  facet_indices |[`property_field`](../../core-concepts/dpf-types.md#property-field) | This property field gives, for each new face element ID (in the scoping), the corresponding face index on the source 3D volume element. The 3D volume element can be extracted from the previous output. |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  volume_mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | The solid support. |
| <strong>Pin 185</strong>|  degenerated_tets |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Elemental scoping of tet elements. If connected, the tets in the scoping are treated as degenerated tets (SOLID185), and the rest as non-degenerated tets (SOLID285). Pins 185 and 285 are mutually exclusionary (they cannot be connected at the same time), and if none of them is connected, all tets are treated as non-degenerated (SOLID285). |
| <strong>Pin 285</strong>|  non_degenerated_tets |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Elemental scoping of tet elements. If connected, the tets in the scoping are treated as non-degenerated tets (SOLID285), and the rest as degenerated tets (SOLID185). Pins 185 and 285 are mutually exclusionary (they cannot be connected at the same time), and if none of them is connected, all tets are treated as non-degenerated (SOLID285). |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Output splitted fields containter |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: mapdl

 **Scripting name**: mapdl_split_on_facet_indices

 **Full name**: result.mapdl_split_on_facet_indices

 **Internal name**: mapdl::split_on_facet_indices

 **License**: None


## Changelog

- Version 0.0.0: Initial release.