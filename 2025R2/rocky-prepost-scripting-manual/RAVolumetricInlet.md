

# RAVolumetricInlet

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAVolumetricInlet"></a>

### *class* RAVolumetricInlet

Rocky PrePost Scripting wrapper for a single Volume Fill input.

This wrapper class corresponds to an individual entry under the “Inputs” item on the project’s
data tree. Particle inputs can be retrieved from the [`RAStudy`](RAStudy.md#generated.RAStudy) or the
[`RAInletsOutletsCollection`](RAInletsOutletsCollection.md#generated.RAInletsOutletsCollection) via:

```python
input_1 = study.GetElement('Volume Fill <1>')
input_2 = input_collection.GetParticleInput('Volume Fill <2>')
```

Instances of [`RAVolumetricInlet`](#generated.RAVolumetricInlet) comprise two parts: Properties that can be manipulated
directly, such as the input’s name and the seed point, and the input properties list
that describe which particles enter via this input and with its mass, temperature, etc.
This list must be manipulated via the `RAParticleInputPropertiesList` returned by
[`GetInputPropertiesList()`](#generated.RAVolumetricInlet.GetInputPropertiesList).

**Methods:**

| [`DisablePeriodic`](#generated.RAVolumetricInlet.DisablePeriodic)()                                                | Set the value of "Periodic" to False.                                                                      |
|--------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| [`EnablePeriodic`](#generated.RAVolumetricInlet.EnablePeriodic)()                                                  | Set the value of "Periodic" to True.                                                                       |
| [`GetAvailableGeometries`](#generated.RAVolumetricInlet.GetAvailableGeometries)()                                  | Get all available Geometries.                                                                              |
| [`GetBoxCenter`](#generated.RAVolumetricInlet.GetBoxCenter)([unit])                                                | Get the value of "Box Center".                                                                             |
| [`GetBoxDimensions`](#generated.RAVolumetricInlet.GetBoxDimensions)([unit])                                        | Get the value of "Box Dimensions".                                                                         |
| [`GetGapScaleFactor`](#generated.RAVolumetricInlet.GetGapScaleFactor)()                                            | Get the value of "Gap Scale Factor".                                                                       |
| [`GetGeometries`](#generated.RAVolumetricInlet.GetGeometries)()                                                    | Get the "Geometries".                                                                                      |
| [`GetInitialVelocity`](#generated.RAVolumetricInlet.GetInitialVelocity)([unit])                                    | Get the value of "Initial Velocity".                                                                       |
| [`GetInjectionTime`](#generated.RAVolumetricInlet.GetInjectionTime)([unit])                                        | Get the value of "Injection Time".                                                                         |
| [`GetInputPropertiesList`](#generated.RAVolumetricInlet.GetInputPropertiesList)()                                  | Return a list of input properties                                                                          |
| [`GetOrientation`](#generated.RAVolumetricInlet.GetOrientation)([unit])                                            | Get the orientation angles.                                                                                |
| [`GetOrientationFromAngleAndVector`](#generated.RAVolumetricInlet.GetOrientationFromAngleAndVector)([unit])        | Get the current orientation in the form of an angle and a vector.                                          |
| [`GetOrientationFromAngles`](#generated.RAVolumetricInlet.GetOrientationFromAngles)([unit])                        | Get the current orientation in the form of angles.                                                         |
| [`GetOrientationFromBasisVector`](#generated.RAVolumetricInlet.GetOrientationFromBasisVector)()                    | Get the current orientation in the form of three basis vectors.                                            |
| [`GetPeriod`](#generated.RAVolumetricInlet.GetPeriod)([unit])                                                      | Get the value of "Period".                                                                                 |
| [`GetPeriodic`](#generated.RAVolumetricInlet.GetPeriodic)()                                                        | Get the value of "Periodic".                                                                               |
| [`GetSeedCoordinates`](#generated.RAVolumetricInlet.GetSeedCoordinates)([unit])                                    | Get the value of "Seed Coordinates".                                                                       |
| [`GetSphMass`](#generated.RAVolumetricInlet.GetSphMass)([unit])                                                    | Get the value of "Sph Mass".                                                                               |
| [`GetSphTemperature`](#generated.RAVolumetricInlet.GetSphTemperature)([unit])                                      | Get the value of "Sph Temperature".                                                                        |
| [`GetStopTime`](#generated.RAVolumetricInlet.GetStopTime)([unit])                                                  | Get the value of "Stop Time".                                                                              |
| [`GetUseGeometriesToCompute`](#generated.RAVolumetricInlet.GetUseGeometriesToCompute)()                            | Get the value of "Use Geometries To Compute".                                                              |
| [`IsPeriodicEnabled`](#generated.RAVolumetricInlet.IsPeriodicEnabled)()                                            | Check if the "Periodic" is enabled.                                                                        |
| [`SetBoxCenter`](#generated.RAVolumetricInlet.SetBoxCenter)(values[, unit])                                        | Set the values of "Box Center".                                                                            |
| [`SetBoxDimensions`](#generated.RAVolumetricInlet.SetBoxDimensions)(values[, unit])                                | Set the values of "Box Dimensions".                                                                        |
| [`SetGapScaleFactor`](#generated.RAVolumetricInlet.SetGapScaleFactor)(value)                                       | Set the value of "Gap Scale Factor".                                                                       |
| [`SetGeometries`](#generated.RAVolumetricInlet.SetGeometries)(values)                                              | Set the "Geometries".                                                                                      |
| [`SetInitialVelocity`](#generated.RAVolumetricInlet.SetInitialVelocity)(values[, unit])                            | Set the values of "Initial Velocity".                                                                      |
| [`SetInjectionTime`](#generated.RAVolumetricInlet.SetInjectionTime)(value[, unit])                                 | Set the value of "Injection Time".                                                                         |
| [`SetOrientation`](#generated.RAVolumetricInlet.SetOrientation)(rotation[, unit])                                  | The rotation is the angles in x, y and z of the rotation in the given unit.                                |
| [`SetOrientationFromAngleAndVector`](#generated.RAVolumetricInlet.SetOrientationFromAngleAndVector)(angle, vector) | The rotation uses the angle and a vector, using unit and changes the orientation mode to Angle and Vector. |
| [`SetOrientationFromAngles`](#generated.RAVolumetricInlet.SetOrientationFromAngles)(rotation[, unit, ...])         | The rotation is the angles in x, y and z of the rotation.                                                  |
| [`SetOrientationFromBasisVector`](#generated.RAVolumetricInlet.SetOrientationFromBasisVector)(vector_x, ...)       | Sets the rotation using three basis vector and changes the orientation mode to Basis Vector.               |
| [`SetPeriod`](#generated.RAVolumetricInlet.SetPeriod)(value[, unit])                                               | Set the value of "Period".                                                                                 |
| [`SetPeriodic`](#generated.RAVolumetricInlet.SetPeriodic)(value)                                                   | Set the value of "Periodic".                                                                               |
| [`SetSeedCoordinates`](#generated.RAVolumetricInlet.SetSeedCoordinates)(values[, unit])                            | Set the values of "Seed Coordinates".                                                                      |
| [`SetSphMass`](#generated.RAVolumetricInlet.SetSphMass)(value[, unit])                                             | Set the value of "Sph Mass".                                                                               |
| [`SetSphTemperature`](#generated.RAVolumetricInlet.SetSphTemperature)(value[, unit])                               | Set the value of "Sph Temperature".                                                                        |
| [`SetStopTime`](#generated.RAVolumetricInlet.SetStopTime)(value[, unit])                                           | Set the value of "Stop Time".                                                                              |
| [`SetUseGeometriesToCompute`](#generated.RAVolumetricInlet.SetUseGeometriesToCompute)(value)                       | Set the value of "Use Geometries To Compute".                                                              |

<a id="generated.RAVolumetricInlet.DisablePeriodic"></a>

#### DisablePeriodic()

Set the value of “Periodic” to False.

<a id="generated.RAVolumetricInlet.EnablePeriodic"></a>

#### EnablePeriodic()

Set the value of “Periodic” to True.

<a id="generated.RAVolumetricInlet.GetAvailableGeometries"></a>

#### GetAvailableGeometries()

Get all available Geometries.

* **Return type:**
  List[[`RAWall`](RAWall.md#generated.RAWall)]
  A list of [`RAWall`](RAWall.md#generated.RAWall).

<a id="generated.RAVolumetricInlet.GetBoxCenter"></a>

#### GetBoxCenter(unit: str | None = None)

Get the value of “Box Center”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “m”.

<a id="generated.RAVolumetricInlet.GetBoxDimensions"></a>

#### GetBoxDimensions(unit: str | None = None)

Get the value of “Box Dimensions”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “m”.

<a id="generated.RAVolumetricInlet.GetGapScaleFactor"></a>

#### GetGapScaleFactor()

Get the value of “Gap Scale Factor”.

<a id="generated.RAVolumetricInlet.GetGeometries"></a>

#### GetGeometries()

Get the “Geometries”.

* **Return type:**
  List[[`RAWall`](RAWall.md#generated.RAWall)]
  A list of [`RAWall`](RAWall.md#generated.RAWall).

<a id="generated.RAVolumetricInlet.GetInitialVelocity"></a>

#### GetInitialVelocity(unit: str | None = None)

Get the value of “Initial Velocity”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “m/s”.

<a id="generated.RAVolumetricInlet.GetInjectionTime"></a>

#### GetInjectionTime(unit: str | None = None)

Get the value of “Injection Time”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

<a id="generated.RAVolumetricInlet.GetInputPropertiesList"></a>

#### GetInputPropertiesList()

Return a list of input properties

<a id="generated.RAVolumetricInlet.GetOrientation"></a>

#### GetOrientation(unit: str = 'dega')

Get the orientation angles. For more specific cases, see: “GetOrientationFromAngles”,
“GetOrientationFromAngleAndVector” and “GetOrientationFromBasisVector”.

<a id="generated.RAVolumetricInlet.GetOrientationFromAngleAndVector"></a>

#### GetOrientationFromAngleAndVector(unit: str = 'dega')

Get the current orientation in the form of an angle and a vector.

<a id="generated.RAVolumetricInlet.GetOrientationFromAngles"></a>

#### GetOrientationFromAngles(unit: str = 'dega')

Get the current orientation in the form of angles.

<a id="generated.RAVolumetricInlet.GetOrientationFromBasisVector"></a>

#### GetOrientationFromBasisVector()

Get the current orientation in the form of three basis vectors.

<a id="generated.RAVolumetricInlet.GetPeriod"></a>

#### GetPeriod(unit: str | None = None)

Get the value of “Period”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

<a id="generated.RAVolumetricInlet.GetPeriodic"></a>

#### GetPeriodic()

Get the value of “Periodic”.

<a id="generated.RAVolumetricInlet.GetSeedCoordinates"></a>

#### GetSeedCoordinates(unit: str | None = None)

Get the value of “Seed Coordinates”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “m”.

<a id="generated.RAVolumetricInlet.GetSphMass"></a>

#### GetSphMass(unit: str | None = None)

Get the value of “Sph Mass”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “kg”.

<a id="generated.RAVolumetricInlet.GetSphTemperature"></a>

#### GetSphTemperature(unit: str | None = None)

Get the value of “Sph Temperature”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “K”.

<a id="generated.RAVolumetricInlet.GetStopTime"></a>

#### GetStopTime(unit: str | None = None)

Get the value of “Stop Time”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

<a id="generated.RAVolumetricInlet.GetUseGeometriesToCompute"></a>

#### GetUseGeometriesToCompute()

Get the value of “Use Geometries To Compute”.

<a id="generated.RAVolumetricInlet.IsPeriodicEnabled"></a>

#### IsPeriodicEnabled()

Check if the “Periodic” is enabled.

<a id="generated.RAVolumetricInlet.SetBoxCenter"></a>

#### SetBoxCenter(values: Sequence[str | float], unit: str | None = None)

Set the values of “Box Center”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “m”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

<a id="generated.RAVolumetricInlet.SetBoxDimensions"></a>

#### SetBoxDimensions(values: Sequence[str | float], unit: str | None = None)

Set the values of “Box Dimensions”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “m”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

<a id="generated.RAVolumetricInlet.SetGapScaleFactor"></a>

#### SetGapScaleFactor(value: str | float)

Set the value of “Gap Scale Factor”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RAVolumetricInlet.SetGeometries"></a>

#### SetGeometries(values)

Set the “Geometries”.

:param List[str, [`RAWall`](RAWall.md#generated.RAWall)] values:
: A list with names, [`RAWall`](RAWall.md#generated.RAWall).

<a id="generated.RAVolumetricInlet.SetInitialVelocity"></a>

#### SetInitialVelocity(values: Sequence[str | float], unit: str | None = None)

Set the values of “Initial Velocity”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “m/s”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

<a id="generated.RAVolumetricInlet.SetInjectionTime"></a>

#### SetInjectionTime(value: str | float, unit: str | None = None)

Set the value of “Injection Time”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

<a id="generated.RAVolumetricInlet.SetOrientation"></a>

#### SetOrientation(rotation: tuple[float, float, float], unit: str = 'dega')

The rotation is the angles in x, y and z of the rotation in the given unit. For more
specific methods, see: “SetOrientationFromAngles”, “SetOrientationFromAngleAndVector” and
“SetOrientationFromBasisVector”.

<a id="generated.RAVolumetricInlet.SetOrientationFromAngleAndVector"></a>

#### SetOrientationFromAngleAndVector(angle: float, vector: tuple[float, float, float], unit: str = 'dega')

The rotation uses the angle and a vector, using unit and changes the orientation mode to
Angle and Vector.

<a id="generated.RAVolumetricInlet.SetOrientationFromAngles"></a>

#### SetOrientationFromAngles(rotation: tuple[float, float, float], unit: str = 'dega', local_angles: bool = True, order: str = 'XYZ')

The rotation is the angles in x, y and z of the rotation. The default unit is dega.
Additionally, local_angles can be used as well an order of the values via kwargs.

<a id="generated.RAVolumetricInlet.SetOrientationFromBasisVector"></a>

#### SetOrientationFromBasisVector(vector_x: tuple[float, float, float], vector_y: tuple[float, float, float], vector_z: tuple[float, float, float])

Sets the rotation using three basis vector and changes the orientation mode to Basis Vector.

<a id="generated.RAVolumetricInlet.SetPeriod"></a>

#### SetPeriod(value: str | float, unit: str | None = None)

Set the value of “Period”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

<a id="generated.RAVolumetricInlet.SetPeriodic"></a>

#### SetPeriodic(value: bool)

Set the value of “Periodic”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAVolumetricInlet.SetSeedCoordinates"></a>

#### SetSeedCoordinates(values: Sequence[str | float], unit: str | None = None)

Set the values of “Seed Coordinates”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “m”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

<a id="generated.RAVolumetricInlet.SetSphMass"></a>

#### SetSphMass(value: str | float, unit: str | None = None)

Set the value of “Sph Mass”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “kg”.

<a id="generated.RAVolumetricInlet.SetSphTemperature"></a>

#### SetSphTemperature(value: str | float, unit: str | None = None)

Set the value of “Sph Temperature”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “K”.

<a id="generated.RAVolumetricInlet.SetStopTime"></a>

#### SetStopTime(value: str | float, unit: str | None = None)

Set the value of “Stop Time”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

<a id="generated.RAVolumetricInlet.SetUseGeometriesToCompute"></a>

#### SetUseGeometriesToCompute(value: bool)

Set the value of “Use Geometries To Compute”.

* **Parameters:**
  **value** – The value to set.
