# `HoffmanSettings`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.HoffmanSettings"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.HoffmanSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines the configuration for the Hoffman failure criterion for reinforced materials.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------|------------------------------------------------|
| [`Reset`](#HoffmanSettings.Reset)   | Resets the settings to their default values.   |

### Properties

| Name | Description |
|-----------------------------------------------------------|-------------------------------------------------------------------------------|
| [`FailureDimension`](#HoffmanSettings.FailureDimension)   | Gets or sets whether the failure criterion is evaluated only in-plane (2D),   |
| [`WeightingFactor`](#HoffmanSettings.WeightingFactor)     | Gets or sets the weighting factor for the failure criterion.                  |

<a id="property-detail"></a>

## Property detail

<a id="HoffmanSettings.FailureDimension"></a>

### *property* HoffmanSettings.FailureDimension *: [Ansys.Mechanical.DataModel.MechanicalEnums.CompositeFailure.FailureDimension](../../../../../Mechanical/DataModel/MechanicalEnums/CompositeFailure/FailureDimension.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.MechanicalEnums.CompositeFailure.FailureDimension) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether the failure criterion is evaluated only in-plane (2D),
: or also in the out-of-plane direction (3D).

<!-- !! processed by numpydoc !! -->

<a id="HoffmanSettings.WeightingFactor"></a>

### *property* HoffmanSettings.WeightingFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the failure criterion.
: The corresponding failure label is ‘ho’.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="HoffmanSettings.Reset"></a>

### HoffmanSettings.Reset()

Resets the settings to their default values.

<!-- !! processed by numpydoc !! -->

