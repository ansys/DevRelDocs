# mesh:beam properties

## Description

Reads the beam's properties from the result files contained in the streams or data sources.

## Inputs


- **Pin 3** streams (type: ['streams_container']) (optional: True): Result file container allowed to be kept open to cache data.

- **Pin 4** data_sources (type: ['data_sources']) (optional: False): Result file path container, used if no streams are set.


## Outputs


- **Pin 0** mesh_out (type: ['abstract_meshed_region']): This mesh updates a new map containing a field of the beam's properties if there is at least one beam in mesh.

- **Pin 1** field_type_section_id (type: ['field']): This field contains the section ID of beams. 1:REC; 3:CSOLID, 4:CTUBE, 5:CHAN, 6:Z, 7:L, 8:I, 9:T, 11:HATS, 12:HREC.

- **Pin 2** field_area (type: ['field']): This field contains the area of beams.

- **Pin 3** field_moment_inertia (type: ['field']): This field contains the inertia moment of beams. Iyy, Iyz, Izz.

- **Pin 4** field_geometry (type: ['field']): This field contains the geometry of beams. REC:b,h. CSOLID:Ri. CTUBE:Ri, Re. CHAN:w1,w2,w3,t1,t2,t3. Z:w1,w2,w3,t1,t2,t3. L:w1,w2,t1,t2. I:w1,w2,w3,t1,t2,t3. T:w1,w2,t1,t2. HATS: w1,w2,w3,w4,t1,t2,t3,t4. HREC:w1,w2,t1,t2,t3,t4.

- **Pin 5** field_young_modulus (type: ['field']): This field contains the Young's modulus of beams.

- **Pin 6** field_poisson_ratio (type: ['field']): This field contains the Poisson's ratio of beams.

- **Pin 7** field_shear_modulus (type: ['field']): This field contains the Shear Modulus of beams.

- **Pin 8** field_beam_length (type: ['field']): This field contains the length of beams.

- **Pin 9** field_torsion_constant (type: ['field']): This field contains the Torsion Constant of beams.

- **Pin 10** field_warping_constant (type: ['field']): This field contains the Warping Constant of beams.

- **Pin 11** field_offset_type (type: ['field']): This field contains offset type of beams.

- **Pin 12** field_offset_y (type: ['field']): This field contains offset y of beams.

- **Pin 13** field_offset_z (type: ['field']): This field contains offset z of beams.


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: mesh
- **plugin**: core
- **scripting name**: beam_properties
- **full name**: mesh.beam_properties
- **internal name**: beam_properties
- **license**: None