# RASpringDashpotForce

<!-- Make "generated" the current module for all API classes so that we can cross-reference them
without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (API classes generally aren't
instantiated by the user). -->

### *class* RASpringDashpotForce

Rocky API wrapper representing a Spring-Dashpot Force motion.

Retrieve this specific wrapper after setting the correct motion type on a [`RAMotion`](RAMotion.md#generated.RAMotion). For
example:

```python
motions = motion_frame.GetMotions()
motion_1 = motions.New()
motion_1.SetType('Spring-Dashpot Force')
spring_force = motion_1.GetTypeObject()
```

**Methods:**

| [`GetDashpotCoefficient`](#generated.RASpringDashpotForce.GetDashpotCoefficient)([unit])        | Get the value of "Dashpot Coefficient".            |
|-------------------------------------------------------------------------------------------------|----------------------------------------------------|
| [`GetDirection`](#generated.RASpringDashpotForce.GetDirection)()                                | Get "Direction" as a string.                       |
| [`GetSpringCoefficient`](#generated.RASpringDashpotForce.GetSpringCoefficient)([unit])          | Get the value of "Spring Coefficient".             |
| [`GetValidDirectionValues`](#generated.RASpringDashpotForce.GetValidDirectionValues)()          | Get a list of all possible values for "Direction". |
| [`SetDashpotCoefficient`](#generated.RASpringDashpotForce.SetDashpotCoefficient)(value[, unit]) | Set the value of "Dashpot Coefficient".            |
| [`SetDirection`](#generated.RASpringDashpotForce.SetDirection)(value)                           | Set the value of "Direction".                      |
| [`SetSpringCoefficient`](#generated.RASpringDashpotForce.SetSpringCoefficient)(value[, unit])   | Set the value of "Spring Coefficient".             |

#### GetDashpotCoefficient(unit: Optional[str] = None)

Get the value of “Dashpot Coefficient”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “N.s/m”.

#### GetDirection()

Get “Direction” as a string.

* **Returns:**
  The returned value will be one of [‘none’, ‘x’, ‘y’, ‘xy’, ‘z’, ‘xz’, ‘yz’, ‘xyz’].

#### GetSpringCoefficient(unit: Optional[str] = None)

Get the value of “Spring Coefficient”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “N/m”.

#### GetValidDirectionValues()

Get a list of all possible values for “Direction”.

* **Returns:**
  The returned list is [‘none’, ‘x’, ‘y’, ‘xy’, ‘z’, ‘xz’, ‘yz’, ‘xyz’].

#### SetDashpotCoefficient(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Dashpot Coefficient”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “N.s/m”.

#### SetDirection(value: str)

Set the value of “Direction”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘none’, ‘x’, ‘y’, ‘xy’, ‘z’, ‘xz’, ‘yz’, ‘xyz’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Direction” option.

#### SetSpringCoefficient(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Spring Coefficient”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “N/m”.
