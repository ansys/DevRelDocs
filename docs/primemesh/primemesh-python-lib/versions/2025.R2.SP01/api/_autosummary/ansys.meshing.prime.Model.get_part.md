# get_part

<a id="ansys.meshing.prime.Model.get_part"></a>

#### Model.get_part(id)

Get the part by ID.

* **Parameters:**

  **id**
  : ID of the part.

* **Returns:**

  [`Part`](ansys.meshing.prime.Part.md#ansys.meshing.prime.Part)
  : Part or `None` if the given part ID doesn’t exist.

* **Return type:**

  [`Part`](ansys.meshing.prime.Part.md#ansys.meshing.prime.Part)

### Examples

```pycon
>>> from ansys.meshing.prime import Model
>>> model = client.model
>>> part = model.get_part(2)
```

<!-- !! processed by numpydoc !! -->
