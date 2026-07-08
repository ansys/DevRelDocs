# delete_zone

<a id="ansys.meshing.prime.Model.delete_zone"></a>

#### Model.delete_zone(zone_id)

Deletes zone with the given id.

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
>>> client = prime.launch_prime()
>>> model = client.model
>>> results = model.delete_zone(1)
```

<!-- !! processed by numpydoc !! -->
