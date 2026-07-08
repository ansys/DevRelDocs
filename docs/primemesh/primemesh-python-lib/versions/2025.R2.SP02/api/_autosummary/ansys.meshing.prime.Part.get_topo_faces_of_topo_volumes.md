# get_topo_faces_of_topo_volumes

<a id="ansys.meshing.prime.Part.get_topo_faces_of_topo_volumes"></a>

#### Part.get_topo_faces_of_topo_volumes(volumes)

Gets the topofaces of given topovolumes.

* **Parameters:**

  **volumes**
  : Ids of topovolumes.

* **Returns:**

  `Iterable`[[`int`](https://docs.python.org/3.11/library/functions.html#int)]
  : Returns the ids of topofaces.

* **Return type:**

  [`Iterable`](https://docs.python.org/3.11/library/typing.html#typing.Iterable)[[`int`](https://docs.python.org/3.11/library/functions.html#int)]

### Notes

**This is a beta API**. **The behavior and implementation may change in future**.

### Examples

```pycon
>>> topo_faces = part.get_topo_faces_of_topo_volumes(volumes)
```

<!-- !! processed by numpydoc !! -->
