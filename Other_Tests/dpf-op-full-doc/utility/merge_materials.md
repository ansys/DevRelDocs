# utility:merge materials

## Description

Assembles a set of materials into a unique one.

## Inputs


- **Pin 0** materials (type: ['vector<shared_ptr<materials>>', 'materials']) (optional: False): A vector of materials to merge or materials from pin 0 to ...


## Outputs


- **Pin 0** merged_materials (type: ['materials']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: merge_materials
- **full name**: utility.merge_materials
- **internal name**: merge::materials
- **license**: None