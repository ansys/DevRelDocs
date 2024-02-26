# RAOutlet

<!-- Make "generated" the current module for all API classes so that we can cross-reference them
without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (API classes generally aren't
instantiated by the user). -->

### *class* RAOutlet

Rocky API wrapper for a single Outlet.

This wrapper class corresponds to an individual entry under the “Inlets and Outlets” item on
the project’s data tree. It can be retrieved from the [`RAStudy`](RAStudy.md#generated.RAStudy) via:

```python
input_1 = study.GetElement('Outlet <1>')
```

**Methods:**

| [`DisablePrescribedPressure`](#generated.RAOutlet.DisablePrescribedPressure)()            | Set the value of "Prescribed Pressure" to False.   |
|-------------------------------------------------------------------------------------------|----------------------------------------------------|
| [`EnablePrescribedPressure`](#generated.RAOutlet.EnablePrescribedPressure)()              | Set the value of "Prescribed Pressure" to True.    |
| [`GetAvailableExitPoints`](#generated.RAOutlet.GetAvailableExitPoints)()                  | Get all available Exit Points.                     |
| [`GetEnabledForParticles`](#generated.RAOutlet.GetEnabledForParticles)()                  | Get the value of "Enabled For Particles".          |
| [`GetEnabledForSph`](#generated.RAOutlet.GetEnabledForSph)()                              | Get the value of "Enabled For Sph".                |
| [`GetExitPoint`](#generated.RAOutlet.GetExitPoint)()                                      | Get the "Exit Point".                              |
| [`GetPrescribedPressureEnabled`](#generated.RAOutlet.GetPrescribedPressureEnabled)()      | Get the value of "Prescribed Pressure Enabled".    |
| [`GetPressure`](#generated.RAOutlet.GetPressure)([unit])                                  | Get the value of "Pressure".                       |
| [`IsPrescribedPressureEnabled`](#generated.RAOutlet.IsPrescribedPressureEnabled)()        | Check if the "Prescribed Pressure" is enabled.     |
| [`SetEnabledForParticles`](#generated.RAOutlet.SetEnabledForParticles)(value)             | Set the value of "Enabled For Particles".          |
| [`SetEnabledForSph`](#generated.RAOutlet.SetEnabledForSph)(value)                         | Set the value of "Enabled For Sph".                |
| [`SetExitPoint`](#generated.RAOutlet.SetExitPoint)(value)                                 | Set the "Exit Point".                              |
| [`SetPrescribedPressureEnabled`](#generated.RAOutlet.SetPrescribedPressureEnabled)(value) | Set the value of "Prescribed Pressure Enabled".    |
| [`SetPressure`](#generated.RAOutlet.SetPressure)(value[, unit])                           | Set the value of "Pressure".                       |

#### DisablePrescribedPressure()

Set the value of “Prescribed Pressure” to False.

#### EnablePrescribedPressure()

Set the value of “Prescribed Pressure” to True.

#### GetAvailableExitPoints()

Get all available Exit Points.

* **Return type:**
  List[[`RARectangularSurface`](RARectangularSurface.md#generated.RARectangularSurface), [`RACircularSurface`](RACircularSurface.md#generated.RACircularSurface), [`RASurface`](RASurface.md#generated.RASurface)]
  A list of [`RARectangularSurface`](RARectangularSurface.md#generated.RARectangularSurface), [`RACircularSurface`](RACircularSurface.md#generated.RACircularSurface), [`RASurface`](RASurface.md#generated.RASurface).

#### GetEnabledForParticles()

Get the value of “Enabled For Particles”.

#### GetEnabledForSph()

Get the value of “Enabled For Sph”.

#### GetExitPoint()

Get the “Exit Point”.

* **Return type:**
  [`RARectangularSurface`](RARectangularSurface.md#generated.RARectangularSurface), [`RACircularSurface`](RACircularSurface.md#generated.RACircularSurface), [`RASurface`](RASurface.md#generated.RASurface)

#### GetPrescribedPressureEnabled()

Get the value of “Prescribed Pressure Enabled”.

#### GetPressure(unit: Optional[str] = None)

Get the value of “Pressure”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “Pa”.

#### IsPrescribedPressureEnabled()

Check if the “Prescribed Pressure” is enabled.

#### SetEnabledForParticles(value: bool)

Set the value of “Enabled For Particles”.

* **Parameters:**
  **value** – The value to set.

#### SetEnabledForSph(value: bool)

Set the value of “Enabled For Sph”.

* **Parameters:**
  **value** – The value to set.

#### SetExitPoint(value)

Set the “Exit Point”.

:param unicode, [`RARectangularSurface`](RARectangularSurface.md#generated.RARectangularSurface), [`RACircularSurface`](RACircularSurface.md#generated.RACircularSurface), [`RASurface`](RASurface.md#generated.RASurface) value:
: Either the API object wrapping the desired entity or its name.

#### SetPrescribedPressureEnabled(value: bool)

Set the value of “Prescribed Pressure Enabled”.

* **Parameters:**
  **value** – The value to set.

#### SetPressure(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Pressure”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “Pa”.
