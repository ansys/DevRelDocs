# ExtractVolumesParams

<a id="ansys.meshing.prime.ExtractVolumesParams"></a>

### *class* ansys.meshing.prime.ExtractVolumesParams(model=None, create_zone=None, suggested_zone_name=None, json_data=None, \*\*kwargs)

Parameters to extract flow volumes.

* **Parameters:**

  **model: Model**
  : Model to create a `ExtractVolumesParams` object with default parameters.

  **create_zone: bool, optional**
  : Option to create zone for flow volumes extracted.

  **suggested_zone_name: str, optional**
  : Name suggested for the created zone. If there is a volume zone existing with suggested name, then extracted flow volumes will be added to it.

  **json_data: dict, optional**
  : JSON dictionary to create a `ExtractVolumesParams` object with provided parameters.

### Examples

```pycon
>>> extract_volumes_params = prime.ExtractVolumesParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| [`ExtractVolumesParams.print_default`](ansys.meshing.prime.ExtractVolumesParams.print_default.md#ansys.meshing.prime.ExtractVolumesParams.print_default)()   | Print the default values of `ExtractVolumesParams` object.   |
| [`ExtractVolumesParams.set_default`](ansys.meshing.prime.ExtractVolumesParams.set_default.md#ansys.meshing.prime.ExtractVolumesParams.set_default)([...])    | Set the default values of the `ExtractVolumesParams` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| [`ExtractVolumesParams.create_zone`](ansys.meshing.prime.ExtractVolumesParams.create_zone.md#ansys.meshing.prime.ExtractVolumesParams.create_zone)                         | Option to create zone for flow volumes extracted.   |
| [`ExtractVolumesParams.suggested_zone_name`](ansys.meshing.prime.ExtractVolumesParams.suggested_zone_name.md#ansys.meshing.prime.ExtractVolumesParams.suggested_zone_name) | Name suggested for the created zone.                |
<!-- vale on -->