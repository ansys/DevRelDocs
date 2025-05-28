---
category: mesh
plugin: core
license: None
---

# mesh:beam properties

## Description

Reads the beam's properties from the result files contained in the streams or data sources.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 3</strong>|  streams |[`streams_container`](../../getting-started/using-data-containers.md#streams-container) | Result file container allowed to be kept open to cache data. |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | Result file path container, used if no streams are set. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| mesh_out |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) | This mesh updates a new map containing a field of the beam's properties if there is at least one beam in mesh. |
|  **Pin 1**| field_type_section_id |[`field`](../../getting-started/using-data-containers.md#field) | This field contains the section ID of beams. 1:REC; 3:CSOLID, 4:CTUBE, 5:CHAN, 6:Z, 7:L, 8:I, 9:T, 11:HATS, 12:HREC. |
|  **Pin 2**| field_area |[`field`](../../getting-started/using-data-containers.md#field) | This field contains the area of beams. |
|  **Pin 3**| field_moment_inertia |[`field`](../../getting-started/using-data-containers.md#field) | This field contains the inertia moment of beams. Iyy, Iyz, Izz. |
|  **Pin 4**| field_geometry |[`field`](../../getting-started/using-data-containers.md#field) | This field contains the geometry of beams. REC:b,h. CSOLID:Ri. CTUBE:Ri, Re. CHAN:w1,w2,w3,t1,t2,t3. Z:w1,w2,w3,t1,t2,t3. L:w1,w2,t1,t2. I:w1,w2,w3,t1,t2,t3. T:w1,w2,t1,t2. HATS: w1,w2,w3,w4,t1,t2,t3,t4. HREC:w1,w2,t1,t2,t3,t4. |
|  **Pin 5**| field_young_modulus |[`field`](../../getting-started/using-data-containers.md#field) | This field contains the Young's modulus of beams. |
|  **Pin 6**| field_poisson_ratio |[`field`](../../getting-started/using-data-containers.md#field) | This field contains the Poisson's ratio of beams. |
|  **Pin 7**| field_shear_modulus |[`field`](../../getting-started/using-data-containers.md#field) | This field contains the Shear Modulus of beams. |
|  **Pin 8**| field_beam_length |[`field`](../../getting-started/using-data-containers.md#field) | This field contains the length of beams. |
|  **Pin 9**| field_torsion_constant |[`field`](../../getting-started/using-data-containers.md#field) | This field contains the Torsion Constant of beams. |
|  **Pin 10**| field_warping_constant |[`field`](../../getting-started/using-data-containers.md#field) | This field contains the Warping Constant of beams. |
|  **Pin 11**| field_offset_type |[`field`](../../getting-started/using-data-containers.md#field) | This field contains offset type of beams. |
|  **Pin 12**| field_offset_y |[`field`](../../getting-started/using-data-containers.md#field) | This field contains offset y of beams. |
|  **Pin 13**| field_offset_z |[`field`](../../getting-started/using-data-containers.md#field) | This field contains offset z of beams. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../getting-started/using-data-containers.md#int32) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: beam_properties

 **Full name**: mesh.beam_properties

 **Internal name**: beam_properties

 **License**: None
