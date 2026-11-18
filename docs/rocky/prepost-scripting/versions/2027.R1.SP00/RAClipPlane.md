

# RAClipPlane

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAClipPlane"></a>

### *class* RAClipPlane

Rocky PrePost Scripting wrapper for a single Clip Plane.

This wrapper class corresponds to an individual entry under the “3D Clip Planes” item on the project’s
data tree. Clip Planes can be retrieved from the [`RAClipPlaneCollection`](RAClipPlaneCollection.md#generated.RAClipPlaneCollection) via:

```python
clip_plane = clip_plane_collection.GetClipPlane('Clip Plane <1>')
```

**Methods:**

| Name | Description |
|--------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| [`DisableTool`](#generated.RAClipPlane.DisableTool)()                                                        | Set the value of "Tool" to False.                                                                          |
| [`EnableTool`](#generated.RAClipPlane.EnableTool)()                                                          | Set the value of "Tool" to True.                                                                           |
| [`GetMotionFrame`](#generated.RAClipPlane.GetMotionFrame)()                                                  |                                                                                                            |
| [`GetOrientation`](#generated.RAClipPlane.GetOrientation)([unit])                                            | Get the orientation angles.                                                                                |
| [`GetOrientationFromAngleAndVector`](#generated.RAClipPlane.GetOrientationFromAngleAndVector)([unit])        | Get the current orientation in the form of an angle and a vector.                                          |
| [`GetOrientationFromAngles`](#generated.RAClipPlane.GetOrientationFromAngles)([unit])                        | Get the current orientation in the form of angles.                                                         |
| [`GetOrientationFromBasisVector`](#generated.RAClipPlane.GetOrientationFromBasisVector)()                    | Get the current orientation in the form of three basis vectors.                                            |
| [`GetOrigin`](#generated.RAClipPlane.GetOrigin)([unit])                                                      | Returns the X, Y and Z plane origin                                                                        |
| [`GetPlaneOrigin`](#generated.RAClipPlane.GetPlaneOrigin)([unit])                                            | Get the value of "Plane Origin".                                                                           |
| [`GetRelativeRotationVector`](#generated.RAClipPlane.GetRelativeRotationVector)()                            | Returns the X, Y and Z parameters of the plane normal                                                      |
| [`GetShowTool`](#generated.RAClipPlane.GetShowTool)()                                                        | Get the value of "Show Tool".                                                                              |
| [`IsToolEnabled`](#generated.RAClipPlane.IsToolEnabled)()                                                    | Check if the "Tool" is enabled.                                                                            |
| [`SetMotionFrame`](#generated.RAClipPlane.SetMotionFrame)(motion_frame)                                      | Assign a Motion Frame to the process.                                                                      |
| [`SetOrientation`](#generated.RAClipPlane.SetOrientation)(rotation[, unit])                                  | The rotation is the angles in x, y and z of the rotation in the given unit.                                |
| [`SetOrientationFromAngleAndVector`](#generated.RAClipPlane.SetOrientationFromAngleAndVector)(angle, vector) | The rotation uses the angle and a vector, using unit and changes the orientation mode to Angle and Vector. |
| [`SetOrientationFromAngles`](#generated.RAClipPlane.SetOrientationFromAngles)(rotation[, unit, ...])         | The rotation is the angles in x, y and z of the rotation.                                                  |
| [`SetOrientationFromBasisVector`](#generated.RAClipPlane.SetOrientationFromBasisVector)(vector_x, ...)       | Sets the rotation using three basis vector and changes the orientation mode to Basis Vector.               |
| [`SetOrigin`](#generated.RAClipPlane.SetOrigin)(x, y, z[, unit])                                             | Set the X, Y and Z parameters of the plane origin                                                          |
| [`SetPlaneOrigin`](#generated.RAClipPlane.SetPlaneOrigin)(values[, unit])                                    | Set the values of "Plane Origin".                                                                          |
| [`SetRelativeRotationVector`](#generated.RAClipPlane.SetRelativeRotationVector)(x, y, z)                     | Set the X, Y and Z parameters of the plane normal                                                          |
| [`SetShowTool`](#generated.RAClipPlane.SetShowTool)(value)                                                   | Set the value of "Show Tool".                                                                              |

<a id="generated.RAClipPlane.DisableTool"></a>

#### DisableTool()

Set the value of “Tool” to False.

<a id="generated.RAClipPlane.EnableTool"></a>

#### EnableTool()

Set the value of “Tool” to True.

<a id="generated.RAClipPlane.GetMotionFrame"></a>

#### GetMotionFrame()

* **Returns:**
  The motion frame set in the process, or None if no motion is set.

<a id="generated.RAClipPlane.GetOrientation"></a>

#### GetOrientation(unit: str = 'dega')

Get the orientation angles. For more specific cases, see: “GetOrientationFromAngles”,
“GetOrientationFromAngleAndVector” and “GetOrientationFromBasisVector”.

<a id="generated.RAClipPlane.GetOrientationFromAngleAndVector"></a>

#### GetOrientationFromAngleAndVector(unit: str = 'dega')

Get the current orientation in the form of an angle and a vector.

<a id="generated.RAClipPlane.GetOrientationFromAngles"></a>

#### GetOrientationFromAngles(unit: str = 'dega')

Get the current orientation in the form of angles.

<a id="generated.RAClipPlane.GetOrientationFromBasisVector"></a>

#### GetOrientationFromBasisVector()

Get the current orientation in the form of three basis vectors.

<a id="generated.RAClipPlane.GetOrigin"></a>

#### GetOrigin(unit: str | None = None)

Returns the X, Y and Z plane origin

<a id="generated.RAClipPlane.GetPlaneOrigin"></a>

#### GetPlaneOrigin(unit: str | None = None)

Get the value of “Plane Origin”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “m”.

<a id="generated.RAClipPlane.GetRelativeRotationVector"></a>

#### GetRelativeRotationVector()

Returns the X, Y and Z parameters of the plane normal

<a id="generated.RAClipPlane.GetShowTool"></a>

#### GetShowTool()

Get the value of “Show Tool”.

<a id="generated.RAClipPlane.IsToolEnabled"></a>

#### IsToolEnabled()

Check if the “Tool” is enabled.

<a id="generated.RAClipPlane.SetMotionFrame"></a>

#### SetMotionFrame(motion_frame: RAMotionFrame | str | None)

Assign a Motion Frame to the process.

* **Parameters:**
  **motion_frame** – Either the API object or its name.

<a id="generated.RAClipPlane.SetOrientation"></a>

#### SetOrientation(rotation: tuple[float, float, float], unit: str = 'dega')

The rotation is the angles in x, y and z of the rotation in the given unit. For more
specific methods, see: “SetOrientationFromAngles”, “SetOrientationFromAngleAndVector” and
“SetOrientationFromBasisVector”.

<a id="generated.RAClipPlane.SetOrientationFromAngleAndVector"></a>

#### SetOrientationFromAngleAndVector(angle: float, vector: tuple[float, float, float], unit: str = 'dega')

The rotation uses the angle and a vector, using unit and changes the orientation mode to
Angle and Vector.

<a id="generated.RAClipPlane.SetOrientationFromAngles"></a>

#### SetOrientationFromAngles(rotation: tuple[float, float, float], unit: str = 'dega', local_angles: bool = True, order: str = 'XYZ')

The rotation is the angles in x, y and z of the rotation. The default unit is dega.
Additionally, local_angles can be used as well an order of the values via kwargs.

<a id="generated.RAClipPlane.SetOrientationFromBasisVector"></a>

#### SetOrientationFromBasisVector(vector_x: tuple[float, float, float], vector_y: tuple[float, float, float], vector_z: tuple[float, float, float])

Sets the rotation using three basis vector and changes the orientation mode to Basis Vector.

<a id="generated.RAClipPlane.SetOrigin"></a>

#### SetOrigin(x: float, y: float, z: float, unit: str | None = None)

Set the X, Y and Z parameters of the plane origin

<a id="generated.RAClipPlane.SetPlaneOrigin"></a>

#### SetPlaneOrigin(values: Sequence[str | float], unit: str | None = None)

Set the values of “Plane Origin”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “m”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

<a id="generated.RAClipPlane.SetRelativeRotationVector"></a>

#### SetRelativeRotationVector(x: float, y: float, z: float)

Set the X, Y and Z parameters of the plane normal

<a id="generated.RAClipPlane.SetShowTool"></a>

#### SetShowTool(value: bool)

Set the value of “Show Tool”.

* **Parameters:**
  **value** – The value to set.
