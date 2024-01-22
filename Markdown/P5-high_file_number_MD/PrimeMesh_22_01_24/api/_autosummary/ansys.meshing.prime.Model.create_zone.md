# ansys.meshing.prime.Model.create_zone

#### Model.create_zone(suggested_name, type)

Creates zone for the given zone type.

* **Parameters:**
  **suggested_name**
  : Suggested name for the zone to be created.

  **type**
  : Type of the zone to be created.
* **Returns:**
  [`CreateZoneResults`](ansys.meshing.prime.CreateZoneResults.md#ansys.meshing.prime.CreateZoneResults)
  : Returns the CreateZoneResults.
* **Return type:**
  [`CreateZoneResults`](ansys.meshing.prime.CreateZoneResults.md#ansys.meshing.prime.CreateZoneResults)

### Examples

```pycon
>>> model = prime.local_model()
>>> results = model.create_zone("wall", prime.ZoneType.FACE)
```

<!-- !! processed by numpydoc !! -->
