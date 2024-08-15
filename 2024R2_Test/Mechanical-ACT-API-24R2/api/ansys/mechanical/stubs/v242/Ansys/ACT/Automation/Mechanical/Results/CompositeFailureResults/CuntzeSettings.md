# `CuntzeSettings`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CuntzeSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines the configuration for the Cuntze failure criterion for reinforced materials.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------|------------------------------------------------|
| `Reset`   | Resets the settings to their default values.   |

### Properties

| Name | Description |
|-------------------------------------------|--------------------------------------------------------------------------------------------------------|
| `FailureDimension`                        | Gets or sets whether the failure criterion is evaluated only in-plane (2D),                            |
| `EvaluateFiberTensionFailure`             | Gets or sets whether fiber tension failure is evaluated. The corresponding failure label is 'cft'      |
| `FiberTensionFailureWeightingFactor`      | Gets or sets the weighting factor for the fiber tension failure (cft) evaluation.                      |
| `EvaluateFiberCompressionFailure`         | Gets or sets whether fiber compression failure is evaluated. The corresponding failure label is 'cfc'  |
| `FiberCompressionFailureWeightingFactor`  | Gets or sets the weighting factor for the fiber compression failure (cfc) evaluation.                  |
| `EvaluateMatrixTensionFailure`            | Gets or sets whether matrix tension failure is evaluated. The corresponding failure label is 'cmA'     |
| `MatrixTensionFailureWeightingFactor`     | Gets or sets the weighting factor for the matrix tension failure (cmA) evaluation.                     |
| `EvaluateMatrixCompressionFailure`        | Gets or sets whether matrix compression failure is evaluated. The corresponding failure label is 'cmB' |
| `MatrixCompressionFailureWeightingFactor` | Gets or sets the weighting factor for the matrix compression failure (cmB) evaluation.                 |
| `EvaluateMatrixWedgeShapeFailure`         | Gets or sets whether matrix wedge shape failure is evaluated. The corresponding failure label is 'cmC' |
| `MatrixWedgeShapeFailureWeightingFactor`  | Gets or sets the weighting factor for the matrix wedge shape failure (cmC) evaluation.                 |
| `ModeInteractionCoefficient`              | Gets or sets the mode interaction coefficient.                                                         |
| `InPlaneShearFrictionCoefficient`         | Gets or sets the in-plane shear friction coefficient b21.                                              |
| `OutOfPlaneShearFrictionCoefficient`      | Gets the out-of-plane shear friction coefficient b32.                                                  |
| `FracturePlaneAngle`                      | Gets or sets the fracture plane angle theta.                                                           |

<a id="property-detail"></a>

## Property detail

### *property* CuntzeSettings.FailureDimension *: [Ansys.Mechanical.DataModel.MechanicalEnums.CompositeFailure.FailureDimension](../../../../../Mechanical/DataModel/MechanicalEnums/CompositeFailure/FailureDimension.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.MechanicalEnums.CompositeFailure.FailureDimension) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether the failure criterion is evaluated only in-plane (2D),
: or also in the out-of-plane direction (3D).

<!-- !! processed by numpydoc !! -->

### *property* CuntzeSettings.EvaluateFiberTensionFailure *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether fiber tension failure is evaluated. The corresponding failure label is 'cft'

<!-- !! processed by numpydoc !! -->

### *property* CuntzeSettings.FiberTensionFailureWeightingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the fiber tension failure (cft) evaluation.

<!-- !! processed by numpydoc !! -->

### *property* CuntzeSettings.EvaluateFiberCompressionFailure *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether fiber compression failure is evaluated. The corresponding failure label is 'cfc'

<!-- !! processed by numpydoc !! -->

### *property* CuntzeSettings.FiberCompressionFailureWeightingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the fiber compression failure (cfc) evaluation.

<!-- !! processed by numpydoc !! -->

### *property* CuntzeSettings.EvaluateMatrixTensionFailure *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether matrix tension failure is evaluated. The corresponding failure label is 'cmA'

<!-- !! processed by numpydoc !! -->

### *property* CuntzeSettings.MatrixTensionFailureWeightingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the matrix tension failure (cmA) evaluation.

<!-- !! processed by numpydoc !! -->

### *property* CuntzeSettings.EvaluateMatrixCompressionFailure *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether matrix compression failure is evaluated. The corresponding failure label is 'cmB'

<!-- !! processed by numpydoc !! -->

### *property* CuntzeSettings.MatrixCompressionFailureWeightingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the matrix compression failure (cmB) evaluation.

<!-- !! processed by numpydoc !! -->

### *property* CuntzeSettings.EvaluateMatrixWedgeShapeFailure *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether matrix wedge shape failure is evaluated. The corresponding failure label is 'cmC'

<!-- !! processed by numpydoc !! -->

### *property* CuntzeSettings.MatrixWedgeShapeFailureWeightingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the matrix wedge shape failure (cmC) evaluation.

<!-- !! processed by numpydoc !! -->

### *property* CuntzeSettings.ModeInteractionCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the mode interaction coefficient.

<!-- !! processed by numpydoc !! -->

### *property* CuntzeSettings.InPlaneShearFrictionCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the in-plane shear friction coefficient b21.
: The value must be greater than or equal to 0.

<!-- !! processed by numpydoc !! -->

### *property* CuntzeSettings.OutOfPlaneShearFrictionCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the out-of-plane shear friction coefficient b32.
: Computed from the fracture plane angle theta.

<!-- !! processed by numpydoc !! -->

### *property* CuntzeSettings.FracturePlaneAngle *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the fracture plane angle theta.
: The value must be in the range [45, 90).

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### CuntzeSettings.Reset()

Resets the settings to their default values.

<!-- !! processed by numpydoc !! -->

