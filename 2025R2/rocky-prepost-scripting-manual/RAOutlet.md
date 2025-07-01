

# RAOutlet

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAOutlet"></a>

### *class* RAOutlet

Rocky PrePost Scripting wrapper for a single Outlet.

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

<a id="generated.RAOutlet.DisablePrescribedPressure"></a>

#### DisablePrescribedPressure()

Set the value of “Prescribed Pressure” to False.

<a id="generated.RAOutlet.EnablePrescribedPressure"></a>

#### EnablePrescribedPressure()

Set the value of “Prescribed Pressure” to True.

<a id="generated.RAOutlet.GetAvailableExitPoints"></a>

#### GetAvailableExitPoints()

Get all available Exit Points.

* **Return type:**
  List[[`RARectangularSurface`](RARectangularSurface.md#generated.RARectangularSurface), [`RACircularSurface`](RACircularSurface.md#generated.RACircularSurface), [`RASurface`](RASurface.md#generated.RASurface)]
  A list of [`RARectangularSurface`](RARectangularSurface.md#generated.RARectangularSurface), [`RACircularSurface`](RACircularSurface.md#generated.RACircularSurface), [`RASurface`](RASurface.md#generated.RASurface).

<a id="generated.RAOutlet.GetEnabledForParticles"></a>

#### GetEnabledForParticles()

Get the value of “Enabled For Particles”.

<a id="generated.RAOutlet.GetEnabledForSph"></a>

#### GetEnabledForSph()

Get the value of “Enabled For Sph”.

<a id="generated.RAOutlet.GetExitPoint"></a>

#### GetExitPoint()

Get the “Exit Point”.

* **Return type:**
  [`RARectangularSurface`](RARectangularSurface.md#generated.RARectangularSurface), [`RACircularSurface`](RACircularSurface.md#generated.RACircularSurface), [`RASurface`](RASurface.md#generated.RASurface)

<a id="generated.RAOutlet.GetPrescribedPressureEnabled"></a>

#### GetPrescribedPressureEnabled()

Get the value of “Prescribed Pressure Enabled”.

<a id="generated.RAOutlet.GetPressure"></a>

#### GetPressure(unit: str | None = None)

Get the value of “Pressure”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “Pa”.

<a id="generated.RAOutlet.IsPrescribedPressureEnabled"></a>

#### IsPrescribedPressureEnabled()

Check if the “Prescribed Pressure” is enabled.

<a id="generated.RAOutlet.SetEnabledForParticles"></a>

#### SetEnabledForParticles(value: bool)

Set the value of “Enabled For Particles”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAOutlet.SetEnabledForSph"></a>

#### SetEnabledForSph(value: bool)

Set the value of “Enabled For Sph”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAOutlet.SetExitPoint"></a>

#### SetExitPoint(value)

Set the “Exit Point”.

:param unicode, [`RARectangularSurface`](RARectangularSurface.md#generated.RARectangularSurface), [`RACircularSurface`](RACircularSurface.md#generated.RACircularSurface), [`RASurface`](RASurface.md#generated.RASurface) value:
: Either the API object wrapping the desired entity or its name.

<a id="generated.RAOutlet.SetPrescribedPressureEnabled"></a>

#### SetPrescribedPressureEnabled(value: bool)

Set the value of “Prescribed Pressure Enabled”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAOutlet.SetPressure"></a>

#### SetPressure(value: str | float, unit: str | None = None)

Set the value of “Pressure”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “Pa”.
