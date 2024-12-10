# RASpringDashpotMoment

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RASpringDashpotMoment"></a>

### *class* RASpringDashpotMoment

Rocky PrePost Scripting wrapper representing a Spring-Dashpot Moment motion.

Retrieve this specific wrapper after setting the correct motion type on a [`RAMotion`](RAMotion.md#generated.RAMotion). For
example:

```python
motions = motion_frame.GetMotions()
motion_1 = motions.New()
motion_1.SetType('Spring-Dashpot Moment')
spring_moment = motion_1.GetTypeObject()
```

**Methods:**

| [`GetDashpotCoefficient`](#generated.RASpringDashpotMoment.GetDashpotCoefficient)([unit])        | Get the value of "Dashpot Coefficient".            |
|--------------------------------------------------------------------------------------------------|----------------------------------------------------|
| [`GetDirection`](#generated.RASpringDashpotMoment.GetDirection)()                                | Get "Direction" as a string.                       |
| [`GetSpringCoefficient`](#generated.RASpringDashpotMoment.GetSpringCoefficient)([unit])          | Get the value of "Spring Coefficient".             |
| [`GetValidDirectionValues`](#generated.RASpringDashpotMoment.GetValidDirectionValues)()          | Get a list of all possible values for "Direction". |
| [`SetDashpotCoefficient`](#generated.RASpringDashpotMoment.SetDashpotCoefficient)(value[, unit]) | Set the value of "Dashpot Coefficient".            |
| [`SetDirection`](#generated.RASpringDashpotMoment.SetDirection)(value)                           | Set the value of "Direction".                      |
| [`SetSpringCoefficient`](#generated.RASpringDashpotMoment.SetSpringCoefficient)(value[, unit])   | Set the value of "Spring Coefficient".             |

<a id="generated.RASpringDashpotMoment.GetDashpotCoefficient"></a>

#### GetDashpotCoefficient(unit: Optional[str] = None)

Get the value of “Dashpot Coefficient”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “Nms/rad”.

<a id="generated.RASpringDashpotMoment.GetDirection"></a>

#### GetDirection()

Get “Direction” as a string.

* **Returns:**
  The returned value will be one of [‘none’, ‘x’, ‘y’, ‘xy’, ‘z’, ‘xz’, ‘yz’, ‘xyz’].

<a id="generated.RASpringDashpotMoment.GetSpringCoefficient"></a>

#### GetSpringCoefficient(unit: Optional[str] = None)

Get the value of “Spring Coefficient”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “Nm/rad”.

<a id="generated.RASpringDashpotMoment.GetValidDirectionValues"></a>

#### GetValidDirectionValues()

Get a list of all possible values for “Direction”.

* **Returns:**
  The returned list is [‘none’, ‘x’, ‘y’, ‘xy’, ‘z’, ‘xz’, ‘yz’, ‘xyz’].

<a id="generated.RASpringDashpotMoment.SetDashpotCoefficient"></a>

#### SetDashpotCoefficient(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Dashpot Coefficient”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “Nms/rad”.

<a id="generated.RASpringDashpotMoment.SetDirection"></a>

#### SetDirection(value: str)

Set the value of “Direction”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘none’, ‘x’, ‘y’, ‘xy’, ‘z’, ‘xz’, ‘yz’, ‘xyz’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Direction” option.

<a id="generated.RASpringDashpotMoment.SetSpringCoefficient"></a>

#### SetSpringCoefficient(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Spring Coefficient”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “Nm/rad”.
