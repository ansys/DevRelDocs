# `PuckSettings`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.PuckSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines the configuration for the Puck failure criterion for reinforced materials.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------|------------------------------------------------|
| `Reset`   | Resets the settings to their default values.   |

### Properties

| Name | Description |
|-------------------------------------------|---------------------------------------------------------------------------------------------------------|
| `Formulation`                             | Gets or sets whether the simplified, 2D, or 3D Puck formulation is used.                                |
| `ConsiderInterFiberParallelStresses`      | Gets or sets whether inter-fiber failure will include the influence of the fiber parallel stresses.     |
| `EvaluateFiberFailure`                    | Gets or sets whether fiber failure (pf) is evaluated. The corresponding failure label is 'pf'.          |
| `FiberFailureWeightingFactor`             | Gets or sets the weighting factor for the fiber failure evaluation.                                     |
| `EvaluateMatrixTensionFailure`            | Gets or sets whether matrix tension failure is evaluated. The corresponding failure label is 'pmA'.     |
| `MatrixTensionFailureWeightingFactor`     | Gets or sets the weighting factor for the matrix tension (pmA) failure evaluation.                      |
| `EvaluateMatrixCompressionFailure`        | Gets or sets whether matrix compression failure is evaluated. The corresponding failure label is 'pmB'. |
| `MatrixCompressionFailureWeightingFactor` | Gets or sets the weighting factor for the matrix compression (pmB) failure evaluation.                  |
| `EvaluateMatrixShearFailure`              | Gets or sets whether matrix shear failure is evaluated. The corresponding failure label is 'pmC'.       |
| `MatrixShearFailureWeightingFactor`       | Gets or sets the weighting factor for the matrix shear (pmC) failure evaluation.                        |
| `EvaluateDelamination`                    | Gets or sets whether delamination is evaluated. Only applies when three-dimensional                     |
| `DelaminationWeightingFactor`             | Gets or sets the weighting factor for the delamination (pd) evaluation.                                 |
| `OverrideMaterial`                        | Gets or sets whether the global Puck constants are used overriding material-specific constants.         |
| `InclinationFactorTwoOnePositive`         | Gets or sets the p21(+) Puck constant.                                                                  |
| `InclinationFactorTwoOneNegative`         | Gets or sets the p21(-) Puck constant.                                                                  |
| `InclinationFactorTwoTwoPositive`         | Gets or sets the p22(+) Puck constant.                                                                  |
| `InclinationFactorTwoTwoNegative`         | Gets or sets the p22(-) Puck constant.                                                                  |
| `DegradationInitiationFactor`             | Gets or sets the degradation initiation factor s (0 < s < 1).                                           |
| `DegradationResidualStrengthFactor`       | Gets or sets the degradation residual strength factor M (0 < M < 1).                                    |
| `InterfaceWeakeningFactor`                | Gets or sets the interface weakening factor.                                                            |

<a id="property-detail"></a>

## Property detail

### *property* PuckSettings.Formulation *: [Ansys.Mechanical.DataModel.MechanicalEnums.CompositeFailure.PuckFormulation](../../../../../Mechanical/DataModel/MechanicalEnums/CompositeFailure/PuckFormulation.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.MechanicalEnums.CompositeFailure.PuckFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether the simplified, 2D, or 3D Puck formulation is used.

<!-- !! processed by numpydoc !! -->

### *property* PuckSettings.ConsiderInterFiberParallelStresses *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether inter-fiber failure will include the influence of the fiber parallel stresses.

<!-- !! processed by numpydoc !! -->

### *property* PuckSettings.EvaluateFiberFailure *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether fiber failure (pf) is evaluated. The corresponding failure label is 'pf'.

<!-- !! processed by numpydoc !! -->

### *property* PuckSettings.FiberFailureWeightingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the fiber failure evaluation.

<!-- !! processed by numpydoc !! -->

### *property* PuckSettings.EvaluateMatrixTensionFailure *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether matrix tension failure is evaluated. The corresponding failure label is 'pmA'.

<!-- !! processed by numpydoc !! -->

### *property* PuckSettings.MatrixTensionFailureWeightingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the matrix tension (pmA) failure evaluation.

<!-- !! processed by numpydoc !! -->

### *property* PuckSettings.EvaluateMatrixCompressionFailure *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether matrix compression failure is evaluated. The corresponding failure label is 'pmB'.

<!-- !! processed by numpydoc !! -->

### *property* PuckSettings.MatrixCompressionFailureWeightingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the matrix compression (pmB) failure evaluation.

<!-- !! processed by numpydoc !! -->

### *property* PuckSettings.EvaluateMatrixShearFailure *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether matrix shear failure is evaluated. The corresponding failure label is 'pmC'.

<!-- !! processed by numpydoc !! -->

### *property* PuckSettings.MatrixShearFailureWeightingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the matrix shear (pmC) failure evaluation.

<!-- !! processed by numpydoc !! -->

### *property* PuckSettings.EvaluateDelamination *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether delamination is evaluated. Only applies when three-dimensional
: evaluation is selected. The corresponding failure label is 'pd'.

<!-- !! processed by numpydoc !! -->

### *property* PuckSettings.DelaminationWeightingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the delamination (pd) evaluation.

<!-- !! processed by numpydoc !! -->

### *property* PuckSettings.OverrideMaterial *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether the global Puck constants are used overriding material-specific constants.

<!-- !! processed by numpydoc !! -->

### *property* PuckSettings.InclinationFactorTwoOnePositive *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the p21(+) Puck constant.

<!-- !! processed by numpydoc !! -->

### *property* PuckSettings.InclinationFactorTwoOneNegative *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the p21(-) Puck constant.

<!-- !! processed by numpydoc !! -->

### *property* PuckSettings.InclinationFactorTwoTwoPositive *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the p22(+) Puck constant.

<!-- !! processed by numpydoc !! -->

### *property* PuckSettings.InclinationFactorTwoTwoNegative *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the p22(-) Puck constant.

<!-- !! processed by numpydoc !! -->

### *property* PuckSettings.DegradationInitiationFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the degradation initiation factor s (0 < s < 1).

<!-- !! processed by numpydoc !! -->

### *property* PuckSettings.DegradationResidualStrengthFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the degradation residual strength factor M (0 < M < 1).

<!-- !! processed by numpydoc !! -->

### *property* PuckSettings.InterfaceWeakeningFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the interface weakening factor.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### PuckSettings.Reset()

Resets the settings to their default values.

<!-- !! processed by numpydoc !! -->

