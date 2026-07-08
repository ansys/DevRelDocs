# get_topo_faces

<a id="ansys.meshing.prime.lucid.SurfaceScope.get_topo_faces"></a>

#### SurfaceScope.get_topo_faces(model, part_id)

Get the list of topofaces for the given part in the scope.

* **Parameters:**

  **model**
  : PyPrimeMesh model.

  **part_id**
  : Id of the part.

* **Returns:**

  `Iterable`[[`int`](https://docs.python.org/3.11/library/functions.html#int)]
  : Returns the list of zonelets.

* **Return type:**

  [`Iterable`](https://docs.python.org/3.11/library/typing.html#typing.Iterable)[[`int`](https://docs.python.org/3.11/library/functions.html#int)]

### Examples

```pycon
>>> from ansys.meshing.prime import Model, SurfaceScope
>>> model = client.model
>>> su = SurfaceScope("*", "*", prime.ScopeEvaluationType.LABELS)
>>> topo_faces = su.get_topo_faces(model, 2)
```

<!-- !! processed by numpydoc !! -->
