# get_parts_for_points

<a id="ansys.meshing.prime.VolumeMeshTool.get_parts_for_points"></a>

#### VolumeMeshTool.get_parts_for_points(points, params)

Finds parts enclosing the given list of points.

* **Parameters:**

  **points**
  : Coordinates of points for which parts need to be found.

  **params**
  : Parameters for searching parts.

* **Returns:**

  `Iterable`[[`int`](https://docs.python.org/3.11/library/functions.html#int)]
  : Returns array containing information about parts enclosing the points.
  
* **Return type:**
  Iterable[int]

### Notes

**This is a beta API**. **The behavior and implementation may change in future**.

### Examples

```pycon
>>> results = volume_mesh_tool.get_parts_for_points([0., 0., 0.], params)
```

<!-- !! processed by numpydoc !! -->
