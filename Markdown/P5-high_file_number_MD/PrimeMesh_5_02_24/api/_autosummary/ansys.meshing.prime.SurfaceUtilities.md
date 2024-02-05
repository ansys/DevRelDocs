<!-- vale off -->

# SurfaceUtilities

### *class* ansys.meshing.prime.SurfaceUtilities(model)

Performs various general surface utilities algorithms, such as adding thickness.

* **Parameters:**
  **model**
  : Server model in which to perform operations.

<!-- !! processed by numpydoc !! -->

### Methods

| [`SurfaceUtilities.add_thickness`](ansys.meshing.prime.SurfaceUtilities.add_thickness.md#ansys.meshing.prime.SurfaceUtilities.add_thickness)(zonelets, params)                                                                        | Add thicknesss to input face zonelets.                                                                          |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| [`SurfaceUtilities.copy_face_zonelets`](ansys.meshing.prime.SurfaceUtilities.copy_face_zonelets.md#ansys.meshing.prime.SurfaceUtilities.copy_face_zonelets)(...)                                                                      | Copy face zonelets.                                                                                             |
| [`SurfaceUtilities.create_boi`](ansys.meshing.prime.SurfaceUtilities.create_boi.md#ansys.meshing.prime.SurfaceUtilities.create_boi)(...)                                                                                              | Create BOI to input face zonelets.                                                                              |
| [`SurfaceUtilities.create_cap_on_face_zonelets`](ansys.meshing.prime.SurfaceUtilities.create_cap_on_face_zonelets.md#ansys.meshing.prime.SurfaceUtilities.create_cap_on_face_zonelets)(...)                                           | Create caps on the given face zonelets.                                                                         |
| [`SurfaceUtilities.create_contact_patch`](ansys.meshing.prime.SurfaceUtilities.create_contact_patch.md#ansys.meshing.prime.SurfaceUtilities.create_contact_patch)(...)                                                                | Create a contact patch by offsetting the target zonelets.                                                       |
| [`SurfaceUtilities.delete_unwetted_surfaces`](ansys.meshing.prime.SurfaceUtilities.delete_unwetted_surfaces.md#ansys.meshing.prime.SurfaceUtilities.delete_unwetted_surfaces)(...)                                                    | Delete unwetted surfaces based on material point list.                                                          |
| [`SurfaceUtilities.fill_holes_at_plane`](ansys.meshing.prime.SurfaceUtilities.fill_holes_at_plane.md#ansys.meshing.prime.SurfaceUtilities.fill_holes_at_plane)(...)                                                                   | Fill holes in given face zonelets at given plane.                                                               |
| [`SurfaceUtilities.fix_invalid_normal_nodes_of_face_zonelets`](ansys.meshing.prime.SurfaceUtilities.fix_invalid_normal_nodes_of_face_zonelets.md#ansys.meshing.prime.SurfaceUtilities.fix_invalid_normal_nodes_of_face_zonelets)(...) | Create nuggets to fix invalid normal at nodes of the given face zonelets.                                       |
| [`SurfaceUtilities.get_bounding_box_of_zonelets`](ansys.meshing.prime.SurfaceUtilities.get_bounding_box_of_zonelets.md#ansys.meshing.prime.SurfaceUtilities.get_bounding_box_of_zonelets)(...)                                        | Gets bounding box of given zonelets.                                                                            |
| [`SurfaceUtilities.refine_at_contacts`](ansys.meshing.prime.SurfaceUtilities.refine_at_contacts.md#ansys.meshing.prime.SurfaceUtilities.refine_at_contacts)(...)                                                                      | Refine face elements in contact with other parts.                                                               |
| [`SurfaceUtilities.resolve_intersections`](ansys.meshing.prime.SurfaceUtilities.resolve_intersections.md#ansys.meshing.prime.SurfaceUtilities.resolve_intersections)(...)                                                             | Resolve facezonelets intersections.                                                                             |
| [`SurfaceUtilities.smooth_dihedral_face_nodes`](ansys.meshing.prime.SurfaceUtilities.smooth_dihedral_face_nodes.md#ansys.meshing.prime.SurfaceUtilities.smooth_dihedral_face_nodes)(...)                                              | Performs a smoothing operation to eliminate sharp corners at locations where the input face zonelets intersect. |
| [`SurfaceUtilities.stretch_free_boundaries`](ansys.meshing.prime.SurfaceUtilities.stretch_free_boundaries.md#ansys.meshing.prime.SurfaceUtilities.stretch_free_boundaries)(...)                                                       | Stretches free boundaries of each zonelet.                                                                      |
<!-- vale on -->
