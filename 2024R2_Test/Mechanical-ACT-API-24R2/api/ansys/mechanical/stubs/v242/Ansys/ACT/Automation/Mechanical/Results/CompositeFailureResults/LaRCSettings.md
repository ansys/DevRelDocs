# `LaRCSettings`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.LaRCSettings

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
|----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| [`Formulation`](#LaRCSettings.Formulation)                                                         | Gets or sets whether the failure criterion is evaluated only in-plane (2D),                                |
| [`EvaluateFiberTensionFailure`](#LaRCSettings.EvaluateFiberTensionFailure)                         | Gets or sets whether fiber tension failure is evaluated. The corresponding failure label is â€˜ltf3'.        |
| [`FiberTensionFailureWeightingFactor`](#LaRCSettings.FiberTensionFailureWeightingFactor)           | Gets or sets the weighting factor for the fiber tension failure (ltf3) evaluation.                         |
| [`EvaluateFiberCompressionFailure`](#LaRCSettings.EvaluateFiberCompressionFailure)                 | Gets or sets whether fiber compression failure is evaluated. The corresponding failure label is â€˜lfc4/6'.  |
| [`FiberCompressionFailureWeightingFactor`](#LaRCSettings.FiberCompressionFailureWeightingFactor)   | Gets or sets the weighting factor for the fiber compression failure (lfc4/6) evaluation.                   |
| [`EvaluateMatrixTensionFailure`](#LaRCSettings.EvaluateMatrixTensionFailure)                       | Gets or sets whether matrix tension failure is evaluated. The corresponding failure label is â€˜lmt1'.       |
| [`MatrixTensionFailureWeightingFactor`](#LaRCSettings.MatrixTensionFailureWeightingFactor)         | Gets or sets the weighting factor for the matrix tension failure (lmt1) evaluation.                        |
| [`EvaluateMatrixCompressionFailure`](#LaRCSettings.EvaluateMatrixCompressionFailure)               | Gets or sets whether matrix compression failure is evaluated. The corresponding failure label is â€˜lmc2/5'. |
| [`MatrixCompressionFailureWeightingFactor`](#LaRCSettings.MatrixCompressionFailureWeightingFactor) | Gets or sets the weighting factor for the matrix compression failure (lmc2/5) evaluation.                  |

<a id="property-detail"></a>

## Property detail

<a id="LaRCSettings.Formulation"></a>

### *property* LaRCSettings.Formulation *: [Ansys.Mechanical.DataModel.MechanicalEnums.CompositeFailure.LaRCFormulation](../../../../../Mechanical/DataModel/MechanicalEnums/CompositeFailure/LaRCFormulation.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.MechanicalEnums.CompositeFailure.LaRCFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether the failure criterion is evaluated only in-plane (2D),
: or also in the out-of-plane direction (3D).

<!-- !! processed by numpydoc !! -->

<a id="LaRCSettings.EvaluateFiberTensionFailure"></a>

### *property* LaRCSettings.EvaluateFiberTensionFailure *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether fiber tension failure is evaluated. The corresponding failure label is â€˜ltf3'.

<!-- !! processed by numpydoc !! -->

<a id="LaRCSettings.FiberTensionFailureWeightingFactor"></a>

### *property* LaRCSettings.FiberTensionFailureWeightingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the fiber tension failure (ltf3) evaluation.

<!-- !! processed by numpydoc !! -->

<a id="LaRCSettings.EvaluateFiberCompressionFailure"></a>

### *property* LaRCSettings.EvaluateFiberCompressionFailure *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether fiber compression failure is evaluated. The corresponding failure label is â€˜lfc4/6'.

<!-- !! processed by numpydoc !! -->

<a id="LaRCSettings.FiberCompressionFailureWeightingFactor"></a>

### *property* LaRCSettings.FiberCompressionFailureWeightingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the fiber compression failure (lfc4/6) evaluation.

<!-- !! processed by numpydoc !! -->

<a id="LaRCSettings.EvaluateMatrixTensionFailure"></a>

### *property* LaRCSettings.EvaluateMatrixTensionFailure *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether matrix tension failure is evaluated. The corresponding failure label is â€˜lmt1'.

<!-- !! processed by numpydoc !! -->

<a id="LaRCSettings.MatrixTensionFailureWeightingFactor"></a>

### *property* LaRCSettings.MatrixTensionFailureWeightingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the matrix tension failure (lmt1) evaluation.

<!-- !! processed by numpydoc !! -->

<a id="LaRCSettings.EvaluateMatrixCompressionFailure"></a>

### *property* LaRCSettings.EvaluateMatrixCompressionFailure *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether matrix compression failure is evaluated. The corresponding failure label is â€˜lmc2/5'.

<!-- !! processed by numpydoc !! -->

<a id="LaRCSettings.MatrixCompressionFailureWeightingFactor"></a>

### *property* LaRCSettings.MatrixCompressionFailureWeightingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the matrix compression failure (lmc2/5) evaluation.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LaRCSettings.Reset"></a>

### LaRCSettings.Reset()

Resets the settings to their default values.

<!-- !! processed by numpydoc !! -->

