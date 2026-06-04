# export_ply_geometries

<a id="compolyx.Model.export_ply_geometries"></a>

## Model.export_ply_geometries(filename, plies=[], boundary=True, surface=True, offset_type='middle_offset', direction_arrows=False, first_direction=True, second_direction=False, arrow_length=1.0, arrow_type='no_arrow')

Exports the surface, boundary, and/or fiber directions of modeling, production, and analysis ply to .igs or .step file.

### Parameters
  - filename: File path (available extensions are iges, igs, step, stp, and stl).
  - plies: List of plies (available options are modeling, production, and analysis plies).
  - boundary: Boolean whether to export the boundary. Default is ‘True’.
  - surface: Boolean whether to export the ply surface. Default is ‘True’.
  - offset_type: Offset type. Valid types: ‘no_offset’, ‘middle_offset’ (default), ‘top_offset’, and ‘bottom_offset’.
  - direction_arrows: Boolean whether to export the direction arrows. Default is ‘False’.
  - first_direction: Boolean whether to export the first (main) material direction. Default is ‘True’.
  - second_direction: Boolean whether to export the second material direction. Default is ‘False’.
  - arrow_length: Length of the arrows. Default is ‘1’.
  - arrow_type: Defines the arrow type. Valid types: ‘standard_arrow’, ‘no_arrow’ (default), and ‘half_arrow’.

Note: Directions and boundaries are not supported by the STL format.
