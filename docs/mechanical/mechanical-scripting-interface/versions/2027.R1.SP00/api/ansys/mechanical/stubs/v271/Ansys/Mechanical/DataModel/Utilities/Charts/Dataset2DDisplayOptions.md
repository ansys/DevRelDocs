# `Dataset2DDisplayOptions`

<a id="ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Utilities.Charts.Dataset2DDisplayOptions"></a>

#### *class* Ansys.Mechanical.DataModel.Utilities.Charts.Dataset2DDisplayOptions

<a id="Dataset2DDisplayOptions"></a>

### *class* Dataset2DDisplayOptions(variable: Ansys.Common.Interop.DSUtils.IDS2DDatasetDisplayOptions)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

A class that exposes methods/properties to customize the display of a dataset on the chart.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| [`CopySettingsFrom`](#Dataset2DDisplayOptions.CopySettingsFrom)   | Copies the settings of a Dataset2DDisplayOptions reference to this Dataset2DDisplayOptions .   |

### Properties

| Name | Description |
|-------------------------------------------------------------|-------------------------------------------------------|
| [`Color`](#Color)   | Gets or sets the Dataset2D Color                      |
| [`DatasetType`](#Dataset2DDisplayOptions.DatasetType)       | DatasetType property.                                 |
| [`IsVisible`](#Dataset2DDisplayOptions.IsVisible)           | Gets or sets the visibility of the Dataset2D          |
| [`LineThickness`](#Dataset2DDisplayOptions.LineThickness)   | Gets or sets the Dataset2D line thickness (in pixels) |
| [`LineType`](#Dataset2DDisplayOptions.LineType)             | Gets or sets the Dataset2D Line display type          |
| [`MarkerShape`](#Dataset2DDisplayOptions.MarkerShape)       | Gets or sets the Dataset2D marker shape               |
| [`MarkerSize`](#Dataset2DDisplayOptions.MarkerSize)         | Gets or sets the Dataset2D marker size (in pixels)    |
| [`Name`](#Dataset2DDisplayOptions.Name)                     | Gets or sets the Dataset2D name                       |

<a id="property-detail"></a>

## Property detail

<a id="Dataset2DDisplayOptions.Color"></a>

### *property* Dataset2DDisplayOptions.Color *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Dataset2D Color

<!-- !! processed by numpydoc !! -->

<a id="Dataset2DDisplayOptions.DatasetType"></a>

### *property* Dataset2DDisplayOptions.DatasetType *: Ansys.Mechanical.DataModel.MechanicalEnums.Charts.Dataset2D.Chart2DDatasetType | [None](https://docs.python.org/3/builtins/constants.html#None)*

DatasetType property.

<!-- !! processed by numpydoc !! -->

<a id="Dataset2DDisplayOptions.IsVisible"></a>

### *property* Dataset2DDisplayOptions.IsVisible *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the visibility of the Dataset2D

<!-- !! processed by numpydoc !! -->

<a id="Dataset2DDisplayOptions.LineThickness"></a>

### *property* Dataset2DDisplayOptions.LineThickness *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Dataset2D line thickness (in pixels)

An ArgumentException is thrown for values less than 1 and greater than 10.

<!-- !! processed by numpydoc !! -->

<a id="Dataset2DDisplayOptions.LineType"></a>

### *property* Dataset2DDisplayOptions.LineType *: [Ansys.Mechanical.DataModel.MechanicalEnums.Charts.Dataset2D.LineType](../../MechanicalEnums/Charts/Dataset2D/LineType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.Charts.Dataset2D.LineType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Dataset2D Line display type

<!-- !! processed by numpydoc !! -->

<a id="Dataset2DDisplayOptions.MarkerShape"></a>

### *property* Dataset2DDisplayOptions.MarkerShape *: [Ansys.Mechanical.DataModel.MechanicalEnums.Charts.Dataset2D.MarkerShape](../../MechanicalEnums/Charts/Dataset2D/MarkerShape.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.Charts.Dataset2D.MarkerShape) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Dataset2D marker shape

<!-- !! processed by numpydoc !! -->

<a id="Dataset2DDisplayOptions.MarkerSize"></a>

### *property* Dataset2DDisplayOptions.MarkerSize *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Dataset2D marker size (in pixels)

<!-- !! processed by numpydoc !! -->

<a id="Dataset2DDisplayOptions.Name"></a>

### *property* Dataset2DDisplayOptions.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Dataset2D name

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Dataset2DDisplayOptions.CopySettingsFrom"></a>

### Dataset2DDisplayOptions.CopySettingsFrom(input_display_options: [Ansys.Mechanical.DataModel.Utilities.Charts.Dataset2DDisplayOptions](#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Utilities.Charts.Dataset2DDisplayOptions)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the settings of a Dataset2DDisplayOptions reference to this Dataset2DDisplayOptions .

<!-- !! processed by numpydoc !! -->

