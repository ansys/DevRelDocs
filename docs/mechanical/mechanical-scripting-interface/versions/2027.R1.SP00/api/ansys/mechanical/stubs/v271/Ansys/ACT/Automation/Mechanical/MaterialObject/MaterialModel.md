# `MaterialModel`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MaterialObject.MaterialModel"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MaterialObject.MaterialModel

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

The material model class holds the data for a particular material model. Examples of a material model would be;: density, isotropic elasticity, or gasket model.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Properties

| Name | Description |
|---------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| [`MaterialProperty`](#MaterialModel.MaterialProperty)         | The MaterialModel is represented by a IMaterialProperty (e.g. Gasket Model) or an IMaterialPropertyData (e.g. Isotropic Elasticity)   |
| [`MaterialPropertyData`](#MaterialModel.MaterialPropertyData) | MaterialPropertyData property.                                                                                                        |
| [`Name`](#MaterialModel.Name)                                 | Gets the name that identifies the material model                                                                                      |
| [`Suppressed`](#MaterialModel.Suppressed)                     | Gets or sets whether this material model should be used in the analysis.                                                              |

<a id="property-detail"></a>

## Property detail

<a id="MaterialModel.MaterialProperty"></a>

### *property* MaterialModel.MaterialProperty *: Ansys.EngineeringData.Material.IMaterialProperty | [None](https://docs.python.org/3/builtins/constants.html#None)*

The MaterialModel is represented by a IMaterialProperty (e.g. Gasket Model) or an IMaterialPropertyData (e.g. Isotropic Elasticity)

<!-- !! processed by numpydoc !! -->

<a id="MaterialModel.MaterialPropertyData"></a>

### *property* MaterialModel.MaterialPropertyData *: Ansys.EngineeringData.Material.IMaterialPropertyData | [None](https://docs.python.org/3/builtins/constants.html#None)*

MaterialPropertyData property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialModel.Name"></a>

### *property* MaterialModel.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the name that identifies the material model

<!-- !! processed by numpydoc !! -->

<a id="MaterialModel.Suppressed"></a>

### *property* MaterialModel.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether this material model should be used in the analysis.

<!-- !! processed by numpydoc !! -->

