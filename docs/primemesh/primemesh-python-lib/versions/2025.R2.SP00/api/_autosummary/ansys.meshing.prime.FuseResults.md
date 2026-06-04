# FuseResults

<a id="ansys.meshing.prime.FuseResults"></a>

### *class* ansys.meshing.prime.FuseResults(model=None, fused_pairs=None, fused_area=None, error_code=None, warning_codes=None, intersecting_locations=None, intersecting_zonelet_pairs=None, json_data=None, \*\*kwargs)

Results associated with the fuse operations.

* **Parameters:**

  **model: Model**
  : Model to create a `FuseResults` object with default parameters.

  **fused_pairs: int, optional**
  : Number of face region pairs that were fused.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **fused_area: float, optional**
  : Total area of fused regions from both source and target faces.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **error_code: ErrorCode, optional**
  : Error code associated with failure of the fuse operation.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **warning_codes: List[WarningCode], optional**
  : Warning codes associated with the fuse operation.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **intersecting_locations: Iterable[float], optional**
  : Locations where the fuse operation did not remove self-intersections in the input. Each location corresponds to a patch of faces where self-intersections exist. The number of elements in intersecting locations are in multiples of three. For example, zero, three, six, nine, and so on. Each triplet corresponds to coordinates in x, y, and z. For example, if the intersecting locations contain (a, b, c, d, e, f), then (a, b, c) represent the first location and (d, e, f) represent the second location.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **intersecting_zonelet_pairs: List[OverlapPairs], optional**
  : Contains pairs of face zonelet ids where the fuse operation failed to remove self-intersections in the input.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `FuseResults` object with provided parameters.

### Examples

```pycon
>>> fuse_results = prime.FuseResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| [`FuseResults.print_default`](ansys.meshing.prime.FuseResults.print_default.md#ansys.meshing.prime.FuseResults.print_default)()             | Print the default values of `FuseResults` object.   |
| [`FuseResults.set_default`](ansys.meshing.prime.FuseResults.set_default.md#ansys.meshing.prime.FuseResults.set_default)([fused_pairs, ...]) | Set the default values of the `FuseResults` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| [`FuseResults.error_code`](ansys.meshing.prime.FuseResults.error_code.md#ansys.meshing.prime.FuseResults.error_code)                                                 | Error code associated with failure of the fuse operation.                                                     |
| [`FuseResults.fused_area`](ansys.meshing.prime.FuseResults.fused_area.md#ansys.meshing.prime.FuseResults.fused_area)                                                 | Total area of fused regions from both source and target faces.                                                |
| [`FuseResults.fused_pairs`](ansys.meshing.prime.FuseResults.fused_pairs.md#ansys.meshing.prime.FuseResults.fused_pairs)                                              | Number of face region pairs that were fused.                                                                  |
| [`FuseResults.intersecting_locations`](ansys.meshing.prime.FuseResults.intersecting_locations.md#ansys.meshing.prime.FuseResults.intersecting_locations)             | Locations where the fuse operation did not remove self-intersections in the input.                            |
| [`FuseResults.intersecting_zonelet_pairs`](ansys.meshing.prime.FuseResults.intersecting_zonelet_pairs.md#ansys.meshing.prime.FuseResults.intersecting_zonelet_pairs) | Contains pairs of face zonelet ids where the fuse operation failed to remove self-intersections in the input. |
| [`FuseResults.warning_codes`](ansys.meshing.prime.FuseResults.warning_codes.md#ansys.meshing.prime.FuseResults.warning_codes)                                        | Warning codes associated with the fuse operation.                                                             |
<!-- vale on -->