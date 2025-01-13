# ThinVolumeMeshParams

<a id="ansys.meshing.prime.ThinVolumeMeshParams"></a>

### *class* ansys.meshing.prime.ThinVolumeMeshParams(model=None, n_layers=None, imprint_sides=None, n_ignore_rings=None, json_data=None, \*\*kwargs)

Parameters to generate thin volume mesh. This is for internal use only.

* **Parameters:**
  **model: Model**
  : Model to create a `ThinVolumeMeshParams` object with default parameters.

  **n_layers: int, optional**
  : Number of thin volume layers to be generated.

  **imprint_sides: bool, optional**
  : Checks whether to imprint quad faces on side zonelets.

  **n_ignore_rings: int, optional**
  : Number of rings of cells at the sides to ignore when no imprint on sides. Volume fill type will be used in this buffer region at the thin volume sides to transition to thin volume mesh internally.

  **json_data: dict, optional**
  : JSON dictionary to create a `ThinVolumeMeshParams` object with provided parameters.

### Examples

```pycon
>>> thin_volume_mesh_params = prime.ThinVolumeMeshParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| [`ThinVolumeMeshParams.print_default`](ansys.meshing.prime.ThinVolumeMeshParams.print_default.md#ansys.meshing.prime.ThinVolumeMeshParams.print_default)()          | Print the default values of `ThinVolumeMeshParams` object.   |
| [`ThinVolumeMeshParams.set_default`](ansys.meshing.prime.ThinVolumeMeshParams.set_default.md#ansys.meshing.prime.ThinVolumeMeshParams.set_default)([n_layers, ...]) | Set the default values of the `ThinVolumeMeshParams` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| [`ThinVolumeMeshParams.imprint_sides`](ansys.meshing.prime.ThinVolumeMeshParams.imprint_sides.md#ansys.meshing.prime.ThinVolumeMeshParams.imprint_sides)    | Checks whether to imprint quad faces on side zonelets.                    |
| [`ThinVolumeMeshParams.n_ignore_rings`](ansys.meshing.prime.ThinVolumeMeshParams.n_ignore_rings.md#ansys.meshing.prime.ThinVolumeMeshParams.n_ignore_rings) | Number of rings of cells at the sides to ignore when no imprint on sides. |
| [`ThinVolumeMeshParams.n_layers`](ansys.meshing.prime.ThinVolumeMeshParams.n_layers.md#ansys.meshing.prime.ThinVolumeMeshParams.n_layers)                   | Number of thin volume layers to be generated.                             |

<a id="examples-using-thinvolumemeshparams"></a>

## Examples using ThinVolumeMeshParams

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a thin solid with hexahedral and prism cells.">  <div class="sphx-glr-thumbnail-title">Mesh a saddle bracket for a structural analysis</div>
</div>
* [Mesh a saddle bracket for a structural analysis](../../examples/gallery_examples/gallery/07_saddle_bracket.md#sphx-glr-examples-gallery-examples-gallery-07-saddle-bracket-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
