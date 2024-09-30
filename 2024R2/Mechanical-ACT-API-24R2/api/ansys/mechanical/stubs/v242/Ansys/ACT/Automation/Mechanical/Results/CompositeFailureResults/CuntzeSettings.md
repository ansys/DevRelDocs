# `CuntzeSettings`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CuntzeSettings"></a>

#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CuntzeSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines the configuration for the Cuntze failure criterion for reinforced materials.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------|------------------------------------------------|
| [`Reset`](#CuntzeSettings.Reset)   | Resets the settings to their default values.   |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`EvaluateFiberCompressionFailure`](#CuntzeSettings.EvaluateFiberCompressionFailure)                 | Gets or sets whether fiber compression failure is evaluated. The corresponding failure label is ‘cfc’   |
| [`EvaluateFiberTensionFailure`](#CuntzeSettings.EvaluateFiberTensionFailure)                         | Gets or sets whether fiber tension failure is evaluated. The corresponding failure label is ‘cft’       |
| [`EvaluateMatrixCompressionFailure`](#CuntzeSettings.EvaluateMatrixCompressionFailure)               | Gets or sets whether matrix compression failure is evaluated. The corresponding failure label is ‘cmB’  |
| [`EvaluateMatrixTensionFailure`](#CuntzeSettings.EvaluateMatrixTensionFailure)                       | Gets or sets whether matrix tension failure is evaluated. The corresponding failure label is ‘cmA’      |
| [`EvaluateMatrixWedgeShapeFailure`](#CuntzeSettings.EvaluateMatrixWedgeShapeFailure)                 | Gets or sets whether matrix wedge shape failure is evaluated. The corresponding failure label is ‘cmC’  |
| [`FailureDimension`](#CuntzeSettings.FailureDimension)                                               | Gets or sets whether the failure criterion is evaluated only in-plane (2D),                             |
| [`FiberCompressionFailureWeightingFactor`](#CuntzeSettings.FiberCompressionFailureWeightingFactor)   | Gets or sets the weighting factor for the fiber compression failure (cfc) evaluation.                   |
| [`FiberTensionFailureWeightingFactor`](#CuntzeSettings.FiberTensionFailureWeightingFactor)           | Gets or sets the weighting factor for the fiber tension failure (cft) evaluation.                       |
| [`FracturePlaneAngle`](#CuntzeSettings.FracturePlaneAngle)                                           | Gets or sets the fracture plane angle theta.                                                            |
| [`InPlaneShearFrictionCoefficient`](#CuntzeSettings.InPlaneShearFrictionCoefficient)                 | Gets or sets the in-plane shear friction coefficient b21.                                               |
| [`MatrixCompressionFailureWeightingFactor`](#CuntzeSettings.MatrixCompressionFailureWeightingFactor) | Gets or sets the weighting factor for the matrix compression failure (cmB) evaluation.                  |
| [`MatrixTensionFailureWeightingFactor`](#CuntzeSettings.MatrixTensionFailureWeightingFactor)         | Gets or sets the weighting factor for the matrix tension failure (cmA) evaluation.                      |
| [`MatrixWedgeShapeFailureWeightingFactor`](#CuntzeSettings.MatrixWedgeShapeFailureWeightingFactor)   | Gets or sets the weighting factor for the matrix wedge shape failure (cmC) evaluation.                  |
| [`ModeInteractionCoefficient`](#CuntzeSettings.ModeInteractionCoefficient)                           | Gets or sets the mode interaction coefficient.                                                          |
| [`OutOfPlaneShearFrictionCoefficient`](#CuntzeSettings.OutOfPlaneShearFrictionCoefficient)           | Gets the out-of-plane shear friction coefficient b32.                                                   |

<a id="property-detail"></a>

## Property detail

<a id="CuntzeSettings.EvaluateFiberCompressionFailure"></a>

### *property* CuntzeSettings.EvaluateFiberCompressionFailure *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether fiber compression failure is evaluated. The corresponding failure label is ‘cfc’

<!-- !! processed by numpydoc !! -->

<a id="CuntzeSettings.EvaluateFiberTensionFailure"></a>

### *property* CuntzeSettings.EvaluateFiberTensionFailure *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether fiber tension failure is evaluated. The corresponding failure label is ‘cft’

<!-- !! processed by numpydoc !! -->

<a id="CuntzeSettings.EvaluateMatrixCompressionFailure"></a>

### *property* CuntzeSettings.EvaluateMatrixCompressionFailure *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether matrix compression failure is evaluated. The corresponding failure label is ‘cmB’

<!-- !! processed by numpydoc !! -->

<a id="CuntzeSettings.EvaluateMatrixTensionFailure"></a>

### *property* CuntzeSettings.EvaluateMatrixTensionFailure *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether matrix tension failure is evaluated. The corresponding failure label is ‘cmA’

<!-- !! processed by numpydoc !! -->

<a id="CuntzeSettings.EvaluateMatrixWedgeShapeFailure"></a>

### *property* CuntzeSettings.EvaluateMatrixWedgeShapeFailure *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether matrix wedge shape failure is evaluated. The corresponding failure label is ‘cmC’

<!-- !! processed by numpydoc !! -->

<a id="CuntzeSettings.FailureDimension"></a>

### *property* CuntzeSettings.FailureDimension *: [Ansys.Mechanical.DataModel.MechanicalEnums.CompositeFailure.FailureDimension](../../../../../Mechanical/DataModel/MechanicalEnums/CompositeFailure/FailureDimension.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.MechanicalEnums.CompositeFailure.FailureDimension) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether the failure criterion is evaluated only in-plane (2D),
: or also in the out-of-plane direction (3D).

<!-- !! processed by numpydoc !! -->

<a id="CuntzeSettings.FiberCompressionFailureWeightingFactor"></a>

### *property* CuntzeSettings.FiberCompressionFailureWeightingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the fiber compression failure (cfc) evaluation.

<!-- !! processed by numpydoc !! -->

<a id="CuntzeSettings.FiberTensionFailureWeightingFactor"></a>

### *property* CuntzeSettings.FiberTensionFailureWeightingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the fiber tension failure (cft) evaluation.

<!-- !! processed by numpydoc !! -->

<a id="CuntzeSettings.FracturePlaneAngle"></a>

### *property* CuntzeSettings.FracturePlaneAngle *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the fracture plane angle theta.
: The value must be in the range [45, 90).

<!-- !! processed by numpydoc !! -->

<a id="CuntzeSettings.InPlaneShearFrictionCoefficient"></a>

### *property* CuntzeSettings.InPlaneShearFrictionCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the in-plane shear friction coefficient b21.
: The value must be greater than or equal to 0.

<!-- !! processed by numpydoc !! -->

<a id="CuntzeSettings.MatrixCompressionFailureWeightingFactor"></a>

### *property* CuntzeSettings.MatrixCompressionFailureWeightingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the matrix compression failure (cmB) evaluation.

<!-- !! processed by numpydoc !! -->

<a id="CuntzeSettings.MatrixTensionFailureWeightingFactor"></a>

### *property* CuntzeSettings.MatrixTensionFailureWeightingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the matrix tension failure (cmA) evaluation.

<!-- !! processed by numpydoc !! -->

<a id="CuntzeSettings.MatrixWedgeShapeFailureWeightingFactor"></a>

### *property* CuntzeSettings.MatrixWedgeShapeFailureWeightingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the matrix wedge shape failure (cmC) evaluation.

<!-- !! processed by numpydoc !! -->

<a id="CuntzeSettings.ModeInteractionCoefficient"></a>

### *property* CuntzeSettings.ModeInteractionCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the mode interaction coefficient.

<!-- !! processed by numpydoc !! -->

<a id="CuntzeSettings.OutOfPlaneShearFrictionCoefficient"></a>

### *property* CuntzeSettings.OutOfPlaneShearFrictionCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the out-of-plane shear friction coefficient b32.
: Computed from the fracture plane angle theta.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CuntzeSettings.Reset"></a>

### CuntzeSettings.Reset()

Resets the settings to their default values.

<!-- !! processed by numpydoc !! -->

