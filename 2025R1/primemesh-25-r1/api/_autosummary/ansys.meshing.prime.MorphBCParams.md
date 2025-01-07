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

| [`MorphBCParams.print_default`](ansys.meshing.prime.MorphBCParams.print_default.md#ansys.meshing.prime.MorphBCParams.print_default)()   | Print the default values of `MorphBCParams` object.   |
|-----------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| [`MorphBCParams.set_default`](ansys.meshing.prime.MorphBCParams.set_default.md#ansys.meshing.prime.MorphBCParams.set_default)([...])    | Set the default values of the `MorphBCParams` object. |

### Attributes

| [`MorphBCParams.morph_region_box_extension`](ansys.meshing.prime.MorphBCParams.morph_region_box_extension.md#ansys.meshing.prime.MorphBCParams.morph_region_box_extension)   | Percentage extension for the volumetric box.                                 |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| [`MorphBCParams.morph_region_method`](ansys.meshing.prime.MorphBCParams.morph_region_method.md#ansys.meshing.prime.MorphBCParams.morph_region_method)                        | Indicate options to identify morphable regions in the input volumetric mesh. |
| [`MorphBCParams.morphable_layers`](ansys.meshing.prime.MorphBCParams.morphable_layers.md#ansys.meshing.prime.MorphBCParams.morphable_layers)                                 | Number of layers around defined boundary.                                    |

<a id="examples-using-morphbcparams"></a>

## Examples using MorphBCParams

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to morph a structural hexahedral mesh of a turbine blade to a new deformed shape defined by a target geometry file.">  <div class="sphx-glr-thumbnail-title">Morph a hexahedral mesh of a turbine blade to a new shape</div>
</div>
* [Morph a hexahedral mesh of a turbine blade to a new shape](../../examples/gallery_examples/gallery/06_blade_morph.md#sphx-glr-examples-gallery-examples-gallery-06-blade-morph-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a set of solder balls with mainly hexahedral elements. The solder is initially modelled as cylindrical to allow meshing using stacker and then local match morph controls are applied to recover the spherical shapes.">  <div class="sphx-glr-thumbnail-title">Mesh a set of solder balls (beta)</div>
</div>
* [Mesh a set of solder balls (beta)](../../examples/gallery_examples/gallery/11_solder_ball.md#sphx-glr-examples-gallery-examples-gallery-11-solder-ball-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
