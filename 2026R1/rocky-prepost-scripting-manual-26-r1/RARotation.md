

# RARotation

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RARotation"></a>

### *class* RARotation

Rocky PrePost Scripting wrapper representing a Rotation motion.

Retrieve this specific wrapper after setting the correct motion type on a [`RAMotion`](RAMotion.md#generated.RAMotion). For
example:

```python
motions = motion_frame.GetMotions()
motion_1 = motions.New()
motion_1.SetType('Rotation')
rotation = motion_1.GetTypeObject()
```

**Methods:**

| Name | Description |
|------------------------------------------------------------------------------------------------|-----------------------------------------------|
| [`GetAngularAcceleration`](#generated.RARotation.GetAngularAcceleration)([unit])               | Get the value of "Angular Acceleration".      |
| [`GetInitialAngularVelocity`](#generated.RARotation.GetInitialAngularVelocity)([unit])         | Get the value of "Initial Angular Velocity".  |
| [`SetAngularAcceleration`](#generated.RARotation.SetAngularAcceleration)(values[, unit])       | Set the values of "Angular Acceleration".     |
| [`SetInitialAngularVelocity`](#generated.RARotation.SetInitialAngularVelocity)(values[, unit]) | Set the values of "Initial Angular Velocity". |

<a id="generated.RARotation.GetAngularAcceleration"></a>

#### GetAngularAcceleration(unit: str | None = None)

Get the value of “Angular Acceleration”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “rad/s2”.

<a id="generated.RARotation.GetInitialAngularVelocity"></a>

#### GetInitialAngularVelocity(unit: str | None = None)

Get the value of “Initial Angular Velocity”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “rad/s”.

<a id="generated.RARotation.SetAngularAcceleration"></a>

#### SetAngularAcceleration(values: Sequence[str | float], unit: str | None = None)

Set the values of “Angular Acceleration”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “rad/s2”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

<a id="generated.RARotation.SetInitialAngularVelocity"></a>

#### SetInitialAngularVelocity(values: Sequence[str | float], unit: str | None = None)

Set the values of “Initial Angular Velocity”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “rad/s”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.
