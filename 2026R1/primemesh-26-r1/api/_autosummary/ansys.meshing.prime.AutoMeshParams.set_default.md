# set_default

<a id="ansys.meshing.prime.AutoMeshParams.set_default"></a>

#### *static* AutoMeshParams.set_default(size_field_type=None, max_size=None, prism_control_ids=None, thin_volume_control_ids=None, multi_zone_control_ids=None, volume_fill_type=None, prism=None, tet=None, hexcore=None, volume_control_ids=None, periodic_control_ids=None)

Set the default values of the `AutoMeshParams` object.

* **Parameters:**

  **size_field_type: SizeFieldType, optional**
  : Type of sizing to be used to generate volume mesh.

  **max_size: float, optional**
  : Maximum cell size.

  **prism_control_ids: Iterable[int], optional**
  : Set prism control ids.

  **thin_volume_control_ids: Iterable[int], optional**
  : Set thin volume control ids.

  **multi_zone_control_ids: Iterable[int], optional**
  : Set MultiZone control ids.

  **volume_fill_type: VolumeFillType, optional**
  : Option to fill volume.

  **prism: PrismParams, optional**
  : Prism control parameters.

  **tet: TetParams, optional**
  : Parameters to control tetrahedral mesh generation.

  **hexcore: HexCoreParams, optional**
  : Parameters to control hexahedral mesh generation.

  **volume_control_ids: Iterable[int], optional**
  : Ids of the volume controls.

  **periodic_control_ids: Iterable[int], optional**
  : Ids of the periodic controls.

<!-- !! processed by numpydoc !! -->
