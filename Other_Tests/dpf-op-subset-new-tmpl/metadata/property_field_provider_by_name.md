# metadata:property field provider by property name

## Description

Provides the property values for a set of elements for a defined property name.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 1** | mesh_scoping |[`scoping`](../getting-started/using-data-containers.md#scoping) | No | scoping that defines the set of elements to fetch the property values for. If not specified, applied on all the elements of the mesh. |
| **Pin 3** | streams_container |[`streams_container`](../getting-started/using-data-containers.md#streams-container) | No | optional if using a dataSources |
| **Pin 4** | data_sources |[`data_sources`](../getting-started/using-data-containers.md#data-sources) | Yes | optional if using a streamsContainer |
| **Pin 13** | property_name |[`string`](../getting-started/using-data-containers.md#string) | Yes | property to read, that can be the following: elements_connectivity, nodes_connectivity, material, element_type, mapdl_element_type, mapdl_element_type_id harmonic_index, step, substep, keyopt_i (i = 1 -> 18). |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | property_field |[`property_field`](../getting-started/using-data-containers.md#property-field) | Yes | property field |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **metadata** | core | property_field_provider_by_name | metadata.property_field_provider_by_name | property_field_provider_by_name | None |
