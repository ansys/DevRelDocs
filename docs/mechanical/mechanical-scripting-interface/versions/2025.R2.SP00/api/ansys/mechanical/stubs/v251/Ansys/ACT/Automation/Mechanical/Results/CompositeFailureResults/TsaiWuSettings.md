# `TsaiWuSettings`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.TsaiWuSettings"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.TsaiWuSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines the configuration for the Tsai-Wu failure criterion for reinforced materials.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------|------------------------------------------------|
| [`Reset`](#TsaiWuSettings.Reset)   | Resets the settings to their default values.   |

### Properties

| Name | Description |
|----------------------------------------------------------|-------------------------------------------------------------------------------|
| [`FailureDimension`](#TsaiWuSettings.FailureDimension)   | Gets or sets whether the failure criterion is evaluated only in-plane (2D),   |
| [`WeightingFactor`](#TsaiWuSettings.WeightingFactor)     | Gets or sets the weighting factor for the failure criterion.                  |

<a id="property-detail"></a>

## Property detail

<a id="TsaiWuSettings.FailureDimension"></a>

### *property* TsaiWuSettings.FailureDimension *: [Ansys.Mechanical.DataModel.MechanicalEnums.CompositeFailure.FailureDimension](../../../../../Mechanical/DataModel/MechanicalEnums/CompositeFailure/FailureDimension.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.MechanicalEnums.CompositeFailure.FailureDimension) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether the failure criterion is evaluated only in-plane (2D),
: or also in the out-of-plane direction (3D).

<!-- !! processed by numpydoc !! -->

<a id="TsaiWuSettings.WeightingFactor"></a>

### *property* TsaiWuSettings.WeightingFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the failure criterion.
: The corresponding failure label is ‘tw’.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="TsaiWuSettings.Reset"></a>

### TsaiWuSettings.Reset()

Resets the settings to their default values.

<!-- !! processed by numpydoc !! -->

