---
category: scoping
plugin: core
license: None
---

# scoping:split on property type

## Description

Splits a given scoping or the mesh scoping (nodal or elemental) on given properties (elshape and/or material) and returns a scopings container with those split scopings.

## Inputs


- **Pin 1** mesh_scoping (type: ['scoping']) (optional: True): Scoping

- **Pin 7** mesh (type: ['abstract_meshed_region']) (optional: False): mesh region

- **Pin 9** requested_location (type: ['string']) (optional: False): location (default is elemental)

- **Pin 12** skin_case (type: ['int32']) (optional: True): set to 0: to have skin elements in their own group, 1: merge skin and solid elements, 2: merge skin and shell elements (default)

- **Pin 13** label (type: ['string', 'vector<string>']) (optional: True): properties to apply the filtering 'mat' and/or 'elshape' (default is 'elshape')


## Outputs


- **Pin 0** mesh_scoping (type: ['scopings_container']): Scoping


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: scoping
- **plugin**: core
- **scripting name**: split_on_property_type
- **full name**: scoping.split_on_property_type
- **internal name**: scoping::by_property
- **license**: None