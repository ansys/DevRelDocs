# set_default

<a id="ansys.meshing.prime.ThinVolumeMeshParams.set_default"></a>

#### *static* ThinVolumeMeshParams.set_default(n_layers=None, imprint_sides=None, n_ignore_rings=None)

Set the default values of the `ThinVolumeMeshParams` object.

* **Parameters:**

  **n_layers: int, optional**
  : Number of thin volume layers to be generated.

  **imprint_sides: bool, optional**
  : Checks whether to imprint quad faces on side zonelets.

  **n_ignore_rings: int, optional**
  : Number of rings of cells at the sides to ignore when no imprint on sides. Volume fill type will be used in this buffer region at the thin volume sides to transition to thin volume mesh internally.

<!-- !! processed by numpydoc !! -->
