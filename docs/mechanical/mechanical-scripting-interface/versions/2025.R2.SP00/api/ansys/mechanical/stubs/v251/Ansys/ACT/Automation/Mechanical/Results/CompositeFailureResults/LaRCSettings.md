# `LaRCSettings`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.LaRCSettings"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.LaRCSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines the configuration for the LaRC failure criterion for reinforced materials

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------|------------------------------------------------|
| [`Reset`](#LaRCSettings.Reset)   | Resets the settings to their default values.   |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| [`EvaluateFiberCompressionFailure`](#LaRCSettings.EvaluateFiberCompressionFailure)                 | Gets or sets whether fiber compression failure is evaluated. The corresponding failure label is ‘lfc4/6’.   |
| [`EvaluateFiberTensionFailure`](#LaRCSettings.EvaluateFiberTensionFailure)                         | Gets or sets whether fiber tension failure is evaluated. The corresponding failure label is ‘ltf3’.         |
| [`EvaluateMatrixCompressionFailure`](#LaRCSettings.EvaluateMatrixCompressionFailure)               | Gets or sets whether matrix compression failure is evaluated. The corresponding failure label is ‘lmc2/5’.  |
| [`EvaluateMatrixTensionFailure`](#LaRCSettings.EvaluateMatrixTensionFailure)                       | Gets or sets whether matrix tension failure is evaluated. The corresponding failure label is ‘lmt1’.        |
| [`FiberCompressionFailureWeightingFactor`](#LaRCSettings.FiberCompressionFailureWeightingFactor)   | Gets or sets the weighting factor for the fiber compression failure (lfc4/6) evaluation.                    |
| [`FiberTensionFailureWeightingFactor`](#LaRCSettings.FiberTensionFailureWeightingFactor)           | Gets or sets the weighting factor for the fiber tension failure (ltf3) evaluation.                          |
| [`Formulation`](#LaRCSettings.Formulation)                                                         | Gets or sets whether the failure criterion is evaluated only in-plane (2D),                                 |
| [`MatrixCompressionFailureWeightingFactor`](#LaRCSettings.MatrixCompressionFailureWeightingFactor) | Gets or sets the weighting factor for the matrix compression failure (lmc2/5) evaluation.                   |
| [`MatrixTensionFailureWeightingFactor`](#LaRCSettings.MatrixTensionFailureWeightingFactor)         | Gets or sets the weighting factor for the matrix tension failure (lmt1) evaluation.                         |

<a id="property-detail"></a>

## Property detail

<a id="LaRCSettings.EvaluateFiberCompressionFailure"></a>

### *property* LaRCSettings.EvaluateFiberCompressionFailure *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether fiber compression failure is evaluated. The corresponding failure label is ‘lfc4/6’.

<!-- !! processed by numpydoc !! -->

<a id="LaRCSettings.EvaluateFiberTensionFailure"></a>

### *property* LaRCSettings.EvaluateFiberTensionFailure *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether fiber tension failure is evaluated. The corresponding failure label is ‘ltf3’.

<!-- !! processed by numpydoc !! -->

<a id="LaRCSettings.EvaluateMatrixCompressionFailure"></a>

### *property* LaRCSettings.EvaluateMatrixCompressionFailure *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether matrix compression failure is evaluated. The corresponding failure label is ‘lmc2/5’.

<!-- !! processed by numpydoc !! -->

<a id="LaRCSettings.EvaluateMatrixTensionFailure"></a>

### *property* LaRCSettings.EvaluateMatrixTensionFailure *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether matrix tension failure is evaluated. The corresponding failure label is ‘lmt1’.

<!-- !! processed by numpydoc !! -->

<a id="LaRCSettings.FiberCompressionFailureWeightingFactor"></a>

### *property* LaRCSettings.FiberCompressionFailureWeightingFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the fiber compression failure (lfc4/6) evaluation.

<!-- !! processed by numpydoc !! -->

<a id="LaRCSettings.FiberTensionFailureWeightingFactor"></a>

### *property* LaRCSettings.FiberTensionFailureWeightingFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the fiber tension failure (ltf3) evaluation.

<!-- !! processed by numpydoc !! -->

<a id="LaRCSettings.Formulation"></a>

### *property* LaRCSettings.Formulation *: [Ansys.Mechanical.DataModel.MechanicalEnums.CompositeFailure.LaRCFormulation](../../../../../Mechanical/DataModel/MechanicalEnums/CompositeFailure/LaRCFormulation.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.MechanicalEnums.CompositeFailure.LaRCFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether the failure criterion is evaluated only in-plane (2D),
: or also in the out-of-plane direction (3D).

<!-- !! processed by numpydoc !! -->

<a id="LaRCSettings.MatrixCompressionFailureWeightingFactor"></a>

### *property* LaRCSettings.MatrixCompressionFailureWeightingFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the matrix compression failure (lmc2/5) evaluation.

<!-- !! processed by numpydoc !! -->

<a id="LaRCSettings.MatrixTensionFailureWeightingFactor"></a>

### *property* LaRCSettings.MatrixTensionFailureWeightingFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the matrix tension failure (lmt1) evaluation.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LaRCSettings.Reset"></a>

### LaRCSettings.Reset()

Resets the settings to their default values.

<!-- !! processed by numpydoc !! -->

