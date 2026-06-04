# create_material_point

<a id="ansys.meshing.prime.MaterialPointManager.create_material_point"></a>

#### MaterialPointManager.create_material_point(suggested_name, coords, params)

Creates a material point at the given coordinates.

* **Parameters:**

  **suggested_name**
  : Name suggested for the material point.

  **coords**
  : Coordinates of material point.

  **params**
  : Parameters used to create material point.

* **Returns:**

  [`CreateMaterialPointResults`](ansys.meshing.prime.CreateMaterialPointResults.md#ansys.meshing.prime.CreateMaterialPointResults)
  : Returns the result with material point name and id.

* **Return type:**

  [`CreateMaterialPointResults`](ansys.meshing.prime.CreateMaterialPointResults.md#ansys.meshing.prime.CreateMaterialPointResults)

### Notes

A material point is created on calling this API.

### Examples

```pycon
>>> material_point_results = model.control_data.create_material_point("Fluid", [1.0,2,0,3.0], params)
```

<!-- !! processed by numpydoc !! -->
