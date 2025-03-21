---
category: result
plugin: mapdl
license: None
---

# result:add rigid body motion (fields container)

## Description

Adds a given rigid translation, center and rotation from a displacement field. The rotation is given in terms of rotations angles. Note that the displacement field has to be in the global coordinate system

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 

- **Pin 1** translation_field (type: ['field']) (optional: False): 

- **Pin 2** rotation_field (type: ['field']) (optional: False): 

- **Pin 3** center_field (type: ['field']) (optional: False): 

- **Pin 7** mesh (type: ['abstract_meshed_region']) (optional: True): default is the mesh in the support


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: mapdl
- **scripting name**: add_rigid_body_motion_fc
- **full name**: result.add_rigid_body_motion_fc
- **internal name**: RigidBodyAddition_fc
- **license**: None