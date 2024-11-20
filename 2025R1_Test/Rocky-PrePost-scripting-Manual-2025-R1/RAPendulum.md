

# RAPendulum

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAPendulum"></a>

### *class* RAPendulum

Rocky PrePost Scripting wrapper representing a Pendulum motion.

Retrieve this specific wrapper after setting the correct motion type on a [`RAMotion`](RAMotion.md#generated.RAMotion). For
example:

```python
motions = motion_frame.GetMotions()
motion_1 = motions.New()
motion_1.SetType('Pendulum')
pendulum = motion_1.GetTypeObject()
```

**Methods:**

| [`GetAmplitudeVariation`](#generated.RAPendulum.GetAmplitudeVariation)([unit])        | Get the value of "Amplitude Variation".   |
|---------------------------------------------------------------------------------------|-------------------------------------------|
| [`GetDirection`](#generated.RAPendulum.GetDirection)()                                | Get the value of "Direction".             |
| [`GetFrequencyVariation`](#generated.RAPendulum.GetFrequencyVariation)([unit])        | Get the value of "Frequency Variation".   |
| [`GetInitialAmplitude`](#generated.RAPendulum.GetInitialAmplitude)([unit])            | Get the value of "Initial Amplitude".     |
| [`GetInitialFrequency`](#generated.RAPendulum.GetInitialFrequency)([unit])            | Get the value of "Initial Frequency".     |
| [`GetInitialPhase`](#generated.RAPendulum.GetInitialPhase)([unit])                    | Get the value of "Initial Phase".         |
| [`SetAmplitudeVariation`](#generated.RAPendulum.SetAmplitudeVariation)(value[, unit]) | Set the value of "Amplitude Variation".   |
| [`SetDirection`](#generated.RAPendulum.SetDirection)(values)                          | Set the values of "Direction".            |
| [`SetFrequencyVariation`](#generated.RAPendulum.SetFrequencyVariation)(value[, unit]) | Set the value of "Frequency Variation".   |
| [`SetInitialAmplitude`](#generated.RAPendulum.SetInitialAmplitude)(value[, unit])     | Set the value of "Initial Amplitude".     |
| [`SetInitialFrequency`](#generated.RAPendulum.SetInitialFrequency)(value[, unit])     | Set the value of "Initial Frequency".     |
| [`SetInitialPhase`](#generated.RAPendulum.SetInitialPhase)(value[, unit])             | Set the value of "Initial Phase".         |

<a id="generated.RAPendulum.GetAmplitudeVariation"></a>

#### GetAmplitudeVariation(unit: Optional[str] = None)

Get the value of “Amplitude Variation”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “rad/s”.

<a id="generated.RAPendulum.GetDirection"></a>

#### GetDirection()

Get the value of “Direction”.

<a id="generated.RAPendulum.GetFrequencyVariation"></a>

#### GetFrequencyVariation(unit: Optional[str] = None)

Get the value of “Frequency Variation”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “Hz/s”.

<a id="generated.RAPendulum.GetInitialAmplitude"></a>

#### GetInitialAmplitude(unit: Optional[str] = None)

Get the value of “Initial Amplitude”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “rad”.

<a id="generated.RAPendulum.GetInitialFrequency"></a>

#### GetInitialFrequency(unit: Optional[str] = None)

Get the value of “Initial Frequency”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “Hz”.

<a id="generated.RAPendulum.GetInitialPhase"></a>

#### GetInitialPhase(unit: Optional[str] = None)

Get the value of “Initial Phase”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “rad”.

<a id="generated.RAPendulum.SetAmplitudeVariation"></a>

#### SetAmplitudeVariation(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Amplitude Variation”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “rad/s”.

<a id="generated.RAPendulum.SetDirection"></a>

#### SetDirection(values: List[Union[str, float]])

Set the values of “Direction”.

* **Parameters:**
  **values** – The values to set. The values can be heterogeneous, the element of values can be an
  expression with input variables or a float. Must have exactly 3 elements.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

<a id="generated.RAPendulum.SetFrequencyVariation"></a>

#### SetFrequencyVariation(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Frequency Variation”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “Hz/s”.

<a id="generated.RAPendulum.SetInitialAmplitude"></a>

#### SetInitialAmplitude(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Initial Amplitude”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “rad”.

<a id="generated.RAPendulum.SetInitialFrequency"></a>

#### SetInitialFrequency(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Initial Frequency”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “Hz”.

<a id="generated.RAPendulum.SetInitialPhase"></a>

#### SetInitialPhase(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Initial Phase”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “rad”.
