# get_parts

<a id="ansys.meshing.prime.lucid.SurfaceScope.get_parts"></a>

#### SurfaceScope.get_parts(model)

Get the list of part ids in the scope.

* **Parameters:**

  **model**
  : PyPrimeMesh model.

* **Returns:**

  `Iterable`[[`int`](https://docs.python.org/3.11/library/functions.html#int)]
  : Returns the list of part ids.

* **Return type:**

  [`Iterable`](https://docs.python.org/3.11/library/typing.html#typing.Iterable)[[`int`](https://docs.python.org/3.11/library/functions.html#int)]

### Examples

```pycon
>>> from ansys.meshing.prime import Model, SurfaceScope
>>> model = client.model
>>> su = SurfaceScope("*", "*", prime.ScopeEvaluationType.LABELS)
>>> part_ids = su.get_parts()
```

<!-- !! processed by numpydoc !! -->
