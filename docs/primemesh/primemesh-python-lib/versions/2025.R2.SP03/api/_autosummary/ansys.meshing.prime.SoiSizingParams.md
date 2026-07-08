# SoiSizingParams

<a id="ansys.meshing.prime.SoiSizingParams"></a>

### *class* ansys.meshing.prime.SoiSizingParams(model=None, centers=None, radius=None, max=None, growth_rate=None, json_data=None, \*\*kwargs)

Parameters for sphere of influence size control.

* **Parameters:**

  **model: Model**
  : Model to create a `SoiSizingParams` object with default parameters.

  **centers: Iterable[float], optional**
  : Centers of the spheres within which the size is limited to the specified max value.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **radius: float, optional**
  : Radius of the sphere within which the size is limited to the specified max value.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **max: float, optional**
  : Maximum size within the sphere.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **growth_rate: float, optional**
  : The rate at which size grows outwards from the sphere boundary.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `SoiSizingParams` object with provided parameters.

### Examples

```pycon
>>> soi_sizing_params = prime.SoiSizingParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| [`SoiSizingParams.print_default`](ansys.meshing.prime.SoiSizingParams.print_default.md#ansys.meshing.prime.SoiSizingParams.print_default)()         | Print the default values of `SoiSizingParams` object.   |
| [`SoiSizingParams.set_default`](ansys.meshing.prime.SoiSizingParams.set_default.md#ansys.meshing.prime.SoiSizingParams.set_default)([centers, ...]) | Set the default values of the `SoiSizingParams` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| [`SoiSizingParams.centers`](ansys.meshing.prime.SoiSizingParams.centers.md#ansys.meshing.prime.SoiSizingParams.centers)             | Centers of the spheres within which the size is limited to the specified max value.   |
| [`SoiSizingParams.growth_rate`](ansys.meshing.prime.SoiSizingParams.growth_rate.md#ansys.meshing.prime.SoiSizingParams.growth_rate) | The rate at which size grows outwards from the sphere boundary.                       |
| [`SoiSizingParams.max`](ansys.meshing.prime.SoiSizingParams.max.md#ansys.meshing.prime.SoiSizingParams.max)                         | Maximum size within the sphere.                                                       |
| [`SoiSizingParams.radius`](ansys.meshing.prime.SoiSizingParams.radius.md#ansys.meshing.prime.SoiSizingParams.radius)                | Radius of the sphere within which the size is limited to the specified max value.     |
<!-- vale on -->