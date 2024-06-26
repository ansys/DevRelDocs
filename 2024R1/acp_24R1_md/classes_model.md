# Model classes

## [`Model`](#compolyx.Model)

### *class* compolyx.Model(name=None, path=None, format=None, ignored_entities=None, graph=None, parent=None, convert_section_data=False, unit_system_type=None, reference_surface_input_unit_system_type=None, cache_data=False)

Class to represent a finite element model.

Access:

```pycon
>>> import compolyx
>>> db = compolyx.DB()
>>> model = db.import_model(name='class40.1', path='class40.cdb', format='ansys:cdb')
```

Get existing model:

```pycon
>>> class40_model = db.models['class40.1']
```

#### *property* active_scene

Active Scene.

#### add_solution(name, id='', path=None, path2=None, format='ansys:rst', subcase=(False, 0), set=-1, load_factor=(False, 0.0), read_stresses_strains=True, use_felyx_to_compute_pp_results=True, use_solid_results=True, recompute_iss_of_solids=False, renumbering_mapping_paths=[], ext_id='', active=True)

Load a nodal solution from file(s) and add it to the model.

* **Parameters:**
  - name: Custom name of the solution.
  - path: Path to the data file.
  - path2: Optional path to second result file. Useful for ANSYS PRNSOL solution, where nodal deformations and nodal rotations can be exported to different files only.
  - format: File format string. Choose one of ‘abaqus:fieldreport’, ‘ansys:prnsol’,’ansys:rst’, or ‘nastran:f06’.
  - subcase: Optional subcase to read. Only valid for ‘nastran:f06’ format. (False,0) if not given in the F06 file.
  - load_factor: Optional load factor within substep of non-linear solution where the nodal solution should be taken from. Only valid for ‘nastran:f06’ format. (False,0) if not given in the F06 file.
  - set: Result set for ANSYS RST files, None is last result set.
  - read_stresses_strains: Reads strain and stress results from the RST file (necessary to post-process non-linear solutions).
  - ‘use_felyx_to_compute_pp_results’: Use ACP to compute strain and stress data.
  - use_solid_results: Maps solid element solution onto ‘Layered Solid Reference Surface’.
  - recompute_iss_of_solids: For solids the interlaminar shear stresses are recalculated considering the laminate stacking.
  - renumbering_mapping_paths: List of paths of the assembly renumbering files used to map the results of composite assemblies.
  - active: Active/inactive flag.
* **Returns:**
  The new Solution instance just added to the model.

#### add_winding_entities(axial_direction, origin, reference_radius, layers, max_angle_with_thickness_correction=90.0, number_of_digits_angle=3)

Generates a winding layup for an axisymmetric body.

The function uses the origin (a point on the axis of symmtery),
the axial_direction and the reference radius.
to automatically generate a winding layup for an axisymmetric body.
The radius is defined as the minimal distance from any point on the surface
to the axis of symmetry. The reference radius is equal to the radius, where
the layers have the nominal thickness and angle. For a typical winding body this is
the radius in the cylindrical region.

The thickness correction of each layer is calculated with
thickness_correction = reference_radius / radius.

The angle is calculated based on a geodesic path for which radius\*sin(angle) is constant:
angle = arcsin( const / radius) if const / radius in [-1,1].
angle = sign(angle) \* 90° otherwise.

with const = reference_radius \* sin(nominal_angle).

Each layer is a dict with the following properties:
: * fabric: Fabric of the layer (Stackups and Sublaminates are not supported).
  * angle: Nominal angle at Reference Radius with respect to the axis of symmetry (in degree).
  * selection_rule_limits: A dictionary with the entries “upper” and “lower”
    that define the extent of the plies in axial direction.
    The “upper” and “lower” values are interpreted as distance from the origin along
    the axial_direction.
  * add_mirrored_ply: If True, an addtional layer with the same properties but
    a negative angle is generated. This implies that the resulting thickness is
    twice the original thickness of the layer.

Note:   The reference directions computed by this function are not defined along the
  axis of symmetry, but along the circumferential direction using a cylindrical Rosette.
  This allows to handle edge cases such as elements normal to the symmetry plane with
  a single Rosette. As a result the “Ply Angle” of the generated plies is rotated by 90° with
  respect to the specified nominal angle in the layers list. The resulting fiber
  direction still matches the specified nominal angle: a nominal angle of 0° means that
  the fiber direction is along the Axial Direction.

The functions generates the following objects:
  - A cylindrical Rosette which defines a reference direction along the circumferential
    direction of the axisymmetric body.
  - An Oriented Selection Set.
  - A Lookup Table with the thickness corrections and angles.
  - A template Selection Rule if limits are defined.
  - A Modeling Group with the Plies.

* **Parameters:**
  - axial_direction: Direction vector for the axis of symmetry.
  - origin: Point on the axis of symmetry.
  - reference radius: Reference radius at which the plies are assumed to have the
     nominal angle and the nominal thickness.
  - layers: List of dicts with the following entries:
      - fabric: Fabric of the layer (Stackups and Sublaminates are not supported).
      - angle: Nominal angle at Reference Radius with respect to the axis of symmetry (in degree).
      - selection_rule_limits: A dictionary with the entries “upper” and “lower”
        that define the extent of the plies in axial direction.
        The “upper” and “lower” values are interpreted as distance from the origin along
        the axial_direction.
      - add_mirrored_ply: If True an addtional layer with the same properties but
        a negative angle is generated. This implies that the resulting thickness is
        twice the original thickness of the layer.
  - number_of_digits_angle, optional, default: 3: Lookup tables for the angles are
: shared between different layers with similar angles.
      Angles which are equal until number_of_digits_angle after the
      decimal point share the same lookup table.
  - max_angle_with_thickness_correction: The thickness for layers where abs(angle) >
: max_angle_with_thickness_correction is not
      corrected. These layers always have the nominal
      layer thickness.
* **Usage:**
  ```pycon
  >>> model.add_winding_entities(
                    axial_direction=(1.0, 0.0, 0.0),
                    origin=(0.0, 0.0, 0.0),
                    reference_radius=0.1,
                    layers=[{
                        "fabric": db.models['ACP Model'].material_data.fabrics['Fabric.1'],
                        "angle": 30.0,
                        "selection_rule_limits": {
                            "upper": 1,
                            "lower": 0.0
                            },
                        "add_mirrored_ply": True
                    }]
                )
  ```
* **Returns:**
  Dict of generated objects.

#### *property* analysis_model_path

Analysis model file path.

#### *property* angle_tolerance

Section computation angle tolerance (in degree).

#### average_element_size()

Average element size of the model.

#### *property* cache_update_results

Define whether to store the update results or not.

#### copy_combined_failure_criteria(source)

Copy a Combined Failure Criteria Definition.

* **Parameters:**
  - source: Source object to copy.
* **Returns:**
  New instance of Combined Failure Criteria Definition.

#### copy_edge_set(source)

Copy a edge set.
Parameters:
- source: Source object to copy.

* **Returns:**
  New instance of edge set.

#### copy_element_set(source)

Copy a element set

* **Parameters:**
  - source: Source object to copy.
* **Returns:**
  New instance of element set.

#### copy_field_definition(source)

Copy a FieldDefinition.

* **Parameters:**
  - source: Source object to copy.
* **Returns:**
  New instance of FieldDefinition.

#### copy_lookup_table(source)

Copy a Look-up Table

* **Parameters:**
  - source: Source object to copy.
* **Returns:**
  New instance of a Look-Up Table.

#### copy_oriented_selection_set(source)

Copy an oriented element set.

* **Parameters:**
  - source: Source object to copy.
* **Returns:**
  New instance of oriented element set.

#### copy_rosette(source)

Copy a Rosette.

* **Parameters:**
  - source: Source object to copy.
* **Returns:**
  New instance of Rosette.

#### copy_sampling_point(source)

Copy a sampling point.

* **Parameters:**
  - source: Source object to copy.
* **Returns:**
  New instance of a sampling point.

#### copy_section_cut(source)

Copy a section cut

* **Parameters:**
  - source: Source object to copy.
* **Returns:**
  New instance of a section cut.

#### copy_selection_rule(source)

Copy a rule

* **Parameters:**
  - source: Source object to copy.
* **Returns:**
  New instance of rule.

#### copy_sensor(source)

Copy a sensor

* **Parameters:**
  - source: Source object to copy.
* **Returns:**
  New instance of a sensor.

#### copy_solid_model(source)

Copy a solid model.

* **Parameters:**
  - source: Source object to copy.
* **Returns:**
  New instance of a solid model.

#### create_boolean_selection_rule(name, id=None, include_rule_type=True, selection_rules=[])

Create new Boolean Selection Rule.

* **Parameters:**
  - name: Name of the Rule.
  - id: ID of the Rule.
  - include_rule_type: Whether the rule is of type include or exlude.
  - selection_rules: List of tuples of attached rules and operation type.
* **Returns:**
  The created Boolean Selection Rule.

#### create_combined_failure_criteria(name, set=[], id=None)

Create Combined Failure Criteria.

* **Parameters:**
  - name: Name for the Combined Failure Criteria.
  - set: Set of Failure Criteria to be assigned.
  - id: Id to be assigned (optional).
* **Returns:**
  - Created Combined Failure Criteria.

#### create_cutoff_selection_rule(name, id=None, cutoff_rule_type='geometry', offset=0.0, angle=0.0, origin=(0.0, 0.0, 0.0), direction=(1.0, 0.0, 0.0), distance_type='along_direction', ply_cutoff_type='production_ply_cutoff', ply_tapering=False, cutoff_geometry=None, edge_set=None, offset_method='laminate_stack', offset_type='out_of_plane')

Create new Cut-Off Rule.

* **Parameters:**
  - name: Name of the rule.
  - cutoff_rule_type: geometry, taper, or variable_taper.
  - offset: Offset of the rule (float for cutoff_rule_type=``geometry`` or taper, LookUpTableColumn for cutoff_rule_type=``variable_taper``).
  - angle: Angle of the rule (ignored for cutoff_rule_type=``geometry``, float for taper, LookUpTableColumn for variable_taper).
  - origin: Origin of the offset and angle interpolation for ``variable_taper``.
  - direction: Direction of the offset and angle interpolation for ``variable_taper``.
  - distance_type: along_direction or along_edge (only relevant for ``variable_taper``).
  - ply_cutoff_type: Determines on which ply level the cutoff is done.
  - ply_tapering: Use ply tapering.
  - cutoff_geometry: CADGeometry for the rule (only relevant for cutoff_rule_type=``geometry``).
  - edge_set: Edge Set for cutoff_rule_type=``taper`` or ``variable_taper``.
  - offset_method: Method to compute offset of plies laminate_stack or attached_plies.
  - offset_type: Measure offset from edge set normal to element reference surface (out_of_plane) or in element reference surface (in_plane).
* **Returns:**
  The created rule.

#### create_cylindrical_selection_rule(name, id=None, origin=None, direction=None, radius=None, relative_rule_type=False, include_rule_type=True, rosette=None, use_global_coordinate_system=None)

Create new Cylindrical Selection Rule.

* **Parameters:**
  - name: Name of the rule.
  - origin: Origin of the Cylindircal Rule.
  - direction: Direction of the Cylindircal Rule.
  - radius: Radius of the Cylindircal Rule.
  - relative_rule_type: If True parameters are evaluated relative to size of the object.
  - include_rule_type: Include or Exclude area in rule.
  - use_global_coordinate_system: Use global coordinate system to define rule parameters.
  - rosette: Rosette used if use_global_coordinate_system is False.
* **Returns:**
  The created Cylindircal Rule.

#### create_edge_set(name, id=None, origin=(0.0, 0.0, 0.0), limit_angle=-1.0, edge_set_type='By Reference', element_set=None, node_labels=[], show=False)

Create new Edge Set.

* **Parameters:**
  - name: Name of the Edge Set.
  - edge_set_type: ‘By Nodes’, ‘By Reference’, ‘Imported’ (only for imported Edge Sets).
  - origin: Origin.
  - limit_angle:The Edge Set is cropped if the angle between two element edges exceeds this limit. Use -1 to disable it. 
  - element_set: element set.
  - node_labels: list of nodes defining the edge set (only if edge_set_type=’By Nodes’).
* **Returns:**
  The created Edge Set.

#### create_element_set(name, id=None, element_labels=None, element_sets=None, x=None, y=None, z=None, op='new', middle_offset=False, show=False)

Create new element set.

* **Parameters:**
  - name: Name of the Element Set.
  - element_labels: Indices of elements to be assigned to Element Set.
  - element_sets: Select elements of these sets.
  - x: X-range to select.
  - y: Y-range to select.
  - z: Z-range to select.
  - op: Select operation. Can be all, new (default), add, remove, intersect, inverse or none.
  - middle_offset: Boolean to enforce that the laminate mid-plane is moved onto the reference surface.
* **Returns:**
  The created Element Set.

If element set already exists, it is updated depending on the operation given in op.

#### create_envelope_solution(name, id=None, solution_sets=[])

Create Envelope Solution.

* **Parameters:**
  - name: Name for the Envelope Solution.
  - solution_sets: list of Solution Sets that are combined.
* **Returns:**
  The new envelope solution object.

#### create_field_definition(name, id=None, field_variable_name=None, scope_entities=None, scalar_field=None, full_mapping=False, active=True, locked=False)

Create a new Field Definition.

* **Parameters:**
  - name: The name of the oriented element set.
  - id: The ID of the oriented element set.
  - field_variable: String identifier of the field.
  - scope_entities: A list of scope entities defining the region of definition.
  - scalar_field: Tabular scalar column defining the field.
  - full_mapping: Bool. Whether offsets are to be included during the interpolation process.
* **Returns:**
  The created Field Definition.

#### create_geometrical_selection_rule(name, geometrical_rule_type='geometry', id=None, use_defaults=True, in_plane_capture_tolerance=0.0, neg_capture_tolerance=0.0, pos_capture_tolerance=0.0, include_rule_type=True, geometry=None, use_projection_normal=False, projection_normal=(0.0, 0.0, 0.0), element_sets=None)

Create new Geometrical Selection Rule.

* **Parameters:**
  - name: Name of the Rule.
  - geometrical_rule_type: Define whether the rule extent is defined by a geometry of element sets. The value can be ‘geometry’ or ‘element_sets’. Default is ‘geometry.
  - use_defaults: Whether to use the offset value of the CAD geometry.
  - in_plane_capture_tolerance: In-plane extend (extend) if CAD geometry is a surface.
  - neg_capture_tolerance: Offset in the negative direction if CAD geometry is a surface.
  - pos_capture_tolerance: Offset in the positive direction if CAD geometry is a surface.
  - include_rule_type: Whether the selection is inside or outside the CAD geometry.
  - geometry: CAD geometry used to determine the selection (only relevant for geometrical_rule_type=``geometry``)
  - use_projection_normal: Boolean wheter to use the projection normal or not.
  - projection_normal: Normal direction used to map elements on outlines / curves.
  - element_sets: Preselection of elements in the form of an element set where the rule is applied on (only relevant for geometrical_rule_type=``element_sets``).
* **Returns:**
  The created rule.

#### create_imported_solid_model(name, id='', active=True, external_file_path=None, unit_system='undefined', format='ansys:cdb', ext_id='', use_default_element_index=True, element_index=0, use_default_node_index=True, node_index=0, use_default_section_index=True, section_index=0, use_default_material_index=True, material_index=0, use_default_coordinate_system_index=True, coordinate_system_index=0, use_solsh_elements=False, drop_hanging_nodes=True, use_solid_model_prefix=True, write_degenerated_elements=True, delete_bad_elements=True, warping_limit=0.4, minimum_volume=0.0, global_cut_off_material=None, transfer_all_sets=True, transferred_element_sets=[], transferred_edge_sets=[], locked=False, from_pre=False)

Create a new Solid Model.

* **Parameters:**
  - name: The name of the Solid Model.
  - id: The ID of the Solid Model.
  - active: Active status of the solid model.
  - external_file_path: File path to the external source.
  - unit_system: Unit system of the imported mesh.
  - format: File format of the external source.
  - use_default_element_index: Consecutive element numbering if set to true.
  - element_index: Start index for first element (only relevant if use_default_element_index).
  - use_default_node_index: Consecutive node numbering if set to true.
  - node_index: Start index for first node (only relevant if use_default_node_index).
  - use_default_section_index: Consecutive section numbering if set to true.
  - section_index: Start index for first element (only relevant if use_default_section_index).
  - use_default_material_index: Consecutive material numbering if set to true.
  - material_index: Start index for first element (only relevant if use_default_material_index).
  - use_default_coordinate_system_index: Consecutive coordinate system numbering if set to true.
  - coordinate_system_index: Start index for first coordinate system (only relevant if use_default_coordinate_system_index).
  - use_solsh_elements: The solid model is created out of solsh elements.
  - drop_hanging_nodes: Whether to skip mid-side nodes that are not shared by adjacent elements. Only relevant when the object has applies cut-off geometries and a quadratic mesh.
  - use_solid_model_prefix: The name of the solid model is used as a prefix for all components written to the \*cdb file.
  - write_degenerated_elements: If false, degenerated (homogeneous) elements are not exported.
  - delete_bad_elements: Boolean whether to delete the erroneous elements or not.
  - warping_limit: Warping limit factor used to detect erroneous elements.
  - minimum_volume: Minimum volume of solid elements. Default is 0. Elements equal or smaller than this limit are removed from the solid model.
  - global_cut_off_material: Defines the global cut-off material.
  - transfer_all_sets: Defines whether all edge and element sets should be transferred to the solid model.
  - transferred_element_sets: Element sets to transfer to the solid model if transfer_all_sets is set to false.
  - transferred_edge_sets: Edge sets to transfer to the solid model if transfer_all_sets is set to false.
* **Returns:**
  The created Imported Solid Model.

#### create_lookup_table1d(name, id='', tabular_data=None, origin=None, direction=None, dimensions=[])

Create a new 1D Look-Up Table object.

* **Parameters:**
  - name: Name.
  - id: ID.
* **Returns:**
  The created Look-Up Table object.

#### create_lookup_table3d(name, id='', tabular_data=None, algorithm_type='weighted_nearest_neighbor', use_default_search_radius=True, search_radius=0.0, num_min_neighbors=1, dimensions=[])

Create a new 3D Look-Up Table object.

* **Parameters:**
  - name: Name.
  - id: ID.
  - tabular_data: Data points and values of the look-up table.
  - algorithm_type: Specify which algorithm type is used for the interpolation.
  - use_default_search_radius: Force the program to use the default search radius. Used for the algorithm weighted_nearest_neighbor”.
  - search_radius: Set a custom search radius. Used if use_default_search_radius is false. Used for the algorithm weighted_nearest_neighbor.
  - dimensions: List of the dimensions of the columns (e.g. length for coordinates).
* **Returns:**
  The created Look-Up Table object.

#### create_oriented_selection_set(name, id=None, orientation_point=(0.0, 0.0, 0.0), orientation_direction=(0.0, 0.0, 0.0), element_sets=None, geometries=None, rosettes=None, rosette_selection_method='minimum_angle', selection_rules=None, draping=False, draping_seed_point=(0.0, 0.0, 0.0), auto_draping_direction=True, draping_direction=(0.0, 0.0, 1.0), draping_mesh_size=0.0, use_default_draping_mesh_size=True, draping_material_model='woven', draping_ud_coefficient=0.0, reference_direction_field=None)

Create a new Oriented Selection Set.

* **Parameters:**
  - name: The name of the oriented element set.
  - id: The ID of the oriented element set.
  - orientation_point: Orientation Point for the Oriented Selection Set.
  - orientation_direction: Orientation Direction for the Oriented Selection Set.
  - element_sets: Element Sets.
  - geometries: Virtual geometries.
  - rosettes: Rosettes for the Oriented Selection Set.
  - rosette_selection_method: Method to calculate element orientation (‘minimum_angle’, ‘maximum_angle’, ‘minimum_distance’,
      ‘minimum_angle_superposed’, ‘minimum_distance_superposed’,
      ‘maximum_angle_superposed’, ‘ansys_classic’, or
      ‘tabular_values’).
  - reference_direction_field: Table column used to compute reference directions.
  - draping: Draping enabled.
  - draping_seed_point: Seed Point used to start draping.
  - draping_direction: Direction for draping.
  - auto_draping_direction: Generate direction for draping.
  - draping_mesh_size: Mesh size for draping.
  - use_default_draping_mesh_size: Enable this property to use the default size for the draping mesh. The default is the average element size of the shell mesh.
  - draping_material_model: Material model for draping, either ‘woven’ or ‘unidirectional’
  - draping_ud_coefficient: Coefficient for the unidirectional draping material model.
* **Returns:**
  The created Oriented Selection Set.

#### create_parallel_selection_rule(name, id=None, origin=None, direction=None, pos_distance=None, neg_distance=None, relative_rule_type=False, use_global_coordinate_system=None, rosette=None, include_rule_type=True)

Create new Parallel Selection Rule.

* **Parameters:**
  - name: Name of the Rule.
  - origin: Origin of the Parallel Selection Rule.
  - direction: Direction of the Parallel Selection Rule.
  - pos_distance: Positive Disance of the Parallel Selection Rule.
  - neg_distance: Negative Distance of the Parallel Selection Rule.
  - relative_rule_type: If True parameters are evaluated relative to size of the object.
  - use_global_coordinate_system: Use global coordinate system to define rule parameters.
  - rosette: Rosette used if use_global_coordinate_system is False.
  - include_rule_type: Include or Exclude area in rule.
* **Returns:**
  The created Parallel Selection Rule.

#### create_published_parameter(name, source_object=None, source_property='', user_script='', category='input', acp_type=None, description='', lower_limit=None, upper_limit=None, cyclic=False, float_list=[], string_list=[], unbound_value=None)

Create a published parameter.

* **Parameters:**
  - name: Name of the parameter.
  - source_object: Name of the object the parameter is linked to.
  - source_property: Property of the linked object the parameter controls.
  - user_script: Script to be executed for determining the parameter value. Only used when category==”expression_output”.
  - category: Controls the behavior of the parameter. Can be one of input, unbound_input, output, expression_output.
  - acp_type: Type of the parameter, as used within ACP.
  - description: String description of the parameter.
  - lower_limit: The lower limit for numeric values.
  - upper_limit: The upper limit for numeric values.
  - cyclic: Whether a float value is cyclic or not.
  - float_list: A list of possible values for a float.
  - string_list: A list of possible values. List of objects if the property type is object, else list of strings.
  - unbound_value: The value of the parameter, if category==”unbound_input”. In this case, the parameter is not linked to an existing object.
* **Returns:**
  The created PublishedParameter.

#### create_rosette(name, id=None, origin=(0.0, 0.0, 0.0), dir1=(1.0, 0.0, 0.0), dir2=(0.0, 1.0, 0.0), rosette_type='PARALLEL', edge_set=None, show=False)

Create a new rosette.

* **Parameters:**
  - name: The name of the Rosette.
  - id: ID (optional).
  - origin: The origin of the Rosette.
  - dir1: Direction 1 of the Rosette.
  - dir2: Direction 2 of the Rosette.
  - rosette_type: Type of the Rosette ( ‘PARALLEL’, ‘RADIAL’, ‘CYLINDRICAL’, ‘SPHERICAL’, ‘EDGE_WISE’ ).
  - edge_set: Edge Set to be used in Rosette.
  - show: Whether the newly created rosette is shown in the scene / the 3D window or not.
* **Returns:**
  The created Rosette.
* **Example:**
  ```pycon
  >>> rosette_1 = model.create_rosette('Rosette.1',
                                       origin=(0.,0.,0.),
                                       dir1=(1.,0.,0.),
                                       dir2=(0.,1.,0.),
                                       rosette_type='PARALLEL')
  ```

#### create_sampling_point(name, id=None, point=(0.0, 0.0, 0.0), direction=(0.0, 0.0, 0.0), locked=False, use_default_reference_direction=True, rosette=None, offset_is_middle=True, consider_coupling_effect=True, solution_set=None)

Create new Sampling Point.

* **Parameters:**
  - name: Name of the Sampling Point.
  - point: Sampling point.
  - direction: Sampling direction.
  - use_default_reference_direction: whether to use the default reference direction for the evaluation.
  - rosette: Rosette used for the evaluation of the reference direction.
  - offset_is_middle: Specifies the offset of the reference plane used for the CLT analyses.
  - consider_coupling_effect: Specifies whether the laminate properties are evaluated considering the coupling effect (B matrix) or not.
  - solution_set: Specifies the solution and the set of the element-wise post-processing. Note, this must be given as a tuple.
* **Returns:**
  The created Sampling Point.

#### create_scene(name, id=None, title='', active_set=None, projection='perspective', scale_factor=1.0, show_draped_fiber_directions=False, show_draped_transverse_directions=False, show_edges=False, show_fiber_directions=False, show_global_coordinate_system=True, show_legend=True, show_normals=False, show_orientations=False, show_ref_directions=False, show_selected_mesh=False, show_section_cut_plots=False, show_element_type=ObjectSectionElementTypes.automatic, show_surface=True, show_minmax=False, show_transverse_directions=False, continuous_pick_enabled=False, show_material_1_directions=False, show_mesh_silhouette=False, show_silhouette=True)

Create a new scene.

* **Parameter:**
  - name: Name of the scene.
  - show_deformed_mesh: Whether to show the deformed mesh.
  - show_undeformed_mesh: Whether to show the undeformed mesh.
  - scale_factor: Scale factor of the deformed mesh.
* **Returns:**
  New scene.

#### create_script(name, source=None, active=True, uptodate=False, update_mode=ScriptUpdateMode.ON_TRIGGERS)

Creates a script object, which allows executing custom Python code.

* **Parameters:**
  - name: The name of the script.
  - source: The code to be executed, as a string.
  - active: If False, the script will not be executed.
  - uptodate: Whether the script currently needs to be executed.
  - update_mode: Defines which changes cause the script to become
      out-of-date. Can be either ‘manual’ (run only when manually
      triggered), ‘on_triggers’ (run when a parameter or the script
      itself changes) or ‘always’ (run with every update).
* **Returns:**
  The created Script object.

#### create_section_cut(name, id=None, origin=(0.0, 0.0, 0.0), normal=(0.0, 0.0, 1.0), in_plane_reference_direction1=(1.0, 0.0, 0.0), scale_factor=1.0, core_scale_factor=1.0, intersection_type='normal_to_surface', section_cut_type='modeling_ply_wise', extrusion_type='wire_frame', use_default_tolerance=True, tolerance=0.0, use_default_lut_settings=True, search_radius=0.0, number_of_interpolation_points=1, scope_entire_model=True, scope_element_sets=(), locked=False)

Creates a new section cut

* **Parameters:**
  - name: The name of the section cut.
  - id: The ID of the section cut.
  - origin: Origin of the section cut plane.
  - normal: Normal of the section cut plane.
  - in_plane_reference_direction1: Local x-direction of the sectin cut.
  - scale_factor: Scale factor for the thicknesses.
  - core_scale_factor: Scale factor for core materials.
  - intersection_type: Intersection type for the wireframe section cut.
  - section_cut_type: Ply resolution.
  - extrusion_type: Type of representation and extrusion.
  - use_default_tolerance: Whether to use the default tolerance or not. Default is 0.1% of the averaged element size.
  - tolerance: Tolerance used to generate the surface section cut.
  - use_default_lut_settings: Use default interpolation properties for the sweep based extrusion.
  - search_radius: Search radius of the interpolation algorithm.
  - number_of_interpolation_points: Number of points of the interpolation algorithm.
  - scope_entire_model: Whether to scope the section cut to the entire model, or only selected element sets.
  - scope_element_sets: Element sets to which the section cut is scoped, if scope_entire_model=False.

  * **Return:**
    The new section cut object.

#### create_sensor(name, id=None, sensor_type='SENSOR_BY_AREA', entities=None, locked=False)

Create new Sensor.

* **Parameters:**
  - name: Name of the Rule.
  - sensor_type: Type of Sensor values are: SENSOR_BY_AREA, SENSOR_BY_MATERIAL, SENSOR_BY_PLIES.
  - entities: Entities of the Sensor.
* **Returns:**
  The created Sensor.

#### create_solid_model(name, id='', active=True, element_sets=None, ex_type=None, drop_off_type=None, offset_type=None, max_thickness=None, ply_group_pointers=None, element_set=None, use_default_element_index=True, element_index=0, use_default_node_index=True, node_index=0, use_default_section_index=True, section_index=0, use_default_material_index=True, material_index=0, use_default_coordinate_system_index=True, coordinate_system_index=0, connect_butt_joined_plies=True, write_degenerated_elements=True, use_solsh_elements=False, use_solid_model_prefix=True, global_drop_off_material=None, global_cut_off_material=None, transfer_all_sets=True, transferred_element_sets=[], transferred_edge_sets=[], delete_bad_elements=True, disable_dropoffs_on_top=False, disable_dropoffs_on_bottom=False, disable_dropoff_sets_on_top='all', disable_dropoff_sets_on_bottom='all', warping_limit=0.4, minimum_volume=0.0, drop_hanging_nodes=True, locked=False)

Create a new Solid Model.

* **Parameters:**
  - name: The name of the Solid Model.
  - id: The ID of the Solid Model.
  - active: Active status fo the Solid Model.
  - element_sets: A list of Element Sets.
  - ex_type:
    Extrusion method. Possible values are:
    - monolithic (1 element through the thickness),
    - analysis_ply_wise (1 element per layer),
    - modeling_ply_wise (1 element for each modeling ply),
    - production_ply_wise (1 element for each production ply)
    - specify_thickness (1 element per layer, layers thicker than max_thickness are split to several solids of at most max_thickness)
    - user_defined (groups plies by global ply numbers to groups).
    - material_wise (groups subsequent plies with equal material).
  - drop_off_type: Inside ply (one element inside the ply boundary), outside ply (one element outside the ply boundary).
  - offset_type: Shell normal (offset to the shell normal), surface normal (update normal direction by normal of layered solids), distortion controlled (surface normal with local corrections).
  - max_thickness: Maximum thickness for one solid, splits the layer into more solids, if a single layer is thicker than this value (only for ex_type=\`specify thickness\`).
  - ply_group_pointers: Step used to make user-defined ply groups.
  - element_set: (deprecated, use element_sets instead) A single element set.
  - use_default_element_index: Consecutive element numbering if set to true.
  - element_index: Start index for first element (only relevant if use_default_element_index).
  - use_default_node_index: Consecutive node numbering if set to true.
  - node_index: Start index for first node (only relevant if use_default_node_index).
  - use_default_section_index: Consecutive section numbering if set to true.
  - section_index: Start index for first element (only relevant if use_default_section_index).
  - use_default_material_index: Consecutive material numbering if set to true.
  - material_index: Start index for first element (only relevant if use_default_material_index).
  - use_default_coordinate_system_index: Consecutive coordinate system numbering if set to true.
  - coordinate_system_index: Start index for first coordinate system (only relevant if use_default_coordinate_system_index).
  - connect_butt_joined_plies: Connect adjacent plies without intermediate drop-offs.
  - write_degenerated_elements: Degenerated drop-off and cut-off elements are written to the \*cdb file.
  - use_solsh_elements: The solid model is created out of solsh elements.
  - use_solid_model_prefix: The name of the solid model is used as a prefix for all components written to the \*cdb file.
  - global_drop_off_material: Defines the global drop-off material.
  - global_cut_off_material: Defines the global cut-off material.
  - transfer_all_sets: Defines whether all edge and element sets should be transferred to the solid model.
  - transferred_element_sets: Element sets to transfer to the solid model if transfer_all_sets is set to false.
  - transferred_edge_sets: Edge sets to transfer to the solid model if transfer_all_sets is set to false.
  - delete_bad_elements: Boolean whether to delete the erroneous elements or not.
  - disable_dropoffs_on_top: Boolean whether to disalbe the drop-off elements on the top surface of the laminate.
  - disable_dropoffs_on_bottom: Boolean whether to disalbe the drop-off elements on the bottom surface of the laminate.
  - disable_dropoff_sets_on_top: List of element or oriented selection sets defining the region where the drop-offs are disabled on the top skin of the laminate. Default is ‘all’.
  - disable_dropoff_sets_on_bottom: List of element or oriented selection sets defining the region where the drop-offs are disabled on the bottom skin of the laminate. Default is ‘all’.
  - warping_limit: Warping limit factor used to detect erroneous elements.
  - minimum_volume: Minimum volume of solid elements. Default is 0. Elements equal or smaller than this limit are removed from the solid model.
  - drop_hanging_nodes: Hanging nodes are dropped (not exported) if set to true. Hanging nodes are mid-side nodes that are not shared by adjacent elements.
* **Returns:**
  The created Solid Model.

#### create_spherical_selection_rule(name, id=None, origin=None, radius=None, relative_rule_type=False, include_rule_type=True, use_global_coordinate_system=None, rosette=None)

Create new Spherical Selection Rule.

* **Parameters:**
  - name: Name of the rule
  - origin: Origin of the Spherical Selection Rule.
  - radius: Radius of the Spherical Selection Rule.
  - relative_rule_type: Flag for relative rule.
  - include_rule_type: Include or Exclude area in rule.
  - use_global_coordinate_system: Use global coordinate system to define rule parameters.
  - rosette: Rosette used if use_global_coordinate_system is False.
* **Returns:**
  The created Spherical Selection Rule.

#### create_tube_selection_rule(name, id=None, outer_radius=1.0, inner_radius=0.0, include_rule_type=True, edge_set=None)

Create new Tube Selection Rule.

* **Parameters:**
  - name: Name of the rule.
  - radius: Radius of the rule.
  - include_rule_type: Include or Exclude area in rule.
  - edge_set: Edge Set for the rule.
* **Returns:**
  The created rule.

#### create_variable_offset_selection_rule(name, id=None, radius_origin=None, radius_direction=None, edge_set=None, offsets=None, angles=None, element_set=None, relative_rule_type=False, include_rule_type=True, use_offset_correction=False, distance_along_edge=False, inherit_from_lookup_table=True)

Create new Slab Offset Rule.

* **Parameters:**
  - name: Name of the Rule.
  - id: The unique ID of the rule.
  - radius_origin: Reference point of the 1D lookup table used for the offsets.
  - radius_direction: Normal of the cutting plane.
  - edge_set: Guide/axis of variable tube.
  - offsets: 1D lookup table including the radii of the variable tube.
  - angles: Optional taber edge angles.
  - element_set: Preselection of elements in the form of an element set where the rule is applied on.
  - include_rule_type: Boolean whether to select the element inside or outside the variable tube.
  - use_offset_correction: Boolean whether to evaluate the evaluat the radius/offset along the surface or not.
  - distance_along_edge: Boolean whether to evaluate the distance along the edge or direction of the rule. Default is false.
  - inherit_from_lookup_table: Boolean whether to inherit origin and direction from the attached lookup table. Default is false.
* **Returns:**
  The created rule.

#### *property* definitions

Definitions.

#### *property* deformation_scale_factor

Factor with which the deformed shape plot is scaled.

#### *property* draping_offset_correction

Define whether to consider lay-up thickness in draping analysis.

#### *property* edge_sets

Dictionary with all Edge Sets defined.

#### element_normal(globalID)

Returns the element normal (direction).

* **Parameters:**
  - globalID: Element label.

#### *property* element_sets

Dictionary with all Element Sets defined.

#### export(path)

Exports all ACP composite defintions.

* **Parameters:**
  - path: .acp file path.

#### export_composite_cae_h5(path, remove_midside_nodes=True, layup_representation_3d=False, offset_type='bottom_offset', element_sets=None, modeling_plies=None)

Export layup to Composite CAE HDF5 file.

* **parameters:**
   - path: Save path of the h5 file.
   - remove_midside_nodes: Whether midside nodes should be exported or not.
   - layup_representation_3d: Whether to compute the 3D lay-up representation of the model. See note.
   - offset_type: Specifies the ply surface to export. Can be bottom_offset, middle_offset or top_offset.
   - element_sets: A list of Element Sets and/or Oriented Selection Sets. Only plies defined over the selected elements will be exported. If empty list or None, all elements will be considered.
   - modeling_plies: A list of Modeling Plies and/or Modeling Groups. If empty list or None, all modeling plies will be exported.

Note about layup_representation_3d: the 3D lay-up representation contains the offset ply surfaces where
the bottom offset of each ply is exported. The computation can take a while depending on the model size
and it can fail if the model is too complex (shape and topology).
This can be resolved by exporting sub-parts (element sets).

#### export_h5_composite_definitions(path)

Save composite definitions to HDF5 file.
Function is mainly used to exchange composite definitions with ANSYS Workbench.

> * **parameters:**
>   - path Save path of the h5 file.

#### export_ply_geometries(filename, plies=[], boundary=True, surface=True, offset_type='middle_offset', direction_arrows=False, first_direction=True, second_direction=False, arrow_length=1.0, arrow_type='no_arrow')

Exports the surface, boundary and/or fiber directions of modeling, production and analysis ply to igs or step file.

* **Parameters:**
  - filename: File path (allowed extensions are iges, igs, step, stp and stl).
  - plies: List of plies (allowed are modeling, production and analysis plies).
  - boundary: Boolean whether to export the boundary. Default is True.
  - surface: Boolean whether to export the ply surface. Default is True.
  - offset_type: Offset type (can be ‘no_offset’, ‘middle_offset’, ‘top_offset’ or ‘bottom_offset’). Default is ‘middle_offset’
  - direction_arrows: Boolean whether to export the direction arrows. Default is False.
  - first_direction: Boolean whether to export the first (main) material direction. Default is True.
  - second_direction: Boolean whether to export the second material direction. Default is False.
  - arrow_length: Length of the arrows. Default is 1.
  - arrow_type: Defines the arrow type (can be ‘standard_arrow’, ‘no_arrow’, ‘half_arrow’). Default is ‘no_arrow’.

Note: Directions and boundaries are not supported by the STL format.

#### export_solid_models(directory=None, prefix='ACPSolidModel_', delete_existing=True, formats=['cdb', 'h5'])

Save solid models to files. Function is used within Workbench updates.

* **Parameters:**
  - directory: Directory to save the models.
  - prefix: Prefix of the model. Default ACPSolidModel_
  - delete_existing: Flag if existing models should be deleted. Default True.
  - formats: Available file formats are ‘cdb’ or h5. Default [‘cdb’, ‘h5’].

#### *property* field_definitions

Dictionary with all defined field definitions.

#### find_materials(\*\*properties)

Find materials with the given properties or property ranges.

* **Parameters:**
  - properties: Arbitrary material properties which must be matched. Note that a single property value can be given as string, number or min-max range.
* **Returns:**
  A list with materials which match the given properties. If nothing matches an empty list is returned.

Examples:

```pycon
>>> materials = model.find_materials(E1=100000.0, nu12=0.3)
>>> materials = model.find_materials( name='1')
>>> materials = model.find_materials(E1=[200000.0, 220000.0], nu12=0.3, G12=[4500.0,5500.0])
```

#### *property* format

File format string. Choose one of ‘ansys:h5’, ‘ansys:cdb’, ‘ansys:dat’ or ‘layup’.

#### *property* geometry

Geometry node.

#### get_element_by_point(point)

Returns the element label of the closest element with respect to the given point.

* **Parameters:**
  -point: Tuple of the global coordinates.

#### get_layup(path, format=None, objects=None, mode='update_entities')

Load layup from excel or csv file.

* **Parameters:**
  - mode: can be: update_properties_only: Definitions are updated with properties given update_entities: Definitions are update, additional plies are generated and deleted
      recreate: Existing layup is deleted generated from scratch.

#### get_layup_from_csv_file(path, objects=None, mode='update_entities', modeling_group=None)

Function that reads the layup data from a csv file and adds the data to the graph.

* **Parameters:**
  - objects: List of objects to be synced.
  - path: The path to the file.
  - mode: can be: update_properties_only: Definitions are updated with properties given.
  - update_entities: Definitions are update, additional plies are generated and deleted.
  - recreate: Existing layup is deleted generated from scratch.
  - modeling_group: Key of the mpg_collection dict = the ID of the mpg. Only plies of this modeling_group will be imported from the file if none is specified all mpgs are read.

#### get_layup_from_excel_file(path, objects=None, mode='update_entities')

Load layup from Excel File.

* **Parameters:**
  - path: Path to file to load.
  - objects: Objects to be loaded and overwritten.
  - mode: can be: update_properties_only: Definitions are updated with properties given.
  - update_entities: Definitions are update, additional plies are generated and deleted.
  - recreate: Existing layup is deleted generated from scratch.

#### import_composite_cae_h5(path, mode='append', projection='shell', tol_thickness=None, tol_in_plane=None, tol_angle=None, small_hole_threshold=None, tol_min_angle=None, recompute_ref_directions=False, element_sets=None, offset='bottom_offset', coord_transform_inputs=None)

Import a composite layup definition from a HDF5 file.

* **Parameters:**
  - path: Load path of the h5 file.
  - mode: Specify how objects are imported.
    - append: Imported data/objects are appended to existing model/layup.
    - overwrite: Replace objects with equal ids in the model with imported instances if possible (not locked).
  - projection: Defines whether the imported data is treated as shell or solid data.
    - shell: Default. The imported components are mapped onto the reference surface and converted into Modeling Plies.
    - solid: The components are imported one-to-one  exposed as Imported Plies. Can be used in combination with ImportedSolidModel (lay-up mapping).
  - tol_thickness: Mapping tolerance in element thickness direction relative to min element edge length.
  - tol_in_plane: Mapping tolerance in element in-plane direction relative to min element edge length.
  - tol_angle: Mapping tolerance for the angles between element normals.
  - small_hole_threshold: Holes in plies/element sets with an area smaller than this threshold times the area of the element set/ply are filled.
  - tol_min_angle: Minimum angle tolerance for which tabular correction angles for plies are computed.
  - recompute_ref_directions’: Whether reference directions should be recomputed from tabular angle data or not.
  - element_sets: A list of Element Sets.
  - offset: Offset for imported plies. Defines if imported mesh is interpreted as bottom, middle or top ply surface. Valid modes are ‘bottom_offset’, ‘middle_offset’, ‘top_offset’.
  - coord_transform_inputs: Coordinate transform for the imported data. Dict with the following properties:
    - “translation_x”, “translation_y”, “translation_z”,
    - “rotation_angle_deg_x”, “rotation_angle_deg_y”, “rotation_angle_deg_z”.

    The data transformed in the following order: Rotation X, Rotation Y, Rotation Z, Translation.

#### import_composite_definitions_from_acp_file(path=None, import_mode='keep_both')

This functions loads the ACP composite definitions from an external ACP system.
Within WB, this function loads all objects but the mesh, materials and plots
In stand-alone mode, all objects but the mesh and plots are imported.

* **Parameters:**
  - path: \*.acp file path.
  - import_mode: Defines how to solve conflicts of objects of equal name.
* **Global Resolution Actions:**
  - keep_both: Keep target and source. Default.
  - keep_existing: Imported entities are ignored.
  - overwrite: Overwrite target with source.

#### import_section_data_from_legacy_model(path, format='ansys:cdb', materials_mask_prefix='mat', materials_mask_suffix=' (setup, file1)')

Import and convert the lay-up of a legacy (MAPDL) shell model into ACP composite definitions.

The mapping is based on the element labels and therefore it is a requirement that
the element labels in the legacy and ACP model match. The import is only performed if the file and ACP Model units are consistent.

* **Parameters:**
  - path: file path. Supported file extensions are CDB, DAT and INP.
  - format: file format. Supported are ‘ansys:cdb’ and ‘ansys:dat’.
  - materials_mask_prefix: Defines the prefix that is added to the Matierla ID while importing materials via ExternalModel.
  - materials_mask_suffix: Defines the suffix that is added to the Matierla ID while importing materials via ExternalModel.
* **Materials mapping:**
  Only relevant when the import happens within WB.
  The materials mask pre- and suffix parameters allow to automatically map WB material and legacy material ids.
  For instance the pre- and suffix MAT and `` (Setup, File1)`` allows to map MAT1 (Setup, File1) with legacy material 1.
  The mapping is case independent.
  Pass empty mapping masks when no mapping is needed.
* **Example:**
  ```pycon
  >>> db.active_model.import_section_data_from_legacy_model(path=r'D:  mp\class40_analysis_model.cdb', format='ansys:cdb')
  ```

#### *property* layup_plots

Plots

#### *property* lookup_tables

Dictionary with all Look-Up Tables.

#### *property* material_data

Dictionary with all Material Data defined.

#### *property* mesh

Mesh of this model.

#### mesh_query(name, position, selection='all', entity=None, entities=None, simulate=False, component=None)

Query arbitrary data from the mesh of the model.

* **Parameters:**
  - name: Data type to query:
    - labels, indices.
    - etypes.
    - coordinates.
    - angles (needs component).
    - thickness (needs component).
    - normals.
    - orientations, ref_directions, fiber_directions, transverse_directions.
    - draped_fiber_directions, draped_transverse_directions.
    - ply_offsets (offset vector).
    - area, volume, mass, price.
    - cog (centre of gravity).
    - offset (offset in the thickness direction).
  - component: Defines the component. Needed for name=’angles’ or ‘thickness’.
    - angles: design_angle, shear, draped_fiber_angle, draped_transverse_angle. design_angle is the default.
    - thickness: thickness, relative_thickness_correction. thickness is the default.
  - position: Position where data is queried:
    - nodal.
    - centroid.
    - element_nodal.
  - selection: The selection set determines the selected nodes and elements.
    Can be given as string ‘sel0’ - ‘sel5’ or ‘all’,
    or can be given as ObjectSelection object such as
    - model.selection.
    - scene.active_set.
  - entity: Specialized queries require the specification of an additional associated entity,
    e.g. an oriented element set is needed to compute orientations.
    Entity can be given as NamedGraphObjects or vertex descriptor.
  - entities: If a list of entities is given, the query will also compute and return a list of results, with one array for each entity.
  - simulate: Whether the query is only simulated to test if it will return data.
    If this flag is set the mesh_query(…) function will only return 0 or 1.

#### *property* minimum_analysis_ply_thickness

Section computation minimum analysis ply thickness (in length unit of model).

#### *property* modeling_groups

Dictionary with all Modeling Groups defined.

#### *property* oriented_selection_sets

Dictionary with all oriented element sets defined.

#### *property* parameters

List of parameters visible to the workbench.

#### *property* path

Path to the reference surface input file. Read only.

#### plot_dependencies(path=None, parent=None, levels=3)

Generates a graph with all dependencies. The output is a dot, png and pdf file.

* **Parameters:**
  - path: file path without file extension.
  - parent: Parent object
  - levels: Depth levels to look for children.
* **Output:**
  A dot file which can be opend with Graphviz.
* **Usage:**
  ```pycon
  >>> model.plot_dependencies(r'C:\\tmp\hull_dependencies', model.element_sets['HULL'], 3)
  ```

#### *property* plybook

PlyBook.

#### *property* pre_path

Save path of pre database linked to currently loaded post database.

#### *property* reference_surface_bounding_box

Tuple with corners of bounding box of reference surface mesh.

#### *property* reference_surface_input_unit_system_locked

If the unit system of the reference surface is not defined in the mesh input, the unit system can be changed.

#### *property* reference_surface_input_unit_system_type

Unit System of the Reference Surface (set by user).

#### refresh_material_data(matml_file_path, apdl_file_path)

Refresh material external data sources in the model acph5 db. Needs the save_path to be set.

#### *property* relative_thickness_tolerance

Section computation relative thickness tolerance.

#### reload_mesh(path=None, format=None)

Reloads the mesh (nodes, elements and named selections).
Ignored imported entities are the materials and rosettes.

Parameters:
: - path: New mesh path. Default is the current model path.
  - format: New format. Default is the current format.

#### reorder_modeling_groups(source=[], target=None, option='after')

Reorders the modeling groups by placing source before or after the target.

* **Parameters:**
  - source: list of modeling groups to insert at the new position.
  - target: a modeling group which defines the position to insert the source.
  - option: whether to insert the source before or after the target.
* **Usage:**
  ```pycon
  >>> model.reorder_modeling_groups(source=[modelmodeling_groups['DECK']], target=modelmodeling_groups['HULL'], option='before')
  ```

#### *property* rosettes

Dictionary with all Rosettes defined.

#### *property* sampling_points

Sampling Point Container.

#### save(path=None, cache_data=None)

Save ACP model to .acph5 file.

* **Parameters**
- path: Path to file.
- cache_data: Whether to cache current state of model or not.

#### save_analysis_model(path)

Save actual analysis model to disc.

 * **parameters:**
   - path Save path of the cdb file.

#### save_apdl_commands(path)

Save APDL commands for composite definitions of actual model.

 * **parameters:**
   - path Save path of the cdb file.

#### save_h5(path, cache_data=False)

Save ACP model in ACPH5 format.

#### save_layup(path, format=None, objects=None)

Function that saves the layup data to a csv file.

* **Parameters:**
  - path: The path to the file.
  - format: Format can be csv and excel (on windows only).
  - objects: Optional parameter if left the entire layup is written to the file, else only the layup defined within modeling_groups.

#### save_layup_to_csv_file(path, objects=None)

Function that saves the layup data to a csv file.

* **Parameters:**
  - path: The path to the file.
  - modeling_groups: Optional parameter if left the entire layup is written to the file, else only the layup defined within modeling_groups.

#### save_layup_to_excel_file(path, objects=None)

Function that saves the layup data to an excel file. Windows only!

* **Parameters:**
  - path: The path to the file.
  - objects: Optional parameter if left the entire layup is written to the file, else only the layup defined within modeling_groups.

#### *property* scenes

Scenes.

#### *property* scripts

List of user-defined scripts.

#### *property* section_cuts

Section Cuts.

#### select_elements(selection='sel0', op='new', labels=None, indices=None, attached_to=None, x=None, y=None, z=None, element_type='all')

Selects element within active model. (Marks the given selection as SELECTED).

* **Parameters:**
  - selection: The selection to update.
    Can be given as string ‘sel0’ - ‘sel5’ or ‘all’ or can be given as ObjectSelection object such as
    - model.selection.
    - scene.active_set.
  - op: Select operation. Can be all, new (default), add, remove, intersect, inverse or none.
  - labels: List with element labels to select.
  - indices: List with element indices to select.
  - attached_to: Elements attached to entities / vertices in this list will be selected.
  - x: X-range to select.
  - y: Y-range to select.
  - z: Z-range to select.
  - element_type: Element type: solid, shell.

#### select_nodes(selection='sel0', op='new', labels=None, attached_to=None, x=None, y=None, z=None)

Function selects nodes in graph and marks the given selection as SELECTED.

* **Parameters:**
  - selection: The selection to update.
    Can be given as string ‘sel0’ - ‘sel5’ or ‘all’,
    or can be given as ObjectSelection object such as
    - model.selection.
    - scene.active_set.
  - op: Select operation. Can be all, new (default), add, remove, intersect, inverse, none
  - labels: List with node labels to select.
  - attached_to: Nodes attached to the given list of entities or vertices will be selected.
    If attached_to=”elements” all nodes attached to selected elements are selected
  - x: X-range to select.
  - y: Y-range to select.
  - z: Z-range to select.

#### select_solid_elements_from_shells(selection='sel0')

Selects the solid element within given selection and deselects the shell elements.

* **Parameters:**
  - selection: The selection to update. Can be given as string ‘sel0’ - ‘sel5’.
* **Return:**
  Number of selected solid elements.

#### *property* selection

Selected objects of this model.

#### *property* selection_rules

Dictionary with all Selection Rules defined.

#### *property* sensors

Dictionary with all Sensors.

#### *property* show_deformed

Whether to show result plots in the deformed and scaled configuration.

#### *property* show_solver_elements

Whether mesh selections and plot should consider solver elements in solid models or not.

#### *property* solid_models

SolidModel.

#### *property* solutions

Solutions.

#### solve(wait=False)

Convenience function to directly solve the current model.

* **Parameters:**
  - wait: Wait until solver process finishes computation.

#### *property* solver

Solver instance.

#### *property* unit_system

Create a unit system and assign it to the model.
Unit system types are: si,mks,cgs,umks,mpa,bft,bin,undefined.

#### update(objects='all', relations_only=False)

Main update function.

* **Parameters:**
  - objects: List of objects to update.
  - relations_only: Set this option to true to only update and propagate the status of all objects.

#### *property* use_default_section_tolerances

Boolean whether to uses angle and thickness tolerances of the application preferences for section computation. Otherwise model specific values are used.

#### *property* use_nodal_thicknesses

Define whether to use nodal thicknesses or element thicknesses.

#### *property* views

Views.

## [`Rosette`](#compolyx.Rosette)

### *class* compolyx.Rosette(graph, obj, parent=None)

Rosette class.

Access:

```pycon
>>> model = db.models['class40.1']
>>> rosette_1 = model.rosettes['Rosette.1']
>>> rosette_2 = model.create_rosette(name='Rosette.2', origin=(1.5, 5.75, 7.), dir1=(-0.4, -0.4, 0.8), dir2=(-6.0, 0.6, 0.75), rosette_type='parallel' )
```

#### *property* changed

Status boolean. Set to true if the underlying data has been changed. Write only property.

#### *property* dir1

Direction 1 of the Rosette.

#### *property* dir2

Direction 2 of the Rosette.

#### *property* edge_set

Edge Set for Rosette.

#### get_global_coordinates(coordinates)

Evaluates the global coordinates of a point given in local rosette coordinates:
CYLINDRICAL,  RADIAL and SPHERICAL coord sys type: Give phi and theta in RAD.

* **Parameters:**
  - (x, y, z): 
  - x = x for PARALLEL, r for CYLINDRICAL, RADIAL and SPHERICAL.
  - y = y for PARALLEL, phi for CYLINDRICAL, RADIAL and SPHERICAL.
  - z = z for PARALLEL, CYLINDRICAL, RADIAL and theta for SPHERICAL.
* **Usage:**
  ```pycon
  >>> rosette.get_global_coordinates((1.,2.,3.))
  ```

#### get_global_vector_components(vector)

gets global vector components from local rosette vector components.
CYLINDRICAL,  RADIAL and SPHERICAL coord sys type: Give phi and theta in RAD.

* **Parameters:**
  - (x, y, z): 
  - x = x for PARALLEL, r for CYLINDRICAL, RADIAL and SPHERICAL.
  - y = y for PARALLEL, phi for CYLINDRICAL, RADIAL and SPHERICAL
  - z = z for PARALLEL, CYLINDRICAL, RADIAL and theta for SPHERICAL.
* **Usage:**
  ```pycon
  >>> rosette.get_global_vector_components((1.,2.,3.))
  ```

#### get_local_coordinates(coordinates)

Evaluates the local rosette coordinates of a point given in global coordinates.

* **Parameters:**
  - (x, y, z): coordinates in global (parallel) coordinates.

* **returns:**
-  (x, y, z):
- x = x for PARALLEL, r for CYLINDRICAL, RADIAL and SPHERICAL.
- y = y for PARALLEL, phi for CYLINDRICAL, RADIAL and SPHERICAL.
- z = z for PARALLEL, CYLINDRICAL, RADIAL and theta for SPHERICAL.
  CYLINDRICAL,  RADIAL and SPHERICAL coord sys type:  phi and theta in RAD.

* **Usage:**
  ```pycon
  >>> rosette.get_local_coordinates((1.,2.,3.))
  ```

#### get_local_vector_components(vector)

Returns local rosette vector components from global vector components.

* **Parameters:**
  - (x, y, z): Components in global (parallel) coordinates.

* **returns:** 
- (x, y, z):
- x = x for PARALLEL, r for CYLINDRICAL, RADIAL and SPHERICAL.
- y = y for PARALLEL, phi for CYLINDRICAL, RADIAL and SPHERICAL.
- z = z for PARALLEL, CYLINDRICAL, RADIAL and theta for SPHERICAL.
  CYLINDRICAL,  RADIAL and SPHERICAL coord sys type:  phi and theta in RAD.

* **Usage:**
  ```pycon
  >>> rosette.get_local_vector_components((1.,2.,3.))
  ```

#### local_direction(point, angle)

Get local orientation for a given relative angle and position in space.

#### *property* locked

Rosette is generated from an imported rosette and cannot be changed.

#### *property* origin

Origin of the Rosette.

#### *property* rosette_type

Rosette Types can be: parallel,radial,cylindrical,spherical,edge_wise.

#### serialize()

Serialize to Python string.

#### set_Xy()

sets dir2 orthogonal to dir1 as y- and x-axis.

#### set_Xz()

sets dir2 orthogonal to dir1 as z- and x-axis.

#### set_Yz()

sets dir2 orthogonal to dir1 as z- and y-axis.

#### set_xY()

sets dir1 orthogonal to dir2 as x- and y-axis.

#### set_xZ()

sets dir1 orthogonal to dir2 as x- and z-axis.

#### set_yZ()

sets dir1 orthogonal to dir2 as y- and z-axis.

## LookUpTable

### [`LookUpTableBase`](#compolyx.LookUpTableBase)

### *class* compolyx.LookUpTableBase(obj, parent=None)

Bases: `NamedGraphFuncObject`

Look-Up Table Class.

associates scalar or vector values to points.

Example:

```pycon
>>> table = db.models['class40.1'].create_lookup_table1d(name='LookUpTable1D.1')
>>> table.columns['Location'].values = [0,1,2,3]
>>> db.models['class40.1'].lookup_tables['LookUpTable1D.2'].create_column( name='Radius', type='scalar' )
>>> r = db.models['class40.1'].lookup_tables['LookUpTable1D.2'].columns['Radius']
>>> r.values = [0,0.3,0.6,1]
```

#### *property* active

LookUpTable active.

#### clear()

clear table data (rows and columns).

#### clear_rows()

clear table rows (keep columns).

#### *property* column_types

a list of column types (‘scalar’, or ‘direction’).

#### *property* columns

Dictionary with all columns

#### create_column(name, type=None, values=None, dimension='dimensionless')

Create a new column.

* **Parameters:**
  - name: Name of column.
  - type: A string (‘scalar’, ‘direction’) specifying the column type (the values will be initialized to NaN).
  - values: A numpy array with values (the type is determined from its shape).

#### *property* empty

True if table is empty.

#### load_from_csv_file(path)

Load the table from csv file in path.

Load LookUpTable from CSV file.

* **Parameters:**
  - path: path to output file.

#### *property* num_cols

Number of rows.

#### *property* num_rows

Number of columns.

#### save_to_csv_file(path)

Save LookUpTable to CSV file.

* **Parameters:**
  - path: path to output file.

#### *property* tabular_data

a tuple containing a list of column labels and a 2d array with floats for all cells. This is a flattened view of all columns.

### [`LookUpTable1D`](#compolyx.LookUpTable1D)

### *class* compolyx.LookUpTable1D(obj, parent=None)

Bases: [`LookUpTableBase`](#compolyx.LookUpTableBase)

A LookUpTable to associate arbitrary data to a one-dimensional field of Locations.

#### column_factory

alias of `LookUpTable1DColumn`

#### *property* direction

The Direction of the Look Up Table.

#### *property* origin

The Origin of the Look Up Table.

#### *property* tabular_data

a tuple containing a list of column labels and a 2d array with floats for all cells. This is a flattened view of all columns.

### [`LookUpTable3D`](#compolyx.LookUpTable3D)

### *class* compolyx.LookUpTable3D(obj, parent=None)

Bases: [`LookUpTableBase`](#compolyx.LookUpTableBase)

A LookUpTable to associate arbitrary data to a three-dimensional field of locations.

#### *property* algorithm_type

Algorithm types can be: nearest_neighbor,linear_multivariate,weighted_nearest_neighbor.

#### column_factory

alias of `LookUpTable3DColumn`

#### *property* num_min_neighbors

Number of neighbors used for the interpolation with weighted nearest neighbor.

#### remove_duplicate_points()

Removes duplicate supporting points from the table.

* **Returns:**

 Number of removed points.

* **Example:**
  >> db.models[‘plate’].lookup_tables[‘LookUpTable3D_scalar’].remove_duplicate_points()

#### *property* search_radius

Search Radius used for the interpolation with weighted nearest neighbor.

#### *property* tabular_data

a tuple containing a list of column labels and a 2d array with floats for all cells. This is a flattened view of all columns.

#### *property* use_default_search_radius

True if the search radius is estimated automatically.

### [`LookUpTableColumn`](#compolyx.LookUpTableColumn)

### *class* compolyx.LookUpTableColumn(name, parent)

an object to hold a column in a table.

#### *property* enabled

Whether this object is currently enabled or not. Mainly defined through the current application mode pre or post.

#### *property* status

column status (‘UPTODATE’,’NOTUPTODATE’, or ‘LOCKED’).

#### *property* type

column type (scalar or direction).

#### *property* values

numpy array containing the column values.

## [`ElementSelectionRule`](#compolyx.ElementSelectionRule) classes

### *class* compolyx.ElementSelectionRule(graph, obj, parent=None)

Base class for Rules.
This acts as an interface to the cpp object of the rules.
The base class implements \_py_update which is called after the cpp update. It sets the changed flag.
Since NameGraph derives from Observable, observers can listen on ‘changed’.

In order to support csv_serialization, the classes have to implement a ‘_dict’ method
and a list named ‘_csv_parameters’.
The \_dict method specifies which properties are written and \_csv_parameters specifies which parameters are read and
how they are parsed. The keys in \_dict and the elements in \_parameters_csv have to be consistent.
If the conversion from the string to an object is more than simple type conversion,
it can be implemented in \_update_rule_from_csv.

#### *property* changed

Triggers Observable to dispatch changed message.

#### *property* extent

Extent of the rule.

#### *property* include_rule_type

Include type.

#### *property* relative_rule_type

Relative type.

### [`ParallelSelectionRule`](#compolyx.ParallelSelectionRule)

### *class* compolyx.ParallelSelectionRule(graph, obj, parent=None)

Bases: [`ElementSelectionRule`](#compolyx.ElementSelectionRule)

Parallel Selection Rule.

#### *property* direction

Direction of the Parallel Selection Rule.

#### *property* direction_in_global_coordinates

Direction of the rule in global coordinates.

#### *property* neg_distance

Negative distance.

#### *property* origin

Origin of the Parallel Selection Rule.

#### *property* origin_in_global_coordinates

Origin of the rule in global coordinates.

#### *property* pos_distance

Positive distance.

#### *property* rosette

Rosette of the used for origin and direction.

#### serialize()

Serialize to Python string.

#### *property* use_global_coordinate_system

Use global coordinate system for origin and direction.

### [`CylindricalSelectionRule`](#compolyx.CylindricalSelectionRule)

### *class* compolyx.CylindricalSelectionRule(graph, obj, parent=None)

Bases: [`ElementSelectionRule`](#compolyx.ElementSelectionRule)

Cylindrical Selection Rule.

#### *property* direction

Direction of the Cylinder.

#### *property* direction_in_global_coordinates

Direction of the rule in global coordinates.

#### *property* origin

Origin of the Cylinder.

#### *property* origin_in_global_coordinates

Origin of the rule in global coordinates.

#### *property* radius

Radius of the Cylinder.

#### *property* rosette

Rosette of the used for origin and direction.

#### serialize()

Serialize to Python string.

#### *property* use_global_coordinate_system

Use global coordinate system for origin and direction.

### [`SphericalSelectionRule`](#compolyx.SphericalSelectionRule)

### *class* compolyx.SphericalSelectionRule(graph, obj, parent=None)

Bases: [`ElementSelectionRule`](#compolyx.ElementSelectionRule)

Spherical Selection Rule.

#### *property* direction_in_global_coordinates

Direction of the rule in global coordinates.

#### *property* origin

Origin of the Sphere.

#### *property* origin_in_global_coordinates

Origin of the rule in global coordinates.

#### *property* radius

Sphere Radius.

#### *property* rosette

Rosette of the used for origin and direction.

#### serialize()

Serialize to Python string.

#### *property* use_global_coordinate_system

Use global coordinate system for origin and direction.

### [`TubeSelectionRule`](#compolyx.TubeSelectionRule)

### *class* compolyx.TubeSelectionRule(graph, obj, parent=None)

Bases: [`ElementSelectionRule`](#compolyx.ElementSelectionRule)

Tube Selection Rule.

#### *property* display_data

The tube rule mesh plot.

#### *property* edge_set

Edge Set for the Tube Selection Rule.

#### *property* extend_endings

Whether to extend the ending of the edge.

#### get_nodes()

* **Returns:**
  List of nodes which define the guid of the tube.

#### *property* head

Defines the head of the tube. Only needed if the extensions are asymmetric.

#### *property* head_extension

Specifies the length of the extension at the head of the tube.

#### *property* inner_radius

Inner tube-radius.

#### *property* is_closed

Returns true if the edge set of this rule is closed.

#### *property* mesh

The mesh of the tube rule.

#### *property* nodes

Returns the nodes of this tube as nx3 array including the extensions.

#### *property* outer_radius

Outer tube-radius.

#### serialize()

Serialize to Python string.

#### *property* symmetrical_extension

Whether the extensions are equal on both ends or not.

#### *property* tail_extension

Specifies the length of the extension at the tail of the the tube.

### [`CutoffSelectionRule`](#compolyx.CutoffSelectionRule)

### *class* compolyx.CutoffSelectionRule(graph, obj, parent=None)

Bases: [`ElementSelectionRule`](#compolyx.ElementSelectionRule)

#### *property* angle

Cut-Off angle.

#### *property* cutoff_geometry

Cut-Off Geometry for the Cut-Off Rule.

#### *property* cutoff_rule_type

Cutoff rule type. Valid values: geometry, taper, and variable_taper.

#### *property* direction

Direction of the offset and angle interpolation for ``variable_taper``.

#### *property* distance_type

Distance type for offset and angle interpolation for ``variable_taper``.

#### *property* edge_set

Edge Set for cutoff_rule_type = ``taper`` or ``variable_taper``.

#### *property* offset

Cut-Off offset

#### *property* offset_method

Method to compute the offset of a ply.

#### *property* offset_type

Take offset from edge set perpendicular to element reference surface (out_of_plane) or in element reference surface (in_plane).

#### *property* origin

Origin of the offset and angle interpolation for ‘variable_taper’ cutoff rules.

#### *property* ply_cutoff_type

Cutoff Types can be: production_ply_cutoff,analysis_ply_cutoff.

#### *property* ply_tapering

Use Ply Tapering Orientation.

### [`GeometricalSelectionRule`](#compolyx.GeometricalSelectionRule)

### *class* compolyx.GeometricalSelectionRule(graph, obj, parent=None)

Bases: [`ElementSelectionRule`](#compolyx.ElementSelectionRule)

Geometrical Selection Rule.

#### add_element_set(element_set)

Add Element Set to GeometricalSelection Rule.

#### clear_element_sets()

Clear Element Sets of Oriented Selection Set.

#### *property* element_sets

Element Sets for the Geometrical Selection Rule.

#### *property* geometrical_rule_type

Geometrical rule type, valid values geometry,element_sets.

#### *property* geometry

Virtual Geometry for the Geometrical Selection Rule.

#### *property* in_plane_capture_tolerance

In-plane capture tolerance.

#### *property* neg_capture_tolerance

Capture tolerance in the negative direction of the CAD surface.

#### *property* pos_capture_tolerance

Capture tolerance in the positive direction of the CAD surface.

#### *property* projection_normal

Projection direction used to map curves onto the shell mesh.

#### serialize()

Serialize to Python string.

#### *property* use_defaults

Whether to use the offset value of the CAD Geometry or not.

#### *property* use_projection_normal

Whether to use a projection normal for outlines or not.

### [`BooleanSelectionRule`](#compolyx.BooleanSelectionRule)

### *class* compolyx.BooleanSelectionRule(graph, obj, parent=None)

Bases: [`ElementSelectionRule`](#compolyx.ElementSelectionRule)

Boolean Selection Rule.

#### add_rule(rule, template_rule=False, rule_values=(0.0, 0.0), operation_type='intersect')

Add Selection Rule to Boolean Selection rule.

* **Parameters:**
  - rule: The Rule to be added.
  - template_rule: Whether this is a template rule or not.
  - rule_values: Parameters of the template rule (For instance upper and lower limit of a ParallelSelectionRule).
  - operation_type: Boolean operation type (intersect, add, remove).

Example:
>>> boolean_rule.add_rule(rule=model.selection_rules[‘ParallelRule.1’],template_rule=True, rule_values=(-20.0, 50.0), operation_type=’intersect’).

#### *property* selection_rules

Element Selection Rule of the Boolean Selection Rule.

#### serialize()

Serialize to Python string.

### [`VariableOffsetSelectionRule`](#compolyx.VariableOffsetSelectionRule)

### *class* compolyx.VariableOffsetSelectionRule(graph, obj, parent=None)

Bases: [`ElementSelectionRule`](#compolyx.ElementSelectionRule)

#### *property* angles

Link to lookup table column with taper angles.

#### *property* distance_along_edge

Whether to evaluate the distance along the edge or direction of the rule.

#### *property* edge_set

Link to edge set.

#### *property* element_set

The element set on which the rule is applied.

#### *property* inherit_from_lookup_table

Whether to inherit the Look-Up Table object properties.

#### *property* offsets

Link to lookup table column with offsets.

#### *property* radius_direction

Direction for offset value interpolations.

#### *property* radius_origin

Origin for offset value interpolations.

#### serialize()

Serialize to Python string.

#### *property* use_offset_correction

Use offset correction on mesh.

## [`EntitySet`](#compolyx.EntitySet) classes

### *class* compolyx.EntitySet(graph, obj, parent=None)

Base class for entity sets.

#### add(entity)

Add entity to the set.

#### remove(entity)

Remove entity from the set.

#### *property* size

Number of entities.

### [`ElementSet`](#compolyx.ElementSet)

### *class* compolyx.ElementSet(graph, obj=None, parent=None)

Bases: [`EntitySet`](#compolyx.EntitySet)

Element set class.

* **Exemplary usage:**
  ```pycon
  >>> m=db.models.values()[-1]
  >>> eset=m.element_sets['DECK']
  >>> eset.modify(op='none')
  >>> eset.modify(op='new', element_labels=[1,2,3,4])
  >>> eset.modify(op='add', element_sets=[ m.element_sets['Deck_layup-1'] ])
  >>> eset.modify(op='intersect', x=[-6.5,-5.5])
  ```

#### *property* boundaries

Get the boundaries of the Element Set.

#### *property* locked

Element Set is imported and cannot be changed.

#### *property* middle_offset

Middle offset flag.

#### modify(op='new', element_labels=None, element_sets=None, x=None, y=None, z=None)

General method to modify the elements in an element set.

* **Parameters:**
  - op: Selection method: new, add, remove, intersect or inverse.
  - element_labels: List of element ids.
  - element_sets: List of element sets.
  - x: Min and max of x location.
  - y: Min and max of y location.
  - z: Min and max of z location.

#### *property* normals

Get the Normals of the Element Set.

#### *property* orientable

True if the Element Set has an orientable topology.

#### partition()

Partitions this ElementSet into new ElementSets with an orientable topology.
if this ElementSet is already orientable, a copy will be created.

#### *property* planar

True if the Element Set has a planar topology.

#### serialize()

Serialize to Python string.

#### write_boundaries(filename, format=None)

Write boundaries in iges/step format
:Parameters:
- filename: output file.
- format: ‘iges’, ‘step’, None (automatic format recognition).

### [`EdgeSet`](#compolyx.EdgeSet)

### *class* compolyx.EdgeSet(graph, obj=None, parent=None)

Edge Set class.

#### *property* changed

Status boolean. Set to true if the underlying data has been changed. Write only property.

#### *property* display_data

The edge set mesh plot.

#### *property* edge_set_type

Edge Set Types can be: “By Reference”, “By Nodes”.

#### get_nodes()

Return python list with nodes as objects.

#### *property* is_closed

Edge Set is closed.

#### *property* limit_angle

Edge Set limit angle for creation of edge set by reference.

#### *property* locked

Edge Set is imported and cannot be changed.

#### *property* mesh

The edge set mesh.

#### *property* node_labels

Node labels defining the NodeSet (only if type=’By Nodes’).

#### *property* nodes

Node indexes/labels of the Edge Set.

#### *property* origin

Edge Set origin for createion of edge set by reference.

#### serialize()

Serialize to Python string.

## `Geometry` classes

### [`CADGeometry`](#compolyx.CADGeometry)

### *class* compolyx.CADGeometry(graph, obj, visible_sub_shapes=None, parent=None)

#### *property* cad_compounds

Dictionary with all compounds in the CAD Geometry.

#### *property* cad_faces

Dictionary with all face shapes.

#### *property* cad_solids

Dictionary with all solid shapes.

#### *property* cad_surfaces

Dictionary with all shell shapes.

#### *property* changed

Status boolean. Set to true if the underlying data has been changed. Write only property.

#### *property* display_data

CAD geometry mesh surface plot.

#### *property* ext_id

External ID of the CAD Geometry object.

#### *property* locked

CAD geometry is generated from an imported geometry and cannot be changed.

#### *property* normals_display_data

CAD geometry normals visualization.

#### *property* offset

Offset value used to analyze the surface’s coverage regarding the mesh.

#### *property* path

The file path where the CAD geometry is loaded from.

#### *property* precision

Precision of geometrical operations (intersection points, thickness sampling, …).

#### refresh_external_source(enforce=False)

Reload the geometry from the external source.

* **Parameters:**
  - enforce: enforce the reloading of external data for locked object in the new acph5 serialization format. This option should be used with care!

#### *property* root_shapes

Dictonary with all free shapes of the CAD Geometry.

#### save_as(path)

Save the initial geometry file to the specified path.

The file extension must match the original one.

#### *property* scale_factor

Geometry is scaled with this factor.

#### *property* shape_type

Topological type of the shape.

#### *property* show_normals

Visibility of Face Normals.

#### *property* sub_shape_selection_display_data

CAD face selection plot.

#### *property* sub_shapes

Sub faces of the CAD Geometry.

#### *property* use_default_offset

Whether to use the default value or not.

#### *property* use_default_precision

Whether to use default precision value or not.

#### *property* visible_sub_shapes

Ids of CAD sub shapes to be displayed, stored per-scene id.

#### *property* visualization_mesh

Visualization mesh of this geometry.

### [`CADCompound`](#compolyx.CADCompound)

### *class* compolyx.CADCompound(graph, obj, parent=None)

ComPoLyX Class to represent CADCompound.

#### *property* sub_shapes

Sub faces of the CAD Compound.

### [`CADSolid`](#compolyx.CADSolid)

### *class* compolyx.CADSolid(graph, obj, parent=None)

ComPoLyX Class to represent CADSolid.

#### *property* sub_shapes

Sub faces of the CAD Solid.

### [`CADShell`](#compolyx.CADShell)

### *class* compolyx.CADShell(graph, obj, parent=None)

ComPoLyX Class to represent CADShell.

#### *property* sub_shapes

Sub faces of the CAD Shell.

### [`CADFace`](#compolyx.CADFace)

### *class* compolyx.CADFace(graph, obj, parent=None)

ComPoLyX Class to represent CADFace.

### [`VirtualGeometry`](#compolyx.VirtualGeometry)

### *class* compolyx.VirtualGeometry(graph, obj, parent=None)

ComPoLyX Class to represent VirtualGeometry.

#### add(shape)

Creates a new CADReference object for the given shape. Returns the new CADReference object or the existing one if available.

* **Parameters:**
  - shape: A tuple. The first item is the shape object and the second the link path (root path) of the shape.

If the first item is None, the link path is used to link the shape with the virtual geometry.

* **Usage:**
  ```pycon
  >>> cad = db.active_model.geometry.cad_geometries['CadGeometry.1']
  >>> db.active_model.geometry.virtual_geometries['RefGeom'].add( (cad.root_shapes['top_surface'], "") )
  or
  >>> db.active_model.geometry.virtual_geometries['RefGeom'].add( (None, "CadGeometry.1/top_surface") )
  ```

#### *property* cad_geometry

Returns the linked CADGeometry. Read only.

#### *property* cad_references

Dictionary of all cad references.

#### clear_cad_references()

Clear all linked references (VirtualGeometry becomes empty)

#### create_cad_reference(name='VirtualGeometry.1', id=None, path=None, size=None, cog=None, dimension=None, bounding_box_min=None, bounding_box_max=None)

Creates a new Cad Reference and links it with the Virtual Geometry

* **Parameters:**
  - name: Name of the object.
  - id: ID of the object.
  - path: Geometry path of the linked cad component.
  - size: Size of the linked cad component. Size can be the volume, area or length depending on the type of the linked cad component.
  - cog: Center of gravity of the linked cad component.
  - dimension: The shape type of the cad component. CADCompound, CADSolid, CADShell or CADFace.
  - bounding_box_min: Minimum point of the bounding box.
  - bounding_box_max: Maximum point of the bounding box.
* **Return:**
  - the new cad reference object.

#### *property* dimension

Highest dimension of all cad references. 3=solid, 2=surface, 1=curve.

#### remove(shape)

Removes the CADReference object for the given shape.

* **Usage:**
  ```pycon
  >>> cad = db.active_model.geometry.cad_geometries['CadGeometry.1']
  >>> db.active_model.geometry.virtual_geometries['RefGeom'].remove( (cad.root_shapes['top_surface'], "") )
  or
  >>> db.active_model.geometry.virtual_geometries['RefGeom'].remove( (None, "CadGeometry.1/top_surface") )
  ```

#### serialize()

Serialize to Python string.

#### set(shapes)

Clears the existing CAD References and creates a new one for each given shape.

* **Parameters:**
  - shapes: A list of tuples. The first item is the shape object and the second the link path (root path) of the shape.
* **Usage:**
  ```pycon
  >>> shell = db.active_model.geometry.cad_geometries['CADGeometry.1'].root_shapes['cut_surface']
  >>> db.active_model.geometry.virtual_geometries['RefGeom.1'].set(shapes=[ (shell, "") ] )
  or
  >>> db.active_model.geometry.virtual_geometries['RefGeom.1'].set(paths=[ (None, "CADGeometry.1/cut_surface") ] )
  ```

#### *property* sub_shapes

Sub components of the VirtualGeometry.

### [`CADReference`](#compolyx.CADReference)

### *class* compolyx.CADReference(graph, obj, parent=None)

ComPoLyX Class to represent CAD Reference.

#### *property* bounding_box_max

Maximum of the bounding box.

#### *property* bounding_box_min

Minimum of the bounding box.

#### *property* cog

Center of gravity of the linked shape.

#### *property* dimension

Dimension of the linked shape (1 for lines, 2 for surfaces and 3 for solids).

#### *property* path

Link path of the CADReference

#### *property* size

Size of the linked cad shape.

#### *property* status

Status of the CADReference.

## [`OrientedSelectionSet`](#compolyx.OrientedSelectionSet)

### *class* compolyx.OrientedSelectionSet(graph, obj, parent=None)

Class to represent Oriented Selection Set.

#### add_element_set(element_set)

Add Element Set to Oriented Selection Set.

#### add_rosette(rosette)

Add Rosette to Oriented Selection Set.

#### add_selection_rule(rule)

Add Selection Rule to Oriented Selection Set.

#### *property* auto_draping_direction

Automatic selection of draping direction.

#### *property* boundaries

Get the boundaries of the Oriented Selection Set.

#### clear_element_sets()

Clear Element Sets of Oriented Selection Set.

#### clear_rosettes()

Clear Rosettes of Oriented Selection Set.

#### clear_selection_rules()

Clear Selection Rules of Oriented Selection Set.

#### *property* draping

Flag for using draping or not.

#### *property* draping_direction

The direction in which the draping starts.

#### *property* draping_material_model

Draping material model.

#### *property* draping_mesh_size

The mesh size for draping.

#### *property* draping_obj

Draping representation.

#### *property* draping_seed_point

The seed point where the draping starts.

#### *property* draping_ud_coefficient

UD draping coefficient.

#### *property* element_sets

Element Sets of the oriented element set.

#### *property* elements

Elements of the Oriented Selection Set.

#### normal_from_id(id)

Returns the element normal.

#### *property* normals

Get the Normals of the Oriented Selection Set.

#### *property* orientation_direction

The Orientation Direction of the Oriented Element set.

#### *property* orientation_point

The Orientation Point of the Oriented Selection Set.

#### *property* orientations

Get the oriented normals of the Oriented Selection Set

#### *property* ref_directions

Get the Refernce Directions of the Oriented Selection Set

#### *property* reference_direction_field

a look-up table column or None for external reference directions.

#### remove_element_set(element_set)

Remove Element Set from Oriented Selection Set.

#### remove_rosette(rosette)

Remove Rosette from Oriented Selection Set.

#### remove_selection_rule(rule)

Remove Rule from Oriented Selection Set.

#### *property* rosette_selection_method

Selection Method for Rosettes of the Oriented Selection Set.

#### *property* rosettes

Rosettes of the Oriented Selection Set.

#### save_flat_wrap(filename)

Write the flatwrap to DXF, IGES or STEP file.

* **Parameters:**
  - filename: Path to the file to be writen.

#### *property* selection_rules

Selection Rules of the Oriented Selection Set.

#### serialize()

Serialize to Python string

#### *property* use_default_draping_mesh_size

Whether to use a default size for the draping mesh.

#### write_boundaries(filename, format=None)

Write boundaries in iges/step format
:Parameters:
- filename: Output file.
- format: ‘iges’, ‘step’, None (automatic format recognition).

## [`ModelingGroup`](#compolyx.ModelingGroup)

### *class* compolyx.ModelingGroup(graph, obj, parent=None)

Class to manage modeling groups.

Access:

```pycon
>>> import compolyx
>>> db = compolyx.DB()
>>> model = db.models['class40.1']
>>> mpg = model.modeling_groups['PlyGroup.1']
```

Creation:

```pycon
>>> import compolyx
>>> db = compolyx.DB()
>>> model = db.models['class40.1']
>>> mpg_1 = model.create_modeling_group('PlyGroup.1')
```

#### copy_butt_joint_sequence(source, global_ply_nr=None, sort=True)

Makes a copy of a butt joint sequence.

* **Parameters:**
  - source: Source object to copy.
  - global_ply_nr: Global ply number to use. If 0 the ply is added at the top.
  - sort: Whether to sort all plies of modeling group after copy.
: If multiple plies are copied at once it can be useful to sort only once at the end of the copy operation.
* **Returns:**
  New instance of modeling ply

#### copy_interface_layer(source, global_ply_nr=None, sort=True)

Copy a Interface Layer

* **Parameters:**
  - source: Source object to copy.
  - global_ply_nr: Global ply number to use. If 0 the ply is added at the top.
  - sort: Whether to sort all plies of Interface Layer group after copy.
: If multiple plies are copied at once it can be useful to sort only once at the end of the copy operation.
* **Returns:**
  New instance of Interface Layer

#### copy_modeling_ply(source, global_ply_nr=None, sort=True)

Copy a modeling ply.

* **Parameters:**
  - source: Source object to copy.
  - global_ply_nr: Global ply number to use. If 0 the ply is added at the top.
  - sort: Whether to sort all plies of modeling group after copy. If multiple plies are copied at once it can be useful to sort only once at the end of the copy operation.
* **Returns:**
  New instance of modeling ply

#### create_butt_joint_sequence(name=None, id=None, global_ply_nr=None, primary_plies=None, secondary_plies=None, active=True)

Creates an new butt joint sequences and adds it to this modeling group.

* **Parameters:**
  -name: Name of the butt joint.
  -id: ID of the name.
  -global_ply_nr: Global ply number which orders the ply sequences.
  -primary_plies: List of tuples (modeling ply, level). Define the source of the thickness between plies.
  -secondary_plies: Single or list of modeling plies. Secondary plies inherit the thickness from the primary plies.
  -active: Boolean whether the butt joint sequence is active or not.
* **Return:**
  New butt joint sequence.

#### create_interface_layer(name=None, id=None, global_ply_nr=None, oriented_selection_sets=None, open_area_sets=None, active=True)

Create Interface Layer.

* **Parameters:**
  - name: Name of the new Interface Layer.
  - id: Optional ID of the new Interface Layer.
  - global_ply_nr: Ply number for stacking sequence.
  - oriented_selection_sets: Oriented Selection Set for the expansion
     of the Interface Layer.
  - open_area_sets: Defines the initial crack of a VCCT layer (optional).
  - active: Interface Layer active. Default True.
* **Returns:**
  The created Interface Layer.
* **Example:**
  ```pycon
  >>> oes_1 = model.oriented_selection_sets['OrientedSelectionSet.1']
  >>> mpg = model.modeling_groups['PlyGroup.1']
  >>> mp_1 = mpg.create_interface_layer( name='InterfaceLayer.1',
                                    global_ply_nr=0,
                                    oriented_selection_sets=(oes_1,),
                                    active=True)
  ```

#### create_modeling_ply(name=None, id=None, ply_material=None, ply_angle=0.0, number_of_layers=1, global_ply_nr=None, oriented_selection_sets=None, selection_rules=None, draping='no_draping', draping_seed_point=None, auto_draping_direction=True, draping_thickness_correction=True, draping_direction=None, draping_mesh_size=0.0, use_default_draping_mesh_size=True, thickness_definition='nominal', core_geometry=None, active=True, taper_edges=None, thickness_field=None, thickness_field_type='absolute', angle_1_field=None, angle_2_field=None)

Create modeling ply.

* **Parameters:**
  - name: Name of the new Modeling Ply.
  - id: Optional ID of the new Modeling Ply.
  - ply_material: Ply Material (Fabric, Stackup, SubLaminate).
  - ply_angle: Angle of the Ply Material.
  - number_of_layers: Multiplier of this layer.
  - global_ply_nr: Ply number for stacking sequence.
  - oriented_selection_sets: Oriented Selection Set for the expansion
     of the Modeling Ply
  - selection_rules: Element Selection Rules for the Modeling Ply.
  - draping: The type of draping to be used “no_draping”, “evaluate_draping”, or “tabular_values”.
  - draping_seed_point: Start/Seed Point for Draping.
  - auto_draping_direction: Automatically set draping direction (Default: True).
  - draping_direction: Direction to go in Draping (Default: None).
  - draping_mesh_size: Mesh size used for Draping.
  - use_default_draping_mesh_size: Wheterh to use a default size for the draping mesh. Default is the average element size of the shell mesh.
  - thickness_definition: Enum that describes the method used for thickness definition (Default: Nominal).
  - core_geometry: The assigned core geometry.
  - active: Modeling Ply active.
  - taper_edges: Taper Edges for the Modeling Ply.
  - thickness_field: Look-Up table column with scalar values for thickness sampling (optional).
  - thickness_field_type: The type of thickness field ‘absolute’ or ‘relative’.
  - angle_1_field: Look-Up table column with scalar values for angle 1.
  - angle_2_field: Look-Up table column with scalar values for angle 2.
* **Returns:**
  The created Modeling Ply.
* **Example:**
  ```pycon
  >>> oes_1 = model.oriented_selection_sets['OrientedSelectionSet.1']
  >>> fabric_1 = model.material_data.fabrics['Fabric.1']
  >>> mpg = model.modeling_groups['PlyGroup.1']
  >>> mp_1 = mpg.create_modeling_ply( name='ModelingPly.1',
                                      ply_angle=0.0,
                                      global_ply_nr=0,
                                      number_of_layers=1,
                                      ply_material=fabric_1,
                                      oriented_selection_sets=(oes_1,),
                                      selection_rules=(rule1,),
                                      draping="no_draping",
                                      draping_seed_point = (1,0,0),
                                      auto_draping_direction = True)
  ```

#### export_ply_geometries(filename, ply_level='production_ply', boundary=True, surface=True, offset_type='middle_offset', direction_arrows=False, first_direction=True, second_direction=False, arrow_length=1.0, arrow_type='no_arrow')

Exports the surface, boundary and/or fiber directions of modeling, production and analysis ply to igs or step file.

* **Parameters:**
  - filename: File path (allowed extensions are iges, igs, step and stp).
  - ply_level: Defines which plies are exported: modeling_ply_wise, production_ply_wise or analysis_ply_wise. Default is production_ply_wise.
  - boundary: Boolean whether to export the boundary. Default is True.
  - surface: Boolean whether to export the ply surface. Default is True.
  - offset_type: Offset type (can be no_offset, middle_offset, top_offset or bottom_offset). Default is middle_offset.
  - direction_arrows: Boolean whether to export the direction arrows. Default is False.
  - first_direction: Boolean whether to export the first (main) material direction. Default is True.
  - second_direction: Boolean whether to export the second material direction. Default is False.
  - arrow_length: Length of the arrows. Default is 1.
  - arrow_type: Defines the arrow type (can be standard_arrow, no_arrow, half_arrow). Default is no_arrow.

#### *property* plies

Modeling Plies of the Modeling Group.

#### reorder_plies(source, target, option='after')

Reorder the ply group. Take source plies and insert before/after target ply. If the ModelingGroup itself is
specified as a target, the modeling plies retain their original global ply number.

* **Parameters:**
  - source: list of plies to insert at new position.
  - target: position to insert plies. Can be modeling group or sequence entity.
  - option: where to insert: after``(default), ``before, or end (for SequenceEntity targets) keep (for ModelingGroup targets)
      - after: paste right after the target.
      - before: paste right before the target.
      - end: paste at the end of the ModelingGroup containing target.
      - keep: keep the previous global_ply_nr (only works for move, and when target is a ModelingGroup).

#### serialize(butt_joints=False)

Serialize to Python string.

* **Parameters:**
  - butt_joints: specify whether butt-joints are serialized or everything else (Modeling Group, Modeling Plies and Interface Layers).

### [`ModelingPly`](#compolyx.ModelingPly)

### *class* compolyx.ModelingPly(graph, obj, parent=None, element_vd=None)

Class to represent Modeling Ply.

#### add_oriented_selection_set(oriented_selection_set)

Add Oriented Selection Set.

* **Parameters:**
  - oriented_selection_set: The Oriented Selection Set to be assigned to ModelingPly.

#### add_selection_rule(rule, template_rule=False, rule_values=(), operation_type='intersect')

Add Rule to Modeling Ply.

* **Parameters:**
  - rule: The Rule to be added to the Modeling Ply.
  - template_rule: Bool.
  - rule_values: Parameters of the template rule.
  - operation_type: Boolean operation type (intersect, add, remove).

#### add_taper_edge(taper_edge, angle, offset=0.0)

Add Taper Edge to Modeling Ply.

* **Parameters:**
  - taper_edge: The Taper Edge to be added to the Modeling Ply.
  - angle: Angle for tapering.
  - offset: Offset for tapering.

#### *property* angle_1_field

Angle 1 Correction field.

#### *property* angle_2_field

Angle 2 Correction field.

#### *property* area

Area of the Modeling Ply.

#### *property* auto_draping_direction

Automatic selection of draping direction.

#### clear_oriented_selection_sets()

Clear all Oriented Selection Sets of the Modeling Ply.

#### clear_selection_rules()

Clear all selection_rules assigned to the Modeling Ply.

#### clear_taper_edges()

Clear all taper_edges assigned to the Modeling Ply.

#### *property* core_geometry

Assigned Core Geometry.

#### direction_arrows(arrow_length=None, arrow_type='standard_arrow', offset_type='no_offset')

Direction arrows of the ply.

* **Parameters:**
  - arrow_length: Length of the arrow.
  - arrow_type: ‘standard_arrow’ (default), ‘no_arrow’, ‘half_arrow’.
  - offset_type: ‘no_offset’ (default), ‘bottom_offset’, ‘middle_offset’, ‘top_offset’.

#### *property* draped_fiber_directions

Get the Draped Fiber Directions of the Modeling Ply.

#### *property* draping

Type of draping to be used.

#### *property* draping_direction

The direction in which the draping starts.

#### draping_direction_from_calculation(analysis_ply=None)

Draping direction used for draping calculation.

#### *property* draping_mesh_size

The mesh size for draping.

#### *property* draping_obj

Draping properties of the Modeling Ply.

#### *property* draping_seed_point

The seed point where the draping starts.

#### draping_seed_point_from_calculation(analysis_ply=None)

Draping seed point used for draping calculation.

#### *property* draping_thickness_correction

Thickness correction for draping.

#### element_normal_is_equal(element_id=None, normal=None)

Returns 1 if the element normal is equal the orientation of the modeling ply, else -1.

* **Parameters:**
  - element_id: Element label.
  - normal: Reference normal direction.

#### *property* fiber_directions

Get the Fiber Directions of the Modeling Ply.

#### *property* number_of_layers

Number of layers of the Modeling Ply.

#### *property* on_sampling_point

Flag if the modeling ply is on sampling point.

#### orientation_at_element(element_id=None)

Returns the orientation of this modeling ply for a certain element.
If the element does not belong to the modeling ply the return value is [0,0,0].

* **Parameters:**
  - element_id: Element label.

#### *property* orientations

Get the oriented normals of the Modeling Ply.

#### *property* oriented_selection_sets

Oriented Selection Sets of the Modeling Ply.

#### *property* ply_angle

Ply Angle of the Modeling Ply.

#### *property* ply_offsets

Get the offsetted Modeling Ply.

#### *property* price

Price of the Modeling Ply.

#### *property* production_plies

Production Plies of the Modeling Ply.

#### *property* ref_directions

Get the Reference Directions of the Modeling Ply.

#### remove_oriented_selection_set(oriented_selection_set)

Remove Oriented Selection Set from Modeling Ply.

* **Parameters:**
  - oriented_selection_set: The Oriented Selection Set to be removed from ModelingPly.

#### remove_selection_rule(rule)

Remove Rule from Modeling Ply.

* **Parameters:**
  - rule: The Rule to be removed from Modeling Ply.

#### remove_taper_edge(taper_edge)

Remove taper_edge from Modeling Ply.

* **Parameters:**
  - taper_edge: The taper_edge to be removed from Modeling Ply.

#### *property* selection_rules

Element Selection Rule of the Modeling Ply.

#### serialize()

Serialize to Python string.

#### *property* taper_edges

Taper Edges of the Modeling Ply.

#### *property* thickness_definition

Type of thickness-definition to be used.

#### *property* thickness_field

LookUpTable Column with tabular thicknesses or None.

#### *property* thickness_field_type

The type of the Thickness field ‘absolute’ or ‘relative’.

#### *property* use_default_draping_mesh_size

Enable this property to use a default size for the draping mesh.

#### *property* weight

Weight of the Modeling Ply.

#### write_boundaries(filename, format=None, offset_type='no_offset', with_direction_arrows=False, arrow_length=None, arrow_type='standard_arrow')

Write boundaries in iges/step format.

* **Parameters:**
  - filename: Output file.
  - format: ‘iges’, ‘step’, None (automatic format recognition).
  - offset_type: ‘no_offset’ (default), ‘bottom_offset’, ‘middle_offset’, ‘top_offset’.
  - with_direction_arrows: The element directions should be written to.
  - arrow_length: Length of the direction arrows (default is average element edge size).
  - arrow_type: Type to be used as arrows (‘standard_arrow’(default), ‘no_arrow’, ‘half_arrow’).

### `ProductionPly`

### *class* compolyx.production_ply.ProductionPly(graph, obj, parent=None, element_vd=None)

Class to represent Production Ply.

#### *property* analysis_plies

Analysis Plies of the Production Ply.

#### *property* angle

Ply Angle of the Production Ply.

#### *property* area

Area of the production ply.

#### *property* const_thickness

True if this Production Ply has a constant thickness.

#### direction_arrows(arrow_length=None, arrow_type='standard_arrow', offset_type='no_offset')

Direction arrows of the ply.

* **Parameters:**
  - arrow_length: Length of the arrow.
  - arrow_type: ‘standard_arrow’ (default), ‘no_arrow’, ‘half_arrow’.
  - offset_type: ‘no_offset’ (default), ‘bottom_offset’, ‘middle_offset’, ‘top_offset’.

#### *property* draping_obj

Draping representation.

#### *property* ply_material

Ply Material of the Production Ply.

#### *property* price

Price of the production ply.

#### save_draping_input_data(filename)

Writes out Modeling Ply to Draping Interface File.

* **Parameters:**
  - filename: Path to the file to be written.

#### save_flat_wrap(filename)

Write the flatwrap to DXF, IGES or STEP file.

* **Parameters:**
  - filename: Path to the file to be writen.

#### *property* thickness

Thickness of the Production Ply.

#### update()

Update the Production Ply.

#### *property* weight

Weight of the production ply.

#### write_boundaries(filename, format=None, offset_type='no_offset', with_direction_arrows=False, arrow_length=None, arrow_type='standard_arrow')

Write boundaries in iges/step format.

* **Parameters:**
  - filename: Output file.
  - format: ‘iges’, ‘step’, None (automatic format recognition).
  - offset_type: ‘no_offset’ (default), ‘bottom_offset’, ‘middle_offset’, ‘top_offset’.
  - with_direction_arrows: The element directions should be written to.
  - arrow_length: length of the direction arrows (default is average element edge size).
  - arrow_type: Type to be used as arrows (‘standard_arrow’(default), ‘no_arrow’, ‘half_arrow’).

### [`AnalysisPly`](#compolyx.AnalysisPly)

### *class* compolyx.AnalysisPly(graph, obj, parent=None)

ComPoLyX Class to represent Analysis Ply.

#### *property* active

Sequence Entity is active.

#### *property* active_in_post_mode

True if failure criteria will be processed for this ply.

#### *property* angle

Ply Angle of the Analysis Ply.

#### direction_arrows(arrow_length=None, arrow_type='standard_arrow', offset_type='no_offset')

Direction arrows of the ply

* **Parameters:**
  - arrow_length: Length of the arrow.
  - arrow_type: ‘standard_arrow’ (default), ‘no_arrow’, ‘half_arrow’.
  - offset_type: ‘no_offset’ (default), ‘bottom_offset’, ‘middle_offset’, ‘top_offset’.

#### *property* draping_obj

Get the Fiber Directions of the Analysis Ply.

#### is_reinforcing()

True if the AnalysisPly is a reinforcing ply.

For instance, if linked to a Lay-up Mapping Object of type “reinforcing” or
to an Imported Solid Model via a Mapping Object of type “reinforcing”.

#### *property* material

Ply Material of the Analysis Ply.

#### *property* mesh

Mesh. Only available if analysis plyis reinforcement.

#### *property* ply_material

Ply Material of the Analysis Ply.

#### *property* thickness

Thickness of the Analysis Ply.

#### update()

Update the Analysis Ply

#### write_boundaries(filename, format=None, offset_type='no_offset', with_direction_arrows=False, arrow_length=None, arrow_type='standard_arrow')

Write boundaries in iges/step format.

* **Parameters:**
  - filename: Output file.
  - format: ‘iges’, ‘step’, None (automatic format recognition).
  - offset_type: ‘no_offset’ (default), ‘bottom_offset’, ‘middle_offset’, ‘top_offset’.
  - with_direction_arrows: The element directions should be written to.
  - arrow_length: Length of the direction arrows (default is average element edge size).
  - arrow_type: Type to be used as arrows (‘standard_arrow’(default), ‘no_arrow’, ‘half_arrow’).

### [`InterfaceLayer`](#compolyx.InterfaceLayer)

### *class* compolyx.InterfaceLayer(graph, obj, parent=None)

Class to represent Interface Layer.

#### add_open_area_set(value)

Add Open Area Set to Interface Layer.

#### add_oriented_selection_set(oriented_selection_set)

Add Oriented Selection Set.

* **Parameters:**
  - oriented_selection_set: The Oriented Selection Set to be assigned to Interface Layer.

#### clear_open_area_sets()

Clears the open area selection.

#### clear_oriented_selection_sets()

Clear all Oriented Selection Sets of the Interface Layer.

#### *property* enabled

Whether this object is currently enabled or not.

#### *property* open_area_sets

Open area set(s) of the Interface Layer.

#### *property* oriented_selection_sets

Oriented Selection Sets of the Interface Layer.

#### *property* ply_offsets

Get the offsetted Interface Layer.

#### remove_open_area_set(value)

Remove Open Area Set from Interface Layer.

#### remove_oriented_selection_set(oriented_selection_set)

Remove Oriented Selection Set from Interface Layer.

* **Parameters:**
  - oriented_selection_set: The Oriented Selection Set to be removed from Interface Layer.

#### serialize()

Serialize to Python string.

### [`ButtJointSequence`](#compolyx.ButtJointSequence)

### *class* compolyx.ButtJointSequence(graph, obj, parent=None)

Class to represent the Butt Joint Sequence.

#### *property* primary_plies

Primary plies of the butt joint squence.

#### *property* secondary_plies

Secondary plies of the butt joint squence.

#### serialize()

Serialize to Python string.

## [`ImportedModelingGroup`](#compolyx.ImportedModelingGroup)

### *class* compolyx.ImportedModelingGroup(graph, obj, parent=None)

#### copy_imported_modeling_ply(source)

Copy an imported modeling ply.

* **Parameters:**
  - source: Source object to copy.
* **Returns:**
  New instance of imported modeling ply.

#### create_imported_modeling_ply(name=None, id=None, active=True, offset='bottom', ply_material=None, ply_angle=0.0, mesh_import_type='from_geometry', mesh_geometry=None, rosette_selection_method='minimum_angle', rosettes=[], thickness_definition='nominal', thickness_field=None, thickness_field_type='absolute', draping='no_draping', angle_1_field=None, angle_2_field=None)

Create modeling ply.

* **Parameters:**
  - name: Name of the new Imported Modeling Ply.
  - id: Optional ID of the new Imported Modeling Ply.
  - active: Whether the ply is active or not.
  - offset: whether the mesh defines the bottom, middle or top surface of the ply.
  - ply_material: Ply Material (Fabric).
  - ply_angle: Angle of the Ply Material.
  - mesh_import_type: The source of the imported mesh (‘from_h5_composite_cae’ or ‘from_geometry’).
  - mesh_geometry: if mesh_import_type is from_geometry, then this geometry defines the surface of the ply.
  - rosette_selection_method: Method to calculate element orientation (‘minimum_angle’, ‘maximum_angle’, ‘minimum_distance’,
      ‘minimum_angle_superposed’, ‘minimum_distance_superposed’,
      ‘maximum_angle_superposed’, ‘ansys_classic’, or
      ‘tabular_values’).
  - rosettes: Rosettes for the Imported Modeling Ply.
  - reference_direction_field: Table column used to compute reference directions. Only needed if rosette_selection_method is tabular_values.
  - thickness_definition: Enum that describes the method used for thickness definition (Default: nominal).
  - thickness_field: Look-Up table column with scalar values for thickness sampling (optional).
  - thickness_field_type: The type of thickness field ‘absolute’ or ‘relative’.
  - draping: The type of draping to be used “no_draping” or “tabular_values”.
  - angle_1_field: Look-Up table column with scalar values for angle 1.
  - angle_2_field: Look-Up table column with scalar values for angle 2.
* **Returns:**
  The created Imported Modeling Ply.
* **Example:**
  ```pycon
  >>> modeling_group = db.active_model.create_imported_modeling_group( name='ImportedModelingGroup' )
  >>> modeling_group.create_imported_modeling_ply(name='ImportedModelingPly.1', offset='middle', ply_angle=45)
  ```

#### *property* plies

Modeling Plies of the Modeling Group.

### [`ImportedModelingPly`](#compolyx.ImportedModelingPly)

### *class* compolyx.ImportedModelingPly(graph, obj, parent=None)

#### *property* active

Whether the ply is active or surpressed.

#### *property* angle_1_field

Angle 1 Correction field.

#### *property* angle_2_field

Angle 2 Correction field.

#### clear_rosettes()

Clear Rosettes of Imported Modeling Ply.

#### *property* draping

Type of draping to be used.

#### *property* mesh

#### *property* mesh_geometry

Geometry that defines the mesh/surface of this ply.

#### *property* mesh_import_type

Defines the source of the imported mesh.

#### *property* offset

Defines whether the imported mesh defines the bottom, middle or top surface of the ply.

#### *property* ply_angle

Ply Angle of the Imported Modeling Ply.

#### *property* ply_material

Material of the Modeling Ply.

#### *property* production_plies

Attached imported production plies.

#### *property* reference_direction_field

a look-up table column or None for external reference directions.

#### *property* rosette_selection_method

Defines the rosette selection method.

#### *property* rosettes

Rosettes of the Imported Modeling Ply.

#### *property* thickness_definition

Type of thickness-definition to be used (from table, nominal).

#### *property* thickness_field

LookUpTable Column with tabular thicknesses or None.

#### *property* thickness_field_type

The type of the Thickness field ‘absolute’ or ‘relative’.

### [`ImportedProductionPly`](#compolyx.ImportedProductionPly)

### *class* compolyx.ImportedProductionPly(graph, obj, parent=None)

#### *property* analysis_plies

Analysis Plies of the Production Ply.

#### *property* angle

Ply Angle of the Production Ply.

#### *property* mesh

#### *property* ply_material

Ply Material of the Production Ply.

#### *property* thickness

Thickness of the Production Ply.

### [`ImportedAnalysisPly`](#compolyx.ImportedAnalysisPly)

### *class* compolyx.ImportedAnalysisPly(graph, obj, parent=None)

Class to represent an imported modeling ply.

#### *property* active_in_post_mode

Whether ply is active in ACP Post.

#### *property* angle

Ply Angle.

#### is_reinforcing()

True if the AnalysisPly is a reinforcing ply.

For instance, if linked to a Lay-up Mapping Object of type “reinforcing” or
to an Imported Solid Model via a Mapping Object of type “reinforcing”.

#### *property* material

Ply material.

#### *property* mesh

#### *property* thickness

Average ply thickness.

## [`FieldDefinition`](#compolyx.FieldDefinition)

### *class* compolyx.FieldDefinition(graph, obj, parent=None)

Class to represent Field Definition.

#### *property* active

Field Definition is active.

#### *property* enabled

Whether this object is currently enabled or not. Mainly defined through the current application mode pre or post.

#### *property* field_variable_name

The name of the field variable defined.

#### *property* full_mapping

Whether the field is interpolated to the shell reference surface or to the actual ply-position by taking into account the shell offset; in solid models the interpolation takes always place at the actual ply position.

#### *property* locked

Returns the locked status of the Field Definition.

#### *property* scalar_field

Look-up table used with this field definition.

#### *property* scope_entities

The entities defining the scope of the field definition. Allowed are Element Sets, Modeling Plies and Oriented Selection Sets.

#### serialize()

Serialize to Python string.

## [`SamplingPoint`](#compolyx.SamplingPoint)

### *class* compolyx.SamplingPoint(graph, obj, parent=None)

The Sampling Point allows to pick through the laminate at a certain point to run detailed analyses.

Key features:
  - Layup in the object tree of the closest element to the selected point.
  - Sampling direction defines the ply order (bottom-up or top-down).
  - Reference direction defines the 0 degree axis of the element used for the evaluations (CLT).
  - Optional a user-defined coordinate system can be selected to compute the reference direction. The element normal and reference direction
    defines the result coordinate system.
  - 2D plots showing the layup, stress, strain and failure distribution through the laminate.
  - Polar plot of the laminate properties.
  - Analysis based on the Classical Laminate Theory (CLT).
  - Export to ESAComp, CSV file.

* **Usage:**
  ```pycon
  >>> model.create_sampling_point(name='Sampling Point')
  ```

#### aligned()

Returns true if the sampling direction is aligned with the normal direction of the closest element.

#### capture_analysis_plot(path=None, size=(800, 600))

Saves the sampling point analysis plot to a file.

Note that this function only works when executed from a GUI, or
in batch mode with a hidden GUI. It does not work in full batch
mode.

* **Parameters:**
  - path: Path of the produced image file.
  - size: Pixel size of the plot.

#### clt_query(query='layup', offset_is_middle=True, consider_coupling_effect=True)

Returns the properties of the classical laminate theory:

* **Parameters:**
  - query: query parameter (see below).
  - offset_is_middle: Whether to offset the reference surface to the mid-plane of the laminate. This has an influence on the laminate stiffness calculations.
  - consider_coupling_effect: Whether to consider the coupling effect or not (B-Matrix). It’s only of relevance for the laminate engineering constants.
* **Options:**
  - layup: Returns the layup of the laminate (Modeling, Production and Analysis Plies). Default.
  - laminate_properties: Young’s, flexural and shear moduli of the laminate.
  - polar_properties: E1, E2  and G12 depending on the laminate orientation.
  - text_labels: Returns a list with the material names, angles and thicknesses.
  - stiffness_matrix: Returns the laminate stiffness matrix (ABD).
  - compliance_matrix: Returns the lamiante compliance matrix (inverse of ABD).
  - laminate_forces: Returns a dict with the laminate forces Nx, Ny, Nxy, Mx, My, Mxy, Qx and Qy. Offset is middle is always true for this evaluation.

Usage:
: ```pycon
  >>> se.clt_query(query='polar_properties')
  ```

#### *property* consider_coupling_effect

Whether to consider coupling effects (B-Matrix) for the calculation of the laminate engineering constants. The computation of the ABD matrices is not affected by this parameter.

#### create_plot(query={'layup': ['mp'], 'polar_properties': ['E1', 'G12']}, offset_is_middle=True, consider_coupling_effect=True)

Generates 2D-plots with the results of interest

* **Parameters:**
  - query: query parameter.
  - offset_is_middle: Whether to offset the reference surface to the mid-plane of the laminate. This has an influence on the laminate stiffness calculations.
  - consider_coupling_effect: Whether to consider the coupling effect or not (B-Matrix). It’s only of relevance for the laminate engineering constants.
* **Options:**
  - layup:[‘mp’, ‘pp’, ‘ap’] Modeling Plies, Production Plies and Analysis Plies.
  - polar_properties:[‘E1’,’E2’,’G12’] polar plot of laminate stiffesses.
  - strains: List containing Strain definition name and component.
   - [‘e1’, ‘e2’, ‘e3’, ‘e12’, ‘e13’, ‘e23’, ‘eI’, ‘eII’, ‘eIII’].
  - stresses: List containing Stress definition name and component.
   - [‘s1’, ‘s2’, ‘s3’, ‘s12’, ‘s13’, ‘s23’, ‘sI’, ‘sII’, ‘sIII’].
  - failures:[‘FailureCriteria.1_irf’, ‘FailureCriteria.1_rf’, ‘FailureCriteria.1_mos’, ‘FailureCriteria.1_fm’] - Name of FC and value.
  - text_labels:[‘material’, ‘angle’, ‘thickness’].
* **Usage:**
  ```pycon
  >>> se.create_plot query={layup:['mp'], failure:['FailureCriteria.1_irf']}
  >>> se.graph_plot.x_values
  >>> se.graph_plot.layer_thicknesses
  ```

#### *property* direction

Sampling Point Direction.

#### *property* element_id

Element ID (label) of the Sampling Point.

#### *property* enabled

Whether this object is currently enabled or not. SamplingPoints are always enabled.

#### *property* graph_plot

Graph Plot object used to configure 2D plots.

#### *property* locked

Sampling Point is generated from an imported source and cannot be changed.

#### *property* offset_is_middle

Whether to offset the reference surface to the mid-plane of the laminate.

#### *property* plies

Plies of the Sampling Point.

#### *property* point

Sampling Point Point.

#### *property* reference_direction

Reference direction.

#### *property* rosette

Rosette of the Sampling Point.

#### *property* solution_set

Solution and Set selection.

#### update_plot(offset_is_middle, consider_coupling_effect)

Updates the 2D plot.

* **Parameters:**
  - offset_is_middle: Whether to offset the reference surface to the mid-plane of the laminate. This has an influence on the laminate stiffness calculations.
  - consider_coupling_effect: Whether to consider the coupling effect or not (B-Matrix). It’s only of relevance for the laminate engineering constants.

#### *property* use_default_reference_direction

Flag to use default reference direction.

## [`SectionCut`](#compolyx.SectionCut)

### *class* compolyx.SectionCut(graph, obj, parent=None, color_table=None)

Section Cut Class showing the lay-up in the cutting plane.

#### *property* active

Whether a section cut is computed on update or not.

#### *property* changed

Status boolean. Set to true if the underlying data has been changed. Write only property.

#### *property* core_scale_factor

Get/set the core scale factor.

#### *property* display_data

Section cut plots.

#### *property* elastic_measures

Cross-sectional Measures of Elasticity.

#### *property* element_labels

Label of elements within ex1 array.

#### *property* element_nodes

Coincidence list.

#### *property* element_types

Element types within ex1 array.

#### *property* enabled

Whether this object is currently enabled or not. SectionCuts are always enabled.

#### export_surface_section_cut(path, format='becas:in', export_strength_limits=True)

Exports the suface section cut to BECAS or ANSYS MAPDL

* **Paramters:**
  - path: File path or directory depending on the export format.
  - format: Export format. Implemented are ‘becas:in’ and ‘ansys:cdb’. ‘becas:in’ is the default.
  - export_strength_limits: Boolean whether to export the strength limits for BECAS. True by default.
* **Usage:**
  ```pycon
  >>> section_cut.export_surface_section_cut(r'D:\tmp\section_cut.cdb', 'ansys:cdb', 1.e-3)
  >>> section_cut.export_surface_section_cut(path=r'D:\tmp', format='becas:in', export_strength_limits=False)
  ```
* **Output:**
  - mapdl: CDB file including the nodes and elements
  - becas: BECAS IN input files: N2D, E2D, EMAT and MATPROPS. Optional FAILMAT.

#### *property* extrusion_type

Section Cut Types can be: wire_frame,surface_normal,surface_sweep_based.

#### *property* geometric_measures

Cross-sectional Measures of Geometry.

#### *property* in_plane_reference_direction1

Reference direction for cross-sectional measures.

#### *property* in_plane_reference_direction2

Reference direction for cross-sectional measures.

#### *property* intersection_type

Intersection Types can be: normal_to_surface,in_plane.

#### *property* locked

Section cut was imported and cannot be changed.

#### *property* mass_measures

Cross-sectional Measures of Mass.

#### *property* node_labels

Label of nodes within nx1 array.

#### *property* nodes

Returns nodes of this mesh as nx3 array.

#### *property* normal

Get/set the plane normal.

#### *property* number_of_interpolation_points

User-defined number of interpolation points.

#### *property* origin

Get/set the plane origin.

#### *property* scale_factor

Scale factor used for visualization of section cuts.

#### *property* scope_element_sets

Element Sets to which the Section Cut is scoped. Only used if ‘scope_entire_model’ is False.

#### *property* scope_entire_model

Whether the section cut is scoped to the entire model, or only selected element sets.

#### *property* search_radius

User-defined search radius.

#### *property* section_cut_type

Section Cut Types can be: modeling_ply_wise,production_ply_wise,analysis_ply_wise.

#### *property* surface_display_data

Section cut surface plot.

#### *property* surface_mesh

Section cut line surface mesh.

#### *property* tolerance

Tolerance used to generate the surface section cut.

#### *property* use_default_lut_settings

Boolean whether to use the dault settings of the LookUp Table.

#### *property* use_default_tolerance

Whether to use the default feature tolerance. 0.1% of the averaged element size.

#### *property* vtk_element_data

Returns mesh coincidence data in the format needed by VTK.

#### *property* wireframe_display_data

Section cut wireframe plot.

#### *property* wireframe_mesh

Section cut line wireframe mesh.

## [`Sensor`](#compolyx.Sensor)

### *class* compolyx.Sensor(graph, obj, parent=None)

Sensor object for meassuring areas, prices, weights, and centers of gravity.

#### *property* active

Whether the sensor is computed on update or not.

#### add_entity(entity)

Add entity to Sensor.

#### *property* area

Area covered by all Entities of the Sensor.

#### *property* center_of_gravity

Center of Gravity over all Entities of the Sensor.

#### clear_entities()

Clear all entities of this Sensor.

#### *property* enabled

Whether this object is currently enabled or not. Sensors are always enabled.

#### *property* entities

Entities of the Sensor.

#### *property* locked

Sensor cut was imported and cannot be changed.

#### *property* modeling_ply_area

Cumulated area of all modeling-plies involved.

#### *property* price

Price over all Entities of the Sensor.

#### *property* production_ply_area

Cumulated area of all production-plies involved.

#### remove_entity(entity)

Remove entity from sensor.

#### *property* sensor_type

Sensor type. Allowed string values: sensor_by_area, sensor_by_plies, sensor_by_material and sensor_by_solid_model.

#### *property* weight

Weight over all Entities of the Sensor.

## PlyBook

### [`PlyBook`](#compolyx.PlyBook)

### *class* compolyx.PlyBook(name='PlyBook', parent=None, reST_ply='', reST_chapter='', reST_title_page='', scene=None)

Class to represent a ply book.

#### *property* chapters

Dictionary with all chapters defined.

#### create_chapter(name, view=None, ply_entities=(), show_rosettes=True)

Add a chapter to the Ply book.

* **Parameters:**
  - name: Name of the chapter to be added.
  - view: The view for snapshots of the chapter.
  - ply_entities: List of modeling plies and modeling groups for the chapter.
  - show_rosettes: If True, show rosettes when creating ply snapshots.

#### generate(filename, format=None, \*\*write_kwargs)

Generate the complete plybook.

* **Parameters:**
  - filename: output filename.
  - format: pdf, html, odt, txt.

#### *property* reST_chapter

reST chapter template.

#### *property* reST_ply

reST ply template.

#### *property* reST_title_page

reST title page template.

### [`Chapter`](#compolyx.Chapter)

### *class* compolyx.Chapter(name, parent, view=None, ply_entities=(), id=0, show_rosettes=True)

Class to represent plybook chapter.

#### generate_reST(reST_chapter_template, reST_ply_template, image_provider)

Get the interpolated reST string for the chapter.

#### get_production_plies()

Return a list of production plies which are associated with this chapter.

#### *property* ply_entities

Plies/PlyGroups for the chapter..

#### *property* show_rosettes

Show the rosettes linked to a ply in snapshots.

## [`PublishedParameter`](#compolyx.PublishedParameter)

### *class* compolyx.PublishedParameter(name, parent, source_object=None, source_property='', user_script='', category='input', acp_type=None, description='', lower_limit=None, upper_limit=None, cyclic=False, float_list=[], string_list=[], unbound_value=None)

Class to represent parameters which are linked to the ANSYS workbench.

#### *property* acp_type

ACP parameter type. Can be one of: ‘int’, ‘float’, ‘float_list’, ‘bool’, ‘string’ or None.

#### *property* ansys_type

ANSYS parameter type where ACP parameter is mapped to. Can be one of: ‘int’, ‘double’, ‘boolean’, or None.

#### *property* category

Should be one of: input, unbound_input, output or expression_output.

#### *property* cyclic

Whether a float value is cyclic or not.

#### *property* description

A human-readable description of the linked parameter.

#### *property* enabled

Whether this object is currently enabled or not. Mainly defined through the current application mode pre or post.

#### *property* float_list

A list of possible values for a float.

#### get_source_str()

Returns the active source string. Either the user script or the property (string) of the ACP object.

#### *property* lower_limit

The lower limit for numeric values.

#### *property* name

Name of object.

#### serialize()

Serialize to Python string.

#### *property* string_list

A list of possible values. List of objects if the property type is object, else list of strings.

#### *property* unit

The unit associated with the actual parameter value.

#### *property* upper_limit

The upper limit for numeric values.

#### *property* value

The actual parameter value.

#### *property* wb_value

The parameter value as it is represented in the ANSYS workbench.

## [`Script`](#compolyx.Script)

### *class* compolyx.Script(name, \*, parent=None, source=None, active=True, uptodate=False, update_mode=ScriptUpdateMode.ON_TRIGGERS)

Class to represent user-defined scripts operating on the input parameters.

#### *property* active

Whether the script should run or not.

#### *property* enabled

Whether this object is currently enabled or not. Mainly defined through the current application mode pre or post.

#### serialize()

Serialize to Python string.

#### *property* source

Source code of the user-defined script.

#### *property* status

String status indicating if the object is up-to-date.

#### *property* status_changed

Specifies if the object has changed, for the purposes of notifying workbench.

#### *property* update_mode

Defines which changes cause the script to become out-of-date. Can be either ‘manual’ (run only when manually triggered), ‘on_triggers’ (run when a parameter or the script itself changes), or ‘always’ (run with every update).

#### *property* uptodate

Whether the script execution is up to date.
