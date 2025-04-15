# result:members in compression not certified

## Description

This operator is a non-certified example of buckling resistance verification for the compression members for Class I, 2 and 3 cross-sections. It is only provided as an example if you want to develop your own compute norm operator. The results computed by this beta operator have not been certified by ANSYS. ANSYS declines all responsibility for the use of this operator.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | time_scoping |[`scoping`](../getting-started/using-data-containers.md#scoping), [`vector<int32>`](../getting-started/using-data-containers.md#vector<int32>), [`int32`](../getting-started/using-data-containers.md#int32) | No | time/freq set ids (use ints or scoping)  |
| **Pin 1** | field_yield_strength |[`data_sources`](../getting-started/using-data-containers.md#data-sources), [`field`](../getting-started/using-data-containers.md#field) | Yes | This pin contains file csv or field of beam's Yield Strength. |
| **Pin 2** | field_end_condition |[`data_sources`](../getting-started/using-data-containers.md#data-sources), [`field`](../getting-started/using-data-containers.md#field) | Yes | This pin contains file csv or field of beam's end condition defined by the user. If no input at this pin found, it would take end condition's value of all beams as 1. |
| **Pin 3** | streams |[`streams_container`](../getting-started/using-data-containers.md#streams-container) | No |  result file container allowed to be kept open to cache data. |
| **Pin 4** | data_sources |[`data_sources`](../getting-started/using-data-containers.md#data-sources) | No | result file path container, used if no streams are set. |
| **Pin 5** | manufacture |[`bool`](../getting-started/using-data-containers.md#bool) | Yes | Manufacturing processus:hot finished if TRUE or cold formed if FALSE. Default value : hot finished. |
| **Pin 6** | partial_factor |[`double`](../getting-started/using-data-containers.md#double) | Yes | partial safety factor for resistance of members to instability assessed by member checks. Default value: 1. |
| **Pin 7** | mesh |[`abstract_meshed_region`](../getting-started/using-data-containers.md#abstract-meshed-region) | Yes |  Mesh containing beam's properties defined by user |
| **Pin 8** | axial_force |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | Fields Container of axial force defined by user |
| **Pin 12** | fabrication_type |[`bool`](../getting-started/using-data-containers.md#bool) | Yes | If there is beam I in the structure, please define its fabrication type. True: Rolled section, False: Welded section |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | buckling_resistance_compression_yy |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | Fields Container of buckling resistance factor on axis y-y in case of compression. These factors should be less than 1 and positive. |
| **Pin 1** | buckling_resistance_compression_zz |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | Fields Container of buckling resistance factor on axis z-z in case of compression. These factors should be less than 1 and positive. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **result** | core | members_in_compression_not_certified | result.members_in_compression_not_certified | members_in_compression_not_certified | any_dpf_supported_increments |
