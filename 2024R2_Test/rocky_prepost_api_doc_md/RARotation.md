# RARotation

<!-- Make "generated" the current module for all API classes so that we can cross-reference them
without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (API classes generally aren't
instantiated by the user). -->

### *class* RARotation

Rocky API wrapper representing a Rotation motion.

Retrieve this specific wrapper after setting the correct motion type on a [`RAMotion`](RAMotion.md#generated.RAMotion). For
example:

```python
motions = motion_frame.GetMotions()
motion_1 = motions.New()
motion_1.SetType('Rotation')
rotation = motion_1.GetTypeObject()
```

**Methods:**

| [`GetAngularAcceleration`](#generated.RARotation.GetAngularAcceleration)([unit])               | Get the value of "Angular Acceleration".      |
|------------------------------------------------------------------------------------------------|-----------------------------------------------|
| [`GetInitialAngularVelocity`](#generated.RARotation.GetInitialAngularVelocity)([unit])         | Get the value of "Initial Angular Velocity".  |
| [`SetAngularAcceleration`](#generated.RARotation.SetAngularAcceleration)(values[, unit])       | Set the values of "Angular Acceleration".     |
| [`SetInitialAngularVelocity`](#generated.RARotation.SetInitialAngularVelocity)(values[, unit]) | Set the values of "Initial Angular Velocity". |

#### GetAngularAcceleration(unit: Optional[str] = None)

Get the value of “Angular Acceleration”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “rad/s2”.

#### GetInitialAngularVelocity(unit: Optional[str] = None)

Get the value of “Initial Angular Velocity”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “rad/s”.

#### SetAngularAcceleration(values: Sequence[Union[str, float]], unit: Optional[str] = None)

Set the values of “Angular Acceleration”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “rad/s2”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

#### SetInitialAngularVelocity(values: Sequence[Union[str, float]], unit: Optional[str] = None)

Set the values of “Initial Angular Velocity”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “rad/s”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.
