

# RAMotionList

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAMotionList"></a>

### *class* RAMotionList

Rocky PrePost Scripting wrapper to manipulate the motions in a single Motion Frame.

To get the [`RAMotionList`](#generated.RAMotionList) from a [`RAMotionFrame`](RAMotionFrame.md#generated.RAMotionFrame), use:

```python
motions = motion_frame.GetMotions()
```

The [`RAMotionList`](#generated.RAMotionList) class acts as a regular Python list, with the usual methods to iterate
and access individual motions:

```python
motion_1 = motions.New()
motion_2 = motions.New()

for motion in motions:
    motion.SetStartTime(1, 's')

del motions[0]
motions.Clear()
```

The items in the motion list are of type [`RAMotion`](RAMotion.md#generated.RAMotion).

**Methods:**

| [`Clear`](#generated.RAMotionList.Clear)()       | Remove all items from the list.   |
|--------------------------------------------------|-----------------------------------|
| [`New`](#generated.RAMotionList.New)()           | Add a new item.                   |
| [`Remove`](#generated.RAMotionList.Remove)(item) | Remove an item from the list.     |

<a id="generated.RAMotionList.Clear"></a>

#### Clear()

Remove all items from the list.

<a id="generated.RAMotionList.New"></a>

#### New()

Add a new item. Returns the newly created item.

<a id="generated.RAMotionList.Remove"></a>

#### Remove(item: T)

Remove an item from the list.
