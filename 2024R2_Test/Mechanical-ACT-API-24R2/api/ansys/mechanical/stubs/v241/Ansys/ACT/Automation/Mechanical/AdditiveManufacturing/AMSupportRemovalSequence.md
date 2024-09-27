# `AMSupportRemovalSequence`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMSupportRemovalSequence"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMSupportRemovalSequence

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

AMSupportRemovalSequence class.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| [`Add`](#AMSupportRemovalSequence.Add)           | Adds a support or base removal step.                                    |
| [`Contains`](#AMSupportRemovalSequence.Contains) | Returns true if the step exists in the sequencer. If not, returns false |
| [`IndexOf`](#AMSupportRemovalSequence.IndexOf)   | Returns index of removal object                                         |
| [`Insert`](#AMSupportRemovalSequence.Insert)     | Inserts a given step at particular index(zero based)                    |
| [`RemoveAt`](#AMSupportRemovalSequence.RemoveAt) | Remove AM step at index.                                                |
| [`Swap`](#AMSupportRemovalSequence.Swap)         | Swaps two steps in the Removal sequence.                                |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|
| [`Count`](#AMSupportRemovalSequence.Count)   | Count property.   |

<a id="property-detail"></a>

## Property detail

<a id="AMSupportRemovalSequence.Count"></a>

### *property* AMSupportRemovalSequence.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Count property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AMSupportRemovalSequence.Add"></a>

### AMSupportRemovalSequence.Add(item: [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep](IAMProcessStep.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep))

```text
Adds a support or base removal step.
Throws a notSupportedException if the same step was already added.
Usage:
 removalSequence.Add(Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.BaseRemoval())
 removalSequence.Add(Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.SupportRemoval(supportObj))
```

<!-- !! processed by numpydoc !! -->

<a id="AMSupportRemovalSequence.Contains"></a>

### AMSupportRemovalSequence.Contains(item: [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep](IAMProcessStep.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep))

```text
Returns true if the step exists in the sequencer. If not, returns false
Usage:
    index1 = removalSequence.Contains(Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.BaseRemoval());
    index2 = removalSequence.Contains(Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.SupportRemoval(supportObj));
```

<!-- !! processed by numpydoc !! -->

<a id="AMSupportRemovalSequence.IndexOf"></a>

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

<a id="AMSupportRemovalSequence.Insert"></a>

### AMSupportRemovalSequence.Insert(index: System.Int32, item: [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep](IAMProcessStep.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep))

```text
Inserts a given step at particular index(zero based)
Throws an IndexOutOfRangeException if the step is being inserted out of range.
Throws a NotSupportedException if the insertion is invalid
Usage:
 Sequence.Insert(0,Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.UserStep())
```

<!-- !! processed by numpydoc !! -->

<a id="AMSupportRemovalSequence.RemoveAt"></a>

### AMSupportRemovalSequence.RemoveAt(index: System.Int32)

```text
Remove AM step at index.
Throws IndexOutOfRangeException if index is out of range
Usage:
 removalSequence.RemoveAt(0)
```

<!-- !! processed by numpydoc !! -->

<a id="AMSupportRemovalSequence.Swap"></a>

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

