# set_default

<a id="ansys.meshing.prime.WrapperPatchFlowRegionsParams.set_default"></a>

#### *static* WrapperPatchFlowRegionsParams.set_default(base_size=None, suggested_part_name=None, number_of_threads=None, dead_regions=None, sizing_method=None, size_field_ids=None, patch_at_live=None)

Set the default values of the `WrapperPatchFlowRegionsParams` object.

* **Parameters:**

  **base_size: float, optional**
  : Base size to define octree.

  **suggested_part_name: str, optional**
  : Suggested part name for created patching surfaces.

  **number_of_threads: int, optional**
  : Number of threads for multithreading.

  **dead_regions: List[DeadRegion], optional**
  : List of dead regions.

  **sizing_method: SizeFieldType, optional**
  : Used to define sizing method for patching.

  **size_field_ids: Iterable[int], optional**
  : Used to define size field based octree refinement.

  **patch_at_live: bool, optional**
  : Creates patches closer to live instead of dead.

<!-- !! processed by numpydoc !! -->
