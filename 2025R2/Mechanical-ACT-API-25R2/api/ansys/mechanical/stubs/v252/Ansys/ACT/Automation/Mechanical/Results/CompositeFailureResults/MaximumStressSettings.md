# `MaximumStressSettings`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.MaximumStressSettings"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.MaximumStressSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines the configuration for the Maximum Stress failure criterion for reinforced materials.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------|------------------------------------------------|
| [`Reset`](#MaximumStressSettings.Reset)   | Resets the settings to their default values.   |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| [`EvaluateMaterialOneDirectionFailure`](#MaximumStressSettings.EvaluateMaterialOneDirectionFailure)                   | Gets or sets whether the failure criterion is evaluated in the material 1 direction.       |
| [`EvaluateMaterialThreeDirectionFailure`](#MaximumStressSettings.EvaluateMaterialThreeDirectionFailure)               | Gets or sets whether the failure criterion is evaluated in the out-of-plane direction.     |
| [`EvaluateMaterialTwoDirectionFailure`](#MaximumStressSettings.EvaluateMaterialTwoDirectionFailure)                   | Gets or sets whether the failure criterion is evaluated in the material 2 direction.       |
| [`EvaluateShearOneThreeFailure`](#MaximumStressSettings.EvaluateShearOneThreeFailure)                                 | Gets or sets whether failure is evaluated for the out-of-plane shear s13.                  |
| [`EvaluateShearOneTwoFailure`](#MaximumStressSettings.EvaluateShearOneTwoFailure)                                     | Gets or sets whether failure is evaluated for the in-plane shear s12.                      |
| [`EvaluateShearTwoThreeFailure`](#MaximumStressSettings.EvaluateShearTwoThreeFailure)                                 | Gets or sets whether failure is evaluated for the out-of-plane shear s23.                  |
| [`MaterialOneDirectionFailureWeightingFactor`](#MaximumStressSettings.MaterialOneDirectionFailureWeightingFactor)     | Gets or sets the weighting factor for the failure criterion in the material 1 direction.   |
| [`MaterialThreeDirectionFailureWeightingFactor`](#MaximumStressSettings.MaterialThreeDirectionFailureWeightingFactor) | Gets or sets the weighting factor for the failure criterion in the out-of-plane direction. |
| [`MaterialTwoDirectionFailureWeightingFactor`](#MaximumStressSettings.MaterialTwoDirectionFailureWeightingFactor)     | Gets or sets the weighting factor for the failure criterion in the material 2 direction.   |
| [`ShearOneThreeFailureWeightingFactor`](#MaximumStressSettings.ShearOneThreeFailureWeightingFactor)                   | Gets or sets the weighting factor for failure due to out-of-plane shear s13.               |
| [`ShearOneTwoFailureWeightingFactor`](#MaximumStressSettings.ShearOneTwoFailureWeightingFactor)                       | Gets or sets the weighting factor for failure due to in-plane shear s12.                   |
| [`ShearTwoThreeFailureWeightingFactor`](#MaximumStressSettings.ShearTwoThreeFailureWeightingFactor)                   | Gets or sets the weighting factor for failure due to out-of-plane shear s23.               |

<a id="property-detail"></a>

## Property detail

<a id="MaximumStressSettings.EvaluateMaterialOneDirectionFailure"></a>

### *property* MaximumStressSettings.EvaluateMaterialOneDirectionFailure *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether the failure criterion is evaluated in the material 1 direction.
: The corresponding failure label is ‘s1’.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStressSettings.EvaluateMaterialThreeDirectionFailure"></a>

### *property* MaximumStressSettings.EvaluateMaterialThreeDirectionFailure *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether the failure criterion is evaluated in the out-of-plane direction.
: The corresponding failure label is ‘s3’.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStressSettings.EvaluateMaterialTwoDirectionFailure"></a>

### *property* MaximumStressSettings.EvaluateMaterialTwoDirectionFailure *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether the failure criterion is evaluated in the material 2 direction.
: The corresponding failure label is ‘s2’.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStressSettings.EvaluateShearOneThreeFailure"></a>

### *property* MaximumStressSettings.EvaluateShearOneThreeFailure *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether failure is evaluated for the out-of-plane shear s13.
: The corresponding failure label is ‘s13’.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStressSettings.EvaluateShearOneTwoFailure"></a>

### *property* MaximumStressSettings.EvaluateShearOneTwoFailure *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether failure is evaluated for the in-plane shear s12.
: The corresponding failure label is ‘s12’.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStressSettings.EvaluateShearTwoThreeFailure"></a>

### *property* MaximumStressSettings.EvaluateShearTwoThreeFailure *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether failure is evaluated for the out-of-plane shear s23.
: The corresponding failure label is ‘s23’.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStressSettings.MaterialOneDirectionFailureWeightingFactor"></a>

### *property* MaximumStressSettings.MaterialOneDirectionFailureWeightingFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the failure criterion in the material 1 direction.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStressSettings.MaterialThreeDirectionFailureWeightingFactor"></a>

### *property* MaximumStressSettings.MaterialThreeDirectionFailureWeightingFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the failure criterion in the out-of-plane direction.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStressSettings.MaterialTwoDirectionFailureWeightingFactor"></a>

### *property* MaximumStressSettings.MaterialTwoDirectionFailureWeightingFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for the failure criterion in the material 2 direction.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStressSettings.ShearOneThreeFailureWeightingFactor"></a>

### *property* MaximumStressSettings.ShearOneThreeFailureWeightingFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for failure due to out-of-plane shear s13.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStressSettings.ShearOneTwoFailureWeightingFactor"></a>

### *property* MaximumStressSettings.ShearOneTwoFailureWeightingFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for failure due to in-plane shear s12.

<!-- !! processed by numpydoc !! -->

<a id="MaximumStressSettings.ShearTwoThreeFailureWeightingFactor"></a>

### *property* MaximumStressSettings.ShearTwoThreeFailureWeightingFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the weighting factor for failure due to out-of-plane shear s23.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MaximumStressSettings.Reset"></a>

### MaximumStressSettings.Reset() → [None](https://docs.python.org/3/library/constants.html#None)

Resets the settings to their default values.

<!-- !! processed by numpydoc !! -->

