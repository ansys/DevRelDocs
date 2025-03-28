# result:mapdl material properties

## Description

Read the values of the properties of a material for a given materials property field (property field that contains materials information for each element of a mesh).It returns a fields container containing a field for each material property, with only one value per material. The following keys can be used: Young's modulus (keys: EX, EY, EZ), Poisson's ratio (keys: NUXY, NUYZ, NUXZ), Shear Modulus (keys: GXY, GYZ, GXZ), Coefficient of Thermal Expansion (keys: ALPX, ALPY, ALPZ), Volumic Mass (key: DENS), second Lame's coefficient (key: MU), Damping coefficient (key: DAMP), thermal Conductivity (keys: KXX, KYY, KZZ), Resistivity (keys: RSVX, RSVY, RSVZ), Specific heat in constant volume (key: C), Film coefficient (key: HF), Viscosity (key: VISC), Emissivity (key: EMIS). 

## Inputs


- **Pin 0** properties_name (type: ['string', 'vector<string>']) (optional: False): 

- **Pin 1** materials (type: ['property_field']) (optional: False): Property field that contains a material id per element.

- **Pin 3** streams_container (type: ['streams_container']) (optional: False): 

- **Pin 4** data_sources (type: ['data_sources']) (optional: False): 


## Outputs


- **Pin 0** properties_value (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: mapdl
- **scripting name**: mapdl_material_properties
- **full name**: result.mapdl_material_properties
- **internal name**: mapdl_material_properties
- **license**: None