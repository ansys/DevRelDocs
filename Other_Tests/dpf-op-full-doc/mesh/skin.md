# mesh:skin

## Description

Extracts a skin of the mesh in a new meshed region. The material ID of initial elements are propagated to their facets.

## Inputs


- **Pin 0** mesh (type: ['abstract_meshed_region']) (optional: False): 

- **Pin 1** mesh_scoping (type: ['scoping']) (optional: True): Nodal scoping to restrict the skin extraction to a set of nodes. If provided, a skin element is added to the skin mesh if all its nodes are in the scoping.

- **Pin 2** duplicate_shell (type: ['bool']) (optional: True): If input mesh contains shell elements, output mesh shell elements (boolean = 1) are duplicated, one per each orientation, or (boolean = 0) remain unchanged.


## Outputs


- **Pin 0** mesh (type: ['abstract_meshed_region']): Skin meshed region with facets and facets_to_ele property fields.

- **Pin 1** nodes_mesh_scoping (type: ['scoping']): 

- **Pin 2** map_new_elements_to_old (type: ['umap<int32,int32>']): 

- **Pin 3** property_field_new_elements_to_old (type: ['property_field']): This property field provides, for each new face element ID (in the scoping), the corresponding 3D volume element index (in the data) it has been extracted from. The 3D volume element ID can be found with the element scoping of the input mesh.

- **Pin 4** facet_indices (type: ['property_field']): This property field gives, for each new face element ID (in the scoping), the corresponding face index on the source 3D volume element. The 3D volume element can be extracted from the previous output.


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: mesh
- **plugin**: core
- **scripting name**: skin
- **full name**: mesh.skin
- **internal name**: meshed_skin_sector
- **license**: None