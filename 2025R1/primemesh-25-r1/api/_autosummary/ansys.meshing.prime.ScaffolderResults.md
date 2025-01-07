# ScaffolderResults

<a id="ansys.meshing.prime.ScaffolderResults"></a>

### *class* ansys.meshing.prime.ScaffolderResults(model=None, n_incomplete_topo_faces=None, error_code=None, json_data=None, \*\*kwargs)

Results structure associated to scaffold operation.

* **Parameters:**
  **model: Model**
  : Model to create a `ScaffolderResults` object with default parameters.

  **n_incomplete_topo_faces: int, optional**
  : Number of topofaces failed in scaffold operation.

  **error_code: ErrorCode, optional**
  : Error code associated with scaffold operation.

  **json_data: dict, optional**
  : JSON dictionary to create a `ScaffolderResults` object with provided parameters.

### Examples

```pycon
>>> scaffolder_results = prime.ScaffolderResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| [`ScaffolderResults.print_default`](ansys.meshing.prime.ScaffolderResults.print_default.md#ansys.meshing.prime.ScaffolderResults.print_default)()   | Print the default values of `ScaffolderResults` object.   |
|-----------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| [`ScaffolderResults.set_default`](ansys.meshing.prime.ScaffolderResults.set_default.md#ansys.meshing.prime.ScaffolderResults.set_default)([...])    | Set the default values of the `ScaffolderResults` object. |

### Attributes

| [`ScaffolderResults.error_code`](ansys.meshing.prime.ScaffolderResults.error_code.md#ansys.meshing.prime.ScaffolderResults.error_code)                                        | Error code associated with scaffold operation.    |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|
| [`ScaffolderResults.n_incomplete_topo_faces`](ansys.meshing.prime.ScaffolderResults.n_incomplete_topo_faces.md#ansys.meshing.prime.ScaffolderResults.n_incomplete_topo_faces) | Number of topofaces failed in scaffold operation. |

<a id="examples-using-scaffolderresults"></a>

## Examples using ScaffolderResults

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to use topology-based connection to generate conformal surface mesh.">  <div class="sphx-glr-thumbnail-title">Mesh a mid-surfaced bracket for a structural analysis</div>
</div>
* [Mesh a mid-surfaced bracket for a structural analysis](../../examples/gallery_examples/gallery/01_bracket_scaffold.md#sphx-glr-examples-gallery-examples-gallery-01-bracket-scaffold-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a set of solder balls with mainly hexahedral elements. The solder is initially modelled as cylindrical to allow meshing using stacker and then local match morph controls are applied to recover the spherical shapes.">  <div class="sphx-glr-thumbnail-title">Mesh a set of solder balls (beta)</div>
</div>
* [Mesh a set of solder balls (beta)](../../examples/gallery_examples/gallery/11_solder_ball.md#sphx-glr-examples-gallery-examples-gallery-11-solder-ball-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
