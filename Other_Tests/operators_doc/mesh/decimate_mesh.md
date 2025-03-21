---
category: mesh
plugin: mesh
license: None
---

# mesh:decimate mesh

## Description

Decimate a meshed region

## Inputs


- **Pin 0** mesh (type: ['abstract_meshed_region']) (optional: False): Mesh to decimate

- **Pin 1** preservation_ratio (type: ['double']) (optional: True): Target ratio of elements to preserve, the actual number of elements preserved might differ. Default value is 0.5.

- **Pin 2** aggressiveness (type: ['int32']) (optional: True): Quality measure for the resulting decimated mesh. Lower aggresiveness will provide a higher quality mesh with the tradeoff of higher execution time. Value range is 0 to 150, default is 0.


## Outputs


- **Pin 0** mesh (type: ['abstract_meshed_region']): Decimated mesh with triangle elements


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: mesh
- **plugin**: mesh
- **scripting name**: None
- **full name**: None
- **internal name**: decimate_mesh
- **license**: None