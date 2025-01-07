# get_part

<a id="ansys.meshing.prime.Model.get_part"></a>

#### Model.get_part(id)

Get the part by ID.

* **Parameters:**
  **id**
  : ID of the part.
* **Returns:**
  :

  [`Part`](ansys.meshing.prime.Part.md#ansys.meshing.prime.Part)
  : Part or `None` if the given part ID doesn’t exist.
* **Return type:**
  [`Part`](ansys.meshing.prime.Part.md#ansys.meshing.prime.Part)

### Examples

```pycon
>>> from ansys.meshing.prime import Model
>>> model = client.model
>>> part = model.get_part(2)
```

<!-- !! processed by numpydoc !! -->

<a id="examples-using-model-get-part"></a>

## Examples using Model.get_part

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to morph a structural hexahedral mesh of a turbine blade to a new deformed shape defined by a target geometry file.">  <div class="sphx-glr-thumbnail-title">Morph a hexahedral mesh of a turbine blade to a new shape</div>
</div>
* [Morph a hexahedral mesh of a turbine blade to a new shape](../../examples/gallery_examples/gallery/06_blade_morph.md#sphx-glr-examples-gallery-examples-gallery-06-blade-morph-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a set of solder balls with mainly hexahedral elements. The solder is initially modelled as cylindrical to allow meshing using stacker and then local match morph controls are applied to recover the spherical shapes.">  <div class="sphx-glr-thumbnail-title">Mesh a set of solder balls (beta)</div>
</div>
* [Mesh a set of solder balls (beta)](../../examples/gallery_examples/gallery/11_solder_ball.md#sphx-glr-examples-gallery-examples-gallery-11-solder-ball-py)

<!-- thumbnail-parent-div-close --></div>
