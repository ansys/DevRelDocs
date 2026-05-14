# set_default

<a id="ansys.meshing.prime.VolumeControlParams.set_default"></a>

#### *static* VolumeControlParams.set_default(cell_zonelet_type=None, skip_hexcore=None)

Set the default values of the `VolumeControlParams` object.

* **Parameters:**

  **cell_zonelet_type: CellZoneletType, optional**
  : Cell zonelet type is used to define the type of the associated volume.

  **skip_hexcore: bool, optional**
  : Check whether to skip hexahedral cells generation in the core for this volume or not. Applicable only for volumeFillType set to HexcoreTet or HexcorePoly in the AutoMeshParams structure.

<!-- !! processed by numpydoc !! -->
