# `MaximumStrainSettings`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.MaximumStrainSettings"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.MaximumStrainSettings

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
| [`CompressiveLimitMaterialOneDirection`](#MaximumStrainSettings.CompressiveLimitMaterialOneDirection)                 | Gets or sets the global compressive strain limit in the material 1 direction (eXc).                 |
| [`CompressiveLimitMaterialThreeDirection`](#MaximumStrainSettings.CompressiveLimitMaterialThreeDirection)             | Gets or sets the global compressive strain limit in the out-of-plane direction (eZc).               |
| [`CompressiveLimitMaterialTwoDirection`](#MaximumStrainSettings.CompressiveLimitMaterialTwoDirection)                 | Gets or sets the global compressive strain limit in the material 2 direction (eYc).                 |
| [`EvaluateMaterialOneDirectionFailure`](#MaximumStrainSettings.EvaluateMaterialOneDirectionFailure)                   | Gets or sets whether the failure criterion is evaluated in the material 1                           |
| [`EvaluateMaterialThreeDirectionFailure`](#MaximumStrainSettings.EvaluateMaterialThreeDirectionFailure)               | Gets or sets whether the failure criterion is evaluated in the out-of-plane                         |
| [`EvaluateMaterialTwoDirectionFailure`](#MaximumStrainSettings.EvaluateMaterialTwoDirectionFailure)                   | Gets or sets whether the failure criterion is evaluated in the material 2                           |
| [`EvaluateShearOneThreeFailure`](#MaximumStrainSettings.EvaluateShearOneThreeFailure)                                 | Gets or sets whether failure is evaluated for the out-of-plane shear e13. The corresponding failure |
| [`EvaluateShearOneTwoFailure`](#MaximumStrainSettings.EvaluateShearOneTwoFailure)                                     | Gets or sets whether failure is evaluated for the in-plane shear e12. The corresponding failure     |
| [`EvaluateShearTwoThreeFailure`](#MaximumStrainSettings.EvaluateShearTwoThreeFailure)                                 | Gets or sets whether failure is evaluated for the out-of-plane shear e23. The corresponding failure |
| [`MaterialOneDirectionFailureWeightingFactor`](#MaximumStrainSettings.MaterialOneDirectionFailureWeightingFactor)     | Gets or sets the weighting factor for the failure criterion in the material 1 direction.            |
| [`MaterialThreeDirectionFailureWeightingFactor`](#MaximumStrainSettings.MaterialThreeDirectionFailureWeightingFactor) | Gets or sets the weighting factor for the failure criterion in the out-of-plane direction.          |
| [`MaterialTwoDirectionFailureWeightingFactor`](#MaximumStrainSettings.MaterialTwoDirectionFailureWeightingFactor)     | Gets or sets the weighting factor for the failure criterion in the material 2 direction.            |
| [`OverrideMaterial`](#MaximumStrainSettings.OverrideMaterial)                                                         | Gets or sets whether the global strain limits are used, overriding material-specific limits.        |
| [`ShearLimitOneThree`](#MaximumStrainSettings.ShearLimitOneThree)                                                     | Gets or sets the global out-of-plane shear strain limit (eSxz).                                     |
| [`ShearLimitOneTwo`](#MaximumStrainSettings.ShearLimitOneTwo)                                                         | Gets or sets the global in-plane shear strain limit (eSxy).                                         |
| [`ShearLimitTwoThree`](#MaximumStrainSettings.ShearLimitTwoThree)                                                     | Gets or sets the global out-of-plane shear strain limit (eSyz).                                     |
| [`ShearOneThreeFailureWeightingFactor`](#MaximumStrainSettings.ShearOneThreeFailureWeightingFactor)                   | Gets or sets the weighting factor for failure due to out-of-plane shear e13.                        |
| [`ShearOneTwoFailureWeightingFactor`](#MaximumStrainSettings.ShearOneTwoFailureWeightingFactor)                       | Gets or sets the weighting factor for failure due to in-plane shear e12.                            |
| [`ShearTwoThreeFailureWeightingFactor`](#MaximumStrainSettings.ShearTwoThreeFailureWeightingFactor)                   | Gets or sets the weighting factor for failure due to out-of-plane shear e23.                        |
| [`TensileLimitMaterialOneDirection`](#MaximumStrainSettings.TensileLimitMaterialOneDirection)                         | Gets or sets the global tensile strain limit in the material 1 direction (eXt).                     |
| [`TensileLimitMaterialThreeDirection`](#MaximumStrainSettings.TensileLimitMaterialThreeDirection)                     | Gets or sets the global tensile strain limit in the out-of-plane direction (eZt).                   |
| [`TensileLimitMaterialTwoDirection`](#MaximumStrainSettings.TensileLimitMaterialTwoDirection)                         | Gets or sets the global tensile strain limit in the material 2 direction (eYt).                     |

<a id="property-detail"></a>

## Property detail

<a id="MaximumStrainSettings.CompressiveLimitMaterialOneDirection"></a>

### *property* MaximumStrainSettings.CompressiveLimitMaterialOneDirection *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the global compressive strain limit in the material 1 direction (eXc).
: Only used if OverrideMaterial is true.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStrainSettings.CompressiveLimitMaterialThreeDirection"></a>

### *property* MaximumStrainSettings.CompressiveLimitMaterialThreeDirection *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the global compressive strain limit in the out-of-plane direction (eZc).
: Only used if OverrideMaterial is true.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStrainSettings.CompressiveLimitMaterialTwoDirection"></a>

### *property* MaximumStrainSettings.CompressiveLimitMaterialTwoDirection *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the global compressive strain limit in the material 2 direction (eYc).
: Only used if OverrideMaterial is true.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStrainSettings.EvaluateMaterialOneDirectionFailure"></a>

### *property* MaximumStrainSettings.EvaluateMaterialOneDirectionFailure *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether the failure criterion is evaluated in the material 1
: direction. The corresponding failure label is ‘e1’.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStrainSettings.EvaluateMaterialThreeDirectionFailure"></a>

### *property* MaximumStrainSettings.EvaluateMaterialThreeDirectionFailure *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether the failure criterion is evaluated in the out-of-plane
: direction. The corresponding failure label is ‘e3’.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStrainSettings.EvaluateMaterialTwoDirectionFailure"></a>

### *property* MaximumStrainSettings.EvaluateMaterialTwoDirectionFailure *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether the failure criterion is evaluated in the material 2
: direction. The corresponding failure label is ‘e2’.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStrainSettings.EvaluateShearOneThreeFailure"></a>

### *property* MaximumStrainSettings.EvaluateShearOneThreeFailure *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether failure is evaluated for the out-of-plane shear e13. The corresponding failure
: label is ‘e13’.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStrainSettings.EvaluateShearOneTwoFailure"></a>

### *property* MaximumStrainSettings.EvaluateShearOneTwoFailure *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether failure is evaluated for the in-plane shear e12. The corresponding failure
: label is ‘e12’.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStrainSettings.EvaluateShearTwoThreeFailure"></a>

### *property* MaximumStrainSettings.EvaluateShearTwoThreeFailure *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether failure is evaluated for the out-of-plane shear e23. The corresponding failure
: label is ‘e23’.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStrainSettings.MaterialOneDirectionFailureWeightingFactor"></a>

### *property* MaximumStrainSettings.MaterialOneDirectionFailureWeightingFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the failure criterion in the material 1 direction.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStrainSettings.MaterialThreeDirectionFailureWeightingFactor"></a>

### *property* MaximumStrainSettings.MaterialThreeDirectionFailureWeightingFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the failure criterion in the out-of-plane direction.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStrainSettings.MaterialTwoDirectionFailureWeightingFactor"></a>

### *property* MaximumStrainSettings.MaterialTwoDirectionFailureWeightingFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the failure criterion in the material 2 direction.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStrainSettings.OverrideMaterial"></a>

### *property* MaximumStrainSettings.OverrideMaterial *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether the global strain limits are used, overriding material-specific limits.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStrainSettings.ShearLimitOneThree"></a>

### *property* MaximumStrainSettings.ShearLimitOneThree *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the global out-of-plane shear strain limit (eSxz).
: Only used if OverrideMaterial is true.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStrainSettings.ShearLimitOneTwo"></a>

### *property* MaximumStrainSettings.ShearLimitOneTwo *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the global in-plane shear strain limit (eSxy).
: Only used if OverrideMaterial is true.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStrainSettings.ShearLimitTwoThree"></a>

### *property* MaximumStrainSettings.ShearLimitTwoThree *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the global out-of-plane shear strain limit (eSyz).
: Only used if OverrideMaterial is true.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStrainSettings.ShearOneThreeFailureWeightingFactor"></a>

### *property* MaximumStrainSettings.ShearOneThreeFailureWeightingFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for failure due to out-of-plane shear e13.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStrainSettings.ShearOneTwoFailureWeightingFactor"></a>

### *property* MaximumStrainSettings.ShearOneTwoFailureWeightingFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for failure due to in-plane shear e12.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStrainSettings.ShearTwoThreeFailureWeightingFactor"></a>

### *property* MaximumStrainSettings.ShearTwoThreeFailureWeightingFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for failure due to out-of-plane shear e23.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStrainSettings.TensileLimitMaterialOneDirection"></a>

### *property* MaximumStrainSettings.TensileLimitMaterialOneDirection *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the global tensile strain limit in the material 1 direction (eXt).
: Only used if OverrideMaterial is true.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStrainSettings.TensileLimitMaterialThreeDirection"></a>

### *property* MaximumStrainSettings.TensileLimitMaterialThreeDirection *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the global tensile strain limit in the out-of-plane direction (eZt).
: Only used if OverrideMaterial is true.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStrainSettings.TensileLimitMaterialTwoDirection"></a>

### *property* MaximumStrainSettings.TensileLimitMaterialTwoDirection *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the global tensile strain limit in the material 2 direction (eYt).
: Only used if OverrideMaterial is true.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MaximumStrainSettings.Reset"></a>

### MaximumStrainSettings.Reset()

Resets the settings to their default values.

<!-- !! processed by numpydoc !! -->

