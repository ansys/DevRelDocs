# `AMBuildSequence`

<a id="ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMBuildSequence"></a>

#### *class* Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMBuildSequence

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

An AM build sequence contains a minimum of two steps - a heating step followed by a dwell step.

All sequences must begin with a heat step and end with a dwell step.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------|------------------------------------------------------------|
| [`GetStep`](#AMBuildSequence.GetStep)   | Gets the build sequence step at the 1-based step number.   |

### Properties

| Name | Description |
|-----------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| [`CombineSteps`](#AMBuildSequence.CombineSteps)                 | Gets or sets the Combine Sequence Steps flag. [Default = False]                                  |
| [`CombinedDurationType`](#AMBuildSequence.CombinedDurationType) | Gets or sets the combined heating duration type.  [Default = ScanTime]                           |
| [`NumberOfSteps`](#AMBuildSequence.NumberOfSteps)               | Gets or sets the number of steps in the build sequence. [Default = 2, Minimum = 2, Maximum = 31] |

<a id="property-detail"></a>

## Property detail

<a id="AMBuildSequence.CombineSteps"></a>

### *property* AMBuildSequence.CombineSteps *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combine Sequence Steps flag. [Default = False]

An exception is thrown if the EnableBuildSequence property is not True.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSequence.CombinedDurationType"></a>

### *property* AMBuildSequence.CombinedDurationType *: [Ansys.Mechanical.DataModel.Enums.AMHeatingDurationType](../../../../Mechanical/DataModel/Enums/AMHeatingDurationType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.Enums.AMHeatingDurationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the combined heating duration type.  [Default = ScanTime]

An exception is thrown if the EnableBuildSequence property is not True.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSequence.NumberOfSteps"></a>

### *property* AMBuildSequence.NumberOfSteps *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of steps in the build sequence. [Default = 2, Minimum = 2, Maximum = 31]

An exception is thrown if the EnableBuildSequence property is not True. An exception is also thrown
if the value is less than 2 or greater than 31.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AMBuildSequence.GetStep"></a>

### AMBuildSequence.GetStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMBuildSequenceStep](AMBuildSequenceStep.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMBuildSequenceStep)

```text
Gets the build sequence step at the 1-based step number.

     An exception is thrown if the stepNumber is less than 1 or greater than the number of steps. An exception is
     also thrown if the EnableBuildSequence property is not True.
```

<!-- !! processed by numpydoc !! -->

