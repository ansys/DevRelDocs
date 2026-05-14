# ExtractTopoVolumesParams

<a id="ansys.meshing.prime.ExtractTopoVolumesParams"></a>

### *class* ansys.meshing.prime.ExtractTopoVolumesParams(model=None, zone_name=None, json_data=None, \*\*kwargs)

Parameters to extract flow topovolumes.

* **Parameters:**

  **model: Model**
  : Model to create a `ExtractTopoVolumesParams` object with default parameters.

  **zone_name: str, optional**
  : Specifies zone name to associate extracted flow topovolumes.

  **json_data: dict, optional**
  : JSON dictionary to create a `ExtractTopoVolumesParams` object with provided parameters.

### Examples

```pycon
>>> extract_topo_volumes_params = prime.ExtractTopoVolumesParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| [`ExtractTopoVolumesParams.print_default`](ansys.meshing.prime.ExtractTopoVolumesParams.print_default.md#ansys.meshing.prime.ExtractTopoVolumesParams.print_default)()      | Print the default values of `ExtractTopoVolumesParams` object.   |
| [`ExtractTopoVolumesParams.set_default`](ansys.meshing.prime.ExtractTopoVolumesParams.set_default.md#ansys.meshing.prime.ExtractTopoVolumesParams.set_default)([zone_name]) | Set the default values of the `ExtractTopoVolumesParams` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| [`ExtractTopoVolumesParams.zone_name`](ansys.meshing.prime.ExtractTopoVolumesParams.zone_name.md#ansys.meshing.prime.ExtractTopoVolumesParams.zone_name)   | Specifies zone name to associate extracted flow topovolumes.   |
<!-- vale on -->