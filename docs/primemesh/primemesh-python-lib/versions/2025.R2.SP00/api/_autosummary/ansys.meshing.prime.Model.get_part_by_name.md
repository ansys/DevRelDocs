# get_part_by_name

<a id="ansys.meshing.prime.Model.get_part_by_name"></a>

#### Model.get_part_by_name(name)

Get the part by name.

* **Parameters:**

  **name**
  : Name of the part.

* **Returns:**

  [`Part`](ansys.meshing.prime.Part.md#ansys.meshing.prime.Part)
  : Part or `None` if the given part name doesn’t exist.

* **Return type:**

  [`Part`](ansys.meshing.prime.Part.md#ansys.meshing.prime.Part)

### Examples

```pycon
>>> from ansys.meshing.prime import Model
>>> model = client.model
>>> part = model.get_part_by_name("part.1")
```

<!-- !! processed by numpydoc !! -->
