# RAMotion

<!-- Make "generated" the current module for all API classes so that we can cross-reference them
without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (API classes generally aren't
instantiated by the user). -->

### *class* RAMotion

Rocky API wrapper representing a single Motion in a Motion Frame.

Access individual motions via a [`RAMotionFrame`](RAMotionFrame.md#generated.RAMotionFrame)’s motion list:

```python
motions = motion_frame.GetMotions()
motion_1 = motions[0]
motion_2 = motions.New()
```

Every [`RAMotion`](#generated.RAMotion) contains properties that are common to all motions (such as start
and stop times) and properties that are specific to the motion’s type (translation, vibration,
etc). These latter properties must be accessed by a “sub-object” that is retrieved via
[`GetTypeObject()`](#generated.RAMotion.GetTypeObject) after the specific motion type is configured via [`SetType()`](#generated.RAMotion.SetType).

```python
motions = motion_frame.GetMotions()
motion_1 = motions.New()
motion_1.SetType('Translation')
translation = motion_1.GetTypeObject()
# `translation` is a RATranslation
translation.SetVelocity([1.0, 0.0, 0.0], 'm/s')
```

Refer to the specific API wrappers for documentation on the individual motion types:

* [`RATranslation`](RATranslation.md#generated.RATranslation)
* [`RARotation`](RARotation.md#generated.RARotation)
* [`RAPendulum`](RAPendulum.md#generated.RAPendulum)
* [`RAVibration`](RAVibration.md#generated.RAVibration)
* [`RAFreeBodyRotation`](RAFreeBodyRotation.md#generated.RAFreeBodyRotation)
* [`RAFreeBodyTranslation`](RAFreeBodyTranslation.md#generated.RAFreeBodyTranslation)
* [`RAPrescribedForce`](RAPrescribedForce.md#generated.RAPrescribedForce)
* [`RAPrescribedMoment`](RAPrescribedMoment.md#generated.RAPrescribedMoment)
* [`RASpringDashpotForce`](RASpringDashpotForce.md#generated.RASpringDashpotForce)
* [`RASpringDashpotMoment`](RASpringDashpotMoment.md#generated.RASpringDashpotMoment)
* [`RALinearTimeVariableForce`](RALinearTimeVariableForce.md#generated.RALinearTimeVariableForce)
* [`RALinearTimeVariableMoment`](RALinearTimeVariableMoment.md#generated.RALinearTimeVariableMoment)

**Methods:**

| [`GetStartTime`](#generated.RAMotion.GetStartTime)([unit])        | Get the value of "Start Time".                                |
|-------------------------------------------------------------------|---------------------------------------------------------------|
| [`GetStopTime`](#generated.RAMotion.GetStopTime)([unit])          | Get the value of "Stop Time".                                 |
| [`GetType`](#generated.RAMotion.GetType)()                        | Get the concrete type of motion.                              |
| [`GetTypeObject`](#generated.RAMotion.GetTypeObject)()            | Get the API object that wraps the specific motion type.       |
| [`GetValidTypes`](#generated.RAMotion.GetValidTypes)()            | Return a list with the possible values for the motion's type. |
| [`SetStartTime`](#generated.RAMotion.SetStartTime)(value[, unit]) | Set the value of "Start Time".                                |
| [`SetStopTime`](#generated.RAMotion.SetStopTime)(value[, unit])   | Set the value of "Stop Time".                                 |
| [`SetType`](#generated.RAMotion.SetType)(motion_type)             | Set the concrete type of motion.                              |

#### GetStartTime(unit: Optional[str] = None)

Get the value of “Start Time”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

#### GetStopTime(unit: Optional[str] = None)

Get the value of “Stop Time”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

#### GetType()

Get the concrete type of motion.

* **Return type:**
  unicode
* **Returns:**
  A string describing the type of motion. The returned value will be one of the strings
  in the “Type” drop-down menu in the UI.

#### GetTypeObject()

Get the API object that wraps the specific motion type.

* **Return type:**
  ApiElementItem

#### GetValidTypes()

Return a list with the possible values for the motion’s type.

* **Return type:**
  list(unicode)
* **Returns:**
  A list of accepted values for SetType().

#### SetStartTime(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Start Time”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

#### SetStopTime(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Stop Time”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

#### SetType(motion_type)

Set the concrete type of motion.

* **Parameters:**
  **motion_type** (*unicode*) – The concrete motion type. Accepted values are the strings in the “Type” drop-down menu
  in the UI.
* **Returns:**
  The API wrapper representing the concrete motion type.
