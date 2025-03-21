---
category: mesh
plugin: core
license: None
---

# mesh:wireframe

## Description

Take a mesh and extracts its sharp edges, using pin 1 value as a threshold angle.

## Inputs


- **Pin 0** mesh (type: ['abstract_meshed_region']) (optional: False): 

- **Pin 1** threshold (type: ['double']) (optional: False): angle threshold in radian that will trigger an edge detection.


## Outputs


- **Pin 0** wireframe (type: ['abstract_meshed_region']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: mesh
- **plugin**: core
- **scripting name**: wireframe
- **full name**: mesh.wireframe
- **internal name**: wireframe
- **license**: None