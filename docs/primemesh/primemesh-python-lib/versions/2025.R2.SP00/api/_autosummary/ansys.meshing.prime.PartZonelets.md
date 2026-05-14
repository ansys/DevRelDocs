# PartZonelets

<a id="ansys.meshing.prime.PartZonelets"></a>

### *class* ansys.meshing.prime.PartZonelets(model=None, part_id=None, face_zonelets=None, json_data=None, \*\*kwargs)

A structure containing some or all face zonelet ids available in a part.

* **Parameters:**

  **model: Model**
  : Model to create a `PartZonelets` object with default parameters.

  **part_id: int, optional**
  : Id of part.

  **face_zonelets: Iterable[int], optional**
  : List of face zonelet ids available in the part.

  **json_data: dict, optional**
  : JSON dictionary to create a `PartZonelets` object with provided parameters.

### Examples

```pycon
>>> part_zonelets = prime.PartZonelets(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| [`PartZonelets.print_default`](ansys.meshing.prime.PartZonelets.print_default.md#ansys.meshing.prime.PartZonelets.print_default)()         | Print the default values of `PartZonelets` object.   |
| [`PartZonelets.set_default`](ansys.meshing.prime.PartZonelets.set_default.md#ansys.meshing.prime.PartZonelets.set_default)([part_id, ...]) | Set the default values of the `PartZonelets` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|
| [`PartZonelets.face_zonelets`](ansys.meshing.prime.PartZonelets.face_zonelets.md#ansys.meshing.prime.PartZonelets.face_zonelets)   | List of face zonelet ids available in the part.   |
| [`PartZonelets.part_id`](ansys.meshing.prime.PartZonelets.part_id.md#ansys.meshing.prime.PartZonelets.part_id)                     | Id of part.                                       |
<!-- vale on -->