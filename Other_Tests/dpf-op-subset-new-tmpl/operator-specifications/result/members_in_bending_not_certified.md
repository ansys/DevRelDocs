# result:members in bending not certified

## Description

This operator is a non-certified example of buckling resistance verification for the bending members. It is only provided as an example if you want to develop your own compute norm operator. The results computed by this beta operator have not been certified by ANSYS. ANSYS declines all responsibility for the use of this operator. HATS Beam and irregular beams (unequal I-Beam, not-square Channel-Beam, not-square Angle L-beam, unequal hollow rectangular beam) not supported.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | time_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping), [`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>), [`int32`](../../getting-started/using-data-containers.md#int32) | No |  |
| **Pin 1** | field_yield_strength |[`field`](../../getting-started/using-data-containers.md#field) | Yes | This pin contains field of beam's Yield Strength defined by the user. |
| **Pin 2** | class_cross_section |[`bool`](../../getting-started/using-data-containers.md#bool) | Yes | Selection for a cross-section. True: Class 1 or 2 cross-sections. False: Class 3 cross section. If the user defines the cross section as class 1 or 2, the section modulus would be plastic section modulus. If it's class 3- cross section,the section modulus would be elastic section modulus |
| **Pin 3** | streams |[`streams_container`](../../getting-started/using-data-containers.md#streams-container) | No |  result file container allowed to be kept open to cache data. |
| **Pin 4** | data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | No | result file path container, used if no streams are set. |
| **Pin 6** | partial_factor |[`double`](../../getting-started/using-data-containers.md#double) | Yes | partial safety factor for resistance of members to instability assessed by member checks. Default value: 1. |
| **Pin 7** | mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) | Yes |  Mesh containing beam's properties defined by user |
| **Pin 8** | bending_moment_y |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes | Fields Container of bending moment on axis y defined by user |
| **Pin 9** | bending_moment_z |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes | Fields Container of bending moment on axis z defined by user |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | buckling_resistance_bending_yy |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes | Fields Container of buckling resistance factor on axis y-y in case of bending(M). These factors should be less than 1 and positive. |
| **Pin 1** | buckling_resistance_bending_zz |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes | Fields Container of buckling resistance factor on axis z-z in case of bending(M). These factors should be less than 1 and positive. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **result** | core | members_in_bending_not_certified | result.members_in_bending_not_certified | members_in_bending_not_certified | any_dpf_supported_increments |
