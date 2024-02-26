# RAVibration

<!-- Make "generated" the current module for all API classes so that we can cross-reference them
without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (API classes generally aren't
instantiated by the user). -->

### *class* RAVibration

Rocky API wrapper representing a Vibration motion.

Retrieve this specific wrapper after setting the correct motion type on a [`RAMotion`](RAMotion.md#generated.RAMotion). For
example:

```python
motions = motion_frame.GetMotions()
motion_1 = motions.New()
motion_1.SetType('Vibration')
vibration = motion_1.GetTypeObject()
```

**Methods:**

| [`GetAmplitudeVariation`](#generated.RAVibration.GetAmplitudeVariation)([unit])        | Get the value of "Amplitude Variation".   |
|----------------------------------------------------------------------------------------|-------------------------------------------|
| [`GetDirection`](#generated.RAVibration.GetDirection)()                                | Get the value of "Direction".             |
| [`GetFrequencyVariation`](#generated.RAVibration.GetFrequencyVariation)([unit])        | Get the value of "Frequency Variation".   |
| [`GetInitialAmplitude`](#generated.RAVibration.GetInitialAmplitude)([unit])            | Get the value of "Initial Amplitude".     |
| [`GetInitialFrequency`](#generated.RAVibration.GetInitialFrequency)([unit])            | Get the value of "Initial Frequency".     |
| [`GetInitialPhase`](#generated.RAVibration.GetInitialPhase)([unit])                    | Get the value of "Initial Phase".         |
| [`SetAmplitudeVariation`](#generated.RAVibration.SetAmplitudeVariation)(value[, unit]) | Set the value of "Amplitude Variation".   |
| [`SetDirection`](#generated.RAVibration.SetDirection)(values)                          | Set the values of "Direction".            |
| [`SetFrequencyVariation`](#generated.RAVibration.SetFrequencyVariation)(value[, unit]) | Set the value of "Frequency Variation".   |
| [`SetInitialAmplitude`](#generated.RAVibration.SetInitialAmplitude)(value[, unit])     | Set the value of "Initial Amplitude".     |
| [`SetInitialFrequency`](#generated.RAVibration.SetInitialFrequency)(value[, unit])     | Set the value of "Initial Frequency".     |
| [`SetInitialPhase`](#generated.RAVibration.SetInitialPhase)(value[, unit])             | Set the value of "Initial Phase".         |

#### GetAmplitudeVariation(unit: Optional[str] = None)

Get the value of “Amplitude Variation”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m/s”.

#### GetDirection()

Get the value of “Direction”.

#### GetFrequencyVariation(unit: Optional[str] = None)

Get the value of “Frequency Variation”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “Hz/s”.

#### GetInitialAmplitude(unit: Optional[str] = None)

Get the value of “Initial Amplitude”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

#### GetInitialFrequency(unit: Optional[str] = None)

Get the value of “Initial Frequency”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “Hz”.

#### GetInitialPhase(unit: Optional[str] = None)

Get the value of “Initial Phase”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “rad”.

#### SetAmplitudeVariation(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Amplitude Variation”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m/s”.

#### SetDirection(values: List[Union[str, float]])

Set the values of “Direction”.

* **Parameters:**
  **values** – The values to set. The values can be heterogeneous, the element of values can be an
  expression with input variables or a float. Must have exactly 3 elements.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

#### SetFrequencyVariation(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Frequency Variation”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “Hz/s”.

#### SetInitialAmplitude(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Initial Amplitude”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

#### SetInitialFrequency(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Initial Frequency”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “Hz”.

#### SetInitialPhase(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Initial Phase”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “rad”.
