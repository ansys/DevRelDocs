

# RACubeGroup

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RACubeGroup"></a>

### *class* RACubeGroup

**Methods:**

| Name | Description |
|--------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| [`AddCurve`](#generated.RACubeGroup.AddCurve)(curve_name, timesteps, values, unit)                           | Add a curve to the element with a time-steps domain                                                        |
| [`GetCenter`](#generated.RACubeGroup.GetCenter)([unit])                                                      |                                                                                                            |
| [`GetCenterAfterMovement`](#generated.RACubeGroup.GetCenterAfterMovement)(timestep)                          | Get the Process center position considering the assigned motion.                                           |
| [`GetCurve`](#generated.RACubeGroup.GetCurve)(curve_name[, simulation_name, ...])                            | Return the curves for the given element and name.                                                          |
| [`GetCurveNames`](#generated.RACubeGroup.GetCurveNames)([simulation_name])                                   | @param simulation_name: unicode                                                                            |
| [`GetCurveNamesAssociation`](#generated.RACubeGroup.GetCurveNamesAssociation)([simulation_name])             | Get this element's curve names.                                                                            |
| [`GetElementCurve`](#generated.RACubeGroup.GetElementCurve)(element_name, curve_name[, ...])                 | Return the curves for the given element and name.                                                          |
| [`GetMotionFrame`](#generated.RACubeGroup.GetMotionFrame)()                                                  |                                                                                                            |
| [`GetNumpyCurve`](#generated.RACubeGroup.GetNumpyCurve)(curve_name[, unit, realization])                     | Returns a curve as a tuple of numpy arrays (time, property) for the given element and name.                |
| [`GetOrientation`](#generated.RACubeGroup.GetOrientation)([unit])                                            | Get the orientation angles.                                                                                |
| [`GetOrientationFromAngleAndVector`](#generated.RACubeGroup.GetOrientationFromAngleAndVector)([unit])        | Get the current orientation in the form of an angle and a vector.                                          |
| [`GetOrientationFromAngles`](#generated.RACubeGroup.GetOrientationFromAngles)([unit])                        | Get the current orientation in the form of angles.                                                         |
| [`GetOrientationFromBasisVector`](#generated.RACubeGroup.GetOrientationFromBasisVector)()                    | Get the current orientation in the form of three basis vectors.                                            |
| [`GetRotation`](#generated.RACubeGroup.GetRotation)([unit])                                                  |                                                                                                            |
| [`GetSize`](#generated.RACubeGroup.GetSize)([unit])                                                          |                                                                                                            |
| [`SetCenter`](#generated.RACubeGroup.SetCenter)(x, y, z[, unit])                                             | Sets the cube X, Y and Z center                                                                            |
| [`SetMotionFrame`](#generated.RACubeGroup.SetMotionFrame)(motion_frame)                                      | Assign a Motion Frame to the process.                                                                      |
| [`SetOrientation`](#generated.RACubeGroup.SetOrientation)(rotation[, unit])                                  | The rotation is the angles in x, y and z of the rotation in the given unit.                                |
| [`SetOrientationFromAngleAndVector`](#generated.RACubeGroup.SetOrientationFromAngleAndVector)(angle, vector) | The rotation uses the angle and a vector, using unit and changes the orientation mode to Angle and Vector. |
| [`SetOrientationFromAngles`](#generated.RACubeGroup.SetOrientationFromAngles)(rotation[, unit, ...])         | The rotation is the angles in x, y and z of the rotation.                                                  |
| [`SetOrientationFromBasisVector`](#generated.RACubeGroup.SetOrientationFromBasisVector)(vector_x, ...)       | Sets the rotation using three basis vector and changes the orientation mode to Basis Vector.               |
| [`SetRotation`](#generated.RACubeGroup.SetRotation)(x, y, z[, unit])                                         | Sets the cube X, Y and Z rotation                                                                          |
| [`SetSize`](#generated.RACubeGroup.SetSize)(x, y, z[, unit])                                                 | Sets the cube X, Y and Z magnitude                                                                         |

<a id="generated.RACubeGroup.AddCurve"></a>

#### AddCurve(curve_name, timesteps, values, unit, realization=None, timesteps_unit=None, initial_date=None)

Add a curve to the element with a time-steps domain

* **Parameters:**
  * **curve_name** (*unicode* *or* *SemanticAssociation*) – The curve’s name or semantic association
  * **timesteps** (*list* *(**TimeStep* *) or* *list* *(**float* *) or* *TimeSet*) – The list of time-steps, in such case a initial date can be provided
    The list of elapsed time as floats, in such case a timesteps_units can be
    provide or days will be used
    The curve’s TimeSet
  * **values** (*list* *(**float* *)*) – The list of curve image values
  * **unit** (*unicode* *or* *Quantity*) – The curve image unit or quantity
  * **realization** (*unicode*) – An additional keyword to identify the curve realization
  * **timesteps_units** (*unicode*) – The elapsed time values unit
    It should be given if a list of floats is used to define the time-set
    If not given days are assumed
  * **initial_date** (*tuple* *(**int* *,* *int* *,* *int* *,* *int* *,* *int* *,* *int* *) or* *TimeStep*) – The initial date for the time-steps given
    A tuple with the year, month, day, hour, minute and seconds
    Or a TimeStep

<a id="generated.RACubeGroup.GetCenter"></a>

#### GetCenter(unit=None)

* **Return type:**
  tuple(float, float, float)
* **Returns:**
  Returns the X, Y and Z center

<a id="generated.RACubeGroup.GetCenterAfterMovement"></a>

#### GetCenterAfterMovement(timestep: int)

Get the Process center position considering the assigned motion.

* **Returns:**
  Returns the X, Y and Z center

<a id="generated.RACubeGroup.GetCurve"></a>

#### GetCurve(curve_name, simulation_name=None, realization=None, time_step=None)

Return the curves for the given element and name.

* **Parameters:**
  * **curve_name** (*unicode*) – The name of the curve.
  * **simulation_name** (*unicode*) – An optional parameter for defining the simulation to get the curve from.
  * **realization** (*unicode*) – An additional keyword to identify the curve realization
  * **time_step** (*TimeStep*) – For transient curves a time-step must be given.

<a id="generated.RACubeGroup.GetCurveNames"></a>

#### GetCurveNames(simulation_name=None)

@param simulation_name: unicode
: An optional parameter for defining the simulation to get the curve from.

* **Returns:**
  list(str)
  The list of curve names

<a id="generated.RACubeGroup.GetCurveNamesAssociation"></a>

#### GetCurveNamesAssociation(simulation_name=None)

Get this element’s curve names.

* **Parameters:**
  **simulation_name** (*unicode*) – The name of the simulation to query the curve names
  If None is given the current element simulation will be used
* **Return type:**
  dict(unicode, ISemanticAssociation)
* **Returns:**
  The curve names for this element in the given simulation name

<a id="generated.RACubeGroup.GetElementCurve"></a>

#### GetElementCurve(element_name, curve_name, simulation_name=None, realization=None, time_step=None)

Return the curves for the given element and name.

* **Parameters:**
  * **element_name** (*unicode*) – The name of the element
  * **curve_name** (*unicode*) – The name of the curve
  * **simulation_name** (*unicode*) – An optional parameter for defining the simulation to get the curve from.
  * **realization** (*unicode*) – An additional keyword to identify the curve realization
  * **time_step** (*TimeStep*) – For transient curves a time-step must be given.

<a id="generated.RACubeGroup.GetMotionFrame"></a>

#### GetMotionFrame()

* **Returns:**
  The motion frame set in the process, or None if no motion is set.

<a id="generated.RACubeGroup.GetNumpyCurve"></a>

#### GetNumpyCurve(curve_name, unit=None, realization=None)

Returns a curve as a tuple of numpy arrays (time, property) for the given element and name.

<a id="generated.RACubeGroup.GetOrientation"></a>

#### GetOrientation(unit: str = 'dega')

Get the orientation angles. For more specific cases, see: “GetOrientationFromAngles”,
“GetOrientationFromAngleAndVector” and “GetOrientationFromBasisVector”.

<a id="generated.RACubeGroup.GetOrientationFromAngleAndVector"></a>

#### GetOrientationFromAngleAndVector(unit: str = 'dega')

Get the current orientation in the form of an angle and a vector.

<a id="generated.RACubeGroup.GetOrientationFromAngles"></a>

#### GetOrientationFromAngles(unit: str = 'dega')

Get the current orientation in the form of angles.

<a id="generated.RACubeGroup.GetOrientationFromBasisVector"></a>

#### GetOrientationFromBasisVector()

Get the current orientation in the form of three basis vectors.

<a id="generated.RACubeGroup.GetRotation"></a>

#### GetRotation(unit=None)

* **Return type:**
  tuple(float, float, float)
* **Returns:**
  Returns the X, Y and Z cube rotation

<a id="generated.RACubeGroup.GetSize"></a>

#### GetSize(unit: str | None = None)

* **Return type:**
  tuple(float, float, float)
* **Returns:**
  Returns the X, Y and Z cube magnitude

<a id="generated.RACubeGroup.SetCenter"></a>

#### SetCenter(x: float, y: float, z: float, unit: str | None = None)

Sets the cube X, Y and Z center

* **Parameters:**
  * **x** – float
    The center X coordinate
  * **y** – The center Y coordinate
  * **z** – The center Z coordinate
  * **unit** (*str* *|**None*) – The unit of the given values or None if given in meters (m)

<a id="generated.RACubeGroup.SetMotionFrame"></a>

#### SetMotionFrame(motion_frame: [RAMotionFrame](RAMotionFrame.md#generated.RAMotionFrame) | str | None)

Assign a Motion Frame to the process.

* **Parameters:**
  **motion_frame** – Either the API object or its name.

<a id="generated.RACubeGroup.SetOrientation"></a>

#### SetOrientation(rotation: tuple[float, float, float], unit: str = 'dega')

The rotation is the angles in x, y and z of the rotation in the given unit. For more
specific methods, see: “SetOrientationFromAngles”, “SetOrientationFromAngleAndVector” and
“SetOrientationFromBasisVector”.

<a id="generated.RACubeGroup.SetOrientationFromAngleAndVector"></a>

#### SetOrientationFromAngleAndVector(angle: float, vector: tuple[float, float, float], unit: str = 'dega')

The rotation uses the angle and a vector, using unit and changes the orientation mode to
Angle and Vector.

<a id="generated.RACubeGroup.SetOrientationFromAngles"></a>

#### SetOrientationFromAngles(rotation: tuple[float, float, float], unit: str = 'dega', local_angles: bool = True, order: str = 'XYZ')

The rotation is the angles in x, y and z of the rotation. The default unit is dega.
Additionally, local_angles can be used as well an order of the values via kwargs.

<a id="generated.RACubeGroup.SetOrientationFromBasisVector"></a>

#### SetOrientationFromBasisVector(vector_x: tuple[float, float, float], vector_y: tuple[float, float, float], vector_z: tuple[float, float, float])

Sets the rotation using three basis vector and changes the orientation mode to Basis Vector.

<a id="generated.RACubeGroup.SetRotation"></a>

#### SetRotation(x, y, z, unit=None)

Sets the cube X, Y and Z rotation

* **Parameters:**
  * **x** – float
    The X rotation
  * **y** – The Y rotation
  * **z** – The Z rotation
  * **unit** (*str* *|**None*) – The unit of the given values or None if given in degrees (dega)

<a id="generated.RACubeGroup.SetSize"></a>

#### SetSize(x: float, y: float, z: float, unit: str | None = None)

Sets the cube X, Y and Z magnitude

* **Parameters:**
  * **x** – float
    The X magnitude
  * **y** – The Y magnitude
  * **z** – The Z magnitude
  * **unit** (*str* *|**None*) – The unit of the given values or None if given in meters (m)
