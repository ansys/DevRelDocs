---
category: averaging
plugin: core
license: None
---

# averaging:elemental mean (fields container)

## Description

Computes the average of a multi-entity container of fields, (ElementalNodal -> Elemental), (NodalElemental -> Nodal). If the input fields are mixed shell/solid and collapseShellLayers is not specified, then the fields are split by element shape and the output fields container has an elshape label.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 

- **Pin 1** collapse_shell_layers (type: ['bool']) (optional: True): If true, shell layers are averaged as well (default is false).

- **Pin 2** force_averaging (type: ['bool']) (optional: True): If true you average, if false you just sum.

- **Pin 3** scoping (type: ['scoping']) (optional: True): Average only on these elements. If it is a scoping container, the label must correspond to the one of the fields containers.

- **Pin 4** abstract_meshed_region (type: ['abstract_meshed_region']) (optional: True): The mesh region in this pin is used to perform the averaging. It is used if there is no fields support.


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: averaging
- **plugin**: core
- **scripting name**: elemental_mean_fc
- **full name**: averaging.elemental_mean_fc
- **internal name**: entity_average_fc
- **license**: None