# `HashinSettings`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.HashinSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines the configuration for the Hashin failure criterion for reinforced materials.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------|------------------------------------------------|
| `Reset`   | Resets the settings to their default values.   |

### Properties

| Name | Description |
|--------------------------------|-------------------------------------------------------------------------------------------|
| `FailureDimension`             | Gets or sets whether the failure criterion is evaluated only in-plane (2D),               |
| `EvaluateFiberFailure`         | Gets or sets whether fiber failure is evaluated. The corresponding failure label is 'hf'  |
| `FiberFailureWeightingFactor`  | Gets or sets the weighting factor for the fiber failure evaluation.                       |
| `EvaluateMatrixFailure`        | Gets or sets whether matrix failure is evaluated. The corresponding failure label is 'hm' |
| `MatrixFailureWeightingFactor` | Gets or sets the weighting factor for the matrix failure evaluation.                      |
| `EvaluateDelamination`         | Gets or sets whether delamination is evaluated. Only applies when three-dimensional       |
| `DelaminationWeightingFactor`  | Gets or sets the weighting factor for the delamination evaluation.                        |

<a id="property-detail"></a>

## Property detail

### *property* HashinSettings.FailureDimension *: [Ansys.Mechanical.DataModel.MechanicalEnums.CompositeFailure.FailureDimension](../../../../../Mechanical/DataModel/MechanicalEnums/CompositeFailure/FailureDimension.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.MechanicalEnums.CompositeFailure.FailureDimension) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether the failure criterion is evaluated only in-plane (2D),
: or also in the out-of-plane direction (3D).

<!-- !! processed by numpydoc !! -->

### *property* HashinSettings.EvaluateFiberFailure *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether fiber failure is evaluated. The corresponding failure label is 'hf'

<!-- !! processed by numpydoc !! -->

### *property* HashinSettings.FiberFailureWeightingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the fiber failure evaluation.

<!-- !! processed by numpydoc !! -->

### *property* HashinSettings.EvaluateMatrixFailure *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether matrix failure is evaluated. The corresponding failure label is 'hm'

<!-- !! processed by numpydoc !! -->

### *property* HashinSettings.MatrixFailureWeightingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the matrix failure evaluation.

<!-- !! processed by numpydoc !! -->

### *property* HashinSettings.EvaluateDelamination *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether delamination is evaluated. Only applies when three-dimensional
: evaluation is selected. The corresponding failure label is 'hd'

<!-- !! processed by numpydoc !! -->

### *property* HashinSettings.DelaminationWeightingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the delamination evaluation.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### HashinSettings.Reset()

Resets the settings to their default values.

<!-- !! processed by numpydoc !! -->

