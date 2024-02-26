# RATranslation

<!-- Make "generated" the current module for all API classes so that we can cross-reference them
without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (API classes generally aren't
instantiated by the user). -->

### *class* RATranslation

Rocky API wrapper representing a Translation motion.

Retrieve this specific wrapper after setting the correct motion type on a [`RAMotion`](RAMotion.md#generated.RAMotion). For
example:

```python
motions = motion_frame.GetMotions()
motion_1 = motions.New()
motion_1.SetType('Translation')
translation = motion_1.GetTypeObject()
```

**Methods:**

| [`GetAcceleration`](#generated.RATranslation.GetAcceleration)([unit])           | Get the value of "Acceleration".               |
|---------------------------------------------------------------------------------|------------------------------------------------|
| [`GetFinalVelocity`](#generated.RATranslation.GetFinalVelocity)([unit])         | Get the value of "Final Velocity".             |
| [`GetInput`](#generated.RATranslation.GetInput)()                               | Get "Input" as a string.                       |
| [`GetValidInputValues`](#generated.RATranslation.GetValidInputValues)()         | Get a list of all possible values for "Input". |
| [`GetVelocity`](#generated.RATranslation.GetVelocity)([unit])                   | Get the value of "Velocity".                   |
| [`SetAcceleration`](#generated.RATranslation.SetAcceleration)(values[, unit])   | Set the values of "Acceleration".              |
| [`SetFinalVelocity`](#generated.RATranslation.SetFinalVelocity)(values[, unit]) | Set the values of "Final Velocity".            |
| [`SetInput`](#generated.RATranslation.SetInput)(value)                          | Set the value of "Input".                      |
| [`SetVelocity`](#generated.RATranslation.SetVelocity)(values[, unit])           | Set the values of "Velocity".                  |

#### GetAcceleration(unit: Optional[str] = None)

Get the value of “Acceleration”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “m/s2”.

#### GetFinalVelocity(unit: Optional[str] = None)

Get the value of “Final Velocity”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “m/s”.

#### GetInput()

Get “Input” as a string.

* **Returns:**
  The returned value will be one of [‘fixed_velocity’, ‘initial_and_final_velocity’, ‘initial_velocity_and_acceleration’].

#### GetValidInputValues()

Get a list of all possible values for “Input”.

* **Returns:**
  The returned list is [‘fixed_velocity’, ‘initial_and_final_velocity’, ‘initial_velocity_and_acceleration’].

#### GetVelocity(unit: Optional[str] = None)

Get the value of “Velocity”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “m/s”.

#### SetAcceleration(values: Sequence[Union[str, float]], unit: Optional[str] = None)

Set the values of “Acceleration”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “m/s2”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

#### SetFinalVelocity(values: Sequence[Union[str, float]], unit: Optional[str] = None)

Set the values of “Final Velocity”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “m/s”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

#### SetInput(value: str)

Set the value of “Input”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘fixed_velocity’, ‘initial_and_final_velocity’, ‘initial_velocity_and_acceleration’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Input” option.

#### SetVelocity(values: Sequence[Union[str, float]], unit: Optional[str] = None)

Set the values of “Velocity”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “m/s”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.
