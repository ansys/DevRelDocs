# set_default

<a id="ansys.meshing.prime.SubtractVolumesParams.set_default"></a>

#### *static* SubtractVolumesParams.set_default(ignore_face_zonelets=None, check_cutters=None, keep_cutters=None)

Set the default values of the `SubtractVolumesParams` object.

* **Parameters:**

  **ignore_face_zonelets: Iterable[int], optional**
  : Face zonelet ids that subtract volumes should not remove (for example, periodic or fluid cap zonelets). If ignore face zonelets are provided, then the target volumes after subtract operation need to be recomputed.

  **check_cutters: bool, optional**
  : Option to manage intersecting cutter volumes. When check cutters is False an error message is provided if multiple cutters intersect. Overlapping cutter volumes are not supported.

  **keep_cutters: bool, optional**
  : Option to retain cutter volumes.

<!-- !! processed by numpydoc !! -->
