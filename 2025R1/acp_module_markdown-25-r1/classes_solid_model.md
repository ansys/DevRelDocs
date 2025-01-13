# Solid-model classes

<a id="solidmodel"></a>

## [`SolidModel`](#compolyx.SolidModel)

<a id="compolyx.SolidModel"></a>

### *class* compolyx.SolidModel(graph, obj, parent=None)

Solid model class.

<a id="compolyx.SolidModel.active"></a>

#### *property* active

Solid model active.

<a id="compolyx.SolidModel.add_disable_dropoff_set_on_bottom"></a>

#### add_disable_dropoff_set_on_bottom(set)

Add set where the drop-offs on bottom surface are disabled.

<a id="compolyx.SolidModel.add_disable_dropoff_set_on_top"></a>

#### add_disable_dropoff_set_on_top(set)

Add set where the drop-offs on top surface are disabled.

<a id="compolyx.SolidModel.add_element_set"></a>

#### add_element_set(element_set)

Add element set to solid model.

<a id="compolyx.SolidModel.clear_disable_dropoff_sets_on_bottom"></a>

#### clear_disable_dropoff_sets_on_bottom()

Clear sets where the drop-offs on bottom are disabled.

<a id="compolyx.SolidModel.clear_disable_dropoff_sets_on_top"></a>

#### clear_disable_dropoff_sets_on_top()

Clear sets where the drop-offs on top are disabled.

<a id="compolyx.SolidModel.clear_element_sets"></a>

#### clear_element_sets()

Clear element sets of solid model.

<a id="compolyx.SolidModel.clear_generated_data"></a>

#### clear_generated_data()

Function clears generated solid model but keeps all definitions.

<a id="compolyx.SolidModel.connect_butt_joined_plies"></a>

#### *property* connect_butt_joined_plies

Do not make drop-offs between butt-joined plies if set to True.

<a id="compolyx.SolidModel.copy_extrusion_guide"></a>

#### copy_extrusion_guide(source)

Copy a extrusion guide.

* **Parameters:**
  - source: Source object to copy.
* **Returns:**
  New instance of a Extrusion Guide.

<a id="compolyx.SolidModel.copy_snap_to_geometry_obj"></a>

#### copy_snap_to_geometry_obj(source)

Copy a snap-to geometry.

* **Parameters:**
  - source: Source object to copy.
* **Returns:**
  New instance of a snap-to geometry.

<a id="compolyx.SolidModel.create_extrusion_guide"></a>

#### create_extrusion_guide(name, edge_set=None, id='', cad_geometry=None, direction=(0.0, 0.0, 0.0), radius=None, depth=1.0, use_curvature_correction=False, active=True)

Create a new extrusion guide.

* **Parameters:**
  - name: The name of the extrusion guide.
  - edge_set: An edge set where this guide applies.
  - id: The ID of the extrusion guide.
  - cad_geometry: a CAD geometry object.
  - direction: Extrusion direction.
  - radius: Distance up to which node translations due to the guide will be propagated through the mesh.
    - `0.0`: Only the nodes extruded from edge_set will be shifted onto the guide.
  - depth: Intensity for the propagation of mesh corrections.
    - `1.0` : Linear decay from guide to radius.
    - `>1.0`: Higher reach.
    - `<1.0`: More local.
  - use_curvature_correction: Whether to use curvature correction algorithm to smooth mesh adapted to extrusion guide. Default is `False`.

<a id="compolyx.SolidModel.create_snap_to_geometry_obj"></a>

#### create_snap_to_geometry_obj(name, cad_geometry=None, oriented_selection_set=None, orientation='top', active=True, id='')

Create a new snap-to-geometry object.

* **Parameters:**
  - name: The name of the object.
  - id: The ID of the object.
  - active: Pass the active-flag of the object.
  - cad_geometry: A geometry to snap to.
  - oriented_selection_set: Oriented element set where this snap to applies.
  - orientation: Valid options: `top` and `bottom`.

<a id="compolyx.SolidModel.disable_dropoff_sets_on_bottom"></a>

#### *property* disable_dropoff_sets_on_bottom

Elements where the drop-offs on bottom are disabled. List of element sets or `all` to select the entire scope of the solid model.

<a id="compolyx.SolidModel.disable_dropoff_sets_on_top"></a>

#### *property* disable_dropoff_sets_on_top

Elements of where the drop-offs on top are disabled. List of element sets or `all` to select the entire scope of the solid model.

<a id="compolyx.SolidModel.disable_dropoffs_on_bottom"></a>

#### *property* disable_dropoffs_on_bottom

Boolean whether to disable the drop-off elements on bottom surface.

<a id="compolyx.SolidModel.disable_dropoffs_on_top"></a>

#### *property* disable_dropoffs_on_top

Boolean whether to disable the drop-off elements on top surface.

<a id="compolyx.SolidModel.drop_off_type"></a>

#### *property* drop_off_type

Drop-off type. Valid string options: [‘inside_ply’, ‘outside_ply’].

<a id="compolyx.SolidModel.element_sets"></a>

#### *property* element_sets

Element set(s) of the solid model.

<a id="compolyx.SolidModel.enabled"></a>

#### *property* enabled

Whether this object is currently enabled. Solid models are are enabled in pre and shared mode.

<a id="compolyx.SolidModel.ex_type"></a>

#### *property* ex_type

Extrusion type. Valid string options: [‘monolithic’, ‘analysis_ply_wise’, ‘production_ply_wise’, ‘modeling_ply_wise’, ‘sandwich_wise’, ‘specify_thickness’, ‘material_wise’, ‘user_defined’].

<a id="compolyx.SolidModel.extrusion_guides"></a>

#### *property* extrusion_guides

Extrusion Guides.

<a id="compolyx.SolidModel.global_drop_off_material"></a>

#### *property* global_drop_off_material

Global material of the drop-off elements.

<a id="compolyx.SolidModel.max_thickness"></a>

#### *property* max_thickness

Maximum thickness of solid elements.

<a id="compolyx.SolidModel.offset_type"></a>

#### *property* offset_type

Offset type. Valid string options: [‘shell_normal’, ‘surface_normal’].

<a id="compolyx.SolidModel.ply_group_pointers"></a>

#### *property* ply_group_pointers

Ply group pointers for user defined extrusion.

<a id="compolyx.SolidModel.remove_element_set"></a>

#### remove_element_set(element_set)

Remove element Set from the solid model.

<a id="compolyx.SolidModel.reorder_extrusion_guides"></a>

#### reorder_extrusion_guides(source, target, option='after')

Reorders the extrusion guides.

* **Parameters:**
  - source: Extrusion guide to be reordered.
  - target: Place to put the source.
  - option: Defines if the source is put before or after the target. Valid options: `after` and `before`. 
* **Usage:**
  ```pycon
  >>> sm.reorder_extrusion_guides(source = sm.extrusion_guides['wall'], target=sm.extrusion_guides['leading_edge'], option='after')
  ```

<a id="compolyx.SolidModel.skip_elements_without_plies"></a>

#### *property* skip_elements_without_plies

Enable this option to automatically skip elements without plies from the region of extrusion.

<a id="compolyx.SolidModel.snap_to_geometry_objs"></a>

#### *property* snap_to_geometry_objs

Snap to geometry objects.

<a id="extrusionguide"></a>

## [`ExtrusionGuide`](#compolyx.ExtrusionGuide)

<a id="compolyx.ExtrusionGuide"></a>

### *class* compolyx.ExtrusionGuide(obj, parent=None)

Extrusion guide class.

<a id="compolyx.ExtrusionGuide.active"></a>

#### *property* active

Extrusion guide active.

<a id="compolyx.ExtrusionGuide.cad_geometry"></a>

#### *property* cad_geometry

Associated CAD geometry.

<a id="compolyx.ExtrusionGuide.depth"></a>

#### *property* depth

intensity for the propagation of mesh corrections, depth=1 leads to a linear decay from the guide to the radius, depth<1 leads to more local corrections.

<a id="compolyx.ExtrusionGuide.direction"></a>

#### *property* direction

Extrusion direction.

<a id="compolyx.ExtrusionGuide.edge_set"></a>

#### *property* edge_set

Associated EdgeSet.

<a id="compolyx.ExtrusionGuide.enabled"></a>

#### *property* enabled

Whether this object is currently enabled or not. It is derived from the parent solid model.

<a id="compolyx.ExtrusionGuide.radius"></a>

#### *property* radius

Radius up to which nodal guide translations are propagated through the mesh.

<a id="compolyx.ExtrusionGuide.use_curvature_correction"></a>

#### *property* use_curvature_correction

Whether to use curvature correction algorithm to smooth mesh adapted to extrusion guide. Default is `False`.

<a id="snaptogeometry"></a>

## [`SnapToGeometry`](#compolyx.SnapToGeometry)

<a id="compolyx.SnapToGeometry"></a>

### *class* compolyx.SnapToGeometry(obj, parent)

Snap-to geometry guide class.

<a id="compolyx.SnapToGeometry.active"></a>

#### *property* active

Snap-to geometry active.

<a id="compolyx.SnapToGeometry.cad_geometry"></a>

#### *property* cad_geometry

Associated geometry.

<a id="compolyx.SnapToGeometry.elements"></a>

#### *property* elements

List of affected shell elements.

<a id="compolyx.SnapToGeometry.enabled"></a>

#### *property* enabled

Whether this object is currently enabled. It is derived from the parent solid model.

<a id="compolyx.SnapToGeometry.orientation"></a>

#### *property* orientation

Orientation. Valid string options: [‘top’, ‘bottom’, ‘undefined’].

<a id="cutoffgeometry"></a>

## [`CutOffGeometry`](#compolyx.CutOffGeometry)

<a id="compolyx.CutOffGeometry"></a>

### *class* compolyx.CutOffGeometry(obj, parent=None)

Cut-off geometry guide class.

<a id="compolyx.CutOffGeometry.active"></a>

#### *property* active

Cut-off geometry active.

<a id="compolyx.CutOffGeometry.cad_geometry"></a>

#### *property* cad_geometry

Associated CAD geometry.

<a id="compolyx.CutOffGeometry.enabled"></a>

#### *property* enabled

Whether this object is currently enabled. It is derived from the parent solid model.

<a id="compolyx.CutOffGeometry.orientation"></a>

#### *property* orientation

Orientation. Valid string options: [‘up’, ‘down’].

<a id="compolyx.CutOffGeometry.rel_merge_tolerance"></a>

#### *property* rel_merge_tolerance

Relative merge tolerance.

<a id="solidelementset"></a>

## [`SolidElementSet`](#compolyx.SolidElementSet)

<a id="compolyx.SolidElementSet"></a>

### *class* compolyx.SolidElementSet(graph, obj=None, parent=None)

Solid element set class.
Element set of a solid model.

<a id="compolyx.SolidElementSet.element_labels"></a>

#### *property* element_labels

List of solid elements which are linked to this element set.

<a id="compolyx.SolidElementSet.locked"></a>

#### *property* locked

Returns true if the object is locked (nor editable, neither deletable).

<a id="compolyx.SolidElementSet.serialize"></a>

#### serialize()

Serialize to Python string.

<a id="compolyx.SolidElementSet.size"></a>

#### *property* size

Number of entities.

<a id="importedsolidmodel"></a>

## [`ImportedSolidModel`](#compolyx.ImportedSolidModel)

<a id="compolyx.ImportedSolidModel"></a>

### *class* compolyx.ImportedSolidModel(graph, obj, parent=None)

Imported solid model class.

<a id="compolyx.ImportedSolidModel.clear_generated_data"></a>

#### clear_generated_data()

Function clears generated solid model but keeps all definitions.

<a id="compolyx.ImportedSolidModel.copy_layup_mapping_object"></a>

#### copy_layup_mapping_object(source)

Copy a layup mapping object.

* **Parameters:**
  - source: Source object to copy.
* **Returns:**
  New instance of LayupMappingObject.

<a id="compolyx.ImportedSolidModel.create_layup_mapping_object"></a>

#### create_layup_mapping_object(name='', id='', active=True, entire_solid_mesh=True, solid_element_sets=[], element_sets=None, delete_lost_elements=True, rosette_selection_method_type='minimum_distance', base_element_rosette_selection_method_type='minimum_distance', element_technology='layered_element', scale_ply_thicknesses=True, all_plies=True, use_imported_plies=False, sequences=[], rosettes=[], base_element_rosettes=[], minimum_void_material_thickness=-1.0, void_material=None, filler_material=None, base_material=None, base_element_material_handling='remove', reinforcing_stress_state='plane_stress_state_with_transverse_shear_and_bending_stiffness', reinforcing_behavior='tension_and_compression')

Create a new layup mapping object.

* **Parameters:**
  - name: The name of the solid model.
  - id: The ID of the solid model.
  - active : Active status of layup mapping object.
  - entire_solid_mesh : If `true`, then the scope is all solid elements.
  - solid_element_sets: Defines the scope of solid elements if entire_solid_mesh is `false`.
  - element_sets: a list of Element Sets of the reference surface. Used to extract the plies.
  - filler_material: Global filler material which is assigned to the elements without any layers.
  - delete_lost_elements: If enabled, then all elements which do not intersect with the layup are deleted.
  - rosette_selection_method_type: Defines how the coordinate systems are applied to the filler/lost elements. Used if the element technology is layered_element.
  - base_element_rosette_selection_method_type: Defines how the coordinate systems are applied to the base solid elements. Used if the element technology is reinforcing.
  - element_technology: Specifies the element technology of this mapping (layered elements or reinforcings).
  - scale_ply_thicknesses: Scale plies within layered solid element if they do not fill the entire element, else add void layers.
  - all_plies: Whether all plies of the selected scope (element_sets) should be mapped or only specific sequences.
  - use_imported_plies: If selected, Imported Ply objects can be used for the mapping. Else standard Modeling Plies.
  - sequences: List of Modeling Groups and/or Modeling Plies which are mapped onto the element scope.
  - rosettes: List of rosettes used to orient the lost elements. Used if the element technology is layered_element.
  - base_element_rosettes: List of coordinate systems used to orient the base solid elements. Used if the element technology is reinforcing.
  - minimum_void_material_thickness: Specifies the minimum thickness of void layers. Default is equal to the minimum analysis ply thickness of the model.
  - void_material: Global void material which is assigned to layered elements that are not fully filled with ply material.
  - base_material: Specify the base material of the solids if reinforcing are used.
  - base_element_material_handling: Whether to remove the base material of the solids where the reinforcing intersect, or keep it.
  - reinforcing_stress_state: Specify the stress state of the reinforcing.
  - reinforcing_behavior: Select the mechanical behavior of the reinforcing.
* **Returns:**
  - The created layup mapping object.
* **Note:**
  - Base solid elements are the solid elements of a layup mapping object of type reinforcing which are intersected with the reinforcing surfaces.

<a id="compolyx.ImportedSolidModel.create_solid_element_set"></a>

#### create_solid_element_set(name, id='', locked=False)

For internal use only: Creates a solid element set.

<a id="compolyx.ImportedSolidModel.enabled"></a>

#### *property* enabled

Whether this object is currently enabled. Solid Models are are enabled in pre and shared mode.

<a id="compolyx.ImportedSolidModel.ext_id"></a>

#### *property* ext_id

ID of corresponding mechanical model within the Workbench application project's arhcive (ComponentID).

<a id="compolyx.ImportedSolidModel.external_file_path"></a>

#### *property* external_file_path

The file path where the CAD geometry is loaded from.

<a id="compolyx.ImportedSolidModel.format"></a>

#### *property* format

File format of the imported mesh.

<a id="compolyx.ImportedSolidModel.has_reinforcing_objects"></a>

#### has_reinforcing_objects()

Boolean whether layup mapping objects of type reinforcing are present.

<a id="compolyx.ImportedSolidModel.import_initial_mesh"></a>

#### import_initial_mesh(unit_system_type='undefined')

Load the solid mesh without updating the layup mapping.
The mesh is not refreshed if the solid model is already up-to-date.

* **Parameters:**
  - unit_system_type: The mesh is converted to the specified unit system. For instance, `mpa` or `bin`.

<a id="compolyx.ImportedSolidModel.layup_mapping_objects"></a>

#### *property* layup_mapping_objects

Objects which define the scoping and details of each mapping step.

<a id="compolyx.ImportedSolidModel.mapping_statistics"></a>

#### mapping_statistics()

Returns the statistics of the layup mapping (number of elements, volumes, mass, etc.).

<a id="compolyx.ImportedSolidModel.refresh_external_source"></a>

#### refresh_external_source(enforce=False)

Reloads the mesh from the external source.

* **Parameters:**
  - enforce: Enforce the reloading of external data for locked object in the new .acph5 serialization format. This option should be used with care!

<a id="compolyx.ImportedSolidModel.serialize"></a>

#### serialize()

Returns the Python serialization string.

<a id="compolyx.ImportedSolidModel.unit_system"></a>

#### *property* unit_system

Unit system type of the imported mesh. Valid string options: `undefined`, `si`, `mks`, `umks`, `cgs`, `mpa`, `bft`, and `bin`.

<a id="compolyx.ImportedSolidModel.update_mapping_statistics"></a>

#### update_mapping_statistics()

Computes the mapping statistics per ply to compare the original layup with the mapped data.
Use imported_solid_model.mapping_statistics() to retrieve the results.

<a id="layupmappingobject"></a>

## [`LayupMappingObject`](#compolyx.LayupMappingObject)

<a id="compolyx.LayupMappingObject"></a>

### *class* compolyx.LayupMappingObject(graph, obj, parent=None)

Layup mapping class.

<a id="compolyx.LayupMappingObject.active"></a>

#### *property* active

Boolean for whether to this object is active.

<a id="compolyx.LayupMappingObject.all_plies"></a>

#### *property* all_plies

Boolean whether all plies of the selected scope should be mapped or a user-defined subset.

<a id="compolyx.LayupMappingObject.analysis_plies"></a>

#### *property* analysis_plies

Analysis plies of the mapping object.

<a id="compolyx.LayupMappingObject.base_element_material_handling"></a>

#### *property* base_element_material_handling

Whether the base-element material is removed or kept. Valid string options: [‘retain’, ‘remove’].

<a id="compolyx.LayupMappingObject.base_element_rosette_selection_method_type"></a>

#### *property* base_element_rosette_selection_method_type

Selection method of the coordinate systems for the base elements. Valid string options: [‘minimum_distance’, ‘minimum_distance_superposed’].

<a id="compolyx.LayupMappingObject.base_element_rosettes"></a>

#### *property* base_element_rosettes

List of rosettes used to orient the lost elements.

<a id="compolyx.LayupMappingObject.base_material"></a>

#### *property* base_material

Material of base-element if reinforcing is used.

<a id="compolyx.LayupMappingObject.delete_lost_elements"></a>

#### *property* delete_lost_elements

Boolean for whether to delete solid elements without layup data.

<a id="compolyx.LayupMappingObject.element_sets"></a>

#### *property* element_sets

Element set(s) of the solid model.

<a id="compolyx.LayupMappingObject.element_technology"></a>

#### *property* element_technology

Defines the element technology. Valid string options: [‘layered_element’, ‘reinforcing’]

<a id="compolyx.LayupMappingObject.enabled"></a>

#### *property* enabled

Whether this object is currently enabled. Solid Models are are enabled in pre and shared mode.

<a id="compolyx.LayupMappingObject.entire_solid_mesh"></a>

#### *property* entire_solid_mesh

Boolean whether the mapping object is applied to the entire solid mesh.

<a id="compolyx.LayupMappingObject.filler_material"></a>

#### *property* filler_material

Filler material if layered elements are used.

<a id="compolyx.LayupMappingObject.minimum_void_material_thickness"></a>

#### *property* minimum_void_material_thickness

Minimum thickness of the void layer.

<a id="compolyx.LayupMappingObject.reinforcing_behavior"></a>

#### *property* reinforcing_behavior

Whether the reinforcing carries load and/or tension. Valid string options: [‘tension_and_compression’, ‘tension_only’, ‘compression_only’].

<a id="compolyx.LayupMappingObject.reinforcing_stress_state"></a>

#### *property* reinforcing_stress_state

Defines which FE elements are used. Valid string options: [‘uniaxial_stress_state’, ‘plane_stress_state’, ‘plane_stress_state_with_transverse_shear_stiffness’, ‘plane_stress_state_with_transverse_shear_and_bending_stiffness’].

<a id="compolyx.LayupMappingObject.rosette_selection_method_type"></a>

#### *property* rosette_selection_method_type

Selection method of the coordinate systems for the filler/lost elements. Valid string options: [‘minimum_distance’, ‘minimum_distance_superposed’].

<a id="compolyx.LayupMappingObject.rosettes"></a>

#### *property* rosettes

List of rosettes used to orient the lost elements.

<a id="compolyx.LayupMappingObject.scale_ply_thicknesses"></a>

#### *property* scale_ply_thicknesses

Boolean for whether to scale the layer thicknesses or to add void layers to fill voids.

<a id="compolyx.LayupMappingObject.sequences"></a>

#### *property* sequences

User-defined sequence entities to map.

<a id="compolyx.LayupMappingObject.solid_element_sets"></a>

#### *property* solid_element_sets

List of element sets of the solid mesh onto which the mapping is applied to.

<a id="compolyx.LayupMappingObject.use_imported_plies"></a>

#### *property* use_imported_plies

Boolean for whether to map imported plies.

<a id="compolyx.LayupMappingObject.void_material"></a>

#### *property* void_material

Global void material.
