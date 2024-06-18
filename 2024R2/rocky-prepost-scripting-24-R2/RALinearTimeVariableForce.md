# RALinearTimeVariableForce

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RALinearTimeVariableForce"></a>

### *class* RALinearTimeVariableForce

Rocky PrePost Scripting wrapper representing an Linear Time Variable Force motion.

Retrieve this specific wrapper after setting the correct motion type on a [`RAMotion`](RAMotion.md#generated.RAMotion). For
example:

```python
motions = motion_frame.GetMotions()
motion_1 = motions.New()
motion_1.SetType('Linear Time Variable Force')
additional_force = motion_1.GetTypeObject()
```

**Methods:**

| Name | Description |
|-----------------------------------------------------------------------------------------------------|-------------------------------------------|
| [`GetInitialForceValue`](#generated.RALinearTimeVariableForce.GetInitialForceValue)([unit])         | Get the value of "Initial Force Value".   |
| [`GetTimeCoefficients`](#generated.RALinearTimeVariableForce.GetTimeCoefficients)([unit])           | Get the value of "Time Coefficients".     |
| [`SetInitialForceValue`](#generated.RALinearTimeVariableForce.SetInitialForceValue)(values[, unit]) | Set the values of "Initial Force Value".  |
| [`SetTimeCoefficients`](#generated.RALinearTimeVariableForce.SetTimeCoefficients)(values[, unit])   | Set the values of "Time Coefficients".    |

<a id="generated.RALinearTimeVariableForce.GetInitialForceValue"></a>

#### GetInitialForceValue(unit: Optional[str] = None)

Get the value of “Initial Force Value”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “N”.

<a id="generated.RALinearTimeVariableForce.GetTimeCoefficients"></a>

#### GetTimeCoefficients(unit: Optional[str] = None)

Get the value of “Time Coefficients”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “N/s”.

<a id="generated.RALinearTimeVariableForce.SetInitialForceValue"></a>

#### SetInitialForceValue(values: Sequence[Union[str, float]], unit: Optional[str] = None)

Set the values of “Initial Force Value”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “N”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

<a id="generated.RALinearTimeVariableForce.SetTimeCoefficients"></a>

#### SetTimeCoefficients(values: Sequence[Union[str, float]], unit: Optional[str] = None)

Set the values of “Time Coefficients”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “N/s”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.
