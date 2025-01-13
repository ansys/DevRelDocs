# CadRefacetingParams

<a id="ansys.meshing.prime.CadRefacetingParams"></a>

### *class* ansys.meshing.prime.CadRefacetingParams(model=None, cad_faceter=None, faceting_resolution=None, custom_surface_deviation_tolerance=None, custom_normal_angle_tolerance=None, max_edge_size_limit=None, max_edge_size=None, json_data=None, \*\*kwargs)

Parameters to refacet CAD during import.

* **Parameters:**
  **model: Model**
  : Model to create a `CadRefacetingParams` object with default parameters.

  **cad_faceter: CadFaceter, optional**
  : Specify the available choices for faceter. The available option is Parasolid.
    Note: ACIS faceter is being deprecated from 2025R1.

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

  **json_data: dict, optional**
  : JSON dictionary to create a `CadRefacetingParams` object with provided parameters.

### Examples

```pycon
>>> cad_refaceting_params = prime.CadRefacetingParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| [`CadRefacetingParams.print_default`](ansys.meshing.prime.CadRefacetingParams.print_default.md#ansys.meshing.prime.CadRefacetingParams.print_default)()   | Print the default values of `CadRefacetingParams` object.   |
| [`CadRefacetingParams.set_default`](ansys.meshing.prime.CadRefacetingParams.set_default.md#ansys.meshing.prime.CadRefacetingParams.set_default)([...])    | Set the default values of the `CadRefacetingParams` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|
| [`CadRefacetingParams.cad_faceter`](ansys.meshing.prime.CadRefacetingParams.cad_faceter.md#ansys.meshing.prime.CadRefacetingParams.cad_faceter)                                                                      | Specify the available choices for faceter.                           |
| [`CadRefacetingParams.custom_normal_angle_tolerance`](ansys.meshing.prime.CadRefacetingParams.custom_normal_angle_tolerance.md#ansys.meshing.prime.CadRefacetingParams.custom_normal_angle_tolerance)                | Set custom tolerance for normal angle in degree.                     |
| [`CadRefacetingParams.custom_surface_deviation_tolerance`](ansys.meshing.prime.CadRefacetingParams.custom_surface_deviation_tolerance.md#ansys.meshing.prime.CadRefacetingParams.custom_surface_deviation_tolerance) | Set custom tolerance for surface deviation in specified length unit. |
| [`CadRefacetingParams.faceting_resolution`](ansys.meshing.prime.CadRefacetingParams.faceting_resolution.md#ansys.meshing.prime.CadRefacetingParams.faceting_resolution)                                              | Set the faceting resolution.                                         |
| [`CadRefacetingParams.max_edge_size`](ansys.meshing.prime.CadRefacetingParams.max_edge_size.md#ansys.meshing.prime.CadRefacetingParams.max_edge_size)                                                                | Set maximum edge size of the facets.                                 |
| [`CadRefacetingParams.max_edge_size_limit`](ansys.meshing.prime.CadRefacetingParams.max_edge_size_limit.md#ansys.meshing.prime.CadRefacetingParams.max_edge_size_limit)                                              | Specify maximum edge size limit for faceting.                        |

<a id="examples-using-cadrefacetingparams"></a>

## Examples using CadRefacetingParams

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a set of solder balls with mainly hexahedral elements. The solder is initially modelled as cylindrical to allow meshing using stacker and then local match morph controls are applied to recover the spherical shapes.">  <div class="sphx-glr-thumbnail-title">Mesh a set of solder balls (beta)</div>
</div>
* [Mesh a set of solder balls (beta)](../../examples/gallery_examples/gallery/11_solder_ball.md#sphx-glr-examples-gallery-examples-gallery-11-solder-ball-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
