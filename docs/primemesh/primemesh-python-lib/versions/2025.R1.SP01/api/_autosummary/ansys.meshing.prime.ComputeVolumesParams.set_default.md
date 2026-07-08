# set_default

<a id="ansys.meshing.prime.ComputeVolumesParams.set_default"></a>

#### *static* ComputeVolumesParams.set_default(volume_naming_type=None, create_zones_type=None, priority_ordered_names=None, material_point_names=None)

Set the default values of the `ComputeVolumesParams` object.

* **Parameters:**

  **volume_naming_type: VolumeNamingType, optional**
  : Indicates source type used to compute zone name for volumes.

  **create_zones_type: CreateVolumeZonesType, optional**
  : Option to control volume zone creation for volumes.

  **priority_ordered_names: List[str], optional**
  : Zone names for volumes are identified based on the priority in the list. Position index of name in the list determines its priority. Lower the index, higher the priority. Name with highest priority among names from volumeNamingType of face zonelets is identified as zone name for volume. Lowest priority is assigned to all names that are not in the list. When all names identified are of lowest priority, names having higher surface area of faces zonelets are identified as zone name for volume.

  **material_point_names: List[str], optional**
  : Material point names provided to identify volumes. Material point names will have precedence over the volume names.

<!-- !! processed by numpydoc !! -->
