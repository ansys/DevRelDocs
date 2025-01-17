# get_active_volumetric_size_fields

<a id="ansys.meshing.prime.Model.get_active_volumetric_size_fields"></a>

#### Model.get_active_volumetric_size_fields()

Get the active sizefield ids.

* **Returns:**

  `Iterable`[[`int`](https://docs.python.org/3.11/library/functions.html#int)]
  : Return the list of active sizefield ids.
  
* **Return type:**

  [`Iterable`](https://docs.python.org/3.11/library/typing.html#typing.Iterable)[[`int`](https://docs.python.org/3.11/library/functions.html#int)]

### Examples

```pycon
>>> model = client.model
>>> active_size_field_ids = model.get_active_volumetric_size_fields()
```

<!-- !! processed by numpydoc !! -->
