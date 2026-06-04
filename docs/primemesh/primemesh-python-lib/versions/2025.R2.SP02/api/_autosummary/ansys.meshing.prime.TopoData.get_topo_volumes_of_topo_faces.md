# get_topo_volumes_of_topo_faces

<a id="ansys.meshing.prime.TopoData.get_topo_volumes_of_topo_faces"></a>

#### TopoData.get_topo_volumes_of_topo_faces(topo_faces)

Gets the topovolumes of the given topofaces.

* **Parameters:**

  **topo_faces**
  : Ids of the topofaces.

* **Returns:**

  `Iterable`[[`int`](https://docs.python.org/3.11/library/functions.html#int)]
  : Returns the list of topovolume ids.

* **Return type:**

  [`Iterable`](https://docs.python.org/3.11/library/typing.html#typing.Iterable)[[`int`](https://docs.python.org/3.11/library/functions.html#int)]

### Notes

**This is a beta API**. **The behavior and implementation may change in future**.

### Examples

```pycon
>>> topovolumes = topo_data.get_topo_volumes_of_topo_faces(topo_faces)
```

<!-- !! processed by numpydoc !! -->
