# VolumeControlParams

<a id="ansys.meshing.prime.VolumeControlParams"></a>

### *class* ansys.meshing.prime.VolumeControlParams(model=None, cell_zonelet_type=None, skip_hexcore=None, json_data=None, \*\*kwargs)

Volume control parameters are used to define the volume type in the volume control.

* **Parameters:**

  **model: Model**
  : Model to create a `VolumeControlParams` object with default parameters.

  **cell_zonelet_type: CellZoneletType, optional**
  : Cell zonelet type is used to define the type of the associated volume.

  **skip_hexcore: bool, optional**
  : Check whether to skip hexahedral cells generation in the core for this volume or not. Applicable only for volumeFillType set to HexcoreTet or HexcorePoly in the AutoMeshParams structure.

  **json_data: dict, optional**
  : JSON dictionary to create a `VolumeControlParams` object with provided parameters.

### Examples

```pycon
>>> volume_control_params = prime.VolumeControlParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| [`VolumeControlParams.print_default`](ansys.meshing.prime.VolumeControlParams.print_default.md#ansys.meshing.prime.VolumeControlParams.print_default)()   | Print the default values of `VolumeControlParams` object.   |
| [`VolumeControlParams.set_default`](ansys.meshing.prime.VolumeControlParams.set_default.md#ansys.meshing.prime.VolumeControlParams.set_default)([...])    | Set the default values of the `VolumeControlParams` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| [`VolumeControlParams.cell_zonelet_type`](ansys.meshing.prime.VolumeControlParams.cell_zonelet_type.md#ansys.meshing.prime.VolumeControlParams.cell_zonelet_type)   | Cell zonelet type is used to define the type of the associated volume.                |
| [`VolumeControlParams.skip_hexcore`](ansys.meshing.prime.VolumeControlParams.skip_hexcore.md#ansys.meshing.prime.VolumeControlParams.skip_hexcore)                  | Check whether to skip hexahedral cells generation in the core for this volume or not. |

<!-- vale on -->
