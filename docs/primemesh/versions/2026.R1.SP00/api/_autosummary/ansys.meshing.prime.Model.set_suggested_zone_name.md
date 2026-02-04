# set_suggested_zone_name

<a id="ansys.meshing.prime.Model.set_suggested_zone_name"></a>

#### Model.set_suggested_zone_name(id, name)

Sets the unique name for zone with given id based on the suggested name.

* **Parameters:**

  **id**
  : Id of the zone to set suggested name.

  **name**
  : Suggested name for the zone.

* **Returns:**

  [`SetNameResults`](ansys.meshing.prime.SetNameResults.md#ansys.meshing.prime.SetNameResults)
  : Returns the SetNameResults. results.assignedName indicates the assigned name to the zone.
  
* **Return type:**
  [`SetNameResults`](ansys.meshing.prime.SetNameResults.md#ansys.meshing.prime.SetNameResults)

### Examples

```pycon
>>> client = prime.launch_prime()
>>> model = client.model
>>> results = model.set_suggested_zone_name(id = 5, name = "zone1")
```

<!-- !! processed by numpydoc !! -->
