# result:members in compression not certified

## Description

This operator is a non-certified example of buckling resistance verification for the compression members for Class I, 2 and 3 cross-sections. It is only provided as an example if you want to develop your own compute norm operator. The results computed by this beta operator have not been certified by ANSYS. ANSYS declines all responsibility for the use of this operator.

## Inputs


- **Pin 0** time_scoping (type: ['scoping', 'vector<int32>', 'int32']) (optional: True): time/freq set ids (use ints or scoping) 

- **Pin 1** field_yield_strength (type: ['data_sources', 'field']) (optional: False): This pin contains file csv or field of beam's Yield Strength.

- **Pin 2** field_end_condition (type: ['data_sources', 'field']) (optional: False): This pin contains file csv or field of beam's end condition defined by the user. If no input at this pin found, it would take end condition's value of all beams as 1.

- **Pin 3** streams (type: ['streams_container']) (optional: True):  result file container allowed to be kept open to cache data.

- **Pin 4** data_sources (type: ['data_sources']) (optional: True): result file path container, used if no streams are set.

- **Pin 5** manufacture (type: ['bool']) (optional: False): Manufacturing processus:hot finished if TRUE or cold formed if FALSE. Default value : hot finished.

- **Pin 6** partial_factor (type: ['double']) (optional: False): partial safety factor for resistance of members to instability assessed by member checks. Default value: 1.

- **Pin 7** mesh (type: ['abstract_meshed_region']) (optional: False):  Mesh containing beam's properties defined by user

- **Pin 8** axial_force (type: ['fields_container']) (optional: False): Fields Container of axial force defined by user

- **Pin 12** fabrication_type (type: ['bool']) (optional: False): If there is beam I in the structure, please define its fabrication type. True: Rolled section, False: Welded section


## Outputs


- **Pin 0** buckling_resistance_compression_yy (type: ['fields_container']): Fields Container of buckling resistance factor on axis y-y in case of compression. These factors should be less than 1 and positive.

- **Pin 1** buckling_resistance_compression_zz (type: ['fields_container']): Fields Container of buckling resistance factor on axis z-z in case of compression. These factors should be less than 1 and positive.


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: core
- **scripting name**: members_in_compression_not_certified
- **full name**: result.members_in_compression_not_certified
- **internal name**: members_in_compression_not_certified
- **license**: any_dpf_supported_increments