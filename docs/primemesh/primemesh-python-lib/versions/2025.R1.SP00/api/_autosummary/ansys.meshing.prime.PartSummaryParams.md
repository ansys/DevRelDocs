# PartSummaryParams

<a id="ansys.meshing.prime.PartSummaryParams"></a>

### *class* ansys.meshing.prime.PartSummaryParams(model=None, print_id=None, print_mesh=None, json_data=None, \*\*kwargs)

Parameters to control part summary results.

* **Parameters:**

  **model: Model**
  : Model to create a `PartSummaryParams` object with default parameters.

  **print_id: bool, optional**
  : Boolean to control print ids. The default is false.

  **print_mesh: bool, optional**
  : Boolean to control print mesh information. The default is true.

  **json_data: dict, optional**
  : JSON dictionary to create a `PartSummaryParams` object with provided parameters.

### Examples

```pycon
>>> part_summary_params = prime.PartSummaryParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| [`PartSummaryParams.print_default`](ansys.meshing.prime.PartSummaryParams.print_default.md#ansys.meshing.prime.PartSummaryParams.print_default)()          | Print the default values of `PartSummaryParams` object.   |
| [`PartSummaryParams.set_default`](ansys.meshing.prime.PartSummaryParams.set_default.md#ansys.meshing.prime.PartSummaryParams.set_default)([print_id, ...]) | Set the default values of the `PartSummaryParams` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------|
| [`PartSummaryParams.print_id`](ansys.meshing.prime.PartSummaryParams.print_id.md#ansys.meshing.prime.PartSummaryParams.print_id)       | Boolean to control print ids.              |
| [`PartSummaryParams.print_mesh`](ansys.meshing.prime.PartSummaryParams.print_mesh.md#ansys.meshing.prime.PartSummaryParams.print_mesh) | Boolean to control print mesh information. |

<!-- vale on -->
