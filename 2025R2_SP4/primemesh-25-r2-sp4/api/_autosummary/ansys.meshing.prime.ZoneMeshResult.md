# ZoneMeshResult

<a id="ansys.meshing.prime.ZoneMeshResult"></a>

### *class* ansys.meshing.prime.ZoneMeshResult(model=None, zone_name=None, element_ids=None, centroids=None, json_data=None, \*\*kwargs)

Results containing zone-wise mesh information.

Contains zone name, element ids and their corresponding data (such as centroid coordinates)
for elements within a zone.

* **Parameters:**

  **model: Model**
  : Model to create a `ZoneMeshResult` object with default parameters.

  **zone_name: str, optional**
  : Name of the zone where the elements belong to.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **element_ids: Iterable[int], optional**
  : List of element ids in the zone.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **centroids: Iterable[float], optional**
  : Flattened array of centroid coordinates [x1,y1,z1,x2,y2,z2,…].
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `ZoneMeshResult` object with provided parameters.

### Examples

```pycon
>>> zone_mesh_result = prime.ZoneMeshResult(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| [`ZoneMeshResult.print_default`](ansys.meshing.prime.ZoneMeshResult.print_default.md#ansys.meshing.prime.ZoneMeshResult.print_default)()           | Print the default values of `ZoneMeshResult` object.   |
| [`ZoneMeshResult.set_default`](ansys.meshing.prime.ZoneMeshResult.set_default.md#ansys.meshing.prime.ZoneMeshResult.set_default)([zone_name, ...]) | Set the default values of the `ZoneMeshResult` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| [`ZoneMeshResult.centroids`](ansys.meshing.prime.ZoneMeshResult.centroids.md#ansys.meshing.prime.ZoneMeshResult.centroids)       | Flattened array of centroid coordinates [x1,y1,z1,x2,y2,z2,...].   |
| [`ZoneMeshResult.element_ids`](ansys.meshing.prime.ZoneMeshResult.element_ids.md#ansys.meshing.prime.ZoneMeshResult.element_ids) | List of element ids in the zone.                                   |
| [`ZoneMeshResult.zone_name`](ansys.meshing.prime.ZoneMeshResult.zone_name.md#ansys.meshing.prime.ZoneMeshResult.zone_name)       | Name of the zone where the elements belong to.                     |
<!-- vale on -->