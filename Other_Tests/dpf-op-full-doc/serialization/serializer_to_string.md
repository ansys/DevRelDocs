# serialization:serializer to string

## Description

Take any input and serialize them in a string.

## Inputs


- **Pin -1** stream_type (type: ['int32']) (optional: False): 0 for string (default), and 1 for binary

- **Pin 1** any_input (type: ['any']) (optional: False): any input


## Outputs


- **Pin 0** serialized_string (type: ['string']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: serialization
- **plugin**: core
- **scripting name**: serializer_to_string
- **full name**: serialization.serializer_to_string
- **internal name**: serializer_to_string
- **license**: None