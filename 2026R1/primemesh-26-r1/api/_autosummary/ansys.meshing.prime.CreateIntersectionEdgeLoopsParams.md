# CreateIntersectionEdgeLoopsParams

<a id="ansys.meshing.prime.CreateIntersectionEdgeLoopsParams"></a>

### *class* ansys.meshing.prime.CreateIntersectionEdgeLoopsParams(model=None, label_name=None, json_data=None, \*\*kwargs)

Parameters used to calculate edge loops created by intersection of two groups of face zonelets.

* **Parameters:**

  **model: Model**
  : Model to create a `CreateIntersectionEdgeLoopsParams` object with default parameters.

  **label_name: str, optional**
  : Label name to be assigned to extracted features.

  **json_data: dict, optional**
  : JSON dictionary to create a `CreateIntersectionEdgeLoopsParams` object with provided parameters.

### Examples

```pycon
>>> create_intersection_edge_loops_params = prime.CreateIntersectionEdgeLoopsParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| [`CreateIntersectionEdgeLoopsParams.print_default`](ansys.meshing.prime.CreateIntersectionEdgeLoopsParams.print_default.md#ansys.meshing.prime.CreateIntersectionEdgeLoopsParams.print_default)()   | Print the default values of `CreateIntersectionEdgeLoopsParams` object.   |
| [`CreateIntersectionEdgeLoopsParams.set_default`](ansys.meshing.prime.CreateIntersectionEdgeLoopsParams.set_default.md#ansys.meshing.prime.CreateIntersectionEdgeLoopsParams.set_default)([...])    | Set the default values of the `CreateIntersectionEdgeLoopsParams` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
| [`CreateIntersectionEdgeLoopsParams.label_name`](ansys.meshing.prime.CreateIntersectionEdgeLoopsParams.label_name.md#ansys.meshing.prime.CreateIntersectionEdgeLoopsParams.label_name)   | Label name to be assigned to extracted features.   |
<!-- vale on -->