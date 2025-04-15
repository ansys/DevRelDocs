# scoping:on mesh property

## Description

Provides a scoping on a given property name and a property number.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | requested_location |[`string`](../../getting-started/using-data-containers.md#string) | No | Nodal or Elemental location are expected |
| **Pin 1** | property_name |[`string`](../../getting-started/using-data-containers.md#string) | Yes | ex "apdl_element_type", "elprops", "mat", "eltype", "connectivity", "shell_elements", "solid_elements", "skin_elements", "beam_elements", "point_elements"... |
| **Pin 2** | property_id |[`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>), [`int32`](../../getting-started/using-data-containers.md#int32) | No |  |
| **Pin 5** | inclusive |[`int32`](../../getting-started/using-data-containers.md#int32) | No | Default is 1 (inclusive is true). Only used if 'shape_values' property is requested. If inclusive is set to 1 and 'elprops' property field is available, it will select all elements that are set on the corresponding property. If inclusive is set to 0 (exclusive) and 'elprops' property field is available, it will select the elements that are only set on this property. |
| **Pin 7** | mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) | Yes |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | mesh_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | Yes | Scoping |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **scoping** | core | on_mesh_property | scoping.on_mesh_property | meshscoping_provider_by_prop | None |
