

# RAMotionFrameSource

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAMotionFrameSource"></a>

### *class* RAMotionFrameSource

Rocky PrePost Scripting wrapper for the root element for Motion Frames

This class represents the “Motion Frame” item on the project’s data tree. Get the [`RAMotionFrameSource`](#generated.RAMotionFrameSource)
from a [`RAStudy`](RAStudy.md#generated.RAStudy) via:

```python
motion_frame_source = study.GetMotionFrameSource()
```

This is the element through which motion frames with no parent frames can be created, and through
which all motion frames can be directly accessed:

```python
motion_frame_1 = motion_frame_source.NewFrame()
motion_frame_2 = motion_frame.GetMotionFrame('My Frame')
for motion_frame in motion_frame.IterMotionFrames():
    motion_frame.SetRelativePosition([1.0, 2.0, 3.0], 'm')
```

**Methods:**

| [`GetMotionFrame`](#generated.RAMotionFrameSource.GetMotionFrame)(frame_name)   | Get a specific motion frame given its name.                  |
|---------------------------------------------------------------------------------|--------------------------------------------------------------|
| [`GetParentMotionFrame`](#generated.RAMotionFrameSource.GetParentMotionFrame)() | Gets the parent motion frame.                                |
| [`IterMotionFrames`](#generated.RAMotionFrameSource.IterMotionFrames)()         | Iterates over all the motion frames available (recursively). |
| [`NewConeCrusherFrame`](#generated.RAMotionFrameSource.NewConeCrusherFrame)()   | Creates a new cone crusher frame.                            |
| [`NewFrame`](#generated.RAMotionFrameSource.NewFrame)()                         | Creates a new motion frame.                                  |
| [`RemoveFrame`](#generated.RAMotionFrameSource.RemoveFrame)(motion_frame)       | Removes a previously-created motion frame.                   |

<a id="generated.RAMotionFrameSource.GetMotionFrame"></a>

#### GetMotionFrame(frame_name)

Get a specific motion frame given its name.

* **Parameters:**
  **frame_name** (*unicode*) – 
* **Return type:**
  [RAMotionFrame](RAMotionFrame.md#generated.RAMotionFrame)

<a id="generated.RAMotionFrameSource.GetParentMotionFrame"></a>

#### GetParentMotionFrame()

Gets the parent motion frame.
If the Motion Frame is a RAMotionFrameSource it returns None.

* **Return type:**
  [RAMotionFrame](RAMotionFrame.md#generated.RAMotionFrame)

<a id="generated.RAMotionFrameSource.IterMotionFrames"></a>

#### IterMotionFrames()

Iterates over all the motion frames available (recursively).

* **Return iter(RAMotionFrame):**

<a id="generated.RAMotionFrameSource.NewConeCrusherFrame"></a>

#### NewConeCrusherFrame()

Creates a new cone crusher frame.

* **Return type:**
  [RAConeCrusherFrame](RAConeCrusherFrame.md#generated.RAConeCrusherFrame)

<a id="generated.RAMotionFrameSource.NewFrame"></a>

#### NewFrame()

Creates a new motion frame.

<a id="generated.RAMotionFrameSource.RemoveFrame"></a>

#### RemoveFrame(motion_frame)

Removes a previously-created motion frame.

* **Parameters:**
  **motion_frame** ([*RAMotionFrame*](RAMotionFrame.md#generated.RAMotionFrame) *or* [*RAConeCrusherFrame*](RAConeCrusherFrame.md#generated.RAConeCrusherFrame)) –
