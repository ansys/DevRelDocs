# result:members in linear compression bending not certified

## Description

This operator is a non-certified example of buckling resistance verification for the compression and bending members for Class I, 2 and 3 cross-sections. It is only provided as an example if you want to develop your own compute norm operator. This norm is linear summation of the utilization ratios of compression members and bending members. The results computed by this beta operator have not been certified by ANSYS. ANSYS declines all responsibility for the use of this operator.

## Inputs


- **Pin 0** time_scoping (type: ['scoping', 'vector<int32>', 'int32']) (optional: True): 

- **Pin 1** field_yield_strength (type: ['field']) (optional: False): This pin contains field of beam's Yield Strength defined by the user.

- **Pin 2** field_end_condition (type: ['data_sources', 'field']) (optional: True): This pin contains file csv or field of beam's end condition defined by the user. If no input at this pin found, it would take end conditions value of all beams as 1

- **Pin 3** streams (type: ['streams_container']) (optional: True):  result file container allowed to be kept open to cache data.

- **Pin 4** data_sources (type: ['data_sources']) (optional: True): result file path container, used if no streams are set.

- **Pin 5** manufacture (type: ['bool']) (optional: True): Manufacturing processus:hot finished if TRUE or cold formed if FALSE. Default value : hot finished.

- **Pin 6** partial_factor (type: ['double']) (optional: True): partial factor for resistance of members to instability assessed by member checks. Default value: 1.0

- **Pin 7** mesh (type: ['abstract_meshed_region']) (optional: False):  Mesh containing beam's properties defined by user

- **Pin 8** bending_moment_y (type: ['fields_container']) (optional: False): Fields Container of bending moment on axis y defined by user

- **Pin 9** bending_moment_z (type: ['fields_container']) (optional: False): Fields Container of bending moment on axis z defined by user

- **Pin 10** axial_force (type: ['fields_container']) (optional: False): Fields Container of axial force defined by user

- **Pin 11** class_cross_section (type: ['bool']) (optional: False): Selection for a cross-section. True: Class 1 or 2 cross-sections. False: Class 3 cross section. If the user defines the cross section as class 1 or 2, the section modulus would be plastic section modulus. If it's class 3- cross section,the section modulus would be elastic section modulus

- **Pin 12** fabrication_type (type: ['bool']) (optional: True): Selection of fabrication's type if there are beams I in the structure. TRUE: Rolled Section, False: Welded Section. Default: Rolled Section.


## Outputs


- **Pin 0** buckling_resistance_linear_summation_utilization_ratios (type: ['fields_container']): Linear summation of the utilization ratios in all members submitted under a combination of both bending and compression. These factors should be less than 1 and positive.


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: core
- **scripting name**: members_in_linear_compression_bending_not_certified
- **full name**: result.members_in_linear_compression_bending_not_certified
- **internal name**: members_in_linear_compression_bending_not_certified
- **license**: any_dpf_supported_increments