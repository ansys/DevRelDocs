# utility:html doc

## Description

Create dpf's html documentation. Only on Windows.

## Inputs


- **Pin 0** output_path (type: ['string']) (optional: True): default is {working directory}/dataProcessingDoc.html

- **Pin 1** exposure_level (type: ['int32']) (optional: True): Generate the documentation depending on exposure level : 0 (default) for public operators, 1 includes hidden operator, 2 includes private operator, 3 includes operator without specifications.


## Outputs



## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: html_doc
- **full name**: utility.html_doc
- **internal name**: html_doc
- **license**: None