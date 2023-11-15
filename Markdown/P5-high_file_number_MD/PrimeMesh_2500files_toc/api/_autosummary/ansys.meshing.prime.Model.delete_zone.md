# ansys.meshing.prime.Model.delete_zone

#### Model.delete_zone(zone_id)

Deletes zone identified with the given id.

* **Parameters:**
  **zone_id**
  : Id of the zone to be deleted.
* **Returns:**
  [`DeleteZoneResults`](ansys.meshing.prime.DeleteZoneResults.md#ansys.meshing.prime.DeleteZoneResults)
  : Returns the DeleteZoneResults.
* **Return type:**
  [`DeleteZoneResults`](ansys.meshing.prime.DeleteZoneResults.md#ansys.meshing.prime.DeleteZoneResults)

### Examples

```pycon
>>> model = prime.local_model()
>>> results = model.delete_zone(1)
```

<!-- !! processed by numpydoc !! -->
