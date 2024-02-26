# RAConeCrusherFrame

<!-- Make "generated" the current module for all API classes so that we can cross-reference them
without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (API classes generally aren't
instantiated by the user). -->

### *class* RAConeCrusherFrame

Rocky API wrapper for a cone crusher frame.

The class contains methods to configure a cone crusher frame. There are some options
to retrieve a specific [`RAConeCrusherFrame`](#generated.RAConeCrusherFrame) in a project from a [`RAStudy`](RAStudy.md#generated.RAStudy),
a [`RAMotionFrameSource`](RAMotionFrameSource.md#generated.RAMotionFrameSource), another [`RAConeCrusherFrame`](#generated.RAConeCrusherFrame) or a [`RAMotionFrame`](RAMotionFrame.md#generated.RAMotionFrame):

```python
# From the RAStudy
motion_frame = study.GetElement('<motion frame name>')

# From the RAMotionFrameSource
frame_source = study.GetMotionFrameSource()
motion_frame = frame_source.GetMotionFrame('<motion frame name>')

# From a "parent" motion frame
frame_1 = study.GetElement('<frame 1 name>')
frame_2 = frame_1.GetMotionFrame('<frame 2 name>')
```

Motion frames can be created on the “root” of the project’s cone crusher frames (the source returned
in [`RAStudy.GetMotionFrameSource()`](RAStudy.md#generated.RAStudy.GetMotionFrameSource)), or as a ‘child’ frame of a pre-existing cone crusher frame:

```python
frame_source = study.GetMotionFrameSource()

# Create a motion frame with no parent frame
frame_1 = frame_source.NewConeCrusherFrame()
# Configure this new frame frame_1
frame_1.SetInitialOrientation(...)
frame_1.SetPivotPoint(...)

# Create a new frame, as a child of `frame_1`
frame_2 = frame_1.NewConeCrusherFrame()
# Configure this new frame frame_2
frame_2.SetInitialOrientation(...)
# ... configure motions, etc.
```

**Methods:**

| [`GetInitialOrientation`](#generated.RAConeCrusherFrame.GetInitialOrientation)([unit])         | Get the value of "Initial Orientation".                      |
|------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| [`GetMotionFrame`](#generated.RAConeCrusherFrame.GetMotionFrame)(frame_name)                   | Get a specific motion frame given its name.                  |
| [`GetParentMotionFrame`](#generated.RAConeCrusherFrame.GetParentMotionFrame)()                 | Gets the parent motion frame.                                |
| [`GetPivotPoint`](#generated.RAConeCrusherFrame.GetPivotPoint)([unit])                         | Get the value of "Pivot Point".                              |
| [`GetRotationAxis`](#generated.RAConeCrusherFrame.GetRotationAxis)([unit])                     | Get the value of "Rotation Axis".                            |
| [`GetRotationalVelocity`](#generated.RAConeCrusherFrame.GetRotationalVelocity)([unit])         | Get the value of "Rotational Velocity".                      |
| [`GetStartTime`](#generated.RAConeCrusherFrame.GetStartTime)([unit])                           | Get the value of "Start Time".                               |
| [`GetStopTime`](#generated.RAConeCrusherFrame.GetStopTime)([unit])                             | Get the value of "Stop Time".                                |
| [`IterMotionFrames`](#generated.RAConeCrusherFrame.IterMotionFrames)()                         | Iterates over all the motion frames available (recursively). |
| [`NewConeCrusherFrame`](#generated.RAConeCrusherFrame.NewConeCrusherFrame)()                   | Creates a new cone crusher frame.                            |
| [`NewFrame`](#generated.RAConeCrusherFrame.NewFrame)()                                         | Creates a new motion frame.                                  |
| [`RemoveFrame`](#generated.RAConeCrusherFrame.RemoveFrame)(motion_frame)                       | Removes a previously-created motion frame.                   |
| [`SetInitialOrientation`](#generated.RAConeCrusherFrame.SetInitialOrientation)(values[, unit]) | Set the values of "Initial Orientation".                     |
| [`SetPivotPoint`](#generated.RAConeCrusherFrame.SetPivotPoint)(values[, unit])                 | Set the values of "Pivot Point".                             |
| [`SetRotationAxis`](#generated.RAConeCrusherFrame.SetRotationAxis)(values[, unit])             | Set the values of "Rotation Axis".                           |
| [`SetRotationalVelocity`](#generated.RAConeCrusherFrame.SetRotationalVelocity)(value[, unit])  | Set the value of "Rotational Velocity".                      |
| [`SetStartTime`](#generated.RAConeCrusherFrame.SetStartTime)(value[, unit])                    | Set the value of "Start Time".                               |
| [`SetStopTime`](#generated.RAConeCrusherFrame.SetStopTime)(value[, unit])                      | Set the value of "Stop Time".                                |

#### GetInitialOrientation(unit: Optional[str] = None)

Get the value of “Initial Orientation”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “m”.

#### GetMotionFrame(frame_name)

Get a specific motion frame given its name.

* **Parameters:**
  **frame_name** (*unicode*) – 
* **Return type:**
  [RAMotionFrame](RAMotionFrame.md#generated.RAMotionFrame)

#### GetParentMotionFrame()

Gets the parent motion frame.
If the Motion Frame is a RAMotionFrameSource it returns None.

* **Return type:**
  [RAMotionFrame](RAMotionFrame.md#generated.RAMotionFrame)

#### GetPivotPoint(unit: Optional[str] = None)

Get the value of “Pivot Point”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “m”.

#### GetRotationAxis(unit: Optional[str] = None)

Get the value of “Rotation Axis”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “m”.

#### GetRotationalVelocity(unit: Optional[str] = None)

Get the value of “Rotational Velocity”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “rad/s”.

#### GetStartTime(unit: Optional[str] = None)

Get the value of “Start Time”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

#### GetStopTime(unit: Optional[str] = None)

Get the value of “Stop Time”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

#### IterMotionFrames()

Iterates over all the motion frames available (recursively).

* **Return iter(RAMotionFrame):**

#### NewConeCrusherFrame()

Creates a new cone crusher frame.

* **Return type:**
  [RAConeCrusherFrame](#generated.RAConeCrusherFrame)

#### NewFrame()

Creates a new motion frame.

#### RemoveFrame(motion_frame)

Removes a previously-created motion frame.

* **Parameters:**
  **motion_frame** ([*RAMotionFrame*](RAMotionFrame.md#generated.RAMotionFrame) *or* [*RAConeCrusherFrame*](#generated.RAConeCrusherFrame)) – 

#### SetInitialOrientation(values: Sequence[Union[str, float]], unit: Optional[str] = None)

Set the values of “Initial Orientation”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “m”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

#### SetPivotPoint(values: Sequence[Union[str, float]], unit: Optional[str] = None)

Set the values of “Pivot Point”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “m”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

#### SetRotationAxis(values: Sequence[Union[str, float]], unit: Optional[str] = None)

Set the values of “Rotation Axis”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “m”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

#### SetRotationalVelocity(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Rotational Velocity”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “rad/s”.

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
