<!-- vale off -->

<a id="automeshparams"></a>

# AutoMeshParams

<a id="ansys.meshing.prime.AutoMeshParams"></a>

### *class* ansys.meshing.prime.AutoMeshParams(model=None, size_field_type=None, max_size=None, prism_control_ids=None, thin_volume_control_ids=None, multi_zone_control_ids=None, volume_fill_type=None, prism=None, tet=None, hexcore=None, volume_control_ids=None, periodic_control_ids=None, json_data=None, \*\*kwargs)

Parameters for volume meshing.

* **Parameters:**

  **model: Model**
  : Model to create a `AutoMeshParams` object with default parameters.

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

  **json_data: dict, optional**
  : JSON dictionary to create a `AutoMeshParams` object with provided parameters.

### Examples

```pycon
>>> auto_mesh_params = prime.AutoMeshParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| [`AutoMeshParams.print_default`](ansys.meshing.prime.AutoMeshParams.print_default.md#ansys.meshing.prime.AutoMeshParams.print_default)()   | Print the default values of `AutoMeshParams` object.   |
| [`AutoMeshParams.set_default`](ansys.meshing.prime.AutoMeshParams.set_default.md#ansys.meshing.prime.AutoMeshParams.set_default)([...])    | Set the default values of the `AutoMeshParams` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| [`AutoMeshParams.hexcore`](ansys.meshing.prime.AutoMeshParams.hexcore.md#ansys.meshing.prime.AutoMeshParams.hexcore)                                                 | Parameters to control hexahedral mesh generation.   |
| [`AutoMeshParams.max_size`](ansys.meshing.prime.AutoMeshParams.max_size.md#ansys.meshing.prime.AutoMeshParams.max_size)                                              | Maximum cell size.                                  |
| [`AutoMeshParams.multi_zone_control_ids`](ansys.meshing.prime.AutoMeshParams.multi_zone_control_ids.md#ansys.meshing.prime.AutoMeshParams.multi_zone_control_ids)    | Set MultiZone control ids.                          |
| [`AutoMeshParams.periodic_control_ids`](ansys.meshing.prime.AutoMeshParams.periodic_control_ids.md#ansys.meshing.prime.AutoMeshParams.periodic_control_ids)          | Ids of the periodic controls.                       |
| [`AutoMeshParams.prism`](ansys.meshing.prime.AutoMeshParams.prism.md#ansys.meshing.prime.AutoMeshParams.prism)                                                       | Prism control parameters.                           |
| [`AutoMeshParams.prism_control_ids`](ansys.meshing.prime.AutoMeshParams.prism_control_ids.md#ansys.meshing.prime.AutoMeshParams.prism_control_ids)                   | Set prism control ids.                              |
| [`AutoMeshParams.size_field_type`](ansys.meshing.prime.AutoMeshParams.size_field_type.md#ansys.meshing.prime.AutoMeshParams.size_field_type)                         | Type of sizing to be used to generate volume mesh.  |
| [`AutoMeshParams.tet`](ansys.meshing.prime.AutoMeshParams.tet.md#ansys.meshing.prime.AutoMeshParams.tet)                                                             | Parameters to control tetrahedral mesh generation.  |
| [`AutoMeshParams.thin_volume_control_ids`](ansys.meshing.prime.AutoMeshParams.thin_volume_control_ids.md#ansys.meshing.prime.AutoMeshParams.thin_volume_control_ids) | Set thin volume control ids.                        |
| [`AutoMeshParams.volume_control_ids`](ansys.meshing.prime.AutoMeshParams.volume_control_ids.md#ansys.meshing.prime.AutoMeshParams.volume_control_ids)                | Ids of the volume controls.                         |
| [`AutoMeshParams.volume_fill_type`](ansys.meshing.prime.AutoMeshParams.volume_fill_type.md#ansys.meshing.prime.AutoMeshParams.volume_fill_type)                      | Option to fill volume.                              |
<!-- vale on -->