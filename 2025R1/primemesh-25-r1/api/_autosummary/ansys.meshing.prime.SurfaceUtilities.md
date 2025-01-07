# SurfaceUtilities

<a id="ansys.meshing.prime.SurfaceUtilities"></a>

### *class* ansys.meshing.prime.SurfaceUtilities(model)

Performs various general surface utilities algorithms.

For example, copy zonelets, resolve surface intersections.

* **Parameters:**
  **model**
  : Server model to create SurfaceUtilities object.

<!-- !! processed by numpydoc !! -->

### Methods

| [`SurfaceUtilities.add_thickness`](ansys.meshing.prime.SurfaceUtilities.add_thickness.md#ansys.meshing.prime.SurfaceUtilities.add_thickness)(zonelets, params)                                                                        | Add thicknesss to input face zonelets.                                                                         |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|
| [`SurfaceUtilities.copy_face_zonelets`](ansys.meshing.prime.SurfaceUtilities.copy_face_zonelets.md#ansys.meshing.prime.SurfaceUtilities.copy_face_zonelets)(...)                                                                      | Copy face zonelets.                                                                                            |
| [`SurfaceUtilities.create_boi`](ansys.meshing.prime.SurfaceUtilities.create_boi.md#ansys.meshing.prime.SurfaceUtilities.create_boi)(...)                                                                                              | Create BOI to input face zonelets.                                                                             |
| [`SurfaceUtilities.create_cap_on_face_zonelets`](ansys.meshing.prime.SurfaceUtilities.create_cap_on_face_zonelets.md#ansys.meshing.prime.SurfaceUtilities.create_cap_on_face_zonelets)(...)                                           | Create caps on the given face zonelets.                                                                        |
| [`SurfaceUtilities.create_contact_patch`](ansys.meshing.prime.SurfaceUtilities.create_contact_patch.md#ansys.meshing.prime.SurfaceUtilities.create_contact_patch)(...)                                                                | Create a contact patch by offsetting the target zonelets.                                                      |
| [`SurfaceUtilities.delete_unwetted_surfaces`](ansys.meshing.prime.SurfaceUtilities.delete_unwetted_surfaces.md#ansys.meshing.prime.SurfaceUtilities.delete_unwetted_surfaces)(...)                                                    | Delete unwetted surfaces based on material point list.                                                         |
| [`SurfaceUtilities.fill_holes_at_plane`](ansys.meshing.prime.SurfaceUtilities.fill_holes_at_plane.md#ansys.meshing.prime.SurfaceUtilities.fill_holes_at_plane)(...)                                                                   | Fill holes in given face zonelets at given plane.                                                              |
| [`SurfaceUtilities.fix_invalid_normal_nodes_of_face_zonelets`](ansys.meshing.prime.SurfaceUtilities.fix_invalid_normal_nodes_of_face_zonelets.md#ansys.meshing.prime.SurfaceUtilities.fix_invalid_normal_nodes_of_face_zonelets)(...) | Create nuggets to fix invalid normal at nodes of the given face zonelets.                                      |
| [`SurfaceUtilities.get_bounding_box_of_zonelets`](ansys.meshing.prime.SurfaceUtilities.get_bounding_box_of_zonelets.md#ansys.meshing.prime.SurfaceUtilities.get_bounding_box_of_zonelets)(...)                                        | Get bounding box of given zonelets.                                                                            |
| [`SurfaceUtilities.project_topo_faces_on_geometry`](ansys.meshing.prime.SurfaceUtilities.project_topo_faces_on_geometry.md#ansys.meshing.prime.SurfaceUtilities.project_topo_faces_on_geometry)(...)                                  | Project nodes of given topofaces on geometry associated to those topofaces.                                    |
| [`SurfaceUtilities.refine_at_contacts`](ansys.meshing.prime.SurfaceUtilities.refine_at_contacts.md#ansys.meshing.prime.SurfaceUtilities.refine_at_contacts)(...)                                                                      | Refine face elements in contact with other parts.                                                              |
| [`SurfaceUtilities.resolve_intersections`](ansys.meshing.prime.SurfaceUtilities.resolve_intersections.md#ansys.meshing.prime.SurfaceUtilities.resolve_intersections)(...)                                                             | Resolve facezonelets intersections.                                                                            |
| [`SurfaceUtilities.smooth_dihedral_face_nodes`](ansys.meshing.prime.SurfaceUtilities.smooth_dihedral_face_nodes.md#ansys.meshing.prime.SurfaceUtilities.smooth_dihedral_face_nodes)(...)                                              | Perform a smoothing operation to eliminate sharp corners at locations where the input face zonelets intersect. |
| [`SurfaceUtilities.stretch_free_boundaries`](ansys.meshing.prime.SurfaceUtilities.stretch_free_boundaries.md#ansys.meshing.prime.SurfaceUtilities.stretch_free_boundaries)(...)                                                       | Stretch free boundaries of each zonelet.                                                                       |
| [`SurfaceUtilities.triangulate_face_zonelets`](ansys.meshing.prime.SurfaceUtilities.triangulate_face_zonelets.md#ansys.meshing.prime.SurfaceUtilities.triangulate_face_zonelets)(...)                                                 | Split faces in zonelets to get triangular faces.                                                               |

<a id="examples-using-surfaceutilities"></a>

## Examples using SurfaceUtilities

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to create a contact patch for use with wrapping to avoid meshing into a narrow contact region between two objects.">  <div class="sphx-glr-thumbnail-title">Create a contact patch for wrapping between a wheel and ground interface</div>
</div>
* [Create a contact patch for wrapping between a wheel and ground interface](../../examples/gallery_examples/gallery/10_wheel_ground_contact_patch.md#sphx-glr-examples-gallery-examples-gallery-10-wheel-ground-contact-patch-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a set of solder balls with mainly hexahedral elements. The solder is initially modelled as cylindrical to allow meshing using stacker and then local match morph controls are applied to recover the spherical shapes.">  <div class="sphx-glr-thumbnail-title">Mesh a set of solder balls (beta)</div>
</div>
* [Mesh a set of solder balls (beta)](../../examples/gallery_examples/gallery/11_solder_ball.md#sphx-glr-examples-gallery-examples-gallery-11-solder-ball-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
