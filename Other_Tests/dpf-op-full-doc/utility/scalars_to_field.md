# utility:convert to field

## Description

Create scalar or vector Field.

## Inputs


- **Pin 0** double_or_vector_double (type: ['double', 'vector<double>']) (optional: True): Data of the field, default is 0-field. Specify a double to have a field of same value or specify directly the data vector.

- **Pin 1** unit (type: ['string']) (optional: True): Unit symbol (m, Hz, kg, ...)

- **Pin 2** location (type: ['string']) (optional: True): Location of the field ex 'Nodal', 'ElementalNodal', 'Elemental'... Default is 'numeric'. 

- **Pin 3** num_entity (type: ['int32']) (optional: True): Number of field entities. Default is 1 or the size of the scoping in input if specified.

- **Pin 4** num_comp (type: ['int32']) (optional: True): Number of field components. Default is 1.

- **Pin 5** scoping (type: ['scoping']) (optional: True): Scoping.


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: scalars_to_field
- **full name**: utility.scalars_to_field
- **internal name**: fieldify
- **license**: None