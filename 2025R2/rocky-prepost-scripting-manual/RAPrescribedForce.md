

# RAPrescribedForce

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAPrescribedForce"></a>

### *class* RAPrescribedForce

Rocky PrePost Scripting wrapper representing an Additional Force motion.

Retrieve this specific wrapper after setting the correct motion type on a [`RAMotion`](RAMotion.md#generated.RAMotion). For
example:

```python
motions = motion_frame.GetMotions()
motion_1 = motions.New()
motion_1.SetType('Additional Force')
additional_force = motion_1.GetTypeObject()
```

**Methods:**

| Name | Description |
|-------------------------------------------------------------------------------|-----------------------------------|
| [`GetForceValue`](#generated.RAPrescribedForce.GetForceValue)([unit])         | Get the value of "Force Value".   |
| [`SetForceValue`](#generated.RAPrescribedForce.SetForceValue)(values[, unit]) | Set the values of "Force Value".  |

<a id="generated.RAPrescribedForce.GetForceValue"></a>

#### GetForceValue(unit: str | None = None)

Get the value of “Force Value”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “N”.

<a id="generated.RAPrescribedForce.SetForceValue"></a>

#### SetForceValue(values: Sequence[str | float], unit: str | None = None)

Set the values of “Force Value”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “N”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.
