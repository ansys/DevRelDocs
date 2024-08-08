# `MaximumStrainSettings`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.MaximumStrainSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines the configuration for the Maximum Strain failure criterion for reinforced materials.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------|------------------------------------------------|
| [`Reset`](#MaximumStrainSettings.Reset)   | Resets the settings to their default values.   |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| [`EvaluateMaterialOneDirectionFailure`](#MaximumStrainSettings.EvaluateMaterialOneDirectionFailure)                   | Gets or sets whether the failure criterion is evaluated in the material 1                           |
| [`MaterialOneDirectionFailureWeightingFactor`](#MaximumStrainSettings.MaterialOneDirectionFailureWeightingFactor)     | Gets or sets the weighting factor for the failure criterion in the material 1 direction.            |
| [`EvaluateMaterialTwoDirectionFailure`](#MaximumStrainSettings.EvaluateMaterialTwoDirectionFailure)                   | Gets or sets whether the failure criterion is evaluated in the material 2                           |
| [`MaterialTwoDirectionFailureWeightingFactor`](#MaximumStrainSettings.MaterialTwoDirectionFailureWeightingFactor)     | Gets or sets the weighting factor for the failure criterion in the material 2 direction.            |
| [`EvaluateMaterialThreeDirectionFailure`](#MaximumStrainSettings.EvaluateMaterialThreeDirectionFailure)               | Gets or sets whether the failure criterion is evaluated in the out-of-plane                         |
| [`MaterialThreeDirectionFailureWeightingFactor`](#MaximumStrainSettings.MaterialThreeDirectionFailureWeightingFactor) | Gets or sets the weighting factor for the failure criterion in the out-of-plane direction.          |
| [`EvaluateShearOneTwoFailure`](#MaximumStrainSettings.EvaluateShearOneTwoFailure)                                     | Gets or sets whether failure is evaluated for the in-plane shear e12. The corresponding failure     |
| [`ShearOneTwoFailureWeightingFactor`](#MaximumStrainSettings.ShearOneTwoFailureWeightingFactor)                       | Gets or sets the weighting factor for failure due to in-plane shear e12.                            |
| [`EvaluateShearOneThreeFailure`](#MaximumStrainSettings.EvaluateShearOneThreeFailure)                                 | Gets or sets whether failure is evaluated for the out-of-plane shear e13. The corresponding failure |
| [`ShearOneThreeFailureWeightingFactor`](#MaximumStrainSettings.ShearOneThreeFailureWeightingFactor)                   | Gets or sets the weighting factor for failure due to out-of-plane shear e13.                        |
| [`EvaluateShearTwoThreeFailure`](#MaximumStrainSettings.EvaluateShearTwoThreeFailure)                                 | Gets or sets whether failure is evaluated for the out-of-plane shear e23. The corresponding failure |
| [`ShearTwoThreeFailureWeightingFactor`](#MaximumStrainSettings.ShearTwoThreeFailureWeightingFactor)                   | Gets or sets the weighting factor for failure due to out-of-plane shear e23.                        |
| [`OverrideMaterial`](#MaximumStrainSettings.OverrideMaterial)                                                         | Gets or sets whether the global strain limits are used, overriding material-specific limits.        |
| [`TensileLimitMaterialOneDirection`](#MaximumStrainSettings.TensileLimitMaterialOneDirection)                         | Gets or sets the global tensile strain limit in the material 1 direction (eXt).                     |
| [`CompressiveLimitMaterialOneDirection`](#MaximumStrainSettings.CompressiveLimitMaterialOneDirection)                 | Gets or sets the global compressive strain limit in the material 1 direction (eXc).                 |
| [`TensileLimitMaterialTwoDirection`](#MaximumStrainSettings.TensileLimitMaterialTwoDirection)                         | Gets or sets the global tensile strain limit in the material 2 direction (eYt).                     |
| [`CompressiveLimitMaterialTwoDirection`](#MaximumStrainSettings.CompressiveLimitMaterialTwoDirection)                 | Gets or sets the global compressive strain limit in the material 2 direction (eYc).                 |
| [`TensileLimitMaterialThreeDirection`](#MaximumStrainSettings.TensileLimitMaterialThreeDirection)                     | Gets or sets the global tensile strain limit in the out-of-plane direction (eZt).                   |
| [`CompressiveLimitMaterialThreeDirection`](#MaximumStrainSettings.CompressiveLimitMaterialThreeDirection)             | Gets or sets the global compressive strain limit in the out-of-plane direction (eZc).               |
| [`ShearLimitOneTwo`](#MaximumStrainSettings.ShearLimitOneTwo)                                                         | Gets or sets the global in-plane shear strain limit (eSxy).                                         |
| [`ShearLimitOneThree`](#MaximumStrainSettings.ShearLimitOneThree)                                                     | Gets or sets the global out-of-plane shear strain limit (eSxz).                                     |
| [`ShearLimitTwoThree`](#MaximumStrainSettings.ShearLimitTwoThree)                                                     | Gets or sets the global out-of-plane shear strain limit (eSyz).                                     |

<a id="property-detail"></a>

## Property detail

<a id="MaximumStrainSettings.EvaluateMaterialOneDirectionFailure"></a>

### *property* MaximumStrainSettings.EvaluateMaterialOneDirectionFailure *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether the failure criterion is evaluated in the material 1
: direction. The corresponding failure label is â€˜e1'.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStrainSettings.MaterialOneDirectionFailureWeightingFactor"></a>

### *property* MaximumStrainSettings.MaterialOneDirectionFailureWeightingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the failure criterion in the material 1 direction.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStrainSettings.EvaluateMaterialTwoDirectionFailure"></a>

### *property* MaximumStrainSettings.EvaluateMaterialTwoDirectionFailure *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether the failure criterion is evaluated in the material 2
: direction. The corresponding failure label is â€˜e2'.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStrainSettings.MaterialTwoDirectionFailureWeightingFactor"></a>

### *property* MaximumStrainSettings.MaterialTwoDirectionFailureWeightingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the failure criterion in the material 2 direction.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStrainSettings.EvaluateMaterialThreeDirectionFailure"></a>

### *property* MaximumStrainSettings.EvaluateMaterialThreeDirectionFailure *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether the failure criterion is evaluated in the out-of-plane
: direction. The corresponding failure label is â€˜e3'.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStrainSettings.MaterialThreeDirectionFailureWeightingFactor"></a>

### *property* MaximumStrainSettings.MaterialThreeDirectionFailureWeightingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the failure criterion in the out-of-plane direction.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStrainSettings.EvaluateShearOneTwoFailure"></a>

### *property* MaximumStrainSettings.EvaluateShearOneTwoFailure *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether failure is evaluated for the in-plane shear e12. The corresponding failure
: label is â€˜e12'.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStrainSettings.ShearOneTwoFailureWeightingFactor"></a>

### *property* MaximumStrainSettings.ShearOneTwoFailureWeightingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for failure due to in-plane shear e12.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStrainSettings.EvaluateShearOneThreeFailure"></a>

### *property* MaximumStrainSettings.EvaluateShearOneThreeFailure *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether failure is evaluated for the out-of-plane shear e13. The corresponding failure
: label is â€˜e13'.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStrainSettings.ShearOneThreeFailureWeightingFactor"></a>

### *property* MaximumStrainSettings.ShearOneThreeFailureWeightingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for failure due to out-of-plane shear e13.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStrainSettings.EvaluateShearTwoThreeFailure"></a>

### *property* MaximumStrainSettings.EvaluateShearTwoThreeFailure *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether failure is evaluated for the out-of-plane shear e23. The corresponding failure
: label is â€˜e23'.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStrainSettings.ShearTwoThreeFailureWeightingFactor"></a>

### *property* MaximumStrainSettings.ShearTwoThreeFailureWeightingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for failure due to out-of-plane shear e23.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStrainSettings.OverrideMaterial"></a>

### *property* MaximumStrainSettings.OverrideMaterial *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether the global strain limits are used, overriding material-specific limits.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStrainSettings.TensileLimitMaterialOneDirection"></a>

### *property* MaximumStrainSettings.TensileLimitMaterialOneDirection *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the global tensile strain limit in the material 1 direction (eXt).
: Only used if OverrideMaterial is true.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStrainSettings.CompressiveLimitMaterialOneDirection"></a>

### *property* MaximumStrainSettings.CompressiveLimitMaterialOneDirection *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the global compressive strain limit in the material 1 direction (eXc).
: Only used if OverrideMaterial is true.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStrainSettings.TensileLimitMaterialTwoDirection"></a>

### *property* MaximumStrainSettings.TensileLimitMaterialTwoDirection *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the global tensile strain limit in the material 2 direction (eYt).
: Only used if OverrideMaterial is true.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStrainSettings.CompressiveLimitMaterialTwoDirection"></a>

### *property* MaximumStrainSettings.CompressiveLimitMaterialTwoDirection *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the global compressive strain limit in the material 2 direction (eYc).
: Only used if OverrideMaterial is true.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStrainSettings.TensileLimitMaterialThreeDirection"></a>

### *property* MaximumStrainSettings.TensileLimitMaterialThreeDirection *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the global tensile strain limit in the out-of-plane direction (eZt).
: Only used if OverrideMaterial is true.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStrainSettings.CompressiveLimitMaterialThreeDirection"></a>

### *property* MaximumStrainSettings.CompressiveLimitMaterialThreeDirection *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the global compressive strain limit in the out-of-plane direction (eZc).
: Only used if OverrideMaterial is true.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStrainSettings.ShearLimitOneTwo"></a>

### *property* MaximumStrainSettings.ShearLimitOneTwo *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the global in-plane shear strain limit (eSxy).
: Only used if OverrideMaterial is true.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStrainSettings.ShearLimitOneThree"></a>

### *property* MaximumStrainSettings.ShearLimitOneThree *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the global out-of-plane shear strain limit (eSxz).
: Only used if OverrideMaterial is true.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStrainSettings.ShearLimitTwoThree"></a>

### *property* MaximumStrainSettings.ShearLimitTwoThree *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the global out-of-plane shear strain limit (eSyz).
: Only used if OverrideMaterial is true.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MaximumStrainSettings.Reset"></a>

### MaximumStrainSettings.Reset()

Resets the settings to their default values.

<!-- !! processed by numpydoc !! -->

