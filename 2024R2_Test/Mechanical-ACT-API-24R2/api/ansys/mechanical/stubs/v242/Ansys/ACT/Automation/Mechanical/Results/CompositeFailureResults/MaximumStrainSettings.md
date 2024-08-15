# `MaximumStrainSettings`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.MaximumStrainSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines the configuration for the Maximum Strain failure criterion for reinforced materials.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------|------------------------------------------------|
| `Reset`   | Resets the settings to their default values.   |

### Properties

| Name | Description |
|------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| `EvaluateMaterialOneDirectionFailure`          | Gets or sets whether the failure criterion is evaluated in the material 1                           |
| `MaterialOneDirectionFailureWeightingFactor`   | Gets or sets the weighting factor for the failure criterion in the material 1 direction.            |
| `EvaluateMaterialTwoDirectionFailure`          | Gets or sets whether the failure criterion is evaluated in the material 2                           |
| `MaterialTwoDirectionFailureWeightingFactor`   | Gets or sets the weighting factor for the failure criterion in the material 2 direction.            |
| `EvaluateMaterialThreeDirectionFailure`        | Gets or sets whether the failure criterion is evaluated in the out-of-plane                         |
| `MaterialThreeDirectionFailureWeightingFactor` | Gets or sets the weighting factor for the failure criterion in the out-of-plane direction.          |
| `EvaluateShearOneTwoFailure`                   | Gets or sets whether failure is evaluated for the in-plane shear e12. The corresponding failure     |
| `ShearOneTwoFailureWeightingFactor`            | Gets or sets the weighting factor for failure due to in-plane shear e12.                            |
| `EvaluateShearOneThreeFailure`                 | Gets or sets whether failure is evaluated for the out-of-plane shear e13. The corresponding failure |
| `ShearOneThreeFailureWeightingFactor`          | Gets or sets the weighting factor for failure due to out-of-plane shear e13.                        |
| `EvaluateShearTwoThreeFailure`                 | Gets or sets whether failure is evaluated for the out-of-plane shear e23. The corresponding failure |
| `ShearTwoThreeFailureWeightingFactor`          | Gets or sets the weighting factor for failure due to out-of-plane shear e23.                        |
| `OverrideMaterial`                             | Gets or sets whether the global strain limits are used, overriding material-specific limits.        |
| `TensileLimitMaterialOneDirection`             | Gets or sets the global tensile strain limit in the material 1 direction (eXt).                     |
| `CompressiveLimitMaterialOneDirection`         | Gets or sets the global compressive strain limit in the material 1 direction (eXc).                 |
| `TensileLimitMaterialTwoDirection`             | Gets or sets the global tensile strain limit in the material 2 direction (eYt).                     |
| `CompressiveLimitMaterialTwoDirection`         | Gets or sets the global compressive strain limit in the material 2 direction (eYc).                 |
| `TensileLimitMaterialThreeDirection`           | Gets or sets the global tensile strain limit in the out-of-plane direction (eZt).                   |
| `CompressiveLimitMaterialThreeDirection`       | Gets or sets the global compressive strain limit in the out-of-plane direction (eZc).               |
| `ShearLimitOneTwo`                             | Gets or sets the global in-plane shear strain limit (eSxy).                                         |
| `ShearLimitOneThree`                           | Gets or sets the global out-of-plane shear strain limit (eSxz).                                     |
| `ShearLimitTwoThree`                           | Gets or sets the global out-of-plane shear strain limit (eSyz).                                     |

<a id="property-detail"></a>

## Property detail

### *property* MaximumStrainSettings.EvaluateMaterialOneDirectionFailure *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether the failure criterion is evaluated in the material 1
: direction. The corresponding failure label is 'e1'.

<!-- !! processed by numpydoc !! -->

### *property* MaximumStrainSettings.MaterialOneDirectionFailureWeightingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the failure criterion in the material 1 direction.

<!-- !! processed by numpydoc !! -->

### *property* MaximumStrainSettings.EvaluateMaterialTwoDirectionFailure *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether the failure criterion is evaluated in the material 2
: direction. The corresponding failure label is 'e2'.

<!-- !! processed by numpydoc !! -->

### *property* MaximumStrainSettings.MaterialTwoDirectionFailureWeightingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the failure criterion in the material 2 direction.

<!-- !! processed by numpydoc !! -->

### *property* MaximumStrainSettings.EvaluateMaterialThreeDirectionFailure *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether the failure criterion is evaluated in the out-of-plane
: direction. The corresponding failure label is 'e3'.

<!-- !! processed by numpydoc !! -->

### *property* MaximumStrainSettings.MaterialThreeDirectionFailureWeightingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the failure criterion in the out-of-plane direction.

<!-- !! processed by numpydoc !! -->

### *property* MaximumStrainSettings.EvaluateShearOneTwoFailure *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether failure is evaluated for the in-plane shear e12. The corresponding failure
: label is 'e12'.

<!-- !! processed by numpydoc !! -->

### *property* MaximumStrainSettings.ShearOneTwoFailureWeightingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for failure due to in-plane shear e12.

<!-- !! processed by numpydoc !! -->

### *property* MaximumStrainSettings.EvaluateShearOneThreeFailure *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether failure is evaluated for the out-of-plane shear e13. The corresponding failure
: label is 'e13'.

<!-- !! processed by numpydoc !! -->

### *property* MaximumStrainSettings.ShearOneThreeFailureWeightingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for failure due to out-of-plane shear e13.

<!-- !! processed by numpydoc !! -->

### *property* MaximumStrainSettings.EvaluateShearTwoThreeFailure *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether failure is evaluated for the out-of-plane shear e23. The corresponding failure
: label is 'e23'.

<!-- !! processed by numpydoc !! -->

### *property* MaximumStrainSettings.ShearTwoThreeFailureWeightingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for failure due to out-of-plane shear e23.

<!-- !! processed by numpydoc !! -->

### *property* MaximumStrainSettings.OverrideMaterial *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether the global strain limits are used, overriding material-specific limits.

<!-- !! processed by numpydoc !! -->

### *property* MaximumStrainSettings.TensileLimitMaterialOneDirection *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the global tensile strain limit in the material 1 direction (eXt).
: Only used if OverrideMaterial is true.

<!-- !! processed by numpydoc !! -->

### *property* MaximumStrainSettings.CompressiveLimitMaterialOneDirection *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the global compressive strain limit in the material 1 direction (eXc).
: Only used if OverrideMaterial is true.

<!-- !! processed by numpydoc !! -->

### *property* MaximumStrainSettings.TensileLimitMaterialTwoDirection *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the global tensile strain limit in the material 2 direction (eYt).
: Only used if OverrideMaterial is true.

<!-- !! processed by numpydoc !! -->

### *property* MaximumStrainSettings.CompressiveLimitMaterialTwoDirection *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the global compressive strain limit in the material 2 direction (eYc).
: Only used if OverrideMaterial is true.

<!-- !! processed by numpydoc !! -->

### *property* MaximumStrainSettings.TensileLimitMaterialThreeDirection *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the global tensile strain limit in the out-of-plane direction (eZt).
: Only used if OverrideMaterial is true.

<!-- !! processed by numpydoc !! -->

### *property* MaximumStrainSettings.CompressiveLimitMaterialThreeDirection *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the global compressive strain limit in the out-of-plane direction (eZc).
: Only used if OverrideMaterial is true.

<!-- !! processed by numpydoc !! -->

### *property* MaximumStrainSettings.ShearLimitOneTwo *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the global in-plane shear strain limit (eSxy).
: Only used if OverrideMaterial is true.

<!-- !! processed by numpydoc !! -->

### *property* MaximumStrainSettings.ShearLimitOneThree *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the global out-of-plane shear strain limit (eSxz).
: Only used if OverrideMaterial is true.

<!-- !! processed by numpydoc !! -->

### *property* MaximumStrainSettings.ShearLimitTwoThree *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the global out-of-plane shear strain limit (eSyz).
: Only used if OverrideMaterial is true.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### MaximumStrainSettings.Reset()

Resets the settings to their default values.

<!-- !! processed by numpydoc !! -->

