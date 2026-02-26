# create_scene

<a id="compolyx.Model.create_scene"></a>

#### Model.create_scene(name, id=None, title='', active_set=None, projection='perspective', lighting_mode='dark', scale_factor=1.0, show_draped_fiber_directions=False, show_draped_transverse_directions=False, show_edges=False, show_fiber_directions=False, show_global_coordinate_system=True, show_legend=True, show_normals=False, show_orientations=False, show_ref_directions=False, show_selected_mesh=False, show_section_cut_plots=False, show_element_type=ObjectSectionElementTypes.automatic, show_surface=True, show_minmax=False, show_transverse_directions=False, continuous_pick_enabled=False, show_material_1_directions=False, show_mesh_silhouette=False, show_silhouette=True)

Create a new scene.

### Parameter:
  - name: Name of the scene.
  - show_deformed_mesh: Whether to show the deformed mesh.
  - show_undeformed_mesh: Whether to show the undeformed mesh.
  - scale_factor: Scale factor of the deformed mesh.
### Returns:
  New scene.
