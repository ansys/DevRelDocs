# geo:normals provider nl (nodes, faces, or elements)

## Description

Computes the normals on nodes/faces/elements based on integration points (more accurate for non-linear elements) on a skin mesh.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) | Yes | Skin, face, or shell mesh region. |
| **Pin 1** | mesh_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | No | Elemental, ElementalNodal, or Nodal scoping. Location derived from this. |
| **Pin 9** | requested_location |[`string`](../../getting-started/using-data-containers.md#string) | No | If no scoping, specifies location. If scoping is Elemental or ElementalNodal this overrides scoping. Default is Elemental. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../../getting-started/using-data-containers.md#field) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **geo** | core | normals_provider_nl | geo.normals_provider_nl | normals_provider_nl | any_dpf_supported_increments |
