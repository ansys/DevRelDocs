---
category: math
plugin: core
license: None
---

# math:fft filtering and cubic fitting

## Description

Computes the fitting curve using FFT filtering and cubic fitting in space (node i: x=time, y=data), with the possibility to compute the first and the second derivatives of the curve.


## Inputs


- **Pin 0** time_scoping (type: ['vector<int32>', 'scoping']) (optional: True): A time scoping to rescope / split the fields container given as input.

- **Pin 1** mesh_scoping (type: ['umap<int32,int32>', 'scoping', 'scopings_container']) (optional: True): A space (mesh entities) scoping (or scopings container) to rescope / split the fields container given as input.

- **Pin 2** entity_to_fit (type: ['fields_container']) (optional: False): Data changing in time to be fitted.

- **Pin 3** component_number (type: ['int32']) (optional: False): Component number as an integer, for example '0' for X-displacement, '1' for Y-displacement, and so on.

- **Pin 4** first_derivative (type: ['bool']) (optional: False): Calculate the first derivative (bool). The default is false.

- **Pin 5** second_derivative (type: ['bool']) (optional: False): Calculate the second derivative (bool). The default is false.

- **Pin 6** fit_data (type: ['bool']) (optional: False): Calculate the fitted values (bool). The default is false

- **Pin 7** cutoff_fr (type: ['double', 'int32']) (optional: True): Cutoff frequency.


## Outputs


- **Pin 0** fitted_entity_y (type: ['fields_container']): The fitted entity is fitted using FFT along the space scoping (node i: x=time, y=data). Fitted Y is expected to be close to the input data.

- **Pin 1** first_der_dy (type: ['fields_container']): The first derivative (dY) from the fitted Y.

- **Pin 2** second_der_d2y (type: ['fields_container']): The second derivative (d2Y) from the fitted Y.


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: math
- **plugin**: core
- **scripting name**: fft_approx
- **full name**: math.fft_approx
- **internal name**: fft_approx
- **license**: None