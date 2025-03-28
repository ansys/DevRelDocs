# math:modal superposition

## Description

Computes the solution in the time/frequency space from a modal solution by multiplying a modal basis (in 0) by the solution in this modal space (coefficients for each mode for each time/frequency) (in 1).

## Inputs


- **Pin 0** modal_basis (type: ['fields_container']) (optional: False): One field by mode with each field representing a mode shape on nodes or elements.

- **Pin 1** solution_in_modal_space (type: ['fields_container']) (optional: False): One field by time/frequency with each field having a ponderating coefficient for each mode of the modal_basis pin.

- **Pin 3** time_scoping (type: ['scoping', 'vector<int32>']) (optional: True): Compute the result on a subset of the time frequency domain defined in the solution_in_modal_space fields container.

- **Pin 4** mesh_scoping (type: ['scoping', 'scopings_container']) (optional: True): Compute the result on a subset of the space domain defined in the modal_basis fields container.


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **read_inputs_in_parallel** (type: ['bool']) (default: false): If this option is set to true, the operator's inputs will be evaluated in parallel.

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: math
- **plugin**: core
- **scripting name**: modal_superposition
- **full name**: math.modal_superposition
- **internal name**: expansion::modal_superposition
- **license**: any_dpf_supported_increments