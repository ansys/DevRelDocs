# DeadRegion

<a id="ansys.meshing.prime.DeadRegion"></a>

### *class* ansys.meshing.prime.DeadRegion(model=None, face_zonelet_ids=None, dead_material_points=None, hole_size=None, json_data=None, \*\*kwargs)

DeadRegion defines a dead region for patch flow regions operation.

* **Parameters:**

  **model: Model**
  : Model to create a `DeadRegion` object with default parameters.

  **face_zonelet_ids: Iterable[int], optional**
  : Face zonelets enclosing dead region.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **dead_material_points: List[str], optional**
  : Material points to identify dead region.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **hole_size: float, optional**
  : Maximum hole size used for patching.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `DeadRegion` object with provided parameters.

### Examples

```pycon
>>> dead_region = prime.DeadRegion(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
| [`DeadRegion.print_default`](ansys.meshing.prime.DeadRegion.print_default.md#ansys.meshing.prime.DeadRegion.print_default)()                  | Print the default values of `DeadRegion` object.   |
| [`DeadRegion.set_default`](ansys.meshing.prime.DeadRegion.set_default.md#ansys.meshing.prime.DeadRegion.set_default)([face_zonelet_ids, ...]) | Set the default values of the `DeadRegion` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------|
| [`DeadRegion.dead_material_points`](ansys.meshing.prime.DeadRegion.dead_material_points.md#ansys.meshing.prime.DeadRegion.dead_material_points)   | Material points to identify dead region.   |
| [`DeadRegion.face_zonelet_ids`](ansys.meshing.prime.DeadRegion.face_zonelet_ids.md#ansys.meshing.prime.DeadRegion.face_zonelet_ids)               | Face zonelets enclosing dead region.       |
| [`DeadRegion.hole_size`](ansys.meshing.prime.DeadRegion.hole_size.md#ansys.meshing.prime.DeadRegion.hole_size)                                    | Maximum hole size used for patching.       |
<!-- vale on -->