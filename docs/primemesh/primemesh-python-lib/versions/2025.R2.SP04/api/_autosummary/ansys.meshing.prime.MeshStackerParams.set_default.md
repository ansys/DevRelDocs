# set_default

<a id="ansys.meshing.prime.MeshStackerParams.set_default"></a>

#### *static* MeshStackerParams.set_default(origin=None, direction=None, lateral_defeature_tolerance=None, stacking_defeature_tolerance=None, max_offset_size=None, size_control_ids=None, seed_faces=None, delete_base=None)

Set the default values of the `MeshStackerParams` object.

* **Parameters:**

  **origin: Iterable[float], optional**
  : Origin coordinate list of stacker.

  **direction: Iterable[float], optional**
  : Direction vector of stacker.

  **lateral_defeature_tolerance: float, optional**
  : Absolute lateral distance tolerance for stacker. If the lateral distance tolerance is not specified, a default tolerance value is calculated by stacker.

  **stacking_defeature_tolerance: float, optional**
  : Absolute stacking distance tolerance for stacker. If the stacking distance tolerance is not specified, a default tolerance value is calculated by stacker.

  **max_offset_size: float, optional**
  : Maximum stack size allowed during stacking. If the maximum stack size is not specified, it is set to global max size.

  **size_control_ids: Iterable[int], optional**
  : List of size control ids to be respected by stacker. Stacker respects all supported controls by default.

  **seed_faces: Iterable[int], optional**
  : List of faces whose edges need to be imprinted on the base face. If the faces are meshed, the mesh will be transferred to the base face.

  **delete_base: bool, optional**
  : Option to delete base face at the end of stacking. The default is false.

<!-- !! processed by numpydoc !! -->
