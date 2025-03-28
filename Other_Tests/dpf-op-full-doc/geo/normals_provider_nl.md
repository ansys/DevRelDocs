# geo:normals provider nl (nodes, faces, or elements)

## Description

Computes the normals on nodes/faces/elements based on integration points (more accurate for non-linear elements) on a skin mesh.

## Inputs


- **Pin 0** mesh (type: ['abstract_meshed_region']) (optional: False): Skin, face, or shell mesh region.

- **Pin 1** mesh_scoping (type: ['scoping']) (optional: True): Elemental, ElementalNodal, or Nodal scoping. Location derived from this.

- **Pin 9** requested_location (type: ['string']) (optional: True): If no scoping, specifies location. If scoping is Elemental or ElementalNodal this overrides scoping. Default is Elemental.


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: geo
- **plugin**: core
- **scripting name**: normals_provider_nl
- **full name**: geo.normals_provider_nl
- **internal name**: normals_provider_nl
- **license**: any_dpf_supported_increments