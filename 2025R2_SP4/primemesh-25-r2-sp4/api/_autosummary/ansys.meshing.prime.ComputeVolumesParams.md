# ComputeVolumesParams

<a id="ansys.meshing.prime.ComputeVolumesParams"></a>

### *class* ansys.meshing.prime.ComputeVolumesParams(model=None, volume_naming_type=None, create_zones_type=None, priority_ordered_names=None, material_point_names=None, json_data=None, \*\*kwargs)

Parameters to compute volumes.

* **Parameters:**

  **model: Model**
  : Model to create a `ComputeVolumesParams` object with default parameters.

  **volume_naming_type: VolumeNamingType, optional**
  : Indicates source type used to compute zone name for volumes.

  **create_zones_type: CreateVolumeZonesType, optional**
  : Option to control volume zone creation for volumes.

  **priority_ordered_names: List[str], optional**
  : Zone names for volumes are identified based on the priority in the list. Position index of name in the list determines its priority. Lower the index, higher the priority. Name with highest priority among names from volumeNamingType of face zonelets is identified as zone name for volume. Lowest priority is assigned to all names that are not in the list. When all names identified are of lowest priority, names having higher surface area of faces zonelets are identified as zone name for volume.

  **material_point_names: List[str], optional**
  : Material point names provided to identify volumes. Material point names will have precedence over the volume names.

  **json_data: dict, optional**
  : JSON dictionary to create a `ComputeVolumesParams` object with provided parameters.

### Examples

```pycon
>>> compute_volumes_params = prime.ComputeVolumesParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| [`ComputeVolumesParams.print_default`](ansys.meshing.prime.ComputeVolumesParams.print_default.md#ansys.meshing.prime.ComputeVolumesParams.print_default)()   | Print the default values of `ComputeVolumesParams` object.   |
| [`ComputeVolumesParams.set_default`](ansys.meshing.prime.ComputeVolumesParams.set_default.md#ansys.meshing.prime.ComputeVolumesParams.set_default)([...])    | Set the default values of the `ComputeVolumesParams` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`ComputeVolumesParams.create_zones_type`](ansys.meshing.prime.ComputeVolumesParams.create_zones_type.md#ansys.meshing.prime.ComputeVolumesParams.create_zones_type)                | Option to control volume zone creation for volumes.                      |
| [`ComputeVolumesParams.material_point_names`](ansys.meshing.prime.ComputeVolumesParams.material_point_names.md#ansys.meshing.prime.ComputeVolumesParams.material_point_names)       | Material point names provided to identify volumes.                       |
| [`ComputeVolumesParams.priority_ordered_names`](ansys.meshing.prime.ComputeVolumesParams.priority_ordered_names.md#ansys.meshing.prime.ComputeVolumesParams.priority_ordered_names) | Zone names for volumes are identified based on the priority in the list. |
| [`ComputeVolumesParams.volume_naming_type`](ansys.meshing.prime.ComputeVolumesParams.volume_naming_type.md#ansys.meshing.prime.ComputeVolumesParams.volume_naming_type)             | Indicates source type used to compute zone name for volumes.             |
<!-- vale on -->