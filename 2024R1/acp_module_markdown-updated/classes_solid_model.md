# Solid-model classes

## [`SolidModel`](#compolyx.SolidModel)

### *class* compolyx.SolidModel(graph, obj, parent=None)

Solid Model class

#### *property* active

Solid-Model active

#### add_disable_dropoff_set_on_bottom(set)

Add set where the drop-offs on bottom surface are disabled

#### add_disable_dropoff_set_on_top(set)

Add set where the drop-offs on top surface are disabled

#### add_element_set(element_set)

Add Element Set to Solid Model

#### clear_disable_dropoff_sets_on_bottom()

Clear sets where the drop-offs on bottom are disabled

#### clear_disable_dropoff_sets_on_top()

Clear sets where the drop-offs on top are disabled

#### clear_element_sets()

Clear Element Sets of Solid Model

#### clear_generated_data()

Function clears generated solid model but keeps all definitions.

#### *property* connect_butt_joined_plies

Do not make drop-offs between butt-joined plies if set to True

#### copy_extrusion_guide(source)

Copy a Extrusion Guide

* **Parameters:**
  - source: Source object to copy
* **Returns:**
  New instance of a Extrusion Guide

#### copy_snap_to_geometry_obj(source)

Copy a Snap-To Geometry

* **Parameters:**
  - source: Source object to copy
* **Returns:**
  New instance of a Snap-To Geometry

#### create_extrusion_guide(name, edge_set=None, id='', cad_geometry=None, direction=(0.0, 0.0, 0.0), radius=None, depth=1.0, use_curvature_correction=False, active=True)

Create a new extrusion guide

* **Parameters:**
  - name : the name of the extrusion guide
  - edge_set : an edge set where this guide applies
  - id : the id of the extrusion guide
  - cad_geometry : a cad geometry object
  - direction: Extrusion direction
  - radius : distance up to which node translations due to the guide will be propagated through the mesh
    - 0.0 : only the nodes extruded from edge_set will be shifted onto the guide
  - depth :  intensity for the propagation of mesh corrections
    - 1.0  : linear decay from guide to radius
    - \>1.0 : higher reach
    - <1.0 : more local
  - use_curvature_correction : whether to use curvature correction algorithm to smooth mesh adapted to extrusion guide. Default is False

#### create_snap_to_geometry_obj(name, cad_geometry=None, oriented_selection_set=None, orientation='top', active=True, id='')

Create a new snap-to-geometry object

* **Parameters:**
  - name : the name of the object
  - id : the id of the object
  - active : pass the active-flag of the object
  - cad_geometry : a geometry to snap to
  - oriented_selection_set : oriented element set where this snap to applies
  - orientation : “top” or “bottom”

#### *property* disable_dropoff_sets_on_bottom

Elements where the drop-offs on bottom are disabled.

#### *property* disable_dropoff_sets_on_top

Elements of where the drop-offs on top are disabled.

#### *property* disable_dropoffs_on_bottom

Boolean whether to disable the drop-off elements on bottom surface.

#### *property* disable_dropoffs_on_top

Boolean whether to disable the drop-off elements on top surface.

#### *property* drop_off_type

Drop-off type. Allowed string values: [‘inside_ply’, ‘outside_ply’]

#### *property* element_sets

Element Set(s) of the solid model.

#### *property* enabled

Whether this object is currently enabled or not. Solid Models are are enabled in pre and shared mode.

#### *property* ex_type

Extrusion type. Allowed string values: [‘monolithic’, ‘analysis_ply_wise’, ‘production_ply_wise’, ‘modeling_ply_wise’, ‘sandwich_wise’, ‘specify_thickness’, ‘material_wise’, ‘user_defined’]

#### *property* extrusion_guides

Extrusion Guides

#### *property* global_drop_off_material

Global material of the drop-off elements.

#### *property* max_thickness

Maximum thickness of solid elements.

#### *property* offset_type

Offset type. Allowed string values: [‘shell_normal’, ‘surface_normal’]

#### *property* ply_group_pointers

Ply group pointers for user defined extrusion.

#### remove_element_set(element_set)

Remove Element Set from the solid model

#### reorder_extrusion_guides(source, target, option='after')

Reorders the extrusion guides

* **Parameters:**
  - source: Extrusion guide to be reordered.
  - target: Place to put the source.
  - option: Can be ‘after’ or ‘before’. Defines if the source is put before or after the target.
* **Usage:**
  ```pycon
  >>> sm.reorder_extrusion_guides(source = sm.extrusion_guides['wall'], target=sm.extrusion_guides['leading_edge'], option='after')
  ```

#### *property* snap_to_geometry_objs

Snap to Geometry objects

## [`ExtrusionGuide`](#compolyx.ExtrusionGuide)

### *class* compolyx.ExtrusionGuide(obj, parent=None)

Extrusion guide class

#### *property* active

Extrusion Guide active

#### *property* cad_geometry

Associated CADGeometry.

#### *property* depth

intensity for the propagation of mesh corrections, depth=1 leads to a linear decay from the guide to the radius, depth<1 leads to more local corrections

#### *property* direction

extrusion direction

#### *property* edge_set

Associated EdgeSet.

#### *property* enabled

Whether this object is currently enabled or not. It’s derived from the parent solid model.

#### *property* radius

radius up to which nodal guide translations are propagated through the mesh

#### *property* use_curvature_correction

whether to use curvature correction algorithm to smooth mesh adapted to extrusion guide. Default is False

## [`SnapToGeometry`](#compolyx.SnapToGeometry)

### *class* compolyx.SnapToGeometry(obj, parent)

SnapToGeometry guide class

#### *property* active

Snap-To Geometry active

#### *property* cad_geometry

Associated Geometry.

#### *property* elements

List of affected shell elements

#### *property* enabled

Whether this object is currently enabled or not. It’s derived from the parent solid model.

#### *property* orientation

Orientation. Allowed string values: [‘top’, ‘bottom’, ‘undefined’]

## [`CutOffGeometry`](#compolyx.CutOffGeometry)

### *class* compolyx.CutOffGeometry(obj, parent=None)

CutOffGeometry guide class

#### *property* active

Cut-Off Geometry active

#### *property* cad_geometry

Associated CADGeometry.

#### *property* enabled

Whether this object is currently enabled or not. It’s derived from the parent solid model.

#### *property* orientation

Orientation. Allowed string values: [‘up’, ‘down’]

#### *property* rel_merge_tolerance

Relative Merge Tolerance

## [`SolidElementSet`](#compolyx.SolidElementSet)

### *class* compolyx.SolidElementSet(graph, obj=None, parent=None)

Solid element set class
Element Set of a solid model

#### *property* element_labels

List of solid elements which are linked to this element set.

#### *property* locked

Returns true if the object is locked (nor editable, neither deletable)

#### serialize()

Serialize to Python string

#### *property* size

Number of entities

## [`ImportedSolidModel`](#compolyx.ImportedSolidModel)

### *class* compolyx.ImportedSolidModel(graph, obj, parent=None)

Imported Solid Model class

#### clear_generated_data()

Function clears generated solid model but keeps all definitions.

#### copy_layup_mapping_object(source)

Copy a Lay-up Mapping Object

* **Parameters:**
  - source: Source object to copy
* **Returns:**
  New instance of LayupMappingObject

#### create_layup_mapping_object(name='', id='', active=True, entire_solid_mesh=True, solid_element_sets=[], element_sets=None, delete_lost_elements=True, rosette_selection_method_type='minimum_distance', base_element_rosette_selection_method_type='minimum_distance', element_technology='layered_element', scale_ply_thicknesses=True, all_plies=True, use_imported_plies=False, sequences=[], rosettes=[], base_element_rosettes=[], minimum_void_material_thickness=-1.0, void_material=None, filler_material=None, base_material=None, base_element_material_handling='remove', reinforcing_stress_state='plane_stress_state_with_transverse_shear_and_bending_stiffness', reinforcing_behavior='tension_and_compression')

Create a new lay-up mapping object

* **Parameters:**
  - name: The name of the Solid Model
  - id: The id of the Solid Model
  - active : Active status of lay-up mapping object
  - entire_solid_mesh : If true, then the scope is all solid elements
  - solid_element_sets: Defines the scope of solid elements if entire_solid_mesh is False
  - element_sets: a list of Element Sets of the reference surface. Used to extract the plies.
  - filler_material : Global filler material which is assigned to the elements without any layers
  - delete_lost_elements : If enabled, then all elements which do not intersect with the lay-up are deleted.
  - rosette_selection_method_type : Defines how the coordinate systems are applied to the filler/lost elements. Used if the element technology is layered_element.
  - base_element_rosette_selection_method_type : Defines how the coordinate systems are applied to the base solid elements. Used if the element technology is reinforcing.
  - element_technology: Specifies the element technology of this mapping (layered elements or reinforcings)
  - scale_ply_thicknesses : Scale plies within layered solid element if they do not fill the entire element, else add void layers
  - all_plies : Whether all plies of the selected scope (element_sets) should be mapped or only specific sequences
  - use_imported_plies: If selected, Imported Ply objects can be used for the mapping. Else standard Modeling Plies.
  - sequences : List of Modeling Groups and/or Modeling Plies which are mapped onto the element scope
  - rosettes : List of rosettes used to orient the lost elements. Used if the element technology is layered_element.
  - base_element_rosettes : List of coordinate systems used to orient the base solid elements. Used if the element technology is reinforcing.
  - minimum_void_material_thickness : Specifies the minimum thickness of void layers. Default is equal to the minimum analysis ply thickness of the model.
  - void_material : Global void material which is assigned to layered elements that are not fully filled with ply material
  - base_material: Specify the base material of the solids if reinforcing are used
  - base_element_material_handling: Whether to remove the base material of the solids where the reinforcing intersect, or keep it.
  - reinforcing_stress_state: Specify the stress state of the reinforcing.
  - reinforcing_behavior: Select the mechanical behavior of the reinforcing.
* **Returns:**
  The created Layup Mapping Object
* **Note:**
  - Base solid elements are the solid elements of a Lay-up Mapping object of type reinforcing which are intersected with the
    reinforcing surfaces.

#### create_solid_element_set(name, id='', locked=False)

For internal use only: Creates a Solid Element Set

#### *property* enabled

Whether this object is currently enabled or not. Solid Models are are enabled in pre and shared mode.

#### *property* ext_id

Id of corresponding Mechanical Model within WB arhcive (ComponentID).

#### *property* external_file_path

The file path where the CAD geometry is loaded from.

#### *property* format

File format of the imported mesh

#### has_reinforcing_objects()

Boolean whether Lay-up Mapping Objects of type reinforcing are present.

#### import_initial_mesh()

Import the solid mesh without updating the lay-up mapping.
Nothing is done if the mesh was already loaded

#### *property* layup_mapping_objects

Objects which define the scoping and details of each mapping step.

#### mapping_statistics()

Returns the statistics of the layup mapping (number of elements, volumes, mass etc.)

#### refresh_external_source(enforce=False)

Reloads the mesh from the external source.

* **Parameters:**
  - enforce: enforce the reloading of external data for locked object in the new acph5 serialization format. This option should be used with care!

#### serialize()

Returns the Python serialization string

#### *property* unit_system

Unit system type of the imported mesh. Allowed string values are undefined, si, mks, umks, cgs, mpa, bft, bin

#### update_mapping_statistics()

Computes the mapping statistics per ply to compare the original lay-up with the mapped data.
Use imported_solid_model.mapping_statistics() to retrieve the results

## [`LayupMappingObject`](#compolyx.LayupMappingObject)

### *class* compolyx.LayupMappingObject(graph, obj, parent=None)

Layup Mapping class

#### *property* active

Boolean whether to this object is active or not.

#### *property* all_plies

Boolean whether all plies of the selected scope should be mapped or a user-defined subset.

#### *property* analysis_plies

Analysis Plies of the Mapping Object

#### *property* base_element_material_handling

Whether the base-element material is removed or kept. Allowed string values: [‘retain’, ‘remove’]

#### *property* base_element_rosette_selection_method_type

Selection method of the coordinate systems for the base elements. Allowed string values: [‘minimum_distance’, ‘minimum_distance_superposed’]

#### *property* base_element_rosettes

List of rosettes used to orient the lost elements

#### *property* base_material

Material of base-element if reinforcing is used.

#### *property* delete_lost_elements

Boolean whether to delete solid elements without layup data.

#### *property* element_sets

Element Set(s) of the solid model.

#### *property* element_technology

Defines the element technology. Allowed string values: [‘layered_element’, ‘reinforcing’]

#### *property* enabled

Whether this object is currently enabled or not. Solid Models are are enabled in pre and shared mode.

#### *property* entire_solid_mesh

Boolean whether the mapping object is applied to the entire solid mesh.

#### *property* filler_material

Filler material if layered elements are used.

#### *property* minimum_void_material_thickness

Minimum thickness of the void layer!

#### *property* reinforcing_behavior

Whether the reinforcing carries load and/or tension. Allowed string values: [‘tension_and_compression’, ‘tension_only’, ‘compression_only’]

#### *property* reinforcing_stress_state

Defines which FE elements are used. Allowed string values: [‘uniaxial_stress_state’, ‘plane_stress_state’, ‘plane_stress_state_with_transverse_shear_stiffness’, ‘plane_stress_state_with_transverse_shear_and_bending_stiffness’]

#### *property* rosette_selection_method_type

Selection method of the coordinate systems for the filler/lost elements. Allowed string values: [‘minimum_distance’, ‘minimum_distance_superposed’]

#### *property* rosettes

List of rosettes used to orient the lost elements

#### *property* scale_ply_thicknesses

Boolean whether to scale the layer thicknesses or to add void layers to fill voids.

#### *property* sequences

User-defined sequence entities to map.

#### *property* solid_element_sets

List of element sets of the solid mesh onto which the mapping is applied to

#### *property* use_imported_plies

Boolean whether to map imported plies.

#### *property* void_material

Global void material.
