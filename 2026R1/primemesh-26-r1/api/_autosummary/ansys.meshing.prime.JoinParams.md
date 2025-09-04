# JoinParams

<a id="ansys.meshing.prime.JoinParams"></a>

### *class* ansys.meshing.prime.JoinParams(model=None, tolerance=None, use_absolute_tolerance=None, remesh=None, match_angle=None, overlap_zone_name=None, json_data=None, \*\*kwargs)

Parameters used for join.

* **Parameters:**

  **model: Model**
  : Model to create a `JoinParams` object with default parameters.

  **tolerance: float, optional**
  : Overlap tolerance between overlapping zonelets.

  **use_absolute_tolerance: bool, optional**
  : Tolerance provided is absolute value.

  **remesh: bool, optional**
  : Remesh at overlap surface boundary.

  **match_angle: float, optional**
  : Match angle determines face pair inclination for overlap consideration.

  **overlap_zone_name: str, optional**
  : Zone id to be assigned to overlap zonelets belonging to different zones.

  **json_data: dict, optional**
  : JSON dictionary to create a `JoinParams` object with provided parameters.

### Examples

```pycon
>>> join_params = prime.JoinParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
| [`JoinParams.print_default`](ansys.meshing.prime.JoinParams.print_default.md#ansys.meshing.prime.JoinParams.print_default)()           | Print the default values of `JoinParams` object.   |
| [`JoinParams.set_default`](ansys.meshing.prime.JoinParams.set_default.md#ansys.meshing.prime.JoinParams.set_default)([tolerance, ...]) | Set the default values of the `JoinParams` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| [`JoinParams.match_angle`](ansys.meshing.prime.JoinParams.match_angle.md#ansys.meshing.prime.JoinParams.match_angle)                                  | Match angle determines face pair inclination for overlap consideration.   |
| [`JoinParams.overlap_zone_name`](ansys.meshing.prime.JoinParams.overlap_zone_name.md#ansys.meshing.prime.JoinParams.overlap_zone_name)                | Zone id to be assigned to overlap zonelets belonging to different zones.  |
| [`JoinParams.remesh`](ansys.meshing.prime.JoinParams.remesh.md#ansys.meshing.prime.JoinParams.remesh)                                                 | Remesh at overlap surface boundary.                                       |
| [`JoinParams.tolerance`](ansys.meshing.prime.JoinParams.tolerance.md#ansys.meshing.prime.JoinParams.tolerance)                                        | Overlap tolerance between overlapping zonelets.                           |
| [`JoinParams.use_absolute_tolerance`](ansys.meshing.prime.JoinParams.use_absolute_tolerance.md#ansys.meshing.prime.JoinParams.use_absolute_tolerance) | Tolerance provided is absolute value.                                     |
<!-- vale on -->