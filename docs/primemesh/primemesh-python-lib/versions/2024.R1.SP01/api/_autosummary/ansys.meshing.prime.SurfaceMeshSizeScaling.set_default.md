# ansys.meshing.prime.SurfaceMeshSizeScaling.set_default

#### *static* SurfaceMeshSizeScaling.set_default(factor=None, size_range_min=None, size_range_max=None)

Set the default values of SurfaceMeshSizeScaling.

* **Parameters:**
  **factor: float, optional**
  : Value by which size should be multiplied when the size falls within a certain range. Applicable only when sizeFieldType is set to Geometric in AutoMeshParams structure.

  **size_range_min: float, optional**
  : Minimum size required to apply scaling. Applicable only when sizeFieldType is set to Geometric in AutoMeshParams structure.

  **size_range_max: float, optional**
  : Maximum size required to apply scaling. Applicable only when sizeFieldType is set to Geometric in AutoMeshParams structure.

<!-- !! processed by numpydoc !! -->
