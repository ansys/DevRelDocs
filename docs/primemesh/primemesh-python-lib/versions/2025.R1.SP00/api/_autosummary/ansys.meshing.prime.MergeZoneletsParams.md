# MergeZoneletsParams

<a id="ansys.meshing.prime.MergeZoneletsParams"></a>

### *class* ansys.meshing.prime.MergeZoneletsParams(model=None, merge_small_zonelets_with_neighbors=None, element_count_limit=None, json_data=None, \*\*kwargs)

Parameters to merge zonelets.

* **Parameters:**

  **model: Model**
  : Model to create a `MergeZoneletsParams` object with default parameters.

  **merge_small_zonelets_with_neighbors: bool, optional**
  : Merge zonelets with element count smaller than the given element count limit to neighboring zonelets sharing manifold face edges. Notes: Works better if zonelets are separated by region.

  **element_count_limit: int, optional**
  : Element count limit to identify small zonelets.

  **json_data: dict, optional**
  : JSON dictionary to create a `MergeZoneletsParams` object with provided parameters.

### Examples

```pycon
>>> merge_zonelets_params = prime.MergeZoneletsParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| [`MergeZoneletsParams.print_default`](ansys.meshing.prime.MergeZoneletsParams.print_default.md#ansys.meshing.prime.MergeZoneletsParams.print_default)()   | Print the default values of `MergeZoneletsParams` object.   |
| [`MergeZoneletsParams.set_default`](ansys.meshing.prime.MergeZoneletsParams.set_default.md#ansys.meshing.prime.MergeZoneletsParams.set_default)([...])    | Set the default values of the `MergeZoneletsParams` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|
| [`MergeZoneletsParams.element_count_limit`](ansys.meshing.prime.MergeZoneletsParams.element_count_limit.md#ansys.meshing.prime.MergeZoneletsParams.element_count_limit)                                                 | Element count limit to identify small zonelets.   |
| [`MergeZoneletsParams.merge_small_zonelets_with_neighbors`](ansys.meshing.prime.MergeZoneletsParams.merge_small_zonelets_with_neighbors.md#ansys.meshing.prime.MergeZoneletsParams.merge_small_zonelets_with_neighbors) | Works better if zonelets are separated by region. |
<!-- vale on -->