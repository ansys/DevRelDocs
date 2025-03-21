---
category: utility
plugin: core
license: None
---

# utility:txt file to dpf

## Description

Take an input string and parse it into dataProcessing type.

## Inputs


- **Pin 0** input_string (type: ['string']) (optional: False): ex: 'double:1.0', 'int:1', 'vector<double>:1.0;1.0'


## Outputs


- **Pin 0** any_output (type: []): any output


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: txt_file_to_dpf
- **full name**: utility.txt_file_to_dpf
- **internal name**: text_parser
- **license**: None