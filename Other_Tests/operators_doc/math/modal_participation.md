---
category: math
plugin: core
license: any_dpf_supported_increments
---

# math:modal participation

## Description

Compute the modal participation factor for a given vector field V, defined as  sum_i ( V .dot. mode_shape_i * ponderation ).

## Inputs


- **Pin 0** v_real (type: ['field']) (optional: False): real part of field V

- **Pin 1** v_imag (type: ['field']) (optional: False): imag part of field V

- **Pin 2** mode_shapes (type: ['fields_container']) (optional: False): 

- **Pin 3** ponderation (type: ['field']) (optional: True): 

- **Pin 4** force_label_space (type: ['label_space']) (optional: True): If set, will force a label space for output result.


## Outputs


- **Pin 0** output (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: math
- **plugin**: core
- **scripting name**: modal_participation
- **full name**: math.modal_participation
- **internal name**: harmonic::modal_participation
- **license**: any_dpf_supported_increments