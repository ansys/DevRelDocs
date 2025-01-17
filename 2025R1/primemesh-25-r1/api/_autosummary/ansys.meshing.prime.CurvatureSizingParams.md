# CurvatureSizingParams

<a id="ansys.meshing.prime.CurvatureSizingParams"></a>

### *class* ansys.meshing.prime.CurvatureSizingParams(model=None, min=None, max=None, growth_rate=None, normal_angle=None, use_cad_curvature=None, json_data=None, \*\*kwargs)

Size field using curvature size control computes edge and face sizes using their size and normal angle parameters.

The curvature size control uses the normal angle parameter as the maximum allowable angle that one element edge may span.
For example, a value of 5 implies that a division will be made when the angle change along the curve is 5 degrees.
Hence, a 90 degree arc will be divided into approximately 18 segments.

* **Parameters:**
  **model: Model**
  : Model to create a `CurvatureSizingParams` object with default parameters.

  **min: float, optional**
  : Minimum size used for computing edge and face size using curavture size control.

  **max: float, optional**
  : Maximum size used for computing edge and face size using curavture size control.

  **growth_rate: float, optional**
  : Growth rate used for transitioning from one element size to neighbor element size.

  **normal_angle: float, optional**
  : Maximum allowable angle at which one element edge may span.

  **use_cad_curvature: bool, optional**
  : Option to enable use of CAD curvature for computing edge and face size.

  **json_data: dict, optional**
  : JSON dictionary to create a `CurvatureSizingParams` object with provided parameters.

### Examples

```pycon
>>> curvature_sizing_params = prime.CurvatureSizingParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| Name | Description |
| [`CurvatureSizingParams.print_default`](ansys.meshing.prime.CurvatureSizingParams.print_default.md#ansys.meshing.prime.CurvatureSizingParams.print_default)()     | Print the default values of `CurvatureSizingParams` object.   |
| [`CurvatureSizingParams.set_default`](ansys.meshing.prime.CurvatureSizingParams.set_default.md#ansys.meshing.prime.CurvatureSizingParams.set_default)([min, ...]) | Set the default values of the `CurvatureSizingParams` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| Name | Description |
| [`CurvatureSizingParams.growth_rate`](ansys.meshing.prime.CurvatureSizingParams.growth_rate.md#ansys.meshing.prime.CurvatureSizingParams.growth_rate)                   | Growth rate used for transitioning from one element size to neighbor element size.   |
| [`CurvatureSizingParams.max`](ansys.meshing.prime.CurvatureSizingParams.max.md#ansys.meshing.prime.CurvatureSizingParams.max)                                           | Maximum size used for computing edge and face size using curavture size control.     |
| [`CurvatureSizingParams.min`](ansys.meshing.prime.CurvatureSizingParams.min.md#ansys.meshing.prime.CurvatureSizingParams.min)                                           | Minimum size used for computing edge and face size using curavture size control.     |
| [`CurvatureSizingParams.normal_angle`](ansys.meshing.prime.CurvatureSizingParams.normal_angle.md#ansys.meshing.prime.CurvatureSizingParams.normal_angle)                | Maximum allowable angle at which one element edge may span.                          |
| [`CurvatureSizingParams.use_cad_curvature`](ansys.meshing.prime.CurvatureSizingParams.use_cad_curvature.md#ansys.meshing.prime.CurvatureSizingParams.use_cad_curvature) | Option to enable use of CAD curvature for computing edge and face size.              |

<a id="examples-using-curvaturesizingparams"></a>

## Examples using CurvatureSizingParams

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to generate a mesh for a generic F1 rear wing STL file model.">  <div class="sphx-glr-thumbnail-title">Mesh a generic F1 car rear wing for external aero simulation</div>
</div>
* [Mesh a generic F1 car rear wing for external aero simulation](../../examples/gallery_examples/gallery/08_lucid_generic_f1_rear_wing.md#sphx-glr-examples-gallery-examples-gallery-08-lucid-generic-f1-rear-wing-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
