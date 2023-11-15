# ansys.meshing.prime.MeshStackerParams.set_default

#### *static* MeshStackerParams.set_default(origin=None, direction=None, lateral_defeature_tolerance=None, stacking_defeature_tolerance=None, max_offset_size=None, size_control_ids=None, delete_base=None)

Set the default values of MeshStackerParams.

* **Parameters:**
  **origin: Iterable[float], optional**
  : Origin coordinate list of stacker.

  **direction: Iterable[float], optional**
  : Direction vector of stacker.

  **lateral_defeature_tolerance: float, optional**
  : Absolute lateral distance tolerance for stacker. Default value is 0.0.

  **stacking_defeature_tolerance: float, optional**
  : Absolute stacking distance tolerance for stacker. Default value is 0.0.

  **max_offset_size: float, optional**
  : Maximum stack size allowed during stacking.

  **size_control_ids: Iterable[int], optional**
  : List of size control ids to be respected by stacker. Stacker respects all supported controls by default.

  **delete_base: bool, optional**
  : Option to delete base face at the end of stacking. The default is false.

<!-- !! processed by numpydoc !! -->
