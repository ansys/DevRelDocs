---
category: averaging
plugin: core
license: None
---

# averaging:elemental mean (field)

## Description

Computes the average of a multi-entity field, (ElementalNodal -> Elemental), (NodalElemental -> Nodal).

## Inputs


- **Pin 0** field (type: ['field']) (optional: False): 

- **Pin 1** collapse_shell_layers (type: ['bool']) (optional: True): If true, shell layers are averaged as well (default is false).

- **Pin 2** force_averaging (type: ['bool']) (optional: True): If true you average, if false you just sum.

- **Pin 3** scoping (type: ['scoping']) (optional: True): Average only on these elements. If it is a scoping container, the label must correspond to the one of the fields containers.


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: averaging
- **plugin**: core
- **scripting name**: elemental_mean
- **full name**: averaging.elemental_mean
- **internal name**: entity_average
- **license**: None