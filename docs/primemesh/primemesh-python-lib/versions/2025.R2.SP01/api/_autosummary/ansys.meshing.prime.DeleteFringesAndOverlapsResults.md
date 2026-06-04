# DeleteFringesAndOverlapsResults

<a id="ansys.meshing.prime.DeleteFringesAndOverlapsResults"></a>

### *class* ansys.meshing.prime.DeleteFringesAndOverlapsResults(model=None, error_code=None, n_deleted=None, json_data=None, \*\*kwargs)

Results associated with the delete fringes and overlapping faces operation.

* **Parameters:**

  **model: Model**
  : Model to create a `DeleteFringesAndOverlapsResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with the failure of operation.

  **n_deleted: int, optional**
  : Number of face elements deleted.

  **json_data: dict, optional**
  : JSON dictionary to create a `DeleteFringesAndOverlapsResults` object with provided parameters.

### Examples

```pycon
>>> delete_fringes_and_overlaps_results = prime.DeleteFringesAndOverlapsResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| [`DeleteFringesAndOverlapsResults.print_default`](ansys.meshing.prime.DeleteFringesAndOverlapsResults.print_default.md#ansys.meshing.prime.DeleteFringesAndOverlapsResults.print_default)()   | Print the default values of `DeleteFringesAndOverlapsResults` object.   |
| [`DeleteFringesAndOverlapsResults.set_default`](ansys.meshing.prime.DeleteFringesAndOverlapsResults.set_default.md#ansys.meshing.prime.DeleteFringesAndOverlapsResults.set_default)([...])    | Set the default values of the `DeleteFringesAndOverlapsResults` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| [`DeleteFringesAndOverlapsResults.error_code`](ansys.meshing.prime.DeleteFringesAndOverlapsResults.error_code.md#ansys.meshing.prime.DeleteFringesAndOverlapsResults.error_code)   | Error code associated with the failure of operation.   |
| [`DeleteFringesAndOverlapsResults.n_deleted`](ansys.meshing.prime.DeleteFringesAndOverlapsResults.n_deleted.md#ansys.meshing.prime.DeleteFringesAndOverlapsResults.n_deleted)      | Number of face elements deleted.                       |
<!-- vale on -->