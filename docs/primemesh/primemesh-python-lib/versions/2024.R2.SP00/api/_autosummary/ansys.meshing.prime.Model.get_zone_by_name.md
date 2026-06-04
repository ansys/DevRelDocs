# ansys.meshing.prime.Model.get_zone_by_name



#### Model.get_zone_by_name(zone_name)

Gets the zone by name.

* **Parameters:**
  **zone_name**
  : Name of the zone.
* **Returns:**
  [`int`](https://docs.python.org/3.11/library/functions.html#int)
  : Returns id of the zone.
* **Return type:**
  [`int`](https://docs.python.org/3.11/library/functions.html#int)

### Examples

```pycon
>>> client = prime.launch_prime()
>>> model = client.model
>>> zone_id = model.get_zone_by_name("inlet")
```

<!-- !! processed by numpydoc !! -->
