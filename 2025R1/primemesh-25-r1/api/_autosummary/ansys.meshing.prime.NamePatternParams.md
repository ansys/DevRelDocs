# NamePatternParams

<a id="ansys.meshing.prime.NamePatternParams"></a>

### *class* ansys.meshing.prime.NamePatternParams(model=None, json_data=None, \*\*kwargs)

Parameters to be used to match name pattern with names.

* **Parameters:**
  **model: Model**
  : Model to create a `NamePatternParams` object with default parameters.

  **json_data: dict, optional**
  : JSON dictionary to create a `NamePatternParams` object with provided parameters.

### Examples

```pycon
>>> name_pattern_params = prime.NamePatternParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| [`NamePatternParams.print_default`](ansys.meshing.prime.NamePatternParams.print_default.md#ansys.meshing.prime.NamePatternParams.print_default)()   | Print the default values of `NamePatternParams` object.   |
|-----------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| [`NamePatternParams.set_default`](ansys.meshing.prime.NamePatternParams.set_default.md#ansys.meshing.prime.NamePatternParams.set_default)()         | Set the default values of the `NamePatternParams` object. |

<a id="examples-using-namepatternparams"></a>

## Examples using NamePatternParams

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a thin solid with hexahedral and prism cells.">  <div class="sphx-glr-thumbnail-title">Mesh a saddle bracket for a structural analysis</div>
</div>
* [Mesh a saddle bracket for a structural analysis](../../examples/gallery_examples/gallery/07_saddle_bracket.md#sphx-glr-examples-gallery-examples-gallery-07-saddle-bracket-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to create a contact patch for use with wrapping to avoid meshing into a narrow contact region between two objects.">  <div class="sphx-glr-thumbnail-title">Create a contact patch for wrapping between a wheel and ground interface</div>
</div>
* [Create a contact patch for wrapping between a wheel and ground interface](../../examples/gallery_examples/gallery/10_wheel_ground_contact_patch.md#sphx-glr-examples-gallery-examples-gallery-10-wheel-ground-contact-patch-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a set of solder balls with mainly hexahedral elements. The solder is initially modelled as cylindrical to allow meshing using stacker and then local match morph controls are applied to recover the spherical shapes.">  <div class="sphx-glr-thumbnail-title">Mesh a set of solder balls (beta)</div>
</div>
* [Mesh a set of solder balls (beta)](../../examples/gallery_examples/gallery/11_solder_ball.md#sphx-glr-examples-gallery-examples-gallery-11-solder-ball-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
