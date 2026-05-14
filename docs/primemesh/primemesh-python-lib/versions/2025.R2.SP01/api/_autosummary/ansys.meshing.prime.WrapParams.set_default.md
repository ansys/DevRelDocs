# set_default

<a id="ansys.meshing.prime.WrapParams.set_default"></a>

#### *static* WrapParams.set_default(sizing_method=None, base_size=None, size_control_ids=None, size_field_ids=None, wrap_region=None, number_of_threads=None, imprint_relative_range=None, imprint_iterations=None)

Set the default values of the `WrapParams` object.

* **Parameters:**

  **sizing_method: SizeFieldType, optional**
  : Used to define sizing method for wrapping.

  **base_size: float, optional**
  : Base size to define octree.

  **size_control_ids: Iterable[int], optional**
  : Used to construct geodesic sizes for octree refinement.

  **size_field_ids: Iterable[int], optional**
  : Used to define size field based octree refinement.

  **wrap_region: WrapRegion, optional**
  : Indicates source type to extract wrapper region.

  **number_of_threads: int, optional**
  : Number of threads for multithreading.

  **imprint_relative_range: float, optional**
  : Used to define relative range in imprinting in wrapping.

  **imprint_iterations: int, optional**
  : Used to define number of imprint iterations in wrapping.

<!-- !! processed by numpydoc !! -->
