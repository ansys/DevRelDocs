# geo:element nodal contribution

## Description

Compute the fraction of the element measure attributed to each node of each element (fraction of the volume for 3D elements, fraction of the area for 2D elements or fraction of the length for 1D elements). It is computed by taking the integral of the shape function associated to each node within each element.

## Inputs


- **Pin 0** mesh (type: ['abstract_meshed_region']) (optional: False): 

- **Pin 1** scoping (type: ['scoping']) (optional: True): Integrate the input field over a specific scoping.

- **Pin 2** volume_fraction (type: ['bool']) (optional: True): If true, returns influence volume, area or length. If false, the values are normalized with the element volume, area or length. Default: true.


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: geo
- **plugin**: core
- **scripting name**: element_nodal_contribution
- **full name**: geo.element_nodal_contribution
- **internal name**: element::nodal_contribution
- **license**: any_dpf_supported_increments