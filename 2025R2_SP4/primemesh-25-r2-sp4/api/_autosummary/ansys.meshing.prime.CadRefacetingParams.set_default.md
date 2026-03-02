# set_default

<a id="ansys.meshing.prime.CadRefacetingParams.set_default"></a>

#### *static* CadRefacetingParams.set_default(cad_faceter=None, faceting_resolution=None, custom_surface_deviation_tolerance=None, custom_normal_angle_tolerance=None, max_edge_size_limit=None, max_edge_size=None)

Set the default values of the `CadRefacetingParams` object.

* **Parameters:**

  **cad_faceter: CadFaceter, optional**
  : Specify the available choices for faceter. The available option is Parasolid. (Note: ACIS faceter is being deprecated from 25R1).

  **faceting_resolution: CadRefacetingResolution, optional**
  : Set the faceting resolution.

  **custom_surface_deviation_tolerance: float, optional**
  : Set custom tolerance for surface deviation in specified length unit.

  **custom_normal_angle_tolerance: float, optional**
  : Set custom tolerance for normal angle in degree.

  **max_edge_size_limit: CadRefacetingMaxEdgeSizeLimit, optional**
  : Specify maximum edge size limit for faceting.

  **max_edge_size: float, optional**
  : Set maximum edge size of the facets.

<!-- !! processed by numpydoc !! -->
