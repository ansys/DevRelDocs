# ResolveIntersectionResult

<a id="ansys.meshing.prime.ResolveIntersectionResult"></a>

### *class* ansys.meshing.prime.ResolveIntersectionResult(model=None, error_code=None, json_data=None, \*\*kwargs)

Result structure associated with resolve intersections operation.

* **Parameters:**

  **model: Model**
  : Model to create a `ResolveIntersectionResult` object with default parameters.

  **error_code: ErrorCode, optional**
  : Errror code associated with a resolve intersections operation.

  **json_data: dict, optional**
  : JSON dictionary to create a `ResolveIntersectionResult` object with provided parameters.

### Examples

```pycon
>>> resolve_intersection_result = prime.ResolveIntersectionResult(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| [`ResolveIntersectionResult.print_default`](ansys.meshing.prime.ResolveIntersectionResult.print_default.md#ansys.meshing.prime.ResolveIntersectionResult.print_default)()   | Print the default values of `ResolveIntersectionResult` object.   |
| [`ResolveIntersectionResult.set_default`](ansys.meshing.prime.ResolveIntersectionResult.set_default.md#ansys.meshing.prime.ResolveIntersectionResult.set_default)([...])    | Set the default values of the `ResolveIntersectionResult` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| [`ResolveIntersectionResult.error_code`](ansys.meshing.prime.ResolveIntersectionResult.error_code.md#ansys.meshing.prime.ResolveIntersectionResult.error_code)   | Errror code associated with a resolve intersections operation.   |
<!-- vale on -->