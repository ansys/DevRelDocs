# get_geom_zonelets_of_topo_faces

<a id="ansys.meshing.prime.TopoData.get_geom_zonelets_of_topo_faces"></a>

#### TopoData.get_geom_zonelets_of_topo_faces(topo_faces)

Get the geometry face zonelets for the provided topoface ids.

* **Parameters:**

  **topo_faces**
  : Ids of the topofaces.

* **Returns:**

  `Iterable`[[`int`](https://docs.python.org/3.11/library/functions.html#int)]
  : Return the geometry face zonelet ids.

* **Return type:**

  [`Iterable`](https://docs.python.org/3.11/library/typing.html#typing.Iterable)[[`int`](https://docs.python.org/3.11/library/functions.html#int)]

### Examples

```pycon
>>> geom_face_zonelets = topo_data.get_geom_zonelets_of_topo_faces(topo_faces)
```

<!-- !! processed by numpydoc !! -->
