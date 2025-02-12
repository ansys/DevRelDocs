<!-- vale off -->

<a id="surfacesearch"></a>

# SurfaceSearch

<a id="ansys.meshing.prime.SurfaceSearch"></a>

### *class* ansys.meshing.prime.SurfaceSearch(model)

SurfaceSearch allows you to check surface mesh quality.

SurfaceSearch performs surface mesh quality check based on different face quality measures.

* **Parameters:**
  **model**
  : Server model to create SurfaceSearch object.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| [`SurfaceSearch.check_face_deviation`](ansys.meshing.prime.SurfaceSearch.check_face_deviation.md#ansys.meshing.prime.SurfaceSearch.check_face_deviation)(...)                                                    | Gets information regarding the number of faces with a deviation higher than the tolerance.                |
| [`SurfaceSearch.get_search_info_by_register_id`](ansys.meshing.prime.SurfaceSearch.get_search_info_by_register_id.md#ansys.meshing.prime.SurfaceSearch.get_search_info_by_register_id)(...)                      | Gets search information regarding registered face elements of provided zonelets using a register id.      |
| [`SurfaceSearch.get_surface_diagnostic_summary`](ansys.meshing.prime.SurfaceSearch.get_surface_diagnostic_summary.md#ansys.meshing.prime.SurfaceSearch.get_surface_diagnostic_summary)(params)                   | Gets the surface diagnostic summary.                                                                      |
| [`SurfaceSearch.get_surface_quality_summary`](ansys.meshing.prime.SurfaceSearch.get_surface_quality_summary.md#ansys.meshing.prime.SurfaceSearch.get_surface_quality_summary)(params)                            | Gets the surface quality summary.                                                                         |
| [`SurfaceSearch.search_zonelets_by_folds`](ansys.meshing.prime.SurfaceSearch.search_zonelets_by_folds.md#ansys.meshing.prime.SurfaceSearch.search_zonelets_by_folds)(...)                                        | Search face zonelets to identify folds.                                                                   |
| [`SurfaceSearch.search_zonelets_by_invalid_normals`](ansys.meshing.prime.SurfaceSearch.search_zonelets_by_invalid_normals.md#ansys.meshing.prime.SurfaceSearch.search_zonelets_by_invalid_normals)(...)          | Search face zonelets to identify faces with invalid normals.                                              |
| [`SurfaceSearch.search_zonelets_by_quality`](ansys.meshing.prime.SurfaceSearch.search_zonelets_by_quality.md#ansys.meshing.prime.SurfaceSearch.search_zonelets_by_quality)(...)                                  | Search face zonelets with the provided quality parameters and applies register id on face elements found. |
| [`SurfaceSearch.search_zonelets_by_self_intersections`](ansys.meshing.prime.SurfaceSearch.search_zonelets_by_self_intersections.md#ansys.meshing.prime.SurfaceSearch.search_zonelets_by_self_intersections)(...) | Search face zonelets to identify face elements intersecting with each other.                              |
| [`SurfaceSearch.search_zonelets_by_spikes`](ansys.meshing.prime.SurfaceSearch.search_zonelets_by_spikes.md#ansys.meshing.prime.SurfaceSearch.search_zonelets_by_spikes)(...)                                     | Search face zonelets to identify spikes.                                                                  |
| [`SurfaceSearch.search_zonelets_by_thin_strips`](ansys.meshing.prime.SurfaceSearch.search_zonelets_by_thin_strips.md#ansys.meshing.prime.SurfaceSearch.search_zonelets_by_thin_strips)(...)                      | Search face zonelets to identify face element of thin strips(single layer of triangles between features). |

<a id="examples-using-surfacesearch"></a>

## Examples using SurfaceSearch

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to wrap a toy car for a flow analysis.">  <div class="sphx-glr-thumbnail-title">Wrap a toy car for a flow analysis</div>
</div>
* [Wrap a toy car for a flow analysis](../../examples/gallery_examples/gallery/04_lucid_toy_car.md#sphx-glr-examples-gallery-examples-gallery-04-lucid-toy-car-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to generate a mesh for a generic F1 rear wing STL file model.">  <div class="sphx-glr-thumbnail-title">Mesh a generic F1 car rear wing for external aero simulation</div>
</div>
* [Mesh a generic F1 car rear wing for external aero simulation](../../examples/gallery_examples/gallery/08_lucid_generic_f1_rear_wing.md#sphx-glr-examples-gallery-examples-gallery-08-lucid-generic-f1-rear-wing-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
