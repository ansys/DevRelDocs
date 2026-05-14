# CreateIntersectionEdgeLoopsResults

<a id="ansys.meshing.prime.CreateIntersectionEdgeLoopsResults"></a>

### *class* ansys.meshing.prime.CreateIntersectionEdgeLoopsResults(model=None, processing_time=None, error_code=None, extracted_ids=None, json_data=None, \*\*kwargs)

Results for the edge loops created by intersection of two groups of face zonelets.

* **Parameters:**

  **model: Model**
  : Model to create a `CreateIntersectionEdgeLoopsResults` object with default parameters.

  **processing_time: float, optional**
  : Time taken to extract edges formed by intersecting faces.

  **error_code: ErrorCode, optional**
  : Error code returned by edge extraction function.

  **extracted_ids: List[ExtractedFeatureIds], optional**
  : List of ExtractedFeatureIds that contains ids of extracted edges.

  **json_data: dict, optional**
  : JSON dictionary to create a `CreateIntersectionEdgeLoopsResults` object with provided parameters.

### Examples

```pycon
>>> create_intersection_edge_loops_results = prime.CreateIntersectionEdgeLoopsResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`CreateIntersectionEdgeLoopsResults.print_default`](ansys.meshing.prime.CreateIntersectionEdgeLoopsResults.print_default.md#ansys.meshing.prime.CreateIntersectionEdgeLoopsResults.print_default)()   | Print the default values of `CreateIntersectionEdgeLoopsResults` object.   |
| [`CreateIntersectionEdgeLoopsResults.set_default`](ansys.meshing.prime.CreateIntersectionEdgeLoopsResults.set_default.md#ansys.meshing.prime.CreateIntersectionEdgeLoopsResults.set_default)([...])    | Set the default values of the `CreateIntersectionEdgeLoopsResults` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| [`CreateIntersectionEdgeLoopsResults.error_code`](ansys.meshing.prime.CreateIntersectionEdgeLoopsResults.error_code.md#ansys.meshing.prime.CreateIntersectionEdgeLoopsResults.error_code)                | Error code returned by edge extraction function.                  |
| [`CreateIntersectionEdgeLoopsResults.extracted_ids`](ansys.meshing.prime.CreateIntersectionEdgeLoopsResults.extracted_ids.md#ansys.meshing.prime.CreateIntersectionEdgeLoopsResults.extracted_ids)       | List of ExtractedFeatureIds that contains ids of extracted edges. |
| [`CreateIntersectionEdgeLoopsResults.processing_time`](ansys.meshing.prime.CreateIntersectionEdgeLoopsResults.processing_time.md#ansys.meshing.prime.CreateIntersectionEdgeLoopsResults.processing_time) | Time taken to extract edges formed by intersecting faces.         |
<!-- vale on -->