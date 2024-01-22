# ansys.meshing.prime.MaterialPointManager.delete_material_point

#### MaterialPointManager.delete_material_point(name)

Deletes material point identified with the given name.

* **Parameters:**
  **name**
  : Name of the material point to be deleted.
* **Returns:**
  [`DeleteMaterialPointResults`](ansys.meshing.prime.DeleteMaterialPointResults.md#ansys.meshing.prime.DeleteMaterialPointResults)
  : Returns the DeleteMaterialPointResults.
* **Return type:**
  [`DeleteMaterialPointResults`](ansys.meshing.prime.DeleteMaterialPointResults.md#ansys.meshing.prime.DeleteMaterialPointResults)

### Examples

```pycon
>>> model = prime.local_model()
>>> results = model.material_point_data.delete_material_point("fluid")
```

<!-- !! processed by numpydoc !! -->
