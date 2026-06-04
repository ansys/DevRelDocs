# MorphBCParams

<a id="ansys.meshing.prime.MorphBCParams"></a>

### *class* ansys.meshing.prime.MorphBCParams(model=None, morph_region_method=None, morphable_layers=None, morph_region_box_extension=None, json_data=None, \*\*kwargs)

MorphBCParams contains the input parameters for calculating the boundary conditions for a morphing problem.

* **Parameters:**

  **model: Model**
  : Model to create a `MorphBCParams` object with default parameters.

  **morph_region_method: BCsVolumetricModality, optional**
  : Indicate options to identify morphable regions in the input volumetric mesh.

  **morphable_layers: int, optional**
  : Number of layers around defined boundary.

  **morph_region_box_extension: float, optional**
  : Percentage extension for the volumetric box.

  **json_data: dict, optional**
  : JSON dictionary to create a `MorphBCParams` object with provided parameters.

### Examples

```pycon
>>> morph_bcparams = prime.MorphBCParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| [`MorphBCParams.print_default`](ansys.meshing.prime.MorphBCParams.print_default.md#ansys.meshing.prime.MorphBCParams.print_default)()   | Print the default values of `MorphBCParams` object.   |
| [`MorphBCParams.set_default`](ansys.meshing.prime.MorphBCParams.set_default.md#ansys.meshing.prime.MorphBCParams.set_default)([...])    | Set the default values of the `MorphBCParams` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| [`MorphBCParams.morph_region_box_extension`](ansys.meshing.prime.MorphBCParams.morph_region_box_extension.md#ansys.meshing.prime.MorphBCParams.morph_region_box_extension)   | Percentage extension for the volumetric box.                                 |
| [`MorphBCParams.morph_region_method`](ansys.meshing.prime.MorphBCParams.morph_region_method.md#ansys.meshing.prime.MorphBCParams.morph_region_method)                        | Indicate options to identify morphable regions in the input volumetric mesh. |
| [`MorphBCParams.morphable_layers`](ansys.meshing.prime.MorphBCParams.morphable_layers.md#ansys.meshing.prime.MorphBCParams.morphable_layers)                                 | Number of layers around defined boundary.                                    |
<!-- vale on -->