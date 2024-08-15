# `LaRCSettings`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.LaRCSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines the configuration for the LaRC failure criterion for reinforced materials

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------|------------------------------------------------|
| `Reset`   | Resets the settings to their default values.   |

### Properties

| Name | Description |
|-------------------------------------------|------------------------------------------------------------------------------------------------------------|
| `Formulation`                             | Gets or sets whether the failure criterion is evaluated only in-plane (2D),                                |
| `EvaluateFiberTensionFailure`             | Gets or sets whether fiber tension failure is evaluated. The corresponding failure label is 'ltf3'.        |
| `FiberTensionFailureWeightingFactor`      | Gets or sets the weighting factor for the fiber tension failure (ltf3) evaluation.                         |
| `EvaluateFiberCompressionFailure`         | Gets or sets whether fiber compression failure is evaluated. The corresponding failure label is 'lfc4/6'.  |
| `FiberCompressionFailureWeightingFactor`  | Gets or sets the weighting factor for the fiber compression failure (lfc4/6) evaluation.                   |
| `EvaluateMatrixTensionFailure`            | Gets or sets whether matrix tension failure is evaluated. The corresponding failure label is 'lmt1'.       |
| `MatrixTensionFailureWeightingFactor`     | Gets or sets the weighting factor for the matrix tension failure (lmt1) evaluation.                        |
| `EvaluateMatrixCompressionFailure`        | Gets or sets whether matrix compression failure is evaluated. The corresponding failure label is 'lmc2/5'. |
| `MatrixCompressionFailureWeightingFactor` | Gets or sets the weighting factor for the matrix compression failure (lmc2/5) evaluation.                  |

<a id="property-detail"></a>

## Property detail

### *property* LaRCSettings.Formulation *: [Ansys.Mechanical.DataModel.MechanicalEnums.CompositeFailure.LaRCFormulation](../../../../../Mechanical/DataModel/MechanicalEnums/CompositeFailure/LaRCFormulation.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.MechanicalEnums.CompositeFailure.LaRCFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether the failure criterion is evaluated only in-plane (2D),
: or also in the out-of-plane direction (3D).

<!-- !! processed by numpydoc !! -->

### *property* LaRCSettings.EvaluateFiberTensionFailure *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether fiber tension failure is evaluated. The corresponding failure label is 'ltf3'.

<!-- !! processed by numpydoc !! -->

### *property* LaRCSettings.FiberTensionFailureWeightingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the fiber tension failure (ltf3) evaluation.

<!-- !! processed by numpydoc !! -->

### *property* LaRCSettings.EvaluateFiberCompressionFailure *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether fiber compression failure is evaluated. The corresponding failure label is 'lfc4/6'.

<!-- !! processed by numpydoc !! -->

### *property* LaRCSettings.FiberCompressionFailureWeightingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the fiber compression failure (lfc4/6) evaluation.

<!-- !! processed by numpydoc !! -->

### *property* LaRCSettings.EvaluateMatrixTensionFailure *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether matrix tension failure is evaluated. The corresponding failure label is 'lmt1'.

<!-- !! processed by numpydoc !! -->

### *property* LaRCSettings.MatrixTensionFailureWeightingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the matrix tension failure (lmt1) evaluation.

<!-- !! processed by numpydoc !! -->

### *property* LaRCSettings.EvaluateMatrixCompressionFailure *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether matrix compression failure is evaluated. The corresponding failure label is 'lmc2/5'.

<!-- !! processed by numpydoc !! -->

### *property* LaRCSettings.MatrixCompressionFailureWeightingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the matrix compression failure (lmc2/5) evaluation.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### LaRCSettings.Reset()

Resets the settings to their default values.

<!-- !! processed by numpydoc !! -->

