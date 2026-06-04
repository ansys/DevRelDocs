# get_adjacent_volumes_of_volumes

<a id="ansys.meshing.prime.Part.get_adjacent_volumes_of_volumes"></a>

#### Part.get_adjacent_volumes_of_volumes(volumes)

Get the adjacent volumes for the provided volume ids.

* **Parameters:**

  **volumes**
  : Ids of the volume.

* **Returns:**

  `Iterable`[[`int`](https://docs.python.org/3.11/library/functions.html#int)]
  : Returns the list of adjacent volume ids.

* **Return type:**

  [`Iterable`](https://docs.python.org/3.11/library/typing.html#typing.Iterable)[[`int`](https://docs.python.org/3.11/library/functions.html#int)]

### Examples

```pycon
>>> adjacent_volumes_of_volumes = part.get_adjacent_volumes_of_volumes(volumes)
```

<!-- !! processed by numpydoc !! -->
