---
category: math
plugin: core
license: any_dpf_supported_increments
---

# math:modal damping ratio

## Description

Computes damping ratio for each mode shape as X_i = const + ratio_i + m_coefficient / (2*omega_i) + k_coefficient * omega_i/2.

## Inputs


- **Pin 0** natural_freq (type: ['vector<double>']) (optional: False): input vector expects natural frequencies.

- **Pin 1** const_ratio (type: ['double']) (optional: True): constant modal damping ratio

- **Pin 2** ratio_by_modes (type: ['vector<double>']) (optional: True): modal damping ratio for each mode shape

- **Pin 3** m_coefficient (type: ['double']) (optional: False): global mass matrix multiplier

- **Pin 4** k_coefficient (type: ['double']) (optional: False): global stiffness matrix multiplier


## Outputs


- **Pin 0** field (type: ['field']): field of modal damping ratio.


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: math
- **plugin**: core
- **scripting name**: modal_damping_ratio
- **full name**: math.modal_damping_ratio
- **internal name**: modal_damping_ratio
- **license**: any_dpf_supported_increments