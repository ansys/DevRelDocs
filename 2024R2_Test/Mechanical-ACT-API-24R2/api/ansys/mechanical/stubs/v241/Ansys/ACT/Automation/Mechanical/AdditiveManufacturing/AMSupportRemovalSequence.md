# `AMSupportRemovalSequence`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMSupportRemovalSequence

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

AMSupportRemovalSequence class.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------|-------------------------------------------------------------------------|
| `Add`      | Adds a support or base removal step.                                    |
| `RemoveAt` | Remove AM step at index.                                                |
| `Swap`     | Swaps two steps in the Removal sequence.                                |
| `Swap`     | Swaps two steps in the Removal sequence by name.                        |
| `IndexOf`  | Returns index of removal object                                         |
| `Insert`   | Inserts a given step at particular index(zero based)                    |
| `Contains` | Returns true if the step exists in the sequencer. If not, returns false |

### Properties

| Name | Description |
|-----------|-------------------|
| `Count`   | Count property.   |

<a id="property-detail"></a>

## Property detail

### *property* AMSupportRemovalSequence.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Count property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### AMSupportRemovalSequence.Add(item: [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep](IAMProcessStep.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep))

```text
Adds a support or base removal step.
Throws a notSupportedException if the same step was already added.
Usage:
 removalSequence.Add(Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.BaseRemoval())
 removalSequence.Add(Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.SupportRemoval(supportObj))
```

<!-- !! processed by numpydoc !! -->

### AMSupportRemovalSequence.RemoveAt(index: System.Int32)

```text
Remove AM step at index.
Throws IndexOutOfRangeException if index is out of range
Usage:
 removalSequence.RemoveAt(0)
```

<!-- !! processed by numpydoc !! -->

### AMSupportRemovalSequence.Swap(item1: [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep](IAMProcessStep.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep), item2: [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep](IAMProcessStep.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep))

```text
Swaps two steps in the Removal sequence.
Returns true if successful and false if unsuccessful
Usage:
C#
 removalSequence.Swap(
    new Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.BaseRemoval(),
    new Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.SupportRemoval(supportObj));
Python
 removalSequence.Swap(
    Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.BaseRemoval(),
    Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.SupportRemoval(supportObj))
```

<!-- !! processed by numpydoc !! -->

### AMSupportRemovalSequence.Swap(index1: System.Int32, index2: System.Int32)

```text
Swaps two steps in the Removal sequence by name.
Returns true if successful and false if unsuccessful
Usage:
 removalSequence.Swap("Base", "Generated Support 1")
```

<!-- !! processed by numpydoc !! -->

### AMSupportRemovalSequence.IndexOf(item: [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep](IAMProcessStep.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep))

```text
Returns index of removal object
Returns -1 if removal object not found
Usage:
C#
    index1 = removalSequence.IndexOf(new Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.BaseRemoval());
    index2 = removalSequence.IndexOf(new Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.SupportRemoval(supportObj));
Python
    index1 = removalSequence.IndexOf(Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.BaseRemoval());
    index2 = removalSequence.IndexOf(Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.SupportRemoval(supportObj));
```

<!-- !! processed by numpydoc !! -->

### AMSupportRemovalSequence.Insert(index: System.Int32, item: [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep](IAMProcessStep.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep))

```text
Inserts a given step at particular index(zero based)
Throws an IndexOutOfRangeException if the step is being inserted out of range.
Throws a NotSupportedException if the insertion is invalid
Usage:
 Sequence.Insert(0,Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.UserStep())
```

<!-- !! processed by numpydoc !! -->

### AMSupportRemovalSequence.Contains(item: [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep](IAMProcessStep.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep))

```text
Returns true if the step exists in the sequencer. If not, returns false
Usage:
    index1 = removalSequence.Contains(Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.BaseRemoval());
    index2 = removalSequence.Contains(Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.SupportRemoval(supportObj));
```

<!-- !! processed by numpydoc !! -->

