# `HashinSettings`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.HashinSettings"></a>

#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.HashinSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines the configuration for the Hashin failure criterion for reinforced materials.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------|------------------------------------------------|
| [`Reset`](#HashinSettings.Reset)   | Resets the settings to their default values.   |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| [`DelaminationWeightingFactor`](#HashinSettings.DelaminationWeightingFactor)   | Gets or sets the weighting factor for the delamination evaluation.                        |
| [`EvaluateDelamination`](#HashinSettings.EvaluateDelamination)                 | Gets or sets whether delamination is evaluated. Only applies when three-dimensional       |
| [`EvaluateFiberFailure`](#HashinSettings.EvaluateFiberFailure)                 | Gets or sets whether fiber failure is evaluated. The corresponding failure label is ‘hf’  |
| [`EvaluateMatrixFailure`](#HashinSettings.EvaluateMatrixFailure)               | Gets or sets whether matrix failure is evaluated. The corresponding failure label is ‘hm’ |
| [`FailureDimension`](#HashinSettings.FailureDimension)                         | Gets or sets whether the failure criterion is evaluated only in-plane (2D),               |
| [`FiberFailureWeightingFactor`](#HashinSettings.FiberFailureWeightingFactor)   | Gets or sets the weighting factor for the fiber failure evaluation.                       |
| [`MatrixFailureWeightingFactor`](#HashinSettings.MatrixFailureWeightingFactor) | Gets or sets the weighting factor for the matrix failure evaluation.                      |

<a id="property-detail"></a>

## Property detail

<a id="HashinSettings.DelaminationWeightingFactor"></a>

### *property* HashinSettings.DelaminationWeightingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the delamination evaluation.

<!-- !! processed by numpydoc !! -->

<a id="HashinSettings.EvaluateDelamination"></a>

### *property* HashinSettings.EvaluateDelamination *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether delamination is evaluated. Only applies when three-dimensional
: evaluation is selected. The corresponding failure label is ‘hd’

<!-- !! processed by numpydoc !! -->

<a id="HashinSettings.EvaluateFiberFailure"></a>

### *property* HashinSettings.EvaluateFiberFailure *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether fiber failure is evaluated. The corresponding failure label is ‘hf’

<!-- !! processed by numpydoc !! -->

<a id="HashinSettings.EvaluateMatrixFailure"></a>

### *property* HashinSettings.EvaluateMatrixFailure *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether matrix failure is evaluated. The corresponding failure label is ‘hm’

<!-- !! processed by numpydoc !! -->

<a id="HashinSettings.FailureDimension"></a>

### *property* HashinSettings.FailureDimension *: [Ansys.Mechanical.DataModel.MechanicalEnums.CompositeFailure.FailureDimension](../../../../../Mechanical/DataModel/MechanicalEnums/CompositeFailure/FailureDimension.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.MechanicalEnums.CompositeFailure.FailureDimension) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether the failure criterion is evaluated only in-plane (2D),
: or also in the out-of-plane direction (3D).

<!-- !! processed by numpydoc !! -->

<a id="HashinSettings.FiberFailureWeightingFactor"></a>

### *property* HashinSettings.FiberFailureWeightingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the fiber failure evaluation.

<!-- !! processed by numpydoc !! -->

<a id="HashinSettings.MatrixFailureWeightingFactor"></a>

### *property* HashinSettings.MatrixFailureWeightingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the matrix failure evaluation.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="HashinSettings.Reset"></a>

### HashinSettings.Reset()

Resets the settings to their default values.

<!-- !! processed by numpydoc !! -->

