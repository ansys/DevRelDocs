# utility:merge supports

## Description

Assembles a set of supports into a unique one.

## Inputs


- **Pin -200** should_merge_named_selections (type: ['bool']) (optional: True): For some result files (such as RST), the scoping on names selection is duplicated through all the distributed files.If this pin is false, the merging process is skipped. If it is true, this scoping is merged. Default is true.

- **Pin 0** supports (type: ['vector<shared_ptr<abstract_field_support>>', 'abstract_field_support']) (optional: False): A vector of supports to merge or supports from pin 0 to ...


## Outputs


- **Pin 0** merged_support (type: ['abstract_field_support']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: merge_supports
- **full name**: utility.merge_supports
- **internal name**: merge::abstract_support
- **license**: None