---
category: result
plugin: mapdl
license: None
---

# result:remove rigid body motion (fields container)

## Description

Removes rigid body mode from a total displacement field by minimization. Use a reference point in order to subtract its displacement to the result displacement field.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): field or fields container with only one field is expected

- **Pin 1** reference_node_id (type: ['int32']) (optional: True): Id of the reference entity (node).

- **Pin 7** mesh (type: ['abstract_meshed_region']) (optional: True): default is the mesh in the support


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 

- **Pin 1** translation_field (type: ['field']): Global rigid translation vector

- **Pin 2** rotation_field (type: ['field']): Global rigid rotation angles

- **Pin 3** center_field (type: ['field']): Center of the rigid rotation


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: mapdl
- **scripting name**: remove_rigid_body_motion_fc
- **full name**: result.remove_rigid_body_motion_fc
- **internal name**: ExtractRigidBodyMotion_fc
- **license**: None