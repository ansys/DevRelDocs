---
category: scoping
plugin: core
license: None
---

# scoping:on mesh property

## Description

Provides a scoping on a given property name and a property number.

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  requested_location |[`string`](../../getting-started/using-data-containers.md#string) | Nodal or Elemental location are expected |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  property_name |[`string`](../../getting-started/using-data-containers.md#string) | ex "apdl_element_type", "elprops", "mat", "eltype", "connectivity", "shell_elements", "solid_elements", "skin_elements", "beam_elements", "point_elements"... |
| <strong>Pin 2</strong>|  property_id |[`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>), [`int32`](../../getting-started/using-data-containers.md#int32) |  |
| <strong>Pin 5</strong>|  inclusive |[`int32`](../../getting-started/using-data-containers.md#int32) | Default is 1 (inclusive is true). Only used if 'shape_values' property is requested. If inclusive is set to 1 and 'elprops' property field is available, it will select all elements that are set on the corresponding property. If inclusive is set to 0 (exclusive) and 'elprops' property field is available, it will select the elements that are only set on this property. |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | mesh_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | Scoping |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: scoping
- Plugin: core
- Scripting name: on_mesh_property
- Full name: scoping.on_mesh_property
- Internal name: meshscoping_provider_by_prop
- License: None
  