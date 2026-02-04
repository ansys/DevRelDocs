# DeleteFringesAndOverlapsParams

<a id="ansys.meshing.prime.DeleteFringesAndOverlapsParams"></a>

### *class* ansys.meshing.prime.DeleteFringesAndOverlapsParams(model=None, fringe_element_count=None, overlap_element_count=None, delete_fringes=None, delete_overlaps=None, json_data=None, \*\*kwargs)

Parameters to delete fringes and overlapping faces.

* **Parameters:**

  **model: Model**
  : Model to create a `DeleteFringesAndOverlapsParams` object with default parameters.

  **fringe_element_count: int, optional**
  : Maximum count of free face elements identified as fringe to be deleted.

  **overlap_element_count: int, optional**
  : Maximum count of overlapping face elements identified as overlap to be deleted.

  **delete_fringes: bool, optional**
  : Option to delete fringes. The default is true.

  **delete_overlaps: bool, optional**
  : Option to delete overlaps. The default is false.

  **json_data: dict, optional**
  : JSON dictionary to create a `DeleteFringesAndOverlapsParams` object with provided parameters.

### Examples

```pycon
>>> delete_fringes_and_overlaps_params = prime.DeleteFringesAndOverlapsParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DeleteFringesAndOverlapsParams.print_default`](ansys.meshing.prime.DeleteFringesAndOverlapsParams.print_default.md#ansys.meshing.prime.DeleteFringesAndOverlapsParams.print_default)()   | Print the default values of `DeleteFringesAndOverlapsParams` object.   |
| [`DeleteFringesAndOverlapsParams.set_default`](ansys.meshing.prime.DeleteFringesAndOverlapsParams.set_default.md#ansys.meshing.prime.DeleteFringesAndOverlapsParams.set_default)([...])    | Set the default values of the `DeleteFringesAndOverlapsParams` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| [`DeleteFringesAndOverlapsParams.delete_fringes`](ansys.meshing.prime.DeleteFringesAndOverlapsParams.delete_fringes.md#ansys.meshing.prime.DeleteFringesAndOverlapsParams.delete_fringes)                      | Option to delete fringes.                                                       |
| [`DeleteFringesAndOverlapsParams.delete_overlaps`](ansys.meshing.prime.DeleteFringesAndOverlapsParams.delete_overlaps.md#ansys.meshing.prime.DeleteFringesAndOverlapsParams.delete_overlaps)                   | Option to delete overlaps.                                                      |
| [`DeleteFringesAndOverlapsParams.fringe_element_count`](ansys.meshing.prime.DeleteFringesAndOverlapsParams.fringe_element_count.md#ansys.meshing.prime.DeleteFringesAndOverlapsParams.fringe_element_count)    | Maximum count of free face elements identified as fringe to be deleted.         |
| [`DeleteFringesAndOverlapsParams.overlap_element_count`](ansys.meshing.prime.DeleteFringesAndOverlapsParams.overlap_element_count.md#ansys.meshing.prime.DeleteFringesAndOverlapsParams.overlap_element_count) | Maximum count of overlapping face elements identified as overlap to be deleted. |
<!-- vale on -->