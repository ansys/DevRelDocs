# MatchMorphParams

<a id="ansys.meshing.prime.MatchMorphParams"></a>

### *class* ansys.meshing.prime.MatchMorphParams(model=None, json_data=None, \*\*kwargs)

MatchMorphParams describes the parameters required for match morphing.

* **Parameters:**
  **model: Model**
  : Model to create a `MatchMorphParams` object with default parameters.

  **json_data: dict, optional**
  : JSON dictionary to create a `MatchMorphParams` object with provided parameters.

### Examples

```pycon
>>> match_morph_params = prime.MatchMorphParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| Name | Description |
| [`MatchMorphParams.print_default`](ansys.meshing.prime.MatchMorphParams.print_default.md#ansys.meshing.prime.MatchMorphParams.print_default)()   | Print the default values of `MatchMorphParams` object.   |
| [`MatchMorphParams.set_default`](ansys.meshing.prime.MatchMorphParams.set_default.md#ansys.meshing.prime.MatchMorphParams.set_default)()         | Set the default values of the `MatchMorphParams` object. |

<a id="examples-using-matchmorphparams"></a>

## Examples using MatchMorphParams

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to morph a structural hexahedral mesh of a turbine blade to a new deformed shape defined by a target geometry file.">  <div class="sphx-glr-thumbnail-title">Morph a hexahedral mesh of a turbine blade to a new shape</div>
</div>
* [Morph a hexahedral mesh of a turbine blade to a new shape](../../examples/gallery_examples/gallery/06_blade_morph.md#sphx-glr-examples-gallery-examples-gallery-06-blade-morph-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a set of solder balls with mainly hexahedral elements. The solder is initially modelled as cylindrical to allow meshing using stacker and then local match morph controls are applied to recover the spherical shapes.">  <div class="sphx-glr-thumbnail-title">Mesh a set of solder balls (beta)</div>
</div>
* [Mesh a set of solder balls (beta)](../../examples/gallery_examples/gallery/11_solder_ball.md#sphx-glr-examples-gallery-examples-gallery-11-solder-ball-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
