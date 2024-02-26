# RAFreeBodyRotation

<!-- Make "generated" the current module for all API classes so that we can cross-reference them
without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (API classes generally aren't
instantiated by the user). -->

### *class* RAFreeBodyRotation

Rocky API wrapper representing a Free Body Rotation motion.

Retrieve this specific wrapper after setting the correct motion type on a [`RAMotion`](RAMotion.md#generated.RAMotion). For
example:

```python
motions = motion_frame.GetMotions()
motion_1 = motions.New()
motion_1.SetType('Free Body Rotation')
free_body_rotation = motion_1.GetTypeObject()
```

**Methods:**

| [`GetFreeMotionDirection`](#generated.RAFreeBodyRotation.GetFreeMotionDirection)()                       | Get "Free Motion Direction" as a string.                       |
|----------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| [`GetValidFreeMotionDirectionValues`](#generated.RAFreeBodyRotation.GetValidFreeMotionDirectionValues)() | Get a list of all possible values for "Free Motion Direction". |
| [`SetFreeMotionDirection`](#generated.RAFreeBodyRotation.SetFreeMotionDirection)(value)                  | Set the value of "Free Motion Direction".                      |

#### GetFreeMotionDirection()

Get “Free Motion Direction” as a string.

* **Returns:**
  The returned value will be one of [‘none’, ‘x’, ‘y’, ‘xy’, ‘z’, ‘xz’, ‘yz’, ‘xyz’].

#### GetValidFreeMotionDirectionValues()

Get a list of all possible values for “Free Motion Direction”.

* **Returns:**
  The returned list is [‘none’, ‘x’, ‘y’, ‘xy’, ‘z’, ‘xz’, ‘yz’, ‘xyz’].

#### SetFreeMotionDirection(value: str)

Set the value of “Free Motion Direction”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘none’, ‘x’, ‘y’, ‘xy’, ‘z’, ‘xz’, ‘yz’, ‘xyz’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Free Motion Direction” option.
