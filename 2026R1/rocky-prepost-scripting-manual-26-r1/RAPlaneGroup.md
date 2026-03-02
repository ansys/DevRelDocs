

# RAPlaneGroup

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAPlaneGroup"></a>

### *class* RAPlaneGroup

**Methods:**

| Name |
| --------------------------------------------------------------------------------------------------------------- |
| [`AddCurve`](#generated.RAPlaneGroup.AddCurve)(curve_name, timesteps, values, unit) |
| [`GetCurve`](#generated.RAPlaneGroup.GetCurve)(curve_name[, simulation_name, ...]) |
| [`GetCurveNames`](#generated.RAPlaneGroup.GetCurveNames)([simulation_name]) |
| [`GetCurveNamesAssociation`](#generated.RAPlaneGroup.GetCurveNamesAssociation)([simulation_name]) |
| [`GetElementCurve`](#generated.RAPlaneGroup.GetElementCurve)(element_name, curve_name[, ...]) |
| [`GetMode`](#generated.RAPlaneGroup.GetMode)() |
| [`GetNumpyCurve`](#generated.RAPlaneGroup.GetNumpyCurve)(curve_name[, unit, realization]) |
| [`GetOrientation`](#generated.RAPlaneGroup.GetOrientation)([unit]) |
| [`GetOrientationFromAngleAndVector`](#generated.RAPlaneGroup.GetOrientationFromAngleAndVector)([unit]) |
| [`GetOrientationFromAngles`](#generated.RAPlaneGroup.GetOrientationFromAngles)([unit]) |
| [`GetOrientationFromBasisVector`](#generated.RAPlaneGroup.GetOrientationFromBasisVector)() |
| [`GetOrigin`](#generated.RAPlaneGroup.GetOrigin)([unit]) |
| [`GetType`](#generated.RAPlaneGroup.GetType)() |
| [`SetMode`](#generated.RAPlaneGroup.SetMode)(plane_mode) |
| [`SetOrientation`](#generated.RAPlaneGroup.SetOrientation)(rotation[, unit]) |
| [`SetOrientationFromAngleAndVector`](#generated.RAPlaneGroup.SetOrientationFromAngleAndVector)(angle, vector) |
| [`SetOrientationFromAngles`](#generated.RAPlaneGroup.SetOrientationFromAngles)(rotation[, unit, ...]) |
| [`SetOrientationFromBasisVector`](#generated.RAPlaneGroup.SetOrientationFromBasisVector)(vector_x, ...) |
| [`SetOrigin`](#generated.RAPlaneGroup.SetOrigin)(x, y, z) |
| [`SetType`](#generated.RAPlaneGroup.SetType)(plane_type) |

<a id="generated.RAPlaneGroup.AddCurve"></a>

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

<a id="generated.RAPlaneGroup.GetCurve"></a>

#### GetCurve(curve_name, simulation_name=None, realization=None, time_step=None)

Return the curves for the given element and name.

* **Parameters:**
  * **curve_name** (*unicode*) – The name of the curve.
  * **simulation_name** (*unicode*) – An optional parameter for defining the simulation to get the curve from.
  * **realization** (*unicode*) – An additional keyword to identify the curve realization
  * **time_step** (*TimeStep*) – For transient curves a time-step must be given.

<a id="generated.RAPlaneGroup.GetCurveNames"></a>

#### GetCurveNames(simulation_name=None)

@param simulation_name: unicode
: An optional parameter for defining the simulation to get the curve from.

* **Returns:**
  list(str)
  The list of curve names

<a id="generated.RAPlaneGroup.GetCurveNamesAssociation"></a>

#### GetCurveNamesAssociation(simulation_name=None)

Get this element’s curve names.

* **Parameters:**
  **simulation_name** (*unicode*) – The name of the simulation to query the curve names
  If None is given the current element simulation will be used
* **Return type:**
  dict(unicode, ISemanticAssociation)
* **Returns:**
  The curve names for this element in the given simulation name

<a id="generated.RAPlaneGroup.GetElementCurve"></a>

#### GetElementCurve(element_name, curve_name, simulation_name=None, realization=None, time_step=None)

Return the curves for the given element and name.

* **Parameters:**
  * **element_name** (*unicode*) – The name of the element
  * **curve_name** (*unicode*) – The name of the curve
  * **simulation_name** (*unicode*) – An optional parameter for defining the simulation to get the curve from.
  * **realization** (*unicode*) – An additional keyword to identify the curve realization
  * **time_step** (*TimeStep*) – For transient curves a time-step must be given.

<a id="generated.RAPlaneGroup.GetMode"></a>

#### GetMode()

* **Returns:**
  ‘Exact’ or ‘Select’, whether the plane process is selecting or cutting the cell’s from the input process.

<a id="generated.RAPlaneGroup.GetNumpyCurve"></a>

#### GetNumpyCurve(curve_name, unit=None, realization=None)

Returns a curve as a tuple of numpy arrays (time, property) for the given element and name.

<a id="generated.RAPlaneGroup.GetOrientation"></a>

#### GetOrientation(unit: str = 'dega')

Get the orientation angles. For more specific cases, see: “GetOrientationFromAngles”,
“GetOrientationFromAngleAndVector” and “GetOrientationFromBasisVector”.

<a id="generated.RAPlaneGroup.GetOrientationFromAngleAndVector"></a>

#### GetOrientationFromAngleAndVector(unit: str = 'dega')

Get the current orientation in the form of an angle and a vector.

<a id="generated.RAPlaneGroup.GetOrientationFromAngles"></a>

#### GetOrientationFromAngles(unit: str = 'dega')

Get the current orientation in the form of angles.

<a id="generated.RAPlaneGroup.GetOrientationFromBasisVector"></a>

#### GetOrientationFromBasisVector()

Get the current orientation in the form of three basis vectors.

<a id="generated.RAPlaneGroup.GetOrigin"></a>

#### GetOrigin(unit=None)

* **Returns:**
  Returns the X, Y and Z plane origin

<a id="generated.RAPlaneGroup.GetType"></a>

#### GetType()

* **Returns:**
  ‘Cut’ or ‘Clip’, whether the plane process is cutting or clipping the input process.

<a id="generated.RAPlaneGroup.SetMode"></a>

#### SetMode(plane_mode: str)

* **Parameters:**
  **plane_mode** – ‘Exact’ or ‘Select’
  Sets whether the plane process is selecting or cutting the cell’s from the input process

<a id="generated.RAPlaneGroup.SetOrientation"></a>

#### SetOrientation(rotation: tuple[float, float, float], unit: str = 'dega')

The rotation is the angles in x, y and z of the rotation in the given unit. For more
specific methods, see: “SetOrientationFromAngles”, “SetOrientationFromAngleAndVector” and
“SetOrientationFromBasisVector”.

<a id="generated.RAPlaneGroup.SetOrientationFromAngleAndVector"></a>

#### SetOrientationFromAngleAndVector(angle: float, vector: tuple[float, float, float], unit: str = 'dega')

The rotation uses the angle and a vector, using unit and changes the orientation mode to
Angle and Vector.

<a id="generated.RAPlaneGroup.SetOrientationFromAngles"></a>

#### SetOrientationFromAngles(rotation: tuple[float, float, float], unit: str = 'dega', local_angles: bool = True, order: str = 'XYZ')

The rotation is the angles in x, y and z of the rotation. The default unit is dega.
Additionally, local_angles can be used as well an order of the values via kwargs.

<a id="generated.RAPlaneGroup.SetOrientationFromBasisVector"></a>

#### SetOrientationFromBasisVector(vector_x: tuple[float, float, float], vector_y: tuple[float, float, float], vector_z: tuple[float, float, float])

Sets the rotation using three basis vector and changes the orientation mode to Basis Vector.

<a id="generated.RAPlaneGroup.SetOrigin"></a>

#### SetOrigin(x: float, y: float, z: float)

* **Parameters:**
  * **x**
  * **y**
  * **z**

<a id="generated.RAPlaneGroup.SetType"></a>

#### SetType(plane_type: str)

* **Parameters:**
  **plane_type** – ‘Cut’ or ‘Clip’, sets whether the plane process is cutting or clipping the input process.
