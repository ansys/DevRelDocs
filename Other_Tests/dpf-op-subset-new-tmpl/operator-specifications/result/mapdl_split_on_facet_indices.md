# result:split on facet indices

## Description

Splits each Field in a FieldsContainer defined on the skin elements of a mesh according to the local facets indices of its corresponding solid element. The output FieldsContainer retains the original labels and adds a 'facet' label, which indicates at which facet of the solid mesh was the original skin element located. The facet ids are according to MAPDL convention. The scoping of the output Fields reflects the element indices in the solid mesh.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes | Fields container to split, with generic number of labels (e.g. time, zone, complex...), and the Fields of the FieldsContainer will have location Elemental and the Scoping Ids will be the Element Ids on the skin mesh. |
| **Pin 1** | property_field_new_elements_to_old |[`property_field`](../../getting-started/using-data-containers.md#property-field) | Yes | This property field provides, for each new face element ID (in the scoping), the corresponding 3D volume element index (in the data) it has been extracted from. The 3D volume element ID can be found with the element scoping of the input mesh. |
| **Pin 2** | facet_indices |[`property_field`](../../getting-started/using-data-containers.md#property-field) | Yes | This property field gives, for each new face element ID (in the scoping), the corresponding face index on the source 3D volume element. The 3D volume element can be extracted from the previous output. |
| **Pin 3** | volume_mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) | Yes | The solid support. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes | Output splitted fields containter |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **result** | mapdl | mapdl_split_on_facet_indices | result.mapdl_split_on_facet_indices | mapdl::split_on_facet_indices | None |
