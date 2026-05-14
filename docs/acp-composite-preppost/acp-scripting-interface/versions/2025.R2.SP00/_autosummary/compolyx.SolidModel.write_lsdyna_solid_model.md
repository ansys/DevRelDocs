# write_lsdyna_solid_model

<a id="compolyx.SolidModel.write_lsdyna_solid_model"></a>

#### SolidModel.write_lsdyna_solid_model(path, part_number=1, mat_type='mat_enhanced_composite_damage')

Export solid model as FE model for LS Dyna

* **Parameters:**
  - path: Out file path (file extension must be .k)
  - part_number: Ls Dyna part number (default is 1)
  - mat_type: LS Dyna material card type (default is ‘MAT_ENHANCED_COMPOSITE_DAMAGE’)

Supported mat_types:
: - ‘MAT_ENHANCED_COMPOSITE_DAMAGE’
  - ‘MAT_COMPOSITE_DAMAGE’
  - ‘MAT_COMPOSITE_FAILURE_SOLID_MODEL’
  - ‘MAT_COMPOSITE_DMG_MSC’
  - ‘MAT_USER_DEFINED_MATERIAL_MODELS’
