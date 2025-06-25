# export_ply_geometries

<a id="compolyx.ModelingGroup.export_ply_geometries"></a>

#### ModelingGroup.export_ply_geometries(filename, ply_level='production_ply', boundary=True, surface=True, offset_type='middle_offset', direction_arrows=False, first_direction=True, second_direction=False, arrow_length=1.0, arrow_type='no_arrow')

Exports the surface, boundary, and/or fiber directions of modeling, production, and analysis ply to .igs or .step file.

* **Parameters:**
  - filename: File path (valid extensions are .iges, .igs, .step, and .stp).
  - ply_level: Defines which plies are exported: modeling_ply_wise, production_ply_wise or analysis_ply_wise. Default is production_ply_wise.
  - boundary: Boolean whether to export the boundary (default: ‘True’).
  - surface: Boolean whether to export the ply surface (default: ‘True’).
  - offset_type: Offset type. Valid options: no_offset, middle_offset (default), top_offset, and bottom_offset.
  - direction_arrows: Boolean whether to export the direction arrows. Default is False.
  - first_direction: Boolean whether to export the first (main) material direction (default: ‘True’).
  - second_direction: Boolean whether to export the second material direction (default: ‘False’).
  - arrow_length: Length of the arrows (default: ‘1’).
  - arrow_type: Defines the arrow type. Valid options: standard_arrow, no_arrow (default), and half_arrow).
