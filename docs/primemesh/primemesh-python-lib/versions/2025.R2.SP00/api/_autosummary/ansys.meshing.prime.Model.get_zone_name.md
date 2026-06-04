# get_zone_name

<a id="ansys.meshing.prime.Model.get_zone_name"></a>

#### Model.get_zone_name(id)

Get the name of given zone.

* **Parameters:**

  **id**
  : Id of zone.

* **Returns:**
  
  [`str`](https://docs.python.org/3.11/library/stdtypes.html#str)
  : Return the zone name. Return empty name if the id is invalid.

* **Return type:**

  [`str`](https://docs.python.org/3.11/library/stdtypes.html#str)

### Examples

```pycon
>>> client = prime.launch_prime()
>>> model = client.model
>>> name = model.get_zone_name(id)
```

<!-- !! processed by numpydoc !! -->
