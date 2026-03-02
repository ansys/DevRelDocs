# FaceAndEdgeConnectivityResults

<a id="ansys.meshing.prime.FaceAndEdgeConnectivityResults"></a>

### *class* ansys.meshing.prime.FaceAndEdgeConnectivityResults(model=None, error_code=None, part_ids=None, face_connectivity_result_per_part=None, edge_connectivity_result_per_part=None, json_data=None, \*\*kwargs)

Result of the face and edge connectivity information.

* **Parameters:**

  **model: Model**
  : Model to create a `FaceAndEdgeConnectivityResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with the get face and edge connectivity operation.

  **part_ids: Iterable[int], optional**
  : Part ids for which face and edge connectivity data is available.

  **face_connectivity_result_per_part: List[FaceConnectivityResults], optional**
  : Face connectivity result per part.

  **edge_connectivity_result_per_part: List[EdgeConnectivityResults], optional**
  : Edge connectivity result per part.

  **json_data: dict, optional**
  : JSON dictionary to create a `FaceAndEdgeConnectivityResults` object with provided parameters.

### Examples

```pycon
>>> face_and_edge_connectivity_results = prime.FaceAndEdgeConnectivityResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`FaceAndEdgeConnectivityResults.print_default`](ansys.meshing.prime.FaceAndEdgeConnectivityResults.print_default.md#ansys.meshing.prime.FaceAndEdgeConnectivityResults.print_default)()   | Print the default values of `FaceAndEdgeConnectivityResults` object.   |
| [`FaceAndEdgeConnectivityResults.set_default`](ansys.meshing.prime.FaceAndEdgeConnectivityResults.set_default.md#ansys.meshing.prime.FaceAndEdgeConnectivityResults.set_default)([...])    | Set the default values of the `FaceAndEdgeConnectivityResults` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`FaceAndEdgeConnectivityResults.edge_connectivity_result_per_part`](ansys.meshing.prime.FaceAndEdgeConnectivityResults.edge_connectivity_result_per_part.md#ansys.meshing.prime.FaceAndEdgeConnectivityResults.edge_connectivity_result_per_part)   | Edge connectivity result per part.                                       |
| [`FaceAndEdgeConnectivityResults.error_code`](ansys.meshing.prime.FaceAndEdgeConnectivityResults.error_code.md#ansys.meshing.prime.FaceAndEdgeConnectivityResults.error_code)                                                                        | Error code associated with the get face and edge connectivity operation. |
| [`FaceAndEdgeConnectivityResults.face_connectivity_result_per_part`](ansys.meshing.prime.FaceAndEdgeConnectivityResults.face_connectivity_result_per_part.md#ansys.meshing.prime.FaceAndEdgeConnectivityResults.face_connectivity_result_per_part)   | Face connectivity result per part.                                       |
| [`FaceAndEdgeConnectivityResults.part_ids`](ansys.meshing.prime.FaceAndEdgeConnectivityResults.part_ids.md#ansys.meshing.prime.FaceAndEdgeConnectivityResults.part_ids)                                                                              | Part ids for which face and edge connectivity data is available.         |
<!-- vale on -->