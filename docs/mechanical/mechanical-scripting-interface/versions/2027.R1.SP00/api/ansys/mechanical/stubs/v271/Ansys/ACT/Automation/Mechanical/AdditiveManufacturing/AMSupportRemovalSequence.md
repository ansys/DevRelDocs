# `AMSupportRemovalSequence`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMSupportRemovalSequence"></a>

#### *class* Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMSupportRemovalSequence(sequenceObj: Ansys.Common.Interop.DSObjectsAuto.IDSAMProcessSequence)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------|-------------------------------------------------------------------------|
| [`Add`](#AMSupportRemovalSequence.Add)                     | Adds a support or base removal step.                                    |
| [`Clear`](#AMSupportRemovalSequence.Clear)                 | Clear method.                                                           |
| [`Contains`](#AMSupportRemovalSequence.Contains)           | Returns true if the step exists in the sequencer. If not, returns false |
| [`CopyTo`](#AMSupportRemovalSequence.CopyTo)               | CopyTo method.                                                          |
| [`Find`](#AMSupportRemovalSequence.Find)                   | Find method.                                                            |
| [`GetEnumerator`](#AMSupportRemovalSequence.GetEnumerator) | GetEnumerator method.                                                   |
| [`IndexOf`](#AMSupportRemovalSequence.IndexOf)             | Returns index of removal object                                         |
| [`Insert`](#AMSupportRemovalSequence.Insert)               | Inserts a given step at particular index(zero based)                    |
| [`Remove`](#AMSupportRemovalSequence.Remove)               | Remove a support or base removal step.                                  |
| [`RemoveAt`](#AMSupportRemovalSequence.RemoveAt)           | Remove AM step at index.                                                |
| [`Swap`](#AMSupportRemovalSequence.Swap)                   | Swaps two steps in the Removal sequence.                                |

### Properties

| Name | Description |
|------------------------------------------------------|----------------------|
| [`Count`](#AMSupportRemovalSequence.Count)           | Count property.      |
| [`IsReadOnly`](#AMSupportRemovalSequence.IsReadOnly) | IsReadOnly property. |
| [`Item`](#AMSupportRemovalSequence.Item)             | Item property.       |

<a id="property-detail"></a>

## Property detail

<a id="AMSupportRemovalSequence.Count"></a>

### *property* AMSupportRemovalSequence.Count *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Count property.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportRemovalSequence.IsReadOnly"></a>

### *property* AMSupportRemovalSequence.IsReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IsReadOnly property.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportRemovalSequence.Item"></a>

### *property* AMSupportRemovalSequence.Item *: [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep](IAMProcessStep.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AMSupportRemovalSequence.Add"></a>

### AMSupportRemovalSequence.Add(item: [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep](IAMProcessStep.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep)) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Adds a support or base removal step.
Throws a notSupportedException if the same step was already added.
Usage:
 removalSequence.Add(Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.BaseRemoval())
 removalSequence.Add(Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.SupportRemoval(supportObj))
```

<!-- !! processed by numpydoc !! -->

<a id="AMSupportRemovalSequence.Clear"></a>

### AMSupportRemovalSequence.Clear() → [None](https://docs.python.org/3/builtins/constants.html#None)

Clear method.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportRemovalSequence.Contains"></a>

### AMSupportRemovalSequence.Contains(item: [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep](IAMProcessStep.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

```text
Returns true if the step exists in the sequencer. If not, returns false
Usage:
    index1 = removalSequence.Contains(Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.BaseRemoval());
    index2 = removalSequence.Contains(Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.SupportRemoval(supportObj));
```

<!-- !! processed by numpydoc !! -->

<a id="AMSupportRemovalSequence.CopyTo"></a>

### AMSupportRemovalSequence.CopyTo(array: [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep](IAMProcessStep.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep), index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

CopyTo method.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportRemovalSequence.Find"></a>

### AMSupportRemovalSequence.Find(item: [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep](IAMProcessStep.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep)) → [int](https://docs.python.org/3/builtins/functions.html#int)

Find method.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportRemovalSequence.GetEnumerator"></a>

### AMSupportRemovalSequence.GetEnumerator() → Iterator[[Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep](IAMProcessStep.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep)]

GetEnumerator method.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportRemovalSequence.IndexOf"></a>

### AMSupportRemovalSequence.IndexOf(item: [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep](IAMProcessStep.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep)) → [int](https://docs.python.org/3/builtins/functions.html#int)

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

### AMSupportRemovalSequence.Insert(index: [int](https://docs.python.org/3/builtins/functions.html#int), item: [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep](IAMProcessStep.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep)) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Inserts a given step at particular index(zero based)
Throws an IndexOutOfRangeException if the step is being inserted out of range.
Throws a NotSupportedException if the insertion is invalid
Usage:
 Sequence.Insert(0,Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.UserStep())
```

<!-- !! processed by numpydoc !! -->

<a id="AMSupportRemovalSequence.Remove"></a>

### AMSupportRemovalSequence.Remove(item: [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep](IAMProcessStep.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AMSupportRemovalSequence.Remove(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

```text
Remove a support or base removal step.
Returns true if the step was removed
Returns false if the step could not be removed because it did not exist
Usage:
C#:
    removalSequence.Remove(new Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.BaseRemoval());
    removalSequence.Remove(new Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.SupportRemoval(supportObj));
    removalSequence.Remove(removalSequence[2]));
Python:
    removalSequence.Remove(Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.BaseRemoval());
    removalSequence.Remove(Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.SupportRemoval(supportObj));
    removalSequence.Remove(removalSequence[2]))
```

<!-- !! processed by numpydoc !! -->

<a id="AMSupportRemovalSequence.RemoveAt"></a>

### AMSupportRemovalSequence.RemoveAt(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Remove AM step at index.
Throws IndexOutOfRangeException if index is out of range
Usage:
 removalSequence.RemoveAt(0)
```

<!-- !! processed by numpydoc !! -->

<a id="AMSupportRemovalSequence.Swap"></a>

### AMSupportRemovalSequence.Swap(item1: [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep](IAMProcessStep.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep), item2: [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep](IAMProcessStep.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AMSupportRemovalSequence.Swap(index1: [int](https://docs.python.org/3/builtins/functions.html#int), index2: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

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

