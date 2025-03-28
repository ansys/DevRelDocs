# result:euler load buckling

## Description

Computing Euler's Critical Load. Formula: Ncr = n*E*I*pi*pi /(L*L) 

## Inputs


- **Pin 5** field_beam_end_condition (type: ['data_sources', 'field']) (optional: False): This pin contains file csv or field of beam's end condition added by the user. If there's no file added, it would take value of all beam's end condition as 1.

- **Pin 6** field_beam_moment_inertia (type: ['field']) (optional: False): Field of beam's moment inertia

- **Pin 7** field_beam_young_modulus (type: ['field']) (optional: False): Field of beam's young modulus

- **Pin 8** field_beam_length (type: ['field']) (optional: False): Field of beam's length


## Outputs


- **Pin 0** field_euler_critical_load (type: ['field']): This field contains Euler's Critical Load about the principle axis of the cross section having the least moment of inertia.

- **Pin 1** field_euler_critical_load_yy (type: ['field']): This field contains Euler's Critical Load on axis y.

- **Pin 2** field_euler_critical_load_zz (type: ['field']): This field contains Euler's Critical Load on axis z.


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: core
- **scripting name**: euler_load_buckling
- **full name**: result.euler_load_buckling
- **internal name**: euler_load_buckling
- **license**: any_dpf_supported_increments