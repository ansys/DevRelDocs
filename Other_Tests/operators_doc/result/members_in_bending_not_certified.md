---
category: result
plugin: core
license: any_dpf_supported_increments
---

# result:members in bending not certified

## Description

This operator is a non-certified example of buckling resistance verification for the bending members. It is only provided as an example if you want to develop your own compute norm operator. The results computed by this beta operator have not been certified by ANSYS. ANSYS declines all responsibility for the use of this operator. HATS Beam and irregular beams (unequal I-Beam, not-square Channel-Beam, not-square Angle L-beam, unequal hollow rectangular beam) not supported.

## Inputs


- **Pin 0** time_scoping (type: ['scoping', 'vector<int32>', 'int32']) (optional: True): 

- **Pin 1** field_yield_strength (type: ['field']) (optional: False): This pin contains field of beam's Yield Strength defined by the user.

- **Pin 2** class_cross_section (type: ['bool']) (optional: False): Selection for a cross-section. True: Class 1 or 2 cross-sections. False: Class 3 cross section. If the user defines the cross section as class 1 or 2, the section modulus would be plastic section modulus. If it's class 3- cross section,the section modulus would be elastic section modulus

- **Pin 3** streams (type: ['streams_container']) (optional: True):  result file container allowed to be kept open to cache data.

- **Pin 4** data_sources (type: ['data_sources']) (optional: True): result file path container, used if no streams are set.

- **Pin 6** partial_factor (type: ['double']) (optional: False): partial safety factor for resistance of members to instability assessed by member checks. Default value: 1.

- **Pin 7** mesh (type: ['abstract_meshed_region']) (optional: False):  Mesh containing beam's properties defined by user

- **Pin 8** bending_moment_y (type: ['fields_container']) (optional: False): Fields Container of bending moment on axis y defined by user

- **Pin 9** bending_moment_z (type: ['fields_container']) (optional: False): Fields Container of bending moment on axis z defined by user


## Outputs


- **Pin 0** buckling_resistance_bending_yy (type: ['fields_container']): Fields Container of buckling resistance factor on axis y-y in case of bending(M). These factors should be less than 1 and positive.

- **Pin 1** buckling_resistance_bending_zz (type: ['fields_container']): Fields Container of buckling resistance factor on axis z-z in case of bending(M). These factors should be less than 1 and positive.


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: core
- **scripting name**: members_in_bending_not_certified
- **full name**: result.members_in_bending_not_certified
- **internal name**: members_in_bending_not_certified
- **license**: any_dpf_supported_increments