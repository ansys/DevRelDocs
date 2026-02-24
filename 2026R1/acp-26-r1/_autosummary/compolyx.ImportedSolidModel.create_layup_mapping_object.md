# create_layup_mapping_object

<a id="compolyx.ImportedSolidModel.create_layup_mapping_object"></a>

#### ImportedSolidModel.create_layup_mapping_object(name='', id='', active=True, entire_solid_mesh=True, solid_element_sets=[], element_sets=None, delete_lost_elements=True, rosette_selection_method_type='minimum_distance', base_element_rosette_selection_method_type='minimum_distance', element_technology='layered_element', scale_ply_thicknesses=True, all_plies=True, use_imported_plies=False, sequences=[], rosettes=[], base_element_rosettes=[], minimum_void_material_thickness=-1.0, void_material=None, filler_material=None, base_material=None, base_element_material_handling='remove', reinforcing_stress_state='plane_stress_state_with_transverse_shear_and_bending_stiffness', reinforcing_behavior='tension_and_compression')

Create a new layup mapping object.

* **Parameters:**
  - name: The name of the solid model.
  - id: The ID of the solid model.
  - active : Active status of layup mapping object.
  - entire_solid_mesh : If true, then the scope is all solid elements.
  - solid_element_sets: Defines the scope of solid elements if entire_solid_mesh is ‘False’.
  - element_sets: a list of element sets of the reference surface. Used to extract the plies.
  - filler_material : Global filler material which is assigned to the elements without any layers.
  - delete_lost_elements : If enabled, then all elements which do not intersect with the layup are deleted.
  - rosette_selection_method_type : Defines how the coordinate systems are applied to the filler/lost elements. Used if the element technology is layered_element.
  - base_element_rosette_selection_method_type : Defines how the coordinate systems are applied to the base solid elements. Used if the element technology is reinforcing.
  - element_technology: Specifies the element technology of this mapping (layered elements or reinforcings).
  - scale_ply_thicknesses : Scale plies within layered solid element if they do not fill the entire element, else add void layers.
  - all_plies : Whether all plies of the selected scope (element_sets) should be mapped or only specific sequences.
  - use_imported_plies: If selected, imported ply objects can be used for the mapping. Else standard modeling plies.
  - sequences : List of Modeling Groups and/or modeling plies which are mapped onto the element scope.
  - rosettes : List of rosettes used to orient the lost elements. Used if the element technology is layered_element.
  - base_element_rosettes : List of coordinate systems used to orient the base solid elements. Used if the element technology is reinforcing.
  - minimum_void_material_thickness : Specifies the minimum thickness of void layers. Default is equal to the minimum analysis ply thickness of the model.
  - void_material : Global void material which is assigned to layered elements that are not fully filled with ply material.
  - base_material: Specify the base material of the solids if reinforcing are used.
  - base_element_material_handling: Whether to remove the base material of the solids where the reinforcing intersect, or keep it.
  - reinforcing_stress_state: Specify the stress state of the reinforcing.
  - reinforcing_behavior: Select the mechanical behavior of the reinforcing.
* **Returns:**
  The created layup mapping object.
* **Note:**
  - Base solid elements are the solid elements of a Lay-up Mapping object of type reinforcing which are intersected with the
    reinforcing surfaces.
