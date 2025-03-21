---
category: scoping
plugin: core
license: None
---

# scoping:compute element centroids

## Description

Computes the element centroids of the mesh. It also outputs the element measure.

## Inputs


- **Pin 1** element_scoping (type: ['scoping']) (optional: True): If provided, only the centroids of the elements in the scoping are computed.

- **Pin 7** mesh (type: ['abstract_meshed_region']) (optional: False): Mesh to compute centroids


## Outputs


- **Pin 0** centroids (type: ['field']): element centroids.

- **Pin 1** measure (type: ['field']): element measure (length, surface or volume depending on the dimension of the element).


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: scoping
- **plugin**: core
- **scripting name**: compute_element_centroids
- **full name**: scoping.compute_element_centroids
- **internal name**: compute_element_centroids
- **license**: None