# result:mapdl_section

## Description

Read the values of the section properties for a given section property field (property field that contains section information for each element of a mesh). The following keys can be used: Thickness, NumLayers. For layered elements, the following keys can be used: Thickness, MatID, Orientation, NumIntPoints.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | properties_name |[`string`](../getting-started/using-data-containers.md#string), [`vector<string>`](../getting-started/using-data-containers.md#vector<string>) | Yes |  |
| **Pin 1** | section |[`property_field`](../getting-started/using-data-containers.md#property-field) | No | Property field that contains a section id per element.(optional) |
| **Pin 3** | streams_container |[`streams_container`](../getting-started/using-data-containers.md#streams-container) | Yes |  |
| **Pin 4** | data_sources |[`data_sources`](../getting-started/using-data-containers.md#data-sources) | Yes |  |
| **Pin 5** | layer_property |[`bool`](../getting-started/using-data-containers.md#bool) | No | Property requested is layered. Default = False. |
| **Pin 6** | layers_requested |[`vector<int32>`](../getting-started/using-data-containers.md#vector<int32>) | No | Array with layers requested for the section. Default = AllLayers. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | properties_value |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 1** | layers_per_section |[`property_field`](../getting-started/using-data-containers.md#property-field) | Yes | Only available if layer_property option is set to True. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **result** | mapdl | mapdl_section | result.mapdl_section | mapdl_section_properties | None |
