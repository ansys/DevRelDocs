# get_part_by_name

<a id="ansys.meshing.prime.Model.get_part_by_name"></a>

#### Model.get_part_by_name(name)

Get the part by name.

* **Parameters:**
  **name**
  : Name of the part.
* **Returns:**
  :

  [`Part`](ansys.meshing.prime.Part.md#ansys.meshing.prime.Part)
  : Part or `None` if the given part name doesn’t exist.
* **Return type:**
  [`Part`](ansys.meshing.prime.Part.md#ansys.meshing.prime.Part)

### Examples

```pycon
>>> from ansys.meshing.prime import Model
>>> model = client.model
>>> part = model.get_part_by_name("part.1")
```

<!-- !! processed by numpydoc !! -->

<a id="examples-using-model-get-part-by-name"></a>

## Examples using Model.get_part_by_name

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example shows how mesh and geometry formats are converted during import and export.">  <div class="sphx-glr-thumbnail-title">Convert data when importing and exporting mesh and CAD formats</div>
</div>
* [Convert data when importing and exporting mesh and CAD formats](../../examples/gallery_examples/gallery/00_lucid_file_IO.md#sphx-glr-examples-gallery-examples-gallery-00-lucid-file-io-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to use topology-based connection to generate conformal surface mesh.">  <div class="sphx-glr-thumbnail-title">Mesh a mid-surfaced bracket for a structural analysis</div>
</div>
* [Mesh a mid-surfaced bracket for a structural analysis](../../examples/gallery_examples/gallery/01_bracket_scaffold.md#sphx-glr-examples-gallery-examples-gallery-01-bracket-scaffold-py)

<!-- thumbnail-parent-div-close --></div>
