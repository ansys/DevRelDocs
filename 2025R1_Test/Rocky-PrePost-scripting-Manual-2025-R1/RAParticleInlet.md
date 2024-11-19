

# RAParticleInlet

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAParticleInlet"></a>

### *class* RAParticleInlet

Rocky PrePost Scripting wrapper for a single Continuous Injection input.

This wrapper class corresponds to an individual entry under the “Inputs” item on the project’s
data tree. Particle inputs can be retrieved from the [`RAStudy`](RAStudy.md#generated.RAStudy) or the
[`RAInletsOutletsCollection`](RAInletsOutletsCollection.md#generated.RAInletsOutletsCollection) via:

```python
input_1 = study.GetElement('Continuous Injection <1>')
input_2 = input_collection.GetParticleInput('Continuous Injection <2>')
```

Instances of [`RAParticleInlet`](#generated.RAParticleInlet) comprise two parts: Properties that can be manipulated
directly, such as the input’s name and the particle entry point, and the input properties list
that describe which particles enter via this input and with each mass flow rate, temperature, etc.
This list must be manipulated via the `RAParticleInputPropertiesList` returned by
[`GetInputPropertiesList()`](#generated.RAParticleInlet.GetInputPropertiesList).

**Methods:**

| [`DisableForcePacking`](#generated.RAParticleInlet.DisableForcePacking)()                           | Set the value of "Force Packing" to False.                                                               |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [`DisablePeriodic`](#generated.RAParticleInlet.DisablePeriodic)()                                   | Set the value of "Periodic" to False.                                                                    |
| [`DisablePeriodicDischarge`](#generated.RAParticleInlet.DisablePeriodicDischarge)()                 | Deprecated: Use [`DisablePeriodic()`](#generated.RAParticleInlet.DisablePeriodic) instead.               |
| [`DisableStopAllAtStopTime`](#generated.RAParticleInlet.DisableStopAllAtStopTime)()                 | Set the value of "Stop All At Stop Time" to False.                                                       |
| [`DisableUseTargetNormalVelocity`](#generated.RAParticleInlet.DisableUseTargetNormalVelocity)()     | Set the value of "Use Target Normal Velocity" to False.                                                  |
| [`EnableForcePacking`](#generated.RAParticleInlet.EnableForcePacking)()                             | Set the value of "Force Packing" to True.                                                                |
| [`EnablePeriodic`](#generated.RAParticleInlet.EnablePeriodic)()                                     | Set the value of "Periodic" to True.                                                                     |
| [`EnablePeriodicDischarge`](#generated.RAParticleInlet.EnablePeriodicDischarge)()                   | Deprecated: Use [`EnablePeriodic()`](#generated.RAParticleInlet.EnablePeriodic) instead.                 |
| [`EnableStopAllAtStopTime`](#generated.RAParticleInlet.EnableStopAllAtStopTime)()                   | Set the value of "Stop All At Stop Time" to True.                                                        |
| [`EnableUseTargetNormalVelocity`](#generated.RAParticleInlet.EnableUseTargetNormalVelocity)()       | Set the value of "Use Target Normal Velocity" to True.                                                   |
| [`GetAvailableEntryPoints`](#generated.RAParticleInlet.GetAvailableEntryPoints)()                   | Get all available Entry Points.                                                                          |
| [`GetDischargeTime`](#generated.RAParticleInlet.GetDischargeTime)([unit])                           | Deprecated: Use [`GetInjectionDuration()`](#generated.RAParticleInlet.GetInjectionDuration) instead.     |
| [`GetEntryPoint`](#generated.RAParticleInlet.GetEntryPoint)()                                       | Get the "Entry Point".                                                                                   |
| [`GetForcePacking`](#generated.RAParticleInlet.GetForcePacking)()                                   | Get the value of "Force Packing".                                                                        |
| [`GetInjectionDuration`](#generated.RAParticleInlet.GetInjectionDuration)([unit])                   | Get the value of "Injection Duration".                                                                   |
| [`GetInputPropertiesList`](#generated.RAParticleInlet.GetInputPropertiesList)()                     | Return a list of input properties                                                                        |
| [`GetPeriod`](#generated.RAParticleInlet.GetPeriod)([unit])                                         | Get the value of "Period".                                                                               |
| [`GetPeriodic`](#generated.RAParticleInlet.GetPeriodic)()                                           | Get the value of "Periodic".                                                                             |
| [`GetPeriodicDischarge`](#generated.RAParticleInlet.GetPeriodicDischarge)()                         | Deprecated: Use [`GetPeriodic()`](#generated.RAParticleInlet.GetPeriodic) instead.                       |
| [`GetSphInjectionEnabled`](#generated.RAParticleInlet.GetSphInjectionEnabled)()                     | Get the value of "Sph Injection Enabled".                                                                |
| [`GetSphTemperature`](#generated.RAParticleInlet.GetSphTemperature)([unit])                         | Get the value of "Sph Temperature".                                                                      |
| [`GetStartTime`](#generated.RAParticleInlet.GetStartTime)([unit])                                   | Get the value of "Start Time".                                                                           |
| [`GetStopAllAtStopTime`](#generated.RAParticleInlet.GetStopAllAtStopTime)()                         | Get the value of "Stop All At Stop Time".                                                                |
| [`GetStopTime`](#generated.RAParticleInlet.GetStopTime)([unit])                                     | Get the value of "Stop Time".                                                                            |
| [`GetTargetNormalVelocity`](#generated.RAParticleInlet.GetTargetNormalVelocity)([unit])             | Get the value of "Target Normal Velocity".                                                               |
| [`GetTonnageList`](#generated.RAParticleInlet.GetTonnageList)()                                     | Deprecated: Use [`GetInputPropertiesList()`](#generated.RAParticleInlet.GetInputPropertiesList) instead. |
| [`GetUseTargetNormalVelocity`](#generated.RAParticleInlet.GetUseTargetNormalVelocity)()             | Get the value of "Use Target Normal Velocity".                                                           |
| [`GetUxLocal`](#generated.RAParticleInlet.GetUxLocal)([unit])                                       | Get the value of "Ux Local".                                                                             |
| [`GetUzLocal`](#generated.RAParticleInlet.GetUzLocal)([unit])                                       | Get the value of "Uz Local".                                                                             |
| [`IsForcePackingEnabled`](#generated.RAParticleInlet.IsForcePackingEnabled)()                       | Check if the "Force Packing" is enabled.                                                                 |
| [`IsPeriodicDischargeEnabled`](#generated.RAParticleInlet.IsPeriodicDischargeEnabled)()             | Deprecated: Use [`IsPeriodicEnabled()`](#generated.RAParticleInlet.IsPeriodicEnabled) instead.           |
| [`IsPeriodicEnabled`](#generated.RAParticleInlet.IsPeriodicEnabled)()                               | Check if the "Periodic" is enabled.                                                                      |
| [`IsStopAllAtStopTimeEnabled`](#generated.RAParticleInlet.IsStopAllAtStopTimeEnabled)()             | Check if the "Stop All At Stop Time" is enabled.                                                         |
| [`IsUseTargetNormalVelocityEnabled`](#generated.RAParticleInlet.IsUseTargetNormalVelocityEnabled)() | Check if the "Use Target Normal Velocity" is enabled.                                                    |
| [`SetDischargeTime`](#generated.RAParticleInlet.SetDischargeTime)(value[, unit])                    | Deprecated: Use [`SetInjectionDuration()`](#generated.RAParticleInlet.SetInjectionDuration) instead.     |
| [`SetEntryPoint`](#generated.RAParticleInlet.SetEntryPoint)(value)                                  | Set the "Entry Point".                                                                                   |
| [`SetForcePacking`](#generated.RAParticleInlet.SetForcePacking)(value)                              | Set the value of "Force Packing".                                                                        |
| [`SetInjectionDuration`](#generated.RAParticleInlet.SetInjectionDuration)(value[, unit])            | Set the value of "Injection Duration".                                                                   |
| [`SetPeriod`](#generated.RAParticleInlet.SetPeriod)(value[, unit])                                  | Set the value of "Period".                                                                               |
| [`SetPeriodic`](#generated.RAParticleInlet.SetPeriodic)(value)                                      | Set the value of "Periodic".                                                                             |
| [`SetPeriodicDischarge`](#generated.RAParticleInlet.SetPeriodicDischarge)(value)                    | Deprecated: Use [`SetPeriodic()`](#generated.RAParticleInlet.SetPeriodic) instead.                       |
| [`SetSphInjectionEnabled`](#generated.RAParticleInlet.SetSphInjectionEnabled)(value)                | Set the value of "Sph Injection Enabled".                                                                |
| [`SetSphTemperature`](#generated.RAParticleInlet.SetSphTemperature)(value[, unit])                  | Set the value of "Sph Temperature".                                                                      |
| [`SetStartTime`](#generated.RAParticleInlet.SetStartTime)(value[, unit])                            | Set the value of "Start Time".                                                                           |
| [`SetStopAllAtStopTime`](#generated.RAParticleInlet.SetStopAllAtStopTime)(value)                    | Set the value of "Stop All At Stop Time".                                                                |
| [`SetStopTime`](#generated.RAParticleInlet.SetStopTime)(value[, unit])                              | Set the value of "Stop Time".                                                                            |
| [`SetTargetNormalVelocity`](#generated.RAParticleInlet.SetTargetNormalVelocity)(value[, unit])      | Set the value of "Target Normal Velocity".                                                               |
| [`SetUseTargetNormalVelocity`](#generated.RAParticleInlet.SetUseTargetNormalVelocity)(value)        | Set the value of "Use Target Normal Velocity".                                                           |
| [`SetUxLocal`](#generated.RAParticleInlet.SetUxLocal)(value[, unit])                                | Set the value of "Ux Local".                                                                             |
| [`SetUzLocal`](#generated.RAParticleInlet.SetUzLocal)(value[, unit])                                | Set the value of "Uz Local".                                                                             |

<a id="generated.RAParticleInlet.DisableForcePacking"></a>

#### DisableForcePacking()

Set the value of “Force Packing” to False.

<a id="generated.RAParticleInlet.DisablePeriodic"></a>

#### DisablePeriodic()

Set the value of “Periodic” to False.

<a id="generated.RAParticleInlet.DisablePeriodicDischarge"></a>

#### DisablePeriodicDischarge()

Deprecated: Use [`DisablePeriodic()`](#generated.RAParticleInlet.DisablePeriodic) instead.

<a id="generated.RAParticleInlet.DisableStopAllAtStopTime"></a>

#### DisableStopAllAtStopTime()

Set the value of “Stop All At Stop Time” to False.

<a id="generated.RAParticleInlet.DisableUseTargetNormalVelocity"></a>

#### DisableUseTargetNormalVelocity()

Set the value of “Use Target Normal Velocity” to False.

<a id="generated.RAParticleInlet.EnableForcePacking"></a>

#### EnableForcePacking()

Set the value of “Force Packing” to True.

<a id="generated.RAParticleInlet.EnablePeriodic"></a>

#### EnablePeriodic()

Set the value of “Periodic” to True.

<a id="generated.RAParticleInlet.EnablePeriodicDischarge"></a>

#### EnablePeriodicDischarge()

Deprecated: Use [`EnablePeriodic()`](#generated.RAParticleInlet.EnablePeriodic) instead.

<a id="generated.RAParticleInlet.EnableStopAllAtStopTime"></a>

#### EnableStopAllAtStopTime()

Set the value of “Stop All At Stop Time” to True.

<a id="generated.RAParticleInlet.EnableUseTargetNormalVelocity"></a>

#### EnableUseTargetNormalVelocity()

Set the value of “Use Target Normal Velocity” to True.

<a id="generated.RAParticleInlet.GetAvailableEntryPoints"></a>

#### GetAvailableEntryPoints()

Get all available Entry Points.

* **Return type:**
  List[[`RAInletGeometry`](RAInletGeometry.md#generated.RAInletGeometry), [`RAFeedConveyor`](RAFeedConveyor.md#generated.RAFeedConveyor), [`RARectangularSurface`](RARectangularSurface.md#generated.RARectangularSurface), [`RACircularSurface`](RACircularSurface.md#generated.RACircularSurface), [`RASurface`](RASurface.md#generated.RASurface)]
  A list of [`RAInletGeometry`](RAInletGeometry.md#generated.RAInletGeometry), [`RAFeedConveyor`](RAFeedConveyor.md#generated.RAFeedConveyor), [`RARectangularSurface`](RARectangularSurface.md#generated.RARectangularSurface), [`RACircularSurface`](RACircularSurface.md#generated.RACircularSurface), [`RASurface`](RASurface.md#generated.RASurface).

<a id="generated.RAParticleInlet.GetDischargeTime"></a>

#### GetDischargeTime(unit: Optional[str] = None)

Deprecated: Use [`GetInjectionDuration()`](#generated.RAParticleInlet.GetInjectionDuration) instead.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

<a id="generated.RAParticleInlet.GetEntryPoint"></a>

#### GetEntryPoint()

Get the “Entry Point”.

* **Return type:**
  [`RAInletGeometry`](RAInletGeometry.md#generated.RAInletGeometry), [`RAFeedConveyor`](RAFeedConveyor.md#generated.RAFeedConveyor), [`RARectangularSurface`](RARectangularSurface.md#generated.RARectangularSurface), [`RACircularSurface`](RACircularSurface.md#generated.RACircularSurface), [`RASurface`](RASurface.md#generated.RASurface)

<a id="generated.RAParticleInlet.GetForcePacking"></a>

#### GetForcePacking()

Get the value of “Force Packing”.

<a id="generated.RAParticleInlet.GetInjectionDuration"></a>

#### GetInjectionDuration(unit: Optional[str] = None)

Get the value of “Injection Duration”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

<a id="generated.RAParticleInlet.GetInputPropertiesList"></a>

#### GetInputPropertiesList()

Return a list of input properties

<a id="generated.RAParticleInlet.GetPeriod"></a>

#### GetPeriod(unit: Optional[str] = None)

Get the value of “Period”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

<a id="generated.RAParticleInlet.GetPeriodic"></a>

#### GetPeriodic()

Get the value of “Periodic”.

<a id="generated.RAParticleInlet.GetPeriodicDischarge"></a>

#### GetPeriodicDischarge()

Deprecated: Use [`GetPeriodic()`](#generated.RAParticleInlet.GetPeriodic) instead.

<a id="generated.RAParticleInlet.GetSphInjectionEnabled"></a>

#### GetSphInjectionEnabled()

Get the value of “Sph Injection Enabled”.

<a id="generated.RAParticleInlet.GetSphTemperature"></a>

#### GetSphTemperature(unit: Optional[str] = None)

Get the value of “Sph Temperature”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “K”.

<a id="generated.RAParticleInlet.GetStartTime"></a>

#### GetStartTime(unit: Optional[str] = None)

Get the value of “Start Time”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

<a id="generated.RAParticleInlet.GetStopAllAtStopTime"></a>

#### GetStopAllAtStopTime()

Get the value of “Stop All At Stop Time”.

<a id="generated.RAParticleInlet.GetStopTime"></a>

#### GetStopTime(unit: Optional[str] = None)

Get the value of “Stop Time”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

<a id="generated.RAParticleInlet.GetTargetNormalVelocity"></a>

#### GetTargetNormalVelocity(unit: Optional[str] = None)

Get the value of “Target Normal Velocity”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m/s”.

<a id="generated.RAParticleInlet.GetTonnageList"></a>

#### GetTonnageList()

Deprecated: Use [`GetInputPropertiesList()`](#generated.RAParticleInlet.GetInputPropertiesList) instead.

<a id="generated.RAParticleInlet.GetUseTargetNormalVelocity"></a>

#### GetUseTargetNormalVelocity()

Get the value of “Use Target Normal Velocity”.

<a id="generated.RAParticleInlet.GetUxLocal"></a>

#### GetUxLocal(unit: Optional[str] = None)

Get the value of “Ux Local”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m/s”.

<a id="generated.RAParticleInlet.GetUzLocal"></a>

#### GetUzLocal(unit: Optional[str] = None)

Get the value of “Uz Local”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m/s”.

<a id="generated.RAParticleInlet.IsForcePackingEnabled"></a>

#### IsForcePackingEnabled()

Check if the “Force Packing” is enabled.

<a id="generated.RAParticleInlet.IsPeriodicDischargeEnabled"></a>

#### IsPeriodicDischargeEnabled()

Deprecated: Use [`IsPeriodicEnabled()`](#generated.RAParticleInlet.IsPeriodicEnabled) instead.

<a id="generated.RAParticleInlet.IsPeriodicEnabled"></a>

#### IsPeriodicEnabled()

Check if the “Periodic” is enabled.

<a id="generated.RAParticleInlet.IsStopAllAtStopTimeEnabled"></a>

#### IsStopAllAtStopTimeEnabled()

Check if the “Stop All At Stop Time” is enabled.

<a id="generated.RAParticleInlet.IsUseTargetNormalVelocityEnabled"></a>

#### IsUseTargetNormalVelocityEnabled()

Check if the “Use Target Normal Velocity” is enabled.

<a id="generated.RAParticleInlet.SetDischargeTime"></a>

#### SetDischargeTime(value: float, unit: Optional[str] = None)

Deprecated: Use [`SetInjectionDuration()`](#generated.RAParticleInlet.SetInjectionDuration) instead.

* **Parameters:**
  * **value** – The value to set.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

<a id="generated.RAParticleInlet.SetEntryPoint"></a>

#### SetEntryPoint(value)

Set the “Entry Point”.

:param unicode, [`RAInletGeometry`](RAInletGeometry.md#generated.RAInletGeometry), [`RAFeedConveyor`](RAFeedConveyor.md#generated.RAFeedConveyor), [`RARectangularSurface`](RARectangularSurface.md#generated.RARectangularSurface), [`RACircularSurface`](RACircularSurface.md#generated.RACircularSurface), [`RASurface`](RASurface.md#generated.RASurface) value:
: Either the API object wrapping the desired entity or its name.

<a id="generated.RAParticleInlet.SetForcePacking"></a>

#### SetForcePacking(value: bool)

Set the value of “Force Packing”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAParticleInlet.SetInjectionDuration"></a>

#### SetInjectionDuration(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Injection Duration”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

<a id="generated.RAParticleInlet.SetPeriod"></a>

#### SetPeriod(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Period”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

<a id="generated.RAParticleInlet.SetPeriodic"></a>

#### SetPeriodic(value: bool)

Set the value of “Periodic”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAParticleInlet.SetPeriodicDischarge"></a>

#### SetPeriodicDischarge(value)

Deprecated: Use [`SetPeriodic()`](#generated.RAParticleInlet.SetPeriodic) instead.

* **Return type:**
  bool

<a id="generated.RAParticleInlet.SetSphInjectionEnabled"></a>

#### SetSphInjectionEnabled(value: bool)

Set the value of “Sph Injection Enabled”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAParticleInlet.SetSphTemperature"></a>

#### SetSphTemperature(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Sph Temperature”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “K”.

<a id="generated.RAParticleInlet.SetStartTime"></a>

#### SetStartTime(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Start Time”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

<a id="generated.RAParticleInlet.SetStopAllAtStopTime"></a>

#### SetStopAllAtStopTime(value: bool)

Set the value of “Stop All At Stop Time”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAParticleInlet.SetStopTime"></a>

#### SetStopTime(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Stop Time”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

<a id="generated.RAParticleInlet.SetTargetNormalVelocity"></a>

#### SetTargetNormalVelocity(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Target Normal Velocity”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m/s”.

<a id="generated.RAParticleInlet.SetUseTargetNormalVelocity"></a>

#### SetUseTargetNormalVelocity(value: bool)

Set the value of “Use Target Normal Velocity”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAParticleInlet.SetUxLocal"></a>

#### SetUxLocal(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Ux Local”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m/s”.

<a id="generated.RAParticleInlet.SetUzLocal"></a>

#### SetUzLocal(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Uz Local”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m/s”.
