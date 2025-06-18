# create_section_cut

<a id="compolyx.Model.create_section_cut"></a>

#### Model.create_section_cut(name, id=None, active=True, origin=(0.0, 0.0, 0.0), normal=(0.0, 0.0, 1.0), in_plane_reference_direction1=(1.0, 0.0, 0.0), scale_factor=1.0, core_scale_factor=1.0, intersection_type='normal_to_surface', section_cut_type='modeling_ply_wise', extrusion_type='wire_frame', use_default_tolerance=True, tolerance=0.0, use_default_lut_settings=True, search_radius=0.0, number_of_interpolation_points=1, scope_entire_model=True, scope_element_sets=(), locked=False)

Creates a new section cut.

* **Parameters:**
  - name: The name of the section cut.
  - id: The ID of the section cut.
  - active: Whether the section cut is active.
  - origin: Origin of the section cut plane.
  - normal: Normal of the section cut plane.
  - in_plane_reference_direction1: Local x-direction of the section cut.
  - scale_factor: Scale factor for the thicknesses.
  - core_scale_factor: Scale factor for core materials.
  - intersection_type: Intersection type for the wireframe section cut.
  - section_cut_type: Ply resolution.
  - extrusion_type: Type of representation and extrusion.
  - use_default_tolerance: Whether to use the default tolerance. Default is 0.1% of the averaged element size.
  - tolerance: Tolerance used to generate the surface section cut.
  - use_default_lut_settings: Use default interpolation properties for the sweep based extrusion.
  - search_radius: Search radius of the interpolation algorithm.
  - number_of_interpolation_points: Number of points of the interpolation algorithm.
  - scope_entire_model: Whether to scope the section cut to the entire model, or only selected element sets.
  - scope_element_sets: Element sets to which the section cut is scoped, if scope_entire_model=False.

  * **Return:**
    The new section cut object.
