# import_composite_cae_h5

<a id="compolyx.Model.import_composite_cae_h5"></a>

## Model.import_composite_cae_h5(path, mode='append', projection='shell', tol_thickness=None, tol_in_plane=None, tol_angle=None, small_hole_threshold=None, tol_min_angle=None, recompute_ref_directions=False, element_sets=None, offset='bottom_offset', coord_transform_inputs=None)

Import a composite layup definition from a .hdf5 file.

### Parameters
  - path: Load path of the .h5 file.
  - mode: Specify how objects are imported.
    - append: Imported data/objects are appended to existing model/layup.
    - overwrite: Replace objects with equal ids in the model with imported instances if possible (not locked).
  - projection: Defines whether the imported data is treated as shell or solid data.
    - shell: Default. The imported components are mapped onto the reference surface and converted into modeling plies.
    - solid: The components are imported one-to-one and exposed as imported plies. Can be used in combination with ImportedSolidModel (layup mapping).
  - tol_thickness: Mapping tolerance in element thickness direction relative to min element edge length.
  - tol_in_plane: Mapping tolerance in element in-plane direction relative to min element edge length.
  - tol_angle: Mapping tolerance for the angles between element normals.
  - small_hole_threshold: Holes in plies/element sets with an area smaller than this threshold times the area of the element set/ply are filled.
  - tol_min_angle: Minimum angle tolerance for which tabular correction angles for plies are computed.
  - recompute_ref_directions’: Whether reference directions should be recomputed from tabular angle data.
  - element_sets: A list of element sets.
  - offset: Offset for imported plies. Defines if the imported mesh is interpreted as bottom, middle, or top ply surface. Valid options: ‘bottom_offset’, ‘middle_offset’, and ‘top_offset’.
  - coord_transform_inputs: Coordinate transformation for the imported data. Dict with the following properties:
    - “translation_x”, “translation_y”, “translation_z”,
    - “rotation_angle_deg_x”, “rotation_angle_deg_y”, “rotation_angle_deg_z”

    The data is transformed in the following order: Rotation X, Rotation Y, Rotation Z, Translation.
