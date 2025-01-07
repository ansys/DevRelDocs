# delete_zonelets

<a id="ansys.meshing.prime.Part.delete_zonelets"></a>

#### Part.delete_zonelets(zonelets)

Delete given face zonelets.

* **Parameters:**
  **zonelets**
  : Ids of zonelets to be deleted.
* **Returns:**
  :

  [`DeleteResults`](ansys.meshing.prime.DeleteResults.md#ansys.meshing.prime.DeleteResults)
  : Return DeleteResults.
* **Return type:**
  [`DeleteResults`](ansys.meshing.prime.DeleteResults.md#ansys.meshing.prime.DeleteResults)

### Examples

```pycon
>>> results = part.delete_zonelets(zonelets)
```

<!-- !! processed by numpydoc !! -->

<a id="examples-using-part-delete-zonelets"></a>

## Examples using Part.delete_zonelets

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a set of solder balls with mainly hexahedral elements. The solder is initially modelled as cylindrical to allow meshing using stacker and then local match morph controls are applied to recover the spherical shapes.">  <div class="sphx-glr-thumbnail-title">Mesh a set of solder balls (beta)</div>
</div>
* [Mesh a set of solder balls (beta)](../../examples/gallery_examples/gallery/11_solder_ball.md#sphx-glr-examples-gallery-examples-gallery-11-solder-ball-py)

<!-- thumbnail-parent-div-close --></div>
