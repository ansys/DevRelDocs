# set_default

<a id="ansys.meshing.prime.WrapperCloseGapsParams.set_default"></a>

#### *static* WrapperCloseGapsParams.set_default(target=None, gap_size=None, material_point_name=None, suggested_part_name=None, number_of_threads=None, create_new_part=None, resolution_factor=None)

Set the default values of the `WrapperCloseGapsParams` object.

* **Parameters:**

  **target: ScopeDefinition, optional**
  : Scope of target face zonelets to patch gaps between scope and target. If empty scope is provided, CloseGaps patch gaps within scope.

  **gap_size: float, optional**
  : Maximum gap size to be closed.

  **material_point_name: str, optional**
  : Material point name near the gaps to be closed.

  **suggested_part_name: str, optional**
  : Suggested part name for created patching surfaces.

  **number_of_threads: int, optional**
  : Number of threads for multithreading.

  **create_new_part: bool, optional**
  : Creates a new gap closure part. If set to false, merge the patches to the adjacent face zonelet with the highest face count in the input.

  **resolution_factor: float, optional**
  : Factor to resolve the smallest gap for the given gap size.

<!-- !! processed by numpydoc !! -->
