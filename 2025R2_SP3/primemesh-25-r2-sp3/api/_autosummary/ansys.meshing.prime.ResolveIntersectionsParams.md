# ResolveIntersectionsParams

<a id="ansys.meshing.prime.ResolveIntersectionsParams"></a>

### *class* ansys.meshing.prime.ResolveIntersectionsParams(model=None, number_of_threads=None, json_data=None, \*\*kwargs)

ResolveIntersectionsParams define parameters for resolve intersections.

* **Parameters:**

  **model: Model**
  : Model to create a `ResolveIntersectionsParams` object with default parameters.

  **number_of_threads: int, optional**
  : Number of threads for resolve intersections multithreaded operation.

  **json_data: dict, optional**
  : JSON dictionary to create a `ResolveIntersectionsParams` object with provided parameters.

### Examples

```pycon
>>> resolve_intersections_params = prime.ResolveIntersectionsParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| [`ResolveIntersectionsParams.print_default`](ansys.meshing.prime.ResolveIntersectionsParams.print_default.md#ansys.meshing.prime.ResolveIntersectionsParams.print_default)()   | Print the default values of `ResolveIntersectionsParams` object.   |
| [`ResolveIntersectionsParams.set_default`](ansys.meshing.prime.ResolveIntersectionsParams.set_default.md#ansys.meshing.prime.ResolveIntersectionsParams.set_default)([...])    | Set the default values of the `ResolveIntersectionsParams` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`ResolveIntersectionsParams.number_of_threads`](ansys.meshing.prime.ResolveIntersectionsParams.number_of_threads.md#ansys.meshing.prime.ResolveIntersectionsParams.number_of_threads)   | Number of threads for resolve intersections multithreaded operation.   |
<!-- vale on -->