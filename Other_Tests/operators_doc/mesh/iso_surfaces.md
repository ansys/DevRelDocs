# mesh:iso surfaces

## Description

Extract multiple iso-contours from mesh_cut operator and set it into a meshes container. If pin 1 is provided, "num_surfaces" iso-contours will be computed, ranging from "min_value" to "max_value" linearly. If pin 4 is provided, the iso-values are the one set by the user. The iso-values are stored into a FieldsContainer.

## Inputs


- **Pin 0** field (type: ['field']) (optional: False): Field containing the values for the iso-surface computation. The mesh can be retrieved from this field's support or through pin 2.

- **Pin 1** num_surfaces (type: ['int32']) (optional: True): If provided, iso_values are linearly computed between the min and the max of the field of results. If not, iso_values must be provided by the user through pin 4

- **Pin 2** mesh (type: ['meshed_region']) (optional: True): Mesh to compute the iso-surface from. Used when not given through the support of the field in pin 0.

- **Pin 3** slice_surfaces (type: ['bool']) (optional: False): True: slicing will also take into account shell and skin elements. False: slicing will ignore shell and skin elements. The default is true.

- **Pin 4** vector_iso_values (type: ['vector<double>']) (optional: True): If provided, user defined iso_values to compute. If not provided, iso_values are linearly compute between the min and the max of the field of results.


## Outputs


- **Pin 0** meshes (type: ['meshes_container']): 

- **Pin 1** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: mesh
- **plugin**: core
- **scripting name**: iso_surfaces
- **full name**: mesh.iso_surfaces
- **internal name**: iso_surfaces
- **license**: None